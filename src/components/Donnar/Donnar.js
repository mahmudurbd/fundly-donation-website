import React from 'react';
import './Donnar.css';
const Donnar = (props) => {
    console.log(props);
    const { name, donation, id, job, country, picture } = props.donnar;
    return (
        <div class="col">
            <div class="card h-100">
                <img src={picture} class="card-img-top" alt="" />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p>Donation: <span>{donation}</span></p>
                    <p>ID Number: <span>{id}</span></p>
                    <p>Job: <span>{job}</span></p>
                    <p>Country: <span>{country}</span></p>
                    <button onClick={() => props.handleDonateToCart(props.donnar)} class="btn btn-info"><span class="text-white">Donate Now</span></button>
                </div>
            </div>
        </div>
    );
};

export default Donnar;