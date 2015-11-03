b2d.WJD = b2d.Js.b2WeldJointDef


_$wJ = function (a, b, c, d, e) {
	var j = new b2d.WJD()
	//j.i = function () {var g = G(arguments); _a(j.Initialize, g, j); return j}
	if (a) {j.A(a)}
	if (b) {j.B(b)}
	if (c) {j.XYA(c) }
	if (d) {j.XYB(d) }
	 if (N(e)) {j.referenceAngle = M.tR(e)}

	return j
}

$wJ = function (a, b, c, d, e, f, g) {
	return _$wJ(a, b, V00(c, d).d(), V00(e  , f).d(), g || 10)
}


w.wJ = function () {
	return this.CJ(
			$wJ.apply(null, arguments))
}
  
WELD =WE1= function () {W()

 
 
	baBas([100, 100, 100, 100, 0, 0],
	[200, 100, 100, 100, 0, 10],
	[ 300, 100,300, 100, 0, -10],
	[ 400, 100,400, 100, 10, 10],
	[ 500, 100,500, 100, 10, -10],
	[ 600, 100,600, 100, 10, -20],
	[700, 100,700, 100, 10, -30],
	[ 800, 100,800, 100, -10, -40],
	 [ 900, 100,900, 100, -10, -50]
	)
	 
	
	w.wJ(w.bal(100, 200, 10), w.box(100, 200), 0, 0) //
	w.wJ(w.bal(200, 200), w.box(200, 200), 0, 10)
	w.wJ(w.bal(300, 200), w.box(300, 200), 0, -10)
	w.wJ(w.bal(400, 200), w.box(400, 200), 10, 10)
	w.wJ(w.bal(500, 200), w.box(500, 200), 10, -10)
	w.wJ(w.bal(600, 200), w.box(600, 200), 10, -20)
	w.wJ(w.bal(700, 200), w.box(700, 200), 10, -30)
	w.wJ(w.bal(800, 200), w.box(800, 200), -10, -40)
	w.wJ(w.bal(900, 200), w.box(900, 200), -10, -50)
	w.wJ(w.bal(100, 500), w.box(100, 500), 0, 0)
	w.wJ(w.bal(200, 500, 10), w.box(200, 500), 0, 10) //
	w.wJ(w.bal(300, 500), w.box(300, 500), 0, -10)
	w.wJ(w.bal(400, 500), w.box(400, 500), 10, 10)
	w.wJ(w.bal(500, 500), w.box(500, 500), 10, -10)
	w.wJ(w.bal(600, 500), w.box(600, 500), 10, -20)
	w.wJ(w.bal(700, 500), w.box(700, 500), 10, -30)
	w.wJ(w.bal(800, 500), w.box(800, 500), -10, -40)
	w.wJ(w.bal(900, 500), w.box(900, 500), -10, -50)
}
baBa = function (x, y, x1, y1, e, f) {
	w.wJ(w.bal(x, y), w.bal(x1, y1), e, f)
}
baBi = function (x, y, x1, y1, e, f) {
	w.wJ(w.bal(x, y), w.box(x1, y1), e, f)
}
baBas = function () {
	_.e(arguments, function (bB) {
		baBa.apply(null, bB)
	})
}
 