import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

const NewTicket = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');

    const formatPriceOnBlur = () => {
        const value = parseFloat(price);
        if (isNaN(value)) {
            return;
        }
        setPrice(value.toFixed(2));
    }

    const { doRequest, errors } = useRequest({
        url: '/api/tickets',
        method: 'post',
        body: {
            title, price
        },
        onSuccess: () => Router.push('/')
    })

    const onSubmit = async (event) => {
        event.preventDefault();
        await doRequest();
    }

    return (
        <div>
            <h1>Create new ticket</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input className="form-control" value={title} onChange={event => setTitle(event.target.value)} />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input className="form-control" value={price} onBlur={formatPriceOnBlur} onChange={event => setPrice(event.target.value)}/>
                </div>
                {errors}
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default NewTicket;