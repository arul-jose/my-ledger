INSERT INTO USER_ROLES ("name","description" )
VALUES
('SYSTEM','System Role'),
('ADMIN','Admin Role'),
('USER','Application User Role');

INSERT INTO USERS (firstname,lastname,user_role_id ,email,crt_userid,upd_userid )
VALUES
('SYSTEM','system',1,'system@gmail.com',1,1),
('ADMIN1','admin1',2,'admin1@gmail.com',1,1),
('ADMIN2','admin2',2,'admin2@gmail.com',1,1),
('arul','jose',3,'aruljose@gmail.com',1,1),
('allan','valooran',3,'allanvalooran@gmail.com',1,1);

INSERT INTO TYPES ("name",crt_userid,upd_userid )
VALUES
('Expense',1,1),
('Savings',1,1),
('Income',1,1),
('Investment',1,1);

INSERT INTO SUBTYPES ("name",type_id, crt_userid,upd_userid )
VALUES
('Food',1,1,1),
('Grocery',1,1,1),
('FD',2,1,1),
('Mutual Fund',4,1,1);

INSERT INTO EXPENSES (ts,subtype_id,amount, "description", crt_userid,upd_userid )
VALUES
('2024-7-16 1:00:00',1,200,'dummy text',1,1),
('2024-7-16 1:00:00',2,360,'dummy text',1,1),
('2024-7-16 1:00:00',3,10000,'dummy text',1,1),
('2024-7-16 1:00:00',4,5000,'dummy text',1,1);