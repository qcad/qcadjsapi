
      // auto generated
      //var self;

      // class constructor:
      function RPolylineData() {
        

        // should be RPolylineData_BaseJs.call(this, engine):
        //RPolylineData.prototype = new RPolylineData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPolylineData.getIdStatic()))) {

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
            qWarning("RPolylineData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RPolylineData_Wrapper(
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

      

        //copyProperties(this, wrapper, RPolylineData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RPolylineData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPolylineData);
  }

  
  else {
    
        print("RPolylineData(): wrong number / type of arguments");
      
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

      //RPolylineData.prototype = new RPolylineData_BaseJs(engine);
      //RPolylineData.prototype = new RPolylineData_Wrapper(engine);
      RPolylineData.prototype = new Object();

      RPolylineData.prototype.toString = function() {
          //return "RPolylineData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPolylineData [JS]";
        };
      RPolylineData.getObjectType = function() {
        return RJSType_RPolylineData.getIdStatic();
      };

      RPolylineData.prototype.getObjectType = function() {
        return RJSType_RPolylineData.getIdStatic();
      };

      RPolylineData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPolylineData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RPolyline.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RPolylineData.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RPolylineData.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RPolylineData.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RPolylineData.prototype.isSane = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RPolylineData.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RPolylineData.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RPolylineData.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RPolylineData.prototype.getHull = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RPolylineData.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RPolylineData.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RPolylineData.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RPolylineData.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RPolylineData.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RPolylineData.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RPolylineData.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RPolylineData.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RPolylineData.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RPolylineData.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RPolylineData.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RPolylineData.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RPolylineData.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RPolylineData.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RPolylineData.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RPolylineData.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RPolylineData.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RPolylineData.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RPolylineData.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RPolylineData.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RPolylineData.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RPolylineData.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RPolylineData.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RPolylineData.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RPolylineData.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RPolylineData.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RPolylineData.prototype.setColor = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RPolylineData.prototype.getColor = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RPolylineData.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RPolylineData.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RPolylineData.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RPolylineData.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RPolylineData.prototype.isInside = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RPolylineData.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RPolylineData.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RPolylineData.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RPolylineData.prototype.update = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RPolylineData.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RPolylineData.prototype.getShapeType = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getShapeType");
          return this.__PROXY__.getShapeType(...args);
        };
    
        // function 
        RPolylineData.prototype.clone = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RPolylineData.prototype.isDirected = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.isDirected");
          return this.__PROXY__.isDirected(...args);
        };
    
        // function 
        RPolylineData.prototype.isFlat = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.isFlat");
          return this.__PROXY__.isFlat(...args);
        };
    
        // function 
        RPolylineData.prototype.getVectorProperties = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getVectorProperties");
          return this.__PROXY__.getVectorProperties(...args);
        };
    
        // function 
        RPolylineData.prototype.getDoubleProperties = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getDoubleProperties");
          return this.__PROXY__.getDoubleProperties(...args);
        };
    
        // function 
        RPolylineData.prototype.getBoolProperties = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getBoolProperties");
          return this.__PROXY__.getBoolProperties(...args);
        };
    
        // function 
        RPolylineData.prototype.prependShape = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.prependShape");
          return this.__PROXY__.prependShape(...args);
        };
    
        // function 
        RPolylineData.prototype.appendShape = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.appendShape");
          return this.__PROXY__.appendShape(...args);
        };
    
        // function 
        RPolylineData.prototype.appendShapeAuto = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.appendShapeAuto");
          return this.__PROXY__.appendShapeAuto(...args);
        };
    
        // function 
        RPolylineData.prototype.appendShapeTrim = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.appendShapeTrim");
          return this.__PROXY__.appendShapeTrim(...args);
        };
    
        // function 
        RPolylineData.prototype.closeTrim = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.closeTrim");
          return this.__PROXY__.closeTrim(...args);
        };
    
        // function 
        RPolylineData.prototype.insertVertexAt = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.insertVertexAt");
          return this.__PROXY__.insertVertexAt(...args);
        };
    
        // function 
        RPolylineData.prototype.insertVertexAtDistance = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.insertVertexAtDistance");
          return this.__PROXY__.insertVertexAtDistance(...args);
        };
    
        // function 
        RPolylineData.prototype.removeFirstVertex = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.removeFirstVertex");
          return this.__PROXY__.removeFirstVertex(...args);
        };
    
        // function 
        RPolylineData.prototype.removeVerticesAfter = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.removeVerticesAfter");
          return this.__PROXY__.removeVerticesAfter(...args);
        };
    
        // function 
        RPolylineData.prototype.removeVerticesBefore = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.removeVerticesBefore");
          return this.__PROXY__.removeVerticesBefore(...args);
        };
    
        // function 
        RPolylineData.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.isEmpty");
          return this.__PROXY__.isEmpty(...args);
        };
    
        // function 
        RPolylineData.prototype.setVertices = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.setVertices");
          return this.__PROXY__.setVertices(...args);
        };
    
        // function 
        RPolylineData.prototype.setVertexAt = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.setVertexAt");
          return this.__PROXY__.setVertexAt(...args);
        };
    
        // function 
        RPolylineData.prototype.moveVertexAt = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.moveVertexAt");
          return this.__PROXY__.moveVertexAt(...args);
        };
    
        // function 
        RPolylineData.prototype.getVertexIndex = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getVertexIndex");
          return this.__PROXY__.getVertexIndex(...args);
        };
    
        // function 
        RPolylineData.prototype.getLastVertex = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getLastVertex");
          return this.__PROXY__.getLastVertex(...args);
        };
    
        // function 
        RPolylineData.prototype.countVertices = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.countVertices");
          return this.__PROXY__.countVertices(...args);
        };
    
        // function 
        RPolylineData.prototype.setBulges = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.setBulges");
          return this.__PROXY__.setBulges(...args);
        };
    
        // function 
        RPolylineData.prototype.getBulges = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getBulges");
          return this.__PROXY__.getBulges(...args);
        };
    
        // function 
        RPolylineData.prototype.hasArcSegments = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.hasArcSegments");
          return this.__PROXY__.hasArcSegments(...args);
        };
    
        // function 
        RPolylineData.prototype.getVertexAngles = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getVertexAngles");
          return this.__PROXY__.getVertexAngles(...args);
        };
    
        // function 
        RPolylineData.prototype.getSelfIntersectionPoints = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getSelfIntersectionPoints");
          return this.__PROXY__.getSelfIntersectionPoints(...args);
        };
    
        // function 
        RPolylineData.prototype.setOrientation = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.setOrientation");
          return this.__PROXY__.setOrientation(...args);
        };
    
        // function 
        RPolylineData.prototype.convertArcToLineSegments = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.convertArcToLineSegments");
          return this.__PROXY__.convertArcToLineSegments(...args);
        };
    
        // function 
        RPolylineData.prototype.convertArcToLineSegmentsLength = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.convertArcToLineSegmentsLength");
          return this.__PROXY__.convertArcToLineSegmentsLength(...args);
        };
    
        // function 
        RPolylineData.prototype.contains = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.contains");
          return this.__PROXY__.contains(...args);
        };
    
        // function 
        RPolylineData.prototype.containsShape = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.containsShape");
          return this.__PROXY__.containsShape(...args);
        };
    
        // function 
        RPolylineData.prototype.getPointInside = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getPointInside");
          return this.__PROXY__.getPointInside(...args);
        };
    
        // function 
        RPolylineData.prototype.getMiddlePoint = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getMiddlePoint");
          return this.__PROXY__.getMiddlePoint(...args);
        };
    
        // function 
        RPolylineData.prototype.moveStartPoint = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.moveStartPoint");
          return this.__PROXY__.moveStartPoint(...args);
        };
    
        // function 
        RPolylineData.prototype.moveEndPoint = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.moveEndPoint");
          return this.__PROXY__.moveEndPoint(...args);
        };
    
        // function 
        RPolylineData.prototype.moveSegmentAt = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.moveSegmentAt");
          return this.__PROXY__.moveSegmentAt(...args);
        };
    
        // function 
        RPolylineData.prototype.getSideOfPoint = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getSideOfPoint");
          return this.__PROXY__.getSideOfPoint(...args);
        };
    
        // function 
        RPolylineData.prototype.getArea = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getArea");
          return this.__PROXY__.getArea(...args);
        };
    
        // function 
        RPolylineData.prototype.getLength = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getLength");
          return this.__PROXY__.getLength(...args);
        };
    
        // function 
        RPolylineData.prototype.getDistanceFromStart = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getDistanceFromStart");
          return this.__PROXY__.getDistanceFromStart(...args);
        };
    
        // function 
        RPolylineData.prototype.getDistancesFromStart = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getDistancesFromStart");
          return this.__PROXY__.getDistancesFromStart(...args);
        };
    
        // function 
        RPolylineData.prototype.getLengthTo = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getLengthTo");
          return this.__PROXY__.getLengthTo(...args);
        };
    
        // function 
        RPolylineData.prototype.getSegmentsLength = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getSegmentsLength");
          return this.__PROXY__.getSegmentsLength(...args);
        };
    
        // function 
        RPolylineData.prototype.getPointAtPercent = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getPointAtPercent");
          return this.__PROXY__.getPointAtPercent(...args);
        };
    
        // function 
        RPolylineData.prototype.getPointCloud = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getPointCloud");
          return this.__PROXY__.getPointCloud(...args);
        };
    
        // function 
        RPolylineData.prototype.getAngleAt = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getAngleAt");
          return this.__PROXY__.getAngleAt(...args);
        };
    
        // function 
        RPolylineData.prototype.getClosestSegment = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getClosestSegment");
          return this.__PROXY__.getClosestSegment(...args);
        };
    
        // function 
        RPolylineData.prototype.getClosestVertex = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getClosestVertex");
          return this.__PROXY__.getClosestVertex(...args);
        };
    
        // function 
        RPolylineData.prototype.getReversed = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getReversed");
          return this.__PROXY__.getReversed(...args);
        };
    
        // function 
        RPolylineData.prototype.getTransformed = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getTransformed");
          return this.__PROXY__.getTransformed(...args);
        };
    
        // function 
        RPolylineData.prototype.getTrimEnd = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getTrimEnd");
          return this.__PROXY__.getTrimEnd(...args);
        };
    
        // function 
        RPolylineData.prototype.trimStartPoint = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.trimStartPoint");
          return this.__PROXY__.trimStartPoint(...args);
        };
    
        // function 
        RPolylineData.prototype.trimEndPoint = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.trimEndPoint");
          return this.__PROXY__.trimEndPoint(...args);
        };
    
        // function 
        RPolylineData.prototype.getOutline = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getOutline");
          return this.__PROXY__.getOutline(...args);
        };
    
        // function 
        RPolylineData.prototype.getLeftOutline = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getLeftOutline");
          return this.__PROXY__.getLeftOutline(...args);
        };
    
        // function 
        RPolylineData.prototype.getRightOutline = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getRightOutline");
          return this.__PROXY__.getRightOutline(...args);
        };
    
        // function 
        RPolylineData.prototype.isInterpolated = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.isInterpolated");
          return this.__PROXY__.isInterpolated(...args);
        };
    
        // function 
        RPolylineData.prototype.isArcSegmentAt = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.isArcSegmentAt");
          return this.__PROXY__.isArcSegmentAt(...args);
        };
    
        // function 
        RPolylineData.prototype.getLastSegment = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getLastSegment");
          return this.__PROXY__.getLastSegment(...args);
        };
    
        // function 
        RPolylineData.prototype.getFirstSegment = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getFirstSegment");
          return this.__PROXY__.getFirstSegment(...args);
        };
    
        // function 
        RPolylineData.prototype.stripWidths = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.stripWidths");
          return this.__PROXY__.stripWidths(...args);
        };
    
        // function 
        RPolylineData.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.setMinimumWidth");
          return this.__PROXY__.setMinimumWidth(...args);
        };
    
        // function 
        RPolylineData.prototype.getSegmentAtDist = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getSegmentAtDist");
          return this.__PROXY__.getSegmentAtDist(...args);
        };
    
        // function 
        RPolylineData.prototype.convertToClosed = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.convertToClosed");
          return this.__PROXY__.convertToClosed(...args);
        };
    
        // function 
        RPolylineData.prototype.convertToOpen = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.convertToOpen");
          return this.__PROXY__.convertToOpen(...args);
        };
    
        // function 
        RPolylineData.prototype.modifyPolylineCorner = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.modifyPolylineCorner");
          return this.__PROXY__.modifyPolylineCorner(...args);
        };
    
        // function 
        RPolylineData.prototype.isConcave = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.isConcave");
          return this.__PROXY__.isConcave(...args);
        };
    
        // function 
        RPolylineData.prototype.getConvexVertices = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getConvexVertices");
          return this.__PROXY__.getConvexVertices(...args);
        };
    
        // function 
        RPolylineData.prototype.getConcaveVertices = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getConcaveVertices");
          return this.__PROXY__.getConcaveVertices(...args);
        };
    
        // function 
        RPolylineData.prototype.getCentroid = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getCentroid");
          return this.__PROXY__.getCentroid(...args);
        };
    
        // function 
        RPolylineData.prototype.splitAtDiscontinuities = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.splitAtDiscontinuities");
          return this.__PROXY__.splitAtDiscontinuities(...args);
        };
    
        // function 
        RPolylineData.prototype.splitAtSegmentTypeChange = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.splitAtSegmentTypeChange");
          return this.__PROXY__.splitAtSegmentTypeChange(...args);
        };
    
        // function 
        RPolylineData.prototype.insertVerticesAtSelfIntersections = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.insertVerticesAtSelfIntersections");
          return this.__PROXY__.insertVerticesAtSelfIntersections(...args);
        };
    
        // function 
        RPolylineData.prototype.getBaseAngle = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getBaseAngle");
          return this.__PROXY__.getBaseAngle(...args);
        };
    
        // function 
        RPolylineData.prototype.getWidth = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getWidth");
          return this.__PROXY__.getWidth(...args);
        };
    
        // function 
        RPolylineData.prototype.setWidth = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.setWidth");
          return this.__PROXY__.setWidth(...args);
        };
    
        // function 
        RPolylineData.prototype.getHeight = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getHeight");
          return this.__PROXY__.getHeight(...args);
        };
    
        // function 
        RPolylineData.prototype.setHeight = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.setHeight");
          return this.__PROXY__.setHeight(...args);
        };
    
        // function 
        RPolylineData.prototype.morph = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.morph");
          return this.__PROXY__.morph(...args);
        };
    
        // function 
        RPolylineData.prototype.getPolygonHull = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getPolygonHull");
          return this.__PROXY__.getPolygonHull(...args);
        };
    
        // function 
        RPolylineData.prototype.isLineSegment = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.isLineSegment");
          return this.__PROXY__.isLineSegment(...args);
        };
    
        // function 
        RPolylineData.prototype.print = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.print");
          return this.__PROXY__.print(...args);
        };
    
        // function 
        RPolylineData.prototype.copy = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.copy");
          return this.__PROXY__.copy(...args);
        };
    
        // function 
        RPolylineData.prototype.getType = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RPolylineData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RPolylineData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RPolylineData.prototype.setZ = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RPolylineData.prototype.to2D = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RPolylineData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RPolylineData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RPolylineData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RPolylineData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RPolylineData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RPolylineData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RPolylineData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RPolylineData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RPolylineData.prototype.move = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RPolylineData.prototype.rotate = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RPolylineData.prototype.scale = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RPolylineData.prototype.mirror = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RPolylineData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RPolylineData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RPolylineData.prototype.stretch = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RPolylineData.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RPolylineData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RPolylineData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RPolylineData.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RPolylineData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RPolylineData.prototype.getPolylineShape = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getPolylineShape");
          return this.__PROXY__.getPolylineShape(...args);
        };
    
        // function 
        RPolylineData.prototype.clear = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.clear");
          return this.__PROXY__.clear(...args);
        };
    
        // function 
        RPolylineData.prototype.normalize = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.normalize");
          return this.__PROXY__.normalize(...args);
        };
    
        // function 
        RPolylineData.prototype.getVertices = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getVertices");
          return this.__PROXY__.getVertices(...args);
        };
    
        // function 
        RPolylineData.prototype.getVertexAt = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getVertexAt");
          return this.__PROXY__.getVertexAt(...args);
        };
    
        // function 
        RPolylineData.prototype.appendVertex = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.appendVertex");
          return this.__PROXY__.appendVertex(...args);
        };
    
        // function 
        RPolylineData.prototype.prependVertex = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.prependVertex");
          return this.__PROXY__.prependVertex(...args);
        };
    
        // function 
        RPolylineData.prototype.insertVertex = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.insertVertex");
          return this.__PROXY__.insertVertex(...args);
        };
    
        // function 
        RPolylineData.prototype.removeLastVertex = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.removeLastVertex");
          return this.__PROXY__.removeLastVertex(...args);
        };
    
        // function 
        RPolylineData.prototype.removeVertex = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.removeVertex");
          return this.__PROXY__.removeVertex(...args);
        };
    
        // function 
        RPolylineData.prototype.countSegments = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.countSegments");
          return this.__PROXY__.countSegments(...args);
        };
    
        // function 
        RPolylineData.prototype.getSegmentAt = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getSegmentAt");
          return this.__PROXY__.getSegmentAt(...args);
        };
    
        // function 
        RPolylineData.prototype.getBulgeAt = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getBulgeAt");
          return this.__PROXY__.getBulgeAt(...args);
        };
    
        // function 
        RPolylineData.prototype.setBulgeAt = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.setBulgeAt");
          return this.__PROXY__.setBulgeAt(...args);
        };
    
        // function 
        RPolylineData.prototype.getVertexAngle = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getVertexAngle");
          return this.__PROXY__.getVertexAngle(...args);
        };
    
        // function 
        RPolylineData.prototype.getDirection1 = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getDirection1");
          return this.__PROXY__.getDirection1(...args);
        };
    
        // function 
        RPolylineData.prototype.getDirection2 = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getDirection2");
          return this.__PROXY__.getDirection2(...args);
        };
    
        // function 
        RPolylineData.prototype.reverse = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.reverse");
          return this.__PROXY__.reverse(...args);
        };
    
        // function 
        RPolylineData.prototype.getEndPoint = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getEndPoint");
          return this.__PROXY__.getEndPoint(...args);
        };
    
        // function 
        RPolylineData.prototype.getStartPoint = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getStartPoint");
          return this.__PROXY__.getStartPoint(...args);
        };
    
        // function 
        RPolylineData.prototype.relocateStartPoint = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.relocateStartPoint");
          return this.__PROXY__.relocateStartPoint(...args);
        };
    
        // function 
        RPolylineData.prototype.setClosed = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.setClosed");
          return this.__PROXY__.setClosed(...args);
        };
    
        // function 
        RPolylineData.prototype.isClosed = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.isClosed");
          return this.__PROXY__.isClosed(...args);
        };
    
        // function 
        RPolylineData.prototype.isGeometricallyClosed = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.isGeometricallyClosed");
          return this.__PROXY__.isGeometricallyClosed(...args);
        };
    
        // function 
        RPolylineData.prototype.autoClose = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.autoClose");
          return this.__PROXY__.autoClose(...args);
        };
    
        // function 
        RPolylineData.prototype.toLogicallyClosed = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.toLogicallyClosed");
          return this.__PROXY__.toLogicallyClosed(...args);
        };
    
        // function 
        RPolylineData.prototype.toLogicallyOpen = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.toLogicallyOpen");
          return this.__PROXY__.toLogicallyOpen(...args);
        };
    
        // function 
        RPolylineData.prototype.getOrientation = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getOrientation");
          return this.__PROXY__.getOrientation(...args);
        };
    
        // function 
        RPolylineData.prototype.setGlobalWidth = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.setGlobalWidth");
          return this.__PROXY__.setGlobalWidth(...args);
        };
    
        // function 
        RPolylineData.prototype.setStartWidthAt = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.setStartWidthAt");
          return this.__PROXY__.setStartWidthAt(...args);
        };
    
        // function 
        RPolylineData.prototype.getStartWidthAt = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getStartWidthAt");
          return this.__PROXY__.getStartWidthAt(...args);
        };
    
        // function 
        RPolylineData.prototype.setEndWidthAt = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.setEndWidthAt");
          return this.__PROXY__.setEndWidthAt(...args);
        };
    
        // function 
        RPolylineData.prototype.getEndWidthAt = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getEndWidthAt");
          return this.__PROXY__.getEndWidthAt(...args);
        };
    
        // function 
        RPolylineData.prototype.hasWidths = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.hasWidths");
          return this.__PROXY__.hasWidths(...args);
        };
    
        // function 
        RPolylineData.prototype.setStartWidths = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.setStartWidths");
          return this.__PROXY__.setStartWidths(...args);
        };
    
        // function 
        RPolylineData.prototype.getStartWidths = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getStartWidths");
          return this.__PROXY__.getStartWidths(...args);
        };
    
        // function 
        RPolylineData.prototype.setEndWidths = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.setEndWidths");
          return this.__PROXY__.setEndWidths(...args);
        };
    
        // function 
        RPolylineData.prototype.getEndWidths = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getEndWidths");
          return this.__PROXY__.getEndWidths(...args);
        };
    
        // function 
        RPolylineData.prototype.getExploded = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getExploded");
          return this.__PROXY__.getExploded(...args);
        };
    
        // function 
        RPolylineData.prototype.toPainterPath = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.toPainterPath");
          return this.__PROXY__.toPainterPath(...args);
        };
    
        // function 
        RPolylineData.prototype.simplify = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.simplify");
          return this.__PROXY__.simplify(...args);
        };
    
        // function 
        RPolylineData.prototype.roundAllCorners = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.roundAllCorners");
          return this.__PROXY__.roundAllCorners(...args);
        };
    
        // function 
        RPolylineData.prototype.verifyTangency = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.verifyTangency");
          return this.__PROXY__.verifyTangency(...args);
        };
    
        // function 
        RPolylineData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RPolylineData.prototype.setPolylineGen = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.setPolylineGen");
          return this.__PROXY__.setPolylineGen(...args);
        };
    
        // function 
        RPolylineData.prototype.getPolylineGen = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getPolylineGen");
          return this.__PROXY__.getPolylineGen(...args);
        };
    
        // function 
        RPolylineData.prototype.setElevation = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.setElevation");
          return this.__PROXY__.setElevation(...args);
        };
    
        // function 
        RPolylineData.prototype.getElevation = function(...args) 
          
        {
          //print("JS: RPolylineData.prototype.getElevation");
          return this.__PROXY__.getElevation(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RPolylineData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPolylineData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RPolylineData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      