import React, { useEffect, useState } from "react";
import { FaUserGraduate, FaSignal, FaClock, FaCircle } from "react-icons/fa";
import { faker } from "@faker-js/faker"; // for generating mock student data

interface StudentActivity {
  name: string;
  email: string;
  status: "Active" | "Idle" | "Away";
  lastActivity: string;
}

const generateMockStudents = (): StudentActivity[] => {
  return Array.from({ length: 5 }).map(() => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    status: faker.helpers.arrayElement(["Active", "Idle", "Away"]),
    lastActivity: faker.date.recent().toLocaleTimeString(),
  }));
};

const TeacherDashboard: React.FC = () => {
  const [students, setStudents] = useState<StudentActivity[]>([]);

  // Simulate real-time updates every few seconds
  useEffect(() => {
    setStudents(generateMockStudents());
    const interval = setInterval(() => {
      setStudents(generateMockStudents());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "text-green-500";
      case "Idle":
        return "text-yellow-500";
      case "Away":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-blue-700 text-white px-6 py-4 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Teacher Live Dashboard</h1>
        <div className="flex items-center gap-4">
          <FaSignal className="text-green-400 animate-pulse" />
          <span className="text-sm">Live Session Ongoing</span>
        </div>
      </header>

      {/* Content */}
      <main className="flex-grow p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Student Activity Overview</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between border border-blue-100"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-blue-700 flex items-center gap-2">
                  <FaUserGraduate /> {student.name}
                </h3>
                <span
                  className={`text-xs font-semibold flex items-center gap-1 ${getStatusColor(
                    student.status
                  )}`}
                >
                  <FaCircle className="text-xs" /> {student.status}
                </span>
              </div>

              <p className="text-sm text-gray-600 mb-1">Email: {student.email}</p>
              <div className="flex items-center text-gray-500 text-sm mt-auto">
                <FaClock className="mr-1" />
                Last activity at {student.lastActivity}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TeacherDashboard;
