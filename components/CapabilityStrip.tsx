export default function CapabilityStrip() {
  const capabilities = [
    'FULL-STACK',
    'WEB APPS',
    'E-COMMERCE',
    'API INTEGRATION',
    'RESPONSIVE DESIGN',
  ];

  return (
    <section className="h-[70px] md:h-[80px] bg-[#0D1B2A] border-y border-white/8 flex items-center">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="flex items-center gap-2 md:gap-3">
              <span className="text-[#94A3B8] text-xs md:text-sm font-medium tracking-wide">
                {capability}
              </span>
              {index < capabilities.length - 1 && (
                <div className="w-px h-4 bg-white/20"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
