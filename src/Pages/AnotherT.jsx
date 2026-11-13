import Image1 from "../assets/imgs/watch4.png";
import Image2 from "../assets/imgs/watch5.png";
import Image3 from "../assets/imgs/watch3.png";
import Image18 from "../assets/imgs/watch18.png";
import { motion } from "motion/react";

const spring = { type: "spring", stiffness: 400, damping: 10 };

function AnotherT() {
  return (
    <div className="pp sticky top-0 z-0  w-full  h-screen flex flex-col justify-center items-center">
      <h1 className="absolute z-20 flex flex-col leading-[0.6] justify-center text-[210px] items-center">
        {["Crafted", "Through", "Generations"].map((word) => (
          <motion.span
            key={word}
            className="inline-block"
            whileHover={{ opacity: 0.5 }}
            transition={spring}
          >
            {word}
          </motion.span>
        ))}
      </h1>

      <div className="w-full h-full flex ">
        <div className="relative z-10 w-full h-full flex flex-col justify-around items-end pb-[5%]  ">
          <div className="w-full h-full">
            <motion.div
              whileHover={{ x: 15 }}
              transition={spring}
              className="w-[50%] h-[30%] "
            >
              <img
                src={Image18}
                alt="Watch 18"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
          <motion.div
            whileHover={{ x: -10 }}
            transition={spring}
            className="w-[70%] h-[40%]"
          >
            <img
              src={Image1}
              alt="Watch 1"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>

        <div className="relative z-10 w-full h-full flex justify-end items-end pb-[6%]">
          <motion.div
            whileHover={{ x: -10 }}
            transition={spring}
            className="w-[30%] h-[30%]"
          >
            <img
              src={Image2}
              alt="Watch 2"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>

        <div className="relative z-10 w-full h-full flex justify-end pt-[10%]">
          <motion.div
            whileHover={{ y: -10 }}
            transition={spring}
            className="w-[50%] h-[40%]"
          >
            <motion.img
              src={Image3}
              alt="Watch 3"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AnotherT;
