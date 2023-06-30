using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class User
{
    public int UserId { get; set; }

    public string? Username { get; set; }

    public string? ImageUrl { get; set; }

    public string? UserEmail { get; set; }

    public string? UserAddress { get; set; }

    public string? PhoneNumber { get; set; }

    public DateTime? CreatedDate { get; set; }

    public int? CreatedId { get; set; }

    public DateTime? LastLoginDate { get; set; }

    public DateTime? LastModificationDate { get; set; }

    public int? LastModificationId { get; set; }

    public int? RoleId { get; set; }

    public int? UserOtp { get; set; }

    public DateTime? UserOtpDate { get; set; }

    public virtual ICollection<Airline> AirlineCreateds { get; set; } = new List<Airline>();

    public virtual ICollection<Airline> AirlineLastModifications { get; set; } = new List<Airline>();

    public virtual ICollection<AirportDatum> AirportDatumCreateds { get; set; } = new List<AirportDatum>();

    public virtual ICollection<AirportDatum> AirportDatumLastModifications { get; set; } = new List<AirportDatum>();

    public virtual User? Created { get; set; }

    public virtual ICollection<User> InverseCreated { get; set; } = new List<User>();

    public virtual ICollection<User> InverseLastModification { get; set; } = new List<User>();

    public virtual User? LastModification { get; set; }

    public virtual ICollection<LocationDatum> LocationDatumCreateds { get; set; } = new List<LocationDatum>();

    public virtual ICollection<LocationDatum> LocationDatumLastModifications { get; set; } = new List<LocationDatum>();

    public virtual Role? Role { get; set; }
}
