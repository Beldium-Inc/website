import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import beldiumLogo from "@/assets/beldium-logo.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigation = [
  { name: "Platform", href: "/platform" },
  {
    name: "Solutions",
    children: [
      { name: "For Miners", href: "/miners" },
      { name: "For Buyers", href: "/buyers" },
      { name: "For Regulators", href: "/regulators" },
    ],
  },
  { name: "Compliance", href: "/compliance" },
  { name: "About", href: "/about" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <nav className="container-wide flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-[#fafafa] p-1">
            <img src={beldiumLogo} alt="Beldium" className="h-full w-full object-contain rounded-full" />
          </div>
          <span className="text-xl font-bold text-foreground tracking-tight">Beldium</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navigation.map((item) =>
            item.children ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-48">
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.name} asChild>
                      <Link
                        to={child.href}
                        className={cn(
                          "w-full cursor-pointer",
                          isActive(child.href) && "bg-accent"
                        )}
                      >
                        {child.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button size="sm" asChild>
            <a href="https://app.beldium.com/" target="_blank" rel="noopener noreferrer">
              Sign In / Get Started
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="container-wide py-4 space-y-2">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name} className="space-y-1">
                  <span className="block px-3 py-2 text-sm font-medium text-muted-foreground">
                    {item.name}
                  </span>
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      to={child.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "block px-6 py-2 text-sm transition-colors",
                        isActive(child.href)
                          ? "text-foreground bg-accent rounded-lg"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-3 py-2 text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "text-foreground bg-accent rounded-lg"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Button asChild>
                <a href="https://app.beldium.com/" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                  Sign In / Get Started
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
