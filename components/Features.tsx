import { 
  Sparkles, 
  MousePointer2, 
  Layout, 
  ShieldCheck, 
  Type, 
  Palette, 
  Image, 
  Smartphone, 
  Users, 
  Puzzle 
} from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    icon: Sparkles,
    title: 'Intelligent Design Generator',
    description: 'Turn ideas into layouts instantly.',
    details: [
      'Generate design compositions from text prompts',
      'Create multiple layout variations',
      'AI-driven spacing, hierarchy, and balance',
      'Brand-style-aware generation',
      'Perfect for quick ideation or starting points'
    ],
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    icon: MousePointer2,
    title: 'Smart Drag-and-Drop Editor',
    description: 'A modern, flexible editor that feels familiar but works smarter.',
    details: [
      'Upload logos, packshots, UI elements, icons',
      'Resize, rotate, crop, mask, remove background',
      'Auto-align and auto-distribute',
      'Guided safe zones and smart snapping',
      'Designed to feel natural for professionals'
    ],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Layout,
    title: 'AI Layout Assistant',
    description: 'Your real-time creative partner.',
    details: [
      'Suggests improved layouts',
      'Recommends spacing & alignment',
      'Auto-resizes assets without distortion',
      'Intelligent reflow for multiple formats',
      'You stay in control—AI only supports'
    ],
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    icon: ShieldCheck,
    title: 'Compliance + QA Automation',
    description: 'AI that ensures every design meets platform & brand rules.',
    details: [
      'Retailer guideline checks',
      'Accessibility & contrast checker',
      'Text claim detection (no misleading or forbidden text)',
      'Quality, resolution, and size control (<500 KB)',
      'Goodbye rejections. Hello flawless submissions'
    ],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Type,
    title: 'Typography Intelligence',
    description: 'Beautiful, readable, on-brand text—without the struggle.',
    details: [
      'Font pair recommendations',
      'Auto-sizing & responsive text scaling',
      'Hierarchy suggestions',
      'Readability & contrast scoring'
    ],
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    icon: Palette,
    title: 'Brand-Aware Smart Tools',
    description: 'AI that understands your brand identity.',
    details: [
      'Brand palette extraction',
      'Automatic theme generation',
      'Style consistency analysis',
      'Asset library with memory',
      'Designs always look aligned and professional'
    ],
    gradient: 'from-orange-500 to-amber-500'
  },
  {
    icon: Image,
    title: 'Background & Image Intelligence',
    description: 'Advanced image processing—instantly.',
    details: [
      'Background removal',
      'Smart subject isolation',
      'Shadow & lighting improvement',
      'Auto-cleaning for packshots',
      'Noise and reflection cleanup',
      'Powered by state-of-the-art vision models'
    ],
    gradient: 'from-teal-500 to-green-500'
  },
  {
    icon: Smartphone,
    title: 'Multi-Format Auto Adaptation',
    description: 'Design once—export everywhere.',
    details: [
      'Facebook/Instagram safe zones',
      'Retailer-specific sizes',
      'Ad formats, banners, carousels',
      'Auto-resize with layout reflow',
      'One-click export (JPG/PNG/SVG/PDF)',
      'Your design adapts automatically'
    ],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Users,
    title: 'Collaboration & Creative Co-Pilot',
    description: 'AI supports the team—not replaces them.',
    details: [
      'Designer + marketer collaboration',
      'AI comments on design issues',
      'Version history with AI insight',
      'Team libraries and shared templates'
    ],
    gradient: 'from-red-500 to-orange-500'
  },
  {
    icon: Puzzle,
    title: 'Extensions for Your Favorite Tools',
    description: 'Use the AI assistant directly inside:',
    details: [
      'Figma',
      'Adobe Photoshop / Illustrator',
      'Adobe Express',
      'Canva',
      'Webflow',
      'Sketch',
      'A single AI brain across all your design platforms'
    ],
    gradient: 'from-cyan-500 to-blue-500'
  }
];

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-slate-900 mb-4">
            All the Features a Product Designer Needs — in One Place
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A complete suite of AI-powered tools designed to enhance your creative workflow
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

