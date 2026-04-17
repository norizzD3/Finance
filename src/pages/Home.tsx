import { Link } from "react-router-dom";
import { ArrowRight, Star, TrendingUp, Shield, Zap, CheckCircle2, DollarSign, Calculator, Briefcase, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { SAMPLE_ARTICLES } from "../constants/articles";
import ArticleCard from "../components/ArticleCard";
import CalculatorCard from "../components/CalculatorCard";
import { cn } from "../lib/utils";

import SEO from "../components/SEO";

export default function Home() {
  const featuredArticles = SAMPLE_ARTICLES.slice(0, 3);
  
  return (
    <div className="flex flex-col">
      <SEO title="Home" description="Your authority on financial independence, side hustles, and smart money management." />
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                  <Star className="w-3 h-3 mr-2 fill-blue-700" />
                  Your Guide to Financial Independence
                </div>
                <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-950 leading-tight mb-6">
                  Master Your <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Money</span>, <br />
                  Secure Your Future.
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0">
                  Data-driven insights, calculators, and side hustle guides to help you build wealth and achieve financial freedom in 2024.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link to="/blog" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center justify-center">
                    Read Our Guides
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link to="/tools" className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-bold hover:bg-gray-50 transition-all flex items-center justify-center">
                    Financial Tools
                    <Calculator className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
            
            <div className="flex-1 w-full lg:w-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-blue-600/5 translate-x-4 translate-y-4 rounded-3xl" />
                <div className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-2xl">
                   {/* Mini Dashboard Hero Image */}
                   <div className="space-y-6">
                     <div className="flex items-center justify-between">
                       <h4 className="font-bold text-gray-900">Weekly Progress</h4>
                       <span className="text-emerald-500 font-bold">+12.4%</span>
                     </div>
                     <div className="h-40 bg-slate-50 rounded-xl relative overflow-hidden flex items-end px-4 gap-2">
                        {[10, 15, 8, 25, 18, 22, 14, 30].map((h, i) => (
                          <div key={i} className="flex-1 bg-blue-500 rounded-t-sm" style={{ height: `${h * 3}%` }} />
                        ))}
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-blue-50 rounded-xl">
                          <p className="text-xs text-blue-600 font-bold mb-1 uppercase">Side Income</p>
                          <p className="text-xl font-bold text-blue-900">$2,450.00</p>
                        </div>
                        <div className="p-4 bg-emerald-50 rounded-xl">
                          <p className="text-xs text-emerald-600 font-bold mb-1 uppercase">Savings</p>
                          <p className="text-xl font-bold text-emerald-900">$1,820.00</p>
                        </div>
                     </div>
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Trusted by Financial Experts</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale">
            <div className="text-2xl font-black text-gray-900 italic">FORBES</div>
            <div className="text-2xl font-black text-gray-900 italic">FINANCE HUB</div>
            <div className="text-2xl font-black text-gray-900 italic">MONEY WEEK</div>
            <div className="text-2xl font-black text-gray-900 italic">THE SAVINGS</div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-950 sm:text-4xl">Explore by Category</h2>
            <p className="mt-4 text-lg text-gray-500">Tailored content to help you at every stage of your financial journey.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Make Money Online", desc: "Passive income, side hustles, and remote careers.", icon: Briefcase, color: "bg-blue-600" },
              { title: "Personal Finance", desc: "Budgeting, saving, and managing daily expenses.", icon: DollarSign, color: "bg-emerald-600" },
              { title: "Investing", desc: "Stocks, crypto, and long-term wealth building.", icon: TrendingUp, color: "bg-purple-600" },
              { title: "Credit & Loans", desc: "Improve scores and manage debt effectively.", icon: Shield, color: "bg-orange-600" },
            ].map((cat, i) => (
              <Link 
                key={i} 
                to={`/category/${cat.title.toLowerCase().replace(/ /g, '-')}`}
                className="group p-8 bg-slate-50 rounded-3xl hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className={cn("inline-flex items-center justify-center p-3 rounded-2xl mb-6 shadow-lg", cat.color)}>
                  <cat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cat.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{cat.desc}</p>
                <div className="flex items-center text-blue-600 font-bold text-sm">
                  Exlpore <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tools */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold text-gray-950 sm:text-4xl">Smart Financial Calculators</h2>
              <p className="mt-4 text-lg text-gray-500">Professional-grade tools to help you run the numbers on your future.</p>
            </div>
            <Link to="/tools" className="text-blue-600 font-bold flex items-center hover:underline">
              All Tools <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             <CalculatorCard 
              name="Loan Calculator"
              description="Calculate monthly payments and interest rates."
              path="/tools/loan-calculator"
              icon={Calculator}
              color="bg-blue-600"
             />
             <CalculatorCard 
              name="Savings Goal"
              description="Plan how much to save for your next big purchase."
              path="/tools/savings-calculator"
              icon={DollarSign}
              color="bg-emerald-600"
             />
             <CalculatorCard 
              name="Budget Planner"
              description="Optimize your monthly spending workflow."
              path="/tools/budget-planner"
              icon={Zap}
              color="bg-purple-600"
             />
             <CalculatorCard 
              name="Compound Interest"
              description="Visualize the power of long-term investing."
              path="/tools/compound-interest"
              icon={TrendingUp}
              color="bg-orange-600"
             />
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold text-gray-950 sm:text-4xl">Latest from the Blog</h2>
              <p className="mt-4 text-lg text-gray-500">Fresh insights on making money, saving, and investing.</p>
            </div>
            <Link to="/blog" className="text-blue-600 font-bold flex items-center hover:underline">
              View All Post <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
               {featuredArticles.slice(0, 2).map(article => (
                 <ArticleCard key={article.id} article={article} featured />
               ))}
            </div>
            <div className="space-y-8">
               <div className="bg-blue-600 rounded-3xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Start Your Side Hustle Today</h3>
                  <p className="text-blue-100 text-sm mb-6">Download our free PDF guide on the top 5 side hustles that require zero startup capital.</p>
                  <button className="w-full py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors">
                    Download Free Guide
                  </button>
               </div>
               {featuredArticles.slice(2, 3).map(article => (
                 <ArticleCard key={article.id} article={article} />
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
         <div className="max-w-5xl mx-auto bg-gray-950 rounded-[2.5rem] p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
               <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(16,185,129,0.3),transparent)]" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Ready to reach your financial goals?</h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">Join 50,000+ readers who get our weekly newsletter on investing and making money online.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white focus:outline-none focus:border-emerald-500 w-full sm:w-80"
               />
               <button className="px-8 py-4 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-all">
                Subscribe Now
               </button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6 text-gray-500 text-sm">
               <div className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-emerald-500" /> Free financial guide</div>
               <div className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-emerald-500" /> Weekly insights</div>
            </div>
         </div>
      </section>
    </div>
  );
}

function ChevronRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
