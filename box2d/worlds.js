//$PT()
function short() {
	w.GG = function () {
		return this.GetGravity()
	}
	w.SG = function (gv) {
		this.SetGravity(gv);
		return this
	}
	w.SDD = function (dD) {
		this.SetDebugDraw(dD);
		return this
	}
	w.DDD = w.dr = w.draw = function () {
		this.DrawDebugData();
		return this
	}
	w.CF = w.clr = w.cF = w.ClF = w.CFo = function () {
		this.ClearForces();
		return this
	}
	 w.St= w.step=function () {
		this.Step.apply(this, arguments);
		return this
	}
	w.GGB = w.grB = w.gB = w.GGBd = function () {
		return this.GetGroundBody()
	}
	w.GBC = w.GBoC = w.nBd = w.numBods = w.bC = w.gBC = function () {
		return this.GetBodyCount()
	}
	w.GBL = function () {
		return this.GetBodyList()
	}
	w.DB = w.DBo = w.DBd = function (b) {
		this.DestroyBody(b);
		return this
	}
	w.CB = w.CBo = w.CBd = function (bD) {
		return this.CreateBody(bD)
	}
	//contact
	w.GCC = function () {
		return this.GetContactCount()
	}
	w.GCL = function () {
		return this.GetContactList()
	}
	w.SCF = function (cF) {
		this.SetContactFilter(cF);
		return this
	}
	w.SCL = function (cL) {
		this.SetContactListener(cL);
		return this
	}
 
 
	//controller
	w.CC = function (co) {
		return this.CreateController(co)
	}
	w.DC = function (co) {
		this.DestroyController(co);
		return this
	}
	w.AC = function (co) {
		this.AddController(co);
		return this
	}
	w.RC = function (co) {
		this.RemoveController(co);
		return this
	}
	query()
	function query() {
		w.QP = w.QPt = function (fn, vec) {
			this.QueryPoint(fn, vec);
			return this
		}
		w.QA = w.Q = function (a, b) {
			this.QueryAABB(a, b);
			return this
		}
		w.QS = w.QH = function () {
			return this.QueryShape.apply(this, arguments)
		}
		w.RC = function () {
			this.RayCast.apply(this, arguments);
			return this
		}
		w.RCA = function () {
			this.RayCastAll.apply(this, arguments);
			return this
		}
		w.RC1 = w.RCO = function () {
			this.RayCastOne.apply(this, arguments);
			return this
		}
	}
	
	function alpha() {
		w.IL = function () {
			return this.IsLocked()
		}
		w.V = w.Vl = w.Vd = function () {
			return this.Validate()
		}
		w.GPC = function () {
			return this.GetProxyCount()
		}
		w.SBP = function (bO) {
			this.SetBroadPhase(bP);
			return this
		}
		w.SWS = function (wS) {
			this.SetWarmStarting(wS);
			return this
		}
		w.SCP = function (wS) {
			this.SetContinuousPhysics(wS);
			return this
		}
		w.SDL = function (wS) {
			this.SetDestructionListener(wS);
			return this
		}
	}
}
$L('short', 'iterQuery', 'rand', 'moveAll', 'sprit')
w.gv = w.G = function (x, y) {var w=this

	var gv = w.GG() 
	if (U(x)) {return gv}
	var v
	if (N(x)) {v = N(y) ? V(x, y) : V(0, x)}
	if (x == 'flip') {v = V(-gv.x, -gv.y)}
	return w.SG(v)
}
w.ds = w.dB = function (b) {var w=this,g=G(arguments),o
	return g.u? w.eB(function (b) {w.destroy(b)}):
			w.DB(b)
}
w.bd = function () {
	var bs = this.GBL()
	return bs
}
w.cB = function (bD, fD) {var w = this,g=G(arguments),o
	var b = w.CB(g.f)
	if (g.s) {b.f(g.s)}
	return b
}
w.A =   function (bD, fD) {var w=this,g=G(arguments),o
	
	w.cB(g.f , g.s)

	return w
}
w.B = function(){
	var w = this, g = G(arguments), o
	return g.u? w.bd(): w.cB.apply(w, arguments)
}


w.D = function () {
	var w = this, g = G(arguments), o
	o = O(g.f) ?
	{x: g.f.x, y: g.f.y, fD: g.s} :
	{x: g.f, y: g.s, fD: g.t}
	o.x = N(o.x) ? o.x : 500
	o.y = N(o.y) ? o.y : 250
	var dB = $dB(o.x, o.y)
	return w.B(dB, o.fD)
}//   super star !

w.S = w.stat = function (x, y, fD) {
	if (O(x)) {
		fD = y;
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 500;
	y = N(y) ? y : 250
	return this.B($sB(x, y), fD)
}

w.bulBD = w.bul = function (x, y) {return this.B( $bulBD(x, y) )}

w.bmp=w.bump = w.cS = w.bu = w.baa = function (x, y) {
	var g = G(arguments)
	var b = w.S(x, y)
	b.cF.apply(b, _.r(g, 2))
	return b.decor(g).K('bump')
}
w.bal=w.ball = w.cD = w.ba = w.cirB = function () {
	var w = this, g = G(arguments), o, b
	if (true) {
		b = w.D(g.f, g.s)
		b.cF.apply(b, _.r(arguments, 2))
	}
	else {
		o = {x: g.f, y: g.s, r: g.t}
		var b = w.D(o.x, o.y)
		b.f($cF(o.r))
	}
	return b.decor(g).K('ball')
}
w.brk=w.brick = w.rS = w.bii = w.brik = function (x, y, W, H) {
	var w = this, g = G(arguments)
	var b = w.S(x, y)
	b.rF.apply(b, _.r(g, 2))
	//var b = w.A($sB(x, y), $rF(W, H))
	b.decor(g)
	b.K('brick')
	return b
}
w.box = w.rD = w.bo = w.bi = w.dR = function (x, y, W, H) {
	var w = this, g = G(arguments)
	//var b = w.A($dB(x, y), $rF(W, H))
	var b = w.D(g.f, g.s)
	b.rF.apply(b, _.r(g, 2))
	b.decor(g)
	b.K('box')
	return b
}
w.roc= w.rck=w.rock = w.pS = function (x, y) {
	var w = this, g = G(arguments)
	var b = w.S(x, y)
	b.pF.apply(b, _.r(g, 2))
	return b.decor(g).K('rock')
}
w.bag = w.pD = function (x, y) {
	var b = w.D(x, y), g = G(arguments)
	b.pF.apply(b, _.r(g, 2))
	return b.decor(g).K('bag')
}
w.BMP=w.BUMP = function (x, y, r, c) {
	var w = this,
			g = G(arguments)
	//	var wd = w.st.W(), ht = w.st.H()
	//x = N(x) ? x : _.pI(M.r() * (wd - 100)) + 60
	//y = N(y) ? y : 50
	//r = N(r) ? r : _.ran(14) + 8
	c = oO('c', c || 'y')
	return w.bump(x, y, r, g.o).bS2($cGx(r, c))
}// = w.circStat = w.cSt
w.BAL=w.BALL = function (x, y, r, c) {
	var w = this
	return w.ball(x, y, r).bS2(w.st.cir(x, y, r, c))
} //= w.circ = w.circColor
w.BOX = function (x, y, wd, ht, c) {
	var w = this, g = G(arguments), b, i, o
	b = w.box(x, y, wd, ht)
	b.lD(2)
	if (g.n || g.m) {
		b.mS()
	}
	if (g.p || g.m) {
		b.mBu()
	}
	i = $rGx(wd, ht, oO('c', c || 'y'))
	i.XY(g.f, g.s)
	w.st.A(i)
	b.bS2(i)
	return b
}//w.REC= w.rect = w.rectCol  =
w.BRK=w.BRICK = function (x, y, wd, ht, col) {
	var w = this
	x = N(x) ? x : 200
	y = N(y) ? y : 50
	wd = N(wd) ? wd : 50
	ht = N(ht) ? ht : wd
	col = oO('c', col || $r())
	return w.brick(x, y, wd, ht)
			.bS2(
			$rGx(wd, ht, col).XY(x, y)
	).lD(2)
}//w.rSt = w.recStat = w.rectStat =w.rSt = w.recStat = w.rectStat = 
w._BRICK_ = function (x, y, wd, ht, col) {
	var w = this
	col = oO('c', col || $r())
	return w.brick(x, y, wd, ht, '-').bS2(
			$rGx(wd, ht, col).XY(x, y).al(.5)
	).lD(2)
}//w.BRICKSENSOR =  w.rectSensor = w.rSn = w.recSen = 
w.POLY = function (x, y, arrs) {
	alert('w.poly verts vs  worldcreate.js')
	var w = this
	var b = w.D(x, y)
	_.e(arrs, function (arr) {
		b.POLY(arr[0], _.r(arr))
	})
	return b
} //w.poly = w.verts = w.vs =
w.gradBall = function (x, y, r, col1, col2, stop1, stop2) {
	stop1 = N(stop1) ? stop1 : 0
	stop2 = N(stop2) ? stop2 : 1
	col1 = oO('c', col1);
	col2 = oO('c', col2)
	return this.ball(x, y, r).bS2(
			this.s.shape(x, y).rG([col1, col2], [stop1, stop2],
					0, 0, 0, 0, 0, r).dc(0, 0, r))
}
w.vsK = w.vertsKin = function (x, y, arrs) {
	var b = this.kin(x, y)
	_.e(arrs, function (arr) {
		b.convex(arr[0], _.r(arr))
	})
	return b
}
//w.FixBody=function(x,y){return this.addBody(  dBD(x,y),fix())}
w.K = w.kin = function (x, y, fD) {
	if (O(x)) {
		fD = y;
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 500;
	y = N(y) ? y : 250
	return w.A($kB(x, y), fD)
}
w.pBul = w.polyBul = function (x, y, wd, ht, c) {
	alert('w.pBul polyBul worldcreate.js')
	var w = this
	var bul = w.bul(x, y)
	bul.poly(wd, ht)
	if (c) {
		bul.bS2($rGx(wd, ht, oO('c', c))
				.XY(x, y).a2(w.s))
	}
	return bul
}
w.arr = function () {
	var g = G(arguments)
	var b = this.D(g.f, g.s)
	b.f($fD($aH.apply($aH, g.fo ? g.r : g.t)))
	return b
}
w.eg = w.edge = function (a, b, c, d) {
	var w = this
	var eg = w.B( $sB(0, 0) )
	eg.f($eF(a, b, c, d))
	return eg
}
function iterQuery() {
	w.bs = w.e = w.eB = function () {
		var w = this, g = G(arguments), o, b
		//can pass a cb to be run on EACH body
		//can also pass a k to restrict cb to
		//run only on  bodies.of(k)  
		o = g.S_ ? {k: g.f, fn: g.s} : {fn: g.f, k: g.s}
		b = w.B()
		 
		while (b) {
			b.kFn = function (k, fn) {
				var b = this, g = G(arguments), o
				o = g.F ? {fn: g.f} : {k: g.f, fn: g.s}
				if (b.of(o.k) && F(o.fn)) {
					o.fn(b)
				}
				return b
			}
			b = b.kFn(o.k, o.fn).GN() //if (b.of(o.k)) {o.fn(b)}; b = b.N()
		}
		return w
	}

//	w.qAB =
	w.qP = w.qPt = w.qPoint = function (fn, x, y) {
		return this.QP(fn, V(x, y, '-'))
	} //w.queryPoint = 
	w.bAt =w.bdAt = w.bdAtPt = w.atPt = function (x, y) {
		var w = this, g = G(arguments), o
		var selBd = null
		w.QA(function (f) {
					if (f.B().isDyn() && f.tPt(mX, mY)) {
						selBd = f.B();
						return false
					}
					return 1
				},
				$AB(x - .001, y - .001, x + .001, y + .001))
		return selBd ? selBd : 0
	}//w.getBodyAtPoint =
	w.e$ = w.b$ = function (fn) {
		var w = this
		w.eB(function (b) {
			b.$(fn)
		})
		return w
	}// = w.eachClick = w.bodyClick 
	w.eD = w.eDB = w.eDyn = function (fn) {
		return this.eB(function (b) {
			if (b.iD()) {
				fn(b)
			}
		})
	}
}
COL = function () {
	W(2)
	w.BUMP(100, 200, 25)
	w.BRICK(700, 200, 25)
	w.BALL(100, 100, 25)
	w.BOX()
	w.BOX(100)
	w.BOX(700, 300)
	b = w.BOX(700, 300, 25)
	w.BOX(700, 300, 25)
	w.BOX(700, 300, 25, 25)
	w.BUMP(100, 200, 25, 'r')
	w.BRICK(700, 200, 25, 'r')
	w.BALL(100, 100, 25, 'r')
	w.BOX(700, 100, 25, 'r')
}
function rand() {
	w.rnRecs = w.randRects = function () {
		var that = this
		_.t(30, function (i) {
			that.BRICK(
					M.r() * 1100 + 20,
					M.r() * 150 + 40,
					M.r() * 30 + 15,
					M.r() * 30 + 15
			).K('rR randomRect')
		})
		return this
	}
	w.rnF = w.randFx = function () {
		return this.dynamic(M.r() * 1000, 100,
				b2d.randomFixture())
	}
	w.random = w.addRandomBodies = function (howMany) {
		var w = this
		_.t(howMany || 10, function () {
			w.addRandomBody()
		})
		return w
	}
	w.addTenBalls = function (n) {
		var w = this
		_.t(n || 10, function (i) {
			w.ball(100 + (i * 80), 200)
		})
		return w
	}
	w.addHundBalls = function (n) {
		var w = this
		_.t(n || 100, function (i) {
			w.BALL(100 + (i * 8), 50, 10)
		})
		return w
	}
}
function moveAll() {
	w.toLeft = w.horiz = function (n) {
		n = N(n) ? n : 4
		return this.eB(function (b) {
			b.X(n, '-')
		})
	}
	w.up = w.toUp = w.vert = function (n) {
		n = N(n) ? n : 4
		this.eB(function (b) {
			b.Y(n, '-')
		})
	}
};
function sprit() {
	f.sp = function (sp) {
		var f = this
		if (U(sp)) {
			return f.sprite
		}
		f.sprite = sp
		return f
	}
	f.Sp = function (sp) {
		var f = this
		f.sprite = sp
		return sp
	}
}
old=function(){//w.ls = 
// f.B().gT() !=sB && f.gSh().tP(f.B().gTf(), bV(mX,mY))
}