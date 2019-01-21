import * as R from 'ramda';

export default R.compose(
  R.toUpper,
  R.ifElse(
    R.test(/[A-Z]_|^([a-z]+|[A-Z]+)$/g),
    R.identity,
    R.compose(
      R.replace(/(?!^)([A-Z][a-z]+|[A-Z]+(?=[A-Z]|\b))/g, '_$1'),
      R.replace('_', '')
    )
  )
);
