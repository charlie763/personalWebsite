import React from 'react';
import parse from 'html-react-parser';
import github_screenshot from './github_project_screenshot.png';
import cli_screenshot from './cli_screenshot.png';

function render_blog(blog_url){
  if (blog_url){
    return(
    <span>    {parse("&#9679")}    <a class="secondary-text" href={blog_url}>Blog Post</a></span>
    );
  }
}

function renderAppLink(app_url){
  if (app_url){
    return(
    <span>    {parse("&#9679")}    <a class="secondary-text" href={app_url}>Live App</a></span>
    );
  }
}

const tagColorMap = {
  javascript: "#89D7BE",
  ruby: "#D7A489",
  rails: "#95D789",
  react: "#89D7BE",
  sinatra: "#89D7BE"
}

function renderTags(tagArray){
  return(tagArray.map(tag => 
        <span className="badge badge-pill" style={{backgroundColor: tagColorMap[tag]}}>{tag}</span>
      )
    );
}


function repo_block(repo_hash){
  return(
    <div className="row justify-content-center my-3">
      <div className="col-11 col-md-6">
        <dl>
          <dt className="display-title primary-text">{parse(repo_hash.title)}
            {renderTags(repo_hash.tags)}
            <span className="secondary-text title-subtitle ml-3">Created: {parse(repo_hash.created)}</span>
          </dt>
          <dd className="display-subtitle secondary-text font-italic">{parse(repo_hash.description)}</dd>
          <dd className="display-subtitle secondary-text">
            <a className="secondary-text" href={repo_hash.github_url}>Github Repo</a>
            {render_blog(repo_hash.blog_url)} 
            {renderAppLink(repo_hash.app_url)} 
          </dd>
        </dl>
      </div>
      
      <div className="col-9 col-md-6">
        <div className="image-wrapper mx-4">
          <img className="w-100" src={repo_hash["screenshot"]}></img>
        </div>
      </div>
    </div>
  );
}

class Portfolio extends React.Component{

	render(){

		return(
			<div className="container-fluid mt-3 mr-md-n5 pl-md-4">
        <div id="portfolio-display">
           <div className="row justify-content-between py-3">
              <div className="col-auto">
                <h2 id="portfolio-title" class="primary-text">Portfolio</h2>
              </div>
            </div>
    
      {repo_block({title: "Tetris",
      created: "September, 2020",
      description: "This is a portfolio project for the Flatiron Software Engineering program. I built the classic game tetris with a vanilla JS frontend and a Rails API backend. The backend stores users and games allowing you to save and load your last game as well as view high scores. I took this project as an opportunity to solidify my skills with DOM manipulation, event handling and asynchronous functions.",
      blog_url: "https://medium.com/@cwisoff/trying-test-driven-development-for-the-first-time-with-rspec-and-capybara-1cde61789f2a",
      github_url: "https://github.com/charlie763/tetris",
      screenshot: "https://drive.google.com/uc?id=1_Atu_XIBtnqKQiWYQsWo2I4CjmFMG5ip",
      app_url: "https://charlie763.github.io/tetris/frontend/",
      tags: ["javascript", "rails"]
      })
    }

    {repo_block({title: "Code Notes",
      created: "August, 2020",
      description: "Code Notes is my Rails portfolio project for the Flatiron coding bootcamp. It is an application for taking, organizing, and searching for notes about software development. In this project, I tried Test Driven Development for the first time, and I built more complex object model relationships.",
      blog_url: "https://medium.com/@cwisoff/trying-test-driven-development-for-the-first-time-with-rspec-and-capybara-1cde61789f2a",
      github_url: "https://github.com/charlie763/code-notes",
      screenshot: "https://i.postimg.cc/cCBRMpqg/screenshot-homepage.png",
      app_url: "https://notes-on-code.herokuapp.com/",
      tags: ["ruby", "rails"]
      })
    }
    
    {repo_block({title: "Github Portfolio CMS",
      created: "July, 2020",
      description: "This was my second portfolio project for the Flatiron software engineering program. It's meant to demonstrate my competence with the Sinatra web framework. I built a CMS for managing which github repos you want to include in your portfolio and autogenerating HTML/CSS for those repos that you can put on a personal website.",
      blog_url: "https://medium.com/@cwisoff/sinatra-portfolio-project-the-art-of-debugging-eba911b05e16",
      github_url: "https://github.com/charlie763/github-portfolio-cms",
      screenshot: github_screenshot,
      app_url: "https://infinite-cove-25560.herokuapp.com/",
      tags: ["ruby", "sinatra"]
      })
    }

    {repo_block({title: "News Search CLI",
      created: "June, 2020",
      description: "This was my first Flatiron Portfolio Project. It demonstrates my competency in Ruby, Object-Oriented Programming, APIs and web scraping. The app allows users to search news articles by topic and return snippets from returned articles based on additional keyword search. The intention is make it easy for someone to find relevant news related to a topic of interest. It integrates with the Guardian API, scrapes from Guardian article pages, and is meant as a proof-of-concept to be extended to additional news APIs.",
      blog_url: "https://medium.com/@cwisoff/news-search-cli-data-gem-portfolio-project-3c41683cd635",
      github_url: "https://github.com/charlie763/news_search_cli",
      screenshot: cli_screenshot,
      tags: ["ruby"]
      })
    }

    {/* {repo_block({title: "Personal Website",
      created: "May, 2019",
      description: "If you're on my portfolio, this is the code for the personal website you're visiting. I began building this website in between product management jobs. At the time, I used it as an opportunity to learn React and brush up on my Bootstrap skills. For example, the navbar uses React's notion of state to maintain the active nav state.",
      github_url: "https://github.com/charlie763/personalWebsite",
      tags: ["javascript", "rails"]
      })
    }

    {repo_block({title: "Checkers",
      created: "March, 2019",
      description: "In between jobs, I took the opportunity to teach myself Ruby and get better at object-oriented programming. Years before, I had taught myself to code in Python. I thought it would be useful to learn a different language. The application implements a basic 2-player checkers games using the Ruby 2D gem for visualization.",
      github_url: "https://github.com/charlie763/checkers",
      tags: ["javascript", "rails"]
      })
    } */}
  
      </div>
    </div>

			);
		}
}

export default Portfolio