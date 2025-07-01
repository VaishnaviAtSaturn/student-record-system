import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await api.post('/auth/login', form);
    console.log('Login success:', res.data); 
    const token = res.data.token;
    localStorage.setItem('token', token);
    toast.success('Login successful!');
    navigate('/');
  } catch (err) {
    console.log('Login failed:', err.response?.data); // 🔍 debug line
    toast.error(err.response?.data?.message || 'Login failed');
  }
};

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
                {['email', 'password'].map((field) => (
                    <input
                        key={field}
                        type={field === 'password' ? 'password' : 'text'}
                        name={field}
                        placeholder={field}
                        value={form[field]}
                        onChange={handleChange}
                        className="w-full p-2 mb-4 border rounded"
                        required
                    />
                ))}
                <button className="w-full bg-green-600 text-white py-2 rounded">Login</button>
            </form>
        </div>
    );
};

export default Login;
