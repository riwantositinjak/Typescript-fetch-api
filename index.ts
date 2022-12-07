import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1"

axios.get(url).then(response => {
    const Todo = response.data;
    const ID = Todo.ID;
    const title = Todo.Title;
    const finished = Todo.finished;

    console.log(`
    The id is : ${ID}
    and The Title is : ${title}
    and is it completed : ${finished} 
    `)
})
