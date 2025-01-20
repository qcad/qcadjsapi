
      // auto generated
      //var self;

      // class constructor:
      function RBlockReferenceEntity() {
        

        // should be RBlockReferenceEntity_BaseJs.call(this, engine):
        //RBlockReferenceEntity.prototype = new RBlockReferenceEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RBlockReferenceEntity.getIdStatic()))) {

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
            qWarning("RBlockReferenceEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RBlockReferenceEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RBlockReferenceEntity);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RBlockReferenceEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RBlockReferenceEntity);
  }

  
  else {
    
        print("RBlockReferenceEntity(): wrong number / type of arguments");
      
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

      //RBlockReferenceEntity.prototype = new RBlockReferenceEntity_BaseJs(engine);
      //RBlockReferenceEntity.prototype = new RBlockReferenceEntity_Wrapper(engine);
      RBlockReferenceEntity.prototype = new Object();

      RBlockReferenceEntity.prototype.toString = function() {
          //return "RBlockReferenceEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RBlockReferenceEntity [JS]";
        };
      RBlockReferenceEntity.getObjectType = function() {
        return RJSType_RBlockReferenceEntity.getIdStatic();
      };

      RBlockReferenceEntity.prototype.getObjectType = function() {
        return RJSType_RBlockReferenceEntity.getIdStatic();
      };

      RBlockReferenceEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RBlockReferenceEntity.getIdStatic()) {
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
        RBlockReferenceEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.move = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.print = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.init = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getStaticPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getStaticPropertyTypeIds");
          return this.__PROXY__.getStaticPropertyTypeIds(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getPosition = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getPosition");
          return this.__PROXY__.getPosition(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setPosition = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setPosition");
          return this.__PROXY__.setPosition(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getScaleFactors = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getScaleFactors");
          return this.__PROXY__.getScaleFactors(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setScaleFactors = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setScaleFactors");
          return this.__PROXY__.setScaleFactors(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getRotation = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getRotation");
          return this.__PROXY__.getRotation(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setRotation = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setRotation");
          return this.__PROXY__.setRotation(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getColumnCount = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getColumnCount");
          return this.__PROXY__.getColumnCount(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setColumnCount = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setColumnCount");
          return this.__PROXY__.setColumnCount(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getRowCount = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getRowCount");
          return this.__PROXY__.getRowCount(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setRowCount = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setRowCount");
          return this.__PROXY__.setRowCount(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getColumnSpacing = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getColumnSpacing");
          return this.__PROXY__.getColumnSpacing(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setColumnSpacing = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setColumnSpacing");
          return this.__PROXY__.setColumnSpacing(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getRowSpacing = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getRowSpacing");
          return this.__PROXY__.getRowSpacing(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setRowSpacing = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setRowSpacing");
          return this.__PROXY__.setRowSpacing(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setReferencedBlockId = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setReferencedBlockId");
          return this.__PROXY__.setReferencedBlockId(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.setReferencedBlockName = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.setReferencedBlockName");
          return this.__PROXY__.setReferencedBlockName(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getReferencedBlockId = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getReferencedBlockId");
          return this.__PROXY__.getReferencedBlockId(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.getReferencedBlockName = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.getReferencedBlockName");
          return this.__PROXY__.getReferencedBlockName(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.update = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.queryEntity = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.queryEntity");
          return this.__PROXY__.queryEntity(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.applyTransformationTo = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.applyTransformationTo");
          return this.__PROXY__.applyTransformationTo(...args);
        };
    
        // function 
        RBlockReferenceEntity.prototype.mapToBlock = function(...args) 
          
        {
          //print("JS: RBlockReferenceEntity.prototype.mapToBlock");
          return this.__PROXY__.mapToBlock(...args);
        };
    

      // static functions:
      

        // static function 
        RBlockReferenceEntity.init = function() 
          
        {
          //print("JS: RBlockReferenceEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RBlockReferenceEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RBlockReferenceEntity);
  }

  
  else {
    
        print("RBlockReferenceEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RBlockReferenceEntity.getRtti = function() 
          
        {
          //print("JS: RBlockReferenceEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RBlockReferenceEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RBlockReferenceEntity);
  }

  
  else {
    
        print("RBlockReferenceEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RBlockReferenceEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RBlockReferenceEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RBlockReferenceEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RBlockReferenceEntity);
  }

  
  else {
    
        print("RBlockReferenceEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RBlockReferenceEntity.INVALID_ID = 
  RBlockReferenceEntity_WrapperSingletonInstance.INVALID_ID;
RBlockReferenceEntity.INVALID_HANDLE = 
  RBlockReferenceEntity_WrapperSingletonInstance.INVALID_HANDLE;
RBlockReferenceEntity.PropertySelected = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertySelected;
RBlockReferenceEntity.PropertyInvisible = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyInvisible;
RBlockReferenceEntity.PropertyParentId = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyParentId;
RBlockReferenceEntity.PropertyMinX = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyMinX;
RBlockReferenceEntity.PropertyMinY = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyMinY;
RBlockReferenceEntity.PropertyMaxX = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyMaxX;
RBlockReferenceEntity.PropertyMaxY = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyMaxY;
RBlockReferenceEntity.PropertySizeX = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertySizeX;
RBlockReferenceEntity.PropertySizeY = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertySizeY;
RBlockReferenceEntity.PropertyCustom = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyCustom;
RBlockReferenceEntity.PropertyHandle = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyHandle;
RBlockReferenceEntity.PropertyProtected = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyProtected;
RBlockReferenceEntity.PropertyWorkingSet = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyWorkingSet;
RBlockReferenceEntity.PropertyType = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyType;
RBlockReferenceEntity.PropertyBlock = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyBlock;
RBlockReferenceEntity.PropertyLayer = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyLayer;
RBlockReferenceEntity.PropertyLinetype = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyLinetype;
RBlockReferenceEntity.PropertyLinetypeScale = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RBlockReferenceEntity.PropertyLineweight = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyLineweight;
RBlockReferenceEntity.PropertyColor = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyColor;
RBlockReferenceEntity.PropertyDisplayedColor = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RBlockReferenceEntity.PropertyDrawOrder = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyDrawOrder;
RBlockReferenceEntity.PropertyReferencedBlock = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyReferencedBlock;
RBlockReferenceEntity.PropertyPositionX = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyPositionX;
RBlockReferenceEntity.PropertyPositionY = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyPositionY;
RBlockReferenceEntity.PropertyPositionZ = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyPositionZ;
RBlockReferenceEntity.PropertyScaleX = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyScaleX;
RBlockReferenceEntity.PropertyScaleY = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyScaleY;
RBlockReferenceEntity.PropertyScaleZ = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyScaleZ;
RBlockReferenceEntity.PropertyRotation = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyRotation;
RBlockReferenceEntity.PropertyColumnCount = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyColumnCount;
RBlockReferenceEntity.PropertyRowCount = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyRowCount;
RBlockReferenceEntity.PropertyColumnSpacing = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyColumnSpacing;
RBlockReferenceEntity.PropertyRowSpacing = 
  RBlockReferenceEntity_WrapperSingletonInstance.PropertyRowSpacing;


      // copy function:
      //RBlockReferenceEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RBlockReferenceEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RBlockReferenceEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      