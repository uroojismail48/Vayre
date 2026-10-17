
function Navbar() {
  return (
    <div className={`w-full  flex justify-center fixed top-0 z-50  h-20 items-center left-0 `}>
      <div className="px-10 max-md:px-1 w-full flex justify-between items-center">
        <div className="">
          <button className="border max-md:px-1 max-md:text-sm  rounded-2xl px-5 py-1 font-mono font-medium text-xl">
            <h1 className="p">PRE-ORDER</h1>
          </button>
        </div>
        <div className="">
          <h1 className="text-2xl">VAYRE</h1>
        </div>

        <div className="">
          <button className="text-2xl max-md:text-md">
            <b>+</b>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar
