import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";

export default function Quiz() {
  const navigate = useNavigate();
  const { authState } = useAuth();

  console.log("New value", authState);

  useEffect(() => {
    if (authState.isUserLoggedIn !== true) {
      navigate("/login");
    }
  }, [authState.isUserLoggedIn, navigate]);

  return (
    <div className="quizContainer">
      <h1>I am The real quiz</h1>
    </div>
  );
}
