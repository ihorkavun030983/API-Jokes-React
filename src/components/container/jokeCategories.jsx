import {kategoriesItem} from '../../services/services'

export default function CategoriesList () {

    return (
      <ul>
        {kategoriesItem.map((category, index) => (
          <button><li key={index}>{category}</li></button>
        ))}
      </ul>
    );
  };