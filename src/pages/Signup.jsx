import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [balance, setBalance] = useState("");
  const [error, setError] = useState(null); // State to hold error message
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signup",
        {
          username,
          lastName,
          firstName,
          password,
          balance,
        }
      );
      localStorage.setItem("token", response.data.token);
      navigate("/Dashboard");
    } catch (error) {
      setError("Error signing up. Please try again."); // Set error message state
      console.error("Signup error:", error);
      window.alert("Error signing up. Please try again."); // Show alert
    }
  };

  return (
    <div className="bg-gradient-to-l from-gray-200 via-fuchsia-200 to-stone-100 h-screen w-screen flex justify-center">
      <div className="flex flex-col justify-center w-120">
        <div className="rounded-lg bg-white text-center h-max w-[600px] p-2 px-4">
          <Heading label={"Sign Up"}></Heading>
          <SubHeading label={"Enter your details to create an account"} />
          <InputBox
            onChange={(e) => setFirstName(e.target.value)}
            label={"First Name"}
            placeholder={"Enter your First Name"}
          />
          <InputBox
            onChange={(e) => setLastName(e.target.value)}
            label={"Last Name"}
            placeholder={"Enter your Last Name"}
          />
          <InputBox
            onChange={(e) => setUsername(e.target.value)}
            label={"Email"}
            placeholder={"Enter your Email"}
          />
          <InputBox
            onChange={(e) => setPassword(e.target.value)}
            label={"Password"}
            placeholder={"Enter your Password"}
          />
          <InputBox
            onChange={(e) => setBalance(e.target.value)}
            label={"Initial Balance"}
            placeholder={"Enter your Initial Balance"}
          />
          {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
          <div className="pt-6">
            <Button label={"Sign Up"} onClick={handleSignup}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};
