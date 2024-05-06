import "./App.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import { useRef } from "react";
import Services from "./components/Services";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Videos from "./components/Videos"; // Added import for Videos component

function App() {
  const homeRef = useRef();
  const servicesRef = useRef();
  const aboutRef = useRef();
  const whyUsRef = useRef();
  const contactUsRef = useRef();

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <div>
        <Hero
          scrollFunction={scrollToRef}
          ref={homeRef}
          homeRef={homeRef}
          servicesRef={servicesRef}
          aboutRef={aboutRef}
          whyUsRef={whyUsRef}
          contactUsRef={contactUsRef}
        />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={whyUsRef}>
        <WhyUs />
      </div>
      <div>
        <Videos /> {/* Added Videos component */}
      </div>
      <div ref={contactUsRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
