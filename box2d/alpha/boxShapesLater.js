function edgeNotUsed() {
	b2d.edge = b2.edgeShape = function (v1, v2) {
		v1 = v1 || V(10, 10)
		v2 = v2 || V(1, 100)
		var edge = new b2d.Shapes.b2EdgeShape(v1, v2)
		return edge
	}
	b2d.chainDef = function () {
		return new b2d.Shapes.b2EdgeChainDef()
	}
}
  