import React, { useState } from 'react';
import { Search, ChevronRight, FileSpreadsheet, Download, Share2 } from 'lucide-react';
import { CUSTOMER_LEDGERS, CustomerLedger } from '../data/mockData';

interface LedgerInteractiveProps {
  onSelectCustomer: (customer: CustomerLedger) => void;
}

export const LedgerInteractive: React.FC<LedgerInteractiveProps> = ({ onSelectCustomer }) => {
  const [filterTab, setFilterTab] = useState<'all' | 'receive' | 'give' | 'settled'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCustomers = CUSTOMER_LEDGERS.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.locality.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (filterTab === 'all') return true;
    if (filterTab === 'receive') return customer.balance > 0;
    if (filterTab === 'give') return customer.balance < 0;
    if (filterTab === 'settled') return customer.balance === 0;
    return true;
  });

  const totalReceivable = CUSTOMER_LEDGERS.reduce(
    (acc, c) => (c.balance > 0 ? acc + c.balance : acc),
    0
  );
  const totalPayable = CUSTOMER_LEDGERS.reduce(
    (acc, c) => (c.balance < 0 ? acc + Math.abs(c.balance) : acc),
    0
  );
  const netReceivable = totalReceivable - totalPayable;

  return (
    <div className="bg-cream-paper border border-paper-border rounded-xl overflow-hidden shadow-ledger">
      {/* Top Ledger Header Bar */}
      <div className="bg-cream p-4 sm:p-5 border-b border-paper-border">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl text-ink font-semibold">
              Live Customer Ledger (बही खाता)
            </h3>
            <p className="text-xs text-ink-secondary mt-0.5">
              Click any customer row to inspect itemised ledger or generate WhatsApp statement
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-ink-secondary bg-white px-2.5 py-1 rounded border border-paper-border flex items-center gap-1.5 shadow-subtle">
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald" />
              Excel &amp; PDF Ready
            </span>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Tab Filter */}
          <div className="flex items-center gap-1 bg-cream-dark p-1 rounded-md border border-paper-border text-xs">
            <button
              onClick={() => setFilterTab('all')}
              className={`px-3 py-1 rounded font-medium transition-colors ${
                filterTab === 'all'
                  ? 'bg-ink text-white'
                  : 'text-ink-secondary hover:text-ink'
              }`}
            >
              All ({CUSTOMER_LEDGERS.length})
            </button>
            <button
              onClick={() => setFilterTab('receive')}
              className={`px-3 py-1 rounded font-medium transition-colors ${
                filterTab === 'receive'
                  ? 'bg-emerald text-white'
                  : 'text-ink-secondary hover:text-ink'
              }`}
            >
              Lena Hai (₹{totalReceivable.toLocaleString('en-IN')})
            </button>
            <button
              onClick={() => setFilterTab('give')}
              className={`px-3 py-1 rounded font-medium transition-colors ${
                filterTab === 'give'
                  ? 'bg-red-800 text-white'
                  : 'text-ink-secondary hover:text-ink'
              }`}
            >
              Dena Hai (₹{totalPayable.toLocaleString('en-IN')})
            </button>
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-ink-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search customer, area..."
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-paper-border rounded text-ink focus:outline-none focus:border-ink placeholder:text-ink-muted"
            />
          </div>
        </div>
      </div>

      {/* Ledger Table Column Headers */}
      <div className="grid grid-cols-12 bg-cream-dark/60 text-[11px] font-bold text-ink-muted uppercase tracking-wider px-4 sm:px-6 py-2.5 border-b border-paper-border">
        <div className="col-span-5 sm:col-span-4">Customer / Kirana</div>
        <div className="hidden sm:block sm:col-span-3">Area / Last Entry</div>
        <div className="col-span-4 sm:col-span-3 text-right">Outstanding</div>
        <div className="col-span-3 sm:col-span-2 text-right">Action</div>
      </div>

      {/* Rows */}
      <div className="divide-y divide-paper-border/60">
        {filteredCustomers.length === 0 ? (
          <div className="p-8 text-center text-xs text-ink-muted">
            No customer accounts found matching "{searchQuery}".
          </div>
        ) : (
          filteredCustomers.map((cust) => (
            <div
              key={cust.id}
              onClick={() => onSelectCustomer(cust)}
              className="grid grid-cols-12 items-center px-4 sm:px-6 py-3.5 hover:bg-cream-dark/40 cursor-pointer transition-colors group"
            >
              {/* Customer Name */}
              <div className="col-span-5 sm:col-span-4">
                <span className="text-sm font-semibold text-ink group-hover:text-emerald transition-colors block">
                  {cust.name}
                </span>
                <span className="text-[11px] text-ink-muted block sm:hidden">
                  {cust.locality} · {cust.lastTransactionDate}
                </span>
              </div>

              {/* Locality & Last active */}
              <div className="hidden sm:block sm:col-span-3">
                <span className="text-xs text-ink-secondary block">{cust.locality}</span>
                <span className="text-[10px] text-ink-muted block">{cust.lastTransactionDate}</span>
              </div>

              {/* Amount */}
              <div className="col-span-4 sm:col-span-3 text-right">
                {cust.balance > 0 ? (
                  <div>
                    <span className="text-sm font-bold text-emerald tabular-nums">
                      ₹{cust.balance.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] text-emerald-800 block uppercase font-medium">
                      Lena hai
                    </span>
                  </div>
                ) : cust.balance < 0 ? (
                  <div>
                    <span className="text-sm font-bold text-red-700 tabular-nums">
                      ₹{Math.abs(cust.balance).toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] text-red-800 block uppercase font-medium">
                      Dena hai
                    </span>
                  </div>
                ) : (
                  <div>
                    <span className="text-sm font-medium text-ink-muted tabular-nums">
                      ₹0
                    </span>
                    <span className="text-[10px] text-ink-muted block">Settled</span>
                  </div>
                )}
              </div>

              {/* Action */}
              <div className="col-span-3 sm:col-span-2 text-right">
                <span className="inline-flex items-center gap-1 text-xs font-medium text-ink-secondary group-hover:text-emerald bg-white group-hover:bg-emerald-light px-2.5 py-1 rounded border border-paper-border transition-colors">
                  <Share2 className="w-3 h-3 hidden sm:inline" />
                  Hisab
                  <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Ledger Footer Summary */}
      <div className="bg-cream px-4 sm:px-6 py-4 border-t-2 border-paper-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="text-xs text-ink-secondary">
          Showing <strong>{filteredCustomers.length}</strong> active accounts · Server-timestamped &amp; encrypted
        </div>

        <div className="flex items-center gap-6">
          <div className="text-right">
            <span className="text-[10px] uppercase font-bold text-ink-muted tracking-wider block">
              Net Receivable (कुल शुद्ध बाकी)
            </span>
            <span className="text-base sm:text-lg font-bold text-emerald tabular-nums">
              ₹{netReceivable.toLocaleString('en-IN')}
            </span>
          </div>

          <button
            onClick={() => {
              alert('Excel/PDF export sample: In the VACA mobile app, a full GST & non-GST report is exported in 1-tap.');
            }}
            className="px-3 py-1.5 text-xs font-semibold text-ink bg-white border border-paper-border rounded hover:bg-cream-dark transition-colors flex items-center gap-1 shadow-subtle"
          >
            <Download className="w-3.5 h-3.5 text-emerald" />
            Export PDF
          </button>
        </div>
      </div>
    </div>
  );
};
