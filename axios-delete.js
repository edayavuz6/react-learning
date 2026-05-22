import axios from "axios";

function App() {
  const deleteUser = async () => {
    try {
      const response = await axios.delete(
        "https://jsonplaceholder.typicode.com/users/1"
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={deleteUser}>
        Veriyi Sil
      </button>
    </div>
  );
}

export default App;
