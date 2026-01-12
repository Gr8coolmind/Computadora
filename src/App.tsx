import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Comparison from './components/Comparison';
import Concepts from './components/Concepts';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import InteractiveBackground from './components/InteractiveBackground';

function App() {
  const scrollToTimeline = () => {
    const el = document.getElementById('timeline');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-background min-h-screen text-slate-200 selection:bg-cyan-500/30 relative">
      <ScrollProgress />
      <InteractiveBackground />

      <main className="relative z-10">
        <Hero onStart={scrollToTimeline} />
        <Timeline />
        <Comparison />
        <Concepts />
      </main>

      <Footer />
    </div>
  );
}

export default App;
