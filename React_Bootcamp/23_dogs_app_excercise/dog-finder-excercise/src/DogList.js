import React from 'react'
import './DogList.css'
import { Link } from 'react-router-dom'

function DogList(props) {
    return (
        <div>
            <h1 className='display-1 text-center  my-4'>DogList</h1>
            <div className='container'>
                <div className='row'>
                    {props.dogs.map((d, i) => (
                        <div key={i} className='Dog col-lg-4 text-center'>
                            <img src={d.src} alt={d.name} />
                            <h3 className='mt-2'>
                                <Link className='underline'
                                    to={`/dogs/${d.name.toLowerCase()}`}
                                >
                                    {d.name}
                                </Link>
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default DogList