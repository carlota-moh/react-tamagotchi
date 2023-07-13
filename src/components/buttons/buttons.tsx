import Button from "@mui/material/Button";
import React, { FC } from "react";
import { ButtonProps } from "./types";

const FeedButton = () => {
  return (
    <Button variant="contained" color="primary" size="small">
      Feed
    </Button>
  );
};

const PlayButton: FC<ButtonProps> = ({ onGetClick }) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      size="small"
      onClick={onGetClick}
    >
      Play
    </Button>
  );
};

const ScoldButton = () => {
  return (
    <Button variant="contained" color="error" size="small">
      Scold
    </Button>
  );
};

const GetNewPokemonButton: FC<ButtonProps> = ({ onGetClick }) => {
  return (
    <Button
      variant="contained"
      color="success"
      size="small"
      onClick={onGetClick}
    >
      New
    </Button>
  );
};

export { PlayButton, FeedButton, ScoldButton, GetNewPokemonButton };
