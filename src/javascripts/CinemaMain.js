//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

import { Cinemas } from "./Cinema"

for(let m of Cinemas){
    let m_thumb = document.getElementById('m' + m.id)
m_thumb.innerHTML =`
    <img src="${m.poster}" alt="${m.title}" class="img-thumbnail"/>
    <p class="thumbnailTitle">${m.title}<p>
`

m_thumb.onclick = function(){
    displayCinema(m)
}
}

let featured_Cinema = document.querySelector(".featured")
function displayCinema(Cinema){
    featured_Cinema.innerHTML = `
    <div class="card">
            <div class="card-header">${Cinema.title}</div>
              <img src="${Cinema.poster}" class="card-img-top" alt="${Cinema.title}">
              <div class="card-body">
                <h5 class="card-title"><small>${Cinema.genre}</small></h5>
                <p class="card-text">${Cinema.plot}</p>
              </div>
              <div class="card-footer text-body-secondary">
              </div>
              </div>
    `
}

function searchCinemas(event){
    event.preventDefault()

    let input = document.querySelector('[type="search"]').value || ""
    let count = 0
    for(let m of Cinemas){
        if(m.title.toUpperCase().indexOf(input.toUpperCase()) == -1){
            document.querySelector(`#m${m.id}`).classList.add('d-none')
        }else{
            document.querySelector(`#m${m.id}`).classList.remove('d-none')
            count++
        }
        }

        featured_Cinema.innerHTML = count == 0 ? 'Nothing was found' : ''
    }

    function searchCinemas2(event){
        event.preventDefault()
    
        let input = document.querySelector('[type="search2"]').value || ""
        let count = 0
        for(let m of Cinemas){
            if(m.title.toUpperCase().indexOf(input.toUpperCase()) == -1){
                document.querySelector(`#m${m.id}`).classList.add('d-none')
            }else{
                document.querySelector(`#m${m.id}`).classList.remove('d-none')
                count++
            }
            }
    
            featured_Cinema.innerHTML = count == 0 ? 'Nothing was found' : ''
        }

    document.querySelector('.button').onclick = searchCinemas
    document.querySelector('[type="search"]').onsearch = searchCinemas
    document.querySelector('.d-flex1').onsubmit = searchCinemas
    document.querySelector('.button2').onclick = searchCinemas2
    document.querySelector('[type="search2"]').onsearch = searchCinemas2
    document.querySelector('.d-flex2').onsubmit = searchCinemas2