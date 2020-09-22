(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/github_project_screenshot.787e278b.png"},13:function(e,t,a){e.exports=a.p+"static/media/cli_screenshot.9247aaec.png"},14:function(e,t,a){e.exports=a(32)},20:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2),i=a(5),o=a(3),s=a(6),c=a(0),l=a.n(c),m=a(11),u=a.n(m),d=(a(19),a(20),a(4)),h=a.n(d),p=a(12),f=a.n(p),b=a(13),g=a.n(b);var v={javascript:"#89D7BE",ruby:"#D7A489",rails:"#95D789",react:"#89D7BE",sinatra:"#89D7BE"};function y(e){return l.a.createElement("div",{className:"row justify-content-center my-3"},l.a.createElement("div",{className:"col-11 col-md-6"},l.a.createElement("dl",null,l.a.createElement("dt",{className:"display-title primary-text"},h()(e.title),e.tags.map(function(e){return l.a.createElement("span",{className:"badge badge-pill",style:{backgroundColor:v[e]}},e)}),l.a.createElement("span",{className:"secondary-text title-subtitle ml-3"},"Created: ",h()(e.created))),l.a.createElement("dd",{className:"display-subtitle secondary-text font-italic"},h()(e.description)),l.a.createElement("dd",{className:"display-subtitle secondary-text"},l.a.createElement("a",{className:"secondary-text",href:e.github_url},"Github Repo"),function(e){if(e)return l.a.createElement("span",null,"    ",h()("&#9679"),"    ",l.a.createElement("a",{class:"secondary-text",href:e},"Blog Post"))}(e.blog_url),function(e){if(e)return l.a.createElement("span",null,"    ",h()("&#9679"),"    ",l.a.createElement("a",{class:"secondary-text",href:e},"Live App"))}(e.app_url)))),l.a.createElement("div",{className:"col-9 col-md-6"},l.a.createElement("div",{className:"image-wrapper mx-4"},l.a.createElement("img",{className:"w-100",src:e.screenshot}))))}var w=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid mt-3 mr-md-n5 pl-md-4"},l.a.createElement("div",{id:"portfolio-display"},l.a.createElement("div",{className:"row justify-content-between py-3"},l.a.createElement("div",{className:"col-auto"},l.a.createElement("h2",{id:"portfolio-title",class:"primary-text"},"Portfolio"))),y({title:"Tetris",created:"September, 2020",description:"This is a portfolio project for the Flatiron Software Engineering program. I built the classic game tetris with a vanilla JS frontend and a Rails API backend. The backend stores users and games allowing you to save and load your last game as well as view high scores. I took this project as an opportunity to solidify my skills with DOM manipulation, event handling and asynchronous functions.",blog_url:"https://medium.com/@cwisoff/trying-test-driven-development-for-the-first-time-with-rspec-and-capybara-1cde61789f2a",github_url:"https://github.com/charlie763/tetris",screenshot:"https://drive.google.com/uc?id=1_Atu_XIBtnqKQiWYQsWo2I4CjmFMG5ip",app_url:"https://charlie763.github.io/tetris/frontend/",tags:["javascript","rails"]}),y({title:"Code Notes",created:"August, 2020",description:"Code Notes is my Rails portfolio project for the Flatiron coding bootcamp. It is an application for taking, organizing, and searching for notes about software development. In this project, I tried Test Driven Development for the first time, and I built more complex object model relationships.",blog_url:"https://medium.com/@cwisoff/trying-test-driven-development-for-the-first-time-with-rspec-and-capybara-1cde61789f2a",github_url:"https://github.com/charlie763/code-notes",screenshot:"https://i.postimg.cc/cCBRMpqg/screenshot-homepage.png",app_url:"notes-on-code.herokuapp.com/",tags:["ruby","rails"]}),y({title:"Github Portfolio CMS",created:"July, 2020",description:"This was my second portfolio project for the Flatiron software engineering program. It's meant to demonstrate my competence with the Sinatra web framework. I built a CMS for managing which github repos you want to include in your portfolio and autogenerating HTML/CSS for those repos that you can put on a personal website.",blog_url:"https://medium.com/@cwisoff/sinatra-portfolio-project-the-art-of-debugging-eba911b05e16",github_url:"https://github.com/charlie763/github-portfolio-cms",screenshot:f.a,app_url:"https://infinite-cove-25560.herokuapp.com/",tags:["ruby","sinatra"]}),y({title:"News Search CLI",created:"June, 2020",description:"This was my first Flatiron Portfolio Project. It demonstrates my competency in Ruby, Object-Oriented Programming, APIs and web scraping. The app allows users to search news articles by topic and return snippets from returned articles based on additional keyword search. The intention is make it easy for someone to find relevant news related to a topic of interest. It integrates with the Guardian API, scrapes from Guardian article pages, and is meant as a proof-of-concept to be extended to additional news APIs.",blog_url:"https://medium.com/@cwisoff/news-search-cli-data-gem-portfolio-project-3c41683cd635",github_url:"https://github.com/charlie763/news_search_cli",screenshot:g.a,tags:["ruby"]})))}}]),t}(l.a.Component);document.body.classList.add("bg-water");var E=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"page"},l.a.createElement(N,null))}}]),t}(l.a.Component),N=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).changeBody=function(e){a.setState({activeBody:e})},a.changeNav=function(e){a.setState({activeNav:e})},a.state={activeBody:"Home",activeNav:"Professional Life"},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"bg-water"},l.a.createElement(j,{handleBodyChange:this.changeBody,handleNavChange:this.changeNav,activeNav:this.state.activeNav}),l.a.createElement(B,{activeBody:this.state.activeBody}))}}]),t}(l.a.Component),j=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={menuOpen:!1},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"primaryNavButton",value:function(e){return l.a.createElement("div",{className:"col-6 justify-content-start"},l.a.createElement("button",{className:"btn bg-water text-white"}))}},{key:"secondaryNavButton",value:function(e){var t=this;return l.a.createElement("button",{className:"btn bg-water text-linen",onClick:function(){return t.props.handleBodyChange(e)}},e)}},{key:"menuNavButton",value:function(e){var t=this;return l.a.createElement("button",{className:"btn bg-linen text-ice",onClick:function(){return t.props.handleBodyChange(e)}},e)}},{key:"menuIcon",value:function(){var e=this;return l.a.createElement("div",{onClick:function(){return e.setState({menuOpen:!e.state.menuOpen})},style:{cursor:"pointer"}},l.a.createElement("div",{className:"bg-linen my-2",style:{height:".25em",width:"2em"}}),l.a.createElement("div",{className:"bg-linen my-2",style:{height:".25em",width:"2em"}}),l.a.createElement("div",{className:"bg-linen my-2",style:{height:".25em",width:"2em"}}))}},{key:"openMenu",value:function(){if(!0===this.state.menuOpen)return l.a.createElement("div",{className:"row mt-5 bg-linen rounded",style:{zIndex:"2",position:"absolute",right:"2em"}},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"row"},this.menuNavButton("Home")),l.a.createElement("div",{className:"row"},this.menuNavButton("Portfolio")),l.a.createElement("div",{className:"row"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://medium.com/@cwisoff"},l.a.createElement("button",{className:"btn bg-linen text-ice"},"Blog"))),l.a.createElement("div",{className:"row"},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/charles-wisoff-aa94a729/"},l.a.createElement("button",{className:"btn bg-linen text-ice"},"Linkedin")))))}},{key:"render",value:function(){var e=this.props.activeNav;return"Professional Life"===e?l.a.createElement("div",{className:"container-fluid m-4"},l.a.createElement("div",{className:"row"},this.primaryNavButton(""),l.a.createElement("div",{className:"col-6 d-none d-lg-flex justify-content-end px-5"},this.secondaryNavButton("Home"),this.secondaryNavButton("Portfolio"),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://medium.com/@cwisoff"},l.a.createElement("button",{className:"btn bg-water text-linen"},"Blog")),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/charles-wisoff-aa94a729/"},l.a.createElement("button",{className:"btn bg-water text-linen"},"Linkedin"))),l.a.createElement("div",{className:"col-6 d-flex d-lg-none justify-content-end px-5"},this.menuIcon(),this.openMenu()))):"Personal Life"===e?l.a.createElement("div",{className:"container-fluid m-4"},l.a.createElement("div",{className:"row"},this.primaryNavButton("Professional Life"),this.secondaryNavButton("Home"),this.secondaryNavButton("Family"),this.secondaryNavButton("Music"),this.secondaryNavButton("Origami"))):void 0}}]),t}(l.a.Component);function O(e){return l.a.createElement("p",{className:"text-white my-4 my-md-3",style:{fontSize:"1.1em"}},h()(e))}var k=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid mt-3"},l.a.createElement("div",{className:"row justify-content-center mt-5"},l.a.createElement("h1",{className:"title text-white"},"Hi, I'm Charlie")),l.a.createElement("div",{className:"row justify-content-center mb-sm-5"},l.a.createElement("h5",{className:"subtitle text-white"},"Software Engineer - Creator and Learner ")),l.a.createElement("div",{className:"row justify-content-center py-4"},l.a.createElement("div",{className:"col-9 col-md-4 d-flex justify-content-center"},l.a.createElement("div",{className:"image-wrapper"},l.a.createElement("img",{className:"w-100",src:"https://i.postimg.cc/y8B5KK65/headshot.png"}))),l.a.createElement("div",{className:"col-11 col-md-6 my-5 my-md-0 pl-5 justify-content-center d-flex flex-column"},O("I love to continually learn new things."),O("I'm passionate about building things that add value to others' lives."),O("Once upon a time, I founded and ran my own startup."),O("Alum of Brown University living in Albuquerque, NM."))))}}]),t}(l.a.Component),B=function(e){function t(e){return Object(n.a)(this,t),Object(i.a)(this,Object(o.a)(t).call(this,e))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){switch(this.props.activeBody){case"Home":return l.a.createElement("div",null,l.a.createElement(k,null));case"Portfolio":return l.a.createElement(w,null)}}}]),t}(l.a.Component);u.a.render(l.a.createElement(E,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.bdc8ba73.chunk.js.map