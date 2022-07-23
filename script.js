const base = {
   

}

 
for(let i = 0; i <= 10; i++){
    base.name = prompt('Введите своё имя');
    base.age = +prompt('Введите свой возраст');
    let num = 1 + i
    let id = (`Пользователь ${num} Имя ${base.name} возраст ${base.age}`);
     

    console.log(id);
    for(let key in base){
        console.log(` ${key} ${base[key]}`);
    }
} 




