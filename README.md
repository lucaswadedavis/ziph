###Ziph is a tool for counting tokens (usually words).

- I've used it to count phrases in foreign languages (so I'd know what to learn to translate first)
- and political essays (quick way to tag articles)
- and jQuery (though it could be done with any codebase you like, to figure out the common patterns for building transpilation targets).

The important method is app.c.ziph in the app.js file (also [here](https://gist.github.com/lucaswadedavis/9927980#file-ziph-js) as a gist), which takes three arguments:

- (a string) the sample to be deconstructed and counted
- (an int, default 1) the chunk size 
- (a boolean, default false) whether to split on spaces or between every character

The method will return an object where the keys are the counted bits and values are the counts.

Of course if you just want the whole GUI (which is what I use most), just clone the whole thing and open the index.html file in a browser.
