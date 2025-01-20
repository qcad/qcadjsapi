
      // auto generated
      //var self;

      // class constructor:
      function RWipeoutEntity() {
        

        // should be RWipeoutEntity_BaseJs.call(this, engine):
        //RWipeoutEntity.prototype = new RWipeoutEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RWipeoutEntity.getIdStatic()))) {

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
            qWarning("RWipeoutEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RWipeoutEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RWipeoutEntity);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RWipeoutEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RWipeoutEntity);
  }

  
  else {
    
        print("RWipeoutEntity(): wrong number / type of arguments");
      
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

      //RWipeoutEntity.prototype = new RWipeoutEntity_BaseJs(engine);
      //RWipeoutEntity.prototype = new RWipeoutEntity_Wrapper(engine);
      RWipeoutEntity.prototype = new Object();

      RWipeoutEntity.prototype.toString = function() {
          //return "RWipeoutEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RWipeoutEntity [JS]";
        };
      RWipeoutEntity.getObjectType = function() {
        return RJSType_RWipeoutEntity.getIdStatic();
      };

      RWipeoutEntity.prototype.getObjectType = function() {
        return RJSType_RWipeoutEntity.getIdStatic();
      };

      RWipeoutEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RWipeoutEntity.getIdStatic()) {
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
        RWipeoutEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.move = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.update = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.print = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.init = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getStaticPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getStaticPropertyTypeIds");
          return this.__PROXY__.getStaticPropertyTypeIds(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.setShape = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.setShape");
          return this.__PROXY__.setShape(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getShowFrame = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getShowFrame");
          return this.__PROXY__.getShowFrame(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.setShowFrame = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.setShowFrame");
          return this.__PROXY__.setShowFrame(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.countVertices = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.countVertices");
          return this.__PROXY__.countVertices(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.appendVertex = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.appendVertex");
          return this.__PROXY__.appendVertex(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getEndPoint = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getEndPoint");
          return this.__PROXY__.getEndPoint(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getStartPoint = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getStartPoint");
          return this.__PROXY__.getStartPoint(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.getVertexAt = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.getVertexAt");
          return this.__PROXY__.getVertexAt(...args);
        };
    
        // function 
        RWipeoutEntity.prototype.removeLastVertex = function(...args) 
          
        {
          //print("JS: RWipeoutEntity.prototype.removeLastVertex");
          return this.__PROXY__.removeLastVertex(...args);
        };
    

      // static functions:
      

        // static function 
        RWipeoutEntity.init = function() 
          
        {
          //print("JS: RWipeoutEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RWipeoutEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RWipeoutEntity);
  }

  
  else {
    
        print("RWipeoutEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RWipeoutEntity.getRtti = function() 
          
        {
          //print("JS: RWipeoutEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RWipeoutEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RWipeoutEntity);
  }

  
  else {
    
        print("RWipeoutEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RWipeoutEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RWipeoutEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RWipeoutEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RWipeoutEntity);
  }

  
  else {
    
        print("RWipeoutEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RWipeoutEntity.INVALID_ID = 
  RWipeoutEntity_WrapperSingletonInstance.INVALID_ID;
RWipeoutEntity.INVALID_HANDLE = 
  RWipeoutEntity_WrapperSingletonInstance.INVALID_HANDLE;
RWipeoutEntity.PropertySelected = 
  RWipeoutEntity_WrapperSingletonInstance.PropertySelected;
RWipeoutEntity.PropertyInvisible = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyInvisible;
RWipeoutEntity.PropertyParentId = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyParentId;
RWipeoutEntity.PropertyMinX = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyMinX;
RWipeoutEntity.PropertyMinY = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyMinY;
RWipeoutEntity.PropertyMaxX = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyMaxX;
RWipeoutEntity.PropertyMaxY = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyMaxY;
RWipeoutEntity.PropertySizeX = 
  RWipeoutEntity_WrapperSingletonInstance.PropertySizeX;
RWipeoutEntity.PropertySizeY = 
  RWipeoutEntity_WrapperSingletonInstance.PropertySizeY;
RWipeoutEntity.PropertyCustom = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyCustom;
RWipeoutEntity.PropertyHandle = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyHandle;
RWipeoutEntity.PropertyProtected = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyProtected;
RWipeoutEntity.PropertyWorkingSet = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyWorkingSet;
RWipeoutEntity.PropertyType = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyType;
RWipeoutEntity.PropertyBlock = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyBlock;
RWipeoutEntity.PropertyLayer = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyLayer;
RWipeoutEntity.PropertyLinetype = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyLinetype;
RWipeoutEntity.PropertyLinetypeScale = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RWipeoutEntity.PropertyLineweight = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyLineweight;
RWipeoutEntity.PropertyColor = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyColor;
RWipeoutEntity.PropertyDisplayedColor = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RWipeoutEntity.PropertyDrawOrder = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyDrawOrder;
RWipeoutEntity.PropertyVertexNX = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyVertexNX;
RWipeoutEntity.PropertyVertexNY = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyVertexNY;
RWipeoutEntity.PropertyVertexNZ = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyVertexNZ;
RWipeoutEntity.PropertyBulgeN = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyBulgeN;
RWipeoutEntity.PropertyBaseAngle = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyBaseAngle;
RWipeoutEntity.PropertySize1 = 
  RWipeoutEntity_WrapperSingletonInstance.PropertySize1;
RWipeoutEntity.PropertySize2 = 
  RWipeoutEntity_WrapperSingletonInstance.PropertySize2;


      // copy function:
      //RWipeoutEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RWipeoutEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RWipeoutEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      