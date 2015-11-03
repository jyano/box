 
mJD.sT = function (a, b) {
	var mJD=this
	mJD.target.Set(a, b)
	return mJD
 
}

mJD.mF = function (mF) {
	this.maxForce = mF;
	return this
}
//
mJ.ST = function(){
	 var mJ=this
	 mJ.SetTarget.apply(mJ, arguments); return mJ
 }
mJ.sT = function (a, b) {
	return this.ST( O(a)? a: V(a, b) )
}
mJ.tg = function (a, b) {
	return (U(a))? this.GetTarget(): this.sT(a,b)
}
mJ.sMF=function(mF){
	this.SetMaxForce(mF)
	return this
}
mJ.mF=function(fo){
	return U(fo)? this.GetMaxForce():
	this.sMF(fo)
}

$mJ = $mJD=  function (a, b) {var g = G(arguments)
	var jD = new b2d.MJD()
	if (a) {jD.A(a)}
	if (b) {jD.B(b)}
	return jD
} 


w.mJ= function (b) {
	var w=this, g = G(arguments)
	
	if( g.u){return 0}
	
	 var j =  w.CJ(
			$mJD(w.GGB(), b 
			)
					.sT(mX, mY)
					.mF(300// * b.mass()
					)
	)
	
	j.fq(.5)
	j.dm()
	j.mF(200000)
	
	// default freqency is 5!!, maxF 30000, dmRat .7
 
	$l('fq: '+ j.fq()+ ', dm: ' + j.dm()+ ', mF: ' + j.mF())

	return j
}


//spaz
w.killMJ = function () {
	var w = this
	if (w._mJ) {
		w.DJ(w._mJ);
		w._mJ = 0
	}
	return w
}

w.tgMJ = function () {
	var w = this
	
	var b= w.bAt(mX, mY)
	w._mJ = w._mJ? w._mJ: b? w.mJ(b): 0


	if (w._mJ) {
		w._mJ.ST(V(mX, mY))
	}
	
	return w
}


w.handleMJ = function () {
	var w = this
	w._mD ? w.tgMJ() : w.killMJ()
	return w
}

w.mSetup = function () {
	
	$.md(function (e) {
		var x = w.x
		var y = w.y
		
		w._mD = 1
		$mXY(e,x,y)
		$.mm(function(e){$mXY(e,x,y)})
		
		

// *** need to change to pagex(so can scroll page?).. 
// but i think it messes up for mobile
	})
	
	$.mu(function () {
		w._mD = 0
	})
}
$mXY = function (e, x, y) {
	mX = e.clientX / 30 - x / 30
	mY = e.clientY / 30 - y / 30
}
