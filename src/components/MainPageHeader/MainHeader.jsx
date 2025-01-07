import React, { useState } from 'react';
import logo from '../Logos and icons/FLIXXER.png'; 
import HeaderMenu from './HeaderMenu';


const MainHeader = () => {
      const [profileHovered, setProfileHovered] = useState(false);

  return (
    <header style={headerStyle}>
      <img src={logo} alt="Logo" style={logoStyle} />
      <HeaderMenu />
      <div
              style={profileContainerStyle}
              onMouseEnter={() => setProfileHovered(true)}
              onMouseLeave={() => setProfileHovered(false)}
            >
              <img
                src="https://castingfrontier.com/wp-content/uploads/2021/03/shutterstock_1495410191-scaled.jpg" // Replace with your profile image URL
                alt="Profile"
                style={profileHovered ? { ...profileImageStyle, ...profileImageHoverStyle } : profileImageStyle}
              />
              {profileHovered && (
                  <div style={profileOptionsStyle}>
                      <ul style={profileOptionsListStyle}>
                          <li style={profileMenuItemStyle}>My Profile</li>
                          <li style={profileMenuItemStyle}>Settings</li>
                          <li style={profileMenuItemStyle}>Logout</li>
                  </ul>
                </div>
              )}
            </div>
    </header>
  );
};

const headerStyle = {
  width: '100%',
  height: '60px',
  backgroundColor: '#000000',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0rem',
};


const logoStyle = {
  height: '60px', // Adjust the height to fit the header
  marginRight: '2rem', // Space between logo and text
  padding: '.5rem',
  paddingTop: '1.5rem',
};

const titleStyle = {
  fontSize: '1.5rem', // Adjust font size
};

const profileContainerStyle = {
  position: 'relative', // Needed for positioning the dropdown menu
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer', // Show pointer cursor on hover
  padding: '.5rem',
  paddingTop: '1.5rem',
};

const profileImageStyle = {
  width: '60px', // Set the size of the profile image
  height: '60px',
  borderRadius: '50%', // Make the image round
  marginRight: '1rem', // Add space between image and menu
  objectFit: 'cover',
  transition: 'all 0.3s ease',
};

const profileImageHoverStyle = {
  filter: 'grayscale(100%)',    // Remove greyscale on hover (restores color)
  backgroundColor: '#555',    // Similar background color to menu hover
};


const profileOptionsStyle = {
  position: 'absolute',
  top: '100%',
  right: '0',
  backgroundColor: '#333',
  color: 'white',
  borderRadius: '5px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
  width: '150px',
  zIndex: 10,
};

const profileOptionsListStyle = {
  listStyleType: 'none', // Remove bullets
  margin: 0,
  padding: 0,
};

const profileMenuItemStyle = {
  padding: '10px 20px', // Same padding as menu items
  cursor: 'pointer',   // Cursor pointer for interactivity
  fontSize: '1rem',     // Same font size as menu items
  color: 'white',       // White text color
  transition: 'background-color 0.3s ease', // Smooth transition for background color change
};

const profileMenuItemHoverStyle = {
  backgroundColor: '#555', // Same hover color as menu items
};

export default MainHeader;
