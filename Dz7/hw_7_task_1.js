// Task 1. Бесконечный аргументы
// Напишите функцию , принимающую на вход любое кол-во массивов
// Функция возвращает массив, в котором будут находиться все переданные в функцию в виде чисел

function summArrows(...mergeArrow){
    
    let sum = []
    for (const i of mergeArrow) {
        sum.push(...i)
    }
    return sum
    

}

const result = summArrows([1,2], [3,4], [5,6])
console.log(result)

// Task 2. Devide by_
// Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его
// Первое слово должно начинаться с буквы в нижнем регистре , а у остальных в верхнем

function newSentence(string) {
    let new_string = string.split(" ")

    let final_string = []
    for (let i = 0; i < new_string.length; i++) {
        if (!i){
        const word = new_string[i][0].toLowerCase() + new_string[i].slice(1)
        final_string.push(word)

        } else {
        const word = new_string[i][0].toUpperCase() + new_string[i].slice(1); 
        final_string.push(word); }
    }
             
    return final_string.join().replaceAll(",","_")

}

    

const result_2 = newSentence('I am super enginner')
console.log(result_2)


// Task 3. Фибаначчи
//Напишите функцию fibanacci(n), возвращаюся энное число фибаначчи
// Число фибаначчи  - числовая последовательность, первые два числа которых являются 0 и 1, а каждое последующее за ними число сумма двух предыдущих

function fibanacci(n){
    
    let sum_result = [0 , 1]  

    for (let item = 2; item <= n; item++) {
         first_number = sum_result.at(-1)
         second_number = sum_result.at(-2)
         let sum_number = first_number + second_number
         sum_result.push(sum_number)
        
    }

    return sum_result.at(-1)
}
    
    

console.log(fibanacci(8))
