// https://jsonplaceholder.typicode.com/
/*
Uygulama 1
Öncelikle aşağıdaki linkten {JSON} Placeholder API servisinin dokümanını inceleyin: Json Placeholder API

API dokümanında Resources bölümünde belirtilen kaynaklardan /users uzantısındaki verileri alıp console’a yazdıracak kodu yazın.
*/

fetch('https://jsonplaceholder.typicode.com/todos/1/users')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch((err)=>console.log(err));



/*
Uygulama 2
Json Placeholder API servisinin /comments uzantısında mevcut verilerden, her bir comment içerisindeki email’leri console’a yazdıracak kodu yazın.

*/

fetch("https://jsonplaceholder.typicode.com/comments")
.then((response) => response.json())
.then((json) => json.forEach((item) => console.log(item.email)))
.then((err) => console.log(err))

