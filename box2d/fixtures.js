Array.prototype.K = function (k) {
	if (U(k)) {
		return this.klass
	}
	this.klass = k
	return this
}
Array.prototype.sensor = function (kind) {
	this.isSensor = kind || true
	return this
}
$fD = function (h) {
	var g = G(arguments)
	var fD = new b2d.FixtureDef()
	if (b2d.iH(h)) {
		fD.shape = h
	}
	if (g.n) {
		fD.isSensor = true
	}
	return fD.de(1)
}
$sen = $snF = $sF = function (h) {
	return $fD(h, '-')
}
fD.sen = fD.sensor = fD.iS = function (isSensor) {
	if (U(isSensor)) {
		return this.isSensor
	}
	this.isSensor = isSensor ? true : false
	return this
}
fD.s1 = fD.mS = fD.mSn = fD.mSen = fD.makeSen = function () {
	this.isSensor = true
	return this
}
fD.s0 = function () {
	this.isSensor = false
	return this
}
fD.de = fD.den = fD.d = function (de) {
	if (U(de)) {
		return this.density
	}
	this.density = de
	return this
}
fD.fr = fD.fric = fD.f = function (fr) {
	if (U(fr)) {
		return this.friction
	}
	this.friction = fr
	return this
}
fD.re = fD.rest = fD.r = function (re) {
	if (U(re)) {
		return this.restitution
	}
	this.restitution = re
	return this
}
b2d.iF = b2d.iFx = function (f) {
	return f ? f.constructor.name == "b2Fixture" : false
}
$L('fShorts', 'fDef')
f.GB = f.GBd = function () {
	return this.GetBody()
}
f.GAB = function () {
	return this.GetAABB()
}
f.de = f.d = f.den = function (den) {
	if (U(den)) {
		return this.GetDensity()
	}
	this.SetDensity(den)
	return this
}
f.fr = f.f = f.fric = function (fric) {
	if (U(fric)) {
		return this.GetFriction()
	}
	this.SetFriction(fric);
	return this
}
f.re = f.r = f.rest = function (re) {
	var f = this
	if (U(re)) {
		return f.GetRestitution()
	}
	f.SetRestitution(re);
	return f
}
f.iSr = f.iS = function (isSensor) {
	return this.m_isSensor
}
f.sr = f.sn = f.sen = function (isSensor) {
	if (U(isSensor)) {
		return this.m_isSensor
	}
	this.m_isSensor = isSensor ? true : false
	return this
}
f.sr1 = f.s1 = f.mS = f.mSn = function () {
	this.sr(true)
	return this
}
f.sr0 = f.s0 = function () {
	this.SetSensor(false)
	return this
}
f.rm = f.die = function () {
	this.B().DF(this)
}
f.N = function () {
	return this.GetNext()
} 
DSC = function () {
	W0()
	tri = $eM.tri()
	tri.bS('me')
	tri.constF(5, -2).$(function () {
		this.I(0, -50)
	})
	b = w.A($dB(100, 500), $pF(30, 30)).rt(2).nRt()
	b1 = w.A($dB(200, 500), $pF(30, 30)).rt(2).nRt()
	b2 = w.A($dB(300, 500), $pF(30, 30)).rt(1).nRt()
	i = function () {
		b.I(10, -30)
	}
	v = function () {
		b1.lV(10, -60)
	}
	f = function () {
		_.ev(.1, function () {
			b2.ApplyForce(V(0, -3), b2.worldCenter())
		})
	}
	_.in(1, function () {
		i()
		v()
		f()
	})
}
f.B = f.body = function () {
	return this.GBd()
}
f.ty = f.getType = f.gT = function (someType) {
	var f = this, b = f.B()
	var ty = b.GT()
	return D(someType) ? ( ty == someType) : ty
}
f.iTy = function (typ) {
	return this.ty() == typ
}
f.cen = function () {
	var aBounds = this.GAB(),
			aLower = aBounds.lowerBound
	var alx = aLower.x * 30, aly = aLower.y * 30,
			aUpper = aBounds.upperBound,
			aux = aUpper.x * 30, auy = aUpper.y * 30,
			center = M.lineCenter(alx, aly, aux, auy)
	return __center = center
}
//shapes:
fD.H = function (h) {
	var fD = this
	if (U(h)) {
		return fD.shape
	}
	fD.shape = h;
	return fD
}
$cF = function () {
	var g = G(arguments)
	var cH = $cH(g.f, g.s, g.t)
	var f = $fD(cH)
	if (g.n) {
		f.isSensor = true
	}
	return f
}
$pF = function (wd, ht, xy, ang, ang2) {
	var g = G(arguments)
	wd = g[0];
	ht = g[1];
	xy = g[2];
	ang = g[3];
	ang2 = g[4]
	if (A(wd)) {
		return $aF.apply(null, arguments)
	}
	//if(b2d.isShape(wd)){fixt.shape = wd; return shape}
	//you can make a poly
	wd = wd || 100
	ht = N(ht) ? ht : wd
	var f = $fD($pH(wd, ht, xy, ang, ang2)).fr(.2).re(.2)//.de(1)
	if (g.n) {
		f.isSensor = true
	}
	return f
}
fD.SAB = function (x, y) {
	this.SetAsBox(x, y)
	return this
}
fD.SAOB = function (x, y, pos, ang) {
	this.SetAsOrientedBox(x, y, pos, ang)
	return this
}
$aF = function () {
	return $fD($aH.apply(null, arguments))
}
//but looks like $aF uses $aH to do all the work
$eF = function (a, b, c, d) {
	var f = $fD()
	f.shape = $eH(a, b, c, d)
	return f
}
fD.sAB = function (a, b, p, A) {
	var fD = this;
	alert('fD.sAB')
	var h = fD.H()
	if (!p) {
		h.SAB(a / 30, b / 30)
	}
	else {
		h.SAOB(a / 30, b / 30, p, A)
	}
	return fD
}// used?
//we didn't mention it with $aF, but $cF and $aF rely on $fD
// fD can be passed a real shape
// and can be set to sensor with '-'
$rF = function () {
	var g = G(arguments)
	var f = $fD($rH.apply(null, arguments))
	if (g.n) {
		f.isSensor = true
	}
	return f
}
$sqF = function () {
	var g = G(arguments)
	var f = $fD($sqH.apply(null, arguments))
	if (g.n) {
		f.isSensor = true
	}
	return f
}
f.H = function (h) {
	if (U(h)) {
		return this.GetShape()
	}
	this.m_shape = h //not sure if this works
	return this
}
$pSn = $pS = $pSF = b2d.polySens = function (k) {
	var g = G(arguments)
	var pF = $pF.apply(null, _.r(arguments)).s1()
	pF.K(k || 'polySens')
	return pF
}
f.vs = f.verts = function () {
	alert('f.vs verts boxFixt.js')
	var h = this.GetShape()
	var verts = h.m_vertices
	return [verts[0].m(), verts[1].m(), verts[2].m(), verts[3].m()]
}
f.rad = function (r) {
	var f = this, h = f.H()
	if (U(r)) {
		return h.rad()
	}
	h.rad(r);
	return f
}
  SHS = function () {
	W().p()
	w.S(100, 100, [[10]])
	b = w.S(300, 400)
	//rectangle fixutre -- no color
	b.rect(40, 40)
	//circle fixture -- no color
	b.f($cF(100, 100, 100))
	b = $eM.fixts().stat()
	_.in(1, function () {
		b.dyn()
	})
	/*
	 $l('circle is 0, poly is 1.. ill prove it..')
	 fs = b.fs()
	
	 _.ev(3, function () {
	
	 if (f = fs.pop()) {$l('shape type: ' + f.H().m_type)
	 f.rm()
	
	 }})
	 */
	_.in(3, function () {
		b1 = w.A($dB(300, 200))
		b1.f($cF(100).de(1).re(1))
		b1.aV(3)
		//b.cirB(40)
	})
}
  FXT = MAS = function () {
	W()
	w.D(800, 400, [
		$cF(20),
		$cF(5).bits(1, 2), //cat is 1, but will only collide with 2's
		$cF(10, 100, 100, '-'),
		$cF(10, 100, -100),
		$pF(10, 300, '-'), //sets as sensor
		$pF(300, 10)
	])
	r = w.BALL(200, 200, 50, 'r').rsM()
	b = w.BALL(200, 200, 50, 'b')
	b.f().de(1)
	y = w.BALL(200, 200, 50, 'y')
	y.f().de(1)
	y.rsM()
	p = w.BALL(200, 200, 50, 'p')
	p.f().de(10000)
	p.rsM()
	function grows() {
		rad = 10
		x = 400
		y = 440
		v = {x: 0, y: 0}
		//mouse joints messed up
		w.bump(400, 300, 40)
		w.bump(290, 350, 40)
		w.bump(280, 220, 40)
		addBody()
		$t(function () {//destroyAndAddBody
			b.destroyFixture(
					b.f()
			)//b.destroyFixture(fixture)
			rad += .1
			x = b.X();
			y = b.Y();
			v = b.lV()
			addBody()
		})
		function addBody() {
			b = w.A($dB(x, y).lV(v), $cF(rad))
		}
	}
	
	_.in(2, grows)
}
f.tPt = f.tP = function (pt, y) {
	var f = this, g = G(arguments)
	return f.H().TP(
			f.B().tf(), N(pt) ? V(pt, y) : pt
	)
}
LNV = function () {
	W({g: 0})
	_.t(10, function () {
		w.bal()
	})
	
	_.ev(3, function () {
		w.eB(function (b) {
			b.lV(V(0, 20))
		})
	})
	 
	/*
	 b = w.box(400, 400, 200, 200).bS('me')
	
	 f = function () {
	 b.I(0, -400, b.GetWorldPoint(b2d.V(100 / 30, -100 / 30)))
	 }
	 f2 = function () {
	 cjs.tick(f)
	 }
	
	
	
	 W().box(400, 400, 200, 200).bS('me')
	 _.in(2,function(){
	 $t(function () {
	 b.lV(V(-1, -1))
	 })
	 })
	 w.p('thrust')
	 */
}