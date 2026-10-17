import Vid from "../assets/imgs/nagara_about.mp4"
import Watch2 from "../assets/imgs/watch4.png"
function Timeless() {
  return (
    <div className="h-screen w-full  flex">
      <div className=" w-full h-full ">
        <video
          src={Vid}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-contain"
        ></video>
      </div>
      <div className=" w-full h-full flex flex-col justify-start items-center ">
        <div className=" w-full h-50 flex justify-start flex-col items-center">
          <h1 className="pp flex flex-col justify-center leading-[0.6] items-center text-[100px]">
            <span className="pp text-6xl">Experience</span>
            <span className="h1 text-8xl">TIMELESS</span>
            <span className="h1 text-8xl">ARTISTRY</span>
          </h1>
        </div>
        <div className=" flex justify-center items-center  w-[50%] flex-col  h-[45%] font-mono text-lg">
          Nagara Timepieces embodies a unique blend of craftsmanship and
          heritage, bringing timeless elegance to each meticulously crafted
          watch.
        </div>
        <div className="w-20 h-39 ">
          <div className="h1 w-30 h-39 flex justify-center align-center gap-10">
            <span>EST.</span>
            <img src={Watch2} className="w-full h-full object-contain" alt="" />
            <span>2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeless
