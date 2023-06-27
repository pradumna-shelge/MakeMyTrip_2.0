USE [master]
GO
/****** Object:  Database [BookMyShow]    Script Date: 27-06-2023 19:35:36 ******/
CREATE DATABASE [BookMyShow]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'BookMyShow', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQL2019\MSSQL\DATA\BookMyShow.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'BookMyShow_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQL2019\MSSQL\DATA\BookMyShow_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [BookMyShow] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [BookMyShow].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [BookMyShow] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [BookMyShow] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [BookMyShow] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [BookMyShow] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [BookMyShow] SET ARITHABORT OFF 
GO
ALTER DATABASE [BookMyShow] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [BookMyShow] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [BookMyShow] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [BookMyShow] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [BookMyShow] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [BookMyShow] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [BookMyShow] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [BookMyShow] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [BookMyShow] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [BookMyShow] SET  ENABLE_BROKER 
GO
ALTER DATABASE [BookMyShow] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [BookMyShow] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [BookMyShow] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [BookMyShow] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [BookMyShow] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [BookMyShow] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [BookMyShow] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [BookMyShow] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [BookMyShow] SET  MULTI_USER 
GO
ALTER DATABASE [BookMyShow] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [BookMyShow] SET DB_CHAINING OFF 
GO
ALTER DATABASE [BookMyShow] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [BookMyShow] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [BookMyShow] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [BookMyShow] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [BookMyShow] SET QUERY_STORE = OFF
GO
USE [BookMyShow]
GO
/****** Object:  Table [dbo].[Airline]    Script Date: 27-06-2023 19:35:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Airline](
	[AirlineId] [int] IDENTITY(1,1) NOT NULL,
	[AirlineName] [nvarchar](50) NULL,
	[CreatedDate] [datetime] NULL,
	[CreatedId] [int] NULL,
	[LastModificationDate] [datetime] NULL,
	[LastModificationId] [int] NULL,
	[AirlineLogo] [nvarchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[AirlineId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AirportData]    Script Date: 27-06-2023 19:35:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AirportData](
	[AirportId] [int] NOT NULL,
	[AirportName] [nvarchar](50) NULL,
	[AirportCode] [nvarchar](50) NULL,
	[AddressId] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[CreatedId] [int] NULL,
	[LastModificationDate] [datetime] NULL,
	[LastModificationId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[AirportId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Flight]    Script Date: 27-06-2023 19:35:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Flight](
	[FlightId] [int] IDENTITY(1,1) NOT NULL,
	[airlineId] [int] NULL,
	[createdDate] [datetime] NULL,
	[createdId] [int] NULL,
	[LastModificationDate] [datetime] NULL,
	[LastModificationId] [int] NULL,
	[FlightName] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[FlightId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Journey]    Script Date: 27-06-2023 19:35:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Journey](
	[journeyId] [int] NOT NULL,
	[FlightId] [int] NULL,
	[arrivaltime] [datetime] NULL,
	[departuretime] [datetime] NULL,
	[destinationId] [int] NULL,
	[sourceId] [int] NULL,
	[createdDate] [datetime] NULL,
	[createdId] [int] NULL,
	[LastModificationDate] [datetime] NULL,
	[LastModificationId] [int] NULL,
	[statusFor] [int] NULL,
	[SeatbasicPrice] [decimal](10, 2) NULL,
PRIMARY KEY CLUSTERED 
(
	[journeyId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LocationData]    Script Date: 27-06-2023 19:35:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LocationData](
	[LocationId] [int] NOT NULL,
	[LocationName] [nvarchar](50) NULL,
	[CountryId] [int] NULL,
	[CreatedDate] [datetime] NULL,
	[CreatedId] [int] NULL,
	[LastModificationDate] [datetime] NULL,
	[LastModificationId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[LocationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Roles]    Script Date: 27-06-2023 19:35:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Roles](
	[RoleId] [int] IDENTITY(1,1) NOT NULL,
	[RoleName] [nvarchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SeatType]    Script Date: 27-06-2023 19:35:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SeatType](
	[SeatTypeId] [int] NOT NULL,
	[SeatTypeName] [nvarchar](50) NULL,
	[LocationId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[SeatTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[StatusData]    Script Date: 27-06-2023 19:35:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[StatusData](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[statusval] [nvarchar](50) NULL,
	[statusFor] [int] NULL,
	[createdDate] [datetime] NULL,
	[createdId] [int] NULL,
	[LastModificationDate] [datetime] NULL,
	[LastModificationId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 27-06-2023 19:35:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[Username] [nvarchar](50) NULL,
	[ImageUrl] [nvarchar](50) NULL,
	[UserEmail] [nvarchar](100) NULL,
	[UserAddress] [nvarchar](100) NULL,
	[PhoneNumber] [nvarchar](20) NULL,
	[CreatedDate] [datetime] NULL,
	[CreatedId] [int] NULL,
	[LastLoginDate] [datetime] NULL,
	[LastModificationDate] [datetime] NULL,
	[LastModificationId] [int] NULL,
	[RoleId] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Airline] ON 

INSERT [dbo].[Airline] ([AirlineId], [AirlineName], [CreatedDate], [CreatedId], [LastModificationDate], [LastModificationId], [AirlineLogo]) VALUES (1, N'Air India', CAST(N'2023-06-03T14:51:03.157' AS DateTime), 1, CAST(N'2023-06-03T14:51:03.157' AS DateTime), 1, N'https://aws-day1-practice4.s3.ap-south-1.amazonaws.com/img/AirAsia.png')
INSERT [dbo].[Airline] ([AirlineId], [AirlineName], [CreatedDate], [CreatedId], [LastModificationDate], [LastModificationId], [AirlineLogo]) VALUES (2, N'IndiGo', CAST(N'2023-06-03T14:51:03.157' AS DateTime), 1, CAST(N'2023-06-03T14:51:03.157' AS DateTime), 1, N'https://aws-day1-practice4.s3.ap-south-1.amazonaws.com/img/indigo.png')
INSERT [dbo].[Airline] ([AirlineId], [AirlineName], [CreatedDate], [CreatedId], [LastModificationDate], [LastModificationId], [AirlineLogo]) VALUES (3, N'SpiceJet', CAST(N'2023-06-03T14:51:03.157' AS DateTime), 1, CAST(N'2023-06-03T14:51:03.157' AS DateTime), 1, N'https://aws-day1-practice4.s3.ap-south-1.amazonaws.com/img/SpiceJet.png')
INSERT [dbo].[Airline] ([AirlineId], [AirlineName], [CreatedDate], [CreatedId], [LastModificationDate], [LastModificationId], [AirlineLogo]) VALUES (4, N'GoAir', CAST(N'2023-06-03T14:51:03.157' AS DateTime), 1, CAST(N'2023-06-03T14:51:03.157' AS DateTime), 1, N'https://aws-day1-practice4.s3.ap-south-1.amazonaws.com/img/goair.png')
INSERT [dbo].[Airline] ([AirlineId], [AirlineName], [CreatedDate], [CreatedId], [LastModificationDate], [LastModificationId], [AirlineLogo]) VALUES (5, N'Vistara', CAST(N'2023-06-03T14:51:03.157' AS DateTime), 1, CAST(N'2023-06-03T14:51:03.157' AS DateTime), 1, N'https://aws-day1-practice4.s3.ap-south-1.amazonaws.com/img/vistara.jpg')
INSERT [dbo].[Airline] ([AirlineId], [AirlineName], [CreatedDate], [CreatedId], [LastModificationDate], [LastModificationId], [AirlineLogo]) VALUES (6, N'AirAsia India', CAST(N'2023-06-03T14:51:03.157' AS DateTime), 1, CAST(N'2023-06-03T14:51:03.157' AS DateTime), 1, N'https://aws-day1-practice4.s3.ap-south-1.amazonaws.com/img/AirAsia.png')
SET IDENTITY_INSERT [dbo].[Airline] OFF
GO
INSERT [dbo].[AirportData] ([AirportId], [AirportName], [AirportCode], [AddressId], [CreatedDate], [CreatedId], [LastModificationDate], [LastModificationId]) VALUES (1, N'Chhatrapati Shivaji Maharaj International Airport', N'BOM', 16, CAST(N'2023-06-01T18:33:17.837' AS DateTime), 1, CAST(N'2023-06-01T18:33:17.837' AS DateTime), 1)
INSERT [dbo].[AirportData] ([AirportId], [AirportName], [AirportCode], [AddressId], [CreatedDate], [CreatedId], [LastModificationDate], [LastModificationId]) VALUES (2, N'Indira Gandhi International Airport', N'DEL', 2, CAST(N'2023-06-01T18:33:17.837' AS DateTime), 1, CAST(N'2023-06-01T18:33:17.837' AS DateTime), 1)
INSERT [dbo].[AirportData] ([AirportId], [AirportName], [AirportCode], [AddressId], [CreatedDate], [CreatedId], [LastModificationDate], [LastModificationId]) VALUES (3, N'Kempegowda International Airport', N'BLR', 3, CAST(N'2023-06-01T18:33:17.837' AS DateTime), 1, CAST(N'2023-06-01T18:33:17.837' AS DateTime), 1)
INSERT [dbo].[AirportData] ([AirportId], [AirportName], [AirportCode], [AddressId], [CreatedDate], [CreatedId], [LastModificationDate], [LastModificationId]) VALUES (4, N'Chennai International Airport', N'MAA', 4, CAST(N'2023-06-01T18:33:17.837' AS DateTime), 1, CAST(N'2023-06-01T18:33:17.837' AS DateTime), 1)
INSERT [dbo].[AirportData] ([AirportId], [AirportName], [AirportCode], [AddressId], [CreatedDate], [CreatedId], [LastModificationDate], [LastModificationId]) VALUES (5, N'Netaji Subhas Chandra Bose International Airport', N'CCU', 5, CAST(N'2023-06-01T18:33:17.837' AS DateTime), 1, CAST(N'2023-06-01T18:33:17.837' AS DateTime), 1)
INSERT [dbo].[AirportData] ([AirportId], [AirportName], [AirportCode], [AddressId], [CreatedDate], [CreatedId], [LastModificationDate], [LastModificationId]) VALUES (6, N'Rajiv Gandhi International Airport', N'HYD', 6, CAST(N'2023-06-01T18:33:17.837' AS DateTime), 1, CAST(N'2023-06-01T18:33:17.837' AS DateTime), 1)
INSERT [dbo].[AirportData] ([AirportId], [AirportName], [AirportCode], [AddressId], [CreatedDate], [CreatedId], [LastModificationDate], [LastModificationId]) VALUES (7, N'Sardar Vallabhbhai Patel International Airport', N'AMD', 7, CAST(N'2023-06-01T18:33:17.837' AS DateTime), 1, CAST(N'2023-06-01T18:33:17.837' AS DateTime), 1)
INSERT [dbo].[AirportData] ([AirportId], [AirportName], [AirportCode], [AddressId], [CreatedDate], [CreatedId], [LastModificationDate], [LastModificationId]) VALUES (8, N'Pune International Airport', N'PNQ', 8, CAST(N'2023-06-01T18:33:17.837' AS DateTime), 1, CAST(N'2023-06-01T18:33:17.837' AS DateTime), 1)
INSERT [dbo].[AirportData] ([AirportId], [AirportName], [AirportCode], [AddressId], [CreatedDate], [CreatedId], [LastModificationDate], [LastModificationId]) VALUES (9, N'Jaipur International Airport', N'JAI', 9, CAST(N'2023-06-01T18:33:17.837' AS DateTime), 1, CAST(N'2023-06-01T18:33:17.837' AS DateTime), 1)
INSERT [dbo].[AirportData] ([AirportId], [AirportName], [AirportCode], [AddressId], [CreatedDate], [CreatedId], [LastModificationDate], [LastModificationId]) VALUES (10, N'Chaudhary Charan Singh International Airport', N'LKO', 10, CAST(N'2023-06-01T18:33:17.837' AS DateTime), 1, CAST(N'2023-06-01T18:33:17.837' AS DateTime), 1)
GO
SET IDENTITY_INSERT [dbo].[Flight] ON 

INSERT [dbo].[Flight] ([FlightId], [airlineId], [createdDate], [createdId], [LastModificationDate], [LastModificationId], [FlightName]) VALUES (1, 1, CAST(N'2023-06-03T15:02:59.257' AS DateTime), 1, CAST(N'2023-06-03T15:02:59.257' AS DateTime), 1, NULL)
INSERT [dbo].[Flight] ([FlightId], [airlineId], [createdDate], [createdId], [LastModificationDate], [LastModificationId], [FlightName]) VALUES (2, 2, CAST(N'2023-06-03T15:02:59.257' AS DateTime), 1, CAST(N'2023-06-03T15:02:59.257' AS DateTime), 1, NULL)
INSERT [dbo].[Flight] ([FlightId], [airlineId], [createdDate], [createdId], [LastModificationDate], [LastModificationId], [FlightName]) VALUES (3, 5, CAST(N'2023-06-03T15:02:59.257' AS DateTime), 1, CAST(N'2023-06-03T15:02:59.257' AS DateTime), 1, NULL)
INSERT [dbo].[Flight] ([FlightId], [airlineId], [createdDate], [createdId], [LastModificationDate], [LastModificationId], [FlightName]) VALUES (4, 4, CAST(N'2023-06-03T15:02:59.257' AS DateTime), 1, CAST(N'2023-06-03T15:02:59.257' AS DateTime), 1, NULL)
INSERT [dbo].[Flight] ([FlightId], [airlineId], [createdDate], [createdId], [LastModificationDate], [LastModificationId], [FlightName]) VALUES (5, 5, CAST(N'2023-06-03T15:02:59.257' AS DateTime), 1, CAST(N'2023-06-03T15:02:59.257' AS DateTime), 1, NULL)
INSERT [dbo].[Flight] ([FlightId], [airlineId], [createdDate], [createdId], [LastModificationDate], [LastModificationId], [FlightName]) VALUES (6, 6, CAST(N'2023-06-03T15:02:59.257' AS DateTime), 1, CAST(N'2023-06-03T15:02:59.257' AS DateTime), 1, NULL)
INSERT [dbo].[Flight] ([FlightId], [airlineId], [createdDate], [createdId], [LastModificationDate], [LastModificationId], [FlightName]) VALUES (7, 1, CAST(N'2023-06-03T15:03:02.910' AS DateTime), 1, CAST(N'2023-06-03T15:03:02.910' AS DateTime), 1, NULL)
INSERT [dbo].[Flight] ([FlightId], [airlineId], [createdDate], [createdId], [LastModificationDate], [LastModificationId], [FlightName]) VALUES (8, 2, CAST(N'2023-06-03T15:03:02.910' AS DateTime), 1, CAST(N'2023-06-03T15:03:02.910' AS DateTime), 1, NULL)
INSERT [dbo].[Flight] ([FlightId], [airlineId], [createdDate], [createdId], [LastModificationDate], [LastModificationId], [FlightName]) VALUES (9, 3, CAST(N'2023-06-03T15:03:02.910' AS DateTime), 1, CAST(N'2023-06-03T15:03:02.910' AS DateTime), 1, NULL)
INSERT [dbo].[Flight] ([FlightId], [airlineId], [createdDate], [createdId], [LastModificationDate], [LastModificationId], [FlightName]) VALUES (10, 4, CAST(N'2023-06-03T15:03:02.910' AS DateTime), 1, CAST(N'2023-06-03T15:03:02.910' AS DateTime), 1, NULL)
INSERT [dbo].[Flight] ([FlightId], [airlineId], [createdDate], [createdId], [LastModificationDate], [LastModificationId], [FlightName]) VALUES (11, 5, CAST(N'2023-06-03T15:03:02.910' AS DateTime), 1, CAST(N'2023-06-03T15:03:02.910' AS DateTime), 1, NULL)
INSERT [dbo].[Flight] ([FlightId], [airlineId], [createdDate], [createdId], [LastModificationDate], [LastModificationId], [FlightName]) VALUES (12, 6, CAST(N'2023-06-03T15:03:02.910' AS DateTime), 1, CAST(N'2023-06-03T15:03:02.910' AS DateTime), 1, NULL)
SET IDENTITY_INSERT [dbo].[Flight] OFF
GO
INSERT [dbo].[Journey] ([journeyId], [FlightId], [arrivaltime], [departuretime], [destinationId], [sourceId], [createdDate], [createdId], [LastModificationDate], [LastModificationId], [statusFor], [SeatbasicPrice]) VALUES (1, 3, CAST(N'2023-06-01T10:00:00.000' AS DateTime), CAST(N'2023-06-01T12:00:00.000' AS DateTime), 1, 2, CAST(N'2023-06-11T16:14:32.673' AS DateTime), 1, CAST(N'2023-06-03T16:14:32.673' AS DateTime), 1, 2, CAST(20000.00 AS Decimal(10, 2)))
INSERT [dbo].[Journey] ([journeyId], [FlightId], [arrivaltime], [departuretime], [destinationId], [sourceId], [createdDate], [createdId], [LastModificationDate], [LastModificationId], [statusFor], [SeatbasicPrice]) VALUES (2, 2, CAST(N'2023-06-02T15:00:00.000' AS DateTime), CAST(N'2023-06-02T17:00:00.000' AS DateTime), 3, 4, CAST(N'2023-06-11T16:14:32.673' AS DateTime), 2, CAST(N'2023-06-03T16:14:32.673' AS DateTime), 2, 2, CAST(25000.00 AS Decimal(10, 2)))
INSERT [dbo].[Journey] ([journeyId], [FlightId], [arrivaltime], [departuretime], [destinationId], [sourceId], [createdDate], [createdId], [LastModificationDate], [LastModificationId], [statusFor], [SeatbasicPrice]) VALUES (3, 1, CAST(N'2023-06-03T08:00:00.000' AS DateTime), CAST(N'2023-06-03T10:00:00.000' AS DateTime), 2, 1, CAST(N'2023-06-11T16:14:32.673' AS DateTime), 1, CAST(N'2023-06-03T16:14:32.673' AS DateTime), 1, 2, CAST(18000.00 AS Decimal(10, 2)))
INSERT [dbo].[Journey] ([journeyId], [FlightId], [arrivaltime], [departuretime], [destinationId], [sourceId], [createdDate], [createdId], [LastModificationDate], [LastModificationId], [statusFor], [SeatbasicPrice]) VALUES (4, 3, CAST(N'2023-06-04T13:30:00.000' AS DateTime), CAST(N'2023-06-04T15:30:00.000' AS DateTime), 2, 3, CAST(N'2023-06-03T16:14:32.673' AS DateTime), 3, CAST(N'2023-06-03T16:14:32.673' AS DateTime), 3, 2, CAST(2200.00 AS Decimal(10, 2)))
INSERT [dbo].[Journey] ([journeyId], [FlightId], [arrivaltime], [departuretime], [destinationId], [sourceId], [createdDate], [createdId], [LastModificationDate], [LastModificationId], [statusFor], [SeatbasicPrice]) VALUES (5, 1, CAST(N'2023-06-10T10:00:00.000' AS DateTime), CAST(N'2023-06-11T12:00:00.000' AS DateTime), 1, 2, CAST(N'2023-06-08T10:48:11.513' AS DateTime), 1, CAST(N'2023-06-08T10:48:11.513' AS DateTime), 1, 2, CAST(20000.00 AS Decimal(10, 2)))
INSERT [dbo].[Journey] ([journeyId], [FlightId], [arrivaltime], [departuretime], [destinationId], [sourceId], [createdDate], [createdId], [LastModificationDate], [LastModificationId], [statusFor], [SeatbasicPrice]) VALUES (6, 2, CAST(N'2023-06-12T15:00:00.000' AS DateTime), CAST(N'2023-06-12T17:00:00.000' AS DateTime), 3, 4, CAST(N'2023-06-08T10:48:11.513' AS DateTime), 2, CAST(N'2023-06-08T10:48:11.513' AS DateTime), 2, 2, CAST(25000.00 AS Decimal(10, 2)))
INSERT [dbo].[Journey] ([journeyId], [FlightId], [arrivaltime], [departuretime], [destinationId], [sourceId], [createdDate], [createdId], [LastModificationDate], [LastModificationId], [statusFor], [SeatbasicPrice]) VALUES (7, 1, CAST(N'2023-06-13T08:00:00.000' AS DateTime), CAST(N'2023-06-13T10:00:00.000' AS DateTime), 2, 1, CAST(N'2023-06-08T10:48:11.513' AS DateTime), 1, CAST(N'2023-06-08T10:48:11.513' AS DateTime), 1, 2, CAST(18000.00 AS Decimal(10, 2)))
INSERT [dbo].[Journey] ([journeyId], [FlightId], [arrivaltime], [departuretime], [destinationId], [sourceId], [createdDate], [createdId], [LastModificationDate], [LastModificationId], [statusFor], [SeatbasicPrice]) VALUES (8, 3, CAST(N'2023-06-14T13:30:00.000' AS DateTime), CAST(N'2023-06-14T15:30:00.000' AS DateTime), 2, 3, CAST(N'2023-06-08T10:48:11.513' AS DateTime), 3, CAST(N'2023-06-08T10:48:11.513' AS DateTime), 3, 2, CAST(2200.00 AS Decimal(10, 2)))
GO
INSERT [dbo].[LocationData] ([LocationId], [LocationName], [CountryId], [CreatedDate], [CreatedId], [LastModificationDate], [LastModificationId]) VALUES (1, N'India', NULL, CAST(N'2023-06-01T18:31:41.087' AS DateTime), 1, CAST(N'2023-06-01T18:31:41.087' AS DateTime), 1)
INSERT [dbo].[LocationData] ([LocationId], [LocationName], [CountryId], [CreatedDate], [CreatedId], [LastModificationDate], [LastModificationId]) VALUES (2, N'Delhi', 1, CAST(N'2023-06-01T18:31:41.087' AS DateTime), 1, CAST(N'2023-06-01T18:31:41.087' AS DateTime), 1)
INSERT [dbo].[LocationData] ([LocationId], [LocationName], [CountryId], [CreatedDate], [CreatedId], [LastModificationDate], [LastModificationId]) VALUES (3, N'Bangalore', 1, CAST(N'2023-06-01T18:31:41.087' AS DateTime), 1, CAST(N'2023-06-01T18:31:41.087' AS DateTime), 1)
INSERT [dbo].[LocationData] ([LocationId], [LocationName], [CountryId], [CreatedDate], [CreatedId], [LastModificationDate], [LastModificationId]) VALUES (4, N'Chennai', 1, CAST(N'2023-06-01T18:31:41.087' AS DateTime), 1, CAST(N'2023-06-01T18:31:41.087' AS DateTime), 1)
INSERT [dbo].[LocationData] ([LocationId], [LocationName], [CountryId], [CreatedDate], [CreatedId], [LastModificationDate], [LastModificationId]) VALUES (5, N'Kolkata', 1, CAST(N'2023-06-01T18:31:41.087' AS DateTime), 1, CAST(N'2023-06-01T18:31:41.087' AS DateTime), 1)
INSERT [dbo].[LocationData] ([LocationId], [LocationName], [CountryId], [CreatedDate], [CreatedId], [LastModificationDate], [LastModificationId]) VALUES (6, N'Hyderabad', 1, CAST(N'2023-06-01T18:31:41.087' AS DateTime), 1, CAST(N'2023-06-01T18:31:41.087' AS DateTime), 1)
INSERT [dbo].[LocationData] ([LocationId], [LocationName], [CountryId], [CreatedDate], [CreatedId], [LastModificationDate], [LastModificationId]) VALUES (7, N'Ahmedabad', 1, CAST(N'2023-06-01T18:31:41.087' AS DateTime), 1, CAST(N'2023-06-01T18:31:41.087' AS DateTime), 1)
INSERT [dbo].[LocationData] ([LocationId], [LocationName], [CountryId], [CreatedDate], [CreatedId], [LastModificationDate], [LastModificationId]) VALUES (8, N'Pune', 1, CAST(N'2023-06-01T18:31:41.087' AS DateTime), 1, CAST(N'2023-06-01T18:31:41.087' AS DateTime), 1)
INSERT [dbo].[LocationData] ([LocationId], [LocationName], [CountryId], [CreatedDate], [CreatedId], [LastModificationDate], [LastModificationId]) VALUES (9, N'Jaipur', 1, CAST(N'2023-06-01T18:31:41.087' AS DateTime), 1, CAST(N'2023-06-01T18:31:41.087' AS DateTime), 1)
INSERT [dbo].[LocationData] ([LocationId], [LocationName], [CountryId], [CreatedDate], [CreatedId], [LastModificationDate], [LastModificationId]) VALUES (10, N'Lucknow', 1, CAST(N'2023-06-01T18:31:41.087' AS DateTime), 1, CAST(N'2023-06-01T18:31:41.087' AS DateTime), 1)
INSERT [dbo].[LocationData] ([LocationId], [LocationName], [CountryId], [CreatedDate], [CreatedId], [LastModificationDate], [LastModificationId]) VALUES (11, N'Kochi', 1, CAST(N'2023-06-01T18:31:41.087' AS DateTime), 1, CAST(N'2023-06-01T18:31:41.087' AS DateTime), 1)
INSERT [dbo].[LocationData] ([LocationId], [LocationName], [CountryId], [CreatedDate], [CreatedId], [LastModificationDate], [LastModificationId]) VALUES (12, N'Goa', 1, CAST(N'2023-06-01T18:31:41.087' AS DateTime), 1, CAST(N'2023-06-01T18:31:41.087' AS DateTime), 1)
INSERT [dbo].[LocationData] ([LocationId], [LocationName], [CountryId], [CreatedDate], [CreatedId], [LastModificationDate], [LastModificationId]) VALUES (13, N'Srinagar', 1, CAST(N'2023-06-01T18:31:41.087' AS DateTime), 1, CAST(N'2023-06-01T18:31:41.087' AS DateTime), 1)
INSERT [dbo].[LocationData] ([LocationId], [LocationName], [CountryId], [CreatedDate], [CreatedId], [LastModificationDate], [LastModificationId]) VALUES (14, N'Guwahati', 1, CAST(N'2023-06-01T18:31:41.087' AS DateTime), 1, CAST(N'2023-06-01T18:31:41.087' AS DateTime), 1)
INSERT [dbo].[LocationData] ([LocationId], [LocationName], [CountryId], [CreatedDate], [CreatedId], [LastModificationDate], [LastModificationId]) VALUES (15, N'Amritsar', 1, CAST(N'2023-06-01T18:31:41.087' AS DateTime), 1, CAST(N'2023-06-01T18:31:41.087' AS DateTime), 1)
INSERT [dbo].[LocationData] ([LocationId], [LocationName], [CountryId], [CreatedDate], [CreatedId], [LastModificationDate], [LastModificationId]) VALUES (16, N'Mumbai', 1, CAST(N'2023-06-01T18:31:41.087' AS DateTime), 1, CAST(N'2023-06-01T18:31:41.087' AS DateTime), 1)
GO
SET IDENTITY_INSERT [dbo].[Roles] ON 

INSERT [dbo].[Roles] ([RoleId], [RoleName]) VALUES (1, N'Admin')
INSERT [dbo].[Roles] ([RoleId], [RoleName]) VALUES (2, N'Admin')
SET IDENTITY_INSERT [dbo].[Roles] OFF
GO
INSERT [dbo].[SeatType] ([SeatTypeId], [SeatTypeName], [LocationId]) VALUES (1, N'Economy', NULL)
INSERT [dbo].[SeatType] ([SeatTypeId], [SeatTypeName], [LocationId]) VALUES (2, N'Business', NULL)
INSERT [dbo].[SeatType] ([SeatTypeId], [SeatTypeName], [LocationId]) VALUES (3, N'First Class', NULL)
INSERT [dbo].[SeatType] ([SeatTypeId], [SeatTypeName], [LocationId]) VALUES (4, N'Window Seat', 1)
INSERT [dbo].[SeatType] ([SeatTypeId], [SeatTypeName], [LocationId]) VALUES (5, N'Aisle Seat', 1)
INSERT [dbo].[SeatType] ([SeatTypeId], [SeatTypeName], [LocationId]) VALUES (6, N'Bulkhead Seat', 2)
INSERT [dbo].[SeatType] ([SeatTypeId], [SeatTypeName], [LocationId]) VALUES (7, N'Exit Row Seat', 2)
INSERT [dbo].[SeatType] ([SeatTypeId], [SeatTypeName], [LocationId]) VALUES (8, N'Premium Economy', NULL)
INSERT [dbo].[SeatType] ([SeatTypeId], [SeatTypeName], [LocationId]) VALUES (9, N'Middle Seat', 1)
INSERT [dbo].[SeatType] ([SeatTypeId], [SeatTypeName], [LocationId]) VALUES (10, N'Extra Legroom Seat', 2)
GO
SET IDENTITY_INSERT [dbo].[StatusData] ON 

INSERT [dbo].[StatusData] ([id], [statusval], [statusFor], [createdDate], [createdId], [LastModificationDate], [LastModificationId]) VALUES (1, N'Journey', NULL, CAST(N'2023-06-03T16:12:46.877' AS DateTime), 1, CAST(N'2023-06-03T16:12:46.877' AS DateTime), 1)
INSERT [dbo].[StatusData] ([id], [statusval], [statusFor], [createdDate], [createdId], [LastModificationDate], [LastModificationId]) VALUES (2, N'Scheduled', 1, CAST(N'2023-06-03T16:12:46.877' AS DateTime), 1, CAST(N'2023-06-03T16:12:46.877' AS DateTime), 1)
INSERT [dbo].[StatusData] ([id], [statusval], [statusFor], [createdDate], [createdId], [LastModificationDate], [LastModificationId]) VALUES (3, N'On-time', 1, CAST(N'2023-06-03T16:12:46.877' AS DateTime), 1, CAST(N'2023-06-03T16:12:46.877' AS DateTime), 1)
INSERT [dbo].[StatusData] ([id], [statusval], [statusFor], [createdDate], [createdId], [LastModificationDate], [LastModificationId]) VALUES (4, N'Delayed', 1, CAST(N'2023-06-03T16:12:46.877' AS DateTime), 1, CAST(N'2023-06-03T16:12:46.877' AS DateTime), 1)
INSERT [dbo].[StatusData] ([id], [statusval], [statusFor], [createdDate], [createdId], [LastModificationDate], [LastModificationId]) VALUES (5, N'Boarding', 1, CAST(N'2023-06-03T16:12:46.877' AS DateTime), 1, CAST(N'2023-06-03T16:12:46.877' AS DateTime), 1)
INSERT [dbo].[StatusData] ([id], [statusval], [statusFor], [createdDate], [createdId], [LastModificationDate], [LastModificationId]) VALUES (6, N'In-flight', 1, CAST(N'2023-06-03T16:12:46.877' AS DateTime), 1, CAST(N'2023-06-03T16:12:46.877' AS DateTime), 1)
INSERT [dbo].[StatusData] ([id], [statusval], [statusFor], [createdDate], [createdId], [LastModificationDate], [LastModificationId]) VALUES (7, N'Arrived', 1, CAST(N'2023-06-03T16:12:46.877' AS DateTime), 1, CAST(N'2023-06-03T16:12:46.877' AS DateTime), 1)
INSERT [dbo].[StatusData] ([id], [statusval], [statusFor], [createdDate], [createdId], [LastModificationDate], [LastModificationId]) VALUES (8, N'Cancelled', 1, CAST(N'2023-06-03T16:12:46.877' AS DateTime), 1, CAST(N'2023-06-03T16:12:46.877' AS DateTime), 1)
INSERT [dbo].[StatusData] ([id], [statusval], [statusFor], [createdDate], [createdId], [LastModificationDate], [LastModificationId]) VALUES (9, N'Flight', NULL, CAST(N'2023-06-03T16:12:46.877' AS DateTime), 1, CAST(N'2023-06-03T16:12:46.877' AS DateTime), 1)
INSERT [dbo].[StatusData] ([id], [statusval], [statusFor], [createdDate], [createdId], [LastModificationDate], [LastModificationId]) VALUES (10, N'Available', 9, CAST(N'2023-06-03T16:12:46.877' AS DateTime), 1, CAST(N'2023-06-03T16:12:46.877' AS DateTime), 1)
INSERT [dbo].[StatusData] ([id], [statusval], [statusFor], [createdDate], [createdId], [LastModificationDate], [LastModificationId]) VALUES (11, N'NotAvailable', 9, CAST(N'2023-06-03T16:12:46.877' AS DateTime), 1, CAST(N'2023-06-03T16:12:46.877' AS DateTime), 1)
SET IDENTITY_INSERT [dbo].[StatusData] OFF
GO
SET IDENTITY_INSERT [dbo].[User] ON 

INSERT [dbo].[User] ([UserId], [Username], [ImageUrl], [UserEmail], [UserAddress], [PhoneNumber], [CreatedDate], [CreatedId], [LastLoginDate], [LastModificationDate], [LastModificationId], [RoleId]) VALUES (1, N'AdminUser', N'https://example.com/profile.jpg', N'AdminUser@example.com', N'123 Main St, City, Country', N'1234567890', CAST(N'2023-06-01T18:31:29.200' AS DateTime), 1, CAST(N'2023-06-01T18:31:29.200' AS DateTime), CAST(N'2023-06-01T18:31:29.200' AS DateTime), 1, 1)
SET IDENTITY_INSERT [dbo].[User] OFF
GO
ALTER TABLE [dbo].[Airline]  WITH CHECK ADD FOREIGN KEY([CreatedId])
REFERENCES [dbo].[User] ([UserId])
GO
ALTER TABLE [dbo].[Airline]  WITH CHECK ADD FOREIGN KEY([LastModificationId])
REFERENCES [dbo].[User] ([UserId])
GO
ALTER TABLE [dbo].[AirportData]  WITH CHECK ADD FOREIGN KEY([AddressId])
REFERENCES [dbo].[LocationData] ([LocationId])
GO
ALTER TABLE [dbo].[AirportData]  WITH CHECK ADD FOREIGN KEY([CreatedId])
REFERENCES [dbo].[User] ([UserId])
GO
ALTER TABLE [dbo].[AirportData]  WITH CHECK ADD FOREIGN KEY([LastModificationId])
REFERENCES [dbo].[User] ([UserId])
GO
ALTER TABLE [dbo].[Flight]  WITH CHECK ADD FOREIGN KEY([airlineId])
REFERENCES [dbo].[Airline] ([AirlineId])
GO
ALTER TABLE [dbo].[Journey]  WITH CHECK ADD FOREIGN KEY([destinationId])
REFERENCES [dbo].[AirportData] ([AirportId])
GO
ALTER TABLE [dbo].[Journey]  WITH CHECK ADD FOREIGN KEY([FlightId])
REFERENCES [dbo].[Flight] ([FlightId])
GO
ALTER TABLE [dbo].[Journey]  WITH CHECK ADD FOREIGN KEY([sourceId])
REFERENCES [dbo].[AirportData] ([AirportId])
GO
ALTER TABLE [dbo].[Journey]  WITH CHECK ADD FOREIGN KEY([statusFor])
REFERENCES [dbo].[StatusData] ([id])
GO
ALTER TABLE [dbo].[LocationData]  WITH CHECK ADD FOREIGN KEY([CountryId])
REFERENCES [dbo].[LocationData] ([LocationId])
GO
ALTER TABLE [dbo].[LocationData]  WITH CHECK ADD FOREIGN KEY([CreatedId])
REFERENCES [dbo].[User] ([UserId])
GO
ALTER TABLE [dbo].[LocationData]  WITH CHECK ADD FOREIGN KEY([LastModificationId])
REFERENCES [dbo].[User] ([UserId])
GO
ALTER TABLE [dbo].[SeatType]  WITH CHECK ADD FOREIGN KEY([LocationId])
REFERENCES [dbo].[SeatType] ([SeatTypeId])
GO
ALTER TABLE [dbo].[StatusData]  WITH CHECK ADD FOREIGN KEY([statusFor])
REFERENCES [dbo].[StatusData] ([id])
GO
ALTER TABLE [dbo].[User]  WITH CHECK ADD FOREIGN KEY([CreatedId])
REFERENCES [dbo].[User] ([UserId])
GO
ALTER TABLE [dbo].[User]  WITH CHECK ADD FOREIGN KEY([LastModificationId])
REFERENCES [dbo].[User] ([UserId])
GO
ALTER TABLE [dbo].[User]  WITH CHECK ADD FOREIGN KEY([RoleId])
REFERENCES [dbo].[Roles] ([RoleId])
GO
USE [master]
GO
ALTER DATABASE [BookMyShow] SET  READ_WRITE 
GO
