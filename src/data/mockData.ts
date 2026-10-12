export interface Transaction {
  id: string;
  date: string;
  time: string;
  note: string;
  amount: number;
  type: 'debit' | 'credit'; // debit = received/jama (+), credit = given/udhar (-)
  paymentMode?: string;
}

export interface CustomerLedger {
  id: string;
  name: string;
  phone: string;
  locality: string;
  balance: number; // positive = you will receive (lena hai), negative = you will give (dena hai)
  status: 'receive' | 'give' | 'settled';
  lastTransactionDate: string;
  transactions: Transaction[];
}

export interface VoiceScenario {
  id: string;
  label: string;
  transcript: string;
  audioDuration: string;
  parsed: {
    customer: string;
    entryType: string;
    amount: number;
    intent: 'jama' | 'udhar' | 'query';
    balanceImpact: string;
    autoSummary: string;
  };
}

export const CUSTOMER_LEDGERS: CustomerLedger[] = [
  {
    id: 'cust-1',
    name: 'Ramesh Kirana',
    phone: '+91 98390 XXXXX',
    locality: 'Katra, Prayagraj',
    balance: 2450,
    status: 'receive',
    lastTransactionDate: 'Today, 4:32 PM',
    transactions: [
      { id: 'tx-1', date: '11 Oct', time: '4:32 PM', note: 'Payment received (Cash)', amount: 500, type: 'debit', paymentMode: 'Cash' },
      { id: 'tx-2', date: '10 Oct', time: '11:15 AM', note: 'Atta 10kg, Mustard Oil 2L, Chana Dal', amount: 1200, type: 'credit' },
      { id: 'tx-3', date: '08 Oct', time: '6:10 PM', note: 'Part payment via PhonePe', amount: 750, type: 'debit', paymentMode: 'UPI' },
      { id: 'tx-4', date: '05 Oct', time: '9:45 AM', note: 'Monthly groceries (Biscuits, Spices, Sugar)', amount: 2500, type: 'credit' }
    ]
  },
  {
    id: 'cust-2',
    name: 'Sunita Sharma',
    phone: '+91 94502 XXXXX',
    locality: 'Civil Lines, Prayagraj',
    balance: 1200,
    status: 'receive',
    lastTransactionDate: '10 Oct, 6:20 PM',
    transactions: [
      { id: 'tx-21', date: '10 Oct', time: '6:20 PM', note: 'Fortune Refined 1L, Basmati Rice 5kg', amount: 1200, type: 'credit' },
      { id: 'tx-22', date: '02 Oct', time: '8:10 PM', note: 'Full monthly settlement', amount: 3400, type: 'debit', paymentMode: 'UPI' }
    ]
  },
  {
    id: 'cust-3',
    name: 'Prakash Traders (Supplier)',
    phone: '+91 91254 XXXXX',
    locality: 'Muthiganj Mandi',
    balance: -3800,
    status: 'give',
    lastTransactionDate: '09 Oct, 2:15 PM',
    transactions: [
      { id: 'tx-31', date: '09 Oct', time: '2:15 PM', note: 'Cold drinks crate delivery (Pending)', amount: 3800, type: 'credit' },
      { id: 'tx-32', date: '28 Sep', time: '1:00 PM', note: 'Invoice #419 payment cleared', amount: 5000, type: 'debit', paymentMode: 'Bank Transfer' }
    ]
  },
  {
    id: 'cust-4',
    name: 'Anita Devi',
    phone: '+91 98381 XXXXX',
    locality: 'Lalbagh',
    balance: 650,
    status: 'receive',
    lastTransactionDate: '08 Oct, 5:40 PM',
    transactions: [
      { id: 'tx-41', date: '08 Oct', time: '5:40 PM', note: 'Detergent powder & bathing soaps', amount: 650, type: 'credit' },
      { id: 'tx-42', date: '25 Sep', time: '7:15 PM', note: 'Gullak cash payment', amount: 900, type: 'debit', paymentMode: 'Cash' }
    ]
  },
  {
    id: 'cust-5',
    name: 'Mohammad Irfan (Bakery)',
    phone: '+91 99195 XXXXX',
    locality: 'Roshan Bagh',
    balance: 0,
    status: 'settled',
    lastTransactionDate: '07 Oct, 8:00 PM',
    transactions: [
      { id: 'tx-51', date: '07 Oct', time: '8:00 PM', note: 'Complete hisab clear (Cash)', amount: 1850, type: 'debit', paymentMode: 'Cash' },
      { id: 'tx-52', date: '01 Oct', time: '10:30 AM', note: 'Maida 20kg + Baking butter', amount: 1850, type: 'credit' }
    ]
  },
  {
    id: 'cust-6',
    name: 'Verma Ji (Contractor)',
    phone: '+91 94155 XXXXX',
    locality: 'Naini Industrial Area',
    balance: 4100,
    status: 'receive',
    lastTransactionDate: '06 Oct, 12:45 PM',
    transactions: [
      { id: 'tx-61', date: '06 Oct', time: '12:45 PM', note: 'Tea, Coffee, Snacks for site workers', amount: 1600, type: 'credit' },
      { id: 'tx-62', date: '30 Sep', time: '4:15 PM', note: 'Bulk grocery for labor kitchen', amount: 2500, type: 'credit' }
    ]
  }
];

export const VOICE_SCENARIOS: VoiceScenario[] = [
  {
    id: 'v1',
    label: 'Payment received (जमा)',
    transcript: 'Ramesh Kirana ne 500 rupaye diye, jama kar lo',
    audioDuration: '0:02',
    parsed: {
      customer: 'Ramesh Kirana',
      entryType: 'Payment Received (Jama)',
      amount: 500,
      intent: 'jama',
      balanceImpact: 'Balance reduced by ₹500',
      autoSummary: 'New outstanding: ₹2,450 receivable'
    }
  },
  {
    id: 'v2',
    label: 'Credit given (उधार)',
    transcript: 'Sunita Sharma 1200 rupaye udhar likho 5 kilo atta aur tel ka',
    audioDuration: '0:03',
    parsed: {
      customer: 'Sunita Sharma',
      entryType: 'Credit Given (Udhar)',
      amount: 1200,
      intent: 'udhar',
      balanceImpact: 'Added ₹1,200 to customer balance',
      autoSummary: 'Items noted: 5kg Atta, Oil. Total due: ₹1,200'
    }
  },
  {
    id: 'v3',
    label: 'Supplier payment (देना)',
    transcript: 'Prakash Traders ko 800 rupaye diye cold drink delivery par',
    audioDuration: '0:03',
    parsed: {
      customer: 'Prakash Traders',
      entryType: 'Supplier Payment (Paid)',
      amount: 800,
      intent: 'jama',
      balanceImpact: 'Payable reduced by ₹800',
      autoSummary: 'Remaining to pay: ₹3,000'
    }
  },
  {
    id: 'v4',
    label: 'Quick inquiry (हिसाब पूछो)',
    transcript: 'Anita Devi ka kitna hisab baaki hai?',
    audioDuration: '0:02',
    parsed: {
      customer: 'Anita Devi',
      entryType: 'Balance Lookup (AI Query)',
      amount: 650,
      intent: 'query',
      balanceImpact: 'No entry created (Read-only inquiry)',
      autoSummary: 'Anita Devi owes ₹650 since 08 Oct. 2 items pending.'
    }
  }
];

export const FAQ_ITEMS = [
  {
    q: 'Agar dukan par internet nahi chala toh?',
    a: 'VACA ka architecture offline-first hai. Aap bina internet ke bhi entry bol sakte hain ya likh sakte hain. Jaise hi phone me network aayega, aapka bahi khata automatically cloud par sync ho jata hai.'
  },
  {
    q: 'Kya customer ko har baar message ya WhatsApp jayega?',
    a: 'Nahi, jab tak aap khud nahi chahenge tab tak koi message nahi jayega. Aap jab "Share Hisab on WhatsApp" dabate hain, tab ek saaf-suthra receipt customer ke phone par PDF ya summary ke roop me bhej sakte hain.'
  },
  {
    q: 'Purani bahi ya diary ka hisab kaise chadhega?',
    a: 'Aapko shuru se har ek purana bill likhne ki zaroorat nahi hai. Har grahak ka sirf "Opening Balance" (Purana baaki hisab) ek baar likh dijiye, aur aaj se nayi transactions VACA par track kijiye.'
  },
  {
    q: 'Kya dukan ka staff ya ladka entry delete kar sakta hai?',
    a: 'Nahi. VACA me server-side tamper-proofing aur audit logs hain. Koi purani entry chupke se badli ya delete nahi ho sakti. Har entry par date aur second tak ka timestamp hota hai.'
  },
  {
    q: 'Tax season ya CA ko hisab kaise bhejein?',
    a: 'Aap mahine ya saal ke aakhri me ek click se poora ledger Excel ya PDF format me export kar sakte hain. Isme customer-wise aur date-wise har ek transaction ka hisab hota hai.'
  }
];

export const INTERNSHIP_METADATA = {
  student: 'Astut Shukla',
  degree: 'B.Tech – Computer Science and Engineering',
  institution: 'United College of Engineering and Research, Prayagraj',
  organization: 'VACA Pvt. Ltd.',
  role: 'Web Development Intern',
  mentor: 'Garg Ratan Rai',
  session: '2026–2027',
  focusAreas: [
    'Frontend Architecture with React & TypeScript',
    'Voice-First UX for Non-Technical Kirana Retailers',
    'Offline-First Ledger State & Firebase Security Rules',
    'Responsive Indian Editorial Design & Micro-Interactions'
  ]
};
