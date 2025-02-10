import { motion } from "framer-motion";
import { CameraIcon, LightBulbIcon, FilmIcon, SpeakerWaveIcon } from "@heroicons/react/24/outline";

const Work = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id="work" className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-10"
      >
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <CameraIcon className="h-20 w-20 text-white" />
          <h3 className="text-1xl font-bold">Photography & Video</h3>
          <p className="text-gray-300">
            Photographic shots and artistic video productions.
          </p>
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <LightBulbIcon className="h-20 w-20 text-white" />
          <h3 className="text-1xl font-bold">Brand Identity</h3>
          <p className="text-gray-300">
            Visual identities for brands and businesses.
          </p>
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <SpeakerWaveIcon className="h-20 w-20 text-white" />
          <h3 className="text-1xl font-bold">Music</h3>
          <p className="text-gray-300">
            Music production and original compositions.
          </p>
        </motion.div>
      </motion.div>
      
    </div>
  );
};

export default Work;

