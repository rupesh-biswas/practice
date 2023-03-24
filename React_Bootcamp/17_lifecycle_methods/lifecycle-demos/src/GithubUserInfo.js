import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';

// class GithubUserInfo extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { name: '', imageUrl: '' }
//     }

//     async componentDidMount() {
//         const url = `https://api.github.com/users/${this.props.username}`;

//         let response = await axios.get(url);
//         let data = response.data;
//         this.setState({ name: data.name, imageUrl: data.avatar_url });

//     }

//     render() {
//         return (
//             <div>
//                 <h2>Github User: {this.state.name}</h2>
//                 <img src={this.state.imageUrl} alt={this.state.name}></img>
//             </div>
//         )
//     }
// }

function GithubUserInfo(props) {
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const url = `https://api.github.com/users/${props.username}`;

            let response = await axios.get(url);
            let data = response.data;
            setName(data.name);
            setImageUrl(data.avatar_url);
        }
        fetchData();
    }, [props.username])

    return (
        <div>
            <h2>Github User: {name}</h2>
            <img src={imageUrl} alt={name}></img>
        </div>
    )

}

export default GithubUserInfo;