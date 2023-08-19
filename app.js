//* ÇARPIM TABLOSU



for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        document.write(i + "x" + j + "=" + i * j + "\r\n")
    }
}



//***************************************************************************** */



//* ASAL SAYI BULMA UYGULAMASI


let sayi = Number(prompt("ASAL SAYI BULMA UYGULAMASI \n\n Sayı Giriniz:"))
let sonuc = true;
for (let i = 2; i <= Math.floor(sayi / 2); i++) {

    if (sayi % i == 0) {
        sonuc = false;
        break;
    }
}
if (sonuc) {
    alert(sayi + " asaldır.")
}
else {
    alert(sayi + " asal değildir.")
}




//***************************************************************************** */


//* ARMSTRONG SAYISI BULMA

//? Bir sayının rakamlarının küpleri toplamı sayının kendisine eşitse bu saayı Armstrong sayısıdır.
//? Örneğin: 153----> 1+125+27=153 sayısı bir Armstrong sayısıdır.

let sayii = prompt("Sayı Giriniz:");
let rakam = 0;

for (let i = 0; i < sayii.length; i++) // Ekrandan aldığımız değer string veri tipinde olduğu için sayi.length fonksiyonunu kullanabildik.
// Burada döngü sayının uzunluğu kadar dönüyor.
{
    rakam += Math.pow(Number(sayi.charAt(i)), 3);
} // sayi.charAt(i) ile döngünün her adımında sayının bir basamağını elde ediyoruz ve Number ile string değeri 
  // sayısal değere çevirip Math.pow(x,3) ile de bu değerin küpünü alıyoruz. 

if (rakam == sayii) { //Eğer rakam değerlerinin toplamı sayının kendisine eşitse şart sağlanmış olur. 
    alert(sayii + " sayısı bir Armstrong sayısıdır.");
}
else
    alert(sayii + " sayısı bir Armstrong sayısı değildir.")

