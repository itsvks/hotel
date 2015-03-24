Look at this URL: http://deals.expedia.com/beta/deals/hotels.json
    It is an undocumented JSON API that presents a bunch of Hotel deals.
    
Note that there are certain query parameters that can be passed in, that will filter the results. For example:
    city
    streetAddress
    min/maxTotalRate (i.e., minTotalRate and maxTotalRate)
    min/maxStarRating
    latitude/longitude
    (maybe you can find more?)

Create a very simple site hosted for free on Heroku that consumes this API and displays deals in an appealing manner.
    Languages Heroku supports: https://devcenter.heroku.com/categories/language-support

Push the code to GitHub.

Be sure to document (roughly) the instructions for setting the site up in a local sandbox. Also document any assumptions you've made, known issues with your example, or anything about your thought process during the exercise that you'd like to share.

Extra credit if it builds in Travis-CI: https://travis-ci.org/
Then share the links for the GitHub code and the site in Heroku. These are what we will look for in the solution:

Coding style and readability of code.
Approach to testing (TDD is ideal, but not required).
Creativity in choosing how to present the deals.
The sandbox setup instructions don't have to be foolproof (e.g., no need to make sure it works on every OS). But they should be fairly clear.

Keep the exercise simple. This is not something that should take more than four to eight hours of effort.
