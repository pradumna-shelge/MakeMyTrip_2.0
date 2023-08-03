using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class User
{
    public int UserId { get; set; }

    public string? FullName { get; set; }

    public string? Gender { get; set; }

    public string? Address { get; set; }

    public string? ImageUrl { get; set; }

    public string? UserEmail { get; set; }

    public string? PhoneNumber { get; set; }

    public string? Password { get; set; }

    public DateTime? LastLoginDate { get; set; }

    public int? CreatedId { get; set; }

    public DateTime? CreatedDate { get; set; }

    public int? LastModificationId { get; set; }

    public DateTime? LastModificationDate { get; set; }

    public int? UserOtp { get; set; }

    public DateTime? OtpTime { get; set; }

    public int? RoleId { get; set; }

    public virtual ICollection<Airline> AirlineCreateds { get; set; } = new List<Airline>();

    public virtual ICollection<Airline> AirlineLastModifications { get; set; } = new List<Airline>();

    public virtual ICollection<AirportDatum> AirportDatumCreateds { get; set; } = new List<AirportDatum>();

    public virtual ICollection<AirportDatum> AirportDatumLastModifications { get; set; } = new List<AirportDatum>();

    public virtual ICollection<BaggageRule> BaggageRuleCreateds { get; set; } = new List<BaggageRule>();

    public virtual ICollection<BaggageRule> BaggageRuleLastModifications { get; set; } = new List<BaggageRule>();

    public virtual ICollection<BaggageType> BaggageTypeCreateds { get; set; } = new List<BaggageType>();

    public virtual ICollection<BaggageType> BaggageTypeLastModifications { get; set; } = new List<BaggageType>();

    public virtual ICollection<Booking> BookingCreateds { get; set; } = new List<Booking>();

    public virtual ICollection<Booking> BookingLastModifications { get; set; } = new List<Booking>();

    public virtual ICollection<Booking> BookingUsers { get; set; } = new List<Booking>();

    public virtual ICollection<CancellationRule> CancellationRuleCreateds { get; set; } = new List<CancellationRule>();

    public virtual ICollection<CancellationRule> CancellationRuleLastModifications { get; set; } = new List<CancellationRule>();

    public virtual User? Created { get; set; }

    public virtual ICollection<Flight> FlightCreateds { get; set; } = new List<Flight>();

    public virtual ICollection<Flight> FlightLastModifications { get; set; } = new List<Flight>();

    public virtual ICollection<FlightclassStructure> FlightclassStructureCreateds { get; set; } = new List<FlightclassStructure>();

    public virtual ICollection<FlightclassStructure> FlightclassStructureLastModifications { get; set; } = new List<FlightclassStructure>();

    public virtual ICollection<User> InverseCreated { get; set; } = new List<User>();

    public virtual ICollection<User> InverseLastModification { get; set; } = new List<User>();

    public virtual User? LastModification { get; set; }

    public virtual ICollection<LocationDatum> LocationDatumCreateds { get; set; } = new List<LocationDatum>();

    public virtual ICollection<LocationDatum> LocationDatumLastModifications { get; set; } = new List<LocationDatum>();

    public virtual ICollection<Passenger> PassengerCreateds { get; set; } = new List<Passenger>();

    public virtual ICollection<Passenger> PassengerLastModifications { get; set; } = new List<Passenger>();

    public virtual Role? Role { get; set; }

    public virtual ICollection<SeatClassType> SeatClassTypeCreateds { get; set; } = new List<SeatClassType>();

    public virtual ICollection<SeatClassType> SeatClassTypeLastModifications { get; set; } = new List<SeatClassType>();

    public virtual ICollection<SeatLocation> SeatLocationCreateds { get; set; } = new List<SeatLocation>();

    public virtual ICollection<SeatLocation> SeatLocationLastModifications { get; set; } = new List<SeatLocation>();
}
