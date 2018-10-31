using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace What2Watch.Models
{
    public class Movie
    {
        [Key]
        public int MovieId { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Summary { get; set; }

        [Required]
        public double Rating { get; set; }

        [Required]
        public double? UserRating { get; set; }

        [Required]
        public int UserId { get; set; }

        public User User { get; set; }
    }
}
