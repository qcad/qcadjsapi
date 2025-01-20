
      // auto generated
      //var self;

      // class constructor:
      function RRayEntity() {
        

        // should be RRayEntity_BaseJs.call(this, engine):
        //RRayEntity.prototype = new RRayEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RRayEntity.getIdStatic()))) {

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
            qWarning("RRayEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RRayEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RRayEntity);
  }

  
  else {
    
        print("RRayEntity(): wrong number / type of arguments");
      
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

      //RRayEntity.prototype = new RRayEntity_BaseJs(engine);
      //RRayEntity.prototype = new RRayEntity_Wrapper(engine);
      RRayEntity.prototype = new Object();

      RRayEntity.prototype.toString = function() {
          //return "RRayEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RRayEntity [JS]";
        };
      RRayEntity.getObjectType = function() {
        return RJSType_RRayEntity.getIdStatic();
      };

      RRayEntity.prototype.getObjectType = function() {
        return RJSType_RRayEntity.getIdStatic();
      };

      RRayEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RRayEntity.getIdStatic()) {
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
        RRayEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RRayEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RRayEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RRayEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RRayEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RRayEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RRayEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RRayEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RRayEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RRayEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RRayEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RRayEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RRayEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RRayEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RRayEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RRayEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RRayEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RRayEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RRayEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RRayEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RRayEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RRayEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RRayEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RRayEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RRayEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RRayEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RRayEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RRayEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RRayEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RRayEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RRayEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RRayEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RRayEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RRayEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RRayEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RRayEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RRayEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RRayEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RRayEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RRayEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RRayEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RRayEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RRayEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        RRayEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RRayEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RRayEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RRayEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RRayEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RRayEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RRayEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RRayEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RRayEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RRayEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RRayEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RRayEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RRayEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RRayEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RRayEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RRayEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RRayEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RRayEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RRayEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RRayEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RRayEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RRayEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RRayEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RRayEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RRayEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RRayEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RRayEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RRayEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RRayEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RRayEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RRayEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RRayEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RRayEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RRayEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        RRayEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RRayEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RRayEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RRayEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RRayEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RRayEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RRayEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RRayEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RRayEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RRayEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RRayEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RRayEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RRayEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RRayEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RRayEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        RRayEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RRayEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RRayEntity.prototype.move = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RRayEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RRayEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RRayEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        RRayEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RRayEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        RRayEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RRayEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RRayEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RRayEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RRayEntity.prototype.update = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RRayEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RRayEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RRayEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        RRayEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        RRayEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        RRayEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RRayEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RRayEntity.prototype.init = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RRayEntity.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RRayEntity.prototype.getStaticPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getStaticPropertyTypeIds");
          return this.__PROXY__.getStaticPropertyTypeIds(...args);
        };
    
        // function 
        RRayEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RRayEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RRayEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RRayEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        RRayEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        RRayEntity.prototype.setShape = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.setShape");
          return this.__PROXY__.setShape(...args);
        };
    
        // function 
        RRayEntity.prototype.setBasePoint = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.setBasePoint");
          return this.__PROXY__.setBasePoint(...args);
        };
    
        // function 
        RRayEntity.prototype.getBasePoint = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getBasePoint");
          return this.__PROXY__.getBasePoint(...args);
        };
    
        // function 
        RRayEntity.prototype.setSecondPoint = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.setSecondPoint");
          return this.__PROXY__.setSecondPoint(...args);
        };
    
        // function 
        RRayEntity.prototype.getSecondPoint = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getSecondPoint");
          return this.__PROXY__.getSecondPoint(...args);
        };
    
        // function 
        RRayEntity.prototype.setDirectionVectorPoint = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.setDirectionVectorPoint");
          return this.__PROXY__.setDirectionVectorPoint(...args);
        };
    
        // function 
        RRayEntity.prototype.getDirectionVector = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getDirectionVector");
          return this.__PROXY__.getDirectionVector(...args);
        };
    
        // function 
        RRayEntity.prototype.getAngle = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getAngle");
          return this.__PROXY__.getAngle(...args);
        };
    
        // function 
        RRayEntity.prototype.hasFixedAngle = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.hasFixedAngle");
          return this.__PROXY__.hasFixedAngle(...args);
        };
    
        // function 
        RRayEntity.prototype.setFixedAngle = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.setFixedAngle");
          return this.__PROXY__.setFixedAngle(...args);
        };
    
        // function 
        RRayEntity.prototype.getDirection1 = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getDirection1");
          return this.__PROXY__.getDirection1(...args);
        };
    
        // function 
        RRayEntity.prototype.getDirection2 = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getDirection2");
          return this.__PROXY__.getDirection2(...args);
        };
    
        // function 
        RRayEntity.prototype.reverse = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.reverse");
          return this.__PROXY__.reverse(...args);
        };
    
        // function 
        RRayEntity.prototype.getSideOfPoint = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getSideOfPoint");
          return this.__PROXY__.getSideOfPoint(...args);
        };
    
        // function 
        RRayEntity.prototype.getTrimEnd = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getTrimEnd");
          return this.__PROXY__.getTrimEnd(...args);
        };
    
        // function 
        RRayEntity.prototype.trimStartPoint = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.trimStartPoint");
          return this.__PROXY__.trimStartPoint(...args);
        };
    
        // function 
        RRayEntity.prototype.trimEndPoint = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.trimEndPoint");
          return this.__PROXY__.trimEndPoint(...args);
        };
    
        // function 
        RRayEntity.prototype.getLength = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.getLength");
          return this.__PROXY__.getLength(...args);
        };
    
        // function 
        RRayEntity.prototype.print = function(...args) 
          
        {
          //print("JS: RRayEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

        // static function 
        RRayEntity.init = function() 
          
        {
          //print("JS: RRayEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RRayEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RRayEntity);
  }

  
  else {
    
        print("RRayEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRayEntity.getRtti = function() 
          
        {
          //print("JS: RRayEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RRayEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RRayEntity);
  }

  
  else {
    
        print("RRayEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRayEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RRayEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RRayEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RRayEntity);
  }

  
  else {
    
        print("RRayEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RRayEntity.INVALID_ID = 
  RRayEntity_WrapperSingletonInstance.INVALID_ID;
RRayEntity.INVALID_HANDLE = 
  RRayEntity_WrapperSingletonInstance.INVALID_HANDLE;
RRayEntity.PropertySelected = 
  RRayEntity_WrapperSingletonInstance.PropertySelected;
RRayEntity.PropertyInvisible = 
  RRayEntity_WrapperSingletonInstance.PropertyInvisible;
RRayEntity.PropertyParentId = 
  RRayEntity_WrapperSingletonInstance.PropertyParentId;
RRayEntity.PropertyMinX = 
  RRayEntity_WrapperSingletonInstance.PropertyMinX;
RRayEntity.PropertyMinY = 
  RRayEntity_WrapperSingletonInstance.PropertyMinY;
RRayEntity.PropertyMaxX = 
  RRayEntity_WrapperSingletonInstance.PropertyMaxX;
RRayEntity.PropertyMaxY = 
  RRayEntity_WrapperSingletonInstance.PropertyMaxY;
RRayEntity.PropertySizeX = 
  RRayEntity_WrapperSingletonInstance.PropertySizeX;
RRayEntity.PropertySizeY = 
  RRayEntity_WrapperSingletonInstance.PropertySizeY;
RRayEntity.PropertyCustom = 
  RRayEntity_WrapperSingletonInstance.PropertyCustom;
RRayEntity.PropertyHandle = 
  RRayEntity_WrapperSingletonInstance.PropertyHandle;
RRayEntity.PropertyProtected = 
  RRayEntity_WrapperSingletonInstance.PropertyProtected;
RRayEntity.PropertyWorkingSet = 
  RRayEntity_WrapperSingletonInstance.PropertyWorkingSet;
RRayEntity.PropertyType = 
  RRayEntity_WrapperSingletonInstance.PropertyType;
RRayEntity.PropertyBlock = 
  RRayEntity_WrapperSingletonInstance.PropertyBlock;
RRayEntity.PropertyLayer = 
  RRayEntity_WrapperSingletonInstance.PropertyLayer;
RRayEntity.PropertyLinetype = 
  RRayEntity_WrapperSingletonInstance.PropertyLinetype;
RRayEntity.PropertyLinetypeScale = 
  RRayEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RRayEntity.PropertyLineweight = 
  RRayEntity_WrapperSingletonInstance.PropertyLineweight;
RRayEntity.PropertyColor = 
  RRayEntity_WrapperSingletonInstance.PropertyColor;
RRayEntity.PropertyDisplayedColor = 
  RRayEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RRayEntity.PropertyDrawOrder = 
  RRayEntity_WrapperSingletonInstance.PropertyDrawOrder;
RRayEntity.PropertyBasePointX = 
  RRayEntity_WrapperSingletonInstance.PropertyBasePointX;
RRayEntity.PropertyBasePointY = 
  RRayEntity_WrapperSingletonInstance.PropertyBasePointY;
RRayEntity.PropertyBasePointZ = 
  RRayEntity_WrapperSingletonInstance.PropertyBasePointZ;
RRayEntity.PropertySecondPointX = 
  RRayEntity_WrapperSingletonInstance.PropertySecondPointX;
RRayEntity.PropertySecondPointY = 
  RRayEntity_WrapperSingletonInstance.PropertySecondPointY;
RRayEntity.PropertySecondPointZ = 
  RRayEntity_WrapperSingletonInstance.PropertySecondPointZ;
RRayEntity.PropertyDirectionX = 
  RRayEntity_WrapperSingletonInstance.PropertyDirectionX;
RRayEntity.PropertyDirectionY = 
  RRayEntity_WrapperSingletonInstance.PropertyDirectionY;
RRayEntity.PropertyDirectionZ = 
  RRayEntity_WrapperSingletonInstance.PropertyDirectionZ;
RRayEntity.PropertyAngle = 
  RRayEntity_WrapperSingletonInstance.PropertyAngle;
RRayEntity.PropertyFixedAngle = 
  RRayEntity_WrapperSingletonInstance.PropertyFixedAngle;


      // copy function:
      //RRayEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RRayEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RRayEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      