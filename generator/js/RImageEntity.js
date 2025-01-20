
      // auto generated
      //var self;

      // class constructor:
      function RImageEntity() {
        

        // should be RImageEntity_BaseJs.call(this, engine):
        //RImageEntity.prototype = new RImageEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RImageEntity.getIdStatic()))) {

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
            qWarning("RImageEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RImageEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RImageEntity);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RImageEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RImageEntity);
  }

  
  else {
    
        print("RImageEntity(): wrong number / type of arguments");
      
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

      //RImageEntity.prototype = new RImageEntity_BaseJs(engine);
      //RImageEntity.prototype = new RImageEntity_Wrapper(engine);
      RImageEntity.prototype = new Object();

      RImageEntity.prototype.toString = function() {
          //return "RImageEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RImageEntity [JS]";
        };
      RImageEntity.getObjectType = function() {
        return RJSType_RImageEntity.getIdStatic();
      };

      RImageEntity.prototype.getObjectType = function() {
        return RJSType_RImageEntity.getIdStatic();
      };

      RImageEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RImageEntity.getIdStatic()) {
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
        RImageEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RImageEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RImageEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RImageEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RImageEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RImageEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RImageEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RImageEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RImageEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RImageEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RImageEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RImageEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RImageEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RImageEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RImageEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RImageEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RImageEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RImageEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RImageEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RImageEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RImageEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RImageEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RImageEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RImageEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RImageEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RImageEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RImageEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RImageEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RImageEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RImageEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RImageEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RImageEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RImageEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RImageEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RImageEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RImageEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RImageEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RImageEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RImageEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RImageEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RImageEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RImageEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RImageEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        RImageEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RImageEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RImageEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RImageEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RImageEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RImageEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RImageEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RImageEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RImageEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RImageEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RImageEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RImageEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RImageEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RImageEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RImageEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RImageEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RImageEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RImageEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RImageEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RImageEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RImageEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RImageEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RImageEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RImageEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RImageEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RImageEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RImageEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RImageEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RImageEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RImageEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RImageEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RImageEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RImageEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RImageEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        RImageEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RImageEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RImageEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RImageEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RImageEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RImageEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RImageEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RImageEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RImageEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RImageEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RImageEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RImageEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RImageEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RImageEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RImageEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        RImageEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RImageEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RImageEntity.prototype.move = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RImageEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RImageEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RImageEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        RImageEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RImageEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        RImageEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RImageEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RImageEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RImageEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RImageEntity.prototype.update = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RImageEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RImageEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RImageEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        RImageEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        RImageEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        RImageEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RImageEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RImageEntity.prototype.init = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RImageEntity.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RImageEntity.prototype.getStaticPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getStaticPropertyTypeIds");
          return this.__PROXY__.getStaticPropertyTypeIds(...args);
        };
    
        // function 
        RImageEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RImageEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RImageEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RImageEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        RImageEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        RImageEntity.prototype.getFileName = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getFileName");
          return this.__PROXY__.getFileName(...args);
        };
    
        // function 
        RImageEntity.prototype.setFileName = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.setFileName");
          return this.__PROXY__.setFileName(...args);
        };
    
        // function 
        RImageEntity.prototype.getInsertionPoint = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getInsertionPoint");
          return this.__PROXY__.getInsertionPoint(...args);
        };
    
        // function 
        RImageEntity.prototype.setInsertionPoint = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.setInsertionPoint");
          return this.__PROXY__.setInsertionPoint(...args);
        };
    
        // function 
        RImageEntity.prototype.getUVector = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getUVector");
          return this.__PROXY__.getUVector(...args);
        };
    
        // function 
        RImageEntity.prototype.getVVector = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getVVector");
          return this.__PROXY__.getVVector(...args);
        };
    
        // function 
        RImageEntity.prototype.getBrightness = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getBrightness");
          return this.__PROXY__.getBrightness(...args);
        };
    
        // function 
        RImageEntity.prototype.getContrast = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getContrast");
          return this.__PROXY__.getContrast(...args);
        };
    
        // function 
        RImageEntity.prototype.getFade = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getFade");
          return this.__PROXY__.getFade(...args);
        };
    
        // function 
        RImageEntity.prototype.setWidth = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.setWidth");
          return this.__PROXY__.setWidth(...args);
        };
    
        // function 
        RImageEntity.prototype.setHeight = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.setHeight");
          return this.__PROXY__.setHeight(...args);
        };
    
        // function 
        RImageEntity.prototype.setAngle = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.setAngle");
          return this.__PROXY__.setAngle(...args);
        };
    
        // function 
        RImageEntity.prototype.getWidth = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getWidth");
          return this.__PROXY__.getWidth(...args);
        };
    
        // function 
        RImageEntity.prototype.getHeight = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getHeight");
          return this.__PROXY__.getHeight(...args);
        };
    
        // function 
        RImageEntity.prototype.getPixelWidth = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getPixelWidth");
          return this.__PROXY__.getPixelWidth(...args);
        };
    
        // function 
        RImageEntity.prototype.getPixelHeight = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.getPixelHeight");
          return this.__PROXY__.getPixelHeight(...args);
        };
    
        // function 
        RImageEntity.prototype.print = function(...args) 
          
        {
          //print("JS: RImageEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

        // static function 
        RImageEntity.init = function() 
          
        {
          //print("JS: RImageEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RImageEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RImageEntity);
  }

  
  else {
    
        print("RImageEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RImageEntity.getRtti = function() 
          
        {
          //print("JS: RImageEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RImageEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RImageEntity);
  }

  
  else {
    
        print("RImageEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RImageEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RImageEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RImageEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RImageEntity);
  }

  
  else {
    
        print("RImageEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RImageEntity.INVALID_ID = 
  RImageEntity_WrapperSingletonInstance.INVALID_ID;
RImageEntity.INVALID_HANDLE = 
  RImageEntity_WrapperSingletonInstance.INVALID_HANDLE;
RImageEntity.PropertySelected = 
  RImageEntity_WrapperSingletonInstance.PropertySelected;
RImageEntity.PropertyInvisible = 
  RImageEntity_WrapperSingletonInstance.PropertyInvisible;
RImageEntity.PropertyParentId = 
  RImageEntity_WrapperSingletonInstance.PropertyParentId;
RImageEntity.PropertyMinX = 
  RImageEntity_WrapperSingletonInstance.PropertyMinX;
RImageEntity.PropertyMinY = 
  RImageEntity_WrapperSingletonInstance.PropertyMinY;
RImageEntity.PropertyMaxX = 
  RImageEntity_WrapperSingletonInstance.PropertyMaxX;
RImageEntity.PropertyMaxY = 
  RImageEntity_WrapperSingletonInstance.PropertyMaxY;
RImageEntity.PropertySizeX = 
  RImageEntity_WrapperSingletonInstance.PropertySizeX;
RImageEntity.PropertySizeY = 
  RImageEntity_WrapperSingletonInstance.PropertySizeY;
RImageEntity.PropertyCustom = 
  RImageEntity_WrapperSingletonInstance.PropertyCustom;
RImageEntity.PropertyHandle = 
  RImageEntity_WrapperSingletonInstance.PropertyHandle;
RImageEntity.PropertyProtected = 
  RImageEntity_WrapperSingletonInstance.PropertyProtected;
RImageEntity.PropertyWorkingSet = 
  RImageEntity_WrapperSingletonInstance.PropertyWorkingSet;
RImageEntity.PropertyType = 
  RImageEntity_WrapperSingletonInstance.PropertyType;
RImageEntity.PropertyBlock = 
  RImageEntity_WrapperSingletonInstance.PropertyBlock;
RImageEntity.PropertyLayer = 
  RImageEntity_WrapperSingletonInstance.PropertyLayer;
RImageEntity.PropertyLinetype = 
  RImageEntity_WrapperSingletonInstance.PropertyLinetype;
RImageEntity.PropertyLinetypeScale = 
  RImageEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RImageEntity.PropertyLineweight = 
  RImageEntity_WrapperSingletonInstance.PropertyLineweight;
RImageEntity.PropertyColor = 
  RImageEntity_WrapperSingletonInstance.PropertyColor;
RImageEntity.PropertyDisplayedColor = 
  RImageEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RImageEntity.PropertyDrawOrder = 
  RImageEntity_WrapperSingletonInstance.PropertyDrawOrder;
RImageEntity.PropertyFileName = 
  RImageEntity_WrapperSingletonInstance.PropertyFileName;
RImageEntity.PropertyInsertionPointX = 
  RImageEntity_WrapperSingletonInstance.PropertyInsertionPointX;
RImageEntity.PropertyInsertionPointY = 
  RImageEntity_WrapperSingletonInstance.PropertyInsertionPointY;
RImageEntity.PropertyInsertionPointZ = 
  RImageEntity_WrapperSingletonInstance.PropertyInsertionPointZ;
RImageEntity.PropertyUX = 
  RImageEntity_WrapperSingletonInstance.PropertyUX;
RImageEntity.PropertyUY = 
  RImageEntity_WrapperSingletonInstance.PropertyUY;
RImageEntity.PropertyVX = 
  RImageEntity_WrapperSingletonInstance.PropertyVX;
RImageEntity.PropertyVY = 
  RImageEntity_WrapperSingletonInstance.PropertyVY;
RImageEntity.PropertyScaleFactorX = 
  RImageEntity_WrapperSingletonInstance.PropertyScaleFactorX;
RImageEntity.PropertyScaleFactorY = 
  RImageEntity_WrapperSingletonInstance.PropertyScaleFactorY;
RImageEntity.PropertyAngle = 
  RImageEntity_WrapperSingletonInstance.PropertyAngle;
RImageEntity.PropertyWidth = 
  RImageEntity_WrapperSingletonInstance.PropertyWidth;
RImageEntity.PropertyHeight = 
  RImageEntity_WrapperSingletonInstance.PropertyHeight;
RImageEntity.PropertyFade = 
  RImageEntity_WrapperSingletonInstance.PropertyFade;


      // copy function:
      //RImageEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RImageEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RImageEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      