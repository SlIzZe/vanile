// document.children[0].children[0].children[2].innerText = "Sasha"
// console.dir(document.children[0].children[0].children[2])

// console.dir(document.children[0].children[1].children[0].innerText)

// console.dir(document.getElementsByTagName("p")[0])
// console.dir(document.getElementById("aa"))
// console.dir(document.getElementsByClassName("text")[0])

// console.dir(document.querySelector("#aa").innerText)
// console.dir(document.querySelectorAll(".text")[0].innerText)
// document.querySelector("p").innerText = "Bye"


// let count = 0

// setInterval(() => {
//   console.log(++count);
//   if(count === 3) {
//     count = 0
//   }
// }, 500)

// const sayHi = setInterval(() => {
//   console.log('hi');
// }, 1000)
// setTimeout(() => {
//   clearInterval()
// }, 5000)

// let count = 0
// setInterval(() => {
//   ++count
//   if (count === 1) {
//     document.querySelector("#img").src = "https://avatars.mds.yandex.net/i?id=8c2235974e630906dcc02ba926fcd2101983166d-10762769-images-thumbs&n=13"
//   }else if (count === 2) {
//     document.querySelector("#img").src = "https://avatars.mds.yandex.net/i?id=9b18feb3eaa6b3e9c851ff48d9306f5c-5551764-images-thumbs&n=13"
//     setTimeout(() => {
//       count = 0
//       console.log(count);
//     }, 0)
//   }
// }, 2000)

// const list = Array.from(document.querySelector("ul").children);
// list.forEach((el) => {
//   console.log(el.innerText);
// })

// console.dir(list[0].innerText);
// console.dir(list[1].innerText);
// console.dir(list[2].innerText);

// const list = document.querySelector("ul").children
// for(let i = 0; i <= list.length; i++) {
//   list[i].id = `f${i}`
// }

// const list = (document.querySelector("ul").children);
// for(i = 0; i < list.length; i++) {
//   console.dir(list[i].innerText)
// }

// document.querySelector('html').lang = "kg"


// const title = document.querySelector(".hero_title.title")
// console.dir(title.className);
// console.dir(title);
// console.dir(title.innerHTML);

// const cont = document.querySelector(".container")
// cont.innerHTML = "<p>Hi</p>"
// cont.innerHTML = cont.innerHTML + "<p class ='arr'>Hi</p>"

// let arr = document.querySelector("nav li")
// for(let i = 0; i < arr.length; i++) {
//   arr[i].innerHTML = 'd'
// }
// console.log(arr);

// const list = document.querySelectorAll("li")

// list.forEach((el, idx) => {
//   if(idx % 2 === 0) {
//     el.className = "danger"
//   }
// })

// const list = document.querySelector("li")

// list.style.color = "red"
// list.style.fontFamily = "sans-serif"

// const list = document.querySelectorAll(".text1")
// list.forEach((el) => {
//   el.style.textDecoration = "underline";
// })

// const p = document.querySelectorAll("p")
// p.forEach((el) => {
//   if(el.id) {
//     el.style.color = "red"
//   }
// })

// const p = document.querySelectorAll("#p1,#p2,#p3,#p4")
// p.forEach((el) => {
//   el.style.color = "red"
// })

// const div = document.querySelector(".container")

// const p = document.createElement("p")
// p.innerText = 'abvgada'
// p.className = 'title'
// p.id = 'subtitle'
// div.appendChild(p)

// const list = document.querySelectorAll('p')
// list.forEach((el) => {
//   el.dataset.id = "c1"
//   el.dataset.population = "1000000"
// })

// const add_p = document.querySelector(".container")

// for(let i = 0; i < 5; i++) {
//   const p = document.createElement("p")
//   p.innerText = 'qwerty'
//   p.className = 'peshki'
//   add_p.appendChild(p)
// }

// const addListItem = (N) => {
//   const list = document.querySelector(".container")
//   for(let i = 0; i < N; i++) {
//     const li = document.createElement("li")
//     li.innerText = 'qwerty'
//     list.appendChild(li)
//   }
// }
// addListItem(10)

// const list = document.querySelectorAll("p")
// list.forEach((el,idx) => {
//   el.dataset.id = `${idx + 1}c`
//   // console.log(el);
// })

// for (let i = 0; i < list.length; i++) {
//   list[i].dataset.id = `${i + 1}c`
//   console.log(list[i]);
// }

// const arr = ["Bishkek", "Osh", "Dubai", "Moscow"]

// const list = document.querySelector(".cities")

// for(let i = 0; i < arr.length; i++) {
//   const cityLinkNew = document.createElement("a")
//   cityLinkNew.href = '#'
//   cityLinkNew.className = 'cities_link'
//   cityLinkNew.innerText = arr[i]
//   list.appendChild(cityLinkNew)
// }

// arr.forEach((city) => {
//   const cityLinkNew = document.createElement("a")
//   cityLinkNew.href = `#`
//   cityLinkNew.className = `cities_link`
//   cityLinkNew.innerText = `${city}`
//   list.appendChild(cityLinkNew)
// })

// const list = document.querySelectorAll("p")
// list.forEach((el) => {
//   el.innerText = el.dataset.item.toLowerCase()
//   el.style.textTransform = 'capitalize'
// })

// //task1
// console.log(document.querySelector('a').innerText);

// //task2
// let list = document.querySelectorAll('a')
// list.forEach((el) => {
//   console.log(el.innerText);
// })

// //task3
// let listNav = document.querySelectorAll('.nav_link_item')
// listNav.forEach((el) => {
//     console.log(el.innerText);
// })

// //task4
// const classname = (n) => {
//   let list = document.querySelectorAll(n)
//   return [...list].map((el) => el.className);
// }
// console.log(classname(".nav_link_item"));

// task5
// const data = (n) => {
//   let list = document.querySelectorAll(n)
//   list.forEach((el) => {
//     console.log(el.dataset.link);
//   })
// }
// data(".nav_link")

//task6
// const task6 = (n) => {
//   let list = document.querySelectorAll(n)
//   let result = [...list].filter((el) => {
//     if(el.classList[1] !== el.innerText) {
//       return el.innerHTML
//     }
//   })
//   return result
// }
// console.log(task6(".nav_link"));

// task7
// let list = document.querySelectorAll(".nav_link")
// list.forEach((el) => el.innerText = `${el.dataset.link} ${el.classList[1]}`)

//task9
// const addDiv = (n) => {
//   let list1 = document.querySelector(n)
//   let ul = document.createElement('ul')
//   ul.id = 'list'
//   list1.appendChild(ul)
//   for(let i = 1;i <= 10; i++) {
//     let li = document.createElement('li')
//     li.innerText = 'child ' + i
//     ul.appendChild(li)
//   }
// }
// addDiv(".append_div")

// const input = document.querySelector("#text")
// input.addEventListener("input", () => {
//   console.log("input type...");
// })

// const button = document.querySelector(".push")
// button.addEventListener("click", () => {
//   console.log("button type...");
// })

// const button = document.querySelector(".push")
// button.addEventListener("click", () => { // ЛКМ
//   console.log("button type...");
// })

// button.addEventListener("input", () => { // обработчик инпута
//   console.log("button type...");
// })

// button.addEventListener("contextmenu", () => { // ПКМ
//   console.log("button type...");
// })

// button.addEventListener("mouseover", () => { // наведение на btn
//   console.log("button type...");
// })

// button.addEventListener("mousemove", () => { // ведение внутри btn
//   console.log("button type...");
// })

// const button = document.querySelector(".push")
// button.addEventListener("click", (e) => {
//   e.preventDefault()
//   console.log("button type...");
// })

// button.addEventListener("contextmenu", (e) => {
//   e.preventDefault()
//   console.log("button type...");
// })

// const openBtn = document.querySelector(".push")

// openBtn.addEventListener("click", () => {
//   const open_overlay = document.querySelector(".popup")
//   open_overlay.style.display = "block"
// })

// const closeBtn = () => {
//   const close_overlay = document.querySelector(".popup")
//   close_overlay.style.display = "none"
// }

// const closeBtn = document.querySelector(".popup__close")

// closeBtn.addEventListener("click", () => {
//   const close_overlay = document.querySelector(".popup")
//   close_overlay.style.display = "none"
// })

// const closeOverlay = () => {
//   const close_overlay_win = document.querySelector(".popup")
//   close_overlay_win.style.display = "none"
// }

// const user = {
//   name: "alex"
// }

// localStorage.setItem("name1", "alex") // Сохроняет строку в localStorage
// const name = localStorage.getItem("name") // Получает данные из localStorage
// console.log(name);
// localStorage.clear() // удоляет всё из localStorage
// localStorage.removeItem("name") // удоляет выбранный ключ из localStorage


// // работа с ссылочными типами данными внутри localStorage
// const arr = ["a","b","c"]
// localStorage.setItem("array",JSON.stringify(arr)) //
// console.log(JSON.parse(localStorage.getItem("array")));


// const array = ["a","b","c","d"]
// localStorage.setItem("newArray", JSON.stringify(array))
// // localStorage.clear()
// let lastArray = JSON.parse(localStorage.getItem("newArray"));
// // lastArray.push("e")
// const newArray = [...lastArray, "e"]
// const idxArray = newArray.map((el, idx) => idx)

// localStorage.setItem("idxArray", JSON.stringify(idxArray))
