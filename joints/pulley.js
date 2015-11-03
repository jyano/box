b2d.PuJD = b2d.Js.b2PulleyJointDef
b2d.PuJ = b2d.Js.b2PulleyJoint
j.init = j.i = function () {
	j.Initialize.apply(j, G(arguments))
	return j
}
j.lenA = j.lA = function (a) {
	j.lengthA = a;
	return j
}
j.lenB = j.lB = function (a) {
	j.lengthB = a;
	return j
}
j.maxLenA = j.mLA = function (a) {
	j.maxLengthA = a;
	return j
}
j.maxLenB = j.mLB = function (a) {
	j.maxLengthB = a;
	return j
}
SPJ = function (x, y) {W()

	x =   100
	y = 400
	b11 = w.A(bx1 = $dB(x, y), fix())
	b22 = w.A(bx2 = $dB(x, y), fix())
	var pJD= $PuJD()
	
	
	pJD.init(
			b11,
			b22,
			b2d.V(15, 1),
			b2d.V(15, 2),
			b11.GWC(),
			b22.GWC(),
			1
	)
			.lenA(8)
			.lenB(4)
			.maxLenA(10)
			.maxLenB(5)
	w.J(pulley)
}
$puJ = function (a, b) {
	var jD = new b2d.PuJD()
	jD.A(a)
	jD.B(b)
	return jD
}
//SuperPulleyJoint.$$=function(){x.$$(sPJ)}
PULLEY = function () {
	W()
	b = w.box(300, 300, 200, 10)
	b1 = w.box(500, 300, 200, 10)
	var pJD = $puJ().init(
			b, b1,
			V(20, 1), V(25, 2),
			b.GWC(),
			b1.GWC(),
			1).lenA(8).lenB(4).maxLenA(10).maxLenB(5)
	w.J(pJD)
}
PUL = function () {
	W()
	b = w.box(300, 300, 200, 10)
	b1 = w.box(500, 300, 200, 10)
	var pJD = $puJ(b, b1)
	pJD// V(20, 1),  V(25, 2), b .GWC(), b1.GWC(), 1)
	pJD.lenA(8).lenB(4).maxLenA(10).maxLenB(5)
	w.CJ(pJD)
}