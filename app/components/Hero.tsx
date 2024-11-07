import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./MagicButton";
import { useTranslations } from "next-intl";
import background from '../../public/assets/background.png';


const Hero = () => {
  // const t = useTranslations('Hero');

  return (
    <div >
      <div className="h-screen  m-auto relative flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.85)), url(${background.src})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}>
        <div className="flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-secondary max-w-80">
            PB IA Analysis
          </p>
          <TextGenerateEffect
            words="Revolutionizing Poker Strategy"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-white text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            AI-Powered Hand Analysis
          </p>

          <a href="#about">
            <MagicButton
              title="Get Started"
              icon={''}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;