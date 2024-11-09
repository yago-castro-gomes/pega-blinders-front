"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import logo from '../../../public/assets/logo.png'
import Image from "next/image";

export const FloatingNavPrivate = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        transition={{
          duration: 0.5,
        }}
        className={cn(
          "flex justify-end w-full fixed z-[5000] top-2 items-center pl-8 pr-8",
          className
        )}
      >
        <div className="flex justify-start items-center space-x-2 w-2/6">
          <Image src={logo} alt="logo" width={30} height={30} />
          <span className="text-secondary font-semibold text-sm">pega blinders</span>
        </div>
        <div className="flex justify-center w-2/6">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative font-semibold items-center flex space-x-1 text-neutral-100 hover:text-secondary transition-all duration-300", // Utilizando cor `primary`
                "before:p-3",
                "hover:underline" // Adiciona o sublinhado no hover
              )}
              style={{
                textUnderlineOffset: '10px',
                textDecorationColor: '#DAA520',
              }}
            >
              <span className="block sm:hidden">{navItem.icon}</span>

              <span className="text-sm !cursor-pointer">{navItem.name}</span>
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-end w-2/6">
          <Link href={''}>
            <span className={cn("bg-transparent px-5 text-neutral-100 hover:text-secondary text-sm font-semibold pointer")}>
              Sign Up
            </span>
          </Link>
          <Link href={''}>
            <span className={cn("bg-transparent px-5 text-secondary hover:text-white text-sm font-semibold pointer")}>
              LOGIN
            </span>
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
