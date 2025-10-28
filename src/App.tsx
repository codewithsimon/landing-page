import Layout from './components/Layout';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Section from './components/Section';
import SectionPlaceholder from './components/SectionPlaceholder';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <Layout>
      <Navigation />

      <Hero />

      <div>
        <About />

        <Section id="ecosystem">
          <SectionPlaceholder
            title="ECOSYSTEM MODULES"
            description="Decentralized marketplace, DAO governance, AI/AGI tools, NFT tokenization, Academy, ESG"
          />
        </Section>

        <Section id="community">
          <SectionPlaceholder
            title="DICE COMMUNITY"
            description="For Developers, Investors, Creators, and Entrepreneurs"
          />
        </Section>

        <Section id="partners">
          <SectionPlaceholder
            title="PARTNER STACK"
            description="MeTTa, KRNL, Cardano, SingularityNET, and more"
          />
        </Section>

        <Section id="impact">
          <SectionPlaceholder
            title="BEYOND THE CODE"
            description="Impact & storytelling docuseries"
          />
        </Section>

        <Section id="join">
          <SectionPlaceholder
            title="JOIN THE DAO"
            description="Onboard and access the BASIX ecosystem"
          />
        </Section>
      </div>

      <Footer />
    </Layout>
  );
}

export default App;
