import React from "react";
import JokeCategories from "./jokeCategories";

function JokeForm() {
  return (
    <>
      <form id="jokeForm" class="form">
        <label>
          <input
            className="input__categories"
            type="radio"
            name="jokeFormType"
            value="random"
            checked
          />
          Random
        </label>
        <label>
          <input
            className="input__categories"
            type="radio"
            name="jokeFormType"
            value="categories"
          />
          From caterogies
          <JokeCategories />
        </label>
        
        <form>
          <input
            type="text"
            name="jokeFormType"
            id="jokeFormSearch"
            value="Free text search..."
            onfocus="if(this.value==this.defaultValue)this.value='';"
            onblur="if(this.value=='')this.value=this.defaultValue;"
          />
          <input
            type="radio"
            name="jokeFormType"
            id="radio"
            value="search"
            hidden
          />
          <button className="button">Get a joke</button>
        </form>
      </form>
      
    </>
  );
}

export default JokeForm;
