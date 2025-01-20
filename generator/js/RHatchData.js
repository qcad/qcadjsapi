
      // auto generated
      //var self;

      // class constructor:
      function RHatchData() {
        

        // should be RHatchData_BaseJs.call(this, engine):
        //RHatchData.prototype = new RHatchData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RHatchData.getIdStatic()))) {

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
            qWarning("RHatchData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new RHatchData_Wrapper(
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

      

        //copyProperties(this, wrapper, RHatchData);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RHatchData_Wrapper(
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

      

        //copyProperties(this, wrapper, RHatchData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RHatchData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RHatchData);
  }

  
  else {
    
        print("RHatchData(): wrong number / type of arguments");
      
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

      //RHatchData.prototype = new RHatchData_BaseJs(engine);
      //RHatchData.prototype = new RHatchData_Wrapper(engine);
      RHatchData.prototype = new Object();

      RHatchData.prototype.toString = function() {
          //return "RHatchData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RHatchData [JS]";
        };
      RHatchData.getObjectType = function() {
        return RJSType_RHatchData.getIdStatic();
      };

      RHatchData.prototype.getObjectType = function() {
        return RJSType_RHatchData.getIdStatic();
      };

      RHatchData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RHatchData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RHatchData.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RHatchData.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RHatchData.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RHatchData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RHatchData.prototype.isSane = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RHatchData.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RHatchData.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RHatchData.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RHatchData.prototype.to2D = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RHatchData.prototype.setZ = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RHatchData.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RHatchData.prototype.getHull = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RHatchData.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RHatchData.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RHatchData.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RHatchData.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RHatchData.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RHatchData.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RHatchData.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RHatchData.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RHatchData.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RHatchData.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RHatchData.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RHatchData.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RHatchData.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RHatchData.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RHatchData.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RHatchData.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RHatchData.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RHatchData.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RHatchData.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RHatchData.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RHatchData.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RHatchData.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RHatchData.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RHatchData.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RHatchData.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RHatchData.prototype.setColor = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RHatchData.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RHatchData.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RHatchData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RHatchData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RHatchData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RHatchData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RHatchData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RHatchData.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RHatchData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RHatchData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RHatchData.prototype.isInside = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RHatchData.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RHatchData.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RHatchData.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RHatchData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RHatchData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RHatchData.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RHatchData.prototype.getType = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RHatchData.prototype.clearBoundary = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.clearBoundary");
          return this.__PROXY__.clearBoundary(...args);
        };
    
        // function 
        RHatchData.prototype.hasCustomPattern = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.hasCustomPattern");
          return this.__PROXY__.hasCustomPattern(...args);
        };
    
        // function 
        RHatchData.prototype.getCustomPattern = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getCustomPattern");
          return this.__PROXY__.getCustomPattern(...args);
        };
    
        // function 
        RHatchData.prototype.setCustomPattern = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.setCustomPattern");
          return this.__PROXY__.setCustomPattern(...args);
        };
    
        // function 
        RHatchData.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RHatchData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RHatchData.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RHatchData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RHatchData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RHatchData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RHatchData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RHatchData.prototype.move = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RHatchData.prototype.rotate = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RHatchData.prototype.scale = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RHatchData.prototype.mirror = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RHatchData.prototype.stretch = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RHatchData.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RHatchData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RHatchData.prototype.getExploded = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getExploded");
          return this.__PROXY__.getExploded(...args);
        };
    
        // function 
        RHatchData.prototype.isSolid = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.isSolid");
          return this.__PROXY__.isSolid(...args);
        };
    
        // function 
        RHatchData.prototype.setSolid = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.setSolid");
          return this.__PROXY__.setSolid(...args);
        };
    
        // function 
        RHatchData.prototype.isWinding = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.isWinding");
          return this.__PROXY__.isWinding(...args);
        };
    
        // function 
        RHatchData.prototype.setWinding = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.setWinding");
          return this.__PROXY__.setWinding(...args);
        };
    
        // function 
        RHatchData.prototype.getScale = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getScale");
          return this.__PROXY__.getScale(...args);
        };
    
        // function 
        RHatchData.prototype.setScale = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.setScale");
          return this.__PROXY__.setScale(...args);
        };
    
        // function 
        RHatchData.prototype.getAngle = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getAngle");
          return this.__PROXY__.getAngle(...args);
        };
    
        // function 
        RHatchData.prototype.setAngle = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.setAngle");
          return this.__PROXY__.setAngle(...args);
        };
    
        // function 
        RHatchData.prototype.getOriginPoint = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getOriginPoint");
          return this.__PROXY__.getOriginPoint(...args);
        };
    
        // function 
        RHatchData.prototype.setOriginPoint = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.setOriginPoint");
          return this.__PROXY__.setOriginPoint(...args);
        };
    
        // function 
        RHatchData.prototype.getPatternName = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getPatternName");
          return this.__PROXY__.getPatternName(...args);
        };
    
        // function 
        RHatchData.prototype.setPatternName = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.setPatternName");
          return this.__PROXY__.setPatternName(...args);
        };
    
        // function 
        RHatchData.prototype.getTransparency = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getTransparency");
          return this.__PROXY__.getTransparency(...args);
        };
    
        // function 
        RHatchData.prototype.setTransparency = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.setTransparency");
          return this.__PROXY__.setTransparency(...args);
        };
    
        // function 
        RHatchData.prototype.clearCustomPattern = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.clearCustomPattern");
          return this.__PROXY__.clearCustomPattern(...args);
        };
    
        // function 
        RHatchData.prototype.newLoop = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.newLoop");
          return this.__PROXY__.newLoop(...args);
        };
    
        // function 
        RHatchData.prototype.cancelLoop = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.cancelLoop");
          return this.__PROXY__.cancelLoop(...args);
        };
    
        // function 
        RHatchData.prototype.addBoundary = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.addBoundary");
          return this.__PROXY__.addBoundary(...args);
        };
    
        // function 
        RHatchData.prototype.addBoundaryShape = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.addBoundaryShape");
          return this.__PROXY__.addBoundaryShape(...args);
        };
    
        // function 
        RHatchData.prototype.getBoundaryPath = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getBoundaryPath");
          return this.__PROXY__.getBoundaryPath(...args);
        };
    
        // function 
        RHatchData.prototype.getPainterPaths = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getPainterPaths");
          return this.__PROXY__.getPainterPaths(...args);
        };
    
        // function 
        RHatchData.prototype.update = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RHatchData.prototype.order = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.order");
          return this.__PROXY__.order(...args);
        };
    
        // function 
        RHatchData.prototype.getLoopCount = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getLoopCount");
          return this.__PROXY__.getLoopCount(...args);
        };
    
        // function 
        RHatchData.prototype.getLoopBoundary = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getLoopBoundary");
          return this.__PROXY__.getLoopBoundary(...args);
        };
    
        // function 
        RHatchData.prototype.getBoundaryAsPolylines = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getBoundaryAsPolylines");
          return this.__PROXY__.getBoundaryAsPolylines(...args);
        };
    
        // function 
        RHatchData.prototype.autoCloseLoops = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.autoCloseLoops");
          return this.__PROXY__.autoCloseLoops(...args);
        };
    
        // function 
        RHatchData.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RHatchData.prototype.setPattern = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.setPattern");
          return this.__PROXY__.setPattern(...args);
        };
    
        // function 
        RHatchData.prototype.getColor = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RHatchData.prototype.hasProxy = function(...args) 
          
        {
          //print("JS: RHatchData.prototype.hasProxy");
          return this.__PROXY__.hasProxy(...args);
        };
    

      // static functions:
      

        // static function 
        RHatchData.hasProxy = function() 
          
        {
          //print("JS: RHatchData.hasProxy");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RHatchData_WrapperSingletonInstance.hasProxy(
                  
                );
              

        //copyProperties(this, wrapper, RHatchData);
  }

  
  else {
    
        print("RHatchData.hasProxy(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RHatchData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RHatchData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RHatchData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      