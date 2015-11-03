$L('topLev', 'dynamics', 'math', 'shapes', 'cxs', 'joints', 'cos', 'globl', 'ptFn')
function topLev() {
	b2d = Box2D //divide by 30 to get meters //all bx-obs have reg at center
	b2d.D = b2d.Dynamics
	b2d.C = b2d.Collision
	b2d.Cm = b2d.Common
	b2d.M = b2d.Math = b2d.Cm.Math
	b2d.Cxs = b2d.Contacts = b2d.D.Contacts
	b2d.Cos = b2d.Controllers = b2d.D.Controllers
	b2d.Js = b2d.Jts = b2d.Joints = b2d.D.Joints
	b2d.Hs = b2d.H = b2d.Shapes = b2d.C.Shapes
}
function dynamics() {
	b2d.W = b2d.World = b2d.D.b2World
	b2d.FD = b2d.FixtureDef = b2d.D.b2FixtureDef
	b2d.F = b2d.Fixture = b2d.fixture = b2d.D.b2Fixture
	b2d.B = b2d.Body = b2d.D.b2Body
	b2d.BD = b2d.BodyDef = b2d.bodyDef = b2d.D.b2BodyDef
	b2d.DD = b2d.DebugDraw = b2d.D.b2DebugDraw
}
function math() {
	b2d.V = b2d.V2 = b2d.Vec2 = b2d.M.b2Vec2
	b2d.AB = b2d.AABB = b2d.C.b2AABB
	b2d.M2 = b2d.Mat22 = b2d.M.b2Mat22
	b2d.M3 = b2d.Mat33 = b2d.M.b2Mat33
	b2d.WM = b2d.WorldManifold = b2d.C.b2WorldManifold
}
function shapes() {
	b2d.PH = b2d.PolygonShape = b2PolygonShape = b2d.H.b2PolygonShape
	b2d.CH = b2d.CircleShape = b2CircleShape = b2d.H.b2CircleShape
	b2d.MD = b2d.massData = b2MassData = b2d.H.b2MassData
}
function cxs() {
	b2d.Cx = b2d.Contact = b2d.Cxs.b2Contact
	b2d.CL = b2d.ContactListener = b2d.D.b2ContactListener
}
function joints() {
	b2d.JD = b2d.JtD = b2d.JointDef = b2d.Js.b2JointDef
	b2d.J = b2d.Jt = b2d.Joint = b2d.Js.b2Joint
	b2d.DJ = b2d.distanceJoint = b2d.Js.b2DistanceJoint
	b2d.MJD  = b2d.MouseJointDef = b2d.Js.b2MouseJointDef
	b2d.MJ = b2d.MouseJoint = b2d.Js.b2MouseJoint 
}


function cos() {
	b2d.Co = b2d.Controller = b2d.Cos.b2Controller
	b2d.CFC = b2d.ConstantForceController = b2d.Cos.b2ConstantForceController
	b2d.GC = b2d.GravityController = b2d.Cos.b2GravityController
	b2d.TDC = b2d.TensorDampingController = b2d.Cos.b2TensorDampingController
	b2d.CAC = b2d.ConstantAccellController = b2d.Cos.b2ConstantAccelController
	b2d.BC = b2d.BuoyancyController = b2d.Cos.b2BuoyancyController
}
function globl() {
	b2MouseJointDef = b2d.MJ
	b2AABB = b2d.AB
	b2DebugDraw = b2d.DD
	b2FixtureDef = b2d.FD
	b2BodyDef = b2d.BD
	b2Fixture = b2d.F
	b2Body = b2d.B
	b2World = b2d.W
}
function ptFn() {
	$pt = {}
	function core(){
	$pt.dD = b2d.DD.prototype
		$pt.v = b2d.Vec2.prototype
	$pt.l = $pt.cL = b2d.CL.prototype
	$pt.b = b2d.B.prototype
	$pt.f = b2d.F.prototype
	$pt.cx = b2d.Cx.prototype
	$pt.w = b2d.W.prototype
	$pt.bD = bD = b2d.BD.prototype
	$pt.fD = fd = b2d.FD.prototype
	}
 
	core()
	shapes()
	jts()
	cos()
	function jts() {
		$pt.jD = b2d.JD.prototype
		$pt.j = b2d.J.prototype
		
		$pt.mJD =$pt.mD= b2d.MJD.prototype
		$pt.mJ= b2d.MJ.prototype
	}
	function shapes() {
		$pt.bH = b2d.Hs.b2Shape.prototype;
		$pt.cH = b2d.CircleShape.prototype
		$pt.pH = b2d.PolygonShape.prototype
	}
	function cos() {
		$pt.co = b2d.Co.prototype
		$pt.gCo = b2d.GC.prototype
		$pt.bCo = b2d.BC.prototype
		$pt.fCo = b2d.CFC.prototype
		$pt.aCo = b2d.CAC.prototype
		$pt.tCo = b2d.TDC.prototype
	}
}

$PT = function () {
	function core(){
	dD = $pt.dD
	v = $pt.v
	w = $pt.w;
	fd = fD = $pt.fD;
	bD = $pt.bD;
	b = $pt.b;
	f = $pt.f
	cx = $pt.cx
	l = cL = $pt.l
	}
	core()
	cos()
	shapes()
	jts()
	function shapes() {
		bH = $pt.bH;
		cH = $pt.cH;
		pH = $pt.pH
	}
	function cos() {
		co = $pt.co;
		fCo = $pt.fCo;
		aCo = $pt.aCo;
		gCo = $pt.gCo
		tCo = $pt.tCo;
		bCo = $pt.bCo
	}
	function jts(){
	jD = $pt.jD
	j = $pt.j
	j = b2d.J.prototype
		
	mJD =  $pt.mJD
	mJ = $pt.mJ
	
	}
}
$PT()

