import { useNavigate } from "react-router-dom";
import HeroBanner from "../components/HeroBanner";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <HeroBanner onExplore={() => navigate("/movies")} />
    </div>
  );
}
