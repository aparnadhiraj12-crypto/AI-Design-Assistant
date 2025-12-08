import { 
  Type, 
  Palette, 
  Maximize2,
  Move,
  Trash2,
  Eye,
  EyeOff,
  AlignLeft,
  AlignCenter,
  AlignRight
} from 'lucide-react';

interface PropertiesPanelProps {
  selectedElement: any;
  onUpdateElement: (id: string, updates: any) => void;
  onDeleteElement: (id: string) => void;
}

export function PropertiesPanel({ selectedElement, onUpdateElement, onDeleteElement }: PropertiesPanelProps) {
  if (!selectedElement) {
    return (
      <div className="w-80 bg-white border-l border-slate-200 p-6">
        <p className="text-sm text-slate-500 text-center">Select an element to edit properties</p>
      </div>
    );
  }

  const fonts = [
    'Inter',
    'Roboto',
    'Open Sans',
    'Playfair Display',
    'Montserrat',
    'Poppins',
    'Lato',
    'Merriweather'
  ];

  const fontSizes = ['12px', '14px', '16px', '18px', '20px', '24px', '28px', '32px', '36px', '42px', '48px', '56px', '64px'];
  const fontWeights = ['300', '400', '500', '600', '700', '800', '900'];

  return (
    <div className="w-80 bg-white border-l border-slate-200 overflow-y-auto">
      <div className="p-4 border-b border-slate-200">
        <h3 className="text-slate-900">Properties</h3>
        <p className="text-xs text-slate-500 mt-1">{selectedElement.type.charAt(0).toUpperCase() + selectedElement.type.slice(1)}</p>
      </div>

      <div className="p-4 space-y-6">
        {/* Visibility Toggle */}
        <div>
          <label className="text-sm text-slate-700 mb-2 block">Visibility</label>
          <button
            onClick={() => onUpdateElement(selectedElement.id, { 
              hidden: !selectedElement.hidden 
            })}
            className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-all ${
              selectedElement.hidden 
                ? 'bg-slate-100 border-slate-300' 
                : 'bg-green-50 border-green-300'
            }`}
          >
            <span className="text-sm text-slate-700">
              {selectedElement.hidden ? 'Hidden' : 'Visible'}
            </span>
            {selectedElement.hidden ? (
              <EyeOff className="w-5 h-5 text-slate-500" />
            ) : (
              <Eye className="w-5 h-5 text-green-600" />
            )}
          </button>
        </div>

        {/* Text Content (for text elements) */}
        {(selectedElement.type === 'heading' || selectedElement.type === 'text' || selectedElement.type === 'paragraph' || selectedElement.type === 'quote' || selectedElement.type === 'button') && (
          <div>
            <label className="text-sm text-slate-700 mb-2 block flex items-center gap-2">
              <Type className="w-4 h-4" />
              Content
            </label>
            <textarea
              value={selectedElement.content || ''}
              onChange={(e) => onUpdateElement(selectedElement.id, { content: e.target.value })}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:border-violet-500 focus:outline-none text-sm resize-none"
              rows={3}
            />
          </div>
        )}

        {/* Font Family */}
        {(selectedElement.type === 'heading' || selectedElement.type === 'text' || selectedElement.type === 'paragraph' || selectedElement.type === 'quote') && (
          <div>
            <label className="text-sm text-slate-700 mb-2 block">Font Family</label>
            <select
              value={selectedElement.fontFamily || 'Inter'}
              onChange={(e) => onUpdateElement(selectedElement.id, { fontFamily: e.target.value })}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:border-violet-500 focus:outline-none text-sm"
            >
              {fonts.map(font => (
                <option key={font} value={font}>{font}</option>
              ))}
            </select>
          </div>
        )}

        {/* Font Size */}
        {(selectedElement.type === 'heading' || selectedElement.type === 'text' || selectedElement.type === 'paragraph' || selectedElement.type === 'quote') && (
          <div>
            <label className="text-sm text-slate-700 mb-2 block">Font Size</label>
            <select
              value={selectedElement.fontSize || '16px'}
              onChange={(e) => onUpdateElement(selectedElement.id, { fontSize: e.target.value })}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:border-violet-500 focus:outline-none text-sm"
            >
              {fontSizes.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
        )}

        {/* Font Weight */}
        {(selectedElement.type === 'heading' || selectedElement.type === 'text' || selectedElement.type === 'paragraph' || selectedElement.type === 'quote') && (
          <div>
            <label className="text-sm text-slate-700 mb-2 block">Font Weight</label>
            <select
              value={selectedElement.fontWeight || '400'}
              onChange={(e) => onUpdateElement(selectedElement.id, { fontWeight: e.target.value })}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:border-violet-500 focus:outline-none text-sm"
            >
              {fontWeights.map(weight => (
                <option key={weight} value={weight}>
                  {weight === '300' ? 'Light' : weight === '400' ? 'Regular' : weight === '500' ? 'Medium' : weight === '600' ? 'Semi-Bold' : weight === '700' ? 'Bold' : weight === '800' ? 'Extra Bold' : 'Black'}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Text Alignment */}
        {(selectedElement.type === 'heading' || selectedElement.type === 'text' || selectedElement.type === 'paragraph' || selectedElement.type === 'quote') && (
          <div>
            <label className="text-sm text-slate-700 mb-2 block">Text Align</label>
            <div className="flex gap-2">
              {[
                { value: 'left', icon: AlignLeft },
                { value: 'center', icon: AlignCenter },
                { value: 'right', icon: AlignRight }
              ].map(({ value, icon: Icon }) => (
                <button
                  key={value}
                  onClick={() => onUpdateElement(selectedElement.id, { textAlign: value })}
                  className={`flex-1 p-2 border-2 rounded-lg transition-all ${
                    (selectedElement.textAlign || 'left') === value
                      ? 'border-violet-500 bg-violet-50'
                      : 'border-slate-300 hover:border-violet-300'
                  }`}
                >
                  <Icon className="w-5 h-5 mx-auto text-slate-700" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Text Color */}
        {(selectedElement.type === 'heading' || selectedElement.type === 'text' || selectedElement.type === 'paragraph' || selectedElement.type === 'quote' || selectedElement.type === 'icon') && (
          <div>
            <label className="text-sm text-slate-700 mb-2 block flex items-center gap-2">
              <Palette className="w-4 h-4" />
              Color
            </label>
            <div className="flex gap-2">
              <input
                type="color"
                value={selectedElement.color || '#1F2937'}
                onChange={(e) => onUpdateElement(selectedElement.id, { color: e.target.value })}
                className="w-16 h-10 rounded-lg border border-slate-300 cursor-pointer"
              />
              <input
                type="text"
                value={selectedElement.color || '#1F2937'}
                onChange={(e) => onUpdateElement(selectedElement.id, { color: e.target.value })}
                className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:border-violet-500 focus:outline-none text-sm font-mono"
              />
            </div>
          </div>
        )}

        {/* Icon Size */}
        {selectedElement.type === 'icon' && (
          <div>
            <label className="text-sm text-slate-700 mb-2 block flex items-center gap-2">
              <Maximize2 className="w-4 h-4" />
              Icon Size
            </label>
            <select
              value={selectedElement.iconSize || '24'}
              onChange={(e) => onUpdateElement(selectedElement.id, { iconSize: e.target.value })}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:border-violet-500 focus:outline-none text-sm"
            >
              {['16', '20', '24', '28', '32', '40', '48', '56', '64', '72', '80'].map(size => (
                <option key={size} value={size}>{size}px</option>
              ))}
            </select>
          </div>
        )}

        {/* Background Color (for buttons) */}
        {selectedElement.type === 'button' && (
          <div>
            <label className="text-sm text-slate-700 mb-2 block">Background Color</label>
            <div className="flex gap-2">
              <input
                type="color"
                value={selectedElement.backgroundColor || '#7C3AED'}
                onChange={(e) => onUpdateElement(selectedElement.id, { backgroundColor: e.target.value })}
                className="w-16 h-10 rounded-lg border border-slate-300 cursor-pointer"
              />
              <input
                type="text"
                value={selectedElement.backgroundColor || '#7C3AED'}
                onChange={(e) => onUpdateElement(selectedElement.id, { backgroundColor: e.target.value })}
                className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:border-violet-500 focus:outline-none text-sm font-mono"
              />
            </div>
          </div>
        )}

        {/* Position */}
        <div>
          <label className="text-sm text-slate-700 mb-2 block flex items-center gap-2">
            <Move className="w-4 h-4" />
            Position
          </label>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-xs text-slate-600">X</label>
              <input
                type="number"
                value={selectedElement.x || 0}
                onChange={(e) => onUpdateElement(selectedElement.id, { x: parseInt(e.target.value) })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:border-violet-500 focus:outline-none text-sm"
              />
            </div>
            <div>
              <label className="text-xs text-slate-600">Y</label>
              <input
                type="number"
                value={selectedElement.y || 0}
                onChange={(e) => onUpdateElement(selectedElement.id, { y: parseInt(e.target.value) })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:border-violet-500 focus:outline-none text-sm"
              />
            </div>
          </div>
        </div>

        {/* Size */}
        <div>
          <label className="text-sm text-slate-700 mb-2 block flex items-center gap-2">
            <Maximize2 className="w-4 h-4" />
            Size
          </label>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-xs text-slate-600">Width</label>
              <input
                type="number"
                value={selectedElement.width || 200}
                onChange={(e) => onUpdateElement(selectedElement.id, { width: parseInt(e.target.value) })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:border-violet-500 focus:outline-none text-sm"
              />
            </div>
            <div>
              <label className="text-xs text-slate-600">Height</label>
              <input
                type="number"
                value={selectedElement.height || 100}
                onChange={(e) => onUpdateElement(selectedElement.id, { height: parseInt(e.target.value) })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:border-violet-500 focus:outline-none text-sm"
              />
            </div>
          </div>
        </div>

        {/* Delete Button */}
        <button
          onClick={() => onDeleteElement(selectedElement.id)}
          className="w-full flex items-center justify-center gap-2 p-3 bg-red-50 hover:bg-red-100 border-2 border-red-200 text-red-600 rounded-lg transition-all"
        >
          <Trash2 className="w-4 h-4" />
          Delete Element
        </button>
      </div>
    </div>
  );
}
