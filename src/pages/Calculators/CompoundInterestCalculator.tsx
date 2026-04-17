import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Info, HelpCircle, DollarSign, Calendar, TrendingUp, RefreshCcw } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { cn, formatCurrency } from "../../lib/utils";

export default function CompoundInterestCalculator() {
  const [initialDeposit, setInitialDeposit] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [years, setYears] = useState(20);
  const [estimatedReturn, setEstimatedReturn] = useState(8);

  const { data, finalBalance, totalContributions, totalInterest } = useMemo(() => {
    let balance = initialDeposit;
    let contributions = initialDeposit;
    const monthlyRate = estimatedReturn / 100 / 12;
    const chartData = [];

    for (let i = 0; i <= years; i++) {
      if (i > 0) {
        for (let j = 0; j < 12; j++) {
          balance = (balance + monthlyContribution) * (1 + monthlyRate);
          contributions += monthlyContribution;
        }
      }
      chartData.push({
        year: i,
        balance: Math.round(balance),
        contributions: Math.round(contributions),
      });
    }

    return {
      data: chartData,
      finalBalance: balance,
      totalContributions: contributions,
      totalInterest: balance - contributions
    };
  }, [initialDeposit, monthlyContribution, years, estimatedReturn]);

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/tools" className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600 mb-8 font-medium">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Tools
        </Link>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Controls */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl space-y-8">
              <div className="mb-4">
                <h1 className="text-3xl font-extrabold text-gray-950 mb-2">Compound Interest</h1>
                <p className="text-gray-500 text-sm font-medium">Visualize your long-term wealth growth.</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Initial Deposit</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="number"
                    value={initialDeposit}
                    onChange={(e) => setInitialDeposit(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Monthly Contribution</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="number"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Investment Horizon (Years)</label>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-blue-600 mb-2"
                />
                <div className="flex justify-between text-xs font-bold text-gray-400">
                  <span>1 Year</span>
                  <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{years} Years</span>
                  <span>50 Years</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Estimated Annual Return (%)</label>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="0.5"
                  value={estimatedReturn}
                  onChange={(e) => setEstimatedReturn(Number(e.target.value))}
                  className="w-full h-2 bg-emerald-100 rounded-lg appearance-none cursor-pointer accent-emerald-600 mb-2"
                />
                <div className="flex justify-between text-xs font-bold text-gray-400">
                  <span>1%</span>
                  <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">{estimatedReturn}%</span>
                  <span>15%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Chart & Stats */}
          <div className="w-full lg:w-2/3 space-y-8">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                   <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Final Balance</p>
                   <p className="text-2xl font-black text-blue-600">{formatCurrency(finalBalance)}</p>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                   <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Total Contributions</p>
                   <p className="text-2xl font-black text-gray-900">{formatCurrency(totalContributions)}</p>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                   <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Total Interest</p>
                   <p className="text-2xl font-black text-emerald-600">{formatCurrency(totalInterest)}</p>
                </div>
             </div>

             <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl">
                <h3 className="text-xl font-bold text-gray-950 mb-8 flex items-center">
                   <TrendingUp className="w-5 h-5 mr-2 text-blue-500" />
                   Growth Visualization
                </h3>
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <defs>
                        <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis 
                        dataKey="year" 
                        stroke="#94a3b8" 
                        fontSize={12} 
                        tickLine={false} 
                        axisLine={false}
                        tickFormatter={(val) => `Yr ${val}`}
                      />
                      <YAxis 
                        stroke="#94a3b8" 
                        fontSize={12} 
                        tickLine={false} 
                        axisLine={false}
                        tickFormatter={(val) => `$${val/1000}k`}
                      />
                      <Tooltip 
                        formatter={(value: number) => formatCurrency(value)}
                        contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="balance" 
                        stroke="#2563eb" 
                        strokeWidth={3}
                        fillOpacity={1} 
                        fill="url(#colorBalance)" 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="contributions" 
                        stroke="#94a3b8" 
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        fill="none" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-8 flex justify-center space-x-8">
                   <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mr-2" />
                      <span className="text-xs font-bold text-gray-600 uppercase">Total Balance</span>
                   </div>
                   <div className="flex items-center">
                      <div className="w-3 h-3 bg-gray-300 rounded-full mr-2" />
                      <span className="text-xs font-bold text-gray-600 uppercase">Contributions</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
