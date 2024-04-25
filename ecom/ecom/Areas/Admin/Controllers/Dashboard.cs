using ecom.DataAccesLayer;
using ecom.Models;
using Microsoft.AspNetCore.Mvc;

namespace ecom.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class Dashboard : Controller
    {
        private readonly AppDbContext appDbContext;

        public Dashboard(AppDbContext _appDbContext)
        {

            appDbContext = _appDbContext;
        }

        public IActionResult Index()
        {
            return View();
        }


        [HttpPost]
        public IActionResult Create(Slider slider)
        {
            slider.ImgUrl = "test";

            if (!ModelState.IsValid)
            {
                return View(slider);
            }

            appDbContext.sliders.Add(slider);
            appDbContext.SaveChanges();
            return RedirectToAction("Index");
        }
    }

}
