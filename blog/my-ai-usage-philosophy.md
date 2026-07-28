# My Thoughts on Using AI as a Software Engineer

*July 2026*

It seems like every other recruiter wants to know, "are you for or against using AI?". My guess is that they've been given some mandate by their higher-ups to make sure the engineering team they hire is "AI-forward" or "AI-native". Sadly, I think this framing misses the point. AI is a tool like any other tool, albeit a tool that can type itself and is more of a swiss-army-knife than others. All the same, I think the questions recruiters should be asking is something along the lines of, "What's your approach to AI? What do you think it's good at? What do you think it's bad at? How do you maximize the good and minimize the bad?" 

This is my attempt to answer some of those questions.

### My AI Mental Modal
I find that trying to understand what AI is and isn't goes a long way towards helping me understand how to use it best. I do not claim to be an AI expert or machine learning engineer. My understanding is hobbled together by watching an hour long "how to build your own LLM Transformer" youtube video, reading a few acadmeic papers, and reading Chistopher Summerfield's _These Strange New Minds_. My non-expert understanding is that LLMs are basically very, very, very good predicition machines. Transformers associate pieces of text (tokens) with combinations previous pieces of text to predict what text is most likely to come next. Through training, these models develop networks of "weights" that, more or less, map concepts together. On one axis you may have royalty, king <--> queen; and on another you may have sex/gender, male <--> female. The weights provide a mapping so that the AI "knows" gender + royalty = male, king and female, queen (this is a bastardization of an example I remember from _These Strange New Minds_). In addition, these mappings and predictions are built by training the AI on a very large corpus of knowledge scraped from the internet.

One of the reasons I was initially drawn to AI is that it allows me exercise the same muscles I use to empathize with human beings in new an interesting ways. Here, I define "empathy" as the ability to understand others as they would understand themselves. This is what drew me to build an [early AI coding assistant](https://github.com/charlie763/developer-gpt) in mid-2023 back before tools like Claude Code or Cursor. I think to build tools like that or even use them effectively, it helps to try to "empathize" with AI (I will still most likely pick humans if it ever comes to war between us and the future AGIs). 

So, given what we know about how AI works, what does empathizing with it tell us? Well, we know that LLMs are just prediction machines. So, that also means they are non-deterministic. When you write code, assuming nothing has changed, you can expect that it will give you the same answer 100% of the time, given the same input. Granted most LLM APIs give you the ability set how deterministic you want your output to be, the LLMs themselves are non-deterministic by nature. That API ability is most likely just implementing some guardrails on top of the underlying model (i.e. take the average of 10 outputs). Furthermore, those predictions and the underlying concept mapping driving them are based on the corpus of knowledge an LLM was trained on. Your AI doesn't innately know what happened yesterday; you have to tell it that as part of a prompt if you want it to have that context when answering you.

### What AI is Good and Bad At
As I've built with and used AI over the past 3 years, I've tried to develop a mental list (and at one point a list in Notion) about things I think AI is good and bad at.

*The Good*
- Boiler plate logic - i.e. "do something like what we already did over there" or "write a unit test that does x, y, z"
- Looking through stack traces
- Giving me a rough draft of some code
- Being a thought partner when doing technical planning
- Summarizing domain areas that I'm unfamiliar with
- Writing complex SQL (most of the time)

*The Bad*
- Finding the correct layer of abstraction
- Understanding the nuances of an existing code base
- Figuring out problems past a certain level of complexity
- Figuring out the answer to novel problems
- Hallucination (duh)
- Understanding how to use arcane technology or libraries (hello Basic Station)

### Mitigation and Enhancement Strategies
The TL;DR is: use AI for what it's good at and don't use it for what it's bad at. To dive a little deeper, I'm not going to go through every bullet above, but I think it's useful to specificly address how to mitigate the bad and enhance the good in context of a specific example.

_Complexity, Novelty, and Abstraction_

At my last job, for better or worse, I designed a relatively complex piece of functionatliy that was core to our main product offering. It was a declaritive framework that allowed customers define business workflows via a no-code automations builder. A simple example, one customer my want a text message if an asset had left there warehouse after business hours. This was not a good use case for AI because it needed to be deterministic. And, AI wasn't particularly good at adding features or fixing things if they went wrong. One mitigation strategy, was to be clear with myself and the team about what AI could and couldn't do in relation to this code, and take the brunt of  tickets related to code on myself. The times I did throw AI directly at this code, it would often spend hours going down unhelpful rabbit holes or accidently break something I'd only find out about much later. Plus, it was a good opportunity to flex my software engineering muscles so that when I did have an AI-suitable task I could still assess how it was doing on that. But, just doing stuff myself doesn't often maximize productivity. So, I drew on *the good* things AI does in relation to this part of the codebase. A lot of the testing suite for this functionality looked similar. So, I'd often start off tickets by asking AI to create tests like the existing ones but for a different user/business case. AI might not be able build the functionality itself, but sometimes if I broke down the work into small enough parts (created a good abstraction layer first), I could hand off a smaller task to AI to do. And, if I was really struggling on a particular piece of code, AI could often be a good though partner. It might not be able to solve the issue itself (at least without breakign other stuff), but it was often good at reading through console output and generating hypotheses as to what might be wrong.

<div style="color: white; font-size: 36px; line-height: 12px; margin-bottom: 24px; display: flex; justify-content: center; align-items: center;"><span>.     .     .</span></div>

That's more or less my approach to AI. I'll end with a poor-man's effort at profundity. I've a been reading a book, _Comfortable with Uncertainty_ by Pema Chodron. It touchs on a lot of Buddhist teachings and talks about how one root of suffering is our fear of what could come next. All the time we spend trying to control our futures or predict what is going to happen just causes suffering because it is inevitably a futile task. I find it interesting, then, that LLMs, a tool that is so drastically changing how we work and live, is predicated on the idea of predicting what is going to come next...
