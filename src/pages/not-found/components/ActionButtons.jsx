import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button";

const ActionButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
      <Button onClick={() => navigate("/")}>
        Go Home
      </Button>

      <Button
        variant="secondary"
        onClick={() => navigate(-1)}
      >
        Go Back
      </Button>
    </div>
  );
};

export default ActionButtons;