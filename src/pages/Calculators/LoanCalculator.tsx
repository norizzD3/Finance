import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Info, HelpCircle, DollarSign, Calendar, Percent } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { cn, formatCurrency } from "../../lib/utils";

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(250000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  const stats = useMemo(() => {
    const monthlyRate = (interestRate / 100) / 12;
    const numberOfPayments = loanTerm * 12;
    
    // Monthly payment formula: P [ i(1 + i)^n ] / [ (1 + i)^n – 1 ]
    const monthlyPayment = 
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - loanAmount;

    return {
      monthlyPayment: isNaN(monthlyPayment) ? 0 : monthlyPayment,
      totalPayment: isNaN(totalPayment) ? 0 : totalPayment,
      totalInterest: isNaN(totalInterest) ? 0 : totalInterest,
    };
  }, [loanAmount, interestRate, loanTerm]);

  const chartData = [
    { name: 'Principal', value: loanAmount, color: '#2563eb' },
    { name: 'Total Interest', value: stats.totalInterest, color: '#f97316' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/tools" className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600 mb-8 font-medium">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Tools
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Inputs Section */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl">
              <h1 className="text-3xl font-extrabold text-gray-950 mb-2">Loan Calculator</h1>
              <p className="text-gray-500 mb-8 font-medium">Adjust the values below to see your monthly payments.</p>

              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-bold text-gray-700 flex items-center uppercase tracking-wider">
                      <DollarSign className="w-4 h-4 mr-2 text-blue-500" />
                      Loan Amount
                    </label>
                    <span className="text-lg font-black text-blue-600">{formatCurrency(loanAmount)}</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="1000000"
                    step="1000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="mt-4 w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-bold text-gray-700 flex items-center uppercase tracking-wider">
                      <Percent className="w-4 h-4 mr-2 text-orange-500" />
                      Interest Rate
                    </label>
                    <span className="text-lg font-black text-orange-600">{interestRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="20"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 bg-orange-100 rounded-lg appearance-none cursor-pointer accent-orange-500"
                  />
                  <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="mt-4 w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-bold text-gray-700 flex items-center uppercase tracking-wider">
                      <Calendar className="w-4 h-4 mr-2 text-emerald-500" />
                      Loan Term (Years)
                    </label>
                    <span className="text-lg font-black text-emerald-600">{loanTerm} Years</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[5, 10, 15, 30].map((t) => (
                      <button
                        key={t}
                        onClick={() => setLoanTerm(t)}
                        className={cn(
                          "py-2 rounded-xl text-sm font-bold border transition-all",
                          loanTerm === t ? "bg-emerald-600 text-white border-emerald-600" : "bg-white text-gray-600 border-gray-200 hover:border-emerald-300 hover:text-emerald-500"
                        )}
                      >
                        {t}Y
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-7">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-600 p-8 rounded-3xl text-white shadow-lg shadow-blue-200">
                   <p className="text-sm font-bold uppercase tracking-widest text-blue-100 mb-2">Monthly Payment</p>
                   <h2 className="text-4xl font-black">{formatCurrency(stats.monthlyPayment)}</h2>
                   <p className="text-blue-100 text-xs mt-4">Calculated for {loanTerm} years at {interestRate}%</p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl">
                   <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Total Interest</p>
                   <h2 className="text-4xl font-black text-gray-950">{formatCurrency(stats.totalInterest)}</h2>
                   <p className="text-gray-400 text-xs mt-4">Overall cost of borrowing</p>
                </div>
             </div>

             <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl">
                <div className="flex flex-col md:flex-row items-center gap-12">
                   <div className="w-full md:w-1/2 h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {chartData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip 
                            formatter={(value: number) => formatCurrency(value)}
                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                   </div>
                   <div className="w-full md:w-1/2 space-y-6">
                      <h3 className="text-xl font-bold text-gray-950 mb-4">Payment Breakdown</h3>
                      <div className="space-y-4">
                         <div className="flex items-center justify-between">
                            <div className="flex items-center">
                               <div className="w-3 h-3 rounded-full bg-blue-600 mr-3" />
                               <span className="text-sm font-bold text-gray-600">Principal</span>
                            </div>
                            <span className="text-sm font-black text-gray-900">{formatCurrency(loanAmount)}</span>
                         </div>
                         <div className="flex items-center justify-between">
                            <div className="flex items-center">
                               <div className="w-3 h-3 rounded-full bg-orange-500 mr-3" />
                               <span className="text-sm font-bold text-gray-600">Total Interest</span>
                            </div>
                            <span className="text-sm font-black text-gray-900">{formatCurrency(stats.totalInterest)}</span>
                         </div>
                         <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                            <span className="text-sm font-black text-gray-950">Total Payoff</span>
                            <span className="text-lg font-black text-blue-600">{formatCurrency(stats.totalPayment)}</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>

             {/* Ad Sense Placement Placeholder */}
             <div className="mt-8 p-4 bg-gray-50 border border-dashed border-gray-200 rounded-xl text-center text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
                Advertisement
             </div>
          </div>
        </div>

        {/* Informational Content for SEO */}
        <div className="mt-20 max-w-4xl prose prose-slate">
           <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Use the Loan Calculator</h2>
           <p className="text-lg text-gray-600 mb-6 leading-relaxed">
             A loan calculator is an essential tool for understanding the long-term impact of debt. Whether you're financing a car, buying a home, or taking out a personal loan, knowing your monthly obligation ensures you stay within your budget.
           </p>
           <h3 className="text-xl font-bold text-gray-900 mb-4">What Factors Affect Your Loan Cost?</h3>
           <ul className="list-disc ml-6 mb-8 text-gray-600 space-y-3">
              <li><strong>Principal:</strong> The initial amount you borrow.</li>
              <li><strong>Interest Rate:</strong> The percentage charged by the lender for the use of their money.</li>
              <li><strong>Loan Term:</strong> The duration you have to repay the loan. Longer terms result in lower monthly payments but higher total interest costs.</li>
           </ul>
        </div>
      </div>
    </div>
  );
}
