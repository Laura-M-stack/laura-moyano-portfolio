import React from 'react';

interface TagListProps {
  items: string[];
  label?: string;
}

/** Tech stack as a quiet mono line ("React · TypeScript · Vite") instead of pill soup. */
export const TagList: React.FC<TagListProps> = ({ items, label }) => (
  <ul className="tags" aria-label={label}>
    {items.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);
