import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1"

// interfaces in typescript are used to define the structure of an object 
// inside of an interface we can freely ignore properties if we want to

interface Todo {
    id: number,
    title: string,
    completed: boolean,
}

axios.get(url).then(response => {
    const Todo = response.data as Todo; // as Todo berguna untuk auto correct dan membantu developer dalam mengoreksi code
    const ID = Todo.id;
    const title = Todo.title;
    const finished = Todo.completed;

    console.log(logTodo(ID, title, finished))
})

const logTodo = (ID : number, title : string, finished : boolean) => {
    console.log(` 
    The id is : ${ID}
    and The Title is : ${title}
    and is it completed : ${finished} 
    `)
}

// disini urutan dalam argument dalam typescript sangat penting, maka dari itu tiap argumen perlu diberikan type datanya 
