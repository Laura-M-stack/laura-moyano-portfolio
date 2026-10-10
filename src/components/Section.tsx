import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  index: number;
  label: string;
  title?: string;
  children: React.ReactNode;
}

/** Editorial section: numbered label on the left, content on the right (stacked on mobile). */
export const Section: React.FC<SectionProps> = ({ id, index, label, title, children }) => (
  <section id={id} className="section" aria-labelledby={`${id}-label`}>
    <div className="section-aside">
      <p className="section-label" id={`${id}-label`}>
        <span className="section-num">{String(index).padStart(2, '0')}</span>
        {label}
      </p>
    </div>
    <motion.div
      className="section-body"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {title && <h2 className="section-title">{title}</h2>}
      {children}
    </motion.div>
  </section>
);
