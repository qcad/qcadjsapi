
      // auto generated
      //var self;

      // class constructor:
      function RDimRadialEntity() {
        

        // should be RDimRadialEntity_BaseJs.call(this, engine):
        //RDimRadialEntity.prototype = new RDimRadialEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimRadialEntity.getIdStatic()))) {

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
            qWarning("RDimRadialEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RDimRadialEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RDimRadialEntity);
  }

  
  else {
    
        print("RDimRadialEntity(): wrong number / type of arguments");
      
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

      //RDimRadialEntity.prototype = new RDimRadialEntity_BaseJs(engine);
      //RDimRadialEntity.prototype = new RDimRadialEntity_Wrapper(engine);
      RDimRadialEntity.prototype = new Object();

      RDimRadialEntity.prototype.toString = function() {
          //return "RDimRadialEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimRadialEntity [JS]";
        };
      RDimRadialEntity.getObjectType = function() {
        return RJSType_RDimRadialEntity.getIdStatic();
      };

      RDimRadialEntity.prototype.getObjectType = function() {
        return RJSType_RDimRadialEntity.getIdStatic();
      };

      RDimRadialEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimRadialEntity.getIdStatic()) {
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
        RDimRadialEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.move = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.update = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.clearStyleOverrides = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.clearStyleOverrides");
          return this.__PROXY__.clearStyleOverrides(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setDefinitionPoint");
          return this.__PROXY__.setDefinitionPoint(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getDefinitionPoint");
          return this.__PROXY__.getDefinitionPoint(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setText = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setText");
          return this.__PROXY__.setText(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getText = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getText");
          return this.__PROXY__.getText(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getMeasurement = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getMeasurement");
          return this.__PROXY__.getMeasurement(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getTextData = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getTextData");
          return this.__PROXY__.getTextData(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.updateBoundingBox = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.updateBoundingBox");
          return this.__PROXY__.updateBoundingBox(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.updateTextPositionCenter = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.updateTextPositionCenter");
          return this.__PROXY__.updateTextPositionCenter(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.updateTextData = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.updateTextData");
          return this.__PROXY__.updateTextData(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.updateShapes = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.updateShapes");
          return this.__PROXY__.updateShapes(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setTextPosition = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setTextPosition");
          return this.__PROXY__.setTextPosition(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getTextPosition = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getTextPosition");
          return this.__PROXY__.getTextPosition(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setFontName = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setFontName");
          return this.__PROXY__.setFontName(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getFontName = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getFontName");
          return this.__PROXY__.getFontName(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.hasCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.hasCustomTextPosition");
          return this.__PROXY__.hasCustomTextPosition(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setCustomTextPosition");
          return this.__PROXY__.setCustomTextPosition(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getLineSpacingStyle");
          return this.__PROXY__.getLineSpacingStyle(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getLineSpacingFactor");
          return this.__PROXY__.getLineSpacingFactor(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getTextRotation = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getTextRotation");
          return this.__PROXY__.getTextRotation(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getLinearFactor = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getLinearFactor");
          return this.__PROXY__.getLinearFactor(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setLinearFactor = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setLinearFactor");
          return this.__PROXY__.setLinearFactor(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getDimscale = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getDimscale");
          return this.__PROXY__.getDimscale(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setDimscale = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setDimscale");
          return this.__PROXY__.setDimscale(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getDimBlockName = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getDimBlockName");
          return this.__PROXY__.getDimBlockName(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.hasDimensionBlockReference = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.hasDimensionBlockReference");
          return this.__PROXY__.hasDimensionBlockReference(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.isArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.isArrow1Flipped");
          return this.__PROXY__.isArrow1Flipped(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setArrow1Flipped");
          return this.__PROXY__.setArrow1Flipped(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.isArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.isArrow2Flipped");
          return this.__PROXY__.isArrow2Flipped(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setArrow2Flipped");
          return this.__PROXY__.setArrow2Flipped(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.isExtLineFix = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.isExtLineFix");
          return this.__PROXY__.isExtLineFix(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setExtLineFix = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setExtLineFix");
          return this.__PROXY__.setExtLineFix(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getExtLineFixLength");
          return this.__PROXY__.getExtLineFixLength(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setExtLineFixLength");
          return this.__PROXY__.setExtLineFixLength(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.hasOverride = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.hasOverride");
          return this.__PROXY__.hasOverride(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.init = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getStaticPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getStaticPropertyTypeIds");
          return this.__PROXY__.getStaticPropertyTypeIds(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setData = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setData");
          return this.__PROXY__.setData(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.setChordPoint = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.setChordPoint");
          return this.__PROXY__.setChordPoint(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.getChordPoint = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.getChordPoint");
          return this.__PROXY__.getChordPoint(...args);
        };
    
        // function 
        RDimRadialEntity.prototype.print = function(...args) 
          
        {
          //print("JS: RDimRadialEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

        // static function 
        RDimRadialEntity.init = function() 
          
        {
          //print("JS: RDimRadialEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimRadialEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RDimRadialEntity);
  }

  
  else {
    
        print("RDimRadialEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimRadialEntity.getRtti = function() 
          
        {
          //print("JS: RDimRadialEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimRadialEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RDimRadialEntity);
  }

  
  else {
    
        print("RDimRadialEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimRadialEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RDimRadialEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimRadialEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RDimRadialEntity);
  }

  
  else {
    
        print("RDimRadialEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RDimRadialEntity.INVALID_ID = 
  RDimRadialEntity_WrapperSingletonInstance.INVALID_ID;
RDimRadialEntity.INVALID_HANDLE = 
  RDimRadialEntity_WrapperSingletonInstance.INVALID_HANDLE;
RDimRadialEntity.PropertySelected = 
  RDimRadialEntity_WrapperSingletonInstance.PropertySelected;
RDimRadialEntity.PropertyInvisible = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyInvisible;
RDimRadialEntity.PropertyParentId = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyParentId;
RDimRadialEntity.PropertyMinX = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyMinX;
RDimRadialEntity.PropertyMinY = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyMinY;
RDimRadialEntity.PropertyMaxX = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyMaxX;
RDimRadialEntity.PropertyMaxY = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyMaxY;
RDimRadialEntity.PropertySizeX = 
  RDimRadialEntity_WrapperSingletonInstance.PropertySizeX;
RDimRadialEntity.PropertySizeY = 
  RDimRadialEntity_WrapperSingletonInstance.PropertySizeY;
RDimRadialEntity.PropertyDefinitionPointX = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDefinitionPointX;
RDimRadialEntity.PropertyDefinitionPointY = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDefinitionPointY;
RDimRadialEntity.PropertyDefinitionPointZ = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDefinitionPointZ;
RDimRadialEntity.PropertyAutoLabel = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyAutoLabel;
RDimRadialEntity.PropertyDimaunit = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimaunit;
RDimRadialEntity.PropertyDimadec = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimadec;
RDimRadialEntity.PropertyDimazin = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimazin;
RDimRadialEntity.PropertyCustom = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyCustom;
RDimRadialEntity.PropertyHandle = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyHandle;
RDimRadialEntity.PropertyProtected = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyProtected;
RDimRadialEntity.PropertyWorkingSet = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyWorkingSet;
RDimRadialEntity.PropertyType = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyType;
RDimRadialEntity.PropertyBlock = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyBlock;
RDimRadialEntity.PropertyLayer = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyLayer;
RDimRadialEntity.PropertyLinetype = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyLinetype;
RDimRadialEntity.PropertyLinetypeScale = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RDimRadialEntity.PropertyLineweight = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyLineweight;
RDimRadialEntity.PropertyColor = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyColor;
RDimRadialEntity.PropertyDisplayedColor = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RDimRadialEntity.PropertyDrawOrder = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDrawOrder;
RDimRadialEntity.PropertyMiddleOfTextX = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyMiddleOfTextX;
RDimRadialEntity.PropertyMiddleOfTextY = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyMiddleOfTextY;
RDimRadialEntity.PropertyMiddleOfTextZ = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyMiddleOfTextZ;
RDimRadialEntity.PropertyText = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyText;
RDimRadialEntity.PropertyUpperTolerance = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyUpperTolerance;
RDimRadialEntity.PropertyLowerTolerance = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyLowerTolerance;
RDimRadialEntity.PropertyMeasuredValue = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyMeasuredValue;
RDimRadialEntity.PropertyDimscale = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimscale;
RDimRadialEntity.PropertyDimlfac = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimlfac;
RDimRadialEntity.PropertyDimtxt = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimtxt;
RDimRadialEntity.PropertyDimgap = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimgap;
RDimRadialEntity.PropertyDimasz = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimasz;
RDimRadialEntity.PropertyDimexe = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimexe;
RDimRadialEntity.PropertyDimexo = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimexo;
RDimRadialEntity.PropertyDimtad = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimtad;
RDimRadialEntity.PropertyDimtih = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimtih;
RDimRadialEntity.PropertyDimtsz = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimtsz;
RDimRadialEntity.PropertyDimlunit = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimlunit;
RDimRadialEntity.PropertyDimdec = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimdec;
RDimRadialEntity.PropertyDimdsep = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimdsep;
RDimRadialEntity.PropertyDimzin = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimzin;
RDimRadialEntity.PropertyArchTick = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyArchTick;
RDimRadialEntity.PropertyDimclrt = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimclrt;
RDimRadialEntity.PropertyDimBlockName = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyDimBlockName;
RDimRadialEntity.PropertyAutoTextPos = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyAutoTextPos;
RDimRadialEntity.PropertyFontName = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyFontName;
RDimRadialEntity.PropertyArrow1Flipped = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyArrow1Flipped;
RDimRadialEntity.PropertyArrow2Flipped = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyArrow2Flipped;
RDimRadialEntity.PropertyExtLineFix = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyExtLineFix;
RDimRadialEntity.PropertyExtLineFixLength = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyExtLineFixLength;
RDimRadialEntity.PropertyCenterPointX = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyCenterPointX;
RDimRadialEntity.PropertyCenterPointY = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyCenterPointY;
RDimRadialEntity.PropertyCenterPointZ = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyCenterPointZ;
RDimRadialEntity.PropertyChordPointX = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyChordPointX;
RDimRadialEntity.PropertyChordPointY = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyChordPointY;
RDimRadialEntity.PropertyChordPointZ = 
  RDimRadialEntity_WrapperSingletonInstance.PropertyChordPointZ;


      // copy function:
      //RDimRadialEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimRadialEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RDimRadialEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      