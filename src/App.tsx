import './styles.css'
import { ScreenArea, ButtonArea } from './components/areas/areas';

const App = () => {
    return (
        // change classnames!
        <div className="tamagotchi">
            <ScreenArea />
            <ButtonArea />
        </div>
    );
}

export default App