import React from 'react';
import JokeForm from './jokeForm'

function Container() {
    return ( 
        <section className="section__content">
          <div className="container">
            <h2 className="title">MSI 2020</h2>
            <h1 className="dreeting">Hey!</h1>
            <h2 className="form__title">Let’s try to find a joke for you:</h2>
            <JokeForm />
            <div id="jokesContainer"></div>
            </div>  
        </section>
     );
}

export default Container;