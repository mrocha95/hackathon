import React from "react";

function CreateList() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [difficulty, setDifficulty] = React.useState("");

  const [list, setList] = React.useState([]);

  const addToArr = () => {
    if (title && description && difficulty < 10 && difficulty > 0) {
      setList(
        list.concat({
          title: title,
          description: description,
          difficulty: difficulty,
        })
      );
      setTitle("");
      setDescription("");
      setDifficulty("");
    } else {
      console.log("please fill in the values");
    }
  };

  const remove = (element) => {
    let newList = [...list];
    console.log(newList.indexOf(element));

    newList.splice(newList.indexOf(element));
    setList(newList);
  };

  const number = () => {
    if (title && description && difficulty < 10) {
      setTitle("");
      setDescription("");
      setDifficulty("");
    }
  };

  return (
    <div className="name">
      <section className="list">
        <h1>Create Your List</h1>
        <h3>Title:</h3>
        <input
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <h3>Description</h3>
        <input
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <h3>Difficulty</h3>
        <input
          value={difficulty}
          placeholder="Between 1 and 10"
          onChange={(e) => setDifficulty(e.target.value)}
        ></input>

        <button onClick={addToArr}>Submit</button>
      </section>
      <section className="list">
        <ul>
          {list.map(function (el) {
            return (
              <div>
                <li>{el.title}</li>
                <li>{el.description}</li>
                <li>{el.difficulty}</li>
                <button onClick={() => remove(el)}>remove</button>
              </div>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default CreateList;
