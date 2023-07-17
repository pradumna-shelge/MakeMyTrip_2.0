-- Create database MakeMyTrip
--CREATE DATABASE MakeMyTrip1;
--USE MakeMyTrip1;

-- Role Table
CREATE TABLE Roles (
    RoleId INT PRIMARY KEY IDENTITY(1,1),
    RoleName NVARCHAR(50)
);

INSERT INTO Roles (RoleName) VALUES
    ('Admin'),
    ('User'),
    ('Airline');

-- PassengerType Table
CREATE TABLE PassengerType (
    PassengerTypeId INT PRIMARY KEY IDENTITY(1,1),
    PassengerType NVARCHAR(50)
);

INSERT INTO PassengerType (PassengerType) VALUES
    ('Adult'),
    ('Child'),
    ('Infant');

-- User Table
CREATE TABLE Users (
    UserId INT PRIMARY KEY IDENTITY(1,1),
    FullName NVARCHAR(50) NOT NULL,
    Gender NVARCHAR(20),
    MaritalStatus BIT,
    ImageUrl NVARCHAR(50),
    UserEmail NVARCHAR(100),
    PhoneNumber NVARCHAR(10) CHECK (PhoneNumber LIKE '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
    [Password] NVARCHAR(MAX),
    LastLoginDate DATETIME,
    CreatedId INT REFERENCES Users(UserId),
    CreatedDate DATETIME,
    LastModificationId INT REFERENCES Users(UserId),
    LastModificationDate DATETIME,
    UserOtp INT,
    OtpTime DATETIME,
    RoleId INT REFERENCES Roles(RoleId)
);

INSERT INTO Users (FullName) VALUES ('Admin');

-- Airline Table
CREATE TABLE Airline (
    AirlineId INT PRIMARY KEY IDENTITY(1,1),
    AirlineName NVARCHAR(50),
    AirlineCode NVARCHAR(10),
    AirlineLogo NVARCHAR(MAX),
    CreatedId INT REFERENCES Users(UserId),
    CreatedDate DATETIME,
    LastModificationId INT REFERENCES Users(UserId),
    LastModificationDate DATETIME
);

INSERT INTO Airline (AirlineName, AirlineCode, AirlineLogo, CreatedId, CreatedDate)
VALUES
    ('Air India', 'AI', 'https://aws-day1-practice4.s3.ap-south-1.amazonaws.com/img/AirAsia.png', 1, '2023-07-17 02:45:32'),
    ('Indigo', '6E', 'https://aws-day1-practice4.s3.ap-south-1.amazonaws.com/img/indigo.png', 1, '2023-07-17 02:45:32'),
    ('SpiceJet', 'SG', 'https://aws-day1-practice4.s3.ap-south-1.amazonaws.com/img/SpiceJet.png', 1, '2023-07-17 02:45:32'),
    ('Vistara', 'VT', 'https://aws-day1-practice4.s3.ap-south-1.amazonaws.com/img/vistara.jpg', 1, '2023-07-17 02:45:32'),
    ('AirAsia India', 'I5', 'https://aws-day1-practice4.s3.ap-south-1.amazonaws.com/img/AirAsia.png', 1, '2023-07-17 02:45:32');

-- LocationData Table
CREATE TABLE LocationData (
    LocationId INT PRIMARY KEY,
    LocationName NVARCHAR(50),
    CountryId INT REFERENCES LocationData(LocationId),
    CreatedId INT REFERENCES Users(UserId),
    CreatedDate DATETIME,
    LastModificationId INT REFERENCES Users(UserId),
    LastModificationDate DATETIME
);

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
    (16, 'Amritsar', 1, GETDATE(), 1, GETDATE(), 1);

-- AirportData Table
CREATE TABLE AirportData (
    AirportId INT PRIMARY KEY,
    AirportName NVARCHAR(50),
    AirportCode NVARCHAR(50),
    AddressId INT REFERENCES LocationData(LocationId),
    CreatedDate DATETIME,
    CreatedId INT REFERENCES Users(UserId),
    LastModificationDate DATETIME,
    LastModificationId INT REFERENCES Users(UserId)
);

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
    (10, 'Chaudhary Charan Singh International Airport', 'LKO', 11, GETDATE(), 1, GETDATE(), 1);

-- SeatClassType Table
CREATE TABLE SeatClassType (
    SeatClassId INT PRIMARY KEY IDENTITY(1,1),
    SeatClassName NVARCHAR(50),
    CreatedDate DATETIME,
    CreatedId INT REFERENCES Users(UserId),
    LastModificationDate DATETIME,
    LastModificationId INT REFERENCES Users(UserId)
);

INSERT INTO SeatClassType (SeatClassName, CreatedDate, CreatedId, LastModificationDate, LastModificationId)
VALUES
    ('EconomyClass', GETDATE(), 1, GETDATE(), 1),
    ('BusinessClass', GETDATE(), 1, GETDATE(), 1),
    ('FirstClass', GETDATE(), 1, GETDATE(), 1);

-- SeatLocation Table
CREATE TABLE SeatLocation (
    SeatTypeId INT PRIMARY KEY IDENTITY(1,1),
    SeatTypeName NVARCHAR(50),
    ClassType INT REFERENCES SeatClassType(SeatClassId),
    CreatedDate DATETIME,
    CreatedId INT REFERENCES Users(UserId),
    LastModificationDate DATETIME,
    LastModificationId INT REFERENCES Users(UserId)
);

INSERT INTO SeatLocation (SeatTypeName, ClassType, CreatedDate, CreatedId, LastModificationDate, LastModificationId)
VALUES
    ('Window Seat', 1, GETDATE(), 1, GETDATE(), 1),
    ('Aisle Seat', 1, GETDATE(), 1, GETDATE(), 1),
    ('Bulkhead Seat', 1, GETDATE(), 1, GETDATE(), 1);

-- FlightclassStructure Table
CREATE TABLE FlightclassStructure (
    FlightclassStructureId INT PRIMARY KEY IDENTITY(1,1),
    SeatClassId INT REFERENCES SeatClassType(SeatClassId),
    RowsStart INT,
    RowsEnd INT,
    ColumnsStart VARCHAR(1),
    ColumnsEnd VARCHAR(1),
    CreatedDate DATETIME,
    CreatedId INT REFERENCES Users(UserId),
    LastModificationDate DATETIME,
    LastModificationId INT REFERENCES Users(UserId)
);

INSERT INTO FlightclassStructure (SeatClassId, RowsStart, RowsEnd, ColumnsStart, ColumnsEnd, CreatedDate, CreatedId, LastModificationDate, LastModificationId)
VALUES
    (1, 1, 10, 'A', 'F', GETDATE(), 1, GETDATE(), 1),
    (2, 11, 20, 'A', 'F', GETDATE(), 1, GETDATE(), 1),
    (3, 21, 30, 'A', 'F', GETDATE(), 1, GETDATE(), 1);

-- Flight Table
CREATE TABLE Flight (
    FlightId INT PRIMARY KEY IDENTITY(1,1),
    FlightNo NVARCHAR(30) NOT NULL,
    AirlineId INT REFERENCES Airline(AirlineId),
    EconomyClass INT REFERENCES FlightclassStructure(FlightclassStructureId),
    FirstClass INT REFERENCES FlightclassStructure(FlightclassStructureId),
    BusinessClass INT REFERENCES FlightclassStructure(FlightclassStructureId),
    CreatedDate DATETIME,
    CreatedId INT REFERENCES Users(UserId),
    LastModificationDate DATETIME,
    LastModificationId INT REFERENCES Users(UserId)
);

INSERT INTO Flight (FlightNo, AirlineId, EconomyClass, FirstClass, CreatedDate, CreatedId)
VALUES
    ('AI101', 1, 1, 2, GETDATE(), 1),
    ('AI102', 1, 1, 2, GETDATE(), 1),
    ('SG101', 1, 1, 2, GETDATE(), 1),
    ('SG102', 1, 1, 2, GETDATE(), 1),
    ('VT101', 1, 1, 2, GETDATE(), 1),
    ('VT101', 1, 1, 2, GETDATE(), 1);

-- JourneyClassPrice Table
CREATE TABLE JourneyClassPrice (
    JourneyClassPriceId INT PRIMARY KEY IDENTITY(1,1),
    JourneyClassType INT REFERENCES SeatClassType(SeatClassId),
    Percentage INT
);

INSERT INTO JourneyClassPrice (JourneyClassType, Percentage)
VALUES
    (1, 100),
    (2, 350);

-- PassengerOffer Table
CREATE TABLE PassengerOffer (
    PassengerOfferId INT PRIMARY KEY IDENTITY(1,1),
    PassengerType INT REFERENCES PassengerType(PassengerTypeId),
    Percentage INT
);

INSERT INTO PassengerOffer (PassengerType, Percentage)
VALUES
    (1, 0),
    (2, 0),
    (3, 50);

-- Journey Table
CREATE TABLE Journey (
    JourneyId INT PRIMARY KEY IDENTITY(1,1),
    FlightId INT REFERENCES Flight(FlightId),
    DestinationId INT REFERENCES AirportData(AirportId),
    SourceId INT REFERENCES AirportData(AirportId),
    DepartureTime DATETIME,
    ArrivalTime DATETIME,
    Distance INT,
    SeatBasicPrice DECIMAL(10, 2),
    EconomyClass INT REFERENCES JourneyClassPrice(JourneyClassPriceId),
    FirstClass INT REFERENCES JourneyClassPrice(JourneyClassPriceId),
    BusinessClass INT REFERENCES JourneyClassPrice(JourneyClassPriceId),
    Adult INT REFERENCES PassengerOffer(PassengerOfferId),
    Child INT REFERENCES PassengerOffer(PassengerOfferId),
    Infants INT REFERENCES PassengerOffer(PassengerOfferId)
);

INSERT INTO Journey (FlightId, DestinationId, SourceId, DepartureTime, ArrivalTime, Distance, SeatBasicPrice, EconomyClass, BusinessClass, Adult, Child, Infants)
VALUES
    (1, 8, 2, '2023-08-01 10:00:00', '2023-08-01 11:30:00', 150, 2500.00, 1, 2, 1, 2, 3);

-- Booking Table
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

-- Passenger Table
CREATE TABLE Passenger (
    PassengerId INT PRIMARY KEY IDENTITY(1,1),
    BookingId INT REFERENCES Booking(BookingId),
    FullName NVARCHAR(50) NOT NULL,
    Age INT,
    Gender NVARCHAR(20),
    SeatNumber NVARCHAR(10) NOT NULL,
    SeatTypeId INT REFERENCES SeatLocation(SeatTypeId),
    PassengerTypeId INT REFERENCES PassengerType(PassengerTypeId),
    CreatedDate DATETIME,
    CreatedId INT REFERENCES Users(UserId),
    LastModificationDate DATETIME,
    LastModificationId INT REFERENCES Users(UserId)
);
