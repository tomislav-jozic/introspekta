import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  const location = useLocation();

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

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24">
        <div key={location.pathname} className="animate-page-enter">
          <Suspense fallback={<div className="min-h-[60vh]" />}>
            <Outlet />
          </Suspense>
        </div>
      </main>

      <Footer />
    </div>
  );
}
