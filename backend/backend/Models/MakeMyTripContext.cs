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

    public virtual DbSet<BaggageRule> BaggageRules { get; set; }

    public virtual DbSet<BaggageType> BaggageTypes { get; set; }

    public virtual DbSet<Booking> Bookings { get; set; }

    public virtual DbSet<CancellationRule> CancellationRules { get; set; }

    public virtual DbSet<CancellationType> CancellationTypes { get; set; }

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
    {
        if (!optionsBuilder.IsConfigured)
        {
            var connectionString = Environment.GetEnvironmentVariable("DefaultConnection");
            optionsBuilder.UseSqlServer(connectionString);
        }
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Airline>(entity =>
        {
            entity.HasKey(e => e.AirlineId).HasName("PK__Airline__DC458213AC549172");

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
            entity.HasKey(e => e.AirportId).HasName("PK__AirportD__E3DBE0EAB81B82F2");

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

        modelBuilder.Entity<BaggageRule>(entity =>
        {
            entity.HasKey(e => e.BaggageRuleId).HasName("PK__BaggageR__B9D6827E2D943EF6");

            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.DefaultWeight).HasColumnType("decimal(10, 2)");
            entity.Property(e => e.Fee).HasColumnType("decimal(10, 2)");
            entity.Property(e => e.LastModificationDate).HasColumnType("datetime");
            entity.Property(e => e.MaxWeight).HasColumnType("decimal(10, 2)");

            entity.HasOne(d => d.Airline).WithMany(p => p.BaggageRules)
                .HasForeignKey(d => d.AirlineId)
                .HasConstraintName("FK__BaggageRu__Airli__70DDC3D8");

            entity.HasOne(d => d.BaggageType).WithMany(p => p.BaggageRules)
                .HasForeignKey(d => d.BaggageTypeId)
                .HasConstraintName("FK__BaggageRu__Bagga__72C60C4A");

            entity.HasOne(d => d.Created).WithMany(p => p.BaggageRuleCreateds)
                .HasForeignKey(d => d.CreatedId)
                .HasConstraintName("FK__BaggageRu__Creat__73BA3083");

            entity.HasOne(d => d.FlightclassStructure).WithMany(p => p.BaggageRules)
                .HasForeignKey(d => d.FlightclassStructureId)
                .HasConstraintName("FK__BaggageRu__Fligh__71D1E811");

            entity.HasOne(d => d.LastModification).WithMany(p => p.BaggageRuleLastModifications)
                .HasForeignKey(d => d.LastModificationId)
                .HasConstraintName("FK__BaggageRu__LastM__74AE54BC");
        });

        modelBuilder.Entity<BaggageType>(entity =>
        {
            entity.HasKey(e => e.BaggageTypeId).HasName("PK__BaggageT__56E9583A00D9BD39");

            entity.Property(e => e.BaggageTypeId).ValueGeneratedNever();
            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.LastModificationDate).HasColumnType("datetime");
            entity.Property(e => e.TypeName).HasMaxLength(50);

            entity.HasOne(d => d.Created).WithMany(p => p.BaggageTypeCreateds)
                .HasForeignKey(d => d.CreatedId)
                .HasConstraintName("FK__BaggageTy__Creat__6D0D32F4");

            entity.HasOne(d => d.LastModification).WithMany(p => p.BaggageTypeLastModifications)
                .HasForeignKey(d => d.LastModificationId)
                .HasConstraintName("FK__BaggageTy__LastM__6E01572D");
        });

        modelBuilder.Entity<Booking>(entity =>
        {
            entity.HasKey(e => e.BookingId).HasName("PK__Booking__73951AEDBA172458");

            entity.ToTable("Booking");

            entity.Property(e => e.BookingId).ValueGeneratedNever();
            entity.Property(e => e.BookingDate).HasColumnType("datetime");
            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.LastModificationDate).HasColumnType("datetime");
            entity.Property(e => e.TotalFare).HasColumnType("decimal(10, 2)");

            entity.HasOne(d => d.Created).WithMany(p => p.BookingCreateds)
                .HasForeignKey(d => d.CreatedId)
                .HasConstraintName("FK__Booking__Created__04E4BC85");

            entity.HasOne(d => d.Journey).WithMany(p => p.Bookings)
                .HasForeignKey(d => d.JourneyId)
                .HasConstraintName("FK__Booking__Journey__02FC7413");

            entity.HasOne(d => d.LastModification).WithMany(p => p.BookingLastModifications)
                .HasForeignKey(d => d.LastModificationId)
                .HasConstraintName("FK__Booking__LastMod__05D8E0BE");

            entity.HasOne(d => d.User).WithMany(p => p.BookingUsers)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__Booking__UserId__03F0984C");
        });

        modelBuilder.Entity<CancellationRule>(entity =>
        {
            entity.HasKey(e => e.RuleId).HasName("PK__Cancella__110458E2551B3DF8");

            entity.Property(e => e.AirlineFee).HasColumnType("decimal(10, 2)");
            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.LastModificationDate).HasColumnType("datetime");

            entity.HasOne(d => d.Airline).WithMany(p => p.CancellationRules)
                .HasForeignKey(d => d.AirlineId)
                .HasConstraintName("FK__Cancellat__Airli__6754599E");

            entity.HasOne(d => d.CancellationType).WithMany(p => p.CancellationRules)
                .HasForeignKey(d => d.CancellationTypeId)
                .HasConstraintName("FK__Cancellat__Cance__6A30C649");

            entity.HasOne(d => d.Created).WithMany(p => p.CancellationRuleCreateds)
                .HasForeignKey(d => d.CreatedId)
                .HasConstraintName("FK__Cancellat__Creat__68487DD7");

            entity.HasOne(d => d.LastModification).WithMany(p => p.CancellationRuleLastModifications)
                .HasForeignKey(d => d.LastModificationId)
                .HasConstraintName("FK__Cancellat__LastM__693CA210");
        });

        modelBuilder.Entity<CancellationType>(entity =>
        {
            entity.HasKey(e => e.TypeId).HasName("PK__Cancella__516F03B5A8C99753");

            entity.Property(e => e.TypeName)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Flight>(entity =>
        {
            entity.HasKey(e => e.FlightId).HasName("PK__Flight__8A9E14EE6390074F");

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
            entity.HasKey(e => e.FlightclassStructureId).HasName("PK__Flightcl__631F102C88CA1FB6");

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
            entity.HasKey(e => e.JourneyId).HasName("PK__Journey__4159B9EF6B2B66ED");

            entity.ToTable("Journey");

            entity.Property(e => e.ArrivalTime).HasColumnType("datetime");
            entity.Property(e => e.DepartureTime).HasColumnType("datetime");
            entity.Property(e => e.SeatbasicPrice).HasColumnType("decimal(10, 2)");

            entity.HasOne(d => d.AdultNavigation).WithMany(p => p.JourneyAdultNavigations)
                .HasForeignKey(d => d.Adult)
                .HasConstraintName("FK__Journey__Adult__7A672E12");

            entity.HasOne(d => d.ChildNavigation).WithMany(p => p.JourneyChildNavigations)
                .HasForeignKey(d => d.Child)
                .HasConstraintName("FK__Journey__Child__7B5B524B");

            entity.HasOne(d => d.Destination).WithMany(p => p.JourneyDestinations)
                .HasForeignKey(d => d.DestinationId)
                .HasConstraintName("FK__Journey__Destina__787EE5A0");

            entity.HasOne(d => d.Flight).WithMany(p => p.Journeys)
                .HasForeignKey(d => d.FlightId)
                .HasConstraintName("FK__Journey__FlightI__778AC167");

            entity.HasOne(d => d.InfantsNavigation).WithMany(p => p.JourneyInfantsNavigations)
                .HasForeignKey(d => d.Infants)
                .HasConstraintName("FK__Journey__Infants__7C4F7684");

            entity.HasOne(d => d.Source).WithMany(p => p.JourneySources)
                .HasForeignKey(d => d.SourceId)
                .HasConstraintName("FK__Journey__SourceI__797309D9");
        });

        modelBuilder.Entity<JourneyClassPrice>(entity =>
        {
            entity.HasKey(e => e.JourneyClassPriceId).HasName("PK__JourneyC__4198C048071EB552");

            entity.ToTable("JourneyClassPrice");

            entity.Property(e => e.AirlineId).HasColumnName("airlineId");

            entity.HasOne(d => d.Airline).WithMany(p => p.JourneyClassPrices)
                .HasForeignKey(d => d.AirlineId)
                .HasConstraintName("FK__JourneyCl__airli__00200768");

            entity.HasOne(d => d.JourneyClassTypeNavigation).WithMany(p => p.JourneyClassPrices)
                .HasForeignKey(d => d.JourneyClassType)
                .HasConstraintName("FK__JourneyCl__Journ__7F2BE32F");
        });

        modelBuilder.Entity<LocationDatum>(entity =>
        {
            entity.HasKey(e => e.LocationId).HasName("PK__Location__E7FEA4977834B9CE");

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
            entity.HasKey(e => e.PassengerId).HasName("PK__Passenge__88915FB0FB71D2CD");

            entity.ToTable("Passenger");

            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.FullName).HasMaxLength(50);
            entity.Property(e => e.Gender).HasMaxLength(20);
            entity.Property(e => e.LastModificationDate).HasColumnType("datetime");
            entity.Property(e => e.SeatClass).HasColumnName("seatClass");
            entity.Property(e => e.SeatNumber).HasMaxLength(10);

            entity.HasOne(d => d.Booking).WithMany(p => p.Passengers)
                .HasForeignKey(d => d.BookingId)
                .HasConstraintName("FK__Passenger__Booki__08B54D69");

            entity.HasOne(d => d.Created).WithMany(p => p.PassengerCreateds)
                .HasForeignKey(d => d.CreatedId)
                .HasConstraintName("FK__Passenger__Creat__0B91BA14");

            entity.HasOne(d => d.LastModification).WithMany(p => p.PassengerLastModifications)
                .HasForeignKey(d => d.LastModificationId)
                .HasConstraintName("FK__Passenger__LastM__0C85DE4D");

            entity.HasOne(d => d.PassengerType).WithMany(p => p.Passengers)
                .HasForeignKey(d => d.PassengerTypeId)
                .HasConstraintName("FK__Passenger__Passe__0A9D95DB");

            entity.HasOne(d => d.SeatClassNavigation).WithMany(p => p.Passengers)
                .HasForeignKey(d => d.SeatClass)
                .HasConstraintName("FK__Passenger__seatC__09A971A2");
        });

        modelBuilder.Entity<PassengerOffer>(entity =>
        {
            entity.HasKey(e => e.PassengerOfferId).HasName("PK__Passenge__DFBAD1A35E9201E9");

            entity.ToTable("PassengerOffer");

            entity.HasOne(d => d.PassengerTypeNavigation).WithMany(p => p.PassengerOffers)
                .HasForeignKey(d => d.PassengerType)
                .HasConstraintName("FK__Passenger__Passe__628FA481");
        });

        modelBuilder.Entity<PassengerType>(entity =>
        {
            entity.HasKey(e => e.PassengerTypeId).HasName("PK__Passenge__EE63A296F5DC845C");

            entity.ToTable("PassengerType");

            entity.Property(e => e.PassengerType1)
                .HasMaxLength(50)
                .HasColumnName("PassengerType");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.RoleId).HasName("PK__Roles__8AFACE1AB1925FB9");

            entity.Property(e => e.RoleName).HasMaxLength(50);
        });

        modelBuilder.Entity<SeatClassType>(entity =>
        {
            entity.HasKey(e => e.SeatClassId).HasName("PK__SeatClas__41D153A88CEDFC52");

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
            entity.HasKey(e => e.SeatTypeId).HasName("PK__SeatLoca__7468C4FE3DCBFA47");

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
            entity.HasKey(e => e.UserId).HasName("PK__Users__1788CC4C921D9E1E");

            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.FullName).HasMaxLength(50);
            entity.Property(e => e.Gender).HasMaxLength(20);
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
