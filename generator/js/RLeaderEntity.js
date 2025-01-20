
      // auto generated
      //var self;

      // class constructor:
      function RLeaderEntity() {
        

        // should be RLeaderEntity_BaseJs.call(this, engine):
        //RLeaderEntity.prototype = new RLeaderEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RLeaderEntity.getIdStatic()))) {

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
            qWarning("RLeaderEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RLeaderEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RLeaderEntity);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RLeaderEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RLeaderEntity);
  }

  
  else {
    
        print("RLeaderEntity(): wrong number / type of arguments");
      
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

      //RLeaderEntity.prototype = new RLeaderEntity_BaseJs(engine);
      //RLeaderEntity.prototype = new RLeaderEntity_Wrapper(engine);
      RLeaderEntity.prototype = new Object();

      RLeaderEntity.prototype.toString = function() {
          //return "RLeaderEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RLeaderEntity [JS]";
        };
      RLeaderEntity.getObjectType = function() {
        return RJSType_RLeaderEntity.getIdStatic();
      };

      RLeaderEntity.prototype.getObjectType = function() {
        return RJSType_RLeaderEntity.getIdStatic();
      };

      RLeaderEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RLeaderEntity.getIdStatic()) {
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
        RLeaderEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RLeaderEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RLeaderEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RLeaderEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RLeaderEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RLeaderEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RLeaderEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RLeaderEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RLeaderEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RLeaderEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RLeaderEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RLeaderEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RLeaderEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RLeaderEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RLeaderEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RLeaderEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RLeaderEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RLeaderEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        RLeaderEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RLeaderEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RLeaderEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RLeaderEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        RLeaderEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RLeaderEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RLeaderEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        RLeaderEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RLeaderEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RLeaderEntity.prototype.move = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RLeaderEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RLeaderEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RLeaderEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        RLeaderEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        RLeaderEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RLeaderEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RLeaderEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RLeaderEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RLeaderEntity.prototype.update = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RLeaderEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RLeaderEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        RLeaderEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        RLeaderEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RLeaderEntity.prototype.init = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getStaticPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getStaticPropertyTypeIds");
          return this.__PROXY__.getStaticPropertyTypeIds(...args);
        };
    
        // function 
        RLeaderEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setData = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setData");
          return this.__PROXY__.setData(...args);
        };
    
        // function 
        RLeaderEntity.prototype.reverse = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.reverse");
          return this.__PROXY__.reverse(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setArrowHead = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setArrowHead");
          return this.__PROXY__.setArrowHead(...args);
        };
    
        // function 
        RLeaderEntity.prototype.hasArrowHead = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.hasArrowHead");
          return this.__PROXY__.hasArrowHead(...args);
        };
    
        // function 
        RLeaderEntity.prototype.clear = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.clear");
          return this.__PROXY__.clear(...args);
        };
    
        // function 
        RLeaderEntity.prototype.normalize = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.normalize");
          return this.__PROXY__.normalize(...args);
        };
    
        // function 
        RLeaderEntity.prototype.countVertices = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.countVertices");
          return this.__PROXY__.countVertices(...args);
        };
    
        // function 
        RLeaderEntity.prototype.appendVertex = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.appendVertex");
          return this.__PROXY__.appendVertex(...args);
        };
    
        // function 
        RLeaderEntity.prototype.prependVertex = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.prependVertex");
          return this.__PROXY__.prependVertex(...args);
        };
    
        // function 
        RLeaderEntity.prototype.insertVertex = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.insertVertex");
          return this.__PROXY__.insertVertex(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getVertexAt = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getVertexAt");
          return this.__PROXY__.getVertexAt(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setVertexAt = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setVertexAt");
          return this.__PROXY__.setVertexAt(...args);
        };
    
        // function 
        RLeaderEntity.prototype.removeLastVertex = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.removeLastVertex");
          return this.__PROXY__.removeLastVertex(...args);
        };
    
        // function 
        RLeaderEntity.prototype.removeVertex = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.removeVertex");
          return this.__PROXY__.removeVertex(...args);
        };
    
        // function 
        RLeaderEntity.prototype.countSegments = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.countSegments");
          return this.__PROXY__.countSegments(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getSegmentAt = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getSegmentAt");
          return this.__PROXY__.getSegmentAt(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getBulgeAt = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getBulgeAt");
          return this.__PROXY__.getBulgeAt(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setBulgeAt = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setBulgeAt");
          return this.__PROXY__.setBulgeAt(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getDirection1 = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getDirection1");
          return this.__PROXY__.getDirection1(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getDirection2 = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getDirection2");
          return this.__PROXY__.getDirection2(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getEndPoint = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getEndPoint");
          return this.__PROXY__.getEndPoint(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getStartPoint = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getStartPoint");
          return this.__PROXY__.getStartPoint(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setClosed = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setClosed");
          return this.__PROXY__.setClosed(...args);
        };
    
        // function 
        RLeaderEntity.prototype.isClosed = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.isClosed");
          return this.__PROXY__.isClosed(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getDimscale = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getDimscale");
          return this.__PROXY__.getDimscale(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setDimscale = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setDimscale");
          return this.__PROXY__.setDimscale(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getDimasz = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getDimasz");
          return this.__PROXY__.getDimasz(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setDimasz = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setDimasz");
          return this.__PROXY__.setDimasz(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getExploded = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getExploded");
          return this.__PROXY__.getExploded(...args);
        };
    
        // function 
        RLeaderEntity.prototype.getDimLeaderBlockId = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.getDimLeaderBlockId");
          return this.__PROXY__.getDimLeaderBlockId(...args);
        };
    
        // function 
        RLeaderEntity.prototype.setDimLeaderBlockId = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.setDimLeaderBlockId");
          return this.__PROXY__.setDimLeaderBlockId(...args);
        };
    
        // function 
        RLeaderEntity.prototype.clearStyleOverrides = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.clearStyleOverrides");
          return this.__PROXY__.clearStyleOverrides(...args);
        };
    
        // function 
        RLeaderEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        RLeaderEntity.prototype.print = function(...args) 
          
        {
          //print("JS: RLeaderEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

        // static function 
        RLeaderEntity.init = function() 
          
        {
          //print("JS: RLeaderEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLeaderEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RLeaderEntity);
  }

  
  else {
    
        print("RLeaderEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLeaderEntity.getRtti = function() 
          
        {
          //print("JS: RLeaderEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLeaderEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RLeaderEntity);
  }

  
  else {
    
        print("RLeaderEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLeaderEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RLeaderEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLeaderEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RLeaderEntity);
  }

  
  else {
    
        print("RLeaderEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RLeaderEntity.INVALID_ID = 
  RLeaderEntity_WrapperSingletonInstance.INVALID_ID;
RLeaderEntity.INVALID_HANDLE = 
  RLeaderEntity_WrapperSingletonInstance.INVALID_HANDLE;
RLeaderEntity.PropertySelected = 
  RLeaderEntity_WrapperSingletonInstance.PropertySelected;
RLeaderEntity.PropertyInvisible = 
  RLeaderEntity_WrapperSingletonInstance.PropertyInvisible;
RLeaderEntity.PropertyParentId = 
  RLeaderEntity_WrapperSingletonInstance.PropertyParentId;
RLeaderEntity.PropertyMinX = 
  RLeaderEntity_WrapperSingletonInstance.PropertyMinX;
RLeaderEntity.PropertyMinY = 
  RLeaderEntity_WrapperSingletonInstance.PropertyMinY;
RLeaderEntity.PropertyMaxX = 
  RLeaderEntity_WrapperSingletonInstance.PropertyMaxX;
RLeaderEntity.PropertyMaxY = 
  RLeaderEntity_WrapperSingletonInstance.PropertyMaxY;
RLeaderEntity.PropertySizeX = 
  RLeaderEntity_WrapperSingletonInstance.PropertySizeX;
RLeaderEntity.PropertySizeY = 
  RLeaderEntity_WrapperSingletonInstance.PropertySizeY;
RLeaderEntity.PropertyCustom = 
  RLeaderEntity_WrapperSingletonInstance.PropertyCustom;
RLeaderEntity.PropertyHandle = 
  RLeaderEntity_WrapperSingletonInstance.PropertyHandle;
RLeaderEntity.PropertyProtected = 
  RLeaderEntity_WrapperSingletonInstance.PropertyProtected;
RLeaderEntity.PropertyWorkingSet = 
  RLeaderEntity_WrapperSingletonInstance.PropertyWorkingSet;
RLeaderEntity.PropertyType = 
  RLeaderEntity_WrapperSingletonInstance.PropertyType;
RLeaderEntity.PropertyBlock = 
  RLeaderEntity_WrapperSingletonInstance.PropertyBlock;
RLeaderEntity.PropertyLayer = 
  RLeaderEntity_WrapperSingletonInstance.PropertyLayer;
RLeaderEntity.PropertyLinetype = 
  RLeaderEntity_WrapperSingletonInstance.PropertyLinetype;
RLeaderEntity.PropertyLinetypeScale = 
  RLeaderEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RLeaderEntity.PropertyLineweight = 
  RLeaderEntity_WrapperSingletonInstance.PropertyLineweight;
RLeaderEntity.PropertyColor = 
  RLeaderEntity_WrapperSingletonInstance.PropertyColor;
RLeaderEntity.PropertyDisplayedColor = 
  RLeaderEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RLeaderEntity.PropertyDrawOrder = 
  RLeaderEntity_WrapperSingletonInstance.PropertyDrawOrder;
RLeaderEntity.PropertyArrowHead = 
  RLeaderEntity_WrapperSingletonInstance.PropertyArrowHead;
RLeaderEntity.PropertySplineShaped = 
  RLeaderEntity_WrapperSingletonInstance.PropertySplineShaped;
RLeaderEntity.PropertyDimLeaderBlock = 
  RLeaderEntity_WrapperSingletonInstance.PropertyDimLeaderBlock;
RLeaderEntity.PropertyVertexNX = 
  RLeaderEntity_WrapperSingletonInstance.PropertyVertexNX;
RLeaderEntity.PropertyVertexNY = 
  RLeaderEntity_WrapperSingletonInstance.PropertyVertexNY;
RLeaderEntity.PropertyVertexNZ = 
  RLeaderEntity_WrapperSingletonInstance.PropertyVertexNZ;
RLeaderEntity.PropertyDimscale = 
  RLeaderEntity_WrapperSingletonInstance.PropertyDimscale;
RLeaderEntity.PropertyDimasz = 
  RLeaderEntity_WrapperSingletonInstance.PropertyDimasz;


      // copy function:
      //RLeaderEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RLeaderEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RLeaderEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      