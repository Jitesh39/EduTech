export default function DataSciencePage() {
  return (
    <div className="min-h-screen px-8 py-20 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">
        Data Science Course
      </h1>

      <p className="text-zinc-600 mb-6">
        Learn how to analyze data, extract insights, and make data-driven decisions.
      </p>

      <ul className="list-disc pl-6 text-zinc-700 space-y-2">
        <li>Python for Data Science</li>
        <li>Data Analysis with Pandas & NumPy</li>
        <li>Statistics & Probability</li>
        <li>Data Visualization (Matplotlib, Seaborn)</li>
        <li>Real-world Data Projects</li>
      </ul>
    </div>
  );
}
