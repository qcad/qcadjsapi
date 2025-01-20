
      // auto generated
      //var self;

      // class constructor:
      function RTraceEntity() {
        

        // should be RTraceEntity_BaseJs.call(this, engine):
        //RTraceEntity.prototype = new RTraceEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTraceEntity.getIdStatic()))) {

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
            qWarning("RTraceEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RTraceEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RTraceEntity);
  }

  
  else {
    
        print("RTraceEntity(): wrong number / type of arguments");
      
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

      //RTraceEntity.prototype = new RTraceEntity_BaseJs(engine);
      //RTraceEntity.prototype = new RTraceEntity_Wrapper(engine);
      RTraceEntity.prototype = new Object();

      RTraceEntity.prototype.toString = function() {
          //return "RTraceEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTraceEntity [JS]";
        };
      RTraceEntity.getObjectType = function() {
        return RJSType_RTraceEntity.getIdStatic();
      };

      RTraceEntity.prototype.getObjectType = function() {
        return RJSType_RTraceEntity.getIdStatic();
      };

      RTraceEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTraceEntity.getIdStatic()) {
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
        RTraceEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RTraceEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RTraceEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RTraceEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RTraceEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RTraceEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RTraceEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RTraceEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RTraceEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RTraceEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RTraceEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RTraceEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RTraceEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RTraceEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RTraceEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RTraceEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RTraceEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RTraceEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RTraceEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RTraceEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RTraceEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RTraceEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RTraceEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RTraceEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RTraceEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RTraceEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RTraceEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RTraceEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RTraceEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RTraceEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RTraceEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RTraceEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RTraceEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RTraceEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RTraceEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RTraceEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RTraceEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RTraceEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RTraceEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RTraceEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RTraceEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RTraceEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RTraceEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        RTraceEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RTraceEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RTraceEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RTraceEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RTraceEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RTraceEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RTraceEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RTraceEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RTraceEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RTraceEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RTraceEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RTraceEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RTraceEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RTraceEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RTraceEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RTraceEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RTraceEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RTraceEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RTraceEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RTraceEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RTraceEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RTraceEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RTraceEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RTraceEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RTraceEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RTraceEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RTraceEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RTraceEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RTraceEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RTraceEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RTraceEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RTraceEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RTraceEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RTraceEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        RTraceEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RTraceEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RTraceEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RTraceEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RTraceEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RTraceEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RTraceEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RTraceEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RTraceEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RTraceEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RTraceEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RTraceEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RTraceEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RTraceEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RTraceEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        RTraceEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RTraceEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RTraceEntity.prototype.move = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RTraceEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RTraceEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RTraceEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        RTraceEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RTraceEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        RTraceEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RTraceEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RTraceEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RTraceEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RTraceEntity.prototype.update = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RTraceEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RTraceEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RTraceEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        RTraceEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        RTraceEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        RTraceEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RTraceEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RTraceEntity.prototype.init = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RTraceEntity.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RTraceEntity.prototype.getStaticPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getStaticPropertyTypeIds");
          return this.__PROXY__.getStaticPropertyTypeIds(...args);
        };
    
        // function 
        RTraceEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RTraceEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RTraceEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RTraceEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        RTraceEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        RTraceEntity.prototype.getVertexAt = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getVertexAt");
          return this.__PROXY__.getVertexAt(...args);
        };
    
        // function 
        RTraceEntity.prototype.countVertices = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.countVertices");
          return this.__PROXY__.countVertices(...args);
        };
    
        // function 
        RTraceEntity.prototype.getStartPoint = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getStartPoint");
          return this.__PROXY__.getStartPoint(...args);
        };
    
        // function 
        RTraceEntity.prototype.getEndPoint = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getEndPoint");
          return this.__PROXY__.getEndPoint(...args);
        };
    
        // function 
        RTraceEntity.prototype.getDirection1 = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getDirection1");
          return this.__PROXY__.getDirection1(...args);
        };
    
        // function 
        RTraceEntity.prototype.getDirection2 = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getDirection2");
          return this.__PROXY__.getDirection2(...args);
        };
    
        // function 
        RTraceEntity.prototype.reverse = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.reverse");
          return this.__PROXY__.reverse(...args);
        };
    
        // function 
        RTraceEntity.prototype.getTrimEnd = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getTrimEnd");
          return this.__PROXY__.getTrimEnd(...args);
        };
    
        // function 
        RTraceEntity.prototype.trimStartPoint = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.trimStartPoint");
          return this.__PROXY__.trimStartPoint(...args);
        };
    
        // function 
        RTraceEntity.prototype.trimEndPoint = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.trimEndPoint");
          return this.__PROXY__.trimEndPoint(...args);
        };
    
        // function 
        RTraceEntity.prototype.getLength = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.getLength");
          return this.__PROXY__.getLength(...args);
        };
    
        // function 
        RTraceEntity.prototype.print = function(...args) 
          
        {
          //print("JS: RTraceEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

        // static function 
        RTraceEntity.init = function() 
          
        {
          //print("JS: RTraceEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RTraceEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RTraceEntity);
  }

  
  else {
    
        print("RTraceEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTraceEntity.getRtti = function() 
          
        {
          //print("JS: RTraceEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RTraceEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RTraceEntity);
  }

  
  else {
    
        print("RTraceEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTraceEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RTraceEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RTraceEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RTraceEntity);
  }

  
  else {
    
        print("RTraceEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RTraceEntity.INVALID_ID = 
  RTraceEntity_WrapperSingletonInstance.INVALID_ID;
RTraceEntity.INVALID_HANDLE = 
  RTraceEntity_WrapperSingletonInstance.INVALID_HANDLE;
RTraceEntity.PropertySelected = 
  RTraceEntity_WrapperSingletonInstance.PropertySelected;
RTraceEntity.PropertyInvisible = 
  RTraceEntity_WrapperSingletonInstance.PropertyInvisible;
RTraceEntity.PropertyParentId = 
  RTraceEntity_WrapperSingletonInstance.PropertyParentId;
RTraceEntity.PropertyMinX = 
  RTraceEntity_WrapperSingletonInstance.PropertyMinX;
RTraceEntity.PropertyMinY = 
  RTraceEntity_WrapperSingletonInstance.PropertyMinY;
RTraceEntity.PropertyMaxX = 
  RTraceEntity_WrapperSingletonInstance.PropertyMaxX;
RTraceEntity.PropertyMaxY = 
  RTraceEntity_WrapperSingletonInstance.PropertyMaxY;
RTraceEntity.PropertySizeX = 
  RTraceEntity_WrapperSingletonInstance.PropertySizeX;
RTraceEntity.PropertySizeY = 
  RTraceEntity_WrapperSingletonInstance.PropertySizeY;
RTraceEntity.PropertyCustom = 
  RTraceEntity_WrapperSingletonInstance.PropertyCustom;
RTraceEntity.PropertyHandle = 
  RTraceEntity_WrapperSingletonInstance.PropertyHandle;
RTraceEntity.PropertyProtected = 
  RTraceEntity_WrapperSingletonInstance.PropertyProtected;
RTraceEntity.PropertyWorkingSet = 
  RTraceEntity_WrapperSingletonInstance.PropertyWorkingSet;
RTraceEntity.PropertyType = 
  RTraceEntity_WrapperSingletonInstance.PropertyType;
RTraceEntity.PropertyBlock = 
  RTraceEntity_WrapperSingletonInstance.PropertyBlock;
RTraceEntity.PropertyLayer = 
  RTraceEntity_WrapperSingletonInstance.PropertyLayer;
RTraceEntity.PropertyLinetype = 
  RTraceEntity_WrapperSingletonInstance.PropertyLinetype;
RTraceEntity.PropertyLinetypeScale = 
  RTraceEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RTraceEntity.PropertyLineweight = 
  RTraceEntity_WrapperSingletonInstance.PropertyLineweight;
RTraceEntity.PropertyColor = 
  RTraceEntity_WrapperSingletonInstance.PropertyColor;
RTraceEntity.PropertyDisplayedColor = 
  RTraceEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RTraceEntity.PropertyDrawOrder = 
  RTraceEntity_WrapperSingletonInstance.PropertyDrawOrder;
RTraceEntity.PropertyPoint1X = 
  RTraceEntity_WrapperSingletonInstance.PropertyPoint1X;
RTraceEntity.PropertyPoint1Y = 
  RTraceEntity_WrapperSingletonInstance.PropertyPoint1Y;
RTraceEntity.PropertyPoint1Z = 
  RTraceEntity_WrapperSingletonInstance.PropertyPoint1Z;
RTraceEntity.PropertyPoint2X = 
  RTraceEntity_WrapperSingletonInstance.PropertyPoint2X;
RTraceEntity.PropertyPoint2Y = 
  RTraceEntity_WrapperSingletonInstance.PropertyPoint2Y;
RTraceEntity.PropertyPoint2Z = 
  RTraceEntity_WrapperSingletonInstance.PropertyPoint2Z;
RTraceEntity.PropertyPoint3X = 
  RTraceEntity_WrapperSingletonInstance.PropertyPoint3X;
RTraceEntity.PropertyPoint3Y = 
  RTraceEntity_WrapperSingletonInstance.PropertyPoint3Y;
RTraceEntity.PropertyPoint3Z = 
  RTraceEntity_WrapperSingletonInstance.PropertyPoint3Z;
RTraceEntity.PropertyPoint4X = 
  RTraceEntity_WrapperSingletonInstance.PropertyPoint4X;
RTraceEntity.PropertyPoint4Y = 
  RTraceEntity_WrapperSingletonInstance.PropertyPoint4Y;
RTraceEntity.PropertyPoint4Z = 
  RTraceEntity_WrapperSingletonInstance.PropertyPoint4Z;
RTraceEntity.PropertyLength = 
  RTraceEntity_WrapperSingletonInstance.PropertyLength;
RTraceEntity.PropertyTotalLength = 
  RTraceEntity_WrapperSingletonInstance.PropertyTotalLength;


      // copy function:
      //RTraceEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTraceEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RTraceEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      