import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import { CtaButton } from "./CtaButton";

const navLinks = [
  { to: "/", label: "Početna" },
  { to: "/o-meni", label: "O meni" },
  { to: "/pristup", label: "Pristup" },
  { to: "/usluge", label: "Usluge" },
  { to: "/blog", label: "Blog" },
  { to: "/kontakt", label: "Kontakt" },
];

export { navLinks };

export function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 animate-slide-down">
      <div className="max-w-5xl mx-auto bg-white/60 border border-white/50 shadow-lg px-6 py-4 rounded-xl backdrop-blur-md">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl tracking-tight text-brand" style={{ letterSpacing: "0.08em" }}>
            introspekta
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm tracking-wide transition-colors ${
                  isActive(link.to)
                    ? "text-brand"
                    : "text-stone-400 hover:text-stone-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <CtaButton to="/kontakt" className="ml-4 px-5 py-2.5">
              Rezervirajte termin
            </CtaButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-stone-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden grid transition-[grid-template-rows] duration-300 ease-out ${menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
          <div className="overflow-hidden">
            <div className="mt-4 pb-2 flex flex-col gap-4 border-t border-stone-200/40 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm tracking-wide ${
                    isActive(link.to) ? "text-brand" : "text-stone-500"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <CtaButton to="/kontakt" onClick={() => setMenuOpen(false)} className="px-5 py-3 text-center">
                Rezervirajte termin
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
