import React from 'react';
import Routes from './routes';
import PokemonProvider from './context/pokemonContext'

function App() {
	return (

		<PokemonProvider>
			<Routes />
		</PokemonProvider>

	);
}

export default App;
