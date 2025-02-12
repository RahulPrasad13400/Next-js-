// lot of mistakes are there dont use this react crash course for learning 

import { useNavigate } from "react-router-dom"

export default function Form({handleSubmit, auth, setAuth, textEntered, setTextEntered, setShow}) {
  const navigate = useNavigate()
  return <form onSubmit={handleSubmit}>
        <div>
        <input type="text" value={auth} onChange={e=>setAuth(e.target.value)} placeholder="enter the author's name" />
        <label htmlFor="">Author</label>
        </div>
        <div>
        <input type="text" value={textEntered} onChange={e=>setTextEntered(e.target.value)} placeholder="enter the quote" />
        <label htmlFor="">Text</label>
        </div>
        <div style={{display : "flex", flexDirection : "row", justifyContent : "center "}}>
        <button type="button" onClick={()=>setShow(false)}>Cancel</button> {/* type = "button"  ----  to make sure the cancel button dosent trigger form submission */}
        <button>Add</button>
        </div>
        </form>
}
