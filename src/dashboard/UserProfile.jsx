import { useState } from 'react';
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';

function UserProfile() {
  const [user, setUser] = useState({
    profilePicture: 'https://via.placeholder.com/150', // Replace with actual image URL
    username: 'JohnDoe',
    bio: 'Frontend Developer | Lover of React',
    email: 'johndoe@example.com',
    location: 'New York, USA',
    interests: ['React', 'JavaScript', 'Web Development'],
    // Add more mock data as needed
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setUser({ ...editedUser });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedUser({ ...user });
    setIsEditing(false);
  };

  return (
    <div className=" bg-white shadow rounded-md">
        <DashboardNavbar/>
        <div className="flex space-x-4 space-y-4 mb-4">
            <DashboardSidebar></DashboardSidebar>
			<div>
				<div className='flex'>
					<img className="w-16 h-16 rounded-full"
					src={editedUser.profilePicture}
					alt="Profile"
					/>
					<div>
						<h2 className="text-xl font-semibold">
						{isEditing ? (
						<input
							type="text"
							name="username"
							value={editedUser.username}
							onChange={handleInputChange}
							className="border-b border-gray-300 focus:outline-none focus:border-blue-500"
						/>
						) : (
						editedUser.username
						)}
						</h2>
						{isEditing ? (
							<textarea
							name="bio"
							value={editedUser.bio}
							onChange={handleInputChange}
							className="text-gray-500 resize-none border-b border-gray-300 focus:outline-none focus:border-blue-500"
							/>
						) : (
							<p className="text-gray-500">{editedUser.bio}</p>
						)}
					</div>
				</div>
				<div>
					<p>
						<strong>Email:</strong> {editedUser.email}
					</p>
					<p>
						<strong>Location:</strong> {editedUser.location}
					</p>
					<p>
						<strong>Interests:</strong>{' '}
						{editedUser.interests.join(', ')}
					</p>
					{isEditing ? (
					<div className="mt-4">
						<button onClick={handleSave}
						className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2"
						>
							Save
						</button>
						<button onClick={handleCancel}
						className="border border-gray-300 px-3 py-1 rounded-md"
						>
							Cancel
						</button>
					</div>
					) : (
					<button onClick={handleEdit}
						className="mt-4 bg-gray-300 text-gray-700 px-3 py-1 rounded-md">
						Edit Profile
					</button>
					)}
				</div>
			</div>
            
        </div>
    </div>
  );
}

export default UserProfile;
