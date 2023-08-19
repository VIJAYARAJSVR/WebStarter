import './css/App.css';

import WebsiteCard from "./component/WebsiteCard";
import {useEffect, useState} from "react";

function App() {


    const defaulturl = "https://vijayarajsvr.github.io/Portfolio/";
    const default_delay = 5000;
    const default_count_starts = 5;

    const [Seconds, setSeconds] = useState(default_count_starts);

    useEffect(() => {

        setTimeout(() => {
            window.location.href = defaulturl;
        }, default_delay);

    }, []);


    useEffect(() => {

        const interval = setInterval(() => {
            let newvalue = Seconds - 1;
            if(newvalue===0)
            {
                newvalue = default_count_starts
            }
            setSeconds(newvalue);
        }, 1000);
        return () => clearInterval(interval);

    }, [Seconds]);


    return (
        <div className="container mt-5 text-center">

            <h1 className="mb-5 mt-5"> Thank you for your interest</h1>

            <div className={"row mt-5"}>
                <div className={"col-3"}></div>
                <div className={"col-6"}>
                    <h4 className={"text-warning"}> Please click any of the below link (card). </h4>
                </div>
                <div className={"col-2 text-white-50 fs-3 fw-semibold"}>{Seconds} sec</div>
            </div>

            <WebsiteCard/>

        </div>
    );
}

export default App;

