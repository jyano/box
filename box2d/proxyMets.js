
b.sr1 = b.s1 = b.mS = function () {
	return this.sSr(1)
}
b.sSr = function (sr) {
	var b = this
	b.fs(function (f) {
		f.sr(sr)
	})
	return b
}
b.sr = b.sens = function (sr) {
	var b = this
	if (U(sr)) {
		return b.f().iSr()
	}
	b.sSr(sr)
	return b
}
b.de = b.den = function (de) {
	var b = this//$l('b.de boxBody.js')
	if (U(de)) {
		return b.f().de()
	}
	b.e(function (f) {
		f.SetDensity(de)
	})
	return this.RMD()
}
b.de1 = function () {
	return this.de(1)
}
b.fr = b.fric = function (fr) {
	var b = this
	return D(fr) ?
			b.fs(function (f) {
				f.SetFriction(fr)
			}) :
			b.list().GetFriction()
}
b.re = b.rest = function (re) {
	var b = this
	return D(re) ? b.fs(function (f) {
		f.re(re)
	}) :
			b.f() ? b.f().GetRestitution() : false
}
b.rad = function (r) {
	var b = this, h = b.H()
	if (U(r)) {
		return h.rad()
	}
	h.rad(r);
	return b
}
b.H = function () {
	return this.f() && this.f().H()
}
b.ds = function () {
	var b = this
	b.W().DB(b)
	return b
} //= b.destroy

 