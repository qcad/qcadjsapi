
      // auto generated
      //var self;

      // class constructor:
      function RSplineData() {
        

        // should be RSplineData_BaseJs.call(this, engine):
        //RSplineData.prototype = new RSplineData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSplineData.getIdStatic()))) {

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
            qWarning("RSplineData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RSplineData_Wrapper(
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

      

        //copyProperties(this, wrapper, RSplineData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RSplineData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSplineData);
  }

  
  else {
    
        print("RSplineData(): wrong number / type of arguments");
      
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

      //RSplineData.prototype = new RSplineData_BaseJs(engine);
      //RSplineData.prototype = new RSplineData_Wrapper(engine);
      RSplineData.prototype = new Object();

      RSplineData.prototype.toString = function() {
          //return "RSplineData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSplineData [JS]";
        };
      RSplineData.getObjectType = function() {
        return RJSType_RSplineData.getIdStatic();
      };

      RSplineData.prototype.getObjectType = function() {
        return RJSType_RSplineData.getIdStatic();
      };

      RSplineData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSplineData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RSpline.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RSplineData.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RSplineData.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RSplineData.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RSplineData.prototype.isSane = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RSplineData.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RSplineData.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RSplineData.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RSplineData.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RSplineData.prototype.getHull = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RSplineData.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RSplineData.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RSplineData.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RSplineData.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RSplineData.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RSplineData.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RSplineData.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RSplineData.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RSplineData.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RSplineData.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RSplineData.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RSplineData.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RSplineData.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RSplineData.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RSplineData.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RSplineData.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RSplineData.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RSplineData.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RSplineData.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RSplineData.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RSplineData.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RSplineData.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RSplineData.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RSplineData.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RSplineData.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RSplineData.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RSplineData.prototype.setColor = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RSplineData.prototype.getColor = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RSplineData.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RSplineData.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RSplineData.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RSplineData.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RSplineData.prototype.isInside = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RSplineData.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RSplineData.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RSplineData.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RSplineData.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RSplineData.prototype.getShapeType = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getShapeType");
          return this.__PROXY__.getShapeType(...args);
        };
    
        // function 
        RSplineData.prototype.clone = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RSplineData.prototype.isDirected = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.isDirected");
          return this.__PROXY__.isDirected(...args);
        };
    
        // function 
        RSplineData.prototype.copySpline = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.copySpline");
          return this.__PROXY__.copySpline(...args);
        };
    
        // function 
        RSplineData.prototype.getVectorProperties = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getVectorProperties");
          return this.__PROXY__.getVectorProperties(...args);
        };
    
        // function 
        RSplineData.prototype.getIntProperties = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getIntProperties");
          return this.__PROXY__.getIntProperties(...args);
        };
    
        // function 
        RSplineData.prototype.getDoubleProperties = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getDoubleProperties");
          return this.__PROXY__.getDoubleProperties(...args);
        };
    
        // function 
        RSplineData.prototype.getBoolProperties = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getBoolProperties");
          return this.__PROXY__.getBoolProperties(...args);
        };
    
        // function 
        RSplineData.prototype.isInterpolated = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.isInterpolated");
          return this.__PROXY__.isInterpolated(...args);
        };
    
        // function 
        RSplineData.prototype.appendControlPoints = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.appendControlPoints");
          return this.__PROXY__.appendControlPoints(...args);
        };
    
        // function 
        RSplineData.prototype.removeLastControlPoint = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.removeLastControlPoint");
          return this.__PROXY__.removeLastControlPoint(...args);
        };
    
        // function 
        RSplineData.prototype.setControlPoints = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.setControlPoints");
          return this.__PROXY__.setControlPoints(...args);
        };
    
        // function 
        RSplineData.prototype.countControlPoints = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.countControlPoints");
          return this.__PROXY__.countControlPoints(...args);
        };
    
        // function 
        RSplineData.prototype.getControlPointAt = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getControlPointAt");
          return this.__PROXY__.getControlPointAt(...args);
        };
    
        // function 
        RSplineData.prototype.removeFirstFitPoint = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.removeFirstFitPoint");
          return this.__PROXY__.removeFirstFitPoint(...args);
        };
    
        // function 
        RSplineData.prototype.removeLastFitPoint = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.removeLastFitPoint");
          return this.__PROXY__.removeLastFitPoint(...args);
        };
    
        // function 
        RSplineData.prototype.setFitPoints = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.setFitPoints");
          return this.__PROXY__.setFitPoints(...args);
        };
    
        // function 
        RSplineData.prototype.countFitPoints = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.countFitPoints");
          return this.__PROXY__.countFitPoints(...args);
        };
    
        // function 
        RSplineData.prototype.hasFitPoints = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.hasFitPoints");
          return this.__PROXY__.hasFitPoints(...args);
        };
    
        // function 
        RSplineData.prototype.getFitPointAt = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getFitPointAt");
          return this.__PROXY__.getFitPointAt(...args);
        };
    
        // function 
        RSplineData.prototype.setKnotVector = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.setKnotVector");
          return this.__PROXY__.setKnotVector(...args);
        };
    
        // function 
        RSplineData.prototype.appendKnot = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.appendKnot");
          return this.__PROXY__.appendKnot(...args);
        };
    
        // function 
        RSplineData.prototype.setWeights = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.setWeights");
          return this.__PROXY__.setWeights(...args);
        };
    
        // function 
        RSplineData.prototype.setDegree = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.setDegree");
          return this.__PROXY__.setDegree(...args);
        };
    
        // function 
        RSplineData.prototype.getOrder = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getOrder");
          return this.__PROXY__.getOrder(...args);
        };
    
        // function 
        RSplineData.prototype.isGeometricallyClosed = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.isGeometricallyClosed");
          return this.__PROXY__.isGeometricallyClosed(...args);
        };
    
        // function 
        RSplineData.prototype.getSideOfPoint = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getSideOfPoint");
          return this.__PROXY__.getSideOfPoint(...args);
        };
    
        // function 
        RSplineData.prototype.setTangents = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.setTangents");
          return this.__PROXY__.setTangents(...args);
        };
    
        // function 
        RSplineData.prototype.unsetTangents = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.unsetTangents");
          return this.__PROXY__.unsetTangents(...args);
        };
    
        // function 
        RSplineData.prototype.setTangentAtStart = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.setTangentAtStart");
          return this.__PROXY__.setTangentAtStart(...args);
        };
    
        // function 
        RSplineData.prototype.unsetTangentAtStart = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.unsetTangentAtStart");
          return this.__PROXY__.unsetTangentAtStart(...args);
        };
    
        // function 
        RSplineData.prototype.setTangentAtEnd = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.setTangentAtEnd");
          return this.__PROXY__.setTangentAtEnd(...args);
        };
    
        // function 
        RSplineData.prototype.unsetTangentAtEnd = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.unsetTangentAtEnd");
          return this.__PROXY__.unsetTangentAtEnd(...args);
        };
    
        // function 
        RSplineData.prototype.updateTangentsPeriodic = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.updateTangentsPeriodic");
          return this.__PROXY__.updateTangentsPeriodic(...args);
        };
    
        // function 
        RSplineData.prototype.getMiddlePoint = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getMiddlePoint");
          return this.__PROXY__.getMiddlePoint(...args);
        };
    
        // function 
        RSplineData.prototype.getPointCloud = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getPointCloud");
          return this.__PROXY__.getPointCloud(...args);
        };
    
        // function 
        RSplineData.prototype.isOnShape = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.isOnShape");
          return this.__PROXY__.isOnShape(...args);
        };
    
        // function 
        RSplineData.prototype.getTransformed = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getTransformed");
          return this.__PROXY__.getTransformed(...args);
        };
    
        // function 
        RSplineData.prototype.getDistanceFromStart = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getDistanceFromStart");
          return this.__PROXY__.getDistanceFromStart(...args);
        };
    
        // function 
        RSplineData.prototype.splitAtPoints = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.splitAtPoints");
          return this.__PROXY__.splitAtPoints(...args);
        };
    
        // function 
        RSplineData.prototype.splitAtParams = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.splitAtParams");
          return this.__PROXY__.splitAtParams(...args);
        };
    
        // function 
        RSplineData.prototype.getExploded = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getExploded");
          return this.__PROXY__.getExploded(...args);
        };
    
        // function 
        RSplineData.prototype.getExplodedBezier = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getExplodedBezier");
          return this.__PROXY__.getExplodedBezier(...args);
        };
    
        // function 
        RSplineData.prototype.getExplodedWithSegmentLength = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getExplodedWithSegmentLength");
          return this.__PROXY__.getExplodedWithSegmentLength(...args);
        };
    
        // function 
        RSplineData.prototype.getBezierSegments = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getBezierSegments");
          return this.__PROXY__.getBezierSegments(...args);
        };
    
        // function 
        RSplineData.prototype.getTDelta = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getTDelta");
          return this.__PROXY__.getTDelta(...args);
        };
    
        // function 
        RSplineData.prototype.getTMin = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getTMin");
          return this.__PROXY__.getTMin(...args);
        };
    
        // function 
        RSplineData.prototype.getTMax = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getTMax");
          return this.__PROXY__.getTMax(...args);
        };
    
        // function 
        RSplineData.prototype.getTAtPoint = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getTAtPoint");
          return this.__PROXY__.getTAtPoint(...args);
        };
    
        // function 
        RSplineData.prototype.getTAtDistance = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getTAtDistance");
          return this.__PROXY__.getTAtDistance(...args);
        };
    
        // function 
        RSplineData.prototype.getDistanceAtT = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getDistanceAtT");
          return this.__PROXY__.getDistanceAtT(...args);
        };
    
        // function 
        RSplineData.prototype.getSegments = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getSegments");
          return this.__PROXY__.getSegments(...args);
        };
    
        // function 
        RSplineData.prototype.getDiscontinuities = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getDiscontinuities");
          return this.__PROXY__.getDiscontinuities(...args);
        };
    
        // function 
        RSplineData.prototype.updateFromControlPoints = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.updateFromControlPoints");
          return this.__PROXY__.updateFromControlPoints(...args);
        };
    
        // function 
        RSplineData.prototype.updateFromFitPoints = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.updateFromFitPoints");
          return this.__PROXY__.updateFromFitPoints(...args);
        };
    
        // function 
        RSplineData.prototype.splitAt = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.splitAt");
          return this.__PROXY__.splitAt(...args);
        };
    
        // function 
        RSplineData.prototype.isDirty = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.isDirty");
          return this.__PROXY__.isDirty(...args);
        };
    
        // function 
        RSplineData.prototype.getSelfIntersectionPoints = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getSelfIntersectionPoints");
          return this.__PROXY__.getSelfIntersectionPoints(...args);
        };
    
        // function 
        RSplineData.prototype.appendToExploded = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.appendToExploded");
          return this.__PROXY__.appendToExploded(...args);
        };
    
        // function 
        RSplineData.prototype.invalidate = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.invalidate");
          return this.__PROXY__.invalidate(...args);
        };
    
        // function 
        RSplineData.prototype.updateInternal = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.updateInternal");
          return this.__PROXY__.updateInternal(...args);
        };
    
        // function 
        RSplineData.prototype.updateBoundingBox = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.updateBoundingBox");
          return this.__PROXY__.updateBoundingBox(...args);
        };
    
        // function 
        RSplineData.prototype.print = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.print");
          return this.__PROXY__.print(...args);
        };
    
        // function 
        RSplineData.prototype.copy = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.copy");
          return this.__PROXY__.copy(...args);
        };
    
        // function 
        RSplineData.prototype.getType = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RSplineData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RSplineData.prototype.setZ = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RSplineData.prototype.to2D = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RSplineData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RSplineData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RSplineData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RSplineData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RSplineData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RSplineData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RSplineData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RSplineData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RSplineData.prototype.move = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RSplineData.prototype.rotate = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RSplineData.prototype.scale = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RSplineData.prototype.mirror = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RSplineData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RSplineData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RSplineData.prototype.stretch = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RSplineData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RSplineData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RSplineData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RSplineData.prototype.setShape = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.setShape");
          return this.__PROXY__.setShape(...args);
        };
    
        // function 
        RSplineData.prototype.appendControlPoint = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.appendControlPoint");
          return this.__PROXY__.appendControlPoint(...args);
        };
    
        // function 
        RSplineData.prototype.appendFitPoint = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.appendFitPoint");
          return this.__PROXY__.appendFitPoint(...args);
        };
    
        // function 
        RSplineData.prototype.prependFitPoint = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.prependFitPoint");
          return this.__PROXY__.prependFitPoint(...args);
        };
    
        // function 
        RSplineData.prototype.insertFitPointAt = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.insertFitPointAt");
          return this.__PROXY__.insertFitPointAt(...args);
        };
    
        // function 
        RSplineData.prototype.removeFitPointAt = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.removeFitPointAt");
          return this.__PROXY__.removeFitPointAt(...args);
        };
    
        // function 
        RSplineData.prototype.setPeriodic = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.setPeriodic");
          return this.__PROXY__.setPeriodic(...args);
        };
    
        // function 
        RSplineData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RSplineData.prototype.getDegree = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getDegree");
          return this.__PROXY__.getDegree(...args);
        };
    
        // function 
        RSplineData.prototype.getDirection1 = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getDirection1");
          return this.__PROXY__.getDirection1(...args);
        };
    
        // function 
        RSplineData.prototype.getDirection2 = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getDirection2");
          return this.__PROXY__.getDirection2(...args);
        };
    
        // function 
        RSplineData.prototype.getStartPoint = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getStartPoint");
          return this.__PROXY__.getStartPoint(...args);
        };
    
        // function 
        RSplineData.prototype.getEndPoint = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getEndPoint");
          return this.__PROXY__.getEndPoint(...args);
        };
    
        // function 
        RSplineData.prototype.setStartPoint = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.setStartPoint");
          return this.__PROXY__.setStartPoint(...args);
        };
    
        // function 
        RSplineData.prototype.setEndPoint = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.setEndPoint");
          return this.__PROXY__.setEndPoint(...args);
        };
    
        // function 
        RSplineData.prototype.reverse = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.reverse");
          return this.__PROXY__.reverse(...args);
        };
    
        // function 
        RSplineData.prototype.getTrimEnd = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getTrimEnd");
          return this.__PROXY__.getTrimEnd(...args);
        };
    
        // function 
        RSplineData.prototype.trimStartPoint = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.trimStartPoint");
          return this.__PROXY__.trimStartPoint(...args);
        };
    
        // function 
        RSplineData.prototype.trimEndPoint = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.trimEndPoint");
          return this.__PROXY__.trimEndPoint(...args);
        };
    
        // function 
        RSplineData.prototype.isClosed = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.isClosed");
          return this.__PROXY__.isClosed(...args);
        };
    
        // function 
        RSplineData.prototype.isPeriodic = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.isPeriodic");
          return this.__PROXY__.isPeriodic(...args);
        };
    
        // function 
        RSplineData.prototype.getTangentAtStart = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getTangentAtStart");
          return this.__PROXY__.getTangentAtStart(...args);
        };
    
        // function 
        RSplineData.prototype.getTangentAtEnd = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getTangentAtEnd");
          return this.__PROXY__.getTangentAtEnd(...args);
        };
    
        // function 
        RSplineData.prototype.getControlPoints = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getControlPoints");
          return this.__PROXY__.getControlPoints(...args);
        };
    
        // function 
        RSplineData.prototype.getControlPointsWrapped = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getControlPointsWrapped");
          return this.__PROXY__.getControlPointsWrapped(...args);
        };
    
        // function 
        RSplineData.prototype.getFitPoints = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getFitPoints");
          return this.__PROXY__.getFitPoints(...args);
        };
    
        // function 
        RSplineData.prototype.getKnotVector = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getKnotVector");
          return this.__PROXY__.getKnotVector(...args);
        };
    
        // function 
        RSplineData.prototype.getActualKnotVector = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getActualKnotVector");
          return this.__PROXY__.getActualKnotVector(...args);
        };
    
        // function 
        RSplineData.prototype.getWeights = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getWeights");
          return this.__PROXY__.getWeights(...args);
        };
    
        // function 
        RSplineData.prototype.getLength = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getLength");
          return this.__PROXY__.getLength(...args);
        };
    
        // function 
        RSplineData.prototype.getPointAt = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getPointAt");
          return this.__PROXY__.getPointAt(...args);
        };
    
        // function 
        RSplineData.prototype.getPointAtDistance = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getPointAtDistance");
          return this.__PROXY__.getPointAtDistance(...args);
        };
    
        // function 
        RSplineData.prototype.getAngleAt = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getAngleAt");
          return this.__PROXY__.getAngleAt(...args);
        };
    
        // function 
        RSplineData.prototype.toPolyline = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.toPolyline");
          return this.__PROXY__.toPolyline(...args);
        };
    
        // function 
        RSplineData.prototype.approximateWithArcs = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.approximateWithArcs");
          return this.__PROXY__.approximateWithArcs(...args);
        };
    
        // function 
        RSplineData.prototype.simplify = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.simplify");
          return this.__PROXY__.simplify(...args);
        };
    
        // function 
        RSplineData.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RSplineData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RSplineData.prototype.update = function(...args) 
          
        {
          //print("JS: RSplineData.prototype.update");
          return this.__PROXY__.update(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RSplineData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSplineData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RSplineData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      