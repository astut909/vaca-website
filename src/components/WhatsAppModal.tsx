import React, { useState } from 'react';
import { X, Check, Copy, ExternalLink, ShieldCheck, ArrowRight } from 'lucide-react';
import { CustomerLedger } from '../data/mockData';

interface WhatsAppModalProps {
  customer: CustomerLedger | null;
  onClose: () => void;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ customer, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!customer) return null;

  const sampleMessage = `Namaste ${customer.name} ji,
Aapka VACA Digital Khata hisab:
--------------------------------
Kul baaki rashi: ₹${customer.balance > 0 ? customer.balance.toLocaleString('en-IN') : '0'} ${customer.balance > 0 ? '(Lena hai)' : ''}
Pichli entry: ${customer.lastTransactionDate}
Dukan: Sharma General Store & Provisions
--------------------------------
Detailed PDF statement is generated via VACA.
Dhanyawad!`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(sampleMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-cream-paper border border-paper-border w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-cream px-6 py-4 border-b border-paper-border flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
              WA
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-ink">
                WhatsApp Statement Preview
              </h4>
              <p className="text-xs text-ink-muted">
                One-tap statement sharing without paper arguments
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-cream-dark text-ink-secondary"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="flex items-center justify-between bg-cream p-3 rounded-lg border border-paper-border">
            <div>
              <span className="text-xs font-semibold text-ink block">{customer.name}</span>
              <span className="text-[11px] text-ink-muted">{customer.locality} · {customer.phone}</span>
            </div>
            <div className="text-right">
              <span className="text-xs text-ink-muted block uppercase font-medium">Balance</span>
              <span className="text-sm font-bold text-emerald">
                ₹{customer.balance.toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          {/* WhatsApp Chat Simulation Bubble */}
          <div>
            <label className="text-[11px] font-bold text-ink-muted uppercase tracking-wider block mb-1.5">
              Customer WhatsApp Message Bubble:
            </label>
            <div className="bg-[#EFEAE2] p-4 rounded-xl border border-stone-300 font-sans text-xs text-stone-900 leading-relaxed space-y-2">
              <div className="bg-white p-3.5 rounded-lg shadow-sm border-l-4 border-emerald-600 space-y-1.5 max-w-[95%]">
                <p className="font-semibold text-stone-900">
                  Namaste {customer.name} ji,
                </p>
                <p className="text-stone-700">
                  Aapka VACA Digital Khata hisab:
                </p>
                <div className="bg-stone-50 p-2 rounded border border-stone-200 font-mono text-[11px] text-stone-800">
                  <div>Kul baaki rashi: <strong>₹{customer.balance.toLocaleString('en-IN')}</strong></div>
                  <div>Pichli transaction: {customer.lastTransactionDate}</div>
                  <div>Status: {customer.balance > 0 ? 'Due / Receivable' : 'Cleared'}</div>
                </div>
                <p className="text-[11px] text-stone-600">
                  Detailed PDF statement verified by VACA Ledger.
                </p>
                <div className="flex justify-between items-center pt-1 border-t border-stone-100 text-[10px] text-stone-400">
                  <span className="flex items-center gap-1 text-emerald-700">
                    <ShieldCheck className="w-3 h-3" /> Timestamped
                  </span>
                  <span>Sent via VACA App</span>
                </div>
              </div>
            </div>
          </div>

          {/* Customer's Recent Transaction Breakdown */}
          <div>
            <label className="text-[11px] font-bold text-ink-muted uppercase tracking-wider block mb-1.5">
              Recent Transactions in this statement:
            </label>
            <div className="divide-y divide-paper-border border border-paper-border rounded-lg bg-white overflow-hidden text-xs">
              {customer.transactions.map((tx) => (
                <div key={tx.id} className="p-2.5 flex items-center justify-between">
                  <div>
                    <span className="font-medium text-ink block">{tx.note}</span>
                    <span className="text-[10px] text-ink-muted">{tx.date}, {tx.time}</span>
                  </div>
                  <span
                    className={`font-semibold tabular-nums ${
                      tx.type === 'debit' ? 'text-emerald' : 'text-red-700'
                    }`}
                  >
                    {tx.type === 'debit' ? `+ ₹${tx.amount}` : `− ₹${tx.amount}`}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="bg-cream px-6 py-3.5 border-t border-paper-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={handleCopy}
            className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-ink bg-white border border-paper-border rounded hover:bg-cream-dark transition-colors flex items-center justify-center gap-1.5"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald" />
                Copied to clipboard!
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                Copy Statement Text
              </>
            )}
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2 text-xs font-semibold text-white bg-emerald hover:bg-emerald-hover rounded transition-colors flex items-center justify-center gap-1.5 shadow-sm"
          >
            Open in WhatsApp
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
