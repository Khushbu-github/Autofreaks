import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Upload, Image, LogOut, LayoutDashboard } from 'lucide-react';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/admin/login');
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 border-b border-gray-200 pb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                        <LayoutDashboard className="h-8 w-8 text-blue-600" />
                        Admin Dashboard
                    </h1>
                    <p className="text-gray-500 mt-1">Manage your website content</p>
                </div>
                <button onClick={handleLogout} className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors">
                    <LogOut className="h-4 w-4 mr-2" /> Logout
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Link to="/admin/gallery/upload" className="group block p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Upload className="h-32 w-32 text-blue-600 transform rotate-12" />
                    </div>
                    <div className="flex items-center relative z-10">
                        <div className="p-4 bg-blue-100 rounded-2xl mr-6 group-hover:scale-110 transition-transform">
                            <Upload className="h-8 w-8 text-blue-600" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Upload Images</h2>
                            <p className="text-gray-500 mt-2">Add new photos to the public gallery</p>
                        </div>
                    </div>
                </Link>

                <Link to="/admin/gallery/manage" className="group block p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Image className="h-32 w-32 text-green-600 transform -rotate-12" />
                    </div>
                    <div className="flex items-center relative z-10">
                        <div className="p-4 bg-green-100 rounded-2xl mr-6 group-hover:scale-110 transition-transform">
                            <Image className="h-8 w-8 text-green-600" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">Manage Gallery</h2>
                            <p className="text-gray-500 mt-2">View, edit, and delete existing photos</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};
export default Dashboard;
