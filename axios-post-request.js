import axios from "axios";

function App() {
  const addUser = async () => {
    const newUser = {
      name: "Eda",
      job: "Frontend Developer",
    };

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        newUser
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={addUser}>
        Veri Ekle
      </button>
    </div>
  );
}

export default App;
