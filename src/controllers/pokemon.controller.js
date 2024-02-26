import axios from 'axios';

export const getAllPokemons = async (req, res) => {

    let allPokemon = {}

    try {

        const { urlapi } = req.query
        
        if ( urlapi ){
            
            allPokemon = await axios.get(urlapi)

        }
        else {

            allPokemon = await axios.get("https://pokeapi.co/api/v2/pokemon")

        }
    
        const arrAllPokemon = allPokemon.data.results

        arrAllPokemon.sort(function(a, b){
            let x = a.name.toLowerCase();
            let y = b.name.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
        
        let arrAllPokemonResult = []

        arrAllPokemonResult = await DataPokemons ( arrAllPokemon )
        
        const dataResult = {
            "count": allPokemon.data.count,
            "next": allPokemon.data.next,
            "previous": allPokemon.data.previous,
            "results" : arrAllPokemonResult
        }

        res.json(   dataResult ) 

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const DataPokemons = async ( data ) => {
    const allDataPokemon = []

    try {

        for(  let item of data ) {

            const result = await axios.get( item.url )
            
            result.data.url_pokemon = item.url
            result.data.name_pokemon = item.name

            allDataPokemon.push ( result.data )
        }

        return allDataPokemon

    } catch (error) {
        return error
    }
}