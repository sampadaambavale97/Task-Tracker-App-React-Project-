function Day5() {
  const students = ["Sampada", "Priya", "Sneha", "Pooja"];
  const isLoggedIn = true;

  return (
    <div>
      <h1>React Day 5</h1>

      <h2>Student List</h2>

      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>

      {isLoggedIn ? (
        <p>Welcome, Student!</p>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  );
}

export default Day5;