// Açıklama : 10 soru sorup soruların cevaplarına göre kaç doğru kaç yanlış olduğunu söyleyin.
// Ek olarak yanlış cevapların doğrularını da göstermeye çalışın.


let soru1 = prompt('1. Dünyanın en büyük okyanusu hangisidir? \n a) Atlas Okyanusu \n b) Pasifik Okyanusu');
soru1Cevap = 'a';

//  let soru1 = prompt('1. Dünyanın en büyük okyanusu hangisidir? \n a) Atlas Okyanusu \n b) Pasifik Okyanusu');
//  soru1Cevap = 'a'

//  let soru1 = prompt('1. Dünyanın en büyük okyanusu hangisidir? \n a) Atlas Okyanusu \n b) Pasifik Okyanusu');
//  soru1Cevap = 'a'

//  let soru1 = prompt('1. Dünyanın en büyük okyanusu hangisidir? \n a) Atlas Okyanusu \n b) Pasifik Okyanusu');
//  soru1Cevap = 'a'

//  let soru1 = prompt('1. Dünyanın en büyük okyanusu hangisidir? \n a) Atlas Okyanusu \n b) Pasifik Okyanusu');
//  soru1Cevap = 'a'

//  let soru1 = prompt('1. Dünyanın en büyük okyanusu hangisidir? \n a) Atlas Okyanusu \n b) Pasifik Okyanusu');
//  soru1Cevap = 'a'

//  let soru1 = prompt('1. Dünyanın en büyük okyanusu hangisidir? \n a) Atlas Okyanusu \n b) Pasifik Okyanusu');
//  soru1Cevap = 'a'

//  let soru1 = prompt('1. Dünyanın en büyük okyanusu hangisidir? \n a) Atlas Okyanusu \n b) Pasifik Okyanusu');
//  soru1Cevap = 'a'

//  let soru1 = prompt('1. Dünyanın en büyük okyanusu hangisidir? \n a) Atlas Okyanusu \n b) Pasifik Okyanusu');
//  soru1Cevap = 'a'

//  let soru1 = prompt('1. Dünyanın en büyük okyanusu hangisidir? \n a) Atlas Okyanusu \n b) Pasifik Okyanusu');
//  soru1Cevap = 'a'



dogru = 0;
yanlis = 0;

if (soru1 == soru1Cevap){
  dogru ++ ;
} else if (soru1 != soru1Cevap) {
  yanlis ++ ;
  console.log('1.Sorunun cevabı: ' + soru1Cevap);
}
console.log(dogru + yanlis);