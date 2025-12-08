
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  gradient: string;
  index: number;
}

export function FeatureCard({ icon: Icon, title, description, details, gradient, index }: FeatureCardProps) {
  return (
    <div className="group relative bg-white border-2 border-slate-100 rounded-2xl p-8 hover:border-violet-200 hover:shadow-xl transition-all duration-300">
      {/* Number badge */}
      <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center">
        {index + 1}
      </div>
      
      {/* Icon with gradient */}
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      
      <h3 className="text-2xl text-slate-900 mb-3">
        {title}
      </h3>
      
      <p className="text-slate-600 mb-6">
        {description}
      </p>
      
      <ul className="space-y-3">
        {details.map((detail, i) => (
          <li key={i} className="flex items-start gap-3 text-slate-600">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
            <span dangerouslySetInnerHTML={{ __html: detail }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
