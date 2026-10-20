import watch20 from "../assets/imgs/watch20.png"
import watch21 from "../assets/imgs/watch9.png"
import watch22 from "../assets/imgs/watch10.png";
const Watches = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="w-full h-full absolute ">
        <img src={watch20} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="absolute bg-black/70 w-full h-full flex flex-row">
        <div className="w-full h-full flex justify-center items-center ">
          <div className="w-full h-[70%] ">
            <img src={watch21} className="w-full h-full object-cover" alt="" />
          </div>
        </div>
        <div className="h1 w-full h-full flex justify-center flex-col gap-10 text-center items-center   ">
          <h1 className="leading-[0.7] text-8xl ">
            UROOJ <br />
            ISMAIL
          </h1>
          <h3>
            CRAFTED FOR MOMENTS THAT <s>LASTS</s>
          </h3>
        </div>
        <div className="w-full h-full   flex flex-col justify-end pb-20 items-center">
          <div className="w-[80%] h-[30%] ">
            <img src={watch22} className="w-full h-full object-cover" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watches;
