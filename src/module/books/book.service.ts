import { QueryTypes } from "sequelize";
import { dbConnection } from "../../db/model";
import { BookDto } from "./book.dto";
import { v4 as uuidv4} from "uuid";

export class BookService {
    public async getAllBooks(){
        const book = await dbConnection.query("SELECT * FROM `book` limit 30", { type: QueryTypes.SELECT });
        return book;
    }

    public async getBookById(book_id: string){
        const result = await dbConnection.query("Select * FROM `book` WHERE (`book_id` = '"+ book_id +"')", {type: QueryTypes.SELECT});
        return result
    }

    public async addBook(book: BookDto){
        book.book_id = uuidv4();
        const sql = 
            "INSERT INTO `cnw_websellbook`.`book` (`book_id`, `Book_name`, `genre`, `author_name`, `price`, `pages`, `publisher`, `publishing_year`, `purchased`, `intro`, `image`)" +
            "VALUES ('"+ book.book_id +"', '"+ book.book_name +"', '"+ book.genre +"', '"+ book.author_name +"', '"+ book.price +"', '"+ book.pages +"', '"+ book.publisher +"', '"+ book.publishing_year +"', '"+ book.purchased +"', '"+ book.intro +"', '"+ book.image +"')"
        const bookRes = await dbConnection.query(sql, {type: QueryTypes.INSERT})
        return bookRes;

    }

    public async deleteBook(book_id: string){
        const checkBookId = await this.checkBookId(book_id);
        
        if(checkBookId){
            await dbConnection.query("DELETE FROM `cnw_websellbook`.`book` WHERE (`book_id` = '"+ book_id +"')", {type: QueryTypes.DELETE})
            return true
        }
        return false;
    }

    public async updateBook(book: BookDto){
        const checkBookId = await this.checkBookId(book.book_id);
        if(checkBookId){
            const sql = 
            " UPDATE `cnw_websellbook`.`book` SET " + 
            "`Book_name` = '" + book.book_name +"', `genre` = '" + book.genre +"', `author_name` = '" + book.author_name +"', `price` = '" + book.price +"', `pages` = '" + book.pages +"', `publisher` = '" + book.publisher + 
            "', `publishing_year` = '" + book.publishing_year +"', `purchased` = '" + book.purchased +"', `intro` = '" + book.intro +"', `image` = '" + book.image +"' WHERE (`book_id` = '" + book.book_id +"');"

            const result = dbConnection.query(sql, {type: QueryTypes.UPDATE});
            console.log(result)
            return result;
        }
        return false;
    }

    private async checkBookId(book_id: string){
        const result = await dbConnection.query("Select * FROM `cnw_websellbook`.`book` WHERE (`book_id` = '"+ book_id +"')", {type: QueryTypes.SELECT});
        return result.length > 0
    }

}