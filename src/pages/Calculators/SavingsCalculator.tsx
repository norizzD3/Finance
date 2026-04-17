import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, DollarSign, Target, Calendar, ArrowRight } from "lucide-react";
import { cn, formatCurrency } from "../../lib/utils";

export default function SavingsCalculator() {
  const [targetAmount, setTargetAmount] = useState(10000);
  const [timeframe, setTimeframe] = useState(12); // months
  const [currentSavings, setCurrentSavings] = useState(1000);

  const needed = targetAmount - currentSavings;
  const monthlySavings = needed > 0 ? needed / timeframe : 0;

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/tools" className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600 mb-8 font-medium">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Tools
        </Link>
        
        <div className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-xl">
           <div className="text-center mb-12">
              <h1 className="text-4xl font-extrabold text-gray-950 mb-2">Savings Goal Calculator</h1>
              <p className="text-gray-500 font-medium">Plan exactly how to hit your next big objective.</p>
           </div>

           <div className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 <div>
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 block">Target Amount</label>
                    <div className="relative">
                       <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                       <input 
                        type="number" 
                        value={targetAmount}
                        onChange={(e) => setTargetAmount(Number(e.target.value))}
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-gray-100 rounded-2xl text-xl font-bold focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none"
                       />
                    </div>
                 </div>
                 <div>
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 block">Current Savings</label>
                    <div className="relative">
                       <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                       <input 
                        type="number" 
                        value={currentSavings}
                        onChange={(e) => setCurrentSavings(Number(e.target.value))}
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-gray-100 rounded-2xl text-xl font-bold focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none"
                       />
                    </div>
                 </div>
              </div>

              <div>
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 block">Timeframe (Months)</label>
                <div className="relative">
                   <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                   <input 
                    type="range" 
                    min="1" 
                    max="60" 
                    value={timeframe}
                    onChange={(e) => setTimeframe(Number(e.target.value))}
                    className="w-full h-2 bg-emerald-100 rounded-lg appearance-none cursor-pointer accent-emerald-600 mb-4"
                   />
                   <div className="flex justify-between items-center bg-slate-50 p-4 rounded-xl border border-gray-100">
                      <span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest">Selected Period</span>
                      <span className="text-xl font-black text-emerald-600">{timeframe} Months</span>
                   </div>
                </div>
              </div>

              <div className="pt-10 border-t border-gray-100">
                 <div className="bg-emerald-600 rounded-3xl p-10 text-white text-center shadow-xl shadow-emerald-200 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                       <Target className="absolute -bottom-10 -right-10 w-48 h-48 opacity-10 rotate-12" />
                    </div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-100 mb-4">Required Monthly Savings</p>
                    <h2 className="text-6xl font-black mb-6">{formatCurrency(monthlySavings)}</h2>
                    <p className="text-emerald-100/80 text-sm max-w-sm mx-auto italic font-medium">To reach your goal of {formatCurrency(targetAmount)} in {timeframe} months.</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
