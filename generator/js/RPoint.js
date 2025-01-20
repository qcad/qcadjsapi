
      // auto generated
      //var self;

      // class constructor:
      function RPoint() {
        

        // should be RPoint_BaseJs.call(this, engine):
        //RPoint.prototype = new RPoint_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPoint.getIdStatic()))) {

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
            qWarning("RPoint.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RPoint_Wrapper(
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

      

        //copyProperties(this, wrapper, RPoint);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RPoint_Wrapper(
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

      

        //copyProperties(this, wrapper, RPoint);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RPoint_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPoint);
  }

  
  else {
    
        print("RPoint(): wrong number / type of arguments");
      
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
              Object.defineProperty(this, 'position', {
                  get() {
                      return this.__PROXY__.getPosition();
                  },
                  
                    set(value) {
                        this.__PROXY__.setPosition(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            

      }

      //RPoint.prototype = new RPoint_BaseJs(engine);
      //RPoint.prototype = new RPoint_Wrapper(engine);
      RPoint.prototype = new Object();

      RPoint.prototype.toString = function() {
          //return "RPoint [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPoint [JS]";
        };
      RPoint.getObjectType = function() {
        return RJSType_RPoint.getIdStatic();
      };

      RPoint.prototype.getObjectType = function() {
        return RJSType_RPoint.getIdStatic();
      };

      RPoint.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPoint.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RShape.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RPoint.Unknown = RPoint_Wrapper.Unknown;
RPoint.Point = RPoint_Wrapper.Point;
RPoint.Line = RPoint_Wrapper.Line;
RPoint.Arc = RPoint_Wrapper.Arc;
RPoint.Circle = RPoint_Wrapper.Circle;
RPoint.Ellipse = RPoint_Wrapper.Ellipse;
RPoint.Polyline = RPoint_Wrapper.Polyline;
RPoint.Spline = RPoint_Wrapper.Spline;
RPoint.Triangle = RPoint_Wrapper.Triangle;
RPoint.XLine = RPoint_Wrapper.XLine;
RPoint.Ray = RPoint_Wrapper.Ray;


      // functions:
      
        // function 
        RPoint.prototype.isValid = function(...args) 
          
        {
          //print("JS: RPoint.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RPoint.prototype.isInterpolated = function(...args) 
          
        {
          //print("JS: RPoint.prototype.isInterpolated");
          return this.__PROXY__.isInterpolated(...args);
        };
    
        // function 
        RPoint.prototype.getClosestPointOnShape = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getClosestPointOnShape");
          return this.__PROXY__.getClosestPointOnShape(...args);
        };
    
        // function 
        RPoint.prototype.to2D = function(...args) 
          
        {
          //print("JS: RPoint.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RPoint.prototype.equals = function(...args) 
          
        {
          //print("JS: RPoint.prototype.equals");
          return this.__PROXY__.equals(...args);
        };
    
        // function 
        RPoint.prototype.getIntProperties = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getIntProperties");
          return this.__PROXY__.getIntProperties(...args);
        };
    
        // function 
        RPoint.prototype.getDoubleProperties = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getDoubleProperties");
          return this.__PROXY__.getDoubleProperties(...args);
        };
    
        // function 
        RPoint.prototype.getBoolProperties = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getBoolProperties");
          return this.__PROXY__.getBoolProperties(...args);
        };
    
        // function 
        RPoint.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RPoint.prototype.getMaxDistanceTo = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getMaxDistanceTo");
          return this.__PROXY__.getMaxDistanceTo(...args);
        };
    
        // function 
        RPoint.prototype.isOnShape = function(...args) 
          
        {
          //print("JS: RPoint.prototype.isOnShape");
          return this.__PROXY__.isOnShape(...args);
        };
    
        // function 
        RPoint.prototype.filterOnShape = function(...args) 
          
        {
          //print("JS: RPoint.prototype.filterOnShape");
          return this.__PROXY__.filterOnShape(...args);
        };
    
        // function 
        RPoint.prototype.getVectorFromEndpointTo = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getVectorFromEndpointTo");
          return this.__PROXY__.getVectorFromEndpointTo(...args);
        };
    
        // function 
        RPoint.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RPoint.prototype.getPointOnShape = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getPointOnShape");
          return this.__PROXY__.getPointOnShape(...args);
        };
    
        // function 
        RPoint.prototype.getPointWithDistanceToStart = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getPointWithDistanceToStart");
          return this.__PROXY__.getPointWithDistanceToStart(...args);
        };
    
        // function 
        RPoint.prototype.getPointWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getPointWithDistanceToEnd");
          return this.__PROXY__.getPointWithDistanceToEnd(...args);
        };
    
        // function 
        RPoint.prototype.getAngleAtPoint = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getAngleAtPoint");
          return this.__PROXY__.getAngleAtPoint(...args);
        };
    
        // function 
        RPoint.prototype.getPointAtPercent = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getPointAtPercent");
          return this.__PROXY__.getPointAtPercent(...args);
        };
    
        // function 
        RPoint.prototype.getAngleAtPercent = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getAngleAtPercent");
          return this.__PROXY__.getAngleAtPercent(...args);
        };
    
        // function 
        RPoint.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RPoint.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RPoint.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RPoint.prototype.getSelfIntersectionPoints = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getSelfIntersectionPoints");
          return this.__PROXY__.getSelfIntersectionPoints(...args);
        };
    
        // function 
        RPoint.prototype.isDirected = function(...args) 
          
        {
          //print("JS: RPoint.prototype.isDirected");
          return this.__PROXY__.isDirected(...args);
        };
    
        // function 
        RPoint.prototype.getDirection1 = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getDirection1");
          return this.__PROXY__.getDirection1(...args);
        };
    
        // function 
        RPoint.prototype.getDirection2 = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getDirection2");
          return this.__PROXY__.getDirection2(...args);
        };
    
        // function 
        RPoint.prototype.getSideOfPoint = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getSideOfPoint");
          return this.__PROXY__.getSideOfPoint(...args);
        };
    
        // function 
        RPoint.prototype.getStartPoint = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getStartPoint");
          return this.__PROXY__.getStartPoint(...args);
        };
    
        // function 
        RPoint.prototype.getEndPoint = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getEndPoint");
          return this.__PROXY__.getEndPoint(...args);
        };
    
        // function 
        RPoint.prototype.getMiddlePoint = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getMiddlePoint");
          return this.__PROXY__.getMiddlePoint(...args);
        };
    
        // function 
        RPoint.prototype.reverse = function(...args) 
          
        {
          //print("JS: RPoint.prototype.reverse");
          return this.__PROXY__.reverse(...args);
        };
    
        // function 
        RPoint.prototype.trimStartPoint = function(...args) 
          
        {
          //print("JS: RPoint.prototype.trimStartPoint");
          return this.__PROXY__.trimStartPoint(...args);
        };
    
        // function 
        RPoint.prototype.trimEndPoint = function(...args) 
          
        {
          //print("JS: RPoint.prototype.trimEndPoint");
          return this.__PROXY__.trimEndPoint(...args);
        };
    
        // function 
        RPoint.prototype.getTrimEnd = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getTrimEnd");
          return this.__PROXY__.getTrimEnd(...args);
        };
    
        // function 
        RPoint.prototype.getDistanceFromStart = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getDistanceFromStart");
          return this.__PROXY__.getDistanceFromStart(...args);
        };
    
        // function 
        RPoint.prototype.getDistancesFromStart = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getDistancesFromStart");
          return this.__PROXY__.getDistancesFromStart(...args);
        };
    
        // function 
        RPoint.prototype.stretch = function(...args) 
          
        {
          //print("JS: RPoint.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RPoint.prototype.getOffsetShapes = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getOffsetShapes");
          return this.__PROXY__.getOffsetShapes(...args);
        };
    
        // function 
        RPoint.prototype.splitAt = function(...args) 
          
        {
          //print("JS: RPoint.prototype.splitAt");
          return this.__PROXY__.splitAt(...args);
        };
    
        // function 
        RPoint.prototype.dump = function(...args) 
          
        {
          //print("JS: RPoint.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RPoint.prototype.getShapeType = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getShapeType");
          return this.__PROXY__.getShapeType(...args);
        };
    
        // function 
        RPoint.prototype.clone = function(...args) 
          
        {
          //print("JS: RPoint.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RPoint.prototype.setZ = function(...args) 
          
        {
          //print("JS: RPoint.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RPoint.prototype.getVectorProperties = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getVectorProperties");
          return this.__PROXY__.getVectorProperties(...args);
        };
    
        // function 
        RPoint.prototype.getPosition = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getPosition");
          return this.__PROXY__.getPosition(...args);
        };
    
        // function 
        RPoint.prototype.setPosition = function(...args) 
          
        {
          //print("JS: RPoint.prototype.setPosition");
          return this.__PROXY__.setPosition(...args);
        };
    
        // function 
        RPoint.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RPoint.prototype.getLength = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getLength");
          return this.__PROXY__.getLength(...args);
        };
    
        // function 
        RPoint.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RPoint.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RPoint.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RPoint.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RPoint.prototype.getPointCloud = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getPointCloud");
          return this.__PROXY__.getPointCloud(...args);
        };
    
        // function 
        RPoint.prototype.getAngleAt = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getAngleAt");
          return this.__PROXY__.getAngleAt(...args);
        };
    
        // function 
        RPoint.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RPoint.prototype.move = function(...args) 
          
        {
          //print("JS: RPoint.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RPoint.prototype.rotate = function(...args) 
          
        {
          //print("JS: RPoint.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RPoint.prototype.scale = function(...args) 
          
        {
          //print("JS: RPoint.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RPoint.prototype.mirror = function(...args) 
          
        {
          //print("JS: RPoint.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RPoint.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RPoint.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RPoint.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RPoint.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RPoint.prototype.getTransformed = function(...args) 
          
        {
          //print("JS: RPoint.prototype.getTransformed");
          return this.__PROXY__.getTransformed(...args);
        };
    
        // function 
        RPoint.prototype.print = function(...args) 
          
        {
          //print("JS: RPoint.prototype.print");
          return this.__PROXY__.print(...args);
        };
    
        // function 
        RPoint.prototype.copy = function(...args) 
          
        {
          //print("JS: RPoint.prototype.copy");
          return this.__PROXY__.copy(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RPoint.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPoint.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RPoint.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      