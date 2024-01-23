import "./App.css";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Frame40 from "./components/Frame40/Frame40";
import Header from "./components/Header/Header";
import SocialProof from "./components/SocialProof/SocialProof";
import Testimonial from "./components/Testimonial/Testimonial";
import WhyClearLink from "./components/WhyClearLink/WhyClearLink";

function App() {
  return (
    <>
      <section className="main-container">
        <Header />
        <div className="py-[96px]">
          <SocialProof />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center">
        <div className="py-[96px] w-[1408px]">
          <WhyClearLink />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center">
        <div className="py-[96px] w-[1408px]">
          <Testimonial />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center">
        <div className="py-[96px] w-[1408px]">
          <FAQ />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center overflow-hidden">
        <div className="py-[96px] w-[1408px]">
          <Frame40 />
        </div>
      </section>
      <footer className="flex flex-col items-center justify-center">
        <div className="w-[1408px]">
          <Footer/>
        </div>
      </footer>
    </>
  );
}

export default App;
