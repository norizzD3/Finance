import { useParams, Link } from "react-router-dom";
import { SAMPLE_ARTICLES } from "../constants/articles";
import ArticleCard from "../components/ArticleCard";
import { Search, SlidersHorizontal } from "lucide-react";

import SEO from "../components/SEO";

export default function Blog() {
  const { category } = useParams();
  
  const filteredArticles = category 
    ? SAMPLE_ARTICLES.filter(a => a.category.toLowerCase().replace(/ /g, '-') === category)
    : SAMPLE_ARTICLES;

  const title = category 
    ? category.split('-').map(w => w.charAt(0)?.toUpperCase() + w.slice(1)).join(' ')
    : "The Prosper Blog";

  return (
    <div className="bg-slate-50 min-h-screen pt-20 pb-32">
      <SEO title={title} description={`Expert guides and strategies for ${title}.`} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-950 mb-4">{title}</h1>
            <p className="text-gray-500 text-lg">
              {category 
                ? `Expert guides and strategies for ${title}.`
                : "Your source for making, saving, and growing your money."}
            </p>
          </div>
          
          <div className="flex gap-4">
             <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:border-blue-500 w-full md:w-64 shadow-sm"
                />
             </div>
             <button className="p-2 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 transition-colors">
                <SlidersHorizontal className="w-4 h-4 text-gray-600" />
             </button>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-2 mb-12">
           <Link 
            to="/blog" 
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${!category ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-100'}`}
           >
            All Posts
           </Link>
           {['Make Money Online', 'Personal Finance', 'Investing', 'Credit & Loans'].map((cat) => (
             <Link 
              key={cat}
              to={`/category/${cat.toLowerCase().replace(/ /g, '-')}`}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${category === cat.toLowerCase().replace(/ /g, '-') ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-100'}`}
             >
              {cat}
             </Link>
           ))}
        </div>

        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No articles found in this category yet.</h2>
            <Link to="/blog" className="text-blue-600 hover:underline">Back to all posts</Link>
          </div>
        )}
      </div>
    </div>
  );
}
