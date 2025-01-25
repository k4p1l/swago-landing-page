import mascot from "../assets/images/Gogo and Nono.png";
import card1 from "../assets/images/1.png";
import card2 from "../assets/images/2.png";
import card3 from "../assets/images/3.png";

export const Hero = () => {
  return (
    <div className="min-h-screen bg-[#243b57] py-16">
      <div className="text-white max-w-7xl mx-auto  glow-border">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-12 sm:gap-[220px] p-10">
          <div className="flex flex-col gap-4 items-center">
            <img src={mascot} className="w-[200px]" alt="" />
            <h1 className="sm:text-4xl text-5xl text-center font-bold font-inter">
              Your Markets, <br />
              Your Rules
            </h1>
            <p className="text-gray-400 font-inter max-w-xl text-center">
              The next evolution in prediction markets. Create, trade and own
              unique markets powered by blockchain and NFTs.
            </p>
            <button className="text-2xl py-2 px-8 bg-[#245bdf] text-white rounded-lg font-bold font-inter">
              Try Now
            </button>
          </div>
          <div className="flex items-center w-full">
            <div className="sm:h-[400px] w-full h-[200px] gradient rounded-3xl relative">
              {/* Third card (bottom) */}
              <div className="absolute left-1/2 top-1/2 sm:-translate-x-[0%] -translate-x-[10%] -translate-y-1/2 sm:w-[280px] w-[155px]">
                <img className="w-full rounded-2xl" src={card3} alt="" />
              </div>
              {/* Second card (middle) */}
              <div className="absolute left-1/2 top-1/2 sm:-translate-x-[40%] -translate-x-[50%] -translate-y-1/2 sm:w-[300px] w-[160px]">
                <img className="w-full rounded-2xl" src={card2} alt="" />
              </div>
              {/* First card (top) */}
              <div className="absolute left-1/2 top-1/2 sm:-translate-x-[80%] -translate-x-[90%] -translate-y-1/2 w-[170px] sm:w-[320px]">
                <img className="w-full rounded-2xl" src={card1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
