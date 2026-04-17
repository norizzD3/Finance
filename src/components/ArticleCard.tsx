import { Link } from "react-router-dom";
import { Clock, User, ChevronRight } from "lucide-react";
import { Article } from "../types";
import { cn } from "../lib/utils";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  return (
    <div 
      className={cn(
        "group bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100",
        featured ? "md:flex" : ""
      )}
    >
      <div className={cn("relative overflow-hidden", featured ? "md:w-1/2" : "h-48")}>
        <img
          src={article.featuredImage}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-blue-600 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
            {article.category}
          </span>
        </div>
      </div>

      <div className={cn("p-6 flex flex-col justify-between", featured ? "md:w-1/2" : "")}>
        <div>
          <h3 className={cn(
            "font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2",
            featured ? "text-2xl md:text-3xl leading-tight" : "text-xl"
          )}>
            {article.title}
          </h3>
          <p className="text-gray-500 text-sm line-clamp-2 md:line-clamp-3 mb-4">
            {article.excerpt}
          </p>
        </div>

        <div className="flex items-center justify-between mt-4 md:mt-0">
          <div className="flex items-center space-x-3 text-xs text-gray-400">
            <div className="flex items-center">
              <User className="w-3 h-3 mr-1" />
              {article.author}
            </div>
            <div className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {article.readingTime}
            </div>
          </div>
          <Link 
            to={`/blog/${article.slug}`} 
            className="inline-flex items-center text-blue-600 text-sm font-semibold group-hover:translate-x-1 transition-transform"
          >
            Read More
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
