import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import { setItem } from 'store/localStorage';
import { get, isEmpty } from 'lodash'

const Login: FC<any> = (props) => {

    const [loginInfo, setLoginInfo] = useState({
        // email: "quocpt@inspirelab.io",
        // password: "Hello@123",
    })

    const _handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log([event.target.name], event.target.value)
        setLoginInfo({
            ...loginInfo,
            [event.target.name]: event.target.value
        });
    }
    const _handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        console.log("_handleSubmit", event)

        setItem("USER", loginInfo)

        event.preventDefault()

    }

    return (
        <form className="submit-form" onSubmit={_handleSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    className="form-control"
                    id="email"
                    required
                    value={get(loginInfo, "email")}
                    onChange={_handleChange}
                    name="email"
                />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    required
                    value={get(loginInfo, "password")}
                    onChange={_handleChange}
                    name="password"
                />
            </div>

            <button type="submit" className="btn btn-success">
                Submit
            </button>
        </form>
    );
}

export default Login