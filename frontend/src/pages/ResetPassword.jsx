import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../utils/api';
import { toast } from 'react-toastify';

const ResetPassword = () => {
  const { email, otp } = useLocation().state || {};
  const navigate = useNavigate();
  const [password, setPassword] = useState('');

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await api.post('/auth/reset-password', {
      email,
      otp,
      newPassword: password,
    });
    toast.success('Password reset successful!');
    navigate('/login');
  } catch (err) {
    toast.error(err.response?.data?.message || 'Reset failed');
  }
};


  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <button className="w-full bg-green-600 text-white py-2 rounded">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
