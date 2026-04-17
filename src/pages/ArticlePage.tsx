import { useParams, Link } from "react-router-dom";
import { SAMPLE_ARTICLES } from "../constants/articles";
import { Clock, User, Share2, Facebook, Twitter, Linkedin, ChevronLeft, Bookmark, Mail } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { motion } from "motion/react";

import SEO from "../components/SEO";

export default function ArticlePage() {
  const { slug } = useParams();
  const article = SAMPLE_ARTICLES.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
        <Link to="/blog" className="text-blue-600 hover:underline">Return to Blog</Link>
      </div>
    );
  }

  const relatedArticles = SAMPLE_ARTICLES
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="bg-white min-h-screen">
      <SEO title={article.title} description={article.excerpt} />
      {/* Header / Intro */}
      <header className="pt-24 pb-12 bg-slate-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/blog" className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600 mb-8 font-medium">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Blog
          </Link>
          
          <div className="mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase rounded-full">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-950 mb-8 leading-[1.1]">
            {article.title}
          </h1>

          <div className="flex items-center justify-between py-6 border-y border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                {article.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">{article.author}</p>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <span>{article.publishedAt}</span>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {article.readingTime}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
               <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                  <Bookmark className="w-5 h-5" />
               </button>
               <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                  <Share2 className="w-5 h-5" />
               </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Sidebar - Social Share (Sticky) */}
        <aside className="hidden lg:block lg:col-span-1">
          <div className="sticky top-32 flex flex-col items-center space-y-6">
            <Facebook className="w-6 h-6 text-gray-300 hover:text-[#1877F2] cursor-pointer transition-colors" />
            <Twitter className="w-6 h-6 text-gray-300 hover:text-[#1DA1F2] cursor-pointer transition-colors" />
            <Linkedin className="w-6 h-6 text-gray-300 hover:text-[#0A66C2] cursor-pointer transition-colors" />
          </div>
        </aside>

        {/* Content */}
        <div className="lg:col-span-8">
           <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={article.featuredImage} 
                alt={article.title} 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
           </div>

           <div className="prose prose-lg prose-slate max-w-none">
              <div className="article-body">
                <ReactMarkdown>{article.content}</ReactMarkdown>
              </div>
           </div>

           {/* Ad Placeholder */}
           <div className="my-16 p-8 bg-gray-50 border border-dashed border-gray-300 rounded-2xl text-center">
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-2 font-bold">Featured Resource</p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Start Your Wealth Building Journey</h3>
              <p className="text-gray-500 mb-6 font-medium">Get our exclusive "Side Hustle Launchpad" guide for free.</p>
              <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
                 Get the Free Guide
              </button>
           </div>

           {/* Tags */}
           <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-100">
              {article.tags.map(tag => (
                <span key={tag} className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full font-medium">
                  #{tag}
                </span>
              ))}
           </div>
        </div>

        {/* Right Sidebar - Newsletter & Related */}
        <aside className="lg:col-span-3 space-y-12">
            <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100">
               <Mail className="w-8 h-8 text-emerald-600 mb-4" />
               <h4 className="text-xl font-bold text-emerald-900 mb-2">Money Mastery</h4>
               <p className="text-emerald-700 text-sm mb-6 leading-relaxed">Join 50k+ list of smart investors and money makers. Weekly tips in your inbox.</p>
               <input 
                 type="email" 
                 placeholder="Your email" 
                 className="w-full px-4 py-3 bg-white border border-emerald-200 rounded-xl mb-3 focus:outline-none focus:border-emerald-500 shadow-sm"
               />
               <button className="w-full py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all shadow-md shadow-emerald-200">
                 Join My Newsletter
               </button>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-xs">Related Content</h4>
              <div className="space-y-6">
                 {relatedArticles.map(rel => (
                   <Link key={rel.id} to={`/blog/${rel.slug}`} className="group block">
                      <div className="flex items-start gap-4">
                         <img src={rel.featuredImage} alt={rel.title} className="w-16 h-16 rounded-xl object-cover shrink-0 p-px border border-gray-100" referrerPolicy="no-referrer" />
                         <div>
                            <h5 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">{rel.title}</h5>
                            <p className="text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-tighter">{rel.category}</p>
                         </div>
                      </div>
                   </Link>
                 ))}
              </div>
            </div>
        </aside>
      </div>

      {/* Styles for article prose */}
      <style>{`
        .article-body h1 { @apply text-4xl font-extrabold text-gray-950 mb-8 mt-12 px-0; }
        .article-body h2 { @apply text-3xl font-bold text-gray-900 mb-6 mt-12; }
        .article-body h3 { @apply text-2xl font-bold text-gray-900 mb-4 mt-8; }
        .article-body p { @apply text-gray-700 leading-relaxed mb-6 text-lg; }
        .article-body ul { @apply list-disc list-outside ml-6 mb-6 text-lg text-gray-700; }
        .article-body li { @apply mb-3; }
        .article-body strong { @apply font-bold text-gray-950; }
      `}</style>
    </div>
  );
}
