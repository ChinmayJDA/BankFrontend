import React from 'react'
import { useState } from "react";
import axios from 'axios';
const Deposit = (props) => {
    const [amount, setamount] = useState({amount: 0, pin:""});
    const onChange=(e)=>{
        setamount({
            ...amount,[e.target.name]:e.target.value
        })
    }
    const handleClick =(e) =>{
        e.preventDefault();
        localStorage.setItem('token','eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhOGU0YTUiLCJpYXQiOjE3MTA0NzQ3MjksImV4cCI6MTcxMDQ5MjcyOX0.uaLwLEWgdeQdFSfYpYvtkFEgYAaxBhWuU-g82fGu7n_2Ou87TbHXCrklllW5-FOziYsTF2ZLGB8VD33OR0bw4Q');// Replace 'your_auth_token' with your actual authorization token
        const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhOGU0YTUiLCJpYXQiOjE3MTA0NzQ3MjksImV4cCI6MTcxMDQ5MjcyOX0.uaLwLEWgdeQdFSfYpYvtkFEgYAaxBhWuU-g82fGu7n_2Ou87TbHXCrklllW5-FOziYsTF2ZLGB8VD33OR0bw4Q';

        const config = {
            headers: {
                'Authorization': `Bearer ${token}`, // Include the authorization header
                'Content-Type': 'application/json' // Set the Content-Type header if needed
            }
        };

        axios.post('http://localhost:8080/api/account/deposit',amount, config).then(response=>{
            console.log(response);
        }).catch(error=>{
            console.log(error);
        });
        //page don.t reload
        //send api
        //showAlert
        setamount({Amount:0,pin:""})
    }
    return (
        <>
            <form>
                <div className="mb-3">
                    <label for="amount" className="form-label">Amount</label>
                    <input type="text" className="form-control" id="amount" name="amount" value={amount.amount} onChange={onChange} />
                </div>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Deposit</button>
            </form>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                        <label for="amount" className="form-label">Pin</label>
                            <input type="password" className="form-control" id="pin" name="pin" value={amount.pin} onChange={onChange} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleClick}>Deposit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Deposit