import './styles.css'
import { ScreenArea, ButtonArea } from './components/areas/areas';
import { useState } from 'react';
import { PokeData } from './components/areas/types';

const App = () => {
    const [pokemonData, setPokemon] = useState<PokeData>();

    return (
        <div className="tamagotchi">
            <ScreenArea pokemonData={pokemonData}/>
            <ButtonArea setPokemon={setPokemon}/>
        </div>
    );
}

export default App