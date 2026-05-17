function User(props) {
  return <h1>Merhaba {props.name}</h1>;
}

function App() {
  return (
    <div>
      <User name="Eda" />
    </div>
  );
}

export default App;
