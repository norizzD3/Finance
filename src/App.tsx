import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Search, Menu, X, ArrowRight, TrendingUp, DollarSign, Briefcase, GraduationCap, ChevronRight, Mail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "./lib/utils";

// Pages
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import ArticlePage from "./pages/ArticlePage";
import Tools from "./pages/Tools";
import LoanCalculator from "./pages/Calculators/LoanCalculator";
import SavingsCalculator from "./pages/Calculators/SavingsCalculator";
import BudgetPlanner from "./pages/Calculators/BudgetPlanner";
import CompoundInterestCalculator from "./pages/Calculators/CompoundInterestCalculator";

// Components
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Make Money", path: "/category/make-money-online" },
    { name: "Finance", path: "/category/personal-finance" },
    { name: "Investing", path: "/category/investing" },
    { name: "Tools", path: "/tools" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-bottom border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              ProsperGuide
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    location.pathname === link.path 
                      ? "text-blue-600 font-semibold" 
                      : "text-gray-600 hover:text-blue-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="relative group">
                <Search className="w-5 h-5 text-gray-400 group-hover:text-blue-600 cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-bottom border-gray-100"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-gray-950 text-gray-300 py-12 px-4 shadow-sm border-top border-gray-800">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="col-span-1 md:col-span-1">
        <h3 className="text-xl font-bold text-white mb-4">ProsperGuide</h3>
        <p className="text-sm leading-relaxed mb-6">
          Your authority on financial independence, side hustles, and smart money management. We help you bridge the gap between where you are and where you want to be.
        </p>
        <div className="flex space-x-4">
          <Mail className="w-5 h-5 cursor-pointer hover:text-emerald-500 transition-colors" />
          <TrendingUp className="w-5 h-5 cursor-pointer hover:text-emerald-500 transition-colors" />
        </div>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-4">Categories</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/category/make-money-online" className="hover:text-emerald-500 transition-colors">Make Money Online</Link></li>
          <li><Link to="/category/personal-finance" className="hover:text-emerald-500 transition-colors">Personal Finance</Link></li>
          <li><Link to="/category/investing" className="hover:text-emerald-500 transition-colors">Investing</Link></li>
          <li><Link to="/category/credit-loans" className="hover:text-emerald-500 transition-colors">Credit & Loans</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-4">Tools</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/tools/loan-calculator" className="hover:text-emerald-500 transition-colors">Loan Calculator</Link></li>
          <li><Link to="/tools/savings-calculator" className="hover:text-emerald-500 transition-colors">Savings Calculator</Link></li>
          <li><Link to="/tools/budget-planner" className="hover:text-emerald-500 transition-colors">Budget Planner</Link></li>
          <li><Link to="/tools/compound-interest" className="hover:text-emerald-500 transition-colors">Compound Interest</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-4">Newsletter</h4>
        <p className="text-xs mb-4">Get our free 5-day budgeting guide and weekly money tips.</p>
        <div className="flex">
          <input 
            type="email" 
            placeholder="Email address" 
            className="bg-gray-900 border border-gray-800 px-4 py-2 rounded-l-md w-full focus:outline-none focus:border-emerald-500"
          />
          <button className="bg-emerald-600 text-white px-4 py-2 rounded-r-md hover:bg-emerald-700 transition-colors">
            Join
          </button>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-xs">
      <p>&copy; {new Date().getFullYear()} ProsperGuide. All rights reserved. <Link to="/privacy" className="hover:underline">Privacy</Link> | <Link to="/disclaimer" className="hover:underline">Disclaimer</Link></p>
      <p className="mt-2 text-gray-500">Disclaimer: We are not financial advisors. Content is for educational purposes only.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<ArticlePage />} />
            <Route path="/category/:category" element={<Blog />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/tools/loan-calculator" element={<LoanCalculator />} />
            <Route path="/tools/savings-calculator" element={<SavingsCalculator />} />
            <Route path="/tools/budget-planner" element={<BudgetPlanner />} />
            <Route path="/tools/compound-interest" element={<CompoundInterestCalculator />} />
            <Route path="/privacy" element={<div className="max-w-4xl mx-auto py-20 px-4">Privacy Policy Placeholder</div>} />
            <Route path="/disclaimer" element={<div className="max-w-4xl mx-auto py-20 px-4">Disclaimer Placeholder</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

