import { useEffect, useRef } from "react";
import { TransitionProps } from "./Transition.types";
import { useAnimation, useInView } from "framer-motion";
import { motion } from "framer-motion";
import { fadeIn } from "./TransitionFramer";


export function Transition(props: TransitionProps) {
  const { children, className } = props;
  const ref = useRef(null);

  const isInview = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const slidecontrols = useAnimation();

  useEffect(() => {
    if (isInview) {
      mainControls.start("visible");
      slidecontrols.start("visible");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInview]);
  return (
    <div ref={ref}>
      <motion.div variants={fadeIn()}
      initial="hidden"
      animate={mainControls}
      exit="hidden"
      className={className}
      >{children}</motion.div>
    </div>
  );
}