
      // auto generated
      //var self;

      // class constructor:
      function RArc() {
        

        // should be RArc_BaseJs.call(this, engine):
        //RArc.prototype = new RArc_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RArc.getIdStatic()))) {

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
            qWarning("RArc.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 5 &&
          arguments.length <= 6) {
    
            self = this;
            wrapper = new RArc_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RArc);
  }

  
  else 
  
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
            self = this;
            wrapper = new RArc_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RArc);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RArc_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc(): wrong number / type of arguments");
      
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
            
              // define property setters/getters:
              Object.defineProperty(this, 'startAngle', {
                  get() {
                      
                          return this.__PROXY__.getStartAngle();
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setStartAngle(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'endAngle', {
                  get() {
                      
                          return this.__PROXY__.getEndAngle();
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setEndAngle(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'reversed', {
                  get() {
                      
                          return this.__PROXY__.isReversed();
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setReversed(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            

      }

      //RArc.prototype = new RArc_BaseJs(engine);
      //RArc.prototype = new RArc_Wrapper(engine);
      RArc.prototype = new Object();

      RArc.prototype.toString = function() {
          //return "RArc [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RArc [JS]";
        };
      RArc.getObjectType = function() {
        return RJSType_RArc.getIdStatic();
      };

      RArc.prototype.getObjectType = function() {
        return RJSType_RArc.getIdStatic();
      };

      RArc.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RArc.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RShape.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RArc.Unknown = RArc_Wrapper.Unknown;
RArc.Point = RArc_Wrapper.Point;
RArc.Line = RArc_Wrapper.Line;
RArc.Arc = RArc_Wrapper.Arc;
RArc.Circle = RArc_Wrapper.Circle;
RArc.Ellipse = RArc_Wrapper.Ellipse;
RArc.Polyline = RArc_Wrapper.Polyline;
RArc.Spline = RArc_Wrapper.Spline;
RArc.Triangle = RArc_Wrapper.Triangle;
RArc.XLine = RArc_Wrapper.XLine;
RArc.Ray = RArc_Wrapper.Ray;


      // functions:
      
        // function 
        RArc.prototype.isInterpolated = function(...args) 
          
        {
          //print("JS: RArc.prototype.isInterpolated");
          return this.__PROXY__.isInterpolated(...args);
        };
    
        // function 
        RArc.prototype.getClosestPointOnShape = function(...args) 
          
        {
          //print("JS: RArc.prototype.getClosestPointOnShape");
          return this.__PROXY__.getClosestPointOnShape(...args);
        };
    
        // function 
        RArc.prototype.to2D = function(...args) 
          
        {
          //print("JS: RArc.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RArc.prototype.equals = function(...args) 
          
        {
          //print("JS: RArc.prototype.equals");
          return this.__PROXY__.equals(...args);
        };
    
        // function 
        RArc.prototype.getIntProperties = function(...args) 
          
        {
          //print("JS: RArc.prototype.getIntProperties");
          return this.__PROXY__.getIntProperties(...args);
        };
    
        // function 
        RArc.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RArc.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RArc.prototype.getMaxDistanceTo = function(...args) 
          
        {
          //print("JS: RArc.prototype.getMaxDistanceTo");
          return this.__PROXY__.getMaxDistanceTo(...args);
        };
    
        // function 
        RArc.prototype.isOnShape = function(...args) 
          
        {
          //print("JS: RArc.prototype.isOnShape");
          return this.__PROXY__.isOnShape(...args);
        };
    
        // function 
        RArc.prototype.filterOnShape = function(...args) 
          
        {
          //print("JS: RArc.prototype.filterOnShape");
          return this.__PROXY__.filterOnShape(...args);
        };
    
        // function 
        RArc.prototype.getVectorFromEndpointTo = function(...args) 
          
        {
          //print("JS: RArc.prototype.getVectorFromEndpointTo");
          return this.__PROXY__.getVectorFromEndpointTo(...args);
        };
    
        // function 
        RArc.prototype.getPointOnShape = function(...args) 
          
        {
          //print("JS: RArc.prototype.getPointOnShape");
          return this.__PROXY__.getPointOnShape(...args);
        };
    
        // function 
        RArc.prototype.getPointWithDistanceToStart = function(...args) 
          
        {
          //print("JS: RArc.prototype.getPointWithDistanceToStart");
          return this.__PROXY__.getPointWithDistanceToStart(...args);
        };
    
        // function 
        RArc.prototype.getPointWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RArc.prototype.getPointWithDistanceToEnd");
          return this.__PROXY__.getPointWithDistanceToEnd(...args);
        };
    
        // function 
        RArc.prototype.getAngleAtPoint = function(...args) 
          
        {
          //print("JS: RArc.prototype.getAngleAtPoint");
          return this.__PROXY__.getAngleAtPoint(...args);
        };
    
        // function 
        RArc.prototype.getPointAtPercent = function(...args) 
          
        {
          //print("JS: RArc.prototype.getPointAtPercent");
          return this.__PROXY__.getPointAtPercent(...args);
        };
    
        // function 
        RArc.prototype.getAngleAtPercent = function(...args) 
          
        {
          //print("JS: RArc.prototype.getAngleAtPercent");
          return this.__PROXY__.getAngleAtPercent(...args);
        };
    
        // function 
        RArc.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RArc.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RArc.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RArc.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RArc.prototype.getSelfIntersectionPoints = function(...args) 
          
        {
          //print("JS: RArc.prototype.getSelfIntersectionPoints");
          return this.__PROXY__.getSelfIntersectionPoints(...args);
        };
    
        // function 
        RArc.prototype.getDistancesFromStart = function(...args) 
          
        {
          //print("JS: RArc.prototype.getDistancesFromStart");
          return this.__PROXY__.getDistancesFromStart(...args);
        };
    
        // function 
        RArc.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RArc.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RArc.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RArc.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RArc.prototype.dump = function(...args) 
          
        {
          //print("JS: RArc.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RArc.prototype.getShapeType = function(...args) 
          
        {
          //print("JS: RArc.prototype.getShapeType");
          return this.__PROXY__.getShapeType(...args);
        };
    
        // function 
        RArc.prototype.clone = function(...args) 
          
        {
          //print("JS: RArc.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RArc.prototype.isDirected = function(...args) 
          
        {
          //print("JS: RArc.prototype.isDirected");
          return this.__PROXY__.isDirected(...args);
        };
    
        // function 
        RArc.prototype.setZ = function(...args) 
          
        {
          //print("JS: RArc.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RArc.prototype.getVectorProperties = function(...args) 
          
        {
          //print("JS: RArc.prototype.getVectorProperties");
          return this.__PROXY__.getVectorProperties(...args);
        };
    
        // function 
        RArc.prototype.getDoubleProperties = function(...args) 
          
        {
          //print("JS: RArc.prototype.getDoubleProperties");
          return this.__PROXY__.getDoubleProperties(...args);
        };
    
        // function 
        RArc.prototype.getBoolProperties = function(...args) 
          
        {
          //print("JS: RArc.prototype.getBoolProperties");
          return this.__PROXY__.getBoolProperties(...args);
        };
    
        // function 
        RArc.prototype.isValid = function(...args) 
          
        {
          //print("JS: RArc.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RArc.prototype.isFullCircle = function(...args) 
          
        {
          //print("JS: RArc.prototype.isFullCircle");
          return this.__PROXY__.isFullCircle(...args);
        };
    
        // function 
        RArc.prototype.createFrom3Points = function(...args) 
          
        {
          //print("JS: RArc.prototype.createFrom3Points");
          return this.__PROXY__.createFrom3Points(...args);
        };
    
        // function 
        RArc.prototype.createFrom2PBulge = function(...args) 
          
        {
          //print("JS: RArc.prototype.createFrom2PBulge");
          return this.__PROXY__.createFrom2PBulge(...args);
        };
    
        // function 
        RArc.prototype.createTangential = function(...args) 
          
        {
          //print("JS: RArc.prototype.createTangential");
          return this.__PROXY__.createTangential(...args);
        };
    
        // function 
        RArc.prototype.createBiarc = function(...args) 
          
        {
          //print("JS: RArc.prototype.createBiarc");
          return this.__PROXY__.createBiarc(...args);
        };
    
        // function 
        RArc.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RArc.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RArc.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RArc.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RArc.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RArc.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RArc.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RArc.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RArc.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RArc.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RArc.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RArc.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RArc.prototype.getPointCloud = function(...args) 
          
        {
          //print("JS: RArc.prototype.getPointCloud");
          return this.__PROXY__.getPointCloud(...args);
        };
    
        // function 
        RArc.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RArc.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RArc.prototype.getCenter = function(...args) 
          
        {
          //print("JS: RArc.prototype.getCenter");
          return this.__PROXY__.getCenter(...args);
        };
    
        // function 
        RArc.prototype.setCenter = function(...args) 
          
        {
          //print("JS: RArc.prototype.setCenter");
          return this.__PROXY__.setCenter(...args);
        };
    
        // function 
        RArc.prototype.getRadius = function(...args) 
          
        {
          //print("JS: RArc.prototype.getRadius");
          return this.__PROXY__.getRadius(...args);
        };
    
        // function 
        RArc.prototype.setRadius = function(...args) 
          
        {
          //print("JS: RArc.prototype.setRadius");
          return this.__PROXY__.setRadius(...args);
        };
    
        // function 
        RArc.prototype.getStartAngle = function(...args) 
          
        {
          //print("JS: RArc.prototype.getStartAngle");
          return this.__PROXY__.getStartAngle(...args);
        };
    
        // function 
        RArc.prototype.setStartAngle = function(...args) 
          
        {
          //print("JS: RArc.prototype.setStartAngle");
          return this.__PROXY__.setStartAngle(...args);
        };
    
        // function 
        RArc.prototype.getEndAngle = function(...args) 
          
        {
          //print("JS: RArc.prototype.getEndAngle");
          return this.__PROXY__.getEndAngle(...args);
        };
    
        // function 
        RArc.prototype.setEndAngle = function(...args) 
          
        {
          //print("JS: RArc.prototype.setEndAngle");
          return this.__PROXY__.setEndAngle(...args);
        };
    
        // function 
        RArc.prototype.isReversed = function(...args) 
          
        {
          //print("JS: RArc.prototype.isReversed");
          return this.__PROXY__.isReversed(...args);
        };
    
        // function 
        RArc.prototype.setReversed = function(...args) 
          
        {
          //print("JS: RArc.prototype.setReversed");
          return this.__PROXY__.setReversed(...args);
        };
    
        // function 
        RArc.prototype.getAngleLength = function(...args) 
          
        {
          //print("JS: RArc.prototype.getAngleLength");
          return this.__PROXY__.getAngleLength(...args);
        };
    
        // function 
        RArc.prototype.isAngleWithinArc = function(...args) 
          
        {
          //print("JS: RArc.prototype.isAngleWithinArc");
          return this.__PROXY__.isAngleWithinArc(...args);
        };
    
        // function 
        RArc.prototype.getDiameter = function(...args) 
          
        {
          //print("JS: RArc.prototype.getDiameter");
          return this.__PROXY__.getDiameter(...args);
        };
    
        // function 
        RArc.prototype.setDiameter = function(...args) 
          
        {
          //print("JS: RArc.prototype.setDiameter");
          return this.__PROXY__.setDiameter(...args);
        };
    
        // function 
        RArc.prototype.setLength = function(...args) 
          
        {
          //print("JS: RArc.prototype.setLength");
          return this.__PROXY__.setLength(...args);
        };
    
        // function 
        RArc.prototype.getArea = function(...args) 
          
        {
          //print("JS: RArc.prototype.getArea");
          return this.__PROXY__.getArea(...args);
        };
    
        // function 
        RArc.prototype.setArea = function(...args) 
          
        {
          //print("JS: RArc.prototype.setArea");
          return this.__PROXY__.setArea(...args);
        };
    
        // function 
        RArc.prototype.getChordArea = function(...args) 
          
        {
          //print("JS: RArc.prototype.getChordArea");
          return this.__PROXY__.getChordArea(...args);
        };
    
        // function 
        RArc.prototype.getDirection1 = function(...args) 
          
        {
          //print("JS: RArc.prototype.getDirection1");
          return this.__PROXY__.getDirection1(...args);
        };
    
        // function 
        RArc.prototype.getDirection2 = function(...args) 
          
        {
          //print("JS: RArc.prototype.getDirection2");
          return this.__PROXY__.getDirection2(...args);
        };
    
        // function 
        RArc.prototype.getSideOfPoint = function(...args) 
          
        {
          //print("JS: RArc.prototype.getSideOfPoint");
          return this.__PROXY__.getSideOfPoint(...args);
        };
    
        // function 
        RArc.prototype.getSweep = function(...args) 
          
        {
          //print("JS: RArc.prototype.getSweep");
          return this.__PROXY__.getSweep(...args);
        };
    
        // function 
        RArc.prototype.setSweep = function(...args) 
          
        {
          //print("JS: RArc.prototype.setSweep");
          return this.__PROXY__.setSweep(...args);
        };
    
        // function 
        RArc.prototype.getLength = function(...args) 
          
        {
          //print("JS: RArc.prototype.getLength");
          return this.__PROXY__.getLength(...args);
        };
    
        // function 
        RArc.prototype.getStartPoint = function(...args) 
          
        {
          //print("JS: RArc.prototype.getStartPoint");
          return this.__PROXY__.getStartPoint(...args);
        };
    
        // function 
        RArc.prototype.getEndPoint = function(...args) 
          
        {
          //print("JS: RArc.prototype.getEndPoint");
          return this.__PROXY__.getEndPoint(...args);
        };
    
        // function 
        RArc.prototype.getPointAtAngle = function(...args) 
          
        {
          //print("JS: RArc.prototype.getPointAtAngle");
          return this.__PROXY__.getPointAtAngle(...args);
        };
    
        // function 
        RArc.prototype.getAngleAt = function(...args) 
          
        {
          //print("JS: RArc.prototype.getAngleAt");
          return this.__PROXY__.getAngleAt(...args);
        };
    
        // function 
        RArc.prototype.getMiddlePoint = function(...args) 
          
        {
          //print("JS: RArc.prototype.getMiddlePoint");
          return this.__PROXY__.getMiddlePoint(...args);
        };
    
        // function 
        RArc.prototype.moveStartPoint = function(...args) 
          
        {
          //print("JS: RArc.prototype.moveStartPoint");
          return this.__PROXY__.moveStartPoint(...args);
        };
    
        // function 
        RArc.prototype.moveEndPoint = function(...args) 
          
        {
          //print("JS: RArc.prototype.moveEndPoint");
          return this.__PROXY__.moveEndPoint(...args);
        };
    
        // function 
        RArc.prototype.moveMiddlePoint = function(...args) 
          
        {
          //print("JS: RArc.prototype.moveMiddlePoint");
          return this.__PROXY__.moveMiddlePoint(...args);
        };
    
        // function 
        RArc.prototype.getBulge = function(...args) 
          
        {
          //print("JS: RArc.prototype.getBulge");
          return this.__PROXY__.getBulge(...args);
        };
    
        // function 
        RArc.prototype.move = function(...args) 
          
        {
          //print("JS: RArc.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RArc.prototype.rotate = function(...args) 
          
        {
          //print("JS: RArc.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RArc.prototype.scale = function(...args) 
          
        {
          //print("JS: RArc.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RArc.prototype.mirror = function(...args) 
          
        {
          //print("JS: RArc.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RArc.prototype.reverse = function(...args) 
          
        {
          //print("JS: RArc.prototype.reverse");
          return this.__PROXY__.reverse(...args);
        };
    
        // function 
        RArc.prototype.stretch = function(...args) 
          
        {
          //print("JS: RArc.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RArc.prototype.getTransformed = function(...args) 
          
        {
          //print("JS: RArc.prototype.getTransformed");
          return this.__PROXY__.getTransformed(...args);
        };
    
        // function 
        RArc.prototype.getTrimEnd = function(...args) 
          
        {
          //print("JS: RArc.prototype.getTrimEnd");
          return this.__PROXY__.getTrimEnd(...args);
        };
    
        // function 
        RArc.prototype.trimStartPoint = function(...args) 
          
        {
          //print("JS: RArc.prototype.trimStartPoint");
          return this.__PROXY__.trimStartPoint(...args);
        };
    
        // function 
        RArc.prototype.trimEndPoint = function(...args) 
          
        {
          //print("JS: RArc.prototype.trimEndPoint");
          return this.__PROXY__.trimEndPoint(...args);
        };
    
        // function 
        RArc.prototype.getDistanceFromStart = function(...args) 
          
        {
          //print("JS: RArc.prototype.getDistanceFromStart");
          return this.__PROXY__.getDistanceFromStart(...args);
        };
    
        // function 
        RArc.prototype.approximateWithLines = function(...args) 
          
        {
          //print("JS: RArc.prototype.approximateWithLines");
          return this.__PROXY__.approximateWithLines(...args);
        };
    
        // function 
        RArc.prototype.approximateWithLinesTan = function(...args) 
          
        {
          //print("JS: RArc.prototype.approximateWithLinesTan");
          return this.__PROXY__.approximateWithLinesTan(...args);
        };
    
        // function 
        RArc.prototype.getTangents = function(...args) 
          
        {
          //print("JS: RArc.prototype.getTangents");
          return this.__PROXY__.getTangents(...args);
        };
    
        // function 
        RArc.prototype.getOffsetShapes = function(...args) 
          
        {
          //print("JS: RArc.prototype.getOffsetShapes");
          return this.__PROXY__.getOffsetShapes(...args);
        };
    
        // function 
        RArc.prototype.splitAt = function(...args) 
          
        {
          //print("JS: RArc.prototype.splitAt");
          return this.__PROXY__.splitAt(...args);
        };
    
        // function 
        RArc.prototype.splitAtQuadrantLines = function(...args) 
          
        {
          //print("JS: RArc.prototype.splitAtQuadrantLines");
          return this.__PROXY__.splitAtQuadrantLines(...args);
        };
    
        // function 
        RArc.prototype.print = function(...args) 
          
        {
          //print("JS: RArc.prototype.print");
          return this.__PROXY__.print(...args);
        };
    
        // function 
        RArc.prototype.copy = function(...args) 
          
        {
          //print("JS: RArc.prototype.copy");
          return this.__PROXY__.copy(...args);
        };
    

      // static functions:
      

        // static function 
        RArc.createFrom3Points = function() 
          
        {
          //print("JS: RArc.createFrom3Points");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.createFrom3Points(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.createFrom3Points(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.createFrom2PBulge = function() 
          
        {
          //print("JS: RArc.createFrom2PBulge");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.createFrom2PBulge(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.createFrom2PBulge(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.createTangential = function() 
          
        {
          //print("JS: RArc.createTangential");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.createTangential(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.createTangential(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArc.createBiarc = function() 
          
        {
          //print("JS: RArc.createBiarc");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RArc_WrapperSingletonInstance.createBiarc(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RArc);
  }

  
  else {
    
        print("RArc.createBiarc(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RArc.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RArc.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RArc.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      