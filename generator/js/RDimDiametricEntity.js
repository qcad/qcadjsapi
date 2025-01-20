
      // auto generated
      //var self;

      // class constructor:
      function RDimDiametricEntity() {
        

        // should be RDimDiametricEntity_BaseJs.call(this, engine):
        //RDimDiametricEntity.prototype = new RDimDiametricEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimDiametricEntity.getIdStatic()))) {

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
            qWarning("RDimDiametricEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RDimDiametricEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RDimDiametricEntity);
  }

  
  else {
    
        print("RDimDiametricEntity(): wrong number / type of arguments");
      
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

      //RDimDiametricEntity.prototype = new RDimDiametricEntity_BaseJs(engine);
      //RDimDiametricEntity.prototype = new RDimDiametricEntity_Wrapper(engine);
      RDimDiametricEntity.prototype = new Object();

      RDimDiametricEntity.prototype.toString = function() {
          //return "RDimDiametricEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimDiametricEntity [JS]";
        };
      RDimDiametricEntity.getObjectType = function() {
        return RJSType_RDimDiametricEntity.getIdStatic();
      };

      RDimDiametricEntity.prototype.getObjectType = function() {
        return RJSType_RDimDiametricEntity.getIdStatic();
      };

      RDimDiametricEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimDiametricEntity.getIdStatic()) {
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
        RDimDiametricEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.move = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.update = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.clearStyleOverrides = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.clearStyleOverrides");
          return this.__PROXY__.clearStyleOverrides(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setDefinitionPoint");
          return this.__PROXY__.setDefinitionPoint(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getDefinitionPoint");
          return this.__PROXY__.getDefinitionPoint(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setText = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setText");
          return this.__PROXY__.setText(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getText = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getText");
          return this.__PROXY__.getText(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getMeasurement = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getMeasurement");
          return this.__PROXY__.getMeasurement(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getTextData = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getTextData");
          return this.__PROXY__.getTextData(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.updateBoundingBox = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.updateBoundingBox");
          return this.__PROXY__.updateBoundingBox(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.updateTextPositionCenter = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.updateTextPositionCenter");
          return this.__PROXY__.updateTextPositionCenter(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.updateTextData = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.updateTextData");
          return this.__PROXY__.updateTextData(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.updateShapes = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.updateShapes");
          return this.__PROXY__.updateShapes(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setTextPosition = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setTextPosition");
          return this.__PROXY__.setTextPosition(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getTextPosition = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getTextPosition");
          return this.__PROXY__.getTextPosition(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setFontName = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setFontName");
          return this.__PROXY__.setFontName(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getFontName = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getFontName");
          return this.__PROXY__.getFontName(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.hasCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.hasCustomTextPosition");
          return this.__PROXY__.hasCustomTextPosition(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setCustomTextPosition");
          return this.__PROXY__.setCustomTextPosition(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getLineSpacingStyle");
          return this.__PROXY__.getLineSpacingStyle(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getLineSpacingFactor");
          return this.__PROXY__.getLineSpacingFactor(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getTextRotation = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getTextRotation");
          return this.__PROXY__.getTextRotation(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getLinearFactor = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getLinearFactor");
          return this.__PROXY__.getLinearFactor(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setLinearFactor = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setLinearFactor");
          return this.__PROXY__.setLinearFactor(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getDimscale = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getDimscale");
          return this.__PROXY__.getDimscale(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setDimscale = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setDimscale");
          return this.__PROXY__.setDimscale(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getDimBlockName = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getDimBlockName");
          return this.__PROXY__.getDimBlockName(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.hasDimensionBlockReference = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.hasDimensionBlockReference");
          return this.__PROXY__.hasDimensionBlockReference(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.isArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.isArrow1Flipped");
          return this.__PROXY__.isArrow1Flipped(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setArrow1Flipped");
          return this.__PROXY__.setArrow1Flipped(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.isArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.isArrow2Flipped");
          return this.__PROXY__.isArrow2Flipped(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setArrow2Flipped");
          return this.__PROXY__.setArrow2Flipped(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.isExtLineFix = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.isExtLineFix");
          return this.__PROXY__.isExtLineFix(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setExtLineFix = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setExtLineFix");
          return this.__PROXY__.setExtLineFix(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getExtLineFixLength");
          return this.__PROXY__.getExtLineFixLength(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setExtLineFixLength");
          return this.__PROXY__.setExtLineFixLength(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.hasOverride = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.hasOverride");
          return this.__PROXY__.hasOverride(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.init = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getStaticPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getStaticPropertyTypeIds");
          return this.__PROXY__.getStaticPropertyTypeIds(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setData = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setData");
          return this.__PROXY__.setData(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setChordPoint = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setChordPoint");
          return this.__PROXY__.setChordPoint(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getChordPoint = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getChordPoint");
          return this.__PROXY__.getChordPoint(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.setFarChordPoint = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.setFarChordPoint");
          return this.__PROXY__.setFarChordPoint(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.getFarChordPoint = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.getFarChordPoint");
          return this.__PROXY__.getFarChordPoint(...args);
        };
    
        // function 
        RDimDiametricEntity.prototype.print = function(...args) 
          
        {
          //print("JS: RDimDiametricEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

        // static function 
        RDimDiametricEntity.init = function() 
          
        {
          //print("JS: RDimDiametricEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimDiametricEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RDimDiametricEntity);
  }

  
  else {
    
        print("RDimDiametricEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimDiametricEntity.getRtti = function() 
          
        {
          //print("JS: RDimDiametricEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimDiametricEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RDimDiametricEntity);
  }

  
  else {
    
        print("RDimDiametricEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimDiametricEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RDimDiametricEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimDiametricEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RDimDiametricEntity);
  }

  
  else {
    
        print("RDimDiametricEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RDimDiametricEntity.INVALID_ID = 
  RDimDiametricEntity_WrapperSingletonInstance.INVALID_ID;
RDimDiametricEntity.INVALID_HANDLE = 
  RDimDiametricEntity_WrapperSingletonInstance.INVALID_HANDLE;
RDimDiametricEntity.PropertySelected = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertySelected;
RDimDiametricEntity.PropertyInvisible = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyInvisible;
RDimDiametricEntity.PropertyParentId = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyParentId;
RDimDiametricEntity.PropertyMinX = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyMinX;
RDimDiametricEntity.PropertyMinY = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyMinY;
RDimDiametricEntity.PropertyMaxX = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyMaxX;
RDimDiametricEntity.PropertyMaxY = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyMaxY;
RDimDiametricEntity.PropertySizeX = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertySizeX;
RDimDiametricEntity.PropertySizeY = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertySizeY;
RDimDiametricEntity.PropertyDefinitionPointX = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDefinitionPointX;
RDimDiametricEntity.PropertyDefinitionPointY = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDefinitionPointY;
RDimDiametricEntity.PropertyDefinitionPointZ = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDefinitionPointZ;
RDimDiametricEntity.PropertyAutoLabel = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyAutoLabel;
RDimDiametricEntity.PropertyDimaunit = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimaunit;
RDimDiametricEntity.PropertyDimadec = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimadec;
RDimDiametricEntity.PropertyDimazin = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimazin;
RDimDiametricEntity.PropertyCustom = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyCustom;
RDimDiametricEntity.PropertyHandle = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyHandle;
RDimDiametricEntity.PropertyProtected = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyProtected;
RDimDiametricEntity.PropertyWorkingSet = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyWorkingSet;
RDimDiametricEntity.PropertyType = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyType;
RDimDiametricEntity.PropertyBlock = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyBlock;
RDimDiametricEntity.PropertyLayer = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyLayer;
RDimDiametricEntity.PropertyLinetype = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyLinetype;
RDimDiametricEntity.PropertyLinetypeScale = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RDimDiametricEntity.PropertyLineweight = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyLineweight;
RDimDiametricEntity.PropertyColor = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyColor;
RDimDiametricEntity.PropertyDisplayedColor = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RDimDiametricEntity.PropertyDrawOrder = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDrawOrder;
RDimDiametricEntity.PropertyMiddleOfTextX = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyMiddleOfTextX;
RDimDiametricEntity.PropertyMiddleOfTextY = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyMiddleOfTextY;
RDimDiametricEntity.PropertyMiddleOfTextZ = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyMiddleOfTextZ;
RDimDiametricEntity.PropertyText = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyText;
RDimDiametricEntity.PropertyUpperTolerance = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyUpperTolerance;
RDimDiametricEntity.PropertyLowerTolerance = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyLowerTolerance;
RDimDiametricEntity.PropertyMeasuredValue = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyMeasuredValue;
RDimDiametricEntity.PropertyDimscale = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimscale;
RDimDiametricEntity.PropertyDimlfac = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimlfac;
RDimDiametricEntity.PropertyDimtxt = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimtxt;
RDimDiametricEntity.PropertyDimgap = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimgap;
RDimDiametricEntity.PropertyDimasz = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimasz;
RDimDiametricEntity.PropertyDimexe = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimexe;
RDimDiametricEntity.PropertyDimexo = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimexo;
RDimDiametricEntity.PropertyDimtad = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimtad;
RDimDiametricEntity.PropertyDimtih = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimtih;
RDimDiametricEntity.PropertyDimtsz = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimtsz;
RDimDiametricEntity.PropertyDimlunit = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimlunit;
RDimDiametricEntity.PropertyDimdec = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimdec;
RDimDiametricEntity.PropertyDimdsep = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimdsep;
RDimDiametricEntity.PropertyDimzin = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimzin;
RDimDiametricEntity.PropertyArchTick = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyArchTick;
RDimDiametricEntity.PropertyDimclrt = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimclrt;
RDimDiametricEntity.PropertyDimBlockName = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimBlockName;
RDimDiametricEntity.PropertyAutoTextPos = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyAutoTextPos;
RDimDiametricEntity.PropertyFontName = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyFontName;
RDimDiametricEntity.PropertyArrow1Flipped = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyArrow1Flipped;
RDimDiametricEntity.PropertyArrow2Flipped = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyArrow2Flipped;
RDimDiametricEntity.PropertyExtLineFix = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyExtLineFix;
RDimDiametricEntity.PropertyExtLineFixLength = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyExtLineFixLength;
RDimDiametricEntity.PropertyChordPointX = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyChordPointX;
RDimDiametricEntity.PropertyChordPointY = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyChordPointY;
RDimDiametricEntity.PropertyChordPointZ = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyChordPointZ;
RDimDiametricEntity.PropertyFarChordPointX = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyFarChordPointX;
RDimDiametricEntity.PropertyFarChordPointY = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyFarChordPointY;
RDimDiametricEntity.PropertyFarChordPointZ = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyFarChordPointZ;


      // copy function:
      //RDimDiametricEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimDiametricEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RDimDiametricEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      