import React, { useState } from 'react';
import { FileText, Download, Mail, Copy, CheckCircle, AlertCircle, Clock, DollarSign, Zap } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

type DocumentType = 'loi' | 'mou' | 'proposal' | 'executive-summary' | 'financial-model' | 'risk-assessment' | 'dossier' | 'comparison';

interface DocumentTemplate {
  id: DocumentType;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  timeToGenerate: string;
}

interface DocumentGenerationSuiteProps {
  entityName?: string;
  targetPartnerName?: string;
  targetMarket?: string;
  dealValue?: number;
  onDocumentGenerated?: (docType: DocumentType, content: string) => void;
}

const DocumentGenerationSuite: React.FC<DocumentGenerationSuiteProps> = ({
  entityName = 'Your Organization',
  targetPartnerName = 'Strategic Partner',
  targetMarket = 'Target Market',
  dealValue = 50000000,
  onDocumentGenerated
}) => {
  const [selectedDocument, setSelectedDocument] = useState<DocumentType | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [exportFormat, setExportFormat] = useState<'pdf' | 'docx'>('pdf');

  const documentTemplates: DocumentTemplate[] = [
    {
      id: 'loi',
      title: 'Letter of Intent',
      description: 'Non-binding expression of partnership interest with key terms and conditions',
      icon: <FileText className="w-6 h-6" />,
      category: 'Foundation',
      timeToGenerate: '< 2 min'
    },
    {
      id: 'mou',
      title: 'Memorandum of Understanding',
      description: 'Binding agreement on principles and expectations before full negotiation',
      icon: <FileText className="w-6 h-6" />,
      category: 'Foundation',
      timeToGenerate: '< 3 min'
    },
    {
      id: 'proposal',
      title: 'Partnership Proposal',
      description: 'Detailed value proposition and collaboration framework',
      icon: <FileText className="w-6 h-6" />,
      category: 'Strategic',
      timeToGenerate: '< 5 min'
    },
    {
      id: 'executive-summary',
      title: 'Executive Summary',
      description: '2-page strategic overview with recommendations and next steps',
      icon: <FileText className="w-6 h-6" />,
      category: 'Strategic',
      timeToGenerate: '< 2 min'
    },
    {
      id: 'financial-model',
      title: 'Financial Model',
      description: '5-year projections, ROI analysis, cash flow modeling',
      icon: <DollarSign className="w-6 h-6" />,
      category: 'Analysis',
      timeToGenerate: '< 4 min'
    },
    {
      id: 'risk-assessment',
      title: 'Risk Assessment Report',
      description: 'Comprehensive risk identification, mitigation, and contingency planning',
      icon: <AlertCircle className="w-6 h-6" />,
      category: 'Analysis',
      timeToGenerate: '< 3 min'
    },
    {
      id: 'dossier',
      title: 'Full Market Dossier',
      description: 'Comprehensive 15-20 page document with all analysis and recommendations',
      icon: <FileText className="w-6 h-6" />,
      category: 'Comprehensive',
      timeToGenerate: '< 8 min'
    },
    {
      id: 'comparison',
      title: 'Partner Comparison Matrix',
      description: 'Side-by-side analysis of multiple partnership options',
      icon: <FileText className="w-6 h-6" />,
      category: 'Comparative',
      timeToGenerate: '< 3 min'
    }
  ];

  const generateDocument = async (docType: DocumentType) => {
    setSelectedDocument(docType);
    setIsGenerating(true);
    
    // Simulate generation time based on document complexity
    const generationTime = docType === 'dossier' ? 8000 : docType === 'financial-model' ? 4000 : 2500;
    
    await new Promise(r => setTimeout(r, generationTime));

    let content = '';

    switch (docType) {
      case 'loi':
        content = generateLOI();
        break;
      case 'mou':
        content = generateMOU();
        break;
      case 'proposal':
        content = generateProposal();
        break;
      case 'executive-summary':
        content = generateExecutiveSummary();
        break;
      case 'financial-model':
        content = generateFinancialModel();
        break;
      case 'risk-assessment':
        content = generateRiskAssessment();
        break;
      case 'dossier':
        content = generateDossier();
        break;
      case 'comparison':
        content = generateComparison();
        break;
    }

    setGeneratedContent(content);
    setIsGenerating(false);
    onDocumentGenerated?.(docType, content);
  };

  const generateLOI = () => `
LETTER OF INTENT

Date: ${new Date().toLocaleDateString()}

TO: ${targetPartnerName}

RE: Expression of Interest in Strategic Partnership

Dear [Partner Contact],

${entityName} is pleased to express its interest in exploring a strategic partnership with ${targetPartnerName} focused on market entry and expansion into ${targetMarket}.

PROPOSED PARTNERSHIP TERMS:
• Investment Amount: $${(dealValue / 1000000).toFixed(1)}M
• Timeline for Full Agreement: 90-180 days
• Governance Structure: Joint steering committee with quarterly reviews
• Equity Structure: To be negotiated (proposed range: 40-60%)

AREAS OF COLLABORATION:
1. Market Access & Distribution
2. Technology & Operational Transfer
3. Financial Structuring & Capital Deployment
4. Regulatory & Compliance Framework

NEXT STEPS:
We propose the following timeline:
- Week 1-2: Detailed business plan review
- Week 3-4: Due diligence initiation
- Week 5-8: Term sheet development
- Week 9-12: Full agreement negotiation

This Letter of Intent is non-binding except for confidentiality and exclusivity provisions (90-day exclusive negotiation period).

We look forward to building a mutually beneficial partnership.

Sincerely,
${entityName} Leadership
  `;

  const generateMOU = () => `
MEMORANDUM OF UNDERSTANDING

This Memorandum of Understanding ("MOU") is entered into as of ${new Date().toLocaleDateString()}, between ${entityName} ("Party A") and ${targetPartnerName} ("Party B").

RECITALS:
Whereas, Party A seeks to establish a strategic partnership in ${targetMarket};
Whereas, Party B possesses valuable market knowledge and operational capabilities;
NOW, THEREFORE, the parties agree as follows:

1. PURPOSE
The purpose of this partnership is to establish a profitable and sustainable business operation in ${targetMarket}, with projected annual revenue of $${(dealValue * 0.15 / 1000000).toFixed(1)}M within 18 months.

2. GOVERNANCE STRUCTURE
• Joint Steering Committee: Quarterly meetings, monthly calls
• Decision Authority: Decisions ≥$500K require both parties' approval
• Dispute Resolution: Negotiation → Mediation → Arbitration

3. FINANCIAL TERMS
• Total Investment: $${(dealValue / 1000000).toFixed(1)}M
• Funding Source: Party A responsible for 60%, Party B for 40%
• Profit Sharing: 50% to each party after cost recovery
• Payment Schedule: Quarterly based on milestones

4. TERM & TERMINATION
• Initial Term: 5 years with annual renewal options
• Termination: 180 days notice with cause; 360 days without cause
• Wind-down: 12-month orderly transition period

5. CONFIDENTIALITY & IP RIGHTS
All proprietary information remains confidential. IP developed jointly shall be shared equally.

6. REPRESENTATIONS & WARRANTIES
Each party represents that it has legal authority to enter into this agreement and commit resources as outlined.

BINDING PROVISIONS:
Sections 5 (Confidentiality) and 7 (Dispute Resolution) are binding.

TERM:
This MOU is effective for 120 days from signing, after which it expires unless extended in writing.

SIGNATURES:

For ${entityName}: ___________________________ Date: _______
For ${targetPartnerName}: ___________________________ Date: _______
  `;

  const generateProposal = () => `
STRATEGIC PARTNERSHIP PROPOSAL

Executive Overview:
This proposal outlines a comprehensive partnership framework for ${entityName} and ${targetPartnerName} to jointly capture market opportunities in ${targetMarket}.

MARKET OPPORTUNITY:
• Market Size: $${(dealValue * 8 / 1000000).toFixed(0)}B addressable
• Growth Rate: 12-15% CAGR (next 5 years)
• Entry Timing: Optimal window 12-18 months
• Competitive Position: First-mover advantage available

PROPOSED VALUE CREATION:
1. Market Entry: Accelerated access via ${targetPartnerName}'s network
2. Cost Optimization: Combined operations reduce costs by 20-25%
3. Technology Transfer: Integration of best practices from both entities
4. Revenue Synergies: Cross-selling opportunities worth $${(dealValue * 0.25 / 1000000).toFixed(1)}M annually

PHASED IMPLEMENTATION PLAN:
Phase 1 (Months 1-3): Legal setup, regulatory approvals, team assembly
Phase 2 (Months 4-9): Operations launch, pilot customer acquisition
Phase 3 (Months 10-18): Full-scale deployment, profitability target
Phase 4 (Year 2+): Scale and optimize, expand to adjacent markets

FINANCIAL PROJECTIONS:
Year 1: Revenue $${(dealValue * 0.15 / 1000000).toFixed(1)}M, EBITDA Margin -15% (investment phase)
Year 2: Revenue $${(dealValue * 0.35 / 1000000).toFixed(1)}M, EBITDA Margin 8%
Year 3: Revenue $${(dealValue * 0.65 / 1000000).toFixed(1)}M, EBITDA Margin 18%
Year 5: Revenue $${(dealValue / 1000000).toFixed(1)}M, EBITDA Margin 28%

INVESTMENT REQUIREMENTS:
• Capital Required: $${(dealValue / 1000000).toFixed(1)}M over 18 months
• Working Capital: $${(dealValue * 0.1 / 1000000).toFixed(1)}M ongoing
• Expected ROI: 35-40% over 5 years

RISK MITIGATION:
• Regulatory: Dedicated compliance team, government liaisons
• Market: Diversified customer base, long-term contracts
• Operational: Local management team with 10+ year experience
• Financial: Quarterly performance reviews with adjustment mechanisms

NEXT STEPS:
1. Steering committee kickoff meeting
2. Detailed business plan development
3. Due diligence process initiation
4. Term sheet negotiation and finalization
  `;

  const generateExecutiveSummary = () => `
EXECUTIVE SUMMARY: ${targetMarket} MARKET ENTRY STRATEGY

OPPORTUNITY:
${entityName} has identified a significant market entry opportunity in ${targetMarket} with ${targetPartnerName} as the preferred partner. This partnership positions us to capture $${(dealValue / 1000000).toFixed(1)}M in addressable demand over 5 years.

KEY METRICS:
• Market Size: $${(dealValue * 8 / 1000000).toFixed(0)}B
• Projected Market Share: 2-3% (5-year horizon)
• Entry Investment: $${(dealValue / 1000000).toFixed(1)}M
• Break-even Timeline: 24-30 months
• 5-Year ROI: 35-40%

STRATEGIC FIT:
✓ ${targetPartnerName} brings essential market access
✓ Combined entity creates competitive moat (cost leadership)
✓ Aligned growth objectives and timeline
✓ Complementary operational strengths

RISKS & MITIGATION:
1. Regulatory Changes → Government relations team + scenario planning
2. Market Adoption → Pilot program + customer contracts pre-signed
3. Operational Complexity → Experienced management team + board oversight
4. Currency Exposure → Hedging program + local financing

RECOMMENDATION:
PROCEED with partnership formation. Market timing is favorable, competitive positioning is strong, and financial returns justify the investment.

IMMEDIATE ACTIONS (Next 30 Days):
1. Form joint steering committee
2. Complete regulatory assessment
3. Negotiate term sheet
4. Secure board approvals (both sides)

DECISION DEADLINE: ${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}
  `;

  const generateFinancialModel = () => `
FINANCIAL MODEL: ${targetMarket} PARTNERSHIP

INCOME STATEMENT PROJECTIONS (5 Years):

Year 1:
Revenue: $${(dealValue * 0.15 / 1000000).toFixed(1)}M
COGS: $${(dealValue * 0.09 / 1000000).toFixed(1)}M (60%)
OpEx: $${(dealValue * 0.12 / 1000000).toFixed(1)}M
EBITDA: -$${(dealValue * 0.06 / 1000000).toFixed(1)}M (-40%)

Year 2:
Revenue: $${(dealValue * 0.35 / 1000000).toFixed(1)}M
COGS: $${(dealValue * 0.17 / 1000000).toFixed(1)}M (50%)
OpEx: $${(dealValue * 0.2 / 1000000).toFixed(1)}M
EBITDA: $${(dealValue * 0.028 / 1000000).toFixed(1)}M (8%)

Year 3:
Revenue: $${(dealValue * 0.65 / 1000000).toFixed(1)}M
COGS: $${(dealValue * 0.26 / 1000000).toFixed(1)}M (40%)
OpEx: $${(dealValue * 0.26 / 1000000).toFixed(1)}M
EBITDA: $${(dealValue * 0.117 / 1000000).toFixed(1)}M (18%)

Year 4-5: Continued growth at 25% annually, EBITDA margin expanding to 25-28%

CASH FLOW ANALYSIS:
• Operating CF Y1-Y2: Negative
• Operating CF Y3+: Strongly positive
• Cumulative CF Break-even: Month 28
• Free CF (5-year cumulative): $${(dealValue * 1.2 / 1000000).toFixed(1)}M

INVESTMENT REQUIREMENTS:
Phase 1 (Months 1-6): $${(dealValue * 0.35 / 1000000).toFixed(1)}M (CapEx + working capital)
Phase 2 (Months 7-12): $${(dealValue * 0.35 / 1000000).toFixed(1)}M (scaling)
Phase 3 (Months 13-24): $${(dealValue * 0.3 / 1000000).toFixed(1)}M (optimization)

RETURN METRICS:
• IRR (5-year): 38%
• MOIC: 3.2x
• Payback Period: 30 months
• Terminal Value (Year 5): $${(dealValue * 4 / 1000000).toFixed(1)}M

SENSITIVITY ANALYSIS:
Scenarios: Base, Bull, Bear
Base Case assumes 12% market growth, 2% market share capture
Bull Case (+25% revenue): 45% IRR
Bear Case (-20% revenue): 28% IRR
  `;

  const generateRiskAssessment = () => `
RISK ASSESSMENT & MITIGATION STRATEGY

IDENTIFIED RISKS & RESPONSES:

1. REGULATORY RISK (HIGH)
   Description: Government policy changes could alter market conditions
   Probability: 40%
   Impact: High ($${(dealValue * 0.2 / 1000000).toFixed(1)}M exposure)
   Mitigation:
   • Hire government relations firm with direct ministry contacts
   • Build 6-month policy buffer into timeline
   • Negotiate contract flexibility clauses
   • Establish regulatory steering committee (board + external advisors)

2. MARKET ADOPTION RISK (MEDIUM-HIGH)
   Description: Customer acceptance slower than projected
   Probability: 35%
   Impact: High ($${(dealValue * 0.15 / 1000000).toFixed(1)}M revenue impact)
   Mitigation:
   • Launch pilot program with 5-10 anchor customers pre-signed
   • Conduct monthly market feedback surveys
   • Maintain flexible pricing strategy for first 18 months
   • Build brand awareness program ($2-3M marketing budget)

3. OPERATIONAL COMPLEXITY (MEDIUM)
   Description: Integration challenges with existing operations
   Probability: 45%
   Impact: Medium ($${(dealValue * 0.08 / 1000000).toFixed(1)}M cost overrun)
   Mitigation:
   • Hire integration management office (IMO) early
   • Develop detailed 100-day plan for each operational area
   • Establish KPIs with monthly tracking
   • Implement change management program

4. CURRENCY & FINANCIAL RISK (MEDIUM)
   Description: Exchange rate volatility, interest rate changes
   Probability: 60%
   Impact: Medium ($${(dealValue * 0.05 / 1000000).toFixed(1)}M impact)
   Mitigation:
   • Implement 12-month forward currency hedge
   • Structure financing with local currency borrowing
   • Monitor and rehedge quarterly
   • Maintain 15% contingency reserve

5. PARTNERSHIP DISSOLUTION RISK (MEDIUM-LOW)
   Description: Partnership breakdown due to disagreements
   Probability: 20%
   Impact: Very High ($${(dealValue / 1000000).toFixed(1)}M exit costs)
   Mitigation:
   • Clear governance structure with dispute resolution process
   • Quarterly alignment meetings at executive level
   • Define decision rights matrix upfront
   • Structure exit scenarios in original MOU

OVERALL RISK RATING: MEDIUM (with proper mitigation)
Recommendation: Proceed with risk management framework in place
  `;

  const generateDossier = () => `
COMPREHENSIVE MARKET ENTRY DOSSIER
${targetMarket} Partnership with ${targetPartnerName}

EXECUTIVE SUMMARY:
This 15-page dossier provides comprehensive analysis of the proposed partnership between ${entityName} and ${targetPartnerName} for market entry into ${targetMarket}. The opportunity represents a $${(dealValue * 8 / 1000000).toFixed(0)}B addressable market with favorable competitive positioning and strong financial returns.

RECOMMENDATION: PROCEED with Phase 1 implementation

═══════════════════════════════════════════════════════════

SECTION 1: MARKET ANALYSIS

Market Size & Growth:
• Total Addressable Market (TAM): $${(dealValue * 8 / 1000000).toFixed(0)}B
• Serviceable Addressable Market (SAM): $${(dealValue * 2 / 1000000).toFixed(1)}B
• CAGR (2025-2030): 12-15%
• Regional Growth Drivers: Urbanization, digital adoption, policy support

Competitive Landscape:
• 3-4 major players with 60% market share
• 15-20 mid-sized competitors with 30% share
• 50+ small/emerging players with 10% share
• Clear opportunity for consolidator / fast-mover advantage

Entry Barriers & Advantages:
• Regulatory approval: 6-12 months (manageable)
• Capital requirement: $${(dealValue / 1000000).toFixed(1)}M (achievable)
• Talent availability: Good (tech talent abundant)
• Partner access: CRITICAL - ${targetPartnerName} provides 60% of value

═══════════════════════════════════════════════════════════

SECTION 2: PARTNERSHIP STRUCTURE

Partner Fit Analysis:
• Market access: Score 9/10 (established relationships with key customers)
• Operational capability: Score 8/10 (proven track record)
• Financial strength: Score 8/10 (can co-invest $${(dealValue * 0.4 / 1000000).toFixed(1)}M)
• Cultural alignment: Score 8/10 (similar business values)
• OVERALL FIT: 8.25/10 - STRONG

Governance Model:
• Joint Steering Committee (monthly)
• Executive sponsor from each organization (weekly check-ins)
• Finance subcommittee (monthly budget review)
• Operations subcommittee (weekly operational updates)
• Escalation path for disputes (CEO → Board)

Financial Terms:
• Investment: $${(dealValue / 1000000).toFixed(1)}M total ($${(dealValue * 0.6 / 1000000).toFixed(1)}M from ${entityName}, $${(dealValue * 0.4 / 1000000).toFixed(1)}M from ${targetPartnerName})
• Equity split: 60/40
• Profit distribution: 50/50 after capital recovery
• Dividend policy: Annual, reinvest first 2 years

═══════════════════════════════════════════════════════════

SECTION 3: FINANCIAL PROJECTIONS

5-Year Revenue & EBITDA:
Year 1: $${(dealValue * 0.15 / 1000000).toFixed(1)}M revenue, -40% EBITDA margin
Year 2: $${(dealValue * 0.35 / 1000000).toFixed(1)}M revenue, 8% EBITDA margin
Year 3: $${(dealValue * 0.65 / 1000000).toFixed(1)}M revenue, 18% EBITDA margin
Year 4: $${(dealValue * 0.85 / 1000000).toFixed(1)}M revenue, 24% EBITDA margin
Year 5: $${(dealValue / 1000000).toFixed(1)}M revenue, 28% EBITDA margin

Investment Returns:
• IRR: 38% (5-year)
• MOIC: 3.2x
• Break-even: Month 28
• Terminal Value: $${(dealValue * 4 / 1000000).toFixed(1)}M (at 8x EBITDA multiple)

Cash Flow Profile:
• Cumulative investment: $${(dealValue / 1000000).toFixed(1)}M
• Cumulative cash return (5-yr): $${(dealValue * 1.2 / 1000000).toFixed(1)}M
• Cash breakeven: Month 28
• Positive cumulative CF from Year 3 onward

═══════════════════════════════════════════════════════════

SECTION 4: RISKS & MITIGATION

Top 5 Risks:
1. Regulatory changes (40% probability) → Mitigation: Policy monitoring team
2. Market adoption slower than expected (35%) → Pilot program with locked-in contracts
3. Operational integration challenges (45%) → Integration management office
4. Currency volatility (60%) → 12-month forward hedge
5. Partnership dynamics (20%) → Clear governance structure

Overall Risk Rating: MEDIUM (manageable with proper frameworks)

═══════════════════════════════════════════════════════════

SECTION 5: IMPLEMENTATION ROADMAP

Immediate (Days 1-30):
• Steering committee kick-off
• Regulatory roadmap finalized
• Team structure and hiring plan approved
• 100-day detailed plan for each function

Short-term (Months 1-3):
• Legal entity formation
• Regulatory approvals submitted
• Core team assembled (20-25 people)
• Pilot customer discussions initiated

Medium-term (Months 4-9):
• Operations launch
• Product/service customization
• Marketing campaign rollout
• Pilot customer onboarding

Long-term (Months 10-18):
• Scale to full operations
• Profitability target achieved
• Market expansion phase begins

═══════════════════════════════════════════════════════════

SECTION 6: DECISION FRAMEWORK

Go/No-Go Criteria:
✓ Partnership fit score > 8.0 (ACHIEVED: 8.25)
✓ IRR projection > 30% (ACHIEVED: 38%)
✓ Market growth rate > 10% (ACHIEVED: 12-15%)
✓ Regulatory path clarity > 70% (ACHIEVED: 80%)
✓ Partner financial strength confirmed (ACHIEVED)

Recommendation: ALL CRITERIA MET - PROCEED TO PHASE 1

DECISION DEADLINE: ${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}

═══════════════════════════════════════════════════════════

Next Steps:
1. Board approval from both organizations
2. Detailed term sheet negotiation (2-3 weeks)
3. Legal documentation finalization (3-4 weeks)
4. Regulatory filing submission (Week 6)
5. Partnership formation and team assembly (ongoing)
  `;

  const generateComparison = () => `
PARTNER COMPARISON MATRIX

${entityName} is evaluating three potential partnership options for ${targetMarket} market entry.

┌─────────────────────┬──────────────────┬──────────────────┬──────────────────┐
│ Criteria            │ ${targetPartnerName}        │ Alternative A    │ Alternative B    │
├─────────────────────┼──────────────────┼──────────────────┼──────────────────┤
│ Market Access       │ 9/10             │ 7/10             │ 5/10             │
│ Financial Strength  │ 8/10             │ 9/10             │ 6/10             │
│ Technical Capability│ 8/10             │ 8/10             │ 9/10             │
│ Cultural Fit        │ 8/10             │ 6/10             │ 7/10             │
│ Investment Capacity │ $${(dealValue * 0.4 / 1000000).toFixed(1)}M        │ $${(dealValue * 0.3 / 1000000).toFixed(1)}M        │ $${(dealValue * 0.5 / 1000000).toFixed(1)}M        │
│ Timeline Agreement  │ 18-24 months     │ 24-30 months     │ 12-18 months     │
│ Governance Clarity  │ 8/10             │ 6/10             │ 7/10             │
├─────────────────────┼──────────────────┼──────────────────┼──────────────────┤
│ OVERALL SCORE       │ 8.25/10 ✓        │ 7.29/10          │ 7.14/10          │
│ RECOMMENDATION      │ PRIMARY CHOICE   │ BACKUP OPTION    │ LAST RESORT       │
└─────────────────────┴──────────────────┴──────────────────┴──────────────────┘

FINANCIAL COMPARISON:

Projected Year 5 Revenue:
${targetPartnerName}: $${(dealValue / 1000000).toFixed(1)}M
Alternative A: $${(dealValue * 0.8 / 1000000).toFixed(1)}M (slower go-to-market)
Alternative B: $${(dealValue * 1.1 / 1000000).toFixed(1)}M (aggressive but risky)

5-Year ROI:
${targetPartnerName}: 38% IRR, 3.2x MOIC
Alternative A: 32% IRR, 2.6x MOIC
Alternative B: 42% IRR, 3.8x MOIC (but 45% failure risk)

Risk-Adjusted Return:
${targetPartnerName}: 36% (38% × 95% confidence)
Alternative A: 29% (32% × 90% confidence)
Alternative B: 23% (42% × 55% confidence)

CONCLUSION:
${targetPartnerName} offers the optimal balance of:
• Market access and customer relationships (9/10)
• Financial stability and commitment (8/10)
• Realistic timelines and achievable milestones
• Lowest risk-adjusted downside risk

RECOMMENDATION: Proceed with ${targetPartnerName} as primary partner.
Establish backup discussions with Alternative A (contingency planning).
  `;

  const exportDocument = async () => {
    if (!generatedContent) return;

    if (exportFormat === 'pdf') {
      const pdf = new jsPDF();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const pageWidth = pdf.internal.pageSize.getWidth();
      const margin = 10;
      const maxWidth = pageWidth - 2 * margin;

      const lines = pdf.splitTextToSize(generatedContent, maxWidth);
      let yPosition = margin;

      lines.forEach((line: string) => {
        if (yPosition > pageHeight - margin) {
          pdf.addPage();
          yPosition = margin;
        }
        pdf.text(line, margin, yPosition);
        yPosition += 5;
      });

      pdf.save(`${selectedDocument}-${new Date().getTime()}.pdf`);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent);
  };

  return (
    <div className="h-full bg-stone-50 p-6 overflow-y-auto">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* HEADER */}
        <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6">
          <h2 className="text-3xl font-bold text-stone-900 mb-2 flex items-center gap-2">
            <FileText className="w-8 h-8 text-blue-600" />
            Document Generation Suite
          </h2>
          <p className="text-stone-600">Generate professional partnership documents in minutes</p>
        </div>

        {!selectedDocument ? (
          <>
            {/* DOCUMENT GRID */}
            <div className="space-y-6">
              {['Foundation', 'Strategic', 'Analysis', 'Comprehensive', 'Comparative'].map(category => (
                <div key={category}>
                  <h3 className="text-sm font-bold text-stone-700 uppercase tracking-widest mb-3 px-1">{category} Documents</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {documentTemplates.filter(d => d.category === category).map(doc => (
                      <button
                        key={doc.id}
                        onClick={() => generateDocument(doc.id)}
                        className="bg-white rounded-lg border border-stone-200 p-4 hover:shadow-md hover:border-blue-300 transition-all text-left group"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="text-blue-600 group-hover:text-blue-700">{doc.icon}</div>
                          <div className="text-xs font-bold text-stone-500 bg-stone-100 px-2 py-1 rounded">{doc.timeToGenerate}</div>
                        </div>
                        <h4 className="font-bold text-stone-900 mb-1">{doc.title}</h4>
                        <p className="text-xs text-stone-600 leading-relaxed">{doc.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* INFO BOX */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900">
                <strong>💡 Pro Tip:</strong> Select any document to generate it instantly. All documents are pre-filled with data from your entity and partnership analysis.
              </p>
            </div>
          </>
        ) : isGenerating ? (
          <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-12 text-center space-y-6">
            <div className="flex justify-center">
              <div className="relative w-20 h-20">
                <div className="absolute inset-0 border-4 border-stone-200 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-stone-900 mb-2">Generating Document</h3>
              <p className="text-stone-600">Assembling {documentTemplates.find(d => d.id === selectedDocument)?.title}...</p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* GENERATED DOCUMENT */}
            <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-8 space-y-4">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-stone-200">
                <h3 className="text-xl font-bold text-stone-900">
                  {documentTemplates.find(d => d.id === selectedDocument)?.title}
                </h3>
                <button
                  onClick={() => setSelectedDocument(null)}
                  className="text-stone-500 hover:text-stone-700 font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="bg-stone-50 p-6 rounded-lg border border-stone-200 h-96 overflow-y-auto whitespace-pre-wrap text-sm text-stone-700 leading-relaxed font-mono">
                {generatedContent}
              </div>

              {/* ACTION BUTTONS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <button
                  onClick={copyToClipboard}
                  className="px-4 py-3 border border-stone-200 rounded-lg font-bold text-sm text-stone-700 hover:bg-stone-50 flex items-center justify-center gap-2"
                >
                  <Copy className="w-4 h-4" />
                  Copy to Clipboard
                </button>

                <button
                  onClick={exportDocument}
                  className="px-4 py-3 bg-blue-600 text-white rounded-lg font-bold text-sm hover:bg-blue-700 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download as PDF
                </button>

                <button
                  onClick={() => setSelectedDocument(null)}
                  className="px-4 py-3 border border-stone-200 rounded-lg font-bold text-sm text-stone-700 hover:bg-stone-50 flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Generate Another
                </button>
              </div>

              <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-xs text-green-800 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Document generated successfully. Ready for export or sharing.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentGenerationSuite;
