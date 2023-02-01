let tours = [
  {
    id: 1,
    country: 'Узбекистан',
    city:'Ташкент',
    rating: '8.2',
    hotelName: 'Отель Uzbekistan',
    startTime: '2023-05-03',
    endTime: '2023-05-15',
    price: 'от $107',
    image: "https://bookatour.me/uploads/images/34a8fca1dd8897655d999a153a534b87.jpg"
  },

 { id: 2,
  country: 'Узбекистан',
  city:'Самарканд',
  rating: '8.4',
  hotelName: 'Отель Shaxzoda Elite',
  startTime: '2023-07-05',
  endTime: '2023-07-20',
  price: 'от $102',
  image: "https://bookatour.me/uploads/images/1e04032e80cfc59347fdf6f94f31e016.jpg"
},
{ id: 3,
  country: 'Узбекистан',
  city:'Бухара',
  rating: '8.7',
  hotelName: 'Отель Malika Bukhara',
  startTime: '2023-04-27',
  endTime: '2023-05-06',
  price: 'от $501',
  image: "https://bookatour.me/uploads/images/e634404256e7388ef3cb308d3a6cc3b1.jpg"
},
{ id: 4,
  country: 'Узбекистан',
  city:'Фергана',
  rating: '9.3',
  hotelName: 'Grand Fergana Hotel',
  startTime: '2023-09-24',
  endTime: ' 2023-10-02',
  price: 'от $775',
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
  <div class="p-6">
  <p class="">${tour.rating}</p>
  <p class="">${tour.hotelName}</p>
  <div class="text-gray-500 mt-3 flex">
  <p class="font-semibold mt-3 text-x">${tour.city}</p>
  <p class="font-semibold mt-3 text-x">${tour.country}</p>
  </div>
  <div class="flex">
  <p class="text-yellow-600">${tour.startTime}</p>
  <p class="text-gray-500 text-xl mt-4">${tour.endTime}</p>
  </div>
  <p class=""text-gray-500 text-xl mt-4">${tour.price}</p>
  <div class="flex gap-4">
        <button id="detail" class="border border-solid border-yellow-600 px-4 py-2 rounded-md hover:bg-yellow-600 hover:text-white transition-all duration-300 mt-4">Подробнее</button>
        <button id="favourites" class="border border-solid border-yellow-600 px-4 py-2 rounded-md hover:bg-yellow-600 hover:text-white transition-all duration-300 mt-4">В избранное</button>
        </div>
        </div>      
  </div>`
})
}


renderTours ()
