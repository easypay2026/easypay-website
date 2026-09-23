import React from 'react';

export function PolicyRenderer({ content }: { content: string }) {
  const titleHeadings = new Set([
    'Terms and Conditions',
    'Intellectual Property',
    'Permitted Use',
    'Liability',
    'Changes to Terms',
    'Disclaimer',
    'Legal Age',
    'Governing Law and Disputes',
    'Contact',
  ]);

  return (
    <div className="w-full flex flex-col">
      {content.split('\n').map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={idx} className="h-4" />;
        
        // Match main headings: ALL CAPS or numbered like "1. Scope of Policy"
        const isMainHeading = 
          trimmed === 'Acceptable Use Policy' || 
          trimmed === 'Privacy Policy' || 
          titleHeadings.has(trimmed) ||
          /^[A-Z\s]+$/.test(trimmed) || 
          /^\d+\.\s+[A-Za-z\s]+/.test(trimmed);

        if (isMainHeading) {
          return (
            <div key={idx} className="mt-14 mb-8 first:mt-0 border-b border-gray-100 pb-4">
              <h2 className="text-[24px] md:text-[28px] font-bold text-[#1B1D21]">
                {trimmed}
              </h2>
            </div>
          );
        }

        // Level 3 paragraphs: 3.1.1, 3.1.2, etc. (Keep entire text regular)
        if (/^\d+\.\d+\.\d+\s/.test(trimmed)) {
          return (
            <p key={idx} className="text-[#1B1D21] text-[16px] md:text-[18px] font-normal leading-[2] mb-4">
              {trimmed}
            </p>
          );
        }

        // Level 2 paragraphs: 2.1, 3.2, 4.1, 4.2 etc. (Bold the entire paragraph for clear categorization)
        if (/^\d+\.\d+\s/.test(trimmed)) {
          return (
            <div key={idx} className="mt-8 mb-4">
              <p className="text-[#1B1D21] text-[16px] md:text-[18px] font-bold leading-[2]">
                {trimmed}
              </p>
            </div>
          );
        }

        // List items (- or a. b. c.)
        if (trimmed.startsWith('-') || /^[a-z]\.\s/.test(trimmed)) {
          let contentText = trimmed;
          if (trimmed.startsWith('-')) {
            contentText = trimmed.substring(1).trim();
          }

          // split by ':' to bold the first part if it exists (e.g. "Illegal Activities: Any...")
          const parts = contentText.split(':');
          if (parts.length > 1 && parts[0].split(' ').length < 8) {
             return (
              <p key={idx} className="text-[#1B1D21] text-[16px] md:text-[18px] font-normal leading-[2] mb-4 pl-0">
                <strong className="text-[#1B1D21] font-bold">{parts[0]}:</strong>
                {parts.slice(1).join(':')}
              </p>
            );
          }
          
          return (
            <p key={idx} className="text-[#1B1D21] text-[16px] md:text-[18px] font-normal leading-[2] mb-4 pl-0">
              {contentText}
            </p>
          );
        }

        // Default regular paragraph
        return <p key={idx} className="text-[#1B1D21] text-[16px] md:text-[18px] font-normal leading-[2] mb-6">{trimmed}</p>;
      })}
    </div>
  );
}
