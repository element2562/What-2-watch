using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace What2WatchBackend.Models
{
    public class Movie
    {
        [Key]
        public int MovieId { get; set; }

        [Required]
        public int MovieDbId { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Summary { get; set; }

        [Required]
        public double Rating { get; set; }

        public int? UserRating { get; set; }

        public int UserId { get; set; }

        public User User { get; set; }
    }
}
