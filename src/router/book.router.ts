import { BookController } from "../module/books/book.controller";
const router = require('./router');

export class BookRouter{
    private bookController: BookController;
    constructor(){
        this.bookController = new BookController();
    }

    public initRouter(){
        router.register('GET/books', (req, res) => this.bookController.getAllBooks(req, res));
        router.register('POST/book', (req, res) => this.bookController.addBook(req, res));
        router.register('DELETE/book', (req, res) => this.bookController.deleteBook(req, res));
    }
}