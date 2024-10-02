const competitorPizzas = ['Peperoni', 'Caprichose', 'Diablo','4 cheeses', 'hawai']
const my_list_Pizzas = ['peperoni', 'caprichose', 'diablo','4 cheeses', 'dodo']

//Переведем список конкруента в нижний регистр для сравненя с нашим списком
const competitorPizzas_1 = []

for (let i=0; i < competitorPizzas.length; i++) {
    competitorPizzas_1.push(competitorPizzas[i].toLowerCase())
    

}

// Создаим пустой список для сбора данных

const new_spisok = []

for (let i=0; i < my_list_Pizzas.length; i++){
    

    if (!competitorPizzas_1.includes(my_list_Pizzas[i].toLowerCase())) {
        new_spisok.push((my_list_Pizzas[i])) // Добавляем данные , если в списке конкурента нет такой пиццы
}}

if (new_spisok.length > 0) {
    console.log(new_spisok) // выводим список, если он не пустой
} else {
    console.log(null)
}


