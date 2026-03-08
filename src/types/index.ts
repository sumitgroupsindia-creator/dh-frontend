export interface User {
  id: string;
  _id?: string;
  name: string;
  email: string;
  role: 'admin' | 'team_member';
  createdAt?: string;
}

export interface Record {
  _id: string;
  clientName: string;
  mobile: string;
  address: string;
  loanType: string;
  vehicleType: string;
  vehicleModel: string;
  vehicleNumber: string;
  bankName?: string;
  loanAmount?: number;
  description?: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  createdBy: {
    _id: string;
    name: string;
    email: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface PaginatedRecords {
  records: Record[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface DashboardStats {
  totalRecords: number;
  pendingRecords: number;
  approvedRecords: number;
  rejectedRecords: number;
  loanTypeDistribution: Array<{
    _id: string;
    count: number;
    totalAmount: number;
  }>;
  recentRecords: Record[];
  teamMembers: number;
  recordsByMember: Array<{
    _id: string;
    name: string;
    count: number;
    totalAmount: number;
  }>;
}

export interface LoginResponse {
  access_token: string;
  user: User;
}
