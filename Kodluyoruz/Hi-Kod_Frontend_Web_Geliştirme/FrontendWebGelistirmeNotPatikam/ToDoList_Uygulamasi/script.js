let todoInput = document.querySelector("#todoInput");
let todoAddBtn = document.querySelector("#todoAddBtn");
let todoList = document.querySelector("#todoList");
let clearBtn = document.querySelector("#clearBtn");
let cardBody = document.querySelector("#card-body");

//ekleme
todoAddBtn.addEventListener("click", addTodo);

function addTodo(){

    if(todoInput.value.trim() == "" || todoInput.value == null){  //trim() baş ve sondaki whitespaceleri, boşlukları siler
        myAlert();
    }else{

        let li = document.createElement("li");
        let i = document.createElement("i");

        li.className = 
            "list-group-item d-flex justify-content-between align-items-center";

        li.innerHTML = todoInput.value;
        i.className = "fa-solid fa-xmark";

        li.appendChild(i); //appendChild, belirtilen elementin son elemanına içerde verilen değeri atar

        todoList.appendChild(li);
    }
    todoInput.value = "";  //yeni ekleme yapmak için input u boşaltır
    
}

// -komple silme
clearBtn.addEventListener("click", clearAllTodos);

function clearAllTodos(){

    todoList.innerHTML = "";

}

//çarpıya basınca silme
//i'ye direkt ulaşamadığımız için fonksiyon yazdık
todoList.addEventListener("click", removeTodo);

function removeTodo(event){
    if(event.target.className.includes("fa-solid fa-xmark")){  //event.target, nesnenin kendisini döndürür
        //event.target ın className i "fa-solid fa-xmark" içeriyor mu yani hedefimdeki nesne i mi? evetse burası çalışır
        event.target.parentElement.remove(); //event.target.parentElement -> hedefteki nesnenin ebeveyni demek 
        //event.target.parentElement.remove -> hedefteki nesnenin ebeveyni yani i'nin ebeveynini yani li'yi yok eder 
    
    }
}


//alert i güzelleştirelim
function myAlert(){
    let div = document.createElement("div");
    div.className = "alert alert-warning mt-4";
    div.innerHTML = "Geçersiz işlem";
    cardBody.appendChild(div);

    setInterval(function () {
        div.remove();
    }, 2000)
    // setInterval ve 2000 ile bu fonk çalıştıktan 2 sn div remove edilecek
}


// 13, 57-65 çalışmıyor