import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Works from './components/Works';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  return (
    <Layout>
      <Navbar />
      <main>
        <Hero />
        <Works />
        <Skills />
        <Contact />
      </main>
    </Layout>
  );
}
