# 100PrisonersProblem

## Overview

This problem is a mathematical problem in probability theory and combinatorics. offer by Danish computer scientist Peter Bro Miltersen in 2003 for the first time, more info [100 prisoners problem](https://en.wikipedia.org/wiki/100_prisoners_problem)


The strategy to solve the problem with a success rate of 30% is visully explained by Derek Muller, you can find the YouTube video here: [The Riddle That Seems Impossible Even If You Know The Answer](https://www.youtube.com/watch?v=iSNsgj1OCLA)


  ## Simulation

I wrote a Javascript code to simulate two ways of solving the 100 prisioner problem:
1. Random selection
2. Loop selection


  ## Result

The simulation code runs **10000** rounds and in each round tests both strategies on the same randomly arranged boxes, here is the result:

```
Test Rounds: 10000 - All Freed: 0% - Total Random Success Rate: 50.09% - Min Rate: 30% - Max Rate: 70%
Test Rounds: 10000 - All Freed: 31.5% - Total Looper Success Rate: 50.34% - Min Rate: 0% - Max Rate: 100%
```
