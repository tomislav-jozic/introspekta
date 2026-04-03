import { Link } from "react-router";
import { Seo } from "./Seo";
import { articles } from "../../data/articles";

export function Blog() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <Seo
        title="Blog"
        description="Tekstovi o mentalnom zdravlju, emocionalnim obrascima i psihološkoj otpornosti. Maladaptivno sanjarenje, kronični sram, kreativnost u psihoterapiji."
        path="/blog"
      />
      <div className="max-w-2xl mb-20">
        <p className="text-xs tracking-[0.2em] text-brand uppercase mb-4">Blog</p>
        <h1 className="text-5xl tracking-tight text-stone-900 mb-6">Tekstovi i razmišljanja.</h1>
        <p className="text-lg text-stone-500 leading-relaxed">
          Kratki tekstovi o temama vezanim uz mentalno zdravlje, emocionalne obrasce i
          psihološku otpornost.
        </p>
      </div>

      <div>
        {articles.map((article) => (
          <article key={article.slug} className="border-t border-stone-100">
            <Link
              to={`/blog/${article.slug}`}
              className="block py-10 group"
            >
              <h2 className="text-xl tracking-tight text-stone-900 group-hover:text-brand transition-colors mb-2">
                {article.title}
              </h2>
              <p className="text-sm text-stone-500 leading-relaxed max-w-2xl mb-4">{article.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2.5 py-1 bg-stone-100 text-stone-500 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </article>
        ))}
        <div className="border-t border-stone-100" />
      </div>
    </div>
  );
}
