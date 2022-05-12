import { useState } from "react";
import "./App.css";

export function replaceCamelWithSpaces(colorName) {
	return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
	const [buttonColor, setButtonColor] = useState("red");
	const [disabled, setDisabled] = useState(false);

	const newButtonColor = buttonColor === "red" ? "blue" : "red";

	const changeButtonColor = () => {
		setButtonColor(newButtonColor);
	};

	return (
		<div
			style={{
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<button
				onClick={changeButtonColor}
				style={{ backgroundColor: disabled ? "gray" : buttonColor }}
				disabled={disabled}
			>
				Change to {newButtonColor}
			</button>
			<form>
				<input
					type="checkbox"
					id="disable-button-checkbox"
					defaultChecked={disabled}
					aria-checked={disabled}
					onChange={(e) => setDisabled(e.target.checked)}
				/>
				<label htmlFor="disable-button-checkbox">Disable button</label>
			</form>
		</div>
	);
}

export default App;
