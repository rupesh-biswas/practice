import React, { useEffect } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import './DogDetails.css'

function DogDetails(props) {
    const { name } = useParams();
    const { dogs } = props;

    let dog = dogs.find(d => d.name.toLowerCase() === name.toLocaleLowerCase());

    if (!dog) {
        return <Navigate to={'/dogs'} replace />
    }

    return (
        <div className='container'>
            <div className='DogDetails row justify-content-center mt-5'>
                <div className='col-11 col-lg-5'>
                    <div className='DogDetails-card card'>
                        <img className='card-img-top' src={dog.src} alt={dog.name} />
                        <div className='card-body'>
                            <h2 className='card-title'>{dog.name}</h2>
                            <h4 className='card-subtitle text-muted'>{dog.age} years old</h4>
                        </div>
                        <ul className='list-group list-group-flush'>
                            {dog.facts.map((fact, i) => (
                                <li key={i} className='list-group-item'>{fact}</li>
                            ))}
                        </ul>
                        <div className='card-body'>
                            <Link to='/dogs' className='btn btn-info'>
                                Go Back
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DogDetails