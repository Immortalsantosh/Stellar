import React from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
// import Lottie from 'lottie-react'
// import animationData from '../assests/Animation - 1721637368700.json'

function Header() {
  return (
    <div class="gradient">
      <header className="h-16  w-full  z-40">
        <div className="h-full container mx-auto flex items-center px-4 justify-between ">
          <div className="">
            <Link to={"/"}>
              <Logo h={60} w={90} />
            </Link>
          </div>
          <div className="flex items-center justify-center container ml-24">
            <nav>
              <ul className="flex gap-6 justify-center items-center font-sans text-14px">
                <li className="text-white  font-normal opacity-80 hover:opacity-100">
                  <Link to={"/about"}>About</Link>
                </li>
                <li className="text-white  font-normal opacity-80 hover:opacity-100">
                  <Link to={"/Integrations"}>Integrations</Link>
                </li>
                <li className="text-white  font-normal opacity-80 hover:opacity-100">
                  <Link to={"/Pricing"}>Pricing</Link>
                </li>
                <li className="text-white  font-normal opacity-80 hover:opacity-100">
                  <Link to={"/Customers"}>Customers</Link>
                </li>
                <li className="text-white  font-normal opacity-80 hover:opacity-100">
                  <Link to={"/Changelog"}>Changelog</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex justify-center items-center w-80  text-white">
            <button className="hover:opacity-100 bg-transparent rounded-full px-2 py-1 opacity-80 ">
              Sign in
            </button>
            <button className=" hover:opacity-100 bg-transparent hover:bg-purple-500 rounded-full ml-3 opacity-80 px-2 py-1">
              Sign up<span className="ml-2">→</span>{" "}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
