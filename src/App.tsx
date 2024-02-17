const App = () => {
  const count = (a: number, b: number) => {
    return a + b;
  };

  return (
    <>
      <h1>hello world</h1>
      <div>{count(4, 6)}</div>
    </>
  );
};

export default App;
