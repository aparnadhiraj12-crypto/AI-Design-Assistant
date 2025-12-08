import { 
  Type, 
  Image as ImageIcon, 
  Square, 
  AlignLeft,
  List,
  Star,
  ShoppingCart,
  Heading1,
  Heading2,
  Heading3,
  FileText,
  Quote,
  Car,
  Flower2,
  ShoppingBag,
  Heart,
  Smartphone,
  Laptop,
  Home,
  Coffee,
  Gift,
  Crown,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';

interface ElementsPanelProps {
  onAddElement: (type: string, config?: any) => void;
}

export function ElementsPanel({ onAddElement }: ElementsPanelProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    text: true,
    images: true,
    buttons: true,
    icons: true
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const textElements = [
    { icon: Heading1, label: 'Large Heading', type: 'heading', size: '48px', weight: '700' },
    { icon: Heading2, label: 'Medium Heading', type: 'heading', size: '36px', weight: '600' },
    { icon: Heading3, label: 'Small Heading', type: 'heading', size: '24px', weight: '600' },
    { icon: Type, label: 'Body Text', type: 'text', size: '16px', weight: '400' },
    { icon: FileText, label: 'Paragraph', type: 'paragraph', size: '16px', weight: '400' },
    { icon: Quote, label: 'Quote', type: 'quote', size: '20px', weight: '500' }
  ];

  const iconElements = [
    { icon: Car, label: 'Car', name: 'Car' },
    { icon: Flower2, label: 'Flower', name: 'Flower2' },
    { icon: ShoppingBag, label: 'Shopping Bag', name: 'ShoppingBag' },
    { icon: Heart, label: 'Heart', name: 'Heart' },
    { icon: Smartphone, label: 'Phone', name: 'Smartphone' },
    { icon: Laptop, label: 'Laptop', name: 'Laptop' },
    { icon: Home, label: 'Home', name: 'Home' },
    { icon: Coffee, label: 'Coffee', name: 'Coffee' },
    { icon: Gift, label: 'Gift', name: 'Gift' },
    { icon: Crown, label: 'Crown', name: 'Crown' },
    { icon: Star, label: 'Star', name: 'Star' },
    { icon: ShoppingCart, label: 'Cart', name: 'ShoppingCart' }
  ];

  return (
    <div className="w-64 bg-white border-r border-slate-200 overflow-y-auto">
      <div className="p-4 border-b border-slate-200">
        <h3 className="text-slate-900">Elements</h3>
        <p className="text-xs text-slate-500 mt-1">Click to add to canvas</p>
      </div>
      
      {/* Text Elements Section */}
      <div className="border-b border-slate-200">
        <button
          onClick={() => toggleSection('text')}
          className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors"
        >
          <span className="text-sm text-slate-900">Text</span>
          {expandedSections.text ? (
            <ChevronDown className="w-4 h-4 text-slate-500" />
          ) : (
            <ChevronRight className="w-4 h-4 text-slate-500" />
          )}
        </button>
        
        {expandedSections.text && (
          <div className="p-4 pt-0 space-y-2">
            {textElements.map((element, index) => (
              <button
                key={index}
                onClick={() => onAddElement(element.type, {
                  content: element.label,
                  fontSize: element.size,
                  fontWeight: element.weight
                })}
                className="w-full flex items-center gap-3 p-3 bg-slate-50 hover:bg-violet-50 hover:border-violet-300 rounded-lg border-2 border-transparent transition-all"
              >
                <element.icon className="w-5 h-5 text-slate-600" />
                <span className="text-sm text-slate-700">{element.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Images Section */}
      <div className="border-b border-slate-200">
        <button
          onClick={() => toggleSection('images')}
          className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors"
        >
          <span className="text-sm text-slate-900">Images</span>
          {expandedSections.images ? (
            <ChevronDown className="w-4 h-4 text-slate-500" />
          ) : (
            <ChevronRight className="w-4 h-4 text-slate-500" />
          )}
        </button>
        
        {expandedSections.images && (
          <div className="p-4 pt-0 space-y-2">
            <button
              onClick={() => {
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = 'image/*';
                input.onchange = (e) => {
                  const file = (e.target as HTMLInputElement).files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                      onAddElement('image', { src: e.target?.result });
                    };
                    reader.readAsDataURL(file);
                  }
                };
                input.click();
              }}
              className="w-full flex items-center gap-3 p-3 bg-violet-50 hover:bg-violet-100 border-2 border-violet-300 rounded-lg transition-all"
            >
              <ImageIcon className="w-5 h-5 text-violet-600" />
              <span className="text-sm text-violet-700">Upload Image</span>
            </button>
          </div>
        )}
      </div>

      {/* Buttons Section */}
      <div className="border-b border-slate-200">
        <button
          onClick={() => toggleSection('buttons')}
          className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors"
        >
          <span className="text-sm text-slate-900">Buttons</span>
          {expandedSections.buttons ? (
            <ChevronDown className="w-4 h-4 text-slate-500" />
          ) : (
            <ChevronRight className="w-4 h-4 text-slate-500" />
          )}
        </button>
        
        {expandedSections.buttons && (
          <div className="p-4 pt-0 space-y-2">
            <button
              onClick={() => onAddElement('button', { content: 'Primary Button', variant: 'primary' })}
              className="w-full flex items-center gap-3 p-3 bg-slate-50 hover:bg-violet-50 hover:border-violet-300 rounded-lg border-2 border-transparent transition-all"
            >
              <Square className="w-5 h-5 text-slate-600" />
              <span className="text-sm text-slate-700">Primary Button</span>
            </button>
            <button
              onClick={() => onAddElement('button', { content: 'Secondary Button', variant: 'secondary' })}
              className="w-full flex items-center gap-3 p-3 bg-slate-50 hover:bg-violet-50 hover:border-violet-300 rounded-lg border-2 border-transparent transition-all"
            >
              <Square className="w-5 h-5 text-slate-600" />
              <span className="text-sm text-slate-700">Secondary Button</span>
            </button>
          </div>
        )}
      </div>

      {/* Icons Section */}
      <div className="border-b border-slate-200">
        <button
          onClick={() => toggleSection('icons')}
          className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors"
        >
          <span className="text-sm text-slate-900">Icons</span>
          {expandedSections.icons ? (
            <ChevronDown className="w-4 h-4 text-slate-500" />
          ) : (
            <ChevronRight className="w-4 h-4 text-slate-500" />
          )}
        </button>
        
        {expandedSections.icons && (
          <div className="p-4 pt-0">
            <div className="grid grid-cols-3 gap-2">
              {iconElements.map((icon, index) => (
                <button
                  key={index}
                  onClick={() => onAddElement('icon', { iconName: icon.name, label: icon.label })}
                  className="flex flex-col items-center gap-2 p-3 bg-slate-50 hover:bg-violet-50 hover:border-violet-300 rounded-lg border-2 border-transparent transition-all"
                  title={icon.label}
                >
                  <icon.icon className="w-6 h-6 text-slate-600" />
                  <span className="text-xs text-slate-600 truncate w-full text-center">{icon.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Templates Section */}
      <div className="p-4">
        <h4 className="text-sm text-slate-900 mb-3">Templates</h4>
        <div className="space-y-2">
          <button className="w-full p-3 bg-gradient-to-r from-violet-50 to-indigo-50 rounded-lg border border-violet-200 text-left hover:shadow-md transition-all">
            <div className="text-sm text-slate-900">Product Hero</div>
            <div className="text-xs text-slate-600">Image + Title + CTA</div>
          </button>
          <button className="w-full p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200 text-left hover:shadow-md transition-all">
            <div className="text-sm text-slate-900">Feature Section</div>
            <div className="text-xs text-slate-600">Icons + Text Grid</div>
          </button>
        </div>
      </div>
    </div>
  );
}

