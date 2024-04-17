var btnShow =document.getElementById("btnShow");
var calendarBody=document.getElementById("calendar");


var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth() + 1; // JavaScript'te ay 0'dan başlar, bu yüzden +1 ekliyoruz
var daysInMonth = new Date(currentYear, currentMonth, 0).getDate(); // Mevcut aydaki gün sayısını al


var bugun = currentDate.getDate();

calendarBody.innerHTML=""
var htmlBody="";
fetch(`https://api.aladhan.com/v1/calendarByCity/${currentYear}/${currentMonth}?city=Baku&country=Azerbjsonaijan&method=2`)
      .then(response => response.json())
      .then(json => {
        json.data.forEach(element => {
          var tarih = element.date.gregorian.date.split('-').reverse().join('-');

            var gun = parseInt(tarih.split('-')[2]); // Tarihin gününü al
            console.log(gun)
            console.log(bugun)

            if (gun === bugun) {
                // Eğer bu günün tarihiyse, özel bir işlem yapabilirsiniz
                htmlBody+=
                `
                <tr>
                <td style="color:red; font-weight:bold">${element.date.gregorian.date}</td>
                <td>${element.date.hijri.date}</td>
                <td>${element.timings.Imsak}</td>
                <td>${element.timings.Fajr}</td>
                <td>${element.timings.Sunrise}</td>
                <td>${element.timings.Dhuhr}</td>
                <td>${element.timings.Asr}</td>
                <td>${element.timings.Sunset}</td>
                <td>${element.timings.Maghrib}</td>
                <td>${element.timings.Isha}</td>
                <td>${element.timings.Midnight}</td>
                </tr>
                `
            }
            else {
              htmlBody += `
                  <tr>
                      <td>${tarih}</td>
                      <td>${element.date.hijri.date}</td>
                      <td>${element.timings.Imsak}</td>
                      <td>${element.timings.Fajr}</td>
                      <td>${element.timings.Sunrise}</td>
                      <td>${element.timings.Dhuhr}</td>
                      <td>${element.timings.Asr}</td>
                      <td>${element.timings.Sunset}</td>
                      <td>${element.timings.Maghrib}</td>
                      <td>${element.timings.Isha}</td>
                      <td>${element.timings.Midnight}</td>
                  </tr>`;
          }
        
          
      });
      calendarBody.innerHTML=htmlBody;
      })

btnShow.addEventListener("click", function(){
    var month =document.getElementById("month").value;
    var year =document.getElementById("year").value;
    var city =document.getElementById("city").value;
    calendarBody.innerHTML=""
    var htmlBody="";
    fetch(`http://api.aladhan.com/v1/calendarByCity/${year}/${month}?city=${city}&country=Azerbaijan&method=2`)
      .then(response => response.json())
      .then(json => {
        json.data.forEach(element => {
            htmlBody+=
            `
            <tr>
            <td>${element.date.gregorian.date}</td>
            <td>${element.date.hijri.date}</td>
            <td>${element.timings.Imsak}</td>
            <td>${element.timings.Fajr}</td>
            <td>${element.timings.Sunrise}</td>
            <td>${element.timings.Dhuhr}</td>
            <td>${element.timings.Asr}</td>
            <td>${element.timings.Sunset}</td>
            <td>${element.timings.Maghrib}</td>
            <td>${element.timings.Isha}</td>
            <td>${element.timings.Midnight}</td>
            </tr>
            `
        });
        calendarBody.innerHTML=htmlBody;
    })
})


