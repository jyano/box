$L()
jD.lowAng = jD.lA = function (a) {
	this.lowerAngle = M.tR(a);
	return this
}
jD.upAng = jD.uA = function (a) {
	this.upperAngle = M.tR(a);
	return this
}
jD.mt = jD.mot = jD.motor = function (sp, tor, enable) {
	var jD = this
	jD.speed(sp)
	jD.SMMT(N(tor) ? tor : 100)
	if (enable != '-') {
		jD.m1()
	}
	return jD
}
jD.limits = jD.lm = function (lowAng, upAng) {
	var jD = this, g = G(arguments)
	this.lowAng(lowAng).upAng(upAng)
	if (!g.n) {
		this.enableLimit = true
	}
	return this
}
j.mt = j.mot = j.motor = function (sp, tor) {
	var j = this, g = G(arguments)
	j.SMS(sp).SMMT(N(tor) ? tor : 100000)
	return g.n ? j : j.m1()
}
//just a shortcut to call initialze.  have i ever even done that?  laaaame waaah waaaaah
jD.init = jD.i = function () {
	this.Initialize.apply(this, G(arguments))
	return this
}
j.lim = j.limits = function (a, b) {
	var g = G(arguments);
	a = g[0], b = g[1]
	if (a === true) {
		this.EnableLimit(true);
		return
	}
	this.SetLimits(Math.toRadians(a), Math.toRadians(b))
	if (g.N) {
		this.EnableLimit(true)
	}
	return this
}
j.lowAng = j.lA = function (a) {
	j.lowerAngle = tRad(a);
	return j
}
j.upAng = j.uA = function (a) {
	j.upperAngle = tRad(a);
	return j
}
b.rJ = b.rev = function (nextBody) {
	var b = this
	this.W().rev(b, nextBody)
	return nextBody
}
$rev = function (a, b, c, d, e, f) {
	var g = G(arguments)
	//pass in body1, body2, world-bV = body1-center
	//can also pass body1, body2, world-x, world-y
	//or body1, body2, local-axis-A-x, local-axis-A-y, local-axis-B-x,local-axis-B-y
	var j = new b2d.b2RevoluteJointDef()
	var jt = j
	jt.init = jt.i = function () {
		jt.Initialize.apply(jt, G(arguments))
		return jt
	}
	//convenience functions
	jt.motor = jt.mt = function (speed, torque, enable) {
		jt.speed(speed)
		jt.MT(N(torque) ? torque : 100)
		if (enable != '-') {
			jt.enableMotor = true
		}
		return jt
	}
	jt.limits = jt.lm = function (lowAng, upAng, enable) {
		jt.lowAng(lowAng).upAng(upAng)
		if (enable != '-') {
			jt.enableLimit = true
		}
		return jt
	}
	if (U(c)) {
		c = a.worldCenter()
	}
	if (O(c)) {
		jt.init(a, b, c)
	}
	else if (N(e)) {
		jt.A(a).B(b).lAA(V(c / 30, d / 30)).lAB(V(e / 30, f / 30))
	}
	else if (N(c)) {
		jt.init(a, b, V(c / 30, d / 30))
	}
	//SuperJointDef( jt )
	return jt
}
w.Rev = function (a, b, c, d, e, f) {
	var w=this,g = G(arguments)
	//pass in body1, body2, world-bV = body1-center
	//can also pass body1, body2, world-x, world-y
	//or body1, body2, local-axis-A-x, local-axis-A-y, local-axis-B-x,local-axis-B-y
	var j = SuperJointDef(new b2d.Joints.b2RevoluteJointDef())
	var jt = j
	jt.init = jt.i = function () {
		jt.Initialize.apply(jt, G(arguments))
		return jt
	}
	//convenience functions
	jt.motor = jt.mt = function (speed, torque, enable) {
		var g = G(arguments)
		jt.speed(speed)
		jt.MT(N(torque) ? torque : 100)
		 
		
		return g.n? jt: jt.m1()
	}
	jt.limits = jt.lm = function (lowAng, upAng, enable) {var g=G(arguments)
		jt.lowAng(lowAng).upAng(upAng)
		return g.n ? jt : jt.m1()
	}
	
	if (U(c)) {
		c = a.GWC().m()
	}
	
	if (O(c)) {
		jt.init(a, b, c)
	}
	else if (N(e)) {
		jt.A(a).B(b).lAA(bV(c / 30, d / 30)).lAB(bV(e / 30, f / 30))
	}
	else if (N(c)) {
		jt.init(a, b, bV(c / 30, d / 30))
	}
	w.CJ(jt)
	return jt
}
w.$rev = function (a, b, c, d) {
	return this.CJ(
			$rJ.apply(null, arguments)
	)
}
//pass in body1, body2, world-bV = body1-center
//can also pass body1, body2, world-x, world-y
//or body1, body2, local-axis-A-x, local-axis-A-y, local-axis-B-x,local-axis-B-y
w.rJ = w.rev = function (body1, body2, c, d, e, f) {
	var g = G(arguments)
	var jt = new b2d.Joints.b2RevoluteJointDef()
	if (U(c)) {
		c = body1.worldCenter()
	}
	if (O(c)) {
		jt.init(body1, body2, c)
	}
	else if (N(e)) {
		jt.A(body1).B(body2).lAA(V(c / 30, d / 30)).lAB(V(e / 30, f / 30))
	}
	else if (N(c)) {
		jt.init(body1, body2, V(c / 30, d / 30))
	}
	return this.CJ(jt)
}
w.link = function self(x, y) {
	var that = this, l
	l = w.box(x, y, 4, 20).de(4).re(2)
	l.l = function (n) {
		n = N(n) ? n : 1
		var lk
		_.t(n, function () {
			lk = self(l.X(), l.Y() + 15)
			that.Rev(l, lk)
			l = lk
		})
		return l.K('leaf')
	}
	return l
}
w.spinner = spinner = function (x, y, s, t) {
	x = N(x) ? x : 500
	y = N(y) ? y : 200
	s = N(s) ? s : 100
	t = N(t) ? t : 100
	dial = w.box(x, y, 200, 40)//w.a(dBD(x,y), pFx(200,40))
	rock = w.brick(x, y, 10, 10)//w.a(sBD(x,y), pFx(10,10))
	return w.rev(dial, rock).mot(s, t) // rJt({  i:[rock, dial, dial.c()],  eM:1,  mS:-10,  mMT:100  })
}
w.seesaw = seesaw = function () {
	anc = world.bi(400, 300, 60, 60)
	lev = world.bi(400, 300, 300, 20)
	world.createJoint(
			RevoluteJointDef(
					anc, lev, anc.worldCenter(), lev.worldCenter()
			).collide(0)
	)
}
shrink = function () {
	_.e(ropeJoints, function (j) {
		j.shrink()
	})
}
rJ.lm = rJ.sL = function (a, b) {
	var j = this
	a = N(a) ? a : 20
	b = N(b) ? b : 180
	j.SetLimits(M.tR(a), M.tR(b))
	return j
}
LEASH = LSH = function () {
	//b2d.level()
	W()
	link = function (x, y) {
		var l = w.box(x, y, 5, 10, 'y').re(.5)
		l.l = function (n) {
			n = N(n) ? n : 1
			var lk
			_.t(n, function () {
				lk = link(l.X(), l.Y() + 15)
				w.rJ(l, lk)
				l = lk
			})
			return l
		}
		return l
	}
	base = link(300, 20).stat()
	l = base.l(10)
	//w.Rev(l, p)
}
TRAPEZE = BABY = function () {
	b2d.level()
	link = function (x, y) {
		var l = w.box(x, y, 5, 10, 'y').den(4).rest(2)
		l.l = function (n) {
			n = N(n) ? n : 1
			var lk
			_.t(n, function () {
				lk = link(l.X(), l.Y() + 20)
				r = w.rev(l, lk)
				r.collideConnected = true
				l = lk
			})
			return l
		}
		return l
	}
	base = link(300, 20).stat()
	l = base.l(10)
	w.rev(l, p.XY(l.X(), l.Y()))
	base = link(100, 20).stat()
	l = base.l(10)
	w.rev(l, p.XY(l.X(), l.Y()))
}
FIREFLY = FLY = function () {
	b2d.level()
	link = function (x, y) {
		var l = w.box(x, y, 5, 10, 'y').de(4).re(2)
		l.l = function (n) {
			n = N(n) ? n : 1
			_.t(n, function () {
				l = link(l.X(), l.Y() + 20)
			})
			return l
		}
		return l
	}
	base = link(100, 20).stat()
	l = base.l(10)
	w.rev(l, p.XY(l.X(), l.Y()))
}
WINDOWBLINDS = WBL = function () {W()
	link = function (x, y) {
		var l = w.box(x, y, 50, 10).de(4).re(2)
		l.l = function (n) {
			n = N(n) ? n : 1
			var lk
			_.t(n, function () {
				lk = link(l.X(), l.Y() + 24)
				r = w.rJ(l, lk)
				r.collideConnected = false
				l = lk
			})
			return l
		}
		return l
	}
	base = link(300, 20).stat()
	l = base.l(10)
	// w.Rev(l, p.XY(l.X(), l.Y()))
	link = function (x, y) {
		var l = w.box(x, y, 50, 10).de(4).re(2)
		l.l = function (n) {
			n = N(n) ? n : 1
			var lk
			_.t(n, function () {
				lk = link(l.X(), l.Y() + 24)
				r = w.rev(l, lk)
				r.collideConnected = true
				l = lk
			})
			return l
		}
		return l
	}
	base = link(100, 20).stat()
	l = base.l(10)
	//w.Rev(l, p.XY(l.X(), l.Y()))
}
 VIN = function () {
	W()
	p = w.p().r0()
	w.vine(100, 10, 15)
	w.vine(200, 10, 12)
	w.vine(500, 10)
}
 VNT = function () {
	W()
	p = w.p().X(60)
	trap = function (x) {
		w.vine(x, 10, 12)
		w.vine(x + 10, 10, 4)
		w.vine(x + 20, 10, 6)
		w.vine(x + 30, 10, 8)
		w.vine(x + 40, 10, 10)
		w.vine(x + 50, 10, 12)
		w.vine(x + 60, 10, 10)
		w.vine(x + 70, 10, 8)
		w.vine(x + 80, 10, 6)
		w.vine(x + 90, 10, 4)
	}
	trap(200)
	//trap(300)
}
  BXC = function () {
	W() // hmm.. want to matchs screen size
	a = w.bmp(300, 600, 200)
	b = w.box(300, 400, 100, 100)
	w.rev(a, b)
}
  ECN = function () {
	s = cjs.S().A(
			cjs.circ(200, 'r', 'n').rXY(100).XY(400, 700),
			box = cjs.rect(100, 100, 'b', 'o').XY(300, 600).rXY(50, 250)
	)
	RTT(box)
}
 EC1 = function () {
	W()
	w.rJ(
			dome = w.baa(300, 600, 200),
			cannon = w.bi(300, 400, 100, 100))
	w.st.A(
			cjs.circ(200, 'r', 'b').rXY(100).XY(400, 700),
			box = cjs.rect(100, 100, 'b', 'r').XY(300, 600).rXY(50, 250)
	)
	RTT(box)
	$t(function () {
		if (box.rt() > 60) {
			box.rt(60)
		}
		if (box.rt() < -60) {
			box.rt(-60)
		}
		cannon.aF(V(0, -420), cannon.GWC())
	})
}
  BIO = function () {
	W().randRects()
	isHooked = false
	distJ = false
	hero = w.box(320, 460, 20, 20)
	$can = $(w.st.canvas)
	/*
	 $can.mousedown(function (x, y) {
	 w.QueryPoint(function (f) {
	 var touchedBody = f.B()
	 if (touchedBody.iS()) {
	 distJ = w.dJ(hero, touchedBody,
	 hero.GWC(),
	 V(x, y).d()) //collideConnected=true
	 isHooked = true
	 }
	 return false
	 }, V(x, y).div())
	 }) //if(distJ){w.DestroyJoint(distJ)}
	 $can.mouseup(function () {
	 if (dJ) {w.DJ(dJ)}
	 })   // if I release the mouse, I destroy the distance jt
	 */
	$t(function () {// as long as the hook is active, I shorten a bit jt distance
		if (isHooked) {
			hero.aw(1) // BODY MUST BE AWAKE!!!!!!
			dJ.l(dJ.l() * 0.97)  //distJ.len(97,'%') //len('97%')
		}
	})
}
 RPY = function () {
	W()
	w.roof.kill()
	body = w.brk(255, 50, 60, 15)
	link = body
	for (var i = 1; i <= 10; i++) {
		func(i)
	}
	function func(i) {
		body = w.box(255, i * 30, 3, 15).fr(0).re(2)
		w.rJ(link, body)//, V(255,i*30-15))
		link = body
	}
	
	body = w.bal(255, 330, 20).fr(0).re(2)
	w.rJ(link, body)
	y = w.ship().XY(400, 170).rt(265).stat()
	/*
	 w.cl('bul', function(f){
	 if (f.B() != y) {
	 f.B().kill()//.setDestroy()
	 }
	 })
	
	 */
}//good rope
  CAT = function () {
	W()
	cat = w.A(
			$dB(350, 200), [
				$pF(125, 20, 0, 0, 0),
				$pF(20, 60, -80, -40, 200)
			])
	cat_arm = w.A($dB(210, 210), [
		$pF(150, 10, 0, 0, 0, 1),
		$pF(10, 20, -140, -30, 0, 1)
	])
	j = w.rev(cat, cat_arm, V(0, 0))
			.lAA(V(-80, -90))
	//.eM(1).eL(1).lAB(bV(60, 0)).sMS(1000).sL(-180, 60).sMMT(1)
	cannonball = w.A($dB(90, 90), $cF(10, 20))
	// s.$(fire=function(e){ the_jt.sMMT(10000)})
//  draw_box=function(px,py,w,h,d,ud):void {
//
//   ground = new dBD(px,py)
//
//ground.position.Set(px, py);
//if (d) {
//    ground.type=b2Body.b2_dynamicBody;
//}
//
//my_box = pSh().sAB(w/2, h/2)
//
//  my_fixture  = fDf(my_box)
//
//
//
//the_ground =w.cB(ground);
//
//the_ground.sUD(ud);
//the_ground.cF(my_fixture);
} //ok
ROU = function () {
	W()
	b = w.D(300, 300).A(
			$cF(50),
			$pF(10, 80, 20, 160)
	)
	w.rJ(w.bmp(300, 300, 100), b)
}//ok
REV = function () {
	W()
	w.rJ(
			w.bmp(100, 100),
			w.box(100, 100, 100, 40)
	).mt(5, 1)
	return
	w.j(w.rev(w.baa(250, 100), w.bi(250, 100, 100, 40)).motor(5, 2))
	w.j(w.rev(w.baa(400, 100), w.bi(400, 100, 100, 40)).motor(5, 10000))
	w.j(w.rev(w.baa(550, 100), w.bi(550, 100, 100, 40)).mt(20, 5))
	w.j(w.rev(w.baa(700, 100), w.bi(700, 100, 100, 40)).mt(20, 10))
	w.j(w.rev(w.baa(850, 100), w.bi(850, 100, 100, 40)).mt(20, 10000))
	w.j(w.rev(w.baa(100, 220), w.bi(100, 220, 100, 40)).limits(0, 0))
	w.j(w.rev(w.baa(250, 220), w.bi(250, 220, 100, 40)).limits(0, 10))
	w.j(w.rev(w.baa(400, 220), w.bi(400, 220, 100, 40)).lm(0, 180))
	w.j(w.rev(w.baa(550, 220), w.bi(550, 220, 100, 40)).lm(-180, 0))
	w.j(w.rev(w.baa(700, 220), w.bi(700, 220, 100, 40)).lm(-360, 180))
	w.j(w.rev(w.baa(850, 220), w.bi(850, 220, 100, 40)).lm(0, 1000))
	w.j(w.rev(w.baa(100, 340), w.bi(100, 340, 100, 40)).lm(0, 0).mt(5, 1))
	w.j(w.rev(w.baa(250, 340), w.bi(250, 340, 100, 40)).lm(0, 10).mt(5, 2))
	w.j(w.rev(w.baa(400, 340), w.bi(400, 340, 100, 40)).lm(0, 180).mt(5, 10000))
	w.j(w.rev(w.baa(550, 340), w.bi(550, 340, 100, 40)).lm(-180, 0).mt(20, 5))
	w.j(w.rev(w.baa(700, 340), w.bi(700, 340, 100, 40)).lm(-360, 180).mt(20, 10))
	w.j(w.rev(w.baa(850, 340), w.bi(850, 340, 100, 40)).lm(0, 1000).mt(20, 10000))
	w.j(
			rev(w.baa(100, 460), w.bi(100, 460, 100, 40)).lm(0, 0).mt(-5, 1))
	w.j(
			rev(w.baa(250, 460), w.bi(250, 460, 100, 40)).lm(0, 10).mt(-5, 2))
	w.j(
			rev(w.baa(400, 460), w.bi(400, 460, 100, 40)).lm(0, 180).mt(-5, 10000))
	world.createJoint(
			rev(
					baa(550, 460), w.bi(550, 460, 100, 40)
			)
					.lm(-180, 0).mt(-20, 5))
	world.createJoint(
			rev(w.baa(700, 460), w.bi(700, 460, 100, 40)).lm(-360, 180).mt(-20, 10))
	world.createJoint(
			rev(w.baa(850, 460), w.bi(850, 460, 100, 40)).lm(0, 1000).mt(-20, 10000)
	)
}//ok
RLM = function () {
	W()
	j = w.rJ(w.bmp(400, 220), w.box(500, 220, 200, 40))
	j.limits(0, 30)
	j.l1()
	_.in(2, function () {
		j.limits(0, 200)
	})
} //good lims
REVJOINT = RJT = function () {
	W()
	//w.rev(  w.ball(),   w.box()   )
	w.rJ(
			w.bmp(200, 200),
			box = w.box(150, 150)
	)
	w.rJ(box, w.bal(130, 130))
	j = w.rJ(
			w.bmp(400, 200, 100),
			w.box(400, 200, 100)
	)
	//j.motor(true).speed(2000)
	j.SetMaxMotorTorque(10000000)
	j.SetMotorSpeed(-2)
	j.EnableMotor(true)
	return
	w.rJ(
			w.box(120, 50, 50, 50),
			w.box(100, 50, 50, 50)
	).mt(2)
	w.rJ(
			w.box(400, 30, 30, 50),
			w.box(400, 30, 30, 50)
	).mt(3)
	fido = w.rJ(
			w.box(400, 30, 10, 80),
			w.box(400, 30, 20, 160)
	).mt(10)
	w.rJ(
			w.bal(400, 30, 50),
			w.box(400, 30, 20, 160)
	).motor(7)
}//ok
function _pre() {
	jD = jd = b2d.Joints.b2JointDef.prototype
	rJD = b2d.Joints.b2RevoluteJointDef.prototype
//j = b2d.Joints.b2Joint.prototype
	rJ = b2d.Joints.b2RevoluteJoint.prototype
//convenience functions\\\
	rJ.GJS = function () {
		return this.GetJointSpeed()
	}
	rJ.GJA = function () {
		return this.GetJointAngle()
	}
	b2d.RJD = b2d.Js.b2RevoluteJointDef
	b2d.RJ = b2d.Js.b2RevoluteJoint
	rJD = b2d.RJD.prototype
	rJ = b2d.RJ.prototype
}
