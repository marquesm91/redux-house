import { join, juxt, compose, toUpper, head, tail } from 'ramda';

export default compose(
  join(''),
  juxt([
    compose(
      toUpper,
      head
    ),
    tail,
  ])
);
