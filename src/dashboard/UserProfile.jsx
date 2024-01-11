import { useEffect, useState } from 'react';
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';
import Footer from '../Footer';

import {firestore} from "../firebase.js"
import {doc, getDoc} from "firebase/firestore"


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
		<div className='flex gap-x-4 text-xl'>
			<img className="w-16 h-16 rounded-full"
			src={editedUser.profilePicture}
			alt="Profile"
			/>
			<div>
				{isEditing ? (
				<div className='flex flex-col gap-y-2 w-[300px]'>
					<input
						type="text"
						name="username"
						value={editedUser.username}
						onChange={handleInputChange}
						className="border-b border-gray-300 focus:border-blue-500"
					/>
					<input
						name="bio"
						value={editedUser.bio}
						onChange={handleInputChange}
						className="text-gray-500 resize-none border-b border-gray-300 focus:border-blue-500"
					/>
				</div>
				) : (
				<div>
					<h2 className="text-2xl font-semibold">
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
	handleInputChange: PropTypes.func.isRequired,
	handleSave: PropTypes.func.isRequired,
	handleCancel: PropTypes.func.isRequired,
}



function ProfileBody({editedUser, isEditing, handleEdit, handleInputChange, handleSave, handleCancel}){
	const fields = [
		{ label: 'Binusian ID', value: 'binusian_id' },
		{ label: 'Major', value: 'major' },
		{ label: 'Binus branch', value: 'binus_branch' },
		// { label: 'Date of Birth', value: 'dateOfBirth' },
		// { label: 'Joined at', value: 'joinedDate' },
		{ label: 'Email', value: 'email' },
		// { label: 'Password', value: 'password' },
		{ label: 'Location', value: 'location' },
		{ label: 'Interests', value: 'interests', isList: true },
		{ label: 'Age', value: 'age' },
	];
	return(
		<div className='flex flex-col gap-y-2'>
			{fields.map(field => (
				<div key={field.value} className='flex justify-between text-xl'>
					<label className="font-bold">{field.label}:</label>
					{isEditing ? (
					<input
						type="text"
						name={field.value}
						value={field.isList ? editedUser[field.value] : editedUser[field.value]}
						onChange={handleInputChange}
						className='w-[257px]'
					/>
					) : (
					<p className='w-[210px] text-black'>
						{field.isList ? editedUser[field.value] : editedUser[field.value]}
					</p>
					)}
				</div>
			))}
			{isEditing ? (
			<div className="mt-4 text-xl">
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
				className="mt-4 text-xl bg-gray-300 text-gray-700 px-3 py-1 rounded-md">
				Edit Profile
			</button>
			)}
		</div>
	)
}

const getProfileFirebase = async () => {
	const docRef = doc(firestore, "Users", "test")
	const docSnap = await getDoc(docRef)
	// console.log(docSnap.data())
	const document = docSnap.data()
	console.log(document)
	return document
	
}

function UserProfile() {
	const [user, setUser] = useState({
		// profilePicture: 'https://via.placeholder.com/150', // Replace with actual image URL
		username: 'John Doe',
		// dateOfBirth: '1990-01-01',
		// joinedDate: '2020-01-01',
		// password: "**********",
		// bio: 'Frontend Developer | Lover of React',
		// occupation: "Web developer",
		age: 35,
		binusian_id: "23456789",
		major: "Computer Science",
		binus_branch: "Senayan",
		email: 'johndoe@example.com',
		location: 'New York, USA',
		interests: 'React, JavaScript, Web Development',
		// Add more mock data as needed
	});

	const [isEditing, setIsEditing] = useState(false);
	const [editedUser, setEditedUser] = useState({ ...user });
	
	useEffect(() => {
		// getUsername().then((username) => setUsername(username))
		getProfileFirebase().then(
			(document) => setUser(document)
		)
		getProfileFirebase().then(
			(document) => setEditedUser(document)
		)
		// setEditedUser((prevUser) => ({...prevUser}))

	}, [])
	
	useEffect(() => {
		console.log(user)
		console.log(editedUser)
	}, [user, editedUser])
	

  

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
			<div className='flex justify-center items-center w-full'>
				<div className='flex flex-col justify-center'>
					<h1 className='text-center text-3xl font-bold mb-7'>Your Profile</h1>
					<div className='h-fit w-[450px] flex flex-col gap-y-3 p-5 border-2 rounded-lg'>
						<ProfileHeader
							editedUser={editedUser}
							isEditing={isEditing}
							handleInputChange={handleInputChange}
						/>
						<div className='border'></div>
						<ProfileBody
							editedUser={editedUser}
							isEditing={isEditing}
							handleEdit={handleEdit}
							handleSave={handleSave}
							handleCancel={handleCancel}
						/>
					</div>
				</div>
			</div>  
        </div>
		<Footer></Footer>
    </div>
  );
}

export default UserProfile;
