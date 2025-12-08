import { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  AlertCircle, 
  CheckCircle2, 
  TrendingUp,
  Zap,
  Eye,
  Palette,
  AlignCenter,
  Image as ImageIcon,
  BarChart3,
  Lightbulb,
  X,
  Minimize2,
  Maximize2
} from 'lucide-react';

interface AIAssistantPanelProps {
  selectedElement: string | null;
  elements: any[];
  onClose: () => void;
}

export function AIAssistantPanel({ selectedElement, onClose }: AIAssistantPanelProps) {
  const [activeTab, setActiveTab] = useState<'analysis' | 'chat'>('analysis');
  const [prompt, setPrompt] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      type: 'ai' as const,
      text: 'Hello! I\'ve analyzed your product page. I found 3 critical issues and 5 opportunities for improvement. Click on any element to see specific recommendations.'
    }
  ]);

  const handleSendPrompt = () => {
    if (!prompt.trim()) return;
    
    setChatMessages([...chatMessages, { type: 'user' as const, text: prompt }]);
    
    setTimeout(() => {
      const responses: Record<string, string> = {
        'improve contrast': 'To improve contrast, change your description text color from #64748B to #334155. This will increase the contrast ratio from 3.2:1 to 7.1:1, exceeding WCAG AAA standards.',
        'optimize layout': 'Your layout is good! I suggest increasing spacing between sections from 32px to 48px for better visual breathing room. Also, align your CTA button to be full-width for mobile optimization.',
        'check accessibility': 'Accessibility scan complete:\n✅ Alt text present on all images\n✅ Heading hierarchy correct (h1→h2→h3)\n❌ Color contrast issue on description text\n❌ CTA button lacks focus indicator\n✅ Keyboard navigation works',
        'best practices': 'Here are e-commerce best practices:\n1. Product images should be 1200x1200px minimum\n2. Include trust badges near CTA\n3. Add urgency indicators (limited stock)\n4. Show multiple product angles (3-5 images)\n5. Include size guide for better conversion',
        'default': 'Great question! Based on your current design, I recommend: 1) Fix the contrast issue on description text, 2) Increase CTA button size by 25%, 3) Compress product image to improve load time. Would you like me to explain any of these in detail?'
      };
      
      const lowerPrompt = prompt.toLowerCase();
      let response = responses.default;
      
      for (const [key, value] of Object.entries(responses)) {
        if (lowerPrompt.includes(key)) {
          response = value;
          break;
        }
      }
      
      setChatMessages(prev => [...prev, { type: 'ai' as const, text: response }]);
    }, 1000);
    
    setPrompt('');
  };

  const overallAnalysis = [
    {
      icon: AlertCircle,
      type: 'critical',
      title: 'Contrast Ratio Too Low',
      description: 'Description text has 3.2:1 contrast. Needs 4.5:1 minimum.',
      element: 'description',
      color: 'text-red-600 bg-red-50 border-red-200',
      fix: 'Change color to #334155'
    },
    {
      icon: TrendingUp,
      type: 'optimization',
      title: 'CTA Button Size',
      description: 'Current button is 52px height. Optimal is 64px for better tap targets.',
      element: 'cta-button',
      color: 'text-yellow-600 bg-yellow-50 border-yellow-200',
      fix: 'Increase height to 64px'
    },
    {
      icon: Zap,
      type: 'performance',
      title: 'Image File Size',
      description: 'Main product image is 847KB. Can compress to 465KB without quality loss.',
      element: 'product-image',
      color: 'text-orange-600 bg-orange-50 border-orange-200',
      fix: 'Auto-compress image'
    },
    {
      icon: CheckCircle2,
      type: 'good',
      title: 'Typography Hierarchy',
      description: 'Heading sizes and font weights are well balanced.',
      element: 'hero',
      color: 'text-green-600 bg-green-50 border-green-200',
      fix: 'No action needed'
    },
    {
      icon: TrendingUp,
      type: 'suggestion',
      title: 'Add Trust Signals',
      description: 'Including badges like "Free Shipping" or "Money-back Guarantee" can increase conversions by 15-30%.',
      element: 'general',
      color: 'text-blue-600 bg-blue-50 border-blue-200',
      fix: 'Add trust badges'
    }
  ];

  const quickActions = [
    { icon: Eye, label: 'Accessibility Scan', color: 'bg-purple-500' },
    { icon: Palette, label: 'Color Harmony', color: 'bg-pink-500' },
    { icon: AlignCenter, label: 'Auto-Align', color: 'bg-blue-500' },
    { icon: ImageIcon, label: 'Optimize Images', color: 'bg-green-500' },
    { icon: BarChart3, label: 'Performance', color: 'bg-orange-500' },
    { icon: Lightbulb, label: 'Best Practices', color: 'bg-yellow-500' }
  ];

  const elementSpecificAnalysis: Record<string, any> = {
    'hero': {
      title: 'Hero Section Analysis',
      insights: [
        { type: 'good', text: 'Excellent visual hierarchy with clear heading' },
        { type: 'good', text: 'Badge placement draws attention effectively' },
        { type: 'suggestion', text: 'Consider adding a subtitle for more context' }
      ]
    },
    'product-image': {
      title: 'Product Image Analysis',
      insights: [
        { type: 'warning', text: 'File size: 847KB - can reduce to 465KB' },
        { type: 'good', text: 'Image quality is excellent' },
        { type: 'suggestion', text: 'Add zoom functionality for better UX' },
        { type: 'suggestion', text: 'Consider using WebP format for 30% smaller size' }
      ]
    },
    'product-title': {
      title: 'Product Title Analysis',
      insights: [
        { type: 'good', text: 'Font size is optimal at 36px' },
        { type: 'good', text: 'Good contrast ratio: 15:1' },
        { type: 'suggestion', text: 'Consider adding product SKU for reference' }
      ]
    },
    'description': {
      title: 'Description Text Analysis',
      insights: [
        { type: 'critical', text: 'Contrast ratio is 3.2:1 - below WCAG AA standard' },
        { type: 'warning', text: 'Line length is 85 characters - ideal is 50-75' },
        { type: 'suggestion', text: 'Change text color to #334155 for better readability' }
      ]
    },
    'cta-button': {
      title: 'CTA Button Analysis',
      insights: [
        { type: 'warning', text: 'Button height is 52px - recommended minimum is 64px' },
        { type: 'good', text: 'Color contrast is excellent' },
        { type: 'suggestion', text: 'Add hover state animation for better feedback' },
        { type: 'suggestion', text: 'Consider adding icon (cart) for visual clarity' }
      ]
    },
    'price': {
      title: 'Price Display Analysis',
      insights: [
        { type: 'good', text: 'Font size makes price prominent' },
        { type: 'good', text: 'Additional shipping info provides value' },
        { type: 'suggestion', text: 'Consider adding strike-through for original price if on sale' }
      ]
    },
    'features': {
      title: 'Features List Analysis',
      insights: [
        { type: 'good', text: 'Clear bullet points improve readability' },
        { type: 'good', text: 'Key features are concise and scannable' },
        { type: 'suggestion', text: 'Add icons to each feature for visual interest' }
      ]
    }
  };

  return (
    <div className={`bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col transition-all duration-300 ${
      isMinimized ? 'w-80 h-16' : 'w-96 h-[600px]'
    }`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center gap-2 text-white">
          <Sparkles className="w-5 h-5" />
          <h3>AI Design Assistant</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-white/20 rounded transition-colors"
          >
            {isMinimized ? (
              <Maximize2 className="w-4 h-4 text-white" />
            ) : (
              <Minimize2 className="w-4 h-4 text-white" />
            )}
          </button>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/20 rounded transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Tabs */}
          <div className="flex border-b border-slate-200">
            <button
              onClick={() => setActiveTab('analysis')}
              className={`flex-1 py-3 text-sm transition-colors ${
                activeTab === 'analysis'
                  ? 'border-b-2 border-violet-600 text-violet-600'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Analysis
            </button>
            <button
              onClick={() => setActiveTab('chat')}
              className={`flex-1 py-3 text-sm transition-colors ${
                activeTab === 'chat'
                  ? 'border-b-2 border-violet-600 text-violet-600'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Ask AI
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {activeTab === 'analysis' ? (
              <div className="p-4 space-y-4">
                {/* Status */}
                <div className="bg-violet-50 border border-violet-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 text-violet-700 mb-2">
                    <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
                    <span className="text-sm">Live Analysis Active</span>
                  </div>
                  <div className="text-xs text-violet-600">
                    Page Score: <span className="text-lg">78/100</span>
                  </div>
                </div>

                {/* Element-specific analysis */}
                {selectedElement && elementSpecificAnalysis[selectedElement] && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="text-sm text-blue-900 mb-3">
                      {elementSpecificAnalysis[selectedElement].title}
                    </h4>
                    <div className="space-y-2">
                      {elementSpecificAnalysis[selectedElement].insights.map((insight: any, index: number) => (
                        <div key={index} className="flex items-start gap-2">
                          {insight.type === 'critical' && <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />}
                          {insight.type === 'warning' && <AlertCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />}
                          {insight.type === 'good' && <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />}
                          {insight.type === 'suggestion' && <Lightbulb className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />}
                          <span className="text-xs text-slate-700">{insight.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Overall Recommendations */}
                <div>
                  <h4 className="text-sm text-slate-900 mb-3">Overall Recommendations</h4>
                  <div className="space-y-3">
                    {overallAnalysis.map((rec, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg border ${rec.color}`}
                      >
                        <div className="flex items-start gap-3">
                          <rec.icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <div className="flex-1 min-w-0">
                            <div className="text-sm mb-1">{rec.title}</div>
                            <div className="text-xs opacity-90 mb-2">{rec.description}</div>
                            {rec.fix !== 'No action needed' && (
                              <button className="text-xs px-2 py-1 bg-white rounded hover:shadow transition-shadow">
                                {rec.fix}
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div>
                  <h4 className="text-sm text-slate-900 mb-3">Quick Actions</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {quickActions.map((action, index) => (
                      <button
                        key={index}
                        className="p-3 bg-slate-50 hover:bg-slate-100 rounded-lg text-left transition-colors group"
                      >
                        <div className={`w-8 h-8 ${action.color} rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                          <action.icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="text-xs text-slate-700">{action.label}</div>
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
                            : 'bg-slate-100 text-slate-800'
                        }`}
                      >
                        {message.type === 'ai' && (
                          <div className="flex items-center gap-2 mb-1 text-xs text-violet-600">
                            <Sparkles className="w-3 h-3" />
                            AI Assistant
                          </div>
                        )}
                        <div className="text-sm whitespace-pre-line">{message.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Prompt Input (visible in chat tab) */}
          {activeTab === 'chat' && (
            <div className="border-t border-slate-200 p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendPrompt()}
                  placeholder="Ask for design advice..."
                  className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:border-violet-500 focus:outline-none text-sm"
                />
                <button
                  onClick={handleSendPrompt}
                  className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {['Improve contrast', 'Optimize layout', 'Check accessibility', 'Best practices'].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setPrompt(suggestion)}
                    className="text-xs px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-700 transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
