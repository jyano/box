$eM = {}
$eM.fixts = function () {
	return w.D(100, 100, [
		[50, 200], //rect
		[100, 200, 100],  //circle shifted to the right by 100
		[100, 100, 300, 100], //rect shifted to the right by 100
		$cF(42),
		$rF(200, 100),
	])
}
//entity manager
$eM.pFs = function () {
	return w.D(500, 400, [
		$pF(20, 20, -100, 50, 60),
		$pF(100, 120, 0, 0, 100),
		$pF(100, 20),
		$pF(10, 300)
	])
}
$eM.compound = b2d.compoundShape = function () {
	return w.A($dB(300, 200), [
		$rF(50, 10),
		$rF(60, 30, 40),//$rF(60, 30, 0, 0, 40),
		$rF(120, 30, 29),//	$rF(120, 30, 0, 0, 29),
		$rF(60, 10, 0, 50, 60),
		$rF(84, 10, 15, 80, -120)])
}
$eM.compound2 = b2d.compoundShape2 = function () {
	return w.A($dB(300, 200), [
		$rF(50, 10),
		$rF(20, 20),
		$rF(20, 10, 10),
		$rF(40, 10, 50, 0, 45),
		$rF(84, 10, 15, 80, -120),
		$rF(60, 10, 0, 50, 60)
	])
}
$eM.star = b2d.compoundStar = function () {
	return w.A(
			$dB(300, 200), [
				$rF(10, 10),
				$cF(20),
				$rF(4, 80, 300, 300, 135),
				$rF(4, 80, 45),
				$rF(4, 80, 100, 0, 90),
				$rF(4, 80, 180)]
	)
}
//lets study how to make a circle
BALS = function () {
	W().G(50)
	w.addTenBalls();
	w.addMe();
	w.addMe();
	w.addMe()
}
// meet entity manager
//just for namepacing
//aF is great.. it will let u simply pass in an 
//array of arrays
// can use it with w.D.. example:
$eM.tri = function () {
	return w.D(400, 400, [
		// this does NOT work currently: [[230, 30], [20, 140], [10, 10]]
		//must use this
		$aF([230, 30], [20, 140], [10, 10])
	])
}
//*** NOTE: in b2dWEB use CW, not CCW
$show = function (what) {
	W()
	if (!S(what)) {
		return alert('must pass string')
	}
	fn = $eM[what]
	if (!fn) {
		return alert('$eM dont have that')
	}
	if (!F(fn)) {
		return alert('$eM have that but must be fn')
	}
	b = $eM[what]()
}
//must be LAST! really now ??
//b2d.triangleFixt =   $aF[-100,0], [0,-100 ], [100,0] )
//b2d.triangleFixt2 =  $aF[-200,0],[0,-200],[200,0])
//this is a premade fixture
//b2d.triangle3 = $aF([-100, 0], [0, -50], [400, 0])
b2d.fricky = function () {
	return w.A($dB(300, 200),
			[
				$pF(10, 10),
				$pF(20, 40, 0, 0, 90).f(0).r(0),
				$pF(20, 40, 0, 0, 180).f(0).r(0)])
}
b2d.bouncy = function () {
	return w.A($dB(300, 200), [$pF(10, 10),
		$pF(20, 40, 0, 0, 90).r(.9).f(1),
		$pF(20, 40, 0, 0, 180).r(.9).f(1)])
}
b2d.massy = function () {
	return w.A($dB(300, 200),
			[$pF(10, 10),
				$pF(20, 40, 0, 0, 90).d(2).f(1),
				$pF(20, 40, 0, 0, 180).d(2).f(1)])
}
b2d.fluffy = function () {
	return w.A(
			$dB(300, 200), [
				$pF(10, 10),
				$pF(20, 40, 0, 0, 90).d(.1).f(1),
				$pF(20, 40, 0, 0, 180).d(.1).f(1)]
	)
}
verts = [[-100, 0], [0, -100], [100, -20], [50, 20]]
maze = [
	[1, 0, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 1, 0, 1],
	[1, 0, 0, 0, 1, 0, 0, 0, 1],
	[1, 0, 1, 0, 1, 0, 1, 1, 1],
	[1, 0, 1, 0, 1, 0, 0, 0, 1],
	[1, 0, 1, 1, 1, 1, 1, 0, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1]]
guyInBed = [[30], [20, 30, 30], [100, 30]]
dick = [[50, 300, 0, -100], [50, 100, 150], [50, -100, 150]] //[b2d.poly(50, 300, 0,-100), b2d.circ(50, 100, 150), b2d.circ(50, -100, 150)]
w.grid = w.drawGrid = function (gd, x, y, l, spa) {
	var w = this //spacing
	var b = w.D(x, y)
	_.t(_.z(gd), function (rw) {
		_.t(_.z(_.f(gd)), function (c) {
			if (gd[c][rw]) {
				b.pF(l, l, rw * spa, c * spa);
			}
		})
	})
	return b.K('grid')
}
yA = yAr = yanofski = ['y', 'a', 'n', 'o', 'f', 's', 'k', 'i']
uA = usAr = users = [{'id': 1, 'name': 'Bob', 'last': 'Brown'},
	{'id': 2, 'name': 'Ted', 'last': 'White'},
	{'id': 3, 'name': 'Frank', 'last': 'James'},
	{'id': 4, 'name': 'Ted', 'last': 'Jones'}
]
	 
	