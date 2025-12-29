import React, { useState } from 'react';
import type { EcosystemPulse } from '../services/EventBus';
import {
    ArrowRight,
    BookOpen,
    CheckCircle2,
    Lock,
    Play,
    ShieldAlert,
    Users,
    Zap,
    X,
    Brain
} from 'lucide-react';

interface CommandCenterProps {
    onCreateNew: () => void;
    ecosystemPulse?: EcosystemPulse;
}

// ============================================================================
// FORMULA REFERENCE PAPER MODAL (Word-style)
// ============================================================================
const FormulaDeepDiveModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">
                <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-slate-50 border border-slate-200 rounded">
                            <Brain className="w-5 h-5 text-slate-900" />
                        </div>
                        <div>
                            <div className="text-slate-950 font-bold text-lg">BW Nexus AI — Intelligence Reference Paper</div>
                            <div className="text-slate-600 text-xs">NSIL + BW Brain + the 21-formula suite (5 primary engines + 16 derivative indices)</div>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 rounded hover:bg-slate-100">
                        <X className="w-5 h-5 text-slate-700" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-6 custom-scrollbar">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-slate-950 font-bold text-2xl leading-tight">Reference & Explanation Paper</div>
                        <div className="text-slate-600 text-sm mt-2 leading-relaxed">
                            This document explains how BW Nexus AI thinks (NSIL), what the BW Brain is, how the 21-formula suite works (5 primary engines + 16 derivative indices),
                            and how the new optimized algorithm layer enables <strong>1–3 second</strong> reasoning.
                        </div>

                        <div className="mt-4 bg-slate-50 border border-slate-200 rounded-lg p-4">
                            <div className="text-slate-950 font-bold text-sm">Quick orientation</div>
                            <div className="text-slate-700 text-sm mt-1 leading-relaxed">
                                Think of BW Nexus AI as a repeatable advisory workflow: <strong>validate → debate → score → synthesize → deliver</strong>. The formulas produce explainable scores;
                                the algorithm suite makes the same reasoning run fast, consistently, and with memory.
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                            <div className="lg:col-span-4">
                                <div className="bg-white border border-slate-200 rounded-lg p-4 sticky top-4">
                                    <div className="text-slate-950 font-bold text-sm">Contents</div>
                                    <ul className="mt-3 space-y-2 text-sm">
                                        <li><a className="text-slate-950 hover:underline" href="#ref-agentic">0) Agentic AI status</a></li>
                                        <li><a className="text-slate-950 hover:underline" href="#ref-nsil">1) What NSIL is</a></li>
                                        <li><a className="text-slate-950 hover:underline" href="#ref-brain">2) The BW Brain</a></li>
                                        <li><a className="text-slate-950 hover:underline" href="#ref-algorithms">3) Optimized algorithm layer (1–3s)</a></li>
                                        <li><a className="text-slate-950 hover:underline" href="#ref-primary">4) The 5 primary engines</a></li>
                                        <li><a className="text-slate-950 hover:underline" href="#ref-derivatives">5) The 16 derivative indices</a></li>
                                        <li><a className="text-slate-950 hover:underline" href="#ref-reportbuild">6) How reports are built</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="lg:col-span-8">
                                <div className="space-y-4">
                                    <details open className="bg-white border border-slate-200 rounded-lg p-4">
                                        <summary id="ref-agentic" className="cursor-pointer select-none text-slate-950 font-bold text-lg">
                                            0) Agentic AI status (implemented, transparent)
                                        </summary>
                                        <div className="text-slate-700 text-sm mt-2 leading-relaxed">
                                            BW Nexus AI operates as a proactive, agentic digital worker. The optimized algorithm suite is <strong>implemented</strong> and orchestrated by the <em>OptimizedAgenticBrain</em>, enabling full reasoning loops in <strong>1–3 seconds</strong>. Outputs are <strong>not a black box</strong>: every claim is verified, traceable, and delivered with provenance.
                                        </div>
                                        <ul className="list-disc list-inside text-slate-700 text-sm mt-2 space-y-1">
                                            <li>Autonomous loop: validate → debate → score → synthesize → deliver.</li>
                                            <li>Early-stopping multi-persona debate + contradiction checks.</li>
                                            <li>Memory retrieval with relevance ranking improves case recall.</li>
                                            <li>Parallel formula graph executes the 21-formula suite efficiently.</li>
                                        </ul>
                                        <div className="text-slate-700 text-xs mt-3 leading-relaxed">
                                            For a narrative walkthrough, see “The Agentic Brain: How It Works” in the main page section below.
                                        </div>
                                    </details>
                                    <details open className="bg-white border border-slate-200 rounded-lg p-4">
                                        <summary id="ref-nsil" className="cursor-pointer select-none text-slate-950 font-bold text-lg">
                                            1) What NSIL is (in one page)
                                        </summary>
                                        <div className="text-slate-700 text-sm mt-2 leading-relaxed">
                                            NSIL (Nexus Strategic Intelligence Layer) is the reasoning layer that wraps around the scoring engines. It does four things:
                                            (1) validates inputs, (2) runs adversarial multi-agent debate, (3) applies mathematical scoring, and (4) produces structured outputs
                                            with evidence trails and confidence levels. The goal is not “information” — it is “advice that survives scrutiny.”
                                        </div>
                                    </details>

                                    <details open className="bg-white border border-slate-200 rounded-lg p-4">
                                        <summary id="ref-brain" className="cursor-pointer select-none text-slate-950 font-bold text-lg">
                                            2) The BW Brain (how it thinks)
                                        </summary>
                                        <div className="text-slate-700 text-sm mt-2 leading-relaxed">
                                            The BW Brain is a neuro-symbolic architecture: it combines pattern recognition (neural) with explainable reasoning (symbolic).
                                            Every conclusion can be traced to drivers, pressure points, debate arguments, and formula outputs.
                                        </div>
                                        <div className="text-slate-700 text-sm mt-3 leading-relaxed">
                                            A built-in 5-persona debate reduces bias and forces real trade-offs into the open:
                                        </div>
                                        <ul className="list-disc list-inside text-slate-700 text-sm mt-2 space-y-1">
                                            <li><strong>Skeptic</strong>: hunts deal-killers, false certainty, and hidden downside.</li>
                                            <li><strong>Advocate</strong>: finds upside, synergies, and value levers.</li>
                                            <li><strong>Regulator</strong>: checks compliance pathways, sanctions risk, and ethical constraints.</li>
                                            <li><strong>Accountant</strong>: validates cash flow logic, margins, and economic durability.</li>
                                            <li><strong>Operator</strong>: tests execution feasibility: team, supply chains, infrastructure.</li>
                                        </ul>
                                    </details>

                                    <details open className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                                        <summary id="ref-algorithms" className="cursor-pointer select-none text-slate-950 font-bold text-lg">
                                            3) Optimized algorithm layer (the “fast-thinking” brain)
                                        </summary>
                                        <div className="text-slate-700 text-sm mt-2 leading-relaxed">
                                            The 21 formulas define the scoring logic. The optimized algorithm layer is <strong>fully implemented</strong> and makes the workflow fast and scalable — targeting <strong>1–3 seconds</strong> for a full reasoning pass.
                                            It adds memory retrieval, contradiction checks, parallel scheduling, and early-stopping debate, all orchestrated by the <em>OptimizedAgenticBrain</em>.
                                        </div>
                                        <div className="mt-3 bg-white border border-slate-200 rounded p-3">
                                            <div className="text-slate-950 font-bold text-xs uppercase tracking-widest">Algorithm suite (implemented)</div>
                                            <ul className="list-disc list-inside text-slate-700 text-sm mt-2 space-y-1">
                                                <li><strong>VectorMemoryIndex</strong>: fast similarity search of prior cases (ANN/LSH + cosine).</li>
                                                <li><strong>SATContradictionSolver</strong>: flags conflicting intake constraints before scoring.</li>
                                                <li><strong>BayesianDebateEngine</strong>: persona debate with Bayesian updating + early stopping on consensus.</li>
                                                <li><strong>DAGScheduler</strong>: executes the 21-formula graph in parallel with memoization.</li>
                                                <li><strong>LazyEvalEngine</strong>: computes derivative indices only when needed.</li>
                                                <li><strong>DecisionTreeSynthesizer</strong>: selects the best report template and section plan.</li>
                                                <li><strong>GradientRankingEngine</strong>: learning-to-rank for relevance (improves memory retrieval quality).</li>
                                                <li><strong>OptimizedAgenticBrain</strong>: orchestrates everything into an executive brief + insights.</li>
                                            </ul>
                                        </div>
                                        <div className="mt-3 text-slate-700 text-sm leading-relaxed">
                                            Practical effect: faster iteration, clearer contradictions, better retrieval of relevant prior cases, and more consistent report structure. Outputs are <strong>transparent</strong> and <strong>auditable</strong> — not a black box.
                                        </div>
                                    </details>

                                    <details open className="bg-white border border-slate-200 rounded-lg p-4">
                                        <summary id="ref-primary" className="cursor-pointer select-none text-slate-950 font-bold text-lg">
                                            4) The 5 primary engines (the core formulas)
                                        </summary>
                                        <div className="text-slate-700 text-sm mt-2 leading-relaxed">
                                            These engines generate the first layer of hard math. They are the backbone of scoring, scenario stress-testing, and confidence.
                                        </div>

                                        <div className="mt-4 space-y-4">
                                            <div>
                                                <div className="text-slate-950 font-bold">SPI™ — Success Probability Index</div>
                                                <div className="text-slate-700 text-sm mt-1 leading-relaxed">
                                                    Estimates probability of success based on weighted factors (market readiness, partner fit, regulatory clarity, execution feasibility, and risk alignment).
                                                    Output is a 0–100 score with drivers and pressure points.
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-slate-950 font-bold">RROI™ — Regional Return on Investment</div>
                                                <div className="text-slate-700 text-sm mt-1 leading-relaxed">
                                                    Projects regional ROI with local multipliers (cost structure, incentives, infrastructure, growth trajectory).
                                                    Output is a risk-adjusted return range rather than a single-point guess.
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-slate-950 font-bold">SEAM™ — Stakeholder & Entity Alignment</div>
                                                <div className="text-slate-700 text-sm mt-1 leading-relaxed">
                                                    Maps the ecosystem (stakeholders, incentives, conflicts, influence). Flags alignment breakdowns early — where most “good on paper” deals fail later.
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-slate-950 font-bold">IVAS™ — Investment Validation Assessment</div>
                                                <div className="text-slate-700 text-sm mt-1 leading-relaxed">
                                                    Stress-tests time-to-activation and friction using scenario ranges (e.g., P10 / P50 / P90 timelines). Converts “we think we can do it fast” into a measurable activation profile.
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-slate-950 font-bold">SCF™ — Strategic Cash Flow / Confidence Framework</div>
                                                <div className="text-slate-700 text-sm mt-1 leading-relaxed">
                                                    Converts readiness + capture + timeline + debate consensus into an overall confidence-grade. This is the “board answer”: proceed, pause, or re-structure — with reasons.
                                                </div>
                                            </div>
                                        </div>
                                    </details>

                                    <details open className="bg-white border border-slate-200 rounded-lg p-4">
                                        <summary id="ref-derivatives" className="cursor-pointer select-none text-slate-950 font-bold text-lg">
                                            5) The 16 derivative indices (specialist formulas)
                                        </summary>
                                        <div className="text-slate-700 text-sm mt-2 leading-relaxed">
                                            These indices extend the primary engines with specialist domain scores. They help explain <em>why</em> a plan is strong/weak and what to fix.
                                        </div>

                                        <div className="mt-4">
                                            <div className="text-slate-950 font-bold">Strategic indices</div>
                                            <ul className="list-disc list-inside text-slate-700 text-sm mt-2 space-y-1">
                                                <li><strong>BARNA</strong> — Barriers Analysis: entry barrier strength (regulatory, competitive, capital, market access, cultural).</li>
                                                <li><strong>NVI</strong> — Network Value Index: value of partner networks and ecosystem connectivity.</li>
                                                <li><strong>CRI</strong> — Country Risk Index: country-level risk across political/economic/operational dimensions.</li>
                                                <li><strong>FRS</strong> — Flywheel Readiness Score: likelihood of compounding growth loops once activated.</li>
                                            </ul>
                                        </div>

                                        <div className="mt-4">
                                            <div className="text-slate-950 font-bold">Operational indices</div>
                                            <ul className="list-disc list-inside text-slate-700 text-sm mt-2 space-y-1">
                                                <li><strong>CAP</strong> — Capability Assessment Profile: organizational readiness to execute and adapt.</li>
                                                <li><strong>AGI</strong> — Activation Gradient Index: activation velocity and gating factors.</li>
                                                <li><strong>VCI</strong> — Value Creation Index: synergy and value-creation potential.</li>
                                                <li><strong>ATI</strong> — Asset Transfer Index: complexity/risk of transferring assets, IP, or operations.</li>
                                                <li><strong>ESI</strong> — Ecosystem Strength Index: strength of suppliers, talent, infrastructure, services.</li>
                                                <li><strong>ISI</strong> — Integration Speed Index: expected integration speed post-deal/post-entry.</li>
                                                <li><strong>OSI</strong> — Operational Synergy Index: operational synergy potential from combination.</li>
                                                <li><strong>TCO</strong> — Total Cost of Ownership: lifecycle costs (including hidden and exit costs).</li>
                                            </ul>
                                        </div>

                                        <div className="mt-4">
                                            <div className="text-slate-950 font-bold">Risk indices</div>
                                            <ul className="list-disc list-inside text-slate-700 text-sm mt-2 space-y-1">
                                                <li><strong>PRI</strong> — Political Risk Index: regime stability, policy consistency, expropriation/sovereign risks.</li>
                                                <li><strong>RNI</strong> — Regulatory Navigation Index: regulatory complexity and compliance effort.</li>
                                                <li><strong>SRA</strong> — Strategic Risk Assessment: market/execution/competitive/timing risk profile.</li>
                                                <li><strong>IDV</strong> — Investment Default Variance: variance from expected outcomes (projection fragility).</li>
                                            </ul>
                                        </div>

                                        <div className="mt-4 bg-slate-50 border border-slate-200 rounded p-4">
                                            <div className="text-slate-950 font-bold text-sm">Note on “21”</div>
                                            <div className="text-slate-700 text-sm mt-1 leading-relaxed">
                                                BW Nexus AI refers to the 21-formula suite as the 5 primary engines + 16 derivative indices shown above.
                                                In some modes, additional diagnostics may be computed for deeper analysis — but the “21” is the baseline scoring suite.
                                            </div>
                                        </div>
                                    </details>

                                    <details open className="bg-white border border-slate-200 rounded-lg p-4">
                                        <summary id="ref-reportbuild" className="cursor-pointer select-none text-slate-950 font-bold text-lg">
                                            6) How these formulas build your reports
                                        </summary>
                                        <ol className="list-decimal list-inside text-slate-700 text-sm mt-2 space-y-1">
                                            <li><strong>Intake</strong>: mission, constraints, region, partners, risk appetite are structured.</li>
                                            <li><strong>Validation</strong>: contradictions and missing constraints are flagged early.</li>
                                            <li><strong>Memory</strong>: similar prior cases are retrieved and ranked for relevance.</li>
                                            <li><strong>Debate</strong>: 5 personas argue for/against, attaching evidence and decision points.</li>
                                            <li><strong>Scoring</strong>: the 21-formula suite produces quantified scores, grades, drivers, and pressure points.</li>
                                            <li><strong>Synthesis</strong>: templates and sections are selected, then narratives are assembled for the chosen audience.</li>
                                            <li><strong>Deliverables</strong>: outputs are generated as decision-ready documents with traceable rationale.</li>
                                        </ol>
                                    </details>

                                    <div className="mt-4 text-xs text-slate-500">
                                        © 2025 BW Global Advisory. This reference paper describes proprietary methods and is provided for explanation and user orientation.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white border-t border-slate-200 px-6 py-3 flex items-center justify-end">
                    <button onClick={onClose} className="px-5 py-2 bg-blue-700 text-white text-sm font-bold rounded hover:bg-blue-800">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

const Section: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <div className={`bg-white p-8 rounded-2xl shadow-lg border border-slate-200/80 ${className}`}>
        {children}
    </div>
);

const FeatureCard: React.FC<{ icon: React.ElementType; title: string; description: string; }> = ({ icon: Icon, title, description }) => (
    <div className="flex items-start gap-4">
        <div className="bg-blue-100 text-blue-700 p-3 rounded-lg mt-1 flex-shrink-0">
            <Icon size={20} />
        </div>
        <div>
            <h4 className="font-bold text-slate-900 text-base">{title}</h4>
            <p className="text-slate-600 text-sm mt-1 leading-relaxed">{description}</p>
        </div>
    </div>
);

const CommandCenter: React.FC<CommandCenterProps> = ({ onCreateNew, ecosystemPulse: _ecosystemPulse }) => {
    const [accepted, setAccepted] = useState(false);
    const [showFormulaModal, setShowFormulaModal] = useState(false);

    void _ecosystemPulse;

    return (
        <div className="flex-1 w-full h-full min-h-0 overflow-y-auto bg-slate-100 font-sans text-slate-800">
            <div className="max-w-6xl mx-auto py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 space-y-16">

                {/* 1. Header & The Big Idea */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                        BW Nexus AI — Proactive Agentic Intelligence OS
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                        A new era for regional development intelligence.
                        Around the world, a persistent <span className="font-semibold text-slate-800">Global Understanding Gap</span> obscures genuine opportunity.
                        Fueled by fragmented data, outdated perceptions, and a lack of investor-grade tools, this gap systematically hinders development in the regional economies that form the backbone of national prosperity.
                    </p>
                    <p className="text-sm md:text-base text-slate-600 max-w-4xl mx-auto leading-relaxed">
                        BW Nexus AI is not a passive dashboard and not a standard chatbot. It is a proactive, agentic digital worker that begins reasoning the moment you start engaging — via your BW Consultant — listening, learning context, and responding with structured, decision-grade intelligence.
                        Built 100% for regional development connection, it helps reduce the misunderstanding of places and break away from typical markets.
                        The goal is simple: turn a mandate into clarity, fast, with explainable math and traceable reasoning.
                    </p>
                </div>

                {/* 1.5 About BWGA (short, not a book) */}
                <Section>
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-slate-900">Built by BW Global Advisory</h2>
                        <p className="text-slate-600 mt-2 max-w-4xl mx-auto leading-relaxed">
                            BW Global Advisory (BWGA) is an independent Australian initiative, founded and solely developed by <strong>Brayden Walls</strong>.
                            It was born from immersive, on‑the‑ground research in regional Philippines — and the lived reality of what actually breaks deals and stalls development — translated into a repeatable system.
                        </p>
                    </div>
                    <div className="mt-6 grid md:grid-cols-2 gap-6">
                        <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                            <h4 className="font-semibold text-slate-800">Mission</h4>
                            <p className="text-xs text-slate-500 mt-1">To bridge the Global Understanding Gap by providing AI‑enhanced intelligence that illuminates regional economic potential, facilitates symbiotic partnerships, and ensures community‑centered development outcomes.</p>
                        </div>
                        <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                            <h4 className="font-semibold text-slate-800">Ethical AI‑Human Symbiosis</h4>
                            <p className="text-xs text-slate-500 mt-1">AI amplifies human insight, but human expertise remains indispensable for context, ethics, and trust. Nexus AI is designed to <strong>augment, not replace</strong>, human judgment.</p>
                        </div>
                    </div>
                </Section>

                {/* 2. What This Turns Into (Live Workspace + Draft Outputs) */}
                <div>
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-slate-900">Your Clarity Engine: From Mandate to Intelligence in Minutes</h2>
                        <p className="text-slate-600 mt-2 max-w-3xl mx-auto">
                            BW Nexus AI is a proactive digital worker that transforms strategic goals into investor-ready intelligence through a simple workflow.
                            Inside the platform, you work in a <strong>live workspace</strong>: the moment you start Step 1 of 9, you and your BW Consultant begin building a living draft (like writing on a piece of paper).
                            Every selection you make — plus any uploads you provide — becomes structured material that compiles into multi-page deliverables.
                        </p>
                        <div className="mt-6 max-w-5xl mx-auto">
                            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm text-left">
                                <div className="text-slate-900 font-bold">Example (regional investment)</div>
                                <div className="text-slate-600 text-sm mt-1 leading-relaxed">
                                    A regional city may be trying to attract investment into industries like agribusiness, clean energy, logistics, or tourism — but faces fragmented information, outdated perceptions, and uncertainty about partners, approvals, and timelines.
                                    Nexus turns the mandate into a structured case: a draft narrative is built live as you complete the intake, then refined into an outreach pack that can help “break the ice” with investors and partners.
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-left max-w-5xl mx-auto">
                            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                                <div className="text-slate-900 font-bold">You Define</div>
                                <div className="text-slate-600 text-sm mt-1 leading-relaxed">
                                    State your mandate, target region, constraints, and risk appetite. Speak or type — your BW Consultant listens and clarifies.
                                </div>
                            </div>
                            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                                <div className="text-slate-900 font-bold">The Agent Executes</div>
                                <div className="text-slate-600 text-sm mt-1 leading-relaxed">
                                    Validates, debates, scores, and synthesizes: NSIL orchestrates the 5-persona debate and the 21-formula suite to build an explainable case.
                                </div>
                            </div>
                            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                                <div className="text-slate-900 font-bold">You Receive</div>
                                <div className="text-slate-600 text-sm mt-1 leading-relaxed">
                                    Board-ready outputs: scorecards, debate outcomes, risk registers, and actionable next steps — structured for partners and regulators.
                                </div>
                            </div>
                        </div>
                    </div>

                    <Section className="mt-10">
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-slate-900">The 9-Step System Development Intake (What You Fill In)</h3>
                            <p className="text-slate-600 mt-2 max-w-4xl mx-auto">
                                These are the nine structured sections inside the platform. Your selections here become the raw material for debate, scoring, and the final deliverables.
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                                <div className="font-semibold text-slate-800">1) Identity</div>
                                <div className="text-xs text-slate-500 mt-1">Captures org type/stage, capacity bands, and mission ownership/clearance context.</div>
                                <div className="text-xs text-slate-700 mt-2"><strong>Creates:</strong> entity baseline + constraints anchor for the entire case.</div>
                            </div>
                            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                                <div className="font-semibold text-slate-800">2) Mandate</div>
                                <div className="text-xs text-slate-500 mt-1">Defines vision, horizon, weighted objectives, problem statement, and non‑negotiables.</div>
                                <div className="text-xs text-slate-700 mt-2"><strong>Creates:</strong> mandate brief + objective weighting for scoring.</div>
                            </div>
                            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                                <div className="font-semibold text-slate-800">3) Market</div>
                                <div className="text-xs text-slate-500 mt-1">Sets geographies, trends, barriers, infrastructure, and opportunity sizing assumptions.</div>
                                <div className="text-xs text-slate-700 mt-2"><strong>Creates:</strong> market readiness drivers + evidence checklist.</div>
                            </div>
                            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                                <div className="font-semibold text-slate-800">4) Partners</div>
                                <div className="text-xs text-slate-500 mt-1">Defines archetypes, stakeholder influence vs alignment, dependencies, and partner profile.</div>
                                <div className="text-xs text-slate-700 mt-2"><strong>Creates:</strong> SEAM stakeholder map inputs + partner‑fit criteria.</div>
                            </div>
                            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                                <div className="font-semibold text-slate-800">5) Financial</div>
                                <div className="text-xs text-slate-500 mt-1">Builds scenarios, capex/opex assumptions, incentives, payback and return bands.</div>
                                <div className="text-xs text-slate-700 mt-2"><strong>Creates:</strong> RROI ranges + scenario table + viability narrative.</div>
                            </div>
                            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                                <div className="font-semibold text-slate-800">6) Risks</div>
                                <div className="text-xs text-slate-500 mt-1">Captures categories, likelihood/impact, mitigation actions, owners, and monitoring.</div>
                                <div className="text-xs text-slate-700 mt-2"><strong>Creates:</strong> risk register + mitigation plan + red‑flag list.</div>
                            </div>
                            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                                <div className="font-semibold text-slate-800">7) Capabilities</div>
                                <div className="text-xs text-slate-500 mt-1">Assesses team depth, technical maturity, capability gaps, and support needs.</div>
                                <div className="text-xs text-slate-700 mt-2"><strong>Creates:</strong> capability assessment + gap‑closure plan.</div>
                            </div>
                            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                                <div className="font-semibold text-slate-800">8) Execution</div>
                                <div className="text-xs text-slate-500 mt-1">Defines phased roadmap, gates, owners, budgets, buffers, and activation sequencing.</div>
                                <div className="text-xs text-slate-700 mt-2"><strong>Creates:</strong> implementation roadmap + IVAS activation profile.</div>
                            </div>
                            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                                <div className="font-semibold text-slate-800">9) Governance</div>
                                <div className="text-xs text-slate-500 mt-1">Sets decision rights, cadence, KPIs, compliance checks, and accountability structure.</div>
                                <div className="text-xs text-slate-700 mt-2"><strong>Creates:</strong> governance operating model + audit trail backbone.</div>
                            </div>
                        </div>

                        <div className="mt-8 bg-white border border-slate-200 rounded-lg p-5">
                            <div className="text-slate-900 font-bold">What this produces (simply)</div>
                            <div className="text-slate-700 text-sm mt-2 leading-relaxed">
                                A complete, investor‑grade deliverable pack: an executive summary, scorecards (SPI™, RROI™, SEAM™, IVAS™, SCF™), debate outcomes, a risk register, and an implementation narrative — structured for boards, partners, and regulators.
                            </div>
                        </div>
                    </Section>

                    {/* Removed workflowSteps cards per user request */}
                </div>

                {/* 3. Inside the Agentic Brain (how it does it) */}
                <Section>
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-slate-900">Inside the Agentic Brain: How It Works</h2>
                        <p className="text-slate-600 mt-2 max-w-4xl mx-auto leading-relaxed">
                            Here’s the hook: the nine steps are not “just a form.” They become a structured dataset that the Agentic Intelligence OS can run on in real time.
                            As you work in the <strong>live workspace</strong> with your BW Consultant, the system continuously turns messy real‑world inputs into a decision‑grade case — not as a one‑off chat answer, but as an auditable workflow.
                        </p>
                        <p className="text-slate-600 mt-3 max-w-4xl mx-auto leading-relaxed">
                            At a high level, NSIL (the Nexus Strategic Intelligence Layer) executes a repeatable loop — <strong>validate → debate → score → synthesize → deliver</strong> — so your draft intelligence becomes final deliverables without slow consulting cycles.
                            NSIL and the scoring system were developed within BW Global Advisory to keep outcomes explainable, traceable, and usable — not a black box.
                        </p>
                    </div>

                    <div className="mt-8 bg-white border border-slate-200 rounded-xl p-6 text-left">
                        <div className="text-slate-900 font-bold">How the live workspace becomes a report</div>
                        <div className="text-slate-700 text-sm mt-2 leading-relaxed">
                            Every selection you make across the 9 steps (plus uploads) is captured as structured evidence, assumptions, constraints, and objectives. The OS uses that structure to continuously assemble a living draft — the same draft that later compiles into your report pack.
                        </div>
                        <ol className="mt-4 space-y-2 text-slate-700 text-sm leading-relaxed list-decimal list-inside">
                            <li><strong>Structure:</strong> your intake becomes a case model (objectives, constraints, stakeholders, scenarios, risks, execution, governance).</li>
                            <li><strong>Validate:</strong> the system flags missing constraints, contradictions, and uncertainty so you can see what must be verified.</li>
                            <li><strong>Debate:</strong> five specialist personas pressure‑test upside, downside, compliance, unit economics, and feasibility.</li>
                            <li><strong>Stress‑test:</strong> counterfactual “what if?” checks expose fragility, timeline risk, and dependency failures.</li>
                            <li><strong>Score:</strong> the 21‑formula suite quantifies drivers, pressure points, and confidence from your inputs.</li>
                            <li><strong>Synthesize:</strong> narratives, section plans, and templates are assembled for your target audience (boards, partners, regulators).</li>
                            <li><strong>Deliver:</strong> the draft compiles into multi‑page intelligence reports, comparisons, and outreach letters designed to break the ice.</li>
                        </ol>
                    </div>

                    <div className="mt-8 bg-slate-50 border border-slate-200 rounded-xl p-6">
                        <div className="text-slate-900 font-bold text-sm uppercase tracking-widest">What “Agentic” Means Here</div>
                        <div className="text-slate-700 text-sm mt-2 leading-relaxed">
                            Agentic AI is not “a chat response.” It is an orchestrated workflow that takes initiative: it asks for missing constraints, challenges assumptions, proposes alternatives, and continuously structures your mandate into decision‑ready outputs.
                            In practice: the moment you begin engaging with your BW Consultant, the system starts assembling a case — listening, learning your context, and responding immediately.
                        </div>
                        <div className="text-slate-700 text-sm mt-2 leading-relaxed">
                            Your BW Consultant is your personal consultant with 24/7 access: always available for clarification, hypothesis testing, risk framing, and “what would break this?” questions.
                        </div>

                        <div className="mt-4 bg-white border border-slate-200 rounded-lg p-4">
                            <div className="text-slate-950 font-bold text-xs uppercase tracking-widest">The Five‑Layer Autonomous Reasoning Stack</div>
                            <ul className="list-disc list-inside text-slate-700 text-sm mt-2 space-y-1">
                                <li><strong>The Adversarial Input Shield</strong>: validates inputs and flags “garbage in, garbage out” risk before scoring.</li>
                                <li><strong>The Multi‑Perspective Reasoning Engine</strong>: runs five personas to eliminate bias and uncover blind spots.</li>
                                <li><strong>The Counterfactual Lab</strong>: tests “what if?” scenarios to stress‑test robustness and timelines.</li>
                                <li><strong>The Scoring Engines</strong>: applies the proprietary 21‑formula suite to produce explainable quantitative scores.</li>
                                <li><strong>The Learning Loop</strong>: retains outcomes and case structure so the system improves over time.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                            <h4 className="font-semibold text-slate-800">Five-Layer Reasoning Stack</h4>
                            <p className="text-xs text-slate-500 mt-1">A layered workflow that validates, debates, simulates counterfactuals, scores, and learns — to reduce bias and improve decision clarity.</p>
                        </div>
                        <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                            <h4 className="font-semibold text-slate-800">NSIL (Reasoning Layer)</h4>
                            <p className="text-xs text-slate-500 mt-1">Developed by BW Global Advisory, NSIL orchestrates the case lifecycle: validation, debate, stress‑testing, scoring, synthesis, and delivery.</p>
                        </div>
                        <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                            <h4 className="font-semibold text-slate-800">21-Formula Scoring Suite</h4>
                            <p className="text-xs text-slate-500 mt-1">5 primary engines + 16 derivative indices: explainable scores that translate narratives into quantified drivers, pressure points, and confidence.</p>
                        </div>
                    </div>

                    <div className="mt-6 bg-slate-50 p-5 rounded-lg border border-slate-200 text-left">
                        <div className="font-semibold text-slate-800">Algorithm Layer (Speed + Consistency)</div>
                        <div className="text-xs text-slate-600 mt-1 leading-relaxed">
                            Memory retrieval, contradiction checks, and parallel execution make the same reasoning run fast and repeatably — so the work compounds across sessions and drafts become deliverables.
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-slate-900">Why Proactive Agentic AI Is Different</h3>
                            <p className="text-slate-600 mt-2 max-w-4xl mx-auto">
                                Traditional systems respond to prompts. BW Nexus AI is designed to operate like a digital worker: it structures, challenges, and progresses the work the moment you engage.
                            </p>
                        </div>
                        <div className="mt-6 overflow-x-auto">
                            <table className="w-full text-sm border border-slate-200 bg-white rounded-lg overflow-hidden">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="text-left p-3 font-bold text-slate-900 border-b border-slate-200">Feature</th>
                                        <th className="text-left p-3 font-bold text-slate-900 border-b border-slate-200">Reactive AI (Traditional)</th>
                                        <th className="text-left p-3 font-bold text-slate-900 border-b border-slate-200">Proactive Agentic AI (BW Nexus)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-slate-200">
                                        <td className="p-3 font-semibold text-slate-800">Proactive, Not Reactive</td>
                                        <td className="p-3 text-slate-600">Waits for you to find and input data.</td>
                                        <td className="p-3 text-slate-600">Engages immediately: clarifies constraints, structures the mandate, and progresses the analysis as you speak with the BW Consultant.</td>
                                    </tr>
                                    <tr className="border-b border-slate-200">
                                        <td className="p-3 font-semibold text-slate-800">Verification‑First</td>
                                        <td className="p-3 text-slate-600">Can sound confident even when uncertain.</td>
                                        <td className="p-3 text-slate-600">Flags uncertainty, contradictions, and missing constraints so validation needs are visible and traceable.</td>
                                    </tr>
                                    <tr className="border-b border-slate-200">
                                        <td className="p-3 font-semibold text-slate-800">Memory‑Augmented</td>
                                        <td className="p-3 text-slate-600">Forgets context between sessions.</td>
                                        <td className="p-3 text-slate-600">Retains case context (assumptions, debate outcomes, decisions) so learning compounds over time.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-semibold text-slate-800">Traceable Outputs</td>
                                        <td className="p-3 text-slate-600">Often a “black box” response.</td>
                                        <td className="p-3 text-slate-600">Explainable scores + structured reasoning: drivers, pressure points, and a clear “board answer” pathway.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <div className="text-slate-600 text-sm mb-4 max-w-3xl mx-auto leading-relaxed">
                            The full NSIL methodology, including SEAM™ and the complete 21-formula suite and algorithm layer, is documented in the Intelligence Reference Paper.
                            This is the authoritative explanation of what runs inside the Agentic Intelligence OS and how it transforms your 9-step intake into outputs.
                        </div>
                        <button
                            onClick={() => setShowFormulaModal(true)}
                            className="px-6 py-3 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto shadow-md"
                        >
                            <BookOpen className="w-5 h-5" />
                            <span>Explore Full Methodology & 21 Formulas</span>
                        </button>
                    </div>
                </Section>

                {/* 4. The Problem */}
                <Section>
                    <h2 className="text-2xl font-bold text-slate-900 text-center">The Core Problem is a Lack of Clarity</h2>
                    <p className="text-center text-slate-600 mt-2 max-w-2xl mx-auto">
                        BW Nexus AI is not here to compete with or replace what other tools and advisors normally do. It exists because we saw a gap: too many regions remain misunderstood, and too many high-potential opportunities stay invisible.
                        That gap creates delay, uncertainty, and missed outcomes — and it funnels attention into large cities while regional economies wait.
                    </p>
                    <p className="text-center text-slate-600 mt-3 max-w-3xl mx-auto">
                        This system saves time and reduces risk by turning unknown and unsure markets into structured, validated, decision-ready cases.
                        Most importantly, it helps unlock places that hold immense wealth in their people — communities simply seeking a quality of life that many take for granted.
                    </p>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                            <h4 className="font-semibold text-slate-800">Fragmented Data</h4>
                            <p className="text-xs text-slate-500 mt-1">No real-time intelligence or single source of truth.</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                            <h4 className="font-semibold text-slate-800">Slow Consulting Cycles</h4>
                            <p className="text-xs text-slate-500 mt-1">Too expensive, non-repeatable, and outdated on arrival.</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                            <h4 className="font-semibold text-slate-800">No Investor-Grade Narrative</h4>
                            <p className="text-xs text-slate-500 mt-1">Static documents that don't survive scrutiny or execute.</p>
                        </div>
                    </div>
                </Section>

                {/* 5. The Solution & Core Differentiators */}
                <Section>
                    <h2 className="text-2xl font-bold text-slate-900 text-center">A New Way to See, Measure, and Deliver Opportunity</h2>
                    <p className="text-center text-slate-600 mt-2 max-w-3xl mx-auto">
                        This is not another dashboard. It is a proactive agentic intelligence OS designed to bridge the Global Understanding Gap by creating clarity where ambiguity normally wins.
                        It models the ecosystem, stress-tests assumptions, and delivers auditable outputs so you can move faster with confidence — without losing the human context that makes development sustainable.
                    </p>
                    <div className="mt-8 grid md:grid-cols-2 gap-x-8 gap-y-10">
                        <FeatureCard icon={Zap} title="Proactive, Not Reactive" description="This system doesn’t wait for perfect inputs. The second you start talking to your BW Consultant, it listens, clarifies, and begins assembling a structured case — while you work." />
                        <FeatureCard icon={ShieldAlert} title="Verification-First Outputs" description="The workflow is built to reduce hallucination risk: it flags missing constraints, contradictions, and uncertainty so you can see what must be validated before commitments." />
                        <FeatureCard icon={Brain} title="Memory-Augmented Intelligence" description="It remembers what you’ve built across a case: assumptions, constraints, debate outcomes, and decisions — so the intelligence compounds instead of resetting each session." />
                        <FeatureCard icon={Users} title="Adversarial Debate" description="To eliminate bias and uncover blind spots, your strategy is debated by five specialist personas — producing an unvarnished view of upside, downside, compliance, unit economics, and feasibility." />
                    </div>
                </Section>

                {/* 6. The Entire Meadow Philosophy */}
                <Section>
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-slate-900">The Entire Meadow Philosophy: Seeing the Whole Picture</h2>
                        <p className="text-slate-600 mt-2 max-w-4xl mx-auto leading-relaxed">
                            Most solutions only address the immediate transaction — the “bee and the flower.” But real progress comes from understanding the entire ecosystem: culture, regulation, incentives, capability, timing, and the web of relationships that shape outcomes.
                        </p>
                        <p className="text-slate-600 mt-3 max-w-4xl mx-auto leading-relaxed">
                            BW Nexus AI was created to bridge the gaps that keep high-potential regions and opportunities invisible. Instead of focusing on isolated deals, it models the full context: stakeholders, constraints, and the broader environment. The result is a decision-grade narrative with quantified drivers, pressure points, and actionable next steps—empowering you to act with clarity, not just data.
                        </p>
                        <p className="text-slate-600 mt-3 max-w-4xl mx-auto leading-relaxed">
                            <strong>BW Global Advisory is not here to compete with anyone, but to work alongside everyone who wants to change the way the world sees regional cities and the people who live there.</strong> Our mission is to offer a solution that opens doors for all—making it possible for anyone, from anywhere, to access a system that saves time and money, and brings opportunity to those who have been left out. Where once only a few could afford this level of insight, now it is open to all.
                        </p>
                        <p className="text-slate-600 mt-3 max-w-4xl mx-auto leading-relaxed">
                            This is for those who see, those who know, and—most importantly—for those who want to build true partnerships for a better life in their city, so no one feels left behind. We believe in empowering communities, fostering collaboration, and making sure every voice has a chance to be heard and every region has a chance to thrive.
                        </p>
                        <p className="text-slate-600 mt-6 max-w-4xl mx-auto leading-relaxed text-right">
                            <em>Thank you,<br/>Brayden Walls<br/>Developer & Founder</em>
                        </p>
                    </div>
                </Section>

                {/* 7. CTA & Terms of Engagement */}
                <Section>
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-slate-900">Ready to See with Absolute Clarity?</h2>
                        <p className="text-slate-600 mt-2 max-w-3xl mx-auto">
                            Start your journey: define your mandate, then let the system show you what’s possible.
                            The BW Consultant reacts immediately as you engage — listening, learning context, and responding with structured intelligence.
                        </p>
                        <p className="text-slate-600 mt-2 max-w-2xl mx-auto">To proceed, please review and accept the Terms of Engagement. This ensures you understand the scope, capabilities, and limitations of the platform.</p>
                    </div>

                    <div className="mt-8 max-w-4xl mx-auto">
                        <h3 className="text-slate-950 font-bold uppercase tracking-widest text-sm mb-3 flex items-center gap-2">
                            <ShieldAlert size={18} className="text-slate-700" />
                            Terms of Engagement & Business Disclaimer
                        </h3>
                        <div className="space-y-4 text-xs text-slate-600 bg-slate-50 p-5 rounded-lg border border-slate-200 max-h-64 overflow-y-auto">
                            <p className="font-bold text-slate-950 mb-2">Important Business Disclaimer</p>
                            <p className="leading-relaxed mb-3">Strategic Intelligence Briefs are prepared by BW Global Advisory (ABN 55 978 113 300) using our proprietary AI-Human analytical capabilities. Analysis is based on publicly available data, BWGA's AI Economic Strategy Engine (Nexus v6.0), and regional insights gathered by our advisory team. While every effort is made to ensure accuracy at the time of generation, all briefs are illustrative, intended for strategic discussion, and do not constitute financial, legal, or investment advice. Users are advised to conduct comprehensive independent due diligence before making any investment or partnership decisions.</p>
                            <p className="font-bold text-slate-950 mb-2">Terms of Engagement</p>
                            <p>1. <strong>Acceptance & Commercial License:</strong> By accessing the BW Nexus AI platform (v6.0), you acknowledge and accept these Terms of Engagement in full. Upon completion of payment, Strategic Intelligence Reports and associated deliverables become the intellectual property of the commissioning party. BW Global Advisory (ABN 55 978 113 300) retains rights to anonymized, aggregated data solely for system improvement and research purposes.</p>
                            <p>2. <strong>Decision Support Tool — Not Financial Advice:</strong> The Nexus OS provides probabilistic insights, data-driven analysis, and strategic recommendations. It is expressly NOT a final decision authority and does NOT constitute financial, legal, tax, or investment advice. All outputs are advisory in nature. Users must exercise independent judgment, verify all critical findings, and seek qualified professional advice before making binding commitments.</p>
                            <p>3. <strong>Due Diligence Requirement:</strong> Users acknowledge their responsibility to conduct comprehensive independent due diligence before acting on any analysis, recommendation, or insight provided by this platform. BW Global Advisory provides strategic intelligence to inform decisions—not to replace the professional judgment of qualified advisors.</p>
                            <p>4. <strong>Proprietary Intellectual Property:</strong> All system architecture, algorithms, formulas, workflows, user interfaces, and the unique “agentic” methodology—including but not limited to SPI™, RROI™, SEAM™, IVAS™, SCF™, and the entire BW Nexus AI platform—are the exclusive and proprietary intellectual property of BW Global Advisory. Any attempt to copy, reverse engineer, decompile, or create derivative works is strictly prohibited.</p>
                            <p>5. <strong>Limitation of Liability:</strong> To the maximum extent permitted by applicable law, BW Global Advisory, its directors, employees, and agents shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from use of the platform or reliance on its outputs. In all circumstances, total aggregate liability shall not exceed fees actually paid for the specific report or service in question.</p>
                            <p className="font-semibold mt-3 text-slate-900">Terms Version 6.0 | Effective December 2025 | BW Global Advisory (ABN 55 978 113 300) | Sydney, Australia</p>
                        </div>

                        <div className="mt-6 pt-6 border-t border-slate-200">
                            <label className="flex items-start gap-4 cursor-pointer select-none group mb-6 p-4 rounded-lg transition-colors hover:bg-slate-50">
                                <div className={`w-6 h-6 border-2 rounded flex items-center justify-center transition-all flex-shrink-0 mt-0.5 ${accepted ? 'bg-blue-600 border-blue-600' : 'bg-white border-slate-300 group-hover:border-blue-400'}`}>
                                    {accepted && <CheckCircle2 className="w-4 h-4 text-white" />}
                                </div>
                                <input type="checkbox" className="hidden" checked={accepted} onChange={e => setAccepted(e.target.checked)} />
                                <span className="text-sm text-slate-700">I have read, understood, and accept the Terms of Engagement. I acknowledge this is a decision-support tool and does not constitute financial, legal, or investment advice. All final decisions remain my responsibility.</span>
                            </label>

                            <div className="text-center">
                                <button
                                    onClick={onCreateNew}
                                    disabled={!accepted}
                                    className="bg-blue-600 text-white py-4 px-10 rounded-lg font-bold text-base uppercase tracking-wider flex items-center justify-center gap-3 hover:bg-blue-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg hover:shadow-xl disabled:shadow-none group w-full sm:w-auto mx-auto"
                                >
                                    {!accepted ? <Lock size={20} /> : <Play size={20} />}
                                    <span>Define Your First Mandate</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </Section>

                <div className="text-center pt-8">
                    <p className="text-xs text-slate-600">© 2025 BW Global Advisory (ABN 55 978 113 300). All Rights Reserved.</p>
                    <p className="text-xs text-slate-500 mt-1">Nexus Intelligence OS v6.0 | Sydney, Australia</p>
                </div>
            </div>
            
            {/* Formula Deep Dive Modal */}
            <FormulaDeepDiveModal 
                isOpen={showFormulaModal} 
                onClose={() => setShowFormulaModal(false)} 
            />
        </div>
    );
};

export default CommandCenter;
