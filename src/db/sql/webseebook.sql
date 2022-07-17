create database websellbook;

use websellbook;
create table book (
		book_id varchar(50),
        Book_name varchar(500),
        price int,
        discount int,
        pages int,
        publisher varchar(50),
        publishing_year int,
        purchased int,
        rateturn int,
        rate float(1),
        intro varchar(5000),
        image varchar(500),
	constraint book_pk primary key (book_id));

create table author(
		author_id varchar(50),
        name varchar(30),
        intro varchar(500),
        image varchar(500),
	constraint author_pk primary key (author_id)
);

create table authorbook(
		author_id varchar(50),
        book_id varchar(50),
	constraint aubook_pk primary key (author_id, book_id),
    constraint aubook_fk1 foreign key (author_id)
							references author(author_id),
	constraint aubook_fk2 foreign key (book_id)
							references book(book_id)
);

create table genre(
		genre_id varchar(50),
        name varchar(20),
	constraint genre_pk primary key (genre_id)
);

create table genrebook(
		genre_id varchar(50),
        book_id varchar(50),
	constraint gebook_pk primary key (genre_id, book_id),
    constraint gebook_fk1 foreign key (genre_id)
							references genre (genre_id),
    constraint gebook_fk2 foreign key (book_id)
							references book (book_id)
);


create table admin(
		username varchar(50),
        password varchar(50),
	constraint admin_pk primary key (username)
);

create table user(
		username varchar(50),
        password varchar(50),
        fullname varchar(20),
        address varchar(500),
        phone char(10),
        email varchar(30),
        brithday date,
	constraint user_pk primary key (username)
);        
create table bill(
		bill_id varchar(50),
        username varchar(50),
        date_bill date,
        address varchar(500),
	constraint bill_pk primary key (bill_id),
    constraint bill_fk1 foreign key (username)
						references user (username)
);

create table bill_detail(
		bill_detail_id varchar(50),
        bill_id varchar(50),
        book_id varchar(50),
        quantity int,
	constraint bill_detail_pk primary key (bill_detail_id),
    constraint bill_detail_fk1 foreign key (bill_id)
						references bill (bill_id),
	constraint bill_detail_fk2 foreign key (book_id)
						references book (book_id)
);

create table cmt(
        book_id varchar(50),
        username varchar(50),
        date_cmt date,
        content varchar(500),
	constraint cmt_pk primary key (book_id, username, content),
    constraint cmt_fk1 foreign key (username)
						references user (username),
	constraint cmt_fk2 foreign key (book_id)
						references book (book_id)
);
        
        
        
		
		
        
        
        
        
        
        
        
        
        
        