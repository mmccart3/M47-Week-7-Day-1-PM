const express = require("express");
const app = express();

const books = [];
book_id = 1;

const firstBook = {
    id: book_id,
    title: "LOTR",
    author: "Tolkein",
    genre: "Adventure"
}

books.push(firstBook);
book_id += 1;

app.use(express.json());

app.get("/book", (request,response) => {
    // const book = {
    //     title: "LOTR",
    //     author: "Tolkein",
    //     genre: "Fantasy"
    // }
    
    const successResponse = {
        message: "Books succesfully retrieved",
        book: books
    }

    response.send(successResponse)
})

app.post("/book",(request,response) => {
    // console.log(request.body);

    const newBook = {
        id: book_id,
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre
    }

    books.push(newBook);
    book_id += 1;

    const successResponse = {
        message: "Book succesfully added",
        book: newBook
    }

    response.send(successResponse)
})

app.put("/book", (request,response => {
    function findBook(x) {
        return x.title === request.body.title;
      }
      const index = books.findIndex(findBook);
}))

app.delete("/book", (request,response =>{

}))

app.listen(5001, () => console.log("server is listening on port 5001"))