
      // auto generated
      //var self;

      // class constructor:
      function RPolyline() {
        

        // should be RPolyline_BaseJs.call(this, engine):
        //RPolyline.prototype = new RPolyline_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPolyline.getIdStatic()))) {

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
            qWarning("RPolyline.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RPolyline_Wrapper(
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

      

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RPolyline_Wrapper(
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

      

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RPolyline_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline(): wrong number / type of arguments");
      
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

      //RPolyline.prototype = new RPolyline_BaseJs(engine);
      //RPolyline.prototype = new RPolyline_Wrapper(engine);
      RPolyline.prototype = new Object();

      RPolyline.prototype.toString = function() {
          //return "RPolyline [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPolyline [JS]";
        };
      RPolyline.getObjectType = function() {
        return RJSType_RPolyline.getIdStatic();
      };

      RPolyline.prototype.getObjectType = function() {
        return RJSType_RPolyline.getIdStatic();
      };

      RPolyline.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPolyline.getIdStatic()) {
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
RPolyline.Unknown = RPolyline_Wrapper.Unknown;
RPolyline.Point = RPolyline_Wrapper.Point;
RPolyline.Line = RPolyline_Wrapper.Line;
RPolyline.Arc = RPolyline_Wrapper.Arc;
RPolyline.Circle = RPolyline_Wrapper.Circle;
RPolyline.Ellipse = RPolyline_Wrapper.Ellipse;
RPolyline.Polyline = RPolyline_Wrapper.Polyline;
RPolyline.Spline = RPolyline_Wrapper.Spline;
RPolyline.Triangle = RPolyline_Wrapper.Triangle;
RPolyline.XLine = RPolyline_Wrapper.XLine;
RPolyline.Ray = RPolyline_Wrapper.Ray;


      // functions:
      
        // function 
        RPolyline.prototype.isValid = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RPolyline.prototype.getClosestPointOnShape = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getClosestPointOnShape");
          return this.__PROXY__.getClosestPointOnShape(...args);
        };
    
        // function 
        RPolyline.prototype.to2D = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RPolyline.prototype.equals = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.equals");
          return this.__PROXY__.equals(...args);
        };
    
        // function 
        RPolyline.prototype.getIntProperties = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getIntProperties");
          return this.__PROXY__.getIntProperties(...args);
        };
    
        // function 
        RPolyline.prototype.getMaxDistanceTo = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getMaxDistanceTo");
          return this.__PROXY__.getMaxDistanceTo(...args);
        };
    
        // function 
        RPolyline.prototype.isOnShape = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.isOnShape");
          return this.__PROXY__.isOnShape(...args);
        };
    
        // function 
        RPolyline.prototype.filterOnShape = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.filterOnShape");
          return this.__PROXY__.filterOnShape(...args);
        };
    
        // function 
        RPolyline.prototype.getVectorFromEndpointTo = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getVectorFromEndpointTo");
          return this.__PROXY__.getVectorFromEndpointTo(...args);
        };
    
        // function 
        RPolyline.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RPolyline.prototype.getPointOnShape = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getPointOnShape");
          return this.__PROXY__.getPointOnShape(...args);
        };
    
        // function 
        RPolyline.prototype.getPointWithDistanceToStart = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getPointWithDistanceToStart");
          return this.__PROXY__.getPointWithDistanceToStart(...args);
        };
    
        // function 
        RPolyline.prototype.getPointWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getPointWithDistanceToEnd");
          return this.__PROXY__.getPointWithDistanceToEnd(...args);
        };
    
        // function 
        RPolyline.prototype.getAngleAtPoint = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getAngleAtPoint");
          return this.__PROXY__.getAngleAtPoint(...args);
        };
    
        // function 
        RPolyline.prototype.getAngleAtPercent = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getAngleAtPercent");
          return this.__PROXY__.getAngleAtPercent(...args);
        };
    
        // function 
        RPolyline.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RPolyline.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RPolyline.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RPolyline.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RPolyline.prototype.getOffsetShapes = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getOffsetShapes");
          return this.__PROXY__.getOffsetShapes(...args);
        };
    
        // function 
        RPolyline.prototype.splitAt = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.splitAt");
          return this.__PROXY__.splitAt(...args);
        };
    
        // function 
        RPolyline.prototype.dump = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RPolyline.prototype.getShapeType = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getShapeType");
          return this.__PROXY__.getShapeType(...args);
        };
    
        // function 
        RPolyline.prototype.clone = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RPolyline.prototype.isDirected = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.isDirected");
          return this.__PROXY__.isDirected(...args);
        };
    
        // function 
        RPolyline.prototype.setZ = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RPolyline.prototype.isFlat = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.isFlat");
          return this.__PROXY__.isFlat(...args);
        };
    
        // function 
        RPolyline.prototype.getVectorProperties = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getVectorProperties");
          return this.__PROXY__.getVectorProperties(...args);
        };
    
        // function 
        RPolyline.prototype.getDoubleProperties = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getDoubleProperties");
          return this.__PROXY__.getDoubleProperties(...args);
        };
    
        // function 
        RPolyline.prototype.getBoolProperties = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getBoolProperties");
          return this.__PROXY__.getBoolProperties(...args);
        };
    
        // function 
        RPolyline.prototype.clear = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.clear");
          return this.__PROXY__.clear(...args);
        };
    
        // function 
        RPolyline.prototype.normalize = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.normalize");
          return this.__PROXY__.normalize(...args);
        };
    
        // function 
        RPolyline.prototype.prependShape = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.prependShape");
          return this.__PROXY__.prependShape(...args);
        };
    
        // function 
        RPolyline.prototype.appendShape = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.appendShape");
          return this.__PROXY__.appendShape(...args);
        };
    
        // function 
        RPolyline.prototype.appendShapeAuto = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.appendShapeAuto");
          return this.__PROXY__.appendShapeAuto(...args);
        };
    
        // function 
        RPolyline.prototype.appendShapeTrim = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.appendShapeTrim");
          return this.__PROXY__.appendShapeTrim(...args);
        };
    
        // function 
        RPolyline.prototype.closeTrim = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.closeTrim");
          return this.__PROXY__.closeTrim(...args);
        };
    
        // function 
        RPolyline.prototype.appendVertex = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.appendVertex");
          return this.__PROXY__.appendVertex(...args);
        };
    
        // function 
        RPolyline.prototype.prependVertex = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.prependVertex");
          return this.__PROXY__.prependVertex(...args);
        };
    
        // function 
        RPolyline.prototype.insertVertex = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.insertVertex");
          return this.__PROXY__.insertVertex(...args);
        };
    
        // function 
        RPolyline.prototype.insertVertexAt = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.insertVertexAt");
          return this.__PROXY__.insertVertexAt(...args);
        };
    
        // function 
        RPolyline.prototype.insertVertexAtDistance = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.insertVertexAtDistance");
          return this.__PROXY__.insertVertexAtDistance(...args);
        };
    
        // function 
        RPolyline.prototype.removeFirstVertex = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.removeFirstVertex");
          return this.__PROXY__.removeFirstVertex(...args);
        };
    
        // function 
        RPolyline.prototype.removeLastVertex = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.removeLastVertex");
          return this.__PROXY__.removeLastVertex(...args);
        };
    
        // function 
        RPolyline.prototype.removeVertex = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.removeVertex");
          return this.__PROXY__.removeVertex(...args);
        };
    
        // function 
        RPolyline.prototype.removeVerticesAfter = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.removeVerticesAfter");
          return this.__PROXY__.removeVerticesAfter(...args);
        };
    
        // function 
        RPolyline.prototype.removeVerticesBefore = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.removeVerticesBefore");
          return this.__PROXY__.removeVerticesBefore(...args);
        };
    
        // function 
        RPolyline.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.isEmpty");
          return this.__PROXY__.isEmpty(...args);
        };
    
        // function 
        RPolyline.prototype.setVertices = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.setVertices");
          return this.__PROXY__.setVertices(...args);
        };
    
        // function 
        RPolyline.prototype.getVertices = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getVertices");
          return this.__PROXY__.getVertices(...args);
        };
    
        // function 
        RPolyline.prototype.setVertexAt = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.setVertexAt");
          return this.__PROXY__.setVertexAt(...args);
        };
    
        // function 
        RPolyline.prototype.moveVertexAt = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.moveVertexAt");
          return this.__PROXY__.moveVertexAt(...args);
        };
    
        // function 
        RPolyline.prototype.getVertexAt = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getVertexAt");
          return this.__PROXY__.getVertexAt(...args);
        };
    
        // function 
        RPolyline.prototype.getVertexIndex = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getVertexIndex");
          return this.__PROXY__.getVertexIndex(...args);
        };
    
        // function 
        RPolyline.prototype.getLastVertex = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getLastVertex");
          return this.__PROXY__.getLastVertex(...args);
        };
    
        // function 
        RPolyline.prototype.countVertices = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.countVertices");
          return this.__PROXY__.countVertices(...args);
        };
    
        // function 
        RPolyline.prototype.setBulges = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.setBulges");
          return this.__PROXY__.setBulges(...args);
        };
    
        // function 
        RPolyline.prototype.getBulges = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getBulges");
          return this.__PROXY__.getBulges(...args);
        };
    
        // function 
        RPolyline.prototype.getBulgeAt = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getBulgeAt");
          return this.__PROXY__.getBulgeAt(...args);
        };
    
        // function 
        RPolyline.prototype.setBulgeAt = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.setBulgeAt");
          return this.__PROXY__.setBulgeAt(...args);
        };
    
        // function 
        RPolyline.prototype.hasArcSegments = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.hasArcSegments");
          return this.__PROXY__.hasArcSegments(...args);
        };
    
        // function 
        RPolyline.prototype.getVertexAngles = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getVertexAngles");
          return this.__PROXY__.getVertexAngles(...args);
        };
    
        // function 
        RPolyline.prototype.getVertexAngle = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getVertexAngle");
          return this.__PROXY__.getVertexAngle(...args);
        };
    
        // function 
        RPolyline.prototype.setGlobalWidth = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.setGlobalWidth");
          return this.__PROXY__.setGlobalWidth(...args);
        };
    
        // function 
        RPolyline.prototype.setStartWidthAt = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.setStartWidthAt");
          return this.__PROXY__.setStartWidthAt(...args);
        };
    
        // function 
        RPolyline.prototype.getStartWidthAt = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getStartWidthAt");
          return this.__PROXY__.getStartWidthAt(...args);
        };
    
        // function 
        RPolyline.prototype.setEndWidthAt = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.setEndWidthAt");
          return this.__PROXY__.setEndWidthAt(...args);
        };
    
        // function 
        RPolyline.prototype.getEndWidthAt = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getEndWidthAt");
          return this.__PROXY__.getEndWidthAt(...args);
        };
    
        // function 
        RPolyline.prototype.hasWidths = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.hasWidths");
          return this.__PROXY__.hasWidths(...args);
        };
    
        // function 
        RPolyline.prototype.setStartWidths = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.setStartWidths");
          return this.__PROXY__.setStartWidths(...args);
        };
    
        // function 
        RPolyline.prototype.getStartWidths = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getStartWidths");
          return this.__PROXY__.getStartWidths(...args);
        };
    
        // function 
        RPolyline.prototype.setEndWidths = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.setEndWidths");
          return this.__PROXY__.setEndWidths(...args);
        };
    
        // function 
        RPolyline.prototype.getEndWidths = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getEndWidths");
          return this.__PROXY__.getEndWidths(...args);
        };
    
        // function 
        RPolyline.prototype.setClosed = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.setClosed");
          return this.__PROXY__.setClosed(...args);
        };
    
        // function 
        RPolyline.prototype.isClosed = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.isClosed");
          return this.__PROXY__.isClosed(...args);
        };
    
        // function 
        RPolyline.prototype.isGeometricallyClosed = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.isGeometricallyClosed");
          return this.__PROXY__.isGeometricallyClosed(...args);
        };
    
        // function 
        RPolyline.prototype.autoClose = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.autoClose");
          return this.__PROXY__.autoClose(...args);
        };
    
        // function 
        RPolyline.prototype.toLogicallyClosed = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.toLogicallyClosed");
          return this.__PROXY__.toLogicallyClosed(...args);
        };
    
        // function 
        RPolyline.prototype.toLogicallyOpen = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.toLogicallyOpen");
          return this.__PROXY__.toLogicallyOpen(...args);
        };
    
        // function 
        RPolyline.prototype.getSelfIntersectionPoints = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getSelfIntersectionPoints");
          return this.__PROXY__.getSelfIntersectionPoints(...args);
        };
    
        // function 
        RPolyline.prototype.getOrientation = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getOrientation");
          return this.__PROXY__.getOrientation(...args);
        };
    
        // function 
        RPolyline.prototype.setOrientation = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.setOrientation");
          return this.__PROXY__.setOrientation(...args);
        };
    
        // function 
        RPolyline.prototype.convertArcToLineSegments = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.convertArcToLineSegments");
          return this.__PROXY__.convertArcToLineSegments(...args);
        };
    
        // function 
        RPolyline.prototype.convertArcToLineSegmentsLength = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.convertArcToLineSegmentsLength");
          return this.__PROXY__.convertArcToLineSegmentsLength(...args);
        };
    
        // function 
        RPolyline.prototype.contains = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.contains");
          return this.__PROXY__.contains(...args);
        };
    
        // function 
        RPolyline.prototype.containsShape = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.containsShape");
          return this.__PROXY__.containsShape(...args);
        };
    
        // function 
        RPolyline.prototype.getPointInside = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getPointInside");
          return this.__PROXY__.getPointInside(...args);
        };
    
        // function 
        RPolyline.prototype.getStartPoint = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getStartPoint");
          return this.__PROXY__.getStartPoint(...args);
        };
    
        // function 
        RPolyline.prototype.getEndPoint = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getEndPoint");
          return this.__PROXY__.getEndPoint(...args);
        };
    
        // function 
        RPolyline.prototype.getMiddlePoint = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getMiddlePoint");
          return this.__PROXY__.getMiddlePoint(...args);
        };
    
        // function 
        RPolyline.prototype.moveStartPoint = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.moveStartPoint");
          return this.__PROXY__.moveStartPoint(...args);
        };
    
        // function 
        RPolyline.prototype.moveEndPoint = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.moveEndPoint");
          return this.__PROXY__.moveEndPoint(...args);
        };
    
        // function 
        RPolyline.prototype.moveSegmentAt = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.moveSegmentAt");
          return this.__PROXY__.moveSegmentAt(...args);
        };
    
        // function 
        RPolyline.prototype.getDirection1 = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getDirection1");
          return this.__PROXY__.getDirection1(...args);
        };
    
        // function 
        RPolyline.prototype.getDirection2 = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getDirection2");
          return this.__PROXY__.getDirection2(...args);
        };
    
        // function 
        RPolyline.prototype.getSideOfPoint = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getSideOfPoint");
          return this.__PROXY__.getSideOfPoint(...args);
        };
    
        // function 
        RPolyline.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RPolyline.prototype.getArea = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getArea");
          return this.__PROXY__.getArea(...args);
        };
    
        // function 
        RPolyline.prototype.getLength = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getLength");
          return this.__PROXY__.getLength(...args);
        };
    
        // function 
        RPolyline.prototype.getDistanceFromStart = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getDistanceFromStart");
          return this.__PROXY__.getDistanceFromStart(...args);
        };
    
        // function 
        RPolyline.prototype.getDistancesFromStart = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getDistancesFromStart");
          return this.__PROXY__.getDistancesFromStart(...args);
        };
    
        // function 
        RPolyline.prototype.getLengthTo = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getLengthTo");
          return this.__PROXY__.getLengthTo(...args);
        };
    
        // function 
        RPolyline.prototype.getSegmentsLength = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getSegmentsLength");
          return this.__PROXY__.getSegmentsLength(...args);
        };
    
        // function 
        RPolyline.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RPolyline.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RPolyline.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RPolyline.prototype.getPointAtPercent = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getPointAtPercent");
          return this.__PROXY__.getPointAtPercent(...args);
        };
    
        // function 
        RPolyline.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RPolyline.prototype.getPointCloud = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getPointCloud");
          return this.__PROXY__.getPointCloud(...args);
        };
    
        // function 
        RPolyline.prototype.getAngleAt = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getAngleAt");
          return this.__PROXY__.getAngleAt(...args);
        };
    
        // function 
        RPolyline.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RPolyline.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RPolyline.prototype.getClosestSegment = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getClosestSegment");
          return this.__PROXY__.getClosestSegment(...args);
        };
    
        // function 
        RPolyline.prototype.getClosestVertex = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getClosestVertex");
          return this.__PROXY__.getClosestVertex(...args);
        };
    
        // function 
        RPolyline.prototype.move = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RPolyline.prototype.rotate = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RPolyline.prototype.scale = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RPolyline.prototype.mirror = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RPolyline.prototype.reverse = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.reverse");
          return this.__PROXY__.reverse(...args);
        };
    
        // function 
        RPolyline.prototype.getReversed = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getReversed");
          return this.__PROXY__.getReversed(...args);
        };
    
        // function 
        RPolyline.prototype.stretch = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RPolyline.prototype.getTransformed = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getTransformed");
          return this.__PROXY__.getTransformed(...args);
        };
    
        // function 
        RPolyline.prototype.getTrimEnd = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getTrimEnd");
          return this.__PROXY__.getTrimEnd(...args);
        };
    
        // function 
        RPolyline.prototype.trimStartPoint = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.trimStartPoint");
          return this.__PROXY__.trimStartPoint(...args);
        };
    
        // function 
        RPolyline.prototype.trimEndPoint = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.trimEndPoint");
          return this.__PROXY__.trimEndPoint(...args);
        };
    
        // function 
        RPolyline.prototype.getExploded = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getExploded");
          return this.__PROXY__.getExploded(...args);
        };
    
        // function 
        RPolyline.prototype.getOutline = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getOutline");
          return this.__PROXY__.getOutline(...args);
        };
    
        // function 
        RPolyline.prototype.getLeftOutline = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getLeftOutline");
          return this.__PROXY__.getLeftOutline(...args);
        };
    
        // function 
        RPolyline.prototype.getRightOutline = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getRightOutline");
          return this.__PROXY__.getRightOutline(...args);
        };
    
        // function 
        RPolyline.prototype.isInterpolated = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.isInterpolated");
          return this.__PROXY__.isInterpolated(...args);
        };
    
        // function 
        RPolyline.prototype.countSegments = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.countSegments");
          return this.__PROXY__.countSegments(...args);
        };
    
        // function 
        RPolyline.prototype.getSegmentAt = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getSegmentAt");
          return this.__PROXY__.getSegmentAt(...args);
        };
    
        // function 
        RPolyline.prototype.isArcSegmentAt = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.isArcSegmentAt");
          return this.__PROXY__.isArcSegmentAt(...args);
        };
    
        // function 
        RPolyline.prototype.getLastSegment = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getLastSegment");
          return this.__PROXY__.getLastSegment(...args);
        };
    
        // function 
        RPolyline.prototype.getFirstSegment = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getFirstSegment");
          return this.__PROXY__.getFirstSegment(...args);
        };
    
        // function 
        RPolyline.prototype.isStraight = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.isStraight");
          return this.__PROXY__.isStraight(...args);
        };
    
        // function 
        RPolyline.prototype.toPainterPath = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.toPainterPath");
          return this.__PROXY__.toPainterPath(...args);
        };
    
        // function 
        RPolyline.prototype.simplify = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.simplify");
          return this.__PROXY__.simplify(...args);
        };
    
        // function 
        RPolyline.prototype.verifyTangency = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.verifyTangency");
          return this.__PROXY__.verifyTangency(...args);
        };
    
        // function 
        RPolyline.prototype.stripWidths = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.stripWidths");
          return this.__PROXY__.stripWidths(...args);
        };
    
        // function 
        RPolyline.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.setMinimumWidth");
          return this.__PROXY__.setMinimumWidth(...args);
        };
    
        // function 
        RPolyline.prototype.getSegmentAtDist = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getSegmentAtDist");
          return this.__PROXY__.getSegmentAtDist(...args);
        };
    
        // function 
        RPolyline.prototype.relocateStartPoint = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.relocateStartPoint");
          return this.__PROXY__.relocateStartPoint(...args);
        };
    
        // function 
        RPolyline.prototype.convertToClosed = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.convertToClosed");
          return this.__PROXY__.convertToClosed(...args);
        };
    
        // function 
        RPolyline.prototype.convertToOpen = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.convertToOpen");
          return this.__PROXY__.convertToOpen(...args);
        };
    
        // function 
        RPolyline.prototype.modifyPolylineCorner = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.modifyPolylineCorner");
          return this.__PROXY__.modifyPolylineCorner(...args);
        };
    
        // function 
        RPolyline.prototype.isConcave = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.isConcave");
          return this.__PROXY__.isConcave(...args);
        };
    
        // function 
        RPolyline.prototype.getConvexVertices = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getConvexVertices");
          return this.__PROXY__.getConvexVertices(...args);
        };
    
        // function 
        RPolyline.prototype.getConcaveVertices = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getConcaveVertices");
          return this.__PROXY__.getConcaveVertices(...args);
        };
    
        // function 
        RPolyline.prototype.getCentroid = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getCentroid");
          return this.__PROXY__.getCentroid(...args);
        };
    
        // function 
        RPolyline.prototype.splitAtDiscontinuities = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.splitAtDiscontinuities");
          return this.__PROXY__.splitAtDiscontinuities(...args);
        };
    
        // function 
        RPolyline.prototype.splitAtSegmentTypeChange = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.splitAtSegmentTypeChange");
          return this.__PROXY__.splitAtSegmentTypeChange(...args);
        };
    
        // function 
        RPolyline.prototype.insertVerticesAtSelfIntersections = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.insertVerticesAtSelfIntersections");
          return this.__PROXY__.insertVerticesAtSelfIntersections(...args);
        };
    
        // function 
        RPolyline.prototype.getBaseAngle = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getBaseAngle");
          return this.__PROXY__.getBaseAngle(...args);
        };
    
        // function 
        RPolyline.prototype.getWidth = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getWidth");
          return this.__PROXY__.getWidth(...args);
        };
    
        // function 
        RPolyline.prototype.setWidth = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.setWidth");
          return this.__PROXY__.setWidth(...args);
        };
    
        // function 
        RPolyline.prototype.getHeight = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getHeight");
          return this.__PROXY__.getHeight(...args);
        };
    
        // function 
        RPolyline.prototype.setHeight = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.setHeight");
          return this.__PROXY__.setHeight(...args);
        };
    
        // function 
        RPolyline.prototype.morph = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.morph");
          return this.__PROXY__.morph(...args);
        };
    
        // function 
        RPolyline.prototype.roundAllCorners = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.roundAllCorners");
          return this.__PROXY__.roundAllCorners(...args);
        };
    
        // function 
        RPolyline.prototype.getPolygonHull = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.getPolygonHull");
          return this.__PROXY__.getPolygonHull(...args);
        };
    
        // function 
        RPolyline.prototype.hasProxy = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.hasProxy");
          return this.__PROXY__.hasProxy(...args);
        };
    
        // function 
        RPolyline.prototype.isLineSegment = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.isLineSegment");
          return this.__PROXY__.isLineSegment(...args);
        };
    
        // function 
        RPolyline.prototype.print = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.print");
          return this.__PROXY__.print(...args);
        };
    
        // function 
        RPolyline.prototype.copy = function(...args) 
          
        {
          //print("JS: RPolyline.prototype.copy");
          return this.__PROXY__.copy(...args);
        };
    

      // static functions:
      

        // static function 
        RPolyline.isStraight = function() 
          
        {
          //print("JS: RPolyline.isStraight");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.isStraight(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.isStraight(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyline.hasProxy = function() 
          
        {
          //print("JS: RPolyline.hasProxy");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPolyline_WrapperSingletonInstance.hasProxy(
                  
                );
              

        //copyProperties(this, wrapper, RPolyline);
  }

  
  else {
    
        print("RPolyline.hasProxy(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RPolyline.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPolyline.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RPolyline.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      