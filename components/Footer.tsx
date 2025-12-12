import React, { useState } from 'react';
import { Cpu, Github, X, Shield, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const PrivacyContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-serif font-bold text-bw-gold mb-2">Governance Doctrine</h3>
        <p className="text-sm text-gray-400 mb-4">Ethical AI & Data Governance Framework | Version 1.0 | May 2025</p>
        
        <div className="space-y-4 text-sm text-gray-300">
          <div>
            <h4 className="font-bold text-white mb-1">1. Statement of Commitment</h4>
            <p>BW Global Advisory (“BWGA”) is founded upon the principle that artificial intelligence must be developed and deployed with the highest degree of ethical responsibility. The firm acknowledges that the power of advanced computational systems carries a corresponding obligation to ensure that technology is never used in a manner that compromises human rights, privacy, or social stability.</p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-1">2. Human Authority and Decision Governance</h4>
            <p>BWGA affirms without qualification that artificial intelligence shall never replace human authority. All outputs produced by the BWGA Nexus engine are advisory in nature and exist solely to assist decision-makers. No output is to be regarded as deterministic, final, or binding.</p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-1">3. Lawful Processing and Global Regulatory Compliance</h4>
            <p>BWGA operates as an international entity and therefore adopts a compliance-by-design methodology. The firm aligns its operations with major international regulatory standards, including GDPR and Australian Privacy Act.</p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-1">4. Data Collection, Limitation and Integrity Control</h4>
            <p>BWGA’s data strategy is governed by the principle of data restraint. The firm collects and processes only those data necessary to fulfill legitimate analytical purposes.</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-6">
        <h3 className="text-xl font-serif font-bold text-bw-gold mb-4">Data Protection</h3>
        <div className="space-y-4 text-sm text-gray-300">
          <p><strong className="text-white">Privacy Policy & Data Handling:</strong> BWGA is committed to lawful handling of all personal data.</p>
          <p><strong className="text-white">Commercial Usage:</strong> Personal information is not sold or shared for commercial exploitation.</p>
          <p><strong className="text-white">Security:</strong> All personal data is stored securely using enterprise-grade encryption.</p>
        </div>
      </div>
    </div>
  );

  const TermsContent = () => (
    <div className="space-y-8">
      {/* How to Use and Terms of Usage side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* How to Use - System Overview */}
        <div>
          <h3 className="text-xl font-serif font-bold text-bw-gold mb-2">How to Use</h3>
          <p className="text-sm text-gray-400 mb-6">BW Nexus AI System Overview | 7-Stage Strategic Intelligence Platform | Version 4.1</p>

          <div className="space-y-6 text-sm text-gray-300">
            <div className="border border-gray-700 rounded-lg p-4 bg-gray-800/50">
              <h4 className="font-bold text-bw-gold mb-2 text-lg">01 Input Context</h4>
              <p className="mb-2"><strong className="text-white">What it is:</strong> This is the foundational data-gathering phase. You will be guided through the "Primary Steps" (Identity, Mandate, Market, Risk) to build a comprehensive profile of your strategic goals.</p>
              <p><strong className="text-white">What you get:</strong> A complete, data-rich draft of your Strategic Roadmap that populates in real-time, serving as the single source of truth for all subsequent analysis.</p>
            </div>

            <div className="border border-gray-700 rounded-lg p-4 bg-gray-800/50">
              <h4 className="font-bold text-bw-gold mb-2 text-lg">02 Analytical Processing</h4>
              <p className="mb-2"><strong className="text-white">What it is:</strong> The interactive analysis phase where you leverage the system's core intelligence. Here you can stress-test your strategy and uncover hidden insights using a suite of powerful analytical tools.</p>
              <p><strong className="text-white">What you get:</strong> Deeper, actionable insights by modeling financial outcomes with the "ROI Diagnostic", exploring possibilities with the "Scenario Planner", or scoring potential partners with the "Compatibility Engine".</p>
            </div>

            <div className="border border-gray-700 rounded-lg p-4 bg-gray-800/50">
              <h4 className="font-bold text-bw-gold mb-2 text-lg">03 Report Generation</h4>
              <p className="mb-2"><strong className="text-white">What it is:</strong> The final output stage where you transition from the live draft to generating a suite of official, stakeholder-ready documents.</p>
              <p><strong className="text-white">What you get:</strong> After accepting the finalized draft, you unlock a comprehensive menu to generate tangible artifacts like a Full Strategic Dossier, Financial Models, and formal Letters of Intent, all tailored to specific audiences.</p>
            </div>
          </div>
        </div>

        {/* Terms of Usage - Legal Agreement */}
        <div>
          <h3 className="text-xl font-serif font-bold text-bw-gold mb-2">Terms of Usage</h3>
          <p className="text-sm text-gray-400 mb-4">Legal Agreement | Terms and Conditions of Service | Effective May 2025</p>

          <div className="space-y-6 text-sm text-gray-300">
            <div>
              <strong className="text-white block mb-1">1. Authorized Use & Access Protocols</strong>
              <p>This system is strictly for authorized strategic analysis. Access rights and data depth are calibrated to the user's declared Skill Level (Novice, Experienced, Expert). All inputs, including custom entity data, are processed via secure enterprise gateways. Unlawful data injection is prohibited.</p>
            </div>
            <div>
              <strong className="text-white block mb-1">2. Decision Support & Authority</strong>
              <p>BW Global Advisory provides insights for informational purposes. The Nexus OS outputs are probabilistic. Users operating at 'Novice' levels should verify insights with 'Expert' domain holders. Strategic decisions remain the sole responsibility of the user.</p>
            </div>
            <div>
              <strong className="text-white block mb-1">3. Data Privacy & Sovereignty</strong>
              <p>We adhere to strict GDPR and local data sovereignty laws. Custom operational data (Revenue, Headcount) and specific strategic intents are isolated. No user-specific data is used to train public foundation models.</p>
            </div>
            <div>
              <strong className="text-white block mb-1">4. Financial & Operational Models</strong>
              <p>The SCF (Strategic Cash Flow) and IVAS (Investment Viability Assessment) models are simulations based on provided Operational Scale and historical benchmarks. They do not constitute financial advice and scale dynamically with input granularity.</p>
            </div>
            <div>
              <strong className="text-white block mb-1">5. Historical Context & Deep-Wave Data</strong>
              <p>The system utilizes a proprietary dataset spanning ~1925-2025 (100 Years) to identify long-wave economic cycles and failure patterns. Users acknowledge that while this deep-context historical data provides robust precedent analysis, it does not guarantee future performance in volatile markets. Past performance is a calculated indicator, not a guarantee of future results.</p>
            </div>
            <div>
              <strong className="text-white block mb-1">6. Autonomous Agent Liability</strong>
              <p>The system deploys semi-autonomous AI agents ("Scout", "Diplomat", "Strategist") to construct intelligence dossiers. While these agents operate within strict ethical guardrails, their outputs are generative. Users must validate critical data points, particularly regarding real-time regulatory changes.</p>
            </div>
            <div>
              <strong className="text-white block mb-1">7. Neuro-Symbolic Logic Gatekeepers</strong>
              <p>The "Gatekeeper Protocol" enforces logical consistency checks on user inputs. The system reserves the right to halt analysis if inputs contradict established economic physics or fail the 100-Point checklist, ensuring integrity of the final dossier.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Terms of Engagement & Compliance */}
      <div className="border-t border-gray-700 pt-6">
        <h3 className="text-xl font-serif font-bold text-bw-gold mb-2">Terms of Engagement & Compliance</h3>
        <p className="text-sm text-gray-400 mb-4">Legal Framework & User Responsibilities</p>

        <div className="space-y-4 text-sm text-gray-300">
          <div>
            <strong className="text-white block mb-1">1. Intelligence Layer, Not a CRM</strong>
            <p>The Nexus OS is an "Early-Stage Intelligence Layer" designed to operate upstream of your CRM, ERP, or Investment Committee. It provides the initial "Go/No-Go" signals and strategic frameworks for regional engagement.</p>
          </div>
          <div>
            <strong className="text-white block mb-1">2. Decision Support, Not Authority</strong>
            <p>The system provides probabilistic insights and data-driven recommendations. Users, especially at 'Novice' levels, should verify critical outputs with 'Expert' domain holders. Final strategic decisions remain your sole responsibility.</p>
          </div>
          <div>
            <strong className="text-white block mb-1">3. Data Sovereignty & Isolation</strong>
            <p>The system adheres to strict GDPR and local data sovereignty protocols. Your custom operational data and strategic intents are cryptographically isolated and are never used to train public models.</p>
          </div>
          <div>
            <strong className="text-white block mb-1">4. Financial & Operational Simulations</strong>
            <p>All financial models (ROI, IRR, etc.) are simulations based on the data you provide and historical benchmarks. They are not to be construed as financial advice. The accuracy of these models scales dynamically with the granularity of your inputs.</p>
          </div>
          <div>
            <strong className="text-white block mb-1">5. Predictive Limits</strong>
            <p>Our proprietary dataset spans ~1925-2025, enabling the identification of long-wave economic cycles and historical failure patterns. However, unforeseen "black swan" events can impact predictive accuracy.</p>
          </div>
          <div>
            <strong className="text-white block mb-1">6. AI Agent Validation</strong>
            <p>Semi-autonomous AI agents construct intelligence dossiers within strict ethical and logical guardrails. It is the user's responsibility to validate critical data points before making final commitments.</p>
          </div>
          <div>
            <strong className="text-white block mb-1">7. No Guarantees & User Responsibility</strong>
            <p>While great effort has been made to ensure the accuracy of the data and analyses, this system is a decision-support tool, not a final say. The onus is on the user to verify all information before making financial or strategic commitments. We welcome feedback to help build a better service.</p>
          </div>
          <div>
            <strong className="text-white block mb-1">8. Logical Integrity Protocol</strong>
            <p>The Neuro-Symbolic core enforces logical consistency. The system will flag or halt processes if user inputs fundamentally contradict established economic principles or fail data integrity checks.</p>
          </div>
        </div>
      </div>

      {/* About The Firm */}
      <div className="border-t border-gray-700 pt-6">
        <h3 className="text-xl font-serif font-bold text-bw-gold mb-4">About The Firm</h3>
        <div className="space-y-6 text-sm text-gray-300">
          <div>
            <h4 className="font-bold text-white mb-1">Company Profile</h4>
            <p>BW Global Advisory is an international advisory and intelligence firm dedicated to unlocking regional economic potential through structured intelligence and ethical AI deployment.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-1">Origin Story: Why This System Exists</h4>
            <p>BWGA Nexus was built as a response to repeated field observations that emerging regions are structurally excluded not because they lack value, but because they lack visibility and governance translation.</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <footer className="bg-bw-navy text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
              <div className="flex items-center space-x-2 mb-2">
                  <Cpu className="h-6 w-6 text-bw-gold" />
                  <span className="text-xl font-serif font-bold">
                  BW <span className="text-bw-gold">Nexus AI</span>
                  </span>
              </div>
              <p className="text-xs text-gray-500">Economic Intelligence Operating System</p>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-400">
              <button onClick={() => setActiveModal('privacy')} className="hover:text-white transition-colors flex items-center gap-2">
                <Shield className="h-4 w-4" /> Privacy Policy
              </button>
              <button onClick={() => setActiveModal('terms')} className="hover:text-white transition-colors flex items-center gap-2">
                <FileText className="h-4 w-4" /> Terms of Service
              </button>
            </div>
          </div>
          
          <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} BW Global Advisory. All rights reserved.</p>
            <p className="mt-2 md:mt-0 font-mono text-gray-600">ABN: 55 978 113 300</p>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl bg-bw-navy border border-gray-700 rounded-lg shadow-2xl h-[95vh] flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700 bg-bw-navy/50">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  {activeModal === 'privacy' ? <Shield className="h-5 w-5 text-bw-gold" /> : <FileText className="h-5 w-5 text-bw-gold" />}
                  {activeModal === 'privacy' ? 'Privacy & Governance' : 'Terms of Service'}
                </h2>
                <button 
                  onClick={() => setActiveModal(null)}
                  className="text-gray-400 hover:text-white transition-colors p-1"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 min-h-0">
                <div className="max-w-none">
                  {activeModal === 'privacy' ? <PrivacyContent /> : <TermsContent />}
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-gray-700 bg-black/20 flex justify-end">
                <button 
                  onClick={() => setActiveModal(null)}
                  className="px-6 py-2 bg-bw-gold text-bw-navy font-bold text-sm rounded-sm hover:bg-white transition-colors uppercase tracking-wide"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};