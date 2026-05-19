'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
    children: React.ReactNode;
    direction?: 'left' | 'right' | 'up' | 'down';
}

export default function AnimatedSection({ 
                                          children, 
    direction = 'up' 
}: AnimatedSectionProps) {
    const { ref, inView } = useInView({
          threshold: 0.2,
          triggerOnce: true,
    });

  const directionVariants = {
        left: {
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
        },
        right: {
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
        },
        up: {
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
        },
        down: {
                hidden: { opacity: 0, y: -100 },
                visible: { opacity: 1, y: 0 },
        },
  };

  return (
        <motion.div
                ref={ref}
                variants={directionVariants[direction]}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
          {children}
        </motion.div>motion.div>
      );
}</motion.div>
