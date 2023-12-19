import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);

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
    <main className="bg-success font-serif">
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <div
        className={`fixed bottom-4 z-50 right-8 ${
          isVisible ? "block" : "hidden"
        }`}
      >
        <button onClick={scrollToTop}>
          <FaArrowAltCircleUp className="h-16 w-16 text-info" />
        </button>
      </div>
      <Services></Services>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}
