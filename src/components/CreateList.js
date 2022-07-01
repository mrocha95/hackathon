import React from "react";

function CreateList() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [difficulty, setDifficulty] = React.useState(0);

  const number = () => {
    if (title && description && difficulty < 10) {
      setTitle("");
      setDescription("");
      setDifficulty("");
    }
  };

  return (
    <div>
      <h1>Create Your List</h1>
      <h3>Title:</h3>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <h3>Description</h3>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <h3>Difficulty</h3>
      <input
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      ></input>
      <div>
        <button onClick={number}>Create</button>
      </div>
    </div>
  );
}

export default CreateList;
