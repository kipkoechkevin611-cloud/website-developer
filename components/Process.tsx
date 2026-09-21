export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'Understand the business, requirements, target users and desired outcome.',
    },
    {
      number: '02',
      title: 'Design',
      description: 'Plan the structure, user experience and visual interface.',
    },
    {
      number: '03',
      title: 'Development',
      description: 'Build, integrate, test and refine the system.',
    },
    {
      number: '04',
      title: 'Launch & Support',
      description: 'Deploy the project, provide handover and continue with maintenance/support where required.',
    },
  ];

  return (
    <section id="process" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Development Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A clear, organized approach to building your project
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative"
            >
              <div className="bg-white rounded-xl p-8 border border-gray-100 h-full">
                <div className="text-5xl font-bold text-blue-600 mb-4 opacity-20">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-blue-600">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
