
      // auto generated
      //var self;

      // class constructor:
      function RXLineEntity() {
        

        // should be RXLineEntity_BaseJs.call(this, engine):
        //RXLineEntity.prototype = new RXLineEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RXLineEntity.getIdStatic()))) {

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
            qWarning("RXLineEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RXLineEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RXLineEntity);
  }

  
  else {
    
        print("RXLineEntity(): wrong number / type of arguments");
      
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

      //RXLineEntity.prototype = new RXLineEntity_BaseJs(engine);
      //RXLineEntity.prototype = new RXLineEntity_Wrapper(engine);
      RXLineEntity.prototype = new Object();

      RXLineEntity.prototype.toString = function() {
          //return "RXLineEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RXLineEntity [JS]";
        };
      RXLineEntity.getObjectType = function() {
        return RJSType_RXLineEntity.getIdStatic();
      };

      RXLineEntity.prototype.getObjectType = function() {
        return RJSType_RXLineEntity.getIdStatic();
      };

      RXLineEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RXLineEntity.getIdStatic()) {
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
        RXLineEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RXLineEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RXLineEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RXLineEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RXLineEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RXLineEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RXLineEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RXLineEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RXLineEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RXLineEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RXLineEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RXLineEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RXLineEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RXLineEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RXLineEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RXLineEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RXLineEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RXLineEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RXLineEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RXLineEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RXLineEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RXLineEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RXLineEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RXLineEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RXLineEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RXLineEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RXLineEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RXLineEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RXLineEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RXLineEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RXLineEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RXLineEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RXLineEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RXLineEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RXLineEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RXLineEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RXLineEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RXLineEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RXLineEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RXLineEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RXLineEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RXLineEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RXLineEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        RXLineEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RXLineEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RXLineEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RXLineEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RXLineEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RXLineEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RXLineEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RXLineEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RXLineEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RXLineEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RXLineEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RXLineEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RXLineEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RXLineEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RXLineEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RXLineEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RXLineEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RXLineEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RXLineEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RXLineEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RXLineEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RXLineEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RXLineEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RXLineEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RXLineEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RXLineEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RXLineEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RXLineEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RXLineEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RXLineEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RXLineEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RXLineEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RXLineEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RXLineEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        RXLineEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RXLineEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RXLineEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RXLineEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RXLineEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RXLineEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RXLineEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RXLineEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RXLineEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RXLineEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RXLineEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RXLineEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RXLineEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RXLineEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RXLineEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        RXLineEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RXLineEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RXLineEntity.prototype.move = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RXLineEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RXLineEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RXLineEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        RXLineEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RXLineEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        RXLineEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RXLineEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RXLineEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RXLineEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RXLineEntity.prototype.update = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RXLineEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RXLineEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RXLineEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        RXLineEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        RXLineEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        RXLineEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RXLineEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RXLineEntity.prototype.init = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RXLineEntity.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RXLineEntity.prototype.getStaticPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getStaticPropertyTypeIds");
          return this.__PROXY__.getStaticPropertyTypeIds(...args);
        };
    
        // function 
        RXLineEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RXLineEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RXLineEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RXLineEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        RXLineEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        RXLineEntity.prototype.setShape = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.setShape");
          return this.__PROXY__.setShape(...args);
        };
    
        // function 
        RXLineEntity.prototype.setBasePoint = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.setBasePoint");
          return this.__PROXY__.setBasePoint(...args);
        };
    
        // function 
        RXLineEntity.prototype.getBasePoint = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getBasePoint");
          return this.__PROXY__.getBasePoint(...args);
        };
    
        // function 
        RXLineEntity.prototype.setSecondPoint = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.setSecondPoint");
          return this.__PROXY__.setSecondPoint(...args);
        };
    
        // function 
        RXLineEntity.prototype.getSecondPoint = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getSecondPoint");
          return this.__PROXY__.getSecondPoint(...args);
        };
    
        // function 
        RXLineEntity.prototype.setDirectionVectorPoint = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.setDirectionVectorPoint");
          return this.__PROXY__.setDirectionVectorPoint(...args);
        };
    
        // function 
        RXLineEntity.prototype.getDirectionVector = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getDirectionVector");
          return this.__PROXY__.getDirectionVector(...args);
        };
    
        // function 
        RXLineEntity.prototype.getAngle = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getAngle");
          return this.__PROXY__.getAngle(...args);
        };
    
        // function 
        RXLineEntity.prototype.hasFixedAngle = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.hasFixedAngle");
          return this.__PROXY__.hasFixedAngle(...args);
        };
    
        // function 
        RXLineEntity.prototype.setFixedAngle = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.setFixedAngle");
          return this.__PROXY__.setFixedAngle(...args);
        };
    
        // function 
        RXLineEntity.prototype.getDirection1 = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getDirection1");
          return this.__PROXY__.getDirection1(...args);
        };
    
        // function 
        RXLineEntity.prototype.getDirection2 = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getDirection2");
          return this.__PROXY__.getDirection2(...args);
        };
    
        // function 
        RXLineEntity.prototype.reverse = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.reverse");
          return this.__PROXY__.reverse(...args);
        };
    
        // function 
        RXLineEntity.prototype.getSideOfPoint = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getSideOfPoint");
          return this.__PROXY__.getSideOfPoint(...args);
        };
    
        // function 
        RXLineEntity.prototype.getTrimEnd = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getTrimEnd");
          return this.__PROXY__.getTrimEnd(...args);
        };
    
        // function 
        RXLineEntity.prototype.trimStartPoint = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.trimStartPoint");
          return this.__PROXY__.trimStartPoint(...args);
        };
    
        // function 
        RXLineEntity.prototype.trimEndPoint = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.trimEndPoint");
          return this.__PROXY__.trimEndPoint(...args);
        };
    
        // function 
        RXLineEntity.prototype.getLength = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.getLength");
          return this.__PROXY__.getLength(...args);
        };
    
        // function 
        RXLineEntity.prototype.print = function(...args) 
          
        {
          //print("JS: RXLineEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

        // static function 
        RXLineEntity.init = function() 
          
        {
          //print("JS: RXLineEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RXLineEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RXLineEntity);
  }

  
  else {
    
        print("RXLineEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLineEntity.getRtti = function() 
          
        {
          //print("JS: RXLineEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RXLineEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RXLineEntity);
  }

  
  else {
    
        print("RXLineEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLineEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RXLineEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RXLineEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RXLineEntity);
  }

  
  else {
    
        print("RXLineEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RXLineEntity.INVALID_ID = 
  RXLineEntity_WrapperSingletonInstance.INVALID_ID;
RXLineEntity.INVALID_HANDLE = 
  RXLineEntity_WrapperSingletonInstance.INVALID_HANDLE;
RXLineEntity.PropertySelected = 
  RXLineEntity_WrapperSingletonInstance.PropertySelected;
RXLineEntity.PropertyInvisible = 
  RXLineEntity_WrapperSingletonInstance.PropertyInvisible;
RXLineEntity.PropertyParentId = 
  RXLineEntity_WrapperSingletonInstance.PropertyParentId;
RXLineEntity.PropertyMinX = 
  RXLineEntity_WrapperSingletonInstance.PropertyMinX;
RXLineEntity.PropertyMinY = 
  RXLineEntity_WrapperSingletonInstance.PropertyMinY;
RXLineEntity.PropertyMaxX = 
  RXLineEntity_WrapperSingletonInstance.PropertyMaxX;
RXLineEntity.PropertyMaxY = 
  RXLineEntity_WrapperSingletonInstance.PropertyMaxY;
RXLineEntity.PropertySizeX = 
  RXLineEntity_WrapperSingletonInstance.PropertySizeX;
RXLineEntity.PropertySizeY = 
  RXLineEntity_WrapperSingletonInstance.PropertySizeY;
RXLineEntity.PropertyCustom = 
  RXLineEntity_WrapperSingletonInstance.PropertyCustom;
RXLineEntity.PropertyHandle = 
  RXLineEntity_WrapperSingletonInstance.PropertyHandle;
RXLineEntity.PropertyProtected = 
  RXLineEntity_WrapperSingletonInstance.PropertyProtected;
RXLineEntity.PropertyWorkingSet = 
  RXLineEntity_WrapperSingletonInstance.PropertyWorkingSet;
RXLineEntity.PropertyType = 
  RXLineEntity_WrapperSingletonInstance.PropertyType;
RXLineEntity.PropertyBlock = 
  RXLineEntity_WrapperSingletonInstance.PropertyBlock;
RXLineEntity.PropertyLayer = 
  RXLineEntity_WrapperSingletonInstance.PropertyLayer;
RXLineEntity.PropertyLinetype = 
  RXLineEntity_WrapperSingletonInstance.PropertyLinetype;
RXLineEntity.PropertyLinetypeScale = 
  RXLineEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RXLineEntity.PropertyLineweight = 
  RXLineEntity_WrapperSingletonInstance.PropertyLineweight;
RXLineEntity.PropertyColor = 
  RXLineEntity_WrapperSingletonInstance.PropertyColor;
RXLineEntity.PropertyDisplayedColor = 
  RXLineEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RXLineEntity.PropertyDrawOrder = 
  RXLineEntity_WrapperSingletonInstance.PropertyDrawOrder;
RXLineEntity.PropertyBasePointX = 
  RXLineEntity_WrapperSingletonInstance.PropertyBasePointX;
RXLineEntity.PropertyBasePointY = 
  RXLineEntity_WrapperSingletonInstance.PropertyBasePointY;
RXLineEntity.PropertyBasePointZ = 
  RXLineEntity_WrapperSingletonInstance.PropertyBasePointZ;
RXLineEntity.PropertySecondPointX = 
  RXLineEntity_WrapperSingletonInstance.PropertySecondPointX;
RXLineEntity.PropertySecondPointY = 
  RXLineEntity_WrapperSingletonInstance.PropertySecondPointY;
RXLineEntity.PropertySecondPointZ = 
  RXLineEntity_WrapperSingletonInstance.PropertySecondPointZ;
RXLineEntity.PropertyDirectionX = 
  RXLineEntity_WrapperSingletonInstance.PropertyDirectionX;
RXLineEntity.PropertyDirectionY = 
  RXLineEntity_WrapperSingletonInstance.PropertyDirectionY;
RXLineEntity.PropertyDirectionZ = 
  RXLineEntity_WrapperSingletonInstance.PropertyDirectionZ;
RXLineEntity.PropertyAngle = 
  RXLineEntity_WrapperSingletonInstance.PropertyAngle;
RXLineEntity.PropertyFixedAngle = 
  RXLineEntity_WrapperSingletonInstance.PropertyFixedAngle;


      // copy function:
      //RXLineEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RXLineEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RXLineEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      