import React from 'react';

interface TagProps {
  label: string;
}

export const Tag: React.FC<TagProps> = ({ label }) => (
  <span className="tag">{label}</span>
);
