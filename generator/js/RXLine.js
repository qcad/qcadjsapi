
      // auto generated
      //var self;

      // class constructor:
      function RXLine() {
        

        // should be RXLine_BaseJs.call(this, engine):
        //RXLine.prototype = new RXLine_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RXLine.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  this.__PROXY__ = wrapper;
                
            //}
          }
          else {
            qWarning("RXLine.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RXLine_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RXLine);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RXLine_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RXLine);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RXLine_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RXLine);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RXLine_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RXLine);
  }

  
  else {
    
        print("RXLine(): wrong number / type of arguments");
      
    console.trace();
  }
  
        }

        //self = this;
        //if (typeof(this.wrapper)!=="undefined") {
        //  this.wrapper.setEngine(engine);
        //}


        if (typeof(wrapper)!=="undefined") {
          //var localSelf = this;
          //print("QAction self:", localSelf);
          // TODO:
          //this.wrapper.triggered.connect(function(checked) { print("action triggered. self:", localSelf); localSelf.triggeredEmitter(checked); });
          
        }

        

      }

      //RXLine.prototype = new RXLine_BaseJs(engine);
      //RXLine.prototype = new RXLine_Wrapper(engine);
      RXLine.prototype = new Object();

      RXLine.prototype.toString = function() {
          //return "RXLine [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RXLine [JS]";
        };
      RXLine.getObjectType = function() {
        return RJSType_RXLine.getIdStatic();
      };

      RXLine.prototype.getObjectType = function() {
        return RJSType_RXLine.getIdStatic();
      };

      RXLine.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RXLine.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RShape.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RXLine.Unknown = RXLine_Wrapper.Unknown;
RXLine.Point = RXLine_Wrapper.Point;
RXLine.Line = RXLine_Wrapper.Line;
RXLine.Arc = RXLine_Wrapper.Arc;
RXLine.Circle = RXLine_Wrapper.Circle;
RXLine.Ellipse = RXLine_Wrapper.Ellipse;
RXLine.Polyline = RXLine_Wrapper.Polyline;
RXLine.Spline = RXLine_Wrapper.Spline;
RXLine.Triangle = RXLine_Wrapper.Triangle;
RXLine.XLine = RXLine_Wrapper.XLine;
RXLine.Ray = RXLine_Wrapper.Ray;


      // functions:
      
        // function 
        RXLine.prototype.isValid = function(...args) 
          
        {
          //print("JS: RXLine.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RXLine.prototype.isInterpolated = function(...args) 
          
        {
          //print("JS: RXLine.prototype.isInterpolated");
          return this.__PROXY__.isInterpolated(...args);
        };
    
        // function 
        RXLine.prototype.getClosestPointOnShape = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getClosestPointOnShape");
          return this.__PROXY__.getClosestPointOnShape(...args);
        };
    
        // function 
        RXLine.prototype.to2D = function(...args) 
          
        {
          //print("JS: RXLine.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RXLine.prototype.equals = function(...args) 
          
        {
          //print("JS: RXLine.prototype.equals");
          return this.__PROXY__.equals(...args);
        };
    
        // function 
        RXLine.prototype.getIntProperties = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getIntProperties");
          return this.__PROXY__.getIntProperties(...args);
        };
    
        // function 
        RXLine.prototype.getDoubleProperties = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getDoubleProperties");
          return this.__PROXY__.getDoubleProperties(...args);
        };
    
        // function 
        RXLine.prototype.getBoolProperties = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getBoolProperties");
          return this.__PROXY__.getBoolProperties(...args);
        };
    
        // function 
        RXLine.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RXLine.prototype.getMaxDistanceTo = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getMaxDistanceTo");
          return this.__PROXY__.getMaxDistanceTo(...args);
        };
    
        // function 
        RXLine.prototype.isOnShape = function(...args) 
          
        {
          //print("JS: RXLine.prototype.isOnShape");
          return this.__PROXY__.isOnShape(...args);
        };
    
        // function 
        RXLine.prototype.filterOnShape = function(...args) 
          
        {
          //print("JS: RXLine.prototype.filterOnShape");
          return this.__PROXY__.filterOnShape(...args);
        };
    
        // function 
        RXLine.prototype.getVectorFromEndpointTo = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getVectorFromEndpointTo");
          return this.__PROXY__.getVectorFromEndpointTo(...args);
        };
    
        // function 
        RXLine.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RXLine.prototype.getPointOnShape = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getPointOnShape");
          return this.__PROXY__.getPointOnShape(...args);
        };
    
        // function 
        RXLine.prototype.getPointWithDistanceToStart = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getPointWithDistanceToStart");
          return this.__PROXY__.getPointWithDistanceToStart(...args);
        };
    
        // function 
        RXLine.prototype.getPointWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getPointWithDistanceToEnd");
          return this.__PROXY__.getPointWithDistanceToEnd(...args);
        };
    
        // function 
        RXLine.prototype.getAngleAtPoint = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getAngleAtPoint");
          return this.__PROXY__.getAngleAtPoint(...args);
        };
    
        // function 
        RXLine.prototype.getPointAtPercent = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getPointAtPercent");
          return this.__PROXY__.getPointAtPercent(...args);
        };
    
        // function 
        RXLine.prototype.getAngleAtPercent = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getAngleAtPercent");
          return this.__PROXY__.getAngleAtPercent(...args);
        };
    
        // function 
        RXLine.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RXLine.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RXLine.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RXLine.prototype.getSelfIntersectionPoints = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getSelfIntersectionPoints");
          return this.__PROXY__.getSelfIntersectionPoints(...args);
        };
    
        // function 
        RXLine.prototype.getDistancesFromStart = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getDistancesFromStart");
          return this.__PROXY__.getDistancesFromStart(...args);
        };
    
        // function 
        RXLine.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RXLine.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RXLine.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RXLine.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RXLine.prototype.dump = function(...args) 
          
        {
          //print("JS: RXLine.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RXLine.prototype.getShapeType = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getShapeType");
          return this.__PROXY__.getShapeType(...args);
        };
    
        // function 
        RXLine.prototype.getLineShape = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getLineShape");
          return this.__PROXY__.getLineShape(...args);
        };
    
        // function 
        RXLine.prototype.clone = function(...args) 
          
        {
          //print("JS: RXLine.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RXLine.prototype.isDirected = function(...args) 
          
        {
          //print("JS: RXLine.prototype.isDirected");
          return this.__PROXY__.isDirected(...args);
        };
    
        // function 
        RXLine.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RXLine.prototype.setZ = function(...args) 
          
        {
          //print("JS: RXLine.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RXLine.prototype.getVectorProperties = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getVectorProperties");
          return this.__PROXY__.getVectorProperties(...args);
        };
    
        // function 
        RXLine.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RXLine.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RXLine.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RXLine.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RXLine.prototype.getPointCloud = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getPointCloud");
          return this.__PROXY__.getPointCloud(...args);
        };
    
        // function 
        RXLine.prototype.getAngleAt = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getAngleAt");
          return this.__PROXY__.getAngleAt(...args);
        };
    
        // function 
        RXLine.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RXLine.prototype.getBasePoint = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getBasePoint");
          return this.__PROXY__.getBasePoint(...args);
        };
    
        // function 
        RXLine.prototype.setBasePoint = function(...args) 
          
        {
          //print("JS: RXLine.prototype.setBasePoint");
          return this.__PROXY__.setBasePoint(...args);
        };
    
        // function 
        RXLine.prototype.getSecondPoint = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getSecondPoint");
          return this.__PROXY__.getSecondPoint(...args);
        };
    
        // function 
        RXLine.prototype.setSecondPoint = function(...args) 
          
        {
          //print("JS: RXLine.prototype.setSecondPoint");
          return this.__PROXY__.setSecondPoint(...args);
        };
    
        // function 
        RXLine.prototype.getDirectionVector = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getDirectionVector");
          return this.__PROXY__.getDirectionVector(...args);
        };
    
        // function 
        RXLine.prototype.setDirectionVector = function(...args) 
          
        {
          //print("JS: RXLine.prototype.setDirectionVector");
          return this.__PROXY__.setDirectionVector(...args);
        };
    
        // function 
        RXLine.prototype.getMiddlePoint = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getMiddlePoint");
          return this.__PROXY__.getMiddlePoint(...args);
        };
    
        // function 
        RXLine.prototype.getLength = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getLength");
          return this.__PROXY__.getLength(...args);
        };
    
        // function 
        RXLine.prototype.setLength = function(...args) 
          
        {
          //print("JS: RXLine.prototype.setLength");
          return this.__PROXY__.setLength(...args);
        };
    
        // function 
        RXLine.prototype.getAngle = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getAngle");
          return this.__PROXY__.getAngle(...args);
        };
    
        // function 
        RXLine.prototype.setAngle = function(...args) 
          
        {
          //print("JS: RXLine.prototype.setAngle");
          return this.__PROXY__.setAngle(...args);
        };
    
        // function 
        RXLine.prototype.getDirection1 = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getDirection1");
          return this.__PROXY__.getDirection1(...args);
        };
    
        // function 
        RXLine.prototype.getDirection2 = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getDirection2");
          return this.__PROXY__.getDirection2(...args);
        };
    
        // function 
        RXLine.prototype.getSideOfPoint = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getSideOfPoint");
          return this.__PROXY__.getSideOfPoint(...args);
        };
    
        // function 
        RXLine.prototype.getStartPoint = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getStartPoint");
          return this.__PROXY__.getStartPoint(...args);
        };
    
        // function 
        RXLine.prototype.getEndPoint = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getEndPoint");
          return this.__PROXY__.getEndPoint(...args);
        };
    
        // function 
        RXLine.prototype.trimStartPoint = function(...args) 
          
        {
          //print("JS: RXLine.prototype.trimStartPoint");
          return this.__PROXY__.trimStartPoint(...args);
        };
    
        // function 
        RXLine.prototype.trimEndPoint = function(...args) 
          
        {
          //print("JS: RXLine.prototype.trimEndPoint");
          return this.__PROXY__.trimEndPoint(...args);
        };
    
        // function 
        RXLine.prototype.getTrimEnd = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getTrimEnd");
          return this.__PROXY__.getTrimEnd(...args);
        };
    
        // function 
        RXLine.prototype.getDistanceFromStart = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getDistanceFromStart");
          return this.__PROXY__.getDistanceFromStart(...args);
        };
    
        // function 
        RXLine.prototype.getClippedLine = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getClippedLine");
          return this.__PROXY__.getClippedLine(...args);
        };
    
        // function 
        RXLine.prototype.move = function(...args) 
          
        {
          //print("JS: RXLine.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RXLine.prototype.rotate = function(...args) 
          
        {
          //print("JS: RXLine.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RXLine.prototype.scale = function(...args) 
          
        {
          //print("JS: RXLine.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RXLine.prototype.mirror = function(...args) 
          
        {
          //print("JS: RXLine.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RXLine.prototype.reverse = function(...args) 
          
        {
          //print("JS: RXLine.prototype.reverse");
          return this.__PROXY__.reverse(...args);
        };
    
        // function 
        RXLine.prototype.stretch = function(...args) 
          
        {
          //print("JS: RXLine.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RXLine.prototype.getTransformed = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getTransformed");
          return this.__PROXY__.getTransformed(...args);
        };
    
        // function 
        RXLine.prototype.getOffsetShapes = function(...args) 
          
        {
          //print("JS: RXLine.prototype.getOffsetShapes");
          return this.__PROXY__.getOffsetShapes(...args);
        };
    
        // function 
        RXLine.prototype.splitAt = function(...args) 
          
        {
          //print("JS: RXLine.prototype.splitAt");
          return this.__PROXY__.splitAt(...args);
        };
    
        // function 
        RXLine.prototype.print = function(...args) 
          
        {
          //print("JS: RXLine.prototype.print");
          return this.__PROXY__.print(...args);
        };
    
        // function 
        RXLine.prototype.copy = function(...args) 
          
        {
          //print("JS: RXLine.prototype.copy");
          return this.__PROXY__.copy(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RXLine.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RXLine.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RXLine.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      