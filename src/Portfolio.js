import React from 'react';
import parse from 'html-react-parser';
import github_screenshot from './github_project_screenshot.png';
import cli_screenshot from './cli_screenshot.png';

function render_blog(blog_url){
  if (blog_url){
    return(
    <dd class="display-subtitle"><a class="secondary-text" href={blog_url}>Blog Post</a></dd>
    );
  }
}

function repo_block(repo_hash){
  return(
    <div className="row justify-content-center">
      <div className="col-9 col-md-6">
        <dl>
          <dt class="display-title primary-text">{parse(repo_hash["title"])}
            <span class="secondary-text title-subtitle ml-3">Last Updated: {parse(repo_hash["updated_at"])}</span>
          </dt>
            <dd class="display-subtitle secondary-text font-italic">{parse(repo_hash["description"])}</dd>
            {render_blog(repo_hash["blog_url"])}
            <dd class="display-subtitle"><a class="secondary-text" href={repo_hash["github_url"]}>Github Repo</a></dd>
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
           <div class="row justify-content-between py-3">
              <div class="col-auto">
                <h2 id="portfolio-title" class="primary-text">Portfolio</h2>
              </div>
            </div>
    
    {repo_block({title: "Github Portfolio CMS",
      updated_at: "Jul 30, 2020",
      description: "This was my second portfolio project for the Flatiron software engineering program. It's meant to demonstrate my competence with the Sinatra web framework. I built a CMS for managing which github repos you want to include in your portfolio and autogenerating HTML/CSS for those repos that you can put on personal website.",
      blog_url: "https://medium.com/@cwisoff/sinatra-portfolio-project-the-art-of-debugging-eba911b05e16",
      github_url: "https://github.com/charlie763/github-portfolio-cms",
      screenshot: github_screenshot
      })
    }

    {repo_block({title: "News Search CLI",
      updated_at: "Jun 24, 2020",
      description: "This was my first Flatiron Portfolio Project. It demonstrates my competency in Ruby, Object-Oriented Programming, APIs and web scraping. The app allows users to search news articles by topic and return snippets from returned articles based on additional keyword search. The intention is make it easy for someone to find relevant news related to a topic of interest. It integrates with the Guardian API, scrapes from Guardian article pages, and is meant as a proof-of-concept to be extended to additional news APIs.",
      blog_url: "https://medium.com/@cwisoff/news-search-cli-data-gem-portfolio-project-3c41683cd635",
      github_url: "https://github.com/charlie763/news_search_cli",
      screenshot: cli_screenshot
      })
    }

    {repo_block({title: "Personal Website",
      updated_at: "Jul 08, 2020",
      description: "If you're on my portfolio, this is the code for the personal website you're visiting. I began building this website in between product management jobs. At the time, I used it as an opportunity to learn React and brush up on my Bootstrap skills. For example, the navbar uses React's notion of state to maintain the active nav state.",
      github_url: "https://github.com/charlie763/personalWebsite"
      })
    }

    {repo_block({title: "Checkers",
      updated_at: "Mar 12, 2019",
      description: "In between jobs, I took the opportunity to teach myself Ruby and get better at object-oriented programming. Years before, I had taught myself to code in Python. I thought it would be useful to learn a different language. The applications implements a basic 2-player checkers games using the Ruby 2D gem for visualization.",
      github_url: "https://github.com/charlie763/checkers"
      })
    }
  
      </div>
    </div>

			);
		}
}

export default Portfolio