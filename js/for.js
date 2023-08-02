// for1
// let a = +prompt("Start sonni kiriting") ;

// let b = +prompt("End sonni kiriting") ;

// for(let i = a ; i <= b ; i++){
//    console.log(i);
// }

// for2

// let b = +prompt("End sonni kiriting") ;

// let a = +prompt("Start sonni kiriting") ;

// for(let i = b - 1 ; i > a ; i--){
//    console.log(i);
// }

// for3

// let a = +prompt("End sonni kiriting") ;

// let narx = 500 ;

// for(let i = 1 ; i <= a ; i++){

//    console.log(i * narx  , "Sum");
// }

// for4

// let a = +prompt("End sonni kiriting") ;

// let narx = 500 ;

// for(let i = 1.2 ; i <= a ; i+=0.2){

//    console.log(i* narx  , "Sum");
// }

// for5

// let a = +prompt("Start sonni kiriting") ;

// let b = +prompt("End sonni kiriting") ;

// let sum = 0 ;

// for(let i = a ; i <= b ; i++){
//    sum += i ;
// }

// console.log(a , "dan" , b , "gacha sonlar yig'indisi" , sum);

// for6

// let a = +prompt("Start sonni kiriting") ;

// let b = +prompt("End sonni kiriting") ;

// let kup = 1 ;

// for(let i = a ; i <= b ; i++){
//    kup *= i ;
// }

// console.log(a , "dan" , b , "gacha sonlar ko'paytmasi" , kup);

// for7

// let a = +prompt("Start sonni kiriting") ;

// let b = +prompt("End sonni kiriting") ;

// let sum = 0 ;

// for(let i = a ; i <= b ; i++){
//    sum += i**2 ;
// }

// console.log(a , "dan" , b , "gacha sonlar kvadratlari yig'indisi" , sum);

// for8

// let a = +prompt("Start sonni kiriting") ;

// let sum = 0 ;

// for(let i = 1 ; i <= a ; i++){
//    sum += 1 / i ;
// }

// console.log(a , "gacha teskari sonlar yig'indisi" , sum);

// for9

// let a = +prompt("End sonni kiriting") ;

// let sum = 1 ;

// for(let i = 1 ; i <= a ; i+= 0.1){
//    sum *= i ;
// }

// console.log(a , "gacha haqiqiy sonlar ko'paytmasi" , sum);

// for10

// let a = +prompt("Son kiriting ") ;

// let n ;

// let sum = 0 ;

// for( let i = 1 ; i <= a ; i++){

//    n = 2 * i - 1 ;

//    sum += n ;

//    console.log(sum);
// }

// for11

// let a = +prompt("sonni kiriting") ;

// let n = +prompt("Darajasini kiriting") ;

// let kup = 1 ;

// for( let i = 1 ; i <= n ; i++){
//    kup *=a ;
// }
// console.log("Kiritgan soningizni darajasi" , kup);

// for12

// let a = +prompt("sonni kiriting") ;

// let n = +prompt("Darajasini kiriting") ;

// for( let i = 1 ; i <= n ; i++){
//   console.log(a**i);
// }

// for13

// let a = +prompt("sonni kiriting") ;

// let n = +prompt("Darajasini kiriting") ;

// let sum = 0 ;

// for( let i = 0 ; i <= n ; i++){

//   console.log(i ,"darajasi" , a**i);

//   sum += a**i ;
// }
// console.log("Yig'indisi" , sum);

// for14

// let n = +prompt("Son kiriting") ;

// let kup = 1 ;

// let sum = 0 ;

// for(let i = 1 ; i <= n ; i++){
//    kup *= i ;
//    sum += kup ;
// }
// console.log(sum);

// for15

// let n = +prompt("Son kiriting") ;

// let k = +prompt("Darajani kiriting")

// let kup;

// let sum = 0 ;

// for(let i = 1 ; i <= n ; i++){

//    kup = i ** k ;

//    sum += kup ;
// }

// console.log(sum);

// for16

// let n = +prompt("Son kiriting") ;

// let k = +prompt("Darajani kiriting")

// let kup;

// let sum = 0 ;

// for(let i = 1 ; i <= n ; i++){

//    kup = i ** i ;

//    sum += kup ;
// }

// console.log(sum);

// for17

// let A = +prompt("Start sonini kiriting");

// let B = +prompt("End sonini kiriting");

// for (let i = A; i <= B ; i++) {
//   for (let j = 1; j <= ((i - A) + 1); j++) {
//     console.log(i);
//   }
// }

// for18

// let A = +prompt("Son kiriting") ;

// let sum = 0 ;

// let count = 0 ;

// for(let i = 1 ; i <= A ; i++){
//    if (A % i == 0) {
//       console.log(i);

//       sum += i ;

//       count ++ ;
//    }
// }
// console.log("Yigindisi" , sum , "Bo'luvchilar soni" , count);

// for19

// let n = +prompt("Son kiriting") ;

// let count = 0 ;

// for(let i = 1 ; i <= n ; i++){
//    if (n % i == 0) {
//       count ++ ;
//    }
// }
// if(count >= 3){

//    console.log("Tub emas");
// }else{
//    console.log("Tub");
// }

// for20

// let N = +prompt("Son kiriting") ;

// for(let i = 1 ; i <= N ; i++){

//    let ans = '';

//    for(let j = 1 ; j <= i ; j++){

//       ans += j.toString();

//       ans += ' ';
//    }
//    console.log(ans);
// }

// While1

// let A = +prompt("Start sonni kiriting:");

// let B = +prompt("End sonni kiriting");

// while (A >= B) {
//   A -= B ;
// }
// console.log("Qoladigan bo'sh qismi" , A);

// While2

// let A = +prompt("Start sonni kiriting:");

// let B = +prompt("End sonni kiriting");

// let count = 0 ;

// while (A >= B) {
//   A -= B ;

//   count++ ;
// }
// console.log(count , "marta joylashadi");

// while3

// let n = +prompt("Son kiriting") ;

// while (n >= 3) {
   
//    n -= 3 ;

// }
// if (n == 0) {
//    console.log("Uchning darajasi");
// }else{
//    console.log("Uchning darajasi emas");
// }

// while4

// let N = +prompt("Sonni kiriting");
// let K = +prompt("Sonni kiriting");

// let count = 0;

// while (N >= K) {
//   N -= K;
//   count++;
// }

// console.log("Butun qismi" , count);
// console.log("Qoldiq qismi" , N);

// while5

// let n = +prompt("Son kiriting") ;

// let a ;

// let sum = " " ;

// while (n / 10 >= 1) {

//    a = n % 10 ;

//    n = (n - a) / 10 ;

//    sum += a.toString() ;
// }

// sum += n.toString()

// sum = +sum

// console.log(sum);

// while6

// let n = +prompt("Son kiriting") ;

// let a ;

// let sum = 0 ;

// let count = 0 ;

// while (n / 10 >= 1) {

//    a = n % 10 ;

//    n = (n - a) / 10 ;

//    sum += a ;

//    count ++ ;
// }

// sum += n ;

// count += 1 ;

// console.log("Raqamlar yig'indisi" , sum);

// console.log("Raqamlar soni" , count);

// while7

// let n = +prompt("Son kiriting") ;

// let a ;

// let count = 0 ;

// while (n / 10 >= 1) {

//    a = n % 10 ;

//    if (a == 2) {
//       count ++ ;
//    }

//    n = (n - a) / 10 ;
// }
// if (n == 2) {
//    console.log("Ikki soni bor");
// }else if(count >= 1){
//    console.log("Ikki soni bor");
// }else{
//    console.log("Ikki soni yuq");
// }

// while8

// let n = +prompt("Son kiriting") ;

// let a ;

// let count = 0 ;

// while (n / 10 >= 1) {

//    a = n % 10 ;

//    if (a % 2 == 1) {
//       count ++ ;
//    }

//    n = (n - a) / 10 ;
// }
// if (n % 2 == 1) {
//    console.log("Toq son bor");
// }else if(count >= 1){
//    console.log("Toq son bor");
// }else{
//    console.log("Toq son yuq");
// }

// while10

// let N = +prompt("Son kiriting") ;

// let i = 1 ;

// let count = 0 ;

// while (N >= i ) {

//    if (N % i == 0) {
//       count ++ ;
//    }

//    i ++ ;
// }
// if (count >= 3) {
//    console.log("Tub emas");
// }else{
//    console.log("Tub son");
// }