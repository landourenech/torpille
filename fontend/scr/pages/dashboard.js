import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CourseList from '../components/CourseList';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Dashboard</h2>
        <CourseList />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
