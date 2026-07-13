import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SEO } from "@/components/SEO";
import { useToast } from "@/hooks/use-toast";
import beldiumLogo from "@/assets/beldium-logo.jpg";

const footerLinks = [
  { name: "About", href: "/about" },
  { name: "Platform", href: "/platform" },
  { name: "Compliance", href: "/compliance" },
  { name: "Contact", href: "/contact" },
];

const ComingSoon = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);

    try {
      const response = await fetch("/.netlify/functions/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error("Request failed");

      toast({
        title: "You're on the list!",
        description: "We'll email you as soon as the Beldium app is live.",
      });
      setSubmitted(true);
      setEmail("");
    } catch {
      toast({
        title: "Something went wrong",
        description: "We couldn't add you to the waitlist. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="Coming Soon"
        description="The Beldium app is launching soon. Join the waitlist to get early access to Africa's first digitized lithium supply chain infrastructure."
        canonical="/coming-soon"
      />

      {/* Minimal Header */}
      <header className="border-b border-border/50">
        <nav className="container-wide flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-[#fafafa] p-1">
              <img src={beldiumLogo} alt="Beldium" className="h-full w-full object-contain rounded-full" />
            </div>
            <span className="text-xl font-bold text-foreground tracking-tight">Beldium</span>
          </Link>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/">
              Back to home
            </Link>
          </Button>
        </nav>
      </header>

      {/* Hero */}
      <main className="flex-1 flex items-center">
        <section className="section-padding w-full">
          <div className="container-wide">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-navy-light to-accent p-8 sm:p-12 lg:p-16">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 mb-6 text-sm font-medium text-primary-foreground">
                  <Sparkles className="h-4 w-4" />
                  Launching Q4 2026
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                  The Beldium app is coming soon
                </h1>

                <p className="text-lg sm:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
                  A single platform to trace, verify, and trade lithium across Africa's supply
                  chain, built for miners, buyers, and regulators. Be first to know when we open
                  the doors.
                </p>

                {submitted ? (
                  <div className="flex items-center justify-center gap-2 text-primary-foreground font-medium">
                    <CheckCircle2 className="h-6 w-6" />
                    Thanks, you're on the waitlist.
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
                  >
                    <Input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 bg-primary-foreground/95 border-0 text-foreground placeholder:text-muted-foreground"
                      aria-label="Email address"
                    />
                    <Button
                      type="submit"
                      size="lg"
                      variant="secondary"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto group flex-shrink-0"
                    >
                      {isSubmitting ? "Joining..." : "Join Waitlist"}
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </form>
                )}

                <p className="text-sm text-primary-foreground/60 mt-4">
                  No spam. We'll only email you when early access opens.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Beldium. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoon;
