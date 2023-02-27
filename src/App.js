import "./App.css";
import axios from "axios";

function App() {
  // Get a resource
  axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => console.log("A Resource:", response))
    .catch((error) => console.log("A Resource:", error))
    .finally(/* always executed */);

  // Get all resources
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => console.log("All Resources:", response))
    .catch((error) => console.log("All Resources:", error))
    .finally(/* always executed */);

  // Create a resource
  axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      property1: "property1",
      property2: "property2",
    })
    .then((response) => console.log("Created Resource:", response))
    .catch((error) => console.log("Created Resource:", error));

  // Updating a resource
  axios
    .put("https://jsonplaceholder.typicode.com/posts/1", {
      id: 1,
      title: "new title",
      body: "new body",
    })
    .then((response) => console.log("Updated Resource:", response))
    .catch((error) => console.log("Updated Resource:", error));

  // Patching part of a resource
  axios
    .patch("https://jsonplaceholder.typicode.com/posts/1", {
      title: "an even newer title",
    })
    .then((response) => console.log("Patched Resource:", response))
    .catch((error) => console.log("Patched Resource:", error));

  // Deleting a resource
  axios
    .delete("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => console.log("Deleted Resource:", response))
    .catch((error) => console.log("Deleted Resource:", error));

  // Filtering resources
  axios
    .get("https://jsonplaceholder.typicode.com/posts/?userId=1")
    .then((response) => console.log("Filtered Resource:", response))
    .catch((error) => console.log("Filtered Resource:", error));

  // Getting nested resources
  axios
    .get("https://jsonplaceholder.typicode.com/posts/1/comments")
    .then((response) => console.log("Nested Resource:", response))
    .catch((error) => console.log("Nested Resource:", error));

  return (
    <div className="App">
      <h1>React</h1>
    </div>
  );
}

export default App;
