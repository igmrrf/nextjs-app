import { useState } from "react";

const Prices = (props) => {
	const [currency, setCurrency] = useState("USD");
	const list = (
		<li className="list-group-item">
			Bitcoin rate for {props.bpi[currency].description} :{" "}
			<span className="badge badge-primary">{props.bpi[currency].code} </span>
			<strong>{props.bpi[currency].rate}</strong>
		</li>
	);
	return (
		<div>
			<ul className="list-group">{list}</ul>
			<br />
			<select
				type="select"
				onChange={(e) => {
					setCurrency(e.target.value);
				}}
				className="form-control"
			>
				<option value="USD">USD</option>
				<option value="GBP">GBP</option>
				<option value="EUR">EUR</option>
			</select>
		</div>
	);
};
export default Prices;
//66 lines
