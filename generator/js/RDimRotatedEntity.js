
      // auto generated
      //var self;

      // class constructor:
      function RDimRotatedEntity() {
        

        // should be RDimRotatedEntity_BaseJs.call(this, engine):
        //RDimRotatedEntity.prototype = new RDimRotatedEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimRotatedEntity.getIdStatic()))) {

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
            qWarning("RDimRotatedEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RDimRotatedEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RDimRotatedEntity);
  }

  
  else {
    
        print("RDimRotatedEntity(): wrong number / type of arguments");
      
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

      //RDimRotatedEntity.prototype = new RDimRotatedEntity_BaseJs(engine);
      //RDimRotatedEntity.prototype = new RDimRotatedEntity_Wrapper(engine);
      RDimRotatedEntity.prototype = new Object();

      RDimRotatedEntity.prototype.toString = function() {
          //return "RDimRotatedEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimRotatedEntity [JS]";
        };
      RDimRotatedEntity.getObjectType = function() {
        return RJSType_RDimRotatedEntity.getIdStatic();
      };

      RDimRotatedEntity.prototype.getObjectType = function() {
        return RJSType_RDimRotatedEntity.getIdStatic();
      };

      RDimRotatedEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimRotatedEntity.getIdStatic()) {
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
        
          if (t===RJSType_RDimLinearEntity.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RDimRotatedEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.move = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.update = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.clearStyleOverrides = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.clearStyleOverrides");
          return this.__PROXY__.clearStyleOverrides(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setDefinitionPoint");
          return this.__PROXY__.setDefinitionPoint(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getDefinitionPoint");
          return this.__PROXY__.getDefinitionPoint(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setText = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setText");
          return this.__PROXY__.setText(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getText = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getText");
          return this.__PROXY__.getText(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getMeasurement = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getMeasurement");
          return this.__PROXY__.getMeasurement(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getTextData = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getTextData");
          return this.__PROXY__.getTextData(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.updateBoundingBox = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.updateBoundingBox");
          return this.__PROXY__.updateBoundingBox(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.updateTextPositionCenter = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.updateTextPositionCenter");
          return this.__PROXY__.updateTextPositionCenter(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.updateTextData = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.updateTextData");
          return this.__PROXY__.updateTextData(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.updateShapes = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.updateShapes");
          return this.__PROXY__.updateShapes(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setTextPosition = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setTextPosition");
          return this.__PROXY__.setTextPosition(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getTextPosition = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getTextPosition");
          return this.__PROXY__.getTextPosition(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setFontName = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setFontName");
          return this.__PROXY__.setFontName(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getFontName = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getFontName");
          return this.__PROXY__.getFontName(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.hasCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.hasCustomTextPosition");
          return this.__PROXY__.hasCustomTextPosition(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setCustomTextPosition");
          return this.__PROXY__.setCustomTextPosition(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getLineSpacingStyle");
          return this.__PROXY__.getLineSpacingStyle(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getLineSpacingFactor");
          return this.__PROXY__.getLineSpacingFactor(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getTextRotation = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getTextRotation");
          return this.__PROXY__.getTextRotation(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getLinearFactor = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getLinearFactor");
          return this.__PROXY__.getLinearFactor(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setLinearFactor = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setLinearFactor");
          return this.__PROXY__.setLinearFactor(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getDimscale = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getDimscale");
          return this.__PROXY__.getDimscale(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setDimscale = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setDimscale");
          return this.__PROXY__.setDimscale(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getDimBlockName = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getDimBlockName");
          return this.__PROXY__.getDimBlockName(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.hasDimensionBlockReference = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.hasDimensionBlockReference");
          return this.__PROXY__.hasDimensionBlockReference(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.isArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.isArrow1Flipped");
          return this.__PROXY__.isArrow1Flipped(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setArrow1Flipped");
          return this.__PROXY__.setArrow1Flipped(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.isArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.isArrow2Flipped");
          return this.__PROXY__.isArrow2Flipped(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setArrow2Flipped");
          return this.__PROXY__.setArrow2Flipped(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.isExtLineFix = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.isExtLineFix");
          return this.__PROXY__.isExtLineFix(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setExtLineFix = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setExtLineFix");
          return this.__PROXY__.setExtLineFix(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getExtLineFixLength");
          return this.__PROXY__.getExtLineFixLength(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setExtLineFixLength");
          return this.__PROXY__.setExtLineFixLength(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.hasOverride = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.hasOverride");
          return this.__PROXY__.hasOverride(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.init = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getStaticPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getStaticPropertyTypeIds");
          return this.__PROXY__.getStaticPropertyTypeIds(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setData = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setData");
          return this.__PROXY__.setData(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setExtensionPoint1 = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setExtensionPoint1");
          return this.__PROXY__.setExtensionPoint1(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getExtensionPoint1 = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getExtensionPoint1");
          return this.__PROXY__.getExtensionPoint1(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setExtensionPoint2 = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setExtensionPoint2");
          return this.__PROXY__.setExtensionPoint2(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getExtensionPoint2 = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getExtensionPoint2");
          return this.__PROXY__.getExtensionPoint2(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.setRotation = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.setRotation");
          return this.__PROXY__.setRotation(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.getRotation = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.getRotation");
          return this.__PROXY__.getRotation(...args);
        };
    
        // function 
        RDimRotatedEntity.prototype.print = function(...args) 
          
        {
          //print("JS: RDimRotatedEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

        // static function 
        RDimRotatedEntity.init = function() 
          
        {
          //print("JS: RDimRotatedEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimRotatedEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RDimRotatedEntity);
  }

  
  else {
    
        print("RDimRotatedEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimRotatedEntity.getRtti = function() 
          
        {
          //print("JS: RDimRotatedEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimRotatedEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RDimRotatedEntity);
  }

  
  else {
    
        print("RDimRotatedEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimRotatedEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RDimRotatedEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimRotatedEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RDimRotatedEntity);
  }

  
  else {
    
        print("RDimRotatedEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RDimRotatedEntity.INVALID_ID = 
  RDimRotatedEntity_WrapperSingletonInstance.INVALID_ID;
RDimRotatedEntity.INVALID_HANDLE = 
  RDimRotatedEntity_WrapperSingletonInstance.INVALID_HANDLE;
RDimRotatedEntity.PropertySelected = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertySelected;
RDimRotatedEntity.PropertyInvisible = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyInvisible;
RDimRotatedEntity.PropertyParentId = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyParentId;
RDimRotatedEntity.PropertyMinX = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyMinX;
RDimRotatedEntity.PropertyMinY = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyMinY;
RDimRotatedEntity.PropertyMaxX = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyMaxX;
RDimRotatedEntity.PropertyMaxY = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyMaxY;
RDimRotatedEntity.PropertySizeX = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertySizeX;
RDimRotatedEntity.PropertySizeY = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertySizeY;
RDimRotatedEntity.PropertyDefinitionPointX = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDefinitionPointX;
RDimRotatedEntity.PropertyDefinitionPointY = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDefinitionPointY;
RDimRotatedEntity.PropertyDefinitionPointZ = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDefinitionPointZ;
RDimRotatedEntity.PropertyAutoLabel = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyAutoLabel;
RDimRotatedEntity.PropertyDimaunit = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimaunit;
RDimRotatedEntity.PropertyDimadec = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimadec;
RDimRotatedEntity.PropertyDimazin = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimazin;
RDimRotatedEntity.PropertyCustom = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyCustom;
RDimRotatedEntity.PropertyHandle = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyHandle;
RDimRotatedEntity.PropertyProtected = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyProtected;
RDimRotatedEntity.PropertyWorkingSet = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyWorkingSet;
RDimRotatedEntity.PropertyType = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyType;
RDimRotatedEntity.PropertyBlock = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyBlock;
RDimRotatedEntity.PropertyLayer = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyLayer;
RDimRotatedEntity.PropertyLinetype = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyLinetype;
RDimRotatedEntity.PropertyLinetypeScale = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RDimRotatedEntity.PropertyLineweight = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyLineweight;
RDimRotatedEntity.PropertyColor = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyColor;
RDimRotatedEntity.PropertyDisplayedColor = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RDimRotatedEntity.PropertyDrawOrder = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDrawOrder;
RDimRotatedEntity.PropertyMiddleOfTextX = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyMiddleOfTextX;
RDimRotatedEntity.PropertyMiddleOfTextY = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyMiddleOfTextY;
RDimRotatedEntity.PropertyMiddleOfTextZ = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyMiddleOfTextZ;
RDimRotatedEntity.PropertyText = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyText;
RDimRotatedEntity.PropertyUpperTolerance = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyUpperTolerance;
RDimRotatedEntity.PropertyLowerTolerance = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyLowerTolerance;
RDimRotatedEntity.PropertyMeasuredValue = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyMeasuredValue;
RDimRotatedEntity.PropertyDimscale = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimscale;
RDimRotatedEntity.PropertyDimlfac = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimlfac;
RDimRotatedEntity.PropertyDimtxt = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimtxt;
RDimRotatedEntity.PropertyDimgap = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimgap;
RDimRotatedEntity.PropertyDimasz = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimasz;
RDimRotatedEntity.PropertyDimexe = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimexe;
RDimRotatedEntity.PropertyDimexo = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimexo;
RDimRotatedEntity.PropertyDimtad = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimtad;
RDimRotatedEntity.PropertyDimtih = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimtih;
RDimRotatedEntity.PropertyDimtsz = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimtsz;
RDimRotatedEntity.PropertyDimlunit = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimlunit;
RDimRotatedEntity.PropertyDimdec = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimdec;
RDimRotatedEntity.PropertyDimdsep = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimdsep;
RDimRotatedEntity.PropertyDimzin = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimzin;
RDimRotatedEntity.PropertyArchTick = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyArchTick;
RDimRotatedEntity.PropertyDimclrt = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimclrt;
RDimRotatedEntity.PropertyDimBlockName = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimBlockName;
RDimRotatedEntity.PropertyAutoTextPos = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyAutoTextPos;
RDimRotatedEntity.PropertyFontName = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyFontName;
RDimRotatedEntity.PropertyArrow1Flipped = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyArrow1Flipped;
RDimRotatedEntity.PropertyArrow2Flipped = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyArrow2Flipped;
RDimRotatedEntity.PropertyExtLineFix = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyExtLineFix;
RDimRotatedEntity.PropertyExtLineFixLength = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyExtLineFixLength;
RDimRotatedEntity.PropertyDimensionLinePosX = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimensionLinePosX;
RDimRotatedEntity.PropertyDimensionLinePosY = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimensionLinePosY;
RDimRotatedEntity.PropertyDimensionLinePosZ = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimensionLinePosZ;
RDimRotatedEntity.PropertyExtensionPoint1X = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyExtensionPoint1X;
RDimRotatedEntity.PropertyExtensionPoint1Y = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyExtensionPoint1Y;
RDimRotatedEntity.PropertyExtensionPoint1Z = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyExtensionPoint1Z;
RDimRotatedEntity.PropertyExtensionPoint2X = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyExtensionPoint2X;
RDimRotatedEntity.PropertyExtensionPoint2Y = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyExtensionPoint2Y;
RDimRotatedEntity.PropertyExtensionPoint2Z = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyExtensionPoint2Z;
RDimRotatedEntity.PropertyAngle = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyAngle;


      // copy function:
      //RDimRotatedEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimRotatedEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RDimRotatedEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      