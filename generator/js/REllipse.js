
      // auto generated
      //var self;

      // class constructor:
      function REllipse() {
        

        // should be REllipse_BaseJs.call(this, engine):
        //REllipse.prototype = new REllipse_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_REllipse.getIdStatic()))) {

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
            qWarning("REllipse.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 6) {
    
            self = this;
            wrapper = new REllipse_Wrapper(
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

      

        //copyProperties(this, wrapper, REllipse);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new REllipse_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse(): wrong number / type of arguments");
      
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

      //REllipse.prototype = new REllipse_BaseJs(engine);
      //REllipse.prototype = new REllipse_Wrapper(engine);
      REllipse.prototype = new Object();

      REllipse.prototype.toString = function() {
          //return "REllipse [JS] [0x" + this.getAddress().toString(16) + "]";
          return "REllipse [JS]";
        };
      REllipse.getObjectType = function() {
        return RJSType_REllipse.getIdStatic();
      };

      REllipse.prototype.getObjectType = function() {
        return RJSType_REllipse.getIdStatic();
      };

      REllipse.prototype.isOfObjectType = function(t) {
        if (t===RJSType_REllipse.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RShape.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Type
REllipse.Unknown = REllipse_Wrapper.Unknown;
REllipse.Point = REllipse_Wrapper.Point;
REllipse.Line = REllipse_Wrapper.Line;
REllipse.Arc = REllipse_Wrapper.Arc;
REllipse.Circle = REllipse_Wrapper.Circle;
REllipse.Ellipse = REllipse_Wrapper.Ellipse;
REllipse.Polyline = REllipse_Wrapper.Polyline;
REllipse.Spline = REllipse_Wrapper.Spline;
REllipse.Triangle = REllipse_Wrapper.Triangle;
REllipse.XLine = REllipse_Wrapper.XLine;
REllipse.Ray = REllipse_Wrapper.Ray;


      // functions:
      
        // function 
        REllipse.prototype.isInterpolated = function(...args) 
          
        {
          //print("JS: REllipse.prototype.isInterpolated");
          return this.__PROXY__.isInterpolated(...args);
        };
    
        // function 
        REllipse.prototype.getClosestPointOnShape = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getClosestPointOnShape");
          return this.__PROXY__.getClosestPointOnShape(...args);
        };
    
        // function 
        REllipse.prototype.to2D = function(...args) 
          
        {
          //print("JS: REllipse.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        REllipse.prototype.equals = function(...args) 
          
        {
          //print("JS: REllipse.prototype.equals");
          return this.__PROXY__.equals(...args);
        };
    
        // function 
        REllipse.prototype.getIntProperties = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getIntProperties");
          return this.__PROXY__.getIntProperties(...args);
        };
    
        // function 
        REllipse.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        REllipse.prototype.getMaxDistanceTo = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getMaxDistanceTo");
          return this.__PROXY__.getMaxDistanceTo(...args);
        };
    
        // function 
        REllipse.prototype.isOnShape = function(...args) 
          
        {
          //print("JS: REllipse.prototype.isOnShape");
          return this.__PROXY__.isOnShape(...args);
        };
    
        // function 
        REllipse.prototype.filterOnShape = function(...args) 
          
        {
          //print("JS: REllipse.prototype.filterOnShape");
          return this.__PROXY__.filterOnShape(...args);
        };
    
        // function 
        REllipse.prototype.getVectorFromEndpointTo = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getVectorFromEndpointTo");
          return this.__PROXY__.getVectorFromEndpointTo(...args);
        };
    
        // function 
        REllipse.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        REllipse.prototype.getPointOnShape = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getPointOnShape");
          return this.__PROXY__.getPointOnShape(...args);
        };
    
        // function 
        REllipse.prototype.getPointWithDistanceToStart = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getPointWithDistanceToStart");
          return this.__PROXY__.getPointWithDistanceToStart(...args);
        };
    
        // function 
        REllipse.prototype.getPointWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getPointWithDistanceToEnd");
          return this.__PROXY__.getPointWithDistanceToEnd(...args);
        };
    
        // function 
        REllipse.prototype.getPointAtPercent = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getPointAtPercent");
          return this.__PROXY__.getPointAtPercent(...args);
        };
    
        // function 
        REllipse.prototype.getAngleAtPercent = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getAngleAtPercent");
          return this.__PROXY__.getAngleAtPercent(...args);
        };
    
        // function 
        REllipse.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: REllipse.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        REllipse.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        REllipse.prototype.getSelfIntersectionPoints = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getSelfIntersectionPoints");
          return this.__PROXY__.getSelfIntersectionPoints(...args);
        };
    
        // function 
        REllipse.prototype.getDistanceFromStart = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getDistanceFromStart");
          return this.__PROXY__.getDistanceFromStart(...args);
        };
    
        // function 
        REllipse.prototype.getDistancesFromStart = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getDistancesFromStart");
          return this.__PROXY__.getDistancesFromStart(...args);
        };
    
        // function 
        REllipse.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: REllipse.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        REllipse.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: REllipse.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        REllipse.prototype.stretch = function(...args) 
          
        {
          //print("JS: REllipse.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        REllipse.prototype.dump = function(...args) 
          
        {
          //print("JS: REllipse.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        REllipse.prototype.print = function(...args) 
          
        {
          //print("JS: REllipse.prototype.print");
          return this.__PROXY__.print(...args);
        };
    
        // function 
        REllipse.prototype.createInscribed = function(...args) 
          
        {
          //print("JS: REllipse.prototype.createInscribed");
          return this.__PROXY__.createInscribed(...args);
        };
    
        // function 
        REllipse.prototype.createFrom4Points = function(...args) 
          
        {
          //print("JS: REllipse.prototype.createFrom4Points");
          return this.__PROXY__.createFrom4Points(...args);
        };
    
        // function 
        REllipse.prototype.getShapeType = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getShapeType");
          return this.__PROXY__.getShapeType(...args);
        };
    
        // function 
        REllipse.prototype.clone = function(...args) 
          
        {
          //print("JS: REllipse.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        REllipse.prototype.isDirected = function(...args) 
          
        {
          //print("JS: REllipse.prototype.isDirected");
          return this.__PROXY__.isDirected(...args);
        };
    
        // function 
        REllipse.prototype.isValid = function(...args) 
          
        {
          //print("JS: REllipse.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        REllipse.prototype.setZ = function(...args) 
          
        {
          //print("JS: REllipse.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        REllipse.prototype.getVectorProperties = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getVectorProperties");
          return this.__PROXY__.getVectorProperties(...args);
        };
    
        // function 
        REllipse.prototype.getDoubleProperties = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getDoubleProperties");
          return this.__PROXY__.getDoubleProperties(...args);
        };
    
        // function 
        REllipse.prototype.getBoolProperties = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getBoolProperties");
          return this.__PROXY__.getBoolProperties(...args);
        };
    
        // function 
        REllipse.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        REllipse.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        REllipse.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        REllipse.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        REllipse.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        REllipse.prototype.getPointCloud = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getPointCloud");
          return this.__PROXY__.getPointCloud(...args);
        };
    
        // function 
        REllipse.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        REllipse.prototype.moveStartPoint = function(...args) 
          
        {
          //print("JS: REllipse.prototype.moveStartPoint");
          return this.__PROXY__.moveStartPoint(...args);
        };
    
        // function 
        REllipse.prototype.moveEndPoint = function(...args) 
          
        {
          //print("JS: REllipse.prototype.moveEndPoint");
          return this.__PROXY__.moveEndPoint(...args);
        };
    
        // function 
        REllipse.prototype.getFoci = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getFoci");
          return this.__PROXY__.getFoci(...args);
        };
    
        // function 
        REllipse.prototype.getCenter = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getCenter");
          return this.__PROXY__.getCenter(...args);
        };
    
        // function 
        REllipse.prototype.setCenter = function(...args) 
          
        {
          //print("JS: REllipse.prototype.setCenter");
          return this.__PROXY__.setCenter(...args);
        };
    
        // function 
        REllipse.prototype.getMajorPoint = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getMajorPoint");
          return this.__PROXY__.getMajorPoint(...args);
        };
    
        // function 
        REllipse.prototype.getMinorPoint = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getMinorPoint");
          return this.__PROXY__.getMinorPoint(...args);
        };
    
        // function 
        REllipse.prototype.setMajorPoint = function(...args) 
          
        {
          //print("JS: REllipse.prototype.setMajorPoint");
          return this.__PROXY__.setMajorPoint(...args);
        };
    
        // function 
        REllipse.prototype.setMinorPoint = function(...args) 
          
        {
          //print("JS: REllipse.prototype.setMinorPoint");
          return this.__PROXY__.setMinorPoint(...args);
        };
    
        // function 
        REllipse.prototype.switchMajorMinor = function(...args) 
          
        {
          //print("JS: REllipse.prototype.switchMajorMinor");
          return this.__PROXY__.switchMajorMinor(...args);
        };
    
        // function 
        REllipse.prototype.getRatio = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getRatio");
          return this.__PROXY__.getRatio(...args);
        };
    
        // function 
        REllipse.prototype.setRatio = function(...args) 
          
        {
          //print("JS: REllipse.prototype.setRatio");
          return this.__PROXY__.setRatio(...args);
        };
    
        // function 
        REllipse.prototype.getStartParam = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getStartParam");
          return this.__PROXY__.getStartParam(...args);
        };
    
        // function 
        REllipse.prototype.setStartParam = function(...args) 
          
        {
          //print("JS: REllipse.prototype.setStartParam");
          return this.__PROXY__.setStartParam(...args);
        };
    
        // function 
        REllipse.prototype.getEndParam = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getEndParam");
          return this.__PROXY__.getEndParam(...args);
        };
    
        // function 
        REllipse.prototype.setEndParam = function(...args) 
          
        {
          //print("JS: REllipse.prototype.setEndParam");
          return this.__PROXY__.setEndParam(...args);
        };
    
        // function 
        REllipse.prototype.getStartAngle = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getStartAngle");
          return this.__PROXY__.getStartAngle(...args);
        };
    
        // function 
        REllipse.prototype.setStartAngle = function(...args) 
          
        {
          //print("JS: REllipse.prototype.setStartAngle");
          return this.__PROXY__.setStartAngle(...args);
        };
    
        // function 
        REllipse.prototype.angleToParam = function(...args) 
          
        {
          //print("JS: REllipse.prototype.angleToParam");
          return this.__PROXY__.angleToParam(...args);
        };
    
        // function 
        REllipse.prototype.getEndAngle = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getEndAngle");
          return this.__PROXY__.getEndAngle(...args);
        };
    
        // function 
        REllipse.prototype.setEndAngle = function(...args) 
          
        {
          //print("JS: REllipse.prototype.setEndAngle");
          return this.__PROXY__.setEndAngle(...args);
        };
    
        // function 
        REllipse.prototype.getAngleLength = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getAngleLength");
          return this.__PROXY__.getAngleLength(...args);
        };
    
        // function 
        REllipse.prototype.isAngleWithinArc = function(...args) 
          
        {
          //print("JS: REllipse.prototype.isAngleWithinArc");
          return this.__PROXY__.isAngleWithinArc(...args);
        };
    
        // function 
        REllipse.prototype.isParamWithinArc = function(...args) 
          
        {
          //print("JS: REllipse.prototype.isParamWithinArc");
          return this.__PROXY__.isParamWithinArc(...args);
        };
    
        // function 
        REllipse.prototype.isReversed = function(...args) 
          
        {
          //print("JS: REllipse.prototype.isReversed");
          return this.__PROXY__.isReversed(...args);
        };
    
        // function 
        REllipse.prototype.setReversed = function(...args) 
          
        {
          //print("JS: REllipse.prototype.setReversed");
          return this.__PROXY__.setReversed(...args);
        };
    
        // function 
        REllipse.prototype.getDirection1 = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getDirection1");
          return this.__PROXY__.getDirection1(...args);
        };
    
        // function 
        REllipse.prototype.getDirection2 = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getDirection2");
          return this.__PROXY__.getDirection2(...args);
        };
    
        // function 
        REllipse.prototype.getSideOfPoint = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getSideOfPoint");
          return this.__PROXY__.getSideOfPoint(...args);
        };
    
        // function 
        REllipse.prototype.getStartPoint = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getStartPoint");
          return this.__PROXY__.getStartPoint(...args);
        };
    
        // function 
        REllipse.prototype.getEndPoint = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getEndPoint");
          return this.__PROXY__.getEndPoint(...args);
        };
    
        // function 
        REllipse.prototype.getMajorRadius = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getMajorRadius");
          return this.__PROXY__.getMajorRadius(...args);
        };
    
        // function 
        REllipse.prototype.getMinorRadius = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getMinorRadius");
          return this.__PROXY__.getMinorRadius(...args);
        };
    
        // function 
        REllipse.prototype.getAngle = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getAngle");
          return this.__PROXY__.getAngle(...args);
        };
    
        // function 
        REllipse.prototype.setAngle = function(...args) 
          
        {
          //print("JS: REllipse.prototype.setAngle");
          return this.__PROXY__.setAngle(...args);
        };
    
        // function 
        REllipse.prototype.isFullEllipse = function(...args) 
          
        {
          //print("JS: REllipse.prototype.isFullEllipse");
          return this.__PROXY__.isFullEllipse(...args);
        };
    
        // function 
        REllipse.prototype.isCircular = function(...args) 
          
        {
          //print("JS: REllipse.prototype.isCircular");
          return this.__PROXY__.isCircular(...args);
        };
    
        // function 
        REllipse.prototype.getLength = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getLength");
          return this.__PROXY__.getLength(...args);
        };
    
        // function 
        REllipse.prototype.getSimpsonLength = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getSimpsonLength");
          return this.__PROXY__.getSimpsonLength(...args);
        };
    
        // function 
        REllipse.prototype.contains = function(...args) 
          
        {
          //print("JS: REllipse.prototype.contains");
          return this.__PROXY__.contains(...args);
        };
    
        // function 
        REllipse.prototype.getAngleAt = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getAngleAt");
          return this.__PROXY__.getAngleAt(...args);
        };
    
        // function 
        REllipse.prototype.getAngleAtPoint = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getAngleAtPoint");
          return this.__PROXY__.getAngleAtPoint(...args);
        };
    
        // function 
        REllipse.prototype.getParamTo = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getParamTo");
          return this.__PROXY__.getParamTo(...args);
        };
    
        // function 
        REllipse.prototype.getRadiusAt = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getRadiusAt");
          return this.__PROXY__.getRadiusAt(...args);
        };
    
        // function 
        REllipse.prototype.getPointAt = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getPointAt");
          return this.__PROXY__.getPointAt(...args);
        };
    
        // function 
        REllipse.prototype.getMiddlePoint = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getMiddlePoint");
          return this.__PROXY__.getMiddlePoint(...args);
        };
    
        // function 
        REllipse.prototype.move = function(...args) 
          
        {
          //print("JS: REllipse.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        REllipse.prototype.rotate = function(...args) 
          
        {
          //print("JS: REllipse.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        REllipse.prototype.scale = function(...args) 
          
        {
          //print("JS: REllipse.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        REllipse.prototype.mirror = function(...args) 
          
        {
          //print("JS: REllipse.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        REllipse.prototype.reverse = function(...args) 
          
        {
          //print("JS: REllipse.prototype.reverse");
          return this.__PROXY__.reverse(...args);
        };
    
        // function 
        REllipse.prototype.getTransformed = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getTransformed");
          return this.__PROXY__.getTransformed(...args);
        };
    
        // function 
        REllipse.prototype.getTrimEnd = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getTrimEnd");
          return this.__PROXY__.getTrimEnd(...args);
        };
    
        // function 
        REllipse.prototype.trimStartPoint = function(...args) 
          
        {
          //print("JS: REllipse.prototype.trimStartPoint");
          return this.__PROXY__.trimStartPoint(...args);
        };
    
        // function 
        REllipse.prototype.trimEndPoint = function(...args) 
          
        {
          //print("JS: REllipse.prototype.trimEndPoint");
          return this.__PROXY__.trimEndPoint(...args);
        };
    
        // function 
        REllipse.prototype.correctMajorMinor = function(...args) 
          
        {
          //print("JS: REllipse.prototype.correctMajorMinor");
          return this.__PROXY__.correctMajorMinor(...args);
        };
    
        // function 
        REllipse.prototype.getSweep = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getSweep");
          return this.__PROXY__.getSweep(...args);
        };
    
        // function 
        REllipse.prototype.getBoxCorners = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getBoxCorners");
          return this.__PROXY__.getBoxCorners(...args);
        };
    
        // function 
        REllipse.prototype.getTangents = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getTangents");
          return this.__PROXY__.getTangents(...args);
        };
    
        // function 
        REllipse.prototype.approximateWithSplines = function(...args) 
          
        {
          //print("JS: REllipse.prototype.approximateWithSplines");
          return this.__PROXY__.approximateWithSplines(...args);
        };
    
        // function 
        REllipse.prototype.approximateWithArcs = function(...args) 
          
        {
          //print("JS: REllipse.prototype.approximateWithArcs");
          return this.__PROXY__.approximateWithArcs(...args);
        };
    
        // function 
        REllipse.prototype.getOffsetShapes = function(...args) 
          
        {
          //print("JS: REllipse.prototype.getOffsetShapes");
          return this.__PROXY__.getOffsetShapes(...args);
        };
    
        // function 
        REllipse.prototype.splitAt = function(...args) 
          
        {
          //print("JS: REllipse.prototype.splitAt");
          return this.__PROXY__.splitAt(...args);
        };
    
        // function 
        REllipse.prototype.hasProxy = function(...args) 
          
        {
          //print("JS: REllipse.prototype.hasProxy");
          return this.__PROXY__.hasProxy(...args);
        };
    
        // function 
        REllipse.prototype.copy = function(...args) 
          
        {
          //print("JS: REllipse.prototype.copy");
          return this.__PROXY__.copy(...args);
        };
    

      // static functions:
      

        // static function 
        REllipse.createInscribed = function() 
          
        {
          //print("JS: REllipse.createInscribed");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.createInscribed(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.createInscribed(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.createFrom4Points = function() 
          
        {
          //print("JS: REllipse.createFrom4Points");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.createFrom4Points(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.createFrom4Points(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipse.hasProxy = function() 
          
        {
          //print("JS: REllipse.hasProxy");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return REllipse_WrapperSingletonInstance.hasProxy(
                  
                );
              

        //copyProperties(this, wrapper, REllipse);
  }

  
  else {
    
        print("REllipse.hasProxy(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //REllipse.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //REllipse.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      REllipse.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      