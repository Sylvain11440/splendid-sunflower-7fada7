import { motion } from "framer-motion";
import { Ruler, Diamond, Hammer } from "lucide-react";

const expertises = [
  {
    icon: Ruler,
    title: "Conception sur-mesure",
    description:
      "Chaque projet est dessiné selon vos envies et les contraintes de votre espace. Un accompagnement personnalisé du premier croquis à la livraison finale.",
  },
  {
    icon: Diamond,
    title: "Matériaux nobles",
    description:
      "Dekton, Monolith, bois, grès cérame italien, robinetterie en laiton brossé… Nous sélectionnons les plus beaux matériaux pour sublimer votre salle de bain.",
  },
  {
    icon: Hammer,
    title: "Pose artisanale",
    description:
      "Nos artisans qualifiés maîtrisent les techniques traditionnelles et contemporaines pour une finition irréprochable, dans les règles de l'art.",
  },
];

const ExpertiseSection = () => {
  return (
    <section id="savoir-faire" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:mb-20"
        >
          <p className="mb-4 text-xs font-light tracking-[0.3em] uppercase text-muted-foreground">
            Nos expertises
          </p>
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            L'art du <em className="font-normal italic">sur-mesure</em>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {expertises.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group rounded-sm bg-background p-10 transition-shadow duration-300 hover:shadow-lg"
            >
              <item.icon
                className="mb-6 h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110"
                strokeWidth={1.2}
              />
              <h3 className="mb-4 text-xl font-medium tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
