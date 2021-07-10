salut = ~[];
salut = {
    ___: ++salut,
    $$$$: (![] + "")[salut],
    __$: ++salut,
    $_$_: (![] + "")[salut],
    _$_: ++salut,
    $_$$: ({} + "")[salut],
    $$_$: (salut[salut] + "")[salut],
    _$$: ++salut,
    $$$_: (!"" + "")[salut],
    $__: ++salut,
    $_$: ++salut,
    $$__: ({} + "")[salut],
    $$_: ++salut,
    $$$: ++salut,
    $___: ++salut,
    $__$: ++salut
};
salut.$_ = (salut.$_ = salut + "")[salut.$_$] + (salut._$ = salut.$_[salut.__$]) + (salut.$$ = (salut.$ + "")[salut.__$]) + ((!salut) + "")[salut._$$] + (salut.__ = salut.$_[salut.$$_]) + (salut.$ = (!"" + "")[salut.__$]) + (salut._ = (!"" + "")[salut._$_]) + salut.$_[salut.$_$] + salut.__ + salut._$ + salut.$;
salut.$$ = salut.$ + (!"" + "")[salut._$$] + salut.__ + salut._ + salut.$ + salut.$$;
salut.$ = (salut.___)[salut.$_][salut.$_];
salut.$(salut.$(salut.$$ + "\"" + salut.$$__ + salut._$ + "\\" + salut.__$ + salut.$_$ + salut.$$_ + "\\" + salut.__$ + salut.$$_ + salut._$$ + salut._$ + (![] + "")[salut._$_] + salut.$$$_ + "." + (![] + "")[salut._$_] + salut._$ + "\\" + salut.__$ + salut.$__ + salut.$$$ + "('\\" + salut.__$ + salut.$$_ + salut._$$ + salut.$_$_ + (![] + "")[salut._$_] + salut._ + salut.__ + "')" + "\"")())();