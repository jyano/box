$L('bodDef', 'short', 'types', 'act', 'bull', 'massD', 'posRot', 'fixts', 'world', 'velo', 'damp', 'bShorts', 'worldRel', 'bFx', 'bFuc')
function bodDef() {
	bD.STy = function (ty) {
		this.type = ty;
		return this
	}
	bD.ty = function (ty) {
		return U(ty) ? this.type : this.STy(ty)
	}
	bD.SAc = function (ac) {
		this.active = ac;
		return this
	}
	bD.ac = function (ac) {
		return this.SAc(ac ? true : false)
	}
	bD.a1 = bD.mA = function () {
		return this.ac(1)
	}
	bD.a0 = function () {
		return this.ac(0)
	}
	bD.ASl = function (aS) {
		var bD = this;
		bD.allowSleep = aS;
		return bD
	}
	bD.sl = bD.aSl = function (aS) {
		return this.ASl(aS ? true : false)
	}
	bD.s1 = bD.dS = bD.dAS = bD.mAS = function () {
		return this.sl(1)
	}
	bD.s0 = function () {
		return this.sl(0)
	}
	bD.SB = function () {
		this.bullet = isBul;
		return this
	}
	bD.bul = bD.bull = function (isBul) {
		return U(isBul) ? this.bullet : this.SB(isBul ? true : false)
	}
	bD.b1 = bD.mB = function () {
		return this.bul(1)
	}
	bD.b0 = function () {
		return this.bul(0)
	}
	bD.GFR = function () {
		return this.fixedRotation
	}
	bD.SFR = function (fR) {
		this.fixedRotation = fR
		return this
	}
	bD.fR = bD.FR = bD.fixedRot = function (fR) {
		return U(fR) ? this.GFR() : this.SFR(fR ? true : false)
	}
	bD.fR1 = bD.r0 = bD.nRt = bD.mFR = function (rt) {
		if(N(rt)){this.rt(rt)}
			return this.fR(1)
	}
	
	bD.fR0 = bD.r1 = function (rt) {
		if (N(rt)) {
			this.rt(rt)
		}
		return this.fR(0)
	}
	//
	bD.SLV = function (lV) {
		this.linearVelocity = lV;
		return this
	}
	bD.SAV = function (aV) {
		this.angularVelocity = aV;
		return this
	}
	bD.lV = function (lV) {
		return U(lV) ? this.linearVelocity : this.SLV(lV)
	}
	bD.aV = function (vel) {
		return U(vel) ? this.angularVelocity : this.SAV(vel)
	}
	bD.SLD = function (lD) {
		this.linearDamping = lD;
		return this
	}
	bD.SAD = function (aD) {
		this.angularDamping = aD;
		return this
	}
	bD.lD = function (lD) {
		return U(lD) ? this.linearDamping : this.SLD(lD)
	}
	bD.aD = function (aD) {
		return U(aD) ? this.angularDamping : this.SAD(aD)
	}
	//
	bD.GP = function () {
		return this.position
	}
	bD.SP = function (ps) {
		this.position = ps;
		return this
	}
	bD.Ps = function (ps) {
		return U(ps) ? this.GP() : this.SP(ps)
	}
	bD.XY = function (x, y) {
		return U(x) ? this.Ps().m() : this.Ps(V00(x, y).d())
	}
	bD.X = function (x) {
		return U(x) ? this.XY().x : this.XY(x, this.XY().y)
	}
	bD.Y = function (y) {
		return U(y) ? this.XY().y : this.XY(this.XY().x, y)
	}
	bD.GA = function () {
		return this.angle
	}
	bD.SA = function (an) {
		this.angle = an;
		return this
	}
	bD.A = bD.ang = bD.Ang = function (an) {
		return U(an) ? this.GA() : this.SA(an)
	}
	bD.rt = bD.rot = function (rt) {
		return U(rt) ? M.toD(this.Ang()) : this.Ang(M.toR(rt))
	}
}
_$bD = function () {
	return new b2d.BD()
}
$bD = function (x, y) {
	return U(x) ? _$bD() : _$bD().XY(x, y)
}
$sB = $bD0 = function (x, y) {
	return $bD(x, y).ty(0)
}
$kB = $bD1 = function (x, y) {
	return $bD(x, y).ty(1)
}
$dB = $bD2 = function (x, y) {
	return $bD(x, y).ty(2)
	//aside: interesting that dyn comes after kin
}
b2d.tB = b2d.toBody = function (f) {
	return b2d.iB(f) ? f : b2d.iF(f) ? f.B() : 0
}
b2d.iB = function (b) {
	return O(b) && b.constructor.name == 'b2Body'
}
function short() {
	b.W = b.GW = function () {
		return this.GetWorld()
	}
	b.N = b.GN = function () {
		return this.GetNext()
	}
	b.GT = function () {
		return this.GetType()
	}
	b.ST = function (ty) {
		this.SetType(ty)
		return this
	}
	b.SAw = function (sA) {
		this.SetAwake(sA);
		return this
	}//return  _.set(b, 'SetAwake', sA)
	b.IAw = function () {
		return this.IsAwake()
	}
	b.SSA = function (sA) {
		this.SetSleepingAllowed(sA);
		return this
	}
	b.ISA = function () {
		return this.IsSleepingAllowed()
	}
	b.SAc = function (ac) {
		this.SetActive(ac);
		return this
	}
	b.IAc = function () {
		return this.IsActive()
	}
	b.GP = function () {
		return this.GetPosition()
	}
	b.SP = function (ps) {
		this.SetPosition(ps);
		return this
	}
	b.STf = function (tf) {
		this.SetTransform(tf);
		return this
	}
	b.GTf = function (tf) {
		return this.GetTransform()
	}
	b.SA = function (ang) {
		this.SetAngle(ang);
		return this
	}
	b.GA = function () {
		return this.GetAngle()
	}
	b.SPAA = function () {
		this.SetPositionAndAngle.apply(this, arguments)
		return this
	}
	b.SFR = function (fR) {
		this.SetFixedRotation(fR)
		return this
	}
	b.IFR = function () {
		return this.IsFixedRotation()
	}
	b.GMD = function () {
		return this.GetMassData()
	}
	b.SMD = function (mD) {
		this.SetMassData(mD);
		return this
	}
	b.RMD = function () {
		this.ResetMassData();
		return this
	}
	b.GM = function () {
		return this.GetMass()
	}
	b.SB = function (bu) {
		this.SetBullet(bu);
		return this
	}
	b.IB = function () {
		return this.IsBullet()
	}
	b.GI = function () {
		return this.GetInertia()
	}
	b.AF = function (v, c) {
		this.ApplyForce(v, c);
		return this
	}
	b.AI = function (i, pt) {
		this.ApplyImpulse(i, pt);
		return this
	}
	b.GD = b.GDf = function () {
		return this.GetDefinition()
	}
	b.GLD = function () {
		return this.GetLinearDamping()
	}
	b.GAD = function () {
		return this.GetAngularDamping()
	}
	b.GLV = function () {
		return this.GetLinearVelocity()
	}
	b.GAV = function () {
		return this.GetAngularVelocity()
	}
	b.SLD = function (lD) {
		this.SetLinearDamping(lD);
		return this
	}
	b.SAD = function (aD) {
		this.SetAngularDamping(aD);
		return this
	}
	b.SLV = function (lV) {
		this.SetLinearVelocity(lV);
		return this
	}
	b.SAV = function (aV) {
		this.SetAngularVelocity(aV)
		return this
	}
	b.CF = function () {
		return this.CreateFixture.apply(this, arguments)
	}
	b.CF2 = function () {
		return this.CreateFixture2.apply(this, arguments)
	}
	b.dsF = b.dF = b.DF = b.DFx = function (f) {
		this.DestroyFixture(f);
		return this
	}
	
	 
	b.GFL = b.GFxL = function () {
		return this.GetFixtureList()
	}
 
	
 
	
	b.GCxL = function () {
		return this.GetContactList()
	}
	b.GCoL = function () {
		return this.GetControllerList()
	}
	b.GJL = function () {
		return this.GetJointList()
	}
	
	b.GLP = function () {
		return this.GetLocalPoint.apply(this, arguments)
	}
	b.GWP = b.GWPt = function () {
		return this.GetWorldPoint.apply(this, arguments)
	}
	b.GLC = b.GLcC = function () {
		return this.GetLocalCenter()
	}
	b.GWC = function () {
		return this.GetWorldCenter()
	}
	b.GLV2 = function () {
		return this.GetLocalVector()
	}
	b.GWV2 = function () {
		return this.GetWorldVector()
	}
	b.GLVFLP = b.GlVLP = function () {
		return this.GetLinearVelocityFromLocalPoint.apply(this, arguments)
	}
	b.GLVFWP = function () {
		return this.GetLinearVelocityFromWorldPoint.apply(this, arguments)
	}
	b.M = function () {
		return this.Merge.apply(this, arguments) || this
	}
	b.S = function () {
		return this.Split.apply(this, arguments) || this
	}
	function uD() {
		b.SUD = function (d) {
			this.SetUserData(d);
			return this
		}
		b.GUD = function () {
			return this.GetUserData()
		}
	}
}
b.aw = b.awake = function (aw) {
	return (U(aw)) ? this.IAw() : this.SAw(aw ? false : true)
}
b.ty = function (ty) {
	return U(ty) ? this.GT() : this.ST(ty)
} // b.type = b.T = 
b.iD = b.isDyn = function () {
	return this.GT() == b2d.B.b2_dynamicBody
}
b.iK = b.isKin = function () {
	return this.GT() == b2d.B.b2_kinematicBody
}
b.iS = b.isStat = function () {
	return this.GT() == b2d.B.b2_staticBody
}
b.tS = b.stat = function () {
	return this.ty(0)
}
b.tK = b.kin = function () {
	return this.ty(1)
}
b.tD = b.dyn = function () {
	return this.ty(2)
}
b.XY = function (x, y) {
	return U(x) ? this.GP().m() : this.SP(V00(x, y).d())
}
b.X = function () {
	var b = this, g = G(arguments)
	var ps = b.XY()
	return g.u ? ps.x : b.XY($.update(ps.x, g.f, g), ps.y)
}
b.Y = function () {
	var b = this, g = G(arguments)
	return g.u ? b.XY().y : b.XY(b.XY().x, $.update(b.XY().y, g.f, g))
}
b.rt = b.rot = function (an) {
	var b = this, g = G(arguments)
	//= p.rT=p.rt=p.rotation=p.angle=p.ang
	var curAng = M.tD(b.GA())
	return g.u ? curAng : b.SA(M.tR(
			g.p ? curAng + g.f:
					g.n ? curAng - g.f :
							g.m ? curAng * g.f :
									g.d ? curAng / g.f:
											g.f
	))
}
b.tf = function (tf) {
	return U(tf) ? this.GTf() : this.STf(tf)
}
b.fR = function (fR) {
	return U(fR) ? this.IFR() : this.SFR(fR ? true : false)
}
b.fR1 = b.r0 = b.nR = b.nRt = function () {
	return this.fR(1)
}
b.fR0 = b.r1 = function () {
	return this.fR(0)
}
b.b1 = b.mBu = function () {
	var b = this
	b.SetBullet(true);
	return b
}
b.b0 = function () {
	this.SetBullet(false);
	return this
}
b.aV = function (aV) {
	return U(aV) ? this.GAV() : this.SAV(aV)
}
b.lV = function (lV, y) {
	return U(lV) ? this.GLV() : this.SLV(N(lV) ? V00(lV, y) : lV)
}
b.aD = function (aD) {
	return U(aD) ? this.GAD() : this.SAD(aD)
}
b.lD = function (lD) {
	return U(lD) ? this.GLD() : this.SLD(lD)
}
b.mass = function (m) {
	if (U(m)) {
		return (this.GM() * 900) / 100
	}
}
b.rsM = b.rMD = function () {
	return this.RMD();
}
b.nF = b.n = b.nFx = b.num = b.count = function () {
	return this.m_fixtureCount
}
b._wC = b.wC = b.wCent = b.worldCenter = b.gWC = function () {
	return this.GWC()
}
b.wCen = b.cen = b.realWC = b.cent = function () {
	return this.GWC().m()
}	// return V(this.GWC().x, this.GWC().y).m()
b.wP = b.wPt = b.gWP = b.wPoint = function (x, y) {
	var pt = this.GWP(V(x, y).d())
	return V(pt.x, pt.y).m()
}
b.I = b.aI = function (i, pt, pt2) {

//forces:
//apply impulse. pass impulse as two nums, or obj 
// and pass in location, defaults to body center
	var b = this, g = G(arguments), o
	o = N(g.s) ? {i: V(g.f, g.s), pt: g.t} :
	{i: g.f, pt: g.s}
	return b.AI(o.i || b.vec().d(40), o.pt || b.GWC())
}
b.F = function (v, c, c2) {
	var b = this
	if (N(c)) {
		return b.F(V(v, c), c2)
	}
	if (U(c)) {
		c = b.cen()
	}
	return b.AF(v, c)
}
b.AT = function () {
	this.ApplyTorque.apply(this, arguments);
	return this
}

//FIXTURES
b.sDs = b.setDestroy = b.sDsI = b.setDestroyIf = function (k) {
//	$l('b.sDs = b.setDestroy = b.sDsI = b.setDestroyIf =')
	var b = this
	return b.of(k) ? b.K('ds destroy') : b
}
 
b.f = function (fD) {

 	var b = this, g = G(arguments)

	if (g.u) {return b.GFL()}
	
	if (g.A_) {
		_.e(b2d.fxPar(g.f), function (fD) {b.f(fD)})
		return b
	}
	
	
	var f = b.CF(g.f)
	if (g.f.K()) {f.K(g.f.K())}
	return f
}
b.fD = b.fxD = function (fD) {
	return this.f($fD(fD))
}
b.cF = b.cFx = b.circ = function () {
	var cF = $cF.apply(null, arguments)
	return this.f(cF)
}
b.rF = b.rect = function () {
	return this.f($rF.apply(null, arguments))
}
b.rH = b.rF = function () {
	var rH = $rH.apply(null, arguments)
	return this.fD(rH)
}
b.aF = b.arrr = function () {
	return this.f($aF.apply(null, arguments))
}
b.pF = b.poly = function () {
	return this.f($pF.apply(null, arguments))
}

b2d.fxPar = function (fxs, fn) {var b = this
	//if its not an array,, assume is fine, and leave it as is
	fxs = _.m(fxs, function (f) {return !A(f)? f: 
			f.length == 1 || f.length == 3 ? $cF.apply(null, f) : 
					$pF.apply(null, f)})
	// fn = _.b(fn, b) ?
	if (fn) { _.e(fxs, fn); return b }
	
	return fxs
	
} //if (f.isSensor) {return b2d.polySens.apply(null, f)}
b.fxPar = function (f) {
// so how does that work??
// the array len determines if it is to make 
// a circle fxt ($cF) or rect fixt $pF
	var b = this
	
	b2d.fxPar(f, function (fD) {
		
		b.f(fD)
	
	})
	
	return b
}
 
FPAR = DICK = BED = function () {
	y=W().ship()
	w.A($dB(300, 300), guyInBed) // have to fix w.dyn
	w.D(100, 100, b2d.fxPar(guyInBed))
	w.D(400, 300, b2d.fxPar(dick)
	)
	w.D(400, 300, dick)
}
MAZE = BXD = function () {
	W()
	w.grid(maze, 100, 200, 20, 30)
	w.bump(400, 200, 10)
	b = w.D(200, 100)
	b.f($fD($cH(100, 200)))
	b.f($fD($pH(100, 200)))
}
alpha = function () {
	w.numDB = function () {
		var w = this
		var n = 0
		w.eDB(function (b) {
			n++
		})
		return n
	}
	w.numDB.show = function () {
		var w = this
		var num = 0
		$t(function () {
			w.eDB(function (b) {
				var n = w.numDB();
				if (num !== n) {
					num = n;
					$l('num: ' + n)
				}
			})
		})
	}
}
function _pre() {
	V00 = function (x, y) {
		if (x === '*') {
			x = M.r() * 10
		}
		if (y === '*') {
			y = M.r() * 10
		}
		return V(N0(x), N0(y))
	}
	$lL = function () {
		G(arguments).e(function (mt) {
			if (F(mt)) {
				mt()
			}
		})
	}
	_.set = function (ob, mt, v) {
		ob[mt](v);
		return ob
	}
	$sOb = function (ob) {
		ob.ex = function (mt) {
			if (F(this[mt])) {
				return this[mt]()
			}
		}
		ob.r = ob.run = function (mt) {
			this.ex(mt);
			return this
		}
		ob.s = ob.set = function (pp, v) {
			this[pp] = v;
			return this
		}
		ob._S = ob._Set = function (mt, pp) {
			var ob = this;
			ob[mt] = function (v) {
				ob[pp] = v;
				return ob
			}
		}
		ob._G = ob._Get = function (mt, pp) {
			this[mt] = function (pp) {
				return this[pp]
			}
		}
		ob.S = ob.Set = function (mt, pp) {
			var ob = this;
			ob[mt] = function (v) {
				ob[pp](v);
				return ob
			}
		}
		ob.G = ob.Get = function (mt, pp) {
			this[mt] = function (pp) {
				return this[pp]()
			}
		}
		ob.GS = function (mt, g, s) {
			this[mt] = function (val) {
				return U(val) ? this[g]() : this[s](val)
			}
		}
	}
}
b.fs = b.e = b.eF = function (fn) {
	var b = this
	var arr = []
	var f = b.f()
	while (f) {
		arr.push(f)
		f = f.N()
	}
	if (fn) {
		_.e(arr, function (it) {
			fn(it, fn)
		});
		return b
	}
	return arr
}
b.decor = function (g) {
	var b = this
	if (g.n) {
		b.mS()
	}
	else if (g.p) {
		b.mBu()
	}
	else if (g.m) {
		b.mS().mBu()
	}
	return b
}
b._BOX_ = function (wd, ht, x, y) {
	var b = this
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var f = b.f($rF(wd, ht, x, y)).mS().de(.00000001)
	var r = f.sprite = $r2Gx(wd, ht, x, y)
			.XY(b.X(), b.Y()).al(.3).a2(w.st)
	$t(function () {
		r.rt(b.rt()).XY(b.X(), b.Y())
	})
	return f
}//b.rSn = b.recSen = b.rectSensor = b.RECTSEN =
b.POLY = function (c, arr) {
	var b = this, w = b.W(), g = G(arguments), o
	o = S(g.f) ? {c: g.f, arr: g.s} : {arr: g.f}
	o.c = o.c || 'y'
	var f = b.f($aF(o.arr))
	b.bS2(
			w.st.poly(o.arr, o.c, o.c))
	return f
}//w.CONVEX = b.vex = b.conv = b.vex =
//specific to talkjs
$bulBD = function (x, y) {
	var bD = $dB(x, y)
	bD.bullet = true
	bD
}
DENROT = DER = function () {
//by default, bodies have density = 0
//bodies cannot rotate by force, if their density is 0
//so by default, bodies wont rotate!!!! but still some mass
//can even change its density to 0, to suddenly freeze it...
	//something weird.. if it was already rotating it keeps rotating, and i think its rotation is affected by forces of others..
	//however others don't rot in response (assuming they also have den-0).  then once it stops rotating, switches back to frozen again?? hmmm.. maybe the rotation is affected only by friction/damping.. and the forces only change its x/y?  test it...
	W()
	r = w.BRICK(300, 300, 400, 20, 'y').re(.5)
	r2 = w.BRICK(300, 300, 400, 10, 'o')
	r3 = w.BRICK(300, 300, 400, 10, 'w')
	r4 = w.BRICK(300, 300, 400, 10, 'w')
	r5 = w.BRICK(300, 300, 400, 10, 'b')
	flipDen = function (r) {
		r.de(r.de() == 0 ? 1 : 0)
	}
	flipStage = function () {
		w.st.XY.apply(w.st, w.st.X() == 0 && w.st.Y() == 0 ? [10000, 10000] : [0, 0])
	}
	flipStage()
	_.ev(5, function () {
		flipDen(r);
		flipDen(r2);
		flipDen(r3);
		flipStage()
	})
}
 