
      // auto generated
      //var self;

      // class constructor:
      function RDimAngularEntity() {
        

        // should be RDimAngularEntity_BaseJs.call(this, engine):
        //RDimAngularEntity.prototype = new RDimAngularEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimAngularEntity.getIdStatic()))) {

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
            qWarning("RDimAngularEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RDimAngularEntity.js: No constructor found for class RDimAngularEntity");
            
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

      //RDimAngularEntity.prototype = new RDimAngularEntity_BaseJs(engine);
      //RDimAngularEntity.prototype = new RDimAngularEntity_Wrapper(engine);
      RDimAngularEntity.prototype = new Object();

      RDimAngularEntity.prototype.toString = function() {
          //return "RDimAngularEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimAngularEntity [JS]";
        };
      RDimAngularEntity.getObjectType = function() {
        return RJSType_RDimAngularEntity.getIdStatic();
      };

      RDimAngularEntity.prototype.getObjectType = function() {
        return RJSType_RDimAngularEntity.getIdStatic();
      };

      RDimAngularEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimAngularEntity.getIdStatic()) {
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
        RDimAngularEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.move = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.update = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.clearStyleOverrides = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.clearStyleOverrides");
          return this.__PROXY__.clearStyleOverrides(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setDefinitionPoint");
          return this.__PROXY__.setDefinitionPoint(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getDefinitionPoint");
          return this.__PROXY__.getDefinitionPoint(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setText = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setText");
          return this.__PROXY__.setText(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getText = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getText");
          return this.__PROXY__.getText(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getMeasurement = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getMeasurement");
          return this.__PROXY__.getMeasurement(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getTextData = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getTextData");
          return this.__PROXY__.getTextData(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.updateBoundingBox = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.updateBoundingBox");
          return this.__PROXY__.updateBoundingBox(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.updateTextPositionCenter = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.updateTextPositionCenter");
          return this.__PROXY__.updateTextPositionCenter(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.updateTextData = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.updateTextData");
          return this.__PROXY__.updateTextData(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.updateShapes = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.updateShapes");
          return this.__PROXY__.updateShapes(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setTextPosition = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setTextPosition");
          return this.__PROXY__.setTextPosition(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getTextPosition = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getTextPosition");
          return this.__PROXY__.getTextPosition(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setFontName = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setFontName");
          return this.__PROXY__.setFontName(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getFontName = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getFontName");
          return this.__PROXY__.getFontName(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.hasCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.hasCustomTextPosition");
          return this.__PROXY__.hasCustomTextPosition(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setCustomTextPosition");
          return this.__PROXY__.setCustomTextPosition(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getLineSpacingStyle");
          return this.__PROXY__.getLineSpacingStyle(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getLineSpacingFactor");
          return this.__PROXY__.getLineSpacingFactor(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getTextRotation = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getTextRotation");
          return this.__PROXY__.getTextRotation(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getLinearFactor = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getLinearFactor");
          return this.__PROXY__.getLinearFactor(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setLinearFactor = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setLinearFactor");
          return this.__PROXY__.setLinearFactor(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getDimscale = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getDimscale");
          return this.__PROXY__.getDimscale(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setDimscale = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setDimscale");
          return this.__PROXY__.setDimscale(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getDimBlockName = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getDimBlockName");
          return this.__PROXY__.getDimBlockName(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.hasDimensionBlockReference = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.hasDimensionBlockReference");
          return this.__PROXY__.hasDimensionBlockReference(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.isArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.isArrow1Flipped");
          return this.__PROXY__.isArrow1Flipped(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setArrow1Flipped");
          return this.__PROXY__.setArrow1Flipped(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.isArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.isArrow2Flipped");
          return this.__PROXY__.isArrow2Flipped(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setArrow2Flipped");
          return this.__PROXY__.setArrow2Flipped(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.isExtLineFix = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.isExtLineFix");
          return this.__PROXY__.isExtLineFix(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setExtLineFix = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setExtLineFix");
          return this.__PROXY__.setExtLineFix(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getExtLineFixLength");
          return this.__PROXY__.getExtLineFixLength(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setExtLineFixLength");
          return this.__PROXY__.setExtLineFixLength(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.hasOverride = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.hasOverride");
          return this.__PROXY__.hasOverride(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.init = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setExtensionLine1End = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setExtensionLine1End");
          return this.__PROXY__.setExtensionLine1End(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getExtensionLine1End = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getExtensionLine1End");
          return this.__PROXY__.getExtensionLine1End(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setExtensionLine2End = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setExtensionLine2End");
          return this.__PROXY__.setExtensionLine2End(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getExtensionLine2End = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getExtensionLine2End");
          return this.__PROXY__.getExtensionLine2End(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.setDimArcPosition = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.setDimArcPosition");
          return this.__PROXY__.setDimArcPosition(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getDimArcPosition = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getDimArcPosition");
          return this.__PROXY__.getDimArcPosition(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.getDimensionArc = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.getDimensionArc");
          return this.__PROXY__.getDimensionArc(...args);
        };
    
        // function 
        RDimAngularEntity.prototype.print = function(...args) 
          
        {
          //print("JS: RDimAngularEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

        // static function 
        RDimAngularEntity.init = function() 
          
        {
          //print("JS: RDimAngularEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimAngularEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RDimAngularEntity);
  }

  
  else {
    
        print("RDimAngularEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RDimAngularEntity.INVALID_ID = 
  RDimAngularEntity_WrapperSingletonInstance.INVALID_ID;
RDimAngularEntity.INVALID_HANDLE = 
  RDimAngularEntity_WrapperSingletonInstance.INVALID_HANDLE;
RDimAngularEntity.PropertySelected = 
  RDimAngularEntity_WrapperSingletonInstance.PropertySelected;
RDimAngularEntity.PropertyInvisible = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyInvisible;
RDimAngularEntity.PropertyParentId = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyParentId;
RDimAngularEntity.PropertyMinX = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyMinX;
RDimAngularEntity.PropertyMinY = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyMinY;
RDimAngularEntity.PropertyMaxX = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyMaxX;
RDimAngularEntity.PropertyMaxY = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyMaxY;
RDimAngularEntity.PropertySizeX = 
  RDimAngularEntity_WrapperSingletonInstance.PropertySizeX;
RDimAngularEntity.PropertySizeY = 
  RDimAngularEntity_WrapperSingletonInstance.PropertySizeY;
RDimAngularEntity.PropertyDefinitionPointX = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDefinitionPointX;
RDimAngularEntity.PropertyDefinitionPointY = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDefinitionPointY;
RDimAngularEntity.PropertyDefinitionPointZ = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDefinitionPointZ;
RDimAngularEntity.PropertyAutoLabel = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyAutoLabel;
RDimAngularEntity.PropertyDimlfac = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimlfac;
RDimAngularEntity.PropertyDimlunit = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimlunit;
RDimAngularEntity.PropertyDimdec = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimdec;
RDimAngularEntity.PropertyDimzin = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimzin;
RDimAngularEntity.PropertyCustom = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyCustom;
RDimAngularEntity.PropertyHandle = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyHandle;
RDimAngularEntity.PropertyProtected = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyProtected;
RDimAngularEntity.PropertyWorkingSet = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyWorkingSet;
RDimAngularEntity.PropertyType = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyType;
RDimAngularEntity.PropertyBlock = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyBlock;
RDimAngularEntity.PropertyLayer = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyLayer;
RDimAngularEntity.PropertyLinetype = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyLinetype;
RDimAngularEntity.PropertyLinetypeScale = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RDimAngularEntity.PropertyLineweight = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyLineweight;
RDimAngularEntity.PropertyColor = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyColor;
RDimAngularEntity.PropertyDisplayedColor = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RDimAngularEntity.PropertyDrawOrder = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDrawOrder;
RDimAngularEntity.PropertyMiddleOfTextX = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyMiddleOfTextX;
RDimAngularEntity.PropertyMiddleOfTextY = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyMiddleOfTextY;
RDimAngularEntity.PropertyMiddleOfTextZ = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyMiddleOfTextZ;
RDimAngularEntity.PropertyText = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyText;
RDimAngularEntity.PropertyUpperTolerance = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyUpperTolerance;
RDimAngularEntity.PropertyLowerTolerance = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyLowerTolerance;
RDimAngularEntity.PropertyMeasuredValue = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyMeasuredValue;
RDimAngularEntity.PropertyDimscale = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimscale;
RDimAngularEntity.PropertyDimtxt = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimtxt;
RDimAngularEntity.PropertyDimgap = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimgap;
RDimAngularEntity.PropertyDimasz = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimasz;
RDimAngularEntity.PropertyDimexe = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimexe;
RDimAngularEntity.PropertyDimexo = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimexo;
RDimAngularEntity.PropertyDimtad = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimtad;
RDimAngularEntity.PropertyDimtih = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimtih;
RDimAngularEntity.PropertyDimtsz = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimtsz;
RDimAngularEntity.PropertyDimdsep = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimdsep;
RDimAngularEntity.PropertyDimaunit = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimaunit;
RDimAngularEntity.PropertyDimadec = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimadec;
RDimAngularEntity.PropertyDimazin = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimazin;
RDimAngularEntity.PropertyArchTick = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyArchTick;
RDimAngularEntity.PropertyDimclrt = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimclrt;
RDimAngularEntity.PropertyDimBlockName = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimBlockName;
RDimAngularEntity.PropertyAutoTextPos = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyAutoTextPos;
RDimAngularEntity.PropertyFontName = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyFontName;
RDimAngularEntity.PropertyArrow1Flipped = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyArrow1Flipped;
RDimAngularEntity.PropertyArrow2Flipped = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyArrow2Flipped;
RDimAngularEntity.PropertyExtLineFix = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyExtLineFix;
RDimAngularEntity.PropertyExtLineFixLength = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyExtLineFixLength;
RDimAngularEntity.PropertyCenterX = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyCenterX;
RDimAngularEntity.PropertyCenterY = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyCenterY;
RDimAngularEntity.PropertyCenterZ = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyCenterZ;
RDimAngularEntity.PropertyExtensionLine1EndX = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyExtensionLine1EndX;
RDimAngularEntity.PropertyExtensionLine1EndY = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyExtensionLine1EndY;
RDimAngularEntity.PropertyExtensionLine1EndZ = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyExtensionLine1EndZ;
RDimAngularEntity.PropertyExtensionLine2EndX = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyExtensionLine2EndX;
RDimAngularEntity.PropertyExtensionLine2EndY = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyExtensionLine2EndY;
RDimAngularEntity.PropertyExtensionLine2EndZ = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyExtensionLine2EndZ;
RDimAngularEntity.PropertyDimArcPositionX = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimArcPositionX;
RDimAngularEntity.PropertyDimArcPositionY = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimArcPositionY;
RDimAngularEntity.PropertyDimArcPositionZ = 
  RDimAngularEntity_WrapperSingletonInstance.PropertyDimArcPositionZ;


      // copy function:
      //RDimAngularEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimAngularEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RDimAngularEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      