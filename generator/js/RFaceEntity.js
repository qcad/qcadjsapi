
      // auto generated
      //var self;

      // class constructor:
      function RFaceEntity() {
        

        // should be RFaceEntity_BaseJs.call(this, engine):
        //RFaceEntity.prototype = new RFaceEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RFaceEntity.getIdStatic()))) {

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
            qWarning("RFaceEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RFaceEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RFaceEntity);
  }

  
  else {
    
        print("RFaceEntity(): wrong number / type of arguments");
      
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

      //RFaceEntity.prototype = new RFaceEntity_BaseJs(engine);
      //RFaceEntity.prototype = new RFaceEntity_Wrapper(engine);
      RFaceEntity.prototype = new Object();

      RFaceEntity.prototype.toString = function() {
          //return "RFaceEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RFaceEntity [JS]";
        };
      RFaceEntity.getObjectType = function() {
        return RJSType_RFaceEntity.getIdStatic();
      };

      RFaceEntity.prototype.getObjectType = function() {
        return RJSType_RFaceEntity.getIdStatic();
      };

      RFaceEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RFaceEntity.getIdStatic()) {
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
        RFaceEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RFaceEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RFaceEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RFaceEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RFaceEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RFaceEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RFaceEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RFaceEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RFaceEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RFaceEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RFaceEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RFaceEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RFaceEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RFaceEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RFaceEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RFaceEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RFaceEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RFaceEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RFaceEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RFaceEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RFaceEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RFaceEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RFaceEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RFaceEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RFaceEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RFaceEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RFaceEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RFaceEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RFaceEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RFaceEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RFaceEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RFaceEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RFaceEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RFaceEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RFaceEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RFaceEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RFaceEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RFaceEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RFaceEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RFaceEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RFaceEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RFaceEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RFaceEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        RFaceEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RFaceEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RFaceEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RFaceEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RFaceEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RFaceEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RFaceEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RFaceEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RFaceEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RFaceEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RFaceEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RFaceEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RFaceEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RFaceEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RFaceEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RFaceEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RFaceEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RFaceEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RFaceEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RFaceEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RFaceEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RFaceEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RFaceEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RFaceEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RFaceEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RFaceEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RFaceEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RFaceEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RFaceEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RFaceEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RFaceEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RFaceEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RFaceEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RFaceEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        RFaceEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RFaceEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RFaceEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RFaceEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RFaceEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RFaceEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RFaceEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RFaceEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RFaceEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RFaceEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RFaceEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RFaceEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RFaceEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RFaceEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RFaceEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        RFaceEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RFaceEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RFaceEntity.prototype.move = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RFaceEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RFaceEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RFaceEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        RFaceEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RFaceEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        RFaceEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RFaceEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RFaceEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RFaceEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RFaceEntity.prototype.update = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RFaceEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RFaceEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RFaceEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        RFaceEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        RFaceEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        RFaceEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RFaceEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RFaceEntity.prototype.init = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RFaceEntity.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RFaceEntity.prototype.getStaticPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getStaticPropertyTypeIds");
          return this.__PROXY__.getStaticPropertyTypeIds(...args);
        };
    
        // function 
        RFaceEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RFaceEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RFaceEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RFaceEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        RFaceEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        RFaceEntity.prototype.getVertexAt = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getVertexAt");
          return this.__PROXY__.getVertexAt(...args);
        };
    
        // function 
        RFaceEntity.prototype.countVertices = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.countVertices");
          return this.__PROXY__.countVertices(...args);
        };
    
        // function 
        RFaceEntity.prototype.getStartPoint = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getStartPoint");
          return this.__PROXY__.getStartPoint(...args);
        };
    
        // function 
        RFaceEntity.prototype.getEndPoint = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getEndPoint");
          return this.__PROXY__.getEndPoint(...args);
        };
    
        // function 
        RFaceEntity.prototype.getDirection1 = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getDirection1");
          return this.__PROXY__.getDirection1(...args);
        };
    
        // function 
        RFaceEntity.prototype.getDirection2 = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getDirection2");
          return this.__PROXY__.getDirection2(...args);
        };
    
        // function 
        RFaceEntity.prototype.reverse = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.reverse");
          return this.__PROXY__.reverse(...args);
        };
    
        // function 
        RFaceEntity.prototype.getTrimEnd = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getTrimEnd");
          return this.__PROXY__.getTrimEnd(...args);
        };
    
        // function 
        RFaceEntity.prototype.trimStartPoint = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.trimStartPoint");
          return this.__PROXY__.trimStartPoint(...args);
        };
    
        // function 
        RFaceEntity.prototype.trimEndPoint = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.trimEndPoint");
          return this.__PROXY__.trimEndPoint(...args);
        };
    
        // function 
        RFaceEntity.prototype.getLength = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getLength");
          return this.__PROXY__.getLength(...args);
        };
    
        // function 
        RFaceEntity.prototype.getExploded = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.getExploded");
          return this.__PROXY__.getExploded(...args);
        };
    
        // function 
        RFaceEntity.prototype.print = function(...args) 
          
        {
          //print("JS: RFaceEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

        // static function 
        RFaceEntity.init = function() 
          
        {
          //print("JS: RFaceEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RFaceEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RFaceEntity);
  }

  
  else {
    
        print("RFaceEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RFaceEntity.getRtti = function() 
          
        {
          //print("JS: RFaceEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RFaceEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RFaceEntity);
  }

  
  else {
    
        print("RFaceEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RFaceEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RFaceEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RFaceEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RFaceEntity);
  }

  
  else {
    
        print("RFaceEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RFaceEntity.INVALID_ID = 
  RFaceEntity_WrapperSingletonInstance.INVALID_ID;
RFaceEntity.INVALID_HANDLE = 
  RFaceEntity_WrapperSingletonInstance.INVALID_HANDLE;
RFaceEntity.PropertySelected = 
  RFaceEntity_WrapperSingletonInstance.PropertySelected;
RFaceEntity.PropertyInvisible = 
  RFaceEntity_WrapperSingletonInstance.PropertyInvisible;
RFaceEntity.PropertyParentId = 
  RFaceEntity_WrapperSingletonInstance.PropertyParentId;
RFaceEntity.PropertyMinX = 
  RFaceEntity_WrapperSingletonInstance.PropertyMinX;
RFaceEntity.PropertyMinY = 
  RFaceEntity_WrapperSingletonInstance.PropertyMinY;
RFaceEntity.PropertyMaxX = 
  RFaceEntity_WrapperSingletonInstance.PropertyMaxX;
RFaceEntity.PropertyMaxY = 
  RFaceEntity_WrapperSingletonInstance.PropertyMaxY;
RFaceEntity.PropertySizeX = 
  RFaceEntity_WrapperSingletonInstance.PropertySizeX;
RFaceEntity.PropertySizeY = 
  RFaceEntity_WrapperSingletonInstance.PropertySizeY;
RFaceEntity.PropertyCustom = 
  RFaceEntity_WrapperSingletonInstance.PropertyCustom;
RFaceEntity.PropertyHandle = 
  RFaceEntity_WrapperSingletonInstance.PropertyHandle;
RFaceEntity.PropertyProtected = 
  RFaceEntity_WrapperSingletonInstance.PropertyProtected;
RFaceEntity.PropertyWorkingSet = 
  RFaceEntity_WrapperSingletonInstance.PropertyWorkingSet;
RFaceEntity.PropertyType = 
  RFaceEntity_WrapperSingletonInstance.PropertyType;
RFaceEntity.PropertyBlock = 
  RFaceEntity_WrapperSingletonInstance.PropertyBlock;
RFaceEntity.PropertyLayer = 
  RFaceEntity_WrapperSingletonInstance.PropertyLayer;
RFaceEntity.PropertyLinetype = 
  RFaceEntity_WrapperSingletonInstance.PropertyLinetype;
RFaceEntity.PropertyLinetypeScale = 
  RFaceEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RFaceEntity.PropertyLineweight = 
  RFaceEntity_WrapperSingletonInstance.PropertyLineweight;
RFaceEntity.PropertyColor = 
  RFaceEntity_WrapperSingletonInstance.PropertyColor;
RFaceEntity.PropertyDisplayedColor = 
  RFaceEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RFaceEntity.PropertyDrawOrder = 
  RFaceEntity_WrapperSingletonInstance.PropertyDrawOrder;
RFaceEntity.PropertyPoint1X = 
  RFaceEntity_WrapperSingletonInstance.PropertyPoint1X;
RFaceEntity.PropertyPoint1Y = 
  RFaceEntity_WrapperSingletonInstance.PropertyPoint1Y;
RFaceEntity.PropertyPoint1Z = 
  RFaceEntity_WrapperSingletonInstance.PropertyPoint1Z;
RFaceEntity.PropertyPoint2X = 
  RFaceEntity_WrapperSingletonInstance.PropertyPoint2X;
RFaceEntity.PropertyPoint2Y = 
  RFaceEntity_WrapperSingletonInstance.PropertyPoint2Y;
RFaceEntity.PropertyPoint2Z = 
  RFaceEntity_WrapperSingletonInstance.PropertyPoint2Z;
RFaceEntity.PropertyPoint3X = 
  RFaceEntity_WrapperSingletonInstance.PropertyPoint3X;
RFaceEntity.PropertyPoint3Y = 
  RFaceEntity_WrapperSingletonInstance.PropertyPoint3Y;
RFaceEntity.PropertyPoint3Z = 
  RFaceEntity_WrapperSingletonInstance.PropertyPoint3Z;
RFaceEntity.PropertyPoint4X = 
  RFaceEntity_WrapperSingletonInstance.PropertyPoint4X;
RFaceEntity.PropertyPoint4Y = 
  RFaceEntity_WrapperSingletonInstance.PropertyPoint4Y;
RFaceEntity.PropertyPoint4Z = 
  RFaceEntity_WrapperSingletonInstance.PropertyPoint4Z;
RFaceEntity.PropertyLength = 
  RFaceEntity_WrapperSingletonInstance.PropertyLength;
RFaceEntity.PropertyTotalLength = 
  RFaceEntity_WrapperSingletonInstance.PropertyTotalLength;


      // copy function:
      //RFaceEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RFaceEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RFaceEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      