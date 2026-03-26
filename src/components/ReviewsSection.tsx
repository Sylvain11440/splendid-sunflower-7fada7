import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Régine L.",
    text: "Rénovation de tout un appartement sur Narbonne. Les Artisans du bain sont intervenus entièrement pour la réfection de la salle d'eau, des wc, de la cuisine. C'est une entreprise qui s'est très bien entendue avec les autres entrepreneurs. Service après vente très performant. Je recommande grandement.",
    location: "Narbonne",
  },
  {
    name: "Gema",
    text: "Rénovation complète de notre salle de bain. Travail soigné et réalisé dans les temps. Nous avons apprécié le professionnalisme et la gentillesse des intervenants. Entreprise à recommander sans problème.",
    location: "Pages Jaunes",
  },
  {
    name: "D42",
    text: "Rénovation complète d'une salle de bains. Travail très professionnel. Chantier très propre exécuté dans le respect des délais. Artisan consciencieux et méticuleux, soucieux du détail. À l'écoute du client avec de bons conseils. Entreprise à recommander.",
    location: "Pages Jaunes",
  },
  {
    name: "Romanc",
    text: "Entreprise très professionnelle, respect des délais, propreté du chantier, conseils précieux, amabilité et compétence. Tout a été parfait pour la réfection de notre salle de bains.",
    location: "Pages Jaunes",
  },
  {
    name: "Marie-Chantal C.",
    text: "Artisans compétents, sérieux, respectueux, à l'écoute du client tout en proposant toujours la meilleure solution pour toujours faire mieux, pour l'entière satisfaction du client. À recommander pour vos futurs travaux.",
    location: "Pages Jaunes",
  },
  {
    name: "Mimosas11",
    text: "Nous sommes très content des ouvrages faits par Les Artisans du bain. Efficacité, propreté, discrétion, et professionnalisme. Les détails sont soignés et les conseils ont été très appréciés. Ravis de tout. Merci.",
    location: "Pages Jaunes",
  },
  {
    name: "Bourdeix",
    text: "Une équipe très professionnelle, à l'écoute. Le travail est impeccable et effectué dans les délais. Notre salle de bain a été entièrement rénovée et le « avant » « après » est impressionnant. Je recommande chaleureusement les artisans du bain.",
    location: "Pages Jaunes",
  },
  {
    name: "Cochrisna",
    text: "Une équipe de professionnels à l'écoute de mes demandes, avec des conseils judicieux. Le résultat est sublime, au-delà de mes attentes. Le travail est de qualité et soigneux. Je referai appel à leur compétence en toute confiance.",
    location: "Pages Jaunes",
  },
  {
    name: "Anne-Laure V.",
    text: "Artisan très compétent, fiable, réactif et qui a fait du beau travail pour ma salle de bain ! Merci.",
    location: "Google",
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
              5/5 · +30 avis sur Google &amp; Pages Jaunes
            </span>
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
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
