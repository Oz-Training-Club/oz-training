import { Container } from './style';
import { motion } from 'framer-motion';
import { JellyTriangle } from '@uiball/loaders';

export const Splash = () => {
  const greeting = ['오즈의 세계에 오신 것을', '환영합니다'];
  const textVariants = {
    start: {
      opacity: 0,
      y: -20,
    },
    end: {
      opacity: 1,
      y: 0,
    },
  };

  const loaderVariants = {
    start: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <Container>
      <motion.div initial="start" animate="visible" variants={loaderVariants}>
        <JellyTriangle size={40} speed={1.75} color="#2F3980" />
      </motion.div>
      <div>
        {greeting.map((greet, greetIdx) => (
          <motion.p
            key={greetIdx}
            initial="start"
            animate="end"
            variants={textVariants}
            transition={{
              when: 'beforeChildren',
              staggerChildren: 0.08,
              delay: greetIdx === 1 ? 1 : 0,
            }}
          >
            {greet.split('').map((text, textIdx) => (
              <motion.span variants={textVariants} key={textIdx}>
                {text === ' ' ? <>&nbsp;</> : text}
              </motion.span>
            ))}
          </motion.p>
        ))}
      </div>
    </Container>
  );
};
