
      // auto generated
      //var self;

      // class constructor:
      function REntity() {
        

        // should be REntity_BaseJs.call(this, engine):
        //REntity.prototype = new REntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_REntity.getIdStatic()))) {

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
            qWarning("REntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("REntity.js: No constructor found for class REntity");
            
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

      //REntity.prototype = new REntity_BaseJs(engine);
      //REntity.prototype = new REntity_Wrapper(engine);
      REntity.prototype = new Object();

      REntity.prototype.toString = function() {
          //return "REntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "REntity [JS]";
        };
      REntity.getObjectType = function() {
        return RJSType_REntity.getIdStatic();
      };

      REntity.prototype.getObjectType = function() {
        return RJSType_REntity.getIdStatic();
      };

      REntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_REntity.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RObject.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        REntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: REntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        REntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: REntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        REntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: REntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        REntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: REntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        REntity.prototype.getId = function(...args) 
          
        {
          //print("JS: REntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        REntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: REntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        REntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: REntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        REntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: REntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        REntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: REntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        REntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: REntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        REntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: REntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        REntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: REntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        REntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: REntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        REntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: REntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        REntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: REntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        REntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: REntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        REntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: REntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        REntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: REntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        REntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: REntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        REntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: REntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        REntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: REntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        REntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: REntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        REntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: REntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        REntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: REntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        REntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: REntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        REntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: REntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        REntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: REntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        REntity.prototype.dump = function(...args) 
          
        {
          //print("JS: REntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        REntity.prototype.validate = function(...args) 
          
        {
          //print("JS: REntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        REntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: REntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        REntity.prototype.setId = function(...args) 
          
        {
          //print("JS: REntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        REntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: REntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        REntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: REntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        REntity.prototype.getRtti = function(...args) 
          
        {
          //print("JS: REntity.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        REntity.prototype.init = function(...args) 
          
        {
          //print("JS: REntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        REntity.prototype.getStaticPropertyTypeIds = function(...args) 
          
        {
          //print("JS: REntity.prototype.getStaticPropertyTypeIds");
          return this.__PROXY__.getStaticPropertyTypeIds(...args);
        };
    
        // function 
        REntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: REntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        REntity.prototype.clone = function(...args) 
          
        {
          //print("JS: REntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        REntity.prototype.getType = function(...args) 
          
        {
          //print("JS: REntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        REntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: REntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        REntity.prototype.isComplex = function(...args) 
          
        {
          //print("JS: REntity.prototype.isComplex");
          return this.__PROXY__.isComplex(...args);
        };
    
        // function 
        REntity.prototype.isDimension = function(...args) 
          
        {
          //print("JS: REntity.prototype.isDimension");
          return this.__PROXY__.isDimension(...args);
        };
    
        // function 
        REntity.prototype.isTextBased = function(...args) 
          
        {
          //print("JS: REntity.prototype.isTextBased");
          return this.__PROXY__.isTextBased(...args);
        };
    
        // function 
        REntity.prototype.getData = function(...args) 
          
        {
          //print("JS: REntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        REntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: REntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        REntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: REntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        REntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: REntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        REntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: REntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        REntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: REntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        REntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: REntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        REntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: REntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        REntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: REntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        REntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: REntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        REntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: REntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        REntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: REntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        REntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: REntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        REntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: REntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        REntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: REntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        REntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: REntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        REntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: REntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        REntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: REntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        REntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: REntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        REntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: REntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        REntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: REntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        REntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: REntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        REntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: REntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        REntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: REntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        REntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: REntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        REntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: REntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        REntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: REntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        REntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: REntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        REntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: REntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        REntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: REntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        REntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: REntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        REntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: REntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        REntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: REntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        REntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: REntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        REntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: REntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        REntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: REntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        REntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: REntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        REntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: REntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        REntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: REntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        REntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: REntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        REntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: REntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        REntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: REntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        REntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: REntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        REntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: REntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        REntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: REntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        REntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: REntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        REntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: REntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        REntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: REntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        REntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: REntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        REntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: REntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        REntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: REntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        REntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: REntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        REntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: REntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        REntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: REntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        REntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: REntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        REntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: REntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        REntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: REntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        REntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: REntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        REntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: REntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        REntity.prototype.move = function(...args) 
          
        {
          //print("JS: REntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        REntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: REntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        REntity.prototype.scale = function(...args) 
          
        {
          //print("JS: REntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        REntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: REntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        REntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: REntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        REntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: REntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        REntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: REntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        REntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: REntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        REntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: REntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        REntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: REntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        REntity.prototype.update = function(...args) 
          
        {
          //print("JS: REntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        REntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: REntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        REntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: REntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        REntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: REntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        REntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: REntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        REntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: REntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        REntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: REntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        REntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: REntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        REntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: REntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        REntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: REntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        REntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: REntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        REntity.prototype.print = function(...args) 
          
        {
          //print("JS: REntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

        // static function 
        REntity.getRtti = function() 
          
        {
          //print("JS: REntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return REntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, REntity);
  }

  
  else {
    
        print("REntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REntity.init = function() 
          
        {
          //print("JS: REntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return REntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, REntity);
  }

  
  else {
    
        print("REntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: REntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return REntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, REntity);
  }

  
  else {
    
        print("REntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REntity.isComplex = function() 
          
        {
          //print("JS: REntity.isComplex");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return REntity_WrapperSingletonInstance.isComplex(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, REntity);
  }

  
  else {
    
        print("REntity.isComplex(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REntity.isDimension = function() 
          
        {
          //print("JS: REntity.isDimension");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return REntity_WrapperSingletonInstance.isDimension(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, REntity);
  }

  
  else {
    
        print("REntity.isDimension(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REntity.isTextBased = function() 
          
        {
          //print("JS: REntity.isTextBased");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return REntity_WrapperSingletonInstance.isTextBased(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, REntity);
  }

  
  else {
    
        print("REntity.isTextBased(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      REntity.INVALID_ID = 
  REntity_WrapperSingletonInstance.INVALID_ID;
REntity.INVALID_HANDLE = 
  REntity_WrapperSingletonInstance.INVALID_HANDLE;
REntity.PropertySelected = 
  REntity_WrapperSingletonInstance.PropertySelected;
REntity.PropertyInvisible = 
  REntity_WrapperSingletonInstance.PropertyInvisible;
REntity.PropertyCustom = 
  REntity_WrapperSingletonInstance.PropertyCustom;
REntity.PropertyHandle = 
  REntity_WrapperSingletonInstance.PropertyHandle;
REntity.PropertyProtected = 
  REntity_WrapperSingletonInstance.PropertyProtected;
REntity.PropertyWorkingSet = 
  REntity_WrapperSingletonInstance.PropertyWorkingSet;
REntity.PropertyType = 
  REntity_WrapperSingletonInstance.PropertyType;
REntity.PropertyBlock = 
  REntity_WrapperSingletonInstance.PropertyBlock;
REntity.PropertyLayer = 
  REntity_WrapperSingletonInstance.PropertyLayer;
REntity.PropertyLinetype = 
  REntity_WrapperSingletonInstance.PropertyLinetype;
REntity.PropertyLinetypeScale = 
  REntity_WrapperSingletonInstance.PropertyLinetypeScale;
REntity.PropertyLineweight = 
  REntity_WrapperSingletonInstance.PropertyLineweight;
REntity.PropertyColor = 
  REntity_WrapperSingletonInstance.PropertyColor;
REntity.PropertyDisplayedColor = 
  REntity_WrapperSingletonInstance.PropertyDisplayedColor;
REntity.PropertyDrawOrder = 
  REntity_WrapperSingletonInstance.PropertyDrawOrder;
REntity.PropertyParentId = 
  REntity_WrapperSingletonInstance.PropertyParentId;
REntity.PropertyMinX = 
  REntity_WrapperSingletonInstance.PropertyMinX;
REntity.PropertyMinY = 
  REntity_WrapperSingletonInstance.PropertyMinY;
REntity.PropertyMaxX = 
  REntity_WrapperSingletonInstance.PropertyMaxX;
REntity.PropertyMaxY = 
  REntity_WrapperSingletonInstance.PropertyMaxY;
REntity.PropertySizeX = 
  REntity_WrapperSingletonInstance.PropertySizeX;
REntity.PropertySizeY = 
  REntity_WrapperSingletonInstance.PropertySizeY;


      // copy function:
      //REntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //REntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      REntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      