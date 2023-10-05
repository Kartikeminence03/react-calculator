import React, { useState } from 'react'

const Calculator = () => {

	const [calculator, setCalculator,] = useState("");
	const [result, setResult] = useState("")

	const ops = ['/', '*', '-', '+', '.'];
    const createDigits = () => {
		const digits = [];

		for (let i = 1; i < 10; i++) {
			digits.push(<button onClick={()=> calculatorData(i.toString())} key={i}>{i}</button>);
		}
		
		return digits;
	}


	const calculatorData= (value) => {
		if (
			ops.includes(value) && calculator === '' || 
			ops.includes(value) && ops.includes(calculator.slice(-1))
		) {
			
			return;
		}
		
		setCalculator(calculator + value);

		// console.log(eval(calculator + value).toString())

		if (!ops.includes(value)) {
			setResult(eval(calculator + value).toString());
		}
	}

	const deleteLast = () => {
		if (calculator == '') {

		}
		const value = calculator.slice(0, -1);

		
		setCalculator(value);
		setResult(eval(value).toString());
		
	}

	const calculateAns = () => {
		let findOper=calculator[calculator.length-1];
		 console.log(findOper,calculator);
		if(findOper != '+' && findOper !='-'  && findOper !='*'  && findOper !='/'  && findOper !='%' ){
			setCalculator(eval(calculator).toString());
		}
		
	}

	//console.log(calculator.length)

	
	return (
		<div className="App">
			<div className="calculator">
				<div className="display">
					<span>{result ? '(' + result + ')' : ''}</span> {calculator||0}
				</div>

				<div className="operators">
					<button onClick={()=>calculatorData("/")}>/</button>
					<button onClick={()=>calculatorData("*")}>x</button>
					<button onClick={()=>calculatorData("-")}>-</button>
					<button onClick={()=>calculatorData("+")}>+</button>

					<button onClick={deleteLast}>DEL</button>
				</div>

				<div className="digits">
					{createDigits()}
					<button onClick={()=>calculatorData("0")}>0</button>
					<button onClick={()=>calculatorData(".")}>.</button>
					{/* <button onClick={()=>calculateAns}>=</button> */}
					<button onClick={calculateAns}>=</button>
				</div>
			</div>
		</div>
	);
}

export default Calculator