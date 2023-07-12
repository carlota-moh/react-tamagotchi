import { FeedButton, PlayButton, ScoldButton } from '../buttons/buttons'
import character from '../../assets/memecchi.png'

const ButtonArea = () => {
    return (
        <div className="button-area">
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