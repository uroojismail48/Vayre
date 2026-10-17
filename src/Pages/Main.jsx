import Watch1 from "../assets/imgs/watch1.png"
function Main() {
  return (
    <div className="w-full h-screen ">
      <div className="w-full h-full relative flex justify-center items-start  overflow-hidden">
        <img
          src={Watch1}
          className="w-auto scale-150  absolute top-0 right-40 h-full "
        />
        <div className="w-full h-full absolute flex py-20  justify-between items-end  px-10 ">
          <h1 className="h1 text-8xl">
            A STORY IN <br /> EVERYONE'S SECOND
          </h1>
          <h2 className="p text-lg max-md:text-sm">
            TIMELESS, DESIGN, <br />
            RICH, HERITAGE
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Main
