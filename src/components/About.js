

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import { ToggleContext } from "@/pages/_app";
import { useContext, useEffect, useRef } from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { toggleColor } = useContext(ToggleContext);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const infoRefs = useRef([]);

  useEffect(() => {
    // Set up GSAP animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      }
    });

    tl.fromTo(imageRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

    tl.fromTo(titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.5"
    );

    tl.fromTo(contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.4"
    );

    tl.fromTo(infoRefs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.4,
        ease: "power2.out"
      },
      "-=0.3"
    );

    // Clean up
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Animation variants for framer motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const floatingVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <Element name="about" id="about">
      <div
        className={`relative overflow-hidden min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 ${toggleColor ? "bg-success" : "bg-neutral"
          }`}
      >
        {/* Animated background elements */}
        <div className="absolute top-20 -left-10 w-64 h-64 rounded-full bg-secondary/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 -right-10 w-56 h-56 rounded-full bg-accent/20 blur-3xl animate-pulse-slow"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image with floating animation */}
          <motion.div
            ref={imageRef}
            className="relative flex justify-center"
            variants={floatingVariants}
            animate="float"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                <img
                  className="w-full h-full object-cover"
                  src="https://i.ibb.co/DY58q4d/Untitled-design-1-removebg-preview.png"
                  alt="Mobarak Hossen"
                />
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-info/20 backdrop-blur-sm"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              />

              <motion.div
                className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-warning/20 backdrop-blur-sm"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              />

              <motion.div
                className="absolute top-1/2 -right-10 w-12 h-12 rounded-lg bg-accent/20 backdrop-blur-sm rotate-45"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <div className="space-y-8">
            <motion.h1
              ref={titleRef}
              className={`text-4xl md:text-5xl font-bold ${toggleColor ? "text-info" : "text-success"
                }`}
            >
              About <span className="text-accent">Me</span>
            </motion.h1>

            <motion.p
              ref={contentRef}
              className={`text-lg leading-relaxed ${toggleColor ? "text-white" : "text-success"
                }`}
            >
              Greetings! I'm Mobarak Hossen, a skilled full-stack web developer
              hailing from the vibrant landscapes of Bangladesh. Proficient in
              both front-end and back-end technologies, I specialize in
              transforming concepts into seamless, interactive web experiences.
              Join me on this journey of turning ideas into reality through
              innovative and efficient development. Let's build something
              extraordinary together!
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { label: "Name:", value: "Mohammad Mobarak Hossen" },
                { label: "Birthdate:", value: "10-05-2000" },
                { label: "Languages:", value: "English/Bengali" },
                { label: "Address:", value: "Bangladesh, Chittagong" },
                { label: "Email:", value: "Riponbhai782@gmail.com" },
                { label: "Phone:", value: "+8801825639631" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  ref={el => infoRefs.current[index] = el}
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <span className={`font-semibold min-w-[100px] ${toggleColor ? "text-info" : "text-success"}`}>
                    {item.label}
                  </span>
                  <span className={`${toggleColor ? "text-white" : "text-accent"}`}>
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Decorative animated elements */}
            <motion.div
              className="absolute top-20 right-10 w-16 h-16 rounded-full bg-info/20 backdrop-blur-sm"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            />

            <motion.div
              className="absolute bottom-20 left-10 w-24 h-24 rounded-lg bg-warning/20 backdrop-blur-sm -rotate-12"
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: -12 }}
              transition={{ delay: 1.8, duration: 0.7 }}
            />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;