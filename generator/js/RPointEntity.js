
      // auto generated
      //var self;

      // class constructor:
      function RPointEntity() {
        

        // should be RPointEntity_BaseJs.call(this, engine):
        //RPointEntity.prototype = new RPointEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPointEntity.getIdStatic()))) {

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
            qWarning("RPointEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RPointEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RPointEntity);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RPointEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RPointEntity);
  }

  
  else {
    
        print("RPointEntity(): wrong number / type of arguments");
      
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

      //RPointEntity.prototype = new RPointEntity_BaseJs(engine);
      //RPointEntity.prototype = new RPointEntity_Wrapper(engine);
      RPointEntity.prototype = new Object();

      RPointEntity.prototype.toString = function() {
          //return "RPointEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPointEntity [JS]";
        };
      RPointEntity.getObjectType = function() {
        return RJSType_RPointEntity.getIdStatic();
      };

      RPointEntity.prototype.getObjectType = function() {
        return RJSType_RPointEntity.getIdStatic();
      };

      RPointEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPointEntity.getIdStatic()) {
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
        RPointEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RPointEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RPointEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RPointEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RPointEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RPointEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RPointEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RPointEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RPointEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RPointEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RPointEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RPointEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RPointEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RPointEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RPointEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RPointEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RPointEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RPointEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RPointEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RPointEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RPointEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RPointEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RPointEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RPointEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RPointEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RPointEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RPointEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RPointEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RPointEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RPointEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RPointEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RPointEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RPointEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RPointEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RPointEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RPointEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RPointEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RPointEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RPointEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RPointEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RPointEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RPointEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RPointEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        RPointEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RPointEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RPointEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RPointEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RPointEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RPointEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RPointEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RPointEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RPointEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RPointEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RPointEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RPointEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RPointEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RPointEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RPointEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RPointEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RPointEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RPointEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RPointEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RPointEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RPointEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RPointEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RPointEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RPointEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RPointEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RPointEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RPointEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RPointEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RPointEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RPointEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RPointEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RPointEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RPointEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RPointEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        RPointEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RPointEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RPointEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RPointEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RPointEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RPointEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RPointEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RPointEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RPointEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RPointEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RPointEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RPointEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RPointEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RPointEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RPointEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        RPointEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RPointEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RPointEntity.prototype.move = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RPointEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RPointEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RPointEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        RPointEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RPointEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        RPointEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RPointEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RPointEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RPointEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RPointEntity.prototype.update = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RPointEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RPointEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RPointEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        RPointEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        RPointEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        RPointEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RPointEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RPointEntity.prototype.init = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RPointEntity.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RPointEntity.prototype.getStaticPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getStaticPropertyTypeIds");
          return this.__PROXY__.getStaticPropertyTypeIds(...args);
        };
    
        // function 
        RPointEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RPointEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RPointEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RPointEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        RPointEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        RPointEntity.prototype.getPosition = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.getPosition");
          return this.__PROXY__.getPosition(...args);
        };
    
        // function 
        RPointEntity.prototype.print = function(...args) 
          
        {
          //print("JS: RPointEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

        // static function 
        RPointEntity.init = function() 
          
        {
          //print("JS: RPointEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPointEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RPointEntity);
  }

  
  else {
    
        print("RPointEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPointEntity.getRtti = function() 
          
        {
          //print("JS: RPointEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPointEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RPointEntity);
  }

  
  else {
    
        print("RPointEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPointEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RPointEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPointEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RPointEntity);
  }

  
  else {
    
        print("RPointEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RPointEntity.INVALID_ID = 
  RPointEntity_WrapperSingletonInstance.INVALID_ID;
RPointEntity.INVALID_HANDLE = 
  RPointEntity_WrapperSingletonInstance.INVALID_HANDLE;
RPointEntity.PropertySelected = 
  RPointEntity_WrapperSingletonInstance.PropertySelected;
RPointEntity.PropertyInvisible = 
  RPointEntity_WrapperSingletonInstance.PropertyInvisible;
RPointEntity.PropertyParentId = 
  RPointEntity_WrapperSingletonInstance.PropertyParentId;
RPointEntity.PropertyMinX = 
  RPointEntity_WrapperSingletonInstance.PropertyMinX;
RPointEntity.PropertyMinY = 
  RPointEntity_WrapperSingletonInstance.PropertyMinY;
RPointEntity.PropertyMaxX = 
  RPointEntity_WrapperSingletonInstance.PropertyMaxX;
RPointEntity.PropertyMaxY = 
  RPointEntity_WrapperSingletonInstance.PropertyMaxY;
RPointEntity.PropertySizeX = 
  RPointEntity_WrapperSingletonInstance.PropertySizeX;
RPointEntity.PropertySizeY = 
  RPointEntity_WrapperSingletonInstance.PropertySizeY;
RPointEntity.PropertyCustom = 
  RPointEntity_WrapperSingletonInstance.PropertyCustom;
RPointEntity.PropertyHandle = 
  RPointEntity_WrapperSingletonInstance.PropertyHandle;
RPointEntity.PropertyProtected = 
  RPointEntity_WrapperSingletonInstance.PropertyProtected;
RPointEntity.PropertyWorkingSet = 
  RPointEntity_WrapperSingletonInstance.PropertyWorkingSet;
RPointEntity.PropertyType = 
  RPointEntity_WrapperSingletonInstance.PropertyType;
RPointEntity.PropertyBlock = 
  RPointEntity_WrapperSingletonInstance.PropertyBlock;
RPointEntity.PropertyLayer = 
  RPointEntity_WrapperSingletonInstance.PropertyLayer;
RPointEntity.PropertyLinetype = 
  RPointEntity_WrapperSingletonInstance.PropertyLinetype;
RPointEntity.PropertyLinetypeScale = 
  RPointEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RPointEntity.PropertyLineweight = 
  RPointEntity_WrapperSingletonInstance.PropertyLineweight;
RPointEntity.PropertyColor = 
  RPointEntity_WrapperSingletonInstance.PropertyColor;
RPointEntity.PropertyDisplayedColor = 
  RPointEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RPointEntity.PropertyDrawOrder = 
  RPointEntity_WrapperSingletonInstance.PropertyDrawOrder;
RPointEntity.PropertyPositionX = 
  RPointEntity_WrapperSingletonInstance.PropertyPositionX;
RPointEntity.PropertyPositionY = 
  RPointEntity_WrapperSingletonInstance.PropertyPositionY;
RPointEntity.PropertyPositionZ = 
  RPointEntity_WrapperSingletonInstance.PropertyPositionZ;


      // copy function:
      //RPointEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPointEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RPointEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      