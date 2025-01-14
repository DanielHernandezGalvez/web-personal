import profilepic from "../assets/profile.png";
import { HERO_CONTENT } from "../constants/index";
import { motion } from "framer-motion";
import Cv from "../assets/DanielGalvezResume.pdf"

const contanerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:md-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilepic}
              alt="Daniel Gálvez"
              width={400}
              height={400}
              className="border border-stone-900 rounded-3xl"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={contanerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2
              variants={childVariants}
              className="pb2 text-4xl tracking-tighter"
            >
              Daniel Gálvez
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 
                            bg-clip-text text-3xl tracking-tigth text-transparent"
            >
              Frontend Developer
            </motion.span>
            <motion.p 
            id="about"
            variants={childVariants}
            className="my-2 max-w-lg py-6 text-xl leading-relaxed tricking-tighter">
              {HERO_CONTENT}
            </motion.p>
            <motion.a
            variants={childVariants}
              href={Cv}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
            >
              {" "}
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
