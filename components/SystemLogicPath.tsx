import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Search, RefreshCw, BarChart3, CheckCircle, AlertCircle } from 'lucide-react';

interface LogEntry {
  timestamp: string;
  stage: string;
  action: string;
  icon: React.ReactNode;
  color: string;
  isActive?: boolean;
}

const exampleScenarios = [
  {
    scenario: 'Logistics Risk / Supply Chain',
    entries: [
      { timestamp: '[00:01]', stage: 'DETECTED INTENT', action: 'Logistics Risk / Supply Chain', icon: <AlertCircle size={16} />, color: 'text-blue-600' },
      { timestamp: '[00:01]', stage: 'CONTEXT', action: 'Vietnam Region', icon: <Search size={16} />, color: 'text-cyan-600' },
      { timestamp: '[00:02]', stage: 'ACTIVATING', action: 'Trade Disruption Simulator', icon: <Zap size={16} />, color: 'text-yellow-600' },
      { timestamp: '[00:02]', stage: 'LOADING', action: 'Historical Port Congestion Index', icon: <RefreshCw size={16} />, color: 'text-orange-600' },
      { timestamp: '[00:03]', stage: 'RETRIEVING', action: 'Vietnam Port Throughput Data (2024)', icon: <BarChart3 size={16} />, color: 'text-indigo-600' },
      { timestamp: '[00:03]', stage: 'ANALYZING', action: 'Wait times > 48hrs...', icon: <Search size={16} />, color: 'text-red-600' },
      { timestamp: '[00:04]', stage: 'GENERATING', action: 'Mitigation Strategy Beta...', icon: <Zap size={16} />, color: 'text-amber-600' },
      { timestamp: '[00:05]', stage: 'COMPLETE', action: '>> STRATEGY READY FOR REVIEW', icon: <CheckCircle size={16} />, color: 'text-green-600' },
    ]
  },
  {
    scenario: 'Market Entry Analysis',
    entries: [
      { timestamp: '[00:01]', stage: 'DETECTED INTENT', action: 'Market Entry Analysis', icon: <AlertCircle size={16} />, color: 'text-blue-600' },
      { timestamp: '[00:01]', stage: 'CONTEXT', action: 'Brazil Market', icon: <Search size={16} />, color: 'text-cyan-600' },
      { timestamp: '[00:02]', stage: 'ACTIVATING', action: 'Geopolitical Risk Engine', icon: <Zap size={16} />, color: 'text-yellow-600' },
      { timestamp: '[00:02]', stage: 'LOADING', action: 'Regional Economic Indicators', icon: <RefreshCw size={16} />, color: 'text-orange-600' },
      { timestamp: '[00:03]', stage: 'RETRIEVING', action: 'Brazil Regulatory Landscape (2024)', icon: <BarChart3 size={16} />, color: 'text-indigo-600' },
      { timestamp: '[00:03]', stage: 'ANALYZING', action: 'Market readiness score...', icon: <Search size={16} />, color: 'text-red-600' },
      { timestamp: '[00:04]', stage: 'GENERATING', action: 'Entry Strategy Report...', icon: <Zap size={16} />, color: 'text-amber-600' },
      { timestamp: '[00:05]', stage: 'COMPLETE', action: '>> MARKET ANALYSIS COMPLETE', icon: <CheckCircle size={16} />, color: 'text-green-600' },
    ]
  },
  {
    scenario: 'Partnership Assessment',
    entries: [
      { timestamp: '[00:01]', stage: 'DETECTED INTENT', action: 'Partnership Assessment', icon: <AlertCircle size={16} />, color: 'text-blue-600' },
      { timestamp: '[00:01]', stage: 'CONTEXT', action: 'Technology Sector', icon: <Search size={16} />, color: 'text-cyan-600' },
      { timestamp: '[00:02]', stage: 'ACTIVATING', action: 'Symbiotic Matching Engine', icon: <Zap size={16} />, color: 'text-yellow-600' },
      { timestamp: '[00:02]', stage: 'LOADING', action: 'Partner Database Index', icon: <RefreshCw size={16} />, color: 'text-orange-600' },
      { timestamp: '[00:03]', stage: 'RETRIEVING', action: 'Capability Alignment Data', icon: <BarChart3 size={16} />, color: 'text-indigo-600' },
      { timestamp: '[00:03]', stage: 'ANALYZING', action: 'Symbiosis compatibility...', icon: <Search size={16} />, color: 'text-red-600' },
      { timestamp: '[00:04]', stage: 'GENERATING', action: 'Partner Recommendations...', icon: <Zap size={16} />, color: 'text-amber-600' },
      { timestamp: '[00:05]', stage: 'COMPLETE', action: '>> TOP MATCHES IDENTIFIED', icon: <CheckCircle size={16} />, color: 'text-green-600' },
    ]
  },
];

const SystemLogicPath: React.FC = () => {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [displayedEntries, setDisplayedEntries] = useState<LogEntry[]>([]);
  const currentScenario = exampleScenarios[currentScenarioIndex];

  useEffect(() => {
    setDisplayedEntries([]);
    let entryIndex = 0;
    const interval = setInterval(() => {
      if (entryIndex < currentScenario.entries.length) {
        setDisplayedEntries(prev => [...prev, { ...currentScenario.entries[entryIndex], isActive: true }]);
        entryIndex++;
      } else {
        clearInterval(interval);
        // Reset to next scenario after delay
        setTimeout(() => {
          setCurrentScenarioIndex((prev) => (prev + 1) % exampleScenarios.length);
        }, 3000);
      }
    }, 400);

    return () => clearInterval(interval);
  }, [currentScenarioIndex]);

  return (
    <div className="w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="text-amber-500" size={24} />
            <h2 className="text-3xl md:text-4xl font-bold text-white">System Logic Path</h2>
          </div>
          <p className="text-slate-400 text-lg">Automated Intelligence Detection & Processing Flow</p>
          <div className="mt-4 flex justify-center gap-2">
            {exampleScenarios.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentScenarioIndex(idx);
                  setDisplayedEntries([]);
                }}
                className={`h-2 rounded-full transition-all ${
                  idx === currentScenarioIndex ? 'bg-amber-500 w-8' : 'bg-slate-600 w-2 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Scenario Display */}
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-8 font-mono text-sm">
          {/* Scenario Title */}
          <div className="text-amber-400 font-bold mb-6 text-base">
            SCENARIO: {currentScenario.scenario}
          </div>

          {/* Log Entries */}
          <div className="space-y-3 min-h-96">
            {displayedEntries.map((entry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-start gap-3 p-3 bg-slate-700 rounded border border-slate-600 hover:border-slate-500 transition-all"
              >
                <span className={`flex-shrink-0 mt-0.5 ${entry.color}`}>
                  {entry.icon}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-slate-500 min-w-12">{entry.timestamp}</span>
                    <span className="text-amber-400 font-bold min-w-24">{entry.stage}:</span>
                    <span className={`${entry.color} font-semibold`}>{entry.action}</span>
                  </div>
                </div>
                {entry.stage === 'COMPLETE' && (
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                    className="text-green-500"
                  >
                    ✓
                  </motion.div>
                )}
              </motion.div>
            ))}

            {displayedEntries.length === 0 && (
              <div className="text-slate-500 italic">Ready for input...</div>
            )}
          </div>

          {/* Status Bar */}
          <div className="mt-6 pt-4 border-t border-slate-600 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ opacity: [0.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-2 h-2 bg-green-500 rounded-full"
              />
              <span className="text-slate-400">System Status: </span>
              <span className="text-green-400 font-semibold">OPERATIONAL</span>
            </div>
            <div className="text-slate-500">
              Processing: {currentScenario.scenario}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Real-time Detection', icon: <AlertCircle size={20} />, desc: 'Instant recognition of partnership intent and requirements' },
            { label: 'Contextual Analysis', icon: <Search size={20} />, desc: 'Deep context understanding across markets and sectors' },
            { label: 'Automated Processing', icon: <Zap size={20} />, desc: 'Intelligent orchestration of analysis engines in sequence' },
          ].map((feature, idx) => (
            <div key={idx} className="bg-slate-800 border border-slate-700 rounded-lg p-6 text-center hover:border-amber-500 transition-all group">
              <div className="flex justify-center mb-3 text-amber-500 group-hover:text-amber-400 transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-bold text-white mb-2">{feature.label}</h3>
              <p className="text-slate-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemLogicPath;
