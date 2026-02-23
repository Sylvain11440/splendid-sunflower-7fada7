import { motion } from "framer-motion";
import { MapPin, Shield, Droplets, HeartHandshake } from "lucide-react";

const engagements = [
  {
    icon: MapPin,
    title: "Savoir-faire local",
    description:
      "Un artisan ancré dans sa région, à l'écoute de vos besoins et disponible à chaque étape.",
  },
  {
    icon: Shield,
    title: "Garantie décennale",
    description:
      "Nous nous engageons sur la durabilité de nos réalisations avec une garantie complète.",
  },
  {
    icon: Droplets,
    title: "Étanchéité parfaite",
    description:
      "Douches à l'italienne réalisées dans les règles de l'art avec une étanchéité irréprochable.",
  },
  {
    icon: HeartHandshake,
    title: "Accompagnement de A à Z",
    description:
      "Du premier rendez-vous à la livraison, un interlocuteur unique vous guide tout au long du projet.",
  },
];

const EngagementsSection = () => {
  return (
    <section id="engagements" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
            Nos Engagements
          </span>
          <h2 className="text-4xl md:text-5xl text-serif text-foreground mt-3 mb-5">
            Pourquoi nous choisir
          </h2>
          <div className="w-16 h-[2px] bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {engagements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-2xl p-8 text-center shadow-sm border border-border/50"
            >
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-serif text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementsSection;
