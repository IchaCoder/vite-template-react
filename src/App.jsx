import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./output.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<p className="bg-blue-400 text-center text-6xl">Hello world</p>
		</div>
	);
}

export default App;
