let tours = [
  {
    id: 1,
    nameTours: 'Однодневный Тур в Бухару из Ташкента с авиаперелетом',
    route: 'Маршрут: Ташкент, Бухара, Ташкент (1 день)',
    description: 'Идеальный вариант для путешественников, мечтающих увидеть Бухару, но с ограниченным временем. Тур включает в себя ранний вылет из Ташкента, экскурсию с гидом по Бухаре, и перелёт обратно в Ташкент поздним вечером.',
    cost: 'от $107',
    image: "https://bookatour.me/uploads/images/34a8fca1dd8897655d999a153a534b87.jpg"
  },

 { id: 2,
  nameTours: 'Однодневный Тур в Самарканд из Ташкента на поезде',
  route: 'Маршрут: Ташкент, Самарканд, Ташкент (1 день)',
  description: 'Самарканд - один из древнейших городов мира, основанный, по археологическим данным, в XVIII в. до н.э. Более двух тысяч лет город являлся ключевым пунктом на Великом Шелковом Пути между Китаем и Европой, а также одним из главных центров науки средневекового Востока. В XIV в. был столицей империи Тамерлана. Подавляющее большинство архитектурных шедевров города было построено в эту эпоху. Это был период наивысшего развития Самарканда. В 1925-1930 годах Самарканд являлся столицей Узбекской ССР..',
  cost: 'от $102',
  image: "https://bookatour.me/uploads/images/1e04032e80cfc59347fdf6f94f31e016.jpg"
},
{ id: 3,
  nameTours: 'Классика Узбекистана - Ташкент, Хива, Бухара, Самарканд за 7 Дней (Премиум)',
  route: 'Маршрут: Ташкент, Хива, Бухара, Самарканд, Ташкент (7 дней)',
  description: 'Интереснейший тур премиум класса от компании INFO Travel - одни из лучших местных туроператоров. Оформите заявку и почувствуйте всё гостеприимство Узбекистана. Гарантированная лучшая цена, без наценок',
  cost: 'от $501',
  image: "https://bookatour.me/uploads/images/e634404256e7388ef3cb308d3a6cc3b1.jpg"
},
{ id: 4,
  nameTours: 'Узбекистан - Страна Голубых Куполов',
  route: 'Маршрут: Ташкент, Хива, Бухара, Самарканд, Ташкент (8 дней)',
  description: 'Прибывший в Самарканд узнает, что купола могут приобретать самые разнообразные формы. Это и купола в виде шатра, лукообразные, ребристые, которые являются архитектурной особенностью Самарканда',
  cost: 'от $775',
  image: "https://bookatour.me/uploads/images/d4f3f17c09ac540a3977e0ba00e9d1ff.jpg"
}
]

const container = document.getElementById("container")
function renderTours() {
container.innerHTML  = ""
tours.forEach(function(tour){
  container.innerHTML += `
  <div class="bg-white shadow-lg rounded-lg overflow-hidden">
  <img src= ${tour.image} class="h-96 w-full object-cover object-top"/>
  <div class="information">
  <p class="font-semibold mt-3 text-x">${tour.nameTours}</p>
  <p class="text-yellow-600">${tour.route}</p>
  <p class="text-gray-500 text-xl mt-4">${tour.description}</p>
  <p class=""text-gray-500 text-xl mt-4">${tour.cost}</p>
  <div class="flex gap-4">
        <button id="detail" class="border border-solid border-yellow-600 px-4 py-2 rounded-md hover:bg-yellow-600 hover:text-white transition-all duration-300 mt-4">Подробнее</button>
        <button id="favourites" class="border border-solid border-yellow-600 px-4 py-2 rounded-md hover:bg-yellow-600 hover:text-white transition-all duration-300 mt-4">В избранное</button>
        </div>
        </div>      
  </div>`
})
}


renderTours ()
