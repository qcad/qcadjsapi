
      // auto generated
      //var self;

      // class constructor:
      function RAttributeEntity() {
        

        // should be RAttributeEntity_BaseJs.call(this, engine):
        //RAttributeEntity.prototype = new RAttributeEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RAttributeEntity.getIdStatic()))) {

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
            qWarning("RAttributeEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RAttributeEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RAttributeEntity);
  }

  
  else {
    
        print("RAttributeEntity(): wrong number / type of arguments");
      
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

      //RAttributeEntity.prototype = new RAttributeEntity_BaseJs(engine);
      //RAttributeEntity.prototype = new RAttributeEntity_Wrapper(engine);
      RAttributeEntity.prototype = new Object();

      RAttributeEntity.prototype.toString = function() {
          //return "RAttributeEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RAttributeEntity [JS]";
        };
      RAttributeEntity.getObjectType = function() {
        return RJSType_RAttributeEntity.getIdStatic();
      };

      RAttributeEntity.prototype.getObjectType = function() {
        return RJSType_RAttributeEntity.getIdStatic();
      };

      RAttributeEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RAttributeEntity.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_REntity.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RTextBasedEntity.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RAttributeEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RAttributeEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RAttributeEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RAttributeEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RAttributeEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RAttributeEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RAttributeEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RAttributeEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RAttributeEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RAttributeEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RAttributeEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RAttributeEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RAttributeEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RAttributeEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RAttributeEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RAttributeEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RAttributeEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RAttributeEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RAttributeEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RAttributeEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        RAttributeEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RAttributeEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RAttributeEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        RAttributeEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RAttributeEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RAttributeEntity.prototype.move = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RAttributeEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RAttributeEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RAttributeEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        RAttributeEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RAttributeEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RAttributeEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RAttributeEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RAttributeEntity.prototype.update = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RAttributeEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RAttributeEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        RAttributeEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        RAttributeEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getRotatedBoundingBox = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getRotatedBoundingBox");
          return this.__PROXY__.getRotatedBoundingBox(...args);
        };
    
        // function 
        RAttributeEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getPainterPaths = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getPainterPaths");
          return this.__PROXY__.getPainterPaths(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getExploded = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getExploded");
          return this.__PROXY__.getExploded(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getTextData = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getTextData");
          return this.__PROXY__.getTextData(...args);
        };
    
        // function 
        RAttributeEntity.prototype.isBold = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.isBold");
          return this.__PROXY__.isBold(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setBold = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setBold");
          return this.__PROXY__.setBold(...args);
        };
    
        // function 
        RAttributeEntity.prototype.isItalic = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.isItalic");
          return this.__PROXY__.isItalic(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setItalic = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setItalic");
          return this.__PROXY__.setItalic(...args);
        };
    
        // function 
        RAttributeEntity.prototype.isBackward = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.isBackward");
          return this.__PROXY__.isBackward(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setBackward = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setBackward");
          return this.__PROXY__.setBackward(...args);
        };
    
        // function 
        RAttributeEntity.prototype.isUpsideDown = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.isUpsideDown");
          return this.__PROXY__.isUpsideDown(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setUpsideDown = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setUpsideDown");
          return this.__PROXY__.setUpsideDown(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getPosition = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getPosition");
          return this.__PROXY__.getPosition(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setPosition = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setPosition");
          return this.__PROXY__.setPosition(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getAlignmentPoint = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getAlignmentPoint");
          return this.__PROXY__.getAlignmentPoint(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setAlignmentPoint = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setAlignmentPoint");
          return this.__PROXY__.setAlignmentPoint(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getTextHeight = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getTextHeight");
          return this.__PROXY__.getTextHeight(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setTextHeight = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setTextHeight");
          return this.__PROXY__.setTextHeight(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getTextWidth = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getTextWidth");
          return this.__PROXY__.getTextWidth(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getWidth = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getWidth");
          return this.__PROXY__.getWidth(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getHeight = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getHeight");
          return this.__PROXY__.getHeight(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getVAlign = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getVAlign");
          return this.__PROXY__.getVAlign(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setVAlign = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setVAlign");
          return this.__PROXY__.setVAlign(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getHAlign = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getHAlign");
          return this.__PROXY__.getHAlign(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setHAlign = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setHAlign");
          return this.__PROXY__.setHAlign(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getFontName = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getFontName");
          return this.__PROXY__.getFontName(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setFontName = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setFontName");
          return this.__PROXY__.setFontName(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getFontFile = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getFontFile");
          return this.__PROXY__.getFontFile(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setDrawingDirection = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setDrawingDirection");
          return this.__PROXY__.setDrawingDirection(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getDrawingDirection = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getDrawingDirection");
          return this.__PROXY__.getDrawingDirection(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setLineSpacingStyle");
          return this.__PROXY__.setLineSpacingStyle(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getLineSpacingStyle");
          return this.__PROXY__.getLineSpacingStyle(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setLineSpacingFactor");
          return this.__PROXY__.setLineSpacingFactor(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getLineSpacingFactor");
          return this.__PROXY__.getLineSpacingFactor(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setAngle = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setAngle");
          return this.__PROXY__.setAngle(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getAngle = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getAngle");
          return this.__PROXY__.getAngle(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setXScale = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setXScale");
          return this.__PROXY__.setXScale(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getXScale = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getXScale");
          return this.__PROXY__.getXScale(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setSimple = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setSimple");
          return this.__PROXY__.setSimple(...args);
        };
    
        // function 
        RAttributeEntity.prototype.isSimple = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.isSimple");
          return this.__PROXY__.isSimple(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getEscapedText = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getEscapedText");
          return this.__PROXY__.getEscapedText(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getPlainText = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getPlainText");
          return this.__PROXY__.getPlainText(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setText = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setText");
          return this.__PROXY__.setText(...args);
        };
    
        // function 
        RAttributeEntity.prototype.sync = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.sync");
          return this.__PROXY__.sync(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getSimpleTextBlocks = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getSimpleTextBlocks");
          return this.__PROXY__.getSimpleTextBlocks(...args);
        };
    
        // function 
        RAttributeEntity.prototype.init = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getStaticPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getStaticPropertyTypeIds");
          return this.__PROXY__.getStaticPropertyTypeIds(...args);
        };
    
        // function 
        RAttributeEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setData = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setData");
          return this.__PROXY__.setData(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RAttributeEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        RAttributeEntity.prototype.getTag = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.getTag");
          return this.__PROXY__.getTag(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setTag = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setTag");
          return this.__PROXY__.setTag(...args);
        };
    
        // function 
        RAttributeEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RAttributeEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RAttributeEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        RAttributeEntity.prototype.print = function(...args) 
          
        {
          //print("JS: RAttributeEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

        // static function 
        RAttributeEntity.init = function() 
          
        {
          //print("JS: RAttributeEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RAttributeEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RAttributeEntity);
  }

  
  else {
    
        print("RAttributeEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RAttributeEntity.getRtti = function() 
          
        {
          //print("JS: RAttributeEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RAttributeEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RAttributeEntity);
  }

  
  else {
    
        print("RAttributeEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RAttributeEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RAttributeEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RAttributeEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RAttributeEntity);
  }

  
  else {
    
        print("RAttributeEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RAttributeEntity.INVALID_ID = 
  RAttributeEntity_WrapperSingletonInstance.INVALID_ID;
RAttributeEntity.INVALID_HANDLE = 
  RAttributeEntity_WrapperSingletonInstance.INVALID_HANDLE;
RAttributeEntity.PropertySelected = 
  RAttributeEntity_WrapperSingletonInstance.PropertySelected;
RAttributeEntity.PropertyMinX = 
  RAttributeEntity_WrapperSingletonInstance.PropertyMinX;
RAttributeEntity.PropertyMinY = 
  RAttributeEntity_WrapperSingletonInstance.PropertyMinY;
RAttributeEntity.PropertyMaxX = 
  RAttributeEntity_WrapperSingletonInstance.PropertyMaxX;
RAttributeEntity.PropertyMaxY = 
  RAttributeEntity_WrapperSingletonInstance.PropertyMaxY;
RAttributeEntity.PropertySizeX = 
  RAttributeEntity_WrapperSingletonInstance.PropertySizeX;
RAttributeEntity.PropertySizeY = 
  RAttributeEntity_WrapperSingletonInstance.PropertySizeY;
RAttributeEntity.PropertySimple = 
  RAttributeEntity_WrapperSingletonInstance.PropertySimple;
RAttributeEntity.PropertyCustom = 
  RAttributeEntity_WrapperSingletonInstance.PropertyCustom;
RAttributeEntity.PropertyHandle = 
  RAttributeEntity_WrapperSingletonInstance.PropertyHandle;
RAttributeEntity.PropertyProtected = 
  RAttributeEntity_WrapperSingletonInstance.PropertyProtected;
RAttributeEntity.PropertyWorkingSet = 
  RAttributeEntity_WrapperSingletonInstance.PropertyWorkingSet;
RAttributeEntity.PropertyType = 
  RAttributeEntity_WrapperSingletonInstance.PropertyType;
RAttributeEntity.PropertyBlock = 
  RAttributeEntity_WrapperSingletonInstance.PropertyBlock;
RAttributeEntity.PropertyLayer = 
  RAttributeEntity_WrapperSingletonInstance.PropertyLayer;
RAttributeEntity.PropertyLinetype = 
  RAttributeEntity_WrapperSingletonInstance.PropertyLinetype;
RAttributeEntity.PropertyLinetypeScale = 
  RAttributeEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RAttributeEntity.PropertyLineweight = 
  RAttributeEntity_WrapperSingletonInstance.PropertyLineweight;
RAttributeEntity.PropertyColor = 
  RAttributeEntity_WrapperSingletonInstance.PropertyColor;
RAttributeEntity.PropertyDisplayedColor = 
  RAttributeEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RAttributeEntity.PropertyDrawOrder = 
  RAttributeEntity_WrapperSingletonInstance.PropertyDrawOrder;
RAttributeEntity.PropertyParentId = 
  RAttributeEntity_WrapperSingletonInstance.PropertyParentId;
RAttributeEntity.PropertyAngle = 
  RAttributeEntity_WrapperSingletonInstance.PropertyAngle;
RAttributeEntity.PropertyXScale = 
  RAttributeEntity_WrapperSingletonInstance.PropertyXScale;
RAttributeEntity.PropertyBold = 
  RAttributeEntity_WrapperSingletonInstance.PropertyBold;
RAttributeEntity.PropertyFontName = 
  RAttributeEntity_WrapperSingletonInstance.PropertyFontName;
RAttributeEntity.PropertyHAlign = 
  RAttributeEntity_WrapperSingletonInstance.PropertyHAlign;
RAttributeEntity.PropertyHeight = 
  RAttributeEntity_WrapperSingletonInstance.PropertyHeight;
RAttributeEntity.PropertyWidth = 
  RAttributeEntity_WrapperSingletonInstance.PropertyWidth;
RAttributeEntity.PropertyItalic = 
  RAttributeEntity_WrapperSingletonInstance.PropertyItalic;
RAttributeEntity.PropertyLineSpacingFactor = 
  RAttributeEntity_WrapperSingletonInstance.PropertyLineSpacingFactor;
RAttributeEntity.PropertyPositionX = 
  RAttributeEntity_WrapperSingletonInstance.PropertyPositionX;
RAttributeEntity.PropertyPositionY = 
  RAttributeEntity_WrapperSingletonInstance.PropertyPositionY;
RAttributeEntity.PropertyPositionZ = 
  RAttributeEntity_WrapperSingletonInstance.PropertyPositionZ;
RAttributeEntity.PropertyTag = 
  RAttributeEntity_WrapperSingletonInstance.PropertyTag;
RAttributeEntity.PropertyText = 
  RAttributeEntity_WrapperSingletonInstance.PropertyText;
RAttributeEntity.PropertyPlainText = 
  RAttributeEntity_WrapperSingletonInstance.PropertyPlainText;
RAttributeEntity.PropertyVAlign = 
  RAttributeEntity_WrapperSingletonInstance.PropertyVAlign;
RAttributeEntity.PropertyInvisible = 
  RAttributeEntity_WrapperSingletonInstance.PropertyInvisible;
RAttributeEntity.PropertyBackward = 
  RAttributeEntity_WrapperSingletonInstance.PropertyBackward;
RAttributeEntity.PropertyUpsideDown = 
  RAttributeEntity_WrapperSingletonInstance.PropertyUpsideDown;


      // copy function:
      //RAttributeEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RAttributeEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RAttributeEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      