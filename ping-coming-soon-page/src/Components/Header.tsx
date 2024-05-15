import logo from "../assets/logo.svg";
const Header = () => {
  return (
    <header className=" w-full font-LF ">
      <div className="flex items-center justify-center pb-12">
        <img src={logo} className="" alt="" />
      </div>
      <div className="flex items-center justify-center gap-1 pb-6">
        <h1 className=" sm:text-[44px] text-2xl font-light text-[#969696]">
          We are launching
        </h1>
        <h1 className="text-[#151F29] sm:text-[44px] text-2xl font-bold">
          soon!
        </h1>
      </div>
      <div className="flex items-center justify-center pb-10">
        <h1 className=" sm:text-xl text-[#151F29] text-sm">
          {" "}
          Subscribe and get notified
        </h1>
      </div>

      <div className=" gap-5  lg:flex md:flex justify-center items-center  sm:grid sm:grid-rows-2 sm:px-6 ">
        <input
          type="text"
          className=" lg:w-[420px] md:w-[420px] w-full border-[#C2D3FF] border placeholder-[#C2D3FF] text-gray-900 text-sm rounded-full focus:ring-[#4F7DF3] focus:border-[#4F7DF3] block px-5 py-4"
          placeholder="Your email address .."
          required
        />
        <button
          type="button"
          className=" text-white bg-[#4F7DF3] shadow-xl rounded-full text-sm px-8 lg:my-0 md:my-0 my-4 py-4 lg:w-[200px] md:w-[200px]   w-full"
        >
          Notify Me
        </button>
      </div>
    </header>
  );
};

export default Header;
