import React, { useContext } from "react"
import { GlobalState } from "../../../GlobalState"
import ProductItem from "../utils/productItem/ProductItem"
import Loading from "../utils/loading/Loading"

export default function Products() {
  const state = useContext(GlobalState)
  const [products] = state.productsAPI.products
  const [isAdmin] = state.userAPI.isAdmin
  return (
    <>
      <div className="products">
        {products.map((product) => {
          return (
            <ProductItem
              key={product._id}
              product={product}
              isAdmin={isAdmin}
            />
          )
        })}
      </div>
      {products.length === 0 && <Loading />}
    </>
  )
}
