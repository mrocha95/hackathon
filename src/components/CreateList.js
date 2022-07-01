import React from "react";

function CreateList() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [difficulty, setDifficulty] = React.useState(0);
  const [list, setList] = React.useState([])


  const addToArr = () => {
    setList(list.concat({    
    "title": title, 
    "description": description, 
    "difficulty": difficulty}))
  }

  const remove = (element) => {
    let newList = [...list]
    console.log(newList.indexOf(element))

    newList.splice(newList.indexOf(element))
    setList(newList)
  }

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

      <button onClick={addToArr}>Submit</button>

      <ul>
        {list.map(function(el){
          return( 
            <div>
              <li>{el.title}</li>
              <li>{el.description}</li>
              <li>{el.difficulty}</li>
              <button onClick={() => remove(el)}>remove</button>
            </div>

          )})}
      </ul>
    </div>
  );
}

export default CreateList;
