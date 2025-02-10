import { BiX, BiMenu } from "react-icons/bi";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { useState } from "react";
import logo from "../assets/logoph.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b-gray-700 bg-black/70 px-9 py-2 text-white backdrop-blur-md md:px-13">
      {/* Logo */}
      <a href="#home" className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="max-h-8" />
      </a>

{/* Menu di navigazione desktop */}
<ul className="hidden md:flex gap-6 flex-1 justify-center items-center">
  <a href="#home" className="cursor-pointer text-white text-lg opacity-100 transition-all duration-300 hover:text-yellow-500">
    <li>Home</li>
  </a>
  <a href="#projects" className="cursor-pointer text-white text-lg opacity-100 transition-all duration-300 hover:text-yellow-500">
    <li>Projects</li>
  </a>
  <a href="#work" className="cursor-pointer text-white text-lg opacity-100 transition-all duration-300 hover:text-yellow-500">
    <li>Work</li>
  </a>
  <a href="#about" className="cursor-pointer text-white text-lg opacity-100 transition-all duration-300 hover:text-yellow-500">
    <li>About</li>
  </a>
  <a href="#contact" className="cursor-pointer text-white text-lg opacity-100 transition-all duration-300 hover:text-yellow-500">
    <li>Contact</li>
  </a>
</ul>


      {/* Social icons */}
      <ul className="hidden md:flex items-center gap-2">
        <li className="cursor-pointer text-xl opacity-100 transition-all duration-300 hover:text-blue-500">
          <a href="https://www.linkedin.com/in/laura-garau-3a2248194/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <BsLinkedin />
          </a>
        </li>

        <li className="cursor-pointer text-xl opacity-100 transition-all duration-300 hover:text-red-500">
          <a href="https://www.instagram.com/laura__garau/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
            <BsInstagram />
          </a>
        </li>
      </ul>

      {/* Icon del menu mobile */}
      {isOpen ? (
        <BiX className="block md:hidden text-4xl cursor-pointer" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl cursor-pointer" onClick={menuOpen} />
      )}

      {/* Menu Mobile */}
      <div
  className={`fixed top-[84px] right-0 h-screen w-3/4 bg-black/90 p-8 transition-transform duration-300 ease-in-out z-20 ${
    isOpen ? "translate-x-0" : "translate-x-full"
  }`}
          >
            <ul className="flex flex-col gap-8 text-white">
              <a href="#home" onClick={menuOpen} className="cursor-pointer text-lg opacity-100 transition-all duration-300 hover:text-yellow-500">
                <li>Home</li>
              </a>
              <a href="#projects" onClick={menuOpen} className="cursor-pointer text-lg opacity-100 transition-all duration-300 hover:text-yellow-500">
                <li>Projects</li>
              </a>
              <a href="#work" onClick={menuOpen} className="cursor-pointer text-lg opacity-100 transition-all duration-300 hover:text-yellow-500">
                <li>Work</li>
              </a>
              <a href="#about" onClick={menuOpen} className="cursor-pointer text-lg opacity-100 transition-all duration-300 hover:text-yellow-500">
                <li>About</li>
              </a>
              <a href="#contact" onClick={menuOpen} className="cursor-pointer text-lg opacity-100 transition-all duration-300 hover:text-yellow-500">
                <li>Contact</li>
              </a>
            </ul>


        <ul className="flex flex-wrap gap-5 justify-center mt-10">
          <li className="cursor-pointer text-xl opacity-100 transition-all duration-300 hover:text-blue-500">
            <a href="https://www.linkedin.com/in/laura-garau-3a2248194/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <BsLinkedin />
            </a>
          </li>
          <li className="cursor-pointer text-xl opacity-100 transition-all duration-300 hover:text-red-500">
            <a href="https://www.instagram.com/laura__garau/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
              <BsInstagram />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
