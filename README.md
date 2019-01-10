# Redux House

## Table of Contents

- [Installation](#installation)
- [Documentation](#documentation)
  - [createAction](#createaction)
  - [createActions](#createactions)

## Installation

```sh
yarn add redux-house
# or
npm install --save redux-house
```

## Documentation

### createAction

```js
// actions.js
import { createAction } from 'redux-house';

const setEmpty = createAction('SET_EMPTY');

const setUser = createAction('SET_USER', 'user');

const setToken = createAction('SET_TOKEN', 'token', value => `Bearer ${value}`);

empty(); // { type: 'SET_EMPTY' }
setUser('Doug'); // { type: 'SET_USER', user: 'Doug' }
setToken('abc123'); // { type: 'SET_TOKEN', token: 'Bearer abc123' }
```

### createActions

```js
// actions.js
import { createActions } from 'redux-house';

const actions = createActions({
  SET_EMPTY: null,
  SET_USER: 'user', // or ['user']
  SET_TOKEN: ['token', value => `Bearer ${value}`],
});

actions.setEmpty(); // { type: 'SET_EMPTY' }
actions.setUser('Doug'); // { type: 'SET_USER', user: 'Doug' }
actions.setToken('abc123'); // { type: 'SET_TOKEN', token: 'Bearer abc123' }
```
