import "./App.css";
import axios from "axios";

function App() {
  // GET a resource
  axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
    .finally(/* always executed */);

  // Get all resources
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
    .finally(/* always executed */);

  // Create a resource
  axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      property1: "property1",
      property2: "property2",
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

  // Updating a resource
  axios
    .put("https://jsonplaceholder.typicode.com/posts/1", {
      id: 1,
      title: "new title",
      body: "new body",
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

  // Patching a part of a resource
  axios
    .patch("https://jsonplaceholder.typicode.com/posts/1", {
      title: "an even newer title",
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

  // Deleting a resource

  return (
    <div className="App">
      <h1>React</h1>
    </div>
  );
}

export default App;
