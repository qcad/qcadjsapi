
      // auto generated
      //var self;

      // class constructor:
      function RPolylineEntity() {
        

        // should be RPolylineEntity_BaseJs.call(this, engine):
        //RPolylineEntity.prototype = new RPolylineEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPolylineEntity.getIdStatic()))) {

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
            qWarning("RPolylineEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RPolylineEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RPolylineEntity);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RPolylineEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RPolylineEntity);
  }

  
  else {
    
        print("RPolylineEntity(): wrong number / type of arguments");
      
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

      //RPolylineEntity.prototype = new RPolylineEntity_BaseJs(engine);
      //RPolylineEntity.prototype = new RPolylineEntity_Wrapper(engine);
      RPolylineEntity.prototype = new Object();

      RPolylineEntity.prototype.toString = function() {
          //return "RPolylineEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPolylineEntity [JS]";
        };
      RPolylineEntity.getObjectType = function() {
        return RJSType_RPolylineEntity.getIdStatic();
      };

      RPolylineEntity.prototype.getObjectType = function() {
        return RJSType_RPolylineEntity.getIdStatic();
      };

      RPolylineEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPolylineEntity.getIdStatic()) {
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
        RPolylineEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RPolylineEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RPolylineEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RPolylineEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RPolylineEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RPolylineEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RPolylineEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RPolylineEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RPolylineEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RPolylineEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RPolylineEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RPolylineEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RPolylineEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RPolylineEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RPolylineEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RPolylineEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RPolylineEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        RPolylineEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RPolylineEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RPolylineEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RPolylineEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        RPolylineEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RPolylineEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RPolylineEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        RPolylineEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RPolylineEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RPolylineEntity.prototype.move = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RPolylineEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RPolylineEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RPolylineEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        RPolylineEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        RPolylineEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RPolylineEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RPolylineEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RPolylineEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RPolylineEntity.prototype.update = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RPolylineEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RPolylineEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        RPolylineEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        RPolylineEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RPolylineEntity.prototype.print = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    
        // function 
        RPolylineEntity.prototype.init = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getStaticPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getStaticPropertyTypeIds");
          return this.__PROXY__.getStaticPropertyTypeIds(...args);
        };
    
        // function 
        RPolylineEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setShape = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setShape");
          return this.__PROXY__.setShape(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RPolylineEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getPolylineShape = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getPolylineShape");
          return this.__PROXY__.getPolylineShape(...args);
        };
    
        // function 
        RPolylineEntity.prototype.clear = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.clear");
          return this.__PROXY__.clear(...args);
        };
    
        // function 
        RPolylineEntity.prototype.normalize = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.normalize");
          return this.__PROXY__.normalize(...args);
        };
    
        // function 
        RPolylineEntity.prototype.countVertices = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.countVertices");
          return this.__PROXY__.countVertices(...args);
        };
    
        // function 
        RPolylineEntity.prototype.appendVertex = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.appendVertex");
          return this.__PROXY__.appendVertex(...args);
        };
    
        // function 
        RPolylineEntity.prototype.prependVertex = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.prependVertex");
          return this.__PROXY__.prependVertex(...args);
        };
    
        // function 
        RPolylineEntity.prototype.insertVertex = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.insertVertex");
          return this.__PROXY__.insertVertex(...args);
        };
    
        // function 
        RPolylineEntity.prototype.insertVertexAt = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.insertVertexAt");
          return this.__PROXY__.insertVertexAt(...args);
        };
    
        // function 
        RPolylineEntity.prototype.insertVerticesAtSelfIntersections = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.insertVerticesAtSelfIntersections");
          return this.__PROXY__.insertVerticesAtSelfIntersections(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getVertexAt = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getVertexAt");
          return this.__PROXY__.getVertexAt(...args);
        };
    
        // function 
        RPolylineEntity.prototype.removeLastVertex = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.removeLastVertex");
          return this.__PROXY__.removeLastVertex(...args);
        };
    
        // function 
        RPolylineEntity.prototype.removeVertex = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.removeVertex");
          return this.__PROXY__.removeVertex(...args);
        };
    
        // function 
        RPolylineEntity.prototype.countSegments = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.countSegments");
          return this.__PROXY__.countSegments(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getSegmentAt = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getSegmentAt");
          return this.__PROXY__.getSegmentAt(...args);
        };
    
        // function 
        RPolylineEntity.prototype.isArcSegmentAt = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.isArcSegmentAt");
          return this.__PROXY__.isArcSegmentAt(...args);
        };
    
        // function 
        RPolylineEntity.prototype.hasArcSegments = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.hasArcSegments");
          return this.__PROXY__.hasArcSegments(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getClosestSegment = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getClosestSegment");
          return this.__PROXY__.getClosestSegment(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getClosestVertex = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getClosestVertex");
          return this.__PROXY__.getClosestVertex(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getBulgeAt = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getBulgeAt");
          return this.__PROXY__.getBulgeAt(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setBulgeAt = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setBulgeAt");
          return this.__PROXY__.setBulgeAt(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getVertexAngle = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getVertexAngle");
          return this.__PROXY__.getVertexAngle(...args);
        };
    
        // function 
        RPolylineEntity.prototype.stripWidths = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.stripWidths");
          return this.__PROXY__.stripWidths(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setMinimumWidth");
          return this.__PROXY__.setMinimumWidth(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setGlobalWidth = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setGlobalWidth");
          return this.__PROXY__.setGlobalWidth(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setStartWidthAt = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setStartWidthAt");
          return this.__PROXY__.setStartWidthAt(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getStartWidthAt = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getStartWidthAt");
          return this.__PROXY__.getStartWidthAt(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setEndWidthAt = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setEndWidthAt");
          return this.__PROXY__.setEndWidthAt(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getEndWidthAt = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getEndWidthAt");
          return this.__PROXY__.getEndWidthAt(...args);
        };
    
        // function 
        RPolylineEntity.prototype.hasWidths = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.hasWidths");
          return this.__PROXY__.hasWidths(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setStartWidths = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setStartWidths");
          return this.__PROXY__.setStartWidths(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getStartWidths = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getStartWidths");
          return this.__PROXY__.getStartWidths(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setEndWidths = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setEndWidths");
          return this.__PROXY__.setEndWidths(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getEndWidths = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getEndWidths");
          return this.__PROXY__.getEndWidths(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getDirection1 = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getDirection1");
          return this.__PROXY__.getDirection1(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getDirection2 = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getDirection2");
          return this.__PROXY__.getDirection2(...args);
        };
    
        // function 
        RPolylineEntity.prototype.reverse = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.reverse");
          return this.__PROXY__.reverse(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getSideOfPoint = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getSideOfPoint");
          return this.__PROXY__.getSideOfPoint(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getEndPoint = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getEndPoint");
          return this.__PROXY__.getEndPoint(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getStartPoint = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getStartPoint");
          return this.__PROXY__.getStartPoint(...args);
        };
    
        // function 
        RPolylineEntity.prototype.relocateStartPoint = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.relocateStartPoint");
          return this.__PROXY__.relocateStartPoint(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setClosed = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setClosed");
          return this.__PROXY__.setClosed(...args);
        };
    
        // function 
        RPolylineEntity.prototype.isClosed = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.isClosed");
          return this.__PROXY__.isClosed(...args);
        };
    
        // function 
        RPolylineEntity.prototype.isGeometricallyClosed = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.isGeometricallyClosed");
          return this.__PROXY__.isGeometricallyClosed(...args);
        };
    
        // function 
        RPolylineEntity.prototype.autoClose = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.autoClose");
          return this.__PROXY__.autoClose(...args);
        };
    
        // function 
        RPolylineEntity.prototype.toLogicallyClosed = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.toLogicallyClosed");
          return this.__PROXY__.toLogicallyClosed(...args);
        };
    
        // function 
        RPolylineEntity.prototype.toLogicallyOpen = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.toLogicallyOpen");
          return this.__PROXY__.toLogicallyOpen(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getSelfIntersectionPoints = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getSelfIntersectionPoints");
          return this.__PROXY__.getSelfIntersectionPoints(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getOrientation = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getOrientation");
          return this.__PROXY__.getOrientation(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getArea = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getArea");
          return this.__PROXY__.getArea(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getLength = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getLength");
          return this.__PROXY__.getLength(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getLengthTo = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getLengthTo");
          return this.__PROXY__.getLengthTo(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getExploded = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getExploded");
          return this.__PROXY__.getExploded(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RPolylineEntity.prototype.toPainterPath = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.toPainterPath");
          return this.__PROXY__.toPainterPath(...args);
        };
    
        // function 
        RPolylineEntity.prototype.simplify = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.simplify");
          return this.__PROXY__.simplify(...args);
        };
    
        // function 
        RPolylineEntity.prototype.verifyTangency = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.verifyTangency");
          return this.__PROXY__.verifyTangency(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setPolylineGen = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setPolylineGen");
          return this.__PROXY__.setPolylineGen(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getPolylineGen = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getPolylineGen");
          return this.__PROXY__.getPolylineGen(...args);
        };
    
        // function 
        RPolylineEntity.prototype.setElevation = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.setElevation");
          return this.__PROXY__.setElevation(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getElevation = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getElevation");
          return this.__PROXY__.getElevation(...args);
        };
    
        // function 
        RPolylineEntity.prototype.isFlat = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.isFlat");
          return this.__PROXY__.isFlat(...args);
        };
    
        // function 
        RPolylineEntity.prototype.getTrimEnd = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.getTrimEnd");
          return this.__PROXY__.getTrimEnd(...args);
        };
    
        // function 
        RPolylineEntity.prototype.trimStartPoint = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.trimStartPoint");
          return this.__PROXY__.trimStartPoint(...args);
        };
    
        // function 
        RPolylineEntity.prototype.trimEndPoint = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.trimEndPoint");
          return this.__PROXY__.trimEndPoint(...args);
        };
    
        // function 
        RPolylineEntity.prototype.morph = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.morph");
          return this.__PROXY__.morph(...args);
        };
    
        // function 
        RPolylineEntity.prototype.contains = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.contains");
          return this.__PROXY__.contains(...args);
        };
    
        // function 
        RPolylineEntity.prototype.containsShape = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.containsShape");
          return this.__PROXY__.containsShape(...args);
        };
    
        // function 
        RPolylineEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: RPolylineEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    

      // static functions:
      

        // static function 
        RPolylineEntity.init = function() 
          
        {
          //print("JS: RPolylineEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPolylineEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RPolylineEntity);
  }

  
  else {
    
        print("RPolylineEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolylineEntity.getRtti = function() 
          
        {
          //print("JS: RPolylineEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPolylineEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RPolylineEntity);
  }

  
  else {
    
        print("RPolylineEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPolylineEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RPolylineEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPolylineEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RPolylineEntity);
  }

  
  else {
    
        print("RPolylineEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RPolylineEntity.INVALID_ID = 
  RPolylineEntity_WrapperSingletonInstance.INVALID_ID;
RPolylineEntity.INVALID_HANDLE = 
  RPolylineEntity_WrapperSingletonInstance.INVALID_HANDLE;
RPolylineEntity.PropertySelected = 
  RPolylineEntity_WrapperSingletonInstance.PropertySelected;
RPolylineEntity.PropertyInvisible = 
  RPolylineEntity_WrapperSingletonInstance.PropertyInvisible;
RPolylineEntity.PropertyParentId = 
  RPolylineEntity_WrapperSingletonInstance.PropertyParentId;
RPolylineEntity.PropertyMinX = 
  RPolylineEntity_WrapperSingletonInstance.PropertyMinX;
RPolylineEntity.PropertyMinY = 
  RPolylineEntity_WrapperSingletonInstance.PropertyMinY;
RPolylineEntity.PropertyMaxX = 
  RPolylineEntity_WrapperSingletonInstance.PropertyMaxX;
RPolylineEntity.PropertyMaxY = 
  RPolylineEntity_WrapperSingletonInstance.PropertyMaxY;
RPolylineEntity.PropertySizeX = 
  RPolylineEntity_WrapperSingletonInstance.PropertySizeX;
RPolylineEntity.PropertySizeY = 
  RPolylineEntity_WrapperSingletonInstance.PropertySizeY;
RPolylineEntity.PropertyCustom = 
  RPolylineEntity_WrapperSingletonInstance.PropertyCustom;
RPolylineEntity.PropertyHandle = 
  RPolylineEntity_WrapperSingletonInstance.PropertyHandle;
RPolylineEntity.PropertyProtected = 
  RPolylineEntity_WrapperSingletonInstance.PropertyProtected;
RPolylineEntity.PropertyWorkingSet = 
  RPolylineEntity_WrapperSingletonInstance.PropertyWorkingSet;
RPolylineEntity.PropertyType = 
  RPolylineEntity_WrapperSingletonInstance.PropertyType;
RPolylineEntity.PropertyBlock = 
  RPolylineEntity_WrapperSingletonInstance.PropertyBlock;
RPolylineEntity.PropertyLayer = 
  RPolylineEntity_WrapperSingletonInstance.PropertyLayer;
RPolylineEntity.PropertyLinetype = 
  RPolylineEntity_WrapperSingletonInstance.PropertyLinetype;
RPolylineEntity.PropertyLinetypeScale = 
  RPolylineEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RPolylineEntity.PropertyLineweight = 
  RPolylineEntity_WrapperSingletonInstance.PropertyLineweight;
RPolylineEntity.PropertyColor = 
  RPolylineEntity_WrapperSingletonInstance.PropertyColor;
RPolylineEntity.PropertyDisplayedColor = 
  RPolylineEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RPolylineEntity.PropertyDrawOrder = 
  RPolylineEntity_WrapperSingletonInstance.PropertyDrawOrder;
RPolylineEntity.PropertyClosed = 
  RPolylineEntity_WrapperSingletonInstance.PropertyClosed;
RPolylineEntity.PropertyPolylineGen = 
  RPolylineEntity_WrapperSingletonInstance.PropertyPolylineGen;
RPolylineEntity.PropertyVertexNX = 
  RPolylineEntity_WrapperSingletonInstance.PropertyVertexNX;
RPolylineEntity.PropertyVertexNY = 
  RPolylineEntity_WrapperSingletonInstance.PropertyVertexNY;
RPolylineEntity.PropertyVertexNZ = 
  RPolylineEntity_WrapperSingletonInstance.PropertyVertexNZ;
RPolylineEntity.PropertyBulgeN = 
  RPolylineEntity_WrapperSingletonInstance.PropertyBulgeN;
RPolylineEntity.PropertyAngleN = 
  RPolylineEntity_WrapperSingletonInstance.PropertyAngleN;
RPolylineEntity.PropertyStartWidthN = 
  RPolylineEntity_WrapperSingletonInstance.PropertyStartWidthN;
RPolylineEntity.PropertyEndWidthN = 
  RPolylineEntity_WrapperSingletonInstance.PropertyEndWidthN;
RPolylineEntity.PropertyGlobalWidth = 
  RPolylineEntity_WrapperSingletonInstance.PropertyGlobalWidth;
RPolylineEntity.PropertyOrientation = 
  RPolylineEntity_WrapperSingletonInstance.PropertyOrientation;
RPolylineEntity.PropertyLength = 
  RPolylineEntity_WrapperSingletonInstance.PropertyLength;
RPolylineEntity.PropertyTotalLength = 
  RPolylineEntity_WrapperSingletonInstance.PropertyTotalLength;
RPolylineEntity.PropertyArea = 
  RPolylineEntity_WrapperSingletonInstance.PropertyArea;
RPolylineEntity.PropertyTotalArea = 
  RPolylineEntity_WrapperSingletonInstance.PropertyTotalArea;
RPolylineEntity.PropertyBaseAngle = 
  RPolylineEntity_WrapperSingletonInstance.PropertyBaseAngle;
RPolylineEntity.PropertySize1 = 
  RPolylineEntity_WrapperSingletonInstance.PropertySize1;
RPolylineEntity.PropertySize2 = 
  RPolylineEntity_WrapperSingletonInstance.PropertySize2;
RPolylineEntity.PropertyElevation = 
  RPolylineEntity_WrapperSingletonInstance.PropertyElevation;


      // copy function:
      //RPolylineEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPolylineEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RPolylineEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      