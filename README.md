# Beep Boop Counter

#### A program that intakes number and counts up to that number while returning a few beep-boop digits instead.  1.24.2020

#### **By Stephanie Podolak**

## Description

A website created with JavaScript, CSS and HTML where a user enters a number and program returns a range of numbers from 0 to the user inputted number with the following exceptions:
* Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
* Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
* Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that."


### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Program counts from zero to user input** | 4 | 0, 1, 2, 3, 4 |
| **Replaces all 1's with beep, all 2's with boop, and all 3's with "I'm sorry, Dave..."** | 4 | 0, 'Beep!', 'Boop!', 'I'm sorry, Dave...', 4 |
| **Searches multidigit numbers in the count to see if it contains a 1, 2 or 3 and also replaces**| 41 | ...40, 'Beep!'...|
| **Program prioritizes numbers with 3's first, then 2's, then 1's when counting** | 13 | ...8, 9, 'Beep!', 'Boop!', 'I'm sorry, Dave...', 'Beep!'...|


## Setup/Installation Requirements

1. Clone this repository to your desktop. If using git bash you can do this by typing "git clone https://github.com/spodolak/beep_boop.git" into your command line while in desktop directory.
2. Navigate inside project directory by entering "cd beep_boop" in git bash.
3. Open index.html file in your browser of choice by entering "open index.html".


## Known Bugs
* No known bugs at this time.

## Technologies Used
* JavaScript
* jQuery-3.4.1
* HTML
* CSS
* Bootstrap-4.4.1

## Link to GitHub Pages
[Program Language Suggester](https://spodolak.github.io/beep_boop/)

## Support and Contact Details

_For any questions or comments please contact:_
* Steph Podolak


### License

*{This software is licensed under the MIT license}*

Copyright (c) 2020 **_{Stephanie Podolak}_**

