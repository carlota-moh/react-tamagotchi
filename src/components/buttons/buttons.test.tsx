import { render, screen } from "@testing-library/react";
import {
  PlayButton,
  FeedButton,
  ScoldButton,
  GetNewPokemonButton,
} from "./buttons";
import App from "../../App";

describe("Buttons render correctly", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("Renders New button correctly", () => {
    const newButton = screen.getByRole("button", {
      name: "New",
    });
    expect(newButton).toBeInTheDocument;
  });

  it("Renders Feed button correctly", () => {
    const feedButton = screen.getByRole("button", {
      name: "Feed",
    });
    expect(feedButton).toBeInTheDocument;
  });

  it("Renders Play correctly", () => {
    const playButton = screen.getByRole("button", {
      name: "Play",
    });
    expect(playButton).toBeInTheDocument;
  });

  it("Renders Scold correctly", () => {
    const scoldButton = screen.getByRole("button", {
      name: "Scold",
    });
    expect(scoldButton).toBeInTheDocument;
  });
});
