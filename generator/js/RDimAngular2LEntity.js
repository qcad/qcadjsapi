
      // auto generated
      //var self;

      // class constructor:
      function RDimAngular2LEntity() {
        

        // should be RDimAngular2LEntity_BaseJs.call(this, engine):
        //RDimAngular2LEntity.prototype = new RDimAngular2LEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimAngular2LEntity.getIdStatic()))) {

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
            qWarning("RDimAngular2LEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RDimAngular2LEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RDimAngular2LEntity);
  }

  
  else {
    
        print("RDimAngular2LEntity(): wrong number / type of arguments");
      
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

      //RDimAngular2LEntity.prototype = new RDimAngular2LEntity_BaseJs(engine);
      //RDimAngular2LEntity.prototype = new RDimAngular2LEntity_Wrapper(engine);
      RDimAngular2LEntity.prototype = new Object();

      RDimAngular2LEntity.prototype.toString = function() {
          //return "RDimAngular2LEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimAngular2LEntity [JS]";
        };
      RDimAngular2LEntity.getObjectType = function() {
        return RJSType_RDimAngular2LEntity.getIdStatic();
      };

      RDimAngular2LEntity.prototype.getObjectType = function() {
        return RJSType_RDimAngular2LEntity.getIdStatic();
      };

      RDimAngular2LEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimAngular2LEntity.getIdStatic()) {
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
        RDimAngular2LEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.move = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.update = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.clearStyleOverrides = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.clearStyleOverrides");
          return this.__PROXY__.clearStyleOverrides(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setDefinitionPoint");
          return this.__PROXY__.setDefinitionPoint(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getDefinitionPoint");
          return this.__PROXY__.getDefinitionPoint(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setText = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setText");
          return this.__PROXY__.setText(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getText = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getText");
          return this.__PROXY__.getText(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getMeasurement = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getMeasurement");
          return this.__PROXY__.getMeasurement(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getTextData = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getTextData");
          return this.__PROXY__.getTextData(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.updateBoundingBox = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.updateBoundingBox");
          return this.__PROXY__.updateBoundingBox(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.updateTextPositionCenter = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.updateTextPositionCenter");
          return this.__PROXY__.updateTextPositionCenter(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.updateTextData = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.updateTextData");
          return this.__PROXY__.updateTextData(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.updateShapes = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.updateShapes");
          return this.__PROXY__.updateShapes(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setTextPosition = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setTextPosition");
          return this.__PROXY__.setTextPosition(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getTextPosition = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getTextPosition");
          return this.__PROXY__.getTextPosition(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setFontName = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setFontName");
          return this.__PROXY__.setFontName(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getFontName = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getFontName");
          return this.__PROXY__.getFontName(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.hasCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.hasCustomTextPosition");
          return this.__PROXY__.hasCustomTextPosition(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setCustomTextPosition");
          return this.__PROXY__.setCustomTextPosition(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getLineSpacingStyle");
          return this.__PROXY__.getLineSpacingStyle(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getLineSpacingFactor");
          return this.__PROXY__.getLineSpacingFactor(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getTextRotation = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getTextRotation");
          return this.__PROXY__.getTextRotation(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getLinearFactor = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getLinearFactor");
          return this.__PROXY__.getLinearFactor(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setLinearFactor = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setLinearFactor");
          return this.__PROXY__.setLinearFactor(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getDimscale = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getDimscale");
          return this.__PROXY__.getDimscale(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setDimscale = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setDimscale");
          return this.__PROXY__.setDimscale(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getDimBlockName = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getDimBlockName");
          return this.__PROXY__.getDimBlockName(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.hasDimensionBlockReference = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.hasDimensionBlockReference");
          return this.__PROXY__.hasDimensionBlockReference(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.isArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.isArrow1Flipped");
          return this.__PROXY__.isArrow1Flipped(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setArrow1Flipped");
          return this.__PROXY__.setArrow1Flipped(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.isArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.isArrow2Flipped");
          return this.__PROXY__.isArrow2Flipped(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setArrow2Flipped");
          return this.__PROXY__.setArrow2Flipped(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.isExtLineFix = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.isExtLineFix");
          return this.__PROXY__.isExtLineFix(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setExtLineFix = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setExtLineFix");
          return this.__PROXY__.setExtLineFix(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getExtLineFixLength");
          return this.__PROXY__.getExtLineFixLength(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setExtLineFixLength");
          return this.__PROXY__.setExtLineFixLength(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.hasOverride = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.hasOverride");
          return this.__PROXY__.hasOverride(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setExtensionLine1End = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setExtensionLine1End");
          return this.__PROXY__.setExtensionLine1End(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getExtensionLine1End = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getExtensionLine1End");
          return this.__PROXY__.getExtensionLine1End(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setExtensionLine2End = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setExtensionLine2End");
          return this.__PROXY__.setExtensionLine2End(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getExtensionLine2End = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getExtensionLine2End");
          return this.__PROXY__.getExtensionLine2End(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setDimArcPosition = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setDimArcPosition");
          return this.__PROXY__.setDimArcPosition(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getDimArcPosition = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getDimArcPosition");
          return this.__PROXY__.getDimArcPosition(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getDimensionArc = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getDimensionArc");
          return this.__PROXY__.getDimensionArc(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.init = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getStaticPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getStaticPropertyTypeIds");
          return this.__PROXY__.getStaticPropertyTypeIds(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setData = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setData");
          return this.__PROXY__.setData(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setExtensionLine1Start = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setExtensionLine1Start");
          return this.__PROXY__.setExtensionLine1Start(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getExtensionLine1Start = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getExtensionLine1Start");
          return this.__PROXY__.getExtensionLine1Start(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.setExtensionLine2Start = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.setExtensionLine2Start");
          return this.__PROXY__.setExtensionLine2Start(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getExtensionLine2Start = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getExtensionLine2Start");
          return this.__PROXY__.getExtensionLine2Start(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.getCenter = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.getCenter");
          return this.__PROXY__.getCenter(...args);
        };
    
        // function 
        RDimAngular2LEntity.prototype.print = function(...args) 
          
        {
          //print("JS: RDimAngular2LEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

        // static function 
        RDimAngular2LEntity.init = function() 
          
        {
          //print("JS: RDimAngular2LEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimAngular2LEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RDimAngular2LEntity);
  }

  
  else {
    
        print("RDimAngular2LEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAngular2LEntity.getRtti = function() 
          
        {
          //print("JS: RDimAngular2LEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimAngular2LEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RDimAngular2LEntity);
  }

  
  else {
    
        print("RDimAngular2LEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimAngular2LEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RDimAngular2LEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimAngular2LEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RDimAngular2LEntity);
  }

  
  else {
    
        print("RDimAngular2LEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RDimAngular2LEntity.INVALID_ID = 
  RDimAngular2LEntity_WrapperSingletonInstance.INVALID_ID;
RDimAngular2LEntity.INVALID_HANDLE = 
  RDimAngular2LEntity_WrapperSingletonInstance.INVALID_HANDLE;
RDimAngular2LEntity.PropertySelected = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertySelected;
RDimAngular2LEntity.PropertyInvisible = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyInvisible;
RDimAngular2LEntity.PropertyParentId = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyParentId;
RDimAngular2LEntity.PropertyMinX = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyMinX;
RDimAngular2LEntity.PropertyMinY = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyMinY;
RDimAngular2LEntity.PropertyMaxX = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyMaxX;
RDimAngular2LEntity.PropertyMaxY = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyMaxY;
RDimAngular2LEntity.PropertySizeX = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertySizeX;
RDimAngular2LEntity.PropertySizeY = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertySizeY;
RDimAngular2LEntity.PropertyDefinitionPointX = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDefinitionPointX;
RDimAngular2LEntity.PropertyDefinitionPointY = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDefinitionPointY;
RDimAngular2LEntity.PropertyDefinitionPointZ = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDefinitionPointZ;
RDimAngular2LEntity.PropertyAutoLabel = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyAutoLabel;
RDimAngular2LEntity.PropertyDimlfac = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimlfac;
RDimAngular2LEntity.PropertyDimlunit = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimlunit;
RDimAngular2LEntity.PropertyDimdec = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimdec;
RDimAngular2LEntity.PropertyDimzin = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimzin;
RDimAngular2LEntity.PropertyCenterX = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyCenterX;
RDimAngular2LEntity.PropertyCenterY = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyCenterY;
RDimAngular2LEntity.PropertyCenterZ = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyCenterZ;
RDimAngular2LEntity.PropertyCustom = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyCustom;
RDimAngular2LEntity.PropertyHandle = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyHandle;
RDimAngular2LEntity.PropertyProtected = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyProtected;
RDimAngular2LEntity.PropertyWorkingSet = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyWorkingSet;
RDimAngular2LEntity.PropertyType = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyType;
RDimAngular2LEntity.PropertyBlock = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyBlock;
RDimAngular2LEntity.PropertyLayer = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyLayer;
RDimAngular2LEntity.PropertyLinetype = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyLinetype;
RDimAngular2LEntity.PropertyLinetypeScale = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RDimAngular2LEntity.PropertyLineweight = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyLineweight;
RDimAngular2LEntity.PropertyColor = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyColor;
RDimAngular2LEntity.PropertyDisplayedColor = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RDimAngular2LEntity.PropertyDrawOrder = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDrawOrder;
RDimAngular2LEntity.PropertyMiddleOfTextX = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyMiddleOfTextX;
RDimAngular2LEntity.PropertyMiddleOfTextY = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyMiddleOfTextY;
RDimAngular2LEntity.PropertyMiddleOfTextZ = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyMiddleOfTextZ;
RDimAngular2LEntity.PropertyText = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyText;
RDimAngular2LEntity.PropertyUpperTolerance = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyUpperTolerance;
RDimAngular2LEntity.PropertyLowerTolerance = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyLowerTolerance;
RDimAngular2LEntity.PropertyMeasuredValue = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyMeasuredValue;
RDimAngular2LEntity.PropertyDimscale = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimscale;
RDimAngular2LEntity.PropertyDimtxt = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimtxt;
RDimAngular2LEntity.PropertyDimgap = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimgap;
RDimAngular2LEntity.PropertyDimasz = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimasz;
RDimAngular2LEntity.PropertyDimexe = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimexe;
RDimAngular2LEntity.PropertyDimexo = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimexo;
RDimAngular2LEntity.PropertyDimtad = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimtad;
RDimAngular2LEntity.PropertyDimtih = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimtih;
RDimAngular2LEntity.PropertyDimtsz = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimtsz;
RDimAngular2LEntity.PropertyDimdsep = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimdsep;
RDimAngular2LEntity.PropertyDimaunit = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimaunit;
RDimAngular2LEntity.PropertyDimadec = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimadec;
RDimAngular2LEntity.PropertyDimazin = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimazin;
RDimAngular2LEntity.PropertyArchTick = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyArchTick;
RDimAngular2LEntity.PropertyDimclrt = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimclrt;
RDimAngular2LEntity.PropertyDimBlockName = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimBlockName;
RDimAngular2LEntity.PropertyAutoTextPos = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyAutoTextPos;
RDimAngular2LEntity.PropertyFontName = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyFontName;
RDimAngular2LEntity.PropertyArrow1Flipped = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyArrow1Flipped;
RDimAngular2LEntity.PropertyArrow2Flipped = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyArrow2Flipped;
RDimAngular2LEntity.PropertyExtLineFix = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyExtLineFix;
RDimAngular2LEntity.PropertyExtLineFixLength = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyExtLineFixLength;
RDimAngular2LEntity.PropertyExtensionLine1StartX = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyExtensionLine1StartX;
RDimAngular2LEntity.PropertyExtensionLine1StartY = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyExtensionLine1StartY;
RDimAngular2LEntity.PropertyExtensionLine1StartZ = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyExtensionLine1StartZ;
RDimAngular2LEntity.PropertyExtensionLine1EndX = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyExtensionLine1EndX;
RDimAngular2LEntity.PropertyExtensionLine1EndY = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyExtensionLine1EndY;
RDimAngular2LEntity.PropertyExtensionLine1EndZ = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyExtensionLine1EndZ;
RDimAngular2LEntity.PropertyExtensionLine2StartX = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyExtensionLine2StartX;
RDimAngular2LEntity.PropertyExtensionLine2StartY = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyExtensionLine2StartY;
RDimAngular2LEntity.PropertyExtensionLine2StartZ = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyExtensionLine2StartZ;
RDimAngular2LEntity.PropertyExtensionLine2EndX = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyExtensionLine2EndX;
RDimAngular2LEntity.PropertyExtensionLine2EndY = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyExtensionLine2EndY;
RDimAngular2LEntity.PropertyExtensionLine2EndZ = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyExtensionLine2EndZ;
RDimAngular2LEntity.PropertyDimArcPositionX = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimArcPositionX;
RDimAngular2LEntity.PropertyDimArcPositionY = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimArcPositionY;
RDimAngular2LEntity.PropertyDimArcPositionZ = 
  RDimAngular2LEntity_WrapperSingletonInstance.PropertyDimArcPositionZ;


      // copy function:
      //RDimAngular2LEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimAngular2LEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RDimAngular2LEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      