(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.drum = function() {
	this.initialize(img.drum);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1171,828);


(lib.washerdryerMREC = function() {
	this.initialize(img.washerdryerMREC);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,360,250);// helper functions:

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
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.washerdryerMREC();
	this.instance.parent = this;
	this.instance.setTransform(-1,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-4,360,250);


(lib.textpoweredby = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFBYIAAhFIhLhqIAQAAIBABeIBCheIAQAAIhMBpIAABGg");
	this.shape.setTransform(165.7,66);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag2BAQgXgZAAgmIAAgBQAAgkAXgaQAZgcAlABQAlAAAbAWIgIAKQgZgVggAAQgeAAgVAYQgUAWAAAgIAAAAQAAAiAUAWQAVAXAhAAQAgAAAYgUIAAgyIg7AAIAAgLIBHAAIAABCQgeAbgnAAQgngBgYgag");
	this.shape_1.setTransform(146.825,66);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag/BAQgYgaAAglIAAgBQAAgkAYgaQAZgbAmAAQAnAAAZAbQAYAaAAAkIAAAAQAAAlgYAaQgaAbgmABQgmAAgZgbgAg1g3QgVAWAAAhIAAAAQAAAhAWAWQAVAYAfAAQAggBAWgWQAVgXAAggIAAgBQAAgggWgWQgVgYggAAQgfAAgWAXg");
	this.shape_2.setTransform(126.5375,66);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag5BYIAAivIANAAIAACiIBmAAIAAANg");
	this.shape_3.setTransform(108.825,66);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag/BAQgYgaAAglIAAgBQAAgkAYgaQAZgbAmAAQAnAAAZAbQAYAaAAAkIAAAAQAAAlgYAaQgaAbgmABQgmAAgZgbgAg1g3QgVAWAAAhIAAAAQAAAhAWAWQAVAYAfAAQAggBAWgWQAVgXAAggIAAgBQAAgggWgWQgVgYggAAQgfAAgWAXg");
	this.shape_4.setTransform(89.8375,66);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA/BYIh6ibIAACbIgNAAIAAivIAMAAIB4CYIAAiYIANAAIAACvg");
	this.shape_5.setTransform(69.325,66);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA4BYIAAhTIhvAAIAABTIgNAAIAAivIANAAIAABRIBvAAIAAhRIANAAIAACvg");
	this.shape_6.setTransform(49.95,66);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag1BAQgYgZAAgmIAAgBQAAgkAYgbQAagbAkABQAWAAARAHQAOAHAPAOIgJAJQgbgaggAAQgfAAgVAXQgVAWAAAhIAAAAQAAAhAVAXQAWAWAeABQAhAAAbgbIAJAIQgQAPgOAHQgSAJgWAAQgkAAgZgbg");
	this.shape_7.setTransform(31.675,66);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag+BYIAAivIB8AAIAAAMIhvAAIAABFIBkAAIAAALIhkAAIAABGIBwAAIAAANg");
	this.shape_8.setTransform(14.125,66);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGBYIAAijIg9AAIAAgMICGAAIAAAMIg8AAIAACjg");
	this.shape_9.setTransform(-2.85,66);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABFAnIAAg9IgeArIgCAAIgdgrIAAA9IgIAAIAAhNIAJAAIAdAtIAfgtIAJAAIAABNgAg0AnIAAhEIgZAAIAAgJIA8AAIAAAJIgaAAIAABEg");
	this.shape_10.setTransform(167.45,33.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag+BYIAAivIB8AAIAAANIhvAAIAABEIBkAAIAAALIhkAAIAABGIBwAAIAAANg");
	this.shape_11.setTransform(151.175,38.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgFBYIhNivIAPAAIBDCgIBFigIAOAAIhNCvg");
	this.shape_12.setTransform(132.925,38.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgGBYIAAivIANAAIAACvg");
	this.shape_13.setTransform(120.125,38.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AA3BYIg3hJIgBAAIg4AAIAABJIgNAAIAAivIBIAAQAgAAASASQANANAAAUQAAAVgPANQgNAMgYADIA6BLgAg5ADIA6AAQAWAAAOgKQAPgKAAgTIAAAAQAAgSgNgKQgOgKgXAAIg7AAg");
	this.shape_14.setTransform(108.375,38.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhKBYIAAivIA5AAQAoAAAbAZQAaAZAAAlIAAAAQAAAmgaAYQgbAZgoABgAg+BLIAtAAQAkABAWgXQAVgVAAggIAAAAQAAgfgVgVQgWgWgkAAIgtAAg");
	this.shape_15.setTransform(89.25,38.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgFBYIAAiiIg9AAIAAgNICGAAIAAANIg+AAIAACig");
	this.shape_16.setTransform(71,38.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AA3BYIg3hJIgBAAIg4AAIAABJIgNAAIAAivIBIAAQAgAAASASQANANAAAUQAAAVgPANQgNAMgYADIA6BLgAg5ADIA6AAQAWAAAOgKQAPgKAAgTIAAAAQAAgSgNgKQgOgKgXAAIg7AAg");
	this.shape_17.setTransform(54.575,38.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABJBYIgWgxIhmAAIgWAxIgOAAIBSivIALAAIBSCvgAAuAbIguhkIguBkIBcAAg");
	this.shape_18.setTransform(34.975,38.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("ABGBYIAAiXIhFBjIgBAAIhFhjIAACXIgMAAIAAivIALAAIBGBnIBGhnIANAAIAACvg");
	this.shape_19.setTransform(14.25,38.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag/A+IAIgKQAcAaAiAAQATAAANgJQAMgLAAgOIAAgBQAAgOgJgJQgLgIgegGQgegGgOgLQgOgLABgVIAAAAQgBgUARgNQAQgNAYAAQAgAAAbAVIgIALQgXgVgdAAQgSABgMAJQgMAKAAAOIAAAAQAAAPAJAIQAMAJAcAGQAfAGAOALQANALAAAUIAAAAQAAAWgQANQgRANgZAAQgmAAgfgcg");
	this.shape_20.setTransform(-4.7,38.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgFBYIAAhGIhMhoIARAAIBABcIBChcIAQAAIhMBoIAABGg");
	this.shape_21.setTransform(162.9,11.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhEBYIAAiuIBHAAQAeAAAQAPQALAMgBAPIAAABQAAAdgdAMQAnAKAAAgIAAAAQAAAWgRANQgRANgdAAgAg4BMIA/AAQAXAAANgKQANgKAAgQIAAAAQAAgjg1AAIg7AAgAg4gFIA6AAQATAAAMgKQANgKAAgQIAAgBQAAgPgLgIQgMgKgUABIg7AAg");
	this.shape_22.setTransform(145.45,11.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhLBYIAAiuIA7AAQAogBAaAZQAaAZgBAlIAAAAQABAmgaAYQgaAagoAAgAg9BMIAtAAQAiAAAXgXQAVgUAAghIAAAAQAAgfgVgVQgXgXgiABIgtAAg");
	this.shape_23.setTransform(119,11.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag+BYIAAiuIB8AAIAAAMIhvAAIAABFIBkAAIAAAKIhkAAIAABHIBwAAIAAAMg");
	this.shape_24.setTransform(100.975,11.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AA3BYIg3hJIgBAAIg4AAIAABJIgNAAIAAiuIBIAAQAgAAASARQANANAAATQAAAWgPANQgNALgYAEIA6BLgAg5AEIA6AAQAWAAAOgLQAPgKAAgTIAAgBQAAgRgNgLQgOgKgXABIg7AAg");
	this.shape_25.setTransform(83.775,11.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag+BYIAAiuIB8AAIAAAMIhvAAIAABFIBkAAIAAAKIhkAAIAABHIBwAAIAAAMg");
	this.shape_26.setTransform(66.175,11.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAzBYIgziXIgyCXIgLAAIg/ivIAOAAIA3CbIA0ibIAIAAIA0CbIA3ibIANAAIg/Cvg");
	this.shape_27.setTransform(43.525,11.525);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag/A/QgYgaAAglIAAAAQAAgkAYgbQAZgbAmAAQAnAAAZAbQAYAaAAAlIAAAAQAAAlgYAaQgaAbgmAAQgmAAgZgbgAg1g3QgVAWAAAhIAAAAQAAAhAWAWQAVAXAfABQAgAAAWgXQAVgWAAgiIAAAAQAAgggWgXQgVgXggAAQgfAAgWAXg");
	this.shape_28.setTransform(19.1375,11.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag/BYIAAiuIA/AAQAdAAARANQASAPAAAZIAAABQAAAagUAOQgTAOgcAAIgvAAIAABCgAgyAKIAwAAQAXAAAPgLQAPgLAAgTIAAgBQAAgUgPgMQgOgLgXABIgxAAg");
	this.shape_29.setTransform(0.825,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.7,0,193.1,80.8);


(lib.textloveyourlaundry = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEBIIAAg5Ig+hWIAOAAIA0BMIA2hMIANAAIg+BWIAAA5g");
	this.shape.setTransform(195.375,9.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAtBIIgtg8IAAAAIgvAAIAAA8IgKAAIAAiPIA7AAQAaAAAOAOQALALAAAQQAAASgMALQgLAJgTACIAvA+gAgvADIAwAAQASAAAMgIQALgJAAgPIAAgBQAAgOgKgJQgLgIgUAAIgwAAg");
	this.shape_1.setTransform(181.225,9.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag9BIIAAiPIAwAAQAgAAAVAVQAWAUAAAeQAAAfgWAUQgVAVggAAgAgyA+IAlAAQAcAAASgSQARgRAAgbIAAAAQAAgZgRgSQgSgSgcAAIglAAg");
	this.shape_2.setTransform(165.6,9.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAzBIIhjh/IAAB/IgKAAIAAiPIAKAAIBiB8IAAh8IAKAAIAACPg");
	this.shape_3.setTransform(149.2,9.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgpA5QgRgRAAgdIAAhTIALAAIAABSQAAAaANANQANAOAWAAQAWAAAMgNQANgNAAgaIAAhTIALAAIAABSQAAAegQARQgQAQgbAAQgZAAgQgQg");
	this.shape_4.setTransform(133.325,9.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AA8BIIgSgoIhUAAIgSAoIgLAAIBDiPIAJAAIBDCPgAAlAWIglhSIglBSIBKAAg");
	this.shape_5.setTransform(117.5,9.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AguBIIAAiPIAKAAIAACFIBTAAIAAAKg");
	this.shape_6.setTransform(103.625,9.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAtBIIgtg8IAAAAIgvAAIAAA8IgKAAIAAiPIA7AAQAaAAAOAOQALALAAAQQAAASgMALQgLAJgTACIAvA+gAgvADIAwAAQASAAAMgIQALgJAAgPIAAgBQAAgOgKgJQgLgIgUAAIgwAAg");
	this.shape_7.setTransform(83.775,9.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgpA5QgRgRAAgdIAAhTIALAAIAABSQAAAaANANQANAOAWAAQAWAAAMgNQANgNAAgaIAAhTIALAAIAABSQAAAegQARQgQAQgbAAQgZAAgQgQg");
	this.shape_8.setTransform(68.025,9.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag0A0QgTgVAAgfIAAAAQAAgdAUgWQAUgWAfAAQAgAAAUAWQAUAVAAAeQAAAegUAWQgVAWgfAAQgfAAgVgWgAgrgtQgRATAAAaQAAAbARATQASATAZAAQAaAAASgTQARgTAAgbIAAAAQAAgagRgTQgSgTgaAAQgaAAgRATg");
	this.shape_9.setTransform(51.575,9.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgEBIIAAg5Ig+hWIAOAAIA0BMIA2hMIANAAIg+BWIAAA5g");
	this.shape_10.setTransform(35.525,9.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgyBIIAAiPIBkAAIAAAKIhaAAIAAA4IBRAAIAAAJIhRAAIAAA6IBbAAIAAAKg");
	this.shape_11.setTransform(15.65,9.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgEBIIg/iPIAMAAIA3CDIA5iDIALAAIg/CPg");
	this.shape_12.setTransform(0.675,9.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag0A0QgTgVAAgfIAAAAQAAgdAUgWQAUgWAfAAQAgAAAUAWQAUAVAAAeQAAAegUAWQgVAWgfAAQgfAAgVgWgAgrgtQgRATAAAaQAAAbARATQASATAZAAQAaAAASgTQARgTAAgbIAAAAQAAgagRgTQgSgTgaAAQgaAAgRATg");
	this.shape_13.setTransform(-15.675,9.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AguBIIAAiPIAKAAIAACFIBTAAIAAAKg");
	this.shape_14.setTransform(-30.175,9.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.1,0,243.9,22.3);


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
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbAlIAAhJIA2AAIAAAPIgmAAIAAAPIAiAAIAAANIgiAAIAAAPIAnAAIAAAPg");
	this.shape.setTransform(63.6,-5.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgXAbQgLgKAAgRIAAAAQAAgPALgLQALgLAPAAQASAAALAKIgKAMQgJgHgKAAQgIAAgGAHQgGAGAAAJQAAAKAGAHQAGAGAJAAQAJAAAHgEIAAgLIgRAAIAAgNIAgAAIAAAfQgNAMgTAAQgQAAgKgLg");
	this.shape_1.setTransform(54.75,-5.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AATAlIgjguIAAAuIgPAAIAAhJIAOAAIAhAtIAAgtIARAAIAABJg");
	this.shape_2.setTransform(45.6,-5.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAWAlIgHgRIgeAAIgGARIgRAAIAghJIANAAIAgBJgAAJAGIgJgWIgJAWIASAAg");
	this.shape_3.setTransform(36.35,-5.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AANAlIgPgYIgNAAIAAAYIgQAAIAAhJIAhAAQAOAAAHAIQAGAGAAALQAAAQgPAGIASAagAgPAAIAQAAQAGAAADgDQADgDAAgEIAAgBQAAgKgNAAIgPAAg");
	this.shape_4.setTransform(27.725,-5.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgbAlIAAhJIA2AAIAAAPIgmAAIAAAPIAiAAIAAANIgiAAIAAAPIAnAAIAAAPg");
	this.shape_5.setTransform(15.2,-5.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAPAlIAAgeIgdAAIAAAeIgQAAIAAhJIAQAAIAAAdIAdAAIAAgdIAQAAIAABJg");
	this.shape_6.setTransform(6.55,-5.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgHAlIAAg6IgWAAIAAgPIA7AAIAAAPIgWAAIAAA6g");
	this.shape_7.setTransform(-1.85,-5.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgbAlIAAhJIA2AAIAAAPIgmAAIAAAPIAiAAIAAANIgiAAIAAAPIAnAAIAAAPg");
	this.shape_8.setTransform(-13.7,-5.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AANAlIgPgYIgNAAIAAAYIgQAAIAAhJIAhAAQAOAAAHAIQAGAGAAALQAAAQgPAGIASAagAgPAAIAQAAQAGAAADgDQADgDAAgEIAAgBQAAgKgNAAIgPAAg");
	this.shape_9.setTransform(-21.875,-5.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgbAbQgLgLAAgQIAAAAQAAgPALgLQAMgLAPAAQARAAALALQALALAAAPQAAAQgLALQgLALgRAAQgQAAgLgLgAgPgPQgGAGAAAJQAAAKAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgKIAAAAQAAgJgGgGQgHgHgJAAQgJAAgGAHg");
	this.shape_10.setTransform(-31.4,-5.625);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgZAlIAAhJIAQAAIAAA6IAjAAIAAAPg");
	this.shape_11.setTransform(-39.775,-5.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgcAlIAAhJIAdAAQANAAAHAHQAIAHAAAMQAAALgJAHQgIAHgMAAIgMAAIAAAWgAgMAAIAMAAQAGAAADgCQADgDAAgFIAAAAQAAgFgDgDQgEgDgFAAIgMAAg");
	this.shape_12.setTransform(-47.5,-5.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAQAlIgQgZIgQAZIgSAAIAaglIgZgkIATAAIAOAYIAQgYIASAAIgYAkIAZAlg");
	this.shape_13.setTransform(-56.125,-5.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgbAlIAAhJIA2AAIAAAPIgmAAIAAAPIAhAAIAAANIghAAIAAAPIAnAAIAAAPg");
	this.shape_14.setTransform(-64.25,-5.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,0,3).p("ApNiGISbAAIAAENIybAAg");
	this.shape_15.setTransform(-0.1534,-6.2305,1.4552,1.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0)").s().p("ApNCHIAAkNISbAAIAAENg");
	this.shape_16.setTransform(-0.1534,-6.2305,1.4552,1.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgbAlIAAhJIA2AAIAAAPIgmAAIAAAPIAiAAIAAANIgiAAIAAAPIAnAAIAAAPg");
	this.shape_17.setTransform(63.6,-5.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgXAbQgLgKAAgRIAAAAQAAgPALgLQALgLAPAAQASAAALAKIgKAMQgJgHgKAAQgIAAgGAHQgGAGAAAJQAAAKAGAHQAGAGAJAAQAJAAAHgEIAAgLIgRAAIAAgNIAgAAIAAAfQgNAMgTAAQgQAAgKgLg");
	this.shape_18.setTransform(54.75,-5.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AATAlIgjguIAAAuIgPAAIAAhJIAOAAIAhAtIAAgtIARAAIAABJg");
	this.shape_19.setTransform(45.6,-5.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAWAlIgHgRIgeAAIgGARIgRAAIAghJIANAAIAgBJgAAJAGIgJgWIgJAWIASAAg");
	this.shape_20.setTransform(36.35,-5.65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AANAlIgPgYIgNAAIAAAYIgQAAIAAhJIAhAAQAOAAAHAIQAGAGAAALQAAAQgPAGIASAagAgPAAIAQAAQAGAAADgDQADgDAAgEIAAgBQAAgKgNAAIgPAAg");
	this.shape_21.setTransform(27.725,-5.625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgbAlIAAhJIA2AAIAAAPIgmAAIAAAPIAiAAIAAANIgiAAIAAAPIAnAAIAAAPg");
	this.shape_22.setTransform(15.2,-5.625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAPAlIAAgeIgdAAIAAAeIgQAAIAAhJIAQAAIAAAdIAdAAIAAgdIAQAAIAABJg");
	this.shape_23.setTransform(6.55,-5.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgHAlIAAg6IgWAAIAAgPIA7AAIAAAPIgWAAIAAA6g");
	this.shape_24.setTransform(-1.85,-5.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgbAlIAAhJIA2AAIAAAPIgmAAIAAAPIAiAAIAAANIgiAAIAAAPIAnAAIAAAPg");
	this.shape_25.setTransform(-13.7,-5.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AANAlIgPgYIgNAAIAAAYIgQAAIAAhJIAhAAQAOAAAHAIQAGAGAAALQAAAQgPAGIASAagAgPAAIAQAAQAGAAADgDQADgDAAgEIAAgBQAAgKgNAAIgPAAg");
	this.shape_26.setTransform(-21.875,-5.625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgbAbQgLgLAAgQIAAAAQAAgPALgLQAMgLAPAAQARAAALALQALALAAAPQAAAQgLALQgLALgRAAQgQAAgLgLgAgPgPQgGAGAAAJQAAAKAGAGQAGAHAJAAQAKAAAGgHQAGgGAAgKIAAAAQAAgJgGgGQgHgHgJAAQgJAAgGAHg");
	this.shape_27.setTransform(-31.4,-5.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgZAlIAAhJIAQAAIAAA6IAjAAIAAAPg");
	this.shape_28.setTransform(-39.775,-5.625);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgcAlIAAhJIAdAAQANAAAHAHQAIAHAAAMQAAALgJAHQgIAHgMAAIgMAAIAAAWgAgMAAIAMAAQAGAAADgCQADgDAAgFIAAAAQAAgFgDgDQgEgDgFAAIgMAAg");
	this.shape_29.setTransform(-47.5,-5.625);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAQAlIgQgZIgQAZIgSAAIAaglIgZgkIATAAIAOAYIAQgYIASAAIgYAkIAZAlg");
	this.shape_30.setTransform(-56.125,-5.625);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgbAlIAAhJIA2AAIAAAPIgmAAIAAAPIAhAAIAAANIghAAIAAAPIAnAAIAAAPg");
	this.shape_31.setTransform(-64.25,-5.625);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("ApNCHIAAkNISbAAIAAENg");
	this.shape_32.setTransform(-0.1534,-6.2305,1.4552,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_32},{t:this.shape_15},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_32},{t:this.shape_15},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87,-24.8,173.7,37.1);


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
	this.shape.graphics.lf(["rgba(0,0,0,0.639)","rgba(89,89,89,0.416)","rgba(255,255,255,0)"],[0,0.663,1],0,-88,0,88).s().p("A3bN5IAA7xMAu3AAAIAAbxg");
	this.shape.setTransform(150,-349.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blackfooter, new cjs.Rectangle(0,-438.8,300,177.7), null);


(lib.gradientfooter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.blackfooter();
	this.instance.parent = this;
	this.instance.setTransform(150.1,172.95,1,1,0,0,0,150.1,60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-325.8,300,177.70000000000002);


(lib.DRUMANIMATION = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// drum
	this.instance = new lib.drum_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-0.05,0.88,0.88,0,0,0,389.9,307.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:389.8,regY:307.6,scaleX:1.53,scaleY:1.53,rotation:180,x:-2.95,y:1.1},360).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-720.5,-727.9,1508.9,1437);


// stage content:
(lib.FP014_DRUM_300x250_MREC = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_244 = function() {
		if(!this.alreadyExecuted){
		
		this.alreadyExecuted=true;
		
		this.loopNum=1;
		
		} else {
		
		this.loopNum++;
		
		if(this.loopNum==3){
		
		//this.stop();
		
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
	this.instance.setTransform(150,221.75,0.8,0.8,0,0,0,0.1,0.2);
	this.instance.alpha = 0;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(142).to({alpha:1},17).wait(85).to({regX:0.4,regY:0.3,y:221.8,alpha:0},18).wait(3));

	// text powered by
	this.instance_1 = new lib.textpoweredby("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(150.05,134.65,1,1,0,0,0,81.9,40);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(55).to({_off:false},0).to({alpha:1},9).to({startPosition:0},60).to({alpha:0},18).to({_off:true},1).wait(122));

	// text love your laundry
	this.instance_2 = new lib.textloveyourlaundry("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.05,94.55,1,1,0,0,0,81.9,40);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(142).to({_off:false},0).to({alpha:1},17).to({startPosition:0},85).to({y:95.05,alpha:0},18).wait(3));

	// logo black
	this.instance_3 = new lib.fisherpaykellogoblacksvg("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(150.1,32.75,0.7302,0.7303,0,0,0,99.4,6.3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(124).to({_off:false},0).to({alpha:1},35).to({startPosition:0},85).to({alpha:0},19).wait(2));

	// logo white
	this.instance_4 = new lib.fisherpaykellogowhitesvg("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(150.1,32.75,0.7302,0.7303,0,0,0,99.4,6.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(124).to({startPosition:0},0).to({alpha:0},35).to({startPosition:0},85).to({alpha:1},19).wait(2));

	// gradient overlay
	this.instance_5 = new lib.gradientfooter("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(149.95,423.05,1,1,0,0,0,150,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({startPosition:0},124).to({alpha:0},35).to({_off:true},1).wait(84).to({_off:false},0).to({alpha:1},19).wait(2));

	// washer dryer
	this.instance_6 = new lib.washerdryer("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(198,246,1,1,0,0,0,198,242);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(124).to({_off:false},0).to({x:172.3,alpha:1},35).to({x:141.5},42).to({startPosition:0},43).to({x:141.3,alpha:0},19).wait(2));

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
	this.instance_8.setTransform(151.1,132.55,0.615,0.615,0,0,0,0.8,0.4);

	this.instance_9 = new lib.drum_1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(150.35,132.15,0.5411,0.5411,0,0,0,389.4,307.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[]},160).to({state:[{t:this.instance_9}]},84).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(52.9,84.3,321.1,515.8000000000001);
// library properties:
lib.properties = {
	id: '730E235E15EB4F86959DF1BD4C54309A',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/drum.jpg", id:"drum"},
		{src:"images/washerdryerMREC.jpg", id:"washerdryerMREC"}
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