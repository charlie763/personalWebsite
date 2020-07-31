import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import headshot from './headshot.png';
import parse from 'html-react-parser';
import Portfolio from './Portfolio.js';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.min.js';

document.body.classList.add('bg-water');

class App extends React.Component{

	render(){
		return(
			<div className="page">
				<Page />
			</div>
		);
	}

}

class Page extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			activeBody: 'Home',
			activeNav: 'Professional Life',
		};
	}

	changeBody = (body) => {
		this.setState({activeBody: body})
	};

	changeNav = (nav) => {
		this.setState({activeNav: nav})
	};

	render(){
		return(
			<div className="bg-water" style={{marginRight:40}}>
				<NavBar handleBodyChange={this.changeBody} 
						handleNavChange={this.changeNav}
						activeNav={this.state.activeNav}
				/>
				<Body activeBody={this.state.activeBody} />
			</div>
		);
	}
}

class NavBar extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			menuOpen: false,
		};
	}

	primaryNavButton(navTo){
		return(
			<div className="col-6 justify-content-start">
				<button className="btn bg-water text-white"> 
						
				</button>
			</div>
		);
	}

	secondaryNavButton(navTo){
		return(
			<button 
				className="btn bg-water text-linen"
				onClick={()=> this.props.handleBodyChange(navTo)}>
				{navTo}
			</button>
			);
	}

	menuNavButton(navTo){
		return(
			<button 
				className="btn bg-linen text-ice"
				onClick={()=> this.props.handleBodyChange(navTo)}>{navTo}
			</button>
			);
	}

	menuIcon(){
		return(
			<div onClick={()=> this.setState({menuOpen: !this.state.menuOpen})} style={{ "cursor": "pointer"}}>
				<div className="bg-linen my-2" style={{"height": ".25em", "width": "2em"}}></div>
				<div className="bg-linen my-2" style={{"height": ".25em", "width": "2em"}}></div>
				<div className="bg-linen my-2" style={{"height": ".25em", "width": "2em"}}></div>
			</div>
			);
	}

	openMenu(){
		if (this.state.menuOpen === true){
			return(
				<div className="row mt-5 bg-linen rounded" style={{"zIndex": "2", "position": "absolute", "right": "2em"}}>
					<div className="col">
						<div className="row">
							{this.menuNavButton('Home')}
						</div>
						<div className="row">
							{this.menuNavButton('Portfolio')}
						</div>
						<div className="row">
						<a target="_blank" rel="noopener noreferrer" href="https://medium.com/@cwisoff">
								<button className="btn bg-linen text-ice">Blog</button>
							</a>
						</div>
						<div className="row">
							<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/charles-wisoff-aa94a729/">
								<button className="btn bg-linen text-ice">Linkedin</button>
							</a>
						</div>
					</div>
				</div>
				);
		} 
	}

	render(){
		let activeNav = this.props.activeNav
		if(activeNav === 'Professional Life'){
			return(
				<div className="container-fluid m-4">
					<div className="row">
						{this.primaryNavButton('')}
						<div className="col-6 d-none d-lg-flex justify-content-end">
							{this.secondaryNavButton('Home')}
							{this.secondaryNavButton('Portfolio')}
							<a target="_blank" rel="noopener noreferrer" href="https://medium.com/@cwisoff">
								<button className="btn bg-water text-linen">Blog</button>
							</a>
							<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/charles-wisoff-aa94a729/">
								<button className="btn bg-water text-linen">Linkedin</button>
							</a>

						</div>
						<div className="col-6 d-flex d-lg-none justify-content-end">
							{this.menuIcon()}
							{this.openMenu()}
						</div>
					</div>
				</div>
			);
		} else if(activeNav === 'Personal Life'){
			return(
				<div className="container-fluid m-4">
					<div className="row">
						{this.primaryNavButton('Professional Life')}
						{this.secondaryNavButton('Home')}
						{this.secondaryNavButton('Family')}
						{this.secondaryNavButton('Music')}
						{this.secondaryNavButton('Origami')}
					</div>
				</div>
			);	
		}
	}
}

function paragraph(text){
		return(
			<p className="text-white my-4 my-md-3" style={{"fontSize": "1.1em"}}>{parse(text)}</p>
			);
	}

class Home extends React.Component{
	render(){
		return(
			<div className="container-fluid mt-3">
				<div className="row justify-content-center mt-5">
					<h1 className="title text-white">Hi, I'm Charlie</h1>
				</div>
				<div className="row justify-content-center mb-sm-5">
					<h5 className="subtitle text-white">Software Engineer - Creator and Learner </h5>
				</div>
				<div className="row justify-content-center py-4">
					<div className="col-9 col-md-4 d-flex justify-content-center">
						<div className="image-wrapper">
							<img className="w-100" src={headshot}></img>
						</div>
					</div>
					<div className="col-9 col-md-6 my-5 my-md-0 pl-5 justify-content-center d-flex flex-column">
						{paragraph("I love to continually learn new things.")}
						{paragraph("I'm passionate about building things that add value to others' lives.")}
						{paragraph('Once upon a time, I founded and ran my own startup.')}
						{paragraph('Alum of Brown University living in Albuquerque, NM.')} 	 					
					</div>
				</div>
			</div>
			);
		}
}

class Body extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		switch(this.props.activeBody) {
			case 'Home':
				return(
					<div>
						<Home />
					</div>
				);
			case 'Portfolio':
				return(
					<div>
						<Portfolio />
					</div>
				);
		}
	}
}



ReactDOM.render(
        <App />, 
        document.getElementById('root')
      );