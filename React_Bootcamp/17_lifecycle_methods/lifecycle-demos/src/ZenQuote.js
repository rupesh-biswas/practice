import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import './ZenQuote.css';

class ZenQuote extends Component {
    constructor(props) {
        super(props);

        this.state = ({ quote: '', isLoaded: false });
        console.log("Inside Constructor")
    }

    componentDidMount() {
        console.log("Inside component did mount")
        // load data
        axios.get("https://api.github.com/zen").then(response => {
            setTimeout(() => {
                this.setState({ quote: response.data, isLoaded: true });
            }, 3000)
        });
        // update state with the data
    }

    componentDidUpdate() {
        console.log("Inside Component Did Update");
    }

    render() {
        return (
            <div>
                {
                    this.state.isLoaded ? (
                        <div>
                            <h1>Always remember...</h1>
                            <p>{this.state.quote}</p>
                        </div>
                    ) : (
                        <div className='loader'></div>
                    )
                }
            </div>

        )
    }
}

// function ZenQuote(props) {
//     const [quote, setQuote] = useState("");
//     const [isLoaded, setIsLoaded] = useState(false);

//     // const [serverUrl, setServerUrl] = useState("https://api.github.com/zen");

//     const serverUrl = "https://api.github.com/zen";
//     useEffect(() => {
//         axios.get(serverUrl).then(respose => {
//             setTimeout(() => {
//                 console.log(respose.data);
//                 setQuote(respose.data);
//                 setIsLoaded(true);
//             }, 3000)
//         });
//     }, [serverUrl]);


//     return (
//         <div>
//             {isLoaded ? (
//                 <div>
//                     <h1>Always remember...</h1>
//                     <p>{quote}</p>
//                 </div>
//             ) : (
//                 <div className='loader'></div>
//             )}

//         </div>
//     )
// }

export default ZenQuote;