
      // auto generated
      //var self;

      // class constructor:
      function RTextLabel() {
        

        // should be RTextLabel_BaseJs.call(this, engine):
        //RTextLabel.prototype = new RTextLabel_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTextLabel.getIdStatic()))) {

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
            qWarning("RTextLabel.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new RTextLabel_Wrapper(
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

      

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RTextLabel_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTextLabel);
  }

  
  else {
    
        print("RTextLabel(): wrong number / type of arguments");
      
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

      //RTextLabel.prototype = new RTextLabel_BaseJs(engine);
      //RTextLabel.prototype = new RTextLabel_Wrapper(engine);
      RTextLabel.prototype = new Object();

      RTextLabel.prototype.toString = function() {
          //return "RTextLabel [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTextLabel [JS]";
        };
      RTextLabel.getObjectType = function() {
        return RJSType_RTextLabel.getIdStatic();
      };

      RTextLabel.prototype.getObjectType = function() {
        return RJSType_RTextLabel.getIdStatic();
      };

      RTextLabel.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTextLabel.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RShape.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RPoint.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RTextLabel.Unknown = RTextLabel_Wrapper.Unknown;
RTextLabel.Point = RTextLabel_Wrapper.Point;
RTextLabel.Line = RTextLabel_Wrapper.Line;
RTextLabel.Arc = RTextLabel_Wrapper.Arc;
RTextLabel.Circle = RTextLabel_Wrapper.Circle;
RTextLabel.Ellipse = RTextLabel_Wrapper.Ellipse;
RTextLabel.Polyline = RTextLabel_Wrapper.Polyline;
RTextLabel.Spline = RTextLabel_Wrapper.Spline;
RTextLabel.Triangle = RTextLabel_Wrapper.Triangle;
RTextLabel.XLine = RTextLabel_Wrapper.XLine;
RTextLabel.Ray = RTextLabel_Wrapper.Ray;


      // functions:
      
        // function 
        RTextLabel.prototype.isValid = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RTextLabel.prototype.isInterpolated = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.isInterpolated");
          return this.__PROXY__.isInterpolated(...args);
        };
    
        // function 
        RTextLabel.prototype.getClosestPointOnShape = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getClosestPointOnShape");
          return this.__PROXY__.getClosestPointOnShape(...args);
        };
    
        // function 
        RTextLabel.prototype.to2D = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RTextLabel.prototype.equals = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.equals");
          return this.__PROXY__.equals(...args);
        };
    
        // function 
        RTextLabel.prototype.getIntProperties = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getIntProperties");
          return this.__PROXY__.getIntProperties(...args);
        };
    
        // function 
        RTextLabel.prototype.getDoubleProperties = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getDoubleProperties");
          return this.__PROXY__.getDoubleProperties(...args);
        };
    
        // function 
        RTextLabel.prototype.getBoolProperties = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getBoolProperties");
          return this.__PROXY__.getBoolProperties(...args);
        };
    
        // function 
        RTextLabel.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RTextLabel.prototype.getMaxDistanceTo = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getMaxDistanceTo");
          return this.__PROXY__.getMaxDistanceTo(...args);
        };
    
        // function 
        RTextLabel.prototype.isOnShape = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.isOnShape");
          return this.__PROXY__.isOnShape(...args);
        };
    
        // function 
        RTextLabel.prototype.filterOnShape = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.filterOnShape");
          return this.__PROXY__.filterOnShape(...args);
        };
    
        // function 
        RTextLabel.prototype.getVectorFromEndpointTo = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getVectorFromEndpointTo");
          return this.__PROXY__.getVectorFromEndpointTo(...args);
        };
    
        // function 
        RTextLabel.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RTextLabel.prototype.getPointOnShape = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getPointOnShape");
          return this.__PROXY__.getPointOnShape(...args);
        };
    
        // function 
        RTextLabel.prototype.getPointWithDistanceToStart = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getPointWithDistanceToStart");
          return this.__PROXY__.getPointWithDistanceToStart(...args);
        };
    
        // function 
        RTextLabel.prototype.getPointWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getPointWithDistanceToEnd");
          return this.__PROXY__.getPointWithDistanceToEnd(...args);
        };
    
        // function 
        RTextLabel.prototype.getAngleAtPoint = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getAngleAtPoint");
          return this.__PROXY__.getAngleAtPoint(...args);
        };
    
        // function 
        RTextLabel.prototype.getPointAtPercent = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getPointAtPercent");
          return this.__PROXY__.getPointAtPercent(...args);
        };
    
        // function 
        RTextLabel.prototype.getAngleAtPercent = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getAngleAtPercent");
          return this.__PROXY__.getAngleAtPercent(...args);
        };
    
        // function 
        RTextLabel.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RTextLabel.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RTextLabel.prototype.getSelfIntersectionPoints = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getSelfIntersectionPoints");
          return this.__PROXY__.getSelfIntersectionPoints(...args);
        };
    
        // function 
        RTextLabel.prototype.isDirected = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.isDirected");
          return this.__PROXY__.isDirected(...args);
        };
    
        // function 
        RTextLabel.prototype.getDirection1 = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getDirection1");
          return this.__PROXY__.getDirection1(...args);
        };
    
        // function 
        RTextLabel.prototype.getDirection2 = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getDirection2");
          return this.__PROXY__.getDirection2(...args);
        };
    
        // function 
        RTextLabel.prototype.getSideOfPoint = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getSideOfPoint");
          return this.__PROXY__.getSideOfPoint(...args);
        };
    
        // function 
        RTextLabel.prototype.getStartPoint = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getStartPoint");
          return this.__PROXY__.getStartPoint(...args);
        };
    
        // function 
        RTextLabel.prototype.getEndPoint = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getEndPoint");
          return this.__PROXY__.getEndPoint(...args);
        };
    
        // function 
        RTextLabel.prototype.getMiddlePoint = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getMiddlePoint");
          return this.__PROXY__.getMiddlePoint(...args);
        };
    
        // function 
        RTextLabel.prototype.reverse = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.reverse");
          return this.__PROXY__.reverse(...args);
        };
    
        // function 
        RTextLabel.prototype.trimStartPoint = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.trimStartPoint");
          return this.__PROXY__.trimStartPoint(...args);
        };
    
        // function 
        RTextLabel.prototype.trimEndPoint = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.trimEndPoint");
          return this.__PROXY__.trimEndPoint(...args);
        };
    
        // function 
        RTextLabel.prototype.getTrimEnd = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getTrimEnd");
          return this.__PROXY__.getTrimEnd(...args);
        };
    
        // function 
        RTextLabel.prototype.getDistanceFromStart = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getDistanceFromStart");
          return this.__PROXY__.getDistanceFromStart(...args);
        };
    
        // function 
        RTextLabel.prototype.getDistancesFromStart = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getDistancesFromStart");
          return this.__PROXY__.getDistancesFromStart(...args);
        };
    
        // function 
        RTextLabel.prototype.stretch = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RTextLabel.prototype.getOffsetShapes = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getOffsetShapes");
          return this.__PROXY__.getOffsetShapes(...args);
        };
    
        // function 
        RTextLabel.prototype.splitAt = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.splitAt");
          return this.__PROXY__.splitAt(...args);
        };
    
        // function 
        RTextLabel.prototype.dump = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RTextLabel.prototype.getShapeType = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getShapeType");
          return this.__PROXY__.getShapeType(...args);
        };
    
        // function 
        RTextLabel.prototype.setZ = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RTextLabel.prototype.getVectorProperties = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getVectorProperties");
          return this.__PROXY__.getVectorProperties(...args);
        };
    
        // function 
        RTextLabel.prototype.getPosition = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getPosition");
          return this.__PROXY__.getPosition(...args);
        };
    
        // function 
        RTextLabel.prototype.setPosition = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.setPosition");
          return this.__PROXY__.setPosition(...args);
        };
    
        // function 
        RTextLabel.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RTextLabel.prototype.getLength = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getLength");
          return this.__PROXY__.getLength(...args);
        };
    
        // function 
        RTextLabel.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RTextLabel.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RTextLabel.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RTextLabel.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RTextLabel.prototype.getPointCloud = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getPointCloud");
          return this.__PROXY__.getPointCloud(...args);
        };
    
        // function 
        RTextLabel.prototype.getAngleAt = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getAngleAt");
          return this.__PROXY__.getAngleAt(...args);
        };
    
        // function 
        RTextLabel.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RTextLabel.prototype.move = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RTextLabel.prototype.rotate = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RTextLabel.prototype.scale = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RTextLabel.prototype.mirror = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RTextLabel.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RTextLabel.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RTextLabel.prototype.getTransformed = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getTransformed");
          return this.__PROXY__.getTransformed(...args);
        };
    
        // function 
        RTextLabel.prototype.copy = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.copy");
          return this.__PROXY__.copy(...args);
        };
    
        // function 
        RTextLabel.prototype.clone = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RTextLabel.prototype.getText = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getText");
          return this.__PROXY__.getText(...args);
        };
    
        // function 
        RTextLabel.prototype.getUserData = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.getUserData");
          return this.__PROXY__.getUserData(...args);
        };
    
        // function 
        RTextLabel.prototype.print = function(...args) 
          
        {
          //print("JS: RTextLabel.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RTextLabel.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTextLabel.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RTextLabel.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      