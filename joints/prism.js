$L()
jD.lTl = jD.lowTrans = jD.lT = function (a) {
	this.lowerTranslation = a;
	return this
}
jD.uTl = jD.upTrans = jD.uT = function (a) {
	this.upperTranslation = a;
	return this
}
jD.LcA = function (x, y) {
	var jD = this
	jD.LAA(V(x || 0, y || 0));
	jD.LAA().Normalize()
	return jD
}
jD.LcB = function (x, y) {
	var jD = this
	jD.LAB(V(x || 0, y || 0));
	jD.LAB().Normalize()
	return jD
}
jD.SL = function (l, u) {
	this.SetLimits(l, u);
	return this
}
pJ.GUL = function () {
	return this.GetUpperLimit()
}
pJ.GLL = function () {
	return this.GetLowerLimit()
}
pJ.SL = function () {
	this.SetLimits.apply(this, arguments)
	return this
}
pJ.uT = pJ.uL = pJ.U = function (u) {
	var pJ = this
	return U(u) ? (pJ.GUL() * 30) :
			pJ.SL(pJ.L(), u / 30)
}
pJ.lT = pJ.lL = pJ.L = function (l) {
	var pJ = this
	return U(l) ? pJ.GLL() * 30 :
			pJ.SL(l / 30, pJ.U())
}
pJ.LU = function (l, u) {
	var pJ = this
	pJ.lL(l)
	pJ.uL(u)
	return pJ
}
pJ.UL = function (u, l) {
	return this.lm(l, u)
}
pJ.lm = function (l, u) {
	var pJ = this, g = G(arguments)
	pJ.SL(g.f / 30, (g.s + 1) / 30)
	pJ.lT(l)
	pJ.uT(u)
	return g.n ? pJ : pJ.l1()
}
pJ.lms = function (l, u) {
	return this.SL(l / 30, u / 30).l1()
}
pJ.mt = function (a, b) {
	var pJ = this, g = G(arguments)
	pJ.mS(g.f)
	pJ.mMF(N(g.s, 100))
	return g.n ? pJ : pJ.m1()
}
_$pJ = function (a, b) {
	var j = new b2d.PJD()
	j.A(a)
	j.B(b)
	return j
}
$pJ = function (b1, b2, lXA, lAA, lAB, rA) {//b2d.prismaticJointDef = PrismaticJointDef = prJt=
	var g = G(arguments)
	var jD = _$pJ(b1, b2)
	//local direction A ? the angle of the actual slider joint
	jD.lXA(D(lXA) ? lXA : V(0, 1))
	//local axis A
	jD.lAA(D(lAA) ? lAA : b1.GWC())
	//local axis B
	jD.lAB(D(lAB) ? lAB : b2.GWC())
	// something with rotation
	if (D(rA)) {
		jD.rA(rA)
	}
	return jD
}
w._pJ = function () {
	return this.CJ($pJ.apply(null, arguments))
}
w.pJ = function () {
	var w = this, g = G(arguments), o//a, b, x, y, rt
	o = O(g.t) ? {
		x: g.t.s, y: g.t.y, an: g.fo
	} : {
		x: g.t, y: g.fo, an: g.fi
	}
	var jD = _$pJ()
	A(g.f) ? jD.A(g.f[0]).vA(g.f[1], g.f[2]) : jD.A(g.f)
	A(g.s) ? jD.B(g.s[0]).vA(g.s[1], g.s[2]) : jD.B(g.s)
	jD.LcA(o.x, o.y)
	N(o.an) ? jD.rA(o.an) : 0
	return w.CJ(jD)
}
RPP = function () {
	W(20)
	x = 100;
	y = 300
	b = w.brk(x, y)
	b1 = w.bal(x, y)
	j = w.pJ(b, b1, V(1, 0), b.GWC(),
			b1.GWC()).lm(-100, 100)
	j.m1().mF(1).spd(100)
	_.in(4, function () {
		b.dyn()
	})
}//ok
JTL = function () {
	W()
	b = w.S(300, 400).A($rF(300, 50, 20, 0, 12))
	b1 = w.D(300, 400).A($cF(30))
	j = w.pJ(b, b1)
}//ok
PLM = function () {
	W({g: 5})
	x = w.brk(400, 300, 40, 40).fr(1)
	b = w.box(500, 200, 200, 40).K('box')
	var jD = _$pJ(x, b).rA(55)
	jD.localAxisA = V(1, 1)
	jD.upperTranslation = -200
	jD.lowerTranslation = 200
	// j = w.pJ([x,-30,2], b, V(1,-2), 45)
	j = w.CJ(jD).l1()
	p = w.p('thrust').de(0)
	var speed = 10
	j.mt(speed)
	j.LU(-100, 300)
	j.SetLimits(-50, 10)
	j.l1()
}//ok
BMP = function () {
	W(30)
	b = Ride(600).bS('me')
	j1 = w.CJ(
			$pJ(
					Ride(200),
					Cart(200)
			).ax(V(0, -1))
	)
	//.limits(-30, 60).speed(-100).motor(1).maxForce(1000)
	j2 = w.CJ(
			$pJ(
					Ride(400),
					Cart(400)
			).ax(V(0, -1))
	)
	//.limits(-30, 60).speed(-100).maxForce(1000).motor(1)
	//.limits(-30, 60).spd(-100).mt(1).MF(1000)
	w.CJ(
			$pJ(b,
					Cart(600)
			).ax(V(0, -1))
	)
	w.cl('cart', function () {
		w.eB(function (b) {
			// $l('cart')
			if (b.of('ride')) {
				//$l('ride')
				b.I(0, -1000)
			}
		})
	})
	w.bal(200, 200, 100)
	function Ride(x) {
		return w.bal(x, 500, 40).K('ride')
	}
	
	function Cart(x) {
		return w.brk(x, 500, 40, 40).K('cart')
	}
}//ok
PR1 = function () {
	W()
	b = w.box(500, 200, 20, 20).K('cart')
	b1 = w.brk(540, 150, 180, 90).K('ride')
	jD = $pJ(
			b,
			b1,
			V(1, .3), //.Normalize()
			V(b1.GWC().d().x, b1.GWC().d().y + 5),
			b.GWC().d(),
			5
	)
	jD.mS(-100000)
	jD.lT(-12)
	jD.uT(12.5)
	//jD.l1()
	jD.m1()
	jD.mMF(10)
	j = w.CJ(jD)
} //ok
ELV = function () {
	p = W().p()
	w.elv = function (x) {
		var w = this
		var elv = {}
		elv.plat = w.box(x, 100, 100, 10).K('elv')
		elv.base = w.brk(x, 150, 1, 100, '-').fr(100)
		elv.j = w.CJ($pJ(elv.plat, elv.base).ax(V(0, 1)))
		elv.speed = 2
		elv.j.mt(elv.speed)
		elv.flip = _.throttle(function () {
			var elv = this;
			elv.j.mt(elv.speed *= -1)
		}, 200, {trailing: false})
		elv.plat.cl(function () {
			elv.flip()
		})
		elv.plat.cl('player', function (p) {
			p.B().lV(0)
		})
		return elv
	}
	w.elv(200)
	w.elv(400)
	w.elv(600)
	w.elv(750)
	w.elv(900)
	/* w.elv(1000)
	 w.elv(1100)
	 w.elv(1200)
	 w.elv(1300)
	 w.elv(1400)
	 w.elv(1500)
	 w.elv(1600)
	 w.elv(1700)
	 w.elv(1800)
	 w.elv(1900)
	 w.elv(2000)
	 //these fall into the abyss when there is no floor (or ceiling)
	 w.elv(2100)
	 w.elv(2200)
	 w.elv(2300)
	 w.elv(2400)
	 w.elv(2500)
	 w.elv(2600)
	 w.elv(2700)
	 w.elv(2800)
	 w.elv(2900)
	 w.elv(2000)*/
} //ok
PR3 = function () {
	W({g: 5})
	x = w.brk(400, 300, 40, 40).fr(1)
	b = w.box(500, 200, 200, 40).K('box')
	//var jD = __$pJ(x,b).cC1().rA(.5)//jd.motorSpeed=100 //jd.maxMotorForce=1000 // jD.localAxisA= V(1,1) //jD.upperTranslation=20
	j = w.pJ([x, -30, 2], b, V(1, -2), 45) //j =  w.J(jd) //j.EnableMotor(true)
	p = w.p('thrust').de(1).fr(1)
	_.in(5, function () {
		j.mt(spd = 10)
		w.b(function (cx) {
			cx.w('box', function () {
				spd *= -1
			});
			j.mt(spd)
		})
	})
}//ok
PR2 = CHANGEPRISMLIMANDMOTOR = function () {
	W({//w:0
	}).G(30)
	cart = w.box(300, 200, 20, 20).re(1)
	ride = w.brk(340, 150, 180, 90)
	cen = ride.GWC().m()
	jD = $pJ(ride, cart)
	jD.xyA(30, 90)
	jD.vB(cen.x, cen.y + 5)//, cart.GWC().d(), 5
	jD.ax(V(.3, 1))
	j = w.CJ(jD)
	j.mF(100)
	j.spd(-100).m1()
	_.in(5, function () {
		w.C('g');
		j.m0()
	})
}//ok
//pd.i=function(){this.Initialize.apply(this, G(arguments));return this}
function _pre() {
	b2d.PJD = b2d.Js.b2PrismaticJointDef
	b2d.PJ = b2d.Js.b2PrismaticJoint
	pD = b2d.PJD.prototype
	pJ = b2d.PJ.prototype
}