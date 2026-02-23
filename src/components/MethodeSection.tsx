import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Rendez-vous Découverte",
    description:
      "Nous échangeons sur vos envies, votre budget et visitons votre espace pour comprendre chaque détail.",
  },
  {
    number: "02",
    title: "Conception de votre Projet Unique",
    description:
      "Notre designer conçoit votre salle de bain avec les matériaux, couleurs et agencements qui vous correspondent.",
  },
  {
    number: "03",
    title: "Installation Soignée",
    description:
      "Nos artisans réalisent votre salle de bain avec précision. Vous n'avez qu'à profiter du résultat.",
  },
];

const MethodeSection = () => {
  return (
    <section id="methode" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
            Notre Méthode
          </span>
          <h2 className="text-4xl md:text-5xl text-serif text-foreground mt-3 mb-5">
            Un processus simple et transparent
          </h2>
          <div className="w-16 h-[2px] bg-primary mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-border" />

          <div className="space-y-14">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-12"
              >
                {/* Dot */}
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-foreground" />

                <span className="text-sm tracking-[0.2em] text-muted-foreground">
                  {step.number}
                </span>
                <h3 className="text-serif text-xl md:text-2xl font-semibold text-foreground mt-1 mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodeSection;
