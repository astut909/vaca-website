import React, { useState } from 'react';
import { Mic, ArrowRight, Volume2, Sparkles, Check } from 'lucide-react';
import { VOICE_SCENARIOS, VoiceScenario } from '../data/mockData';

export const VoiceDemoInteractive: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<VoiceScenario>(VOICE_SCENARIOS[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVoice = (scenario: VoiceScenario) => {
    setSelectedScenario(scenario);
    setIsPlaying(true);
    setTimeout(() => {
      setIsPlaying(false);
    }, 1800);
  };

  return (
    <div className="bg-cream-paper border border-paper-border rounded-xl p-6 sm:p-8 shadow-ledger">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-paper-border gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald"></span>
          <span className="text-xs uppercase tracking-widest text-ink-muted font-semibold">
            Interactive Voice Simulator (आवाज़ से हिसाब)
          </span>
        </div>
        <span className="text-xs text-ink-secondary bg-cream-dark px-2.5 py-1 rounded border border-paper-border">
          Hindi · Hinglish · English
        </span>
      </div>

      {/* Scenario Selector Pills */}
      <div className="mt-5">
        <label className="text-xs font-semibold text-ink-muted uppercase tracking-wider block mb-2">
          Select real shopkeeper voice command:
        </label>
        <div className="flex flex-wrap gap-2">
          {VOICE_SCENARIOS.map((sc) => (
            <button
              key={sc.id}
              onClick={() => handlePlayVoice(sc)}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-all flex items-center gap-1.5 ${
                selectedScenario.id === sc.id
                  ? 'bg-ink text-white shadow-sm'
                  : 'bg-cream border border-paper-border text-ink-secondary hover:text-ink hover:bg-cream-dark'
              }`}
            >
              {selectedScenario.id === sc.id && <Check className="w-3 h-3 text-emerald-400" />}
              {sc.label}
            </button>
          ))}
        </div>
      </div>

      {/* Spoken Speech Simulation Box */}
      <div className="mt-6 bg-cream border border-paper-border/80 rounded-lg p-4 sm:p-5">
        <div className="flex items-start gap-4">
          <button
            onClick={() => handlePlayVoice(selectedScenario)}
            className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-all ${
              isPlaying
                ? 'bg-terracotta text-white scale-105 shadow-md animate-pulse'
                : 'bg-terracotta text-white hover:bg-terracotta/90 shadow-sm'
            }`}
            title="Simulate speech processing"
          >
            <Mic className="w-5 h-5" />
          </button>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-terracotta flex items-center gap-1">
                <Volume2 className="w-3 h-3" />
                Spoken by retailer:
              </span>
              <span className="text-[10px] text-ink-muted font-mono">
                {selectedScenario.audioDuration} · Natural Voice
              </span>
            </div>

            <p className="text-base sm:text-lg font-hindi font-semibold text-ink leading-relaxed">
              "{selectedScenario.transcript}"
            </p>

            {/* Equalizer animation */}
            <div className="flex items-center gap-1 mt-2.5 h-3">
              {[40, 75, 30, 95, 60, 85, 45, 90, 35, 70].map((h, i) => (
                <span
                  key={i}
                  className={`w-1 rounded-full transition-all duration-300 ${
                    isPlaying ? 'bg-terracotta' : 'bg-paper-border'
                  }`}
                  style={{
                    height: isPlaying ? `${h}%` : '20%',
                    transitionDelay: `${i * 35}ms`
                  }}
                ></span>
              ))}
              <span className="text-[10px] text-ink-muted ml-2 font-mono">
                {isPlaying ? 'Processing audio wave...' : 'Tap mic to replay'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Parser Arrow Divider */}
      <div className="my-4 flex items-center gap-3">
        <div className="flex-1 h-px bg-paper-border"></div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream-dark border border-paper-border text-[11px] font-semibold text-ink-secondary">
          <Sparkles className="w-3 h-3 text-emerald" />
          VACA NLP Understands &amp; Categorizes
          <ArrowRight className="w-3 h-3 text-ink-muted" />
        </div>
        <div className="flex-1 h-px bg-paper-border"></div>
      </div>

      {/* Parsed Output Card */}
      <div className="bg-white border border-paper-border rounded-lg p-4 sm:p-5 shadow-subtle">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-3 border-b border-stone-100">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-ink-muted block">
              Recognized Customer
            </span>
            <span className="text-sm font-semibold text-ink">
              {selectedScenario.parsed.customer}
            </span>
          </div>

          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-ink-muted block">
              Transaction Classification
            </span>
            <span className="text-sm font-semibold text-ink">
              {selectedScenario.parsed.entryType}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-ink-muted block">
              Extracted Amount
            </span>
            <span
              className={`text-base font-bold tabular-nums ${
                selectedScenario.parsed.intent === 'jama'
                  ? 'text-emerald'
                  : selectedScenario.parsed.intent === 'udhar'
                  ? 'text-red-700'
                  : 'text-ink'
              }`}
            >
              {selectedScenario.parsed.amount > 0
                ? `₹${selectedScenario.parsed.amount.toLocaleString('en-IN')}`
                : 'Inquiry'}
            </span>
          </div>

          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-ink-muted block">
              Ledger Impact
            </span>
            <span className="text-xs font-medium text-ink-secondary">
              {selectedScenario.parsed.autoSummary}
            </span>
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs text-ink-muted">
        <strong>Zero typing required:</strong> Works directly when weighing grains, handling packaging, or talking to another customer.
      </p>
    </div>
  );
};
