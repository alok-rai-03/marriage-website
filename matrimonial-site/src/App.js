// src/App.js
import React from 'react';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <a href="/">Home</a>
          <a href="/register">Register</a>
          <a href="/login">Login</a>
        </nav>
      </header>
      <section id="hero">
        <h1>Find Your Perfect Match</h1>
        <form action="/search" method="GET">
          <input type="text" name="query" placeholder="Search by name, location, or preferences" required />
          <button type="submit">Search</button>
        </form>
      </section>
      <section id="featured">
        <h2>Featured Profiles</h2>
        {/* Dynamically generate profile cards */}
      </section>
    </div>
  );
}

export default App;

