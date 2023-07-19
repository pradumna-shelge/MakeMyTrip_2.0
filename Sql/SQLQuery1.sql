--create database MakeMyTrip
-- use MakeMyTrip
--use master
--drop database MakeMyTrip
---------------------------------------------Role Table------------------------------

create table Roles(
RoleId INT PRIMARY KEY IDENTITY(1,1),
RoleName  nvarchar(50)
)
INSERT INTO Roles values('Admin'),('user'),('Airline')
---------------------------------------------PassengerType Table------------------------------

create table PassengerType (
PassengerTypeId INT PRIMARY KEY IDENTITY(1,1),
PassengerType  nvarchar(50)
)
INSERT INTO PassengerType values('Adult'),('Child'),('Infants ')

--------------------------------------------User Table------------------------------

CREATE TABLE [Users] (
UserId INT PRIMARY KEY IDENTITY(1,1),
FullName  nvarchar(50),
Gender nvarchar(20),
MaritalStatus bit,
ImageUrl  nvarchar(50),
UserEmail  nvarchar(100),
PhoneNumber  nvarchar(10) constraint CK_MyTable_PhoneNumber check (PhoneNumber like '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
[Password] nvarchar(max),
LastLoginDate datetime,
CreatedId  int REFERENCES [Users](UserId) ,
CreatedDate datetime,
LastModificationId int REFERENCES [Users](UserId) ,
LastModificationDate datetime,
UserOtp int,
OtpTime datetime,
RoleId int REFERENCES Roles(RoleId),
);

insert into Users (FullName) values('Admin')

-----------------------------------------------Airline Table------------------------------

CREATE TABLE Airline (
AirlineId INT PRIMARY KEY IDENTITY(1,1),
AirlineName  nvarchar(50),
AirlineCode  nvarchar(10),
AirlineLogo nvarchar(max),
CreatedId  int REFERENCES [Users](UserId) ,
CreatedDate datetime,
LastModificationId int REFERENCES [Users](UserId) ,
LastModificationDate datetime,
);

INSERT INTO Airline (AirlineName, AirlineCode, AirlineLogo, CreatedId, CreatedDate)
VALUES
('Air India', 'AI', 'https://aws-day1-practice4.s3.ap-south-1.amazonaws.com/img/AirAsia.png', 1, '2023-07-17 02:45:32'),
('Indigo', '6E', 'https://aws-day1-practice4.s3.ap-south-1.amazonaws.com/img/indigo.png', 1, '2023-07-17 02:45:32'),
('SpiceJet', 'SG', 'https://aws-day1-practice4.s3.ap-south-1.amazonaws.com/img/SpiceJet.png', 1, '2023-07-17 02:45:32'),
('Vistara', 'VT', 'https://aws-day1-practice4.s3.ap-south-1.amazonaws.com/img/vistara.jpg', 1, '2023-07-17 02:45:32'),
('AirAsia India', 'I5', 'https://aws-day1-practice4.s3.ap-south-1.amazonaws.com/img/AirAsia.png', 1, '2023-07-17 02:45:32');

--------------------------------------------Location Data-------------------------------------

CREATE TABLE LocationData (
LocationId INT PRIMARY KEY,
LocationName  nvarchar(50),
CountryId int REFERENCES LocationData(LocationId),
CreatedId  int REFERENCES [Users](UserId) ,
CreatedDate datetime,
LastModificationId int REFERENCES [Users](UserId) ,
LastModificationDate datetime,
);
--drop table LocationData
INSERT INTO LocationData (LocationId, LocationName, CountryId, CreatedDate, CreatedId, LastModificationDate, LastModificationId)
VALUES
(1, 'India', NULL, GETDATE(), 1, GETDATE(), 1),
(2, 'Delhi', 1, GETDATE(), 1, GETDATE(), 1),
(3, 'Bangalore', 1, GETDATE(), 1, GETDATE(), 1),
(4, 'Chennai', 1, GETDATE(), 1, GETDATE(), 1),
(5, 'Kolkata', 1, GETDATE(), 1, GETDATE(), 1),
(6, 'Hyderabad', 1, GETDATE(), 1, GETDATE(), 1),
(7, 'Ahmedabad', 1, GETDATE(), 1, GETDATE(), 1),
(8, 'Mumbai', 1, GETDATE(), 1, GETDATE(), 1),
(9, 'Pune', 1, GETDATE(), 1, GETDATE(), 1),
(10, 'Jaipur', 1, GETDATE(), 1, GETDATE(), 1),
(11, 'Lucknow', 1, GETDATE(), 1, GETDATE(), 1),
(12, 'Kochi', 1, GETDATE(), 1, GETDATE(), 1),
(13, 'Goa', 1, GETDATE(), 1, GETDATE(), 1),
(14, 'Srinagar', 1, GETDATE(), 1, GETDATE(), 1),
(15, 'Guwahati', 1, GETDATE(), 1, GETDATE(), 1),
(16, 'Amritsar', 1, GETDATE(), 1, GETDATE(), 1)

 --------------------------------------------AirportData Table-------------------------------------

CREATE TABLE AirportData (
AirportId INT PRIMARY KEY,
AirportName  nvarchar(50),
AirportCode  nvarchar(50),
AddressId int REFERENCES LocationData(LocationId),
CreatedDate datetime,
CreatedId int REFERENCES [Users](UserId),
LastModificationDate datetime,
LastModificationId int REFERENCES [Users](UserId)
);
--drop table AirportData
INSERT INTO AirportData (AirportId, AirportName, AirportCode, AddressId, CreatedDate, CreatedId, LastModificationDate, LastModificationId)
VALUES
(1, 'Chhatrapati Shivaji Maharaj International Airport', 'BOM', 8, GETDATE(), 1, GETDATE(), 1),
(2, 'Indira Gandhi International Airport', 'DEL', 2, GETDATE(), 1, GETDATE(), 1),
(3, 'Kempegowda International Airport', 'BLR', 3, GETDATE(), 1, GETDATE(), 1),
(4, 'Chennai International Airport', 'MAA', 4, GETDATE(), 1, GETDATE(), 1),
(5, 'Netaji Subhas Chandra Bose International Airport', 'CCU', 5, GETDATE(), 1, GETDATE(), 1),
(6, 'Rajiv Gandhi International Airport', 'HYD', 6, GETDATE(), 1, GETDATE(), 1),
(7, 'Sardar Vallabhbhai Patel International Airport', 'AMD', 7, GETDATE(), 1, GETDATE(), 1),
(8, 'Pune International Airport', 'PNQ', 9, GETDATE(), 1, GETDATE(), 1),
(9, 'Jaipur International Airport', 'JAI', 10, GETDATE(), 1, GETDATE(), 1),
(10, 'Chaudhary Charan Singh International Airport', 'LKO', 11, GETDATE(), 1, GETDATE(), 1)




---------------------------------------------- SeatClass Type ---------------------------------------

CREATE TABLE SeatClassType (
SeatClassId INT PRIMARY KEY IDENTITY(1,1),
SeatClassName  nvarchar(50),
CreatedDate datetime,
CreatedId int REFERENCES [Users](UserId),
LastModificationDate datetime,
LastModificationId int REFERENCES [Users](UserId)
);
INSERT INTO SeatClassType 
VALUES
('EconomyClass',GETDATE(), 1, GETDATE(), 1),
('BusinessClass',GETDATE(), 1, GETDATE(), 1),
('FirstClass',GETDATE(), 1, GETDATE(), 1)
---------------------------------------------- SeatLocation Type -----------------------------------

CREATE TABLE SeatLocation (
SeatTypeId INT PRIMARY KEY IDENTITY(1,1),
SeatTypeName  nvarchar(50),
ClassType int REFERENCES SeatClassType(SeatClassId),
CreatedDate datetime,
CreatedId int REFERENCES [Users](UserId),
LastModificationDate datetime,
LastModificationId int REFERENCES [Users](UserId)
);
INSERT INTO SeatLocation 
VALUES
( 'Window Seat', 1,GETDATE(), 1, GETDATE(), 1),
( 'Aisle Seat', 1,GETDATE(), 1, GETDATE(), 1),
( 'Bulkhead Seat', 1,GETDATE(), 1, GETDATE(), 1)


--------------------------------------------- flight class Structure--------------------------------------
create Table FlightclassStructure(
FlightclassStructureId INT PRIMARY KEY IDENTITY(1,1),
SeatClassId INT REFERENCES SeatClassType(SeatClassId),
[RowsStart] int,
[RowsEnd] int,
[columnsStart] varchar(1),
[columnsEnd] varchar(1),
CreatedDate datetime,
CreatedId int REFERENCES [Users](UserId),
LastModificationDate datetime,
LastModificationId int REFERENCES [Users](UserId)
);
INSERT INTO FlightclassStructure 
VALUES
(1, 1, 10, 'A', 'F',GETDATE(), 1, GETDATE(), 1),
(2, 11, 20, 'A', 'F',GETDATE(), 1, GETDATE(), 1),
(3, 21, 30, 'A', 'F',GETDATE(), 1, GETDATE(), 1);
--------------------------------------------- Flight Table ------------------------------------------

CREATE TABLE Flight (
FlightId INT PRIMARY KEY IDENTITY(1,1),
FlightNo nvarchar(30),
airlineId INT REFERENCES Airline(airlineId),
EconomyClass INT REFERENCES FlightclassStructure(FlightclassStructureId),
FirstClass INT REFERENCES FlightclassStructure(FlightclassStructureId),
Businessclass INT REFERENCES FlightclassStructure(FlightclassStructureId),
CreatedDate datetime,
CreatedId int REFERENCES [Users](UserId),
LastModificationDate datetime,
LastModificationId int REFERENCES [Users](UserId)
);


INSERT INTO Flight (FlightNo, airlineId, EconomyClass, Businessclass, CreatedDate, CreatedId)
VALUES
('AI101', 1, 1, 2,  GETDATE(), 1),
('AI102', 1, 1, 2,  GETDATE(), 1),
('SG101', 1, 1, 2,  GETDATE(), 1),
('SG102', 1, 1, 2,  GETDATE(), 1),
('VT101', 1, 1, 2,  GETDATE(), 1),
('VT101', 1, 1, 2,  GETDATE(), 1)
---------------------------------------------- JourneyClassPrice Table -----------------------------

CREATE TABLE JourneyClassPrice(
JourneyClassPriceId INT PRIMARY KEY  IDENTITY(1,1),
JourneyClassType int REFERENCES SeatClassType(SeatClassId),
[Percentage] int 
)
INSERT INTO JourneyClassPrice (JourneyClassType, [Percentage])
VALUES
(1, 100),
(2, 350)

---------------------------------------------- JourneyPassengerOffer Table -----------------------------

CREATE TABLE PassengerOffer(
PassengerOfferId INT PRIMARY KEY  IDENTITY(1,1),
PassengerType int REFERENCES PassengerType(PassengerTypeId),
[Percentage] int 
)
INSERT INTO PassengerOffer 
VALUES
(1, 0),
(2, 0),
(3,50)
---------------------------------------------- Journey Table ----------------------------------
CREATE TABLE Journey(
JourneyId INT PRIMARY KEY  IDENTITY(1,1),
FlightId INT REFERENCES Flight(FlightId),
DestinationId int REFERENCES AirportData(AirportId),
SourceId int REFERENCES AirportData(AirportId),
DepartureTime datetime,
ArrivalTime datetime,
Distance int,
SeatbasicPrice DECIMAL(10, 2),
EconomyClass int REFERENCES JourneyClassPrice(JourneyClassPriceId),
FirstClass int REFERENCES JourneyClassPrice(JourneyClassPriceId),
BussinessClass int REFERENCES JourneyClassPrice(JourneyClassPriceId),
Adult int REFERENCES PassengerOffer(PassengerOfferId),
Child int REFERENCES PassengerOffer(PassengerOfferId),
Infants int REFERENCES PassengerOffer(PassengerOfferId),

);

INSERT INTO Journey (FlightId, DestinationId, SourceId, DepartureTime, ArrivalTime, Distance, SeatbasicPrice, EconomyClass, BussinessClass, Adult, Child, Infants)
VALUES
(1, 8, 2, '2023-08-1 10:00:00', '2023-08-1 11:30:00', 150, 2500.00, 1, 2, 1, 2, 3);




-------------------------------------------Booking Table------------------------------
CREATE TABLE Booking (
BookingId INT PRIMARY KEY IDENTITY(1,1),
JourneyId INT REFERENCES Journey(JourneyId),
UserId INT REFERENCES Users(UserId),
BookingDate DATETIME,
TotalFare DECIMAL(10, 2),
CreatedDate DATETIME,
CreatedId INT REFERENCES Users(UserId),
LastModificationDate DATETIME,
LastModificationId INT REFERENCES Users(UserId)
);

-------------------------------------------------- Passenger Table ------------------------

CREATE TABLE Passenger (
PassengerId INT PRIMARY KEY IDENTITY(1,1),
BookingId INT REFERENCES Booking(BookingId),
FullName NVARCHAR(50),
Age INT,
Gender NVARCHAR(20),
SeatNumber NVARCHAR(10),
SeatTypeId INT REFERENCES SeatLocation(SeatTypeId),
PassengerTypeId INT REFERENCES PassengerType(PassengerTypeId),
CreatedDate DATETIME,
CreatedId INT REFERENCES Users(UserId),
LastModificationDate DATETIME,
LastModificationId INT REFERENCES Users(UserId)
);


-------------------------------------------- Seats SP --------------------------------
go
CREATE PROCEDURE GetSeatStructureForFlight
    @FlightId INT
AS
BEGIN
    SELECT s.SeatClassId, fs.RowsStart, fs.RowsEnd, fs.columnsStart, fs.columnsEnd
    FROM Flight f
    JOIN FlightclassStructure fs ON f.EconomyClass = fs.FlightclassStructureId OR 
                                    f.Businessclass = fs.FlightclassStructureId OR 
                                    f.FirstClass = fs.FlightclassStructureId
    JOIN SeatClassType s ON fs.SeatClassId = s.SeatClassId
    WHERE f.FlightId = 1;
END;
go
