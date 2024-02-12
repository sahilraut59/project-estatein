import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="text-white border-t-2 border-b-2 border-gray-700">
      <div className="flex justify-evenly items-center">
        <div className="flex text-xl p-6 justify-center items-center gap-2">
          <Image src="icons/logo.svg" width={32} height={32} />
          <p className="text-3xl">Estatein</p>
        </div>
        <div className="flex gap-6 p-5">
          <Link
            href="www.google.com"
            className="p-4 border-[#262626] hover:bg-[#141414]  hover:border-gray-700 rounded-lg "
          >
            Home
          </Link>
          <Link
            href="www.google.com"
            className="p-4 border-[#262626] hover:bg-[#141414]  hover:border-gray-700 rounded-lg "
          >
            About Us
          </Link>
          <Link
            href="www.google.com"
            className="p-4 border-[#262626] hover:bg-[#141414]  hover:border-gray-700 rounded-lg "
          >
            Properties
          </Link>
          <Link
            href="www.google.com"
            className="p-4 border-[#262626] hover:bg-[#141414]  hover:border-gray-700 rounded-lg "
          >
            Services
          </Link>
        </div>
        <div className="">
          <div className="p-2 bg-[#141414] rounded-lg border-gray-700 border">
            <button className="p-2">Contact Us</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
