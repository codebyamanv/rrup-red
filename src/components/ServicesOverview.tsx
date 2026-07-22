import React from 'react';
import { SERVICES_DATA } from '../data/advisoryData';
import { ServiceItem } from '../types';
import { Compass, TrendingUp, Briefcase, Globe, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ServicesOverviewProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: () => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onSelectService, onOpenConsultation }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-sage" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-sage" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-sage" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-sage" />;
      default:
        return <Compass className="w-6 h-6 text-sage" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border-subtle pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-sage-light border border-sage-border px-3 py-1 rounded-full text-xs font-bold text-forest uppercase tracking-wider">
              <span>Core Practice Areas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-forest tracking-tight">
              Strategic Financial Stewardship
            </h2>
            <p className="text-base text-text-muted">
              Four pillars of corporate finance, cross-border treasury, and governance tailored for Indian enterprises and global corporate clients.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 bg-forest hover:bg-forest-light text-white text-sm font-semibold px-5 py-3 rounded-xl transition-all shrink-0 self-start md:self-auto focus:outline-none focus:ring-2 focus:ring-sage"
          >
            <span>Book Practice Consultation</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Equalized Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white hover:bg-warm-bg rounded-2xl p-6 border border-border-subtle hover:border-sage shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group h-full"
            >
              <div className="space-y-4">
                {/* Icon & Eyebrow */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-sage-light border border-sage-border/50 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sage bg-sage-light border border-sage-border px-2 py-1 rounded">
                    Advisory
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-forest tracking-tight group-hover:text-sage transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-text-muted leading-relaxed line-clamp-3">
                  {service.shortDesc}
                </p>

                {/* Key Deliverables Bullet Points */}
                <div className="pt-3 border-t border-border-subtle space-y-2">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-forest">Key Deliverables:</p>
                  {service.keyDeliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-text-main">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sage shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-6 mt-6 border-t border-border-subtle/80">
                <button
                  onClick={() => onSelectService(service)}
                  className="w-full inline-flex items-center justify-between text-xs font-bold text-forest group-hover:text-sage py-1 transition-colors focus:outline-none"
                >
                  <span>Explore Deep Dive</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
