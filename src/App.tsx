// import './styles.css'
// import IMAGE from './tamagotchi.png'
// import LOGO from './tamagotchi2.svg'

// export const App = () => {
//     return <>
//         <h1>React Tamagotchi - {process.env.NODE_ENV} {process.env.name}</h1>
//         <img src={ IMAGE } alt="Tamagotchi image" width="200" height="200"/>
//         <img src={ LOGO } alt="Tamagotchi image" width="200" height="200"/>
//     </>
// }

import './styles.css'

export const App = () => {
    return (
        <>
            <div className="tamagotchi">
                <div className="screen">
                    This is the screen
                </div>
                <div className="container">
                    <span>
                        <button>Feed</button>
                    </span>
                    <span>
                        <button>Play</button>
                    </span>
                    <span>
                        <button>Scold</button>
                    </span>
                </div>
            </div>
        </>
    );
}