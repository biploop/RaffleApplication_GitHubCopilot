using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace RaffleApplication.Models;

public partial class RaffleDbContext : DbContext
{
    public RaffleDbContext()
    {
    }

    public RaffleDbContext(DbContextOptions<RaffleDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<BetInfo> BetInfos { get; set; }

    public virtual DbSet<UserInformation> UserInformations { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=LAPTOP-19A6U2OE; Database=RaffleDB; Integrated Security=True; TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<BetInfo>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("BetInfo");

            entity.Property(e => e.BetDate)
                .HasColumnType("datetime")
                .HasColumnName("betDate");
            entity.Property(e => e.DrawDate)
                .HasColumnType("datetime")
                .HasColumnName("drawDate");
        });

        modelBuilder.Entity<UserInformation>(entity =>
        {
            entity.ToTable("UserInformation");

            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnName("id");
            entity.Property(e => e.Address).HasColumnName("address");
            entity.Property(e => e.Age).HasColumnName("age");
            entity.Property(e => e.Birthdate)
                .HasColumnType("date")
                .HasColumnName("birthdate");
            entity.Property(e => e.ContactNumber).HasColumnName("contactNumber");
            entity.Property(e => e.EmailAddress).HasColumnName("emailAddress");
            entity.Property(e => e.Name).HasColumnName("name");
            entity.Property(e => e.PaypalAccountNumber).HasColumnName("paypalAccountNumber");
            entity.Property(e => e.Sex)
                .HasMaxLength(50)
                .HasColumnName("sex");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
