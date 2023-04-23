import { useEffect, useState } from 'react';
import Router from 'next/router';
import StripeCheckout from 'react-stripe-checkout';
import useRequest from '../../hooks/use-request';

const OrderShow = ({ order, currentUser }) => {
    const [timeLeft, setTimeLeft] = useState(0);

    const { doRequest, errors } = useRequest({
        url: '/api/payments',
        method: 'post',
        body: {
            orderId: order.id
        },
        onSuccess: (payment) => Router.push('/orders')
    })

    useEffect(() => {
        const findTimeLeft = () => {
            const msLeft = new Date(order.expiresAt) - new Date();
            setTimeLeft(Math.round(msLeft / 1000));
        }
        findTimeLeft();
        const timerId = setInterval(findTimeLeft, 1000);

        return () => {
            clearInterval(timerId);
        }
    }, []);

    if (timeLeft < 0) {
        return <div>Order expired</div>
    }

    return (
        <div>
            <h2>Purchasing {order.ticket.title}</h2>
            {timeLeft} seconds remaining to complete payment
            {errors}
            <StripeCheckout
            token={(token) => doRequest({ token: token.id })}
            amount={order.ticket.price * 100}
            email={currentUser.email}
            stripeKey='pk_test_51MsKx7JGPNjEZ2xWgwtMP3JyRoCqa78hVal2fxwlSN1kp7CzSXDEE7IOWPtHB3ctJkd6WUK7PxRMAwPTbPKDuloc00SFxfO04H'
            />
        </div>
    )
}

OrderShow.getInitialProps = async (context, client) => {
    const { orderId } = context.query;
    const { data } = await client.get(`/api/orders/${orderId}`);
    return { order: data };
}

export default OrderShow;