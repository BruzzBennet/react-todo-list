import {useState} from "react"
import { preprocessCSS } from "vite"

export function NewTodoForm({onSubmit}){
    const{newItem, setNewItem} = useState("")
    
    function handleSubmit(e){
        e.preventDefault()

        onSubmit(newItem)

        setNewItem("")
    }

    <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label>New Item</label>
          <input 
            value={newItem} 
            onChange={e => setNewItem(e.target.value)} 
            type="tex" 
            id="item" 
          />
        </div>
        <button className="btn">Add</button>
    </form>
}