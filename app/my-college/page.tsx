export default function MyCollegePage() {
  const student = {
    name: "John Doe",
    program: "Associate of Science in Computer Science",
    gpa: 3.7,
    enrolledCourses: [
      { name: "English Composition I", grade: "A-" },
      { name: "College Algebra", grade: "B+" },
      { name: "Introduction to Psychology", grade: "A" },
      { name: "Programming Fundamentals (Python)", grade: "A" },
    ],
  };

  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My College</h1>
      <p className="mb-8 text-gray-700">
        Welcome back, {student.name}! Here’s your personalized dashboard.
      </p>

      {/* Program Info */}
      <div className="bg-white p-6 rounded-2xl shadow mb-6">
        <h2 className="text-2xl font-semibold mb-4">Program Information</h2>
        <p className="text-gray-700">
          <span className="font-semibold">Program:</span> {student.program}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">GPA:</span> {student.gpa}
        </p>
      </div>

      {/* Enrolled Courses */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold mb-4">My Courses</h2>
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3 border-b">Course</th>
              <th className="p-3 border-b">Grade</th>
            </tr>
          </thead>
          <tbody>
            {student.enrolledCourses.map((course, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="p-3 border-b">{course.name}</td>
                <td className="p-3 border-b">{course.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
