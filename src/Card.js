import React from 'react';


// var Demodata = [
//     { img :'https://pics.filmaffinity.com/Dark_TV_Series-111203947-large.jpg', title : 'dark',link:'https://www.netflix.com/in/title/80100172'},
//     { img :'https://pics.filmaffinity.com/Dark_TV_Series-111203947-large.jpg', title : 'dark',link:'https://www.netflix.com/in/title/80100172'},
//     { img :'https://pics.filmaffinity.com/Dark_TV_Series-111203947-large.jpg', title : 'dark',link:'https://www.netflix.com/in/title/80100172'},
// ]

function Card(props) {
    return (
        <>
            <div className="cards">
                <div className="padding">
                    <div className="card">
                        <div className="heading">
                            <figure>
                                <img src={props.img} alt={props.title} />
                            </figure>
                            <div className="cardContent">
                                <h4> {props.title} </h4>
                                <p className="AboutPokemon"> {props.about}</p>
                                <a href={props.link} target="_blank" rel="noopener noreferrer">
                                    <button type="button" class="btn btn-outline-success">I Choose you..</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card

