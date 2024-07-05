import { useEffect, useState } from "react"
import { Button } from "./Button"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

export const Users = () => {
    // Replace with backend call
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        // Decode the token to get the user ID
        const token = localStorage.getItem("token");
        if (token) {
        const decodedToken = jwtDecode(token);
        setUserId(decodedToken.userId);
        }
    }, []);

    useEffect(() => {
        axios.get("https://paytm-basic-clone-backend-1.onrender.com/bulk?filter=" + filter)
            .then(response => {
                setUsers(response.data.user)
            })
    }, [filter])

    return <>
        <div className="m-4 w-[25%] border-2 border-gray-300 rounded-md">
            <input onChange={(e) => {
                setFilter(e.target.value)
            }} type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
        </div>
        <div className="font-bold mt-2 text-lg ml-4">
            Users
        </div>
        <div>
            {users.map(function(user){
                if(user._id!==userId) return <User user={user} />
            })}
        </div>
    </>
}

function User({user}) {
    const navigate = useNavigate();

    return <div className="flex justify-between ml-4 p-2 gap-4">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful pr-10">
            <Button onClick={(e) => {
                navigate("/send?id=" + user._id + "&name=" + user.firstName);
            }} label={"Send Money"} />
        </div>
    </div>
}