
      // auto generated
      //var self;

      // class constructor:
      function RToleranceEntity() {
        

        // should be RToleranceEntity_BaseJs.call(this, engine):
        //RToleranceEntity.prototype = new RToleranceEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RToleranceEntity.getIdStatic()))) {

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
            qWarning("RToleranceEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RToleranceEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RToleranceEntity);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RToleranceEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RToleranceEntity);
  }

  
  else {
    
        print("RToleranceEntity(): wrong number / type of arguments");
      
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

      //RToleranceEntity.prototype = new RToleranceEntity_BaseJs(engine);
      //RToleranceEntity.prototype = new RToleranceEntity_Wrapper(engine);
      RToleranceEntity.prototype = new Object();

      RToleranceEntity.prototype.toString = function() {
          //return "RToleranceEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RToleranceEntity [JS]";
        };
      RToleranceEntity.getObjectType = function() {
        return RJSType_RToleranceEntity.getIdStatic();
      };

      RToleranceEntity.prototype.getObjectType = function() {
        return RJSType_RToleranceEntity.getIdStatic();
      };

      RToleranceEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RToleranceEntity.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_REntity.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RToleranceEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RToleranceEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RToleranceEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RToleranceEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RToleranceEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RToleranceEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RToleranceEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RToleranceEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RToleranceEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RToleranceEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RToleranceEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RToleranceEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RToleranceEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RToleranceEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RToleranceEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RToleranceEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RToleranceEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RToleranceEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RToleranceEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RToleranceEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RToleranceEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RToleranceEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RToleranceEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RToleranceEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RToleranceEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RToleranceEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RToleranceEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RToleranceEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RToleranceEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RToleranceEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        RToleranceEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RToleranceEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RToleranceEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RToleranceEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RToleranceEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RToleranceEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RToleranceEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RToleranceEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RToleranceEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RToleranceEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RToleranceEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RToleranceEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RToleranceEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RToleranceEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RToleranceEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        RToleranceEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RToleranceEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RToleranceEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        RToleranceEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RToleranceEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RToleranceEntity.prototype.move = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RToleranceEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RToleranceEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RToleranceEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        RToleranceEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RToleranceEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        RToleranceEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RToleranceEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RToleranceEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RToleranceEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RToleranceEntity.prototype.update = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RToleranceEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RToleranceEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RToleranceEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        RToleranceEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        RToleranceEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RToleranceEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RToleranceEntity.prototype.print = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    
        // function 
        RToleranceEntity.prototype.init = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getStaticPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getStaticPropertyTypeIds");
          return this.__PROXY__.getStaticPropertyTypeIds(...args);
        };
    
        // function 
        RToleranceEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RToleranceEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        RToleranceEntity.prototype.setData = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.setData");
          return this.__PROXY__.setData(...args);
        };
    
        // function 
        RToleranceEntity.prototype.setLocation = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.setLocation");
          return this.__PROXY__.setLocation(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getLocation = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getLocation");
          return this.__PROXY__.getLocation(...args);
        };
    
        // function 
        RToleranceEntity.prototype.setDirection = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.setDirection");
          return this.__PROXY__.setDirection(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getDirection = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getDirection");
          return this.__PROXY__.getDirection(...args);
        };
    
        // function 
        RToleranceEntity.prototype.setText = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.setText");
          return this.__PROXY__.setText(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getText = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getText");
          return this.__PROXY__.getText(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getDimtxt = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getDimtxt");
          return this.__PROXY__.getDimtxt(...args);
        };
    
        // function 
        RToleranceEntity.prototype.setDimtxt = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.setDimtxt");
          return this.__PROXY__.setDimtxt(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getDimscale = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getDimscale");
          return this.__PROXY__.getDimscale(...args);
        };
    
        // function 
        RToleranceEntity.prototype.setDimscale = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.setDimscale");
          return this.__PROXY__.setDimscale(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getExploded = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getExploded");
          return this.__PROXY__.getExploded(...args);
        };
    
        // function 
        RToleranceEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getTextLabels = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getTextLabels");
          return this.__PROXY__.getTextLabels(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getFrame = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getFrame");
          return this.__PROXY__.getFrame(...args);
        };
    
        // function 
        RToleranceEntity.prototype.getRows = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.getRows");
          return this.__PROXY__.getRows(...args);
        };
    
        // function 
        RToleranceEntity.prototype.clearStyleOverrides = function(...args) 
          
        {
          //print("JS: RToleranceEntity.prototype.clearStyleOverrides");
          return this.__PROXY__.clearStyleOverrides(...args);
        };
    

      // static functions:
      

        // static function 
        RToleranceEntity.init = function() 
          
        {
          //print("JS: RToleranceEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RToleranceEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RToleranceEntity);
  }

  
  else {
    
        print("RToleranceEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RToleranceEntity.getRtti = function() 
          
        {
          //print("JS: RToleranceEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RToleranceEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RToleranceEntity);
  }

  
  else {
    
        print("RToleranceEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RToleranceEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RToleranceEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RToleranceEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RToleranceEntity);
  }

  
  else {
    
        print("RToleranceEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RToleranceEntity.INVALID_ID = 
  RToleranceEntity_WrapperSingletonInstance.INVALID_ID;
RToleranceEntity.INVALID_HANDLE = 
  RToleranceEntity_WrapperSingletonInstance.INVALID_HANDLE;
RToleranceEntity.PropertySelected = 
  RToleranceEntity_WrapperSingletonInstance.PropertySelected;
RToleranceEntity.PropertyInvisible = 
  RToleranceEntity_WrapperSingletonInstance.PropertyInvisible;
RToleranceEntity.PropertyParentId = 
  RToleranceEntity_WrapperSingletonInstance.PropertyParentId;
RToleranceEntity.PropertyMinX = 
  RToleranceEntity_WrapperSingletonInstance.PropertyMinX;
RToleranceEntity.PropertyMinY = 
  RToleranceEntity_WrapperSingletonInstance.PropertyMinY;
RToleranceEntity.PropertyMaxX = 
  RToleranceEntity_WrapperSingletonInstance.PropertyMaxX;
RToleranceEntity.PropertyMaxY = 
  RToleranceEntity_WrapperSingletonInstance.PropertyMaxY;
RToleranceEntity.PropertySizeX = 
  RToleranceEntity_WrapperSingletonInstance.PropertySizeX;
RToleranceEntity.PropertySizeY = 
  RToleranceEntity_WrapperSingletonInstance.PropertySizeY;
RToleranceEntity.PropertyCustom = 
  RToleranceEntity_WrapperSingletonInstance.PropertyCustom;
RToleranceEntity.PropertyHandle = 
  RToleranceEntity_WrapperSingletonInstance.PropertyHandle;
RToleranceEntity.PropertyProtected = 
  RToleranceEntity_WrapperSingletonInstance.PropertyProtected;
RToleranceEntity.PropertyWorkingSet = 
  RToleranceEntity_WrapperSingletonInstance.PropertyWorkingSet;
RToleranceEntity.PropertyType = 
  RToleranceEntity_WrapperSingletonInstance.PropertyType;
RToleranceEntity.PropertyBlock = 
  RToleranceEntity_WrapperSingletonInstance.PropertyBlock;
RToleranceEntity.PropertyLayer = 
  RToleranceEntity_WrapperSingletonInstance.PropertyLayer;
RToleranceEntity.PropertyLinetype = 
  RToleranceEntity_WrapperSingletonInstance.PropertyLinetype;
RToleranceEntity.PropertyLinetypeScale = 
  RToleranceEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RToleranceEntity.PropertyLineweight = 
  RToleranceEntity_WrapperSingletonInstance.PropertyLineweight;
RToleranceEntity.PropertyColor = 
  RToleranceEntity_WrapperSingletonInstance.PropertyColor;
RToleranceEntity.PropertyDisplayedColor = 
  RToleranceEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RToleranceEntity.PropertyDrawOrder = 
  RToleranceEntity_WrapperSingletonInstance.PropertyDrawOrder;
RToleranceEntity.PropertyLocationX = 
  RToleranceEntity_WrapperSingletonInstance.PropertyLocationX;
RToleranceEntity.PropertyLocationY = 
  RToleranceEntity_WrapperSingletonInstance.PropertyLocationY;
RToleranceEntity.PropertyLocationZ = 
  RToleranceEntity_WrapperSingletonInstance.PropertyLocationZ;
RToleranceEntity.PropertyDirectionX = 
  RToleranceEntity_WrapperSingletonInstance.PropertyDirectionX;
RToleranceEntity.PropertyDirectionY = 
  RToleranceEntity_WrapperSingletonInstance.PropertyDirectionY;
RToleranceEntity.PropertyDirectionZ = 
  RToleranceEntity_WrapperSingletonInstance.PropertyDirectionZ;
RToleranceEntity.PropertyText = 
  RToleranceEntity_WrapperSingletonInstance.PropertyText;
RToleranceEntity.PropertyDimscale = 
  RToleranceEntity_WrapperSingletonInstance.PropertyDimscale;
RToleranceEntity.PropertyDimtxt = 
  RToleranceEntity_WrapperSingletonInstance.PropertyDimtxt;


      // copy function:
      //RToleranceEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RToleranceEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RToleranceEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      