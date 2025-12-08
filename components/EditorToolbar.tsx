import { 
  Sparkles, 
  Save, 
  Undo, 
  Redo, 
  Eye, 
  Smartphone, 
  Monitor,
  Download,
  FileText,
  FolderOpen,
  Plus,
  ZoomIn,
  ZoomOut,
  Maximize2
} from 'lucide-react';

interface EditorToolbarProps {
  zoom: number;
  onZoomChange: (zoom: number) => void;
  onNewPage: () => void;
  onOpenFile: () => void;
  onSave: () => void;
}

export function EditorToolbar({ zoom, onZoomChange, onNewPage, onOpenFile, onSave }: EditorToolbarProps) {
  return (
    <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-slate-900">AI Design Studio</span>
        </div>
        
        <div className="h-8 w-px bg-slate-200" />
        
        {/* File Operations */}
        <div className="flex items-center gap-1">
          <button 
            onClick={onNewPage}
            className="px-3 py-2 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-2 text-sm"
            title="New Page"
          >
            <Plus className="w-4 h-4 text-slate-600" />
            <span className="text-slate-700">New</span>
          </button>
          <button 
            onClick={onOpenFile}
            className="px-3 py-2 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-2 text-sm"
            title="Open File"
          >
            <FolderOpen className="w-4 h-4 text-slate-600" />
            <span className="text-slate-700">Open</span>
          </button>
        </div>

        <div className="h-8 w-px bg-slate-200" />
        
        <div className="flex items-center gap-1">
          <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors" title="Undo">
            <Undo className="w-5 h-5 text-slate-600" />
          </button>
          <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors" title="Redo">
            <Redo className="w-5 h-5 text-slate-600" />
          </button>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        {/* Zoom Controls */}
        <div className="flex items-center gap-2 bg-slate-100 rounded-lg px-3 py-2">
          <button 
            onClick={() => onZoomChange(Math.max(10, zoom - 10))}
            className="p-1 hover:bg-white rounded transition-colors"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4 text-slate-600" />
          </button>
          
          <input
            type="range"
            min="10"
            max="200"
            value={zoom}
            onChange={(e) => onZoomChange(parseInt(e.target.value))}
            className="w-24 h-1 bg-slate-300 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #7C3AED 0%, #7C3AED ${((zoom - 10) / 190) * 100}%, #CBD5E1 ${((zoom - 10) / 190) * 100}%, #CBD5E1 100%)`
            }}
          />
          
          <button 
            onClick={() => onZoomChange(Math.min(200, zoom + 10))}
            className="p-1 hover:bg-white rounded transition-colors"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4 text-slate-600" />
          </button>
          
          <span className="text-sm text-slate-700 font-mono min-w-[3rem] text-center">
            {zoom}%
          </span>
          
          <button 
            onClick={() => onZoomChange(100)}
            className="p-1 hover:bg-white rounded transition-colors"
            title="Reset Zoom"
          >
            <Maximize2 className="w-4 h-4 text-slate-600" />
          </button>
        </div>

        <div className="h-8 w-px bg-slate-200" />
        
        <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1">
          <button className="p-2 bg-white rounded shadow-sm">
            <Monitor className="w-4 h-4 text-slate-700" />
          </button>
          <button className="p-2 hover:bg-white rounded transition-colors">
            <Smartphone className="w-4 h-4 text-slate-500" />
          </button>
        </div>
        
        <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center gap-2 transition-colors">
          <Eye className="w-4 h-4" />
          <span className="text-sm">Preview</span>
        </button>
        
        <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center gap-2 transition-colors">
          <Download className="w-4 h-4" />
          <span className="text-sm">Export</span>
        </button>
        
        <button 
          onClick={onSave}
          className="px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg flex items-center gap-2 hover:shadow-lg transition-all"
        >
          <Save className="w-4 h-4" />
          <span className="text-sm">Save</span>
        </button>
      </div>
    </div>
  );
}
