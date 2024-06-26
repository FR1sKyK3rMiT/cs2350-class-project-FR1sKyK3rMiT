//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

import { medias } from "./media"

for(let m of medias){
    let m_thumb = document.getElementById('m' + m.id)
m_thumb.innerHTML =`
    <img src="${m.poster}" alt="${m.title}" class="img-thumbnail"/>
    <p class="thumbnailTitle">${m.title}<p>
`

m_thumb.onclick = function(){
    displayMedia(m)
}
}

let featured_media = document.querySelector(".featured")
function displayMedia(media){
    featured_media.innerHTML = `
    <div class="card">
            <div class="card-header">${media.title}</div>
              <img src="${media.poster}" class="card-img-top" alt="${media.title}">
              <div class="card-body">
                <h5 class="card-title"><small>${media.genre}</small></h5>
                <p class="card-text">${media.plot}</p>
              </div>
              <div class="card-footer text-body-secondary">
              </div>
              </div>
    `
}

function searchMedias(event){
    event.preventDefault()

    let input = document.querySelector('[type="search"]').value || ""
    let count = 0
    for(let m of medias){
        if(m.title.toUpperCase().indexOf(input.toUpperCase()) == -1){
            document.querySelector(`#m${m.id}`).classList.add('d-none')
        }else{
            document.querySelector(`#m${m.id}`).classList.remove('d-none')
            count++
        }
        }

        featured_media.innerHTML = count == 0 ? 'Nothing was found' : ''
    }

    function searchMedias2(event){
        event.preventDefault()
    
        let input = document.querySelector('[type="search2"]').value || ""
        let count = 0
        for(let m of medias){
            if(m.title.toUpperCase().indexOf(input.toUpperCase()) == -1){
                document.querySelector(`#m${m.id}`).classList.add('d-none')
            }else{
                document.querySelector(`#m${m.id}`).classList.remove('d-none')
                count++
            }
            }
    
            featured_media.innerHTML = count == 0 ? 'Nothing was found' : ''
        }

    document.querySelector('.button').onclick = searchMedias
    document.querySelector('[type="search"]').onsearch = searchMedias
    document.querySelector('.d-flex1').onsubmit = searchMedias
    document.querySelector('.button2').onclick = searchMedias2
    document.querySelector('[type="search2"]').onsearch = searchMedias2
    document.querySelector('.d-flex2').onsubmit = searchMedias2