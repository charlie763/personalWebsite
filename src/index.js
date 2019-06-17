import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import headshot from './headshot.png';
import parse from 'html-react-parser';
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
			<div className="bg-water">
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
				<div className="row mt-5 bg-linen rounded" style={{"z-index": "2", "position": "absolute", "right": "2em"}}>
					<div className="col">
						<div className="row">
							{this.menuNavButton('Home')}
						</div>
						<div className="row">
							{this.menuNavButton('My Story')}
						</div>
						<div className="row">
							{this.menuNavButton('Resume')}
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
				<div className="container my-4">
					<div className="row">
						{this.primaryNavButton('')}
						<div className="col-6 d-none d-lg-flex justify-content-end">
							{this.secondaryNavButton('Home')}
							{this.secondaryNavButton('My Story')}
							<a href="https://drive.google.com/file/d/1wl-ElSoI9okXCZ2mS09zBPe-HNd4Bumj/view?usp=sharing">
								<button className="btn bg-water text-linen">Resume</button>
							</a>

						</div>
						<div class="col-6 d-flex d-lg-none justify-content-end">
							{this.menuIcon()}
							{this.openMenu()}
						</div>
					</div>
				</div>
			);
		} else if(activeNav === 'Personal Life'){
			return(
				<div className="container my-4">
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
			<p className="text-white my-3" style={{"font-size": "1.1em"}}>{parse(text)}</p>
			);
	}

class Home extends React.Component{
	render(){
		return(
			<div className="container mt-3">
				<div className="row justify-content-center mt-5">
					<h1 className="text-white">Hi, I'm Charlie</h1>
				</div>
				<div className="row justify-content-center mb-sm-5">
					<h5 className="subtitle text-white">Product Manager + Radical Empathy</h5>
				</div>
				<div className="row justify-content-center py-4">
					<div className="col-sm-4 d-flex justify-content-center">
						<div className="image-wrapper">
							<img className="w-100" src={headshot}></img>
						</div>
					</div>
					<div className="col-sm-6 m-4 pl-5 justify-content-center d-flex flex-column">
						{paragraph('I love to understand what makes people tick and build products that solve real needs.')}
						{paragraph('Once upon a time, I founded and ran my own startup.')}
						{paragraph('Alum of Brown University living in Albuquerque, NM.')} 	 					
					</div>
				</div>
			</div>
			);
		}
}

class MyStory extends React.Component{
	render(){
		return(
			<div className="container mt-3">
				<div className="row justify-content-center mt-5">
					<h1 className="text-white">My Story</h1>
				</div>
				<div className="row d-flex justify-content-center">
					<div className="col-sm-8 m-4 pl-5 justify-content-center d-flex flex-column">
						{paragraph('<span>I never intended to become a tech entrepreneur. I never set out to be a product manager. I started down those paths because I thought I had a great idea. At the time, I was working for the Kettering Foundation. I was passionate about empowering individuals to better influence democracy and our political system. I had been studying the intersection between social network analysis and democracy. I was fascinated by studies that showed people with the highest <a href="https://en.wikipedia.org/wiki/Betweenness_centrality">betweenness centrality</a> in their social networks, for example the Medici’s in Renaissance Italy, often had more power or social capital. My great idea was to help the average individual better navigate their civic and political networks by understanding what those networks look like. I wanted the average individual to be able to have the power of a Medici, to have the power of lobbyists who often spend their career learning to map and navigate these civic and political networks.</span>')}			
						{paragraph('<span>My great idea turned into a startup called CivNet. My idea changed a lot over time, like most startups do. We ended up focusing less on the network visualization piece and more on connecting individuals to issue-based community groups. We wanted to differentiate ourselves by being action-oriented. Civic groups could list “civic actions” like organizing an event, signing a petition, or donating food as ways to get involved and make an impact. CivNet users could filter civic actions and groups by issue and more easily find ways to get involved. This model sort of worked. We got 2000 people to sign up for our local pilot in Albuquerque, NM. We built a data analytics backend (starting with excel spreadsheets) that allowed us to help foundations analyze social impact activity for the purposes of research and investment. This enterprise product garnered us $66K in revenue in just 6 months.</span>')}
						{paragraph('<span>We were off to a good start, but we didn’t have the hockey stick growth that investors want to see. In addition, a lot of investors had become wary of the civic space after big failures like <a href=“https://rr-magazine.com/2019/05/01/sean-parkers-brigade-causes-acquired-by-govtech-app-countable/”>Brigade</a>. We needed some help. About 2 years in, I applied to and got into the Matter Accelerator program in San Francisco. Matter invests $50K in its startups and runs a 5 month bootcamp focused on teaching <a href=“https://www.ideou.com/pages/design-thinking”>Design Thinking</a> and implementing it in your business and product. Finally, we had a structure to help us solve the most pressing problems at CivNet.</span>' )}
						{paragraph('<span>After a few months of product research, we decided to pivot. We needed to simplify our product around one compelling need for a specific user persona. We realized that leaders of the civic groups on CivNet were struggling to engage their group members who expected them to communicate across multiple platforms including email, text, and slack. We built a tool that allowed these group leaders and their group members to communicate across their preferred platforms without ever leaving those platforms. It worked. User engagement rose by 200%. Group members were sending each other messages at twice the rate they had previously. We also found that this pivot expanded our market potential for investors. One of our most active groups was a family. We realized that this type of communication-bridging technology was needed across groups of all kinds from civic, to families, to recreation.<span/>')}
						{paragraph('<span>But our pivot came too late. We had about 3 months of runway left, and it probably would have taken us 3-6 months to raise money. On the personal side, I was struggling with some personal and family issues that made it difficult to be present in the way I needed to be to make CivNet succeed. I had just gotten married. Running a startup and burning the candles at both ends had taken a toll on many of my relationships. In addition, I didn’t want to put myself in financial jeopardy. I decided to close down CivNet. It was one of the most difficult decisions I’ve ever made. But it was the right decision. I realized I needed to take care of myself and the relationships in my life before I could successfully take care of a business.</span>')}
						{paragraph('<span>Since then, I’ve tried to put my personal growth and wellbeing first, or at least equal to, any career endeavors. I began reading as many books as I could to help me understand how to grow as a person. I read Viktor Frankl’s "Man’s Search for Meaning." I read a book on the psychology of trauma called “The Body Keeps the Score.” I started meditating every day. I joined a men’s support group. I keep a list of life lessons I’ve learned next to the mirror on our bureau so that I’m reminded each day of what I’ve gained from focusing on my personal growth. One of the most important ones is “accept what’s going on.”</span>')}
						{paragraph('<span>At the same time I began focusing on my personal growth, I needed to figure out what to do for a career. I wanted to stay in the private sector. I tried to analyze what I had liked and disliked about running CivNet. I liked building things. I liked user research. In particular, I liked trying to understand peoples’ most urgent needs and the creative process of generating and refining product ideas that solved for those needs. I didn’t really like marketing or sales, although I understood it’s value. I liked coding and solving puzzles. What should I do?</span>')}
						{paragraph('<span>I looked at coding bootcamps. I also put out some feelers for product management jobs. I realized that I already had 3 years of product management experience. Although I wore many hats at CivNet, product management was one of my primary roles. It was also one that I liked and excelled at.</span>')}
						{paragraph('<span>Then, one of my advisors from CivNet connected me with Mark Chavez, the former CIO of Salesforce. Mark had grown up in the South Valley, just outside of Albuquerque. He had recently moved back to found a startup, Lens, focused on data privacy. Mark had a big vision. He wanted to overturn companies like Facebook and Google that had profited by controlling, and in many cases abusing, our data. He wanted to put control of data back in the hands of individuals. I was brought on as the third employee and Head of Product. My role was to take Mark’s big vision and help us get to a practical and viable MVP.</span>')}
						{paragraph('<span>My process for getting Lens to an MVP was to create a structure for decision making driving by user and market research. This process was heavily influenced by the Design Thinking methodology I had learned through the Matter accelerator program. My first goal was to identify our target user and their primary need around data privacy. Over the course of 3 months I conducted 100s of interviews with potential users. I talked to experts in various data industries (i.e. finance and healthcare). I designed and conducted market surveys. I designed rough product prototypes with AdobeXD that I tested during interviews. I met regularly with our team to ideate on and refine product ideas.</span>')}
						{paragraph('<span>The MVP we settled on was tool for helping individuals who were fed up with email and phone spam to better control their contact data. The unique technology Lens leveraged (<a href=“https://dat.foundation/”>DAT</a>) allowed individuals to give out subscriptions to their data in the same way you might subscribe to and stream (video) data from Netflix. The idea was you’d give a “lens” of your data that you could later revoke if someone was abusing it. The main problem with implementing this technology is that it required other platforms to integrate with us. Without a large user base there was no incentive to do this. To get around this issue of interoperability, I came up with the idea of building the first decentralized app (Dapp) ourselves. This Dapp was an alias service that generated email and phone aliases that users could share instead of their real contact data. If someone spammed them or abused their data, they could revoke access and their “data subscribers” would never have access to their real email or phone in the first place. This Dapp fulfilled the same need for data ownership and control that our target user had without requiring them to stop using platforms that were already integrated into their life. In early beta testing our users gave our I-phone app an average Net Promoter Score of 9 out of 10.</span>')}
						{paragraph('<span>But Lens ran out of money before we were able to publicly launch. Mark had run the business on the assumption that he was going to able to raise $1-2 million off the bat. When he realized he wasn’t going to be able to do that, he stopped self-funding the company. I found this out about a month before we were going to be out of money. I decided to leave.</span>')}
						{paragraph('<span>So here I am. Over the past 4 years, I’ve learned a lot. I love building products that help people solve real problems in their lives. I want keep building products that do so.</span>')}
					</div>
				</div>
			</div>
			);
		}
}

class Resume extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			lens: 'hidden',
			civnet: 'hidden',
			kettering: 'hidden',
		};
	}

	bullet(text){}

	header(text){

	}

	titleLine(company, title, timeline){}
	subitle(text){}

	render(){
		return(
			<div></div>
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
			case 'My Story':
				return(
					<div>
						<MyStory />
					</div>
				);
		}
	}
}



ReactDOM.render(
        <App />, 
        document.getElementById('root')
      );