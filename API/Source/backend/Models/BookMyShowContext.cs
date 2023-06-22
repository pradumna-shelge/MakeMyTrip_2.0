using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace backend.Models;

public partial class BookMyShowContext : DbContext
{
    public BookMyShowContext()
    {
    }

    public BookMyShowContext(DbContextOptions<BookMyShowContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Airline> Airlines { get; set; }

    public virtual DbSet<AirportDatum> AirportData { get; set; }

    public virtual DbSet<Flight> Flights { get; set; }

    public virtual DbSet<Journey> Journeys { get; set; }

    public virtual DbSet<LocationDatum> LocationData { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<SeatType> SeatTypes { get; set; }

    public virtual DbSet<StatusDatum> StatusData { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=PC0577\\MSSQL2019;Database=BookMyShow;Trusted_Connection=True;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Airline>(entity =>
        {
            entity.HasKey(e => e.AirlineId).HasName("PK__Airline__DC458213B78B5695");

            entity.ToTable("Airline");

            entity.Property(e => e.AirlineName).HasMaxLength(50);
            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.LastModificationDate).HasColumnType("datetime");

            entity.HasOne(d => d.Created).WithMany(p => p.AirlineCreateds)
                .HasForeignKey(d => d.CreatedId)
                .HasConstraintName("FK__Airline__Created__5CD6CB2B");

            entity.HasOne(d => d.LastModification).WithMany(p => p.AirlineLastModifications)
                .HasForeignKey(d => d.LastModificationId)
                .HasConstraintName("FK__Airline__LastMod__5DCAEF64");
        });

        modelBuilder.Entity<AirportDatum>(entity =>
        {
            entity.HasKey(e => e.AirportId).HasName("PK__AirportD__E3DBE0EA0FA20C34");

            entity.Property(e => e.AirportId).ValueGeneratedNever();
            entity.Property(e => e.AirportCode).HasMaxLength(50);
            entity.Property(e => e.AirportName).HasMaxLength(50);
            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.LastModificationDate).HasColumnType("datetime");

            entity.HasOne(d => d.Address).WithMany(p => p.AirportData)
                .HasForeignKey(d => d.AddressId)
                .HasConstraintName("FK__AirportDa__Addre__45F365D3");

            entity.HasOne(d => d.Created).WithMany(p => p.AirportDatumCreateds)
                .HasForeignKey(d => d.CreatedId)
                .HasConstraintName("FK__AirportDa__Creat__46E78A0C");

            entity.HasOne(d => d.LastModification).WithMany(p => p.AirportDatumLastModifications)
                .HasForeignKey(d => d.LastModificationId)
                .HasConstraintName("FK__AirportDa__LastM__47DBAE45");
        });

        modelBuilder.Entity<Flight>(entity =>
        {
            entity.HasKey(e => e.FlightId).HasName("PK__Flight__8A9E14EE318B2AD3");

            entity.ToTable("Flight");

            entity.Property(e => e.AirlineId).HasColumnName("airlineId");
            entity.Property(e => e.CreatedDate)
                .HasColumnType("datetime")
                .HasColumnName("createdDate");
            entity.Property(e => e.CreatedId).HasColumnName("createdId");
            entity.Property(e => e.FlightName).HasMaxLength(50);
            entity.Property(e => e.LastModificationDate).HasColumnType("datetime");

            entity.HasOne(d => d.Airline).WithMany(p => p.Flights)
                .HasForeignKey(d => d.AirlineId)
                .HasConstraintName("FK__Flight__airlineI__7F2BE32F");
        });

        modelBuilder.Entity<Journey>(entity =>
        {
            entity.HasKey(e => e.JourneyId).HasName("PK__Journey__BBECC39F6C93D4B9");

            entity.ToTable("Journey");

            entity.Property(e => e.JourneyId)
                .ValueGeneratedNever()
                .HasColumnName("journeyId");
            entity.Property(e => e.Arrivaltime)
                .HasColumnType("datetime")
                .HasColumnName("arrivaltime");
            entity.Property(e => e.CreatedDate)
                .HasColumnType("datetime")
                .HasColumnName("createdDate");
            entity.Property(e => e.CreatedId).HasColumnName("createdId");
            entity.Property(e => e.Departuretime)
                .HasColumnType("datetime")
                .HasColumnName("departuretime");
            entity.Property(e => e.DestinationId).HasColumnName("destinationId");
            entity.Property(e => e.LastModificationDate).HasColumnType("datetime");
            entity.Property(e => e.SeatbasicPrice).HasColumnType("decimal(10, 2)");
            entity.Property(e => e.SourceId).HasColumnName("sourceId");
            entity.Property(e => e.StatusFor).HasColumnName("statusFor");

            entity.HasOne(d => d.Destination).WithMany(p => p.JourneyDestinations)
                .HasForeignKey(d => d.DestinationId)
                .HasConstraintName("FK__Journey__destina__04E4BC85");

            entity.HasOne(d => d.Flight).WithMany(p => p.Journeys)
                .HasForeignKey(d => d.FlightId)
                .HasConstraintName("FK__Journey__FlightI__06CD04F7");

            entity.HasOne(d => d.Source).WithMany(p => p.JourneySources)
                .HasForeignKey(d => d.SourceId)
                .HasConstraintName("FK__Journey__sourceI__05D8E0BE");

            entity.HasOne(d => d.StatusForNavigation).WithMany(p => p.Journeys)
                .HasForeignKey(d => d.StatusFor)
                .HasConstraintName("FK__Journey__statusF__07C12930");
        });

        modelBuilder.Entity<LocationDatum>(entity =>
        {
            entity.HasKey(e => e.LocationId).HasName("PK__Location__E7FEA49728F64D0B");

            entity.Property(e => e.LocationId).ValueGeneratedNever();
            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.LastModificationDate).HasColumnType("datetime");
            entity.Property(e => e.LocationName).HasMaxLength(50);

            entity.HasOne(d => d.Country).WithMany(p => p.InverseCountry)
                .HasForeignKey(d => d.CountryId)
                .HasConstraintName("FK__LocationD__Count__412EB0B6");

            entity.HasOne(d => d.Created).WithMany(p => p.LocationDatumCreateds)
                .HasForeignKey(d => d.CreatedId)
                .HasConstraintName("FK__LocationD__Creat__4222D4EF");

            entity.HasOne(d => d.LastModification).WithMany(p => p.LocationDatumLastModifications)
                .HasForeignKey(d => d.LastModificationId)
                .HasConstraintName("FK__LocationD__LastM__4316F928");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.RoleId).HasName("PK__Roles__8AFACE1AF1DAE2F3");

            entity.Property(e => e.RoleName).HasMaxLength(50);
        });

        modelBuilder.Entity<SeatType>(entity =>
        {
            entity.HasKey(e => e.SeatTypeId).HasName("PK__SeatType__7468C4FE53A65E05");

            entity.ToTable("SeatType");

            entity.Property(e => e.SeatTypeId).ValueGeneratedNever();
            entity.Property(e => e.SeatTypeName).HasMaxLength(50);

            entity.HasOne(d => d.Location).WithMany(p => p.InverseLocation)
                .HasForeignKey(d => d.LocationId)
                .HasConstraintName("FK__SeatType__Locati__02084FDA");
        });

        modelBuilder.Entity<StatusDatum>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__StatusDa__3213E83FF5B00EBE");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.CreatedDate)
                .HasColumnType("datetime")
                .HasColumnName("createdDate");
            entity.Property(e => e.CreatedId).HasColumnName("createdId");
            entity.Property(e => e.LastModificationDate).HasColumnType("datetime");
            entity.Property(e => e.StatusFor).HasColumnName("statusFor");
            entity.Property(e => e.Statusval)
                .HasMaxLength(50)
                .HasColumnName("statusval");

            entity.HasOne(d => d.StatusForNavigation).WithMany(p => p.InverseStatusForNavigation)
                .HasForeignKey(d => d.StatusFor)
                .HasConstraintName("FK__StatusDat__statu__6D0D32F4");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PK__User__1788CC4C11FAA2B1");

            entity.ToTable("User");

            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.ImageUrl).HasMaxLength(50);
            entity.Property(e => e.LastLoginDate).HasColumnType("datetime");
            entity.Property(e => e.LastModificationDate).HasColumnType("datetime");
            entity.Property(e => e.PhoneNumber).HasMaxLength(20);
            entity.Property(e => e.UserAddress).HasMaxLength(100);
            entity.Property(e => e.UserEmail).HasMaxLength(100);
            entity.Property(e => e.Username).HasMaxLength(50);

            entity.HasOne(d => d.Created).WithMany(p => p.InverseCreated)
                .HasForeignKey(d => d.CreatedId)
                .HasConstraintName("FK__User__CreatedId__3C69FB99");

            entity.HasOne(d => d.LastModification).WithMany(p => p.InverseLastModification)
                .HasForeignKey(d => d.LastModificationId)
                .HasConstraintName("FK__User__LastModifi__3D5E1FD2");

            entity.HasOne(d => d.Role).WithMany(p => p.Users)
                .HasForeignKey(d => d.RoleId)
                .HasConstraintName("FK__User__RoleId__3E52440B");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
