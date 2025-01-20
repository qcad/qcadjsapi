
      // auto generated
      //var self;

      // class constructor:
      function RCircleEntity() {
        

        // should be RCircleEntity_BaseJs.call(this, engine):
        //RCircleEntity.prototype = new RCircleEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RCircleEntity.getIdStatic()))) {

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
            qWarning("RCircleEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RCircleEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RCircleEntity);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RCircleEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RCircleEntity);
  }

  
  else {
    
        print("RCircleEntity(): wrong number / type of arguments");
      
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

      //RCircleEntity.prototype = new RCircleEntity_BaseJs(engine);
      //RCircleEntity.prototype = new RCircleEntity_Wrapper(engine);
      RCircleEntity.prototype = new Object();

      RCircleEntity.prototype.toString = function() {
          //return "RCircleEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RCircleEntity [JS]";
        };
      RCircleEntity.getObjectType = function() {
        return RJSType_RCircleEntity.getIdStatic();
      };

      RCircleEntity.prototype.getObjectType = function() {
        return RJSType_RCircleEntity.getIdStatic();
      };

      RCircleEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RCircleEntity.getIdStatic()) {
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
        RCircleEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RCircleEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RCircleEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RCircleEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RCircleEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RCircleEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RCircleEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RCircleEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RCircleEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RCircleEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RCircleEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RCircleEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RCircleEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RCircleEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RCircleEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RCircleEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RCircleEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RCircleEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RCircleEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RCircleEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RCircleEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RCircleEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RCircleEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RCircleEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RCircleEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RCircleEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RCircleEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RCircleEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RCircleEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RCircleEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RCircleEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RCircleEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RCircleEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RCircleEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RCircleEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RCircleEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RCircleEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RCircleEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RCircleEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RCircleEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RCircleEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RCircleEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RCircleEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        RCircleEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RCircleEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RCircleEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RCircleEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RCircleEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RCircleEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RCircleEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RCircleEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RCircleEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RCircleEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RCircleEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RCircleEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RCircleEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RCircleEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RCircleEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RCircleEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RCircleEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RCircleEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RCircleEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RCircleEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RCircleEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RCircleEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RCircleEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RCircleEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RCircleEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RCircleEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RCircleEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RCircleEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RCircleEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RCircleEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RCircleEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RCircleEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RCircleEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RCircleEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        RCircleEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RCircleEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RCircleEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RCircleEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RCircleEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RCircleEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RCircleEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RCircleEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RCircleEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RCircleEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RCircleEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RCircleEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RCircleEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RCircleEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RCircleEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        RCircleEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RCircleEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RCircleEntity.prototype.move = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RCircleEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RCircleEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RCircleEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RCircleEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        RCircleEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RCircleEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RCircleEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RCircleEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RCircleEntity.prototype.update = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RCircleEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RCircleEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RCircleEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        RCircleEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        RCircleEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        RCircleEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RCircleEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RCircleEntity.prototype.init = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RCircleEntity.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RCircleEntity.prototype.getStaticPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getStaticPropertyTypeIds");
          return this.__PROXY__.getStaticPropertyTypeIds(...args);
        };
    
        // function 
        RCircleEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RCircleEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RCircleEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RCircleEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        RCircleEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        RCircleEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        RCircleEntity.prototype.getCenter = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getCenter");
          return this.__PROXY__.getCenter(...args);
        };
    
        // function 
        RCircleEntity.prototype.getRadius = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getRadius");
          return this.__PROXY__.getRadius(...args);
        };
    
        // function 
        RCircleEntity.prototype.setRadius = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.setRadius");
          return this.__PROXY__.setRadius(...args);
        };
    
        // function 
        RCircleEntity.prototype.getLength = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.getLength");
          return this.__PROXY__.getLength(...args);
        };
    
        // function 
        RCircleEntity.prototype.print = function(...args) 
          
        {
          //print("JS: RCircleEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

        // static function 
        RCircleEntity.init = function() 
          
        {
          //print("JS: RCircleEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RCircleEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RCircleEntity);
  }

  
  else {
    
        print("RCircleEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircleEntity.getRtti = function() 
          
        {
          //print("JS: RCircleEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RCircleEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RCircleEntity);
  }

  
  else {
    
        print("RCircleEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RCircleEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RCircleEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RCircleEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RCircleEntity);
  }

  
  else {
    
        print("RCircleEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RCircleEntity.INVALID_ID = 
  RCircleEntity_WrapperSingletonInstance.INVALID_ID;
RCircleEntity.INVALID_HANDLE = 
  RCircleEntity_WrapperSingletonInstance.INVALID_HANDLE;
RCircleEntity.PropertySelected = 
  RCircleEntity_WrapperSingletonInstance.PropertySelected;
RCircleEntity.PropertyInvisible = 
  RCircleEntity_WrapperSingletonInstance.PropertyInvisible;
RCircleEntity.PropertyParentId = 
  RCircleEntity_WrapperSingletonInstance.PropertyParentId;
RCircleEntity.PropertyMinX = 
  RCircleEntity_WrapperSingletonInstance.PropertyMinX;
RCircleEntity.PropertyMinY = 
  RCircleEntity_WrapperSingletonInstance.PropertyMinY;
RCircleEntity.PropertyMaxX = 
  RCircleEntity_WrapperSingletonInstance.PropertyMaxX;
RCircleEntity.PropertyMaxY = 
  RCircleEntity_WrapperSingletonInstance.PropertyMaxY;
RCircleEntity.PropertySizeX = 
  RCircleEntity_WrapperSingletonInstance.PropertySizeX;
RCircleEntity.PropertySizeY = 
  RCircleEntity_WrapperSingletonInstance.PropertySizeY;
RCircleEntity.PropertyCustom = 
  RCircleEntity_WrapperSingletonInstance.PropertyCustom;
RCircleEntity.PropertyHandle = 
  RCircleEntity_WrapperSingletonInstance.PropertyHandle;
RCircleEntity.PropertyProtected = 
  RCircleEntity_WrapperSingletonInstance.PropertyProtected;
RCircleEntity.PropertyWorkingSet = 
  RCircleEntity_WrapperSingletonInstance.PropertyWorkingSet;
RCircleEntity.PropertyType = 
  RCircleEntity_WrapperSingletonInstance.PropertyType;
RCircleEntity.PropertyBlock = 
  RCircleEntity_WrapperSingletonInstance.PropertyBlock;
RCircleEntity.PropertyLayer = 
  RCircleEntity_WrapperSingletonInstance.PropertyLayer;
RCircleEntity.PropertyLinetype = 
  RCircleEntity_WrapperSingletonInstance.PropertyLinetype;
RCircleEntity.PropertyLinetypeScale = 
  RCircleEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RCircleEntity.PropertyLineweight = 
  RCircleEntity_WrapperSingletonInstance.PropertyLineweight;
RCircleEntity.PropertyColor = 
  RCircleEntity_WrapperSingletonInstance.PropertyColor;
RCircleEntity.PropertyDisplayedColor = 
  RCircleEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RCircleEntity.PropertyDrawOrder = 
  RCircleEntity_WrapperSingletonInstance.PropertyDrawOrder;
RCircleEntity.PropertyCenterX = 
  RCircleEntity_WrapperSingletonInstance.PropertyCenterX;
RCircleEntity.PropertyCenterY = 
  RCircleEntity_WrapperSingletonInstance.PropertyCenterY;
RCircleEntity.PropertyCenterZ = 
  RCircleEntity_WrapperSingletonInstance.PropertyCenterZ;
RCircleEntity.PropertyRadius = 
  RCircleEntity_WrapperSingletonInstance.PropertyRadius;
RCircleEntity.PropertyDiameter = 
  RCircleEntity_WrapperSingletonInstance.PropertyDiameter;
RCircleEntity.PropertyCircumference = 
  RCircleEntity_WrapperSingletonInstance.PropertyCircumference;
RCircleEntity.PropertyArea = 
  RCircleEntity_WrapperSingletonInstance.PropertyArea;
RCircleEntity.PropertyTotalArea = 
  RCircleEntity_WrapperSingletonInstance.PropertyTotalArea;


      // copy function:
      //RCircleEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RCircleEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RCircleEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      