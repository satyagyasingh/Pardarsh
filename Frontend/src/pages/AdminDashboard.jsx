import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Folder, 
  PlusCircle,
  Edit,
  Trash2 
} from 'lucide-react';
import logo from '../assets/logo.png'

const AdminDashboard = () => {
  const [projects, setProjects] = useState([
    { 
      id: 1, 
      name: 'City Road Expansion', 
      contractor: 'BuildMaster Pvt Ltd', 
      status: 'In Progress', 
      totalCost: '₹5,20,00,000',
      startDate: '2024-01-15',
      endDate: '2024-12-31'
    },
    { 
      id: 2, 
      name: 'Water Treatment Plant', 
      contractor: 'AquaSolutions Inc.', 
      status: 'Pending Approval', 
      totalCost: '₹3,75,00,000',
      startDate: '2024-06-01',
      endDate: '2025-05-31'
    }
  ]);

  const [contractors, setContractors] = useState([
    {
      id: 1,
      name: 'BuildMaster Pvt Ltd',
      contactPerson: 'Rajesh Kumar',
      email: 'rajesh@buildmaster.com',
      phone: '+91 9876543210',
      completedProjects: 12,
      status: 'Active'
    },
    {
      id: 2,
      name: 'AquaSolutions Inc.',
      contactPerson: 'Priya Sharma',
      email: 'priya@aquasolutions.com',
      phone: '+91 9988776655',
      completedProjects: 8,
      status: 'Active'
    }
  ]);

  const [activeTab, setActiveTab] = useState('dashboard');

  const renderDashboardContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-100 p-4 rounded-lg">
                <h3 className="text-lg font-semibold">Total Projects</h3>
                <p className="text-3xl font-bold">{projects.length}</p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg">
                <h3 className="text-lg font-semibold">In Progress</h3>
                <p className="text-3xl font-bold">
                  {projects.filter(p => p.status === 'In Progress').length}
                </p>
              </div>
              <div className="bg-red-100 p-4 rounded-lg">
                <h3 className="text-lg font-semibold">Pending Approval</h3>
                <p className="text-3xl font-bold">
                  {projects.filter(p => p.status === 'Pending Approval').length}
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Recent Projects</h3>
              <table className="w-full bg-white shadow-md rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 text-left">Project Name</th>
                    <th className="p-3 text-left">Contractor</th>
                    <th className="p-3 text-left">Status</th>
                    <th className="p-3 text-left">Total Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map(project => (
                    <tr key={project.id} className="border-b">
                      <td className="p-3">{project.name}</td>
                      <td className="p-3">{project.contractor}</td>
                      <td className="p-3">
                        <span className={`
                          px-2 py-1 rounded-full text-xs font-semibold
                          ${project.status === 'In Progress' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}
                        `}>
                          {project.status}
                        </span>
                      </td>
                      <td className="p-3">{project.totalCost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'contractors':
        return (
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Manage Contractors</h2>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center">
                <PlusCircle className="mr-2" /> Add Contractor
              </button>
            </div>
            <div className="bg-white shadow-md rounded-lg">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 text-left">Contact Person</th>
                    <th className="p-3 text-left">Email</th>
                    <th className="p-3 text-left">Completed Projects</th>
                    <th className="p-3 text-left">Status</th>
                    <th className="p-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {contractors.map(contractor => (
                    <tr key={contractor.id} className="border-b">
                      <td className="p-3">{contractor.name}</td>
                      <td className="p-3">{contractor.contactPerson}</td>
                      <td className="p-3">{contractor.email}</td>
                      <td className="p-3">{contractor.completedProjects}</td>
                      <td className="p-3">
                        <span className={`
                          px-2 py-1 rounded-full text-xs font-semibold
                          ${contractor.status === 'Active' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}
                        `}>
                          {contractor.status}
                        </span>
                      </td>
                      <td className="p-3 flex space-x-2">
                        <button className="text-blue-500 hover:text-blue-700">
                          <Edit size={20} />
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          <Trash2 size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Project Management</h2>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center">
                <PlusCircle className="mr-2" /> Create New Project
              </button>
            </div>
            <div className="bg-white shadow-md rounded-lg">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3 text-left">Project Name</th>
                    <th className="p-3 text-left">Contractor</th>
                    <th className="p-3 text-left">Start Date</th>
                    <th className="p-3 text-left">End Date</th>
                    <th className="p-3 text-left">Total Cost</th>
                    <th className="p-3 text-left">Status</th>
                    <th className="p-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map(project => (
                    <tr key={project.id} className="border-b">
                      <td className="p-3">{project.name}</td>
                      <td className="p-3">{project.contractor}</td>
                      <td className="p-3">{project.startDate}</td>
                      <td className="p-3">{project.endDate}</td>
                      <td className="p-3">{project.totalCost}</td>
                      <td className="p-3">
                        <span className={`
                          px-2 py-1 rounded-full text-xs font-semibold
                          ${project.status === 'In Progress' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}
                        `}>
                          {project.status}
                        </span>
                      </td>
                      <td className="p-3 flex space-x-2">
                        <button className="text-blue-500 hover:text-blue-700">
                          <Edit size={20} />
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          <Trash2 size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className=" p-6 border-b">
          <img className='w-44' src={logo} alt="" />
        </div>
        <nav className="p-4">
          <ul>
            <li 
              className={`
                flex items-center p-3 mb-2 rounded cursor-pointer
                ${activeTab === 'dashboard' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}
              `}
              onClick={() => setActiveTab('dashboard')}
            >
              <LayoutDashboard className="mr-3" /> Dashboard
            </li>
            <li 
              className={`
                flex items-center p-3 mb-2 rounded cursor-pointer
                ${activeTab === 'contractors' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}
              `}
              onClick={() => setActiveTab('contractors')}
            >
              <Users className="mr-3" /> Contractors
            </li>
            <li 
              className={`
                flex items-center p-3 mb-2 rounded cursor-pointer
                ${activeTab === 'projects' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}
              `}
              onClick={() => setActiveTab('projects')}
            >
              <Folder className="mr-3" /> Projects
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto">
        {/* Top Navigation */}
        <div className="bg-white shadow-sm p-4 flex justify-between items-center">
          <input 
            type="text" 
            placeholder="Search projects..." 
            className="w-full max-w-md p-2 border rounded-lg"
          />
        </div>

        {/* Dynamic Content */}
        {renderDashboardContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;