import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PokemonInfo from './PokemonInfo';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Pokedex {...props} pokemons={pokemons} />}
          />
          <Route
            path="/pokemons/:pokemonName"
            render={(props) => <PokemonInfo {...props} pokemons={pokemons} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
