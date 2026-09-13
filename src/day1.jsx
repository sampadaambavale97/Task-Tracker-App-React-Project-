function App() {
  const name = "Sampada";
  const course = "BCA";
  const semester = 5;
  const college ="D.R.M.College,kagal";

  return (
    <div>
      <h1>Welcome to React</h1>

      <h2>My Introduction</h2>

      <p>My name is {name}.</p>
      <p>I am studying {course}.</p>
      <p>I am currently in {semester}th semester.</p>
      <p> My college is {college}.</p>

      <button>Learn React</button>
    </div>
  );
}

export default App;