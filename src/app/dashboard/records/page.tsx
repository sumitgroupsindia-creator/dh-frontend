'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { recordsApi } from '@/lib/api';
import { useAuth } from '@/context/AuthContext';
import { PaginatedRecords, Record } from '@/types';
import toast from 'react-hot-toast';
import {
  HiOutlineSearch,
  HiOutlinePencil,
  HiOutlineTrash,
  HiOutlineDownload,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from 'react-icons/hi';

export default function RecordsPage() {
  const [data, setData] = useState<PaginatedRecords | null>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [loanType, setLoanType] = useState('');
  const [status, setStatus] = useState('');
  const [page, setPage] = useState(1);
  const { user } = useAuth();

  const loadRecords = useCallback(async () => {
    setLoading(true);
    try {
      const params: any = { page, limit: 10 };
      if (search) params.search = search;
      if (loanType) params.loanType = loanType;
      if (status) params.status = status;
      const { data: res } = await recordsApi.getAll(params);
      setData(res);
    } catch (err) {
      toast.error('Failed to load records');
    } finally {
      setLoading(false);
    }
  }, [search, loanType, status, page]);

  useEffect(() => {
    loadRecords();
  }, [loadRecords]);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this record?')) return;
    try {
      await recordsApi.delete(id);
      toast.success('Record deleted');
      loadRecords();
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to delete');
    }
  };

  const handleExportCSV = async () => {
    try {
      const { data: blob } = await recordsApi.exportCsv();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.download = 'dh-financial-records.csv';
      link.click();
      toast.success('CSV downloaded!');
    } catch {
      toast.error('Export failed');
    }
  };

  const handleExportExcel = async () => {
    try {
      const { data: blob } = await recordsApi.exportExcel();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.download = 'dh-financial-records.xlsx';
      link.click();
      toast.success('Excel downloaded!');
    } catch {
      toast.error('Export failed');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900">
          {user?.role === 'admin' ? 'All Records' : 'My Records'}
        </h2>
        <div className="flex gap-2">
          <button onClick={handleExportCSV} className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 text-sm font-medium">
            <HiOutlineDownload className="w-4 h-4" /> CSV
          </button>
          <button onClick={handleExportExcel} className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm font-medium">
            <HiOutlineDownload className="w-4 h-4" /> Excel
          </button>
          <Link href="/dashboard/records/new" className="btn-primary text-sm px-4 py-2">
            + Add Record
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="relative">
            <HiOutlineSearch className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search client, mobile..."
              className="input-field pl-10"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            />
          </div>
          <select
            className="input-field"
            value={loanType}
            onChange={(e) => { setLoanType(e.target.value); setPage(1); }}
          >
            <option value="">All Loan Types</option>
            <option value="Bike Loan">Bike Loan</option>
            <option value="Tractor Loan">Tractor Loan</option>
            <option value="Personal Loan">Personal Loan</option>
            <option value="Insurance">Insurance</option>
          </select>
          <select
            className="input-field"
            value={status}
            onChange={(e) => { setStatus(e.target.value); setPage(1); }}
          >
            <option value="">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
          <button
            onClick={() => { setSearch(''); setLoanType(''); setStatus(''); setPage(1); }}
            className="text-sm text-primary-500 hover:underline"
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="card overflow-x-auto">
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-600">Client Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-600">Mobile</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-600">Address</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-600">Loan Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-600">Amount</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-600">Status</th>
                  {user?.role === 'admin' && (
                    <th className="text-left py-3 px-4 font-semibold text-gray-600">Created By</th>
                  )}
                  <th className="text-left py-3 px-4 font-semibold text-gray-600">Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.records.map((record) => (
                  <tr key={record._id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-900">{record.clientName}</td>
                    <td className="py-3 px-4 text-gray-600">{record.mobile}</td>
                    <td className="py-3 px-4 text-gray-600 max-w-[150px] truncate">{record.address}</td>
                    <td className="py-3 px-4 text-gray-600">{record.loanType}</td>
                    <td className="py-3 px-4 font-medium text-gray-900">₹{record.loanAmount?.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          record.status === 'Approved'
                            ? 'bg-green-100 text-green-700'
                            : record.status === 'Rejected'
                            ? 'bg-red-100 text-red-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {record.status}
                      </span>
                    </td>
                    {user?.role === 'admin' && (
                      <td className="py-3 px-4 text-gray-600">{record.createdBy?.name}</td>
                    )}
                    <td className="py-3 px-4 text-gray-500 text-xs">
                      {new Date(record.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <Link
                          href={`/dashboard/records/${record._id}/edit`}
                          className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <HiOutlinePencil className="w-4 h-4" />
                        </Link>
                        {user?.role === 'admin' && (
                          <button
                            onClick={() => handleDelete(record._id)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <HiOutlineTrash className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
                {data?.records.length === 0 && (
                  <tr>
                    <td colSpan={9} className="text-center py-12 text-gray-400">
                      No records found. Try adjusting your filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* Pagination */}
            {data && data.pagination.totalPages > 1 && (
              <div className="flex items-center justify-between mt-6 pt-4 border-t">
                <p className="text-sm text-gray-500">
                  Showing {((data.pagination.page - 1) * data.pagination.limit) + 1} to{' '}
                  {Math.min(data.pagination.page * data.pagination.limit, data.pagination.total)} of{' '}
                  {data.pagination.total} records
                </p>
                <div className="flex gap-2">
                  <button
                    disabled={page <= 1}
                    onClick={() => setPage(page - 1)}
                    className="p-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50"
                  >
                    <HiOutlineChevronLeft className="w-4 h-4" />
                  </button>
                  {Array.from({ length: data.pagination.totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setPage(i + 1)}
                      className={`w-9 h-9 rounded-lg text-sm font-medium ${
                        page === i + 1
                          ? 'bg-primary-500 text-white'
                          : 'border hover:bg-gray-50'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    disabled={page >= data.pagination.totalPages}
                    onClick={() => setPage(page + 1)}
                    className="p-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50"
                  >
                    <HiOutlineChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
