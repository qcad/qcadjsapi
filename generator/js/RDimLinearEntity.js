
      // auto generated
      //var self;

      // class constructor:
      function RDimLinearEntity() {
        

        // should be RDimLinearEntity_BaseJs.call(this, engine):
        //RDimLinearEntity.prototype = new RDimLinearEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimLinearEntity.getIdStatic()))) {

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
            qWarning("RDimLinearEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RDimLinearEntity.js: No constructor found for class RDimLinearEntity");
            
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

      //RDimLinearEntity.prototype = new RDimLinearEntity_BaseJs(engine);
      //RDimLinearEntity.prototype = new RDimLinearEntity_Wrapper(engine);
      RDimLinearEntity.prototype = new Object();

      RDimLinearEntity.prototype.toString = function() {
          //return "RDimLinearEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimLinearEntity [JS]";
        };
      RDimLinearEntity.getObjectType = function() {
        return RJSType_RDimLinearEntity.getIdStatic();
      };

      RDimLinearEntity.prototype.getObjectType = function() {
        return RJSType_RDimLinearEntity.getIdStatic();
      };

      RDimLinearEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimLinearEntity.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_REntity.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RDimensionEntity.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RDimLinearEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.move = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.update = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.clearStyleOverrides = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.clearStyleOverrides");
          return this.__PROXY__.clearStyleOverrides(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setDefinitionPoint");
          return this.__PROXY__.setDefinitionPoint(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getDefinitionPoint");
          return this.__PROXY__.getDefinitionPoint(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setText = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setText");
          return this.__PROXY__.setText(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getText = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getText");
          return this.__PROXY__.getText(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getMeasurement = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getMeasurement");
          return this.__PROXY__.getMeasurement(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getTextData = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getTextData");
          return this.__PROXY__.getTextData(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.updateBoundingBox = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.updateBoundingBox");
          return this.__PROXY__.updateBoundingBox(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.updateTextPositionCenter = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.updateTextPositionCenter");
          return this.__PROXY__.updateTextPositionCenter(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.updateTextData = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.updateTextData");
          return this.__PROXY__.updateTextData(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.updateShapes = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.updateShapes");
          return this.__PROXY__.updateShapes(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setTextPosition = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setTextPosition");
          return this.__PROXY__.setTextPosition(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getTextPosition = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getTextPosition");
          return this.__PROXY__.getTextPosition(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setFontName = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setFontName");
          return this.__PROXY__.setFontName(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getFontName = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getFontName");
          return this.__PROXY__.getFontName(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.hasCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.hasCustomTextPosition");
          return this.__PROXY__.hasCustomTextPosition(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setCustomTextPosition");
          return this.__PROXY__.setCustomTextPosition(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getLineSpacingStyle");
          return this.__PROXY__.getLineSpacingStyle(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getLineSpacingFactor");
          return this.__PROXY__.getLineSpacingFactor(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getTextRotation = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getTextRotation");
          return this.__PROXY__.getTextRotation(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getLinearFactor = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getLinearFactor");
          return this.__PROXY__.getLinearFactor(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setLinearFactor = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setLinearFactor");
          return this.__PROXY__.setLinearFactor(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getDimscale = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getDimscale");
          return this.__PROXY__.getDimscale(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setDimscale = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setDimscale");
          return this.__PROXY__.setDimscale(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getDimBlockName = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getDimBlockName");
          return this.__PROXY__.getDimBlockName(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.hasDimensionBlockReference = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.hasDimensionBlockReference");
          return this.__PROXY__.hasDimensionBlockReference(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.isArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.isArrow1Flipped");
          return this.__PROXY__.isArrow1Flipped(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setArrow1Flipped");
          return this.__PROXY__.setArrow1Flipped(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.isArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.isArrow2Flipped");
          return this.__PROXY__.isArrow2Flipped(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setArrow2Flipped");
          return this.__PROXY__.setArrow2Flipped(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.isExtLineFix = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.isExtLineFix");
          return this.__PROXY__.isExtLineFix(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setExtLineFix = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setExtLineFix");
          return this.__PROXY__.setExtLineFix(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getExtLineFixLength");
          return this.__PROXY__.getExtLineFixLength(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setExtLineFixLength");
          return this.__PROXY__.setExtLineFixLength(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.hasOverride = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.hasOverride");
          return this.__PROXY__.hasOverride(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.init = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setExtensionPoint1 = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setExtensionPoint1");
          return this.__PROXY__.setExtensionPoint1(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getExtensionPoint1 = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getExtensionPoint1");
          return this.__PROXY__.getExtensionPoint1(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.setExtensionPoint2 = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.setExtensionPoint2");
          return this.__PROXY__.setExtensionPoint2(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.getExtensionPoint2 = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.getExtensionPoint2");
          return this.__PROXY__.getExtensionPoint2(...args);
        };
    
        // function 
        RDimLinearEntity.prototype.print = function(...args) 
          
        {
          //print("JS: RDimLinearEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

        // static function 
        RDimLinearEntity.init = function() 
          
        {
          //print("JS: RDimLinearEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimLinearEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RDimLinearEntity);
  }

  
  else {
    
        print("RDimLinearEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RDimLinearEntity.INVALID_ID = 
  RDimLinearEntity_WrapperSingletonInstance.INVALID_ID;
RDimLinearEntity.INVALID_HANDLE = 
  RDimLinearEntity_WrapperSingletonInstance.INVALID_HANDLE;
RDimLinearEntity.PropertySelected = 
  RDimLinearEntity_WrapperSingletonInstance.PropertySelected;
RDimLinearEntity.PropertyInvisible = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyInvisible;
RDimLinearEntity.PropertyParentId = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyParentId;
RDimLinearEntity.PropertyMinX = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyMinX;
RDimLinearEntity.PropertyMinY = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyMinY;
RDimLinearEntity.PropertyMaxX = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyMaxX;
RDimLinearEntity.PropertyMaxY = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyMaxY;
RDimLinearEntity.PropertySizeX = 
  RDimLinearEntity_WrapperSingletonInstance.PropertySizeX;
RDimLinearEntity.PropertySizeY = 
  RDimLinearEntity_WrapperSingletonInstance.PropertySizeY;
RDimLinearEntity.PropertyDefinitionPointX = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDefinitionPointX;
RDimLinearEntity.PropertyDefinitionPointY = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDefinitionPointY;
RDimLinearEntity.PropertyDefinitionPointZ = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDefinitionPointZ;
RDimLinearEntity.PropertyAutoLabel = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyAutoLabel;
RDimLinearEntity.PropertyCustom = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyCustom;
RDimLinearEntity.PropertyHandle = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyHandle;
RDimLinearEntity.PropertyProtected = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyProtected;
RDimLinearEntity.PropertyWorkingSet = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyWorkingSet;
RDimLinearEntity.PropertyType = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyType;
RDimLinearEntity.PropertyBlock = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyBlock;
RDimLinearEntity.PropertyLayer = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyLayer;
RDimLinearEntity.PropertyLinetype = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyLinetype;
RDimLinearEntity.PropertyLinetypeScale = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RDimLinearEntity.PropertyLineweight = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyLineweight;
RDimLinearEntity.PropertyColor = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyColor;
RDimLinearEntity.PropertyDisplayedColor = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RDimLinearEntity.PropertyDrawOrder = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDrawOrder;
RDimLinearEntity.PropertyMiddleOfTextX = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyMiddleOfTextX;
RDimLinearEntity.PropertyMiddleOfTextY = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyMiddleOfTextY;
RDimLinearEntity.PropertyMiddleOfTextZ = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyMiddleOfTextZ;
RDimLinearEntity.PropertyText = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyText;
RDimLinearEntity.PropertyUpperTolerance = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyUpperTolerance;
RDimLinearEntity.PropertyLowerTolerance = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyLowerTolerance;
RDimLinearEntity.PropertyMeasuredValue = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyMeasuredValue;
RDimLinearEntity.PropertyDimscale = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimscale;
RDimLinearEntity.PropertyDimlfac = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimlfac;
RDimLinearEntity.PropertyDimtxt = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimtxt;
RDimLinearEntity.PropertyDimgap = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimgap;
RDimLinearEntity.PropertyDimasz = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimasz;
RDimLinearEntity.PropertyDimexe = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimexe;
RDimLinearEntity.PropertyDimexo = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimexo;
RDimLinearEntity.PropertyDimtad = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimtad;
RDimLinearEntity.PropertyDimtih = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimtih;
RDimLinearEntity.PropertyDimtsz = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimtsz;
RDimLinearEntity.PropertyDimlunit = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimlunit;
RDimLinearEntity.PropertyDimdec = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimdec;
RDimLinearEntity.PropertyDimdsep = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimdsep;
RDimLinearEntity.PropertyDimzin = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimzin;
RDimLinearEntity.PropertyDimaunit = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimaunit;
RDimLinearEntity.PropertyDimadec = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimadec;
RDimLinearEntity.PropertyDimazin = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimazin;
RDimLinearEntity.PropertyArchTick = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyArchTick;
RDimLinearEntity.PropertyDimclrt = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimclrt;
RDimLinearEntity.PropertyDimBlockName = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimBlockName;
RDimLinearEntity.PropertyAutoTextPos = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyAutoTextPos;
RDimLinearEntity.PropertyFontName = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyFontName;
RDimLinearEntity.PropertyArrow1Flipped = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyArrow1Flipped;
RDimLinearEntity.PropertyArrow2Flipped = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyArrow2Flipped;
RDimLinearEntity.PropertyExtLineFix = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyExtLineFix;
RDimLinearEntity.PropertyExtLineFixLength = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyExtLineFixLength;
RDimLinearEntity.PropertyDimensionLinePosX = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimensionLinePosX;
RDimLinearEntity.PropertyDimensionLinePosY = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimensionLinePosY;
RDimLinearEntity.PropertyDimensionLinePosZ = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyDimensionLinePosZ;
RDimLinearEntity.PropertyExtensionPoint1X = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyExtensionPoint1X;
RDimLinearEntity.PropertyExtensionPoint1Y = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyExtensionPoint1Y;
RDimLinearEntity.PropertyExtensionPoint1Z = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyExtensionPoint1Z;
RDimLinearEntity.PropertyExtensionPoint2X = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyExtensionPoint2X;
RDimLinearEntity.PropertyExtensionPoint2Y = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyExtensionPoint2Y;
RDimLinearEntity.PropertyExtensionPoint2Z = 
  RDimLinearEntity_WrapperSingletonInstance.PropertyExtensionPoint2Z;


      // copy function:
      //RDimLinearEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimLinearEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RDimLinearEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      