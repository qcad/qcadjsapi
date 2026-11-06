
      // auto generated
      //var self;

      // class constructor:
      function RShape() {
        

        // should be RShape_BaseJs.call(this, engine):
        //RShape.prototype = new RShape_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RShape.getIdStatic()))) {

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
            qWarning("RShape.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RShape.js: No constructor found for class RShape");
            
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

      //RShape.prototype = new RShape_BaseJs(engine);
      //RShape.prototype = new RShape_Wrapper(engine);
      RShape.prototype = new Object();


      RShape.prototype.toString = function() {
          //return "RShape [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RShape [JS]";
        };
      RShape.getObjectType = function() {
        return RJSType_RShape.getIdStatic();
      };

      RShape.prototype.getObjectType = function() {
        return RJSType_RShape.getIdStatic();
      };

      RShape.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RShape.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: Type
RShape.Unknown = RShape_Wrapper.Unknown;
RShape.Point = RShape_Wrapper.Point;
RShape.Line = RShape_Wrapper.Line;
RShape.Arc = RShape_Wrapper.Arc;
RShape.Circle = RShape_Wrapper.Circle;
RShape.Ellipse = RShape_Wrapper.Ellipse;
RShape.Polyline = RShape_Wrapper.Polyline;
RShape.Spline = RShape_Wrapper.Spline;
RShape.Triangle = RShape_Wrapper.Triangle;
RShape.XLine = RShape_Wrapper.XLine;
RShape.Ray = RShape_Wrapper.Ray;


      // functions:
      
        // function 
        RShape.prototype.isValid = function(...args) 
          
        {
          //print("JS: RShape.prototype.isValid");
          
              return this.__PROXY__.isValid(...args);
            
        };
        
        // function 
        RShape.prototype.getShapeType = function(...args) 
          
        {
          //print("JS: RShape.prototype.getShapeType");
          
              return this.__PROXY__.getShapeType(...args);
            
        };
        
        // function 
        RShape.prototype.isPointShape = function(...args) 
          
        {
          //print("JS: RShape.prototype.isPointShape");
          
              return this.__PROXY__.isPointShape(...args);
            
        };
        
        // function 
        RShape.prototype.isLineShape = function(...args) 
          
        {
          //print("JS: RShape.prototype.isLineShape");
          
              return this.__PROXY__.isLineShape(...args);
            
        };
        
        // function 
        RShape.prototype.isArcShape = function(...args) 
          
        {
          //print("JS: RShape.prototype.isArcShape");
          
              return this.__PROXY__.isArcShape(...args);
            
        };
        
        // function 
        RShape.prototype.isCircleShape = function(...args) 
          
        {
          //print("JS: RShape.prototype.isCircleShape");
          
              return this.__PROXY__.isCircleShape(...args);
            
        };
        
        // function 
        RShape.prototype.isEllipseShape = function(...args) 
          
        {
          //print("JS: RShape.prototype.isEllipseShape");
          
              return this.__PROXY__.isEllipseShape(...args);
            
        };
        
        // function 
        RShape.prototype.isFullEllipseShape = function(...args) 
          
        {
          //print("JS: RShape.prototype.isFullEllipseShape");
          
              return this.__PROXY__.isFullEllipseShape(...args);
            
        };
        
        // function 
        RShape.prototype.isPolylineShape = function(...args) 
          
        {
          //print("JS: RShape.prototype.isPolylineShape");
          
              return this.__PROXY__.isPolylineShape(...args);
            
        };
        
        // function 
        RShape.prototype.isSplineShape = function(...args) 
          
        {
          //print("JS: RShape.prototype.isSplineShape");
          
              return this.__PROXY__.isSplineShape(...args);
            
        };
        
        // function 
        RShape.prototype.isTriangleShape = function(...args) 
          
        {
          //print("JS: RShape.prototype.isTriangleShape");
          
              return this.__PROXY__.isTriangleShape(...args);
            
        };
        
        // function 
        RShape.prototype.isXLineShape = function(...args) 
          
        {
          //print("JS: RShape.prototype.isXLineShape");
          
              return this.__PROXY__.isXLineShape(...args);
            
        };
        
        // function 
        RShape.prototype.isRayShape = function(...args) 
          
        {
          //print("JS: RShape.prototype.isRayShape");
          
              return this.__PROXY__.isRayShape(...args);
            
        };
        
        // function 
        RShape.prototype.clone = function(...args) 
          
        {
          //print("JS: RShape.prototype.clone");
          
              return this.__PROXY__.clone(...args);
            
        };
        
        // function 
        RShape.prototype.isInterpolated = function(...args) 
          
        {
          //print("JS: RShape.prototype.isInterpolated");
          
              return this.__PROXY__.isInterpolated(...args);
            
        };
        
        // function 
        RShape.prototype.getClosestPointOnShape = function(...args) 
          
        {
          //print("JS: RShape.prototype.getClosestPointOnShape");
          
              return this.__PROXY__.getClosestPointOnShape(...args);
            
        };
        
        // function 
        RShape.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RShape.prototype.getBoundingBox");
          
              return this.__PROXY__.getBoundingBox(...args);
            
        };
        
        // function 
        RShape.prototype.to2D = function(...args) 
          
        {
          //print("JS: RShape.prototype.to2D");
          
              return this.__PROXY__.to2D(...args);
            
        };
        
        // function 
        RShape.prototype.setZ = function(...args) 
          
        {
          //print("JS: RShape.prototype.setZ");
          
              return this.__PROXY__.setZ(...args);
            
        };
        
        // function 
        RShape.prototype.getLength = function(...args) 
          
        {
          //print("JS: RShape.prototype.getLength");
          
              return this.__PROXY__.getLength(...args);
            
        };
        
        // function 
        RShape.prototype.equals = function(...args) 
          
        {
          //print("JS: RShape.prototype.equals");
          
              return this.__PROXY__.equals(...args);
            
        };
        
        // function 
        RShape.prototype.getVectorProperties = function(...args) 
          
        {
          //print("JS: RShape.prototype.getVectorProperties");
          
              return this.__PROXY__.getVectorProperties(...args);
            
        };
        
        // function 
        RShape.prototype.getIntProperties = function(...args) 
          
        {
          //print("JS: RShape.prototype.getIntProperties");
          
              return this.__PROXY__.getIntProperties(...args);
            
        };
        
        // function 
        RShape.prototype.getDoubleProperties = function(...args) 
          
        {
          //print("JS: RShape.prototype.getDoubleProperties");
          
              return this.__PROXY__.getDoubleProperties(...args);
            
        };
        
        // function 
        RShape.prototype.getBoolProperties = function(...args) 
          
        {
          //print("JS: RShape.prototype.getBoolProperties");
          
              return this.__PROXY__.getBoolProperties(...args);
            
        };
        
        // function 
        RShape.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RShape.prototype.getVectorTo");
          
              return this.__PROXY__.getVectorTo(...args);
            
        };
        
        // function 
        RShape.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RShape.prototype.getDistanceTo");
          
              return this.__PROXY__.getDistanceTo(...args);
            
        };
        
        // function 
        RShape.prototype.getMaxDistanceTo = function(...args) 
          
        {
          //print("JS: RShape.prototype.getMaxDistanceTo");
          
              return this.__PROXY__.getMaxDistanceTo(...args);
            
        };
        
        // function 
        RShape.prototype.isOnShape = function(...args) 
          
        {
          //print("JS: RShape.prototype.isOnShape");
          
              return this.__PROXY__.isOnShape(...args);
            
        };
        
        // function 
        RShape.prototype.filterOnShape = function(...args) 
          
        {
          //print("JS: RShape.prototype.filterOnShape");
          
              return this.__PROXY__.filterOnShape(...args);
            
        };
        
        // function 
        RShape.prototype.getVectorFromEndpointTo = function(...args) 
          
        {
          //print("JS: RShape.prototype.getVectorFromEndpointTo");
          
              return this.__PROXY__.getVectorFromEndpointTo(...args);
            
        };
        
        // function 
        RShape.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RShape.prototype.getEndPoints");
          
              return this.__PROXY__.getEndPoints(...args);
            
        };
        
        // function 
        RShape.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RShape.prototype.getMiddlePoints");
          
              return this.__PROXY__.getMiddlePoints(...args);
            
        };
        
        // function 
        RShape.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RShape.prototype.getCenterPoints");
          
              return this.__PROXY__.getCenterPoints(...args);
            
        };
        
        // function 
        RShape.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RShape.prototype.getArcReferencePoints");
          
              return this.__PROXY__.getArcReferencePoints(...args);
            
        };
        
        // function 
        RShape.prototype.getPointOnShape = function(...args) 
          
        {
          //print("JS: RShape.prototype.getPointOnShape");
          
              return this.__PROXY__.getPointOnShape(...args);
            
        };
        
        // function 
        RShape.prototype.getPointCloud = function(...args) 
          
        {
          //print("JS: RShape.prototype.getPointCloud");
          
              return this.__PROXY__.getPointCloud(...args);
            
        };
        
        // function 
        RShape.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RShape.prototype.getPointsWithDistanceToEnd");
          
              return this.__PROXY__.getPointsWithDistanceToEnd(...args);
            
        };
        
        // function 
        RShape.prototype.getPointWithDistanceToStart = function(...args) 
          
        {
          //print("JS: RShape.prototype.getPointWithDistanceToStart");
          
              return this.__PROXY__.getPointWithDistanceToStart(...args);
            
        };
        
        // function 
        RShape.prototype.getPointWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RShape.prototype.getPointWithDistanceToEnd");
          
              return this.__PROXY__.getPointWithDistanceToEnd(...args);
            
        };
        
        // function 
        RShape.prototype.getAngleAt = function(...args) 
          
        {
          //print("JS: RShape.prototype.getAngleAt");
          
              return this.__PROXY__.getAngleAt(...args);
            
        };
        
        // function 
        RShape.prototype.getAngleAtPoint = function(...args) 
          
        {
          //print("JS: RShape.prototype.getAngleAtPoint");
          
              return this.__PROXY__.getAngleAtPoint(...args);
            
        };
        
        // function 
        RShape.prototype.getPointAtPercent = function(...args) 
          
        {
          //print("JS: RShape.prototype.getPointAtPercent");
          
              return this.__PROXY__.getPointAtPercent(...args);
            
        };
        
        // function 
        RShape.prototype.getAngleAtPercent = function(...args) 
          
        {
          //print("JS: RShape.prototype.getAngleAtPercent");
          
              return this.__PROXY__.getAngleAtPercent(...args);
            
        };
        
        // function 
        RShape.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RShape.prototype.intersectsWith");
          
              return this.__PROXY__.intersectsWith(...args);
            
        };
        
        // function 
        RShape.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RShape.prototype.getIntersectionPoints");
          
              return this.__PROXY__.getIntersectionPoints(...args);
            
        };
        
        // function 
        RShape.prototype.getSelfIntersectionPoints = function(...args) 
          
        {
          //print("JS: RShape.prototype.getSelfIntersectionPoints");
          
              return this.__PROXY__.getSelfIntersectionPoints(...args);
            
        };
        
        // function 
        RShape.prototype.isDirected = function(...args) 
          
        {
          //print("JS: RShape.prototype.isDirected");
          
              return this.__PROXY__.isDirected(...args);
            
        };
        
        // function 
        RShape.prototype.getDirection1 = function(...args) 
          
        {
          //print("JS: RShape.prototype.getDirection1");
          
              return this.__PROXY__.getDirection1(...args);
            
        };
        
        // function 
        RShape.prototype.getDirection2 = function(...args) 
          
        {
          //print("JS: RShape.prototype.getDirection2");
          
              return this.__PROXY__.getDirection2(...args);
            
        };
        
        // function 
        RShape.prototype.getSideOfPoint = function(...args) 
          
        {
          //print("JS: RShape.prototype.getSideOfPoint");
          
              return this.__PROXY__.getSideOfPoint(...args);
            
        };
        
        // function 
        RShape.prototype.getStartPoint = function(...args) 
          
        {
          //print("JS: RShape.prototype.getStartPoint");
          
              return this.__PROXY__.getStartPoint(...args);
            
        };
        
        // function 
        RShape.prototype.getEndPoint = function(...args) 
          
        {
          //print("JS: RShape.prototype.getEndPoint");
          
              return this.__PROXY__.getEndPoint(...args);
            
        };
        
        // function 
        RShape.prototype.getMiddlePoint = function(...args) 
          
        {
          //print("JS: RShape.prototype.getMiddlePoint");
          
              return this.__PROXY__.getMiddlePoint(...args);
            
        };
        
        // function 
        RShape.prototype.reverse = function(...args) 
          
        {
          //print("JS: RShape.prototype.reverse");
          
              return this.__PROXY__.reverse(...args);
            
        };
        
        // function 
        RShape.prototype.trimStartPoint = function(...args) 
          
        {
          //print("JS: RShape.prototype.trimStartPoint");
          
              return this.__PROXY__.trimStartPoint(...args);
            
        };
        
        // function 
        RShape.prototype.trimEndPoint = function(...args) 
          
        {
          //print("JS: RShape.prototype.trimEndPoint");
          
              return this.__PROXY__.trimEndPoint(...args);
            
        };
        
        // function 
        RShape.prototype.getTrimEnd = function(...args) 
          
        {
          //print("JS: RShape.prototype.getTrimEnd");
          
              return this.__PROXY__.getTrimEnd(...args);
            
        };
        
        // function 
        RShape.prototype.getDistanceFromStart = function(...args) 
          
        {
          //print("JS: RShape.prototype.getDistanceFromStart");
          
              return this.__PROXY__.getDistanceFromStart(...args);
            
        };
        
        // function 
        RShape.prototype.getDistancesFromStart = function(...args) 
          
        {
          //print("JS: RShape.prototype.getDistancesFromStart");
          
              return this.__PROXY__.getDistancesFromStart(...args);
            
        };
        
        // function 
        RShape.prototype.move = function(...args) 
          
        {
          //print("JS: RShape.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        RShape.prototype.rotate = function(...args) 
          
        {
          //print("JS: RShape.prototype.rotate");
          
              return this.__PROXY__.rotate(...args);
            
        };
        
        // function 
        RShape.prototype.scale = function(...args) 
          
        {
          //print("JS: RShape.prototype.scale");
          
              return this.__PROXY__.scale(...args);
            
        };
        
        // function 
        RShape.prototype.mirror = function(...args) 
          
        {
          //print("JS: RShape.prototype.mirror");
          
              return this.__PROXY__.mirror(...args);
            
        };
        
        // function 
        RShape.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RShape.prototype.flipHorizontal");
          
              return this.__PROXY__.flipHorizontal(...args);
            
        };
        
        // function 
        RShape.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RShape.prototype.flipVertical");
          
              return this.__PROXY__.flipVertical(...args);
            
        };
        
        // function 
        RShape.prototype.stretch = function(...args) 
          
        {
          //print("JS: RShape.prototype.stretch");
          
              return this.__PROXY__.stretch(...args);
            
        };
        
        // function 
        RShape.prototype.getTransformed = function(...args) 
          
        {
          //print("JS: RShape.prototype.getTransformed");
          
              return this.__PROXY__.getTransformed(...args);
            
        };
        
        // function 
        RShape.prototype.getPolylines = function(...args) 
          
        {
          //print("JS: RShape.prototype.getPolylines");
          
              return this.__PROXY__.getPolylines(...args);
            
        };
        
        // function 
        RShape.prototype.getOrderedShapes = function(...args) 
          
        {
          //print("JS: RShape.prototype.getOrderedShapes");
          
              return this.__PROXY__.getOrderedShapes(...args);
            
        };
        
        // function 
        RShape.prototype.getIntersectionPointsLL = function(...args) 
          
        {
          //print("JS: RShape.prototype.getIntersectionPointsLL");
          
              return this.__PROXY__.getIntersectionPointsLL(...args);
            
        };
        
        // function 
        RShape.prototype.getIntersectionPointsLA = function(...args) 
          
        {
          //print("JS: RShape.prototype.getIntersectionPointsLA");
          
              return this.__PROXY__.getIntersectionPointsLA(...args);
            
        };
        
        // function 
        RShape.prototype.getIntersectionPointsLC = function(...args) 
          
        {
          //print("JS: RShape.prototype.getIntersectionPointsLC");
          
              return this.__PROXY__.getIntersectionPointsLC(...args);
            
        };
        
        // function 
        RShape.prototype.getIntersectionPointsLE = function(...args) 
          
        {
          //print("JS: RShape.prototype.getIntersectionPointsLE");
          
              return this.__PROXY__.getIntersectionPointsLE(...args);
            
        };
        
        // function 
        RShape.prototype.getIntersectionPointsLT = function(...args) 
          
        {
          //print("JS: RShape.prototype.getIntersectionPointsLT");
          
              return this.__PROXY__.getIntersectionPointsLT(...args);
            
        };
        
        // function 
        RShape.prototype.getIntersectionPointsLS = function(...args) 
          
        {
          //print("JS: RShape.prototype.getIntersectionPointsLS");
          
              return this.__PROXY__.getIntersectionPointsLS(...args);
            
        };
        
        // function 
        RShape.prototype.getIntersectionPointsLX = function(...args) 
          
        {
          //print("JS: RShape.prototype.getIntersectionPointsLX");
          
              return this.__PROXY__.getIntersectionPointsLX(...args);
            
        };
        
        // function 
        RShape.prototype.getIntersectionPointsAA = function(...args) 
          
        {
          //print("JS: RShape.prototype.getIntersectionPointsAA");
          
              return this.__PROXY__.getIntersectionPointsAA(...args);
            
        };
        
        // function 
        RShape.prototype.getIntersectionPointsAC = function(...args) 
          
        {
          //print("JS: RShape.prototype.getIntersectionPointsAC");
          
              return this.__PROXY__.getIntersectionPointsAC(...args);
            
        };
        
        // function 
        RShape.prototype.getIntersectionPointsAE = function(...args) 
          
        {
          //print("JS: RShape.prototype.getIntersectionPointsAE");
          
              return this.__PROXY__.getIntersectionPointsAE(...args);
            
        };
        
        // function 
        RShape.prototype.getIntersectionPointsAT = function(...args) 
          
        {
          //print("JS: RShape.prototype.getIntersectionPointsAT");
          
              return this.__PROXY__.getIntersectionPointsAT(...args);
            
        };
        
        // function 
        RShape.prototype.getIntersectionPointsAS = function(...args) 
          
        {
          //print("JS: RShape.prototype.getIntersectionPointsAS");
          
              return this.__PROXY__.getIntersectionPointsAS(...args);
            
        };
        
        // function 
        RShape.prototype.getIntersectionPointsAX = function(...args) 
          
        {
          //print("JS: RShape.prototype.getIntersectionPointsAX");
          
              return this.__PROXY__.getIntersectionPointsAX(...args);
            
        };
        
        // function 
        RShape.prototype.getIntersectionPointsCC = function(...args) 
          
        {
          //print("JS: RShape.prototype.getIntersectionPointsCC");
          
              return this.__PROXY__.getIntersectionPointsCC(...args);
            
        };
        
        // function 
        RShape.prototype.getIntersectionPointsCE = function(...args) 
          
        {
          //print("JS: RShape.prototype.getIntersectionPointsCE");
          
              return this.__PROXY__.getIntersectionPointsCE(...args);
            
        };
        
        // function 
        RShape.prototype.getIntersectionPointsCS = function(...args) 
          
        {
          //print("JS: RShape.prototype.getIntersectionPointsCS");
          
              return this.__PROXY__.getIntersectionPointsCS(...args);
            
        };
        
        // function 
        RShape.prototype.getIntersectionPointsCX = function(...args) 
          
        {
          //print("JS: RShape.prototype.getIntersectionPointsCX");
          
              return this.__PROXY__.getIntersectionPointsCX(...args);
            
        };
        
        // function 
        RShape.prototype.getIntersectionPointsEE = function(...args) 
          
        {
          //print("JS: RShape.prototype.getIntersectionPointsEE");
          
              return this.__PROXY__.getIntersectionPointsEE(...args);
            
        };
        
        // function 
        RShape.prototype.getIntersectionPointsES = function(...args) 
          
        {
          //print("JS: RShape.prototype.getIntersectionPointsES");
          
              return this.__PROXY__.getIntersectionPointsES(...args);
            
        };
        
        // function 
        RShape.prototype.getIntersectionPointsEX = function(...args) 
          
        {
          //print("JS: RShape.prototype.getIntersectionPointsEX");
          
              return this.__PROXY__.getIntersectionPointsEX(...args);
            
        };
        
        // function 
        RShape.prototype.getIntersectionPointsSX = function(...args) 
          
        {
          //print("JS: RShape.prototype.getIntersectionPointsSX");
          
              return this.__PROXY__.getIntersectionPointsSX(...args);
            
        };
        
        // function 
        RShape.prototype.getIntersectionPointsSS = function(...args) 
          
        {
          //print("JS: RShape.prototype.getIntersectionPointsSS");
          
              return this.__PROXY__.getIntersectionPointsSS(...args);
            
        };
        
        // function 
        RShape.prototype.getIntersectionPointsXX = function(...args) 
          
        {
          //print("JS: RShape.prototype.getIntersectionPointsXX");
          
              return this.__PROXY__.getIntersectionPointsXX(...args);
            
        };
        
        // function 
        RShape.prototype.getOffsetShapes = function(...args) 
          
        {
          //print("JS: RShape.prototype.getOffsetShapes");
          
              return this.__PROXY__.getOffsetShapes(...args);
            
        };
        
        // function 
        RShape.prototype.getOffsetLines = function(...args) 
          
        {
          //print("JS: RShape.prototype.getOffsetLines");
          
              return this.__PROXY__.getOffsetLines(...args);
            
        };
        
        // function 
        RShape.prototype.getOffsetArcs = function(...args) 
          
        {
          //print("JS: RShape.prototype.getOffsetArcs");
          
              return this.__PROXY__.getOffsetArcs(...args);
            
        };
        
        // function 
        RShape.prototype.getReversedShapeList = function(...args) 
          
        {
          //print("JS: RShape.prototype.getReversedShapeList");
          
              return this.__PROXY__.getReversedShapeList(...args);
            
        };
        
        // function 
        RShape.prototype.splitAt = function(...args) 
          
        {
          //print("JS: RShape.prototype.splitAt");
          
              return this.__PROXY__.splitAt(...args);
            
        };
        
        // function 
        RShape.prototype.trim = function(...args) 
          
        {
          //print("JS: RShape.prototype.trim");
          
              return this.__PROXY__.trim(...args);
            
        };
        
        // function 
        RShape.prototype.roundCorners = function(...args) 
          
        {
          //print("JS: RShape.prototype.roundCorners");
          
              return this.__PROXY__.roundCorners(...args);
            
        };
        
        // function 
        RShape.prototype.roundShapes = function(...args) 
          
        {
          //print("JS: RShape.prototype.roundShapes");
          
              return this.__PROXY__.roundShapes(...args);
            
        };
        
        // function 
        RShape.prototype.getInnerMostContour = function(...args) 
          
        {
          //print("JS: RShape.prototype.getInnerMostContour");
          
              return this.__PROXY__.getInnerMostContour(...args);
            
        };
        
        // function 
        RShape.prototype.xLineToRay = function(...args) 
          
        {
          //print("JS: RShape.prototype.xLineToRay");
          
              return this.__PROXY__.xLineToRay(...args);
            
        };
        
        // function 
        RShape.prototype.rayToLine = function(...args) 
          
        {
          //print("JS: RShape.prototype.rayToLine");
          
              return this.__PROXY__.rayToLine(...args);
            
        };
        
        // function 
        RShape.prototype.scaleArc = function(...args) 
          
        {
          //print("JS: RShape.prototype.scaleArc");
          
              return this.__PROXY__.scaleArc(...args);
            
        };
        
        // function 
        RShape.prototype.ellipseToArcCircleEllipse = function(...args) 
          
        {
          //print("JS: RShape.prototype.ellipseToArcCircleEllipse");
          
              return this.__PROXY__.ellipseToArcCircleEllipse(...args);
            
        };
        
        // function 
        RShape.prototype.getErrorCode = function(...args) 
          
        {
          //print("JS: RShape.prototype.getErrorCode");
          
              return this.__PROXY__.getErrorCode(...args);
            
        };
        
        // function 
        RShape.prototype.dump = function(...args) 
          
        {
          //print("JS: RShape.prototype.dump");
          
              return this.__PROXY__.dump(...args);
            
        };
        
        // function 
        RShape.prototype.print = function(...args) 
          
        {
          //print("JS: RShape.prototype.print");
          
              return this.__PROXY__.print(...args);
            
        };
        

      // static functions:
      

        // static function 
        RShape.isPointShape = function() 
          
        {
          //print("JS: RShape.isPointShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.isPointShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.isPointShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.isLineShape = function() 
          
        {
          //print("JS: RShape.isLineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.isLineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.isLineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.isArcShape = function() 
          
        {
          //print("JS: RShape.isArcShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.isArcShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.isArcShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.isCircleShape = function() 
          
        {
          //print("JS: RShape.isCircleShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.isCircleShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.isCircleShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.isEllipseShape = function() 
          
        {
          //print("JS: RShape.isEllipseShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.isEllipseShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.isEllipseShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.isFullEllipseShape = function() 
          
        {
          //print("JS: RShape.isFullEllipseShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.isFullEllipseShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.isFullEllipseShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.isPolylineShape = function() 
          
        {
          //print("JS: RShape.isPolylineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.isPolylineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.isPolylineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.isSplineShape = function() 
          
        {
          //print("JS: RShape.isSplineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.isSplineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.isSplineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.isTriangleShape = function() 
          
        {
          //print("JS: RShape.isTriangleShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.isTriangleShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.isTriangleShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.isXLineShape = function() 
          
        {
          //print("JS: RShape.isXLineShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.isXLineShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.isXLineShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.isRayShape = function() 
          
        {
          //print("JS: RShape.isRayShape");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.isRayShape(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.isRayShape(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getPolylines = function() 
          
        {
          //print("JS: RShape.getPolylines");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getPolylines(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getPolylines(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getOrderedShapes = function() 
          
        {
          //print("JS: RShape.getOrderedShapes");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getOrderedShapes(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getOrderedShapes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsLL = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsLL");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsLL(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsLL(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsLL(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsLA = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsLA");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsLA(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsLA(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsLA(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsLC = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsLC");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsLC(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsLC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsLE = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsLE");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsLE(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsLE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsLE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsLT = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsLT");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsLT(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsLT(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsLT(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsLS = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsLS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsLS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsLS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsLX = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsLX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsLX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsLX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsAA = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsAA");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsAA(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsAA(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsAC = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsAC");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsAC(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsAC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsAE = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsAE");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsAE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsAE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsAT = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsAT");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsAT(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsAT(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsAS = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsAS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsAS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsAS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsAX = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsAX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsAX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsAX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsCC = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsCC");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsCC(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsCC(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsCE = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsCE");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsCE(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsCE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsCS = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsCS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsCS(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsCS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsCX = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsCX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsCX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsCX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsEE = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsEE");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsEE(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else 
  
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsEE(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsEE(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsES = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsES");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsES(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsES(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsEX = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsEX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsEX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsEX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsSX = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsSX");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsSX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsSX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsSS = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsSS");
          
      if (arguments.length >= 2 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsSS(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsSS(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getIntersectionPointsXX = function() 
          
        {
          //print("JS: RShape.getIntersectionPointsXX");
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getIntersectionPointsXX(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getIntersectionPointsXX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getOffsetLines = function() 
          
        {
          //print("JS: RShape.getOffsetLines");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getOffsetLines(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getOffsetLines(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getOffsetArcs = function() 
          
        {
          //print("JS: RShape.getOffsetArcs");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getOffsetArcs(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getOffsetArcs(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getReversedShapeList = function() 
          
        {
          //print("JS: RShape.getReversedShapeList");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getReversedShapeList(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getReversedShapeList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.trim = function() 
          
        {
          //print("JS: RShape.trim");
          
      if (arguments.length == 6) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.trim(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.trim(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.roundCorners = function() 
          
        {
          //print("JS: RShape.roundCorners");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.roundCorners(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.roundCorners(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.roundShapes = function() 
          
        {
          //print("JS: RShape.roundShapes");
          
      if (arguments.length == 8) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.roundShapes(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.roundShapes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getInnerMostContour = function() 
          
        {
          //print("JS: RShape.getInnerMostContour");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getInnerMostContour(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getInnerMostContour(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.xLineToRay = function() 
          
        {
          //print("JS: RShape.xLineToRay");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.xLineToRay(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.xLineToRay(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.rayToLine = function() 
          
        {
          //print("JS: RShape.rayToLine");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.rayToLine(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.rayToLine(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.scaleArc = function() 
          
        {
          //print("JS: RShape.scaleArc");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.scaleArc(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.scaleArc(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.ellipseToArcCircleEllipse = function() 
          
        {
          //print("JS: RShape.ellipseToArcCircleEllipse");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.ellipseToArcCircleEllipse(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.ellipseToArcCircleEllipse(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RShape.getErrorCode = function() 
          
        {
          //print("JS: RShape.getErrorCode");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RShape_WrapperSingletonInstance.getErrorCode(
                  
                );
              

        //copyProperties(this, wrapper, RShape);
  }

  
  else {
    
        print("RShape.getErrorCode(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      RShape.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RShape.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RShape.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RShape.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RShape.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RShape.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      