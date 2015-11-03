jD._sMMT = function (tor) {
	this.maxMotorTorque = tor
	return this
}
jD._gMMT = function () {
	return this.maxMotorTorque
}
jD.MMT = jD.mMT = function (tor) {
	return U(tor) ? this._gMMT() : this._sMMT(tor)
}

  rJ.SMMT =  function () {
	this.SetMaxMotorTorque.apply(null, arguments)
	return this
}
rJ.GMT = function () {
	return this.GetMotorTorque()
}
rJ.tor = rJ.mMT = function (tor) {
	return U(tor) ? this.GMT() : this.SMMT(tor)
}
w._car = function (x,bA,bB) {
	var w = this
	var car = w.box(x, 150, 90, 30)
	car.j1 =bA
	car.j2 =bB

	car.bal = function(x){
		var car=this,w=car.W()
		return w.rJ(w.bal(x, 150, 30), car)
		 
	}
	car.bA=function(x,mx,tor){
	var car=this
	car.j1 = car.bal(x).m1(mx, tor)
	return car}
	car.bB = function (x, mx, tor) {
		var car = this
		car.j2 = car.bal(x).m1(mx, tor)
		return car
	}
	return car

}


rJ.m1 = function (mMt, mSp) {
	var rJ = this
	rJ.EM(1)
	if (N(mMt)) {
		rJ.mMT(mMt)
	}
	if (N(mSp)) {
		rJ.mSp(mSp)
	}
	return rJ
}
w.car = function () {var w = this; return  w._car(150)
		.bA ( 150, 100, 120)
		.bB(100,40000, -500)}
w.rol = w.roller = function () {var w = this; return  w._car(250)
			.bA( 300, 1000000, 6)
			.bB(  200, 40, -500)
}


CAR =   function () {
	W(10).right.kill()
	w.roof.kill()
	w.floor.fr(.1)
	
	  
	w.dJ(w.ship(), w.car()).l(0)
	w.dJ(w.p('mar').XY(400,-200), w.rol()).l(0)
	 
	    
	_.ev(4, function () {
		w.rol()
	})
 
	
}
makeCar = function () {
	var car = w.box(240, 350, 90, 30)
	w.rev(w.bal(300, 400, 30), car).mot(4)
	w.rev(w.bal(200, 400, 30), car).mot(4)
	return car
}
CHANGEMOTOR = CMT = function () {
	W()
	j = w.Rev(
			w.baa(400, 280),
			w.bi(500, 280, 200, 40))
	j.speed(4).torque(1000000).mot(1)
	_.ev(4, function () {
		j.speed(-j.speed())
	})
	w.player('thrustGrav')
}
car = function (x, y, wheel1, wheel2) {
	wheel1 = wheel1 || 2
	wheel2 = wheel2 || wheel1
	var car = w.box(x, y, 90, 30).bS('me')
	w.rev(
			w.bal(x - 40, y + 50, 30), car).mot(wheel1)
	w.rev(
			w.bal(x + 60, y + 50, 30), car).mot(wheel2)
	return __car = car
}
CARS = function () {
	W()
	car(100, 350, -2, 2)
	car(440, 350, 2, -2)
	_.in(5, function () {
		car(440, 350, 4)
		car(540, 350, 2)
	})
}
WARPING = function () {
	W()
	w.p()
	w.b(function (cx) {
		var a = cx.A(), b = cx.B()
		cx.w('foot', 'tramp', function () {
			p.I(0, -150)
		})
		cx.w('feet', 'warp', function () {
			STATE.warping = true
		})
	})
	$t(function () {
		if (STATE.warping) {
			p.warpToTopLeft();
			STATE.warping = false
		}
	})
}
