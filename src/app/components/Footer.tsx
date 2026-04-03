import { Link } from "react-router";
import { navLinks } from "./Header";

export function Footer() {
  return (
    <footer className="mt-32 bg-brand">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="text-white tracking-widest text-sm mb-1">introspekta</p>
            <p className="text-xs text-white/50">Psihoterapija · Zagreb</p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 text-xs text-white/50">
            {navLinks.slice(1).map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/15 text-xs text-white/40">
          © {new Date().getFullYear()} Introspekta. Sva prava pridržana.
        </div>
      </div>
    </footer>
  );
}
