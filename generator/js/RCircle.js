
      // auto generated
      //var self;

      // class constructor:
      function RCircle() {
        

        // should be RCircle_BaseJs.call(this, engine):
        //RCircle.prototype = new RCircle_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RCircle.getIdStatic()))) {

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
            qWarning("RCircle.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RCircle_Wrapper(
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

      

        //copyProperties(this, wrapper, RCircle);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RCircle_Wrapper(
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

      

        //copyProperties(this, wrapper, RCircle);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RCircle_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle(): wrong number / type of arguments");
      
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
              Object.defineProperty(this, 'center', {
                  get() {
                      
                          return this.__PROXY__.getCenter();
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setCenter(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'radius', {
                  get() {
                      
                          return this.__PROXY__.getRadius();
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setRadius(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            

      }

      //RCircle.prototype = new RCircle_BaseJs(engine);
      //RCircle.prototype = new RCircle_Wrapper(engine);
      RCircle.prototype = new Object();

      RCircle.prototype.toString = function() {
          //return "RCircle [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RCircle [JS]";
        };
      RCircle.getObjectType = function() {
        return RJSType_RCircle.getIdStatic();
      };

      RCircle.prototype.getObjectType = function() {
        return RJSType_RCircle.getIdStatic();
      };

      RCircle.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RCircle.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RShape.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RCircle.Unknown = RCircle_Wrapper.Unknown;
RCircle.Point = RCircle_Wrapper.Point;
RCircle.Line = RCircle_Wrapper.Line;
RCircle.Arc = RCircle_Wrapper.Arc;
RCircle.Circle = RCircle_Wrapper.Circle;
RCircle.Ellipse = RCircle_Wrapper.Ellipse;
RCircle.Polyline = RCircle_Wrapper.Polyline;
RCircle.Spline = RCircle_Wrapper.Spline;
RCircle.Triangle = RCircle_Wrapper.Triangle;
RCircle.XLine = RCircle_Wrapper.XLine;
RCircle.Ray = RCircle_Wrapper.Ray;


      // functions:
      
        // function 
        RCircle.prototype.isInterpolated = function(...args) 
          
        {
          //print("JS: RCircle.prototype.isInterpolated");
          return this.__PROXY__.isInterpolated(...args);
        };
    
        // function 
        RCircle.prototype.getClosestPointOnShape = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getClosestPointOnShape");
          return this.__PROXY__.getClosestPointOnShape(...args);
        };
    
        // function 
        RCircle.prototype.to2D = function(...args) 
          
        {
          //print("JS: RCircle.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RCircle.prototype.equals = function(...args) 
          
        {
          //print("JS: RCircle.prototype.equals");
          return this.__PROXY__.equals(...args);
        };
    
        // function 
        RCircle.prototype.getIntProperties = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getIntProperties");
          return this.__PROXY__.getIntProperties(...args);
        };
    
        // function 
        RCircle.prototype.getBoolProperties = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getBoolProperties");
          return this.__PROXY__.getBoolProperties(...args);
        };
    
        // function 
        RCircle.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RCircle.prototype.getMaxDistanceTo = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getMaxDistanceTo");
          return this.__PROXY__.getMaxDistanceTo(...args);
        };
    
        // function 
        RCircle.prototype.isOnShape = function(...args) 
          
        {
          //print("JS: RCircle.prototype.isOnShape");
          return this.__PROXY__.isOnShape(...args);
        };
    
        // function 
        RCircle.prototype.filterOnShape = function(...args) 
          
        {
          //print("JS: RCircle.prototype.filterOnShape");
          return this.__PROXY__.filterOnShape(...args);
        };
    
        // function 
        RCircle.prototype.getVectorFromEndpointTo = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getVectorFromEndpointTo");
          return this.__PROXY__.getVectorFromEndpointTo(...args);
        };
    
        // function 
        RCircle.prototype.getPointOnShape = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getPointOnShape");
          return this.__PROXY__.getPointOnShape(...args);
        };
    
        // function 
        RCircle.prototype.getPointWithDistanceToStart = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getPointWithDistanceToStart");
          return this.__PROXY__.getPointWithDistanceToStart(...args);
        };
    
        // function 
        RCircle.prototype.getPointWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getPointWithDistanceToEnd");
          return this.__PROXY__.getPointWithDistanceToEnd(...args);
        };
    
        // function 
        RCircle.prototype.getAngleAtPoint = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getAngleAtPoint");
          return this.__PROXY__.getAngleAtPoint(...args);
        };
    
        // function 
        RCircle.prototype.getPointAtPercent = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getPointAtPercent");
          return this.__PROXY__.getPointAtPercent(...args);
        };
    
        // function 
        RCircle.prototype.getAngleAtPercent = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getAngleAtPercent");
          return this.__PROXY__.getAngleAtPercent(...args);
        };
    
        // function 
        RCircle.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RCircle.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RCircle.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RCircle.prototype.getSelfIntersectionPoints = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getSelfIntersectionPoints");
          return this.__PROXY__.getSelfIntersectionPoints(...args);
        };
    
        // function 
        RCircle.prototype.isDirected = function(...args) 
          
        {
          //print("JS: RCircle.prototype.isDirected");
          return this.__PROXY__.isDirected(...args);
        };
    
        // function 
        RCircle.prototype.getDirection1 = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getDirection1");
          return this.__PROXY__.getDirection1(...args);
        };
    
        // function 
        RCircle.prototype.getDirection2 = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getDirection2");
          return this.__PROXY__.getDirection2(...args);
        };
    
        // function 
        RCircle.prototype.getSideOfPoint = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getSideOfPoint");
          return this.__PROXY__.getSideOfPoint(...args);
        };
    
        // function 
        RCircle.prototype.getStartPoint = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getStartPoint");
          return this.__PROXY__.getStartPoint(...args);
        };
    
        // function 
        RCircle.prototype.getEndPoint = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getEndPoint");
          return this.__PROXY__.getEndPoint(...args);
        };
    
        // function 
        RCircle.prototype.getMiddlePoint = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getMiddlePoint");
          return this.__PROXY__.getMiddlePoint(...args);
        };
    
        // function 
        RCircle.prototype.reverse = function(...args) 
          
        {
          //print("JS: RCircle.prototype.reverse");
          return this.__PROXY__.reverse(...args);
        };
    
        // function 
        RCircle.prototype.trimStartPoint = function(...args) 
          
        {
          //print("JS: RCircle.prototype.trimStartPoint");
          return this.__PROXY__.trimStartPoint(...args);
        };
    
        // function 
        RCircle.prototype.trimEndPoint = function(...args) 
          
        {
          //print("JS: RCircle.prototype.trimEndPoint");
          return this.__PROXY__.trimEndPoint(...args);
        };
    
        // function 
        RCircle.prototype.getTrimEnd = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getTrimEnd");
          return this.__PROXY__.getTrimEnd(...args);
        };
    
        // function 
        RCircle.prototype.getDistanceFromStart = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getDistanceFromStart");
          return this.__PROXY__.getDistanceFromStart(...args);
        };
    
        // function 
        RCircle.prototype.getDistancesFromStart = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getDistancesFromStart");
          return this.__PROXY__.getDistancesFromStart(...args);
        };
    
        // function 
        RCircle.prototype.stretch = function(...args) 
          
        {
          //print("JS: RCircle.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RCircle.prototype.dump = function(...args) 
          
        {
          //print("JS: RCircle.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RCircle.prototype.getShapeType = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getShapeType");
          return this.__PROXY__.getShapeType(...args);
        };
    
        // function 
        RCircle.prototype.clone = function(...args) 
          
        {
          //print("JS: RCircle.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RCircle.prototype.createFrom2Points = function(...args) 
          
        {
          //print("JS: RCircle.prototype.createFrom2Points");
          return this.__PROXY__.createFrom2Points(...args);
        };
    
        // function 
        RCircle.prototype.createFrom3Points = function(...args) 
          
        {
          //print("JS: RCircle.prototype.createFrom3Points");
          return this.__PROXY__.createFrom3Points(...args);
        };
    
        // function 
        RCircle.prototype.toArc = function(...args) 
          
        {
          //print("JS: RCircle.prototype.toArc");
          return this.__PROXY__.toArc(...args);
        };
    
        // function 
        RCircle.prototype.isValid = function(...args) 
          
        {
          //print("JS: RCircle.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RCircle.prototype.setZ = function(...args) 
          
        {
          //print("JS: RCircle.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RCircle.prototype.getVectorProperties = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getVectorProperties");
          return this.__PROXY__.getVectorProperties(...args);
        };
    
        // function 
        RCircle.prototype.getDoubleProperties = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getDoubleProperties");
          return this.__PROXY__.getDoubleProperties(...args);
        };
    
        // function 
        RCircle.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RCircle.prototype.getLength = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getLength");
          return this.__PROXY__.getLength(...args);
        };
    
        // function 
        RCircle.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RCircle.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RCircle.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RCircle.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RCircle.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RCircle.prototype.getPointCloud = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getPointCloud");
          return this.__PROXY__.getPointCloud(...args);
        };
    
        // function 
        RCircle.prototype.getAngleAt = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getAngleAt");
          return this.__PROXY__.getAngleAt(...args);
        };
    
        // function 
        RCircle.prototype.getPointAtAngle = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getPointAtAngle");
          return this.__PROXY__.getPointAtAngle(...args);
        };
    
        // function 
        RCircle.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RCircle.prototype.getCenter = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getCenter");
          return this.__PROXY__.getCenter(...args);
        };
    
        // function 
        RCircle.prototype.setCenter = function(...args) 
          
        {
          //print("JS: RCircle.prototype.setCenter");
          return this.__PROXY__.setCenter(...args);
        };
    
        // function 
        RCircle.prototype.getRadius = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getRadius");
          return this.__PROXY__.getRadius(...args);
        };
    
        // function 
        RCircle.prototype.setRadius = function(...args) 
          
        {
          //print("JS: RCircle.prototype.setRadius");
          return this.__PROXY__.setRadius(...args);
        };
    
        // function 
        RCircle.prototype.getDiameter = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getDiameter");
          return this.__PROXY__.getDiameter(...args);
        };
    
        // function 
        RCircle.prototype.setDiameter = function(...args) 
          
        {
          //print("JS: RCircle.prototype.setDiameter");
          return this.__PROXY__.setDiameter(...args);
        };
    
        // function 
        RCircle.prototype.getCircumference = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getCircumference");
          return this.__PROXY__.getCircumference(...args);
        };
    
        // function 
        RCircle.prototype.setCircumference = function(...args) 
          
        {
          //print("JS: RCircle.prototype.setCircumference");
          return this.__PROXY__.setCircumference(...args);
        };
    
        // function 
        RCircle.prototype.getArea = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getArea");
          return this.__PROXY__.getArea(...args);
        };
    
        // function 
        RCircle.prototype.setArea = function(...args) 
          
        {
          //print("JS: RCircle.prototype.setArea");
          return this.__PROXY__.setArea(...args);
        };
    
        // function 
        RCircle.prototype.contains = function(...args) 
          
        {
          //print("JS: RCircle.prototype.contains");
          return this.__PROXY__.contains(...args);
        };
    
        // function 
        RCircle.prototype.move = function(...args) 
          
        {
          //print("JS: RCircle.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RCircle.prototype.rotate = function(...args) 
          
        {
          //print("JS: RCircle.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RCircle.prototype.scale = function(...args) 
          
        {
          //print("JS: RCircle.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RCircle.prototype.mirror = function(...args) 
          
        {
          //print("JS: RCircle.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RCircle.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RCircle.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RCircle.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RCircle.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RCircle.prototype.getTransformed = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getTransformed");
          return this.__PROXY__.getTransformed(...args);
        };
    
        // function 
        RCircle.prototype.getTangents = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getTangents");
          return this.__PROXY__.getTangents(...args);
        };
    
        // function 
        RCircle.prototype.getOffsetShapes = function(...args) 
          
        {
          //print("JS: RCircle.prototype.getOffsetShapes");
          return this.__PROXY__.getOffsetShapes(...args);
        };
    
        // function 
        RCircle.prototype.splitAt = function(...args) 
          
        {
          //print("JS: RCircle.prototype.splitAt");
          return this.__PROXY__.splitAt(...args);
        };
    
        // function 
        RCircle.prototype.print = function(...args) 
          
        {
          //print("JS: RCircle.prototype.print");
          return this.__PROXY__.print(...args);
        };
    
        // function 
        RCircle.prototype.copy = function(...args) 
          
        {
          //print("JS: RCircle.prototype.copy");
          return this.__PROXY__.copy(...args);
        };
    

      // static functions:
      

        // static function 
        RCircle.createFrom2Points = function() 
          
        {
          //print("JS: RCircle.createFrom2Points");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.createFrom2Points(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.createFrom2Points(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircle.createFrom3Points = function() 
          
        {
          //print("JS: RCircle.createFrom3Points");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RCircle_WrapperSingletonInstance.createFrom3Points(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RCircle);
  }

  
  else {
    
        print("RCircle.createFrom3Points(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RCircle.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RCircle.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RCircle.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      