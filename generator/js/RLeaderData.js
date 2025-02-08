
      // auto generated
      //var self;

      // class constructor:
      function RLeaderData() {
        

        // should be RLeaderData_BaseJs.call(this, engine):
        //RLeaderData.prototype = new RLeaderData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RLeaderData.getIdStatic()))) {

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
            qWarning("RLeaderData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RLeaderData_Wrapper(
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

      

        //copyProperties(this, wrapper, RLeaderData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RLeaderData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLeaderData);
  }

  
  else {
    
        print("RLeaderData(): wrong number / type of arguments");
      
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

      //RLeaderData.prototype = new RLeaderData_BaseJs(engine);
      //RLeaderData.prototype = new RLeaderData_Wrapper(engine);
      RLeaderData.prototype = new Object();

      RLeaderData.prototype.toString = function() {
          //return "RLeaderData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RLeaderData [JS]";
        };
      RLeaderData.getObjectType = function() {
        return RJSType_RLeaderData.getIdStatic();
      };

      RLeaderData.prototype.getObjectType = function() {
        return RJSType_RLeaderData.getIdStatic();
      };

      RLeaderData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RLeaderData.getIdStatic()) {
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
        RLeaderData.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RLeaderData.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RLeaderData.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RLeaderData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RLeaderData.prototype.isSane = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RLeaderData.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RLeaderData.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RLeaderData.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RLeaderData.prototype.to2D = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RLeaderData.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RLeaderData.prototype.getHull = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RLeaderData.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RLeaderData.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RLeaderData.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RLeaderData.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RLeaderData.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RLeaderData.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RLeaderData.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RLeaderData.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RLeaderData.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RLeaderData.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RLeaderData.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RLeaderData.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RLeaderData.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RLeaderData.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RLeaderData.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RLeaderData.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RLeaderData.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RLeaderData.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RLeaderData.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RLeaderData.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RLeaderData.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RLeaderData.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RLeaderData.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RLeaderData.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RLeaderData.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RLeaderData.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RLeaderData.prototype.setColor = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RLeaderData.prototype.getColor = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RLeaderData.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RLeaderData.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RLeaderData.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RLeaderData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RLeaderData.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RLeaderData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RLeaderData.prototype.isInside = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RLeaderData.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RLeaderData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RLeaderData.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RLeaderData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RLeaderData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RLeaderData.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RLeaderData.prototype.getShapeType = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getShapeType");
          return this.__PROXY__.getShapeType(...args);
        };
    
        // function 
        RLeaderData.prototype.clone = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RLeaderData.prototype.isDirected = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.isDirected");
          return this.__PROXY__.isDirected(...args);
        };
    
        // function 
        RLeaderData.prototype.setZ = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RLeaderData.prototype.isFlat = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.isFlat");
          return this.__PROXY__.isFlat(...args);
        };
    
        // function 
        RLeaderData.prototype.getVectorProperties = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getVectorProperties");
          return this.__PROXY__.getVectorProperties(...args);
        };
    
        // function 
        RLeaderData.prototype.getDoubleProperties = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getDoubleProperties");
          return this.__PROXY__.getDoubleProperties(...args);
        };
    
        // function 
        RLeaderData.prototype.getBoolProperties = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getBoolProperties");
          return this.__PROXY__.getBoolProperties(...args);
        };
    
        // function 
        RLeaderData.prototype.clear = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.clear");
          return this.__PROXY__.clear(...args);
        };
    
        // function 
        RLeaderData.prototype.normalize = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.normalize");
          return this.__PROXY__.normalize(...args);
        };
    
        // function 
        RLeaderData.prototype.prependShape = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.prependShape");
          return this.__PROXY__.prependShape(...args);
        };
    
        // function 
        RLeaderData.prototype.appendShape = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.appendShape");
          return this.__PROXY__.appendShape(...args);
        };
    
        // function 
        RLeaderData.prototype.appendShapeAuto = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.appendShapeAuto");
          return this.__PROXY__.appendShapeAuto(...args);
        };
    
        // function 
        RLeaderData.prototype.appendShapeTrim = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.appendShapeTrim");
          return this.__PROXY__.appendShapeTrim(...args);
        };
    
        // function 
        RLeaderData.prototype.closeTrim = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.closeTrim");
          return this.__PROXY__.closeTrim(...args);
        };
    
        // function 
        RLeaderData.prototype.prependVertex = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.prependVertex");
          return this.__PROXY__.prependVertex(...args);
        };
    
        // function 
        RLeaderData.prototype.insertVertex = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.insertVertex");
          return this.__PROXY__.insertVertex(...args);
        };
    
        // function 
        RLeaderData.prototype.insertVertexAt = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.insertVertexAt");
          return this.__PROXY__.insertVertexAt(...args);
        };
    
        // function 
        RLeaderData.prototype.insertVertexAtDistance = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.insertVertexAtDistance");
          return this.__PROXY__.insertVertexAtDistance(...args);
        };
    
        // function 
        RLeaderData.prototype.removeFirstVertex = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.removeFirstVertex");
          return this.__PROXY__.removeFirstVertex(...args);
        };
    
        // function 
        RLeaderData.prototype.removeLastVertex = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.removeLastVertex");
          return this.__PROXY__.removeLastVertex(...args);
        };
    
        // function 
        RLeaderData.prototype.removeVertex = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.removeVertex");
          return this.__PROXY__.removeVertex(...args);
        };
    
        // function 
        RLeaderData.prototype.removeVerticesAfter = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.removeVerticesAfter");
          return this.__PROXY__.removeVerticesAfter(...args);
        };
    
        // function 
        RLeaderData.prototype.removeVerticesBefore = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.removeVerticesBefore");
          return this.__PROXY__.removeVerticesBefore(...args);
        };
    
        // function 
        RLeaderData.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.isEmpty");
          return this.__PROXY__.isEmpty(...args);
        };
    
        // function 
        RLeaderData.prototype.setVertices = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.setVertices");
          return this.__PROXY__.setVertices(...args);
        };
    
        // function 
        RLeaderData.prototype.getVertices = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getVertices");
          return this.__PROXY__.getVertices(...args);
        };
    
        // function 
        RLeaderData.prototype.setVertexAt = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.setVertexAt");
          return this.__PROXY__.setVertexAt(...args);
        };
    
        // function 
        RLeaderData.prototype.moveVertexAt = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.moveVertexAt");
          return this.__PROXY__.moveVertexAt(...args);
        };
    
        // function 
        RLeaderData.prototype.getVertexAt = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getVertexAt");
          return this.__PROXY__.getVertexAt(...args);
        };
    
        // function 
        RLeaderData.prototype.getVertexIndex = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getVertexIndex");
          return this.__PROXY__.getVertexIndex(...args);
        };
    
        // function 
        RLeaderData.prototype.getLastVertex = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getLastVertex");
          return this.__PROXY__.getLastVertex(...args);
        };
    
        // function 
        RLeaderData.prototype.setBulges = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.setBulges");
          return this.__PROXY__.setBulges(...args);
        };
    
        // function 
        RLeaderData.prototype.getBulges = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getBulges");
          return this.__PROXY__.getBulges(...args);
        };
    
        // function 
        RLeaderData.prototype.getBulgeAt = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getBulgeAt");
          return this.__PROXY__.getBulgeAt(...args);
        };
    
        // function 
        RLeaderData.prototype.setBulgeAt = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.setBulgeAt");
          return this.__PROXY__.setBulgeAt(...args);
        };
    
        // function 
        RLeaderData.prototype.hasArcSegments = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.hasArcSegments");
          return this.__PROXY__.hasArcSegments(...args);
        };
    
        // function 
        RLeaderData.prototype.getVertexAngles = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getVertexAngles");
          return this.__PROXY__.getVertexAngles(...args);
        };
    
        // function 
        RLeaderData.prototype.getVertexAngle = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getVertexAngle");
          return this.__PROXY__.getVertexAngle(...args);
        };
    
        // function 
        RLeaderData.prototype.setGlobalWidth = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.setGlobalWidth");
          return this.__PROXY__.setGlobalWidth(...args);
        };
    
        // function 
        RLeaderData.prototype.setStartWidthAt = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.setStartWidthAt");
          return this.__PROXY__.setStartWidthAt(...args);
        };
    
        // function 
        RLeaderData.prototype.getStartWidthAt = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getStartWidthAt");
          return this.__PROXY__.getStartWidthAt(...args);
        };
    
        // function 
        RLeaderData.prototype.setEndWidthAt = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.setEndWidthAt");
          return this.__PROXY__.setEndWidthAt(...args);
        };
    
        // function 
        RLeaderData.prototype.getEndWidthAt = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getEndWidthAt");
          return this.__PROXY__.getEndWidthAt(...args);
        };
    
        // function 
        RLeaderData.prototype.hasWidths = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.hasWidths");
          return this.__PROXY__.hasWidths(...args);
        };
    
        // function 
        RLeaderData.prototype.setStartWidths = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.setStartWidths");
          return this.__PROXY__.setStartWidths(...args);
        };
    
        // function 
        RLeaderData.prototype.getStartWidths = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getStartWidths");
          return this.__PROXY__.getStartWidths(...args);
        };
    
        // function 
        RLeaderData.prototype.setEndWidths = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.setEndWidths");
          return this.__PROXY__.setEndWidths(...args);
        };
    
        // function 
        RLeaderData.prototype.getEndWidths = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getEndWidths");
          return this.__PROXY__.getEndWidths(...args);
        };
    
        // function 
        RLeaderData.prototype.setClosed = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.setClosed");
          return this.__PROXY__.setClosed(...args);
        };
    
        // function 
        RLeaderData.prototype.isClosed = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.isClosed");
          return this.__PROXY__.isClosed(...args);
        };
    
        // function 
        RLeaderData.prototype.isGeometricallyClosed = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.isGeometricallyClosed");
          return this.__PROXY__.isGeometricallyClosed(...args);
        };
    
        // function 
        RLeaderData.prototype.autoClose = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.autoClose");
          return this.__PROXY__.autoClose(...args);
        };
    
        // function 
        RLeaderData.prototype.toLogicallyClosed = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.toLogicallyClosed");
          return this.__PROXY__.toLogicallyClosed(...args);
        };
    
        // function 
        RLeaderData.prototype.toLogicallyOpen = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.toLogicallyOpen");
          return this.__PROXY__.toLogicallyOpen(...args);
        };
    
        // function 
        RLeaderData.prototype.getSelfIntersectionPoints = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getSelfIntersectionPoints");
          return this.__PROXY__.getSelfIntersectionPoints(...args);
        };
    
        // function 
        RLeaderData.prototype.getOrientation = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getOrientation");
          return this.__PROXY__.getOrientation(...args);
        };
    
        // function 
        RLeaderData.prototype.setOrientation = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.setOrientation");
          return this.__PROXY__.setOrientation(...args);
        };
    
        // function 
        RLeaderData.prototype.convertArcToLineSegments = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.convertArcToLineSegments");
          return this.__PROXY__.convertArcToLineSegments(...args);
        };
    
        // function 
        RLeaderData.prototype.convertArcToLineSegmentsLength = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.convertArcToLineSegmentsLength");
          return this.__PROXY__.convertArcToLineSegmentsLength(...args);
        };
    
        // function 
        RLeaderData.prototype.contains = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.contains");
          return this.__PROXY__.contains(...args);
        };
    
        // function 
        RLeaderData.prototype.containsShape = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.containsShape");
          return this.__PROXY__.containsShape(...args);
        };
    
        // function 
        RLeaderData.prototype.getPointInside = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getPointInside");
          return this.__PROXY__.getPointInside(...args);
        };
    
        // function 
        RLeaderData.prototype.getMiddlePoint = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getMiddlePoint");
          return this.__PROXY__.getMiddlePoint(...args);
        };
    
        // function 
        RLeaderData.prototype.moveStartPoint = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.moveStartPoint");
          return this.__PROXY__.moveStartPoint(...args);
        };
    
        // function 
        RLeaderData.prototype.moveEndPoint = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.moveEndPoint");
          return this.__PROXY__.moveEndPoint(...args);
        };
    
        // function 
        RLeaderData.prototype.moveSegmentAt = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.moveSegmentAt");
          return this.__PROXY__.moveSegmentAt(...args);
        };
    
        // function 
        RLeaderData.prototype.getDirection1 = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getDirection1");
          return this.__PROXY__.getDirection1(...args);
        };
    
        // function 
        RLeaderData.prototype.getDirection2 = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getDirection2");
          return this.__PROXY__.getDirection2(...args);
        };
    
        // function 
        RLeaderData.prototype.getSideOfPoint = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getSideOfPoint");
          return this.__PROXY__.getSideOfPoint(...args);
        };
    
        // function 
        RLeaderData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RLeaderData.prototype.getArea = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getArea");
          return this.__PROXY__.getArea(...args);
        };
    
        // function 
        RLeaderData.prototype.getLength = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getLength");
          return this.__PROXY__.getLength(...args);
        };
    
        // function 
        RLeaderData.prototype.getDistanceFromStart = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getDistanceFromStart");
          return this.__PROXY__.getDistanceFromStart(...args);
        };
    
        // function 
        RLeaderData.prototype.getDistancesFromStart = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getDistancesFromStart");
          return this.__PROXY__.getDistancesFromStart(...args);
        };
    
        // function 
        RLeaderData.prototype.getLengthTo = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getLengthTo");
          return this.__PROXY__.getLengthTo(...args);
        };
    
        // function 
        RLeaderData.prototype.getSegmentsLength = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getSegmentsLength");
          return this.__PROXY__.getSegmentsLength(...args);
        };
    
        // function 
        RLeaderData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RLeaderData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RLeaderData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RLeaderData.prototype.getPointAtPercent = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getPointAtPercent");
          return this.__PROXY__.getPointAtPercent(...args);
        };
    
        // function 
        RLeaderData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RLeaderData.prototype.getPointCloud = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getPointCloud");
          return this.__PROXY__.getPointCloud(...args);
        };
    
        // function 
        RLeaderData.prototype.getAngleAt = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getAngleAt");
          return this.__PROXY__.getAngleAt(...args);
        };
    
        // function 
        RLeaderData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RLeaderData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RLeaderData.prototype.getClosestSegment = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getClosestSegment");
          return this.__PROXY__.getClosestSegment(...args);
        };
    
        // function 
        RLeaderData.prototype.getClosestVertex = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getClosestVertex");
          return this.__PROXY__.getClosestVertex(...args);
        };
    
        // function 
        RLeaderData.prototype.move = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RLeaderData.prototype.rotate = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RLeaderData.prototype.mirror = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RLeaderData.prototype.getReversed = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getReversed");
          return this.__PROXY__.getReversed(...args);
        };
    
        // function 
        RLeaderData.prototype.getTransformed = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getTransformed");
          return this.__PROXY__.getTransformed(...args);
        };
    
        // function 
        RLeaderData.prototype.getTrimEnd = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getTrimEnd");
          return this.__PROXY__.getTrimEnd(...args);
        };
    
        // function 
        RLeaderData.prototype.trimStartPoint = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.trimStartPoint");
          return this.__PROXY__.trimStartPoint(...args);
        };
    
        // function 
        RLeaderData.prototype.trimEndPoint = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.trimEndPoint");
          return this.__PROXY__.trimEndPoint(...args);
        };
    
        // function 
        RLeaderData.prototype.getOutline = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getOutline");
          return this.__PROXY__.getOutline(...args);
        };
    
        // function 
        RLeaderData.prototype.getLeftOutline = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getLeftOutline");
          return this.__PROXY__.getLeftOutline(...args);
        };
    
        // function 
        RLeaderData.prototype.getRightOutline = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getRightOutline");
          return this.__PROXY__.getRightOutline(...args);
        };
    
        // function 
        RLeaderData.prototype.isInterpolated = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.isInterpolated");
          return this.__PROXY__.isInterpolated(...args);
        };
    
        // function 
        RLeaderData.prototype.getSegmentAt = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getSegmentAt");
          return this.__PROXY__.getSegmentAt(...args);
        };
    
        // function 
        RLeaderData.prototype.isArcSegmentAt = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.isArcSegmentAt");
          return this.__PROXY__.isArcSegmentAt(...args);
        };
    
        // function 
        RLeaderData.prototype.getLastSegment = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getLastSegment");
          return this.__PROXY__.getLastSegment(...args);
        };
    
        // function 
        RLeaderData.prototype.getFirstSegment = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getFirstSegment");
          return this.__PROXY__.getFirstSegment(...args);
        };
    
        // function 
        RLeaderData.prototype.toPainterPath = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.toPainterPath");
          return this.__PROXY__.toPainterPath(...args);
        };
    
        // function 
        RLeaderData.prototype.simplify = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.simplify");
          return this.__PROXY__.simplify(...args);
        };
    
        // function 
        RLeaderData.prototype.verifyTangency = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.verifyTangency");
          return this.__PROXY__.verifyTangency(...args);
        };
    
        // function 
        RLeaderData.prototype.stripWidths = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.stripWidths");
          return this.__PROXY__.stripWidths(...args);
        };
    
        // function 
        RLeaderData.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.setMinimumWidth");
          return this.__PROXY__.setMinimumWidth(...args);
        };
    
        // function 
        RLeaderData.prototype.getSegmentAtDist = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getSegmentAtDist");
          return this.__PROXY__.getSegmentAtDist(...args);
        };
    
        // function 
        RLeaderData.prototype.relocateStartPoint = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.relocateStartPoint");
          return this.__PROXY__.relocateStartPoint(...args);
        };
    
        // function 
        RLeaderData.prototype.convertToClosed = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.convertToClosed");
          return this.__PROXY__.convertToClosed(...args);
        };
    
        // function 
        RLeaderData.prototype.convertToOpen = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.convertToOpen");
          return this.__PROXY__.convertToOpen(...args);
        };
    
        // function 
        RLeaderData.prototype.modifyPolylineCorner = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.modifyPolylineCorner");
          return this.__PROXY__.modifyPolylineCorner(...args);
        };
    
        // function 
        RLeaderData.prototype.isConcave = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.isConcave");
          return this.__PROXY__.isConcave(...args);
        };
    
        // function 
        RLeaderData.prototype.getConvexVertices = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getConvexVertices");
          return this.__PROXY__.getConvexVertices(...args);
        };
    
        // function 
        RLeaderData.prototype.getConcaveVertices = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getConcaveVertices");
          return this.__PROXY__.getConcaveVertices(...args);
        };
    
        // function 
        RLeaderData.prototype.getCentroid = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getCentroid");
          return this.__PROXY__.getCentroid(...args);
        };
    
        // function 
        RLeaderData.prototype.splitAtDiscontinuities = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.splitAtDiscontinuities");
          return this.__PROXY__.splitAtDiscontinuities(...args);
        };
    
        // function 
        RLeaderData.prototype.splitAtSegmentTypeChange = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.splitAtSegmentTypeChange");
          return this.__PROXY__.splitAtSegmentTypeChange(...args);
        };
    
        // function 
        RLeaderData.prototype.insertVerticesAtSelfIntersections = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.insertVerticesAtSelfIntersections");
          return this.__PROXY__.insertVerticesAtSelfIntersections(...args);
        };
    
        // function 
        RLeaderData.prototype.getBaseAngle = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getBaseAngle");
          return this.__PROXY__.getBaseAngle(...args);
        };
    
        // function 
        RLeaderData.prototype.getWidth = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getWidth");
          return this.__PROXY__.getWidth(...args);
        };
    
        // function 
        RLeaderData.prototype.setWidth = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.setWidth");
          return this.__PROXY__.setWidth(...args);
        };
    
        // function 
        RLeaderData.prototype.getHeight = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getHeight");
          return this.__PROXY__.getHeight(...args);
        };
    
        // function 
        RLeaderData.prototype.setHeight = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.setHeight");
          return this.__PROXY__.setHeight(...args);
        };
    
        // function 
        RLeaderData.prototype.morph = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.morph");
          return this.__PROXY__.morph(...args);
        };
    
        // function 
        RLeaderData.prototype.roundAllCorners = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.roundAllCorners");
          return this.__PROXY__.roundAllCorners(...args);
        };
    
        // function 
        RLeaderData.prototype.getPolygonHull = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getPolygonHull");
          return this.__PROXY__.getPolygonHull(...args);
        };
    
        // function 
        RLeaderData.prototype.isLineSegment = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.isLineSegment");
          return this.__PROXY__.isLineSegment(...args);
        };
    
        // function 
        RLeaderData.prototype.print = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.print");
          return this.__PROXY__.print(...args);
        };
    
        // function 
        RLeaderData.prototype.copy = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.copy");
          return this.__PROXY__.copy(...args);
        };
    
        // function 
        RLeaderData.prototype.getType = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RLeaderData.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RLeaderData.prototype.getDimasz = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getDimasz");
          return this.__PROXY__.getDimasz(...args);
        };
    
        // function 
        RLeaderData.prototype.setDimasz = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.setDimasz");
          return this.__PROXY__.setDimasz(...args);
        };
    
        // function 
        RLeaderData.prototype.getDimscale = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getDimscale");
          return this.__PROXY__.getDimscale(...args);
        };
    
        // function 
        RLeaderData.prototype.setDimscale = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.setDimscale");
          return this.__PROXY__.setDimscale(...args);
        };
    
        // function 
        RLeaderData.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RLeaderData.prototype.reverse = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.reverse");
          return this.__PROXY__.reverse(...args);
        };
    
        // function 
        RLeaderData.prototype.setArrowHead = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.setArrowHead");
          return this.__PROXY__.setArrowHead(...args);
        };
    
        // function 
        RLeaderData.prototype.hasArrowHead = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.hasArrowHead");
          return this.__PROXY__.hasArrowHead(...args);
        };
    
        // function 
        RLeaderData.prototype.canHaveArrowHead = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.canHaveArrowHead");
          return this.__PROXY__.canHaveArrowHead(...args);
        };
    
        // function 
        RLeaderData.prototype.updateArrowHead = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.updateArrowHead");
          return this.__PROXY__.updateArrowHead(...args);
        };
    
        // function 
        RLeaderData.prototype.getEndPoint = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getEndPoint");
          return this.__PROXY__.getEndPoint(...args);
        };
    
        // function 
        RLeaderData.prototype.getStartPoint = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getStartPoint");
          return this.__PROXY__.getStartPoint(...args);
        };
    
        // function 
        RLeaderData.prototype.countVertices = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.countVertices");
          return this.__PROXY__.countVertices(...args);
        };
    
        // function 
        RLeaderData.prototype.countSegments = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.countSegments");
          return this.__PROXY__.countSegments(...args);
        };
    
        // function 
        RLeaderData.prototype.appendVertex = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.appendVertex");
          return this.__PROXY__.appendVertex(...args);
        };
    
        // function 
        RLeaderData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RLeaderData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RLeaderData.prototype.getExploded = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getExploded");
          return this.__PROXY__.getExploded(...args);
        };
    
        // function 
        RLeaderData.prototype.scale = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RLeaderData.prototype.stretch = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RLeaderData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RLeaderData.prototype.getArrowShape = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getArrowShape");
          return this.__PROXY__.getArrowShape(...args);
        };
    
        // function 
        RLeaderData.prototype.getDimLeaderBlockId = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.getDimLeaderBlockId");
          return this.__PROXY__.getDimLeaderBlockId(...args);
        };
    
        // function 
        RLeaderData.prototype.setDimLeaderBlockId = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.setDimLeaderBlockId");
          return this.__PROXY__.setDimLeaderBlockId(...args);
        };
    
        // function 
        RLeaderData.prototype.update = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RLeaderData.prototype.clearStyleOverrides = function(...args) 
          
        {
          //print("JS: RLeaderData.prototype.clearStyleOverrides");
          return this.__PROXY__.clearStyleOverrides(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RLeaderData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RLeaderData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RLeaderData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      