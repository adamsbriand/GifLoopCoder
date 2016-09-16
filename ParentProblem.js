function onGLC(glc) {
    glc.loop();
//     glc.size(400, 400);
     glc.setDuration(6);
     glc.setFPS(10);
//     glc.setMode('single');
//     glc.setEasing(false);
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    var maxLevels=16;
    var prnt;
    var size0=128, angle0=60, position0=100, variation0=1; 
    var percentSize=0.75, percentAngle=0.75, percentVariation=0.9;

    for(var iL=0; iL<maxLevels; ++iL) {
        
        var maxInRow=Math.pow(2,iL);
        var size     =size0     *Math.pow(percentSize,     iL),
            angle    =angle0    *Math.pow(percentAngle,    iL),
            variation=variation0*Math.pow(percentVariation,iL);
         
        var data = {
            fillStyle: color.hsva(0, 1, variation, 1),
            x: -0.5*size/3,  y: -0.5*size/3,
            w: size,
            h: size,
            rotation: [-angle0, angle0]
	    };
         
        if (iL==0) { data.x=0.5*width; data.y=0.5*height;}
        else { data.parent = prnt; }
         
// works for:
//   Rect, Circle, Arrow, Crescent, ArcSegment, Cube, 
//   Gear, Isobox, Isotube, Oval, Poly
//
// fails for:
//   Heart, BezierCurve, BezierSegment, Curve, 
//   CurveSegment, Grid, Line, Path
        prnt=list.addRect( data );
    }

}
