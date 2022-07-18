# setup
install nodejs
install mysql
config file .env


# how to run
## step 1: install node_modules

run: npm install
## step2 2: run

run: npm run dev



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
