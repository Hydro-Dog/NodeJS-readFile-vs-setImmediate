# NodeJS-readFile-vs-setImmediate

## Problem

As NodeJS documentation says: "If the poll phase becomes idle and scripts have been queued with setImmediate(), the event loop may continue to the check phase rather than waiting."
THis goal of this demo is to demonstrate what is the true order of event loop phases.

## Аssumption
The priority of `check` phase over the `poll` phase is due to the time OS needs for reading the file. 
Once the reading is finished `poll` phase's cb is executed in spite of any `check` phase cb's


## Аverage result

```bash
setTimeout
setImmediate
eventLoopCounter:  1
eventLoopCounter:  2
eventLoopCounter:  3
eventLoopCounter:  4
eventLoopCounter:  5
eventLoopCounter:  6
fs
eventLoopCounter:  7
eventLoopCounter:  8
eventLoopCounter:  9
eventLoopCounter:  10
eventLoopCounter:  11
eventLoopCounter:  12
eventLoopCounter:  13
eventLoopCounter:  14
eventLoopCounter:  15
```

## References 

<a href="https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/" target="blank">Quote from Node JS documentation</a>

check

This phase allows a person to execute callbacks immediately after the poll phase has completed. 
If the poll phase becomes idle and scripts have been queued with setImmediate(), the event loop may continue to the check phase rather 
than waiting.

<a href="https://stackoverflow.com/questions/30746815/is-there-a-way-to-detect-which-turn-of-the-event-loop-code-is-running-in" target="blank">Stackoverflow topic</a>
