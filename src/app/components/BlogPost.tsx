import { Link, useParams } from "react-router";
import { Seo } from "./Seo";
import { articles } from "../../data/articles";

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl tracking-tight text-stone-900 mb-4">Tekst nije pronađen</h1>
        <Link to="/blog" className="text-sm text-brand hover:text-brand-dark transition-colors">
          ← Natrag na blog
        </Link>
      </div>
    );
  }

  const otherArticles = articles.filter((a) => a.slug !== slug);

  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <Seo
        title={article.title}
        description={article.excerpt}
        path={`/blog/${article.slug}`}
      />

      {/* Back link */}
      <Link to="/blog" className="text-sm text-stone-500 hover:text-stone-900 transition-colors mb-10 inline-block">
        ← Svi tekstovi
      </Link>

      {/* Article header */}
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl md:text-5xl tracking-tight text-stone-900 mb-6 leading-tight">
          {article.title}
        </h1>
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span key={tag} className="text-xs px-2.5 py-1 bg-stone-100 text-stone-500 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Article content */}
      <div className="max-w-3xl space-y-6 mb-24">
        {article.content.map((para, i) => (
          <p key={i} className="text-stone-600 leading-relaxed">
            {para}
          </p>
        ))}
      </div>

      {/* More articles */}
      <section className="border-t border-stone-200 pt-16">
        <h2 className="text-2xl tracking-tight text-stone-900 mb-10">Više tekstova</h2>
        <div className="space-y-0 divide-y divide-stone-100">
          {otherArticles.map((other) => (
            <Link
              key={other.slug}
              to={`/blog/${other.slug}`}
              className="group block py-8"
            >
              <h3 className="text-lg tracking-tight text-stone-900 group-hover:text-brand transition-colors mb-2">
                {other.title}
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed max-w-2xl mb-3">{other.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {other.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 bg-stone-100 text-stone-500 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
