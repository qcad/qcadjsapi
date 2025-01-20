
      // auto generated
      //var self;

      // class constructor:
      function REntityData() {
        

        // should be REntityData_BaseJs.call(this, engine):
        //REntityData.prototype = new REntityData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_REntityData.getIdStatic()))) {

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
            qWarning("REntityData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("REntityData.js: No constructor found for class REntityData");
            
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

      //REntityData.prototype = new REntityData_BaseJs(engine);
      //REntityData.prototype = new REntityData_Wrapper(engine);
      REntityData.prototype = new Object();

      REntityData.prototype.toString = function() {
          //return "REntityData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "REntityData [JS]";
        };
      REntityData.getObjectType = function() {
        return RJSType_REntityData.getIdStatic();
      };

      REntityData.prototype.getObjectType = function() {
        return RJSType_REntityData.getIdStatic();
      };

      REntityData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_REntityData.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        REntityData.prototype.getDocument = function(...args) 
          
        {
          //print("JS: REntityData.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        REntityData.prototype.setDocument = function(...args) 
          
        {
          //print("JS: REntityData.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        REntityData.prototype.getType = function(...args) 
          
        {
          //print("JS: REntityData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        REntityData.prototype.isPointType = function(...args) 
          
        {
          //print("JS: REntityData.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        REntityData.prototype.isValid = function(...args) 
          
        {
          //print("JS: REntityData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        REntityData.prototype.isSane = function(...args) 
          
        {
          //print("JS: REntityData.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        REntityData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: REntityData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        REntityData.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: REntityData.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        REntityData.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: REntityData.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        REntityData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: REntityData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        REntityData.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: REntityData.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        REntityData.prototype.to2D = function(...args) 
          
        {
          //print("JS: REntityData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        REntityData.prototype.setZ = function(...args) 
          
        {
          //print("JS: REntityData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        REntityData.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: REntityData.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        REntityData.prototype.getHull = function(...args) 
          
        {
          //print("JS: REntityData.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        REntityData.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: REntityData.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        REntityData.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: REntityData.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        REntityData.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: REntityData.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        REntityData.prototype.isSelected = function(...args) 
          
        {
          //print("JS: REntityData.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        REntityData.prototype.setSelected = function(...args) 
          
        {
          //print("JS: REntityData.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        REntityData.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: REntityData.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        REntityData.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: REntityData.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        REntityData.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: REntityData.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        REntityData.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: REntityData.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        REntityData.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: REntityData.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        REntityData.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: REntityData.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        REntityData.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: REntityData.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        REntityData.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: REntityData.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        REntityData.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: REntityData.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        REntityData.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: REntityData.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        REntityData.prototype.setParentId = function(...args) 
          
        {
          //print("JS: REntityData.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        REntityData.prototype.getParentId = function(...args) 
          
        {
          //print("JS: REntityData.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        REntityData.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: REntityData.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        REntityData.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: REntityData.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        REntityData.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: REntityData.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        REntityData.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: REntityData.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        REntityData.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: REntityData.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        REntityData.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: REntityData.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        REntityData.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: REntityData.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        REntityData.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: REntityData.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        REntityData.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: REntityData.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        REntityData.prototype.setColor = function(...args) 
          
        {
          //print("JS: REntityData.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        REntityData.prototype.getColor = function(...args) 
          
        {
          //print("JS: REntityData.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        REntityData.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: REntityData.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        REntityData.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: REntityData.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        REntityData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: REntityData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        REntityData.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: REntityData.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        REntityData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: REntityData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        REntityData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: REntityData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        REntityData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: REntityData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        REntityData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: REntityData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        REntityData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: REntityData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        REntityData.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: REntityData.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        REntityData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: REntityData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        REntityData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: REntityData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        REntityData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: REntityData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        REntityData.prototype.isInside = function(...args) 
          
        {
          //print("JS: REntityData.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        REntityData.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: REntityData.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        REntityData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: REntityData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        REntityData.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: REntityData.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        REntityData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: REntityData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        REntityData.prototype.move = function(...args) 
          
        {
          //print("JS: REntityData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        REntityData.prototype.rotate = function(...args) 
          
        {
          //print("JS: REntityData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        REntityData.prototype.scale = function(...args) 
          
        {
          //print("JS: REntityData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        REntityData.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: REntityData.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        REntityData.prototype.mirror = function(...args) 
          
        {
          //print("JS: REntityData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        REntityData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: REntityData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        REntityData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: REntityData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        REntityData.prototype.stretch = function(...args) 
          
        {
          //print("JS: REntityData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        REntityData.prototype.update = function(...args) 
          
        {
          //print("JS: REntityData.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        REntityData.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: REntityData.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        REntityData.prototype.getDefaultDrawOrder = function(...args) 
          
        {
          //print("JS: REntityData.prototype.getDefaultDrawOrder");
          return this.__PROXY__.getDefaultDrawOrder(...args);
        };
    

      // static functions:
      

        // static function 
        REntityData.getDefaultDrawOrder = function() 
          
        {
          //print("JS: REntityData.getDefaultDrawOrder");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return REntityData_WrapperSingletonInstance.getDefaultDrawOrder(
                  
                );
              

        //copyProperties(this, wrapper, REntityData);
  }

  
  else {
    
        print("REntityData.getDefaultDrawOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //REntityData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //REntityData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      REntityData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      