
import React from 'react';

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
}

export const SectionHeader = ({ subtitle, title, description, light = false }: SectionHeaderProps) => (
  <div className={`mb-12 ${light ? 'text-white' : 'text-[#001D4A]'}`}>
    {subtitle && (
      <div className="flex items-center gap-2 mb-4">
        <div className={`h-[2px] w-8 ${light ? 'bg-white' : 'bg-[#0040B0]'}`}></div>
        <span className={`text-xs font-bold tracking-widest uppercase ${light ? 'text-gray-200' : 'text-[#0040B0]'}`}>{subtitle}</span>
      </div>
    )}
    <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">{title}</h2>
    {description && <p className={`text-lg max-w-2xl ${light ? 'text-gray-200' : 'text-gray-600'}`}>{description}</p>}
  </div>
);
