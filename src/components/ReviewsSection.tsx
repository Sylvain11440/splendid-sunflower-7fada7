import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "regine.legier",
    text: "Rénovation de tout un appartement sur Narbonne. Les Artisans du bain sont intervenus entièrement pour la réfection de la salle d'eau, des wc, de la cuisine. C'est une entreprise qui s'est très bien entendue avec les autres entrepreneurs et le chantier a duré seulement 4 mois. Ce fut un plaisir de traiter avec eux. Service après vente très performant. Je recommande grandement.",
    location: "Narbonne",
  },
];

const ReviewsSection = () => {
  return (
    <section id="avis" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:mb-20"
        >
          <p className="mb-4 text-xs font-light tracking-[0.3em] uppercase text-muted-foreground">
            Ils nous font confiance
          </p>
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            Avis de nos <em className="font-normal italic">clients</em>
          </h2>
          <div className="mt-6 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-warm text-warm" />
            ))}
            <span className="ml-3 text-sm text-muted-foreground">
              5/5 · 30+ avis sur Google &amp; Pages Jaunes
            </span>
          </div>
        </motion.div>

        <div className="mx-auto grid max-w-2xl gap-8 md:gap-10">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="border border-border p-8 md:p-10"
            >
              <div className="mb-5 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-warm text-warm" />
                ))}
              </div>
              <p className="mb-6 text-sm italic leading-relaxed text-muted-foreground">
                "{review.text}"
              </p>
              <div>
                <p className="text-sm font-medium text-foreground">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
