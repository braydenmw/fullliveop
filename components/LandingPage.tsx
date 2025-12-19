
import React from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { About } from './About';
import { Services } from './Services';
import { WorkbenchFeature } from './WorkbenchFeature';
import { Insights } from './Insights';
import { Pricing } from './Pricing';
import { Footer } from './Footer';
import SystemLogicPath from './SystemLogicPath';

interface LandingPageProps {
    onEnter: () => void;
    onOpenLegal: (section?: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onEnter, onOpenLegal }) => {
    return (
        <div className="font-sans text-slate-900 bg-white">
            <Navbar />
            {/* Hero also gets onOpenSystem just in case user clicks the visual element */}
            <Hero onOpenSystem={onEnter} />
            <Services />
            <SystemLogicPath />
            <WorkbenchFeature />
            <About />
            <Insights />
            {/* The single access point requested */}
            <Pricing onOpenSystem={onEnter} />
            <Footer />
        </div>
    );
};
