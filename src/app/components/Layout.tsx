import { useState, useEffect } from "react";
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const headings = document.querySelectorAll("main h1, main h2");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 animate-slide-down">
        <div className="max-w-5xl mx-auto backdrop-blur-2xl bg-white/70 border border-white/50 shadow-lg px-6 py-4 rounded-xl">
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
              <Link
                to="/kontakt"
                className="ml-4 text-sm px-5 py-2.5 bg-brand text-white hover:bg-brand-dark transition-colors tracking-wide rounded-lg"
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
                <Link
                  to="/kontakt"
                  onClick={() => setMenuOpen(false)}
                  className="text-sm px-5 py-3 bg-brand text-white text-center tracking-wide rounded-lg"
                >
                  Rezervirajte termin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        <Outlet />
      </main>

      <footer className="border-t border-stone-200 mt-32 bg-stone-50">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="text-brand tracking-widest text-sm mb-1">introspekta</p>
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
