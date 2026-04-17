import { Calculator, DollarSign, Zap, TrendingUp, Search, ArrowRight } from "lucide-react";
import CalculatorCard from "../components/CalculatorCard";
import { Link } from "react-router-dom";

export default function Tools() {
  const tools = [
    {
      name: "Loan Calculator",
      description: "Understand your monthly payments, total interest, and payoff schedule for any type of loan.",
      path: "/tools/loan-calculator",
      icon: Calculator,
      color: "bg-blue-600"
    },
    {
      name: "Savings Goal",
      description: "Set a target and find out exactly how much you need to set aside each month to achieve it.",
      path: "/tools/savings-calculator",
      icon: DollarSign,
      color: "bg-emerald-600"
    },
    {
      name: "Budget Planner",
      description: "The 50/30/20 optimizer. Organize your income and see exactly where every dollar should go.",
      path: "/tools/budget-planner",
      icon: Zap,
      color: "bg-purple-600"
    },
    {
      name: "Compound Interest",
      description: "Visualize how your wealth grows over time through the magic of compounding returns.",
      path: "/tools/compound-interest",
      icon: TrendingUp,
      color: "bg-orange-600"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-950 mb-6">Financial Tools & Calculators</h1>
          <p className="text-xl text-gray-500 font-medium">
            Professional-grade tools to help you run the numbers before making important financial decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {tools.map((tool, i) => (
             <CalculatorCard key={i} {...tool} />
           ))}
        </div>

        <div className="mt-20 p-12 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden relative">
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
           <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                 <div className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase rounded-full mb-4">
                    Expert Feature
                 </div>
                 <h2 className="text-3xl font-extrabold text-gray-950 mb-4">Looking for a custom financial plan?</h2>
                 <p className="text-gray-500 font-medium mb-8">Download our comprehensive 50-page financial roadmap for 2024. It covers everything from side hustles to retirement planning.</p>
                 <button className="px-8 py-4 bg-gray-950 text-white font-bold rounded-full hover:bg-gray-800 transition-colors flex items-center">
                    Get the Roadmap <ArrowRight className="ml-2 w-5 h-5" />
                 </button>
              </div>
              <div className="flex-shrink-0 grid grid-cols-2 gap-4">
                 <div className="w-32 h-32 bg-slate-50 rounded-2xl flex items-center justify-center p-6 border border-gray-100 shadow-sm">
                    <TrendingUp className="w-full h-full text-blue-500" />
                 </div>
                 <div className="w-32 h-32 bg-slate-50 rounded-2xl flex items-center justify-center p-6 border border-gray-100 shadow-sm translate-y-8">
                    <Shield className="w-full h-full text-emerald-500" />
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function Shield(props: any) {
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
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}
