
      // auto generated
      //var self;

      // class constructor:
      function RSpline() {
        

        // should be RSpline_BaseJs.call(this, engine):
        //RSpline.prototype = new RSpline_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSpline.getIdStatic()))) {

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
            qWarning("RSpline.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RSpline_Wrapper(
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

      

        //copyProperties(this, wrapper, RSpline);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RSpline_Wrapper(
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

      

        //copyProperties(this, wrapper, RSpline);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RSpline_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline(): wrong number / type of arguments");
      
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

      //RSpline.prototype = new RSpline_BaseJs(engine);
      //RSpline.prototype = new RSpline_Wrapper(engine);
      RSpline.prototype = new Object();

      RSpline.prototype.toString = function() {
          //return "RSpline [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSpline [JS]";
        };
      RSpline.getObjectType = function() {
        return RJSType_RSpline.getIdStatic();
      };

      RSpline.prototype.getObjectType = function() {
        return RJSType_RSpline.getIdStatic();
      };

      RSpline.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSpline.getIdStatic()) {
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
RSpline.Unknown = RSpline_Wrapper.Unknown;
RSpline.Point = RSpline_Wrapper.Point;
RSpline.Line = RSpline_Wrapper.Line;
RSpline.Arc = RSpline_Wrapper.Arc;
RSpline.Circle = RSpline_Wrapper.Circle;
RSpline.Ellipse = RSpline_Wrapper.Ellipse;
RSpline.Polyline = RSpline_Wrapper.Polyline;
RSpline.Spline = RSpline_Wrapper.Spline;
RSpline.Triangle = RSpline_Wrapper.Triangle;
RSpline.XLine = RSpline_Wrapper.XLine;
RSpline.Ray = RSpline_Wrapper.Ray;


      // functions:
      
        // function 
        RSpline.prototype.getClosestPointOnShape = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getClosestPointOnShape");
          return this.__PROXY__.getClosestPointOnShape(...args);
        };
    
        // function 
        RSpline.prototype.to2D = function(...args) 
          
        {
          //print("JS: RSpline.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RSpline.prototype.equals = function(...args) 
          
        {
          //print("JS: RSpline.prototype.equals");
          return this.__PROXY__.equals(...args);
        };
    
        // function 
        RSpline.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RSpline.prototype.getMaxDistanceTo = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getMaxDistanceTo");
          return this.__PROXY__.getMaxDistanceTo(...args);
        };
    
        // function 
        RSpline.prototype.filterOnShape = function(...args) 
          
        {
          //print("JS: RSpline.prototype.filterOnShape");
          return this.__PROXY__.filterOnShape(...args);
        };
    
        // function 
        RSpline.prototype.getVectorFromEndpointTo = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getVectorFromEndpointTo");
          return this.__PROXY__.getVectorFromEndpointTo(...args);
        };
    
        // function 
        RSpline.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RSpline.prototype.getPointOnShape = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getPointOnShape");
          return this.__PROXY__.getPointOnShape(...args);
        };
    
        // function 
        RSpline.prototype.getPointWithDistanceToStart = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getPointWithDistanceToStart");
          return this.__PROXY__.getPointWithDistanceToStart(...args);
        };
    
        // function 
        RSpline.prototype.getPointWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getPointWithDistanceToEnd");
          return this.__PROXY__.getPointWithDistanceToEnd(...args);
        };
    
        // function 
        RSpline.prototype.getAngleAtPoint = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getAngleAtPoint");
          return this.__PROXY__.getAngleAtPoint(...args);
        };
    
        // function 
        RSpline.prototype.getPointAtPercent = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getPointAtPercent");
          return this.__PROXY__.getPointAtPercent(...args);
        };
    
        // function 
        RSpline.prototype.getAngleAtPercent = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getAngleAtPercent");
          return this.__PROXY__.getAngleAtPercent(...args);
        };
    
        // function 
        RSpline.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RSpline.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RSpline.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RSpline.prototype.getDistancesFromStart = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getDistancesFromStart");
          return this.__PROXY__.getDistancesFromStart(...args);
        };
    
        // function 
        RSpline.prototype.getOffsetShapes = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getOffsetShapes");
          return this.__PROXY__.getOffsetShapes(...args);
        };
    
        // function 
        RSpline.prototype.dump = function(...args) 
          
        {
          //print("JS: RSpline.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RSpline.prototype.getShapeType = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getShapeType");
          return this.__PROXY__.getShapeType(...args);
        };
    
        // function 
        RSpline.prototype.clone = function(...args) 
          
        {
          //print("JS: RSpline.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RSpline.prototype.isDirected = function(...args) 
          
        {
          //print("JS: RSpline.prototype.isDirected");
          return this.__PROXY__.isDirected(...args);
        };
    
        // function 
        RSpline.prototype.copySpline = function(...args) 
          
        {
          //print("JS: RSpline.prototype.copySpline");
          return this.__PROXY__.copySpline(...args);
        };
    
        // function 
        RSpline.prototype.createSplinesFromArc = function(...args) 
          
        {
          //print("JS: RSpline.prototype.createSplinesFromArc");
          return this.__PROXY__.createSplinesFromArc(...args);
        };
    
        // function 
        RSpline.prototype.createBezierFromSmallArc = function(...args) 
          
        {
          //print("JS: RSpline.prototype.createBezierFromSmallArc");
          return this.__PROXY__.createBezierFromSmallArc(...args);
        };
    
        // function 
        RSpline.prototype.setZ = function(...args) 
          
        {
          //print("JS: RSpline.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RSpline.prototype.getVectorProperties = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getVectorProperties");
          return this.__PROXY__.getVectorProperties(...args);
        };
    
        // function 
        RSpline.prototype.getIntProperties = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getIntProperties");
          return this.__PROXY__.getIntProperties(...args);
        };
    
        // function 
        RSpline.prototype.getDoubleProperties = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getDoubleProperties");
          return this.__PROXY__.getDoubleProperties(...args);
        };
    
        // function 
        RSpline.prototype.getBoolProperties = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getBoolProperties");
          return this.__PROXY__.getBoolProperties(...args);
        };
    
        // function 
        RSpline.prototype.isInterpolated = function(...args) 
          
        {
          //print("JS: RSpline.prototype.isInterpolated");
          return this.__PROXY__.isInterpolated(...args);
        };
    
        // function 
        RSpline.prototype.appendControlPoint = function(...args) 
          
        {
          //print("JS: RSpline.prototype.appendControlPoint");
          return this.__PROXY__.appendControlPoint(...args);
        };
    
        // function 
        RSpline.prototype.appendControlPoints = function(...args) 
          
        {
          //print("JS: RSpline.prototype.appendControlPoints");
          return this.__PROXY__.appendControlPoints(...args);
        };
    
        // function 
        RSpline.prototype.removeLastControlPoint = function(...args) 
          
        {
          //print("JS: RSpline.prototype.removeLastControlPoint");
          return this.__PROXY__.removeLastControlPoint(...args);
        };
    
        // function 
        RSpline.prototype.setControlPoints = function(...args) 
          
        {
          //print("JS: RSpline.prototype.setControlPoints");
          return this.__PROXY__.setControlPoints(...args);
        };
    
        // function 
        RSpline.prototype.getControlPoints = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getControlPoints");
          return this.__PROXY__.getControlPoints(...args);
        };
    
        // function 
        RSpline.prototype.getControlPointsWrapped = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getControlPointsWrapped");
          return this.__PROXY__.getControlPointsWrapped(...args);
        };
    
        // function 
        RSpline.prototype.countControlPoints = function(...args) 
          
        {
          //print("JS: RSpline.prototype.countControlPoints");
          return this.__PROXY__.countControlPoints(...args);
        };
    
        // function 
        RSpline.prototype.getControlPointAt = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getControlPointAt");
          return this.__PROXY__.getControlPointAt(...args);
        };
    
        // function 
        RSpline.prototype.appendFitPoint = function(...args) 
          
        {
          //print("JS: RSpline.prototype.appendFitPoint");
          return this.__PROXY__.appendFitPoint(...args);
        };
    
        // function 
        RSpline.prototype.prependFitPoint = function(...args) 
          
        {
          //print("JS: RSpline.prototype.prependFitPoint");
          return this.__PROXY__.prependFitPoint(...args);
        };
    
        // function 
        RSpline.prototype.insertFitPointAt = function(...args) 
          
        {
          //print("JS: RSpline.prototype.insertFitPointAt");
          return this.__PROXY__.insertFitPointAt(...args);
        };
    
        // function 
        RSpline.prototype.removeFitPointAt = function(...args) 
          
        {
          //print("JS: RSpline.prototype.removeFitPointAt");
          return this.__PROXY__.removeFitPointAt(...args);
        };
    
        // function 
        RSpline.prototype.removeFirstFitPoint = function(...args) 
          
        {
          //print("JS: RSpline.prototype.removeFirstFitPoint");
          return this.__PROXY__.removeFirstFitPoint(...args);
        };
    
        // function 
        RSpline.prototype.removeLastFitPoint = function(...args) 
          
        {
          //print("JS: RSpline.prototype.removeLastFitPoint");
          return this.__PROXY__.removeLastFitPoint(...args);
        };
    
        // function 
        RSpline.prototype.setFitPoints = function(...args) 
          
        {
          //print("JS: RSpline.prototype.setFitPoints");
          return this.__PROXY__.setFitPoints(...args);
        };
    
        // function 
        RSpline.prototype.getFitPoints = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getFitPoints");
          return this.__PROXY__.getFitPoints(...args);
        };
    
        // function 
        RSpline.prototype.countFitPoints = function(...args) 
          
        {
          //print("JS: RSpline.prototype.countFitPoints");
          return this.__PROXY__.countFitPoints(...args);
        };
    
        // function 
        RSpline.prototype.hasFitPoints = function(...args) 
          
        {
          //print("JS: RSpline.prototype.hasFitPoints");
          return this.__PROXY__.hasFitPoints(...args);
        };
    
        // function 
        RSpline.prototype.getFitPointAt = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getFitPointAt");
          return this.__PROXY__.getFitPointAt(...args);
        };
    
        // function 
        RSpline.prototype.getKnotVector = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getKnotVector");
          return this.__PROXY__.getKnotVector(...args);
        };
    
        // function 
        RSpline.prototype.getActualKnotVector = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getActualKnotVector");
          return this.__PROXY__.getActualKnotVector(...args);
        };
    
        // function 
        RSpline.prototype.setKnotVector = function(...args) 
          
        {
          //print("JS: RSpline.prototype.setKnotVector");
          return this.__PROXY__.setKnotVector(...args);
        };
    
        // function 
        RSpline.prototype.appendKnot = function(...args) 
          
        {
          //print("JS: RSpline.prototype.appendKnot");
          return this.__PROXY__.appendKnot(...args);
        };
    
        // function 
        RSpline.prototype.getWeights = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getWeights");
          return this.__PROXY__.getWeights(...args);
        };
    
        // function 
        RSpline.prototype.setWeights = function(...args) 
          
        {
          //print("JS: RSpline.prototype.setWeights");
          return this.__PROXY__.setWeights(...args);
        };
    
        // function 
        RSpline.prototype.setDegree = function(...args) 
          
        {
          //print("JS: RSpline.prototype.setDegree");
          return this.__PROXY__.setDegree(...args);
        };
    
        // function 
        RSpline.prototype.getDegree = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getDegree");
          return this.__PROXY__.getDegree(...args);
        };
    
        // function 
        RSpline.prototype.getOrder = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getOrder");
          return this.__PROXY__.getOrder(...args);
        };
    
        // function 
        RSpline.prototype.setPeriodic = function(...args) 
          
        {
          //print("JS: RSpline.prototype.setPeriodic");
          return this.__PROXY__.setPeriodic(...args);
        };
    
        // function 
        RSpline.prototype.isClosed = function(...args) 
          
        {
          //print("JS: RSpline.prototype.isClosed");
          return this.__PROXY__.isClosed(...args);
        };
    
        // function 
        RSpline.prototype.isGeometricallyClosed = function(...args) 
          
        {
          //print("JS: RSpline.prototype.isGeometricallyClosed");
          return this.__PROXY__.isGeometricallyClosed(...args);
        };
    
        // function 
        RSpline.prototype.isPeriodic = function(...args) 
          
        {
          //print("JS: RSpline.prototype.isPeriodic");
          return this.__PROXY__.isPeriodic(...args);
        };
    
        // function 
        RSpline.prototype.getDirection1 = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getDirection1");
          return this.__PROXY__.getDirection1(...args);
        };
    
        // function 
        RSpline.prototype.getDirection2 = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getDirection2");
          return this.__PROXY__.getDirection2(...args);
        };
    
        // function 
        RSpline.prototype.getSideOfPoint = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getSideOfPoint");
          return this.__PROXY__.getSideOfPoint(...args);
        };
    
        // function 
        RSpline.prototype.getStartPoint = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getStartPoint");
          return this.__PROXY__.getStartPoint(...args);
        };
    
        // function 
        RSpline.prototype.getEndPoint = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getEndPoint");
          return this.__PROXY__.getEndPoint(...args);
        };
    
        // function 
        RSpline.prototype.setStartPoint = function(...args) 
          
        {
          //print("JS: RSpline.prototype.setStartPoint");
          return this.__PROXY__.setStartPoint(...args);
        };
    
        // function 
        RSpline.prototype.setEndPoint = function(...args) 
          
        {
          //print("JS: RSpline.prototype.setEndPoint");
          return this.__PROXY__.setEndPoint(...args);
        };
    
        // function 
        RSpline.prototype.setTangents = function(...args) 
          
        {
          //print("JS: RSpline.prototype.setTangents");
          return this.__PROXY__.setTangents(...args);
        };
    
        // function 
        RSpline.prototype.unsetTangents = function(...args) 
          
        {
          //print("JS: RSpline.prototype.unsetTangents");
          return this.__PROXY__.unsetTangents(...args);
        };
    
        // function 
        RSpline.prototype.setTangentAtStart = function(...args) 
          
        {
          //print("JS: RSpline.prototype.setTangentAtStart");
          return this.__PROXY__.setTangentAtStart(...args);
        };
    
        // function 
        RSpline.prototype.getTangentAtStart = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getTangentAtStart");
          return this.__PROXY__.getTangentAtStart(...args);
        };
    
        // function 
        RSpline.prototype.unsetTangentAtStart = function(...args) 
          
        {
          //print("JS: RSpline.prototype.unsetTangentAtStart");
          return this.__PROXY__.unsetTangentAtStart(...args);
        };
    
        // function 
        RSpline.prototype.setTangentAtEnd = function(...args) 
          
        {
          //print("JS: RSpline.prototype.setTangentAtEnd");
          return this.__PROXY__.setTangentAtEnd(...args);
        };
    
        // function 
        RSpline.prototype.getTangentAtEnd = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getTangentAtEnd");
          return this.__PROXY__.getTangentAtEnd(...args);
        };
    
        // function 
        RSpline.prototype.unsetTangentAtEnd = function(...args) 
          
        {
          //print("JS: RSpline.prototype.unsetTangentAtEnd");
          return this.__PROXY__.unsetTangentAtEnd(...args);
        };
    
        // function 
        RSpline.prototype.updateTangentsPeriodic = function(...args) 
          
        {
          //print("JS: RSpline.prototype.updateTangentsPeriodic");
          return this.__PROXY__.updateTangentsPeriodic(...args);
        };
    
        // function 
        RSpline.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RSpline.prototype.getLength = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getLength");
          return this.__PROXY__.getLength(...args);
        };
    
        // function 
        RSpline.prototype.getPointAt = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getPointAt");
          return this.__PROXY__.getPointAt(...args);
        };
    
        // function 
        RSpline.prototype.getPointAtDistance = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getPointAtDistance");
          return this.__PROXY__.getPointAtDistance(...args);
        };
    
        // function 
        RSpline.prototype.getAngleAt = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getAngleAt");
          return this.__PROXY__.getAngleAt(...args);
        };
    
        // function 
        RSpline.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RSpline.prototype.getMiddlePoint = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getMiddlePoint");
          return this.__PROXY__.getMiddlePoint(...args);
        };
    
        // function 
        RSpline.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RSpline.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RSpline.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RSpline.prototype.getPointCloud = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getPointCloud");
          return this.__PROXY__.getPointCloud(...args);
        };
    
        // function 
        RSpline.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RSpline.prototype.isOnShape = function(...args) 
          
        {
          //print("JS: RSpline.prototype.isOnShape");
          return this.__PROXY__.isOnShape(...args);
        };
    
        // function 
        RSpline.prototype.move = function(...args) 
          
        {
          //print("JS: RSpline.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RSpline.prototype.rotate = function(...args) 
          
        {
          //print("JS: RSpline.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RSpline.prototype.scale = function(...args) 
          
        {
          //print("JS: RSpline.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RSpline.prototype.mirror = function(...args) 
          
        {
          //print("JS: RSpline.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RSpline.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RSpline.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RSpline.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RSpline.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RSpline.prototype.reverse = function(...args) 
          
        {
          //print("JS: RSpline.prototype.reverse");
          return this.__PROXY__.reverse(...args);
        };
    
        // function 
        RSpline.prototype.stretch = function(...args) 
          
        {
          //print("JS: RSpline.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RSpline.prototype.getTransformed = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getTransformed");
          return this.__PROXY__.getTransformed(...args);
        };
    
        // function 
        RSpline.prototype.getTrimEnd = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getTrimEnd");
          return this.__PROXY__.getTrimEnd(...args);
        };
    
        // function 
        RSpline.prototype.trimStartPoint = function(...args) 
          
        {
          //print("JS: RSpline.prototype.trimStartPoint");
          return this.__PROXY__.trimStartPoint(...args);
        };
    
        // function 
        RSpline.prototype.trimEndPoint = function(...args) 
          
        {
          //print("JS: RSpline.prototype.trimEndPoint");
          return this.__PROXY__.trimEndPoint(...args);
        };
    
        // function 
        RSpline.prototype.getDistanceFromStart = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getDistanceFromStart");
          return this.__PROXY__.getDistanceFromStart(...args);
        };
    
        // function 
        RSpline.prototype.splitAtPoints = function(...args) 
          
        {
          //print("JS: RSpline.prototype.splitAtPoints");
          return this.__PROXY__.splitAtPoints(...args);
        };
    
        // function 
        RSpline.prototype.splitAtParams = function(...args) 
          
        {
          //print("JS: RSpline.prototype.splitAtParams");
          return this.__PROXY__.splitAtParams(...args);
        };
    
        // function 
        RSpline.prototype.toPolyline = function(...args) 
          
        {
          //print("JS: RSpline.prototype.toPolyline");
          return this.__PROXY__.toPolyline(...args);
        };
    
        // function 
        RSpline.prototype.approximateWithArcs = function(...args) 
          
        {
          //print("JS: RSpline.prototype.approximateWithArcs");
          return this.__PROXY__.approximateWithArcs(...args);
        };
    
        // function 
        RSpline.prototype.getExploded = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getExploded");
          return this.__PROXY__.getExploded(...args);
        };
    
        // function 
        RSpline.prototype.getExplodedBezier = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getExplodedBezier");
          return this.__PROXY__.getExplodedBezier(...args);
        };
    
        // function 
        RSpline.prototype.getExplodedWithSegmentLength = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getExplodedWithSegmentLength");
          return this.__PROXY__.getExplodedWithSegmentLength(...args);
        };
    
        // function 
        RSpline.prototype.getBezierSegments = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getBezierSegments");
          return this.__PROXY__.getBezierSegments(...args);
        };
    
        // function 
        RSpline.prototype.isValid = function(...args) 
          
        {
          //print("JS: RSpline.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RSpline.prototype.getTDelta = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getTDelta");
          return this.__PROXY__.getTDelta(...args);
        };
    
        // function 
        RSpline.prototype.getTMin = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getTMin");
          return this.__PROXY__.getTMin(...args);
        };
    
        // function 
        RSpline.prototype.getTMax = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getTMax");
          return this.__PROXY__.getTMax(...args);
        };
    
        // function 
        RSpline.prototype.getTAtPoint = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getTAtPoint");
          return this.__PROXY__.getTAtPoint(...args);
        };
    
        // function 
        RSpline.prototype.getTAtDistance = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getTAtDistance");
          return this.__PROXY__.getTAtDistance(...args);
        };
    
        // function 
        RSpline.prototype.getDistanceAtT = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getDistanceAtT");
          return this.__PROXY__.getDistanceAtT(...args);
        };
    
        // function 
        RSpline.prototype.getSegments = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getSegments");
          return this.__PROXY__.getSegments(...args);
        };
    
        // function 
        RSpline.prototype.getDiscontinuities = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getDiscontinuities");
          return this.__PROXY__.getDiscontinuities(...args);
        };
    
        // function 
        RSpline.prototype.simplify = function(...args) 
          
        {
          //print("JS: RSpline.prototype.simplify");
          return this.__PROXY__.simplify(...args);
        };
    
        // function 
        RSpline.prototype.updateFromControlPoints = function(...args) 
          
        {
          //print("JS: RSpline.prototype.updateFromControlPoints");
          return this.__PROXY__.updateFromControlPoints(...args);
        };
    
        // function 
        RSpline.prototype.updateFromFitPoints = function(...args) 
          
        {
          //print("JS: RSpline.prototype.updateFromFitPoints");
          return this.__PROXY__.updateFromFitPoints(...args);
        };
    
        // function 
        RSpline.prototype.update = function(...args) 
          
        {
          //print("JS: RSpline.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RSpline.prototype.splitAt = function(...args) 
          
        {
          //print("JS: RSpline.prototype.splitAt");
          return this.__PROXY__.splitAt(...args);
        };
    
        // function 
        RSpline.prototype.isDirty = function(...args) 
          
        {
          //print("JS: RSpline.prototype.isDirty");
          return this.__PROXY__.isDirty(...args);
        };
    
        // function 
        RSpline.prototype.getSelfIntersectionPoints = function(...args) 
          
        {
          //print("JS: RSpline.prototype.getSelfIntersectionPoints");
          return this.__PROXY__.getSelfIntersectionPoints(...args);
        };
    
        // function 
        RSpline.prototype.hasProxy = function(...args) 
          
        {
          //print("JS: RSpline.prototype.hasProxy");
          return this.__PROXY__.hasProxy(...args);
        };
    
        // function 
        RSpline.prototype.appendToExploded = function(...args) 
          
        {
          //print("JS: RSpline.prototype.appendToExploded");
          return this.__PROXY__.appendToExploded(...args);
        };
    
        // function 
        RSpline.prototype.invalidate = function(...args) 
          
        {
          //print("JS: RSpline.prototype.invalidate");
          return this.__PROXY__.invalidate(...args);
        };
    
        // function 
        RSpline.prototype.updateInternal = function(...args) 
          
        {
          //print("JS: RSpline.prototype.updateInternal");
          return this.__PROXY__.updateInternal(...args);
        };
    
        // function 
        RSpline.prototype.updateBoundingBox = function(...args) 
          
        {
          //print("JS: RSpline.prototype.updateBoundingBox");
          return this.__PROXY__.updateBoundingBox(...args);
        };
    
        // function 
        RSpline.prototype.print = function(...args) 
          
        {
          //print("JS: RSpline.prototype.print");
          return this.__PROXY__.print(...args);
        };
    
        // function 
        RSpline.prototype.copy = function(...args) 
          
        {
          //print("JS: RSpline.prototype.copy");
          return this.__PROXY__.copy(...args);
        };
    

      // static functions:
      

        // static function 
        RSpline.createSplinesFromArc = function() 
          
        {
          //print("JS: RSpline.createSplinesFromArc");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.createSplinesFromArc(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.createSplinesFromArc(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.createBezierFromSmallArc = function() 
          
        {
          //print("JS: RSpline.createBezierFromSmallArc");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.createBezierFromSmallArc(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.createBezierFromSmallArc(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSpline.hasProxy = function() 
          
        {
          //print("JS: RSpline.hasProxy");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSpline_WrapperSingletonInstance.hasProxy(
                  
                );
              

        //copyProperties(this, wrapper, RSpline);
  }

  
  else {
    
        print("RSpline.hasProxy(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RSpline.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSpline.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RSpline.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      