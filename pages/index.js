import React from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import HelloSacc from './HelloSacc'
class App extends React.Component{
	
	render(){
		return (
			<div>
				<Head>
					<title>SACC-CLI</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				</Head>
				<HelloSacc />
			</div>
		);
	}
}
const mapStateToProps = (state) =>{
	return {
		
	}
}
const mapDispatchToProps = (dispatch) => {
	return {

	}
}
export default connect(mapStateToProps,mapDispatchToProps)(App);