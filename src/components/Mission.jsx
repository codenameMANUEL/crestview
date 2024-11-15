export default function Mission() {
  const sections = [
    {
      title: "Vision",
      description:
        "To be the leading construction company known for excellence, innovation, and sustainable building practices that shape the future of urban development.",
    },
    {
      title: "Mission",
      description:
        "To deliver exceptional construction projects through skilled craftsmanship, innovative solutions, and unwavering commitment to quality, safety, and client satisfaction.",
    },
    {
      title: "Values",
      description:
        "Integrity in every action, excellence in execution, safety above all, sustainable practices, and dedication to client success and employee growth.",
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-20 py-12 md:py-14 font-space-grotesk">
      <h1 className="font-semibold text-3xl tracking-tight text-slate-900 sm:text-4xl text-center mb-10 uppercase pt-24">
        Purpose
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="max-w-sm lg:max-w-lg overflow-hidden border hover:border-green-600 transition cursor-pointer"
          >
            <div className="px-6 py-4">
              <div className="font-bold text-3xl mb-4 text-slate-400">
                0{index + 1}
              </div>
              <p className="text-lg font-bold mb-3">{section.title}</p>
              <p className="text-gray-700 text-base">{section.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
