FLOCKING = FLK = function () {
	
	//these just thrust and dont
	//otherwise apply forces to neighbors.  but what if
	//they 'SUCKED' instead of 'thrusted' ?
	//is that the same as having a gravitational inwards force?
	var w = b2d.W({g: 0})
	//  y = $ys(300, 200, 3).angDamp(0).linDamp(1)
	var n = 0
	_.times(40, function () {
		window['y' + n++] = w.yShip().chug()
	})
	y = w.yShip('o').thrustControl()
	_.times(40, function () {
		window['y' + n++] = w.yShip().chug()
	})
	I(function () {
		if (y.going()) {
			w.s.c.C('p')
		} else {
			w.s.c.C('z')
		}
	}, 100)
	w.debug()
}
TRAB = function () {
	w = b2d.W({g: 0}).debug();
	co = w.tensor();
	//  _.times(100, function(){co.body(w.circ(400,300, 15, 'w').lV(10,20).linDamp(0))})
	y = w.ship()
	rot = 45
	bg = w.yShip('blue', 500, 300).stat()
	bg.rotToVec = function (vec) {
		var wVec = bg.worldVec(vec),
				rot = vec.x / vec.y
		rot = 360 - (Math.abs(rot) * 10)
		$l(rot)
		this.rot(rot)
		return this
	}
	bg.rotTowardsShip = function () {
		var yX = y.X(), yY = y.Y(),
				bgX = bg.X(), bgY = bg.Y(),
				dX = bgX - yX,
				dY = bgY = yY,
				vec = V(dX, dY)
		this.rotToVec(vec)
	}
	cjs.tick(function () {
		bg.rotTowardsShip()
	})
}
GRAVITYRANGE = GRR = function () {
	w = b2d.W({g: 10})
	w.ball(100, 100, 50)
	w.ball(100, 200, 40)
	w.ball(100, 100, 50)
	w.ball(100, 200, 40)
	w.ball(100, 100, 50)
	w.ball(100, 200, 40)
	w.ball(100, 100, 50)
	w.ball(100, 200, 40)
	w.ball(100, 100, 50)
	w.ball(100, 200, 40)
	range = w.prism(
			w.brick(600, 300, 220, 20),
			w.box(600, 300, 20, 250).linDamp(10)
	).lm(-100, 100)
	w.show(function () {
		return 'Welcome to Gravity Range: Current gravity is ' + range.val()
	})
	y = w.yShip().thrustControl().angDamp(1).shootOnSpace()
	cjs.tick(function () {
		w.grav(range.val())
		y.linDamp(10)
	})
}
STABTRAP = function () {
	w = b2d.W({g: 0}).debug();
	co = w.tensor();
	//  _.times(100, function(){co.body(w.circ(400,300, 15, 'w').lV(10,20).linDamp(0))})
	y = w.ship()
	rot = 45
	bg = w.yShip('blue', 500, 300).stat().shootOnInt(200)
	bg.rotTowardsShip = function () {
		var yX = y.X(), yY = y.Y(),
				bgX = bg.X(), bgY = bg.Y(),
				dX = yX - bgX, dY = yY - bgY,
				ang = -Math.toDegrees(Math.atan(dX / dY))
		if (y.Y() > this.Y()) {
			ang += 180
		}
		this.rot(ang)
	}
	cjs.tick(function () {
		bg.rotTowardsShip()
	})
}
b.polyBul = function () {
	alert('polyBul')
	var vec = this.GetWorldVector(V(0, -100)), point = this.worldPoint(0, -50)
	bullet = this.W().polyBul(point.x, point.y, 4, 4, 'w').K('polyBul')
			.den(1).linDamp(0).linVel(vec.x / 5, vec.y / 5)
	w.end(function (cx) {
		cx.destroyIf('polyBul')
	})
	return bullet
}
w.yShipEquilateral = function (color, x, y, scale) {
	alert('w.yShipEquilateral')
	var halfSide, side, ship
	if (!S(color)) {
		scale = y;
		y = x;
		x = color;
		color = 'y'
	}
	color = oO('c', color)
	scale = N(scale) ? scale : 4
	halfSide = scale * 4
	side = halfSide * 2
	ship = this.dyn(x, y)
	ship.convex(color, [[-side, halfSide], [0, -side], [side, halfSide]])
	ship.poly(4, 20, 0, -side)  //w,h,x,y ..is that my preferred pam order? other places have x,y come first.. no?
	// ship.bindSprite2(  w.s.poly( 0,-side,   4,20, 'b'))
//        ship.bindSprite2(   cjs.rect(4,20,'o').XY(0,-side)    )
	/////////////
	ship.dir = function () {
		return this.wVec()
	}
	//methods
	ship.push = function (n) {
		var k, dir
		n = N(n) ? n : 1
		k = 0.1
		dir = this.wVec()
		this.I(
				dir.x * n * k,
				dir.y * n * k
		);
		return this
	}
	ship.chug = function (n) {
		var that = this
		I(function () {
			that.push(n)
		}, 100)
		return this
	}
	ship.going = function () {
		var lv = this.lV(), x = lv.x, y = lv.y, a = this.aV()
		return (M.abs(x) > 0.5) || (M.abs(y) > 0.5) || ( M.abs(a) > 0.5)
	}
	ship.shoot = function (kind) {
		kind = kind || 'bul'
		var vec, bullet, dist, y = this
		dist = y.wVec().mult(100)
		bullet = w.circ(y.X() + dist.x, y.Y() + dist.y, 6, 'w').K(kind)
		vec = y.GetWorldVector(V(0, -100))
		bullet.impulse(vec.x / 4, vec.y / 4)
		setTimeout(function () {
			bullet.kill()
		}, 400)
		return bullet
	}
	ship.shootOnSpace = function (kind) {
		var y = this
		$.space(function () {
			y.shoot(kind)
		})
		return this
	}
	ship.shootOnInt = function (int, kind) {
		var y = this, int = N(int) ? int : 1000
		setInterval(function () {
			if (y.IsActive()) {
				y.shoot(kind)
			}
		}, int)
		return this
	}
	return ship
}