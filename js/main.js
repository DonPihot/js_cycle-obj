let woman = new Object;

let man = {
    name: "John",
    family: "Pattenson",
    "age of you": 40,
    height: 180,
    login: "Johny",
    password: "Gamble",
    $: 10000
};

console.log(man); // Здесь выводит всё сперва в виде массива, где нет алфавитного порядка, затем видно внизу в алфавитном порядке уже всё в виде объекта!
console.log(man.name);
console.log(man.family);
console.log(man.age);
console.log(man.address);

man.family = "Seena";

man.address = "Somewhere in USA";

delete man.age; // При выводе до этой строки ключ age уже удалён, а значит эта ерунда delete работает вне времени, хотя создание адреса работает лишь во втором выводе!

console.log(man.name);
console.log(man.family);
console.log(man.age);
console.log(man.address);



// Переписываем for на while:

/*
for(let num = 1; num < 3; num++)
{
    console.log(`4ucno: ${num}°`)
}
*/

let num = 0;

while(num < 3)
{
    console.log(`4ucno: ${num}°`);
    num++;
}



// Вывод цифр:

for(i = 1; i <= 10; i++)
{
    console.log(i);
}


let j =10;
while(j > 0)
{
    console.log(j);
    j--;
}



let user_password = String(prompt("Введи свой пассворд, амиго:"));

positive_output = `Добро пожаловать, ${man.name} ${man.family}. Ваш логин: ${man.login}`;

negative_output = `Указанный пароль "${user_password}" неверный. Попробуйте ещё раз:`;

// ЕЩЁ РАЗ: ТРИ РАВНО ПРОВЕРЯЮТ ПЕРЕМЕННЫЕ И ТД С УЧЁТОМ ИХ ТИПА ДАННЫХ!

if(user_password == man.password)
        
    {
        console.log(positive_output);
    }

else

    {
        console.log(negative_output);
    }


