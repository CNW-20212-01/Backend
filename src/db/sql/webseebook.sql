create database cnw_websellbook;

use cnw_websellbook;
create table book (
		book_id varchar(50),
        Book_name varchar(500),
        genre varchar(50),
        author_name varchar(50),
        price int,
        pages int,
        publisher varchar(50),
        publishing_year int,
        purchased int,
        intro varchar(5000),
        image varchar(500),
	constraint book_pk primary key (book_id));


create table admin(
        email varchar(50),
        password varchar(500),
	constraint admin_pk primary key (email)
);

      
create table bill(
		bill_id varchar(50),
        date_bill date,
        address varchar(500),
	constraint bill_pk primary key (bill_id)
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