function PokemonCard() {
    return (

        <div>
            <figure className="card">
                <img src="./src/assets/bulbizare.png" alt="bulbasaur" className="card-img"/>
            </figure>

            <figcaption>bulbasaur</figcaption>
        </div>


const pokemon = pokemonList[1];
    return (
        <div> {
            pokemon.image ? <img src={
                    pokemon.image
                }
                alt={
                    pokemon.name
                }/> : <p>???</p>
        } </div>
    );

    );


};

const pokemonList = [


    {
        name: "bulbasaur",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    }, {
        name: "mew"
    },
];


export default PokemonCard;
