
      // auto generated
      //var self;

      // class constructor:
      function RViewportEntity() {
        

        // should be RViewportEntity_BaseJs.call(this, engine):
        //RViewportEntity.prototype = new RViewportEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RViewportEntity.getIdStatic()))) {

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
            qWarning("RViewportEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RViewportEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RViewportEntity);
  }

  
  else {
    
        print("RViewportEntity(): wrong number / type of arguments");
      
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

      //RViewportEntity.prototype = new RViewportEntity_BaseJs(engine);
      //RViewportEntity.prototype = new RViewportEntity_Wrapper(engine);
      RViewportEntity.prototype = new Object();

      RViewportEntity.prototype.toString = function() {
          //return "RViewportEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RViewportEntity [JS]";
        };
      RViewportEntity.getObjectType = function() {
        return RJSType_RViewportEntity.getIdStatic();
      };

      RViewportEntity.prototype.getObjectType = function() {
        return RJSType_RViewportEntity.getIdStatic();
      };

      RViewportEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RViewportEntity.getIdStatic()) {
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
        RViewportEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RViewportEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RViewportEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RViewportEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RViewportEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RViewportEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RViewportEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RViewportEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RViewportEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RViewportEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RViewportEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RViewportEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RViewportEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RViewportEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RViewportEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RViewportEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RViewportEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RViewportEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RViewportEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RViewportEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RViewportEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RViewportEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RViewportEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RViewportEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RViewportEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RViewportEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RViewportEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RViewportEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RViewportEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RViewportEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RViewportEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RViewportEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RViewportEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RViewportEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RViewportEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RViewportEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RViewportEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RViewportEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RViewportEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RViewportEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RViewportEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RViewportEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RViewportEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        RViewportEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RViewportEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RViewportEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RViewportEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RViewportEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RViewportEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RViewportEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RViewportEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RViewportEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RViewportEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RViewportEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RViewportEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RViewportEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RViewportEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RViewportEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RViewportEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RViewportEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RViewportEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RViewportEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RViewportEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RViewportEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RViewportEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RViewportEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RViewportEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RViewportEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RViewportEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RViewportEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RViewportEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RViewportEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RViewportEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RViewportEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RViewportEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RViewportEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RViewportEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        RViewportEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RViewportEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RViewportEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RViewportEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RViewportEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RViewportEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RViewportEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RViewportEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RViewportEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RViewportEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RViewportEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RViewportEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RViewportEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RViewportEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RViewportEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        RViewportEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RViewportEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RViewportEntity.prototype.move = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RViewportEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RViewportEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RViewportEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        RViewportEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RViewportEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        RViewportEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RViewportEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RViewportEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RViewportEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RViewportEntity.prototype.update = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RViewportEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RViewportEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RViewportEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        RViewportEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        RViewportEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        RViewportEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RViewportEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RViewportEntity.prototype.print = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    
        // function 
        RViewportEntity.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RViewportEntity.prototype.init = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RViewportEntity.prototype.getStaticPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getStaticPropertyTypeIds");
          return this.__PROXY__.getStaticPropertyTypeIds(...args);
        };
    
        // function 
        RViewportEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RViewportEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RViewportEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RViewportEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        RViewportEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        RViewportEntity.prototype.setData = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setData");
          return this.__PROXY__.setData(...args);
        };
    
        // function 
        RViewportEntity.prototype.getViewportId = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getViewportId");
          return this.__PROXY__.getViewportId(...args);
        };
    
        // function 
        RViewportEntity.prototype.setViewportId = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setViewportId");
          return this.__PROXY__.setViewportId(...args);
        };
    
        // function 
        RViewportEntity.prototype.getStatus = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getStatus");
          return this.__PROXY__.getStatus(...args);
        };
    
        // function 
        RViewportEntity.prototype.setStatus = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setStatus");
          return this.__PROXY__.setStatus(...args);
        };
    
        // function 
        RViewportEntity.prototype.getCenter = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getCenter");
          return this.__PROXY__.getCenter(...args);
        };
    
        // function 
        RViewportEntity.prototype.setCenter = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setCenter");
          return this.__PROXY__.setCenter(...args);
        };
    
        // function 
        RViewportEntity.prototype.getViewCenter = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getViewCenter");
          return this.__PROXY__.getViewCenter(...args);
        };
    
        // function 
        RViewportEntity.prototype.setViewCenter = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setViewCenter");
          return this.__PROXY__.setViewCenter(...args);
        };
    
        // function 
        RViewportEntity.prototype.getViewTarget = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getViewTarget");
          return this.__PROXY__.getViewTarget(...args);
        };
    
        // function 
        RViewportEntity.prototype.setViewTarget = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setViewTarget");
          return this.__PROXY__.setViewTarget(...args);
        };
    
        // function 
        RViewportEntity.prototype.getWidth = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getWidth");
          return this.__PROXY__.getWidth(...args);
        };
    
        // function 
        RViewportEntity.prototype.setWidth = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setWidth");
          return this.__PROXY__.setWidth(...args);
        };
    
        // function 
        RViewportEntity.prototype.getHeight = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getHeight");
          return this.__PROXY__.getHeight(...args);
        };
    
        // function 
        RViewportEntity.prototype.setHeight = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setHeight");
          return this.__PROXY__.setHeight(...args);
        };
    
        // function 
        RViewportEntity.prototype.getScale = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getScale");
          return this.__PROXY__.getScale(...args);
        };
    
        // function 
        RViewportEntity.prototype.setScale = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setScale");
          return this.__PROXY__.setScale(...args);
        };
    
        // function 
        RViewportEntity.prototype.getRotation = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getRotation");
          return this.__PROXY__.getRotation(...args);
        };
    
        // function 
        RViewportEntity.prototype.setRotation = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setRotation");
          return this.__PROXY__.setRotation(...args);
        };
    
        // function 
        RViewportEntity.prototype.isOverall = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.isOverall");
          return this.__PROXY__.isOverall(...args);
        };
    
        // function 
        RViewportEntity.prototype.setOverall = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setOverall");
          return this.__PROXY__.setOverall(...args);
        };
    
        // function 
        RViewportEntity.prototype.isOff = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.isOff");
          return this.__PROXY__.isOff(...args);
        };
    
        // function 
        RViewportEntity.prototype.setOff = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setOff");
          return this.__PROXY__.setOff(...args);
        };
    
        // function 
        RViewportEntity.prototype.getViewOffset = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getViewOffset");
          return this.__PROXY__.getViewOffset(...args);
        };
    
        // function 
        RViewportEntity.prototype.getPosition = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getPosition");
          return this.__PROXY__.getPosition(...args);
        };
    
        // function 
        RViewportEntity.prototype.setPosition = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setPosition");
          return this.__PROXY__.setPosition(...args);
        };
    
        // function 
        RViewportEntity.prototype.getFrozenLayerIds = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.getFrozenLayerIds");
          return this.__PROXY__.getFrozenLayerIds(...args);
        };
    
        // function 
        RViewportEntity.prototype.setFrozenLayerIds = function(...args) 
          
        {
          //print("JS: RViewportEntity.prototype.setFrozenLayerIds");
          return this.__PROXY__.setFrozenLayerIds(...args);
        };
    

      // static functions:
      

        // static function 
        RViewportEntity.getRtti = function() 
          
        {
          //print("JS: RViewportEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RViewportEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RViewportEntity);
  }

  
  else {
    
        print("RViewportEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RViewportEntity.init = function() 
          
        {
          //print("JS: RViewportEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RViewportEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RViewportEntity);
  }

  
  else {
    
        print("RViewportEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RViewportEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RViewportEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RViewportEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RViewportEntity);
  }

  
  else {
    
        print("RViewportEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RViewportEntity.INVALID_ID = 
  RViewportEntity_WrapperSingletonInstance.INVALID_ID;
RViewportEntity.INVALID_HANDLE = 
  RViewportEntity_WrapperSingletonInstance.INVALID_HANDLE;
RViewportEntity.PropertySelected = 
  RViewportEntity_WrapperSingletonInstance.PropertySelected;
RViewportEntity.PropertyInvisible = 
  RViewportEntity_WrapperSingletonInstance.PropertyInvisible;
RViewportEntity.PropertyProtected = 
  RViewportEntity_WrapperSingletonInstance.PropertyProtected;
RViewportEntity.PropertyWorkingSet = 
  RViewportEntity_WrapperSingletonInstance.PropertyWorkingSet;
RViewportEntity.PropertyParentId = 
  RViewportEntity_WrapperSingletonInstance.PropertyParentId;
RViewportEntity.PropertyMinX = 
  RViewportEntity_WrapperSingletonInstance.PropertyMinX;
RViewportEntity.PropertyMinY = 
  RViewportEntity_WrapperSingletonInstance.PropertyMinY;
RViewportEntity.PropertyMaxX = 
  RViewportEntity_WrapperSingletonInstance.PropertyMaxX;
RViewportEntity.PropertyMaxY = 
  RViewportEntity_WrapperSingletonInstance.PropertyMaxY;
RViewportEntity.PropertySizeX = 
  RViewportEntity_WrapperSingletonInstance.PropertySizeX;
RViewportEntity.PropertySizeY = 
  RViewportEntity_WrapperSingletonInstance.PropertySizeY;
RViewportEntity.PropertyCustom = 
  RViewportEntity_WrapperSingletonInstance.PropertyCustom;
RViewportEntity.PropertyHandle = 
  RViewportEntity_WrapperSingletonInstance.PropertyHandle;
RViewportEntity.PropertyType = 
  RViewportEntity_WrapperSingletonInstance.PropertyType;
RViewportEntity.PropertyBlock = 
  RViewportEntity_WrapperSingletonInstance.PropertyBlock;
RViewportEntity.PropertyLayer = 
  RViewportEntity_WrapperSingletonInstance.PropertyLayer;
RViewportEntity.PropertyLinetype = 
  RViewportEntity_WrapperSingletonInstance.PropertyLinetype;
RViewportEntity.PropertyLinetypeScale = 
  RViewportEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RViewportEntity.PropertyLineweight = 
  RViewportEntity_WrapperSingletonInstance.PropertyLineweight;
RViewportEntity.PropertyColor = 
  RViewportEntity_WrapperSingletonInstance.PropertyColor;
RViewportEntity.PropertyDisplayedColor = 
  RViewportEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RViewportEntity.PropertyDrawOrder = 
  RViewportEntity_WrapperSingletonInstance.PropertyDrawOrder;
RViewportEntity.PropertyCenterX = 
  RViewportEntity_WrapperSingletonInstance.PropertyCenterX;
RViewportEntity.PropertyCenterY = 
  RViewportEntity_WrapperSingletonInstance.PropertyCenterY;
RViewportEntity.PropertyCenterZ = 
  RViewportEntity_WrapperSingletonInstance.PropertyCenterZ;
RViewportEntity.PropertyWidth = 
  RViewportEntity_WrapperSingletonInstance.PropertyWidth;
RViewportEntity.PropertyHeight = 
  RViewportEntity_WrapperSingletonInstance.PropertyHeight;
RViewportEntity.PropertyScale = 
  RViewportEntity_WrapperSingletonInstance.PropertyScale;
RViewportEntity.PropertyRotation = 
  RViewportEntity_WrapperSingletonInstance.PropertyRotation;
RViewportEntity.PropertyOn = 
  RViewportEntity_WrapperSingletonInstance.PropertyOn;
RViewportEntity.PropertyViewCenterX = 
  RViewportEntity_WrapperSingletonInstance.PropertyViewCenterX;
RViewportEntity.PropertyViewCenterY = 
  RViewportEntity_WrapperSingletonInstance.PropertyViewCenterY;
RViewportEntity.PropertyViewTargetX = 
  RViewportEntity_WrapperSingletonInstance.PropertyViewTargetX;
RViewportEntity.PropertyViewTargetY = 
  RViewportEntity_WrapperSingletonInstance.PropertyViewTargetY;
RViewportEntity.PropertyViewTargetZ = 
  RViewportEntity_WrapperSingletonInstance.PropertyViewTargetZ;
RViewportEntity.PropertyOverall = 
  RViewportEntity_WrapperSingletonInstance.PropertyOverall;
RViewportEntity.PropertyFrozenLayerIds = 
  RViewportEntity_WrapperSingletonInstance.PropertyFrozenLayerIds;


      // copy function:
      //RViewportEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RViewportEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RViewportEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      