import logo from "../assets/images/logo.png";

export const Navbar = () => {
  return (
    <div className="w-full flex justify-between sm:px-4 sm:py-2 bg-[#1D2B39] border-b-4 border-[#2f9fff]">
      <div className="flex justify-center items-end gap-12 text-white">
        <img src={logo} className="w-[100px]" alt="The Swago Logo" />
        <div className="flex justify-center items-center gap-12 text-white font-inter text-lg font-bold">
          <a href="#"> How to Create Market</a>
          <a href="#"> How to Trade</a>
          <a href="#"> Docs</a>
        </div>
      </div>

      <div className="flex justify-center items-center gap-8 text-white">
        <a
          href="#"
          className="text-[16px] py-2 px-6 bg-[#245bdf] text-white rounded-lg font-bold font-inter"
        >
          Log In
        </a>
      </div>
    </div>
  );
};
