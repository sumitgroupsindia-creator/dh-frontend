import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach token to every request
api.interceptors.request.use((config) => {
  const token = Cookies.get('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle 401
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      Cookies.remove('token');
      Cookies.remove('user');
      if (typeof window !== 'undefined' && !window.location.pathname.includes('/login')) {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  },
);

export default api;

// Auth
export const authApi = {
  login: (email: string, password: string) =>
    api.post('/auth/login', { email, password }),
  me: () => api.get('/auth/me'),
};

// Users
export const usersApi = {
  getAll: () => api.get('/users'),
  create: (data: { name: string; email: string; password: string; role: string }) =>
    api.post('/users', data),
  delete: (id: string) => api.delete(`/users/${id}`),
};

// Records
export const recordsApi = {
  getAll: (params?: any) => api.get('/records', { params }),
  getOne: (id: string) => api.get(`/records/${id}`),
  create: (data: any) => api.post('/records', data),
  update: (id: string, data: any) => api.put(`/records/${id}`, data),
  delete: (id: string) => api.delete(`/records/${id}`),
  exportCsv: (params?: any) =>
    api.get('/records/export/csv', { params, responseType: 'blob' }),
  exportExcel: (params?: any) =>
    api.get('/records/export/excel', { params, responseType: 'blob' }),
};

// Dashboard
export const dashboardApi = {
  getStats: () => api.get('/dashboard/stats'),
};
