import { industryWebsiteKeywords } from '../config/keywords';

export function SEOKeywords() {
  // Flatten all industry keywords
  const allIndustryKeywords = Object.values(industryWebsiteKeywords).flat();

  return (
    <section 
      className="overflow-hidden"
      style={{ 
        height: '0px',
        opacity: 0,
        pointerEvents: 'none',
        position: 'absolute',
        left: 0,
        bottom: 0
      }}
      aria-label="SEO Keywords"
    >
      <div className="container mx-auto max-w-6xl">
        <p 
          className="text-[7px] leading-tight select-none"
          style={{ 
            fontWeight: 400,
            userSelect: 'none'
          }}
        >
          <span className="sr-only">We specialize in: </span>
          {allIndustryKeywords.join(' ')}
        </p>
      </div>
    </section>
  );
}