-- create database BookMyShow

--use BookMyShow
--use test1
--drop database BookMyShow;

create table Roles(
RoleId INT PRIMARY KEY IDENTITY(1,1),
RoleName  nvarchar(50)
)

CREATE TABLE [User] (
UserId INT PRIMARY KEY IDENTITY(1,1),
Username  nvarchar(50),
ImageUrl  nvarchar(50),
UserEmail  nvarchar(100),
UserAddress  nvarchar(100),
PhoneNumber  nvarchar(20),
CreatedDate datetime,
CreatedId  int REFERENCES [User](UserId) ,
LastLoginDate datetime,
LastModificationDate datetime,
LastModificationId int REFERENCES [User](UserId) ,
RoleId int REFERENCES Roles(RoleId),
);
-- Airline Table
CREATE TABLE Airline (
AirlineId INT PRIMARY KEY IDENTITY(1,1),
AirlineName  nvarchar(50),
CreatedDate datetime,
CreatedId int REFERENCES [User](UserId),
LastModificationDate datetime,
LastModificationId int REFERENCES [User](UserId)
);



-- City Table
CREATE TABLE LocationData (
LocationId INT PRIMARY KEY,
LocationName  nvarchar(50),
CountryId int REFERENCES LocationData(LocationId),
CreatedDate datetime,
CreatedId int REFERENCES [User](UserId),
LastModificationDate datetime,
LastModificationId int REFERENCES [User](UserId)
);



-- AirportData Table
CREATE TABLE AirportData (
AirportId INT PRIMARY KEY,
AirportName  nvarchar(50),
AirportCode  nvarchar(50),
AddressId int REFERENCES LocationData(LocationId),
CreatedDate datetime,
CreatedId int REFERENCES [User](UserId),
LastModificationDate datetime,
LastModificationId int REFERENCES [User](UserId)
);

-- Flight Table
CREATE TABLE Flight (
FlightId INT PRIMARY KEY IDENTITY(1,1),
airlineId INT,
createdDate datetime,
createdId int  ,
LastModificationDate datetime,
LastModificationId int   ,
FOREIGN KEY (airlineId) REFERENCES Airline(airlineId)
);



--);
CREATE TABLE Seat (
SeatId INT PRIMARY KEY,
[Rows] int,
[Column] nvarchar(4),
FlightId int REFERENCES Flight(FlightId),
SeatTypeId int  REFERENCES SeatType(SeatTypeId),
[Status]int REFERENCES StatusData(id),
SeatPrice DECIMAL(10, 2),
createdDate datetime,
createdId int  ,
LastModificationDate datetime,
LastModificationId int,
);

-- SeatTypePrice Table
CREATE TABLE SeatType (
SeatTypeId INT PRIMARY KEY,
SeatTypeName  nvarchar(50),
LocationId int REFERENCES SeatType(SeatTypeId)
)

 

-- Booking Table
CREATE TABLE Booking (
bookingId INT PRIMARY KEY,
userId INT REFERENCES [User](userId),
JourneyId INT,
bookingdate DATETIME,
totalprice DECIMAL(10, 2),
[Status] nvarchar(20),
FOREIGN KEY (JourneyId) REFERENCES Journey(journeyId),
createdDate datetime,
createdId int  ,
LastModificationDate datetime,
LastModificationId int   ,
Booking[Status]int REFERENCES StatusData(id)

);



create table StatusData(
id INT PRIMARY KEY IDENTITY(1,1),
statusval  nvarchar(50),
statusFor int REFERENCES StatusData(id),
createdDate datetime,
createdId int  ,
LastModificationDate datetime,
LastModificationId int ,
)


-- Passenger Table
CREATE TABLE Passenger (
passengerId INT PRIMARY KEY,
seattypeId int REFERENCES SeatType(id),
bookingId INT,
seatRow int,
seatCol  nvarchar(5),
name  nvarchar(50),
age INT,
gender  nvarchar(50),
Identificationcode  nvarchar(50),
FOREIGN KEY (bookingId) REFERENCES Booking(bookingId),
createdDate datetime,
createdId int  ,
LastModificationDate datetime,
LastModificationId int   ,
)

create TABLE  ExtraCharge(
id INT PRIMARY KEY IDENTITY(1,1), 
ExtraChargeType  nvarchar(50),
amount DECIMAL(10, 2),
seatRow int,
seatCol  nvarchar(5),
FlightId int REFERENCES Flight(FlightId),
createdDate datetime,
createdId int  ,
LastModificationDate datetime,
LastModificationId int   ,
)

--create TABLE  PassengerType(
--id INT PRIMARY KEY IDENTITY(1,1), 
--PassengerType  nvarchar(50),
--discount DECIMAL(10, 2),
--FlightId int REFERENCES Flight(FlightId),
--createdDate datetime,
--createdId int,
--LastModificationDate datetime,
--LastModificationId datetime
--)

CREATE TABLE Payment(
paymentId INT PRIMARY KEY,
bookingId INT,
paymentdate DATETIME,
amount DECIMAL(10, 2),
paymentmethod  nvarchar(50),
FOREIGN KEY (bookingId) REFERENCES Booking(bookingId),
statusFor int REFERENCES StatusData(id)

);

-- Journey Table
CREATE TABLE Journey (
journeyId INT PRIMARY KEY,
FlightId INT,
arrivaltime datetime,
departuretime datetime,
destinationId int REFERENCES AirportData(AirportId),
sourceId int REFERENCES AirportData(AirportId),
createdDate datetime,
createdId int  ,
LastModificationDate datetime,
LastModificationId int   ,
FOREIGN KEY (FlightId) REFERENCES Flight(FlightId),
statusFor int REFERENCES StatusData(id),
SeatbasicPrice DECIMAL(10, 2),
);

create table Journeyschema(
JourneyschemaId int primary key,
windowSaet int ,
middleSeat int,
aisle_seat int,
child int,
journeyId int REFERENCES Journey(journeyId),
CreatedDate datetime,
CreatedId int REFERENCES [User](UserId),
LastModificationDate datetime,
LastModificationId int REFERENCES [User](UserId)
)


