import React, { useContext } from "react"
import { GlobalState } from "../../../GlobalState"
import { Link } from "react-router-dom"

function OrderHistory() {
  const state = useContext(GlobalState)
  const [history] = state.userAPI.history

  return (
    <div>
      <h2>History</h2>

      <h4>You have {history.length} ordered</h4>

      <div className="history-page">
        <table>
          <thead>
            <tr>
              <th>Payment ID</th>
              <th>Date of Purchased</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {history.map((item) => (
              <tr key={item.id}>
                <td key={item.paymentID}>{item.paymentID}</td>
                <td key={item.createdAt}>
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
                <td>
                  <Link to={`/history/${item._id}`}> View </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrderHistory
