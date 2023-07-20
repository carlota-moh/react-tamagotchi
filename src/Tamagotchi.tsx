"use client";
import "./styles.css";
import { ScreenArea, ButtonArea } from "./components/areas/areas";
import { ErrorBoundary } from "react-error-boundary";
import { ScreenFallback } from "./Root";

const Tamagotchi = () => {
  return (
    <div className="tamagotchi">
      <ErrorBoundary FallbackComponent={ScreenFallback}>
        <ScreenArea />
      </ErrorBoundary>

      <ButtonArea />
    </div>
  );
};

export default Tamagotchi;
