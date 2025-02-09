import axios from 'axios';
import React, { useState } from 'react';

const Apitask = () => {
    const [data, setData] = useState([]);

    let app = async () => {
        let details = await axios.get("https://jsonplaceholder.typicode.com/todos");
        setData(details.data);
    };

    return (
        <div className="bg-primary text-center p-5">
            <button className="btn btn-light mb-5" onClick={app}>Click</button>

            <div className="row justify-content-center">
                {data.map((item) => (
                    <div className="col-md-3 mb-3" key={item.id}>
                        <div className="card bg-danger text-white p-4">
                            <h3 className="text-center">{item.userId}</h3>
                            <h4 className="text-center">{item.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Apitask;
