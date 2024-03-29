import React, { useState, useContext } from "react"
import { GlobalState } from "../../../GlobalState"
import axios from "axios"

function Categories() {
  const state = useContext(GlobalState)
  const [categories, setCategories] = state.categoriesAPI.categories
  const [category, setCategory] = useState("")
  const token = state.token
  const [callback, setCallback] = state.categoriesAPI.callback

  const createCategory = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(
        "/api/category",
        { name: category },
        {
          headers: { Authorization: token },
        }
      )
      setCategory("")
      setCallback(!callback)
      alert(res.data.msg)
    } catch (err) {
      alert(err.response.data.message)
    }
  }

  //   const editCategory = async (id, name) => {

  //   }

  return (
    <div className="categories">
      <form onSubmit={createCategory}>
        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          value={category}
          required
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">Save</button>
      </form>

      <div className="col">
        {categories.map((category) => (
          <div className="row" key={category._id}>
            <p>{category.name}</p>
            <div>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
// onClick={editCategory}
