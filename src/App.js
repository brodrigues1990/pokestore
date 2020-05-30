import React from 'react';
import Routes from './routes';
import PokeFilterProvider from './context/pokeFilterContext'
import PokemonProvider from './context/pokemonContext'
import CartProvider from './context/cartContext'

function App() {
	return (
		<>
			<PokeFilterProvider>
				<PokemonProvider>
					<CartProvider>
						<Routes />
					</CartProvider>
				</PokemonProvider>
			</PokeFilterProvider>
		</>
	);
}

export default App;
