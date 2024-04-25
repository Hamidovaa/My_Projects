using ecom.Models;
using Microsoft.EntityFrameworkCore;

namespace ecom.DataAccesLayer
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions <AppDbContext> options): base (options) 
        {
            
        }
        public DbSet<Slider> sliders {  get; set; }
    }
}
