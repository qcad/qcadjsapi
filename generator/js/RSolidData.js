
      // auto generated
      //var self;

      // class constructor:
      function RSolidData() {
        

        // should be RSolidData_BaseJs.call(this, engine):
        //RSolidData.prototype = new RSolidData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSolidData.getIdStatic()))) {

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
            qWarning("RSolidData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new RSolidData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSolidData);
  }

  
  else 
  
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RSolidData_Wrapper(
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

      

        //copyProperties(this, wrapper, RSolidData);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RSolidData_Wrapper(
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

      

        //copyProperties(this, wrapper, RSolidData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RSolidData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSolidData);
  }

  
  else {
    
        print("RSolidData(): wrong number / type of arguments");
      
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

      //RSolidData.prototype = new RSolidData_BaseJs(engine);
      //RSolidData.prototype = new RSolidData_Wrapper(engine);
      RSolidData.prototype = new Object();

      RSolidData.prototype.toString = function() {
          //return "RSolidData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSolidData [JS]";
        };
      RSolidData.getObjectType = function() {
        return RJSType_RSolidData.getIdStatic();
      };

      RSolidData.prototype.getObjectType = function() {
        return RJSType_RSolidData.getIdStatic();
      };

      RSolidData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSolidData.getIdStatic()) {
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
        RSolidData.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RSolidData.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RSolidData.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RSolidData.prototype.isSane = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RSolidData.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RSolidData.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RSolidData.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RSolidData.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RSolidData.prototype.getHull = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RSolidData.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RSolidData.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RSolidData.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RSolidData.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RSolidData.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RSolidData.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RSolidData.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RSolidData.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RSolidData.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RSolidData.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RSolidData.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RSolidData.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RSolidData.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RSolidData.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RSolidData.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RSolidData.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RSolidData.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RSolidData.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RSolidData.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RSolidData.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RSolidData.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RSolidData.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RSolidData.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RSolidData.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RSolidData.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RSolidData.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RSolidData.prototype.setColor = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RSolidData.prototype.getColor = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RSolidData.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RSolidData.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RSolidData.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RSolidData.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RSolidData.prototype.isInside = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RSolidData.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RSolidData.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RSolidData.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RSolidData.prototype.update = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RSolidData.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RSolidData.prototype.getShapeType = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getShapeType");
          return this.__PROXY__.getShapeType(...args);
        };
    
        // function 
        RSolidData.prototype.clone = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RSolidData.prototype.isDirected = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.isDirected");
          return this.__PROXY__.isDirected(...args);
        };
    
        // function 
        RSolidData.prototype.isFlat = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.isFlat");
          return this.__PROXY__.isFlat(...args);
        };
    
        // function 
        RSolidData.prototype.getVectorProperties = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getVectorProperties");
          return this.__PROXY__.getVectorProperties(...args);
        };
    
        // function 
        RSolidData.prototype.getDoubleProperties = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getDoubleProperties");
          return this.__PROXY__.getDoubleProperties(...args);
        };
    
        // function 
        RSolidData.prototype.getBoolProperties = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getBoolProperties");
          return this.__PROXY__.getBoolProperties(...args);
        };
    
        // function 
        RSolidData.prototype.clear = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.clear");
          return this.__PROXY__.clear(...args);
        };
    
        // function 
        RSolidData.prototype.normalize = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.normalize");
          return this.__PROXY__.normalize(...args);
        };
    
        // function 
        RSolidData.prototype.prependShape = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.prependShape");
          return this.__PROXY__.prependShape(...args);
        };
    
        // function 
        RSolidData.prototype.appendShape = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.appendShape");
          return this.__PROXY__.appendShape(...args);
        };
    
        // function 
        RSolidData.prototype.appendShapeAuto = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.appendShapeAuto");
          return this.__PROXY__.appendShapeAuto(...args);
        };
    
        // function 
        RSolidData.prototype.appendShapeTrim = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.appendShapeTrim");
          return this.__PROXY__.appendShapeTrim(...args);
        };
    
        // function 
        RSolidData.prototype.closeTrim = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.closeTrim");
          return this.__PROXY__.closeTrim(...args);
        };
    
        // function 
        RSolidData.prototype.appendVertex = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.appendVertex");
          return this.__PROXY__.appendVertex(...args);
        };
    
        // function 
        RSolidData.prototype.prependVertex = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.prependVertex");
          return this.__PROXY__.prependVertex(...args);
        };
    
        // function 
        RSolidData.prototype.insertVertex = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.insertVertex");
          return this.__PROXY__.insertVertex(...args);
        };
    
        // function 
        RSolidData.prototype.insertVertexAt = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.insertVertexAt");
          return this.__PROXY__.insertVertexAt(...args);
        };
    
        // function 
        RSolidData.prototype.insertVertexAtDistance = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.insertVertexAtDistance");
          return this.__PROXY__.insertVertexAtDistance(...args);
        };
    
        // function 
        RSolidData.prototype.removeFirstVertex = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.removeFirstVertex");
          return this.__PROXY__.removeFirstVertex(...args);
        };
    
        // function 
        RSolidData.prototype.removeLastVertex = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.removeLastVertex");
          return this.__PROXY__.removeLastVertex(...args);
        };
    
        // function 
        RSolidData.prototype.removeVertex = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.removeVertex");
          return this.__PROXY__.removeVertex(...args);
        };
    
        // function 
        RSolidData.prototype.removeVerticesAfter = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.removeVerticesAfter");
          return this.__PROXY__.removeVerticesAfter(...args);
        };
    
        // function 
        RSolidData.prototype.removeVerticesBefore = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.removeVerticesBefore");
          return this.__PROXY__.removeVerticesBefore(...args);
        };
    
        // function 
        RSolidData.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.isEmpty");
          return this.__PROXY__.isEmpty(...args);
        };
    
        // function 
        RSolidData.prototype.setVertices = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.setVertices");
          return this.__PROXY__.setVertices(...args);
        };
    
        // function 
        RSolidData.prototype.getVertices = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getVertices");
          return this.__PROXY__.getVertices(...args);
        };
    
        // function 
        RSolidData.prototype.setVertexAt = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.setVertexAt");
          return this.__PROXY__.setVertexAt(...args);
        };
    
        // function 
        RSolidData.prototype.moveVertexAt = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.moveVertexAt");
          return this.__PROXY__.moveVertexAt(...args);
        };
    
        // function 
        RSolidData.prototype.getVertexIndex = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getVertexIndex");
          return this.__PROXY__.getVertexIndex(...args);
        };
    
        // function 
        RSolidData.prototype.getLastVertex = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getLastVertex");
          return this.__PROXY__.getLastVertex(...args);
        };
    
        // function 
        RSolidData.prototype.setBulges = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.setBulges");
          return this.__PROXY__.setBulges(...args);
        };
    
        // function 
        RSolidData.prototype.getBulges = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getBulges");
          return this.__PROXY__.getBulges(...args);
        };
    
        // function 
        RSolidData.prototype.getBulgeAt = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getBulgeAt");
          return this.__PROXY__.getBulgeAt(...args);
        };
    
        // function 
        RSolidData.prototype.setBulgeAt = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.setBulgeAt");
          return this.__PROXY__.setBulgeAt(...args);
        };
    
        // function 
        RSolidData.prototype.hasArcSegments = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.hasArcSegments");
          return this.__PROXY__.hasArcSegments(...args);
        };
    
        // function 
        RSolidData.prototype.getVertexAngles = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getVertexAngles");
          return this.__PROXY__.getVertexAngles(...args);
        };
    
        // function 
        RSolidData.prototype.getVertexAngle = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getVertexAngle");
          return this.__PROXY__.getVertexAngle(...args);
        };
    
        // function 
        RSolidData.prototype.setGlobalWidth = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.setGlobalWidth");
          return this.__PROXY__.setGlobalWidth(...args);
        };
    
        // function 
        RSolidData.prototype.setStartWidthAt = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.setStartWidthAt");
          return this.__PROXY__.setStartWidthAt(...args);
        };
    
        // function 
        RSolidData.prototype.getStartWidthAt = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getStartWidthAt");
          return this.__PROXY__.getStartWidthAt(...args);
        };
    
        // function 
        RSolidData.prototype.setEndWidthAt = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.setEndWidthAt");
          return this.__PROXY__.setEndWidthAt(...args);
        };
    
        // function 
        RSolidData.prototype.getEndWidthAt = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getEndWidthAt");
          return this.__PROXY__.getEndWidthAt(...args);
        };
    
        // function 
        RSolidData.prototype.hasWidths = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.hasWidths");
          return this.__PROXY__.hasWidths(...args);
        };
    
        // function 
        RSolidData.prototype.setStartWidths = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.setStartWidths");
          return this.__PROXY__.setStartWidths(...args);
        };
    
        // function 
        RSolidData.prototype.getStartWidths = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getStartWidths");
          return this.__PROXY__.getStartWidths(...args);
        };
    
        // function 
        RSolidData.prototype.setEndWidths = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.setEndWidths");
          return this.__PROXY__.setEndWidths(...args);
        };
    
        // function 
        RSolidData.prototype.getEndWidths = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getEndWidths");
          return this.__PROXY__.getEndWidths(...args);
        };
    
        // function 
        RSolidData.prototype.setClosed = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.setClosed");
          return this.__PROXY__.setClosed(...args);
        };
    
        // function 
        RSolidData.prototype.isClosed = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.isClosed");
          return this.__PROXY__.isClosed(...args);
        };
    
        // function 
        RSolidData.prototype.isGeometricallyClosed = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.isGeometricallyClosed");
          return this.__PROXY__.isGeometricallyClosed(...args);
        };
    
        // function 
        RSolidData.prototype.autoClose = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.autoClose");
          return this.__PROXY__.autoClose(...args);
        };
    
        // function 
        RSolidData.prototype.toLogicallyClosed = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.toLogicallyClosed");
          return this.__PROXY__.toLogicallyClosed(...args);
        };
    
        // function 
        RSolidData.prototype.toLogicallyOpen = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.toLogicallyOpen");
          return this.__PROXY__.toLogicallyOpen(...args);
        };
    
        // function 
        RSolidData.prototype.getSelfIntersectionPoints = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getSelfIntersectionPoints");
          return this.__PROXY__.getSelfIntersectionPoints(...args);
        };
    
        // function 
        RSolidData.prototype.getOrientation = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getOrientation");
          return this.__PROXY__.getOrientation(...args);
        };
    
        // function 
        RSolidData.prototype.setOrientation = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.setOrientation");
          return this.__PROXY__.setOrientation(...args);
        };
    
        // function 
        RSolidData.prototype.convertArcToLineSegments = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.convertArcToLineSegments");
          return this.__PROXY__.convertArcToLineSegments(...args);
        };
    
        // function 
        RSolidData.prototype.convertArcToLineSegmentsLength = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.convertArcToLineSegmentsLength");
          return this.__PROXY__.convertArcToLineSegmentsLength(...args);
        };
    
        // function 
        RSolidData.prototype.contains = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.contains");
          return this.__PROXY__.contains(...args);
        };
    
        // function 
        RSolidData.prototype.containsShape = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.containsShape");
          return this.__PROXY__.containsShape(...args);
        };
    
        // function 
        RSolidData.prototype.getPointInside = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getPointInside");
          return this.__PROXY__.getPointInside(...args);
        };
    
        // function 
        RSolidData.prototype.getMiddlePoint = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getMiddlePoint");
          return this.__PROXY__.getMiddlePoint(...args);
        };
    
        // function 
        RSolidData.prototype.moveStartPoint = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.moveStartPoint");
          return this.__PROXY__.moveStartPoint(...args);
        };
    
        // function 
        RSolidData.prototype.moveEndPoint = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.moveEndPoint");
          return this.__PROXY__.moveEndPoint(...args);
        };
    
        // function 
        RSolidData.prototype.moveSegmentAt = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.moveSegmentAt");
          return this.__PROXY__.moveSegmentAt(...args);
        };
    
        // function 
        RSolidData.prototype.getSideOfPoint = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getSideOfPoint");
          return this.__PROXY__.getSideOfPoint(...args);
        };
    
        // function 
        RSolidData.prototype.getArea = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getArea");
          return this.__PROXY__.getArea(...args);
        };
    
        // function 
        RSolidData.prototype.getLength = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getLength");
          return this.__PROXY__.getLength(...args);
        };
    
        // function 
        RSolidData.prototype.getDistanceFromStart = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getDistanceFromStart");
          return this.__PROXY__.getDistanceFromStart(...args);
        };
    
        // function 
        RSolidData.prototype.getDistancesFromStart = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getDistancesFromStart");
          return this.__PROXY__.getDistancesFromStart(...args);
        };
    
        // function 
        RSolidData.prototype.getLengthTo = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getLengthTo");
          return this.__PROXY__.getLengthTo(...args);
        };
    
        // function 
        RSolidData.prototype.getSegmentsLength = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getSegmentsLength");
          return this.__PROXY__.getSegmentsLength(...args);
        };
    
        // function 
        RSolidData.prototype.getPointAtPercent = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getPointAtPercent");
          return this.__PROXY__.getPointAtPercent(...args);
        };
    
        // function 
        RSolidData.prototype.getPointCloud = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getPointCloud");
          return this.__PROXY__.getPointCloud(...args);
        };
    
        // function 
        RSolidData.prototype.getAngleAt = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getAngleAt");
          return this.__PROXY__.getAngleAt(...args);
        };
    
        // function 
        RSolidData.prototype.getClosestSegment = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getClosestSegment");
          return this.__PROXY__.getClosestSegment(...args);
        };
    
        // function 
        RSolidData.prototype.getClosestVertex = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getClosestVertex");
          return this.__PROXY__.getClosestVertex(...args);
        };
    
        // function 
        RSolidData.prototype.getReversed = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getReversed");
          return this.__PROXY__.getReversed(...args);
        };
    
        // function 
        RSolidData.prototype.getTransformed = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getTransformed");
          return this.__PROXY__.getTransformed(...args);
        };
    
        // function 
        RSolidData.prototype.getExploded = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getExploded");
          return this.__PROXY__.getExploded(...args);
        };
    
        // function 
        RSolidData.prototype.getOutline = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getOutline");
          return this.__PROXY__.getOutline(...args);
        };
    
        // function 
        RSolidData.prototype.getLeftOutline = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getLeftOutline");
          return this.__PROXY__.getLeftOutline(...args);
        };
    
        // function 
        RSolidData.prototype.getRightOutline = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getRightOutline");
          return this.__PROXY__.getRightOutline(...args);
        };
    
        // function 
        RSolidData.prototype.isInterpolated = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.isInterpolated");
          return this.__PROXY__.isInterpolated(...args);
        };
    
        // function 
        RSolidData.prototype.countSegments = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.countSegments");
          return this.__PROXY__.countSegments(...args);
        };
    
        // function 
        RSolidData.prototype.getSegmentAt = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getSegmentAt");
          return this.__PROXY__.getSegmentAt(...args);
        };
    
        // function 
        RSolidData.prototype.isArcSegmentAt = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.isArcSegmentAt");
          return this.__PROXY__.isArcSegmentAt(...args);
        };
    
        // function 
        RSolidData.prototype.getLastSegment = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getLastSegment");
          return this.__PROXY__.getLastSegment(...args);
        };
    
        // function 
        RSolidData.prototype.getFirstSegment = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getFirstSegment");
          return this.__PROXY__.getFirstSegment(...args);
        };
    
        // function 
        RSolidData.prototype.toPainterPath = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.toPainterPath");
          return this.__PROXY__.toPainterPath(...args);
        };
    
        // function 
        RSolidData.prototype.simplify = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.simplify");
          return this.__PROXY__.simplify(...args);
        };
    
        // function 
        RSolidData.prototype.verifyTangency = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.verifyTangency");
          return this.__PROXY__.verifyTangency(...args);
        };
    
        // function 
        RSolidData.prototype.stripWidths = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.stripWidths");
          return this.__PROXY__.stripWidths(...args);
        };
    
        // function 
        RSolidData.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.setMinimumWidth");
          return this.__PROXY__.setMinimumWidth(...args);
        };
    
        // function 
        RSolidData.prototype.getSegmentAtDist = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getSegmentAtDist");
          return this.__PROXY__.getSegmentAtDist(...args);
        };
    
        // function 
        RSolidData.prototype.relocateStartPoint = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.relocateStartPoint");
          return this.__PROXY__.relocateStartPoint(...args);
        };
    
        // function 
        RSolidData.prototype.convertToClosed = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.convertToClosed");
          return this.__PROXY__.convertToClosed(...args);
        };
    
        // function 
        RSolidData.prototype.convertToOpen = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.convertToOpen");
          return this.__PROXY__.convertToOpen(...args);
        };
    
        // function 
        RSolidData.prototype.modifyPolylineCorner = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.modifyPolylineCorner");
          return this.__PROXY__.modifyPolylineCorner(...args);
        };
    
        // function 
        RSolidData.prototype.isConcave = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.isConcave");
          return this.__PROXY__.isConcave(...args);
        };
    
        // function 
        RSolidData.prototype.getConvexVertices = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getConvexVertices");
          return this.__PROXY__.getConvexVertices(...args);
        };
    
        // function 
        RSolidData.prototype.getConcaveVertices = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getConcaveVertices");
          return this.__PROXY__.getConcaveVertices(...args);
        };
    
        // function 
        RSolidData.prototype.getCentroid = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getCentroid");
          return this.__PROXY__.getCentroid(...args);
        };
    
        // function 
        RSolidData.prototype.splitAtDiscontinuities = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.splitAtDiscontinuities");
          return this.__PROXY__.splitAtDiscontinuities(...args);
        };
    
        // function 
        RSolidData.prototype.splitAtSegmentTypeChange = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.splitAtSegmentTypeChange");
          return this.__PROXY__.splitAtSegmentTypeChange(...args);
        };
    
        // function 
        RSolidData.prototype.getBaseAngle = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getBaseAngle");
          return this.__PROXY__.getBaseAngle(...args);
        };
    
        // function 
        RSolidData.prototype.getWidth = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getWidth");
          return this.__PROXY__.getWidth(...args);
        };
    
        // function 
        RSolidData.prototype.setWidth = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.setWidth");
          return this.__PROXY__.setWidth(...args);
        };
    
        // function 
        RSolidData.prototype.getHeight = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getHeight");
          return this.__PROXY__.getHeight(...args);
        };
    
        // function 
        RSolidData.prototype.setHeight = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.setHeight");
          return this.__PROXY__.setHeight(...args);
        };
    
        // function 
        RSolidData.prototype.morph = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.morph");
          return this.__PROXY__.morph(...args);
        };
    
        // function 
        RSolidData.prototype.roundAllCorners = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.roundAllCorners");
          return this.__PROXY__.roundAllCorners(...args);
        };
    
        // function 
        RSolidData.prototype.getPolygonHull = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getPolygonHull");
          return this.__PROXY__.getPolygonHull(...args);
        };
    
        // function 
        RSolidData.prototype.isLineSegment = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.isLineSegment");
          return this.__PROXY__.isLineSegment(...args);
        };
    
        // function 
        RSolidData.prototype.print = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.print");
          return this.__PROXY__.print(...args);
        };
    
        // function 
        RSolidData.prototype.copy = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.copy");
          return this.__PROXY__.copy(...args);
        };
    
        // function 
        RSolidData.prototype.getType = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RSolidData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RSolidData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RSolidData.prototype.setZ = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RSolidData.prototype.to2D = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RSolidData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RSolidData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RSolidData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RSolidData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RSolidData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RSolidData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RSolidData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RSolidData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RSolidData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RSolidData.prototype.move = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RSolidData.prototype.rotate = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RSolidData.prototype.scale = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RSolidData.prototype.mirror = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RSolidData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RSolidData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RSolidData.prototype.stretch = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RSolidData.prototype.getStartPoint = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getStartPoint");
          return this.__PROXY__.getStartPoint(...args);
        };
    
        // function 
        RSolidData.prototype.getEndPoint = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getEndPoint");
          return this.__PROXY__.getEndPoint(...args);
        };
    
        // function 
        RSolidData.prototype.getDirection1 = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getDirection1");
          return this.__PROXY__.getDirection1(...args);
        };
    
        // function 
        RSolidData.prototype.getDirection2 = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getDirection2");
          return this.__PROXY__.getDirection2(...args);
        };
    
        // function 
        RSolidData.prototype.reverse = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.reverse");
          return this.__PROXY__.reverse(...args);
        };
    
        // function 
        RSolidData.prototype.getVertexAt = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getVertexAt");
          return this.__PROXY__.getVertexAt(...args);
        };
    
        // function 
        RSolidData.prototype.countVertices = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.countVertices");
          return this.__PROXY__.countVertices(...args);
        };
    
        // function 
        RSolidData.prototype.getTrimEnd = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getTrimEnd");
          return this.__PROXY__.getTrimEnd(...args);
        };
    
        // function 
        RSolidData.prototype.trimStartPoint = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.trimStartPoint");
          return this.__PROXY__.trimStartPoint(...args);
        };
    
        // function 
        RSolidData.prototype.trimEndPoint = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.trimEndPoint");
          return this.__PROXY__.trimEndPoint(...args);
        };
    
        // function 
        RSolidData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RSolidData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RSolidData.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RSolidData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RSolidData.prototype.getGeometry = function(...args) 
          
        {
          //print("JS: RSolidData.prototype.getGeometry");
          return this.__PROXY__.getGeometry(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RSolidData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSolidData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RSolidData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      