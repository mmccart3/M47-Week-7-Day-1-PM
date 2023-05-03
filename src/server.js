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

app.get("/book", (request, response) => {

    const successResponse = {
        message: "Books succesfully retrieved",
        book: books
    }

    response.send(successResponse)
})

app.post("/book", (request, response) => {

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

app.put("/book", (request, response ) => {
    function findBook(x) {
        return x.title === request.body.title;
    }
    const index = books.findIndex(findBook);

    if (index!==-1) {
        if (request.body.author) {
            books[index].author = request.body.author;
        }
        if (request.body.genre) {
            books[index].genre = request.body.genre;
        }
        const successResponse = {
            message: "Book succesfully updated"
        }
    
        response.send(successResponse)
    } else {
        const failureResponse = {
            message: "Book not found",
            book: request.body.title
        }
            response.status(404).send(failureResponse)
    }


})

app.delete("/book", (request, response) => {
    function findBook(x) {
        return x.title === request.body.title;
    }
    const index = books.findIndex(findBook);

    books.splice(index,1);

    if (index !== -1) {
        const successResponse = {
            message: "Book succesfully deleted",
            book: request.body.title
        }
    
        response.send(successResponse)
    }
    else {
        const failureResponse = {
            message: "Book not found",
            book: request.body.title
        }
            response.status(404).send(failureResponse)
    }


})

app.listen(5001, () => console.log("server is listening on port 5001"))