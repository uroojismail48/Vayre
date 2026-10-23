import Watch1 from "../assets/imgs/watch1.png"
 import {motion} from 'motion/react'
function Main() {
  const words = ["A", "STORY", "IN", "EVERYONE'S", "SECOND"];
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      }
    }
  }
  const items = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: 50
    },
    show: {
              opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  }
  return (
    <div className="w-full h-screen ">
      <div className="w-full h-full relative flex justify-center items-start  overflow-hidden">
        <motion.img initial={{ opacity: 0, filter: "blur(6px)", y: 30 }}
          transition={{
            duration: 1.5,

            ease: "easeOut",
          }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          src={Watch1}
          className="w-auto scale-150  absolute top-0 right-40 h-full "
        />
        <div className="w-full h-full absolute flex py-20  justify-between items-end  px-10 ">
          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="h1 text-8xl"
          >
            {words.map((word, index) => (
              <motion.span
                key={word}
                variants={items}
                style={{
                  display: "inline-block",
                  marginRight: "10px",
                }}
              >
                {word}
              </motion.span>
            ))}
            {/* A STORY IN <br /> EVERYONE'S SECOND */}
          </motion.h1>
          <motion.h2 className="p text-lg max-md:text-sm" initial={{ opacity: 0, y: 20 , filter: "blur(6px)" }} animate={{ opacity: 1, y: 0 , filter: "blur(0px)" }} transition={{ duration: 1.2, ease: "easeOut" }}>
            TIMELESS, DESIGN, <br />
            RICH, HERITAGE
          </motion.h2>
        </div>
      </div>
    </div>
  );
}

export default Main
