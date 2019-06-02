## The Task

Write a program that will determine the type of a triangle. It should take the lengths of the triangle's three sides as input, and return whether the triangle is equilateral, isosceles or scalene.

We are looking for solutions that showcase problem solving skills and structural considerations that can be applied to larger and potentially more complex problem domains. Pay special attention to tests, readability of code and error cases.

It would be great if you build the UI with our components:

[http://ui.tradeshift.com/](http://ui.tradeshift.com/) & [https://github.com/Tradeshift/tradeshift-ui](https://github.com/Tradeshift/tradeshift-ui)

# Considerations

The task at hand is fairly simple. Initially I considered just going for Vanilla JS but decided to go with React, just to add some more depth to the solution, and to have some fun with it.

My first task was getting the TS UI up and running, which was pretty straight forward.

Next was to build up the structure around the core of the application itself, the triangle. I started with just getting the three inputs going and mapped them to `a`, `b`, `c`.

From there on I added Redux and migrated the triangle logic into a simple Redux store. I added a bit of basic validation as well. I could have gone further and added services/functions to handle validation of various rules but I felt like the application was already a bit over-engineered compared to the task and goal, so I figured I would just keep it simple.

I tied it all up with Redux to manage the state updates of the triangle and just generally keep it somewhat structured.
