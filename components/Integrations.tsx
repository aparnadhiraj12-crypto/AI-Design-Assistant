export function Integrations() {
  const tools = [
    'Figma',
    'Photoshop',
    'Illustrator',
    'Adobe Express',
    'Canva',
    'Webflow',
    'Sketch'
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-slate-500 mb-4">Works seamlessly with</p>
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-slate-50 text-slate-700 rounded-lg border border-slate-200 hover:border-violet-300 hover:bg-violet-50 transition-all duration-200"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

