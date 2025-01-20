
      // auto generated
      //var self;

      // class constructor:
      function REllipseEntity() {
        

        // should be REllipseEntity_BaseJs.call(this, engine):
        //REllipseEntity.prototype = new REllipseEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_REllipseEntity.getIdStatic()))) {

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
            qWarning("REllipseEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new REllipseEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, REllipseEntity);
  }

  
  else {
    
        print("REllipseEntity(): wrong number / type of arguments");
      
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

      //REllipseEntity.prototype = new REllipseEntity_BaseJs(engine);
      //REllipseEntity.prototype = new REllipseEntity_Wrapper(engine);
      REllipseEntity.prototype = new Object();

      REllipseEntity.prototype.toString = function() {
          //return "REllipseEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "REllipseEntity [JS]";
        };
      REllipseEntity.getObjectType = function() {
        return RJSType_REllipseEntity.getIdStatic();
      };

      REllipseEntity.prototype.getObjectType = function() {
        return RJSType_REllipseEntity.getIdStatic();
      };

      REllipseEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_REllipseEntity.getIdStatic()) {
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
        REllipseEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        REllipseEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        REllipseEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        REllipseEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        REllipseEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        REllipseEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        REllipseEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        REllipseEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        REllipseEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        REllipseEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        REllipseEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        REllipseEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        REllipseEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        REllipseEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        REllipseEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        REllipseEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        REllipseEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        REllipseEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        REllipseEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        REllipseEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        REllipseEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        REllipseEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        REllipseEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        REllipseEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        REllipseEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        REllipseEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        REllipseEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        REllipseEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        REllipseEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        REllipseEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        REllipseEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        REllipseEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        REllipseEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        REllipseEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        REllipseEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        REllipseEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        REllipseEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        REllipseEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        REllipseEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        REllipseEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        REllipseEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        REllipseEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        REllipseEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        REllipseEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        REllipseEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        REllipseEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        REllipseEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        REllipseEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        REllipseEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        REllipseEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        REllipseEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        REllipseEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        REllipseEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        REllipseEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        REllipseEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        REllipseEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        REllipseEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        REllipseEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        REllipseEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        REllipseEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        REllipseEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        REllipseEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        REllipseEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        REllipseEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        REllipseEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        REllipseEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        REllipseEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        REllipseEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        REllipseEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        REllipseEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        REllipseEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        REllipseEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        REllipseEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        REllipseEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        REllipseEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        REllipseEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        REllipseEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        REllipseEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        REllipseEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        REllipseEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        REllipseEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        REllipseEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        REllipseEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        REllipseEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        REllipseEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        REllipseEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        REllipseEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        REllipseEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        REllipseEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        REllipseEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        REllipseEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        REllipseEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        REllipseEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        REllipseEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        REllipseEntity.prototype.move = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        REllipseEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        REllipseEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        REllipseEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        REllipseEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        REllipseEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        REllipseEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        REllipseEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        REllipseEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        REllipseEntity.prototype.update = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        REllipseEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        REllipseEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        REllipseEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        REllipseEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        REllipseEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        REllipseEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        REllipseEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        REllipseEntity.prototype.init = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        REllipseEntity.prototype.getRtti = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        REllipseEntity.prototype.getStaticPropertyTypeIds = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getStaticPropertyTypeIds");
          return this.__PROXY__.getStaticPropertyTypeIds(...args);
        };
    
        // function 
        REllipseEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        REllipseEntity.prototype.setShape = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.setShape");
          return this.__PROXY__.setShape(...args);
        };
    
        // function 
        REllipseEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        REllipseEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        REllipseEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        REllipseEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        REllipseEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        REllipseEntity.prototype.getCenter = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getCenter");
          return this.__PROXY__.getCenter(...args);
        };
    
        // function 
        REllipseEntity.prototype.getMajorPoint = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getMajorPoint");
          return this.__PROXY__.getMajorPoint(...args);
        };
    
        // function 
        REllipseEntity.prototype.getMajorRadius = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getMajorRadius");
          return this.__PROXY__.getMajorRadius(...args);
        };
    
        // function 
        REllipseEntity.prototype.getMinorRadius = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getMinorRadius");
          return this.__PROXY__.getMinorRadius(...args);
        };
    
        // function 
        REllipseEntity.prototype.getRatio = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getRatio");
          return this.__PROXY__.getRatio(...args);
        };
    
        // function 
        REllipseEntity.prototype.getAngle = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getAngle");
          return this.__PROXY__.getAngle(...args);
        };
    
        // function 
        REllipseEntity.prototype.setRatio = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.setRatio");
          return this.__PROXY__.setRatio(...args);
        };
    
        // function 
        REllipseEntity.prototype.getStartAngle = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getStartAngle");
          return this.__PROXY__.getStartAngle(...args);
        };
    
        // function 
        REllipseEntity.prototype.getStartParam = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getStartParam");
          return this.__PROXY__.getStartParam(...args);
        };
    
        // function 
        REllipseEntity.prototype.setStartParam = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.setStartParam");
          return this.__PROXY__.setStartParam(...args);
        };
    
        // function 
        REllipseEntity.prototype.getEndAngle = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getEndAngle");
          return this.__PROXY__.getEndAngle(...args);
        };
    
        // function 
        REllipseEntity.prototype.getEndParam = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getEndParam");
          return this.__PROXY__.getEndParam(...args);
        };
    
        // function 
        REllipseEntity.prototype.setEndParam = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.setEndParam");
          return this.__PROXY__.setEndParam(...args);
        };
    
        // function 
        REllipseEntity.prototype.getAngleLength = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getAngleLength");
          return this.__PROXY__.getAngleLength(...args);
        };
    
        // function 
        REllipseEntity.prototype.getAngleAt = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getAngleAt");
          return this.__PROXY__.getAngleAt(...args);
        };
    
        // function 
        REllipseEntity.prototype.isReversed = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.isReversed");
          return this.__PROXY__.isReversed(...args);
        };
    
        // function 
        REllipseEntity.prototype.setReversed = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.setReversed");
          return this.__PROXY__.setReversed(...args);
        };
    
        // function 
        REllipseEntity.prototype.getStartPoint = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getStartPoint");
          return this.__PROXY__.getStartPoint(...args);
        };
    
        // function 
        REllipseEntity.prototype.getEndPoint = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getEndPoint");
          return this.__PROXY__.getEndPoint(...args);
        };
    
        // function 
        REllipseEntity.prototype.isFullEllipse = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.isFullEllipse");
          return this.__PROXY__.isFullEllipse(...args);
        };
    
        // function 
        REllipseEntity.prototype.getDirection1 = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getDirection1");
          return this.__PROXY__.getDirection1(...args);
        };
    
        // function 
        REllipseEntity.prototype.getDirection2 = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getDirection2");
          return this.__PROXY__.getDirection2(...args);
        };
    
        // function 
        REllipseEntity.prototype.reverse = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.reverse");
          return this.__PROXY__.reverse(...args);
        };
    
        // function 
        REllipseEntity.prototype.getSideOfPoint = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getSideOfPoint");
          return this.__PROXY__.getSideOfPoint(...args);
        };
    
        // function 
        REllipseEntity.prototype.getParamTo = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getParamTo");
          return this.__PROXY__.getParamTo(...args);
        };
    
        // function 
        REllipseEntity.prototype.getTrimEnd = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getTrimEnd");
          return this.__PROXY__.getTrimEnd(...args);
        };
    
        // function 
        REllipseEntity.prototype.trimStartPoint = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.trimStartPoint");
          return this.__PROXY__.trimStartPoint(...args);
        };
    
        // function 
        REllipseEntity.prototype.trimEndPoint = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.trimEndPoint");
          return this.__PROXY__.trimEndPoint(...args);
        };
    
        // function 
        REllipseEntity.prototype.getLength = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getLength");
          return this.__PROXY__.getLength(...args);
        };
    
        // function 
        REllipseEntity.prototype.getSweep = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getSweep");
          return this.__PROXY__.getSweep(...args);
        };
    
        // function 
        REllipseEntity.prototype.getPointAt = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.getPointAt");
          return this.__PROXY__.getPointAt(...args);
        };
    
        // function 
        REllipseEntity.prototype.approximateWithSplines = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.approximateWithSplines");
          return this.__PROXY__.approximateWithSplines(...args);
        };
    
        // function 
        REllipseEntity.prototype.approximateWithArcs = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.approximateWithArcs");
          return this.__PROXY__.approximateWithArcs(...args);
        };
    
        // function 
        REllipseEntity.prototype.print = function(...args) 
          
        {
          //print("JS: REllipseEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

        // static function 
        REllipseEntity.init = function() 
          
        {
          //print("JS: REllipseEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return REllipseEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, REllipseEntity);
  }

  
  else {
    
        print("REllipseEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipseEntity.getRtti = function() 
          
        {
          //print("JS: REllipseEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return REllipseEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, REllipseEntity);
  }

  
  else {
    
        print("REllipseEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REllipseEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: REllipseEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return REllipseEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, REllipseEntity);
  }

  
  else {
    
        print("REllipseEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      REllipseEntity.INVALID_ID = 
  REllipseEntity_WrapperSingletonInstance.INVALID_ID;
REllipseEntity.INVALID_HANDLE = 
  REllipseEntity_WrapperSingletonInstance.INVALID_HANDLE;
REllipseEntity.PropertySelected = 
  REllipseEntity_WrapperSingletonInstance.PropertySelected;
REllipseEntity.PropertyInvisible = 
  REllipseEntity_WrapperSingletonInstance.PropertyInvisible;
REllipseEntity.PropertyParentId = 
  REllipseEntity_WrapperSingletonInstance.PropertyParentId;
REllipseEntity.PropertyMinX = 
  REllipseEntity_WrapperSingletonInstance.PropertyMinX;
REllipseEntity.PropertyMinY = 
  REllipseEntity_WrapperSingletonInstance.PropertyMinY;
REllipseEntity.PropertyMaxX = 
  REllipseEntity_WrapperSingletonInstance.PropertyMaxX;
REllipseEntity.PropertyMaxY = 
  REllipseEntity_WrapperSingletonInstance.PropertyMaxY;
REllipseEntity.PropertySizeX = 
  REllipseEntity_WrapperSingletonInstance.PropertySizeX;
REllipseEntity.PropertySizeY = 
  REllipseEntity_WrapperSingletonInstance.PropertySizeY;
REllipseEntity.PropertyCustom = 
  REllipseEntity_WrapperSingletonInstance.PropertyCustom;
REllipseEntity.PropertyHandle = 
  REllipseEntity_WrapperSingletonInstance.PropertyHandle;
REllipseEntity.PropertyProtected = 
  REllipseEntity_WrapperSingletonInstance.PropertyProtected;
REllipseEntity.PropertyWorkingSet = 
  REllipseEntity_WrapperSingletonInstance.PropertyWorkingSet;
REllipseEntity.PropertyType = 
  REllipseEntity_WrapperSingletonInstance.PropertyType;
REllipseEntity.PropertyBlock = 
  REllipseEntity_WrapperSingletonInstance.PropertyBlock;
REllipseEntity.PropertyLayer = 
  REllipseEntity_WrapperSingletonInstance.PropertyLayer;
REllipseEntity.PropertyLinetype = 
  REllipseEntity_WrapperSingletonInstance.PropertyLinetype;
REllipseEntity.PropertyLinetypeScale = 
  REllipseEntity_WrapperSingletonInstance.PropertyLinetypeScale;
REllipseEntity.PropertyLineweight = 
  REllipseEntity_WrapperSingletonInstance.PropertyLineweight;
REllipseEntity.PropertyColor = 
  REllipseEntity_WrapperSingletonInstance.PropertyColor;
REllipseEntity.PropertyDisplayedColor = 
  REllipseEntity_WrapperSingletonInstance.PropertyDisplayedColor;
REllipseEntity.PropertyDrawOrder = 
  REllipseEntity_WrapperSingletonInstance.PropertyDrawOrder;
REllipseEntity.PropertyCenterX = 
  REllipseEntity_WrapperSingletonInstance.PropertyCenterX;
REllipseEntity.PropertyCenterY = 
  REllipseEntity_WrapperSingletonInstance.PropertyCenterY;
REllipseEntity.PropertyCenterZ = 
  REllipseEntity_WrapperSingletonInstance.PropertyCenterZ;
REllipseEntity.PropertyMajorPointX = 
  REllipseEntity_WrapperSingletonInstance.PropertyMajorPointX;
REllipseEntity.PropertyMajorPointY = 
  REllipseEntity_WrapperSingletonInstance.PropertyMajorPointY;
REllipseEntity.PropertyMajorPointZ = 
  REllipseEntity_WrapperSingletonInstance.PropertyMajorPointZ;
REllipseEntity.PropertyRatio = 
  REllipseEntity_WrapperSingletonInstance.PropertyRatio;
REllipseEntity.PropertyStartParam = 
  REllipseEntity_WrapperSingletonInstance.PropertyStartParam;
REllipseEntity.PropertyEndParam = 
  REllipseEntity_WrapperSingletonInstance.PropertyEndParam;
REllipseEntity.PropertyStartAngle = 
  REllipseEntity_WrapperSingletonInstance.PropertyStartAngle;
REllipseEntity.PropertyEndAngle = 
  REllipseEntity_WrapperSingletonInstance.PropertyEndAngle;
REllipseEntity.PropertyReversed = 
  REllipseEntity_WrapperSingletonInstance.PropertyReversed;
REllipseEntity.PropertyStartPointX = 
  REllipseEntity_WrapperSingletonInstance.PropertyStartPointX;
REllipseEntity.PropertyStartPointY = 
  REllipseEntity_WrapperSingletonInstance.PropertyStartPointY;
REllipseEntity.PropertyStartPointZ = 
  REllipseEntity_WrapperSingletonInstance.PropertyStartPointZ;
REllipseEntity.PropertyEndPointX = 
  REllipseEntity_WrapperSingletonInstance.PropertyEndPointX;
REllipseEntity.PropertyEndPointY = 
  REllipseEntity_WrapperSingletonInstance.PropertyEndPointY;
REllipseEntity.PropertyEndPointZ = 
  REllipseEntity_WrapperSingletonInstance.PropertyEndPointZ;
REllipseEntity.PropertyCircumference = 
  REllipseEntity_WrapperSingletonInstance.PropertyCircumference;


      // copy function:
      //REllipseEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //REllipseEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      REllipseEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      