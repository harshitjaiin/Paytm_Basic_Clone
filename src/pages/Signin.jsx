import axios from "axios";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/Dashboard");
    } catch (error) {
      console.error("Sign-in error:", error);
      alert("Error signing in. Please check your credentials and try again.");
    }
  };

  return (
    <div className="bg-gradient-to-l from-gray-200 via-fuchsia-200 to-stone-100 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-[600px] text-center p-2 h-max px-4">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox onChange={(e) => setUsername(e.target.value)} placeholder={"harshit@gmail.com"} label={"Email"} />
          <InputBox onChange={(e) => setPassword(e.target.value)} placeholder={"123456"} label={"Password"} />
          <div className="pt-4">
            <Button label={"Sign in"} onClick={handleSignIn} />
          </div>
          <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
        </div>
      </div>
    </div>
  );
};
