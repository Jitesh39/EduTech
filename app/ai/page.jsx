import Image from "next/image";

export default function MachineLearningPage() {
  return (
    <div className="bg-zinc-50 min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT: Course Info */}
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold mb-4">
            Machine Learning A–Z™
          </h1>

          <p className="text-zinc-700 mb-4">
            Learn Machine Learning, Data Science, and AI using Python with
            hands-on projects and real-world datasets.
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <span className="font-bold text-amber-600">4.8</span>
            <span className="text-amber-500">★★★★★</span>
            <span className="text-zinc-600">(528,214 students)</span>
          </div>

          <p className="text-sm text-zinc-600 mb-6">
            Created by <span className="font-semibold">Kirill Eremenko</span>
          </p>

          {/* What you'll learn */}
          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <h2 className="text-xl font-bold mb-4">What you’ll learn</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-disc pl-5 text-zinc-700">
              <li>Supervised & Unsupervised Learning</li>
              <li>Regression & Classification</li>
              <li>Clustering Algorithms</li>
              <li>Model Evaluation & Tuning</li>
              <li>Neural Networks & Deep Learning</li>
              <li>Real-world ML projects</li>
            </ul>
          </div>
        </div>

        {/* RIGHT: Purchase Card */}
        <div className="bg-white rounded-lg shadow-lg p-4 h-fit sticky top-20">
          <div className="relative w-full h-40 mb-4">
            <Image
              src="/courses/machine-learning.jpg"
              alt="Machine Learning"
              fill
              className="object-cover rounded"
            />
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl font-bold">₹499</span>
            <span className="line-through text-zinc-500">₹3,999</span>
          </div>

          <button className="w-full bg-emerald-600 text-white py-3 rounded font-semibold hover:bg-emerald-700 transition mb-3">
            Enroll Now
          </button>

          <div className="flex gap-2 mt-4">
            <span className="bg-emerald-600 text-white text-xs px-2 py-1 rounded">
              Premium
            </span>
            <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded">
              Bestseller
            </span>
          </div>
        </div>
      </div>

      {/* Popular Topics */}
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-2xl font-bold mb-6">
          Popular topics
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[
            "Machine Learning",
            "Deep Learning",
            "Python",
            "Scikit-Learn",
            "TensorFlow",
            "Keras",
            "Neural Networks",
            "AI",
            "Model Evaluation",
            "Data Preprocessing",
          ].map((topic) => (
            <div
              key={topic}
              className="border border-zinc-300 rounded-md py-4 text-center font-medium hover:bg-zinc-100 cursor-pointer transition"
            >
              {topic}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
