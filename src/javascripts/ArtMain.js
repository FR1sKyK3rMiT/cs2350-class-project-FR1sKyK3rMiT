//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

import { Arts } from "./Art"

for(let m of Arts){
    let m_thumb = document.getElementById('m' + m.id)
m_thumb.innerHTML =`
    <img src="${m.poster}" alt="${m.title}" class="img-thumbnail"/>
    <p class="thumbnailTitle">${m.title}<p>
`

m_thumb.onclick = function(){
    displayArt(m)
}
}

let featured_Art = document.querySelector(".featured")
function displayArt(Art){
    featured_Art.innerHTML = `
    <div class="card">
            <div class="card-header">${Art.title}</div>
              <img src="${Art.poster}" class="card-img-top" alt="${Art.title}">
              <div class="card-body">
                <h5 class="card-title"><small>${Art.genre}</small></h5>
                <p class="card-text">${Art.plot}</p>
              </div>
              <div class="card-footer text-body-secondary">
              </div>
              </div>
    `
}

function searchArts(event){
    event.preventDefault()

    let input = document.querySelector('[type="search"]').value || ""
    let count = 0
    for(let m of Arts){
        if(m.title.toUpperCase().indexOf(input.toUpperCase()) == -1){
            document.querySelector(`#m${m.id}`).classList.add('d-none')
        }else{
            document.querySelector(`#m${m.id}`).classList.remove('d-none')
            count++
        }
        }

        featured_Art.innerHTML = count == 0 ? 'Nothing was found' : ''
    }

    function searchArts2(event){
        event.preventDefault()
    
        let input = document.querySelector('[type="search2"]').value || ""
        let count = 0
        for(let m of Arts){
            if(m.title.toUpperCase().indexOf(input.toUpperCase()) == -1){
                document.querySelector(`#m${m.id}`).classList.add('d-none')
            }else{
                document.querySelector(`#m${m.id}`).classList.remove('d-none')
                count++
            }
            }
    
            featured_Art.innerHTML = count == 0 ? 'Nothing was found' : ''
        }

    document.querySelector('.button').onclick = searchArts
    document.querySelector('[type="search"]').onsearch = searchArts
    document.querySelector('.d-flex1').onsubmit = searchArts
    document.querySelector('.button2').onclick = searchArts2
    document.querySelector('[type="search2"]').onsearch = searchArts2
    document.querySelector('.d-flex2').onsubmit = searchArts2