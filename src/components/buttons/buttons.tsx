import Button from "@mui/material/Button";
import React, { FC } from "react";
import { GetNewPokemonProps } from "./types";

const FeedButton = () => {
  return (
    <Button variant="contained" color="primary" size="small">
      Feed
    </Button>
  );
};

const PlayButton = () => {
  return (
    <Button variant="contained" color="secondary" size="small">
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

const GetNewPokemonButton: FC<GetNewPokemonProps> = ({ onGetClick }) => {
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
