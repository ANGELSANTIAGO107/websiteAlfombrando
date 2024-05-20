import { AnimatePresence, delay, motion } from "framer-motion"
import { exit } from "process"

export function TransitionPage() {
    return (
      <AnimatePresence mode="wait">
        <div>
          <motion.div
            className="fixed top-0 bottom-0 right-full w-screen z-30 bg-secondary"
            variants={transitionVariantsPage}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="fixed top-0 bottom-0 right-full w-screen z-20 bg-secondary/70 opacity-50 px-4"
            variants={transitionVariantsPage}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
          ></motion.div>
        </div>
      </AnimatePresence>
    );
}

const transitionVariantsPage = {
    initial:{
        x:"100%",
        width:"100%",
    },
    animate:{
        x: "0%",
        width: "0%"
    },
    exit:{
        x: ["0","100%"],
        width:["0","100%"]
    }
}