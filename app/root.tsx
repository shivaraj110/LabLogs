import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { FontFamily } from "@fontsource/poppins";
import "./tailwind.css";
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header className="pb-20 pt-8 pl-36 ">
          <nav>
            <Link to={"/"}>
              <button className="font-extrabold pt-1 tracking-wider text-gray-700 text-3xl">
                Lablogs
              </button>
            </Link>
            <Link to={"/"}>
              <button className="pl-12 font-semibold  text-gray-500 text-md">
                About
              </button>
            </Link>
            <Link to={"/"}>
              <button className="pl-12 font-semibold  text-gray-500 text-md">
                Features
              </button>
            </Link>
            <Link to={"/"}>
              <button className="pl-12 font-semibold  text-gray-500 text-md">
                Contact
              </button>
            </Link>
            <Link to={"/"}>
              <button className="pl-80 font-semibold pr-5  text-gray-500 text-md">
                Login
              </button>
            </Link>
            <Link to={"/"}>
              <button className=" p-1 font-semibold rounded-2xl signupBtn text-gray-500 text-md">
                Signup
              </button>
            </Link>
          </nav>
        </header>
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
