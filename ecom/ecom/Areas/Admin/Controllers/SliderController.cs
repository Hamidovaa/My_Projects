using ecom.DataAccesLayer;
using ecom.Models;
using Microsoft.AspNetCore.Mvc;

namespace ecom.Controllers
{
    [Area("Admin")]
    public class SliderController : Controller
    {
        private readonly AppDbContext appDbContext;

        public SliderController(AppDbContext _appDbContext)
        {

            appDbContext = _appDbContext;
        }
        public IActionResult Index()
        {
            return View(appDbContext.sliders.ToList());
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(Slider slider)
        {
            //slider.ImgUrl = "test";
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
