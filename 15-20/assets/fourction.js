// // // Task 15
// // İstifadəçidən nömrə alır
// let text = +prompt ("Ədədi daxil edin: ")
// // Bu funksiyada "toString" metoduyla array-ə daxil ediləcək yazını stringə çeviririk.
// function task15(text) {
//   text = text.toString();
//   const arr = [];
//   for (let i = 0; i < text.length; i++) {
//     arr.push(text[i]);  //stringi array-ə push edirik
//   }
//   let cem = 0; //cəmi tapmaq üçün cəm dəyişəni
//   let hasil = 1; //hasili tapmaq üçün hasil dəyişəni
//   let edorta = 0; //Ədədi ortanı tapmaq üçün edorta dəyişəni
//   for (let j = 0; j < arr.length; j++) // yenə daxil edilən string içində gəzən bir döngü yaradırıq
//   {
// //Aşağıdakı + işarəsi stringi yenidən ədədə çevirir ki riyazi hesabları aparmaq olsun
//     cem += +arr[j]; // Hər yeni indeksi gördükcə əvvəlkiylə cəmləyən kod
//     hasil *= +arr[j]; // Hər yeni indeksi gördükcə əvvəlkiylə hasilini hesablayan kod
//   }
//   edorta = cem / arr.length; // bütün rəqəmlərin cəmini tapıb sayına bölürük
//   console.log(cem, hasil, edorta); // Cavabları Konsola Çıxardırıq
// }
// console.log(task15(text));
// // _________________________________________________________________________________________________________________________________

// //Task 16
// // İstifadəçidən nömrə alır
// let num = +prompt ("Ədədi daxil edin: ")
// // 'task16' adlı funksiyanı təyin edirik. Bu funksiya 'num' adlı parametr qəbul edir.
// function task16(num) {
//     // 'arr' adlı boş massiv yaradırıq. Bu massiv 'num'un bölənlərini saxlamaq üçün istifadə olunacaq.
//     const arr = [];

//     //  1-dən “num”a qədər bütün rəqəmləri dövrələyən kodu yazırıq.
//     for (let i = 1; i <= num; i++) {
//       // Əgər 'ədəd'i 'i'yə bölərkən qalıq sıfırdırsa, 'i' 'num'un bölənidir.
//       if (num % i === 0) {
//         // Əgər “i” “num”un bölənidirsə, “arr” massivinə “i” əlavə edirik.
//         arr.push(i);
//       }
//     }

//     // Funksiyanın sonunda 'num'un bütün bölənlərini  'arr' massivinə qaytarırıq.
//     return arr;
//   }

//   // Num-un bütün bölənlərini tapmaq üçün 'task16' funksiyasını çağırırıq və nəticəni konsola yazdırırıq.
//   console.log(task16(num));

// // _________________________________________________________________________________________________________________________________

// Task 17
// //  İstifadəçidən nömrə alır
// let num = +prompt ("Ədədi daxil edin: ")

// // Bölənlərin sayını hesablayan funksiyanı təyin edirik
// function task17(num) {
//     // Bölənlərin sayını saxlamaq üçün döngünü işə salır
//     let count = 0;

//     //1-dən "num"a qədər bütün ədədləri dövrələyir
//     for (let i = 1; i <= num; i++) {
//       // Əgər ədəd i-yə bölünürsə, i ədədin bölənidir
//       if (num % i === 0) {
//         // Bölən tapıldıqda "count"u bir vahid artırır
//         count++;
//       }
//     }

//     //Bölənlərin ümumi sayını konsola qaytarır
//     return count ;
// }

// // Funksiyanı çağırır və nəticəni konsola çap edir
// console.log(task17(num));
// _________________________________________________________________________________________________________________________________



// //Task 18
// İstifadəçidən bir ədəd alırıq
// let num = +prompt("Ədədi daxil edin: ");

// function task18(num) {
//   // Bölənləri saxlamaq üçün boş bir massiv yaradırıq
//   const arr = [];

//   // 1-dən ədədə qədər bütün ədədləri yoxlayırıq
//   for (let i = 1; i <= num; i++) {
//     // Əgər ədəd i-ə bölünürsə, onu massiva əlavə edirik
//     if (num % i === 0) {
//       arr.push(i);
//     }
//   }

//   // "Cem"i və "hasil"in başlanğıc dəyərlәrini tәyin edirik
//   let cem = 0;
//   let hasil = 1;

//   // Massivin bütün elementlәrini dövr ilә keçiririk
//   for (let j = 0; j < arr.length; j++) {
//     // Hesablanan bölәnlәrin cemini hesablayırıq
//     cem += arr[j];
//     // Hesablanan bölәnlәrin hasilini hesablayırıq
//     hasil *= arr[j];
//   }

//   // "Cem"i vә "hasil"in dәyәrlәrini konsolda yazdırırıq
//   console.log("Ədәdlәrin cәmi: " + cem);
//   console.log("Ədәdlәrin hasili: " + hasil);
// }

// // Funksiyanın nәticәsini konsolda yazdırırıq
// console.log(task18(num));
// _________________________________________________________________________________________________________________________________

// // Task 20
// let num = +prompt("Ədədi daxil edin: ");

// function task20(num) {
//     // 0 və 1 nə sadə, nə də mürəkkəbdir
//     if ( num === 1) {
//         return "Bu ədəd nə sadə, nə də mürəkkəbdir";
//     }
//     // 2-dən ədədin koku qədər bütün ədədləri yoxlayırıq
//     for (let i = 2; i * i <= num; i++) {
//         // Əgər ədəd i-ə bölünürsə, onda bu ədəd mürәkkәbdir
//         if (num % i === 0) {
//             return "Bu ədəd mürәkkәbdir";
//         }
//     }
//     // Əgər heç bir bölәn tapılmadısa, onda bu ədәd sadәdir
//     return "Bu ədəd sadәdir";
// }

// // Funksiyanın nәticәsini konsolda yazdırırıq
// console.log(task20(num));
// // _________________________________________________________________________________________________________________________________

  