import { Link } from "@remix-run/react";

export default function Signup() {
  return (
    <div>
      <div className="text-center"> this is signup page</div>;
      <div>
        <Link to={"/"}> back</Link>
      </div>
    </div>
  );
}
