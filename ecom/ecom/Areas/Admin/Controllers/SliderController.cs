using ecom.DataAccesLayer;
using ecom.Controllers;
using ecom.Extension;
using ecom.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;



namespace ecom.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class SliderController : Controller
    {
        private readonly AppDbContext appDbContext;
        private readonly IWebHostEnvironment _env;

        public SliderController(AppDbContext _appDbContext, IWebHostEnvironment env)
        {

            appDbContext = _appDbContext;
            _env = env;
        }
        public IActionResult Index()
        {
            return View(appDbContext.Sliders.ToList());
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task < IActionResult> Create(Slider slider)
        {
            //slider.ImgUrl = "test";
            if (!ModelState.IsValid)
            {
                return View(slider);
            }

            if (!slider.file.IsImage())
            {
                ModelState.AddModelError("photo", "Image type is not valid");
                return View(slider);
            }
            string filename = await slider.file.SaveFileAsync(_env.WebRootPath , "UploadSlider");
            slider.ImgUrl=filename;

            appDbContext.Sliders.Add(slider);
            appDbContext.SaveChanges();

            return RedirectToAction("Index");
        }

        public IActionResult Delete(int id)
        {
            if (id == 0)
            {
                return NotFound();
            }
            var slider = appDbContext.Sliders.Find(id);
            if (slider != null)
            {
                appDbContext.Sliders.Remove(slider);
                appDbContext.SaveChanges();
            }
            return RedirectToAction("Index");
        }

        //public JsonResult Delete(int id)
        //{
        //    if (id == 0)
        //    {
        //        return Json(new
        //        {
        //            status = 400
        //        });
        //    }
        //    var slider = appDbContext.Sliders.Find(id);
        //    if (slider != null)
        //    {
        //        appDbContext.Sliders.Remove(slider);
        //        appDbContext.SaveChanges();
        //    }
        //    return Json(new
        //    {
        //        status = 200
        //    });
        //}



        [HttpGet]
        public IActionResult Edit(int id)
        {
            if (id == 0)
            {
                return NotFound();

            }
            var model = appDbContext.Sliders.FirstOrDefault(x => x.Id == id);
            if (model == null)
            {
                return RedirectToAction("Index");
            }
            return View(model);
        }

        //[HttpGet]
        //public JsonResult Edit(int id)
        //{
        //    if (id == 0)
        //    {
        //        return Json(new
        //        {
        //            status = 400
        //        });

        //    }
        //    var model = appDbContext.Sliders.FirstOrDefault(x => x.Id == id);
        //    if (model == null)
        //    {
        //        return Json(new
        //        {
        //            status = 400
        //        });
        //    }
        //    return Json(model);
        //}

        [HttpPost]
        public IActionResult Edit(Slider slider)
        {

            if (!ModelState.IsValid)
            {
                return View(slider);
            }
            appDbContext.Sliders.Update(slider);
            appDbContext.SaveChanges();

            return RedirectToAction("Index");

        }

        
    }
}
