import { useState } from 'react';
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';
import Footer from '../Footer';

import PropTypes from 'prop-types';
ProfileHeader.propTypes = {
	editedUser: PropTypes.shape({
		profilePicture: PropTypes.string,
		username: PropTypes.string,
		bio: PropTypes.string,
	}).isRequired,
	isEditing: PropTypes.bool.isRequired,
	handleInputChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	handleEdit: PropTypes.func.isRequired,
};

function ProfileHeader({editedUser,  isEditing, handleInputChange}){
	return(
		<div className='flex gap-x-4'>
			<img className="w-16 h-16 rounded-full"
			src={editedUser.profilePicture}
			alt="Profile"
			/>
			<div>
				{isEditing ? (
				<div>
					<input
						type="text"
						name="username"
						value={editedUser.username}
						onChange={handleInputChange}
						className="border-b border-gray-300 focus:outline-none focus:border-blue-500"
					/>
					<textarea
						name="bio"
						value={editedUser.bio}
						onChange={handleInputChange}
						className="text-gray-500 resize-none border-b border-gray-300 focus:outline-none focus:border-blue-500"
					/>
				</div>
				) : (
				<div>
					<h2 className="text-xl font-semibold">
						{editedUser.username}
					</h2>
					<p className="text-gray-500">{editedUser.bio}</p>
				</div>
				)}
			</div>
		</div>
	)
}

ProfileBody.propTypes = {
	editedUser: PropTypes.shape({
		binusian_id: PropTypes.string,
		major: PropTypes.string,
		binus_branch: PropTypes.string,
		dateOfBirth: PropTypes.string,
		joinedDate: PropTypes.string,
		email: PropTypes.string,
		password: PropTypes.string,
		location: PropTypes.string,
		interests: PropTypes.arrayOf(PropTypes.string),
		age: PropTypes.number,
	}).isRequired,
	isEditing: PropTypes.bool.isRequired,
	handleEdit: PropTypes.func.isRequired,
	handleSave: PropTypes.func.isRequired,
	handleCancel: PropTypes.func.isRequired,
}


function ProfileBody({editedUser, isEditing, handleEdit, handleSave, handleCancel}){
	return(
		<div className='flex flex-col gap-y-2'>
			<p>
				<strong>Binusian ID: </strong>
				{editedUser.binusian_id}
			</p>
			<p>
				<strong>Major: </strong>
				{editedUser.major}
			</p>
			<p>
				<strong>Binus branch: </strong>
				{editedUser.binus_branch}
			</p>
			<p>
				<strong>Date of Birth: </strong>
				{editedUser.dateOfBirth}
			</p>
			<p>
				<strong>Joined at: </strong>
				{editedUser.joinedDate}
			</p>
			<p>
				<strong>Email: </strong>
				{editedUser.email}
			</p>
			<p>
				<strong>Password: </strong>
				{editedUser.password}
			</p>
			
			<p>
				<strong>Location: </strong>
				{editedUser.location}
			</p>
			<p>
				<strong>Interests: </strong>{' '}
				{editedUser.interests.join(', ')}
			</p>
			<p>
				<strong>Age: </strong>
				{editedUser.age}
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
	)
}
function UserProfile() {
  const [user, setUser] = useState({
    profilePicture: 'https://via.placeholder.com/150', // Replace with actual image URL
    username: 'John Doe',
	dateOfBirth: '1990-01-01',
	joinedDate: '2020-01-01',
	password: "**********",
    bio: 'Frontend Developer | Lover of React',
	occupation: "Web developer",
	age: 35,
	binusian_id: "23456789",
	major: "Computer Science",
	binus_branch: "Senayan",
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
        <div className="flex space-x-4 space-y-4">
            <DashboardSidebar></DashboardSidebar>
			<div className='h-fit flex flex-col gap-y-5 p-5 border-2 rounded-lg'>
				<ProfileHeader
					editedUser={editedUser}
					isEditing={isEditing}
					handleInputChange={handleInputChange}
				/>
				<ProfileBody
					editedUser={editedUser}
					isEditing={isEditing}
					handleEdit={handleEdit}
					handleSave={handleSave}
					handleCancel={handleCancel}
				/>
			</div>            
        </div>
		<Footer></Footer>
    </div>
  );
}

export default UserProfile;
