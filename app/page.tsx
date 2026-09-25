import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CapabilityStrip from '@/components/CapabilityStrip';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import AboutTechnology from '@/components/AboutTechnology';
import Process from '@/components/Process';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Kevin | Full-Stack Developer & Digital Solutions Provider',
  description: 'I design and develop fast, responsive websites, e-commerce platforms and custom web applications that turn business ideas into reliable digital solutions.',
  keywords: ['full-stack developer', 'web developer Kenya', 'website development', 'e-commerce developer', 'custom web applications', 'business website development'],
  openGraph: {
    title: 'Kevin | Full-Stack Developer & Digital Solutions Provider',
    description: 'I design and develop fast, responsive websites, e-commerce platforms and custom web applications that turn business ideas into reliable digital solutions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kevin | Full-Stack Developer & Digital Solutions Provider',
    description: 'I design and develop fast, responsive websites, e-commerce platforms and custom web applications that turn business ideas into reliable digital solutions.',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <CapabilityStrip />
      <Projects />
      <Services />
      <AboutTechnology />
      <Process />
      <ContactForm />
      <Footer />
    </main>
  );
}
