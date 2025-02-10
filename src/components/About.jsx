import { motion } from "framer-motion";
import image from "../../../../../../fotocv.jpg";

const About = () => {
  return (
    <div id="about" className="px-6 flex min-h-screen w-full items-center justify-center py-28 md:px-16">

      <div className="flex flex-col items-center justify-center gap-10 text-white text-center">
        
        
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src={image} 
            alt="Laura Garau" 
            className="w-[300px] md:w-[350px] rounded-lg shadow-lg shadow-black transition-all duration-300 hover:scale-105"
          />
        </motion.div>

        
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-[600px] flex flex-col gap-5"
        >
          <h1 className="font-bold md:text-5xl text-3xl text-black">Laura Garau</h1>
          <p className="md:text-base text-sm text-black">
            Passionate about photography, cinema, and music, I love combining technology and creativity to develop innovative digital solutions. 
            With a strong artistic sensibility and solid technical skills, I approach every project with originality, precision, and attention to detail. 
            Always motivated to grow, I am looking for a stimulating environment where I can contribute my skills and my passion for innovation.
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
