import { useState } from "react";
import "./App.css";

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
				style={{ backgroundColor: buttonColor }}
				disabled={disabled}
			>
				Change to {newButtonColor}
			</button>
			<input
				type="checkbox"
				id="disable-button-checkbox"
				defaultChecked={disabled}
				aria-checked={disabled}
				onChange={(e) => setDisabled(e.target.checked)}
			/>
		</div>
	);
}

export default App;
