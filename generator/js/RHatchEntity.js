
      // auto generated
      //var self;

      // class constructor:
      function RHatchEntity() {
        

        // should be RHatchEntity_BaseJs.call(this, engine):
        //RHatchEntity.prototype = new RHatchEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RHatchEntity.getIdStatic()))) {

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
            qWarning("RHatchEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RHatchEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RHatchEntity);
  }

  
  else {
    
        print("RHatchEntity(): wrong number / type of arguments");
      
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

      //RHatchEntity.prototype = new RHatchEntity_BaseJs(engine);
      //RHatchEntity.prototype = new RHatchEntity_Wrapper(engine);
      RHatchEntity.prototype = new Object();

      RHatchEntity.prototype.toString = function() {
          //return "RHatchEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RHatchEntity [JS]";
        };
      RHatchEntity.getObjectType = function() {
        return RJSType_RHatchEntity.getIdStatic();
      };

      RHatchEntity.prototype.getObjectType = function() {
        return RJSType_RHatchEntity.getIdStatic();
      };

      RHatchEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RHatchEntity.getIdStatic()) {
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
        RHatchEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RHatchEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RHatchEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RHatchEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RHatchEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RHatchEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RHatchEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RHatchEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RHatchEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RHatchEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RHatchEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RHatchEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RHatchEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RHatchEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RHatchEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RHatchEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RHatchEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RHatchEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RHatchEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RHatchEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RHatchEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RHatchEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RHatchEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RHatchEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RHatchEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RHatchEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RHatchEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RHatchEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RHatchEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RHatchEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RHatchEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RHatchEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RHatchEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RHatchEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RHatchEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RHatchEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RHatchEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RHatchEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RHatchEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RHatchEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RHatchEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RHatchEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RHatchEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        RHatchEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RHatchEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RHatchEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RHatchEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RHatchEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RHatchEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RHatchEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RHatchEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RHatchEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RHatchEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RHatchEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RHatchEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RHatchEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RHatchEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RHatchEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RHatchEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RHatchEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RHatchEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RHatchEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RHatchEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RHatchEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RHatchEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RHatchEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RHatchEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RHatchEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RHatchEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RHatchEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RHatchEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RHatchEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RHatchEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RHatchEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RHatchEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RHatchEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        RHatchEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RHatchEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RHatchEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RHatchEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RHatchEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RHatchEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RHatchEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RHatchEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RHatchEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RHatchEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RHatchEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RHatchEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RHatchEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RHatchEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RHatchEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        RHatchEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RHatchEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RHatchEntity.prototype.move = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RHatchEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RHatchEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RHatchEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        RHatchEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RHatchEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RHatchEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RHatchEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RHatchEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RHatchEntity.prototype.update = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RHatchEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RHatchEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RHatchEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        RHatchEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        RHatchEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        RHatchEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RHatchEntity.prototype.init = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RHatchEntity.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RHatchEntity.prototype.getStaticPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getStaticPropertyTypeIds");
          return this.__PROXY__.getStaticPropertyTypeIds(...args);
        };
    
        // function 
        RHatchEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RHatchEntity.prototype.setData = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setData");
          return this.__PROXY__.setData(...args);
        };
    
        // function 
        RHatchEntity.prototype.hasCustomPattern = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.hasCustomPattern");
          return this.__PROXY__.hasCustomPattern(...args);
        };
    
        // function 
        RHatchEntity.prototype.getCustomPattern = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getCustomPattern");
          return this.__PROXY__.getCustomPattern(...args);
        };
    
        // function 
        RHatchEntity.prototype.setCustomPattern = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setCustomPattern");
          return this.__PROXY__.setCustomPattern(...args);
        };
    
        // function 
        RHatchEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RHatchEntity.prototype.setBoundaryVector = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setBoundaryVector");
          return this.__PROXY__.setBoundaryVector(...args);
        };
    
        // function 
        RHatchEntity.prototype.setComponent = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setComponent");
          return this.__PROXY__.setComponent(...args);
        };
    
        // function 
        RHatchEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RHatchEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        RHatchEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        RHatchEntity.prototype.getPainterPaths = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getPainterPaths");
          return this.__PROXY__.getPainterPaths(...args);
        };
    
        // function 
        RHatchEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RHatchEntity.prototype.newLoop = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.newLoop");
          return this.__PROXY__.newLoop(...args);
        };
    
        // function 
        RHatchEntity.prototype.addBoundary = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.addBoundary");
          return this.__PROXY__.addBoundary(...args);
        };
    
        // function 
        RHatchEntity.prototype.getLoopCount = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getLoopCount");
          return this.__PROXY__.getLoopCount(...args);
        };
    
        // function 
        RHatchEntity.prototype.isSolid = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.isSolid");
          return this.__PROXY__.isSolid(...args);
        };
    
        // function 
        RHatchEntity.prototype.setSolid = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setSolid");
          return this.__PROXY__.setSolid(...args);
        };
    
        // function 
        RHatchEntity.prototype.isWinding = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.isWinding");
          return this.__PROXY__.isWinding(...args);
        };
    
        // function 
        RHatchEntity.prototype.setWinding = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setWinding");
          return this.__PROXY__.setWinding(...args);
        };
    
        // function 
        RHatchEntity.prototype.getScale = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getScale");
          return this.__PROXY__.getScale(...args);
        };
    
        // function 
        RHatchEntity.prototype.setScale = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setScale");
          return this.__PROXY__.setScale(...args);
        };
    
        // function 
        RHatchEntity.prototype.getAngle = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getAngle");
          return this.__PROXY__.getAngle(...args);
        };
    
        // function 
        RHatchEntity.prototype.setAngle = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setAngle");
          return this.__PROXY__.setAngle(...args);
        };
    
        // function 
        RHatchEntity.prototype.getOriginPoint = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getOriginPoint");
          return this.__PROXY__.getOriginPoint(...args);
        };
    
        // function 
        RHatchEntity.prototype.setOriginPoint = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setOriginPoint");
          return this.__PROXY__.setOriginPoint(...args);
        };
    
        // function 
        RHatchEntity.prototype.getPatternName = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getPatternName");
          return this.__PROXY__.getPatternName(...args);
        };
    
        // function 
        RHatchEntity.prototype.setPatternName = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setPatternName");
          return this.__PROXY__.setPatternName(...args);
        };
    
        // function 
        RHatchEntity.prototype.getTransparency = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getTransparency");
          return this.__PROXY__.getTransparency(...args);
        };
    
        // function 
        RHatchEntity.prototype.setTransparency = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setTransparency");
          return this.__PROXY__.setTransparency(...args);
        };
    
        // function 
        RHatchEntity.prototype.clearCustomPattern = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.clearCustomPattern");
          return this.__PROXY__.clearCustomPattern(...args);
        };
    
        // function 
        RHatchEntity.prototype.getLoopBoundary = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getLoopBoundary");
          return this.__PROXY__.getLoopBoundary(...args);
        };
    
        // function 
        RHatchEntity.prototype.getBoundaryAsPolylines = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getBoundaryAsPolylines");
          return this.__PROXY__.getBoundaryAsPolylines(...args);
        };
    
        // function 
        RHatchEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RHatchEntity.prototype.getExploded = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.getExploded");
          return this.__PROXY__.getExploded(...args);
        };
    
        // function 
        RHatchEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        RHatchEntity.prototype.print = function(...args) 
          
        {
          //print("JS: RHatchEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

        // static function 
        RHatchEntity.init = function() 
          
        {
          //print("JS: RHatchEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RHatchEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RHatchEntity);
  }

  
  else {
    
        print("RHatchEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RHatchEntity.getRtti = function() 
          
        {
          //print("JS: RHatchEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RHatchEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RHatchEntity);
  }

  
  else {
    
        print("RHatchEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RHatchEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RHatchEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RHatchEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RHatchEntity);
  }

  
  else {
    
        print("RHatchEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RHatchEntity.INVALID_ID = 
  RHatchEntity_WrapperSingletonInstance.INVALID_ID;
RHatchEntity.INVALID_HANDLE = 
  RHatchEntity_WrapperSingletonInstance.INVALID_HANDLE;
RHatchEntity.PropertySelected = 
  RHatchEntity_WrapperSingletonInstance.PropertySelected;
RHatchEntity.PropertyInvisible = 
  RHatchEntity_WrapperSingletonInstance.PropertyInvisible;
RHatchEntity.PropertyParentId = 
  RHatchEntity_WrapperSingletonInstance.PropertyParentId;
RHatchEntity.PropertyMinX = 
  RHatchEntity_WrapperSingletonInstance.PropertyMinX;
RHatchEntity.PropertyMinY = 
  RHatchEntity_WrapperSingletonInstance.PropertyMinY;
RHatchEntity.PropertyMaxX = 
  RHatchEntity_WrapperSingletonInstance.PropertyMaxX;
RHatchEntity.PropertyMaxY = 
  RHatchEntity_WrapperSingletonInstance.PropertyMaxY;
RHatchEntity.PropertySizeX = 
  RHatchEntity_WrapperSingletonInstance.PropertySizeX;
RHatchEntity.PropertySizeY = 
  RHatchEntity_WrapperSingletonInstance.PropertySizeY;
RHatchEntity.PropertyCustom = 
  RHatchEntity_WrapperSingletonInstance.PropertyCustom;
RHatchEntity.PropertyHandle = 
  RHatchEntity_WrapperSingletonInstance.PropertyHandle;
RHatchEntity.PropertyProtected = 
  RHatchEntity_WrapperSingletonInstance.PropertyProtected;
RHatchEntity.PropertyWorkingSet = 
  RHatchEntity_WrapperSingletonInstance.PropertyWorkingSet;
RHatchEntity.PropertyType = 
  RHatchEntity_WrapperSingletonInstance.PropertyType;
RHatchEntity.PropertyBlock = 
  RHatchEntity_WrapperSingletonInstance.PropertyBlock;
RHatchEntity.PropertyLayer = 
  RHatchEntity_WrapperSingletonInstance.PropertyLayer;
RHatchEntity.PropertyLinetype = 
  RHatchEntity_WrapperSingletonInstance.PropertyLinetype;
RHatchEntity.PropertyLinetypeScale = 
  RHatchEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RHatchEntity.PropertyLineweight = 
  RHatchEntity_WrapperSingletonInstance.PropertyLineweight;
RHatchEntity.PropertyColor = 
  RHatchEntity_WrapperSingletonInstance.PropertyColor;
RHatchEntity.PropertyDisplayedColor = 
  RHatchEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RHatchEntity.PropertyDrawOrder = 
  RHatchEntity_WrapperSingletonInstance.PropertyDrawOrder;
RHatchEntity.PropertySolid = 
  RHatchEntity_WrapperSingletonInstance.PropertySolid;
RHatchEntity.PropertyTransparency = 
  RHatchEntity_WrapperSingletonInstance.PropertyTransparency;
RHatchEntity.PropertyPatternName = 
  RHatchEntity_WrapperSingletonInstance.PropertyPatternName;
RHatchEntity.PropertyEntityPattern = 
  RHatchEntity_WrapperSingletonInstance.PropertyEntityPattern;
RHatchEntity.PropertyScaleFactor = 
  RHatchEntity_WrapperSingletonInstance.PropertyScaleFactor;
RHatchEntity.PropertyAngle = 
  RHatchEntity_WrapperSingletonInstance.PropertyAngle;
RHatchEntity.PropertyOriginX = 
  RHatchEntity_WrapperSingletonInstance.PropertyOriginX;
RHatchEntity.PropertyOriginY = 
  RHatchEntity_WrapperSingletonInstance.PropertyOriginY;
RHatchEntity.PropertyVertexNX = 
  RHatchEntity_WrapperSingletonInstance.PropertyVertexNX;
RHatchEntity.PropertyVertexNY = 
  RHatchEntity_WrapperSingletonInstance.PropertyVertexNY;
RHatchEntity.PropertyVertexNZ = 
  RHatchEntity_WrapperSingletonInstance.PropertyVertexNZ;
RHatchEntity.PropertyLength = 
  RHatchEntity_WrapperSingletonInstance.PropertyLength;
RHatchEntity.PropertyTotalLength = 
  RHatchEntity_WrapperSingletonInstance.PropertyTotalLength;
RHatchEntity.PropertyArea = 
  RHatchEntity_WrapperSingletonInstance.PropertyArea;
RHatchEntity.PropertyTotalArea = 
  RHatchEntity_WrapperSingletonInstance.PropertyTotalArea;


      // copy function:
      //RHatchEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RHatchEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RHatchEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      