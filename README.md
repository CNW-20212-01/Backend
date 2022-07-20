# setup
    ## install nodejs.
    ## install mysql.
    ## config file .env.


# how to run
## step 1: install node_modules

> npm install
## step2: run

> npm run dev



# Api 
## book
### POST/auth
    body request ex: 
        {
            "email": "admin@gmail.com",
            "password": "admin"
        }
    return access token


### GET/books: get all book

### GET/book: get book by id
    body request ex:
        {
            "book_id": "4b842c0a-fcda-49d7-8a52-8f8757d42cb3"
        }
### POST/book: register book
    + authorization ( add bearer token )
    body request ex: 
    {
        "book_name": "test1",
        "genre": "asdf",
        "author_name": "asdf",
        "price": 5000,
        "pages": 213,
        "publisher": "nguyan thai",
        "publishing_year": 2020,
        "purchased": 12,
        "intro": "asdasdf",
        "image": "as"
    }
### DELETE/book
    + authorization ( add bearer token )
    body request ex: 
    {
        "book_id": "id1",
    }

### POST/book/update: update book
     + authorization ( add bearer token )
    body request ex: 
    {   
        "book_id": "id_book",
        "book_name": "test1",
        "genre": "asdf",
        "author_name": "asdf",
        "price": 5000,
        "pages": 213,
        "publisher": "nguyan thai",
        "publishing_year": 2020,
        "purchased": 12,
        "intro": "asdasdf",
        "image": "as"
    }


## BILL API

### GET/bills
    + authorization ( add bearer token )
### POST/bill
    + authorization ( add bearer token )
    body request ex:
    {
        "phone_number": "1233",
        "name": "string",
        "total_money": 1234,
        "address": "address",
        "bookList": [
            {
                "book_id": "asdf",
                "quantity": 3
            },
            {
                "book_id": "asdfa",
                "quantity": 3
            }
        ]
    }