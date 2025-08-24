export default function CoursesPage() {
  const departments = [
    {
      name: "English & Communication",
      courses: [
        "English Composition I",
        "English Composition II",
        "Public Speaking",
        "Creative Writing",
      ],
    },
    {
      name: "Mathematics",
      courses: [
        "College Algebra",
        "Pre-Calculus",
        "Calculus I",
        "Statistics",
        "Finite Math",
      ],
    },
    {
      name: "Science",
      courses: [
        "Biology I (with Lab)",
        "Biology II (with Lab)",
        "General Chemistry",
        "Physics I",
        "Environmental Science",
      ],
    },
    {
      name: "Social Sciences",
      courses: [
        "Introduction to Psychology",
        "Sociology",
        "U.S. History I",
        "U.S. History II",
        "Government & Politics",
      ],
    },
    {
      name: "Business & Economics",
      courses: [
        "Principles of Accounting",
        "Microeconomics",
        "Macroeconomics",
        "Business Management",
        "Marketing",
      ],
    },
    {
      name: "Computer Science & IT",
      courses: [
        "Introduction to Computer Science",
        "Programming Fundamentals (Python)",
        "Web Development I",
        "Database Management",
        "Networking Essentials",
      ],
    },
    {
      name: "Arts & Humanities",
      courses: [
        "Art Appreciation",
        "Music Appreciation",
        "Philosophy",
        "Ethics",
        "World Religions",
      ],
    },
    {
      name: "Health & Wellness",
      courses: [
        "Introduction to Nutrition",
        "Health Education",
        "Physical Education",
        "First Aid & CPR",
      ],
    },
  ];

  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Courses</h1>
      <p className="mb-8">
        Explore a variety of free online courses that mirror a typical community college catalog.
      </p>
      <div className="space-y-8">
        {departments.map((dept, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow">
            <h2 className="text-2xl font-semibold mb-4">{dept.name}</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {dept.courses.map((course, i) => (
                <li key={i}>{course}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
