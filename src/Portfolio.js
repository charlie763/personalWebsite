import React from 'react';

class Portfolio extends React.Component{
	render(){
		return(
			<div class="container">
      <div id="portfolio-display">
  <div class="row justify-content-between py-3">
    <div class="col-auto">
      <h2 id="portfolio-title" class="primary-text">Portfolio</h2>
    </div>
    
  </div>

  
    <dl>
      <dt class="primary-text">news_search_cli
        <span class="secondary-text subtitle ml-3">Last Updated: Jun 24, 2020</span>
      </dt>
        <dd class="secondary-text font-italic">Flatiron Portfolio Project - Search news articles by topic and return snippets from returned articles based on additional keyword search</dd>
        <dd><a class="secondary-text" href="https://github.com/charlie763/news_search_cli">https://github.com/charlie763/news_search_cli</a></dd>
        
    </dl>
  
    <dl>
      <dt class="primary-text">personalWebsite
        <span class="secondary-text subtitle ml-3">Last Updated: Jun 08, 2020</span>
      </dt>
        <dd class="secondary-text font-italic">Peronsal website. Used it as an opportunity to learn React and brush up on my Bootstrap skills.</dd>
        <dd><a class="secondary-text" href="https://github.com/charlie763/personalWebsite">https://github.com/charlie763/personalWebsite</a></dd>
        
    </dl>
  
    <dl>
      <dt class="primary-text">checkers
        <span class="secondary-text subtitle ml-3">Last Updated: Jul 14, 2020</span>
      </dt>
        <dd class="secondary-text font-italic">ruby practice that I did a while ago when first trying to learn Ruby</dd>
        <dd><a class="secondary-text" href="https://github.com/charlie763/checkers">https://github.com/charlie763/checkers</a></dd>
        
    </dl>
  
    <dl>
      <dt class="primary-text">Github Portfolio CMS
        <span class="secondary-text subtitle ml-3">Last Updated: Jul 30, 2020</span>
      </dt>
        <dd class="secondary-text font-italic">This was my second portfolio project for the Flatiron software engineering program. It's meant to demonstrate my competence with the Sinatra web framework. I built a CMS for managing which github repos you want to include in your portfolio and autogenerating HTML/CSS for those repos that you can put on personal website.</dd>
        <dd><a class="secondary-text" href="https://github.com/charlie763/github-portfolio-cms">https://github.com/charlie763/github-portfolio-cms</a></dd>
        
    </dl>
  
</div>



    </div>

			);
		}
}

export default Portfolio