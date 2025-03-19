const listaPokemon = document.querySelector("#listaPokemon");
const btnHeader = document.querySelectorAll(".btn-header");
let URL = "https://pokeapi.co/api/v2/pokemon/";


for(let i = 1; i <= 151; i++){
    fetch(URL + i)
         .then((response) => response.json())
         .then(data => mostrarData(data))
}



function mostrarData(poke){
  

    let tipos = poke.types.map((type) => `<p class="${type.type.name} tipo1 tipo2">${type.type.name}</p>`);
    tipos = tipos.join(``);



   const div = document.createElement("div");
   div.classList.add("pokemon");
   div.innerHTML = `
     <p class="pokemon-id-back">#025</p>
                <div class="pokemon-imagen">
                    <img src="${poke.sprites.other['official-artwork'].front_default}" alt="Pikachu">
                </div>
                <div class="pokemon-info">
                    <div class="nombre-contenedor">
                        <p class="pokemon-id">#${poke.id}</p>
                        <h2 class="pokemon-nombre">${poke.name}</h2>
                    </div>
                    <div class="pokemon-tipos">
                       ${tipos}
                    </div>
                    <div class="pokemon-status">
                        <p class="stat">${poke.height}M</p>
                        <p class="stat">${poke.weight}KG</p>
                    </div>       
                </div>   
   `;
   listaPokemon.append(div);
}

btnHeader.forEach(boton => boton.addEventListener("click", (event) =>{
    const botonId = event.currentTarget.id;

    listaPokemon.innerHTML = "";


         for(let i = 1; i <= 151; i++){
            fetch(URL + i)
                 .then((response) => response.json())
                 .then(data => {
                    
                   
                    if(botonId === "vertodos"){
                        mostrarData(data);
                    }else{
                        const tipos = data.types.map(type => type.type.name);
                        if(tipos.some(tipo => tipo.includes(botonId))){
                            mostrarData(data);
                            console.log(data);
                        }
                    }

                    
                 })
        }
}));
