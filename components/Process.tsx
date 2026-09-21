export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'DISCOVER',
      description: 'Understand the business, users and requirements.',
    },
    {
      number: '02',
      title: 'DESIGN',
      description: 'Plan the structure, UX and interface.',
    },
    {
      number: '03',
      title: 'BUILD',
      description: 'Develop, integrate and test.',
    },
    {
      number: '04',
      title: 'LAUNCH',
      description: 'Deploy and hand over.',
    },
    {
      number: '05',
      title: 'SUPPORT',
      description: 'Maintain and improve.',
    },
  ];

  return (
    <section id="process" className="py-24 md:py-32 bg-[#07111F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How I work
          </h2>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-8 group"
            >
              <div className="text-[#FF8A3D] text-6xl font-bold group-hover:text-[#2F80FF] transition-colors flex-shrink-0">
                {step.number}
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-[#94A3B8]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
