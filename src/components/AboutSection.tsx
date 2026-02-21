import { motion } from "framer-motion";
import aboutImage from "@/assets/about-craftsmanship.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-16">
        <div className="grid items-center gap-16 md:grid-cols-2 md:gap-24">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden"
          >
            <img
              src={aboutImage}
              alt="Artisan posant du marbre dans une salle de bain"
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="mb-4 text-xs font-light tracking-[0.3em] uppercase text-muted-foreground">
              Notre histoire
            </p>
            <h2 className="mb-8 text-3xl font-medium leading-snug tracking-tight md:text-4xl lg:text-5xl">
              Un savoir-faire
              <br />
              <em className="font-normal italic">transmis de père en fils</em>
            </h2>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Depuis plus de trois décennies, la famille Dupont perpétue l'art
                de la rénovation de salles de bain d'exception. Chaque projet est
                une œuvre unique, pensée dans les moindres détails.
              </p>
              <p>
                Notre exigence ? L'excellence absolue. Des matériaux les plus
                nobles aux finitions les plus raffinées, nous transformons vos
                espaces en véritables sanctuaires de bien-être.
              </p>
            </div>
            <div className="mt-10 flex gap-12">
              <div>
                <p className="text-serif text-3xl font-semibold text-foreground">35+</p>
                <p className="mt-1 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  Années d'expérience
                </p>
              </div>
              <div>
                <p className="text-serif text-3xl font-semibold text-foreground">500+</p>
                <p className="mt-1 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  Projets réalisés
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
