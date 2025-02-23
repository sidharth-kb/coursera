function App(props) {
  const currDate = new Date();

  return (
    <>
      <h1>Hello World</h1>
      <h2>The time now is {currDate.toLocaleString()}</h2>
    </>
  );
}

export default App;
