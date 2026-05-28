function App() {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? <h1>Hoş Geldin</h1> : <h1>Giriş Yap</h1>}
    </div>
  );
}

export default App;
