
      // auto generated
      //var self;

      // class constructor:
      function RDimOrdinateEntity() {
        

        // should be RDimOrdinateEntity_BaseJs.call(this, engine):
        //RDimOrdinateEntity.prototype = new RDimOrdinateEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimOrdinateEntity.getIdStatic()))) {

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
            qWarning("RDimOrdinateEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RDimOrdinateEntity_Wrapper(
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

      

        //copyProperties(this, wrapper, RDimOrdinateEntity);
  }

  
  else {
    
        print("RDimOrdinateEntity(): wrong number / type of arguments");
      
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

      //RDimOrdinateEntity.prototype = new RDimOrdinateEntity_BaseJs(engine);
      //RDimOrdinateEntity.prototype = new RDimOrdinateEntity_Wrapper(engine);
      RDimOrdinateEntity.prototype = new Object();

      RDimOrdinateEntity.prototype.toString = function() {
          //return "RDimOrdinateEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimOrdinateEntity [JS]";
        };
      RDimOrdinateEntity.getObjectType = function() {
        return RJSType_RDimOrdinateEntity.getIdStatic();
      };

      RDimOrdinateEntity.prototype.getObjectType = function() {
        return RJSType_RDimOrdinateEntity.getIdStatic();
      };

      RDimOrdinateEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimOrdinateEntity.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_REntity.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RDimensionEntity.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RDimOrdinateEntity.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getId = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.dump = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.validate = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setId = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getType = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.isValid = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.isSane = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.isSelectable = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.isSelectable");
          return this.__PROXY__.isSelectable(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setColor = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getColor = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.to2D = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setZ = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getHull = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getClosestSimpleShape = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getClosestSimpleShape");
          return this.__PROXY__.getClosestSimpleShape(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.isInside = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getIntersectionPointsWithShape = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getIntersectionPointsWithShape");
          return this.__PROXY__.getIntersectionPointsWithShape(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.move = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.rotate = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.scale = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.scaleNonUniform = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.scaleNonUniform");
          return this.__PROXY__.scaleNonUniform(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setViewportContext = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setViewportContext");
          return this.__PROXY__.setViewportContext(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.mirror = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.stretch = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.update = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.isVisible = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.isVisible");
          return this.__PROXY__.isVisible(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.isEditable = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.isEditable");
          return this.__PROXY__.isEditable(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.isInWorkingSet = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.isInWorkingSet");
          return this.__PROXY__.isInWorkingSet(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.exportEntity = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.exportEntity");
          return this.__PROXY__.exportEntity(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.clearStyleOverrides = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.clearStyleOverrides");
          return this.__PROXY__.clearStyleOverrides(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setDefinitionPoint");
          return this.__PROXY__.setDefinitionPoint(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getDefinitionPoint");
          return this.__PROXY__.getDefinitionPoint(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setText = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setText");
          return this.__PROXY__.setText(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getText = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getText");
          return this.__PROXY__.getText(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getMeasurement = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getMeasurement");
          return this.__PROXY__.getMeasurement(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getTextData = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getTextData");
          return this.__PROXY__.getTextData(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.updateBoundingBox = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.updateBoundingBox");
          return this.__PROXY__.updateBoundingBox(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.updateTextPositionCenter = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.updateTextPositionCenter");
          return this.__PROXY__.updateTextPositionCenter(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.updateTextData = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.updateTextData");
          return this.__PROXY__.updateTextData(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.updateShapes = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.updateShapes");
          return this.__PROXY__.updateShapes(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setTextPosition = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setTextPosition");
          return this.__PROXY__.setTextPosition(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getTextPosition = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getTextPosition");
          return this.__PROXY__.getTextPosition(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setFontName = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setFontName");
          return this.__PROXY__.setFontName(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getFontName = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getFontName");
          return this.__PROXY__.getFontName(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.hasCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.hasCustomTextPosition");
          return this.__PROXY__.hasCustomTextPosition(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setCustomTextPosition");
          return this.__PROXY__.setCustomTextPosition(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getLineSpacingStyle");
          return this.__PROXY__.getLineSpacingStyle(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getLineSpacingFactor");
          return this.__PROXY__.getLineSpacingFactor(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getTextRotation = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getTextRotation");
          return this.__PROXY__.getTextRotation(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getLinearFactor = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getLinearFactor");
          return this.__PROXY__.getLinearFactor(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setLinearFactor = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setLinearFactor");
          return this.__PROXY__.setLinearFactor(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getDimscale = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getDimscale");
          return this.__PROXY__.getDimscale(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setDimscale = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setDimscale");
          return this.__PROXY__.setDimscale(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getDimBlockName = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getDimBlockName");
          return this.__PROXY__.getDimBlockName(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.hasDimensionBlockReference = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.hasDimensionBlockReference");
          return this.__PROXY__.hasDimensionBlockReference(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.isArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.isArrow1Flipped");
          return this.__PROXY__.isArrow1Flipped(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setArrow1Flipped");
          return this.__PROXY__.setArrow1Flipped(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.isArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.isArrow2Flipped");
          return this.__PROXY__.isArrow2Flipped(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setArrow2Flipped");
          return this.__PROXY__.setArrow2Flipped(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.isExtLineFix = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.isExtLineFix");
          return this.__PROXY__.isExtLineFix(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setExtLineFix = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setExtLineFix");
          return this.__PROXY__.setExtLineFix(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getExtLineFixLength");
          return this.__PROXY__.getExtLineFixLength(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setExtLineFixLength");
          return this.__PROXY__.setExtLineFixLength(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.hasOverride = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.hasOverride");
          return this.__PROXY__.hasOverride(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.init = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getStaticPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getStaticPropertyTypeIds");
          return this.__PROXY__.getStaticPropertyTypeIds(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.clone = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getData = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getData");
          return this.__PROXY__.getData(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setData = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setData");
          return this.__PROXY__.setData(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setLeaderEndPoint = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setLeaderEndPoint");
          return this.__PROXY__.setLeaderEndPoint(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getLeaderEndPoint = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getLeaderEndPoint");
          return this.__PROXY__.getLeaderEndPoint(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setDefiningPoint = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setDefiningPoint");
          return this.__PROXY__.setDefiningPoint(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.getDefiningPoint = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.getDefiningPoint");
          return this.__PROXY__.getDefiningPoint(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setMeasuringXAxis = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setMeasuringXAxis");
          return this.__PROXY__.setMeasuringXAxis(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.setMeasuringYAxis = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.setMeasuringYAxis");
          return this.__PROXY__.setMeasuringYAxis(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.isMeasuringXAxis = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.isMeasuringXAxis");
          return this.__PROXY__.isMeasuringXAxis(...args);
        };
    
        // function 
        RDimOrdinateEntity.prototype.print = function(...args) 
          
        {
          //print("JS: RDimOrdinateEntity.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

        // static function 
        RDimOrdinateEntity.init = function() 
          
        {
          //print("JS: RDimOrdinateEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimOrdinateEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RDimOrdinateEntity);
  }

  
  else {
    
        print("RDimOrdinateEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimOrdinateEntity.getRtti = function() 
          
        {
          //print("JS: RDimOrdinateEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimOrdinateEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RDimOrdinateEntity);
  }

  
  else {
    
        print("RDimOrdinateEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimOrdinateEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RDimOrdinateEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimOrdinateEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RDimOrdinateEntity);
  }

  
  else {
    
        print("RDimOrdinateEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RDimOrdinateEntity.INVALID_ID = 
  RDimOrdinateEntity_WrapperSingletonInstance.INVALID_ID;
RDimOrdinateEntity.INVALID_HANDLE = 
  RDimOrdinateEntity_WrapperSingletonInstance.INVALID_HANDLE;
RDimOrdinateEntity.PropertySelected = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertySelected;
RDimOrdinateEntity.PropertyInvisible = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyInvisible;
RDimOrdinateEntity.PropertyParentId = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyParentId;
RDimOrdinateEntity.PropertyMinX = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyMinX;
RDimOrdinateEntity.PropertyMinY = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyMinY;
RDimOrdinateEntity.PropertyMaxX = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyMaxX;
RDimOrdinateEntity.PropertyMaxY = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyMaxY;
RDimOrdinateEntity.PropertySizeX = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertySizeX;
RDimOrdinateEntity.PropertySizeY = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertySizeY;
RDimOrdinateEntity.PropertyDefinitionPointX = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDefinitionPointX;
RDimOrdinateEntity.PropertyDefinitionPointY = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDefinitionPointY;
RDimOrdinateEntity.PropertyDefinitionPointZ = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDefinitionPointZ;
RDimOrdinateEntity.PropertyAutoTextPos = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyAutoTextPos;
RDimOrdinateEntity.PropertyArrow1Flipped = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyArrow1Flipped;
RDimOrdinateEntity.PropertyArrow2Flipped = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyArrow2Flipped;
RDimOrdinateEntity.PropertyExtLineFix = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyExtLineFix;
RDimOrdinateEntity.PropertyExtLineFixLength = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyExtLineFixLength;
RDimOrdinateEntity.PropertyAutoLabel = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyAutoLabel;
RDimOrdinateEntity.PropertyDimtxt = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimtxt;
RDimOrdinateEntity.PropertyDimgap = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimgap;
RDimOrdinateEntity.PropertyDimasz = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimasz;
RDimOrdinateEntity.PropertyDimexe = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimexe;
RDimOrdinateEntity.PropertyDimexo = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimexo;
RDimOrdinateEntity.PropertyDimtad = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimtad;
RDimOrdinateEntity.PropertyDimtih = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimtih;
RDimOrdinateEntity.PropertyDimtsz = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimtsz;
RDimOrdinateEntity.PropertyDimlunit = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimlunit;
RDimOrdinateEntity.PropertyDimdec = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimdec;
RDimOrdinateEntity.PropertyDimdsep = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimdsep;
RDimOrdinateEntity.PropertyDimzin = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimzin;
RDimOrdinateEntity.PropertyDimaunit = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimaunit;
RDimOrdinateEntity.PropertyDimadec = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimadec;
RDimOrdinateEntity.PropertyDimazin = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimazin;
RDimOrdinateEntity.PropertyArchTick = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyArchTick;
RDimOrdinateEntity.PropertyDimclrt = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimclrt;
RDimOrdinateEntity.PropertyCustom = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyCustom;
RDimOrdinateEntity.PropertyHandle = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyHandle;
RDimOrdinateEntity.PropertyProtected = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyProtected;
RDimOrdinateEntity.PropertyWorkingSet = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyWorkingSet;
RDimOrdinateEntity.PropertyType = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyType;
RDimOrdinateEntity.PropertyBlock = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyBlock;
RDimOrdinateEntity.PropertyLayer = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyLayer;
RDimOrdinateEntity.PropertyLinetype = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyLinetype;
RDimOrdinateEntity.PropertyLinetypeScale = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RDimOrdinateEntity.PropertyLineweight = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyLineweight;
RDimOrdinateEntity.PropertyColor = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyColor;
RDimOrdinateEntity.PropertyDisplayedColor = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RDimOrdinateEntity.PropertyDrawOrder = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDrawOrder;
RDimOrdinateEntity.PropertyMiddleOfTextX = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyMiddleOfTextX;
RDimOrdinateEntity.PropertyMiddleOfTextY = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyMiddleOfTextY;
RDimOrdinateEntity.PropertyMiddleOfTextZ = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyMiddleOfTextZ;
RDimOrdinateEntity.PropertyText = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyText;
RDimOrdinateEntity.PropertyUpperTolerance = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyUpperTolerance;
RDimOrdinateEntity.PropertyLowerTolerance = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyLowerTolerance;
RDimOrdinateEntity.PropertyMeasuredValue = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyMeasuredValue;
RDimOrdinateEntity.PropertyFontName = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyFontName;
RDimOrdinateEntity.PropertyDimscale = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimscale;
RDimOrdinateEntity.PropertyDimlfac = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimlfac;
RDimOrdinateEntity.PropertyDimBlockName = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimBlockName;
RDimOrdinateEntity.PropertyOriginX = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyOriginX;
RDimOrdinateEntity.PropertyOriginY = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyOriginY;
RDimOrdinateEntity.PropertyOriginZ = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyOriginZ;
RDimOrdinateEntity.PropertyOrdinate = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyOrdinate;
RDimOrdinateEntity.PropertyLeaderEndPointX = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyLeaderEndPointX;
RDimOrdinateEntity.PropertyLeaderEndPointY = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyLeaderEndPointY;
RDimOrdinateEntity.PropertyLeaderEndPointZ = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyLeaderEndPointZ;
RDimOrdinateEntity.PropertyDefiningPointX = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDefiningPointX;
RDimOrdinateEntity.PropertyDefiningPointY = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDefiningPointY;
RDimOrdinateEntity.PropertyDefiningPointZ = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDefiningPointZ;


      // copy function:
      //RDimOrdinateEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimOrdinateEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RDimOrdinateEntity.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      