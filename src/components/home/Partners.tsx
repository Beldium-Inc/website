import boiLogo from "@/assets/partners/boi-logo.png";
import lcciLogo from "@/assets/partners/lcci-logo.png";
import vggLogo from "@/assets/partners/vgg-logo.png";
import ghcLogo from "@/assets/partners/ghc-logo.png";

const partners = [
  { name: "Bank of Industry", logo: boiLogo },
  { name: "Lagos Chamber of Commerce", logo: lcciLogo },
  { name: "Venture Garden Group", logo: vggLogo },
  { name: "GreenHouse Capital", logo: ghcLogo },
];

export function Partners() {
  // Double the partners for seamless infinite loop
  const doubledPartners = [...partners, ...partners];

  return (
    <section className="section-padding bg-secondary/30 overflow-hidden">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Who We Are Working With
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading institutions across Nigeria's innovation and development ecosystem.
          </p>
        </div>

        {/* Animated sliding container */}
        <div className="relative w-full">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-secondary/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-secondary/30 to-transparent z-10 pointer-events-none" />
          
          {/* Sliding track */}
          <div className="flex animate-slide-partners">
            {doubledPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center px-8 lg:px-12"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-14 sm:h-16 lg:h-20 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
