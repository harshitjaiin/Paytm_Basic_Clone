import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios";
import { useNavigate } from "react-router-dom"
export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [balance, setBalance] = useState("");
  const navigate = useNavigate();

  return (<div className="bg-gradient-to-l from-gray-200 via-fuchsia-200 to-stone-100 h-screen w-screen flex justify-center">
    <div className="flex flex-col justify-center w-120">
      <div className="rounded-lg bg-white text-center h-max w-[600px] p-2 px-4" >
        <Heading label={"Sign Up"}></Heading>
        <SubHeading label={"Enter your details to create an account"}/>
        <InputBox onChange={(e)=> setFirstName(e.target.value)} label={"First Name"} placeholder={"Enter your First Name"}></InputBox>
        <InputBox onChange={(e)=> setLastName(e.target.value)} label={"Last Name"} placeholder={"Enter your Last Name"}></InputBox>
        <InputBox onChange={(e)=> setUsername(e.target.value)} label={"Email"} placeholder={"Enter your Email"}></InputBox>
        <InputBox onChange={(e)=> setPassword(e.target.value)} label={"Password"} placeholder={"Enter your Password"}></InputBox>
        <InputBox onChange={(e)=> setBalance(e.target.value)} label={"Initial Balance"} placeholder={"Enter your Initial Balance"}></InputBox>
        <div className="pt-6">
          <Button label={"Sign Up"} onClick={async function(){
            const response = await axios.post("http://localhost:3000/api/v1/user/signup" , {
                username,
                lastName,
                firstName,
                password,
                balance
              });
              localStorage.setItem("token" , response.data.token)
              navigate("/Dashboard")
            }}
          ></Button>
        </div>
      </div>
    </div>
  </div>)
}
// export const Signup = () => {
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [balance, setBalance] = useState("");
//     const navigate = useNavigate();

//     return <div className="bg-slate-300 h-screen flex justify-center">
//     <div className="flex flex-col justify-center">
//       <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
//         <Heading label={"Sign up"} />
//         <SubHeading label={"Enter your infromation to create an account"} />
//         <InputBox onChange={e => {
//           setFirstName(e.target.value);
//         }} placeholder="John" label={"First Name"} />
//         <InputBox onChange={(e) => {
//           setLastName(e.target.value);
//         }} placeholder="Doe" label={"Last Name"} />
//         <InputBox onChange={e => {
//           setUsername(e.target.value);
//         }} placeholder="harkirat@gmail.com" label={"Email"} />
//         <InputBox onChange={(e) => {
//           setPassword(e.target.value)
//         }} placeholder="123456" label={"Password"} />
//         <InputBox onChange={(e) => {
//           setBalance(e.target.value)
//         }} placeholder="0000 Rs" label={"Initial Balance"} />
//         <div className="pt-4">
//           <Button onClick={async () => {
//             const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
//               username,
//               firstName,
//               lastName,
//               password,
//               balance
//             });
//             localStorage.setItem("token", response.data.token)
//             navigate("/dashboard")
//           }} label={"Sign up"} />
//         </div>
//         <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
//       </div>
//     </div>
//   </div>
// }

