
      // auto generated
      //var self;

      // class constructor:
      function RPolyMeshEntity() {
        

        // should be RPolyMeshEntity_BaseJs.call(this, engine):
        //RPolyMeshEntity.prototype = new RPolyMeshEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPolyMeshEntity.getIdStatic()))) {

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
            qWarning("RPolyMeshEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RPolyMeshEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RPolyMeshEntity);
  }

  
  else {
    
        print("RPolyMeshEntity(): wrong number / type of arguments");
      
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

      //RPolyMeshEntity.prototype = new RPolyMeshEntity_BaseJs(engine);
      //RPolyMeshEntity.prototype = new RPolyMeshEntity_Wrapper(engine);
      RPolyMeshEntity.prototype = new Object();

      RPolyMeshEntity.prototype.toString = function() {
          //return "RPolyMeshEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPolyMeshEntity [JS]";
        };
      RPolyMeshEntity.getObjectType = function() {
        return RJSType_RPolyMeshEntity.getIdStatic();
      };

      RPolyMeshEntity.prototype.getObjectType = function() {
        return RJSType_RPolyMeshEntity.getIdStatic();
      };

      RPolyMeshEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPolyMeshEntity.getIdStatic()) {
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
        RPolyMeshEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.move = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.update = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.init = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getStaticPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getStaticPropertyTypeIds");
          return this.__PROXY__.getStaticPropertyTypeIds(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.cloneToPolyMeshEntity = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.cloneToPolyMeshEntity");
          return this.__PROXY__.cloneToPolyMeshEntity(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getVertices = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getVertices");
          return this.__PROXY__.getVertices(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.countVertices = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.countVertices");
          return this.__PROXY__.countVertices(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getVertexAt = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getVertexAt");
          return this.__PROXY__.getVertexAt(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getFaces = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getFaces");
          return this.__PROXY__.getFaces(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.countFaces = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.countFaces");
          return this.__PROXY__.countFaces(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getFace = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getFace");
          return this.__PROXY__.getFace(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.isTriangleMesh = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.isTriangleMesh");
          return this.__PROXY__.isTriangleMesh(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.getTriangles = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.getTriangles");
          return this.__PROXY__.getTriangles(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.hasProxy = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.hasProxy");
          return this.__PROXY__.hasProxy(...args);
        };
    
        // function 
        RPolyMeshEntity.prototype.print = function(...args) 
          
        {
          //print("JS: RPolyMeshEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

        // static function 
        RPolyMeshEntity.init = function() 
          
        {
          //print("JS: RPolyMeshEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPolyMeshEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RPolyMeshEntity);
  }

  
  else {
    
        print("RPolyMeshEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyMeshEntity.getRtti = function() 
          
        {
          //print("JS: RPolyMeshEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPolyMeshEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RPolyMeshEntity);
  }

  
  else {
    
        print("RPolyMeshEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyMeshEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RPolyMeshEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPolyMeshEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RPolyMeshEntity);
  }

  
  else {
    
        print("RPolyMeshEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolyMeshEntity.hasProxy = function() 
          
        {
          //print("JS: RPolyMeshEntity.hasProxy");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPolyMeshEntity_WrapperSingletonInstance.hasProxy(
                  
                );
              

        //copyProperties(this, wrapper, RPolyMeshEntity);
  }

  
  else {
    
        print("RPolyMeshEntity.hasProxy(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RPolyMeshEntity.INVALID_ID = 
  RPolyMeshEntity_WrapperSingletonInstance.INVALID_ID;
RPolyMeshEntity.INVALID_HANDLE = 
  RPolyMeshEntity_WrapperSingletonInstance.INVALID_HANDLE;
RPolyMeshEntity.PropertySelected = 
  RPolyMeshEntity_WrapperSingletonInstance.PropertySelected;
RPolyMeshEntity.PropertyInvisible = 
  RPolyMeshEntity_WrapperSingletonInstance.PropertyInvisible;
RPolyMeshEntity.PropertyParentId = 
  RPolyMeshEntity_WrapperSingletonInstance.PropertyParentId;
RPolyMeshEntity.PropertyMinX = 
  RPolyMeshEntity_WrapperSingletonInstance.PropertyMinX;
RPolyMeshEntity.PropertyMinY = 
  RPolyMeshEntity_WrapperSingletonInstance.PropertyMinY;
RPolyMeshEntity.PropertyMaxX = 
  RPolyMeshEntity_WrapperSingletonInstance.PropertyMaxX;
RPolyMeshEntity.PropertyMaxY = 
  RPolyMeshEntity_WrapperSingletonInstance.PropertyMaxY;
RPolyMeshEntity.PropertySizeX = 
  RPolyMeshEntity_WrapperSingletonInstance.PropertySizeX;
RPolyMeshEntity.PropertySizeY = 
  RPolyMeshEntity_WrapperSingletonInstance.PropertySizeY;
RPolyMeshEntity.PropertyCustom = 
  RPolyMeshEntity_WrapperSingletonInstance.PropertyCustom;
RPolyMeshEntity.PropertyHandle = 
  RPolyMeshEntity_WrapperSingletonInstance.PropertyHandle;
RPolyMeshEntity.PropertyProtected = 
  RPolyMeshEntity_WrapperSingletonInstance.PropertyProtected;
RPolyMeshEntity.PropertyWorkingSet = 
  RPolyMeshEntity_WrapperSingletonInstance.PropertyWorkingSet;
RPolyMeshEntity.PropertyType = 
  RPolyMeshEntity_WrapperSingletonInstance.PropertyType;
RPolyMeshEntity.PropertyBlock = 
  RPolyMeshEntity_WrapperSingletonInstance.PropertyBlock;
RPolyMeshEntity.PropertyLayer = 
  RPolyMeshEntity_WrapperSingletonInstance.PropertyLayer;
RPolyMeshEntity.PropertyLinetype = 
  RPolyMeshEntity_WrapperSingletonInstance.PropertyLinetype;
RPolyMeshEntity.PropertyLinetypeScale = 
  RPolyMeshEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RPolyMeshEntity.PropertyLineweight = 
  RPolyMeshEntity_WrapperSingletonInstance.PropertyLineweight;
RPolyMeshEntity.PropertyColor = 
  RPolyMeshEntity_WrapperSingletonInstance.PropertyColor;
RPolyMeshEntity.PropertyDisplayedColor = 
  RPolyMeshEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RPolyMeshEntity.PropertyDrawOrder = 
  RPolyMeshEntity_WrapperSingletonInstance.PropertyDrawOrder;
RPolyMeshEntity.PropertyVertexCount = 
  RPolyMeshEntity_WrapperSingletonInstance.PropertyVertexCount;
RPolyMeshEntity.PropertyFaceCount = 
  RPolyMeshEntity_WrapperSingletonInstance.PropertyFaceCount;


      // copy function:
      //RPolyMeshEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPolyMeshEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RPolyMeshEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      