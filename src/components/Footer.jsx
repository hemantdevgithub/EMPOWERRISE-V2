import { FaFacebookF } from "react-icons/fa";
import {
  FaLinkedin,
  FaXTwitter,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa6";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from "react-share";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const path = useLocation().pathname;
  console.log(path);
  return (
    <div
      className={`max-h-fit py-5 bg-[#161827]  ${
        path === "/sdf" || path === "/sdf/about" || path === "/sdf/donate"
          ? "bg-secondary"
          : "bg-primary"
      } font-poppins`}
    >
      <div
        className={`grid grid-cols-12 xs:space-y-5 lg:mx-20 space-y-0 ${
          path === "/sdf" || path === "/sdf/about" || path === "/sdf/donate"
            ? "text-white"
            : "text-gray-300"
        }`}
      >
        {/* Logo and Social Media */}
        <div className="flex flex-col col-span-12 lg:col-span-4 min-h-fit relative">
          <div>
            <img
              src={
                path === "/sdf" ||
                path === "/sdf/about" ||
                path === "/sdf/donate"
                  ? "/SDF/Logo.png"
                  : "logo.png"
              }
              className={`rounded-full ${
                path === "/sdf" ||
                path === "/sdf/about" ||
                path === "/sdf/donate"
                  ? "size-20"
                  : "size-32"
              }`}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-xl uppercase font-semibold">
              {path === "/sdf" ||
              path === "/sdf/about" ||
              path === "/sdf/donate"
                ? "Satyadeep Foundation"
                : "Sustainable Micro Empowerment for Global Macro Impact"}
            </h1>
          </div>
          <div className="flex gap-x-5 mt-4 md:gap-3 items-center">
            <FacebookShareButton
              url={
                path === "/sdf" ||
                path === "/sdf/about" ||
                path === "/sdf/donate"
                  ? "https://empowerrise.org/sdf"
                  : `https://empowerrise.org`
              }
              title="EMPOWER RISE"
            >
              <FaFacebookF
                className={`bg-transparent ${
                  path === "/sdf" ||
                  path === "/sdf/about" ||
                  path === "/sdf/donate"
                    ? "text-empower"
                    : "text-rise"
                } bg-black text-xl rounded-sm`}
              />
            </FacebookShareButton>

            <LinkedinShareButton
              url={
                path === "/sdf" ||
                path === "/sdf/about" ||
                path === "/sdf/donate"
                  ? "https://empowerrise.org/sdf"
                  : `https://empowerrise.org`
              }
              title="EMPOWER RISE"
            >
              <FaLinkedin
                className={`bg-transparent ${
                  path === "/sdf" ||
                  path === "/sdf/about" ||
                  path === "/sdf/donate"
                    ? "text-empower"
                    : "text-rise"
                } bg-black text-xl rounded-sm`}
              />
            </LinkedinShareButton>

            <TwitterShareButton
              url={
                path === "/sdf" ||
                path === "/sdf/about" ||
                path === "/sdf/donate"
                  ? "https://empowerrise.org/sdf"
                  : `https://empowerrise.org`
              }
              title="EMPOWER RISE"
            >
              <FaXTwitter
                className={`bg-transparent ${
                  path === "/sdf" ||
                  path === "/sdf/about" ||
                  path === "/sdf/donate"
                    ? "text-empower"
                    : "text-rise"
                } bg-black text-xl rounded-sm`}
              />
            </TwitterShareButton>

            <WhatsappShareButton
              url={
                path === "/sdf" ||
                path === "/sdf/about" ||
                path === "/sdf/donate"
                  ? "https://empowerrise.org/sdf"
                  : `https://empowerrise.org`
              }
              title="EMPOWER RISE"
            >
              <FaWhatsapp
                className={`bg-transparent ${
                  path === "/sdf" ||
                  path === "/sdf/about" ||
                  path === "/sdf/donate"
                    ? "text-empower"
                    : "text-rise"
                } bg-black text-xl rounded-sm`}
              />
            </WhatsappShareButton>

            <TelegramShareButton
              url={
                path === "/sdf" ||
                path === "/sdf/about" ||
                path === "/sdf/donate"
                  ? "https://empowerrise.org/sdf"
                  : `https://empowerrise.org`
              }
              title="EMPOWER RISE"
            >
              <FaTelegram
                className={`bg-transparent ${
                  path === "/sdf" ||
                  path === "/sdf/about" ||
                  path === "/sdf/donate"
                    ? "text-empower"
                    : "text-rise"
                } bg-black text-xl rounded-sm`}
              />
            </TelegramShareButton>
          </div>
        </div>

        {/* Our Locations Section */}
        <div className="text-start p-3 col-span-12 lg:col-span-4 space-y-4">
          <p
            className={`text-xl text-center font-semibold ${
              path === "/sdf" || path === "/sdf/about" || path === "/sdf/donate"
                ? "text-white"
                : "text-rise"
            }`}
          >
            Our Locations
          </p>
          <div className="grid grid-cols-12  gap-y-4  justify-between">
            <div className="col-span-12 md:col-span-4 flex items-center space-x-2">
              <img
                src="https://flagcdn.com/w320/in.png"
                alt="India Flag"
                className="w-6 h-6"
              />
              <div>
                <h4 className="text-lg font-semibold">India</h4>
                <p className="text-md">Hyderabad</p>
              </div>
            </div>
            <div className="hidden md:block col-span-1 w-[1px] h-full bg-gray-400"></div>
            <div className="col-span-12 md:col-span-4 flex items-center space-x-2">
              <img
                src="https://flagcdn.com/w320/us.png"
                alt="USA Flag"
                className="w-6 h-6"
              />
              <div>
                <h4 className="text-lg font-semibold">USA</h4>
                <p className="text-md">California </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 flex items-center space-x-2">
              <img
                src="https://flagcdn.com/w320/gb.png"
                alt="UK Flag"
                className="w-6 h-6"
              />
              <div>
                <h4 className="text-lg font-semibold">UK</h4>
                <p className="text-md">London</p>
              </div>
            </div>
            <div className="hidden md:block col-span-1 w-[1px] h-full bg-gray-400"></div>
            <div className="col-span-12 md:col-span-4 flex items-center space-x-2">
              <img
                src="https://flagcdn.com/w320/ca.png"
                alt="UK Flag"
                className="w-6 h-6"
              />
              <div>
                <h4 className="text-lg font-semibold">Canada</h4>
                <p className="text-md">Vancouver</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="col-span-12 lg:col-span-4 text-center space-y-4 lg:mt-4">
          <p
            className={`text-xl text-center font-semibold ${
              path === "/sdf" || path === "/sdf/about" || path === "/sdf/donate"
                ? "text-white"
                : "text-rise"
            }`}
          >
            Contact
          </p>
          <div className="space-y-2">
            {path === "/sdf" ||
            path === "/sdf/about" ||
            path === "/sdf/donate" ? (
              <p>sai.kotla@empowerrise.org</p>
            ) : (
              <div>
                <p>Sai.kotla@empowerrise.org</p>
                <p>Hemant.yadav@empowerrise.org</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
