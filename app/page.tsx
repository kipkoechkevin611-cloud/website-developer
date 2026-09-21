import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Technology from '@/components/Technology';
import WhyWorkWithMe from '@/components/WhyWorkWithMe';
import Process from '@/components/Process';
import ContactForm from '@/components/ContactForm';
import Contact from '@/components/Contact';
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
      <About />
      <Services />
      <Projects />
      <Technology />
      <WhyWorkWithMe />
      <Process />
      <ContactForm />
      <Contact />
      <Footer />
    </main>
  );
}
