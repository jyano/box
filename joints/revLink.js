w.vn = w.vn = w.vin = w.vine = function (x, y, l) {
	var w = this
	var l = w.lk(x, y, '/').l(N(l, 10))
	w.cl('player', 'leaf', function () {
		var j = w.rJ(l, p.XY(l.X(), l.Y()))
		$.kD('d', function () {
			w.DJ(j)
		})
	})
}
w.lk = function (x, y) {
	var w = this
	return w.box(x, y, 10, 15).fr(0).re(0)
}
w.tramp = function (x, re, fq, dR) {
	var w = this, g = G(arguments)
	x = N(x, 290)
	re = N(re, 75)
	fq = N(fq, 6)
	dR = N(dR, 0)
	//w.brk(x - 120, 290, 40, 300 ).fr(0)
	//w.brk(x + 120, 290, 40, 300 ).fr(0)
	var b = w.brk(x, 280, 20, 20)
	var b1 = w.box(x, 200, 200, 20)
	b1.re(re).fr(0)
	b1.r0()
	var j = w.dJ(b, b1)
	j.l(115).fq(fq).dR(dR)
	return j
}
w.brg = w.bridge = function (x, y) {
	var w = this
	var b1 = w.bmp(N(x, 400), N(y, 100), 10)
	var b2 = wood(), b3 = wood(), b4 = wood(), b5 = wood(),
			b6 = wood(), b7 = wood(), b8 = wood(), b9 = wood(),
			b10 = w.bmp(x + 700, y, 10)
	pieces([b1, b2], [b2, b3], [b3, b4], [b4, b5], [b5, b6], [b6, b7], [b7, b8], [b8, b9], [b9, b10])
	function wood() {
		return w.box(100, 100, 90, 60).de1().fR1()
	}
	
	function piece(a, b) {
		w.dJ(a, b, '+').l(6).fq(5)
	}
	
	function pieces() {
		_.e(arguments, function (g) {
			piece(g[0], g[1])
		})
	}
}
DSJ = function () {
	W()
	y = w.ship().XY(400, 170).rt(265)
	//w.cl('bul', function(f) {if (f.B() != y) {f.B().dyn()}})
	base = w.brk(255, 50, 60, 15)
	w.rev(base, body = w.lk(255, 60));
	prev = body
	w.rev(prev, body = w.lk(255, 90));
	prev = body
	w.rev(prev, body = w.lk(255, 120));
	prev = body
	bef = body = w.lk(255, 150, 'b')
	w.rev(prev, body);
	prev = body
	red = body = w.lk(255, 180, 'r')
	j1 = w.rev(prev, body);
	prev = body
	aft = body = w.lk(255, 210, 'a')
	j2 = w.rev(prev, body);
	prev = body
	je = aft.GetJointList()
	w.rev(prev, body = w.lk(255, 240));
	prev = body
	w.rev(prev, body = w.lk(255, 270));
	prev = body
	w.rev(prev, body = w.lk(255, 300));
	prev = body
	w.rev(prev, body = w.lk(255, 330));
	prev = body
	ball = w.bal(255, 330, 20, 'd').re(0);
	w.rev(prev, ball)
}//ok
ROD = function () {
	
	
	// here i bind bodies with fixtures that are alredy out of line
	W(20)
	w.rod(
			w.bal(300, 100, 20),
			w.D(300, 150, $pF(20, 20, 15, 15, 45)),
			1
	)
	w.rod(w.bal(350, 100, 20), w.D(350, 150, $pF(20, 20, -15, -15, 300)), 1)
	w.rod(w.bal(380, 100, 20), w.D(380, 150, $pF(20, 20, -15, -15, 225)), 1)
	w.rod(w.bal(400, 100, 20), w.D(400, 150, $pF(20, 20, 15, 15, 225)), 1)
	w.rod(w.bal(100, 100, 20), w.box(110, 120, 20, 20), 30)
	w.rod(w.bmp(200, 200, 20), w.box(200, 200, 20, 20), 2)
}//
SGS = function () {
	b2d.levelScrollX()
	// w.right.kill()
	//freq is SPEED of oscillation
	//damp is STRENGTH of oscillation
	// so bodies cant rotate if they dont have density???
	j = w.spg(
			w.bmp(200, 100, 10).s1(),
			w.box(200, 250, 250, 10).K('rect')
	).fq(3).dm(.1)
	w.spg(w.bmp(500, 100, 10).s1(),
			w.box(500, 250, 250, 10).K('rect'))
			.fq(3).dm(1)
	w.spg(w.bmp(800, 50, 10).s1(), w.box(800, 200, 250, 10).K('rect')).fq(2).dm(50)
	w.spg(w.bmp(1200, 125, 10).s1(), w.box(1200, 275, 250, 10).K('rect')).fr(10).dm(.5)
	w.cl('rect', function (f) {
		if (f) {
			b = f.B()
			j = b.joint()
			//w.s.pen($l('freq: ' + j.fq() + ', dampening: ' + j.dm()))
		}
	})
}//ok
SPRINGINSPACE = SIS = function () {
	W({g: 0})
	var spring = function (bx, by) {
		bx = N(bx, 400)
		by = N(by, 300)
		var x = w.brk(500, 300, 40, 200)
		var b = w.bal(bx, by)
		var j = w.dJ(x, b)
		//w.st.dot(500, 300)
		//w.st.dot(bx, by)
		//w.st.dot('r', 500 - ((500 - bx) / 2), 300 - ((300 - by) / 2))
		return j
	} //try with and without grav
	ball = w.bal(200, 200, 50) // notice it bounces off wall, but NOT off x (neither have rest by default)
	rect = w.brk(200, 250, 250, 10)
	j = spring(480, 300)
	j.l(20).fq(2).dm(1)
	// ok so freq is how much strngth u need to pull it??
	// as freq gets low.. u can pull it farther away
	// its the strength of the spring
}
BOUNCESPRING = BSG = function () {
	W().roof.kill()
	p = w.p().XY(285, 0)
	//default freq is 0.  but thats like freq 10000000
//freq is tightness.  the default (0) is all the way tight.
//if u want to start to loosen it.  change from 0 to a very high number!
//try 50.. then u will see that it budges just a little.
	//ok.. now keep going down..
	// eventually it is too loose to fight against gravity
	// hahaha then its just flat and usesless
	// ok all this assumed a default damp of 0.
	// now set the freq to a good oscillation (3 or 4)
	// then play with the damp
	// damp is like a tightner on your looseness
	// it makes you less stretchy?
	// just leave damp at 0 for now, and play with freq
	w.tramp(200, 0, 6)// not bouncy
	w.tramp(500, 1.2, 6)// too bouncy
	w.tramp(800, .75, 6)// mid bouncy, mid freq
	w.tramp(1100, .75, 2)//low freq
	w.tramp(1400, .75, 12)//high freq
	_.ev(1, function () {
		p.I(0, -150)
	})//game:: he autojumps.  u jump to give him a double jump!
	_.in(10, function () {
		w.addHundBalls()
	})//w.st.flash();
}
SPG = function () {
	W()
	j1 = w.J(
			jd = $dJ(w.bal(30, 200, 20, 'r'), w.box()
			).lfd(200, 5, .1)
	)
	$t(function () {
		if (j1.l() > 1) {
			j1.l(j1.l() - 1)
		}
	})
	j2 = w.spg(w.bal(100, 300, 30, 'w'), w.box(), '-').lfd(20, 5, .1)
	j3 = w.spg(w.bal(130, 250, 30, 'b'), w.brk(), '-').lfd(120, 5, 0)
} //ok
BRIDGE = BRG = BDG = function () {
	W(30).roof.kill()
	w.p().XY(400, -300)
	w.bridge(100, 310)
	_.in(3, function () {
		//w.st.flash();
		p.XY(500, 0)
	})
}//ok