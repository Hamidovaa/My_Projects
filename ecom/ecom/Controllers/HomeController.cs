using ecom.DataAccesLayer;
using ecom.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.IO.Pipelines;

namespace ecom.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        private AppDbContext appDbContext;

        public HomeController(ILogger<HomeController> logger, AppDbContext _appDbContext)
        {
            _logger = logger;
           appDbContext=_appDbContext;
        }

        public IActionResult Index()
        {


            //List<Slider> sliderlist = new List<Slider>();
            //Slider slider = new Slider()
            //{
            //    id = 1,
            //    SubTitle = "GOOGLE HOME",
            //    Title = "A coral fabric base is coming soon",
            //    Price = "69.99",
            //    ImgUrl = "h3_s1.jpg",

            //};
            //Slider slider2 = new Slider()
            //{
            //    id = 1,
            //    SubTitle = "GOOGLE HOME",
            //    Title = "A coral fabric base is coming soon",
            //    Price = "69.99",
            //    ImgUrl = "h3_s2.jpg",

            //};
            //Slider slider3 = new Slider()
            //{
            //    id = 1,
            //    SubTitle = "GOOGLE HOME",
            //    Title = "A coral fabric base is coming soon",
            //    Price = "69.99",
            //    ImgUrl = "h3_s3.jpg",

            //};
            //sliderlist.Add(slider);
            //sliderlist.Add(slider2);
            //sliderlist.Add(slider3);

            //return View(sliderlist);
            return View(appDbContext.sliders.ToList());
            
        }

        public IActionResult Privacy()
        {
            return View();
        }
        public IActionResult About()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
