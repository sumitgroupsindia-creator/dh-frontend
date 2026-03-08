'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { recordsApi } from '@/lib/api';
import toast from 'react-hot-toast';

export default function NewRecordPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    clientName: '',
    mobile: '',
    address: '',
    loanType: '',
    vehicleType: '',
    vehicleModel: '',
    vehicleNumber: '',
    loanAmount: '',
    description: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await recordsApi.create({
        ...formData,
        loanAmount: formData.loanAmount ? Number(formData.loanAmount) : undefined,
        description: formData.description || undefined,
      });
      toast.success('Record created successfully!');
      router.push('/dashboard/records');
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to create record');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Add New Record</h2>

      <div className="card">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Client Name</label>
            <input
              type="text"
              required
              className="input-field"
              placeholder="Enter client name"
              value={formData.clientName}
              onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
            <input
              type="tel"
              required
              className="input-field"
              placeholder="Enter mobile number"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <textarea
              required
              className="input-field"
              rows={3}
              placeholder="Enter full address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Loan Type <span className="text-red-500">*</span></label>
            <select
              required
              className="input-field"
              value={formData.loanType}
              onChange={(e) => setFormData({ ...formData, loanType: e.target.value })}
            >
              <option value="">Select Type</option>
              <option value="Bike Loan">Bike Loan</option>
              <option value="Tractor Loan">Tractor Loan</option>
              <option value="Personal Loan">Personal Loan</option>
              <option value="Insurance">Insurance</option>
            </select>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type <span className="text-red-500">*</span></label>
              <input
                type="text"
                required
                className="input-field"
                placeholder="e.g. Bike, Tractor"
                value={formData.vehicleType}
                onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Model <span className="text-red-500">*</span></label>
              <input
                type="text"
                required
                className="input-field"
                placeholder="e.g. Splendor, Honda"
                value={formData.vehicleModel}
                onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Number <span className="text-red-500">*</span></label>
              <input
                type="text"
                required
                className="input-field"
                placeholder="e.g. RJ-14-AB-1234"
                value={formData.vehicleNumber}
                onChange={(e) => setFormData({ ...formData, vehicleNumber: e.target.value })}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount (₹) <span className="text-gray-400 text-xs">(Optional)</span></label>
              <input
                type="number"
                min={0}
                className="input-field"
                placeholder="Enter amount"
                value={formData.loanAmount}
                onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description <span className="text-gray-400 text-xs">(Optional)</span></label>
              <input
                type="text"
                className="input-field"
                placeholder="Any additional notes"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>
          </div>
          <div className="flex gap-3 pt-4">
            <button type="submit" disabled={loading} className="btn-primary disabled:opacity-50">
              {loading ? 'Creating...' : 'Create Record'}
            </button>
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
