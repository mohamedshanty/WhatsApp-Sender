import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedComponent = ({
  children,
  delay = 0,
  yOffset = 50,
  triggerOnce = false,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: triggerOnce,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
