
      // auto generated
      //var self;

      // class constructor:
      function RRay() {
        

        // should be RRay_BaseJs.call(this, engine):
        //RRay.prototype = new RRay_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RRay.getIdStatic()))) {

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
            qWarning("RRay.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RRay_Wrapper(
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

      

        //copyProperties(this, wrapper, RRay);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RRay_Wrapper(
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

      

        //copyProperties(this, wrapper, RRay);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RRay_Wrapper(
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

      

        //copyProperties(this, wrapper, RRay);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RRay_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RRay);
  }

  
  else {
    
        print("RRay(): wrong number / type of arguments");
      
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

      //RRay.prototype = new RRay_BaseJs(engine);
      //RRay.prototype = new RRay_Wrapper(engine);
      RRay.prototype = new Object();

      RRay.prototype.toString = function() {
          //return "RRay [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RRay [JS]";
        };
      RRay.getObjectType = function() {
        return RJSType_RRay.getIdStatic();
      };

      RRay.prototype.getObjectType = function() {
        return RJSType_RRay.getIdStatic();
      };

      RRay.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RRay.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RShape.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RXLine.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RRay.Unknown = RRay_Wrapper.Unknown;
RRay.Point = RRay_Wrapper.Point;
RRay.Line = RRay_Wrapper.Line;
RRay.Arc = RRay_Wrapper.Arc;
RRay.Circle = RRay_Wrapper.Circle;
RRay.Ellipse = RRay_Wrapper.Ellipse;
RRay.Polyline = RRay_Wrapper.Polyline;
RRay.Spline = RRay_Wrapper.Spline;
RRay.Triangle = RRay_Wrapper.Triangle;
RRay.XLine = RRay_Wrapper.XLine;
RRay.Ray = RRay_Wrapper.Ray;


      // functions:
      
        // function 
        RRay.prototype.isValid = function(...args) 
          
        {
          //print("JS: RRay.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RRay.prototype.isInterpolated = function(...args) 
          
        {
          //print("JS: RRay.prototype.isInterpolated");
          return this.__PROXY__.isInterpolated(...args);
        };
    
        // function 
        RRay.prototype.getClosestPointOnShape = function(...args) 
          
        {
          //print("JS: RRay.prototype.getClosestPointOnShape");
          return this.__PROXY__.getClosestPointOnShape(...args);
        };
    
        // function 
        RRay.prototype.to2D = function(...args) 
          
        {
          //print("JS: RRay.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RRay.prototype.equals = function(...args) 
          
        {
          //print("JS: RRay.prototype.equals");
          return this.__PROXY__.equals(...args);
        };
    
        // function 
        RRay.prototype.getIntProperties = function(...args) 
          
        {
          //print("JS: RRay.prototype.getIntProperties");
          return this.__PROXY__.getIntProperties(...args);
        };
    
        // function 
        RRay.prototype.getDoubleProperties = function(...args) 
          
        {
          //print("JS: RRay.prototype.getDoubleProperties");
          return this.__PROXY__.getDoubleProperties(...args);
        };
    
        // function 
        RRay.prototype.getBoolProperties = function(...args) 
          
        {
          //print("JS: RRay.prototype.getBoolProperties");
          return this.__PROXY__.getBoolProperties(...args);
        };
    
        // function 
        RRay.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RRay.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RRay.prototype.getMaxDistanceTo = function(...args) 
          
        {
          //print("JS: RRay.prototype.getMaxDistanceTo");
          return this.__PROXY__.getMaxDistanceTo(...args);
        };
    
        // function 
        RRay.prototype.isOnShape = function(...args) 
          
        {
          //print("JS: RRay.prototype.isOnShape");
          return this.__PROXY__.isOnShape(...args);
        };
    
        // function 
        RRay.prototype.filterOnShape = function(...args) 
          
        {
          //print("JS: RRay.prototype.filterOnShape");
          return this.__PROXY__.filterOnShape(...args);
        };
    
        // function 
        RRay.prototype.getVectorFromEndpointTo = function(...args) 
          
        {
          //print("JS: RRay.prototype.getVectorFromEndpointTo");
          return this.__PROXY__.getVectorFromEndpointTo(...args);
        };
    
        // function 
        RRay.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RRay.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RRay.prototype.getPointOnShape = function(...args) 
          
        {
          //print("JS: RRay.prototype.getPointOnShape");
          return this.__PROXY__.getPointOnShape(...args);
        };
    
        // function 
        RRay.prototype.getPointWithDistanceToStart = function(...args) 
          
        {
          //print("JS: RRay.prototype.getPointWithDistanceToStart");
          return this.__PROXY__.getPointWithDistanceToStart(...args);
        };
    
        // function 
        RRay.prototype.getPointWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RRay.prototype.getPointWithDistanceToEnd");
          return this.__PROXY__.getPointWithDistanceToEnd(...args);
        };
    
        // function 
        RRay.prototype.getAngleAtPoint = function(...args) 
          
        {
          //print("JS: RRay.prototype.getAngleAtPoint");
          return this.__PROXY__.getAngleAtPoint(...args);
        };
    
        // function 
        RRay.prototype.getPointAtPercent = function(...args) 
          
        {
          //print("JS: RRay.prototype.getPointAtPercent");
          return this.__PROXY__.getPointAtPercent(...args);
        };
    
        // function 
        RRay.prototype.getAngleAtPercent = function(...args) 
          
        {
          //print("JS: RRay.prototype.getAngleAtPercent");
          return this.__PROXY__.getAngleAtPercent(...args);
        };
    
        // function 
        RRay.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RRay.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RRay.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RRay.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RRay.prototype.getSelfIntersectionPoints = function(...args) 
          
        {
          //print("JS: RRay.prototype.getSelfIntersectionPoints");
          return this.__PROXY__.getSelfIntersectionPoints(...args);
        };
    
        // function 
        RRay.prototype.getDistancesFromStart = function(...args) 
          
        {
          //print("JS: RRay.prototype.getDistancesFromStart");
          return this.__PROXY__.getDistancesFromStart(...args);
        };
    
        // function 
        RRay.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RRay.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RRay.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RRay.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RRay.prototype.dump = function(...args) 
          
        {
          //print("JS: RRay.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RRay.prototype.getLineShape = function(...args) 
          
        {
          //print("JS: RRay.prototype.getLineShape");
          return this.__PROXY__.getLineShape(...args);
        };
    
        // function 
        RRay.prototype.isDirected = function(...args) 
          
        {
          //print("JS: RRay.prototype.isDirected");
          return this.__PROXY__.isDirected(...args);
        };
    
        // function 
        RRay.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RRay.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RRay.prototype.setZ = function(...args) 
          
        {
          //print("JS: RRay.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RRay.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RRay.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RRay.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RRay.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RRay.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RRay.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RRay.prototype.getPointCloud = function(...args) 
          
        {
          //print("JS: RRay.prototype.getPointCloud");
          return this.__PROXY__.getPointCloud(...args);
        };
    
        // function 
        RRay.prototype.getAngleAt = function(...args) 
          
        {
          //print("JS: RRay.prototype.getAngleAt");
          return this.__PROXY__.getAngleAt(...args);
        };
    
        // function 
        RRay.prototype.getBasePoint = function(...args) 
          
        {
          //print("JS: RRay.prototype.getBasePoint");
          return this.__PROXY__.getBasePoint(...args);
        };
    
        // function 
        RRay.prototype.setBasePoint = function(...args) 
          
        {
          //print("JS: RRay.prototype.setBasePoint");
          return this.__PROXY__.setBasePoint(...args);
        };
    
        // function 
        RRay.prototype.getSecondPoint = function(...args) 
          
        {
          //print("JS: RRay.prototype.getSecondPoint");
          return this.__PROXY__.getSecondPoint(...args);
        };
    
        // function 
        RRay.prototype.setSecondPoint = function(...args) 
          
        {
          //print("JS: RRay.prototype.setSecondPoint");
          return this.__PROXY__.setSecondPoint(...args);
        };
    
        // function 
        RRay.prototype.getDirectionVector = function(...args) 
          
        {
          //print("JS: RRay.prototype.getDirectionVector");
          return this.__PROXY__.getDirectionVector(...args);
        };
    
        // function 
        RRay.prototype.setDirectionVector = function(...args) 
          
        {
          //print("JS: RRay.prototype.setDirectionVector");
          return this.__PROXY__.setDirectionVector(...args);
        };
    
        // function 
        RRay.prototype.getMiddlePoint = function(...args) 
          
        {
          //print("JS: RRay.prototype.getMiddlePoint");
          return this.__PROXY__.getMiddlePoint(...args);
        };
    
        // function 
        RRay.prototype.getLength = function(...args) 
          
        {
          //print("JS: RRay.prototype.getLength");
          return this.__PROXY__.getLength(...args);
        };
    
        // function 
        RRay.prototype.setLength = function(...args) 
          
        {
          //print("JS: RRay.prototype.setLength");
          return this.__PROXY__.setLength(...args);
        };
    
        // function 
        RRay.prototype.getAngle = function(...args) 
          
        {
          //print("JS: RRay.prototype.getAngle");
          return this.__PROXY__.getAngle(...args);
        };
    
        // function 
        RRay.prototype.setAngle = function(...args) 
          
        {
          //print("JS: RRay.prototype.setAngle");
          return this.__PROXY__.setAngle(...args);
        };
    
        // function 
        RRay.prototype.getDirection1 = function(...args) 
          
        {
          //print("JS: RRay.prototype.getDirection1");
          return this.__PROXY__.getDirection1(...args);
        };
    
        // function 
        RRay.prototype.getDirection2 = function(...args) 
          
        {
          //print("JS: RRay.prototype.getDirection2");
          return this.__PROXY__.getDirection2(...args);
        };
    
        // function 
        RRay.prototype.getSideOfPoint = function(...args) 
          
        {
          //print("JS: RRay.prototype.getSideOfPoint");
          return this.__PROXY__.getSideOfPoint(...args);
        };
    
        // function 
        RRay.prototype.getStartPoint = function(...args) 
          
        {
          //print("JS: RRay.prototype.getStartPoint");
          return this.__PROXY__.getStartPoint(...args);
        };
    
        // function 
        RRay.prototype.getEndPoint = function(...args) 
          
        {
          //print("JS: RRay.prototype.getEndPoint");
          return this.__PROXY__.getEndPoint(...args);
        };
    
        // function 
        RRay.prototype.trimStartPoint = function(...args) 
          
        {
          //print("JS: RRay.prototype.trimStartPoint");
          return this.__PROXY__.trimStartPoint(...args);
        };
    
        // function 
        RRay.prototype.getTrimEnd = function(...args) 
          
        {
          //print("JS: RRay.prototype.getTrimEnd");
          return this.__PROXY__.getTrimEnd(...args);
        };
    
        // function 
        RRay.prototype.getDistanceFromStart = function(...args) 
          
        {
          //print("JS: RRay.prototype.getDistanceFromStart");
          return this.__PROXY__.getDistanceFromStart(...args);
        };
    
        // function 
        RRay.prototype.move = function(...args) 
          
        {
          //print("JS: RRay.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RRay.prototype.rotate = function(...args) 
          
        {
          //print("JS: RRay.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RRay.prototype.scale = function(...args) 
          
        {
          //print("JS: RRay.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RRay.prototype.mirror = function(...args) 
          
        {
          //print("JS: RRay.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RRay.prototype.getTransformed = function(...args) 
          
        {
          //print("JS: RRay.prototype.getTransformed");
          return this.__PROXY__.getTransformed(...args);
        };
    
        // function 
        RRay.prototype.getOffsetShapes = function(...args) 
          
        {
          //print("JS: RRay.prototype.getOffsetShapes");
          return this.__PROXY__.getOffsetShapes(...args);
        };
    
        // function 
        RRay.prototype.copy = function(...args) 
          
        {
          //print("JS: RRay.prototype.copy");
          return this.__PROXY__.copy(...args);
        };
    
        // function 
        RRay.prototype.getShapeType = function(...args) 
          
        {
          //print("JS: RRay.prototype.getShapeType");
          return this.__PROXY__.getShapeType(...args);
        };
    
        // function 
        RRay.prototype.clone = function(...args) 
          
        {
          //print("JS: RRay.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RRay.prototype.getVectorProperties = function(...args) 
          
        {
          //print("JS: RRay.prototype.getVectorProperties");
          return this.__PROXY__.getVectorProperties(...args);
        };
    
        // function 
        RRay.prototype.trimEndPoint = function(...args) 
          
        {
          //print("JS: RRay.prototype.trimEndPoint");
          return this.__PROXY__.trimEndPoint(...args);
        };
    
        // function 
        RRay.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RRay.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RRay.prototype.reverse = function(...args) 
          
        {
          //print("JS: RRay.prototype.reverse");
          return this.__PROXY__.reverse(...args);
        };
    
        // function 
        RRay.prototype.getClippedLine = function(...args) 
          
        {
          //print("JS: RRay.prototype.getClippedLine");
          return this.__PROXY__.getClippedLine(...args);
        };
    
        // function 
        RRay.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RRay.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RRay.prototype.stretch = function(...args) 
          
        {
          //print("JS: RRay.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RRay.prototype.splitAt = function(...args) 
          
        {
          //print("JS: RRay.prototype.splitAt");
          return this.__PROXY__.splitAt(...args);
        };
    
        // function 
        RRay.prototype.print = function(...args) 
          
        {
          //print("JS: RRay.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RRay.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RRay.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RRay.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      