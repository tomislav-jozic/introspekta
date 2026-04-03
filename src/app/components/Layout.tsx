import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Početna" },
  { to: "/o-meni", label: "O meni" },
  { to: "/pristup", label: "Pristup" },
  { to: "/usluge", label: "Usluge" },
  { to: "/blog", label: "Blog" },
  { to: "/kontakt", label: "Kontakt" },
];

export function Layout() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl tracking-tight text-[#2C4A3E]" style={{ letterSpacing: "0.08em" }}>
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
                      ? "text-[#2C4A3E]"
                      : "text-stone-400 hover:text-stone-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/kontakt"
                className="ml-4 text-sm px-5 py-2.5 bg-[#2C4A3E] text-white hover:bg-[#233d33] transition-colors tracking-wide"
              >
                Rezervirajte termin
              </Link>
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
          {menuOpen && (
            <div className="md:hidden mt-6 pb-2 flex flex-col gap-5 border-t border-stone-100 pt-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm tracking-wide ${
                    isActive(link.to) ? "text-[#2C4A3E]" : "text-stone-500"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/kontakt"
                onClick={() => setMenuOpen(false)}
                className="text-sm px-5 py-3 bg-[#2C4A3E] text-white text-center tracking-wide"
              >
                Rezervirajte termin
              </Link>
            </div>
          )}
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-stone-200 mt-32 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="text-[#2C4A3E] tracking-widest text-sm mb-1">introspekta</p>
              <p className="text-xs text-stone-400">Psihoterapija · Zagreb</p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 text-xs text-stone-400">
              {navLinks.slice(1).map((link) => (
                <Link key={link.to} to={link.to} className="hover:text-stone-700 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-stone-200 text-xs text-stone-400">
            © {new Date().getFullYear()} Introspekta. Sva prava pridržana.
          </div>
        </div>
      </footer>
    </div>
  );
}
