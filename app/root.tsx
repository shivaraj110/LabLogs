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
      <body>
        <header className="pb-4 pl-6 pt-3 bg-slate-100  shadow-md">
          <nav>
            <Link to={"/"}>
              <button>HOME</button>
            </Link>
            <Link to={"/"}>
              <button className="pl-8  pt-2">ABOUT</button>
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
