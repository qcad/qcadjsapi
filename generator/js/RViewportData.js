
      // auto generated
      //var self;

      // class constructor:
      function RViewportData() {
        

        // should be RViewportData_BaseJs.call(this, engine):
        //RViewportData.prototype = new RViewportData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RViewportData.getIdStatic()))) {

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
            qWarning("RViewportData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RViewportData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RViewportData);
  }

  
  else {
    
        print("RViewportData(): wrong number / type of arguments");
      
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
              Object.defineProperty(this, 'position', {
                  get() {
                      return this.__PROXY__.getPosition();
                  },
                  
                    set(value) {
                        this.__PROXY__.setPosition(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            

      }

      //RViewportData.prototype = new RViewportData_BaseJs(engine);
      //RViewportData.prototype = new RViewportData_Wrapper(engine);
      RViewportData.prototype = new Object();

      RViewportData.prototype.toString = function() {
          //return "RViewportData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RViewportData [JS]";
        };
      RViewportData.getObjectType = function() {
        return RJSType_RViewportData.getIdStatic();
      };

      RViewportData.prototype.getObjectType = function() {
        return RJSType_RViewportData.getIdStatic();
      };

      RViewportData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RViewportData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RPoint.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RViewportData.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RViewportData.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RViewportData.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RViewportData.prototype.isSane = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RViewportData.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RViewportData.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RViewportData.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RViewportData.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RViewportData.prototype.getHull = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RViewportData.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RViewportData.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RViewportData.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RViewportData.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RViewportData.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RViewportData.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RViewportData.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RViewportData.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RViewportData.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RViewportData.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RViewportData.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RViewportData.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RViewportData.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RViewportData.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RViewportData.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RViewportData.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RViewportData.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RViewportData.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RViewportData.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RViewportData.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RViewportData.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RViewportData.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RViewportData.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RViewportData.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RViewportData.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RViewportData.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RViewportData.prototype.setColor = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RViewportData.prototype.getColor = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RViewportData.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RViewportData.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RViewportData.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RViewportData.prototype.isInside = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RViewportData.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RViewportData.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RViewportData.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RViewportData.prototype.update = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RViewportData.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RViewportData.prototype.getShapeType = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getShapeType");
          return this.__PROXY__.getShapeType(...args);
        };
    
        // function 
        RViewportData.prototype.clone = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RViewportData.prototype.getVectorProperties = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getVectorProperties");
          return this.__PROXY__.getVectorProperties(...args);
        };
    
        // function 
        RViewportData.prototype.getPosition = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getPosition");
          return this.__PROXY__.getPosition(...args);
        };
    
        // function 
        RViewportData.prototype.setPosition = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.setPosition");
          return this.__PROXY__.setPosition(...args);
        };
    
        // function 
        RViewportData.prototype.getLength = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getLength");
          return this.__PROXY__.getLength(...args);
        };
    
        // function 
        RViewportData.prototype.getPointCloud = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getPointCloud");
          return this.__PROXY__.getPointCloud(...args);
        };
    
        // function 
        RViewportData.prototype.getAngleAt = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getAngleAt");
          return this.__PROXY__.getAngleAt(...args);
        };
    
        // function 
        RViewportData.prototype.getTransformed = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getTransformed");
          return this.__PROXY__.getTransformed(...args);
        };
    
        // function 
        RViewportData.prototype.print = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.print");
          return this.__PROXY__.print(...args);
        };
    
        // function 
        RViewportData.prototype.copy = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.copy");
          return this.__PROXY__.copy(...args);
        };
    
        // function 
        RViewportData.prototype.getType = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RViewportData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RViewportData.prototype.to2D = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RViewportData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RViewportData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RViewportData.prototype.setZ = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RViewportData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RViewportData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RViewportData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RViewportData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RViewportData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RViewportData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RViewportData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RViewportData.prototype.move = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RViewportData.prototype.rotate = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RViewportData.prototype.mirror = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RViewportData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RViewportData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RViewportData.prototype.stretch = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RViewportData.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RViewportData.prototype.getViewportId = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getViewportId");
          return this.__PROXY__.getViewportId(...args);
        };
    
        // function 
        RViewportData.prototype.setViewportId = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.setViewportId");
          return this.__PROXY__.setViewportId(...args);
        };
    
        // function 
        RViewportData.prototype.getStatus = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getStatus");
          return this.__PROXY__.getStatus(...args);
        };
    
        // function 
        RViewportData.prototype.setStatus = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.setStatus");
          return this.__PROXY__.setStatus(...args);
        };
    
        // function 
        RViewportData.prototype.getCenter = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getCenter");
          return this.__PROXY__.getCenter(...args);
        };
    
        // function 
        RViewportData.prototype.setCenter = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.setCenter");
          return this.__PROXY__.setCenter(...args);
        };
    
        // function 
        RViewportData.prototype.getViewCenter = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getViewCenter");
          return this.__PROXY__.getViewCenter(...args);
        };
    
        // function 
        RViewportData.prototype.setViewCenter = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.setViewCenter");
          return this.__PROXY__.setViewCenter(...args);
        };
    
        // function 
        RViewportData.prototype.getViewTarget = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getViewTarget");
          return this.__PROXY__.getViewTarget(...args);
        };
    
        // function 
        RViewportData.prototype.setViewTarget = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.setViewTarget");
          return this.__PROXY__.setViewTarget(...args);
        };
    
        // function 
        RViewportData.prototype.getWidth = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getWidth");
          return this.__PROXY__.getWidth(...args);
        };
    
        // function 
        RViewportData.prototype.setWidth = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.setWidth");
          return this.__PROXY__.setWidth(...args);
        };
    
        // function 
        RViewportData.prototype.getHeight = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getHeight");
          return this.__PROXY__.getHeight(...args);
        };
    
        // function 
        RViewportData.prototype.setHeight = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.setHeight");
          return this.__PROXY__.setHeight(...args);
        };
    
        // function 
        RViewportData.prototype.getScale = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getScale");
          return this.__PROXY__.getScale(...args);
        };
    
        // function 
        RViewportData.prototype.setScale = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.setScale");
          return this.__PROXY__.setScale(...args);
        };
    
        // function 
        RViewportData.prototype.getRotation = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getRotation");
          return this.__PROXY__.getRotation(...args);
        };
    
        // function 
        RViewportData.prototype.setRotation = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.setRotation");
          return this.__PROXY__.setRotation(...args);
        };
    
        // function 
        RViewportData.prototype.isOverall = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.isOverall");
          return this.__PROXY__.isOverall(...args);
        };
    
        // function 
        RViewportData.prototype.setOverall = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.setOverall");
          return this.__PROXY__.setOverall(...args);
        };
    
        // function 
        RViewportData.prototype.isOff = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.isOff");
          return this.__PROXY__.isOff(...args);
        };
    
        // function 
        RViewportData.prototype.setOff = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.setOff");
          return this.__PROXY__.setOff(...args);
        };
    
        // function 
        RViewportData.prototype.getViewOffset = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getViewOffset");
          return this.__PROXY__.getViewOffset(...args);
        };
    
        // function 
        RViewportData.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RViewportData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RViewportData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RViewportData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RViewportData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RViewportData.prototype.getEdges = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getEdges");
          return this.__PROXY__.getEdges(...args);
        };
    
        // function 
        RViewportData.prototype.scale = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RViewportData.prototype.getFrozenLayerIds = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.getFrozenLayerIds");
          return this.__PROXY__.getFrozenLayerIds(...args);
        };
    
        // function 
        RViewportData.prototype.setFrozenLayerIds = function(...args) 
          
        {
          //print("JS: RViewportData.prototype.setFrozenLayerIds");
          return this.__PROXY__.setFrozenLayerIds(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RViewportData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RViewportData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RViewportData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      