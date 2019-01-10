import * as R from 'ramda';

export default R.compose(
  R.join(''),
  R.juxt([
    R.compose(
      R.toUpper,
      R.head
    ),
    R.tail,
  ])
);
