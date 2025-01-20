
      // auto generated
      //var self;

      // class constructor:
      function RAttributeDefinitionEntity() {
        

        // should be RAttributeDefinitionEntity_BaseJs.call(this, engine):
        //RAttributeDefinitionEntity.prototype = new RAttributeDefinitionEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RAttributeDefinitionEntity.getIdStatic()))) {

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
            qWarning("RAttributeDefinitionEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RAttributeDefinitionEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RAttributeDefinitionEntity);
  }

  
  else {
    
        print("RAttributeDefinitionEntity(): wrong number / type of arguments");
      
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

      //RAttributeDefinitionEntity.prototype = new RAttributeDefinitionEntity_BaseJs(engine);
      //RAttributeDefinitionEntity.prototype = new RAttributeDefinitionEntity_Wrapper(engine);
      RAttributeDefinitionEntity.prototype = new Object();

      RAttributeDefinitionEntity.prototype.toString = function() {
          //return "RAttributeDefinitionEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RAttributeDefinitionEntity [JS]";
        };
      RAttributeDefinitionEntity.getObjectType = function() {
        return RJSType_RAttributeDefinitionEntity.getIdStatic();
      };

      RAttributeDefinitionEntity.prototype.getObjectType = function() {
        return RJSType_RAttributeDefinitionEntity.getIdStatic();
      };

      RAttributeDefinitionEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RAttributeDefinitionEntity.getIdStatic()) {
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
        RAttributeDefinitionEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.move = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.update = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getRotatedBoundingBox = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getRotatedBoundingBox");
          return this.__PROXY__.getRotatedBoundingBox(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getPainterPaths = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getPainterPaths");
          return this.__PROXY__.getPainterPaths(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getExploded = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getExploded");
          return this.__PROXY__.getExploded(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getTextData = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getTextData");
          return this.__PROXY__.getTextData(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.isBold = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.isBold");
          return this.__PROXY__.isBold(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setBold = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setBold");
          return this.__PROXY__.setBold(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.isItalic = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.isItalic");
          return this.__PROXY__.isItalic(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setItalic = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setItalic");
          return this.__PROXY__.setItalic(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.isBackward = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.isBackward");
          return this.__PROXY__.isBackward(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setBackward = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setBackward");
          return this.__PROXY__.setBackward(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.isUpsideDown = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.isUpsideDown");
          return this.__PROXY__.isUpsideDown(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setUpsideDown = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setUpsideDown");
          return this.__PROXY__.setUpsideDown(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getPosition = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getPosition");
          return this.__PROXY__.getPosition(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setPosition = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setPosition");
          return this.__PROXY__.setPosition(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getAlignmentPoint = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getAlignmentPoint");
          return this.__PROXY__.getAlignmentPoint(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setAlignmentPoint = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setAlignmentPoint");
          return this.__PROXY__.setAlignmentPoint(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getTextHeight = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getTextHeight");
          return this.__PROXY__.getTextHeight(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setTextHeight = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setTextHeight");
          return this.__PROXY__.setTextHeight(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getTextWidth = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getTextWidth");
          return this.__PROXY__.getTextWidth(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getWidth = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getWidth");
          return this.__PROXY__.getWidth(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getHeight = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getHeight");
          return this.__PROXY__.getHeight(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getVAlign = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getVAlign");
          return this.__PROXY__.getVAlign(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setVAlign = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setVAlign");
          return this.__PROXY__.setVAlign(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getHAlign = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getHAlign");
          return this.__PROXY__.getHAlign(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setHAlign = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setHAlign");
          return this.__PROXY__.setHAlign(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getFontName = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getFontName");
          return this.__PROXY__.getFontName(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setFontName = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setFontName");
          return this.__PROXY__.setFontName(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getFontFile = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getFontFile");
          return this.__PROXY__.getFontFile(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setDrawingDirection = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setDrawingDirection");
          return this.__PROXY__.setDrawingDirection(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getDrawingDirection = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getDrawingDirection");
          return this.__PROXY__.getDrawingDirection(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setLineSpacingStyle");
          return this.__PROXY__.setLineSpacingStyle(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getLineSpacingStyle");
          return this.__PROXY__.getLineSpacingStyle(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setLineSpacingFactor");
          return this.__PROXY__.setLineSpacingFactor(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getLineSpacingFactor");
          return this.__PROXY__.getLineSpacingFactor(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setAngle = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setAngle");
          return this.__PROXY__.setAngle(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getAngle = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getAngle");
          return this.__PROXY__.getAngle(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setXScale = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setXScale");
          return this.__PROXY__.setXScale(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getXScale = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getXScale");
          return this.__PROXY__.getXScale(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setSimple = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setSimple");
          return this.__PROXY__.setSimple(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.isSimple = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.isSimple");
          return this.__PROXY__.isSimple(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getEscapedText = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getEscapedText");
          return this.__PROXY__.getEscapedText(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getPlainText = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getPlainText");
          return this.__PROXY__.getPlainText(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setText = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setText");
          return this.__PROXY__.setText(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.sync = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.sync");
          return this.__PROXY__.sync(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getSimpleTextBlocks = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getSimpleTextBlocks");
          return this.__PROXY__.getSimpleTextBlocks(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.init = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getStaticPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getStaticPropertyTypeIds");
          return this.__PROXY__.getStaticPropertyTypeIds(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setData = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setData");
          return this.__PROXY__.setData(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getTag = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getTag");
          return this.__PROXY__.getTag(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setTag = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setTag");
          return this.__PROXY__.setTag(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.getPrompt = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.getPrompt");
          return this.__PROXY__.getPrompt(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setPrompt = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setPrompt");
          return this.__PROXY__.setPrompt(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RAttributeDefinitionEntity.prototype.print = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

        // static function 
        RAttributeDefinitionEntity.init = function() 
          
        {
          //print("JS: RAttributeDefinitionEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RAttributeDefinitionEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RAttributeDefinitionEntity);
  }

  
  else {
    
        print("RAttributeDefinitionEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RAttributeDefinitionEntity.getRtti = function() 
          
        {
          //print("JS: RAttributeDefinitionEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RAttributeDefinitionEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RAttributeDefinitionEntity);
  }

  
  else {
    
        print("RAttributeDefinitionEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RAttributeDefinitionEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RAttributeDefinitionEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RAttributeDefinitionEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RAttributeDefinitionEntity);
  }

  
  else {
    
        print("RAttributeDefinitionEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RAttributeDefinitionEntity.INVALID_ID = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.INVALID_ID;
RAttributeDefinitionEntity.INVALID_HANDLE = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.INVALID_HANDLE;
RAttributeDefinitionEntity.PropertySelected = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertySelected;
RAttributeDefinitionEntity.PropertyParentId = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyParentId;
RAttributeDefinitionEntity.PropertyMinX = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyMinX;
RAttributeDefinitionEntity.PropertyMinY = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyMinY;
RAttributeDefinitionEntity.PropertyMaxX = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyMaxX;
RAttributeDefinitionEntity.PropertyMaxY = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyMaxY;
RAttributeDefinitionEntity.PropertySizeX = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertySizeX;
RAttributeDefinitionEntity.PropertySizeY = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertySizeY;
RAttributeDefinitionEntity.PropertySimple = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertySimple;
RAttributeDefinitionEntity.PropertyBackward = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyBackward;
RAttributeDefinitionEntity.PropertyUpsideDown = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyUpsideDown;
RAttributeDefinitionEntity.PropertyCustom = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyCustom;
RAttributeDefinitionEntity.PropertyHandle = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyHandle;
RAttributeDefinitionEntity.PropertyProtected = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyProtected;
RAttributeDefinitionEntity.PropertyWorkingSet = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyWorkingSet;
RAttributeDefinitionEntity.PropertyType = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyType;
RAttributeDefinitionEntity.PropertyBlock = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyBlock;
RAttributeDefinitionEntity.PropertyLayer = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyLayer;
RAttributeDefinitionEntity.PropertyLinetype = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyLinetype;
RAttributeDefinitionEntity.PropertyLinetypeScale = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RAttributeDefinitionEntity.PropertyLineweight = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyLineweight;
RAttributeDefinitionEntity.PropertyColor = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyColor;
RAttributeDefinitionEntity.PropertyDisplayedColor = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RAttributeDefinitionEntity.PropertyDrawOrder = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyDrawOrder;
RAttributeDefinitionEntity.PropertyAngle = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyAngle;
RAttributeDefinitionEntity.PropertyXScale = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyXScale;
RAttributeDefinitionEntity.PropertyBold = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyBold;
RAttributeDefinitionEntity.PropertyFontName = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyFontName;
RAttributeDefinitionEntity.PropertyHAlign = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyHAlign;
RAttributeDefinitionEntity.PropertyHeight = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyHeight;
RAttributeDefinitionEntity.PropertyWidth = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyWidth;
RAttributeDefinitionEntity.PropertyItalic = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyItalic;
RAttributeDefinitionEntity.PropertyLineSpacingFactor = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyLineSpacingFactor;
RAttributeDefinitionEntity.PropertyPositionX = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyPositionX;
RAttributeDefinitionEntity.PropertyPositionY = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyPositionY;
RAttributeDefinitionEntity.PropertyPositionZ = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyPositionZ;
RAttributeDefinitionEntity.PropertyPrompt = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyPrompt;
RAttributeDefinitionEntity.PropertyTag = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyTag;
RAttributeDefinitionEntity.PropertyText = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyText;
RAttributeDefinitionEntity.PropertyPlainText = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyPlainText;
RAttributeDefinitionEntity.PropertyVAlign = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyVAlign;
RAttributeDefinitionEntity.PropertyInvisible = 
  RAttributeDefinitionEntity_WrapperSingletonInstance.PropertyInvisible;


      // copy function:
      //RAttributeDefinitionEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RAttributeDefinitionEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RAttributeDefinitionEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      