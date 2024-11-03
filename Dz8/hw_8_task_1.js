// Перед вами массив чисел [7, 8, 2, 30, 85, 95, 77, 94, 37, 31], используя метода массивов сделайте следующее:
//forEach - выведите в консоль все числа, деляющеся без остатка на 3

const massiv_list = [7, 8, 2, 30, 85, 95, 77, 94, 37, 31]
massiv_list.forEach ((element) => {
    if (element % 3 == 0) {
        console.log(element)
    }
})

// map - создать новый массив, в котором из каждого элемента изначального массива вычли длину изначального  массива


const new_massiv_list = massiv_list.map((number, index , array) => number - array.length);
console.log(new_massiv_list)

// filter - создать новый массив, в который войдут лишь значения , которые больше предыдущего

const filter_massiv = massiv_list.filter((item, index , array) => item > (array[index - 1]))
console.log(filter_massiv)

// find - найти элемент, равный своему индексу 
const findElement = massiv_list.find((i, index) => i == index)
console.log(findElement)

// some - проверьте , есть ли в массиве элементы больше 90

const some90 = massiv_list.some((el) => el > 90)
console.log(some90)

// every - проверьте , что все элементы массива двухзначные

const proverka = massiv_list.every((element)=> element >=10 && element <=99)
console.log(proverka)

// reduce - получить сумму всех чисел массива

const sum_massivList = massiv_list.reduce((result , element) => {
    result +=element;
    return result;
}, 0)

console.log(sum_massivList)

// sort - отсортировать по возрастанию , не изменив начальный

const sortmassivList = massiv_list.sort((a, b)=> a - b)
console.log(sortmassivList)