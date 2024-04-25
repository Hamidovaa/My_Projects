using System.ComponentModel.DataAnnotations;

namespace ecom.Models
{
    public class Slider
    {
        public int Id { get; set; }
        [Required]
        public string SubTitle { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Price { get; set; }
        public string? ImgUrl { get; set; }
    }
}
