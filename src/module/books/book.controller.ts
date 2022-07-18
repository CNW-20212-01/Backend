import { Authorization } from "../auth/authorization/authorization";
import { BookDto } from "./book.dto";
import { BookService } from "./book.service";

export class BookController{
    private bookService: BookService;
    private authorService: Authorization;

    constructor(){
        this.bookService = new BookService();
        this.authorService = new Authorization();
    }

    // GET/books
    public async getAllBooks(req, res){
      
        try {
            const books = await this.bookService.getAllBooks();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(
                books
            ));
        } catch (error) {
            console.log(error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                error: "internal server error"
            }));
        }
      
    }

    // POST/book
    public async addBook(req, res){
        if(!this.authorService.check(req, res)){
            return;
        }
        let book: BookDto = req.body;

        if(Object.keys(book).length === 0){
            res.writeHead(422, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                error: "body request invalid "
            }));
        }
           
        try {
            const bookRes = await this.bookService.addBook(book)
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                message: "add book success"
            }));
        } catch (error) {
            console.log(error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                error: "internal server error"
            }));
        }
    }

    // DELETE/book
    public async deleteBook(req, res){
        if(!this.authorService.check(req, res)){
            return;
        }
        const book_id = req.body.book_id;
        console.log(book_id);
        try {
            const result = await this.bookService.deleteBook(book_id);
            if(result){
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    message: "delete book success"
                }));
            }
            else{
                res.writeHead(422, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    message: "book_id invalid"
                }));
            }
        } catch (error) {
            console.log(error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                error: "internal server error"
            }));
        }
    }

}