import { useState } from "react";

function App() {
    const dataInfo = {
        email: "",
        password: "",
        confirmPassword: "",
        subscription: true,
    };

    const [data, setData] = useState(dataInfo);
    function handleChange(e) {
        const { value, type, name, checked } = e.target;
        setData(() => {
            return {
                ...data,
                [name]: type === "checkbox" ? checked : value,
            };
        });
    }

    function submitHandler(event) {
        event.preventDefault();
        data.password === data.confirmPassword
            ? console.log("successfuly signed up")
            : console.log("passwords do not match");
        if (data.subscription === true && data.password === data.confirmPassword) {
            console.log("thanks for signing up for our newspaper");
        }
        console.log(data);
    }

    return (
        <div className="container">
            <div className="card">
                <form onSubmit={submitHandler}>
                    <input
                        type="email"
                        placeholder="email"
                        onChange={handleChange}
                        value={data.email}
                        name="email"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        name="password"
                    />
                    <input
                        type="password"
                        placeholder="Confirm password"
                        name="confirmPassword"
                        onChange={handleChange}
                    />
                    <input
                        type="checkbox"
                        id="newsletter"
                        onChange={handleChange}
                        name="subscription"
                        checked={data.subscription}
                    />
                    <label htmlFor="newsletter">
                        I want to join the newsletter
                    </label>
                    <button className="btn btn-primary mt-2">Sign up</button>
                </form>
            </div>
        </div>
    );
}

export default App;
