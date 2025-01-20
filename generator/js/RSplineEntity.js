
      // auto generated
      //var self;

      // class constructor:
      function RSplineEntity() {
        

        // should be RSplineEntity_BaseJs.call(this, engine):
        //RSplineEntity.prototype = new RSplineEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSplineEntity.getIdStatic()))) {

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
            qWarning("RSplineEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RSplineEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RSplineEntity);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RSplineEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RSplineEntity);
  }

  
  else {
    
        print("RSplineEntity(): wrong number / type of arguments");
      
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

      //RSplineEntity.prototype = new RSplineEntity_BaseJs(engine);
      //RSplineEntity.prototype = new RSplineEntity_Wrapper(engine);
      RSplineEntity.prototype = new Object();

      RSplineEntity.prototype.toString = function() {
          //return "RSplineEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSplineEntity [JS]";
        };
      RSplineEntity.getObjectType = function() {
        return RJSType_RSplineEntity.getIdStatic();
      };

      RSplineEntity.prototype.getObjectType = function() {
        return RJSType_RSplineEntity.getIdStatic();
      };

      RSplineEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSplineEntity.getIdStatic()) {
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
        RSplineEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RSplineEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RSplineEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RSplineEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RSplineEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RSplineEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RSplineEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RSplineEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RSplineEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RSplineEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RSplineEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RSplineEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RSplineEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RSplineEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RSplineEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RSplineEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RSplineEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RSplineEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RSplineEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RSplineEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RSplineEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RSplineEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RSplineEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RSplineEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RSplineEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RSplineEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RSplineEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RSplineEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RSplineEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RSplineEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RSplineEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RSplineEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RSplineEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RSplineEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RSplineEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RSplineEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RSplineEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RSplineEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RSplineEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RSplineEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RSplineEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        RSplineEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RSplineEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RSplineEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RSplineEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RSplineEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RSplineEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RSplineEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RSplineEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RSplineEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RSplineEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RSplineEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RSplineEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RSplineEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RSplineEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RSplineEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RSplineEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RSplineEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RSplineEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RSplineEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RSplineEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RSplineEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RSplineEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RSplineEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RSplineEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RSplineEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RSplineEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RSplineEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RSplineEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RSplineEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RSplineEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RSplineEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RSplineEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RSplineEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RSplineEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        RSplineEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RSplineEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RSplineEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RSplineEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RSplineEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RSplineEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RSplineEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RSplineEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RSplineEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RSplineEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RSplineEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RSplineEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RSplineEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RSplineEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RSplineEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        RSplineEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RSplineEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RSplineEntity.prototype.move = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RSplineEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RSplineEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RSplineEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        RSplineEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RSplineEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        RSplineEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RSplineEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RSplineEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RSplineEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RSplineEntity.prototype.update = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RSplineEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RSplineEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RSplineEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        RSplineEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        RSplineEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        RSplineEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RSplineEntity.prototype.init = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RSplineEntity.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RSplineEntity.prototype.getStaticPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getStaticPropertyTypeIds");
          return this.__PROXY__.getStaticPropertyTypeIds(...args);
        };
    
        // function 
        RSplineEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RSplineEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RSplineEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RSplineEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        RSplineEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RSplineEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        RSplineEntity.prototype.setShape = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.setShape");
          return this.__PROXY__.setShape(...args);
        };
    
        // function 
        RSplineEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RSplineEntity.prototype.getTDelta = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getTDelta");
          return this.__PROXY__.getTDelta(...args);
        };
    
        // function 
        RSplineEntity.prototype.getTMin = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getTMin");
          return this.__PROXY__.getTMin(...args);
        };
    
        // function 
        RSplineEntity.prototype.getTMax = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getTMax");
          return this.__PROXY__.getTMax(...args);
        };
    
        // function 
        RSplineEntity.prototype.getTAtPoint = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getTAtPoint");
          return this.__PROXY__.getTAtPoint(...args);
        };
    
        // function 
        RSplineEntity.prototype.getTAtDistance = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getTAtDistance");
          return this.__PROXY__.getTAtDistance(...args);
        };
    
        // function 
        RSplineEntity.prototype.getDegree = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getDegree");
          return this.__PROXY__.getDegree(...args);
        };
    
        // function 
        RSplineEntity.prototype.getDirection1 = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getDirection1");
          return this.__PROXY__.getDirection1(...args);
        };
    
        // function 
        RSplineEntity.prototype.getDirection2 = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getDirection2");
          return this.__PROXY__.getDirection2(...args);
        };
    
        // function 
        RSplineEntity.prototype.getTrimEnd = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getTrimEnd");
          return this.__PROXY__.getTrimEnd(...args);
        };
    
        // function 
        RSplineEntity.prototype.trimStartPoint = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.trimStartPoint");
          return this.__PROXY__.trimStartPoint(...args);
        };
    
        // function 
        RSplineEntity.prototype.trimEndPoint = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.trimEndPoint");
          return this.__PROXY__.trimEndPoint(...args);
        };
    
        // function 
        RSplineEntity.prototype.splitAtPoints = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.splitAtPoints");
          return this.__PROXY__.splitAtPoints(...args);
        };
    
        // function 
        RSplineEntity.prototype.splitAtParams = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.splitAtParams");
          return this.__PROXY__.splitAtParams(...args);
        };
    
        // function 
        RSplineEntity.prototype.getTangentAtStart = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getTangentAtStart");
          return this.__PROXY__.getTangentAtStart(...args);
        };
    
        // function 
        RSplineEntity.prototype.getTangentAtEnd = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getTangentAtEnd");
          return this.__PROXY__.getTangentAtEnd(...args);
        };
    
        // function 
        RSplineEntity.prototype.isClosed = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.isClosed");
          return this.__PROXY__.isClosed(...args);
        };
    
        // function 
        RSplineEntity.prototype.isGeometricallyClosed = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.isGeometricallyClosed");
          return this.__PROXY__.isGeometricallyClosed(...args);
        };
    
        // function 
        RSplineEntity.prototype.isPeriodic = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.isPeriodic");
          return this.__PROXY__.isPeriodic(...args);
        };
    
        // function 
        RSplineEntity.prototype.appendControlPoint = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.appendControlPoint");
          return this.__PROXY__.appendControlPoint(...args);
        };
    
        // function 
        RSplineEntity.prototype.appendFitPoint = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.appendFitPoint");
          return this.__PROXY__.appendFitPoint(...args);
        };
    
        // function 
        RSplineEntity.prototype.prependFitPoint = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.prependFitPoint");
          return this.__PROXY__.prependFitPoint(...args);
        };
    
        // function 
        RSplineEntity.prototype.insertFitPointAt = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.insertFitPointAt");
          return this.__PROXY__.insertFitPointAt(...args);
        };
    
        // function 
        RSplineEntity.prototype.removeFitPointAt = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.removeFitPointAt");
          return this.__PROXY__.removeFitPointAt(...args);
        };
    
        // function 
        RSplineEntity.prototype.setPeriodic = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.setPeriodic");
          return this.__PROXY__.setPeriodic(...args);
        };
    
        // function 
        RSplineEntity.prototype.getControlPoints = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getControlPoints");
          return this.__PROXY__.getControlPoints(...args);
        };
    
        // function 
        RSplineEntity.prototype.getControlPointsWrapped = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getControlPointsWrapped");
          return this.__PROXY__.getControlPointsWrapped(...args);
        };
    
        // function 
        RSplineEntity.prototype.countControlPoints = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.countControlPoints");
          return this.__PROXY__.countControlPoints(...args);
        };
    
        // function 
        RSplineEntity.prototype.getControlPointAt = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getControlPointAt");
          return this.__PROXY__.getControlPointAt(...args);
        };
    
        // function 
        RSplineEntity.prototype.getFitPoints = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getFitPoints");
          return this.__PROXY__.getFitPoints(...args);
        };
    
        // function 
        RSplineEntity.prototype.hasFitPoints = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.hasFitPoints");
          return this.__PROXY__.hasFitPoints(...args);
        };
    
        // function 
        RSplineEntity.prototype.countFitPoints = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.countFitPoints");
          return this.__PROXY__.countFitPoints(...args);
        };
    
        // function 
        RSplineEntity.prototype.getFitPointAt = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getFitPointAt");
          return this.__PROXY__.getFitPointAt(...args);
        };
    
        // function 
        RSplineEntity.prototype.getKnotVector = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getKnotVector");
          return this.__PROXY__.getKnotVector(...args);
        };
    
        // function 
        RSplineEntity.prototype.getActualKnotVector = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getActualKnotVector");
          return this.__PROXY__.getActualKnotVector(...args);
        };
    
        // function 
        RSplineEntity.prototype.getWeights = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getWeights");
          return this.__PROXY__.getWeights(...args);
        };
    
        // function 
        RSplineEntity.prototype.getLength = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getLength");
          return this.__PROXY__.getLength(...args);
        };
    
        // function 
        RSplineEntity.prototype.getPointAt = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getPointAt");
          return this.__PROXY__.getPointAt(...args);
        };
    
        // function 
        RSplineEntity.prototype.getPointAtDistance = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getPointAtDistance");
          return this.__PROXY__.getPointAtDistance(...args);
        };
    
        // function 
        RSplineEntity.prototype.getAngleAt = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getAngleAt");
          return this.__PROXY__.getAngleAt(...args);
        };
    
        // function 
        RSplineEntity.prototype.getStartPoint = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getStartPoint");
          return this.__PROXY__.getStartPoint(...args);
        };
    
        // function 
        RSplineEntity.prototype.getEndPoint = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getEndPoint");
          return this.__PROXY__.getEndPoint(...args);
        };
    
        // function 
        RSplineEntity.prototype.setStartPoint = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.setStartPoint");
          return this.__PROXY__.setStartPoint(...args);
        };
    
        // function 
        RSplineEntity.prototype.setEndPoint = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.setEndPoint");
          return this.__PROXY__.setEndPoint(...args);
        };
    
        // function 
        RSplineEntity.prototype.toPolyline = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.toPolyline");
          return this.__PROXY__.toPolyline(...args);
        };
    
        // function 
        RSplineEntity.prototype.approximateWithArcs = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.approximateWithArcs");
          return this.__PROXY__.approximateWithArcs(...args);
        };
    
        // function 
        RSplineEntity.prototype.reverse = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.reverse");
          return this.__PROXY__.reverse(...args);
        };
    
        // function 
        RSplineEntity.prototype.getSideOfPoint = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getSideOfPoint");
          return this.__PROXY__.getSideOfPoint(...args);
        };
    
        // function 
        RSplineEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RSplineEntity.prototype.getExploded = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getExploded");
          return this.__PROXY__.getExploded(...args);
        };
    
        // function 
        RSplineEntity.prototype.simplify = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.simplify");
          return this.__PROXY__.simplify(...args);
        };
    
        // function 
        RSplineEntity.prototype.getBezierSegments = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.getBezierSegments");
          return this.__PROXY__.getBezierSegments(...args);
        };
    
        // function 
        RSplineEntity.prototype.print = function(...args) 
          
        {
          //print("JS: RSplineEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

        // static function 
        RSplineEntity.init = function() 
          
        {
          //print("JS: RSplineEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSplineEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RSplineEntity);
  }

  
  else {
    
        print("RSplineEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSplineEntity.getRtti = function() 
          
        {
          //print("JS: RSplineEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSplineEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RSplineEntity);
  }

  
  else {
    
        print("RSplineEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RSplineEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RSplineEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RSplineEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RSplineEntity);
  }

  
  else {
    
        print("RSplineEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RSplineEntity.INVALID_ID = 
  RSplineEntity_WrapperSingletonInstance.INVALID_ID;
RSplineEntity.INVALID_HANDLE = 
  RSplineEntity_WrapperSingletonInstance.INVALID_HANDLE;
RSplineEntity.PropertySelected = 
  RSplineEntity_WrapperSingletonInstance.PropertySelected;
RSplineEntity.PropertyInvisible = 
  RSplineEntity_WrapperSingletonInstance.PropertyInvisible;
RSplineEntity.PropertyParentId = 
  RSplineEntity_WrapperSingletonInstance.PropertyParentId;
RSplineEntity.PropertyMinX = 
  RSplineEntity_WrapperSingletonInstance.PropertyMinX;
RSplineEntity.PropertyMinY = 
  RSplineEntity_WrapperSingletonInstance.PropertyMinY;
RSplineEntity.PropertyMaxX = 
  RSplineEntity_WrapperSingletonInstance.PropertyMaxX;
RSplineEntity.PropertyMaxY = 
  RSplineEntity_WrapperSingletonInstance.PropertyMaxY;
RSplineEntity.PropertySizeX = 
  RSplineEntity_WrapperSingletonInstance.PropertySizeX;
RSplineEntity.PropertySizeY = 
  RSplineEntity_WrapperSingletonInstance.PropertySizeY;
RSplineEntity.PropertyCustom = 
  RSplineEntity_WrapperSingletonInstance.PropertyCustom;
RSplineEntity.PropertyHandle = 
  RSplineEntity_WrapperSingletonInstance.PropertyHandle;
RSplineEntity.PropertyProtected = 
  RSplineEntity_WrapperSingletonInstance.PropertyProtected;
RSplineEntity.PropertyWorkingSet = 
  RSplineEntity_WrapperSingletonInstance.PropertyWorkingSet;
RSplineEntity.PropertyType = 
  RSplineEntity_WrapperSingletonInstance.PropertyType;
RSplineEntity.PropertyBlock = 
  RSplineEntity_WrapperSingletonInstance.PropertyBlock;
RSplineEntity.PropertyLayer = 
  RSplineEntity_WrapperSingletonInstance.PropertyLayer;
RSplineEntity.PropertyLinetype = 
  RSplineEntity_WrapperSingletonInstance.PropertyLinetype;
RSplineEntity.PropertyLinetypeScale = 
  RSplineEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RSplineEntity.PropertyLineweight = 
  RSplineEntity_WrapperSingletonInstance.PropertyLineweight;
RSplineEntity.PropertyColor = 
  RSplineEntity_WrapperSingletonInstance.PropertyColor;
RSplineEntity.PropertyDisplayedColor = 
  RSplineEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RSplineEntity.PropertyDrawOrder = 
  RSplineEntity_WrapperSingletonInstance.PropertyDrawOrder;
RSplineEntity.PropertyControlPointNX = 
  RSplineEntity_WrapperSingletonInstance.PropertyControlPointNX;
RSplineEntity.PropertyControlPointNY = 
  RSplineEntity_WrapperSingletonInstance.PropertyControlPointNY;
RSplineEntity.PropertyControlPointNZ = 
  RSplineEntity_WrapperSingletonInstance.PropertyControlPointNZ;
RSplineEntity.PropertyFitPointNX = 
  RSplineEntity_WrapperSingletonInstance.PropertyFitPointNX;
RSplineEntity.PropertyFitPointNY = 
  RSplineEntity_WrapperSingletonInstance.PropertyFitPointNY;
RSplineEntity.PropertyFitPointNZ = 
  RSplineEntity_WrapperSingletonInstance.PropertyFitPointNZ;
RSplineEntity.PropertyKnotN = 
  RSplineEntity_WrapperSingletonInstance.PropertyKnotN;
RSplineEntity.PropertyPeriodic = 
  RSplineEntity_WrapperSingletonInstance.PropertyPeriodic;
RSplineEntity.PropertyDegree = 
  RSplineEntity_WrapperSingletonInstance.PropertyDegree;
RSplineEntity.PropertyUseStartTangent = 
  RSplineEntity_WrapperSingletonInstance.PropertyUseStartTangent;
RSplineEntity.PropertyStartTangentX = 
  RSplineEntity_WrapperSingletonInstance.PropertyStartTangentX;
RSplineEntity.PropertyStartTangentY = 
  RSplineEntity_WrapperSingletonInstance.PropertyStartTangentY;
RSplineEntity.PropertyStartTangentZ = 
  RSplineEntity_WrapperSingletonInstance.PropertyStartTangentZ;
RSplineEntity.PropertyUseEndTangent = 
  RSplineEntity_WrapperSingletonInstance.PropertyUseEndTangent;
RSplineEntity.PropertyEndTangentX = 
  RSplineEntity_WrapperSingletonInstance.PropertyEndTangentX;
RSplineEntity.PropertyEndTangentY = 
  RSplineEntity_WrapperSingletonInstance.PropertyEndTangentY;
RSplineEntity.PropertyEndTangentZ = 
  RSplineEntity_WrapperSingletonInstance.PropertyEndTangentZ;
RSplineEntity.PropertyLength = 
  RSplineEntity_WrapperSingletonInstance.PropertyLength;
RSplineEntity.PropertyTotalLength = 
  RSplineEntity_WrapperSingletonInstance.PropertyTotalLength;


      // copy function:
      //RSplineEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSplineEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RSplineEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      