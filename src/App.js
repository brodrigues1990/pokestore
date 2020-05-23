import React from 'react';
import Routes from './routes';
import PokemonProvider from './context/pokemonContext'
import CartProvider from './context/cartContext'

function App() {
	return (
		<>
			<PokemonProvider>
				<CartProvider>
					<Routes />
				</CartProvider>
			</PokemonProvider>
		</>
	);
}

export default App;
