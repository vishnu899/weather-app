import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Login(props) {

    const navigate = useNavigate()
    const [eusername, setEusername] = useState()
    const [epassword, setEpassword] = useState()
    const [ruser, setruser] = useState(true)

    const users = props.users

    function checkUser() {

        var userfound = false

        users.forEach(function (item) {
            if (item.username === eusername && item.password === epassword) {

                console.log("LOGIN SUCCESSFUL")
                userfound = true
                navigate("/landing",{state:{user:eusername}})
            }
        })

        if (userfound === false) {
            console.log("LOGIN FAILED")
            setruser(false)
        }
    }
        function handleUInput(evt) {
            setEusername(evt.target.value)
        }

        function handlePInput(evt) {
            setEpassword(evt.target.value)
        }

        return (
            <>

                <div className="bg-black p-10">
                    <div className="bg-[#EFEFEF] p-10 border rounded-md">
                        <h1 className="text-3xl font-medium">Hey hi</h1>


                        {
                            ruser ? <p>I help you manage activities after you login :)</p> : <p className='text-red-500'>Please Signup before Login</p>
                        }
                        <div className="flex flex-col gap-2 my-2">
                            <input type="text" onChange={handleUInput} className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Username" />
                            <input type="text" onChange={handlePInput} className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Password" />

                            <button className="bg-[#FCA201] w-24 p-1 rounded-md"
                                onClick={checkUser}
                            >
                                Login
                            </button>

                            <p>Don't have an account? <Link to={"/Signup"}>Signup</Link></p>
                        </div>
                    </div>
                </div>
            </>

        )
    }

export default Login