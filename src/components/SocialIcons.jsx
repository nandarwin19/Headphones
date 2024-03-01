import { motion } from "framer-motion";
import { FaTelegramPlane, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const CircleAnimation = ({ children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.15, rotate: [0, -10, 10, -10, 10, 0] }}
      transition={{ duration: 0.5 }}
      className="flex gap-4"
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: "10px",
      }}
    >
      {children}
    </motion.div>
  );
};

const SocialIcons = () => {
  return (
    <div className="flex flex-col items-start  justify-start gap-2">
      <div className="flex gap-1 items-center">
        <CircleAnimation>
          <a
            href="https://t.me/nwin2004"
            className="text-black p-2 w-8 h-8 bg-white hover:bg-black  hover:text-white duration-100 rounded-full"
          >
            <FaTelegramPlane />
          </a>
        </CircleAnimation>
        <p>telegram</p>
      </div>
      <div className="flex gap-1 items-center">
        <CircleAnimation>
          <a
            href="https://github.com/nandarwin19"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black p-2 w-8 h-8 bg-white hover:bg-black  hover:text-white duration-100 rounded-full"
          >
            {/* You can replace the icon with a GitHub icon */}
            <FaGithub />
          </a>
        </CircleAnimation>
        <p>GitHub</p>
      </div>

      <div className="flex gap-1 items-center">
        <CircleAnimation>
          <a
            href="mailto:nwin21210@gmail.com"
            className="text-black p-2 w-8 h-8 bg-white hover:bg-black  hover:text-white duration-100 rounded-full"
          >
            <MdEmail />
          </a>
        </CircleAnimation>
        <p>email</p>
      </div>
    </div>
  );
};

export default SocialIcons;
