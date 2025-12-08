
import { X, Play, Sparkles, Layout, Palette, Image } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  if (!isOpen) return null;

  const demos = [
    {
      icon: Sparkles,
      title: 'AI Design Generation',
      duration: '2:30',
      description: 'Watch how AI generates complete layouts from text prompts',
      thumbnail: 'https://images.unsplash.com/photo-1764601841480-d3c8b8ee9918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1aSUyMGRlc2lnbnxlbnwxfHx8fDE3NjQ4OTg4NDJ8MA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      icon: Layout,
      title: 'Smart Layout Assistant',
      duration: '3:15',
      description: 'See real-time layout suggestions and auto-alignment in action',
      thumbnail: 'https://images.unsplash.com/photo-1564518534518-e79657852a1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjQ5MTA1MjN8MA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      icon: Palette,
      title: 'Brand-Aware Tools',
      duration: '2:45',
      description: 'Learn how AI maintains your brand consistency automatically',
      thumbnail: 'https://images.unsplash.com/photo-1564518534518-e79657852a1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjQ5MTA1MjN8MA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      icon: Image,
      title: 'Image Intelligence',
      duration: '1:50',
      description: 'Discover automated background removal and image enhancement',
      thumbnail: 'https://images.unsplash.com/photo-1753162658596-2ccba5e4246a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2NDgzNTk0Mnww&ixlib=rb-4.1.0&q=80&w=400'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex items-center justify-between">
          <h2 className="text-3xl text-slate-900">Watch Demos</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-slate-500" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="bg-gradient-to-r from-violet-50 to-indigo-50 rounded-xl p-6">
            <h3 className="text-xl text-slate-900 mb-2">See AI Design Assistant in Action</h3>
            <p className="text-slate-600">Watch how designers are using AI to accelerate their workflow and create better designs.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {demos.map((demo, index) => (
              <button
                key={index}
                className="group text-left border-2 border-slate-200 rounded-xl overflow-hidden hover:border-violet-400 hover:shadow-lg transition-all duration-200"
              >
                <div className="relative aspect-video bg-slate-100">
                  <img 
                    src={demo.thumbnail} 
                    alt={demo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-violet-600 ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-1 bg-black bg-opacity-70 text-white text-sm rounded">
                    {demo.duration}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <demo.icon className="w-5 h-5 text-violet-600" />
                    <h4 className="text-slate-900">{demo.title}</h4>
                  </div>
                  <p className="text-sm text-slate-600">{demo.description}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h4 className="text-slate-900 mb-2">Full Product Walkthrough</h4>
            <p className="text-slate-600 mb-4">
              Get a comprehensive 15-minute tour of all features and capabilities.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              <Play className="w-5 h-5" />
              Watch Full Walkthrough
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
