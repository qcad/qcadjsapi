
      // auto generated
      //var self;

      // class constructor:
      function RTriangle() {
        

        // should be RTriangle_BaseJs.call(this, engine):
        //RTriangle.prototype = new RTriangle_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTriangle.getIdStatic()))) {

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
            qWarning("RTriangle.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RTriangle_Wrapper(
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

      

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RTriangle_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle(): wrong number / type of arguments");
      
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

      //RTriangle.prototype = new RTriangle_BaseJs(engine);
      //RTriangle.prototype = new RTriangle_Wrapper(engine);
      RTriangle.prototype = new Object();

      RTriangle.prototype.toString = function() {
          //return "RTriangle [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTriangle [JS]";
        };
      RTriangle.getObjectType = function() {
        return RJSType_RTriangle.getIdStatic();
      };

      RTriangle.prototype.getObjectType = function() {
        return RJSType_RTriangle.getIdStatic();
      };

      RTriangle.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTriangle.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RShape.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RExplodable.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RTriangle.Unknown = RTriangle_Wrapper.Unknown;
RTriangle.Point = RTriangle_Wrapper.Point;
RTriangle.Line = RTriangle_Wrapper.Line;
RTriangle.Arc = RTriangle_Wrapper.Arc;
RTriangle.Circle = RTriangle_Wrapper.Circle;
RTriangle.Ellipse = RTriangle_Wrapper.Ellipse;
RTriangle.Polyline = RTriangle_Wrapper.Polyline;
RTriangle.Spline = RTriangle_Wrapper.Spline;
RTriangle.Triangle = RTriangle_Wrapper.Triangle;
RTriangle.XLine = RTriangle_Wrapper.XLine;
RTriangle.Ray = RTriangle_Wrapper.Ray;


      // functions:
      
        // function 
        RTriangle.prototype.isValid = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RTriangle.prototype.isInterpolated = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.isInterpolated");
          return this.__PROXY__.isInterpolated(...args);
        };
    
        // function 
        RTriangle.prototype.getClosestPointOnShape = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getClosestPointOnShape");
          return this.__PROXY__.getClosestPointOnShape(...args);
        };
    
        // function 
        RTriangle.prototype.to2D = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RTriangle.prototype.equals = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.equals");
          return this.__PROXY__.equals(...args);
        };
    
        // function 
        RTriangle.prototype.getIntProperties = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getIntProperties");
          return this.__PROXY__.getIntProperties(...args);
        };
    
        // function 
        RTriangle.prototype.getDoubleProperties = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getDoubleProperties");
          return this.__PROXY__.getDoubleProperties(...args);
        };
    
        // function 
        RTriangle.prototype.getBoolProperties = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getBoolProperties");
          return this.__PROXY__.getBoolProperties(...args);
        };
    
        // function 
        RTriangle.prototype.getMaxDistanceTo = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getMaxDistanceTo");
          return this.__PROXY__.getMaxDistanceTo(...args);
        };
    
        // function 
        RTriangle.prototype.isOnShape = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.isOnShape");
          return this.__PROXY__.isOnShape(...args);
        };
    
        // function 
        RTriangle.prototype.filterOnShape = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.filterOnShape");
          return this.__PROXY__.filterOnShape(...args);
        };
    
        // function 
        RTriangle.prototype.getVectorFromEndpointTo = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getVectorFromEndpointTo");
          return this.__PROXY__.getVectorFromEndpointTo(...args);
        };
    
        // function 
        RTriangle.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RTriangle.prototype.getPointOnShape = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getPointOnShape");
          return this.__PROXY__.getPointOnShape(...args);
        };
    
        // function 
        RTriangle.prototype.getPointWithDistanceToStart = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getPointWithDistanceToStart");
          return this.__PROXY__.getPointWithDistanceToStart(...args);
        };
    
        // function 
        RTriangle.prototype.getPointWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getPointWithDistanceToEnd");
          return this.__PROXY__.getPointWithDistanceToEnd(...args);
        };
    
        // function 
        RTriangle.prototype.getAngleAt = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getAngleAt");
          return this.__PROXY__.getAngleAt(...args);
        };
    
        // function 
        RTriangle.prototype.getAngleAtPoint = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getAngleAtPoint");
          return this.__PROXY__.getAngleAtPoint(...args);
        };
    
        // function 
        RTriangle.prototype.getPointAtPercent = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getPointAtPercent");
          return this.__PROXY__.getPointAtPercent(...args);
        };
    
        // function 
        RTriangle.prototype.getAngleAtPercent = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getAngleAtPercent");
          return this.__PROXY__.getAngleAtPercent(...args);
        };
    
        // function 
        RTriangle.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RTriangle.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RTriangle.prototype.getSelfIntersectionPoints = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getSelfIntersectionPoints");
          return this.__PROXY__.getSelfIntersectionPoints(...args);
        };
    
        // function 
        RTriangle.prototype.isDirected = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.isDirected");
          return this.__PROXY__.isDirected(...args);
        };
    
        // function 
        RTriangle.prototype.getDirection1 = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getDirection1");
          return this.__PROXY__.getDirection1(...args);
        };
    
        // function 
        RTriangle.prototype.getDirection2 = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getDirection2");
          return this.__PROXY__.getDirection2(...args);
        };
    
        // function 
        RTriangle.prototype.getSideOfPoint = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getSideOfPoint");
          return this.__PROXY__.getSideOfPoint(...args);
        };
    
        // function 
        RTriangle.prototype.getStartPoint = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getStartPoint");
          return this.__PROXY__.getStartPoint(...args);
        };
    
        // function 
        RTriangle.prototype.getEndPoint = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getEndPoint");
          return this.__PROXY__.getEndPoint(...args);
        };
    
        // function 
        RTriangle.prototype.getMiddlePoint = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getMiddlePoint");
          return this.__PROXY__.getMiddlePoint(...args);
        };
    
        // function 
        RTriangle.prototype.trimStartPoint = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.trimStartPoint");
          return this.__PROXY__.trimStartPoint(...args);
        };
    
        // function 
        RTriangle.prototype.trimEndPoint = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.trimEndPoint");
          return this.__PROXY__.trimEndPoint(...args);
        };
    
        // function 
        RTriangle.prototype.getTrimEnd = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getTrimEnd");
          return this.__PROXY__.getTrimEnd(...args);
        };
    
        // function 
        RTriangle.prototype.getDistanceFromStart = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getDistanceFromStart");
          return this.__PROXY__.getDistanceFromStart(...args);
        };
    
        // function 
        RTriangle.prototype.getDistancesFromStart = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getDistancesFromStart");
          return this.__PROXY__.getDistancesFromStart(...args);
        };
    
        // function 
        RTriangle.prototype.stretch = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RTriangle.prototype.getOffsetShapes = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getOffsetShapes");
          return this.__PROXY__.getOffsetShapes(...args);
        };
    
        // function 
        RTriangle.prototype.splitAt = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.splitAt");
          return this.__PROXY__.splitAt(...args);
        };
    
        // function 
        RTriangle.prototype.dump = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RTriangle.prototype.getShapeType = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getShapeType");
          return this.__PROXY__.getShapeType(...args);
        };
    
        // function 
        RTriangle.prototype.clone = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RTriangle.prototype.setZ = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RTriangle.prototype.getVectorProperties = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getVectorProperties");
          return this.__PROXY__.getVectorProperties(...args);
        };
    
        // function 
        RTriangle.prototype.getPolyline = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getPolyline");
          return this.__PROXY__.getPolyline(...args);
        };
    
        // function 
        RTriangle.prototype.getOrientation = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getOrientation");
          return this.__PROXY__.getOrientation(...args);
        };
    
        // function 
        RTriangle.prototype.reverse = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.reverse");
          return this.__PROXY__.reverse(...args);
        };
    
        // function 
        RTriangle.prototype.createArrow = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.createArrow");
          return this.__PROXY__.createArrow(...args);
        };
    
        // function 
        RTriangle.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RTriangle.prototype.getLength = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getLength");
          return this.__PROXY__.getLength(...args);
        };
    
        // function 
        RTriangle.prototype.getArea = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getArea");
          return this.__PROXY__.getArea(...args);
        };
    
        // function 
        RTriangle.prototype.getCorner = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getCorner");
          return this.__PROXY__.getCorner(...args);
        };
    
        // function 
        RTriangle.prototype.setCorner = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.setCorner");
          return this.__PROXY__.setCorner(...args);
        };
    
        // function 
        RTriangle.prototype.setCorners = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.setCorners");
          return this.__PROXY__.setCorners(...args);
        };
    
        // function 
        RTriangle.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RTriangle.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RTriangle.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RTriangle.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RTriangle.prototype.getPointCloud = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getPointCloud");
          return this.__PROXY__.getPointCloud(...args);
        };
    
        // function 
        RTriangle.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RTriangle.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RTriangle.prototype.getNormal = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getNormal");
          return this.__PROXY__.getNormal(...args);
        };
    
        // function 
        RTriangle.prototype.isPointInTriangle = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.isPointInTriangle");
          return this.__PROXY__.isPointInTriangle(...args);
        };
    
        // function 
        RTriangle.prototype.isPointInQuadrant = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.isPointInQuadrant");
          return this.__PROXY__.isPointInQuadrant(...args);
        };
    
        // function 
        RTriangle.prototype.getD = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getD");
          return this.__PROXY__.getD(...args);
        };
    
        // function 
        RTriangle.prototype.getExploded = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getExploded");
          return this.__PROXY__.getExploded(...args);
        };
    
        // function 
        RTriangle.prototype.move = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RTriangle.prototype.rotate = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RTriangle.prototype.scale = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RTriangle.prototype.mirror = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RTriangle.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RTriangle.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RTriangle.prototype.getTransformed = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.getTransformed");
          return this.__PROXY__.getTransformed(...args);
        };
    
        // function 
        RTriangle.prototype.print = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.print");
          return this.__PROXY__.print(...args);
        };
    
        // function 
        RTriangle.prototype.copy = function(...args) 
          
        {
          //print("JS: RTriangle.prototype.copy");
          return this.__PROXY__.copy(...args);
        };
    

      // static functions:
      

        // static function 
        RTriangle.createArrow = function() 
          
        {
          //print("JS: RTriangle.createArrow");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RTriangle_WrapperSingletonInstance.createArrow(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTriangle);
  }

  
  else {
    
        print("RTriangle.createArrow(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RTriangle.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTriangle.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RTriangle.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      