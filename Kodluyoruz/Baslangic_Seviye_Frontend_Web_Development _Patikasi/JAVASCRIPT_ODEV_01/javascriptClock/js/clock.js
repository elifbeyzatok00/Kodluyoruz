// girişte isminizi isteyip sonra bu ismi karşılama ekranına yerleştire fonksiyon
let userInput = prompt("Lütfen adınızı giriniz","");
let myName = document.querySelector("#myName");

myName.innerHTML = userInput;


// saat ve gün yazdıran fonksiyon
function showTime() {
    // Tarih ve saat bilgisini al
    var date = new Date();
    
    // Saati al
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    
    // Günü al
    var days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    var day = date.getDay();
    
    // Saat, dakika ve saniyeyi düzgün formata getir
    hours = formatTime(hours);
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);
    
    // Sonucu HTML içinde göster
    var myClock = document.getElementById("myClock");
    myClock.innerHTML = hours + ":" + minutes + ":" + seconds + "  " + days[day];
  }
  
  function formatTime(time) {
    // Zamanın önüne sıfır ekle (örn: 09, 02, 11)
    return time < 10 ? "0" + time : time;
  }
  
  // showTime fonksiyonunu belirli aralıklarla çağır
  setInterval(showTime, 1000);
  