import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import gallery1 from "@/assets/gallery/gallery-1.jpg";
import gallery2 from "@/assets/gallery/gallery-2.jpg";
import gallery3 from "@/assets/gallery/gallery-3.jpg";
import gallery4 from "@/assets/gallery/gallery-4.jpg";
import gallery5 from "@/assets/gallery/gallery-5.jpg";
import gallery6 from "@/assets/gallery/gallery-6.jpg";
import gallery7 from "@/assets/gallery/gallery-7.jpg";
import gallery8 from "@/assets/gallery/gallery-8.jpg";
import gallery9 from "@/assets/gallery/gallery-9.jpg";
import gallery10 from "@/assets/gallery/gallery-10.jpg";
import gallery11 from "@/assets/gallery/gallery-11.jpg";
import gallery12 from "@/assets/gallery/gallery-12.jpg";
import gallery13 from "@/assets/gallery/gallery-13.jpg";

const galleryImages = [
  { src: gallery1, alt: "Double vasque en pierre avec miroir rétroéclairé" },
  { src: gallery2, alt: "Douche à l'italienne avec banc bois et carrelage foncé" },
  { src: gallery3, alt: "Meuble vasque noir avec miroir LED et pierre naturelle" },
  { src: gallery4, alt: "Salle de bain moderne avec paroi verrière noire et meuble bois" },
  { src: gallery5, alt: "Douche italienne avec niche bois et robinetterie noire" },
  { src: gallery6, alt: "Douche avec carrelage 3D et éclairage LED indirect" },
  { src: gallery7, alt: "Salle de bain design avec miroirs ronds LED et mosaïque dorée" },
  { src: gallery8, alt: "Salle de bain marbre blanc avec double vasque noire et miroir LED" },
  { src: gallery9, alt: "Salle de bain béton et bois avec sèche-serviettes chromé" },
  { src: gallery10, alt: "Cuisine moderne avec îlot central et murs végétaux" },
  { src: gallery11, alt: "Salle de bain boisée avec baignoire et meuble suspendu" },
  { src: gallery12, alt: "Baignoire îlot avec meuble bois cannelé et robinetterie dorée" },
  { src: gallery13, alt: "Baignoire habillée bois avec niche éclairée et carrelage ardoise" },
];

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  return (
    <section id="realisations" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl text-serif text-foreground mt-3 mb-5">
            Nos Réalisations
          </h2>
          <div className="w-16 h-[2px] bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Découvrez quelques-unes de nos créations sur-mesure, alliant
            esthétique contemporaine et savoir-faire artisanal.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => openLightbox(index)}
              className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Fermer"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Photo précédente"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            {/* Image */}
            <motion.img
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={galleryImages[selectedIndex].src}
              alt={galleryImages[selectedIndex].alt}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Photo suivante"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Counter */}
            <span className="absolute bottom-6 text-white/60 text-sm tracking-wider">
              {selectedIndex + 1} / {galleryImages.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
