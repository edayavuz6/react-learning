import axios from "axios";

function App() {
  const updateUser = async () => {
    const updatedUser = {
      name: "Eda",
      job: "Frontend Developer",
    };

    try {
      const response = await axios.put(
        "https://jsonplaceholder.typicode.com/users/1",
        updatedUser
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={updateUser}>
        Veriyi Güncelle
      </button>
    </div>
  );
}

export default App;
