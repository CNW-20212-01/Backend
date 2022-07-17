import { Authorization } from "../auth/authorization/authorization";
import { BookService } from "./book.service";

export class BookController{
    private bookService: BookService;
    private authorService: Authorization;

    constructor(){
        this.bookService = new BookService();
        this.authorService = new Authorization();
    }

    public getAllBooks(req, res){
        if(!this.authorService.check(req, res)){
            return;
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(
            this.bookService.getAllBooks()
        ));
    }
}