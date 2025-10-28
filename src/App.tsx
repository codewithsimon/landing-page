import Layout from './components/Layout';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Ecosystem from './components/Ecosystem';
import Community from './components/Community';
import Partners from './components/Partners';
import Impact from './components/Impact';
import JoinDao from './components/JoinDao';

function App() {
  return (
    <Layout>
      <Navigation />

      <Hero />

      <div>
        <About />

        <Ecosystem />

        <Community />

        <Partners />

        <Impact />

        <JoinDao />
      </div>

      <Footer />
    </Layout>
  );
}

export default App;
