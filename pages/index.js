import Fetch from "isomorphic-unfetch";
import Layout from "../components/layout";
import Prices from "../components/Prices";

const index = (props) => (
	<Layout>
		<div>
			<h1>Welcome to Bit Price</h1>
			<p>Check current Bitcoin rate</p>
			<Prices bpi={props.bpi} />
		</div>
	</Layout>
);

index.getInitialProps = async function () {
	const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
	const data = await res.json();
	return {
		bpi: data.bpi,
	};
};
export default index;
