const elList = document.querySelector('.js-list');
const elSelect = document.querySelector('.js-select');

renderList(films);

elSelect.addEventListener('change', function () {
    const elSelectedMovies = [];
   
    films.forEach((el) =>  {
        el.genres.forEach((e)=>{
            if (e === elSelect.value) {
                elSelectedMovies.push(el);
            }
        });
    });

    renderList(elSelectedMovies);
});

function renderList(array) {
    elList.innerHTML = ''
    array.forEach((el) => {
        elList.innerHTML += `<li class="li1">
        <h3 class="el-title">${el.title}</h3>
        <img
            src="${el.poster}"
            alt="movie"
            width="150"
            class = "img10"
        />
        <p class="p10">${el.genres}</p>
    </li> `;
    });
}

films.forEach((film) => {
   let filmsBox = document.createElement("div");
   filmsBox.classList.add("films-box");
   filmsBox.innerHTML = `
         <div class="move-img">
            <img src="${film.poster}" alt="">
         </div>
               <div class="move-info">
               <h4 class="move-name">${film.title}</h4>
               
               <p>Genres:</p>
               <p class="move-genres">${film.genres.join(" ")}</p>
               <p class="move-id">id: ${film.id}</p>
               </div>
         `;
   moveBOX.appendChild(filmsBox);
});