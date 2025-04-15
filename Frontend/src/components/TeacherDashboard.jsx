import React, { useEffect, useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const studentsData = [
  { name: 'Alice Sharma', joinedAt: '21:00', leftAt: '22:15' },
  { name: 'Rohit Verma', joinedAt: '21:05', leftAt: '22:00' },
  { name: 'Meera Joshi', joinedAt: '21:00', leftAt: '22:30' },
  { name: 'Karan Malhotra', joinedAt: '21:10', leftAt: '22:20' },
  { name: 'Simran Kaur', joinedAt: '21:02', leftAt: '22:10' },
  { name: 'Nikhil Bansal', joinedAt: '21:08', leftAt: '22:05' },
  { name: 'Tanvi Gupta', joinedAt: '21:00', leftAt: '22:25' },
  { name: 'Aditya Mehra', joinedAt: '21:03', leftAt: '22:00' },
  { name: 'Pooja Yadav', joinedAt: '21:01', leftAt: '22:18' },
  { name: 'Arjun Rathi', joinedAt: '21:04', leftAt: '22:22' },
  { name: 'Sneha Kapoor', joinedAt: '21:06', leftAt: '22:10' },
  { name: 'Devansh Sinha', joinedAt: '21:07', leftAt: '22:14' },
  { name: 'Isha Malik', joinedAt: '21:01', leftAt: '22:27' },
  { name: 'Yuvraj Chauhan', joinedAt: '21:09', leftAt: '22:05' },
  { name: 'Neha Singh', joinedAt: '21:02', leftAt: '22:19' },
  { name: 'Rajat Ahuja', joinedAt: '21:11', leftAt: '22:12' },
  { name: 'Divya Jain', joinedAt: '21:00', leftAt: '22:17' },
  { name: 'Aarav Khanna', joinedAt: '21:03', leftAt: '22:24' },
  { name: 'Rhea Kapoor', joinedAt: '21:01', leftAt: '22:16' },
  { name: 'Vikram Thakur', joinedAt: '21:05', leftAt: '22:13' }
];

const groupLeavesByTime = () => {
  const groups = {};
  studentsData.forEach(({ leftAt }) => {
    groups[leftAt] = (groups[leftAt] || 0) + 1;
  });
  return groups;
};

const TeacherDashboard = () => {
  const [totalStudents, setTotalStudents] = useState(0);

  useEffect(() => {
    setTotalStudents(studentsData.length);
  }, []);

  const chartData = {
    labels: studentsData.map((student) => student.name),
    datasets: [
      {
        label: 'Joined At (minutes past 21:00)',
        backgroundColor: 'rgba(75,192,192,0.6)',
        data: studentsData.map((student) => parseInt(student.joinedAt.split(':')[1]))
      },
      {
        label: 'Left At (minutes past 21:00)',
        backgroundColor: 'rgba(255,99,132,0.6)',
        data: studentsData.map((student) => {
          const [h, m] = student.leftAt.split(':').map(Number);
          return (h - 21) * 60 + m;
        })
      }
    ]
  };

  const leaveGroups = groupLeavesByTime();
  const pieData = {
    labels: Object.keys(leaveGroups),
    datasets: [
      {
        label: 'Leaves at specific time',
        data: Object.values(leaveGroups),
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
          '#FF9F40', '#E7E9ED', '#FF6384', '#36A2EB', '#FFCE56'
        ],
        hoverOffset: 6
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Classroom Join/Leave Times (21:00 - 22:30)' }
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Minutes past 21:00'
        },
        beginAtZero: true
      }
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>Teacher Dashboard</h1>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '200px', backgroundColor: '#f0f4f8', borderRadius: '8px', padding: '1rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1rem', fontWeight: '600' }}>Total Students Joined</h2>
          <p style={{ fontSize: '1.5rem', color: '#2563eb', fontWeight: '700' }}>{totalStudents}</p>
        </div>
        <div style={{ flex: 1, minWidth: '200px', backgroundColor: '#f0f4f8', borderRadius: '8px', padding: '1rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1rem', fontWeight: '600' }}>Class Start</h2>
          <p>21:00</p>
        </div>
        <div style={{ flex: 1, minWidth: '200px', backgroundColor: '#f0f4f8', borderRadius: '8px', padding: '1rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1rem', fontWeight: '600' }}>Class End</h2>
          <p>22:30</p>
        </div>
      </div>

      <div style={{ marginTop: '2rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', padding: '1rem' }}>
        <Bar data={chartData} options={options} />
      </div>

      <div style={{ marginTop: '2rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', padding: '1rem', maxWidth: '400px', marginLeft: 'auto', marginRight: 'auto' }}>
        <h2 style={{ textAlign: 'center' }}>Leave Time Distribution</h2>
        <div style={{ width: '250px', height: '250px', margin: '0 auto' }}>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;