'use client';

import { useId, useState } from 'react';
import { Plus } from 'lucide-react';
import FadeInUp from './FadeInUp';

export default function Faq({ t }) {
  const [openIndex, setOpenIndex] = useState(null);
  const baseId = useId();

  return (
    <section id="faq" aria-labelledby="faq-title" className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
      <FadeInUp>
        <h2 id="faq-title" className="mb-8 text-center text-2xl font-semibold tracking-tight sm:mb-12 sm:text-3xl md:text-4xl lg:text-5xl">
          {t.title}
        </h2>
      </FadeInUp>

      <div className="elevate rounded-xl border border-line bg-panel/60 backdrop-blur-sm">
        {t.items.map((item, index) => {
          const isOpen = openIndex === index;
          const buttonId = `${baseId}-question-${index}`;
          const panelId = `${baseId}-answer-${index}`;
          return (
            <div key={item.q} className={index < t.items.length - 1 ? 'border-b border-line' : ''}>
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left text-sm font-medium text-fg sm:gap-6 sm:px-6 sm:py-6 sm:text-base"
                >
                  <span>{item.q}</span>
                  <Plus
                    aria-hidden="true"
                    className={`h-5 w-5 flex-none text-muted transition-transform duration-300 ease-out ${
                      isOpen ? 'rotate-45' : 'rotate-0'
                    }`}
                  />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                inert={!isOpen}
                className="grid transition-[grid-template-rows] duration-300 ease-out"
                style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
              >
                <div className="overflow-hidden">
                  <p className="px-4 pb-4 text-xs leading-6 text-muted sm:px-6 sm:pb-6 sm:text-sm">{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
