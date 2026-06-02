(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.drum = function() {
	this.initialize(img.drum);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1171,828);


(lib.washerdryer600 = function() {
	this.initialize(img.washerdryer600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,396,600);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.washerdryer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.washerdryer600();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,396,600);


(lib.textpoweredby = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGBiIAAhNIhUh2IASAAIBIBoIBKhoIARAAIhUB1IAABOg");
	this.shape.setTransform(175.725,72.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag9BIQgagdAAgqIAAgBQAAgoAbgdQAcggApAAQApAAAfAaIgKALQgbgXgkAAQgiAAgXAaQgXAZAAAkIAAAAQAAAnAXAZQAXAZAlgBQAkAAAbgWIAAg4IhCAAIAAgNIBQAAIAABLQgiAdgrABQgsAAgcgeg");
	this.shape_1.setTransform(154.575,72.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhHBHQgbgdAAgpIAAgBQAAgpAbgdQAdgfAqAAQArAAAcAfQAbAdAAApIAAAAQAAAqgbAdQgcAegrABQgrgBgcgegAg7g9QgYAZAAAkIAAAAQAAAlAYAaQAYAZAjAAQAkAAAYgZQAXgaAAgkIAAgBQAAgkgYgZQgYgagjAAQgjAAgYAag");
	this.shape_2.setTransform(131.8625,72.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhABiIAAjDIAPAAIAAC2IByAAIAAANg");
	this.shape_3.setTransform(112.025,72.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhHBHQgbgdAAgpIAAgBQAAgpAbgdQAdgfAqAAQArAAAcAfQAbAdAAApIAAAAQAAAqgbAdQgcAegrABQgrgBgcgegAg7g9QgYAZAAAkIAAAAQAAAlAYAaQAYAZAjAAQAkAAAYgZQAXgaAAgkIAAgBQAAgkgYgZQgYgagjAAQgjAAgYAag");
	this.shape_4.setTransform(90.7625,72.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABHBiIiKitIAACtIgNAAIAAjDIANAAICGCqIAAiqIAPAAIAADDg");
	this.shape_5.setTransform(67.8,72.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA/BiIAAhcIh9AAIAABcIgOAAIAAjDIAOAAIAABbIB9AAIAAhbIAOAAIAADDg");
	this.shape_6.setTransform(46.125,72.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag7BIQgcgdAAgqIAAgBQAAgpAcgdQAcgfApAAQAZABATAIQAQAIAQAPIgKAKQgegcgkAAQgiAAgYAZQgYAaAAAkIAAAAQAAAlAYAaQAYAZAiAAQAlAAAfgfIAKAKQgSARgQAIQgUAKgYAAQgpgBgcgdg");
	this.shape_7.setTransform(25.675,72.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhFBiIAAjDICKAAIAAANIh8AAIAABOIBvAAIAAAMIhvAAIAABPIB+AAIAAANg");
	this.shape_8.setTransform(6.05,72.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGBiIAAi2IhFAAIAAgNICXAAIAAANIhFAAIAAC2g");
	this.shape_9.setTransform(-12.925,72.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABNArIAAhDIghAwIgBAAIgigwIAABDIgJAAIAAhVIAKAAIAiAyIAhgyIAKAAIAABVgAg6ArIAAhLIgcAAIAAgKIBDAAIAAAKIgdAAIAABLg");
	this.shape_10.setTransform(177.6,37.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhFBiIAAjDICKAAIAAANIh8AAIAABNIBwAAIAAANIhwAAIAABOIB9AAIAAAOg");
	this.shape_11.setTransform(159.4,42.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgFBjIhXjFIARAAIBLC0IBNi0IAQAAIhXDFg");
	this.shape_12.setTransform(138.95,42.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgGBiIAAjDIANAAIAADDg");
	this.shape_13.setTransform(124.625,42.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AA9BiIg9hRIgBAAIg/AAIAABRIgPAAIAAjDIBSAAQAjAAAUATQAPAPAAAVIAAABQAAAYgRAPQgPANgaADIBBBUgAhAADIBBAAQAZAAAQgKQAQgMAAgVIAAgBQAAgUgPgLQgOgMgbAAIhCAAg");
	this.shape_14.setTransform(111.475,42.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhUBiIAAjDIBCAAQAsAAAeAcQAdAcAAApIAAAAQAAAqgdAcQgeAcgsAAgAhFBUIAzAAQAnABAZgZQAYgXAAgkIAAgBQAAgigYgZQgZgZgnAAIgzAAg");
	this.shape_15.setTransform(90.125,42.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGBiIAAi2IhFAAIAAgNICXAAIAAANIhFAAIAAC2g");
	this.shape_16.setTransform(69.725,42.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AA9BiIg9hRIgBAAIg/AAIAABRIgPAAIAAjDIBSAAQAjAAAUATQAPAPAAAVIAAABQAAAYgRAPQgPANgaADIBBBUgAhAADIBBAAQAZAAAQgKQAQgMAAgVIAAgBQAAgUgPgLQgOgMgbAAIhCAAg");
	this.shape_17.setTransform(51.325,42.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABSBjIgZg3IhyAAIgZA3IgPAAIBbjFIANAAIBbDFgAAzAfIgzhxIgzBxIBmAAg");
	this.shape_18.setTransform(29.425,42.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("ABOBiIAAipIhOBvIAAAAIhNhvIAACpIgPAAIAAjDIAPAAIBNBzIBOhzIAPAAIAADDg");
	this.shape_19.setTransform(6.2,42.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhHBGIAKgLQAeAdAnAAQAWAAAOgLQAOgLgBgRIAAgBQABgQgMgJQgMgKgggGQgjgHgPgMQgPgNAAgWIAAgBQAAgWASgPQARgPAcAAQAkAAAeAYIgJAMQgagWgfAAQgWAAgNALQgOAKAAAQIAAAAQAAARAMAJQAMAKAhAHQAiAGAPANQAPAMAAAWIAAABQAAAXgSAPQgTAPgcAAQgrAAgjgfg");
	this.shape_20.setTransform(-15,42.575);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgGBiIAAhOIhUh1IASAAIBIBoIBKhoIARAAIhUB1IAABOg");
	this.shape_21.setTransform(172.625,12.65);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhNBiIAAjDIBQAAQAiAAARARQANANAAASIAAABQAAAgghAOQAsALAAAjIAAABQAAAYgTAOQgUAPgfAAgAg+BUIBGAAQAZABAPgLQAPgLAAgSIAAgBQAAgmg8AAIhBAAgAg+gHIBAAAQAWAAAOgKQAOgLAAgTIAAAAQAAgRgNgJQgNgKgXAAIhBAAg");
	this.shape_22.setTransform(153.075,12.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhUBiIAAjDIBCAAQAsAAAeAcQAdAcAAApIAAAAQAAAqgdAcQgeAcgsAAgAhFBUIAzAAQAnAAAZgYQAYgYAAgkIAAAAQAAgjgYgYQgZgYgnAAIgzAAg");
	this.shape_23.setTransform(123.525,12.65);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhGBiIAAjDICLAAIAAAOIh8AAIAABMIBvAAIAAANIhvAAIAABOIB+AAIAAAOg");
	this.shape_24.setTransform(103.35,12.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AA9BiIg9hRIgBAAIg/AAIAABRIgPAAIAAjDIBSAAQAjAAAUATQAPAPAAAVIAAABQAAAYgRAPQgPANgaAEIBBBTgAhAADIBBAAQAZABAQgLQAQgMAAgVIAAgBQAAgUgPgLQgOgLgbAAIhCAAg");
	this.shape_25.setTransform(84.075,12.65);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhGBiIAAjDICLAAIAAAOIh8AAIAABMIBvAAIAAANIhvAAIAABOIB+AAIAAAOg");
	this.shape_26.setTransform(64.4,12.65);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AA5BjIg5ipIg4CpIgMAAIhHjEIAQAAIA+CtIA5iuIAKAAIA6CuIA9itIAPAAIhHDEg");
	this.shape_27.setTransform(39.025,12.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhHBHQgbgdAAgqIAAAAQAAgpAbgdQAdgfAqABQArgBAcAfQAbAdAAApIAAAAQAAAqgbAdQgcAfgrgBQgrABgcgfgAg7g+QgYAZAAAlIAAAAQAAAlAYAZQAYAaAjAAQAkAAAYgaQAXgYAAgmIAAAAQAAgkgYgZQgYgagjAAQgjAAgYAZg");
	this.shape_28.setTransform(11.7125,12.65);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhHBiIAAjDIBHAAQAgAAAUAQQAUAQAAAcIAAABQAAAdgXAQQgVAQggAAIg1AAIAABJgAg5ALIA2AAQAbAAAQgLQARgOAAgWIAAAAQAAgXgQgMQgQgMgaAAIg4AAg");
	this.shape_29.setTransform(-8.8,12.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.9,0,215.5,88.9);


(lib.textloveyourlaundry = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHBpIAAhTIhah+IAUAAIBNBvIBPhvIATAAIhaB+IAABTg");
	this.shape.setTransform(148.775,44.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABCBpIhChXIgBAAIhEAAIAABXIgPAAIAAjRIBXAAQAmAAAVAUQAQARAAAWIAAACQAAAYgSAQQgQAOgcAEIBGBagAhFAEIBGAAQAbAAARgMQARgNAAgWIAAAAQABgWgRgMQgQgNgcAAIhHAAg");
	this.shape_1.setTransform(128.05,44.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhaBpIAAjRIBGAAQAwAAAgAeQAfAeAAAsIAAAAQAAAtgfAeQggAegwAAgAhKBbIA2AAQAqAAAbgaQAagaAAgmIAAgBQAAglgagaQgbgbgqAAIg2AAg");
	this.shape_2.setTransform(105.125,44.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABMBpIiTi6IAAC6IgPAAIAAjRIAPAAICQC2IAAi2IAOAAIAADRg");
	this.shape_3.setTransform(81.1,44.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag9BTQgYgYAAgrIAAh6IAPAAIAAB4QAAAmAUAUQASAUAgAAQAhAAASgTQATgUAAglIAAh6IAQAAIAAB4QAAAsgYAZQgXAYgnAAQgmAAgXgYg");
	this.shape_4.setTransform(57.85,44.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABYBqIgag7Ih7AAIgbA7IgRAAIBijTIAPAAIBiDTgAA3AhIg3h5Ig3B5IBuAAg");
	this.shape_5.setTransform(34.6,44.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhFBpIAAjRIAQAAIAADDIB7AAIAAAOg");
	this.shape_6.setTransform(14.25,44.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ABCBpIhChXIAAAAIhFAAIAABXIgQAAIAAjRIBYAAQAmAAAVAUQAQARAAAWIAAABQAAAagSAQQgQAOgbADIBEBagAhFAEIBGAAQAbAAARgMQASgNAAgWIAAgBQAAgVgQgMQgQgNgdAAIhHAAg");
	this.shape_7.setTransform(165.35,13.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag9BTQgYgYAAgrIAAh6IAQAAIAAB4QgBAmAUAUQASAUAhAAQAgAAASgTQAUgUgBglIAAh6IAQAAIAAB4QAAAsgYAZQgXAYgnAAQgmAAgXgYg");
	this.shape_8.setTransform(142.3,13.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhMBMQgdgfAAgtIAAAAQAAgrAdggQAfghAtAAQAuAAAfAhQAcAfAAAsIAAAAQAAAsgdAgQgeAhgugBQguABgeghgAhAhCQgZAbAAAnIAAAAQAAAnAaAcQAaAbAlABQAngBAZgbQAZgbAAgoIAAAAQAAgmgZgcQgagbgmAAQgmgBgaAcg");
	this.shape_9.setTransform(118.1625,13.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgHBpIAAhTIhah+IAUAAIBNBvIBPhvIATAAIhaB+IAABTg");
	this.shape_10.setTransform(94.675,13.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhKBpIAAjRICUAAIAAAOIiFAAIAABTIB3AAIAAANIh3AAIAABUICHAAIAAAPg");
	this.shape_11.setTransform(65.5,13.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGBqIhcjTIARAAIBRDAIBTjAIAQAAIhcDTg");
	this.shape_12.setTransform(43.6,13.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhMBMQgdgfAAgtIAAAAQAAgrAdggQAfghAtAAQAuAAAfAhQAcAfAAAsIAAAAQAAAsgdAgQgeAhgugBQguABgeghgAhAhCQgZAbAAAnIAAAAQAAAnAaAcQAaAbAlABQAngBAZgbQAZgbAAgoIAAAAQAAgmgZgcQgagbgmAAQgmgBgaAcg");
	this.shape_13.setTransform(19.6125,13.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhFBpIAAjRIAQAAIAADCIB7AAIAAAPg");
	this.shape_14.setTransform(-1.65,13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.7,0,191.2,61.4);


(lib.fisherpaykellogowhitesvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fisher&paykel-logo-white.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqA8IAAh3IAgAAIAABdIA1AAIAAAag");
	this.shape.setTransform(194.1,6.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqA8IAAh3IBVAAIAAAaIg1AAIAAATIAxAAIAAAZIgxAAIAAAXIA1AAIAAAag");
	this.shape_1.setTransform(179.125,6.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARA8Igng1IAAA1IgfAAIAAh3IAfAAIABAzIAlgzIAkAAIgsA6IAuA9g");
	this.shape_2.setTransform(164.775,6.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPA8IAAgvIgthIIAjAAIAaAuIAbguIAhAAIguBIIAAAvg");
	this.shape_3.setTransform(148.925,6.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAgA8IgJgXIguAAIgJAXIgfAAIAyh3IAcAAIAxB3gAgNALIAaAAIgNgig");
	this.shape_4.setTransform(134.45,6.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgwA8IAAh3IAyAAQAVAAAMAKQAOAMAAAUQAAASgOALQgMALgVAAIgTAAIAAAlgAgRgCIARAAQASAAAAgPQAAgPgSgBIgRAAg");
	this.shape_5.setTransform(120.05,6.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgsAyQgOgMgBgSIAAgDQAAgZAWgOIgMgPIAAgXIBPAAIAAAaIgqAAIAfAoIAIgKIAgAAIgXAgIAYAeIghAAIgHgJQgOAMgSAAIgDAAQgQAAgNgLgAgfARQAAAHAGAGQAFAFAHAAIABAAQAJAAAGgGIgYgeQgKAGAAAMg");
	this.shape_6.setTransform(97.775,6.354);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAQA8IgcglIgHAAIAAAlIggAAIAAh3IAzAAQAUAAANAKQANAMAAAUQABAMgHAKQgIALgMADIAgApgAgTgCIARAAQAIgBAFgEQAFgEAAgGQAAgPgSgBIgRAAg");
	this.shape_7.setTransform(75.875,6.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgqA8IAAh3IBVAAIAAAaIg2AAIAAATIAxAAIAAAZIgxAAIAAAXIA2AAIAAAag");
	this.shape_8.setTransform(60.025,6.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAXA8IAAgwIgtAAIAAAwIgfAAIAAh3IAfAAIAAAtIAtAAIAAgtIAfAAIAAB3g");
	this.shape_9.setTransform(43.675,6.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgsA0IAAgeQATANAWABQARAAAAgKQAAgHgKgDIgSgFQgPgFgHgHQgIgIAAgOQAAgRANgKQANgLATAAQAUAAARAJIAAAdQgRgMgUAAQgPABAAAIQAAAHAKACIARAGQAgAKAAAYQAAASgPALQgNAKgUAAQgWAAgTgKg");
	this.shape_10.setTransform(27.875,6.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOA8IAAh3IAdAAIAAB3g");
	this.shape_11.setTransform(15.85,6.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgpA8IAAh3IBTAAIAAAaIg0AAIAAAZIAwAAIAAAZIgwAAIAAArg");
	this.shape_12.setTransform(4.2,6.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,198.4,12.5);


(lib.fisherpaykellogoblacksvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fisher&paykel-logo-black.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181716").s().p("AgqA8IAAh3IAgAAIAABdIA1AAIAAAag");
	this.shape.setTransform(194.1,6.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#181716").s().p("AgqA8IAAh3IBVAAIAAAaIg1AAIAAATIAxAAIAAAZIgxAAIAAAXIA1AAIAAAag");
	this.shape_1.setTransform(179.125,6.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#181716").s().p("AARA8Igng1IAAA1IgfAAIAAh3IAfAAIABAzIAlgzIAkAAIgsA6IAuA9g");
	this.shape_2.setTransform(164.775,6.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#181716").s().p("AgPA8IAAgvIgthIIAjAAIAaAuIAbguIAhAAIguBIIAAAvg");
	this.shape_3.setTransform(148.925,6.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#181716").s().p("AAgA8IgJgXIguAAIgJAXIgfAAIAyh3IAcAAIAxB3gAgNALIAaAAIgNgig");
	this.shape_4.setTransform(134.45,6.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#181716").s().p("AgwA8IAAh3IAyAAQAVAAAMAKQAOAMAAAUQAAASgOALQgMALgVAAIgTAAIAAAlgAgRgCIARAAQASAAAAgPQAAgPgSgBIgRAAg");
	this.shape_5.setTransform(120.05,6.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#181716").s().p("AgsAyQgOgMgBgSIAAgDQAAgZAWgOIgMgPIAAgXIBPAAIAAAaIgqAAIAfAoIAIgKIAgAAIgXAgIAYAeIghAAIgHgJQgOAMgSAAIgDAAQgQAAgNgLgAgfARQAAAHAGAGQAFAFAHAAIABAAQAJAAAGgGIgYgeQgKAGAAAMg");
	this.shape_6.setTransform(97.775,6.354);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#181716").s().p("AAQA8IgcglIgHAAIAAAlIggAAIAAh3IAzAAQAUAAANAKQANAMAAAUQABAMgHAKQgIALgMADIAgApgAgTgCIARAAQAIgBAFgEQAFgEAAgGQAAgPgSgBIgRAAg");
	this.shape_7.setTransform(75.875,6.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#181716").s().p("AgqA8IAAh3IBVAAIAAAaIg2AAIAAATIAxAAIAAAZIgxAAIAAAXIA2AAIAAAag");
	this.shape_8.setTransform(60.025,6.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#181716").s().p("AAXA8IAAgwIgtAAIAAAwIgfAAIAAh3IAfAAIAAAtIAtAAIAAgtIAfAAIAAB3g");
	this.shape_9.setTransform(43.675,6.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#181716").s().p("AgsA0IAAgeQATANAWABQARAAAAgKQAAgHgKgDIgSgFQgPgFgHgHQgIgIAAgOQAAgRANgKQANgLATAAQAUAAARAJIAAAdQgRgMgUAAQgPABAAAIQAAAHAKACIARAGQAgAKAAAYQAAASgPALQgNAKgUAAQgWAAgTgKg");
	this.shape_10.setTransform(27.875,6.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#181716").s().p("AgOA8IAAh3IAdAAIAAB3g");
	this.shape_11.setTransform(15.85,6.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#181716").s().p("AgpA8IAAh3IBTAAIAAAaIg0AAIAAAZIAwAAIAAAZIgwAAIAAArg");
	this.shape_12.setTransform(4.2,6.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,198.4,12.5);


(lib.drum_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.drum();
	this.instance.parent = this;
	this.instance.setTransform(-68,-12,0.7434,0.7434);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(117));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-12,870.5,615.5);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYAhIAAhBIAxAAIAAANIgjAAIAAANIAfAAIAAAMIgfAAIAAAOIAjAAIAAANg");
	this.shape.setTransform(58.325,-5.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVAZQgKgKAAgPIAAAAQAAgNAKgKQAKgKAOAAQAQAAAKAJIgJALQgIgHgJAAQgHAAgGAGQgFAGAAAIQAAAJAFAGQAGAGAIAAQAIAAAFgEIAAgJIgOAAIAAgMIAdAAIAAAcQgNAKgQAAQgOAAgKgJg");
	this.shape_1.setTransform(50.275,-5.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AARAhIgfgpIAAApIgPAAIAAhBIAOAAIAeAoIAAgoIAPAAIAABBg");
	this.shape_2.setTransform(41.85,-5.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAUAhIgGgOIgbAAIgHAOIgOAAIAchBIANAAIAcBBgAAIAFIgIgUIgIAUIAQAAg");
	this.shape_3.setTransform(33.375,-5.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAMAhIgOgVIgLAAIAAAVIgPAAIAAhBIAeAAQAMAAAHAHQAGAFAAAKQAAAOgPAGIARAXgAgNAAIAOAAQAFAAADgDQADgCAAgEIAAgBQAAgJgMAAIgNAAg");
	this.shape_4.setTransform(25.425,-5.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYAhIAAhBIAxAAIAAANIgjAAIAAANIAfAAIAAAMIgfAAIAAAOIAjAAIAAANg");
	this.shape_5.setTransform(13.875,-5.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AANAhIAAgaIgaAAIAAAaIgOAAIAAhBIAOAAIAAAaIAaAAIAAgaIAPAAIAABBg");
	this.shape_6.setTransform(5.95,-5.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGAhIAAg0IgVAAIAAgNIA3AAIAAANIgVAAIAAA0g");
	this.shape_7.setTransform(-1.725,-5.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgYAhIAAhBIAxAAIAAANIgjAAIAAANIAfAAIAAAMIgfAAIAAAOIAjAAIAAANg");
	this.shape_8.setTransform(-12.675,-5.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAMAhIgOgVIgLAAIAAAVIgPAAIAAhBIAeAAQAMAAAHAHQAGAFAAAKQAAAOgPAGIARAXgAgNAAIAOAAQAFAAADgDQADgCAAgEIAAgBQAAgJgMAAIgNAAg");
	this.shape_9.setTransform(-20.175,-5.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgYAYQgKgJAAgPIAAAAQAAgNAKgKQAKgKAOAAQAPAAALAKQAJAJAAAOQAAAOgKAKQgKAKgPAAQgOAAgKgKgAgNgOQgGAGAAAIQAAAJAGAGQAGAGAHAAQAJAAAGgGQAFgGAAgJIAAAAQAAgIgFgGQgGgGgJAAQgIAAgFAGg");
	this.shape_10.setTransform(-28.875,-5.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgXAhIAAhBIAOAAIAAA0IAhAAIAAANg");
	this.shape_11.setTransform(-36.55,-5.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgZAhIAAhBIAaAAQAMAAAHAGQAGAGAAALQAAAKgIAGQgHAGgLAAIgLAAIAAAUgAgLAAIALAAQAFAAADgCQAEgCAAgFQAAgFgEgCQgDgDgFAAIgLAAg");
	this.shape_12.setTransform(-43.625,-5.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAPAhIgPgXIgOAXIgRAAIAXghIgWggIARAAIANAVIAOgVIARAAIgWAgIAXAhg");
	this.shape_13.setTransform(-51.525,-5.825);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgYAhIAAhBIAxAAIAAANIgjAAIAAANIAfAAIAAAMIgfAAIAAAOIAjAAIAAANg");
	this.shape_14.setTransform(-59.025,-5.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,0,3).p("ApNiGISbAAIAAENIybAAg");
	this.shape_15.setTransform(-0.1534,-6.2305,1.4552,1.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0)").s().p("ApNCHIAAkNISbAAIAAENg");
	this.shape_16.setTransform(-0.1534,-6.2305,1.4552,1.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgYAhIAAhBIAxAAIAAANIgjAAIAAANIAfAAIAAAMIgfAAIAAAOIAjAAIAAANg");
	this.shape_17.setTransform(58.325,-5.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgVAZQgKgKAAgPIAAAAQAAgNAKgKQAKgKAOAAQAQAAAKAJIgJALQgIgHgJAAQgHAAgGAGQgFAGAAAIQAAAJAFAGQAGAGAIAAQAIAAAFgEIAAgJIgOAAIAAgMIAdAAIAAAcQgNAKgQAAQgOAAgKgJg");
	this.shape_18.setTransform(50.275,-5.825);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AARAhIgfgpIAAApIgPAAIAAhBIAOAAIAeAoIAAgoIAPAAIAABBg");
	this.shape_19.setTransform(41.85,-5.825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAUAhIgGgOIgbAAIgHAOIgOAAIAchBIANAAIAcBBgAAIAFIgIgUIgIAUIAQAAg");
	this.shape_20.setTransform(33.375,-5.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAMAhIgOgVIgLAAIAAAVIgPAAIAAhBIAeAAQAMAAAHAHQAGAFAAAKQAAAOgPAGIARAXgAgNAAIAOAAQAFAAADgDQADgCAAgEIAAgBQAAgJgMAAIgNAAg");
	this.shape_21.setTransform(25.425,-5.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgYAhIAAhBIAxAAIAAANIgjAAIAAANIAfAAIAAAMIgfAAIAAAOIAjAAIAAANg");
	this.shape_22.setTransform(13.875,-5.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AANAhIAAgaIgaAAIAAAaIgOAAIAAhBIAOAAIAAAaIAaAAIAAgaIAPAAIAABBg");
	this.shape_23.setTransform(5.95,-5.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgGAhIAAg0IgVAAIAAgNIA3AAIAAANIgVAAIAAA0g");
	this.shape_24.setTransform(-1.725,-5.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgYAhIAAhBIAxAAIAAANIgjAAIAAANIAfAAIAAAMIgfAAIAAAOIAjAAIAAANg");
	this.shape_25.setTransform(-12.675,-5.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAMAhIgOgVIgLAAIAAAVIgPAAIAAhBIAeAAQAMAAAHAHQAGAFAAAKQAAAOgPAGIARAXgAgNAAIAOAAQAFAAADgDQADgCAAgEIAAgBQAAgJgMAAIgNAAg");
	this.shape_26.setTransform(-20.175,-5.825);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgYAYQgKgJAAgPIAAAAQAAgNAKgKQAKgKAOAAQAPAAALAKQAJAJAAAOQAAAOgKAKQgKAKgPAAQgOAAgKgKgAgNgOQgGAGAAAIQAAAJAGAGQAGAGAHAAQAJAAAGgGQAFgGAAgJIAAAAQAAgIgFgGQgGgGgJAAQgIAAgFAGg");
	this.shape_27.setTransform(-28.875,-5.825);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgXAhIAAhBIAOAAIAAA0IAhAAIAAANg");
	this.shape_28.setTransform(-36.55,-5.825);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgZAhIAAhBIAaAAQAMAAAHAGQAGAGAAALQAAAKgIAGQgHAGgLAAIgLAAIAAAUgAgLAAIALAAQAFAAADgCQAEgCAAgFQAAgFgEgCQgDgDgFAAIgLAAg");
	this.shape_29.setTransform(-43.625,-5.825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAPAhIgPgXIgOAXIgRAAIAXghIgWggIARAAIANAVIAOgVIARAAIgWAgIAXAhg");
	this.shape_30.setTransform(-51.525,-5.825);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgYAhIAAhBIAxAAIAAANIgjAAIAAANIAfAAIAAAMIgfAAIAAAOIAjAAIAAANg");
	this.shape_31.setTransform(-59.025,-5.825);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("ApNCHIAAkNISbAAIAAENg");
	this.shape_32.setTransform(-0.1534,-6.2305,1.4552,1.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("EgQGAkEMAAAhIHMAgNAAAMAAABIHg");
	this.shape_33.setTransform(-0.0273,-233.729,1.4549,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_32},{t:this.shape_15},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_32},{t:this.shape_15},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_33}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-533.7,300,600);


(lib.blackoverlay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgXbAvHMAAAheNMAu3AAAMAAABeNg");
	this.shape.setTransform(150,298.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.9,300,603);


(lib.blackfooter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.639)","rgba(89,89,89,0.416)","rgba(255,255,255,0)"],[0,0.631,1],0,-88,0,88).s().p("A3bN4IAA7vMAu3AAAIAAbvg");
	this.shape.setTransform(150,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blackfooter, new cjs.Rectangle(0,-88.8,300,177.7), null);


(lib.gradientfooter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.blackfooter();
	this.instance.parent = this;
	this.instance.setTransform(150.1,172.95,1,1,0,0,0,150.1,60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,24.1,300,177.70000000000002);


(lib.DRUMANIMATION = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// drum
	this.instance = new lib.drum_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-0.05,0.88,0.88,0,0,0,389.9,307.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:389.8,regY:307.6,scaleX:1.53,scaleY:1.53,rotation:180,x:-2.95,y:1.1},360).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-720.5,-727.9,1508.9,1437);


// stage content:
(lib.FP014_DRUM_300x600_HALFPAGE = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_244 = function() {
		if(!this.alreadyExecuted){
		
		this.alreadyExecuted=true;
		
		this.loopNum=1;
		
		} else {
		
		this.loopNum++;
		
		if(this.loopNum==3){
		
		this.stop();
		
		}
		
		}
	}
	this.frame_264 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(244).call(this.frame_244).wait(20).call(this.frame_264).wait(1));

	// button
	this.instance = new lib.button();
	this.instance.parent = this;
	this.instance.setTransform(150,533.7);
	this.instance.alpha = 0;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(142).to({alpha:1},17).wait(85).to({alpha:0},18).wait(3));

	// text powered by
	this.instance_1 = new lib.textpoweredby("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(150.05,240,1,1,0,0,0,81.9,40);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(62).to({_off:false},0).to({alpha:1},9).to({startPosition:0},53).to({alpha:0},18).to({_off:true},1).wait(122));

	// text love your laundry
	this.instance_2 = new lib.textloveyourlaundry("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.05,138.05,1,1,0,0,0,81.9,40);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(142).to({_off:false},0).to({alpha:1},17).to({startPosition:0},85).to({alpha:0},18).wait(3));

	// logo black
	this.instance_3 = new lib.fisherpaykellogoblacksvg("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(150.1,52.5,0.86,0.86,0,0,0,99.4,6.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(124).to({_off:false},0).to({alpha:1},35).to({startPosition:0},85).to({alpha:0},19).wait(2));

	// logo white
	this.instance_4 = new lib.fisherpaykellogowhitesvg("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(150.1,52.5,0.86,0.86,0,0,0,99.4,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(124).to({startPosition:0},0).to({alpha:0},35).wait(85).to({startPosition:0},0).to({alpha:1},19).wait(2));

	// gradient overlay
	this.instance_5 = new lib.gradientfooter("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(149.95,75.9,1,1,0,0,0,150,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({startPosition:0},124).to({alpha:0},35).to({startPosition:0},85).to({alpha:1},19).wait(2));

	// washer dryer
	this.instance_6 = new lib.washerdryer("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(198,242,1,1,0,0,0,198,242);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(124).to({_off:false},0).to({x:157,alpha:1},35).to({x:102},42).to({startPosition:0},43).to({alpha:0},19).wait(2));

	// black overlay
	this.instance_7 = new lib.blackoverlay("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(51).to({_off:false},0).to({alpha:0.6484},11).to({startPosition:0},24).to({_off:true},74).wait(105));

	// DRUM ANIMATION
	this.instance_8 = new lib.DRUMANIMATION();
	this.instance_8.parent = this;
	this.instance_8.setTransform(151.35,311.5,1.1497,1.1497,0,0,0,0.1,0.1);

	this.instance_9 = new lib.drum_1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(151.15,311.45,1.0117,1.0118,0,0,0,389.7,307.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[]},160).to({state:[{t:this.instance_9}]},84).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162,287.9,730.9,323);
// library properties:
lib.properties = {
	id: '730E235E15EB4F86959DF1BD4C54309A',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/drum.jpg", id:"drum"},
		{src:"images/washerdryer600.jpg", id:"washerdryer600"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['730E235E15EB4F86959DF1BD4C54309A'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;