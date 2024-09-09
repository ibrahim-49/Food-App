import React from "react";
import { Link } from "react-scroll"; // Import from react-scroll
import { Navlogo } from "../../assets/index";

const Navbar = () => {
  const links = [
    { name: "HOME", link: "home" },
    { name: "MENU", link: "menu" },
    { name: "CONTACT US", link: "contact" },
    { name: "FAQ", link: "faq" },
    { name: "TESTIMONIAL", link: "testimonial" },
  ];

  return (
    <div className="w-full fixed top-0 left-0 shadow-md bg-white z-10">
      <div className="md:flex items-center py-4 max-w-screen-xl mx-auto justify-between">
        {/* Logo Section */}
        <div className="w-[100px] h-[45px]">
          <img
            src={Navlogo}
            alt="Company Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6 px-6">
            {links.map((link) => (
              <li
                key={link.name}
                className={`md:ml-8 text-sm font-semibold font-roboto hover:text-green-800 cursor-pointer
                  ${
                    link.name === "HOME"
                      ? "bg-green-500 text-white px-2 py-0.5 hover:text-white rounded-sm"
                      : "text-gray-800"
                  }`}
              >
                <Link
                  activeClass="active"
                  to={link.link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
