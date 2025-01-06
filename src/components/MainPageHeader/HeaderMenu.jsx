import React, { useState } from 'react';
import './HeaderMenu.css'; // Import the CSS file for styles


function HeaderMenu() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); // State to handle search input

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update the search query as the user types
  };

  const menus = [
    {
          title: 'Home',
          submenu: ['placeholder'],
        },
    {
      title: 'Movies',
      submenu: ['Die Hard', 'Toy Story', 'The Godfather'],
    },
    {
      title: 'Series',
      submenu: ['Breaking Bad', 'Stranger Things', 'The Crown'],
    },
    {
      title: 'Documentaries',
      submenu: ['Planet Earth', 'The Last Dance', 'Making a Murderer'],
    },
  ];

  return (
    <header>
      <nav>
        <ul className="menu">
          {menus.map((menu, index) => (
            <li
              key={index}
              className="menu-item"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {menu.title}
              {hoveredIndex === index && (
                <ul className="submenu">
                  {menu.submenu.map((submenuItem, subIndex) => (
                    <li key={subIndex} className="submenu-item">
                      {submenuItem}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      <li className="search-item">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange} // Update the state when input changes
                    className="search-box"
                  />
                </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderMenu;