
      // auto generated
      //var self;

      // class constructor:
      function RDimArcLengthEntity() {
        

        // should be RDimArcLengthEntity_BaseJs.call(this, engine):
        //RDimArcLengthEntity.prototype = new RDimArcLengthEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimArcLengthEntity.getIdStatic()))) {

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
            qWarning("RDimArcLengthEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RDimArcLengthEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RDimArcLengthEntity);
  }

  
  else {
    
        print("RDimArcLengthEntity(): wrong number / type of arguments");
      
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

      //RDimArcLengthEntity.prototype = new RDimArcLengthEntity_BaseJs(engine);
      //RDimArcLengthEntity.prototype = new RDimArcLengthEntity_Wrapper(engine);
      RDimArcLengthEntity.prototype = new Object();

      RDimArcLengthEntity.prototype.toString = function() {
          //return "RDimArcLengthEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimArcLengthEntity [JS]";
        };
      RDimArcLengthEntity.getObjectType = function() {
        return RJSType_RDimArcLengthEntity.getIdStatic();
      };

      RDimArcLengthEntity.prototype.getObjectType = function() {
        return RJSType_RDimArcLengthEntity.getIdStatic();
      };

      RDimArcLengthEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimArcLengthEntity.getIdStatic()) {
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
        RDimArcLengthEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.move = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.update = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.clearStyleOverrides = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.clearStyleOverrides");
          return this.__PROXY__.clearStyleOverrides(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setDefinitionPoint");
          return this.__PROXY__.setDefinitionPoint(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getDefinitionPoint");
          return this.__PROXY__.getDefinitionPoint(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setText = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setText");
          return this.__PROXY__.setText(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getText = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getText");
          return this.__PROXY__.getText(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getMeasurement = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getMeasurement");
          return this.__PROXY__.getMeasurement(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getTextData = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getTextData");
          return this.__PROXY__.getTextData(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.updateBoundingBox = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.updateBoundingBox");
          return this.__PROXY__.updateBoundingBox(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.updateTextPositionCenter = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.updateTextPositionCenter");
          return this.__PROXY__.updateTextPositionCenter(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.updateTextData = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.updateTextData");
          return this.__PROXY__.updateTextData(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.updateShapes = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.updateShapes");
          return this.__PROXY__.updateShapes(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setTextPosition = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setTextPosition");
          return this.__PROXY__.setTextPosition(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getTextPosition = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getTextPosition");
          return this.__PROXY__.getTextPosition(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setFontName = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setFontName");
          return this.__PROXY__.setFontName(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getFontName = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getFontName");
          return this.__PROXY__.getFontName(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.hasCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.hasCustomTextPosition");
          return this.__PROXY__.hasCustomTextPosition(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setCustomTextPosition");
          return this.__PROXY__.setCustomTextPosition(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getLineSpacingStyle");
          return this.__PROXY__.getLineSpacingStyle(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getLineSpacingFactor");
          return this.__PROXY__.getLineSpacingFactor(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getTextRotation = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getTextRotation");
          return this.__PROXY__.getTextRotation(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getLinearFactor = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getLinearFactor");
          return this.__PROXY__.getLinearFactor(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setLinearFactor = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setLinearFactor");
          return this.__PROXY__.setLinearFactor(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getDimscale = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getDimscale");
          return this.__PROXY__.getDimscale(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setDimscale = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setDimscale");
          return this.__PROXY__.setDimscale(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getDimBlockName = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getDimBlockName");
          return this.__PROXY__.getDimBlockName(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.hasDimensionBlockReference = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.hasDimensionBlockReference");
          return this.__PROXY__.hasDimensionBlockReference(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.isArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.isArrow1Flipped");
          return this.__PROXY__.isArrow1Flipped(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setArrow1Flipped");
          return this.__PROXY__.setArrow1Flipped(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.isArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.isArrow2Flipped");
          return this.__PROXY__.isArrow2Flipped(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setArrow2Flipped");
          return this.__PROXY__.setArrow2Flipped(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.isExtLineFix = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.isExtLineFix");
          return this.__PROXY__.isExtLineFix(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setExtLineFix = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setExtLineFix");
          return this.__PROXY__.setExtLineFix(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getExtLineFixLength");
          return this.__PROXY__.getExtLineFixLength(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setExtLineFixLength");
          return this.__PROXY__.setExtLineFixLength(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.hasOverride = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.hasOverride");
          return this.__PROXY__.hasOverride(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setExtensionLine1End = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setExtensionLine1End");
          return this.__PROXY__.setExtensionLine1End(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getExtensionLine1End = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getExtensionLine1End");
          return this.__PROXY__.getExtensionLine1End(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setExtensionLine2End = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setExtensionLine2End");
          return this.__PROXY__.setExtensionLine2End(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getExtensionLine2End = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getExtensionLine2End");
          return this.__PROXY__.getExtensionLine2End(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setDimArcPosition = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setDimArcPosition");
          return this.__PROXY__.setDimArcPosition(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getDimArcPosition = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getDimArcPosition");
          return this.__PROXY__.getDimArcPosition(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getDimensionArc = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getDimensionArc");
          return this.__PROXY__.getDimensionArc(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.init = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getStaticPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getStaticPropertyTypeIds");
          return this.__PROXY__.getStaticPropertyTypeIds(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setData = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setData");
          return this.__PROXY__.setData(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.setCenter = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.setCenter");
          return this.__PROXY__.setCenter(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.getCenter = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.getCenter");
          return this.__PROXY__.getCenter(...args);
        };
    
        // function 
        RDimArcLengthEntity.prototype.print = function(...args) 
          
        {
          //print("JS: RDimArcLengthEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

        // static function 
        RDimArcLengthEntity.init = function() 
          
        {
          //print("JS: RDimArcLengthEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimArcLengthEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RDimArcLengthEntity);
  }

  
  else {
    
        print("RDimArcLengthEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimArcLengthEntity.getRtti = function() 
          
        {
          //print("JS: RDimArcLengthEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimArcLengthEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RDimArcLengthEntity);
  }

  
  else {
    
        print("RDimArcLengthEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimArcLengthEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RDimArcLengthEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimArcLengthEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RDimArcLengthEntity);
  }

  
  else {
    
        print("RDimArcLengthEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RDimArcLengthEntity.INVALID_ID = 
  RDimArcLengthEntity_WrapperSingletonInstance.INVALID_ID;
RDimArcLengthEntity.INVALID_HANDLE = 
  RDimArcLengthEntity_WrapperSingletonInstance.INVALID_HANDLE;
RDimArcLengthEntity.PropertySelected = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertySelected;
RDimArcLengthEntity.PropertyInvisible = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyInvisible;
RDimArcLengthEntity.PropertyParentId = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyParentId;
RDimArcLengthEntity.PropertyMinX = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyMinX;
RDimArcLengthEntity.PropertyMinY = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyMinY;
RDimArcLengthEntity.PropertyMaxX = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyMaxX;
RDimArcLengthEntity.PropertyMaxY = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyMaxY;
RDimArcLengthEntity.PropertySizeX = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertySizeX;
RDimArcLengthEntity.PropertySizeY = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertySizeY;
RDimArcLengthEntity.PropertyDefinitionPointX = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDefinitionPointX;
RDimArcLengthEntity.PropertyDefinitionPointY = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDefinitionPointY;
RDimArcLengthEntity.PropertyDefinitionPointZ = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDefinitionPointZ;
RDimArcLengthEntity.PropertyAutoLabel = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyAutoLabel;
RDimArcLengthEntity.PropertyDimaunit = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimaunit;
RDimArcLengthEntity.PropertyDimadec = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimadec;
RDimArcLengthEntity.PropertyDimazin = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimazin;
RDimArcLengthEntity.PropertyCustom = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyCustom;
RDimArcLengthEntity.PropertyHandle = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyHandle;
RDimArcLengthEntity.PropertyProtected = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyProtected;
RDimArcLengthEntity.PropertyWorkingSet = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyWorkingSet;
RDimArcLengthEntity.PropertyType = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyType;
RDimArcLengthEntity.PropertyBlock = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyBlock;
RDimArcLengthEntity.PropertyLayer = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyLayer;
RDimArcLengthEntity.PropertyLinetype = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyLinetype;
RDimArcLengthEntity.PropertyLinetypeScale = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RDimArcLengthEntity.PropertyLineweight = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyLineweight;
RDimArcLengthEntity.PropertyColor = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyColor;
RDimArcLengthEntity.PropertyDisplayedColor = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RDimArcLengthEntity.PropertyDrawOrder = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDrawOrder;
RDimArcLengthEntity.PropertyMiddleOfTextX = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyMiddleOfTextX;
RDimArcLengthEntity.PropertyMiddleOfTextY = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyMiddleOfTextY;
RDimArcLengthEntity.PropertyMiddleOfTextZ = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyMiddleOfTextZ;
RDimArcLengthEntity.PropertyText = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyText;
RDimArcLengthEntity.PropertyUpperTolerance = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyUpperTolerance;
RDimArcLengthEntity.PropertyLowerTolerance = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyLowerTolerance;
RDimArcLengthEntity.PropertyMeasuredValue = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyMeasuredValue;
RDimArcLengthEntity.PropertyDimscale = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimscale;
RDimArcLengthEntity.PropertyDimlfac = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimlfac;
RDimArcLengthEntity.PropertyDimtxt = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimtxt;
RDimArcLengthEntity.PropertyDimgap = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimgap;
RDimArcLengthEntity.PropertyDimasz = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimasz;
RDimArcLengthEntity.PropertyDimexe = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimexe;
RDimArcLengthEntity.PropertyDimexo = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimexo;
RDimArcLengthEntity.PropertyDimtad = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimtad;
RDimArcLengthEntity.PropertyDimtih = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimtih;
RDimArcLengthEntity.PropertyDimtsz = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimtsz;
RDimArcLengthEntity.PropertyDimlunit = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimlunit;
RDimArcLengthEntity.PropertyDimdec = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimdec;
RDimArcLengthEntity.PropertyDimdsep = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimdsep;
RDimArcLengthEntity.PropertyDimzin = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimzin;
RDimArcLengthEntity.PropertyArchTick = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyArchTick;
RDimArcLengthEntity.PropertyDimclrt = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimclrt;
RDimArcLengthEntity.PropertyDimBlockName = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimBlockName;
RDimArcLengthEntity.PropertyAutoTextPos = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyAutoTextPos;
RDimArcLengthEntity.PropertyFontName = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyFontName;
RDimArcLengthEntity.PropertyArrow1Flipped = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyArrow1Flipped;
RDimArcLengthEntity.PropertyArrow2Flipped = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyArrow2Flipped;
RDimArcLengthEntity.PropertyExtLineFix = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyExtLineFix;
RDimArcLengthEntity.PropertyExtLineFixLength = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyExtLineFixLength;
RDimArcLengthEntity.PropertyCenterX = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyCenterX;
RDimArcLengthEntity.PropertyCenterY = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyCenterY;
RDimArcLengthEntity.PropertyCenterZ = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyCenterZ;
RDimArcLengthEntity.PropertyExtensionLine1EndX = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyExtensionLine1EndX;
RDimArcLengthEntity.PropertyExtensionLine1EndY = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyExtensionLine1EndY;
RDimArcLengthEntity.PropertyExtensionLine1EndZ = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyExtensionLine1EndZ;
RDimArcLengthEntity.PropertyExtensionLine2EndX = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyExtensionLine2EndX;
RDimArcLengthEntity.PropertyExtensionLine2EndY = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyExtensionLine2EndY;
RDimArcLengthEntity.PropertyExtensionLine2EndZ = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyExtensionLine2EndZ;
RDimArcLengthEntity.PropertyDimArcPositionX = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimArcPositionX;
RDimArcLengthEntity.PropertyDimArcPositionY = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimArcPositionY;
RDimArcLengthEntity.PropertyDimArcPositionZ = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimArcPositionZ;
RDimArcLengthEntity.PropertyDimArcSymbolType = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimArcSymbolType;


      // copy function:
      //RDimArcLengthEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimArcLengthEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RDimArcLengthEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      