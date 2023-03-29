import styles from './PokemonCard.module.css'


function PokemonCard({pokemon }) {
     
return (

    <div> {pokemon.imgSrc ?
        
        <figure className={styles.card}>

            <img src={  pokemon.imgSrc }  alt={ pokemon.name } className={styles.cardImg}  />
            <figcaption>{pokemon.name}</figcaption> 

        </figure>
        
        : 
        <figure className={styles.card}>
            <p>???</p>
    <figcaption>{pokemon.name}</figcaption>
    </figure>
    } 
    
    
    </div>


)


};

export default PokemonCard;
