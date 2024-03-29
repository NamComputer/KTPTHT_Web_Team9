import React, { useContext } from "react"
import { Switch, Route } from "react-router-dom"
import Products from "./products/Products"
import DetailProduct from "./detailProduct/DetailProduct"
import Login from "./auth/Login"
import Register from "./auth/Register"
import OrderHistory from "./history/OrderHistory"
import OrderDetails from "./history/OrderDetails"
import Cart from "./cart/Cart"
import Categories from "./categories/Categories"
import NotFound from "./utils/not_found/NotFound"

import { GlobalState } from "../../GlobalState"
export default function Pages() {
  const state = useContext(GlobalState)
  const [isLogged] = state.userAPI.isLogged
  const [isAdmin] = state.userAPI.isAdmin

  return (
    <Switch>
      <Route path="/" exact component={Products} />

      <Route path="/detail/:id" exact component={DetailProduct} />

      <Route path="/login" exact component={isLogged ? NotFound : Login} />

      <Route
        path="/register"
        exact
        component={isLogged ? NotFound : Register}
      />

      <Route
        path="/category"
        exact
        component={isAdmin ? Categories : NotFound}
      />

      <Route
        path="/history"
        exact
        component={OrderHistory ? OrderHistory : NotFound}
      />

      <Route
        path="/history/:id"
        exact
        component={OrderDetails ? OrderDetails : NotFound}
      />

      <Route path="/cart" exact component={Cart} />

      <Route path="*" exact component={NotFound} />
    </Switch>
  )
}
