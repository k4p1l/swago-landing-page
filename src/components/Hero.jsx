import mascot from "../assets/images/Gogo and Nono.png";

export const Hero = () => {
  return (
    <div className="min-h-screen bg-[#243b57] py-16">
      <div className="text-white max-w-7xl mx-auto  glow-border">
        <div className="flex items-start justify-between gap-12 p-10">
          <div className="flex flex-col gap-4 items-center">
            <img src={mascot} className="w-[200px]" alt="" />
            <h1 className="text-4xl font-bold font-inter">
              Your Markets,Your Rules
            </h1>
            <p className="text-gray-400 font-inter max-w-xl text-center">
              The next evolution in prediction markets. Create, trade and own
              unique markets powered by blockchain and NFTs.
            </p>
            <button className="text-2xl py-2 px-8 bg-[#245bdf] text-white rounded-lg font-bold font-inter">
              Try Now
            </button>
          </div>
          <div>
            <div className="h-[400px] w-[500px] bg-[#fe90fb] rounded-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
