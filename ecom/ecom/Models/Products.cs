using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using System.ComponentModel.DataAnnotations.Schema;

namespace ecom.Models
{
    public class Products
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public int CategorytId { get; set; }
        [ForeignKey("CategorytId")]
        [ValidateNever]
        public Category Category {  get; set; }
    }
}
