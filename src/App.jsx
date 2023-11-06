import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./output.css";
import { Box } from "@chakra-ui/react";

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
			<Box fontSize={"xl"}>Hello world</Box>
		</div>
	);
}

export default App;
