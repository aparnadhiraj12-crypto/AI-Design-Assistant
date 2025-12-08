import { X, Chrome, Download, CheckCircle2 } from 'lucide-react';

interface InstallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InstallModal({ isOpen, onClose }: InstallModalProps) {
  if (!isOpen) return null;

  const platforms = [
    {
      name: 'Figma',
      icon: '🎨',
      status: 'Available',
      link: '#'
    },
    {
      name: 'Adobe Photoshop',
      icon: '🖼️',
      status: 'Available',
      link: '#'
    },
    {
      name: 'Adobe Illustrator',
      icon: '✏️',
      status: 'Available',
      link: '#'
    },
    {
      name: 'Canva',
      icon: '🎭',
      status: 'Available',
      link: '#'
    },
    {
      name: 'Webflow',
      icon: '🌊',
      status: 'Available',
      link: '#'
    },
    {
      name: 'Sketch',
      icon: '💎',
      status: 'Available',
      link: '#'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex items-center justify-between">
          <h2 className="text-3xl text-slate-900">Install AI Design Assistant</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-slate-500" />
          </button>
        </div>
        
        <div className="p-6 space-y-8">
          <div className="bg-gradient-to-r from-violet-50 to-indigo-50 rounded-xl p-6">
            <h3 className="text-xl text-slate-900 mb-2">Choose Your Platform</h3>
            <p className="text-slate-600">Install the extension for your favorite design tool and start creating with AI assistance.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {platforms.map((platform, index) => (
              <button
                key={index}
                className="flex items-center justify-between p-4 border-2 border-slate-200 rounded-xl hover:border-violet-400 hover:bg-violet-50 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{platform.icon}</span>
                  <div className="text-left">
                    <div className="text-slate-900">{platform.name}</div>
                    <div className="text-sm text-green-600 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      {platform.status}
                    </div>
                  </div>
                </div>
                <Download className="w-5 h-5 text-slate-400 group-hover:text-violet-600 transition-colors" />
              </button>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h4 className="text-slate-900 mb-3 flex items-center gap-2">
              <Chrome className="w-5 h-5 text-blue-600" />
              Browser Extension
            </h4>
            <p className="text-slate-600 mb-4">
              Install our browser extension to use AI Design Assistant on any product design website including Shopify, WordPress, Wix, Squarespace, and more.
            </p>
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Chrome className="w-5 h-5" />
                Add to Chrome
              </button>
              <button className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors">
                Other Browsers
              </button>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h4 className="text-slate-900 mb-3">Installation Steps</h4>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center text-sm">1</span>
                <span className="text-slate-600">Click on your preferred platform or browser extension above</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center text-sm">2</span>
                <span className="text-slate-600">Follow the installation prompts</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center text-sm">3</span>
                <span className="text-slate-600">Sign in or create a free account</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center text-sm">4</span>
                <span className="text-slate-600">Start designing with AI assistance!</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

