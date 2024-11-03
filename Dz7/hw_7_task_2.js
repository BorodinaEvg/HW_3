//Task 2
//Написать функцию, которая принимает только предложение в качестве параметра и возвращает слово с наибольши кол-вом букв. 
// Если таких слов несколько - возвращает их все


function findLongestWord(Test_data) {
    const new_strings = Test_data.split(" ") // Рабиваем строку на массив строк 
    console.log(new_strings)

    let longest_word = ""
    const list_word = []

    for (const item of new_strings) {
        if (item.length > longest_word.length) {
            longest_word = item // присваиваем значение
            list_word.length = 0 // обнуляем массив, если нашли слово длиннее
            list_word.push(item) // добавляем в массив новое значение
        } else if (item.length == longest_word.length) {
            list_word.push(item)
        }

    }
   
    
    return list_word

}

resultus_1 = findLongestWord("Ян Катя привет меня привет Анна я")
resultus_2 = findLongestWord("добрый вечер страна")
resultus_3 = findLongestWord("В этот День был красивый снегопад")
console.log(resultus_1.join(" , "))
console.log(resultus_2.join(" , "))
console.log(resultus_3.join(" , "))


// Написать функцию, которая принимает на вход слово и проверяет являетяся ли оно палиндромом

function checkPalindrome(str){
    let new_str_1 = str.split("").reverse().join("")
    if (str.toLowerCase() === new_str_1 .toLowerCase()){
        return "Это палиндром!"
    } else return "Это не палиндром!"
    
}

console.log(checkPalindrome("мадамо"))
console.log(checkPalindrome("мадам"))



