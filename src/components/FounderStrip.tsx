import React, { useState, useEffect, useRef } from 'react';
import { FOUNDER_INFO, FOUNDER_STATS } from '../data/advisoryData';
import { Award, ShieldCheck, CheckCircle2, Building } from 'lucide-react';
import founderImg from '../assets/images/founder_portrait_1784710356419.jpg';

export const FounderStrip: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({ years: 0, groups: 0, wc: 0, multilateral: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const duration = 1200;
          const steps = 30;
          const intervalTime = duration / steps;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            setCounts({
              years: Math.min(Math.round(FOUNDER_STATS.yearsExperience * progress), FOUNDER_STATS.yearsExperience),
              groups: Math.min(Math.round(FOUNDER_STATS.majorGroupsServed * progress), FOUNDER_STATS.majorGroupsServed),
              wc: Math.min(Math.round(FOUNDER_STATS.workingCapitalManagedCr * progress), FOUNDER_STATS.workingCapitalManagedCr),
              multilateral: Math.min(Math.round(FOUNDER_STATS.multilateralFacilityCr * progress), FOUNDER_STATS.multilateralFacilityCr),
            });

            if (step >= steps) {
              clearInterval(timer);
              setCounts({
                years: FOUNDER_STATS.yearsExperience,
                groups: FOUNDER_STATS.majorGroupsServed,
                wc: FOUNDER_STATS.workingCapitalManagedCr,
                multilateral: FOUNDER_STATS.multilateralFacilityCr,
              });
            }
          }, intervalTime);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="founder-strip" ref={sectionRef} className="py-12 bg-forest text-white border-y border-forest-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Horizontal Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Founder Photo & Badges */}
          <div className="lg:col-span-4 flex items-center gap-5">
            <div className="relative shrink-0">
              <img
                src={founderImg}
                alt={FOUNDER_INFO.name}
                width={112}
                height={112}
                loading="lazy"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-sage shadow-md"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-2 -right-2 bg-sage text-white p-1.5 rounded-lg shadow-sm" title="Chartered Accountant">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-sage mb-1">
                <Award className="w-3.5 h-3.5" />
                <span>Managing Principal</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {FOUNDER_INFO.name}
              </h2>
              <p className="text-xs font-bold text-sage-light mt-0.5">
                {FOUNDER_INFO.credentials}
              </p>
              <p className="text-[11px] text-sage-muted mt-1 font-medium">
                Chartered Accountant (Qualified May 2002)
              </p>
            </div>
          </div>

          {/* Bio statement */}
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-forest-border pt-4 lg:pt-0 lg:pl-8">
            <p className="text-sm text-sage-light leading-relaxed font-normal">
              "{FOUNDER_INFO.bio}"
            </p>
            <div className="flex items-center gap-3 mt-3 text-xs text-sage-muted font-semibold">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-sage" /> Direct Partner Oversight
              </span>
              <span className="flex items-center gap-1">
                <Building className="w-3.5 h-3.5 text-sage" /> Registered Corporate Advisory
              </span>
            </div>
          </div>

          {/* 4 Real Lifetime Fixed Stats */}
          <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-2 gap-4 border-t lg:border-t-0 lg:border-l border-forest-border pt-4 lg:pt-0 lg:pl-8">
            
            <div className="flex flex-col">
              <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                {counts.years}+ Yrs
              </div>
              <p className="text-[11px] font-medium text-sage-muted">Finance Leadership</p>
            </div>

            <div className="flex flex-col">
              <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                {counts.groups} Major
              </div>
              <p className="text-[11px] font-medium text-sage-muted">Corporate Groups</p>
            </div>

            <div className="flex flex-col">
              <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                ₹{counts.wc} Cr
              </div>
              <p className="text-[11px] font-medium text-sage-muted">Working Capital</p>
            </div>

            <div className="flex flex-col">
              <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                ₹{counts.multilateral} Cr
              </div>
              <p className="text-[11px] font-medium text-sage-muted">IFC/WB Facility</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
