import { Zap, Target, Cog, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface WhyDesignersLoveProps {
  onStartCreating: () => void;
}

const benefits = [
  {
    icon: Zap,
    title: 'Speed without sacrificing creativity',
    description: 'Get from concept to final design faster than ever'
  },
  {
    icon: Target,
    title: 'Guidance without losing control',
    description: 'AI suggests, you decide—always in the driver\'s seat'
  },
  {
    icon: Cog,
    title: 'Automation without replacement',
    description: 'Handle tedious tasks automatically, focus on creative decisions'
  },
  {
    icon: TrendingUp,
    title: 'Smarter workflows, fewer manual tasks',
    description: 'Streamline your process and ship better designs'
  }
];

export function WhyDesignersLove({ onStartCreating }: WhyDesignersLoveProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-slate-900 mb-4">
            Why Designers Love It
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1753162658596-2ccba5e4246a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2NDgzNTk0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Designers collaborating"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom CTA section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 p-12 text-center">
          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl text-white mb-4">
              Designed for the Future of Creative Work
            </h3>
            <p className="text-xl text-violet-100 mb-6 max-w-3xl mx-auto">
              This AI assistant is not just a tool—it's a creative partner that helps designers think, experiment, and build faster.
            </p>
            <p className="text-2xl text-white mb-8">
              Human creativity + AI intelligence = <br />
              <span className="text-yellow-300">The next generation of product design.</span>
            </p>
            <button 
              onClick={onStartCreating}
              className="px-10 py-4 bg-white text-violet-600 rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-200"
            >
              Install Extension Now
            </button>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}

