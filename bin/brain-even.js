#!/usr/bin/env node

import startGame from '../src/index.js';

const RULES = 'Answer "yes" if the number is even, otherwise answer "no"';

startGame(0, RULES);
