// 1. Цикл for .. of в массиве

// Создайте массив [1,2,3,4,5,6,7,8,9,10]
const massiv_new = [1,2,3,4,5,6,7,8,9,10]

// Созадйте цикл for .. of, бегущий по массиву. Если элемент четный - возвести в квадрат. Если нечетный в 3-ю степень

const massiv_final = []

for (const item of massiv_new) {
    if (item % 2 == 0){
        console.log(item ** 2)

    } else {
        console.log(item ** 3)
    
    }
}

// 2. Методы массивов

//  Создайте массив [1,2,3,4,5]
const massiv_1 = [1,2,3,4,5]
// Добавьте в конец массива число 6
massiv_1.push(6)
// Добавьте в начало массива число 0
massiv_1.unshift(0)
// Удалить элемент с индексом 2 из массива 
massiv_1.splice(2,1)
// Удалить последний элемент из массива 
massiv_1.pop()
console.log(massiv_1)

// 3. Деструктизация массивов

// Создать массив из любых 5  чисел

const massiv_2 = [5, 50, 500, 1000, 1]

const[first, second, third] = [5, 50, [3,4,5]]
console.log(first)
console.log(second)
console.log(third)

// 4. Конкатенация массивов

// Создайте массив с числами [1,2,3,4,5]
const massiv_3 = [1,2,3,4,5]

// Создайте массив с числами [6,7,8,9,10]
const massiv_4 = [6,7,8,9,10]
// Создайте переменную mergedArray , котороя будет состоять из массив 1 и 2
const mergedArray = [...massiv_3, ...massiv_4]
console.log(mergedArray)
 