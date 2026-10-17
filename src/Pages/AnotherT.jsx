import Image1 from "../assets/imgs/watch4.png";
import Image2 from "../assets/imgs/watch5.png";
import Image3 from "../assets/imgs/watch3.png";
function AnotherT() {
  return (
    <div className="pp w-full h-screen  flex flex-col justify-center    items-center ">
      <h1 className="  absolute  flex flex-col leading-[0.6] justify-center text-[210px] items-center ">
        <span > Crafted</span>
        <span class=" " >Through</span>
        <span class=" " >Generations</span>
      </h1>
      <div className=" w-full h-full  flex ">
        <div className="w-full h-full flex justify-end items-end pb-[5%] ">
          <div className="w-[70%] h-[40%]  ">
            <img src={Image1} alt="Watch 1" />
          </div>
        </div>
        <div className="w-full h-full  flex justify-end items-end pb-[6%] ">
          <div className="w-[30%] h-[10%] ">
            <img src={Image2} alt="Watch 2" />
          </div>
        </div>
        <div className="w-full h-full flex justify-end  pt-[10%] ">
          <div className="w-[50%] h-[30%]  ">
            <img src={Image3} alt="Watch 3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnotherT
