import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../styles/CardDetails.css';
import '../styles/Carousel.css';

function CardRecommendedRecipe() {
  const { drinkRecomend } = useSelector(({ searchDrinks }) => searchDrinks);
  const [recomends, setRecomends] = useState([]);
  useEffect(() => {
    const MAX_LENGTH = 6;
    const recomend = drinkRecomend.slice(0, MAX_LENGTH);
    setRecomends(recomend);
  }, []);

  return (
    <>
      <p>Recommended</p>
      <div className="container-recomend-recipe">
        {
          recomends && recomends.map((recomend, index) => (
            <div
              data-testid={ `${index}-recomendation-card` }
              key={ recomend.idDrink }
              id={ index }
              className="card-recomend-recipe"
            >
              <img
                src={ recomend.strDrinkThumb }
                alt={ recomend.strDrink }
              />
              <p>Dessert</p>
              <p>title</p>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default CardRecommendedRecipe;
