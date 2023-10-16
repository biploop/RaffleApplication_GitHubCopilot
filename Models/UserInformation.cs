using System;
using System.Collections.Generic;

namespace RaffleApplication.Models;

public partial class UserInformation
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string Sex { get; set; } = null!;

    public int Age { get; set; }

    public DateTime Birthdate { get; set; }

    public string Address { get; set; } = null!;

    public string EmailAddress { get; set; } = null!;

    public long ContactNumber { get; set; }

    public long PaypalAccountNumber { get; set; }
}
