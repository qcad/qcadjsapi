
      // auto generated
      //var self;

      // class constructor:
      function RLine() {
        

        // should be RLine_BaseJs.call(this, engine):
        //RLine.prototype = new RLine_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RLine.getIdStatic()))) {

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
            qWarning("RLine.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new RLine_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLine);
  }

  
  else 
  
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RLine_Wrapper(
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

      

        //copyProperties(this, wrapper, RLine);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RLine_Wrapper(
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

      

        //copyProperties(this, wrapper, RLine);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RLine_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLine);
  }

  
  else {
    
        print("RLine(): wrong number / type of arguments");
      
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

        
              // define property setters/getters:
              Object.defineProperty(this, 'startPoint', {
                  get() {
                      
                          return this.__PROXY__.getStartPoint();
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setStartPoint(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'endPoint', {
                  get() {
                      
                          return this.__PROXY__.getEndPoint();
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setEndPoint(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            

      }

      //RLine.prototype = new RLine_BaseJs(engine);
      //RLine.prototype = new RLine_Wrapper(engine);
      RLine.prototype = new Object();

      RLine.prototype.toString = function() {
          //return "RLine [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RLine [JS]";
        };
      RLine.getObjectType = function() {
        return RJSType_RLine.getIdStatic();
      };

      RLine.prototype.getObjectType = function() {
        return RJSType_RLine.getIdStatic();
      };

      RLine.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RLine.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RShape.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RLine.Unknown = RLine_Wrapper.Unknown;
RLine.Point = RLine_Wrapper.Point;
RLine.Line = RLine_Wrapper.Line;
RLine.Arc = RLine_Wrapper.Arc;
RLine.Circle = RLine_Wrapper.Circle;
RLine.Ellipse = RLine_Wrapper.Ellipse;
RLine.Polyline = RLine_Wrapper.Polyline;
RLine.Spline = RLine_Wrapper.Spline;
RLine.Triangle = RLine_Wrapper.Triangle;
RLine.XLine = RLine_Wrapper.XLine;
RLine.Ray = RLine_Wrapper.Ray;


      // functions:
      
        // function 
        RLine.prototype.isInterpolated = function(...args) 
          
        {
          //print("JS: RLine.prototype.isInterpolated");
          return this.__PROXY__.isInterpolated(...args);
        };
    
        // function 
        RLine.prototype.getClosestPointOnShape = function(...args) 
          
        {
          //print("JS: RLine.prototype.getClosestPointOnShape");
          return this.__PROXY__.getClosestPointOnShape(...args);
        };
    
        // function 
        RLine.prototype.to2D = function(...args) 
          
        {
          //print("JS: RLine.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RLine.prototype.equals = function(...args) 
          
        {
          //print("JS: RLine.prototype.equals");
          return this.__PROXY__.equals(...args);
        };
    
        // function 
        RLine.prototype.getIntProperties = function(...args) 
          
        {
          //print("JS: RLine.prototype.getIntProperties");
          return this.__PROXY__.getIntProperties(...args);
        };
    
        // function 
        RLine.prototype.getDoubleProperties = function(...args) 
          
        {
          //print("JS: RLine.prototype.getDoubleProperties");
          return this.__PROXY__.getDoubleProperties(...args);
        };
    
        // function 
        RLine.prototype.getBoolProperties = function(...args) 
          
        {
          //print("JS: RLine.prototype.getBoolProperties");
          return this.__PROXY__.getBoolProperties(...args);
        };
    
        // function 
        RLine.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RLine.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RLine.prototype.getMaxDistanceTo = function(...args) 
          
        {
          //print("JS: RLine.prototype.getMaxDistanceTo");
          return this.__PROXY__.getMaxDistanceTo(...args);
        };
    
        // function 
        RLine.prototype.isOnShape = function(...args) 
          
        {
          //print("JS: RLine.prototype.isOnShape");
          return this.__PROXY__.isOnShape(...args);
        };
    
        // function 
        RLine.prototype.filterOnShape = function(...args) 
          
        {
          //print("JS: RLine.prototype.filterOnShape");
          return this.__PROXY__.filterOnShape(...args);
        };
    
        // function 
        RLine.prototype.getVectorFromEndpointTo = function(...args) 
          
        {
          //print("JS: RLine.prototype.getVectorFromEndpointTo");
          return this.__PROXY__.getVectorFromEndpointTo(...args);
        };
    
        // function 
        RLine.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RLine.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RLine.prototype.getPointOnShape = function(...args) 
          
        {
          //print("JS: RLine.prototype.getPointOnShape");
          return this.__PROXY__.getPointOnShape(...args);
        };
    
        // function 
        RLine.prototype.getPointWithDistanceToStart = function(...args) 
          
        {
          //print("JS: RLine.prototype.getPointWithDistanceToStart");
          return this.__PROXY__.getPointWithDistanceToStart(...args);
        };
    
        // function 
        RLine.prototype.getPointWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RLine.prototype.getPointWithDistanceToEnd");
          return this.__PROXY__.getPointWithDistanceToEnd(...args);
        };
    
        // function 
        RLine.prototype.getAngleAtPoint = function(...args) 
          
        {
          //print("JS: RLine.prototype.getAngleAtPoint");
          return this.__PROXY__.getAngleAtPoint(...args);
        };
    
        // function 
        RLine.prototype.getPointAtPercent = function(...args) 
          
        {
          //print("JS: RLine.prototype.getPointAtPercent");
          return this.__PROXY__.getPointAtPercent(...args);
        };
    
        // function 
        RLine.prototype.getAngleAtPercent = function(...args) 
          
        {
          //print("JS: RLine.prototype.getAngleAtPercent");
          return this.__PROXY__.getAngleAtPercent(...args);
        };
    
        // function 
        RLine.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RLine.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RLine.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RLine.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RLine.prototype.getSelfIntersectionPoints = function(...args) 
          
        {
          //print("JS: RLine.prototype.getSelfIntersectionPoints");
          return this.__PROXY__.getSelfIntersectionPoints(...args);
        };
    
        // function 
        RLine.prototype.getDistancesFromStart = function(...args) 
          
        {
          //print("JS: RLine.prototype.getDistancesFromStart");
          return this.__PROXY__.getDistancesFromStart(...args);
        };
    
        // function 
        RLine.prototype.dump = function(...args) 
          
        {
          //print("JS: RLine.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RLine.prototype.getShapeType = function(...args) 
          
        {
          //print("JS: RLine.prototype.getShapeType");
          return this.__PROXY__.getShapeType(...args);
        };
    
        // function 
        RLine.prototype.clone = function(...args) 
          
        {
          //print("JS: RLine.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RLine.prototype.isDirected = function(...args) 
          
        {
          //print("JS: RLine.prototype.isDirected");
          return this.__PROXY__.isDirected(...args);
        };
    
        // function 
        RLine.prototype.setZ = function(...args) 
          
        {
          //print("JS: RLine.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RLine.prototype.getVectorProperties = function(...args) 
          
        {
          //print("JS: RLine.prototype.getVectorProperties");
          return this.__PROXY__.getVectorProperties(...args);
        };
    
        // function 
        RLine.prototype.isValid = function(...args) 
          
        {
          //print("JS: RLine.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RLine.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RLine.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RLine.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RLine.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RLine.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RLine.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RLine.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RLine.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RLine.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RLine.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RLine.prototype.getPointCloud = function(...args) 
          
        {
          //print("JS: RLine.prototype.getPointCloud");
          return this.__PROXY__.getPointCloud(...args);
        };
    
        // function 
        RLine.prototype.getAngleAt = function(...args) 
          
        {
          //print("JS: RLine.prototype.getAngleAt");
          return this.__PROXY__.getAngleAt(...args);
        };
    
        // function 
        RLine.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RLine.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RLine.prototype.getStartPoint = function(...args) 
          
        {
          //print("JS: RLine.prototype.getStartPoint");
          return this.__PROXY__.getStartPoint(...args);
        };
    
        // function 
        RLine.prototype.setStartPoint = function(...args) 
          
        {
          //print("JS: RLine.prototype.setStartPoint");
          return this.__PROXY__.setStartPoint(...args);
        };
    
        // function 
        RLine.prototype.getEndPoint = function(...args) 
          
        {
          //print("JS: RLine.prototype.getEndPoint");
          return this.__PROXY__.getEndPoint(...args);
        };
    
        // function 
        RLine.prototype.setEndPoint = function(...args) 
          
        {
          //print("JS: RLine.prototype.setEndPoint");
          return this.__PROXY__.setEndPoint(...args);
        };
    
        // function 
        RLine.prototype.getMiddlePoint = function(...args) 
          
        {
          //print("JS: RLine.prototype.getMiddlePoint");
          return this.__PROXY__.getMiddlePoint(...args);
        };
    
        // function 
        RLine.prototype.getLength = function(...args) 
          
        {
          //print("JS: RLine.prototype.getLength");
          return this.__PROXY__.getLength(...args);
        };
    
        // function 
        RLine.prototype.getAngle = function(...args) 
          
        {
          //print("JS: RLine.prototype.getAngle");
          return this.__PROXY__.getAngle(...args);
        };
    
        // function 
        RLine.prototype.setLength = function(...args) 
          
        {
          //print("JS: RLine.prototype.setLength");
          return this.__PROXY__.setLength(...args);
        };
    
        // function 
        RLine.prototype.setAngle = function(...args) 
          
        {
          //print("JS: RLine.prototype.setAngle");
          return this.__PROXY__.setAngle(...args);
        };
    
        // function 
        RLine.prototype.isParallel = function(...args) 
          
        {
          //print("JS: RLine.prototype.isParallel");
          return this.__PROXY__.isParallel(...args);
        };
    
        // function 
        RLine.prototype.isVertical = function(...args) 
          
        {
          //print("JS: RLine.prototype.isVertical");
          return this.__PROXY__.isVertical(...args);
        };
    
        // function 
        RLine.prototype.isHorizontal = function(...args) 
          
        {
          //print("JS: RLine.prototype.isHorizontal");
          return this.__PROXY__.isHorizontal(...args);
        };
    
        // function 
        RLine.prototype.getDirection1 = function(...args) 
          
        {
          //print("JS: RLine.prototype.getDirection1");
          return this.__PROXY__.getDirection1(...args);
        };
    
        // function 
        RLine.prototype.getDirection2 = function(...args) 
          
        {
          //print("JS: RLine.prototype.getDirection2");
          return this.__PROXY__.getDirection2(...args);
        };
    
        // function 
        RLine.prototype.getSideOfPoint = function(...args) 
          
        {
          //print("JS: RLine.prototype.getSideOfPoint");
          return this.__PROXY__.getSideOfPoint(...args);
        };
    
        // function 
        RLine.prototype.clipToXY = function(...args) 
          
        {
          //print("JS: RLine.prototype.clipToXY");
          return this.__PROXY__.clipToXY(...args);
        };
    
        // function 
        RLine.prototype.move = function(...args) 
          
        {
          //print("JS: RLine.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RLine.prototype.rotate = function(...args) 
          
        {
          //print("JS: RLine.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RLine.prototype.scale = function(...args) 
          
        {
          //print("JS: RLine.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RLine.prototype.mirror = function(...args) 
          
        {
          //print("JS: RLine.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RLine.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RLine.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RLine.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RLine.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RLine.prototype.reverse = function(...args) 
          
        {
          //print("JS: RLine.prototype.reverse");
          return this.__PROXY__.reverse(...args);
        };
    
        // function 
        RLine.prototype.stretch = function(...args) 
          
        {
          //print("JS: RLine.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RLine.prototype.moveTo = function(...args) 
          
        {
          //print("JS: RLine.prototype.moveTo");
          return this.__PROXY__.moveTo(...args);
        };
    
        // function 
        RLine.prototype.getTransformed = function(...args) 
          
        {
          //print("JS: RLine.prototype.getTransformed");
          return this.__PROXY__.getTransformed(...args);
        };
    
        // function 
        RLine.prototype.getTrimEnd = function(...args) 
          
        {
          //print("JS: RLine.prototype.getTrimEnd");
          return this.__PROXY__.getTrimEnd(...args);
        };
    
        // function 
        RLine.prototype.trimStartPoint = function(...args) 
          
        {
          //print("JS: RLine.prototype.trimStartPoint");
          return this.__PROXY__.trimStartPoint(...args);
        };
    
        // function 
        RLine.prototype.trimEndPoint = function(...args) 
          
        {
          //print("JS: RLine.prototype.trimEndPoint");
          return this.__PROXY__.trimEndPoint(...args);
        };
    
        // function 
        RLine.prototype.getDistanceFromStart = function(...args) 
          
        {
          //print("JS: RLine.prototype.getDistanceFromStart");
          return this.__PROXY__.getDistanceFromStart(...args);
        };
    
        // function 
        RLine.prototype.getOffsetShapes = function(...args) 
          
        {
          //print("JS: RLine.prototype.getOffsetShapes");
          return this.__PROXY__.getOffsetShapes(...args);
        };
    
        // function 
        RLine.prototype.splitAt = function(...args) 
          
        {
          //print("JS: RLine.prototype.splitAt");
          return this.__PROXY__.splitAt(...args);
        };
    
        // function 
        RLine.prototype.print = function(...args) 
          
        {
          //print("JS: RLine.prototype.print");
          return this.__PROXY__.print(...args);
        };
    
        // function 
        RLine.prototype.copy = function(...args) 
          
        {
          //print("JS: RLine.prototype.copy");
          return this.__PROXY__.copy(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RLine.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RLine.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RLine.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      