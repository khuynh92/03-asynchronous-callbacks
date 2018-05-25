#README

[![Build Status](https://travis-ci.com/khuynh92/03-asynchronous-callbacks.svg?branch=master)](https://travis-ci.com/khuynh92/03-asynchronous-callbacks)

In your README.md describe the exported values of each module you have defined. Every function description should include it's arity (expected number of parameters), the expected data for each parameter (data-type and limitations), and it's behavior (for both valid and invalid use). Feel free to write any additional information in your README.md.


Exported values for the read module is:
  - a function called read:
    - Has an arity of 2
    - The expected data for parameter one is an array and the expected data for parameter two is a callback function
    - Behavior for valid use is to allow access to the file contents of each file, in an array, in the same order
    - Behavior for invalid use is to give an error message that can be used in a callback