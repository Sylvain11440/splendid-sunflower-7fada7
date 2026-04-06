import { Phone, Mail, Facebook, Instagram } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-foreground py-20 text-primary-foreground md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-16">
        <div className="grid gap-12 md:grid-cols-3 md:gap-16">
          {/* Brand */}
          <div>
            <h3 className="text-serif text-2xl font-semibold tracking-wide">
              Les Artisans du Bain
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/60">
              Rénovation haut de gamme de salles de bain et douches à l'italienne.
              Un savoir-faire familial depuis 2005.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-6 text-xs font-light tracking-[0.3em] uppercase text-primary-foreground/50">
              Contact
            </p>
            <div className="space-y-4">
              <a
                href="tel:+33606840070"
                className="flex items-center gap-3 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                <Phone className="h-4 w-4" strokeWidth={1.5} />
                06 06 84 00 70
              </a>
              <a
                href="mailto:contact@lesartisansdubain.fr"
                className="flex items-center gap-3 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} />
                contact@lesartisansdubain.fr
              </a>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://www.facebook.com/lesartisansdubain/?locale=fr_FR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" strokeWidth={1.5} />
                </a>
                <a
                  href="https://www.instagram.com/lesartisansdubain/?hl=fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" strokeWidth={1.5} />
                </a>
                <a
                  href="https://pin.it/1Z76NvLAG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                  aria-label="Pinterest"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 12a4 4 0 1 1 8 0c0 2.5-1.5 5-3 6.5l-1-3.5" />
                    <path d="M12 2a10 10 0 1 0 4 19.2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <p className="mb-6 text-xs font-light tracking-[0.3em] uppercase text-primary-foreground/50">
              Votre projet
            </p>
            <p className="mb-6 text-sm leading-relaxed text-primary-foreground/70">
              Parlons de votre projet de rénovation. Nous vous offrons une
              consultation et un devis personnalisé sans engagement.
            </p>
            <a
              href="mailto:contact@artisansdubain.fr"
              className="inline-block border border-primary-foreground/30 px-8 py-3 text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground transition-all duration-300 hover:border-primary-foreground/60 hover:bg-primary-foreground/5"
            >
              Demander un devis
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-primary-foreground/10 pt-8">
          <p className="text-center text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Les Artisans du Bain · Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
