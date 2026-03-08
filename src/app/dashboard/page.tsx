'use client';

import { useEffect, useState } from 'react';
import { dashboardApi } from '@/lib/api';
import { useAuth } from '@/context/AuthContext';
import { DashboardStats } from '@/types';
import {
  HiOutlineDocumentText,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
  HiOutlineUsers,
} from 'react-icons/hi';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';
import Link from 'next/link';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const { data } = await dashboardApi.getStats();
      setStats(data);
    } catch (err) {
      console.error('Failed to load stats:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-10 h-10 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!stats) return <p className="text-center text-gray-500">Failed to load dashboard data.</p>;

  const statCards = [
    {
      label: 'Total Records',
      value: stats.totalRecords,
      icon: HiOutlineDocumentText,
      color: 'bg-blue-500',
      bg: 'bg-blue-50',
    },
    {
      label: 'Pending',
      value: stats.pendingRecords,
      icon: HiOutlineClock,
      color: 'bg-yellow-500',
      bg: 'bg-yellow-50',
    },
    {
      label: 'Approved',
      value: stats.approvedRecords,
      icon: HiOutlineCheckCircle,
      color: 'bg-green-500',
      bg: 'bg-green-50',
    },
    {
      label: 'Rejected',
      value: stats.rejectedRecords,
      icon: HiOutlineXCircle,
      color: 'bg-red-500',
      bg: 'bg-red-50',
    },
  ];

  if (user?.role === 'admin') {
    statCards.push({
      label: 'Team Members',
      value: stats.teamMembers,
      icon: HiOutlineUsers,
      color: 'bg-purple-500',
      bg: 'bg-purple-50',
    });
  }

  // Doughnut Chart - Loan Type Distribution
  const loanChartData = {
    labels: stats.loanTypeDistribution.map((d) => d._id),
    datasets: [
      {
        data: stats.loanTypeDistribution.map((d) => d.count),
        backgroundColor: ['#2D2A7B', '#F7C948', '#F5A623', '#E8891D'],
        borderWidth: 0,
      },
    ],
  };

  // Bar Chart - Records by Team Member (admin only)
  const memberChartData = {
    labels: stats.recordsByMember.map((m) => m.name),
    datasets: [
      {
        label: 'Records',
        data: stats.recordsByMember.map((m) => m.count),
        backgroundColor: '#2D2B7F',
        borderRadius: 8,
      },
    ],
  };

  return (
    <div className="space-y-8">
      {/* Quick Actions */}
      <div className="flex flex-wrap gap-3">
        <Link href="/dashboard/records/new" className="btn-primary text-sm px-5 py-2.5 rounded-brand">
          + Add Record
        </Link>
        {user?.role === 'admin' && (
          <Link href="/dashboard/users/new" className="btn-outline text-sm px-5 py-2.5 rounded-brand">
            + Add Team Member
          </Link>
        )}
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {statCards.map((card) => (
          <div key={card.label} className={`card ${card.bg} border-none`}>
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 rounded-brand ${card.color} flex items-center justify-center shadow-sm`}>
                <card.icon className="w-5 h-5 text-white" />
              </div>
            </div>
            <p className="text-2xl font-extrabold text-gray-900 font-heading">{card.value}</p>
            <p className="text-sm text-gray-600">{card.label}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Loan Type Distribution */}
        <div className="card">
          <h3 className="text-lg font-bold text-gray-900 mb-4 font-heading">Loan Type Distribution</h3>
          <div className="w-64 h-64 mx-auto">
            {stats.loanTypeDistribution.length > 0 ? (
              <Doughnut
                data={loanChartData}
                options={{ responsive: true, maintainAspectRatio: true, plugins: { legend: { position: 'bottom' } } }}
              />
            ) : (
              <p className="text-center text-gray-400 mt-20">No data yet</p>
            )}
          </div>
        </div>

        {/* Records by Member (Admin) */}
        {user?.role === 'admin' && (
          <div className="card">
            <h3 className="text-lg font-bold text-gray-900 mb-4 font-heading">Records by Team Member</h3>
            <div className="h-64">
              {stats.recordsByMember.length > 0 ? (
                <Bar
                  data={memberChartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } },
                  }}
                />
              ) : (
                <p className="text-center text-gray-400 mt-20">No data yet</p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Recent Records */}
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900 font-heading">Recent Records</h3>
          <Link href="/dashboard/records" className="text-sm text-primary-500 hover:underline">
            View All →
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-600">Client</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-600">Mobile</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-600">Loan Type</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-600">Amount</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {stats.recentRecords.map((record) => (
                <tr key={record._id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{record.clientName}</td>
                  <td className="py-3 px-4 text-gray-600">{record.mobile}</td>
                  <td className="py-3 px-4 text-gray-600">{record.loanType}</td>
                  <td className="py-3 px-4 text-gray-900 font-medium">₹{record.loanAmount?.toLocaleString()}</td>
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
                </tr>
              ))}
              {stats.recentRecords.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center py-8 text-gray-400">
                    No records yet. Start by adding a new record.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
