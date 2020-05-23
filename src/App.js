import React from 'react';
import Routes from './routes';
import PokemonProvider from './context/pokemon'

function App() {
	return (
		<>
			<PokemonProvider>
				<Routes />
			</PokemonProvider>
		</>
	);
}

export default App;
