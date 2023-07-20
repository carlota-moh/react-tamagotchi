import { CircularProgress } from "@mui/material";
import "./styles.css";

const LoadingPage = () => {
  return (
    <div className="loading-page">
      <CircularProgress />
    </div>
  );
};

export default LoadingPage;
