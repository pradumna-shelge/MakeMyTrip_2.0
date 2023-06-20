--use BookMyShow
---locationCities

INSERT INTO LocationData (LocationId, LocationName, CountryId, CreatedDate, CreatedId, LastModificationDate, LastModificationId)
VALUES
(1, 'India', null, GETDATE(), 1, GETDATE(), 1),
(16, 'Mumbai', 1, GETDATE(), 1, GETDATE(), 1),
(2, 'Delhi', 1, GETDATE(), 1, GETDATE(), 1),
(3, 'Bangalore', 1, GETDATE(), 1, GETDATE(), 1),
(4, 'Chennai', 1, GETDATE(), 1, GETDATE(), 1),
(5, 'Kolkata', 1, GETDATE(), 1, GETDATE(), 1),
(6, 'Hyderabad', 1, GETDATE(), 1, GETDATE(), 1),
(7, 'Ahmedabad', 1, GETDATE(), 1, GETDATE(), 1),
(8, 'Pune', 1, GETDATE(), 1, GETDATE(), 1),
(9, 'Jaipur', 1, GETDATE(), 1, GETDATE(), 1),
(10, 'Lucknow', 1, GETDATE(), 1, GETDATE(), 1),
(11, 'Kochi', 1, GETDATE(), 1, GETDATE(), 1),
(12, 'Goa', 1, GETDATE(), 1, GETDATE(), 1),
(13, 'Srinagar', 1, GETDATE(), 1, GETDATE(), 1),
(14, 'Guwahati', 1, GETDATE(), 1, GETDATE(), 1),
(15, 'Amritsar', 1, GETDATE(), 1, GETDATE(), 1);


--Roles
INSERT INTO Roles values('Admin')


--user
INSERT INTO [User] (Username, ImageUrl, UserEmail, UserAddress, PhoneNumber, CreatedDate, CreatedId, LastLoginDate, LastModificationDate, LastModificationId, RoleId)
VALUES
('AdminUser', 'https://example.com/profile.jpg', 'AdminUser@example.com', '123 Main St, City, Country', '1234567890', GETDATE(), 1, GETDATE(), GETDATE(), 1, 1);

-- Inserting data into the AirportData table
INSERT INTO AirportData (AirportId, AirportName, AirportCode, AddressId, CreatedDate, CreatedId, LastModificationDate, LastModificationId)
VALUES
(1, 'Chhatrapati Shivaji Maharaj International Airport', 'BOM', 1, GETDATE(), 1, GETDATE(), 1),
(2, 'Indira Gandhi International Airport', 'DEL', 2, GETDATE(), 1, GETDATE(), 1),
(3, 'Kempegowda International Airport', 'BLR', 3, GETDATE(), 1, GETDATE(), 1),
(4, 'Chennai International Airport', 'MAA', 4, GETDATE(), 1, GETDATE(), 1),
(5, 'Netaji Subhas Chandra Bose International Airport', 'CCU', 5, GETDATE(), 1, GETDATE(), 1),
(6, 'Rajiv Gandhi International Airport', 'HYD', 6, GETDATE(), 1, GETDATE(), 1),
(7, 'Sardar Vallabhbhai Patel International Airport', 'AMD', 7, GETDATE(), 1, GETDATE(), 1),
(8, 'Pune International Airport', 'PNQ', 8, GETDATE(), 1, GETDATE(), 1),
(9, 'Jaipur International Airport', 'JAI', 9, GETDATE(), 1, GETDATE(), 1),
(10, 'Chaudhary Charan Singh International Airport', 'LKO', 10, GETDATE(), 1, GETDATE(), 1)




----------inserting airoplane data---------

INSERT INTO Airline 
VALUES
    ('Air India', GETDATE(), 1, GETDATE(), 1 ),

    ('IndiGo', GETDATE(), 1, GETDATE(), 1 ),

    ('SpiceJet', GETDATE(), 1, GETDATE(), 1 ),

    ('GoAir', GETDATE(), 1, GETDATE(), 1 ),

    ('Vistara', GETDATE(), 1, GETDATE(), 1 ),

    ('AirAsia India', GETDATE(), 1, GETDATE(), 1 );



--------------------flight
INSERT INTO Flight (AirlineId, CreatedDate, CreatedId, LastModificationDate, LastModificationId)
VALUES
(1, GETDATE(), 1, GETDATE(), 1), -- Air India
(2, GETDATE(), 1, GETDATE(), 1), -- IndiGo
(3, GETDATE(), 1, GETDATE(), 1), -- SpiceJet
(4, GETDATE(), 1, GETDATE(), 1), -- GoAir
(5, GETDATE(), 1, GETDATE(), 1), -- Vistara
(6, GETDATE(), 1, GETDATE(), 1); -- AirAsia 


------------------seats
INSERT INTO SeatType 
VALUES
(1, 'Economy', NULL),
(2, 'Business', NULL),
(3, 'First Class', NULL),
(4, 'Window Seat', 1),
(5, 'Aisle Seat', 1),
(6, 'Bulkhead Seat', 2),
(7, 'Exit Row Seat', 2),
-- Additional sample data
(8, 'Premium Economy', NULL),
(9, 'Middle Seat', 1),
(10, 'Extra Legroom Seat', 2);

-----------------------------jountry


INSERT INTO Journey 
VALUES

    (1, 1, '2023-06-01 10:00:00', '2023-06-01 12:00:00', 1, 2, GETDATE(), 1, GETDATE(), 1, 2, 20000.00),

    (2, 2, '2023-06-02 15:00:00', '2023-06-02 17:00:00', 3, 4, GETDATE(), 2, GETDATE(), 2, 2, 25000.00),

    (3, 1, '2023-06-03 08:00:00', '2023-06-03 10:00:00', 2, 1, GETDATE(), 1, GETDATE(), 1, 2, 18000.00),

    (4, 3, '2023-06-04 13:30:00', '2023-06-04 15:30:00', 2, 3, GETDATE(), 3, GETDATE(), 3, 2, 2200.00);




	-----------------status


	INSERT INTO StatusData 
VALUES
('Journey',null, GETDATE(), 1, GETDATE(), 1),
('Scheduled',1, GETDATE(), 1, GETDATE(), 1),
('On-time',1, GETDATE(), 1, GETDATE(), 1),
('Delayed', 1,GETDATE(), 1, GETDATE(), 1),
('Boarding',1, GETDATE(), 1, GETDATE(), 1),
('In-flight',1, GETDATE(), 1, GETDATE(), 1),
('Arrived',1, GETDATE(), 1, GETDATE(), 1),
('Cancelled',1, GETDATE(), 1, GETDATE(), 1);