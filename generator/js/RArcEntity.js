
      // auto generated
      //var self;

      // class constructor:
      function RArcEntity() {
        

        // should be RArcEntity_BaseJs.call(this, engine):
        //RArcEntity.prototype = new RArcEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RArcEntity.getIdStatic()))) {

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
            qWarning("RArcEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RArcEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RArcEntity);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RArcEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RArcEntity);
  }

  
  else {
    
        print("RArcEntity(): wrong number / type of arguments");
      
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

      //RArcEntity.prototype = new RArcEntity_BaseJs(engine);
      //RArcEntity.prototype = new RArcEntity_Wrapper(engine);
      RArcEntity.prototype = new Object();

      RArcEntity.prototype.toString = function() {
          //return "RArcEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RArcEntity [JS]";
        };
      RArcEntity.getObjectType = function() {
        return RJSType_RArcEntity.getIdStatic();
      };

      RArcEntity.prototype.getObjectType = function() {
        return RJSType_RArcEntity.getIdStatic();
      };

      RArcEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RArcEntity.getIdStatic()) {
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
        RArcEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RArcEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RArcEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RArcEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RArcEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RArcEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RArcEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RArcEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RArcEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RArcEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RArcEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RArcEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RArcEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RArcEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RArcEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RArcEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RArcEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RArcEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RArcEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RArcEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RArcEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RArcEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RArcEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RArcEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RArcEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RArcEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RArcEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RArcEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RArcEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RArcEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RArcEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RArcEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RArcEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RArcEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RArcEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RArcEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RArcEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RArcEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RArcEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RArcEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RArcEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RArcEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RArcEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        RArcEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RArcEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RArcEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RArcEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RArcEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RArcEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RArcEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RArcEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RArcEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RArcEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RArcEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RArcEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RArcEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RArcEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RArcEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RArcEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RArcEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RArcEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RArcEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RArcEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RArcEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RArcEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RArcEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RArcEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RArcEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RArcEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RArcEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RArcEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RArcEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RArcEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RArcEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RArcEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RArcEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RArcEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        RArcEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RArcEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RArcEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RArcEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RArcEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RArcEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RArcEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RArcEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RArcEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RArcEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RArcEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RArcEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RArcEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RArcEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RArcEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        RArcEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RArcEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RArcEntity.prototype.move = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RArcEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RArcEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RArcEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RArcEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        RArcEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RArcEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RArcEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RArcEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RArcEntity.prototype.update = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RArcEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RArcEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RArcEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        RArcEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        RArcEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        RArcEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RArcEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RArcEntity.prototype.init = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RArcEntity.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RArcEntity.prototype.getStaticPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getStaticPropertyTypeIds");
          return this.__PROXY__.getStaticPropertyTypeIds(...args);
        };
    
        // function 
        RArcEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RArcEntity.prototype.setShape = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.setShape");
          return this.__PROXY__.setShape(...args);
        };
    
        // function 
        RArcEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RArcEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RArcEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        RArcEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        RArcEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        RArcEntity.prototype.getCenter = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getCenter");
          return this.__PROXY__.getCenter(...args);
        };
    
        // function 
        RArcEntity.prototype.getRadius = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getRadius");
          return this.__PROXY__.getRadius(...args);
        };
    
        // function 
        RArcEntity.prototype.setRadius = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.setRadius");
          return this.__PROXY__.setRadius(...args);
        };
    
        // function 
        RArcEntity.prototype.getBulge = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getBulge");
          return this.__PROXY__.getBulge(...args);
        };
    
        // function 
        RArcEntity.prototype.getStartAngle = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getStartAngle");
          return this.__PROXY__.getStartAngle(...args);
        };
    
        // function 
        RArcEntity.prototype.setStartAngle = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.setStartAngle");
          return this.__PROXY__.setStartAngle(...args);
        };
    
        // function 
        RArcEntity.prototype.getEndAngle = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getEndAngle");
          return this.__PROXY__.getEndAngle(...args);
        };
    
        // function 
        RArcEntity.prototype.setEndAngle = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.setEndAngle");
          return this.__PROXY__.setEndAngle(...args);
        };
    
        // function 
        RArcEntity.prototype.isReversed = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.isReversed");
          return this.__PROXY__.isReversed(...args);
        };
    
        // function 
        RArcEntity.prototype.setReversed = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.setReversed");
          return this.__PROXY__.setReversed(...args);
        };
    
        // function 
        RArcEntity.prototype.getDirection1 = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getDirection1");
          return this.__PROXY__.getDirection1(...args);
        };
    
        // function 
        RArcEntity.prototype.getDirection2 = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getDirection2");
          return this.__PROXY__.getDirection2(...args);
        };
    
        // function 
        RArcEntity.prototype.getStartPoint = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getStartPoint");
          return this.__PROXY__.getStartPoint(...args);
        };
    
        // function 
        RArcEntity.prototype.getEndPoint = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getEndPoint");
          return this.__PROXY__.getEndPoint(...args);
        };
    
        // function 
        RArcEntity.prototype.getMiddlePoint = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getMiddlePoint");
          return this.__PROXY__.getMiddlePoint(...args);
        };
    
        // function 
        RArcEntity.prototype.reverse = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.reverse");
          return this.__PROXY__.reverse(...args);
        };
    
        // function 
        RArcEntity.prototype.getSideOfPoint = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getSideOfPoint");
          return this.__PROXY__.getSideOfPoint(...args);
        };
    
        // function 
        RArcEntity.prototype.getSweep = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getSweep");
          return this.__PROXY__.getSweep(...args);
        };
    
        // function 
        RArcEntity.prototype.getTrimEnd = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getTrimEnd");
          return this.__PROXY__.getTrimEnd(...args);
        };
    
        // function 
        RArcEntity.prototype.trimStartPoint = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.trimStartPoint");
          return this.__PROXY__.trimStartPoint(...args);
        };
    
        // function 
        RArcEntity.prototype.trimEndPoint = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.trimEndPoint");
          return this.__PROXY__.trimEndPoint(...args);
        };
    
        // function 
        RArcEntity.prototype.getLength = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getLength");
          return this.__PROXY__.getLength(...args);
        };
    
        // function 
        RArcEntity.prototype.getAngleLength = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getAngleLength");
          return this.__PROXY__.getAngleLength(...args);
        };
    
        // function 
        RArcEntity.prototype.getAngleAt = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.getAngleAt");
          return this.__PROXY__.getAngleAt(...args);
        };
    
        // function 
        RArcEntity.prototype.print = function(...args) 
          
        {
          //print("JS: RArcEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

        // static function 
        RArcEntity.init = function() 
          
        {
          //print("JS: RArcEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RArcEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RArcEntity);
  }

  
  else {
    
        print("RArcEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArcEntity.getRtti = function() 
          
        {
          //print("JS: RArcEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RArcEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RArcEntity);
  }

  
  else {
    
        print("RArcEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArcEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RArcEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RArcEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RArcEntity);
  }

  
  else {
    
        print("RArcEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RArcEntity.INVALID_ID = 
  RArcEntity_WrapperSingletonInstance.INVALID_ID;
RArcEntity.INVALID_HANDLE = 
  RArcEntity_WrapperSingletonInstance.INVALID_HANDLE;
RArcEntity.PropertySelected = 
  RArcEntity_WrapperSingletonInstance.PropertySelected;
RArcEntity.PropertyInvisible = 
  RArcEntity_WrapperSingletonInstance.PropertyInvisible;
RArcEntity.PropertyParentId = 
  RArcEntity_WrapperSingletonInstance.PropertyParentId;
RArcEntity.PropertyMinX = 
  RArcEntity_WrapperSingletonInstance.PropertyMinX;
RArcEntity.PropertyMinY = 
  RArcEntity_WrapperSingletonInstance.PropertyMinY;
RArcEntity.PropertyMaxX = 
  RArcEntity_WrapperSingletonInstance.PropertyMaxX;
RArcEntity.PropertyMaxY = 
  RArcEntity_WrapperSingletonInstance.PropertyMaxY;
RArcEntity.PropertySizeX = 
  RArcEntity_WrapperSingletonInstance.PropertySizeX;
RArcEntity.PropertySizeY = 
  RArcEntity_WrapperSingletonInstance.PropertySizeY;
RArcEntity.PropertyCustom = 
  RArcEntity_WrapperSingletonInstance.PropertyCustom;
RArcEntity.PropertyHandle = 
  RArcEntity_WrapperSingletonInstance.PropertyHandle;
RArcEntity.PropertyProtected = 
  RArcEntity_WrapperSingletonInstance.PropertyProtected;
RArcEntity.PropertyWorkingSet = 
  RArcEntity_WrapperSingletonInstance.PropertyWorkingSet;
RArcEntity.PropertyType = 
  RArcEntity_WrapperSingletonInstance.PropertyType;
RArcEntity.PropertyBlock = 
  RArcEntity_WrapperSingletonInstance.PropertyBlock;
RArcEntity.PropertyLayer = 
  RArcEntity_WrapperSingletonInstance.PropertyLayer;
RArcEntity.PropertyLinetype = 
  RArcEntity_WrapperSingletonInstance.PropertyLinetype;
RArcEntity.PropertyLinetypeScale = 
  RArcEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RArcEntity.PropertyLineweight = 
  RArcEntity_WrapperSingletonInstance.PropertyLineweight;
RArcEntity.PropertyColor = 
  RArcEntity_WrapperSingletonInstance.PropertyColor;
RArcEntity.PropertyDisplayedColor = 
  RArcEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RArcEntity.PropertyDrawOrder = 
  RArcEntity_WrapperSingletonInstance.PropertyDrawOrder;
RArcEntity.PropertyCenterX = 
  RArcEntity_WrapperSingletonInstance.PropertyCenterX;
RArcEntity.PropertyCenterY = 
  RArcEntity_WrapperSingletonInstance.PropertyCenterY;
RArcEntity.PropertyCenterZ = 
  RArcEntity_WrapperSingletonInstance.PropertyCenterZ;
RArcEntity.PropertyMiddlePointX = 
  RArcEntity_WrapperSingletonInstance.PropertyMiddlePointX;
RArcEntity.PropertyMiddlePointY = 
  RArcEntity_WrapperSingletonInstance.PropertyMiddlePointY;
RArcEntity.PropertyMiddlePointZ = 
  RArcEntity_WrapperSingletonInstance.PropertyMiddlePointZ;
RArcEntity.PropertyRadius = 
  RArcEntity_WrapperSingletonInstance.PropertyRadius;
RArcEntity.PropertyStartAngle = 
  RArcEntity_WrapperSingletonInstance.PropertyStartAngle;
RArcEntity.PropertyEndAngle = 
  RArcEntity_WrapperSingletonInstance.PropertyEndAngle;
RArcEntity.PropertyReversed = 
  RArcEntity_WrapperSingletonInstance.PropertyReversed;
RArcEntity.PropertyDiameter = 
  RArcEntity_WrapperSingletonInstance.PropertyDiameter;
RArcEntity.PropertyLength = 
  RArcEntity_WrapperSingletonInstance.PropertyLength;
RArcEntity.PropertyTotalLength = 
  RArcEntity_WrapperSingletonInstance.PropertyTotalLength;
RArcEntity.PropertySweepAngle = 
  RArcEntity_WrapperSingletonInstance.PropertySweepAngle;
RArcEntity.PropertyArea = 
  RArcEntity_WrapperSingletonInstance.PropertyArea;
RArcEntity.PropertyTotalArea = 
  RArcEntity_WrapperSingletonInstance.PropertyTotalArea;


      // copy function:
      //RArcEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RArcEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RArcEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      