import React from 'react';

const Profile = ({ user, form }) => {
  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <h2>Your Profile</h2>
      <p>Email: {user.email}</p>
      <p>Name: {form.name}</p>
      <p>SIN: {form.sin}</p>
      <p>Department: {form.dep}</p>
    </div>
  );
};

export default Profile;
