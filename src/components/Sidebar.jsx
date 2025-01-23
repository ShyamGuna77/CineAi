import React from "react";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const redLogo =
  "https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png";
const blueLogo =
  "https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png";

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();

  return (
    <div className="flex flex-col items-center py-6 space-y-4 ">
      {/* Logo */}
      <Link to="/" className="flex justify-center py-4">
        <img
          className="w-[70%]"
          src={theme.palette.mode === "light" ? redLogo : blueLogo}
          alt="CineAi Logo"
        />
      </Link>

      {/* Divider */}
      <hr className="w-10/12 border-gray-700" />

      {/* Sidebar Options */}
      <nav className="w-full">
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="block text-gray-400 hover:text-white px-6 py-2 hover:bg-gray-700 rounded-lg"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/movies"
              className="block text-gray-400 hover:text-white px-6 py-2 hover:bg-gray-700 rounded-lg"
            >
              Movies
            </Link>
          </li>
          <li>
            <Link
              to="/tv-shows"
              className="block text-gray-400 hover:text-white px-6 py-2 hover:bg-gray-700 rounded-lg"
            >
              TV Shows
            </Link>
          </li>
          <li>
            <Link
              to="/favorites"
              className="block text-gray-400 hover:text-white px-6 py-2 hover:bg-gray-700 rounded-lg"
            >
              Favorites
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
