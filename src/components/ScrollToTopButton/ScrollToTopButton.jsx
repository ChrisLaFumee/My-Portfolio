import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      console.log("Body scrollTop:", scrollTop);
      setIsVisible(scrollTop > 50);
    };

    document.body.addEventListener("scroll", handleScroll);
    return () => document.body.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    document.body.scrollTo({ top: 0, behavior: "smooth" });
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-18 right-6 z-50 p-3 border-2 rounded-full transition duration-300 ${
        isVisible
          ? "opacity-100 pointer-events-auto bg-gray-900 hover:bg-gray-800 border border-gray-700"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTopButton;
