w.dJRopeBall=function(){var w=this
	var b = w.brk(255, 50, 60, 15, 'g') 
	var link = b
	for (var i = 1; i <= 10; i++) {
		b = w.brk(255, i * 30, 3, 15, 'w') 
		w.rJ(link, b)
		link = b
	}
	w.rJ(link, w.bal(255, 330, 20, 'w') )
	return w
}
w.mePyr=function() {var w=this
	_.t(8, function () {w.me().XY(700, 400)})
	_.t(4, function () {w.me().XY(700, 300)})
	_.t(1, function () {w.me().XY(700, 200)})
	return w
}
ROPB=function(){
	W(20).dJRopeBall()
}

KILL = function () {
	W(20).randRects().mePyr()//.dJRopeBall()
	//w.db()
	y = w.ship()
	w.cl( 'bul', function(f){
		this.B().kill()
		if (f && f.B() != y) {
			f.B().kill()
		}})
}

/*
 isHooked = false
 distJ = false
 hero = w.rect(320, 460, 20, 20, 'b')
 $can = superCanvas($(w.s.HUD.canvas))
 $can.MD(function (x, y) {
 w.QueryPoint(function (fixture) {
 var touchedBody = fixture.body()
 if (touchedBody.isStat()) {
 distJ = w.dist(hero, touchedBody, hero.GetWorldCenter(), V(x, y).div()) //collideConnected=true
 isHooked = true
 }
 return false
 }, V(x, y).div())
 }) //if(distJ){w.DestroyJoint(distJ)}
 $can.MU(function () {
 if (distJ) {
 w.DestroyJoint(distJ)
 }
 })   // if I release the mouse, I destroy the distance joint

 $t(function () {// as long as the hook is active, I shorten a bit joint distance
 if (isHooked) {
 hero.SetAwake(true) // BODY MUST BE AWAKE!!!!!!
 distJ.SetLength(distJ.GetLength() * 0.97)  //distJ.len(97,'%') //len('97%')
 }
 })
 */