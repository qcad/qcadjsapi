
      // auto generated
      //var self;

      // class constructor:
      function RLineEntity() {
        

        // should be RLineEntity_BaseJs.call(this, engine):
        //RLineEntity.prototype = new RLineEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RLineEntity.getIdStatic()))) {

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
            qWarning("RLineEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RLineEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RLineEntity);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RLineEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RLineEntity);
  }

  
  else {
    
        print("RLineEntity(): wrong number / type of arguments");
      
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

      //RLineEntity.prototype = new RLineEntity_BaseJs(engine);
      //RLineEntity.prototype = new RLineEntity_Wrapper(engine);
      RLineEntity.prototype = new Object();

      RLineEntity.prototype.toString = function() {
          //return "RLineEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RLineEntity [JS]";
        };
      RLineEntity.getObjectType = function() {
        return RJSType_RLineEntity.getIdStatic();
      };

      RLineEntity.prototype.getObjectType = function() {
        return RJSType_RLineEntity.getIdStatic();
      };

      RLineEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RLineEntity.getIdStatic()) {
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
        RLineEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RLineEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RLineEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RLineEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RLineEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RLineEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RLineEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RLineEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RLineEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RLineEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RLineEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RLineEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RLineEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RLineEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RLineEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RLineEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RLineEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RLineEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RLineEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RLineEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RLineEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RLineEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RLineEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RLineEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RLineEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RLineEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RLineEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RLineEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RLineEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RLineEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RLineEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RLineEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RLineEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RLineEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RLineEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RLineEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RLineEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RLineEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RLineEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RLineEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RLineEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RLineEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RLineEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        RLineEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RLineEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RLineEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RLineEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RLineEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RLineEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RLineEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RLineEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RLineEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RLineEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RLineEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RLineEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RLineEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RLineEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RLineEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RLineEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RLineEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RLineEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RLineEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RLineEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RLineEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RLineEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RLineEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RLineEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RLineEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RLineEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RLineEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RLineEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RLineEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RLineEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RLineEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RLineEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RLineEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RLineEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        RLineEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RLineEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RLineEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RLineEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RLineEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RLineEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RLineEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RLineEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RLineEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RLineEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RLineEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RLineEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RLineEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RLineEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RLineEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        RLineEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RLineEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RLineEntity.prototype.move = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RLineEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RLineEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RLineEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        RLineEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RLineEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        RLineEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RLineEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RLineEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RLineEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RLineEntity.prototype.update = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RLineEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RLineEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RLineEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        RLineEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        RLineEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        RLineEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RLineEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RLineEntity.prototype.init = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RLineEntity.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RLineEntity.prototype.getStaticPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getStaticPropertyTypeIds");
          return this.__PROXY__.getStaticPropertyTypeIds(...args);
        };
    
        // function 
        RLineEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RLineEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RLineEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RLineEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        RLineEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        RLineEntity.prototype.setShape = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.setShape");
          return this.__PROXY__.setShape(...args);
        };
    
        // function 
        RLineEntity.prototype.setStartPoint = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.setStartPoint");
          return this.__PROXY__.setStartPoint(...args);
        };
    
        // function 
        RLineEntity.prototype.getStartPoint = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getStartPoint");
          return this.__PROXY__.getStartPoint(...args);
        };
    
        // function 
        RLineEntity.prototype.setEndPoint = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.setEndPoint");
          return this.__PROXY__.setEndPoint(...args);
        };
    
        // function 
        RLineEntity.prototype.getEndPoint = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getEndPoint");
          return this.__PROXY__.getEndPoint(...args);
        };
    
        // function 
        RLineEntity.prototype.getMiddlePoint = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getMiddlePoint");
          return this.__PROXY__.getMiddlePoint(...args);
        };
    
        // function 
        RLineEntity.prototype.getAngle = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getAngle");
          return this.__PROXY__.getAngle(...args);
        };
    
        // function 
        RLineEntity.prototype.getAngleAt = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getAngleAt");
          return this.__PROXY__.getAngleAt(...args);
        };
    
        // function 
        RLineEntity.prototype.getDirection1 = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getDirection1");
          return this.__PROXY__.getDirection1(...args);
        };
    
        // function 
        RLineEntity.prototype.getDirection2 = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getDirection2");
          return this.__PROXY__.getDirection2(...args);
        };
    
        // function 
        RLineEntity.prototype.reverse = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.reverse");
          return this.__PROXY__.reverse(...args);
        };
    
        // function 
        RLineEntity.prototype.getSideOfPoint = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getSideOfPoint");
          return this.__PROXY__.getSideOfPoint(...args);
        };
    
        // function 
        RLineEntity.prototype.getTrimEnd = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getTrimEnd");
          return this.__PROXY__.getTrimEnd(...args);
        };
    
        // function 
        RLineEntity.prototype.trimStartPoint = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.trimStartPoint");
          return this.__PROXY__.trimStartPoint(...args);
        };
    
        // function 
        RLineEntity.prototype.trimEndPoint = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.trimEndPoint");
          return this.__PROXY__.trimEndPoint(...args);
        };
    
        // function 
        RLineEntity.prototype.getLength = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.getLength");
          return this.__PROXY__.getLength(...args);
        };
    
        // function 
        RLineEntity.prototype.print = function(...args) 
          
        {
          //print("JS: RLineEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

        // static function 
        RLineEntity.init = function() 
          
        {
          //print("JS: RLineEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLineEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RLineEntity);
  }

  
  else {
    
        print("RLineEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLineEntity.getRtti = function() 
          
        {
          //print("JS: RLineEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLineEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RLineEntity);
  }

  
  else {
    
        print("RLineEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLineEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RLineEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLineEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RLineEntity);
  }

  
  else {
    
        print("RLineEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RLineEntity.INVALID_ID = 
  RLineEntity_WrapperSingletonInstance.INVALID_ID;
RLineEntity.INVALID_HANDLE = 
  RLineEntity_WrapperSingletonInstance.INVALID_HANDLE;
RLineEntity.PropertySelected = 
  RLineEntity_WrapperSingletonInstance.PropertySelected;
RLineEntity.PropertyInvisible = 
  RLineEntity_WrapperSingletonInstance.PropertyInvisible;
RLineEntity.PropertyParentId = 
  RLineEntity_WrapperSingletonInstance.PropertyParentId;
RLineEntity.PropertyMinX = 
  RLineEntity_WrapperSingletonInstance.PropertyMinX;
RLineEntity.PropertyMinY = 
  RLineEntity_WrapperSingletonInstance.PropertyMinY;
RLineEntity.PropertyMaxX = 
  RLineEntity_WrapperSingletonInstance.PropertyMaxX;
RLineEntity.PropertyMaxY = 
  RLineEntity_WrapperSingletonInstance.PropertyMaxY;
RLineEntity.PropertySizeX = 
  RLineEntity_WrapperSingletonInstance.PropertySizeX;
RLineEntity.PropertySizeY = 
  RLineEntity_WrapperSingletonInstance.PropertySizeY;
RLineEntity.PropertyCustom = 
  RLineEntity_WrapperSingletonInstance.PropertyCustom;
RLineEntity.PropertyHandle = 
  RLineEntity_WrapperSingletonInstance.PropertyHandle;
RLineEntity.PropertyProtected = 
  RLineEntity_WrapperSingletonInstance.PropertyProtected;
RLineEntity.PropertyWorkingSet = 
  RLineEntity_WrapperSingletonInstance.PropertyWorkingSet;
RLineEntity.PropertyType = 
  RLineEntity_WrapperSingletonInstance.PropertyType;
RLineEntity.PropertyBlock = 
  RLineEntity_WrapperSingletonInstance.PropertyBlock;
RLineEntity.PropertyLayer = 
  RLineEntity_WrapperSingletonInstance.PropertyLayer;
RLineEntity.PropertyLinetype = 
  RLineEntity_WrapperSingletonInstance.PropertyLinetype;
RLineEntity.PropertyLinetypeScale = 
  RLineEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RLineEntity.PropertyLineweight = 
  RLineEntity_WrapperSingletonInstance.PropertyLineweight;
RLineEntity.PropertyColor = 
  RLineEntity_WrapperSingletonInstance.PropertyColor;
RLineEntity.PropertyDisplayedColor = 
  RLineEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RLineEntity.PropertyDrawOrder = 
  RLineEntity_WrapperSingletonInstance.PropertyDrawOrder;
RLineEntity.PropertyStartPointX = 
  RLineEntity_WrapperSingletonInstance.PropertyStartPointX;
RLineEntity.PropertyStartPointY = 
  RLineEntity_WrapperSingletonInstance.PropertyStartPointY;
RLineEntity.PropertyStartPointZ = 
  RLineEntity_WrapperSingletonInstance.PropertyStartPointZ;
RLineEntity.PropertyMiddlePointX = 
  RLineEntity_WrapperSingletonInstance.PropertyMiddlePointX;
RLineEntity.PropertyMiddlePointY = 
  RLineEntity_WrapperSingletonInstance.PropertyMiddlePointY;
RLineEntity.PropertyMiddlePointZ = 
  RLineEntity_WrapperSingletonInstance.PropertyMiddlePointZ;
RLineEntity.PropertyEndPointX = 
  RLineEntity_WrapperSingletonInstance.PropertyEndPointX;
RLineEntity.PropertyEndPointY = 
  RLineEntity_WrapperSingletonInstance.PropertyEndPointY;
RLineEntity.PropertyEndPointZ = 
  RLineEntity_WrapperSingletonInstance.PropertyEndPointZ;
RLineEntity.PropertyAngle = 
  RLineEntity_WrapperSingletonInstance.PropertyAngle;
RLineEntity.PropertyLength = 
  RLineEntity_WrapperSingletonInstance.PropertyLength;
RLineEntity.PropertyTotalLength = 
  RLineEntity_WrapperSingletonInstance.PropertyTotalLength;


      // copy function:
      //RLineEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RLineEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RLineEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      