import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  label: string;
  eyebrow?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, label, eyebrow, children }) => {
  return (
  <motion.section
    id={id}
    className="section"
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
    <h2 className="section-title">{label}</h2>
    <div className="section-content">{children}</div>
  </motion.section>
);
};
