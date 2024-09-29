// Создать цикл, который выведет в консоль только четный цифры от 10 до 0 ( 10 - 8  - 6 - 4 - 2 -0)

// 1ый вариант
let i = 10

while (i>=0) {
    console.log(i)
    i = i - 2
}

// 2-ой вариант 

 let z = 10

 do {
    console.log(z)
    z = z - 2
 } while (z >= 0)
 
// 3-ий вариант

for (let y = 10; y >= 0; y = y - 2) {
    console.log(y)
}

// Написать скрипт, который выведет 5 строк в консоль таким образом чтобы в первой строчке выводилось :), во второй :):) и так далее

const base_stroka = ":)"
let new_stroka = ""
let n_strok = 5

while(n_strok > 0) {
    new_stroka = new_stroka + base_stroka
    console.log(new_stroka)
    n_strok--
}



// Создайте скрипт, который удалит все пробелы и строчки

const text = "Hello! I am a JS student"
let new_text = text.replaceAll(" ", "1")
console.log(new_text)

