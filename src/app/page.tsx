import AboutSection from "@/components/Aboutsection";
import ContactSection from "@/components/Contactsection";
import ExperienceSection from "@/components/Experiencesection";
import Footer from "@/components/Footer";
import HeroScanner from "@/components/Herosection";
import ProjectsSection from "@/components/Projectsection";


export default function Home() {
  return (
  <>
  <HeroScanner/>
  <AboutSection/>
  <ExperienceSection/>
  <ProjectsSection/>
  <ContactSection/>
  <Footer/>
  </>
  );
}
