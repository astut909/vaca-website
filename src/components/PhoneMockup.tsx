import React, { useState } from 'react';
import { ArrowLeft, Share2, Plus, CheckCircle2, Mic } from 'lucide-react';
import { CUSTOMER_LEDGERS } from '../data/mockData';

interface PhoneMockupProps {
  onOpenStatement?: (customerName: string) => void;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ onOpenStatement }) => {
  const initialCustomer = CUSTOMER_LEDGERS[0];
  const [balance, setBalance] = useState(initialCustomer.balance);
  const [transactions, setTransactions] = useState(initialCustomer.transactions);
  const [lastActionMessage, setLastActionMessage] = useState<string | null>(null);

  const handleSimulatePayment = () => {
    const newTx = {
      id: `tx-${Date.now()}`,
      date: 'Today',
      time: 'Just now',
      note: 'Payment received (PhonePe UPI)',
      amount: 500,
      type: 'debit' as const,
      paymentMode: 'UPI'
    };
    setTransactions([newTx, ...transactions]);
    setBalance(prev => Math.max(0, prev - 500));
    setLastActionMessage('+ ₹500 Jama (PhonePe)');
    setTimeout(() => setLastActionMessage(null), 3000);
  };

  const handleSimulateCredit = () => {
    const newTx = {
      id: `tx-${Date.now()}`,
      date: 'Today',
      time: 'Just now',
      note: 'Daily dairy & biscuits',
      amount: 250,
      type: 'credit' as const
    };
    setTransactions([newTx, ...transactions]);
    setBalance(prev => prev + 250);
    setLastActionMessage('− ₹250 Udhar recorded');
    setTimeout(() => setLastActionMessage(null), 3000);
  };

  const handleReset = () => {
    setBalance(initialCustomer.balance);
    setTransactions(initialCustomer.transactions);
    setLastActionMessage('Reset to sample state');
    setTimeout(() => setLastActionMessage(null), 2000);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Device frame */}
      <div className="w-[300px] sm:w-[320px] bg-ink rounded-[36px] p-3 shadow-phone relative border-4 border-stone-800 transition-transform duration-500 hover:rotate-0 rotate-1">
        {/* Speaker / Camera Notch */}
        <div className="w-24 h-5 bg-ink rounded-b-xl absolute top-3 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-stone-900 border border-stone-700"></div>
        </div>

        {/* Inner Screen */}
        <div className="bg-[#121217] text-white rounded-[26px] overflow-hidden min-h-[510px] flex flex-col relative">
          {/* Status Bar */}
          <div className="pt-6 px-4 pb-2 flex justify-between text-[11px] text-stone-400 font-mono select-none">
            <span>4:32 PM</span>
            <span className="flex items-center gap-1.5">
              <span>VoLTE</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            </span>
          </div>

          {/* App Header */}
          <div className="px-4 py-3 bg-stone-900/90 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded hover:bg-white/10 text-stone-300">
                <ArrowLeft className="w-4 h-4" />
              </span>
              <div>
                <h4 className="text-xs font-semibold text-white tracking-wide">
                  {initialCustomer.name}
                </h4>
                <p className="text-[10px] text-stone-400">{initialCustomer.locality}</p>
              </div>
            </div>

            <button
              onClick={() => onOpenStatement?.(initialCustomer.name)}
              className="text-[11px] font-medium text-emerald-400 hover:text-emerald-300 flex items-center gap-1 px-2 py-1 rounded bg-emerald-950/60 border border-emerald-800/40"
              title="Share statement on WhatsApp"
            >
              <Share2 className="w-3 h-3" />
              Hisab
            </button>
          </div>

          {/* Balance card */}
          <div className="p-4 bg-gradient-to-br from-emerald-950/40 via-stone-900/60 to-stone-900 border-b border-white/5">
            <div className="text-[10px] uppercase tracking-wider text-stone-400 font-medium">
              Outstanding Balance (बाकी हिसाब)
            </div>
            <div className="flex items-baseline justify-between mt-1">
              <span className="text-2xl font-bold font-sans text-emerald-400 tabular-nums">
                ₹{balance.toLocaleString('en-IN')}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-900/60 text-emerald-300 border border-emerald-700/50">
                You will receive (लेना है)
              </span>
            </div>
            <p className="text-[10px] text-stone-400 mt-1">
              {transactions.length} verified transactions · Protected ledger
            </p>
          </div>

          {/* Action Notification Pill */}
          {lastActionMessage && (
            <div className="mx-4 mt-2 py-1 px-3 bg-stone-800 border border-emerald-500/40 rounded text-[11px] text-emerald-300 text-center flex items-center justify-center gap-1.5 animate-fadeIn">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              {lastActionMessage}
            </div>
          )}

          {/* Transaction List */}
          <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2.5 max-h-[240px]">
            {transactions.slice(0, 4).map((tx) => (
              <div
                key={tx.id}
                className="flex items-center justify-between py-2 border-b border-white/5 last:border-b-0"
              >
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-stone-200 line-clamp-1">
                    {tx.note}
                  </span>
                  <span className="text-[10px] text-stone-500">
                    {tx.date}, {tx.time} {tx.paymentMode ? `· ${tx.paymentMode}` : ''}
                  </span>
                </div>

                <div className="text-right">
                  <span
                    className={`text-xs font-semibold tabular-nums block ${
                      tx.type === 'debit' ? 'text-emerald-400' : 'text-red-400'
                    }`}
                  >
                    {tx.type === 'debit' ? `+ ₹${tx.amount}` : `− ₹${tx.amount}`}
                  </span>
                  <span className="text-[9px] text-stone-500 uppercase tracking-wider">
                    {tx.type === 'debit' ? 'Jama' : 'Udhar'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Voice Button in App */}
          <div className="p-3 bg-stone-900/90 border-t border-white/5 flex items-center justify-between">
            <span className="text-[10px] text-stone-400">
              Tap mic or say <strong className="text-stone-300">"Bolo"</strong>
            </span>
            <div className="w-9 h-9 rounded-full bg-emerald flex items-center justify-center text-white shadow-md">
              <Mic className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Controls Below Phone */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 max-w-[320px]">
        <button
          onClick={handleSimulatePayment}
          className="px-2.5 py-1.5 bg-cream-paper border border-paper-border text-xs font-medium text-ink hover:bg-cream-dark rounded shadow-subtle flex items-center gap-1"
        >
          <Plus className="w-3 h-3 text-emerald" />
          Test +₹500 Payment
        </button>
        <button
          onClick={handleSimulateCredit}
          className="px-2.5 py-1.5 bg-cream-paper border border-paper-border text-xs font-medium text-ink hover:bg-cream-dark rounded shadow-subtle flex items-center gap-1"
        >
          <Plus className="w-3 h-3 text-red-600" />
          Test +₹250 Credit
        </button>
        <button
          onClick={handleReset}
          className="px-2 py-1.5 text-[11px] text-ink-muted hover:text-ink underline"
        >
          Reset
        </button>
      </div>

      <p className="text-[11px] text-ink-muted mt-2 text-center">
        * Clearly labelled illustrative product preview with fictitious sample data
      </p>
    </div>
  );
};
