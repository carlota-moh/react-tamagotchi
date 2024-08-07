"use client";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import "./styles.css";

export const ScreenFallback = () => {
  return (
    <div className="screen" data-testid="initial-screen">
      <h1 className="welcome-message">Something went wrong</h1>
    </div>
  );
};

const RootPage = () => {
  return (
    <>
      <div className="tamagotchi">
        <ErrorBoundary FallbackComponent={ScreenFallback}>
          <div className="screen">
            <h1 className="welcome-message">Welcome to the Pokémon App!</h1>
          </div>
        </ErrorBoundary>
        <div className="button-area">
          <span>
            <Button variant="contained" color="primary" size="small">
              <Link className="root-link" to={`tamagotchi`}>
                Go to App
              </Link>
            </Button>
          </span>
          <span>
            <Button variant="contained" color="success" size="small">
              <Link className="root-link" to={`pokeform`}>
                Choose Pokémon
              </Link>
            </Button>
          </span>
          <span>
            <Button variant="contained" color="secondary" size="small">
              <Link
                className="root-link"
                to={`https://github.com/carlota-moh/react-tamagotchi`}
              >
                Visit GitHub
              </Link>
            </Button>
          </span>
        </div>
      </div>
    </>
  );
};

export default RootPage;
