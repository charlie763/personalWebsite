# MCP Experimentation - Using Linkedin MCP Scaper to Make a Better LinkedIn Job Search

*July 2026*

I've been playing around with AI MCP servers to skill-up while I'm on the job hunt + I like learning about AI (most of my AI experience is pre-MCPs). I'm also desperately trying to make the job hunt less painful, so why not kill 2 birds with 1 stone?!? I came across this [repo](https://github.com/stickerdaniel/linkedin-mcp-server), which basically allows you to scrape info from linkedin (signing in as you), and then serves it up to an AI agent (i.e. Claude Desktop) for any task you want it to do.

I currently have a daily Claude Cowork task that utilizes it as well as generic web search to give me 5 new jobs posted in the past day that are a good fit based on specific filter criteria I've given it. Granted I care about somewhat unique job/company attributes, this is feeling like a giant unlock; It's like building the app that I wish Linkedin actually were (plus, I don't have to second guess how much Linkedin suggested jobs are suggested just because the company has paid to promote them). Sorry Linkedin data moat :/

Anyways, thought it might be useful for other people in my position. So, here's the prompt I used for my Claude Cowork task:

_I'm looking for Software Engineering, Senior Software Engineering or Fullstack Engineering roles. I recently installed a linked-mcp-server package that allows you to scrape information from my linkedin account. I'd like you to provide daily reports on jobs that you think would be a good fit, based on using that mcp server as well as doing web searches about that company to further narrow things down. Do the following things to filter:_
- _(ONLY DO THIS ONE TIME AND THEN STORE IN MEMORY/CONTEXT) review the "Resume tailoring for job description" chat I've had with you previously to (1) get a better sense of my qualifications and (2) get a better sense of the kinds of jobs I've been applying to/what I find appealing_
- _The job need to be remote._ 
- _My primary stack is Python + React. I'm open to learning new languages and frameworks, but jobs that match the existing stack should get priority (unless other factors outweigh this factor)_
- _Company and team culture is very important to me. I care about values like empathy, humility, transparency, autonomy and accountability. companies that focus on DEI (not just for optics) or use words like "belonging" and "inclusion" can be good indicators. I am NOT into companies that are about hustle culture, the grind, etc. Words like "extreme" would be counter-indicators for example. This can be hard to assess solely from a job description. Please use your web search tool to cross reference content from company websites, blogs etc.. It may also be useful to get a sample of posts from people at the company on linkedin to see how they talk about things. It might be worth applying this filter last, as it's probably more resource intensive._
- _I tend to think that I'd be a better fit at earlier stage/smaller companies (series A - C or the equivalent). This is not a hard requirement, and it mostly has to do with the fact that I don't think culture scales well and i don't like the bureaucracy of bigger companies._
- _I prefer companies that are missions driven, i.e. ed-tech, health-tech etc. If it overlaps with any of the civic/gov tech work I've done that would be great, but not holding out for that_
- _I'd be interested in pursuing further work in the IoT, hard-tech space, like I've been doing with VastVision. Not a hard requirement, but that would be make it more of a fit for me._
- _I prefer full stack work over frontend or backend specifically_

_The only hard requirement/filter is remote work. Besides that, culture fit trumps the rest for me. The other filters should be weighted roughly equally, although strong signal in one should outweigh weak signal from another._

_I'd like you to try to produce 5 potential fits per day (that I will later assess myself). If you run out of ideas from linkedin. Feel free to do a google job search and apply the same filters. Always start by searching for jobs posted in the last 24 hours. If you don't find 5 potential fits doing that, bring it up in your report, and I'll tell you whether or not to extend the search farther back._

So far it's been great and a big timesaver. I hope this is of use to other people!