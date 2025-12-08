
import { useState } from 'react';
import { EditorToolbar } from './EditorToolbar';
import { DesignCanvas } from './DesignCanvas';
import { AIAssistantPanel } from './AIAssistantPanel';
import { ElementsPanel } from './ElementsPanel';
import { PropertiesPanel } from './PropertiesPanel';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

export function DesignWorkspace() {
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [showElementsPanel, setShowElementsPanel] = useState(true);
  const [showPropertiesPanel, setShowPropertiesPanel] = useState(true);
  const [zoom, setZoom] = useState(100);
  const [elements, setElements] = useState([
    { id: 'hero', type: 'heading', content: 'Premium Smartwatch Collection', fontSize: '48px', fontWeight: '700', x: 50, y: 50, width: 600 },
    { id: 'product-image', type: 'image', src: 'https://images.unsplash.com/photo-1687078426457-89ce2b562eaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXRjaCUyMHByb2R1Y3R8ZW58MXx8fHwxNzY0OTE5NjI5fDA&ixlib=rb-4.1.0&q=80&w=1080', x: 50, y: 150, width: 400, height: 400 },
    { id: 'product-title', type: 'heading', content: 'Apex Pro Smartwatch', fontSize: '36px', fontWeight: '600', x: 500, y: 180, width: 400 },
    { id: 'price', type: 'text', content: '$299.99', fontSize: '32px', x: 500, y: 280, width: 200 },
    { id: 'cta-button', type: 'button', content: 'Add to Cart', backgroundColor: '#7C3AED', color: '#FFFFFF', x: 500, y: 380, width: 200, height: 60 }
  ]);

  const handleAddElement = (type: string, config?: any) => {
    const defaultSizes: any = {
      heading: { width: 400, height: 80 },
      text: { width: 300, height: 50 },
      paragraph: { width: 400, height: 120 },
      quote: { width: 400, height: 100 },
      button: { width: 200, height: 60 },
      image: { width: 300, height: 300 },
      icon: { width: 60, height: 60 }
    };

    const newElement = {
      id: `element-${Date.now()}`,
      type,
      x: 100,
      y: 100,
      ...defaultSizes[type],
      ...config
    };
    setElements([...elements, newElement]);
    setSelectedElement(newElement.id);
  };

  const handleUpdateElement = (id: string, updates: any) => {
    setElements(elements.map(el => 
      el.id === id ? { ...el, ...updates } : el
    ));
  };

  const handleDeleteElement = (id: string) => {
    setElements(elements.filter(el => el.id !== id));
    if (selectedElement === id) {
      setSelectedElement(null);
    }
  };

  const handleNewPage = () => {
    if (confirm('Create a new page? Current work will be cleared.')) {
      setElements([]);
      setSelectedElement(null);
    }
  };

  const handleOpenFile = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const data = JSON.parse(e.target?.result as string);
            if (data.elements) {
              setElements(data.elements);
              setSelectedElement(null);
            }
          } catch (error) {
            alert('Invalid file format');
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  const handleSave = () => {
    const data = { elements };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `design-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const getSelectedElementData = () => {
    return elements.find(el => el.id === selectedElement);
  };

  return (
    <div className="h-screen flex flex-col bg-slate-50">
      <EditorToolbar 
        zoom={zoom}
        onZoomChange={setZoom}
        onNewPage={handleNewPage}
        onOpenFile={handleOpenFile}
        onSave={handleSave}
      />
      
      <div className="flex-1 flex overflow-hidden relative">
        {/* Left Sidebar - Elements */}
        <div className={`transition-all duration-300 ${showElementsPanel ? 'w-64' : 'w-0'} overflow-hidden`}>
          <ElementsPanel onAddElement={handleAddElement} />
        </div>

        {/* Left Toggle Button */}
        <button
          onClick={() => setShowElementsPanel(!showElementsPanel)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white border border-slate-200 rounded-r-lg p-2 hover:bg-slate-50 transition-colors shadow-lg"
          style={{ left: showElementsPanel ? '256px' : '0' }}
        >
          {showElementsPanel ? (
            <ChevronLeft className="w-4 h-4 text-slate-600" />
          ) : (
            <ChevronRight className="w-4 h-4 text-slate-600" />
          )}
        </button>
        
        {/* Center - Design Canvas */}
        <div className="flex-1 overflow-auto bg-slate-100">
          <DesignCanvas 
            elements={elements}
            selectedElement={selectedElement}
            onSelectElement={setSelectedElement}
            onUpdateElement={handleUpdateElement}
            zoom={zoom}
          />
        </div>

        {/* Right Toggle Button */}
        <button
          onClick={() => setShowPropertiesPanel(!showPropertiesPanel)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white border border-slate-200 rounded-l-lg p-2 hover:bg-slate-50 transition-colors shadow-lg"
          style={{ right: showPropertiesPanel ? '320px' : '0' }}
        >
          {showPropertiesPanel ? (
            <ChevronRight className="w-4 h-4 text-slate-600" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-slate-600" />
          )}
        </button>

        {/* Right Sidebar - Properties */}
        <div className={`transition-all duration-300 ${showPropertiesPanel ? 'w-80' : 'w-0'} overflow-hidden`}>
          <PropertiesPanel
            selectedElement={getSelectedElementData()}
            onUpdateElement={handleUpdateElement}
            onDeleteElement={handleDeleteElement}
          />
        </div>
      </div>

      {/* Floating AI Assistant Button */}
      <button
        onClick={() => setShowAIAssistant(!showAIAssistant)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-200 flex items-center justify-center group z-50"
      >
        <Sparkles className="w-7 h-7" />
        {/* Pulsing notification dot */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs animate-pulse">
          3
        </div>
        {/* Tooltip */}
        <div className="absolute right-full mr-4 px-4 py-2 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          AI Design Assistant
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45" />
        </div>
      </button>

      {/* AI Assistant Panel - Floating */}
      {showAIAssistant && (
        <div className="fixed inset-0 z-40 pointer-events-none">
          <div className="absolute bottom-28 right-8 pointer-events-auto">
            <AIAssistantPanel 
              selectedElement={selectedElement} 
              elements={elements}
              onClose={() => setShowAIAssistant(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
