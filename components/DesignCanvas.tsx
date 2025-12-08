import { useState, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles, Move } from 'lucide-react';
import * as Icons from 'lucide-react';

interface Element {
  id: string;
  type: string;
  content?: string;
  src?: string;
  items?: string[];
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  color?: string;
  backgroundColor?: string;
  textAlign?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  iconName?: string;
  iconSize?: string;
  hidden?: boolean;
}

interface DesignCanvasProps {
  elements: Element[];
  selectedElement: string | null;
  onSelectElement: (id: string) => void;
  onUpdateElement: (id: string, updates: any) => void;
  zoom: number;
}

export function DesignCanvas({ elements, selectedElement, onSelectElement, onUpdateElement, zoom }: DesignCanvasProps) {
  const [draggedElement, setDraggedElement] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [resizing, setResizing] = useState<{ id: string; direction: string } | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent, elementId: string) => {
    e.stopPropagation();
    const element = elements.find(el => el.id === elementId);
    if (!element) return;

    onSelectElement(elementId);
    setDraggedElement(elementId);
    
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const scale = zoom / 100;
    setDragOffset({
      x: (e.clientX - rect.left) / scale,
      y: (e.clientY - rect.top) / scale
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const scale = zoom / 100;
    
    if (draggedElement && !resizing) {
      const element = elements.find(el => el.id === draggedElement);
      if (!element || !canvasRef.current) return;

      const canvasRect = canvasRef.current.getBoundingClientRect();
      const newX = (e.clientX - canvasRect.left) / scale - dragOffset.x;
      const newY = (e.clientY - canvasRect.top) / scale - dragOffset.y;

      onUpdateElement(draggedElement, {
        x: Math.max(0, newX),
        y: Math.max(0, newY)
      });
    } else if (resizing) {
      const element = elements.find(el => el.id === resizing.id);
      if (!element || !canvasRef.current) return;

      const canvasRect = canvasRef.current.getBoundingClientRect();
      const mouseX = (e.clientX - canvasRect.left) / scale;
      const mouseY = (e.clientY - canvasRect.top) / scale;

      const currentWidth = element.width || 200;
      const currentHeight = element.height || 100;
      const currentX = element.x || 0;
      const currentY = element.y || 0;

      let updates: any = {};

      if (resizing.direction.includes('e')) {
        updates.width = Math.max(50, mouseX - currentX);
      }
      if (resizing.direction.includes('s')) {
        updates.height = Math.max(50, mouseY - currentY);
      }
      if (resizing.direction.includes('w')) {
        const newWidth = Math.max(50, currentWidth + (currentX - mouseX));
        updates.width = newWidth;
        updates.x = mouseX;
      }
      if (resizing.direction.includes('n')) {
        const newHeight = Math.max(50, currentHeight + (currentY - mouseY));
        updates.height = newHeight;
        updates.y = mouseY;
      }

      onUpdateElement(resizing.id, updates);
    }
  };

  const handleMouseUp = () => {
    setDraggedElement(null);
    setResizing(null);
  };

  const handleResizeStart = (e: React.MouseEvent, elementId: string, direction: string) => {
    e.stopPropagation();
    setResizing({ id: elementId, direction });
  };

  const renderElement = (element: Element) => {
    if (element.hidden) return null;

    const isSelected = selectedElement === element.id;
    const elementStyle: React.CSSProperties = {
      position: 'absolute',
      left: `${element.x || 0}px`,
      top: `${element.y || 0}px`,
      width: element.width ? `${element.width}px` : 'auto',
      height: element.height ? `${element.height}px` : 'auto',
      cursor: draggedElement === element.id ? 'grabbing' : 'grab'
    };

    const textStyle = {
      fontSize: element.fontSize || '16px',
      fontWeight: element.fontWeight || '400',
      fontFamily: element.fontFamily || 'Inter',
      color: element.color || '#1F2937',
      textAlign: (element.textAlign || 'left') as any,
      width: '100%',
      height: '100%',
      margin: 0
    };

    const resizeHandles = isSelected && (
      <>
        {/* Corner handles */}
        <div
          onMouseDown={(e) => handleResizeStart(e, element.id, 'nw')}
          className="absolute -top-1 -left-1 w-3 h-3 bg-violet-600 border-2 border-white rounded-full cursor-nw-resize z-10"
        />
        <div
          onMouseDown={(e) => handleResizeStart(e, element.id, 'ne')}
          className="absolute -top-1 -right-1 w-3 h-3 bg-violet-600 border-2 border-white rounded-full cursor-ne-resize z-10"
        />
        <div
          onMouseDown={(e) => handleResizeStart(e, element.id, 'sw')}
          className="absolute -bottom-1 -left-1 w-3 h-3 bg-violet-600 border-2 border-white rounded-full cursor-sw-resize z-10"
        />
        <div
          onMouseDown={(e) => handleResizeStart(e, element.id, 'se')}
          className="absolute -bottom-1 -right-1 w-3 h-3 bg-violet-600 border-2 border-white rounded-full cursor-se-resize z-10"
        />
        {/* Edge handles */}
        <div
          onMouseDown={(e) => handleResizeStart(e, element.id, 'n')}
          className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-2 bg-violet-600 border border-white rounded cursor-n-resize z-10"
        />
        <div
          onMouseDown={(e) => handleResizeStart(e, element.id, 's')}
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-2 bg-violet-600 border border-white rounded cursor-s-resize z-10"
        />
        <div
          onMouseDown={(e) => handleResizeStart(e, element.id, 'w')}
          className="absolute top-1/2 -translate-y-1/2 -left-1 w-2 h-6 bg-violet-600 border border-white rounded cursor-w-resize z-10"
        />
        <div
          onMouseDown={(e) => handleResizeStart(e, element.id, 'e')}
          className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-6 bg-violet-600 border border-white rounded cursor-e-resize z-10"
        />
      </>
    );

    const baseClasses = `${isSelected ? 'ring-2 ring-violet-500' : 'hover:ring-1 hover:ring-violet-300'} rounded-lg bg-white`;

    switch (element.type) {
      case 'heading':
      case 'text':
      case 'paragraph':
        return (
          <div
            key={element.id}
            style={elementStyle}
            onMouseDown={(e) => handleMouseDown(e, element.id)}
            className={`${baseClasses} p-4 overflow-hidden`}
          >
            <div style={textStyle}>
              {element.content || 'Text content'}
            </div>
            {resizeHandles}
          </div>
        );

      case 'quote':
        return (
          <div
            key={element.id}
            style={elementStyle}
            onMouseDown={(e) => handleMouseDown(e, element.id)}
            className={`${baseClasses} p-4 border-l-4 border-violet-500 bg-slate-50 overflow-hidden`}
          >
            <blockquote style={textStyle}>
              {element.content || 'Quote text'}
            </blockquote>
            {resizeHandles}
          </div>
        );

      case 'image':
        return (
          <div
            key={element.id}
            style={elementStyle}
            onMouseDown={(e) => handleMouseDown(e, element.id)}
            className={baseClasses}
          >
            <img
              src={element.src || 'https://via.placeholder.com/400x300'}
              alt="Design element"
              className="w-full h-full object-cover rounded-lg"
              draggable={false}
            />
            {resizeHandles}
          </div>
        );

      case 'button':
        return (
          <div
            key={element.id}
            style={elementStyle}
            onMouseDown={(e) => handleMouseDown(e, element.id)}
            className={baseClasses}
          >
            <button
              className="w-full h-full px-8 py-4 rounded-xl shadow-lg transition-shadow pointer-events-none"
              style={{
                backgroundColor: element.backgroundColor || '#7C3AED',
                color: element.color || '#FFFFFF',
                fontSize: element.fontSize || '16px',
                fontWeight: element.fontWeight || '600'
              }}
            >
              {element.content || 'Button'}
            </button>
            {resizeHandles}
          </div>
        );

      case 'icon':
        const IconComponent = (Icons as any)[element.iconName || 'Star'];
        return (
          <div
            key={element.id}
            style={elementStyle}
            onMouseDown={(e) => handleMouseDown(e, element.id)}
            className={`${baseClasses} p-2 inline-flex items-center justify-center`}
          >
            {IconComponent && (
              <IconComponent
                style={{
                  width: `${element.iconSize || '24'}px`,
                  height: `${element.iconSize || '24'}px`,
                  color: element.color || '#1F2937'
                }}
              />
            )}
            {resizeHandles}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-8 bg-slate-100">
      <div
        ref={canvasRef}
        className="bg-white rounded-xl shadow-2xl overflow-hidden relative"
        style={{ 
          width: `${1920 * (zoom / 100)}px`,
          height: `${1080 * (zoom / 100)}px`,
          transform: `scale(${zoom / 100})`,
          transformOrigin: 'center center'
        }}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Canvas with product page - Landscape 16:9 */}
        <div 
          className="relative w-full h-full bg-white"
          style={{
            width: '1920px',
            height: '1080px'
          }}
        >
          {/* Canvas Info Overlay */}
          <div className="absolute top-4 left-4 bg-slate-900/80 text-white px-3 py-2 rounded-lg text-xs z-20">
            1920 × 1080px (Landscape)
          </div>

          {/* AI Analysis Overlay Indicators */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
            <div className="bg-violet-600 text-white px-3 py-2 rounded-lg shadow-lg flex items-center gap-2 text-sm animate-pulse">
              <Sparkles className="w-4 h-4" />
              AI Analyzing...
            </div>
          </div>

          {/* Render all elements */}
          {elements.map(element => renderElement(element))}

          {/* Empty state */}
          {elements.filter(el => !el.hidden).length === 0 && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 pointer-events-none">
              <Move className="w-12 h-12 mb-4 opacity-20" />
              <p className="text-lg mb-2">Your canvas is empty</p>
              <p className="text-sm">Click elements from the left panel to add them</p>
              <p className="text-xs mt-2 text-slate-500">1920 × 1080 px Landscape Canvas</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
