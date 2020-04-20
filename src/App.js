import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import JobList from './components/JobList/JobList'

function App() {
  return (
    <div className="App">
      <Header />
      <JobList />
    </div>
  );
}

export default App;
