$L()

blobX = 320;
blobY = 240;
parNum = 16;
parDst = 50;

w.sph= w.sphere = function (pX, pY, r) {var w=this
	var b = w.CB($dB(pX, pY))
	b.CF( $fD($cH(r) ).re(.4).fr(.5))
	return b
}

BLB = function(){W()
	
	Bs = [ w.sph(blobX, blobY, 15) ]
	Bs.sph = function(){
		this.push(w.sph.apply(w, arguments))
		return this
	}
	
	_.t(parNum, function (i) {
		var an = (2 * M.PI) / parNum * i;
		var posX = blobX + parDst * M.c(an);
		var posY = blobY + parDst * M.s(an);
		Bs.sph(posX, posY, 2)
		var dJ = $dJ( Bs[0], Bs[_.z(Bs) - 1]).l(parDst).dR(.5).fq(5)//dJ.lAA(V()).lAB(V())
		var dJt = w.CJ(dJ)
		
		if (i > 0) {var z = _.z(Bs)
			dJt = w.CJ(dJ.sAB(Bs[z - 2], Bs[z - 1])
			.l(M.sqrtSumSqr(posX - Bs[z - 2].X(), posY - Bs[z - 2].Y())))
			  //dJ.lAA(V()).lAB(V())
		}
		
		if (i == parNum - 1) {
			dJ.sAB(Bs[1], Bs[_.z(Bs) - 1])
			//dJ.localAnchorA = V(); dJ.localAnchorB = V()
			dJt = w.CJ(dJ.l(M.sqrtSumSqr(
					posX - Bs[1].X(), posY - Bs[1].Y()
			)))
		}
		
	})
}

 
 
DJD = function () {
	fps = 60;
	mouse_pressed =0
	mouse_joint = 0
	//box2d to cv scale , therefor 1 metre of box2d = 30px of cv :)
	sc = scale = 30;
	
	cv = $.c('X', 1000, 500).A()
	cv.attr('id', 'cv')
	ctx = cv[0].getContext('2d');
 
	w = createWorld();
 
	//internal dims of the cv
	cv_wd = parseInt(cv.attr('width'));
	cv_ht = parseInt(cv.attr('height'));
	cv_ht_m = cv_ht / scale;
	 
	$(cv).mousemove(function (e) {
		var p = get_real(V(e.pageX / scale, e.pageY / scale))
		mouse_x = p.x;
		mouse_y = p.y;
		if (mouse_pressed && !mouse_joint) {
			var b = GetBodyAtMouse();
			if (b) {
				//if joint exists then create

				var mD = new b2d.MJD()
				mD.A(ground).B(b)
				mD.target = p;
				mD.collideConnected = true;
				mD.maxForce = 1000 * b.GetMass();
				mD.dampingRatio = 0;
				mouse_joint = w.CJ(mD);
				 
			}
		}
	 
		if (mouse_joint) {
			mouse_joint.SetTarget(p);
		}
	});
	$(cv).mousedown(function () {
		//flag to indicate if mouse is pressed or not
		mouse_pressed = true;
	});
	 // When mouse button is release, mark pressed as false and delete the mouse joint if it exists
	$(cv).mouseup(function () {
		mouse_pressed = false;
		if (mouse_joint) {
			w.DJ(mouse_joint);
			mouse_joint = false;
		}
	});
	//start stepping
	step();
	
   
}
//Draw a w - this method is called in a loop to redraw the w
function draw_w(w ) {
	//convert the cv coordinate directions to cartesian coordinate direction by translating and scaling
	ctx.fillRect(0, 0, cv.W(), cv.H())
	ctx.save();
	ctx.translate(0, cv_ht);
	ctx.scale(1, -1);
	w.DDD();
	ctx.restore();
	ctx.font = 'bold 18px arial';
	ctx.textAlign = 'center';
	ctx.fillStyle = '#fff';
	ctx.fillText('Box2d Distance Joint example in Javascript', cv_wd / 2, 20);
	ctx.font = 'bold 14px arial';
	ctx.fillText('Click on any object and drag it', cv_wd / 2, 40);
}
 
function createWorld() {
	w = new b2d.W(V(0, -10), true)
	w.SDD($dD().sp(ctx).sc(sc).fA(1).fl(b2d.hB | b2d.jB))
	ground = box(w, 8.5, 2, 16, 1, {type: b2d.sB});
	a = box(w, 6.50, 3.8, 1, 1);
	b = box(w, 10.5, 3.8, 1, 1);
	c = ball(w, 8.5, 3.8, 1);
	return w.aJ($dJ(b, c).cl1().l(100));
}



//Function to create a round ball, sphere like object
function ball(w, x, y, rad, op) {
	op = $.x(true, {'de': 1, 'fr': 1, 're': 0.5, 'type': b2d.B.b2_dynamicBody}, op);
   return  w.D(x, y).A( $cF(rad*30)).de(op.de || 1).fr(.5).re(.5) 
	
}
b.A=function(){

	var b=this,g=G(arguments)
	g.e(function(f){
		b.f(f)
	})
	return b
}



//Create standard boxes of given ht , wd at x,y

function box(w, x, y, wd, ht, op) {
 
	op = $.x(true, {
		de: 1, fr: 1, re: .5,
		type: b2d.B.b2_dynamicBody
	}, op);
	
	var bD =$bD(x,y).ty(op.type), fD = $fD();
	
	fD.de(op.de).fr( op.fr ).re( op.re ).H( $pH() )
	
	fD.shape.SAB(wd / 2, ht / 2);

	//bD.userData = op.user_data;
	var b = w.CB(bD);
	var f = b.CF(fD);
	return b;
}

/*
 This method will draw the w again and again
 called by settimeout , self looped
 */

function step() {w.St(timeStep = 1.0 / (fps * 0.8), 8, 3).CF(); draw_w(w, ctx); _.sT(step, 1000 / fps);}// 16.7ms


function get_real(p) {
	return V(p.x + 0, cv_ht_m - p.y);
}//Convert coordinates in cv to box2d w

function GetBodyAtMouse(includeStatic) {
	var mouse_p = V(mouse_x, mouse_y);
	var aabb = new b2AABB();
	
	aabb.lowerBound.Set(mouse_x - 0.001, mouse_y - 0.001);
	aabb.upperBound.Set(mouse_x + 0.001, mouse_y + 0.001);
	var b
	w.QA(function (f) {
		var h = f.H();
		if (!f.B().iS()   || includeStatic) {
			if (h.TP(f.B().tf(), mouse_p) ) {b = f.B();return 0}}
		return 1
	}, aabb);
	return b;
}
function _pre() {
	b2d.hB = b2d.hBit = b2d.shapeBit = b2d.DD.e_shapeBit
	b2d.jB = b2d.jBit = b2d.jointBit = b2d.DD.e_jointBit
	b2d.sB = b2d.B.b2_staticBody
	$.x = $.extend
	M.sumSqr = function (x, y) {
		return x * x + y * y
	}
	M.sqrtSumSqr = function (x, y) {
		M.sqrt(M.sumSqr(x, y))
	}

w.aJ = function (jD) {
	this.CJ(jD)
	return this
}
}