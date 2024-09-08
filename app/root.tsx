import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
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
      <body className="bg-teal-100">
        <header className="pb-6 pt-6 lg:pl-36 fixed w-full shadow-md z-20 bg-teal-100">
          <nav>
            <Link to={"/"}>
              <button className="font-extrabold pt-1 tracking-wider text-gray-600 text-3xl">
                Lablogs
              </button>
            </Link>
            <Link to={"/"}>
              <button className="pl-12 font-semibold text-gray-500 text-md">
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
              <button className="lg:pl-80 pl-12 font-semibold pr-5  text-gray-500 text-md">
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
