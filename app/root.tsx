import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import React, { useState } from "react";
export function Layout({ children }: { children: React.ReactNode }) {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-teal-100">
        {!isLoggedin ? (
          <header className=" pl-8 lg:pl-36 md:pl-20 fixed w-full transiii shadow-md z-20 bg-teal-100">
            <nav className="transiii">
              <Link to={"/"}>
                <button className="font-extrabold translate-y-3 pt-1 navbtn tracking-wider text-gray-600 text-3xl">
                  Lablogs
                </button>
              </Link>
              <div className="mobileMenu -translate-y-6">
                <Link to={"/"}>
                  <button className="ml-48 font-semibold navbtn md:inline hidden  text-gray-500 text-md">
                    About
                  </button>
                </Link>
                <Link to={"/"}>
                  <button className="ml-12 font-semibold  navbtn md:inline hidden   text-gray-500 text-md">
                    Features
                  </button>
                </Link>
                <Link to={"/"}>
                  <button className="ml-12 font-semibold  navbtn md:inline hidden md:mr-0 1200:mr-32 transiii 1015:mr-0  text-gray-500 text-md">
                    Contact
                  </button>
                </Link>
                <Link to={"/login"}>
                  <button className="lg:pl-96  ml-12 font-semibold 1025:pl-52 1015:pl-40 navbtn md:inline hidden   transiii  text-gray-500 text-md">
                    Login
                  </button>
                </Link>
                <Link to={"/signup"} className="pl-6">
                  <button className=" font-semibold rounded-2xl w-10   signupBtn md:inline hidden   p-2 text-gray-500 text-md">
                    Signup
                  </button>
                </Link>
              </div>

              <ul
                className={` ${
                  isMobile === true ? "flex absolute" : "hidden"
                }  mobileMenu lg:hidden md:hidden h-screen -translate-y-6`}>
                <Link to={"/"}>
                  <li className="ml-12 font-semibold navbtn lg:hidden md:hidden mt-4 text-gray-500 text-md">
                    About
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className="ml-12 font-semibold  navbtn lg:hidden md:hidden   text-gray-500 text-md">
                    Features
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className="ml-12 font-semibold  navbtn lg:hidden md:hidden md:mr-0 1200:mr-32 transiii 1015:mr-0  text-gray-500 text-md">
                    Contact
                  </li>
                </Link>
                <Link to={"/login"}>
                  <li className="lg:pl-96  ml-12 font-semibold 10li52 1015:pl-40 navbtn lg:hidden md:hidden   transiii  text-gray-500 text-md">
                    Login
                  </li>
                </Link>
                <Link to={"/signup"}>
                  <li className="lg:pl-96  ml-12 font-semibold 10li52 1015:pl-40 navbtn lg:hidden md:hidden   transiii  text-gray-500 text-md">
                    Signup
                  </li>
                </Link>
              </ul>
              <div
                className="flex justify-end mobileMenu -translate-y-4 md:hidden"
                onClick={() => {
                  setIsMobile(!isMobile);
                  console.log(isMobile);
                }}>
                <label className="hamburger ">
                  <input type="checkbox" />
                  <svg viewBox="0 0 32 32">
                    <path
                      className="line line-top-bottom"
                      d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                    />
                    <path className="line" d="M7 16 27 16" />
                  </svg>
                </label>
              </div>
            </nav>
          </header>
        ) : (
          <header className=" pt-6 pl-8 lg:pl-36 md:pl-20 fixed w-full transiii shadow-md z-20 bg-teal-100">
            <nav className="transiii">
              <Link to={"/"}>
                <button className="font-extrabold pt-1 -translate-y-1 navbtn tracking-wider text-gray-600 text-3xl">
                  Lablogs
                </button>
              </Link>
              <div className="mobileMenu -translate-y-9">
                <Link to={"/"}>
                  <button className="ml-48 font-semibold navbtn md:inline flex  text-gray-500 text-md">
                    About
                  </button>
                </Link>
                <Link to={"/"}>
                  <button className="ml-12 font-semibold  navbtn md:inline flex   text-gray-500 text-md">
                    Features
                  </button>
                </Link>
                <Link to={"/"}>
                  <button className="ml-12 font-semibold  navbtn md:inline flex md:mr-0 1200:mr-32 transiii 1015:mr-0  text-gray-500 text-md">
                    Contact
                  </button>
                </Link>
                <Link to={"/signup"} className="pl-6">
                  <button className=" font-semibold rounded-2xl w-10   signupBtn lg:ml-96  ml-12 1025:ml-52 1015:ml-40 md:inline flex   transiii  p-2 text-gray-500 text-md">
                    Logout
                  </button>
                </Link>
              </div>
            </nav>
          </header>
        )}

        <main className="pl-6 pr-6">{children}</main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
