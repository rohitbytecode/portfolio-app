import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="app-container">
      <Sidebar />

      <div className="content-area">
        <Navbar />

        <main>
          <section id="about">
            <About />
          </section>

          <section id="portfolio">
            <Portfolio />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
}