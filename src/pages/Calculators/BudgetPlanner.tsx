import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, DollarSign, PieChart as PieChartIcon, Zap, Home as HomeIcon, Coffee, Wallet } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { cn, formatCurrency } from "../../lib/utils";

export default function BudgetPlanner() {
  const [monthlyIncome, setMonthlyIncome] = useState(5000);

  const budget = {
    needs: monthlyIncome * 0.5,
    wants: monthlyIncome * 0.3,
    savings: monthlyIncome * 0.2,
  };

  const data = [
    { name: 'Needs (50%)', value: budget.needs, color: '#2563eb', desc: 'Rent, food, utilities, insurance' },
    { name: 'Wants (30%)', value: budget.wants, color: '#f59e0b', desc: 'Dining, hobbies, entertainment' },
    { name: 'Savings (20%)', value: budget.savings, color: '#10b981', desc: 'Debt, emergency fund, investments' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/tools" className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600 mb-8 font-medium">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Tools
        </Link>

        <div className="text-center mb-16">
           <h1 className="text-4xl font-extrabold text-gray-950 mb-4">50/30/20 Budget Planner</h1>
           <p className="text-xl text-gray-500 max-w-2xl mx-auto">The simplest way to organize your monthly finances and ensure you're saving enough for the future.</p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col items-center">
            <div className="w-full bg-white p-12 rounded-[3rem] border border-gray-100 shadow-xl mb-12">
               <div className="flex flex-col items-center mb-12">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Monthly After-Tax Income</label>
                  <div className="relative group">
                     <DollarSign className="absolute left-6 top-1/2 -translate-y-1/2 w-8 h-8 text-gray-300 group-focus-within:text-blue-500 transition-colors" />
                     <input 
                      type="number" 
                      value={monthlyIncome} 
                      onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                      className="pl-20 pr-8 py-6 text-5xl font-black text-gray-950 bg-slate-50 border-none rounded-3xl w-full focus:ring-4 focus:ring-blue-100 transition-all text-center"
                     />
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  <div className="h-64 w-full">
                     <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={90}
                            paddingAngle={8}
                            dataKey="value"
                            stroke="none"
                          >
                            {data.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip 
                            formatter={(value: number) => formatCurrency(value)}
                            contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}
                          />
                        </PieChart>
                     </ResponsiveContainer>
                  </div>

                  <div className="space-y-6">
                     {data.map((item) => (
                       <div key={item.name} className="p-4 rounded-2xl border border-gray-50 bg-slate-50/50">
                          <div className="flex items-center justify-between mb-1">
                             <div className="flex items-center">
                                <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: item.color }} />
                                <span className="text-sm font-bold text-gray-950 uppercase tracking-tight">{item.name.split(' ')[0]}</span>
                             </div>
                             <span className="text-lg font-black text-gray-900">{formatCurrency(item.value)}</span>
                          </div>
                          <p className="text-xs text-gray-400 font-medium">{item.desc}</p>
                       </div>
                     ))}
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
               <div className="bg-blue-50 p-8 rounded-3xl">
                  <HomeIcon className="w-8 h-8 text-blue-600 mb-4" />
                  <h4 className="font-bold text-blue-900 mb-2">Needs</h4>
                  <p className="text-sm text-blue-700/70">Focus on fixed costs: Rent/Mortgage, Groceries, Utilities, Transportation, Insurance.</p>
               </div>
               <div className="bg-orange-50 p-8 rounded-3xl">
                  <Coffee className="w-8 h-8 text-orange-600 mb-4" />
                  <h4 className="font-bold text-orange-900 mb-2">Wants</h4>
                  <p className="text-sm text-orange-700/70">Lifestyle choices: Dining out, Subscriptions, Shopping, Hobbies, Travel.</p>
               </div>
               <div className="bg-emerald-50 p-8 rounded-3xl">
                  <Wallet className="w-8 h-8 text-emerald-600 mb-4" />
                  <h4 className="font-bold text-emerald-900 mb-2">Financial</h4>
                  <p className="text-sm text-emerald-700/70">Future security: Debt repayment beyond minimums, Emergency fund, Retirement, Investments.</p>
               </div>
            </div>
        </div>
      </div>
    </div>
  );
}
