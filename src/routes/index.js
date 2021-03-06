import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Foods from '../pages/Foods';
import Drinks from '../pages/Drinks';
import ExploreFoods from '../pages/ExploreFoods';
import ExploreDrinks from '../pages/ExploreDrinks';
import ExploreNationality from '../pages/ExploreNationality';
import DoneRecepies from '../pages/DoneRecepies';
import FavoritesRecepies from '../pages/FavoritesRecepies';
import Profile from '../pages/Profile';
import ExploreFoodIngredients from '../pages/ExplodreFoodIngredients';
import ExploreDrinkIngredients from '../pages/ExploreDrinkIngredients';
import Explore from '../pages/Explore';
import DetailsRecepiesFoods from '../pages/DetailsRecepiesFoods';
import DetailsRecepiesDrinks from '../pages/DetailsRecepiesDrinks';
import ProgressDrink from '../pages/ProgressDrinks';
import ProgressFood from '../pages/ProgressFood';
import NotFound from '../pages/NotFound';

function Routes() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={ Login }
      />

      <Route
        exact
        path="/foods"
        component={ Foods }
      />

      <Route
        exact
        path="/drinks"
        component={ Drinks }
      />

      <Route
        exact
        path="/explore"
        component={ Explore }
      />

      <Route
        exact
        path="/explore/foods"
        component={ ExploreFoods }
      />

      <Route
        exact
        path="/explore/drinks"
        component={ ExploreDrinks }
      />
      <Route
        exact
        path="/explore/foods/nationalities"
        component={ ExploreNationality }
      />

      <Route
        exact
        path="/explore/foods/ingredients"
        component={ ExploreFoodIngredients }
      />

      <Route
        exact
        path="/explore/drinks/ingredients"
        component={ ExploreDrinkIngredients }
      />

      <Route
        exact
        path="/done-recipes"
        component={ DoneRecepies }
      />

      <Route
        exact
        path="/favorite-recipes"
        component={ FavoritesRecepies }
      />

      <Route
        exact
        path="/profile"
        component={ Profile }
      />

      <Route
        exact
        path="/foods/:id"
        component={ DetailsRecepiesFoods }
      />

      <Route
        exact
        path="/drinks/:id"
        component={ DetailsRecepiesDrinks }
      />

      <Route
        exact
        path="/drinks/:id/in-progress"
        component={ ProgressDrink }
      />

      <Route
        exact
        path="/foods/:id/in-progress"
        component={ ProgressFood }
      />

      <Route
        path="*"
        component={ NotFound }
      />
    </Switch>
  );
}

export default Routes;
