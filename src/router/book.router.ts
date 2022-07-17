import { BookController } from "../module/books/book.controller";
const router = require('./router');

export class BookRouter{
    private bookController: BookController;
    constructor(){
        this.bookController = new BookController();
    }

    public initRouter(){
        router.register('GET/book', (req,res) => this.bookController.getAllBooks(req, res));
    }

}