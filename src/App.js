import { useState } from "react";
import "./App.css";

function App() {
	const [buttonColor, setButtonColor] = useState("red");

	const newButtonColor = buttonColor === "red" ? "blue" : "red";

	const changeButtonColor = () => {
		setButtonColor(newButtonColor);
	};

	return (
		<div>
			<button
				onClick={changeButtonColor}
				style={{ backgroundColor: buttonColor }}
			>
				Change to {newButtonColor}
			</button>
		</div>
	);
}

export default App;
