import logo from "../assets/images/logo.png";

export const Navbar = () => {
  return (
    <div className="w-full flex justify-between sm:px-4 px-2 py-2 bg-[#1D2B39] border-b-4 border-[#2f9fff]">
      <div className="flex justify-center sm:items-end items-center sm:gap-12 text-white">
        <img
          src={logo}
          className="sm:w-[100px] w-[60px]"
          alt="The Swago Logo"
        />
        <div className="flex justify-center items-center sm:gap-12 gap-4 text-white font-inter sm:text-lg text-xs font-bold">
          <a href="#"> How to Create Market</a>
          <a href="#"> How to Trade</a>
          <a href="#"> Docs</a>
        </div>
      </div>

      <div className="flex justify-center items-center sm:gap-8 text-white">
        <a
          href="#"
          className="sm:text-[16px] py-2 sm:px-6 px-3 bg-[#245bdf] text-white rounded-lg font-bold font-inter text-center text-xs"
        >
          Log In
        </a>
      </div>
    </div>
  );
};
