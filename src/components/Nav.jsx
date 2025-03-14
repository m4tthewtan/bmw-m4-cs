import { SiBmw } from "react-icons/si";

const Nav = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 flex flex-row items-center gap-2 px-6 py-3">
      <SiBmw className="text-5xl text-white md:text-6xl" />
      <div className="font-primary text-lg text-white md:text-xl">
        The Ultimate Driving Machine
      </div>
    </nav>
  );
};

export default Nav;
