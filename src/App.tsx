import './styles.css'
import character from './assets/memecchi.png'

const PlayButton = () => {
    return <button>Play</button>;
}

const FeedButton = () => {
    return <button>Feed</button>;
}

const ScoldButton = () => {
    return <button>Scold</button>;
}

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

export const App = () => {
    return (
        // change classnames!
        <div className="tamagotchi">
            <ScreenArea />
            <ButtonArea />
        </div>
    );
}