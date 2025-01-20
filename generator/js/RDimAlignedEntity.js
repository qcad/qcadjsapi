
      // auto generated
      //var self;

      // class constructor:
      function RDimAlignedEntity() {
        

        // should be RDimAlignedEntity_BaseJs.call(this, engine):
        //RDimAlignedEntity.prototype = new RDimAlignedEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimAlignedEntity.getIdStatic()))) {

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
            qWarning("RDimAlignedEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RDimAlignedEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RDimAlignedEntity);
  }

  
  else {
    
        print("RDimAlignedEntity(): wrong number / type of arguments");
      
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

      //RDimAlignedEntity.prototype = new RDimAlignedEntity_BaseJs(engine);
      //RDimAlignedEntity.prototype = new RDimAlignedEntity_Wrapper(engine);
      RDimAlignedEntity.prototype = new Object();

      RDimAlignedEntity.prototype.toString = function() {
          //return "RDimAlignedEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimAlignedEntity [JS]";
        };
      RDimAlignedEntity.getObjectType = function() {
        return RJSType_RDimAlignedEntity.getIdStatic();
      };

      RDimAlignedEntity.prototype.getObjectType = function() {
        return RJSType_RDimAlignedEntity.getIdStatic();
      };

      RDimAlignedEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimAlignedEntity.getIdStatic()) {
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
        RDimAlignedEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.move = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.update = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.clearStyleOverrides = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.clearStyleOverrides");
          return this.__PROXY__.clearStyleOverrides(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setDefinitionPoint");
          return this.__PROXY__.setDefinitionPoint(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getDefinitionPoint");
          return this.__PROXY__.getDefinitionPoint(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setText = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setText");
          return this.__PROXY__.setText(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getText = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getText");
          return this.__PROXY__.getText(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getMeasurement = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getMeasurement");
          return this.__PROXY__.getMeasurement(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getTextData = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getTextData");
          return this.__PROXY__.getTextData(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.updateBoundingBox = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.updateBoundingBox");
          return this.__PROXY__.updateBoundingBox(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.updateTextPositionCenter = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.updateTextPositionCenter");
          return this.__PROXY__.updateTextPositionCenter(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.updateTextData = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.updateTextData");
          return this.__PROXY__.updateTextData(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.updateShapes = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.updateShapes");
          return this.__PROXY__.updateShapes(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setTextPosition = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setTextPosition");
          return this.__PROXY__.setTextPosition(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getTextPosition = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getTextPosition");
          return this.__PROXY__.getTextPosition(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setFontName = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setFontName");
          return this.__PROXY__.setFontName(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getFontName = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getFontName");
          return this.__PROXY__.getFontName(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.hasCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.hasCustomTextPosition");
          return this.__PROXY__.hasCustomTextPosition(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setCustomTextPosition");
          return this.__PROXY__.setCustomTextPosition(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getLineSpacingStyle");
          return this.__PROXY__.getLineSpacingStyle(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getLineSpacingFactor");
          return this.__PROXY__.getLineSpacingFactor(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getTextRotation = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getTextRotation");
          return this.__PROXY__.getTextRotation(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getLinearFactor = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getLinearFactor");
          return this.__PROXY__.getLinearFactor(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setLinearFactor = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setLinearFactor");
          return this.__PROXY__.setLinearFactor(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getDimscale = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getDimscale");
          return this.__PROXY__.getDimscale(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setDimscale = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setDimscale");
          return this.__PROXY__.setDimscale(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getDimBlockName = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getDimBlockName");
          return this.__PROXY__.getDimBlockName(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.hasDimensionBlockReference = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.hasDimensionBlockReference");
          return this.__PROXY__.hasDimensionBlockReference(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.isArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.isArrow1Flipped");
          return this.__PROXY__.isArrow1Flipped(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setArrow1Flipped");
          return this.__PROXY__.setArrow1Flipped(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.isArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.isArrow2Flipped");
          return this.__PROXY__.isArrow2Flipped(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setArrow2Flipped");
          return this.__PROXY__.setArrow2Flipped(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.isExtLineFix = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.isExtLineFix");
          return this.__PROXY__.isExtLineFix(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setExtLineFix = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setExtLineFix");
          return this.__PROXY__.setExtLineFix(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getExtLineFixLength");
          return this.__PROXY__.getExtLineFixLength(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setExtLineFixLength");
          return this.__PROXY__.setExtLineFixLength(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.hasOverride = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.hasOverride");
          return this.__PROXY__.hasOverride(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.init = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getStaticPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getStaticPropertyTypeIds");
          return this.__PROXY__.getStaticPropertyTypeIds(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setData = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setData");
          return this.__PROXY__.setData(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setExtensionPoint1 = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setExtensionPoint1");
          return this.__PROXY__.setExtensionPoint1(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getExtensionPoint1 = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getExtensionPoint1");
          return this.__PROXY__.getExtensionPoint1(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.setExtensionPoint2 = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.setExtensionPoint2");
          return this.__PROXY__.setExtensionPoint2(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getExtensionPoint2 = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getExtensionPoint2");
          return this.__PROXY__.getExtensionPoint2(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.getAngle = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.getAngle");
          return this.__PROXY__.getAngle(...args);
        };
    
        // function 
        RDimAlignedEntity.prototype.print = function(...args) 
          
        {
          //print("JS: RDimAlignedEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

        // static function 
        RDimAlignedEntity.init = function() 
          
        {
          //print("JS: RDimAlignedEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimAlignedEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RDimAlignedEntity);
  }

  
  else {
    
        print("RDimAlignedEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAlignedEntity.getRtti = function() 
          
        {
          //print("JS: RDimAlignedEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimAlignedEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RDimAlignedEntity);
  }

  
  else {
    
        print("RDimAlignedEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAlignedEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RDimAlignedEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimAlignedEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RDimAlignedEntity);
  }

  
  else {
    
        print("RDimAlignedEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RDimAlignedEntity.INVALID_ID = 
  RDimAlignedEntity_WrapperSingletonInstance.INVALID_ID;
RDimAlignedEntity.INVALID_HANDLE = 
  RDimAlignedEntity_WrapperSingletonInstance.INVALID_HANDLE;
RDimAlignedEntity.PropertySelected = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertySelected;
RDimAlignedEntity.PropertyInvisible = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyInvisible;
RDimAlignedEntity.PropertyParentId = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyParentId;
RDimAlignedEntity.PropertyMinX = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyMinX;
RDimAlignedEntity.PropertyMinY = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyMinY;
RDimAlignedEntity.PropertyMaxX = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyMaxX;
RDimAlignedEntity.PropertyMaxY = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyMaxY;
RDimAlignedEntity.PropertySizeX = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertySizeX;
RDimAlignedEntity.PropertySizeY = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertySizeY;
RDimAlignedEntity.PropertyDefinitionPointX = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDefinitionPointX;
RDimAlignedEntity.PropertyDefinitionPointY = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDefinitionPointY;
RDimAlignedEntity.PropertyDefinitionPointZ = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDefinitionPointZ;
RDimAlignedEntity.PropertyAutoLabel = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyAutoLabel;
RDimAlignedEntity.PropertyDimaunit = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimaunit;
RDimAlignedEntity.PropertyDimadec = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimadec;
RDimAlignedEntity.PropertyDimazin = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimazin;
RDimAlignedEntity.PropertyCustom = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyCustom;
RDimAlignedEntity.PropertyHandle = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyHandle;
RDimAlignedEntity.PropertyProtected = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyProtected;
RDimAlignedEntity.PropertyWorkingSet = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyWorkingSet;
RDimAlignedEntity.PropertyType = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyType;
RDimAlignedEntity.PropertyBlock = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyBlock;
RDimAlignedEntity.PropertyLayer = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyLayer;
RDimAlignedEntity.PropertyLinetype = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyLinetype;
RDimAlignedEntity.PropertyLinetypeScale = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RDimAlignedEntity.PropertyLineweight = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyLineweight;
RDimAlignedEntity.PropertyColor = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyColor;
RDimAlignedEntity.PropertyDisplayedColor = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RDimAlignedEntity.PropertyDrawOrder = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDrawOrder;
RDimAlignedEntity.PropertyMiddleOfTextX = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyMiddleOfTextX;
RDimAlignedEntity.PropertyMiddleOfTextY = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyMiddleOfTextY;
RDimAlignedEntity.PropertyMiddleOfTextZ = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyMiddleOfTextZ;
RDimAlignedEntity.PropertyText = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyText;
RDimAlignedEntity.PropertyUpperTolerance = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyUpperTolerance;
RDimAlignedEntity.PropertyLowerTolerance = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyLowerTolerance;
RDimAlignedEntity.PropertyMeasuredValue = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyMeasuredValue;
RDimAlignedEntity.PropertyDimscale = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimscale;
RDimAlignedEntity.PropertyDimlfac = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimlfac;
RDimAlignedEntity.PropertyDimtxt = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimtxt;
RDimAlignedEntity.PropertyDimgap = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimgap;
RDimAlignedEntity.PropertyDimasz = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimasz;
RDimAlignedEntity.PropertyDimexe = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimexe;
RDimAlignedEntity.PropertyDimexo = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimexo;
RDimAlignedEntity.PropertyDimtad = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimtad;
RDimAlignedEntity.PropertyDimtih = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimtih;
RDimAlignedEntity.PropertyDimtsz = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimtsz;
RDimAlignedEntity.PropertyDimlunit = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimlunit;
RDimAlignedEntity.PropertyDimdec = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimdec;
RDimAlignedEntity.PropertyDimdsep = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimdsep;
RDimAlignedEntity.PropertyDimzin = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimzin;
RDimAlignedEntity.PropertyArchTick = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyArchTick;
RDimAlignedEntity.PropertyDimclrt = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimclrt;
RDimAlignedEntity.PropertyDimBlockName = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimBlockName;
RDimAlignedEntity.PropertyAutoTextPos = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyAutoTextPos;
RDimAlignedEntity.PropertyFontName = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyFontName;
RDimAlignedEntity.PropertyArrow1Flipped = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyArrow1Flipped;
RDimAlignedEntity.PropertyArrow2Flipped = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyArrow2Flipped;
RDimAlignedEntity.PropertyExtLineFix = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyExtLineFix;
RDimAlignedEntity.PropertyExtLineFixLength = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyExtLineFixLength;
RDimAlignedEntity.PropertyDimensionLinePosX = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimensionLinePosX;
RDimAlignedEntity.PropertyDimensionLinePosY = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimensionLinePosY;
RDimAlignedEntity.PropertyDimensionLinePosZ = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyDimensionLinePosZ;
RDimAlignedEntity.PropertyExtensionPoint1X = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyExtensionPoint1X;
RDimAlignedEntity.PropertyExtensionPoint1Y = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyExtensionPoint1Y;
RDimAlignedEntity.PropertyExtensionPoint1Z = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyExtensionPoint1Z;
RDimAlignedEntity.PropertyExtensionPoint2X = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyExtensionPoint2X;
RDimAlignedEntity.PropertyExtensionPoint2Y = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyExtensionPoint2Y;
RDimAlignedEntity.PropertyExtensionPoint2Z = 
  RDimAlignedEntity_WrapperSingletonInstance.PropertyExtensionPoint2Z;


      // copy function:
      //RDimAlignedEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimAlignedEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RDimAlignedEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      