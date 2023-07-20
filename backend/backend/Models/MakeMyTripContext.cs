using System;
using System.Collections.Generic;
using backend.DTOs.SpDTo;
using Microsoft.EntityFrameworkCore;

namespace backend.Models;

public partial class MakeMyTripContext : DbContext
{
    public MakeMyTripContext()
    {
    }

    public MakeMyTripContext(DbContextOptions<MakeMyTripContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Airline> Airlines { get; set; }

    public virtual DbSet<AirportDatum> AirportData { get; set; }

    public virtual DbSet<Booking> Bookings { get; set; }

    public virtual DbSet<Flight> Flights { get; set; }

    public virtual DbSet<FlightclassStructure> FlightclassStructures { get; set; }

    public virtual DbSet<Journey> Journeys { get; set; }

    public virtual DbSet<JourneyClassPrice> JourneyClassPrices { get; set; }

    public virtual DbSet<LocationDatum> LocationData { get; set; }

    public virtual DbSet<Passenger> Passengers { get; set; }

    public virtual DbSet<PassengerOffer> PassengerOffers { get; set; }

    public virtual DbSet<PassengerType> PassengerTypes { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<SeatClassType> SeatClassTypes { get; set; }

    public virtual DbSet<SeatLocation> SeatLocations { get; set; }

    public virtual DbSet<User> Users { get; set; }
    public virtual DbSet<SeatClassDto> SeatClassDtos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=PC0577\\MSSQL2019;Database=MakeMyTrip;Trusted_Connection=True;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Airline>(entity =>
        {
            entity.HasKey(e => e.AirlineId).HasName("PK__Airline__DC45821385E885E6");

            entity.ToTable("Airline");

            entity.Property(e => e.AirlineCode).HasMaxLength(10);
            entity.Property(e => e.AirlineName).HasMaxLength(50);
            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.LastModificationDate).HasColumnType("datetime");

            entity.HasOne(d => d.Created).WithMany(p => p.AirlineCreateds)
                .HasForeignKey(d => d.CreatedId)
                .HasConstraintName("FK__Airline__Created__403A8C7D");

            entity.HasOne(d => d.LastModification).WithMany(p => p.AirlineLastModifications)
                .HasForeignKey(d => d.LastModificationId)
                .HasConstraintName("FK__Airline__LastMod__412EB0B6");
        });

        modelBuilder.Entity<AirportDatum>(entity =>
        {
            entity.HasKey(e => e.AirportId).HasName("PK__AirportD__E3DBE0EA0A7D5C9C");

            entity.Property(e => e.AirportId).ValueGeneratedNever();
            entity.Property(e => e.AirportCode).HasMaxLength(50);
            entity.Property(e => e.AirportName).HasMaxLength(50);
            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.LastModificationDate).HasColumnType("datetime");

            entity.HasOne(d => d.Address).WithMany(p => p.AirportData)
                .HasForeignKey(d => d.AddressId)
                .HasConstraintName("FK__AirportDa__Addre__48CFD27E");

            entity.HasOne(d => d.Created).WithMany(p => p.AirportDatumCreateds)
                .HasForeignKey(d => d.CreatedId)
                .HasConstraintName("FK__AirportDa__Creat__49C3F6B7");

            entity.HasOne(d => d.LastModification).WithMany(p => p.AirportDatumLastModifications)
                .HasForeignKey(d => d.LastModificationId)
                .HasConstraintName("FK__AirportDa__LastM__4AB81AF0");
        });

        modelBuilder.Entity<Booking>(entity =>
        {
            entity.HasKey(e => e.BookingId).HasName("PK__Booking__73951AED09174877");

            entity.ToTable("Booking");

            entity.Property(e => e.BookingDate).HasColumnType("datetime");
            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.LastModificationDate).HasColumnType("datetime");
            entity.Property(e => e.TotalFare).HasColumnType("decimal(10, 2)");

            entity.HasOne(d => d.Created).WithMany(p => p.BookingCreateds)
                .HasForeignKey(d => d.CreatedId)
                .HasConstraintName("FK__Booking__Created__74AE54BC");

            entity.HasOne(d => d.Journey).WithMany(p => p.Bookings)
                .HasForeignKey(d => d.JourneyId)
                .HasConstraintName("FK__Booking__Journey__72C60C4A");

            entity.HasOne(d => d.LastModification).WithMany(p => p.BookingLastModifications)
                .HasForeignKey(d => d.LastModificationId)
                .HasConstraintName("FK__Booking__LastMod__75A278F5");

            entity.HasOne(d => d.User).WithMany(p => p.BookingUsers)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__Booking__UserId__73BA3083");
        });

        modelBuilder.Entity<Flight>(entity =>
        {
            entity.HasKey(e => e.FlightId).HasName("PK__Flight__8A9E14EEFA09301B");

            entity.ToTable("Flight");

            entity.Property(e => e.AirlineId).HasColumnName("airlineId");
            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.FlightNo).HasMaxLength(30);
            entity.Property(e => e.LastModificationDate).HasColumnType("datetime");

            entity.HasOne(d => d.Airline).WithMany(p => p.Flights)
                .HasForeignKey(d => d.AirlineId)
                .HasConstraintName("FK__Flight__airlineI__5AEE82B9");

            entity.HasOne(d => d.BusinessclassNavigation).WithMany(p => p.FlightBusinessclassNavigations)
                .HasForeignKey(d => d.Businessclass)
                .HasConstraintName("FK__Flight__Business__5DCAEF64");

            entity.HasOne(d => d.Created).WithMany(p => p.FlightCreateds)
                .HasForeignKey(d => d.CreatedId)
                .HasConstraintName("FK__Flight__CreatedI__5EBF139D");

            entity.HasOne(d => d.EconomyClassNavigation).WithMany(p => p.FlightEconomyClassNavigations)
                .HasForeignKey(d => d.EconomyClass)
                .HasConstraintName("FK__Flight__EconomyC__5BE2A6F2");

            entity.HasOne(d => d.FirstClassNavigation).WithMany(p => p.FlightFirstClassNavigations)
                .HasForeignKey(d => d.FirstClass)
                .HasConstraintName("FK__Flight__FirstCla__5CD6CB2B");

            entity.HasOne(d => d.LastModification).WithMany(p => p.FlightLastModifications)
                .HasForeignKey(d => d.LastModificationId)
                .HasConstraintName("FK__Flight__LastModi__5FB337D6");
        });

        modelBuilder.Entity<FlightclassStructure>(entity =>
        {
            entity.HasKey(e => e.FlightclassStructureId).HasName("PK__Flightcl__631F102CC5B6F140");

            entity.ToTable("FlightclassStructure");

            entity.Property(e => e.ColumnsEnd)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasColumnName("columnsEnd");
            entity.Property(e => e.ColumnsStart)
                .HasMaxLength(1)
                .IsUnicode(false)
                .HasColumnName("columnsStart");
            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.LastModificationDate).HasColumnType("datetime");

            entity.HasOne(d => d.Created).WithMany(p => p.FlightclassStructureCreateds)
                .HasForeignKey(d => d.CreatedId)
                .HasConstraintName("FK__Flightcla__Creat__571DF1D5");

            entity.HasOne(d => d.LastModification).WithMany(p => p.FlightclassStructureLastModifications)
                .HasForeignKey(d => d.LastModificationId)
                .HasConstraintName("FK__Flightcla__LastM__5812160E");

            entity.HasOne(d => d.SeatClass).WithMany(p => p.FlightclassStructures)
                .HasForeignKey(d => d.SeatClassId)
                .HasConstraintName("FK__Flightcla__SeatC__5629CD9C");
        });

        modelBuilder.Entity<Journey>(entity =>
        {
            entity.HasKey(e => e.JourneyId).HasName("PK__Journey__4159B9EFE9F5318C");

            entity.ToTable("Journey");

            entity.Property(e => e.ArrivalTime).HasColumnType("datetime");
            entity.Property(e => e.DepartureTime).HasColumnType("datetime");
            entity.Property(e => e.SeatbasicPrice).HasColumnType("decimal(10, 2)");

            entity.HasOne(d => d.AdultNavigation).WithMany(p => p.JourneyAdultNavigations)
                .HasForeignKey(d => d.Adult)
                .HasConstraintName("FK__Journey__Adult__6E01572D");

            entity.HasOne(d => d.BussinessClassNavigation).WithMany(p => p.JourneyBussinessClassNavigations)
                .HasForeignKey(d => d.BussinessClass)
                .HasConstraintName("FK__Journey__Bussine__6D0D32F4");

            entity.HasOne(d => d.ChildNavigation).WithMany(p => p.JourneyChildNavigations)
                .HasForeignKey(d => d.Child)
                .HasConstraintName("FK__Journey__Child__6EF57B66");

            entity.HasOne(d => d.Destination).WithMany(p => p.JourneyDestinations)
                .HasForeignKey(d => d.DestinationId)
                .HasConstraintName("FK__Journey__Destina__693CA210");

            entity.HasOne(d => d.EconomyClassNavigation).WithMany(p => p.JourneyEconomyClassNavigations)
                .HasForeignKey(d => d.EconomyClass)
                .HasConstraintName("FK__Journey__Economy__6B24EA82");

            entity.HasOne(d => d.FirstClassNavigation).WithMany(p => p.JourneyFirstClassNavigations)
                .HasForeignKey(d => d.FirstClass)
                .HasConstraintName("FK__Journey__FirstCl__6C190EBB");

            entity.HasOne(d => d.Flight).WithMany(p => p.Journeys)
                .HasForeignKey(d => d.FlightId)
                .HasConstraintName("FK__Journey__FlightI__68487DD7");

            entity.HasOne(d => d.InfantsNavigation).WithMany(p => p.JourneyInfantsNavigations)
                .HasForeignKey(d => d.Infants)
                .HasConstraintName("FK__Journey__Infants__6FE99F9F");

            entity.HasOne(d => d.Source).WithMany(p => p.JourneySources)
                .HasForeignKey(d => d.SourceId)
                .HasConstraintName("FK__Journey__SourceI__6A30C649");
        });

        modelBuilder.Entity<JourneyClassPrice>(entity =>
        {
            entity.HasKey(e => e.JourneyClassPriceId).HasName("PK__JourneyC__4198C048AA320409");

            entity.ToTable("JourneyClassPrice");

            entity.HasOne(d => d.JourneyClassTypeNavigation).WithMany(p => p.JourneyClassPrices)
                .HasForeignKey(d => d.JourneyClassType)
                .HasConstraintName("FK__JourneyCl__Journ__628FA481");
        });

        modelBuilder.Entity<LocationDatum>(entity =>
        {
            entity.HasKey(e => e.LocationId).HasName("PK__Location__E7FEA497FCA08193");

            entity.Property(e => e.LocationId).ValueGeneratedNever();
            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.LastModificationDate).HasColumnType("datetime");
            entity.Property(e => e.LocationName).HasMaxLength(50);

            entity.HasOne(d => d.Country).WithMany(p => p.InverseCountry)
                .HasForeignKey(d => d.CountryId)
                .HasConstraintName("FK__LocationD__Count__440B1D61");

            entity.HasOne(d => d.Created).WithMany(p => p.LocationDatumCreateds)
                .HasForeignKey(d => d.CreatedId)
                .HasConstraintName("FK__LocationD__Creat__44FF419A");

            entity.HasOne(d => d.LastModification).WithMany(p => p.LocationDatumLastModifications)
                .HasForeignKey(d => d.LastModificationId)
                .HasConstraintName("FK__LocationD__LastM__45F365D3");
        });

        modelBuilder.Entity<Passenger>(entity =>
        {
            entity.HasKey(e => e.PassengerId).HasName("PK__Passenge__88915FB0EF73DFAD");

            entity.ToTable("Passenger");

            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.FullName).HasMaxLength(50);
            entity.Property(e => e.Gender).HasMaxLength(20);
            entity.Property(e => e.LastModificationDate).HasColumnType("datetime");
            entity.Property(e => e.SeatNumber).HasMaxLength(10);

            entity.HasOne(d => d.Booking).WithMany(p => p.Passengers)
                .HasForeignKey(d => d.BookingId)
                .HasConstraintName("FK__Passenger__Booki__787EE5A0");

            entity.HasOne(d => d.Created).WithMany(p => p.PassengerCreateds)
                .HasForeignKey(d => d.CreatedId)
                .HasConstraintName("FK__Passenger__Creat__7B5B524B");

            entity.HasOne(d => d.LastModification).WithMany(p => p.PassengerLastModifications)
                .HasForeignKey(d => d.LastModificationId)
                .HasConstraintName("FK__Passenger__LastM__7C4F7684");

            entity.HasOne(d => d.PassengerType).WithMany(p => p.Passengers)
                .HasForeignKey(d => d.PassengerTypeId)
                .HasConstraintName("FK__Passenger__Passe__7A672E12");

            entity.HasOne(d => d.SeatType).WithMany(p => p.Passengers)
                .HasForeignKey(d => d.SeatTypeId)
                .HasConstraintName("FK__Passenger__SeatT__797309D9");
        });

        modelBuilder.Entity<PassengerOffer>(entity =>
        {
            entity.HasKey(e => e.PassengerOfferId).HasName("PK__Passenge__DFBAD1A3ACF31FC2");

            entity.ToTable("PassengerOffer");

            entity.HasOne(d => d.PassengerTypeNavigation).WithMany(p => p.PassengerOffers)
                .HasForeignKey(d => d.PassengerType)
                .HasConstraintName("FK__Passenger__Passe__656C112C");
        });

        modelBuilder.Entity<PassengerType>(entity =>
        {
            entity.HasKey(e => e.PassengerTypeId).HasName("PK__Passenge__EE63A296CBCE04CC");

            entity.ToTable("PassengerType");

            entity.Property(e => e.PassengerType1)
                .HasMaxLength(50)
                .HasColumnName("PassengerType");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.RoleId).HasName("PK__Roles__8AFACE1A74BB27D5");

            entity.Property(e => e.RoleName).HasMaxLength(50);
        });

        modelBuilder.Entity<SeatClassType>(entity =>
        {
            entity.HasKey(e => e.SeatClassId).HasName("PK__SeatClas__41D153A8CC478784");

            entity.ToTable("SeatClassType");

            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.LastModificationDate).HasColumnType("datetime");
            entity.Property(e => e.SeatClassName).HasMaxLength(50);

            entity.HasOne(d => d.Created).WithMany(p => p.SeatClassTypeCreateds)
                .HasForeignKey(d => d.CreatedId)
                .HasConstraintName("FK__SeatClass__Creat__4D94879B");

            entity.HasOne(d => d.LastModification).WithMany(p => p.SeatClassTypeLastModifications)
                .HasForeignKey(d => d.LastModificationId)
                .HasConstraintName("FK__SeatClass__LastM__4E88ABD4");
        });

        modelBuilder.Entity<SeatLocation>(entity =>
        {
            entity.HasKey(e => e.SeatTypeId).HasName("PK__SeatLoca__7468C4FE5EC5050A");

            entity.ToTable("SeatLocation");

            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.LastModificationDate).HasColumnType("datetime");
            entity.Property(e => e.SeatTypeName).HasMaxLength(50);

            entity.HasOne(d => d.ClassTypeNavigation).WithMany(p => p.SeatLocations)
                .HasForeignKey(d => d.ClassType)
                .HasConstraintName("FK__SeatLocat__Class__5165187F");

            entity.HasOne(d => d.Created).WithMany(p => p.SeatLocationCreateds)
                .HasForeignKey(d => d.CreatedId)
                .HasConstraintName("FK__SeatLocat__Creat__52593CB8");

            entity.HasOne(d => d.LastModification).WithMany(p => p.SeatLocationLastModifications)
                .HasForeignKey(d => d.LastModificationId)
                .HasConstraintName("FK__SeatLocat__LastM__534D60F1");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PK__Users__1788CC4C5E0DA830");

            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.FullName).HasMaxLength(50);
            entity.Property(e => e.Gender).HasMaxLength(20);
            entity.Property(e => e.ImageUrl).HasMaxLength(50);
            entity.Property(e => e.LastLoginDate).HasColumnType("datetime");
            entity.Property(e => e.LastModificationDate).HasColumnType("datetime");
            entity.Property(e => e.OtpTime).HasColumnType("datetime");
            entity.Property(e => e.PhoneNumber).HasMaxLength(10);
            entity.Property(e => e.UserEmail).HasMaxLength(100);

            entity.HasOne(d => d.Created).WithMany(p => p.InverseCreated)
                .HasForeignKey(d => d.CreatedId)
                .HasConstraintName("FK__Users__CreatedId__3B75D760");

            entity.HasOne(d => d.LastModification).WithMany(p => p.InverseLastModification)
                .HasForeignKey(d => d.LastModificationId)
                .HasConstraintName("FK__Users__LastModif__3C69FB99");

            entity.HasOne(d => d.Role).WithMany(p => p.Users)
                .HasForeignKey(d => d.RoleId)
                .HasConstraintName("FK__Users__RoleId__3D5E1FD2");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
