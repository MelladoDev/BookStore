import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Se activa cada vez que entra en la vista
    threshold: 0.2, // Se activa cuando el 20% del elemento es visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Inicia con opacidad 0 y 50px abajo
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
