# Basic web-page

## Known issues

1. A randon quote renders twice as API requests are sent twice.
Because in ```Strict Mode``` the React [double invokes render methods](https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects) in order to flush out potential side effects. 
