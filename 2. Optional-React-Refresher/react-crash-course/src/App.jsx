import { useState } from "react"
import Post from "./components/Post"
import Form from "./components/Form"
import { Link, NavLink, useNavigate } from "react-router-dom"

// const data = [
//   {
//     author : "rahul",
//     text : "figth till we die"
//   }
// ]

function App() {
  const [show, setShow] = useState(false) 
  const [auth, setAuth] = useState("")
  const [textEntered, setTextEntered] = useState("")
  const [data, setData] = useState([])
  const navigate = useNavigate()

  function handleAdd(e){
    e.preventDefault()
    setShow(!show)
  }

  // Add new post to data
  function handleSubmit(e) {
    e.preventDefault();
    const newObj = {
      auth,
      textEntered,
    };
    setData((data) => [...data, newObj]);
    // Navigate to home page after submitting the form
    navigate('/')
    setAuth("");
    setTextEntered("");
  }

  return <div className="appDiv">
    <Link className="button-17" to='/form'>Add Quote</Link>
    {show && <Form handleSubmit={handleSubmit} auth={auth} setAuth={setAuth} textEntered={textEntered} setTextEntered={setTextEntered} setShow={setShow} /> }
    <main>    
      {data.length === 0 && <>
        <h1 style={{textAlign : "center", color : "darkred"}}>There is no post yet!</h1>
        <h3 style={{textAlign : "center", color : "darkred", marginTop : "10px"}}>start adding new post</h3>
      </>}
      <ul> 
      {data.length > 0 && data.map(item=><Post item={item} key={item.textEntered}/>)}
    </ul>
    </main>
  </div>
}

export default App
