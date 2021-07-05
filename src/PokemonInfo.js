import React from 'react';
import './pokemon.css';

class PokemonInfo extends React.Component {
  render() {
    const { pokemons, match: { params: {pokemonName} } } = this.props
    const pokemon = pokemons.find((pokemon) => pokemon.name === pokemonName)
    const {name, type, averageWeight, image, moreInfo} = pokemon;
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
          <p>{moreInfo}</p>
        </div>
        <img src={image} alt={`${name} sprite`} />
      </div>
    );
  }
}

export default PokemonInfo;