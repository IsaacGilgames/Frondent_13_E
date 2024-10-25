const menu = [
  {
    id: 1,
    title: "Hamburger",
    category: "street food",
    price: 4000,
    img: "./images/item-1.jpg",
    desc: "Titkos recept alapján készült incsi fincsi habos-babos mézás-mázos hamburger. Plankton nem fér hozzá!",
  },
  {
    id: 2,
    title: "Gulyásleves",
    category: "leves",
    price: 3000,
    img: "./images/item-2.jpeg",
    desc: "Finom és magyar. Pálinkával az igazi.",
  },
  {
    id: 3,
    title: "Töltött paprika",
    category: "fő étel",
    price: 2500,
    img: "./images/item-3.jpg",
    desc: "Cukor nélküli, kenyérrel és krumpli nélkül.",
  },
  {
    id: 4,
    title: "Székely káposzta",
    category: "fő étel",
    price: 2800,
    img: "./images/item-4.jpg",
    desc: "Szőrös a talpad, ingyen van.",
  },
  {
    id: 5,
    title: "Rákóczi túrós",
    category: "desszert",
    price: 2800,
    img: "./images/item-5.jpg",
    desc: "Szabadságharc íze van.",
  },
  {
    id: 6,
    title: "Hatlapos",
    category: "desszert",
    price: 6000,
    img: "./images/item-6.jpg",
    desc: "Hat lapja van. Érdekes?",
  },
];

const sectionCenter = document.querySelector(".section-center")
const btnContainer = document.querySelector(".btn-container")
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu)
  displayMenuButtons()
})


function displayMenuItems(menuItems) {
  let displayMenuItem = []
    menuItems.map(item => {
    displayMenuItem.push(
    `
    <article class="menu-item">
    <img src=${item.img} alt=${item.title} class="photo" />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}</h4>
      </header>
      <p class="item-text">
        ${item.desc}
      </p>
    </div>
  </article>
    `)
  });
  console.log(displayMenuItem)
  sectionCenter.innerHTML = displayMenuItem.join("")
}


//tömb létrehozása az objektum alapján
//A tömb minden elemet egyszer tartalmazzon csak
//Legenerálni a gombokat a tömb alapján
//a létrehozott függvény mindig csak a megfelelő elemeket
//jelenítse meg. 

function displayMenuButtons(){
    var categories = ["all"];
    menu.forEach((item) => {
      
      //console.log(item.category)
      if(!categories.includes(item.category))
          categories.push(item.category);
    })
    //console.log(categories)
    //gombok --> string
    /*
    let gombok = categories.map(category => {
      btnContainer.innerHTML += `<button type="button" class="filter-btn" data-id="${category}">${category}</button>`
    });
    console.log(gombok)
    //btnContainer.innerHTML = gombok
    */
    categories.forEach(b => {
      let button = document.createElement("button")
      button.innerHTML = b
      button.setAttribute('class', 'filter-btn')
      button.setAttribute("id", b)
      button.setAttribute("type", "button")
      btnContainer.appendChild(button)
    })




    
}



