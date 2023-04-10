import TopAppBar from "@/layouts/TopAppBar/TopAppBar";
import { useNavigate } from "react-router-dom";

export const Component = () => {
  const naviagte = useNavigate();

  return (
    <>
      <TopAppBar />

      <button onClick={() => naviagte("/list")}>GO LIST</button>
    </>
  );
};
