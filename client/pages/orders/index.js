const OrdersIndex = ({ orders }) => {
    console.log(orders)
    const ordersList = orders.map(order => {
        return <tr key={order.id}>
            <td>{order.ticket.title}</td>
            <td>{order.status}</td>
        </tr>
    })
    return (
        <div>
            <h1 className="text-center">My Orders</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Order Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {ordersList}
                </tbody>
            </table>
        </div>
    )
}

OrdersIndex.getInitialProps = async (context, client) => {
    const { data } = await client.get('/api/orders');
    return { orders: data }
}

export default OrdersIndex;