import { FeedButton, GetNewPokemonButton, PlayButton, ScoldButton } from '../buttons/buttons'
import character from '../../assets/memecchi.png'

const ButtonArea = () => {
    const handleGetClick = (): any => {
        console.log('hola que tal')
    }

    return (
        <div className="button-area">
            <span>
                <GetNewPokemonButton onGetClick={handleGetClick} />
            </span>
            <span>
                <FeedButton />
            </span>
            <span>
                <PlayButton />
            </span>
            <span>
                <ScoldButton />
            </span>
        </div>
    );
}

const ScreenArea = () => {
    return <div className="screen">
        <img src={character} alt="Character" />
    </div>;
}

export { ButtonArea, ScreenArea }