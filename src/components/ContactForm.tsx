import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageSquare, Mail, Phone, Info } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    shopName: '',
    city: '',
    category: 'retailer-demo',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please enter your full name (at least 2 characters)';
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile / WhatsApp number';
    }
    if (!formData.shopName.trim()) {
      errs.shopName = 'Please enter your shop, business, or college name';
    }
    if (!formData.city.trim()) {
      errs.city = 'Please enter your city / district (e.g. Prayagraj, Varanasi)';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setSubmittedData({ ...formData });
    }
  };

  const enquiryWhatsAppText = submittedData
    ? encodeURIComponent(
        `Hello VACA Team,\nI would like to inquire about VACA Galla Khata.\nName: ${submittedData.name}\nShop/Org: ${submittedData.shopName}\nCity: ${submittedData.city}\nPhone: ${submittedData.phone}\nCategory: ${submittedData.category}\nNote: ${submittedData.message || 'None'}`
      )
    : '';

  const mailtoLink = submittedData
    ? `mailto:contact@vacaapp.in?subject=VACA Demo Inquiry - ${encodeURIComponent(
        submittedData.shopName
      )}&body=${enquiryWhatsAppText}`
    : 'mailto:contact@vacaapp.in';

  return (
    <div className="bg-cream-paper border border-paper-border rounded-2xl p-6 sm:p-10 shadow-ledger">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-xs uppercase font-bold tracking-widest text-emerald bg-emerald-light px-3 py-1 rounded-full border border-emerald/20">
            Request Demo / Connect with VACA
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-ink font-semibold mt-3">
            Dukan par demo dekhein ya team se baat karein
          </h3>
          <p className="text-sm text-ink-secondary mt-2">
            For retail shopkeepers, incubators, mentors, and academic review.
          </p>
        </div>

        {submittedData ? (
          <div className="bg-white border-2 border-emerald/40 rounded-xl p-6 space-y-4 animate-fadeIn">
            <div className="flex items-center gap-2.5 text-emerald font-semibold text-base">
              <CheckCircle2 className="w-5 h-5 text-emerald" />
              <span>Enquiry Validated &amp; Ready to Transmit</span>
            </div>

            <div className="bg-cream p-4 rounded-lg border border-paper-border text-xs space-y-1.5 font-sans">
              <div><strong>Name:</strong> {submittedData.name}</div>
              <div><strong>Shop / Organisation:</strong> {submittedData.shopName}</div>
              <div><strong>City:</strong> {submittedData.city}</div>
              <div><strong>WhatsApp:</strong> {submittedData.phone}</div>
              <div><strong>Category:</strong> {submittedData.category}</div>
              {submittedData.message && <div><strong>Note:</strong> {submittedData.message}</div>}
            </div>

            <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong>Backend Integration Notice:</strong> Client-side validation passed successfully. To automatically route entries into a central CRM or database, connect a backend webhook (e.g. Resend, SendGrid, or Firebase Cloud Function).
                <br className="mt-1" />
                You can transmit this inquiry directly right now via WhatsApp or official email below:
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href={`https://wa.me/?text=${enquiryWhatsAppText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 py-2.5 px-4 bg-emerald hover:bg-emerald-hover text-white text-xs font-semibold rounded text-center flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                Send via WhatsApp
              </a>

              <a
                href={mailtoLink}
                className="w-full sm:w-1/2 py-2.5 px-4 bg-ink hover:bg-ink-secondary text-white text-xs font-semibold rounded text-center flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4" />
                Email to contact@vacaapp.in
              </a>
            </div>

            <button
              onClick={() => setSubmittedData(null)}
              className="text-xs text-ink-muted hover:text-ink underline block mx-auto pt-2"
            >
              Submit another inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-ink uppercase tracking-wider block mb-1">
                  Aapka Naam / Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Ramesh Chandra / Astut Shukla"
                  className={`w-full px-3 py-2 text-sm bg-white border rounded text-ink focus:outline-none focus:ring-1 focus:ring-emerald ${
                    errors.name ? 'border-red-500 bg-red-50/20' : 'border-paper-border'
                  }`}
                />
                {errors.name && (
                  <span className="text-[11px] text-red-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" /> {errors.name}
                  </span>
                )}
              </div>

              <div>
                <label className="text-xs font-semibold text-ink uppercase tracking-wider block mb-1">
                  Mobile / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 98390 12345"
                  className={`w-full px-3 py-2 text-sm bg-white border rounded text-ink focus:outline-none focus:ring-1 focus:ring-emerald ${
                    errors.phone ? 'border-red-500 bg-red-50/20' : 'border-paper-border'
                  }`}
                />
                {errors.phone && (
                  <span className="text-[11px] text-red-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" /> {errors.phone}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-ink uppercase tracking-wider block mb-1">
                  Dukan / Organisation Name *
                </label>
                <input
                  type="text"
                  value={formData.shopName}
                  onChange={(e) => setFormData({ ...formData, shopName: e.target.value })}
                  placeholder="e.g. Ramesh Kirana Store"
                  className={`w-full px-3 py-2 text-sm bg-white border rounded text-ink focus:outline-none focus:ring-1 focus:ring-emerald ${
                    errors.shopName ? 'border-red-500 bg-red-50/20' : 'border-paper-border'
                  }`}
                />
                {errors.shopName && (
                  <span className="text-[11px] text-red-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" /> {errors.shopName}
                  </span>
                )}
              </div>

              <div>
                <label className="text-xs font-semibold text-ink uppercase tracking-wider block mb-1">
                  City / District *
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="e.g. Prayagraj, Varanasi, Kanpur"
                  className={`w-full px-3 py-2 text-sm bg-white border rounded text-ink focus:outline-none focus:ring-1 focus:ring-emerald ${
                    errors.city ? 'border-red-500 bg-red-50/20' : 'border-paper-border'
                  }`}
                />
                {errors.city && (
                  <span className="text-[11px] text-red-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" /> {errors.city}
                  </span>
                )}
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-ink uppercase tracking-wider block mb-1">
                Inquiry Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-white border border-paper-border rounded text-ink focus:outline-none focus:ring-1 focus:ring-emerald"
              >
                <option value="retailer-demo">Retailer / Shopkeeper — Product Demo on Android</option>
                <option value="incubator-investor">Incubator / Mentor / Potential Investor Inquiry</option>
                <option value="internship-review">College Internship Project Review &amp; Evaluation</option>
                <option value="distributor-partner">FMCG Distributor / Supplier Bulk Partnership</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-ink uppercase tracking-wider block mb-1">
                Message / Specific Questions (Optional)
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Mention any specific bookkeeping challenge, daily credit volume, or query..."
                className="w-full px-3 py-2 text-sm bg-white border border-paper-border rounded text-ink focus:outline-none focus:ring-1 focus:ring-emerald"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-emerald hover:bg-emerald-hover text-white text-sm font-semibold rounded shadow transition-all flex items-center justify-center gap-2 mt-2"
            >
              <Send className="w-4 h-4" />
              Submit Demo Enquiry
            </button>

            <p className="text-[11px] text-ink-muted text-center pt-2">
              Privacy protected. VACA never shares your shop credit volume or personal information with third parties.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
