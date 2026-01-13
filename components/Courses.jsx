import Link from "next/link";

export default function CoursesPage() {
  const courses = [
    {
      title: "Web Development",
      desc: "Learn HTML, CSS, JavaScript, React, and backend development with real-world projects.",
      slug: "web-development",
    },
    {
      title: "Data Science",
      desc: "Master data analysis, Python, statistics, and data visualization techniques.",
      slug: "data-science",
    },
    {
      title: "Machine Learning",
      desc: "Build intelligent models using supervised and unsupervised learning algorithms.",
      slug: "machine-learning",
    },
     {
      title: "Web Development",
      desc: "Learn HTML, CSS, JavaScript, React, and backend development with real-world projects.",
      slug: "web-development",
    },
    {
      title: "Data Science",
      desc: "Master data analysis, Python, statistics, and data visualization techniques.",
      slug: "data-science",
    },
    {
      title: "Machine Learning",
      desc: "Build intelligent models using supervised and unsupervised learning algorithms.",
      slug: "machine-learning",
    },
     {
      title: "Web Development",
      desc: "Learn HTML, CSS, JavaScript, React, and backend development with real-world projects.",
      slug: "web-development",
    },
    {
      title: "Data Science",
      desc: "Master data analysis, Python, statistics, and data visualization techniques.",
      slug: "data-science",
    },
    {
      title: "Machine Learning",
      desc: "Build intelligent models using supervised and unsupervised learning algorithms.",
      slug: "machine-learning",
    },
     {
      title: "Web Development",
      desc: "Learn HTML, CSS, JavaScript, React, and backend development with real-world projects.",
      slug: "web-development",
    },
    {
      title: "Data Science",
      desc: "Master data analysis, Python, statistics, and data visualization techniques.",
      slug: "data-science",
    },
    {
      title: "Machine Learning",
      desc: "Build intelligent models using supervised and unsupervised learning algorithms.",
      slug: "machine-learning",
    }, {
      title: "Web Development",
      desc: "Learn HTML, CSS, JavaScript, React, and backend development with real-world projects.",
      slug: "web-development",
    },
    {
      title: "Data Science",
      desc: "Master data analysis, Python, statistics, and data visualization techniques.",
      slug: "data-science",
    },
    {
      title: "Machine Learning",
      desc: "Build intelligent models using supervised and unsupervised learning algorithms.",
      slug: "machine-learning",
    },
    {
      title: "Web Development",
      desc: "Learn HTML, CSS, JavaScript, React, and backend development with real-world projects.",
      slug: "web-development",
    },
  ];

  return (
    <div className="bg-zinc-50 min-h-screen py-20 px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Courses</h1>
        <p className="text-zinc-600 max-w-2xl mx-auto">
          Choose a course and start building skills that matter.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {courses.map((course) => (
          <div
            key={course.slug}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-3">
              {course.title}
            </h2>

            <p className="text-zinc-600 mb-5">
              {course.desc}
            </p>

            <Link
              href={`/${course.slug}`}
              className="inline-block font-semibold text-black hover:underline"
            >
              Enroll Now →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
