
      // auto generated
      //var self;

      // class constructor:
      function RTextEntity() {
        

        // should be RTextEntity_BaseJs.call(this, engine):
        //RTextEntity.prototype = new RTextEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTextEntity.getIdStatic()))) {

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
            qWarning("RTextEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RTextEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RTextEntity);
  }

  
  else {
    
        print("RTextEntity(): wrong number / type of arguments");
      
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

      //RTextEntity.prototype = new RTextEntity_BaseJs(engine);
      //RTextEntity.prototype = new RTextEntity_Wrapper(engine);
      RTextEntity.prototype = new Object();

      RTextEntity.prototype.toString = function() {
          //return "RTextEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTextEntity [JS]";
        };
      RTextEntity.getObjectType = function() {
        return RJSType_RTextEntity.getIdStatic();
      };

      RTextEntity.prototype.getObjectType = function() {
        return RJSType_RTextEntity.getIdStatic();
      };

      RTextEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTextEntity.getIdStatic()) {
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
        RTextEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RTextEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RTextEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RTextEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RTextEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RTextEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RTextEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RTextEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RTextEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RTextEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RTextEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RTextEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RTextEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RTextEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RTextEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RTextEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RTextEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RTextEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RTextEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RTextEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RTextEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RTextEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RTextEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RTextEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RTextEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RTextEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RTextEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RTextEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RTextEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RTextEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RTextEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RTextEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RTextEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RTextEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RTextEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RTextEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RTextEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RTextEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RTextEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RTextEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RTextEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RTextEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RTextEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        RTextEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RTextEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RTextEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RTextEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RTextEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RTextEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RTextEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RTextEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RTextEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RTextEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RTextEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RTextEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RTextEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RTextEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RTextEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RTextEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RTextEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RTextEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RTextEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RTextEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RTextEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RTextEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RTextEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RTextEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RTextEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RTextEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RTextEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RTextEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RTextEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RTextEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RTextEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RTextEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RTextEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        RTextEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RTextEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RTextEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RTextEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RTextEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RTextEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RTextEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RTextEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RTextEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RTextEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RTextEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RTextEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RTextEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RTextEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RTextEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        RTextEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RTextEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RTextEntity.prototype.move = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RTextEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RTextEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RTextEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RTextEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        RTextEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RTextEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RTextEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RTextEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RTextEntity.prototype.update = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RTextEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RTextEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RTextEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        RTextEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        RTextEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        RTextEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RTextEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RTextEntity.prototype.getRotatedBoundingBox = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getRotatedBoundingBox");
          return this.__PROXY__.getRotatedBoundingBox(...args);
        };
    
        // function 
        RTextEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RTextEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RTextEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        RTextEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        RTextEntity.prototype.getPainterPaths = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getPainterPaths");
          return this.__PROXY__.getPainterPaths(...args);
        };
    
        // function 
        RTextEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RTextEntity.prototype.getExploded = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getExploded");
          return this.__PROXY__.getExploded(...args);
        };
    
        // function 
        RTextEntity.prototype.getTextData = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getTextData");
          return this.__PROXY__.getTextData(...args);
        };
    
        // function 
        RTextEntity.prototype.isBold = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.isBold");
          return this.__PROXY__.isBold(...args);
        };
    
        // function 
        RTextEntity.prototype.setBold = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setBold");
          return this.__PROXY__.setBold(...args);
        };
    
        // function 
        RTextEntity.prototype.isItalic = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.isItalic");
          return this.__PROXY__.isItalic(...args);
        };
    
        // function 
        RTextEntity.prototype.setItalic = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setItalic");
          return this.__PROXY__.setItalic(...args);
        };
    
        // function 
        RTextEntity.prototype.isBackward = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.isBackward");
          return this.__PROXY__.isBackward(...args);
        };
    
        // function 
        RTextEntity.prototype.setBackward = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setBackward");
          return this.__PROXY__.setBackward(...args);
        };
    
        // function 
        RTextEntity.prototype.isUpsideDown = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.isUpsideDown");
          return this.__PROXY__.isUpsideDown(...args);
        };
    
        // function 
        RTextEntity.prototype.setUpsideDown = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setUpsideDown");
          return this.__PROXY__.setUpsideDown(...args);
        };
    
        // function 
        RTextEntity.prototype.getPosition = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getPosition");
          return this.__PROXY__.getPosition(...args);
        };
    
        // function 
        RTextEntity.prototype.setPosition = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setPosition");
          return this.__PROXY__.setPosition(...args);
        };
    
        // function 
        RTextEntity.prototype.getAlignmentPoint = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getAlignmentPoint");
          return this.__PROXY__.getAlignmentPoint(...args);
        };
    
        // function 
        RTextEntity.prototype.setAlignmentPoint = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setAlignmentPoint");
          return this.__PROXY__.setAlignmentPoint(...args);
        };
    
        // function 
        RTextEntity.prototype.getTextHeight = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getTextHeight");
          return this.__PROXY__.getTextHeight(...args);
        };
    
        // function 
        RTextEntity.prototype.setTextHeight = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setTextHeight");
          return this.__PROXY__.setTextHeight(...args);
        };
    
        // function 
        RTextEntity.prototype.getTextWidth = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getTextWidth");
          return this.__PROXY__.getTextWidth(...args);
        };
    
        // function 
        RTextEntity.prototype.getWidth = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getWidth");
          return this.__PROXY__.getWidth(...args);
        };
    
        // function 
        RTextEntity.prototype.getHeight = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getHeight");
          return this.__PROXY__.getHeight(...args);
        };
    
        // function 
        RTextEntity.prototype.getVAlign = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getVAlign");
          return this.__PROXY__.getVAlign(...args);
        };
    
        // function 
        RTextEntity.prototype.setVAlign = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setVAlign");
          return this.__PROXY__.setVAlign(...args);
        };
    
        // function 
        RTextEntity.prototype.getHAlign = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getHAlign");
          return this.__PROXY__.getHAlign(...args);
        };
    
        // function 
        RTextEntity.prototype.setHAlign = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setHAlign");
          return this.__PROXY__.setHAlign(...args);
        };
    
        // function 
        RTextEntity.prototype.getFontName = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getFontName");
          return this.__PROXY__.getFontName(...args);
        };
    
        // function 
        RTextEntity.prototype.setFontName = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setFontName");
          return this.__PROXY__.setFontName(...args);
        };
    
        // function 
        RTextEntity.prototype.getFontFile = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getFontFile");
          return this.__PROXY__.getFontFile(...args);
        };
    
        // function 
        RTextEntity.prototype.setDrawingDirection = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setDrawingDirection");
          return this.__PROXY__.setDrawingDirection(...args);
        };
    
        // function 
        RTextEntity.prototype.getDrawingDirection = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getDrawingDirection");
          return this.__PROXY__.getDrawingDirection(...args);
        };
    
        // function 
        RTextEntity.prototype.setLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setLineSpacingStyle");
          return this.__PROXY__.setLineSpacingStyle(...args);
        };
    
        // function 
        RTextEntity.prototype.getLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getLineSpacingStyle");
          return this.__PROXY__.getLineSpacingStyle(...args);
        };
    
        // function 
        RTextEntity.prototype.setLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setLineSpacingFactor");
          return this.__PROXY__.setLineSpacingFactor(...args);
        };
    
        // function 
        RTextEntity.prototype.getLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getLineSpacingFactor");
          return this.__PROXY__.getLineSpacingFactor(...args);
        };
    
        // function 
        RTextEntity.prototype.setAngle = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setAngle");
          return this.__PROXY__.setAngle(...args);
        };
    
        // function 
        RTextEntity.prototype.getAngle = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getAngle");
          return this.__PROXY__.getAngle(...args);
        };
    
        // function 
        RTextEntity.prototype.setXScale = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setXScale");
          return this.__PROXY__.setXScale(...args);
        };
    
        // function 
        RTextEntity.prototype.getXScale = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getXScale");
          return this.__PROXY__.getXScale(...args);
        };
    
        // function 
        RTextEntity.prototype.setSimple = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setSimple");
          return this.__PROXY__.setSimple(...args);
        };
    
        // function 
        RTextEntity.prototype.isSimple = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.isSimple");
          return this.__PROXY__.isSimple(...args);
        };
    
        // function 
        RTextEntity.prototype.getEscapedText = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getEscapedText");
          return this.__PROXY__.getEscapedText(...args);
        };
    
        // function 
        RTextEntity.prototype.getPlainText = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getPlainText");
          return this.__PROXY__.getPlainText(...args);
        };
    
        // function 
        RTextEntity.prototype.setText = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setText");
          return this.__PROXY__.setText(...args);
        };
    
        // function 
        RTextEntity.prototype.sync = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.sync");
          return this.__PROXY__.sync(...args);
        };
    
        // function 
        RTextEntity.prototype.getSimpleTextBlocks = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getSimpleTextBlocks");
          return this.__PROXY__.getSimpleTextBlocks(...args);
        };
    
        // function 
        RTextEntity.prototype.init = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RTextEntity.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RTextEntity.prototype.getStaticPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getStaticPropertyTypeIds");
          return this.__PROXY__.getStaticPropertyTypeIds(...args);
        };
    
        // function 
        RTextEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RTextEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        RTextEntity.prototype.setData = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.setData");
          return this.__PROXY__.setData(...args);
        };
    
        // function 
        RTextEntity.prototype.print = function(...args) 
          
        {
          //print("JS: RTextEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

        // static function 
        RTextEntity.init = function() 
          
        {
          //print("JS: RTextEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RTextEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RTextEntity);
  }

  
  else {
    
        print("RTextEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextEntity.getRtti = function() 
          
        {
          //print("JS: RTextEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RTextEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RTextEntity);
  }

  
  else {
    
        print("RTextEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RTextEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RTextEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RTextEntity);
  }

  
  else {
    
        print("RTextEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RTextEntity.INVALID_ID = 
  RTextEntity_WrapperSingletonInstance.INVALID_ID;
RTextEntity.INVALID_HANDLE = 
  RTextEntity_WrapperSingletonInstance.INVALID_HANDLE;
RTextEntity.PropertySelected = 
  RTextEntity_WrapperSingletonInstance.PropertySelected;
RTextEntity.PropertyInvisible = 
  RTextEntity_WrapperSingletonInstance.PropertyInvisible;
RTextEntity.PropertyParentId = 
  RTextEntity_WrapperSingletonInstance.PropertyParentId;
RTextEntity.PropertyMinX = 
  RTextEntity_WrapperSingletonInstance.PropertyMinX;
RTextEntity.PropertyMinY = 
  RTextEntity_WrapperSingletonInstance.PropertyMinY;
RTextEntity.PropertyMaxX = 
  RTextEntity_WrapperSingletonInstance.PropertyMaxX;
RTextEntity.PropertyMaxY = 
  RTextEntity_WrapperSingletonInstance.PropertyMaxY;
RTextEntity.PropertySizeX = 
  RTextEntity_WrapperSingletonInstance.PropertySizeX;
RTextEntity.PropertySizeY = 
  RTextEntity_WrapperSingletonInstance.PropertySizeY;
RTextEntity.PropertyCustom = 
  RTextEntity_WrapperSingletonInstance.PropertyCustom;
RTextEntity.PropertyHandle = 
  RTextEntity_WrapperSingletonInstance.PropertyHandle;
RTextEntity.PropertyProtected = 
  RTextEntity_WrapperSingletonInstance.PropertyProtected;
RTextEntity.PropertyWorkingSet = 
  RTextEntity_WrapperSingletonInstance.PropertyWorkingSet;
RTextEntity.PropertyType = 
  RTextEntity_WrapperSingletonInstance.PropertyType;
RTextEntity.PropertyBlock = 
  RTextEntity_WrapperSingletonInstance.PropertyBlock;
RTextEntity.PropertyLayer = 
  RTextEntity_WrapperSingletonInstance.PropertyLayer;
RTextEntity.PropertyLinetype = 
  RTextEntity_WrapperSingletonInstance.PropertyLinetype;
RTextEntity.PropertyLinetypeScale = 
  RTextEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RTextEntity.PropertyLineweight = 
  RTextEntity_WrapperSingletonInstance.PropertyLineweight;
RTextEntity.PropertyColor = 
  RTextEntity_WrapperSingletonInstance.PropertyColor;
RTextEntity.PropertyDisplayedColor = 
  RTextEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RTextEntity.PropertyDrawOrder = 
  RTextEntity_WrapperSingletonInstance.PropertyDrawOrder;
RTextEntity.PropertySimple = 
  RTextEntity_WrapperSingletonInstance.PropertySimple;
RTextEntity.PropertyPositionX = 
  RTextEntity_WrapperSingletonInstance.PropertyPositionX;
RTextEntity.PropertyPositionY = 
  RTextEntity_WrapperSingletonInstance.PropertyPositionY;
RTextEntity.PropertyPositionZ = 
  RTextEntity_WrapperSingletonInstance.PropertyPositionZ;
RTextEntity.PropertyText = 
  RTextEntity_WrapperSingletonInstance.PropertyText;
RTextEntity.PropertyPlainText = 
  RTextEntity_WrapperSingletonInstance.PropertyPlainText;
RTextEntity.PropertyFontName = 
  RTextEntity_WrapperSingletonInstance.PropertyFontName;
RTextEntity.PropertyHeight = 
  RTextEntity_WrapperSingletonInstance.PropertyHeight;
RTextEntity.PropertyWidth = 
  RTextEntity_WrapperSingletonInstance.PropertyWidth;
RTextEntity.PropertyAngle = 
  RTextEntity_WrapperSingletonInstance.PropertyAngle;
RTextEntity.PropertyXScale = 
  RTextEntity_WrapperSingletonInstance.PropertyXScale;
RTextEntity.PropertyBold = 
  RTextEntity_WrapperSingletonInstance.PropertyBold;
RTextEntity.PropertyItalic = 
  RTextEntity_WrapperSingletonInstance.PropertyItalic;
RTextEntity.PropertyLineSpacingFactor = 
  RTextEntity_WrapperSingletonInstance.PropertyLineSpacingFactor;
RTextEntity.PropertyHAlign = 
  RTextEntity_WrapperSingletonInstance.PropertyHAlign;
RTextEntity.PropertyVAlign = 
  RTextEntity_WrapperSingletonInstance.PropertyVAlign;
RTextEntity.PropertyBackward = 
  RTextEntity_WrapperSingletonInstance.PropertyBackward;
RTextEntity.PropertyUpsideDown = 
  RTextEntity_WrapperSingletonInstance.PropertyUpsideDown;


      // copy function:
      //RTextEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTextEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RTextEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      