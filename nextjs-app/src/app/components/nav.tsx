import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-2 px-4 text-lg text-gray-700 bg-white">
      <div>
        <Link href="/" passHref>
          <div className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] text-purple-700 font-bold text-2xl">
            Strapi-Next
            {/* <img
              src="http://localhost:3000/newlogo.png"
              alt=""
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] "
              width={180}
              height={37}
            /> */}
            {/* <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] "
              src="http://localhost:3000/newlogo.png"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            /> */}
          </div>
        </Link>
      </div>
      <div>
        <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0 space-x-2">
          <li>
            <Link href="/" className="md:p-2 py-2 hover:text-purple-400">
              {" "}
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="md:p-2 py-2 hover:text-purple-400"
              legacyBehavior={false}
            >
              Contact us
            </Link>
          </li>
          <li>
            <Link
              href="/userRegister"
              className="md:p-2 py-2 hover:text-purple-400"
              legacyBehavior={false}
            >
              Register{" "}
            </Link>
          </li>
          {/* <li>
            <Link href="/about" className="md:p-2 py-2 hover:text-purple-400">
              About
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
