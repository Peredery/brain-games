#!/usr/bin/env node

import startGame from '../src/index.js';

const RULES = 'Answer "yes" if given number is prime. Otherwise answer "no".';

startGame(4, RULES);
