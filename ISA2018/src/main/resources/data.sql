insert into cinema_theater(address,description,entity_rate,is_cinema,name) values ('Bul.Mihajla Pupina 18', '/', 1,true,'Arena cineplex');
insert into cinema_theater(address,description,entity_rate,is_cinema,name) values (' Zmaj Jovina 9', '/', 2,false,'Srpsko narodno pozoriste');

insert into user(city,email,name,password,phone,surname,role) values ('Belgrade','admin@gmail.com','admin','admin','064517282','adminic','SYSADMIN');
insert into user(city,email,name,password,phone,surname,role) values ('Belgrade','kupac@gmail.com','kupac','kupac','0637811355','kupic','CUSTOMER');
insert into user(city,email,name,password,phone,surname,role) values ('Belgrade','cintheadmin@gmail.com','cinthe','cinthe','0637811355','cinthe','CINTHEADMIN');

insert into production(name,actors,genre,name_of_director,duration,avrage_rating,description,is_movie,production_rate) values ('Interstelar','Matthew McConaughey','science-fiction','Jonathan Nolan',1.4,4,'/',true,4);
insert into production(name,actors,genre,name_of_director,duration,avrage_rating,description,is_movie,production_rate) values ('Pokondirana tikva','Hana Jovcic','science-fiction','Jagos Markovic',1.2,6,'/',false,4);

insert into user_friend(approved,request_sender,user_id,my_id) values (true,true,1,1);

insert into room(name,num_of_rows,num_of_sits_in_row,cinema_theater_id) values('1',5,10,1);
insert into room(name,num_of_rows,num_of_sits_in_row,cinema_theater_id) values('1',5,10,2);

insert into repertoire(active,price,cinema_theater_id,room_id,production_id) values (true,200,1,1,1);
insert into repertoire(active,price,cinema_theater_id,room_id,production_id) values (true,250,2,1,1);
