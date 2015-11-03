
function bods() {
	jD.sA = jD.SBA = jD.sBA = function (a) {
		this.bodyA = a;
		return this
	}
	jD.sB = jD.SBB = jD.sBB = function (b) {
		this.bodyB = b;
		return this
	}
	jD.AB = jD.sAB = function (a, b) {
		this.A(a)
		this.B(b)
		return this
	}
	jD.gA = function () {
		return this.bodyA
	}
	jD.gB = function () {
		return this.bodyB
	}
	jD.A = function (a) {
		return U(a) ? this.gA() : this.sA(a)
	}
	jD.B = function (b) {
		return U(b) ? this.gB() : this.sB(b)
	}
	j.A = j.gA = j.bA = j.GBA = function () {
		return this.GetBodyA()
	}
	j.B = j.gB = j.bB = j.GBB = function () {
		return this.GetBodyB()
	}
}
$L('bods', 'anc', 'mot','forc', 'rat', 'spg','speed','tor','mot')
/*
 bodyA : b2Body
 The first attached body.
 b2JointDef
 bodyB : b2Body
 The second attached body.
 b2JointDef
 collideConnected : Boolean
 Set this flag to true if the attached bodies should collide.
 b2JointDef
 type : int
 The joint type is set automatically for concrete joint types.
 b2JointDef
 userData : *
 Use this to attach application specific data to your joints.
 b2JointDef

 */ 
function anc() {
	jD._gLAA = function () {
		return this.localAnchorA
	}
	jD._gLAB = function () {
		return this.localAnchorB
	}
	jD._sLAA = function (aA) {
		this.localAnchorA = aA;
		return this
	}
	jD._sLAB = function (aB) {
		this.localAnchorB = aB;
		return this
	}
	jD.XYA = jD.LAA = function (aA) {
		return U(aA) ? this._gLAA() :
				this._sLAA(aA)
	}
	jD.XYB = jD.LAB = function (aB) {
		var jD = this
		return U(aB) ? jD._gLAB() : jD._sLAB(aB)
	}
	jD.xyA = jD.vA = jD.aA = jD.ancA = jD.lAA = function (aA, y) {
		var jD = this
		return U(aA) ? jD.XYA().m() :
				jD.XYA(  O(aA)? aA.d(): V00(aA, y).d()  )
	}
	
	jD.xyB = jD.vB = jD.aB = jD.ancB = jD.lAB = function (aB, y) {
		var jD = this
		return U(aB) ? jD.XYB().m() :
		 jD.XYB(V00(aB, y).d())
	}
	jD.xyAB = jD.v = jD.vAB = function (aX, aY, bX, bY) {
		var dJ = this
		dJ.xyA(aX, aY)
		dJ.xyB(bX, bY)
		return dJ
	}
	j.GAB = function () {
		return this.GetAnchorB()
	}  //world coords
	j.GAA = function () {
		return this.GetAnchorA()
	}
	j.xyA = j.vA = j.aA = j.a = j.ancA = function () {
		return this.GAA().m()
	}
	j.xyB = j.vB = j.aB = j.b = j.ancB = function () {
		return this.GAB().m()
	}
}
 
function speed(){
	jD.mS = jD.speed = function (sp) {
		if (U(sp)) {
			return this.motorSpeed
		}
		this.motorSpeed = sp;
		return this
	}
	jD.mMS = function (sp) {
		if (U(sp)) {
			return this.maxMotorSpeed
		}
		this.maxMotorSpeed = sp
		return this
	}
	j.SMS = function (sp) {
		var j = this
		j.SetMotorSpeed(sp)
		return j
	}
	j.GMS = function () {
		return this.GetMotorSpeed()
	}
	
	j.mSp=j.sp = j.mS = j.MS = j.spd = j.speed = function (sp) {
		return U(sp) ? this.GMS() : this.SMS(sp)
	}
	
	 
	
}
function forc() {
	jD._sMF = function () {
		this.maxForce = mF
		return this
	}
	jD.MF = jD.mF = function (mF) {
		return U(mF) ? this.maxForce :
				this._sMF(mF)
	}
	
	j.SMMF= j.mxFo = j.maxForce = j.mMF = j.mF = function ( ) {
		this.SetMaxMotorForce.apply(this, arguments)
		return this
	}
	
	j.GRF = function (fo) {
		return this.GetReactionForce(fo)//inv_dt)//(Num)b2Vec2 // Get the reaction force on body2 at the joint anchor in Newtons.
		//GetReactionTorque(inv_dt)//:Number // reaction torque on body2 in N.
	}
 
	/*
	 localAnchorA - the point in body A around which it will rotate
	 localAnchorB - the point in body B around which it will rotate
	 referenceAngle - an angle between bodies considered to be zero for the joint angle
	 enableLimit - whether the joint limits will be active
	 lowerAngle - angle for the lower limit
	 upperAngle - angle for the upper limit
	 enableMotor - whether the joint motor will be active
	 motorSpeed - the target speed of the joint motor
	 maxMotorTorque - the maximum allowable torque the motor can use
	 */
}

function tor(){
	 

}

jD.sRA = function (an) {
	this.referenceAngle = an
	return this
}
jD.gRA = function (an) {
	return this.referenceAngle
}
jD.rA = jD.refAng = function (an) {
	return U(an) ? M.tD(this.gRA()) : this.sRA(M.tR(an))
}
jD.ax = jD.axis = jD.lXA = function (a) {
	this.localAxisA = a;
	return this
}
 
function spg() {
	len();
	freq();
	dmpRa()
	function len() {
		jD.sL = jD.sLen = function (l) {
			this.length = l;
			return this
		}
		jD.l = jD.len = function (l) {
			return U(l) ? this.length * 30 : this.sLen(l / 30)
		}
		j.SL = function (l) {
			this.SetLength(l);
			return this
		}
		j.GL = function () {
			return this.GetLength()
		}
		j.L = j.Len = function (l) {
			return U(l) ? this.GL() : this.SL(l)
		}
		j.sLen = function (l) {
			return U(l) ? this : this.SL(l / 30)
		}
		j.gL = function () {
			return this.GL() * 30
		}
		j.l = j.len = function (l) {
			return U(l) ? this.gL() :
					this.sLen(l)
		}
	}
	
	function freq() {
		jD.sFq = function (fq) {
			this.frequencyHz = fq
			return this
		}
		jD.gFq = function () {
			return this.frequencyHz
		}
		jD.f = jD.fq = jD.frq = jD.freq = function (fq) {
			return U(fq) ? this.gFq() : this.sFq(fq)
		}
		j.SF = function (fq) {
			this.SetFrequency(fq);
			return this
		}
		j.GF = function () {
			return this.GetFrequency()
		}
		j.f = j.frq = j.fq = j.freq = function (fq) {
			return U(fq) ? this.GF() : this.SF(fq)
		}
	}
	
	function dmpRa() {
		jD.sDR = function (dR) {
			this.dampingRatio = dR
			return this
		}
		jD.dR = jD.d = jD.dm = jD.dmp = jD.damp = function (dR) {
			return U(dR) ? this.dampingRatio : this.sDR(dR)
		}
		j.GDR = function () {
			return this.GetDampingRatio()
		}
		j.SDR = function (dR) {
			this.SetDampingRatio(dR);
			return this
		}
		j.dR = j.d = j.dm = j.dmp = j.damp = function (dR) {
			return U(dR) ? this.GDR() : this.SDR(dR)
		}
	}
}
function _pre() {
	b2d.DJD = b2d.Joints.b2DistanceJointDef
	jD = jd = b2d.Joints.b2JointDef.prototype
	j = b2d.Joints.b2Joint.prototype
	dJD = jd = b2d.Joints.b2DistanceJointDef.prototype
	dJ = b2d.Joints.b2DistanceJoint.prototype
	j = b2d.J.prototype
	$roygbiv = function () {
		r = reFr(300, 'r')
		o = reFr(400, 'o')
		y = reFr(500, 'y')
		g = reFr(600, 'g')
		b = reFr(600, 'b')
		i = reFr(800, 'i')
		v = reFr(900, 'v')
		function reFr(x, c) {
			return w.BALL(x, 300, 12, c).re(1).fr(.1)
		}
	} //= b2d.colBalls = b2d.colorBalls
	j.W = function () {
		return this.A().W()
	}
	j.N = j.GN = function () {
		return this.GetNext()
	}
	j.ty = j.GT = function () {
		return this.GetType()//:int Get the type of the concrete joint.
	}
	j.IA = j.IAc = function () {
		return this.IsActive()
	}  //Short-cut function to determine if either body is inactive.
	w.CJ = w.J = w.joint = w.j = w.cJ = function (jD) {
		return this.CreateJoint(jD)
	}
	w.DJ = w.dj = b.dsJt = b.dsJ = function (j) {
		this.DestroyJoint(j);
		return this
	}
	w.GJC = function () {
		return this.GetJointCount()
	}
	w.GJL = b.jtLs = b.jLs = b.jL = function () {
		return this.GetJointList()
	}
	b.jts = b.js = function (fn) {
		var b = this
		var jts = []
		var je = b.GJL()
		while (je) {
			jts.push(je.joint)
			je = je.next
		}
		if (F(fn)) {
			_.e(jts, function (j, k) {
				fn(j, k, jts)
			})
			return b
		}
		return jts
	}
	b.jt = function () {
		return this.GJL().joint
	}
	b.dsJ = b.rmJ = function () {
		var b = this, w = b.W()
		return b.jts(function (j) {
			w.DJ(j)
		})
	}//b.rmJts = b.dsJts = 
	function clCn() {
		jD.sCC = function (a) {
			this.collideConnected = a;
			return this
		}//collideConnected  
		jD.cC = jD.cl = function (a) {
			return U(a) ? this.collideConnected : this.sCC(a ? true : false)
		}
		jD.cC1 = jD.cl1 = function () {
			return this.cC(1)
		}
		jD.cC0 = jD.cl0 = function () {
			return this.cC(0)
		}
		jD.in = jD.init = function () {//joint.i=
			this.Initialize.apply(this, arguments)
			return this
		}
	}
	function userD() {
		j.GUD = function () {
			this.GetUserData();
		}
		j.SUD = function (d) {
			this.SetUserData(d)
			return this
		}
	}
	
	clCn()
	userD()
}
 
j.ds = j.destroy = function () {
	this.W().DestroyJoint(this)
	return this
}
j.in = j.i = j.init = function () {
	this.Initialize.apply(this, G(arguments))
	return this
}
function worCen() {
	jD.AWC = function () {
		return this.A().GWC()
	}
	jD.BWC = function () {
		return this.B().GWC()
	}
	jD.aWC = function () {
		return this.AWC().m()
	}
	jD.bWC = function () {
		return this.BWC().m()
	}
	jD._osA = function (x, y) {
		var jD = this
		var wC = jD.aWC()
		if (U(x)) {
			return wC
		}
		var v = V00(x, y)
		return wC.add(v)
	}
	jD._osB = function (x, y) {
		var jD = this
		var wC = jD.bWC()
		if (U(x)) {
			return wC
		}
		var v = V00(x, y)
		return wC.add(v)
	}
	jD.wA = jD.wAB = function (lAB) {
		return U(lAB) ? this.wPt(this.lAB()) :
				this.lPt(this.lAB(lAB))
	}
	jD.wB = jD.wAA = function (lAA) {
		return U(lAA) ? this.wPt(this.lAA()) :
				this.lPt(this.lAA(lAA))
	}
	jD.osA = jD.a = function (x, y) {
		return this.aA(this._osA(x, y))
	}
	jD.osB = jD.b = function (x, y) {
		return this.aB(this._osB(x, y))
	}
}

jD.eL = function (eL) {var jD = this
	if(U(eL)){return jD.enableLimit}
	jD.enableLimit = eL ? true : false;
	return jD
}
j.eL = function (eL) {
	this.EnableLimit(eL ? true : false)
	return this
}
j.l1 = function () {
	return this.eL(1)
}
j.l0 = function () {
	return this.eL(0)
}
j.GJT = j.GJTl = function () {

//box2d source:
//	var axis = this.m_bodyA.GetWorldVector(this.m_localXAxis1),
//			p1 = this.m_bodyA.GetWorldPoint(this.m_localAnchor1),
//			p2 = this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
//	return axis.x * (p2.x - p1.x) + axis.y * (p2.y - p1.y)
	var tl = this.GetJointTranslation.apply(this, arguments)
	return parseInt(tl)
}
j.val = function (v) {
	var j = this
	if (U(v)) {
		return j.GJT() * 30
	}
}

function mot(){
	jD._gEM = function () {
		return this.enableMotor
	}
	jD._sEM = function (eM) {
		this.enableMotor = eM
		return this
	}
	jD.EM = function (eM) {
		return U(eM) ? this._gEM() :
				this._sEM(eM ? true : false)
	}
	jD.m1 = function () {
		return this.EM(1)
	}
	jD.m0 = function () {
		return this.EM(0)
	}
	jD.mMF = function (a) {
		this.maxMotorForce = a;
		return this
	}
//slider and revolute
	jD.motor = jD.eM = function (a) {
		this.enableMotor = a ? true : false;
		return this
	}
	j.enabMot = function (a) {
		this.EnableMotor(a);
		return this
	}
	j.mot = function (speed, maxForce) {
		if (speed == '-') {
			this.EnableMotor(false);
			return this
		}
		speed = N(speed) ? speed : 100
		maxForce = N(maxForce) ? maxForce : 10000000
		this.enabMot(true).maxForce(maxForce).speed(speed)
	}
//slider
//j.maxForce= j.mMF=function(a){j.maxMotorForce = a;return j}
//slider and revolute
	j.motor = j.eM = function (a) {
		j.enableMotor = a ? true : false;
		return j
	}
	j.mt = j.motor = j.enableMotor = j.eM = function (a) {
		j.EnableMotor(a ? true : false)
		return j
	}
	j.sEM = function (eM) {
		this.EnableMotor(eM)
		return this
	}
	j.IME = function () {
		return this.IsMotorEnabled()
	}
	j.EM = function (eM) {
		return U(eM) ? this.IME() :
				this.sEM(eM ? true : false)
	}
	j.m1 = function () {
		return this.EM(1)
	}
	j.m0 = function () {
		return this.EM(0)
	}
}