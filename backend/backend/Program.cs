using backend.Models;
using backend.RepoPattern.classess;
using backend.RepoPattern.Interfaces;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<MakeMyTripContext>();
builder.Services.AddScoped<IAirportData, Airpots>();
builder.Services.AddScoped<ICity, Cityes>();
builder.Services.AddScoped<IJourney, Journeyclass>();
builder.Services.AddScoped<IAirlines, Airelines>();
builder.Services.AddScoped<Iflight, Flights>();
builder.Services.AddScoped<IUser, userRepo>();
builder.Services.AddScoped<Ibooking, booking>();
builder.Services.AddScoped<IPassenger, passenger>();


builder.Services.AddControllers().AddJsonOptions(x =>
                x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);


builder.Services.AddCors(options => { options.AddPolicy("CorsPolicy", builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()); });


var tk = builder.Configuration.GetSection("Jwt");

var tokenval = new TokenValidationParameters
{
    ValidateIssuer = true,
    ValidateAudience = true,
    ValidateLifetime = true,
    ValidateIssuerSigningKey = true,
    ValidIssuer = tk["Issuer"],
    ValidAudience = tk["Audience"],
    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tk["Key"]))
};

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(o =>
    {
        o.TokenValidationParameters = tokenval;
    })
    ;









var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("CorsPolicy");
app.UseAuthorization();

app.MapControllers();

app.Run();
//Scaffold-DbContext "Server=PRADUMNA\SQLEXPRESS;Database=MakeMyTrip;Trusted_Connection=True;TrustServerCertificate=True;" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models -f
//- DbContext "Server=PRADUMNA\SQLEXPRESS;Database=MakeMyTrip;Trusted_Connection=True;TrustServerCertificate=True;" Microsoft.EntityFrameworkCore.SqlServer - OutputDir Models - f