import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./styles.css";

const RootPage = () => {
  return (
    <>
      <div className="tamagotchi">
        <div className="screen">
          <h1 className="welcome-message">Welcome to the Pokémon App!</h1>
        </div>
        <div className="button-area">
          <div>
            <Button variant="contained" color="primary" size="large">
              <Link className="root-link" to={`app`}>
                Go to App
              </Link>
            </Button>
          </div>
          <br />
          <div>
            <Button variant="contained" color="secondary" size="large">
              <Link
                className="root-link"
                to={`https://github.com/carlota-moh/react-tamagotchi`}
              >
                Visit GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RootPage;
