import { socialLinks } from "./constants/constant";

const SocialLinks = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-2">
      {socialLinks.map((link, index) => (
        <div className="flex gap-1 items-center" key={index}>
          {/* <CircleAnimation> */}
          <a
            href={link.href}
            target="_blank"
            className="flex items-center justify-center gap-3"
            rel="noopener noreferrer"
          >
            <div className="text-black p-2 w-8 h-8 bg-white hover:bg-black hover:text-white duration-100 rounded-full">
              {link.icon}
            </div>
            <p>{link.text}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
