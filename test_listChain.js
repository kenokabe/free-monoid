(() => {
  "use strict";

  const freeMonoid = require("./index");

  const _M = () => freeMonoid(operator);
  const operator = list => {
    const M = list.M;
    list.freeFrom = arr => arr.reduce((m, x) => (m)(x), (M));
    list.fold = (f) => (M)(list.val
      .reduce((M)(f).compose()));
    list.fmap = (f) => list.freeFrom(list.val
      .map((M)(f).compose()));
    list.compose = () => list.val
      .reduce((f, g) => (x => g(f(x))));
  };
  const M = _M();

  const mlog = m => o => {
    console.log(m + "\n" + o.val);
    return o;
  };
  const x = (M)(1);
  const y = (M)(2);
  const z = (M)(10);

  const xyz = (x)(y)(z);

  mlog("xyz----------")(
    xyz
  );

  const double = (a) => (M)(a)(a);
  const add1 = (M)((a) => (a + 1));

  mlog("xyz--fmap------")(
    xyz
      .fmap(double)
      .fmap(double)
      .fmap((add1)(add1))
      .fmap(add1)
  );

  mlog("------")(
    (M)(999).fmap(add1)
  );

  const ff = (f) => f;
  mlog("------")(
    (add1).fmap(ff)
  );

  mlog("------")(
    (add1)(add1).fmap(f => f(3)) //4,4
  );

  mlog("------")(
    (M)(9).fmap(x => x)
  );
  console.log("------");

  const plus = (M)((x) => (y => x + y));

  mlog("------")(
    (M)(1)
      .fmap(M(5)
        .fmap(plus))
  );

  const plus1 = (M)(1)
    .fmap(plus);

  mlog("------")(
    (M)(1)(2)(3)
      .fmap((plus1)(plus1))
  );

  mlog("--fold----")(
    (M)(1)(2)(3)
      .fmap((plus1)(plus1))
      .fold((a, b) => (a + b))
  );

})();
