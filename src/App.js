function Header({ course }) {
  return (
    <div>
      <h1> {course} </h1>
    </div>
  );
}
// task 1
// function Content({ part1, exercises1, part2, exercises2, part3, exercises3 }) {
//   return (
//     <div>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//     </div>
//   );
// }

// task 2
function Content({ part, exercises }) {
  return (
    <div>
      <p>
        {part} {exercises}
      </p>
    </div>
  );
}

function Total({ total }) {
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  );
}

function App() {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const total = exercises1 + exercises2 + exercises3;

  return (
    <div>
      <Header course={course} />
      {/* task 1 */}
      {/* <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      /> */}
      {/* task 2 */}
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />

      <Total total={total} />
    </div>
  );
}

export default App;

// initial data
// return (
//   <div>
//     <h1>{course}</h1>
//     <p>
//       {part1}
//       {exercises1}
//     </p>
//     <p>
//       {part2}
//       {exercises2}
//     </p>
//     <p>
//       {part3}
//       {exercises3}
//     </p>
//     <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//   </div>
// );
