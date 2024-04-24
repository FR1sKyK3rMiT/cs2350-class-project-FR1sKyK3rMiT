//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

import { Games } from "./Games"

for(let m of Games){
    let m_thumb = document.getElementById('m' + m.id)
m_thumb.innerHTML =`
    <img src="${m.poster}" alt="${m.title}" class="img-thumbnail"/>
    <p class="thumbnailTitle">${m.title}<p>
`

m_thumb.onclick = function(){
    displayGame(m)
}
}

let featured_Game = document.querySelector(".featured")
function displayGame(Game){
    featured_Game.innerHTML = `
    <div class="card">
            <div class="card-header">${Game.title}</div>
              <img src="${Game.poster}" class="card-img-top" alt="${Game.title}">
              <div class="card-body">
                <h5 class="card-title"><small>${Game.genre}</small></h5>
                <p class="card-text">${Game.plot}</p>
              </div>
              <div class="card-footer text-body-secondary">
              </div>
              </div>
    `
}

function searchGames(event){
    event.preventDefault()

    let input = document.querySelector('[type="search"]').value || ""
    let count = 0
    for(let m of Games){
        if(m.title.toUpperCase().indexOf(input.toUpperCase()) == -1){
            document.querySelector(`#m${m.id}`).classList.add('d-none')
        }else{
            document.querySelector(`#m${m.id}`).classList.remove('d-none')
            count++
        }
        }

        featured_Game.innerHTML = count == 0 ? 'Nothing was found' : ''
    }

    function searchGames2(event){
        event.preventDefault()
    
        let input = document.querySelector('[type="search2"]').value || ""
        let count = 0
        for(let m of Games){
            if(m.title.toUpperCase().indexOf(input.toUpperCase()) == -1){
                document.querySelector(`#m${m.id}`).classList.add('d-none')
            }else{
                document.querySelector(`#m${m.id}`).classList.remove('d-none')
                count++
            }
            }
    
            featured_Game.innerHTML = count == 0 ? 'Nothing was found' : ''
        }

    document.querySelector('.button').onclick = searchGames
    document.querySelector('[type="search"]').onsearch = searchGames
    document.querySelector('.d-flex1').onsubmit = searchGames
    document.querySelector('.button2').onclick = searchGames2
    document.querySelector('[type="search2"]').onsearch = searchGames2
    document.querySelector('.d-flex2').onsubmit = searchGames2