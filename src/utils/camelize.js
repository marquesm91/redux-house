import { join, juxt, head, compose, map, tail, split, toLower } from 'ramda';
import capitalize from './capitalize';

export default compose(
  join(''),
  juxt([
    head,
    compose(
      join(''),
      map(capitalize),
      tail
    ),
  ]),
  split('_'),
  toLower
);
