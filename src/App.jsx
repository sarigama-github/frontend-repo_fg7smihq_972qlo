import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Background />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <footer className="border-t border-sky-200/70 bg-white/70 py-8 text-center text-slate-600 backdrop-blur">
        © {new Date().getFullYear()} Your Name — Light blue futuristic theme.
      </footer>
    </div>
  );
}

export default App;
