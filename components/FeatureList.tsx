
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface FeatureListProps {
  items: string[];
  light?: boolean;
}

export const FeatureList = ({ items, light = false }: FeatureListProps) => (
  <ul className="space-y-4 mb-8">
    {items.map((item, idx) => (
      <li key={idx} className="flex items-start gap-3">
        <CheckCircle2 className={`w-6 h-6 shrink-0 ${light ? 'text-white' : 'text-[#0040B0]'}`} />
        <span className={light ? 'text-gray-100' : 'text-gray-700'}>{item}</span>
      </li>
    ))}
  </ul>
);
