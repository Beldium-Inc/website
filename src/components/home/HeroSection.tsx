import { Button } from "@/components/ui/button";
import { ArrowRight, LogIn } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover">

          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent-foreground backdrop-blur-sm text-sm font-medium mb-6">
              <span className="h-2 w-2 rounded-full bg-mineral-teal animate-pulse" />
              Structured infrastructure for Africa's lithium future
            </span>
          </div>
          
          <h1 className="animate-fade-up animation-delay-100 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Africa's Trusted Lithium Supply Chain Infrastructure
          </h1>
          
          <p className="animate-fade-up animation-delay-200 text-lg sm:text-xl text-primary-foreground/80 mb-8 max-w-2xl">Digitizing mining, compliance, trade, and logistics for Africa's mineral future, connecting verified miners with global buyers through transparent, structured infrastructure.

          </p>
          
          <div className="animate-fade-up animation-delay-300 flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" asChild className="group">
              <a href="https://app.beldium.com/" target="_blank" rel="noopener noreferrer">
                Join the Infrastructure
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
              <a href="https://app.beldium.com/" target="_blank" rel="noopener noreferrer">
                <LogIn className="mr-2 h-5 w-5" />
                Access Your Dashboard
              </a>
            </Button>
          </div>
          
          {/* Stats Preview */}
          <div className="animate-fade-up animation-delay-400 mt-16 grid grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/20">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary-foreground">1,730</p>
              <p className="text-sm text-primary-foreground/60">Verified Miners</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary-foreground">7</p>
              <p className="text-sm text-primary-foreground/60">Nigerian States</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary-foreground">30%</p>
              <p className="text-sm text-primary-foreground/60">Trade Friction Reduction</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>);

}