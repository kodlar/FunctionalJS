var orders = [ {amount : 250}, {amount : 400}, {amount : 100}, {amount : 325} ]

//1.yazım
/*
var totalAmount = 0;
for (var i = 0; i < orders.length; i++) {
  totalAmount += orders[i].amount
}
*/

// burada reduce fonksiyonu bir callback function alıyor ikinci parametre olarak bizden
// bir nesne istiyor bunu iteration için başlangıç noktası olarak kullanacak bir burada
// ikinci parametre olarak 0 veriyoruz. daha sonra bu callback fonksiyonuna ilk olarak sum
// adı altında başlangıç nesnesini ve sonra iteration devam ettikçe gelen item nesnesini
// order olarak isimlendiriyoruz böylece kendi içinde değerler toplanacaktır.
var totalAmount = orders.reduce(function(sum, order){
  console.log('hello', sum, order)
  return sum + order.amount
}, 0)


console.log(totalAmount)
