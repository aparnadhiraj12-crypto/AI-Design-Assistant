import { useState } from 'react';
import { 
  Sparkles, 
  AlertCircle, 
  CheckCircle2, 
  TrendingUp, 
  Send,
  Zap,
  Eye,
  Palette,
  AlignCenter,
  Image as ImageIcon,
  X
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function LiveDemo() {
  const [prompt, setPrompt] = useState('');
  const [activeTab, setActiveTab] = useState<'analysis' | 'chat'>('analysis');
  const [chatMessages, setChatMessages] = useState([
    {
      type: 'ai' as const,
      text: 'Hi! I\'m your AI Design Assistant. I can help analyze your design, suggest improvements, or answer questions. What would you like to know?'
    }
  ]);

  const handleSendPrompt = () => {
    if (!prompt.trim()) return;
    
    // Add user message
    setChatMessages([...chatMessages, { type: 'user' as const, text: prompt }]);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        'Based on your product page layout, I recommend increasing the CTA button size by 20% to improve conversion rates. The current button is below the optimal 44x44px touch target.',
        'The color contrast ratio between your text and background is 3.2:1. For WCAG AA compliance, aim for at least 4.5:1. I suggest darkening the text to #2D3748.',
        'Great question! Your product images should be optimized to under 150KB each while maintaining quality. I can auto-compress them and remove the background for a cleaner look.',
        'The hierarchy looks good, but consider adding more white space around your pricing section. Currently at 16px, increasing to 32px would improve visual breathing room.',
        'I noticed your font pairing uses 3 different typefaces. For better consistency, I recommend limiting to 2: one for headings and one for body text.'
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setChatMessages(prev => [...prev, { type: 'ai' as const, text: randomResponse }]);
    }, 1000);
    
    setPrompt('');
  };

  const recommendations = [
    {
      icon: AlertCircle,
      type: 'critical',
      title: 'Contrast Issue Detected',
      description: 'Text contrast ratio is 3.2:1. Minimum required: 4.5:1 for WCAG AA compliance.',
      color: 'text-red-600 bg-red-50 border-red-200'
    },
    {
      icon: TrendingUp,
      type: 'suggestion',
      title: 'CTA Optimization',
      description: 'Increase "Add to Cart" button size by 25% to improve conversion rate.',
      color: 'text-blue-600 bg-blue-50 border-blue-200'
    },
    {
      icon: CheckCircle2,
      type: 'good',
      title: 'Layout Hierarchy',
      description: 'Excellent visual hierarchy and spacing detected.',
      color: 'text-green-600 bg-green-50 border-green-200'
    },
    {
      icon: Zap,
      type: 'suggestion',
      title: 'Image Optimization',
      description: 'Product images can be compressed by 45% without quality loss.',
      color: 'text-yellow-600 bg-yellow-50 border-yellow-200'
    }
  ];

  const quickActions = [
    { icon: Eye, label: 'Check Accessibility', action: 'Run accessibility scan' },
    { icon: Palette, label: 'Extract Brand Colors', action: 'Analyzing brand palette...' },
    { icon: AlignCenter, label: 'Auto-Align Elements', action: 'Aligning elements...' },
    { icon: ImageIcon, label: 'Optimize Images', action: 'Compressing images...' }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl mb-4">
            See the Extension in Action
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Watch how AI Design Assistant analyzes your product pages in real-time and provides intelligent recommendations
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Product Design Website Mockup */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-slate-800 rounded-t-xl p-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 bg-slate-700 rounded px-3 py-1 text-sm text-slate-400">
                https://mystore.com/product/sneakers
              </div>
            </div>
            
            <div className="relative bg-white rounded-b-xl overflow-hidden">
              {/* Product Page Mockup */}
              <div className="p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Product Image */}
                  <div className="relative">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1762267659914-4cbfa2605627?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBwcm9kdWN0JTIwZGlzcGxheXxlbnwxfHx8fDE3NjQ4MzgwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Product"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    {/* AI Analysis Markers */}
                    <div className="absolute top-2 right-2 w-8 h-8 bg-violet-500 rounded-full animate-pulse flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  {/* Product Details */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl text-slate-900 mb-2">Premium Running Shoes</h3>
                      <p className="text-slate-600">Lightweight and comfortable</p>
                    </div>
                    
                    <div className="relative">
                      <div className="text-3xl text-slate-900">$129.99</div>
                      {/* AI Suggestion Marker */}
                      <div className="absolute -right-2 -top-2 w-6 h-6 bg-blue-500 rounded-full animate-pulse" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm text-slate-700">Size</label>
                      <div className="flex gap-2">
                        {['7', '8', '9', '10', '11'].map(size => (
                          <button key={size} className="w-12 h-12 border-2 border-slate-300 rounded-lg hover:border-violet-500 text-slate-700">
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <button className="relative w-full py-3 bg-violet-600 text-white rounded-lg">
                      Add to Cart
                      {/* AI Analysis Marker */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full animate-pulse" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* AI Scanning Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent animate-scan" />
              </div>
            </div>
          </div>

          {/* AI Extension Panel */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 shadow-2xl sticky top-4">
              {/* Extension Header */}
              <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-violet-600" />
                  </div>
                  <span>AI Design Assistant</span>
                </div>
                <button className="p-1 hover:bg-white/20 rounded">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-slate-700">
                <button
                  onClick={() => setActiveTab('analysis')}
                  className={`flex-1 py-3 text-sm transition-colors ${
                    activeTab === 'analysis'
                      ? 'bg-slate-700 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Analysis & Recommendations
                </button>
                <button
                  onClick={() => setActiveTab('chat')}
                  className={`flex-1 py-3 text-sm transition-colors ${
                    activeTab === 'chat'
                      ? 'bg-slate-700 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Ask AI
                </button>
              </div>

              {/* Content */}
              <div className="h-96 overflow-y-auto">
                {activeTab === 'analysis' ? (
                  <div className="p-4 space-y-4">
                    <div className="flex items-center gap-2 text-sm text-green-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      Analyzing design in real-time...
                    </div>

                    {recommendations.map((rec, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg border ${rec.color}`}
                      >
                        <div className="flex items-start gap-3">
                          <rec.icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <div className="flex-1 min-w-0">
                            <div className="text-sm mb-1">{rec.title}</div>
                            <div className="text-xs opacity-80">{rec.description}</div>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="pt-4 border-t border-slate-700">
                      <h4 className="text-sm text-slate-300 mb-3">Quick Actions</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {quickActions.map((action, index) => (
                          <button
                            key={index}
                            className="p-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-left transition-colors group"
                          >
                            <action.icon className="w-5 h-5 text-violet-400 mb-2 group-hover:scale-110 transition-transform" />
                            <div className="text-xs text-slate-300">{action.label}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col h-full">
                    <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                      {chatMessages.map((message, index) => (
                        <div
                          key={index}
                          className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-[85%] p-3 rounded-lg ${
                              message.type === 'user'
                                ? 'bg-violet-600 text-white'
                                : 'bg-slate-700 text-slate-100'
                            }`}
                          >
                            {message.type === 'ai' && (
                              <div className="flex items-center gap-2 mb-1 text-xs text-violet-400">
                                <Sparkles className="w-3 h-3" />
                                AI Assistant
                              </div>
                            )}
                            <div className="text-sm">{message.text}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Prompt Input (visible in chat tab) */}
              {activeTab === 'chat' && (
                <div className="border-t border-slate-700 p-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendPrompt()}
                      placeholder="Ask AI for design advice..."
                      className="flex-1 px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-violet-500 focus:outline-none text-sm"
                    />
                    <button
                      onClick={handleSendPrompt}
                      className="px-4 py-2 bg-violet-600 hover:bg-violet-700 rounded-lg transition-colors"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['Improve contrast', 'Optimize layout', 'Check accessibility', 'Best practices'].map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => setPrompt(suggestion)}
                        className="text-xs px-3 py-1 bg-slate-700 hover:bg-slate-600 rounded-full text-slate-300 transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scan {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(400px);
          }
        }
        .animate-scan {
          animation: scan 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

