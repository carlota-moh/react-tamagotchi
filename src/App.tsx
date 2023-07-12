import './styles.css'
import { ScreenArea, ButtonArea } from './components/areas/areas';

export const App = () => {
    return (
        // change classnames!
        <div className="tamagotchi">
            <ScreenArea />
            <ButtonArea />
        </div>
    );
}