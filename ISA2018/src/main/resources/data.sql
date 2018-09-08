insert into cinema_theater(address,description,entity_rate,is_cinema,name) values ('Bul.Mihajla Pupina 18', '/', 1,true,'Arena cineplex');
insert into cinema_theater(address,description,entity_rate,is_cinema,name) values (' Zmaj Jovina 9', '/', 2,false,'Srpsko narodno pozoriste');
insert into cinema_theater(address,description,entity_rate,is_cinema,name) values ('marsala tita 12', '/', 3,false,'pozoriste mladih');
insert into cinema_theater(address,description,entity_rate,is_cinema,name) values ('kralja milana 50', '/', 3,false,'jugoslovensko dramsko pozoriste');
insert into cinema_theater(address,description,entity_rate,is_cinema,name) values ('crveni krst', '/', 3,false,'beogradsko dramsko pozoriste');
insert into cinema_theater(address,description,entity_rate,is_cinema,name) values ('sabacka 16', '/', 3,false,'sabacko pozoriste');
insert into cinema_theater(address,description,entity_rate,is_cinema,name) values ('bulevar mihajla pupina 221', '/', 1,true,'usce cineplex');
insert into cinema_theater(address,description,entity_rate,is_cinema,name) values ('jurija gagarina 13', '/', 1,true,'delta city cineplex');
insert into cinema_theater(address,description,entity_rate,is_cinema,name) values ('Bul.kraljice Marije', '/', 1,true,' cineplex kragujevac plaza');
insert into cinema_theater(address,description,entity_rate,is_cinema,name) values ('Bul.Knjaza Milosa 20', '/', 1,true,'Bioskop pozega');

insert into user(city,email,name,password,phone,surname,role) values ('Belgrade','admin@gmail.com','admin','admin','064517282','adminic','SYSADMIN');
insert into user(city,email,name,password,phone,surname,role) values ('Belgrade','kupac@gmail.com','kupac','kupac','0637811355','kupic','CUSTOMER');
insert into user(city,email,name,password,phone,surname,role) values ('Belgrade','cintheadmin@gmail.com','cinthe','cinthe','0637811355','cinthe','CINTHEADMIN');
insert into user(city,email,name,password,phone,surname,role) values ('Belgrade','kupac1@gmail.com','kupac1','kupac','0637811355','cinthe','CUSTOMER');
insert into user(city,email,name,password,phone,surname,role) values ('Belgrade','kupac2@gmail.com','kupac2','kupac','0637811355','cinthe','CUSTOMER');
insert into user(city,email,name,password,phone,surname,role) values ('Belgrade','kupac3@gmail.com','kupac3','kupac','0637811355','cinthe','CUSTOMER');
insert into user(city,email,name,password,phone,surname,role) values ('Belgrade','kupac4@gmail.com','kupac4','kupac','0637811355','cinthe','CUSTOMER');

insert into production(name,actors,genre,name_of_director,duration,avrage_rating,description,is_movie,production_rate) values ('Interstelar','Matthew McConaughey','science-fiction','Jonathan Nolan',1.4,3,'/',true,4);
insert into production(name,actors,genre,name_of_director,duration,avrage_rating,description,is_movie,production_rate) values ('Pokondirana tikva','Hana Jovcic','komedija','Jagos Markovic',1.8,6,'/',false,4);
insert into production(name,actors,genre,name_of_director,duration,avrage_rating,description,is_movie,production_rate) values ('Na drini cuprija','Boris Bizetic','drama','Jagos Markovic',2.2,6,'/',false,3);
insert into production(name,actors,genre,name_of_director,duration,avrage_rating,description,is_movie,production_rate) values ('Krvave svadbe','lane gutovic','science-fiction','Jagos Markovic',4.2,3,'/',false,4);
insert into production(name,actors,genre,name_of_director,duration,avrage_rating,description,is_movie,production_rate) values ('Niciji sin','Manda','komedija','Jagos Markovic',3.1,2,'/',false,4);
insert into production(name,actors,genre,name_of_director,duration,avrage_rating,description,is_movie,production_rate) values ('Betmen','Matthew McConaughey','science-fiction','Jonathan Nolan',1.4,3,'/',true,4);
insert into production(name,actors,genre,name_of_director,duration,avrage_rating,description,is_movie,production_rate) values ('Gospodar prstenova','Matthew McConaughey','science-fiction','Jonathan Nolan',1.1,1,'/',true,4);
insert into production(name,actors,genre,name_of_director,duration,avrage_rating,description,is_movie,production_rate) values ('Gothic','Matthew McConaughey','science-fiction','Jonathan Nolan',2.2,5,'/',true,4);

insert into room(name,num_of_rows,num_of_sits_in_row,cinema_theater_id) values('1',5,7,10);
insert into room(name,num_of_rows,num_of_sits_in_row,cinema_theater_id) values('2',5,7,2);
insert into room(name,num_of_rows,num_of_sits_in_row,cinema_theater_id) values('3',2,9,3);
insert into room(name,num_of_rows,num_of_sits_in_row,cinema_theater_id) values('4',4,10,6);
insert into room(name,num_of_rows,num_of_sits_in_row,cinema_theater_id) values('5',2,8,5);
insert into room(name,num_of_rows,num_of_sits_in_row,cinema_theater_id) values('6',2,8,7);
insert into room(name,num_of_rows,num_of_sits_in_row,cinema_theater_id) values('7',2,8,4);
 
insert into repertoire(active,price,cinema_theater_id,room_id,production_id,time_of_display) values (true,200,1,1,1,'2018-08-25');
insert into repertoire(active,price,cinema_theater_id,room_id,production_id,time_of_display) values (true,300,2,1,5,'2018-08-26');
insert into repertoire(active,price,cinema_theater_id,room_id,production_id,time_of_display) values (true,220,3,2,4,'2018-08-26');
insert into repertoire(active,price,cinema_theater_id,room_id,production_id,time_of_display) values (true,240,4,5,6,'2018-08-26');
insert into repertoire(active,price,cinema_theater_id,room_id,production_id,time_of_display) values (true,280,4,4,7,'2018-08-26');
insert into repertoire(active,price,cinema_theater_id,room_id,production_id,time_of_display) values (true,210,6,4,3,'2018-08-26');

insert into reservation(user_id,repertoire_id,approved,sit_number,row_number,sender_id) values (2,2,true,1,3,null);
insert into reservation(user_id,repertoire_id,approved,sit_number,row_number,sender_id) values (2,2,false,2,1,1);
insert into reservation(user_id,repertoire_id,approved,sit_number,row_number,sender_id) values (3,2,false,2,2,1);
insert into reservation(user_id,repertoire_id,approved,sit_number,row_number,sender_id) values (4,2,false,2,3,1);
insert into reservation(user_id,repertoire_id,approved,sit_number,row_number,sender_id) values (5,1,false,2,1,null);
insert into reservation(user_id,repertoire_id,approved,sit_number,row_number,sender_id) values (6,3,false,2,1,null);
insert into reservation(user_id,repertoire_id,approved,sit_number,row_number,sender_id) values (7,5,false,2,1,null);
insert into reservation(user_id,repertoire_id,approved,sit_number,row_number,sender_id) values (8,5,false,2,2,7);
insert into reservation(user_id,repertoire_id,approved,sit_number,row_number,sender_id) values (9,3,true,2,1,6);
insert into reservation(user_id,repertoire_id,approved,sit_number,row_number,sender_id) values (10,6,false,2,1,null);

insert into user_friend(my_id,approved,request_sender,user_id) values (1,false,true,2);
insert into user_friend(my_id,approved,request_sender,user_id) values (2,false,false,1);
insert into user_friend(my_id,approved,request_sender,user_id) values (2,true,false,3);
insert into user_friend(my_id,approved,request_sender,user_id) values (3,true,true,2);
insert into user_friend(my_id,approved,request_sender,user_id) values (1,false,false,4);
insert into user_friend(my_id,approved,request_sender,user_id) values (4,false,true,1);
insert into user_friend(my_id,approved,request_sender,user_id) values (2,true,true,4);
insert into user_friend(my_id,approved,request_sender,user_id) values (4,true,false,2);

insert into rating(mark,cinema_theater_id,user_id) values (4,1,4);
insert into rating(mark,cinema_theater_id,user_id) values (2,5,6);
insert into rating(mark,cinema_theater_id,user_id) values (4,3,5);
insert into rating(mark,cinema_theater_id,user_id) values (5,6,6);
insert into rating(mark,cinema_theater_id,user_id) values (3,5,7);
insert into rating(mark,cinema_theater_id,user_id) values (4,2,6);
insert into rating(mark,cinema_theater_id,user_id) values (2,3,4);
insert into rating(mark,cinema_theater_id,user_id) values (4,1,5);
