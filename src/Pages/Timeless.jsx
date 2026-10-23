import { motion } from "motion/react";
import Vid from "../assets/imgs/nagara_about.mp4";
import Watch2 from "../assets/imgs/watch4.png";

function Timeless() {
  const words = [
    "Vayre Timepieces embodies",
    "a unique blend of craftsmanship ",
    "and heritage, bringing timeless" , "to each meticulously crafted watch."
  ];
  const container = {
    hide: {},
    show: {
      transition: {
        staggerChildren: 1,
      },
    },
  };
  const items = {
    hide: {
      opacity: 0,
      y: 60,

      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,

      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

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
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
          }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className=" w-full h-50 flex justify-start flex-col items-center"
        >
          <h1 className="pp flex flex-col justify-center leading-[0.6] items-center text-[100px]">
            <span className="pp text-6xl">Experience</span>
            <span className="h1 text-8xl">TIMELESS</span>
            <span className="h1 text-8xl">ARTISTRY</span>
          </h1>
        </motion.div>
        <motion.div
           initial="hide"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
          variant={container}
          className=" flex justify-center items-center  w-[50%] flex-col  h-[45%] font-mono text-lg"
        >
          {words.map((word, index) => (
            <motion.p
              key={index}
              variants={items}
              className="p text-lg max-md:text-sm"
            >
              {word}
            </motion.p>
          ))}

        </motion.div>
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

export default Timeless;
