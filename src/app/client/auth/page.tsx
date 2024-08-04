/* eslint-disable @next/next/no-img-element */
import Login from "@/components/forms/Login";
import Link from "next/link";

function Auth() {
  return (
    <div className=" relative w-full h-dvh bg-[url('/images/hero-2.png')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full md:bg-opacity-50">
        {/* Navbar */}

        <header className="max-w-7xl mx-auto flex items-center justify-between px-6 pb-10 pt-6">
          <Link href={"/"}>
            <img
              src="/images/logo.png"
              alt="Netflix Logo"
              className="w-28 lg:w-36"
            />
          </Link>
        </header>

        {/* Login */}

        <Login></Login>
      </div>
    </div>
  );
}

export default Auth;
