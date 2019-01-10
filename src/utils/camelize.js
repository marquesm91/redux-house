import * as R from 'ramda';
import capitalize from './capitalize';

export default R.compose(
  R.join(''),
  R.juxt([
    R.head,
    R.compose(
      R.join(''),
      R.map(capitalize),
      R.tail
    ),
  ]),
  R.split('_'),
  R.toLower
);
