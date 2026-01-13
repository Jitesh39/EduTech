import Link from "next/link";
import "./globals.css";
export default function Home() {
  return (
    <div className="bg-zinc-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-black text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Learn Skills That Shape Your Future
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-zinc-300 mb-8">
          EduTech helps you learn industry-ready skills with expert-designed
          courses and hands-on practice.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/login"
            className="px-6 py-3 rounded-md bg-white text-black font-semibold hover:bg-zinc-200 transition"
          >
            Get Started
          </Link>

          <Link
            href="/courses"
            className="px-6 py-3 rounded-md border border-white text-white hover:bg-white hover:text-black transition"
          >
            View Courses
          </Link>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Popular Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "Web Development",
            "Data Science",
            "Machine Learning",
          ].map((course) => (
            <div
              key={course}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{course}</h3>
              <p className="text-zinc-600 mb-4">
                Learn {course.toLowerCase()} with real-world projects and
                expert guidance.
              </p>
              <Link
                href="/courses"
                className="text-black font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose EduTech?
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Expert Mentors</h3>
            <p className="text-zinc-600">
              Learn from professionals working in the industry.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Hands-On Learning</h3>
            <p className="text-zinc-600">
              Practice with real-world projects and challenges.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Career Focused</h3>
            <p className="text-zinc-600">
              Skills designed to help you get hired faster.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Learning?
        </h2>
        <p className="text-zinc-300 mb-6">
          Join thousands of students learning with EduTech.
        </p>
        <Link
          href="/signup"
          className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-md hover:bg-zinc-200 transition"
        >
          Create Free Account
        </Link>
      </section>

    </div>
  );
}
