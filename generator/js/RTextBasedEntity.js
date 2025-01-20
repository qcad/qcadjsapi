
      // auto generated
      //var self;

      // class constructor:
      function RTextBasedEntity() {
        

        // should be RTextBasedEntity_BaseJs.call(this, engine):
        //RTextBasedEntity.prototype = new RTextBasedEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTextBasedEntity.getIdStatic()))) {

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
            qWarning("RTextBasedEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RTextBasedEntity.js: No constructor found for class RTextBasedEntity");
            
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

      //RTextBasedEntity.prototype = new RTextBasedEntity_BaseJs(engine);
      //RTextBasedEntity.prototype = new RTextBasedEntity_Wrapper(engine);
      RTextBasedEntity.prototype = new Object();

      RTextBasedEntity.prototype.toString = function() {
          //return "RTextBasedEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTextBasedEntity [JS]";
        };
      RTextBasedEntity.getObjectType = function() {
        return RJSType_RTextBasedEntity.getIdStatic();
      };

      RTextBasedEntity.prototype.getObjectType = function() {
        return RJSType_RTextBasedEntity.getIdStatic();
      };

      RTextBasedEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTextBasedEntity.getIdStatic()) {
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
        RTextBasedEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.move = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.update = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.init = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getStaticPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getStaticPropertyTypeIds");
          return this.__PROXY__.getStaticPropertyTypeIds(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getRotatedBoundingBox = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getRotatedBoundingBox");
          return this.__PROXY__.getRotatedBoundingBox(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getPainterPaths = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getPainterPaths");
          return this.__PROXY__.getPainterPaths(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getExploded = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getExploded");
          return this.__PROXY__.getExploded(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getTextData = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getTextData");
          return this.__PROXY__.getTextData(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.isBold = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.isBold");
          return this.__PROXY__.isBold(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setBold = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setBold");
          return this.__PROXY__.setBold(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.isItalic = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.isItalic");
          return this.__PROXY__.isItalic(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setItalic = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setItalic");
          return this.__PROXY__.setItalic(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.isBackward = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.isBackward");
          return this.__PROXY__.isBackward(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setBackward = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setBackward");
          return this.__PROXY__.setBackward(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.isUpsideDown = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.isUpsideDown");
          return this.__PROXY__.isUpsideDown(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setUpsideDown = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setUpsideDown");
          return this.__PROXY__.setUpsideDown(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getPosition = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getPosition");
          return this.__PROXY__.getPosition(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setPosition = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setPosition");
          return this.__PROXY__.setPosition(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getAlignmentPoint = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getAlignmentPoint");
          return this.__PROXY__.getAlignmentPoint(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setAlignmentPoint = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setAlignmentPoint");
          return this.__PROXY__.setAlignmentPoint(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getTextHeight = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getTextHeight");
          return this.__PROXY__.getTextHeight(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setTextHeight = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setTextHeight");
          return this.__PROXY__.setTextHeight(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getTextWidth = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getTextWidth");
          return this.__PROXY__.getTextWidth(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getWidth = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getWidth");
          return this.__PROXY__.getWidth(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getHeight = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getHeight");
          return this.__PROXY__.getHeight(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getVAlign = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getVAlign");
          return this.__PROXY__.getVAlign(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setVAlign = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setVAlign");
          return this.__PROXY__.setVAlign(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getHAlign = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getHAlign");
          return this.__PROXY__.getHAlign(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setHAlign = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setHAlign");
          return this.__PROXY__.setHAlign(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getFontName = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getFontName");
          return this.__PROXY__.getFontName(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setFontName = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setFontName");
          return this.__PROXY__.setFontName(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getFontFile = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getFontFile");
          return this.__PROXY__.getFontFile(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setDrawingDirection = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setDrawingDirection");
          return this.__PROXY__.setDrawingDirection(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getDrawingDirection = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getDrawingDirection");
          return this.__PROXY__.getDrawingDirection(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setLineSpacingStyle");
          return this.__PROXY__.setLineSpacingStyle(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getLineSpacingStyle");
          return this.__PROXY__.getLineSpacingStyle(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setLineSpacingFactor");
          return this.__PROXY__.setLineSpacingFactor(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getLineSpacingFactor");
          return this.__PROXY__.getLineSpacingFactor(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setAngle = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setAngle");
          return this.__PROXY__.setAngle(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getAngle = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getAngle");
          return this.__PROXY__.getAngle(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setXScale = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setXScale");
          return this.__PROXY__.setXScale(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getXScale = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getXScale");
          return this.__PROXY__.getXScale(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setSimple = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setSimple");
          return this.__PROXY__.setSimple(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.isSimple = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.isSimple");
          return this.__PROXY__.isSimple(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getEscapedText = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getEscapedText");
          return this.__PROXY__.getEscapedText(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getPlainText = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getPlainText");
          return this.__PROXY__.getPlainText(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.setText = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.setText");
          return this.__PROXY__.setText(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.sync = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.sync");
          return this.__PROXY__.sync(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.getSimpleTextBlocks = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.getSimpleTextBlocks");
          return this.__PROXY__.getSimpleTextBlocks(...args);
        };
    
        // function 
        RTextBasedEntity.prototype.print = function(...args) 
          
        {
          //print("JS: RTextBasedEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

        // static function 
        RTextBasedEntity.init = function() 
          
        {
          //print("JS: RTextBasedEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RTextBasedEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RTextBasedEntity);
  }

  
  else {
    
        print("RTextBasedEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextBasedEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RTextBasedEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RTextBasedEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RTextBasedEntity);
  }

  
  else {
    
        print("RTextBasedEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RTextBasedEntity.INVALID_ID = 
  RTextBasedEntity_WrapperSingletonInstance.INVALID_ID;
RTextBasedEntity.INVALID_HANDLE = 
  RTextBasedEntity_WrapperSingletonInstance.INVALID_HANDLE;
RTextBasedEntity.PropertySelected = 
  RTextBasedEntity_WrapperSingletonInstance.PropertySelected;
RTextBasedEntity.PropertyInvisible = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyInvisible;
RTextBasedEntity.PropertyProtected = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyProtected;
RTextBasedEntity.PropertyWorkingSet = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyWorkingSet;
RTextBasedEntity.PropertyParentId = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyParentId;
RTextBasedEntity.PropertyMinX = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyMinX;
RTextBasedEntity.PropertyMinY = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyMinY;
RTextBasedEntity.PropertyMaxX = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyMaxX;
RTextBasedEntity.PropertyMaxY = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyMaxY;
RTextBasedEntity.PropertySizeX = 
  RTextBasedEntity_WrapperSingletonInstance.PropertySizeX;
RTextBasedEntity.PropertySizeY = 
  RTextBasedEntity_WrapperSingletonInstance.PropertySizeY;
RTextBasedEntity.PropertyCustom = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyCustom;
RTextBasedEntity.PropertyHandle = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyHandle;
RTextBasedEntity.PropertyType = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyType;
RTextBasedEntity.PropertyBlock = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyBlock;
RTextBasedEntity.PropertyLayer = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyLayer;
RTextBasedEntity.PropertyLinetype = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyLinetype;
RTextBasedEntity.PropertyLinetypeScale = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RTextBasedEntity.PropertyLineweight = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyLineweight;
RTextBasedEntity.PropertyColor = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyColor;
RTextBasedEntity.PropertyDisplayedColor = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RTextBasedEntity.PropertyDrawOrder = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyDrawOrder;
RTextBasedEntity.PropertySimple = 
  RTextBasedEntity_WrapperSingletonInstance.PropertySimple;
RTextBasedEntity.PropertyPositionX = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyPositionX;
RTextBasedEntity.PropertyPositionY = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyPositionY;
RTextBasedEntity.PropertyPositionZ = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyPositionZ;
RTextBasedEntity.PropertyText = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyText;
RTextBasedEntity.PropertyPlainText = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyPlainText;
RTextBasedEntity.PropertyFontName = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyFontName;
RTextBasedEntity.PropertyHeight = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyHeight;
RTextBasedEntity.PropertyWidth = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyWidth;
RTextBasedEntity.PropertyAngle = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyAngle;
RTextBasedEntity.PropertyXScale = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyXScale;
RTextBasedEntity.PropertyBold = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyBold;
RTextBasedEntity.PropertyItalic = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyItalic;
RTextBasedEntity.PropertyLineSpacingFactor = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyLineSpacingFactor;
RTextBasedEntity.PropertyHAlign = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyHAlign;
RTextBasedEntity.PropertyVAlign = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyVAlign;
RTextBasedEntity.PropertyBackward = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyBackward;
RTextBasedEntity.PropertyUpsideDown = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyUpsideDown;


      // copy function:
      //RTextBasedEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTextBasedEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RTextBasedEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      