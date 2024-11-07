
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./MagicButton";



const FirstSection = () => {
    // const t = useTranslations('Hero');

  return (
    <div>
      <div className="relative flex items-center justify-center text-center py-32 bg-cover bg-center">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center pt-20">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            PB IA Analysis
          </p>
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Adrian, a Next.js Developer based in Croatia.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={''}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;