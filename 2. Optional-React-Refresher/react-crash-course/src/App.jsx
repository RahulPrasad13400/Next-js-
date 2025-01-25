import { useState } from "react"
import Post from "./components/Post"

const data = [
  {
    author : "rahul",
    text : "figth till we die"
  }
]

function App() {
  const [show, setShow] = useState(false) 
  const [auth, setAuth] = useState("")
  const [textEntered, setTextEntered] = useState("")

  function handleAdd(e){
    e.preventDefault()
    setShow(!show)
    console.log(auth, textEntered)
  }

  return <div className="appDiv">
    <button className="button-17" onClick={handleAdd}>Add Quote</button>
    {show && <form>
      <div>
      <input type="text" value={auth} onChange={e=>setAuth(e.target.value)} placeholder="enter the author's name" />
      <label htmlFor="">Author</label>
      </div>
      <div>
      <input type="text" value={textEntered} onChange={e=>setTextEntered(e.target.value)} placeholder="enter the quote" />
      <label htmlFor="">Text</label>
      </div>
      <div>
      <button>Add</button>
      </div>
      </form>}
    <main>
      <ul>
      {data.map(item=><Post item={item} key={item.text}/>)}
    </ul>
    </main>
  </div>
}

export default App
