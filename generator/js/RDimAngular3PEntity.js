
      // auto generated
      //var self;

      // class constructor:
      function RDimAngular3PEntity() {
        

        // should be RDimAngular3PEntity_BaseJs.call(this, engine):
        //RDimAngular3PEntity.prototype = new RDimAngular3PEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimAngular3PEntity.getIdStatic()))) {

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
            qWarning("RDimAngular3PEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RDimAngular3PEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RDimAngular3PEntity);
  }

  
  else {
    
        print("RDimAngular3PEntity(): wrong number / type of arguments");
      
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

      //RDimAngular3PEntity.prototype = new RDimAngular3PEntity_BaseJs(engine);
      //RDimAngular3PEntity.prototype = new RDimAngular3PEntity_Wrapper(engine);
      RDimAngular3PEntity.prototype = new Object();

      RDimAngular3PEntity.prototype.toString = function() {
          //return "RDimAngular3PEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimAngular3PEntity [JS]";
        };
      RDimAngular3PEntity.getObjectType = function() {
        return RJSType_RDimAngular3PEntity.getIdStatic();
      };

      RDimAngular3PEntity.prototype.getObjectType = function() {
        return RJSType_RDimAngular3PEntity.getIdStatic();
      };

      RDimAngular3PEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimAngular3PEntity.getIdStatic()) {
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
        
          if (t===RJSType_RDimAngularEntity.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RDimAngular3PEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.move = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.update = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.clearStyleOverrides = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.clearStyleOverrides");
          return this.__PROXY__.clearStyleOverrides(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setDefinitionPoint");
          return this.__PROXY__.setDefinitionPoint(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getDefinitionPoint");
          return this.__PROXY__.getDefinitionPoint(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setText = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setText");
          return this.__PROXY__.setText(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getText = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getText");
          return this.__PROXY__.getText(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getMeasurement = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getMeasurement");
          return this.__PROXY__.getMeasurement(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getTextData = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getTextData");
          return this.__PROXY__.getTextData(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.updateBoundingBox = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.updateBoundingBox");
          return this.__PROXY__.updateBoundingBox(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.updateTextPositionCenter = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.updateTextPositionCenter");
          return this.__PROXY__.updateTextPositionCenter(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.updateTextData = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.updateTextData");
          return this.__PROXY__.updateTextData(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.updateShapes = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.updateShapes");
          return this.__PROXY__.updateShapes(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setTextPosition = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setTextPosition");
          return this.__PROXY__.setTextPosition(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getTextPosition = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getTextPosition");
          return this.__PROXY__.getTextPosition(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setFontName = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setFontName");
          return this.__PROXY__.setFontName(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getFontName = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getFontName");
          return this.__PROXY__.getFontName(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.hasCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.hasCustomTextPosition");
          return this.__PROXY__.hasCustomTextPosition(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setCustomTextPosition");
          return this.__PROXY__.setCustomTextPosition(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getLineSpacingStyle");
          return this.__PROXY__.getLineSpacingStyle(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getLineSpacingFactor");
          return this.__PROXY__.getLineSpacingFactor(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getTextRotation = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getTextRotation");
          return this.__PROXY__.getTextRotation(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getLinearFactor = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getLinearFactor");
          return this.__PROXY__.getLinearFactor(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setLinearFactor = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setLinearFactor");
          return this.__PROXY__.setLinearFactor(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getDimscale = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getDimscale");
          return this.__PROXY__.getDimscale(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setDimscale = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setDimscale");
          return this.__PROXY__.setDimscale(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getDimBlockName = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getDimBlockName");
          return this.__PROXY__.getDimBlockName(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.hasDimensionBlockReference = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.hasDimensionBlockReference");
          return this.__PROXY__.hasDimensionBlockReference(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.isArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.isArrow1Flipped");
          return this.__PROXY__.isArrow1Flipped(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setArrow1Flipped");
          return this.__PROXY__.setArrow1Flipped(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.isArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.isArrow2Flipped");
          return this.__PROXY__.isArrow2Flipped(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setArrow2Flipped");
          return this.__PROXY__.setArrow2Flipped(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.isExtLineFix = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.isExtLineFix");
          return this.__PROXY__.isExtLineFix(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setExtLineFix = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setExtLineFix");
          return this.__PROXY__.setExtLineFix(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getExtLineFixLength");
          return this.__PROXY__.getExtLineFixLength(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setExtLineFixLength");
          return this.__PROXY__.setExtLineFixLength(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.hasOverride = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.hasOverride");
          return this.__PROXY__.hasOverride(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setExtensionLine1End = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setExtensionLine1End");
          return this.__PROXY__.setExtensionLine1End(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getExtensionLine1End = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getExtensionLine1End");
          return this.__PROXY__.getExtensionLine1End(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setExtensionLine2End = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setExtensionLine2End");
          return this.__PROXY__.setExtensionLine2End(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getExtensionLine2End = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getExtensionLine2End");
          return this.__PROXY__.getExtensionLine2End(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setDimArcPosition = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setDimArcPosition");
          return this.__PROXY__.setDimArcPosition(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getDimArcPosition = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getDimArcPosition");
          return this.__PROXY__.getDimArcPosition(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getDimensionArc = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getDimensionArc");
          return this.__PROXY__.getDimensionArc(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.init = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getStaticPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getStaticPropertyTypeIds");
          return this.__PROXY__.getStaticPropertyTypeIds(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setData = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setData");
          return this.__PROXY__.setData(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.setCenter = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.setCenter");
          return this.__PROXY__.setCenter(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.getCenter = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.getCenter");
          return this.__PROXY__.getCenter(...args);
        };
    
        // function 
        RDimAngular3PEntity.prototype.print = function(...args) 
          
        {
          //print("JS: RDimAngular3PEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

        // static function 
        RDimAngular3PEntity.init = function() 
          
        {
          //print("JS: RDimAngular3PEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimAngular3PEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RDimAngular3PEntity);
  }

  
  else {
    
        print("RDimAngular3PEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAngular3PEntity.getRtti = function() 
          
        {
          //print("JS: RDimAngular3PEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimAngular3PEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RDimAngular3PEntity);
  }

  
  else {
    
        print("RDimAngular3PEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAngular3PEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RDimAngular3PEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimAngular3PEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RDimAngular3PEntity);
  }

  
  else {
    
        print("RDimAngular3PEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RDimAngular3PEntity.INVALID_ID = 
  RDimAngular3PEntity_WrapperSingletonInstance.INVALID_ID;
RDimAngular3PEntity.INVALID_HANDLE = 
  RDimAngular3PEntity_WrapperSingletonInstance.INVALID_HANDLE;
RDimAngular3PEntity.PropertySelected = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertySelected;
RDimAngular3PEntity.PropertyInvisible = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyInvisible;
RDimAngular3PEntity.PropertyParentId = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyParentId;
RDimAngular3PEntity.PropertyMinX = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyMinX;
RDimAngular3PEntity.PropertyMinY = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyMinY;
RDimAngular3PEntity.PropertyMaxX = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyMaxX;
RDimAngular3PEntity.PropertyMaxY = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyMaxY;
RDimAngular3PEntity.PropertySizeX = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertySizeX;
RDimAngular3PEntity.PropertySizeY = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertySizeY;
RDimAngular3PEntity.PropertyDefinitionPointX = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDefinitionPointX;
RDimAngular3PEntity.PropertyDefinitionPointY = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDefinitionPointY;
RDimAngular3PEntity.PropertyDefinitionPointZ = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDefinitionPointZ;
RDimAngular3PEntity.PropertyAutoLabel = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyAutoLabel;
RDimAngular3PEntity.PropertyDimlfac = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimlfac;
RDimAngular3PEntity.PropertyDimlunit = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimlunit;
RDimAngular3PEntity.PropertyDimdec = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimdec;
RDimAngular3PEntity.PropertyDimzin = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimzin;
RDimAngular3PEntity.PropertyCustom = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyCustom;
RDimAngular3PEntity.PropertyHandle = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyHandle;
RDimAngular3PEntity.PropertyProtected = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyProtected;
RDimAngular3PEntity.PropertyWorkingSet = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyWorkingSet;
RDimAngular3PEntity.PropertyType = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyType;
RDimAngular3PEntity.PropertyBlock = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyBlock;
RDimAngular3PEntity.PropertyLayer = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyLayer;
RDimAngular3PEntity.PropertyLinetype = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyLinetype;
RDimAngular3PEntity.PropertyLinetypeScale = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RDimAngular3PEntity.PropertyLineweight = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyLineweight;
RDimAngular3PEntity.PropertyColor = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyColor;
RDimAngular3PEntity.PropertyDisplayedColor = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RDimAngular3PEntity.PropertyDrawOrder = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDrawOrder;
RDimAngular3PEntity.PropertyMiddleOfTextX = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyMiddleOfTextX;
RDimAngular3PEntity.PropertyMiddleOfTextY = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyMiddleOfTextY;
RDimAngular3PEntity.PropertyMiddleOfTextZ = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyMiddleOfTextZ;
RDimAngular3PEntity.PropertyText = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyText;
RDimAngular3PEntity.PropertyUpperTolerance = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyUpperTolerance;
RDimAngular3PEntity.PropertyLowerTolerance = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyLowerTolerance;
RDimAngular3PEntity.PropertyMeasuredValue = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyMeasuredValue;
RDimAngular3PEntity.PropertyDimscale = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimscale;
RDimAngular3PEntity.PropertyDimtxt = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimtxt;
RDimAngular3PEntity.PropertyDimgap = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimgap;
RDimAngular3PEntity.PropertyDimasz = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimasz;
RDimAngular3PEntity.PropertyDimexe = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimexe;
RDimAngular3PEntity.PropertyDimexo = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimexo;
RDimAngular3PEntity.PropertyDimtad = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimtad;
RDimAngular3PEntity.PropertyDimtih = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimtih;
RDimAngular3PEntity.PropertyDimtsz = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimtsz;
RDimAngular3PEntity.PropertyDimdsep = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimdsep;
RDimAngular3PEntity.PropertyDimaunit = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimaunit;
RDimAngular3PEntity.PropertyDimadec = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimadec;
RDimAngular3PEntity.PropertyDimazin = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimazin;
RDimAngular3PEntity.PropertyArchTick = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyArchTick;
RDimAngular3PEntity.PropertyDimclrt = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimclrt;
RDimAngular3PEntity.PropertyDimBlockName = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimBlockName;
RDimAngular3PEntity.PropertyAutoTextPos = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyAutoTextPos;
RDimAngular3PEntity.PropertyFontName = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyFontName;
RDimAngular3PEntity.PropertyArrow1Flipped = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyArrow1Flipped;
RDimAngular3PEntity.PropertyArrow2Flipped = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyArrow2Flipped;
RDimAngular3PEntity.PropertyExtLineFix = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyExtLineFix;
RDimAngular3PEntity.PropertyExtLineFixLength = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyExtLineFixLength;
RDimAngular3PEntity.PropertyCenterX = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyCenterX;
RDimAngular3PEntity.PropertyCenterY = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyCenterY;
RDimAngular3PEntity.PropertyCenterZ = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyCenterZ;
RDimAngular3PEntity.PropertyExtensionLine1EndX = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyExtensionLine1EndX;
RDimAngular3PEntity.PropertyExtensionLine1EndY = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyExtensionLine1EndY;
RDimAngular3PEntity.PropertyExtensionLine1EndZ = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyExtensionLine1EndZ;
RDimAngular3PEntity.PropertyExtensionLine2EndX = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyExtensionLine2EndX;
RDimAngular3PEntity.PropertyExtensionLine2EndY = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyExtensionLine2EndY;
RDimAngular3PEntity.PropertyExtensionLine2EndZ = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyExtensionLine2EndZ;
RDimAngular3PEntity.PropertyDimArcPositionX = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimArcPositionX;
RDimAngular3PEntity.PropertyDimArcPositionY = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimArcPositionY;
RDimAngular3PEntity.PropertyDimArcPositionZ = 
  RDimAngular3PEntity_WrapperSingletonInstance.PropertyDimArcPositionZ;


      // copy function:
      //RDimAngular3PEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimAngular3PEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RDimAngular3PEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      