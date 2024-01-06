import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import { ToggleContext } from "@/pages/_app";
import { Inter } from "next/font/google";
import { useContext, useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const { toggleColor, setToggleColor } = useContext(ToggleContext);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <main className={`${toggleColor ? "bg-success" : "bg-neutral"} font-serif`}>
      <Home></Home>
   <div className="lg:my-20">
   <About></About>
   </div>
      <Skills></Skills>
      <Education></Education>
      <div
        className={`fixed bottom-4 z-50 right-8 ${
          isVisible ? "block" : "hidden"
        }`}
      >
        <button onClick={scrollToTop}>
          <FaArrowAltCircleUp
            className={`h-16 w-16 ${
              toggleColor ? "text-info" : "text-warning"
            }  `}
          />
        </button>
      </div>
      <Services></Services>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}
