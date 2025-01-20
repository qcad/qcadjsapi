
      // auto generated
      //var self;

      // class constructor:
      function RDimensionEntity() {
        

        // should be RDimensionEntity_BaseJs.call(this, engine):
        //RDimensionEntity.prototype = new RDimensionEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimensionEntity.getIdStatic()))) {

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
            qWarning("RDimensionEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RDimensionEntity.js: No constructor found for class RDimensionEntity");
            
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

      //RDimensionEntity.prototype = new RDimensionEntity_BaseJs(engine);
      //RDimensionEntity.prototype = new RDimensionEntity_Wrapper(engine);
      RDimensionEntity.prototype = new Object();

      RDimensionEntity.prototype.toString = function() {
          //return "RDimensionEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimensionEntity [JS]";
        };
      RDimensionEntity.getObjectType = function() {
        return RJSType_RDimensionEntity.getIdStatic();
      };

      RDimensionEntity.prototype.getObjectType = function() {
        return RJSType_RDimensionEntity.getIdStatic();
      };

      RDimensionEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimensionEntity.getIdStatic()) {
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
        RDimensionEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RDimensionEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RDimensionEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RDimensionEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RDimensionEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RDimensionEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RDimensionEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RDimensionEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RDimensionEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RDimensionEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RDimensionEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RDimensionEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RDimensionEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RDimensionEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RDimensionEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RDimensionEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RDimensionEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RDimensionEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RDimensionEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        RDimensionEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RDimensionEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RDimensionEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RDimensionEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        RDimensionEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RDimensionEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RDimensionEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        RDimensionEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RDimensionEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RDimensionEntity.prototype.move = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RDimensionEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RDimensionEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RDimensionEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        RDimensionEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        RDimensionEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RDimensionEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RDimensionEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RDimensionEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RDimensionEntity.prototype.update = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RDimensionEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RDimensionEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        RDimensionEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        RDimensionEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RDimensionEntity.prototype.init = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getStaticPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getStaticPropertyTypeIds");
          return this.__PROXY__.getStaticPropertyTypeIds(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RDimensionEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        RDimensionEntity.prototype.renderDimensionText = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.renderDimensionText");
          return this.__PROXY__.renderDimensionText(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        RDimensionEntity.prototype.clearStyleOverrides = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.clearStyleOverrides");
          return this.__PROXY__.clearStyleOverrides(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setDefinitionPoint");
          return this.__PROXY__.setDefinitionPoint(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getDefinitionPoint");
          return this.__PROXY__.getDefinitionPoint(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setText = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setText");
          return this.__PROXY__.setText(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getText = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getText");
          return this.__PROXY__.getText(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getMeasurement = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getMeasurement");
          return this.__PROXY__.getMeasurement(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getTextData = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getTextData");
          return this.__PROXY__.getTextData(...args);
        };
    
        // function 
        RDimensionEntity.prototype.updateBoundingBox = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.updateBoundingBox");
          return this.__PROXY__.updateBoundingBox(...args);
        };
    
        // function 
        RDimensionEntity.prototype.updateTextPositionCenter = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.updateTextPositionCenter");
          return this.__PROXY__.updateTextPositionCenter(...args);
        };
    
        // function 
        RDimensionEntity.prototype.updateTextData = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.updateTextData");
          return this.__PROXY__.updateTextData(...args);
        };
    
        // function 
        RDimensionEntity.prototype.updateShapes = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.updateShapes");
          return this.__PROXY__.updateShapes(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setTextPosition = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setTextPosition");
          return this.__PROXY__.setTextPosition(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getTextPosition = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getTextPosition");
          return this.__PROXY__.getTextPosition(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setFontName = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setFontName");
          return this.__PROXY__.setFontName(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getFontName = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getFontName");
          return this.__PROXY__.getFontName(...args);
        };
    
        // function 
        RDimensionEntity.prototype.hasCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.hasCustomTextPosition");
          return this.__PROXY__.hasCustomTextPosition(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setCustomTextPosition");
          return this.__PROXY__.setCustomTextPosition(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getLineSpacingStyle");
          return this.__PROXY__.getLineSpacingStyle(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getLineSpacingFactor");
          return this.__PROXY__.getLineSpacingFactor(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getTextRotation = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getTextRotation");
          return this.__PROXY__.getTextRotation(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getLinearFactor = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getLinearFactor");
          return this.__PROXY__.getLinearFactor(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setLinearFactor = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setLinearFactor");
          return this.__PROXY__.setLinearFactor(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getDimscale = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getDimscale");
          return this.__PROXY__.getDimscale(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setDimscale = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setDimscale");
          return this.__PROXY__.setDimscale(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getDimBlockName = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getDimBlockName");
          return this.__PROXY__.getDimBlockName(...args);
        };
    
        // function 
        RDimensionEntity.prototype.hasDimensionBlockReference = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.hasDimensionBlockReference");
          return this.__PROXY__.hasDimensionBlockReference(...args);
        };
    
        // function 
        RDimensionEntity.prototype.isArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.isArrow1Flipped");
          return this.__PROXY__.isArrow1Flipped(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setArrow1Flipped");
          return this.__PROXY__.setArrow1Flipped(...args);
        };
    
        // function 
        RDimensionEntity.prototype.isArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.isArrow2Flipped");
          return this.__PROXY__.isArrow2Flipped(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setArrow2Flipped");
          return this.__PROXY__.setArrow2Flipped(...args);
        };
    
        // function 
        RDimensionEntity.prototype.isExtLineFix = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.isExtLineFix");
          return this.__PROXY__.isExtLineFix(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setExtLineFix = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setExtLineFix");
          return this.__PROXY__.setExtLineFix(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getExtLineFixLength");
          return this.__PROXY__.getExtLineFixLength(...args);
        };
    
        // function 
        RDimensionEntity.prototype.setExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.setExtLineFixLength");
          return this.__PROXY__.setExtLineFixLength(...args);
        };
    
        // function 
        RDimensionEntity.prototype.hasOverride = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.hasOverride");
          return this.__PROXY__.hasOverride(...args);
        };
    
        // function 
        RDimensionEntity.prototype.getDimensionBlockNames = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.getDimensionBlockNames");
          return this.__PROXY__.getDimensionBlockNames(...args);
        };
    
        // function 
        RDimensionEntity.prototype.print = function(...args) 
          
        {
          //print("JS: RDimensionEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

        // static function 
        RDimensionEntity.init = function() 
          
        {
          //print("JS: RDimensionEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimensionEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RDimensionEntity);
  }

  
  else {
    
        print("RDimensionEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimensionEntity.getRtti = function() 
          
        {
          //print("JS: RDimensionEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimensionEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RDimensionEntity);
  }

  
  else {
    
        print("RDimensionEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimensionEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RDimensionEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimensionEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RDimensionEntity);
  }

  
  else {
    
        print("RDimensionEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimensionEntity.renderDimensionText = function() 
          
        {
          //print("JS: RDimensionEntity.renderDimensionText");
          
      if (arguments.length >= 3 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RDimensionEntity_WrapperSingletonInstance.renderDimensionText(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RDimensionEntity);
  }

  
  else {
    
        print("RDimensionEntity.renderDimensionText(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimensionEntity.getDimensionBlockNames = function() 
          
        {
          //print("JS: RDimensionEntity.getDimensionBlockNames");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RDimensionEntity_WrapperSingletonInstance.getDimensionBlockNames(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RDimensionEntity);
  }

  
  else {
    
        print("RDimensionEntity.getDimensionBlockNames(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RDimensionEntity.INVALID_ID = 
  RDimensionEntity_WrapperSingletonInstance.INVALID_ID;
RDimensionEntity.INVALID_HANDLE = 
  RDimensionEntity_WrapperSingletonInstance.INVALID_HANDLE;
RDimensionEntity.PropertySelected = 
  RDimensionEntity_WrapperSingletonInstance.PropertySelected;
RDimensionEntity.PropertyInvisible = 
  RDimensionEntity_WrapperSingletonInstance.PropertyInvisible;
RDimensionEntity.PropertyParentId = 
  RDimensionEntity_WrapperSingletonInstance.PropertyParentId;
RDimensionEntity.PropertyMinX = 
  RDimensionEntity_WrapperSingletonInstance.PropertyMinX;
RDimensionEntity.PropertyMinY = 
  RDimensionEntity_WrapperSingletonInstance.PropertyMinY;
RDimensionEntity.PropertyMaxX = 
  RDimensionEntity_WrapperSingletonInstance.PropertyMaxX;
RDimensionEntity.PropertyMaxY = 
  RDimensionEntity_WrapperSingletonInstance.PropertyMaxY;
RDimensionEntity.PropertySizeX = 
  RDimensionEntity_WrapperSingletonInstance.PropertySizeX;
RDimensionEntity.PropertySizeY = 
  RDimensionEntity_WrapperSingletonInstance.PropertySizeY;
RDimensionEntity.PropertyCustom = 
  RDimensionEntity_WrapperSingletonInstance.PropertyCustom;
RDimensionEntity.PropertyHandle = 
  RDimensionEntity_WrapperSingletonInstance.PropertyHandle;
RDimensionEntity.PropertyProtected = 
  RDimensionEntity_WrapperSingletonInstance.PropertyProtected;
RDimensionEntity.PropertyWorkingSet = 
  RDimensionEntity_WrapperSingletonInstance.PropertyWorkingSet;
RDimensionEntity.PropertyType = 
  RDimensionEntity_WrapperSingletonInstance.PropertyType;
RDimensionEntity.PropertyBlock = 
  RDimensionEntity_WrapperSingletonInstance.PropertyBlock;
RDimensionEntity.PropertyLayer = 
  RDimensionEntity_WrapperSingletonInstance.PropertyLayer;
RDimensionEntity.PropertyLinetype = 
  RDimensionEntity_WrapperSingletonInstance.PropertyLinetype;
RDimensionEntity.PropertyLinetypeScale = 
  RDimensionEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RDimensionEntity.PropertyLineweight = 
  RDimensionEntity_WrapperSingletonInstance.PropertyLineweight;
RDimensionEntity.PropertyColor = 
  RDimensionEntity_WrapperSingletonInstance.PropertyColor;
RDimensionEntity.PropertyDisplayedColor = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RDimensionEntity.PropertyDrawOrder = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDrawOrder;
RDimensionEntity.PropertyDefinitionPointX = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDefinitionPointX;
RDimensionEntity.PropertyDefinitionPointY = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDefinitionPointY;
RDimensionEntity.PropertyDefinitionPointZ = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDefinitionPointZ;
RDimensionEntity.PropertyMiddleOfTextX = 
  RDimensionEntity_WrapperSingletonInstance.PropertyMiddleOfTextX;
RDimensionEntity.PropertyMiddleOfTextY = 
  RDimensionEntity_WrapperSingletonInstance.PropertyMiddleOfTextY;
RDimensionEntity.PropertyMiddleOfTextZ = 
  RDimensionEntity_WrapperSingletonInstance.PropertyMiddleOfTextZ;
RDimensionEntity.PropertyText = 
  RDimensionEntity_WrapperSingletonInstance.PropertyText;
RDimensionEntity.PropertyUpperTolerance = 
  RDimensionEntity_WrapperSingletonInstance.PropertyUpperTolerance;
RDimensionEntity.PropertyLowerTolerance = 
  RDimensionEntity_WrapperSingletonInstance.PropertyLowerTolerance;
RDimensionEntity.PropertyDimBlockName = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimBlockName;
RDimensionEntity.PropertyAutoTextPos = 
  RDimensionEntity_WrapperSingletonInstance.PropertyAutoTextPos;
RDimensionEntity.PropertyFontName = 
  RDimensionEntity_WrapperSingletonInstance.PropertyFontName;
RDimensionEntity.PropertyArrow1Flipped = 
  RDimensionEntity_WrapperSingletonInstance.PropertyArrow1Flipped;
RDimensionEntity.PropertyArrow2Flipped = 
  RDimensionEntity_WrapperSingletonInstance.PropertyArrow2Flipped;
RDimensionEntity.PropertyExtLineFix = 
  RDimensionEntity_WrapperSingletonInstance.PropertyExtLineFix;
RDimensionEntity.PropertyExtLineFixLength = 
  RDimensionEntity_WrapperSingletonInstance.PropertyExtLineFixLength;
RDimensionEntity.PropertyAutoLabel = 
  RDimensionEntity_WrapperSingletonInstance.PropertyAutoLabel;
RDimensionEntity.PropertyMeasuredValue = 
  RDimensionEntity_WrapperSingletonInstance.PropertyMeasuredValue;
RDimensionEntity.PropertyDimscale = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimscale;
RDimensionEntity.PropertyDimlfac = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimlfac;
RDimensionEntity.PropertyDimtxt = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimtxt;
RDimensionEntity.PropertyDimgap = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimgap;
RDimensionEntity.PropertyDimasz = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimasz;
RDimensionEntity.PropertyDimexe = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimexe;
RDimensionEntity.PropertyDimexo = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimexo;
RDimensionEntity.PropertyDimtad = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimtad;
RDimensionEntity.PropertyDimtih = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimtih;
RDimensionEntity.PropertyDimtsz = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimtsz;
RDimensionEntity.PropertyDimlunit = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimlunit;
RDimensionEntity.PropertyDimdec = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimdec;
RDimensionEntity.PropertyDimdsep = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimdsep;
RDimensionEntity.PropertyDimzin = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimzin;
RDimensionEntity.PropertyDimaunit = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimaunit;
RDimensionEntity.PropertyDimadec = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimadec;
RDimensionEntity.PropertyDimazin = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimazin;
RDimensionEntity.PropertyArchTick = 
  RDimensionEntity_WrapperSingletonInstance.PropertyArchTick;
RDimensionEntity.PropertyDimclrt = 
  RDimensionEntity_WrapperSingletonInstance.PropertyDimclrt;


      // copy function:
      //RDimensionEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimensionEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RDimensionEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      