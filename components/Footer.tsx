import { Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl text-white">AI Design Assistant</span>
            </div>
            <p className="text-slate-400 max-w-md">
              Empowering designers with intelligent tools to create, refine, and innovate faster than ever before.
            </p>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-violet-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-violet-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
          <p>&copy; 2025 AI Design Assistant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

