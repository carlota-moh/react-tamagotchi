import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "../../src/App";

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

describe("New button works correctly", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("New button displays data when clicked", async () => {
    const newButton = screen.getByRole("button", {
      name: "New",
    });

    expect(screen.getByTestId("initial-screen")).toBeInTheDocument;

    fireEvent.click(newButton);

    await waitFor(() => {
      expect(screen.getByTestId("stats")).toBeInTheDocument;
    });

    expect(screen.getByTestId("stats")).toBeInTheDocument;
    expect(screen.getByTestId("pokemon-img")).toBeInTheDocument;
  });
});

describe("Interactive buttons work correctly", () => {
  beforeEach(async () => {
    render(<App />);
    const newButton = screen.getByRole("button", {
      name: "New",
    });
    fireEvent.click(newButton);
    await waitFor(() => {
      expect(screen.getByTestId("stats")).toBeInTheDocument;
    });
  });

  test("Feed button changes weight when clicked", async () => {
    const feedButton = screen.getByRole("button", {
      name: "Feed",
    });

    const initialWeight = screen.getByTestId('weight-display').innerHTML
    
    fireEvent.click(feedButton);

    expect(screen.getByTestId("weight-display").innerHTML).not.toBe(initialWeight);
  });

  test("Play button changes happiness when clicked", async () => {
    const playButton = screen.getByRole("button", {
      name: "Play",
    });

    const initialHappiness = screen.getByTestId('battery-level').innerHTML
    
    fireEvent.click(playButton);

    expect(screen.getByTestId("battery-level").innerHTML).not.toBe(initialHappiness);
  });

  test("Scold button changes happiness when clicked", async () => {
    const scoldButton = screen.getByRole("button", {
      name: "Scold",
    });

    const initialHappiness = screen.getByTestId('battery-level').innerHTML
    
    fireEvent.click(scoldButton);

    expect(screen.getByTestId("battery-level").innerHTML).not.toBe(initialHappiness);
  });
});
