import { ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onGetStarted: () => void;
  onWatchDemo: () => void;
}

export function Hero({ onGetStarted, onWatchDemo }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-blue-50 to-indigo-50 opacity-60" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-32 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 text-violet-700 rounded-full">
              <Sparkles className="w-4 h-4" />
              <span>Browser Extension for Design Tools</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl tracking-tight text-slate-900">
              Create. Refine. Innovate.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                With AI by Your Side.
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-xl">
              Our AI Design Assistant combines vision intelligence, layout automation, and smart design workflows to help you bring ideas to life—beautifully and effortlessly.
            </p>
            
            <p className="text-lg text-slate-600">
              Whether you're designing retail creatives, product pages, UI screens, packaging, ads, or social content, the AI works with you like a real co-designer.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onGetStarted}
                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Install Extension
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={onWatchDemo}
                className="px-8 py-4 bg-white text-slate-700 rounded-lg border-2 border-slate-200 hover:border-violet-300 hover:shadow-md transition-all duration-200"
              >
                Watch Demo
              </button>
            </div>
          </div>
          
          {/* Right image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-indigo-400 rounded-2xl blur-3xl opacity-20" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1564518534518-e79657852a1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjQ5MTA1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="AI Design Assistant"
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

