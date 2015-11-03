_$dJ = function (a, b) {
	var dJ = new b2d.DJD();
	dJ.A(a);
	dJ.B(b);
	return dJ
}
jD.props = function () {
	var jD = this, g = G(arguments)
	return N(g.t) ? jD.l(g.f).fq(g.s).dR(g.t) :
			N(g.s) ? jD.fq(g.f).dR(g.s) :
					N(g.f) ? jD.l(g.f) :
							jD
}
j.props = function () {
	var j = this, g = G(arguments)
	N(g.t) ? j.l(g.f).fq(g.s).dR(g.t) :
			N(g.s) ? j.fq(g.f).dR(g.s) :
					N(g.f) ? j.l(g.f) : 0
	return j
}
jD.lfd = function (l, fq, dR) {
	return this.l(l).fq(fq).dR(dR)
}
j.lfd = function (l, fq, dR) {
	return this.l(l).fq(fq).dR(dR)
}
$dJLen = function () {
	var g = G(arguments)
	var dJD = _$dJ(g.f, g.s)
	dJD.props(g.t, g.fo, g.fi)
	if (g.p) {
		dJD.cl1()
	}
	return dJD
}
$dJAnc = function () {
	var g = G(arguments), o
	o = O(g.fo) ? {aA: g.t, aB: g.fo, l: g.fi, fq: g.si, dR: g.se} :
			O(g.t) ? {aA: g.t, aB: V(), l: g.fo, fq: g.fi, dR: g.si} :
					N(g.t) ? {aA: V00(g.t, g.fo), aB: V00(g.fi, g.si), l: g.se, fq: g.ei, dR: g.ni} :
					{aA: O(g.t) ? g.t : V(), aB: O(g.fo) ? g.fo : V(), l: g.fi, fq: g.si, dR: g.se}
	var dJ = $dJLen(g.f, g.s, g.o)
	dJ.props(o.l, o.fq, o.dR)
	dJ.xyAB(o.aA.x, o.aA.y, o.aB.x, o.aB.y)
	return g.p ? dJ.cl1() : dJ
}
$dJt = function () {
	var g = G(arguments), o
	o = O(g.fo) ? {a: g.f, b: g.s, xyA: g.t, xyB: g.fo, l: g.fi, fq: g.si, dR: g.se} :
			o = O(g.t) ? {a: g.f, b: g.s, xyA: g.t, l: g.fo, fq: g.fi, dR: g.si} :
			{a: g.f, b: g.s, l: g.t, fq: g.fo, dR: g.fi}
	var jD = $dJLen(o.a, o.b, o.l, o.fq, o.dR, g.o)
	if (o.xyA) {
		jD.xyA(o.xyA)
	}
	if (o.xyB) {
		jD.xyB(o.xyB)
	}
	return g.p ? jD.cl1() : jD
}
$dJ = function () {
	var g = G(arguments)
	_gg = g
	if (O(g.fo) || O(g.t) || N(g.ni) || N(g.si)) {
		return $dJAnc.apply(null, arguments)
	}
	if (N(g.ei)) {
		return $dJAnc(g.f, g.s, g.t, g.fo, g.o).props(g.fi, g.si)
	}
	if (N(g.fi)) {
		return $dJAnc(g.f, g.s, V(g.t, g.fo), g.o).props(g.fi)
	}
	if (N(g.fo)) {
		return $dJAnc(g.f, g.s, V(g.t, g.fo), V(g.fi, g.si), g.o)
	}
	return N(g.t) ?
			$dJLen(g.f, g.s, g.t, g.p) :
			$dJAnc(g.f, g.s, g.p)
}
w.dJAnc = function () {
	return this.CJ(
			$dJAnc.apply(null, arguments))
}
w.dJ = function () {
	return this.CJ(
			$dJ.apply(null, arguments)
	)
}
b.dJ = b.dst = b.dist = function (nextB) {
	var b = this, w = b.W()
	w.dJ(b, nextB)
	return nextB
}
w.spg = function () {
	var w = this, g = G(arguments), o
	o = O(g.s) ? {a: g.f, b: g.s, l: g.t} :
			O(g.f) ? {a: g.f, l: g.t}
					: {l: g.f}
	o.a = o.a || w.bal(150, 150)
	o.b = o.b || w.brk(180, 150)
	o.l = N(o.l, 100)
	return w.dJ(o.a, o.b, '+').lfd(o.l, 2,.2)
}
w.rod = function () {var w = this, g = G(arguments),o
	o= O(g.s)? {a: g.f, b: g.s, l: g.t}:
			O(g.f) ? {a: g.f,  l: g.t} 
			:{l: g.f}
	o.a = o.a || w.bal(150, 150)
	o.b = o.b || w.brk(180, 150)
	o.l = N(o.l, 100)
	return w.dJ(o.a, o.b, '+').lfd(o.l, 0, 1)
} 
DJC = function () {
	x = W().brk(600, 300)
	b = bod('r');
	b1 = bod('o');
	b2 = bod('y');
	b3 = bod('g')
	function bod(c) {
		return w.BALL(300, 200, 50, c)
	}
	
	xJt(b, 50, .4, .9)
	xJt(b2, 40, .4, .2)
	xJt(b3, 30, 4, .9)
	xJt(b1, 20, 4, .2)
	function xJt(a, n, fq, dR) {
		return w.dJ(a, x, V(n, n), 110, fq, dR)
	}
}
DJ = function () {
	x = W({w: 0}).brk(600, 300)
	w.dJ(sq('r'), x).lfd(210, .4, .9)
	w.dJ(sq('y'), x).lfd(210, .1, .002)
	w.dJ(sq('g'), x).lfd(210, 4, .9)
	dJSq('o', .6, .02)
	dJSq('w', 0, 1)
	function sq(c) {
		return w.BOX(300, 200, 50, 50, c).fR1(45)
	}
	
	function dJSq(c, fq, dR) {
		w.dJ(sq(c), x).lfd(210, fq, dR)
	}
}
PUR = function () {

// yellow is soft:  1  .002
// orange is bouncy" .6  .02
// green is rigid: 4   .9
	x = W({w: 0}).G(100).brk(600, 300)
	w.dJ(u = w.BOX(300, 200, 50, 50, 'u').rt(45).fR1(), x)
			.lfd(210, 3, .002)
	w.dJ(p = w.BOX(300, 200, 50, 50, 'p').de(10).fR1(45), x)
			.l(210).fq(3)
	w.dJ(v = w.BOX(300, 200, 50, 50, 'v').de(.0001).fR1(45), x)
			.lfd(210, 3, .002)
	_.ev(2, function () {
		v.I(R() ? 2000 : -2000, R() ? 2000 : -2000)
		u.I(R() ? 2000 : -2000, R() ? 2000 : -2000)
		p.I(R() ? 2000 : -2000, R() ? 2000 : -2000)
	})
}
DJ4 = function () {
	W()
	x = w.brk(500, 300, 200, 200)
	w.dJ(x, w.bal(300, 400, 20), V(-100, 100)).l(50)
	w.dJ(x, w.bal(600, 300, 20), V(100, -100)).l(50)
	w.dJ(x, w.bal(300, 400, 20), V(-100, -100), '+').l(50)
	b = w.ball(300, 400, 20, 'b')
	j = w.dJ(x, b, V(100, 100)).l(50)
	$t(function () {
		w.st.dot([j.a(), j.b()])
	})
	_.ev(2, function () {
		b.I(-10000, 0)
	})
	l50(b20(300, 400, 'b'), V(-100, 100))
	l50(b20(600, 300, 'g'), V(100, -100))
	l50(b20(300, 400, 'o'), V(-100, -100), '+')
	function b20(x, y, c) {
		return w.bal(N(x, 300), N(y, 400), 20, c)
	}
	
	function l50(b, aA, cC) {
		return w.dJAnc(x, b, aA, cC).l(50)
	}
}
DPM = function () {
	W()
	x = w.brk(550, 200, 400, 100)
	$roygbiv()
	w.dJ(r, o)
	w.dJ(g, i)
	w.dJ(y, b)
	w.dJ(b, v)
	_.in(3, function () {
		w.C('r')
		j1 = w.dJ(x, o)
		j = w.dJ(x, g)
		$t(function () {
			w.st.dot(j.a());
			w.st.dot(j.b())
		})
	})
}
DCL = function () {
	W()
	jt(w.bal(200, 200, 50), w.bal(300, 200, 40))
	jt(w.box(200, 200, 50), w.box(300, 200, 40), '+')
	jt(w.bal(200, 200, 50), w.bal(300, 200, 60))
	jt(w.box(200, 200, 50, 50), w.box(300, 200, 60), '+')
	function jt(a, b) {
		var g = G(arguments)
		w.dJ(a, b, g.p)
				.lfd(150, 1, .2)
	}
}
RAG = function () {
	p = W().me()
	w.spg(b1 = w.bal(100, 100, 30), w.bal(100, 200, 40))
	w.rod(b2 = w.box(100, 400, 30), w.box(100, 500, 40))
	
	w.spring = function (a, b) {
		var w = this, g = G(arguments), o
		if (U(b)) {
			var _fn = function (b) {
				w.spg(a, b);
				return _fn
			}
			return _fn
		}
		return w.dJ(a, b).lfd(1, 2, .1)
	}
	w.spring(p)(b1)(b2)
}
function _pre() {
	j.pp = function () {
		var j = this
		$l('l: ' + j.l())
		$l('fq: ' + j.fq())
		$l('dR: ' + j.dR())
		return j
	}
}
later=function(){
	old = function () {
		w.dJtCl = w.distColl = function (a, b, b1OffV, b2OffV) {
			var os1, os2
			if (O(b1OffV)) {
				b1V = b1V.add(b1OffV)
			}
			if (O(b2OffV)) {
				b2V = b2V.add(b2OffV)
			}
			var os1 = a.worldCenter().m()
			var os2 = b.worldCenter().m()
			return w.CJ(
					$.dJD().init(a, b, os1.d(), os2.d()).cl1()
			)
		}
	}
	function haha() {
// game:: density:  if u want to fit in here.. u will have to lower yourself a bit to our level.. you see, compared to you, we a really quite dense. Not dense as in stupid, but as in, we have a high mass to volume ratio.  In otherwords, we can't jump!  It's a grave grave situation.  Don't get me wrong, not grave as in bad, but grave, as in, it relates to gravity.  Additionally, it's quite bad.
	}
	
	function alpha() {
		w.tit = w.tightDist = function (b, b1) {
			return this.dJ(b, b1, 1, 1000, 1000)
		}
		b.l = function (n, lk) {
			var b = this, w = b.W()
			lk = lk || l
			_.t(N(n, 1), function () {
				w.rJ(lk, lk = w.lk(lk.X(), lk.Y() + 15))
			})
			return lk.K('leaf')
		}
		w.lk = w.lnk = w.link = function (x, y) {
			var w = this, g = G(arguments)
			var b = w.box(x, y, 4, 20).de(4).re(2)
			if (g.d) {
				b.stat()
			}
			return b
		}
		w.soft = w.softPlat = function (x, y) {
			var w = this;
			x = N(x, 300);
			y = N(y, 60)
			w.spg(
					w.bmp(x, y, 4).s1(),
					w.brk(x, y, 100, 30).fR1()
			).dm(1)
		}
		SPRINGS3 = SP3 = function () {
			W()
			w.soft(300, 100)
			w.soft(500, 80)
			w.soft(700, 40)
			w.soft(900, 120)
		}
		j.wnd = j.wind = function () {
			var j = this
			var wound
			$t(function () {
				j.l(j.l() * wound ? 1.01 : 0.99);  //j.W().st.pen('len: ' +j.l())
				wound = j.l() < 5 ? 1 : j.l() > 200 ? 0 : wound
			})
		}
		j.shr = j.shrink = function () {
			return this.l(0.97, '*')
		}
		WINDUP = WUP = function () {
			var wound = false
			W().p()
			j = w.dJtCl(
					w.bump(450, 40, 40),
					w.box(400, 200, 20, 60), 200
			)
			k = w.dJt(
					w.bump(450, 40, 40),
					w.box(400, 200, 20, 60), 200
			)
			//w.S(0, 40, $pF(400, 300).mS()  ) //can get triggered many many times?
			_.in(1, function (cx) {
				j.wind();
				k.wind()
			})
		}
	}

//jD.init(o.a, o.b, o.b1V, o.b2V)
//WARNING: dont ever set a dJ().len(0)
//this initialize function for distance, not revolute
	$dJOb = function () {
		var jD = new b2d.DJD()
		jD.init = function (b1, b2, b1V, b2V) {
			var jD = this
			if (U(b1V)) {
				b1V = b1.wCen()
			}
			if (U(b2V)) {
				b2V = b2.wCen()
			}
			return jD.init(b1, b2, b1V, b2V)
		}
		if (g.f.init) {
			jD.init.apply(jD, o.init)
		}
		jD.fq(N(o.fq, 3)).dR(N(o.dmp, .1)).l(N(o.l, 1))
		jD.cC(o.cl || o.cC || o.coll)
	}
}