
      // auto generated
      //var self;

      // class constructor:
      function RSolidEntity() {
        

        // should be RSolidEntity_BaseJs.call(this, engine):
        //RSolidEntity.prototype = new RSolidEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSolidEntity.getIdStatic()))) {

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
            qWarning("RSolidEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RSolidEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RSolidEntity);
  }

  
  else {
    
        print("RSolidEntity(): wrong number / type of arguments");
      
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

      //RSolidEntity.prototype = new RSolidEntity_BaseJs(engine);
      //RSolidEntity.prototype = new RSolidEntity_Wrapper(engine);
      RSolidEntity.prototype = new Object();

      RSolidEntity.prototype.toString = function() {
          //return "RSolidEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSolidEntity [JS]";
        };
      RSolidEntity.getObjectType = function() {
        return RJSType_RSolidEntity.getIdStatic();
      };

      RSolidEntity.prototype.getObjectType = function() {
        return RJSType_RSolidEntity.getIdStatic();
      };

      RSolidEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSolidEntity.getIdStatic()) {
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
        RSolidEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RSolidEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RSolidEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RSolidEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RSolidEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RSolidEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RSolidEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RSolidEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RSolidEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RSolidEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RSolidEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RSolidEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RSolidEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RSolidEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RSolidEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RSolidEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RSolidEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RSolidEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RSolidEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RSolidEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RSolidEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RSolidEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RSolidEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RSolidEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RSolidEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RSolidEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RSolidEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RSolidEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RSolidEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RSolidEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RSolidEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RSolidEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RSolidEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RSolidEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RSolidEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RSolidEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RSolidEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RSolidEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RSolidEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RSolidEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RSolidEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RSolidEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RSolidEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        RSolidEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RSolidEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RSolidEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RSolidEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RSolidEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RSolidEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RSolidEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RSolidEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RSolidEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RSolidEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RSolidEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RSolidEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RSolidEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RSolidEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RSolidEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RSolidEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RSolidEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RSolidEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RSolidEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RSolidEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RSolidEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RSolidEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RSolidEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RSolidEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RSolidEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RSolidEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RSolidEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RSolidEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RSolidEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RSolidEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RSolidEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RSolidEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RSolidEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RSolidEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        RSolidEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RSolidEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RSolidEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RSolidEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RSolidEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RSolidEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RSolidEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RSolidEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RSolidEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RSolidEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RSolidEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RSolidEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RSolidEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RSolidEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RSolidEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        RSolidEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RSolidEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RSolidEntity.prototype.move = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RSolidEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RSolidEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RSolidEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        RSolidEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RSolidEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        RSolidEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RSolidEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RSolidEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RSolidEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RSolidEntity.prototype.update = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RSolidEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RSolidEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RSolidEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        RSolidEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        RSolidEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        RSolidEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RSolidEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RSolidEntity.prototype.init = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RSolidEntity.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RSolidEntity.prototype.getStaticPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getStaticPropertyTypeIds");
          return this.__PROXY__.getStaticPropertyTypeIds(...args);
        };
    
        // function 
        RSolidEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RSolidEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RSolidEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RSolidEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        RSolidEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        RSolidEntity.prototype.getVertexAt = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getVertexAt");
          return this.__PROXY__.getVertexAt(...args);
        };
    
        // function 
        RSolidEntity.prototype.countVertices = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.countVertices");
          return this.__PROXY__.countVertices(...args);
        };
    
        // function 
        RSolidEntity.prototype.getStartPoint = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getStartPoint");
          return this.__PROXY__.getStartPoint(...args);
        };
    
        // function 
        RSolidEntity.prototype.getEndPoint = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getEndPoint");
          return this.__PROXY__.getEndPoint(...args);
        };
    
        // function 
        RSolidEntity.prototype.getDirection1 = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getDirection1");
          return this.__PROXY__.getDirection1(...args);
        };
    
        // function 
        RSolidEntity.prototype.getDirection2 = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getDirection2");
          return this.__PROXY__.getDirection2(...args);
        };
    
        // function 
        RSolidEntity.prototype.reverse = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.reverse");
          return this.__PROXY__.reverse(...args);
        };
    
        // function 
        RSolidEntity.prototype.getTrimEnd = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getTrimEnd");
          return this.__PROXY__.getTrimEnd(...args);
        };
    
        // function 
        RSolidEntity.prototype.trimStartPoint = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.trimStartPoint");
          return this.__PROXY__.trimStartPoint(...args);
        };
    
        // function 
        RSolidEntity.prototype.trimEndPoint = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.trimEndPoint");
          return this.__PROXY__.trimEndPoint(...args);
        };
    
        // function 
        RSolidEntity.prototype.getLength = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getLength");
          return this.__PROXY__.getLength(...args);
        };
    
        // function 
        RSolidEntity.prototype.getExploded = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.getExploded");
          return this.__PROXY__.getExploded(...args);
        };
    
        // function 
        RSolidEntity.prototype.print = function(...args) 
          
        {
          //print("JS: RSolidEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

        // static function 
        RSolidEntity.init = function() 
          
        {
          //print("JS: RSolidEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSolidEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RSolidEntity);
  }

  
  else {
    
        print("RSolidEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSolidEntity.getRtti = function() 
          
        {
          //print("JS: RSolidEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSolidEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RSolidEntity);
  }

  
  else {
    
        print("RSolidEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSolidEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RSolidEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSolidEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RSolidEntity);
  }

  
  else {
    
        print("RSolidEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RSolidEntity.INVALID_ID = 
  RSolidEntity_WrapperSingletonInstance.INVALID_ID;
RSolidEntity.INVALID_HANDLE = 
  RSolidEntity_WrapperSingletonInstance.INVALID_HANDLE;
RSolidEntity.PropertySelected = 
  RSolidEntity_WrapperSingletonInstance.PropertySelected;
RSolidEntity.PropertyInvisible = 
  RSolidEntity_WrapperSingletonInstance.PropertyInvisible;
RSolidEntity.PropertyParentId = 
  RSolidEntity_WrapperSingletonInstance.PropertyParentId;
RSolidEntity.PropertyMinX = 
  RSolidEntity_WrapperSingletonInstance.PropertyMinX;
RSolidEntity.PropertyMinY = 
  RSolidEntity_WrapperSingletonInstance.PropertyMinY;
RSolidEntity.PropertyMaxX = 
  RSolidEntity_WrapperSingletonInstance.PropertyMaxX;
RSolidEntity.PropertyMaxY = 
  RSolidEntity_WrapperSingletonInstance.PropertyMaxY;
RSolidEntity.PropertySizeX = 
  RSolidEntity_WrapperSingletonInstance.PropertySizeX;
RSolidEntity.PropertySizeY = 
  RSolidEntity_WrapperSingletonInstance.PropertySizeY;
RSolidEntity.PropertyCustom = 
  RSolidEntity_WrapperSingletonInstance.PropertyCustom;
RSolidEntity.PropertyHandle = 
  RSolidEntity_WrapperSingletonInstance.PropertyHandle;
RSolidEntity.PropertyProtected = 
  RSolidEntity_WrapperSingletonInstance.PropertyProtected;
RSolidEntity.PropertyWorkingSet = 
  RSolidEntity_WrapperSingletonInstance.PropertyWorkingSet;
RSolidEntity.PropertyType = 
  RSolidEntity_WrapperSingletonInstance.PropertyType;
RSolidEntity.PropertyBlock = 
  RSolidEntity_WrapperSingletonInstance.PropertyBlock;
RSolidEntity.PropertyLayer = 
  RSolidEntity_WrapperSingletonInstance.PropertyLayer;
RSolidEntity.PropertyLinetype = 
  RSolidEntity_WrapperSingletonInstance.PropertyLinetype;
RSolidEntity.PropertyLinetypeScale = 
  RSolidEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RSolidEntity.PropertyLineweight = 
  RSolidEntity_WrapperSingletonInstance.PropertyLineweight;
RSolidEntity.PropertyColor = 
  RSolidEntity_WrapperSingletonInstance.PropertyColor;
RSolidEntity.PropertyDisplayedColor = 
  RSolidEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RSolidEntity.PropertyDrawOrder = 
  RSolidEntity_WrapperSingletonInstance.PropertyDrawOrder;
RSolidEntity.PropertyPoint1X = 
  RSolidEntity_WrapperSingletonInstance.PropertyPoint1X;
RSolidEntity.PropertyPoint1Y = 
  RSolidEntity_WrapperSingletonInstance.PropertyPoint1Y;
RSolidEntity.PropertyPoint1Z = 
  RSolidEntity_WrapperSingletonInstance.PropertyPoint1Z;
RSolidEntity.PropertyPoint2X = 
  RSolidEntity_WrapperSingletonInstance.PropertyPoint2X;
RSolidEntity.PropertyPoint2Y = 
  RSolidEntity_WrapperSingletonInstance.PropertyPoint2Y;
RSolidEntity.PropertyPoint2Z = 
  RSolidEntity_WrapperSingletonInstance.PropertyPoint2Z;
RSolidEntity.PropertyPoint3X = 
  RSolidEntity_WrapperSingletonInstance.PropertyPoint3X;
RSolidEntity.PropertyPoint3Y = 
  RSolidEntity_WrapperSingletonInstance.PropertyPoint3Y;
RSolidEntity.PropertyPoint3Z = 
  RSolidEntity_WrapperSingletonInstance.PropertyPoint3Z;
RSolidEntity.PropertyPoint4X = 
  RSolidEntity_WrapperSingletonInstance.PropertyPoint4X;
RSolidEntity.PropertyPoint4Y = 
  RSolidEntity_WrapperSingletonInstance.PropertyPoint4Y;
RSolidEntity.PropertyPoint4Z = 
  RSolidEntity_WrapperSingletonInstance.PropertyPoint4Z;
RSolidEntity.PropertyLength = 
  RSolidEntity_WrapperSingletonInstance.PropertyLength;
RSolidEntity.PropertyTotalLength = 
  RSolidEntity_WrapperSingletonInstance.PropertyTotalLength;


      // copy function:
      //RSolidEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSolidEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RSolidEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      