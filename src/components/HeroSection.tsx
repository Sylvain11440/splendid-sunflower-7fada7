import { motion } from "framer-motion";
import heroImage from "@/assets/hero-bathroom.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Salle de bain design haut de gamme avec douche à l'italienne"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 flex items-center justify-between px-8 py-6 md:px-16"
      >
        <div className="text-primary-foreground">
          <span className="text-serif text-2xl font-semibold tracking-wide">
            Les Artisans du Bain
          </span>
        </div>
        <div className="hidden items-center gap-8 text-sm font-light tracking-widest uppercase text-primary-foreground/90 md:flex">
          <a href="#about" className="transition-opacity hover:opacity-70">À propos</a>
          <a href="#savoir-faire" className="transition-opacity hover:opacity-70">Savoir-faire</a>
          <a href="#avis" className="transition-opacity hover:opacity-70">Avis</a>
          <a href="#contact" className="transition-opacity hover:opacity-70">Contact</a>
        </div>
      </motion.nav>

      {/* Content */}
      <div className="relative z-10 flex h-[calc(100vh-88px)] flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-4 text-xs font-light tracking-[0.3em] uppercase text-primary-foreground/80"
        >
          Rénovation haut de gamme · Depuis 2005
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mb-8 max-w-4xl text-4xl font-medium leading-tight tracking-tight text-primary-foreground md:text-6xl lg:text-7xl"
        >
          Votre salle de bain
          <br />
          <em className="font-normal italic">d'exception</em> commence ici
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <a
            href="#contact"
            className="inline-block border border-primary-foreground/60 px-10 py-4 text-xs font-medium tracking-[0.25em] uppercase text-primary-foreground transition-all duration-300 hover:border-primary-foreground hover:bg-primary-foreground/10"
          >
            Devis Gratuit
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="h-12 w-[1px] bg-primary-foreground/40"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
