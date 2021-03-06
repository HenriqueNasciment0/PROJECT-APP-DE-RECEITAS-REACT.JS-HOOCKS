/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FoodCards from '../components/FoodCards';
import { actionSaveRecipe, actionSearchIngredient } from '../Redux/actions';
import { getFoods, getByIngridientFoods } from '../services';
import FoodCategories from '../components/FoodCategories';
import '../styles/Foods.css';

function Foods() {
  const [recipes, setRecipes] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    foods,
    ingredient,
    searchByIngredient } = useSelector(({ saveFoods }) => saveFoods);
  const ERRO_MENSAGER = 'Sorry, we haven\'t found any recipes for these filters.';

  useEffect(() => {
    const fetchRecipes = async () => {
      const MAX_LENGTH = 12;
      const { meals } = await getFoods();
      let mealsByIngredients = [];
      if (searchByIngredient) {
        mealsByIngredients = await getByIngridientFoods(ingredient);
        setRecipes(mealsByIngredients.slice(0, MAX_LENGTH));
        dispatch(actionSearchIngredient(false));
      } else {
        setRecipes(meals.slice(0, MAX_LENGTH));
      }
      dispatch(actionSaveRecipe(meals.slice(0, MAX_LENGTH)));
    };
    fetchRecipes();
  }, []);

  const redirectToDetails = () => {
    const MAX_LENGTH = 12;
    if (foods?.length === 1) {
      history.push(`/foods/${foods[0].idMeal}`);
    } else if (foods?.length > 1 && foods?.length < MAX_LENGTH) {
      return <FoodCards foods={ foods } />;
    } else if (foods?.length > MAX_LENGTH) {
      return <FoodCards foods={ foods.slice(0, MAX_LENGTH) } />;
    } else {
      global.alert(ERRO_MENSAGER);
    }
  };

  const renderRecipes = () => (
    <div
      className="div-foods"
    >
      {
        recipes.map(({ idMeal, strMeal, strMealThumb }, index) => (
          <div
            onClick={ () => history.push(`/foods/${idMeal}`) }
            aria-hidden="true"
            key={ idMeal }
            data-testid={ `${index}-recipe-card` }
            className="renderRecipes"
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ strMealThumb }
              alt={ strMeal }
              className="food-img"
            />
            <p
              data-testid={ `${index}-card-name` }
              className="recepie-name"
            >
              {strMeal}
            </p>
          </div>))
      }
    </div>
  );

  return (
    <div>
      <Header
        text="Foods"
      />
      <FoodCategories sendRecipe={ setRecipes } />
      {
        foods?.length !== 0 ? redirectToDetails() : renderRecipes()
      }
      <Footer />
    </div>
  );
}

export default Foods;
