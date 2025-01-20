
      // auto generated
      //var self;

      // class constructor:
      function RPointData() {
        

        // should be RPointData_BaseJs.call(this, engine):
        //RPointData.prototype = new RPointData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPointData.getIdStatic()))) {

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
            qWarning("RPointData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RPointData_Wrapper(
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

      

        //copyProperties(this, wrapper, RPointData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RPointData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPointData);
  }

  
  else {
    
        print("RPointData(): wrong number / type of arguments");
      
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

        
              // define property setters/getters:
              Object.defineProperty(this, 'position', {
                  get() {
                      return this.__PROXY__.getPosition();
                  },
                  
                    set(value) {
                        this.__PROXY__.setPosition(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            

      }

      //RPointData.prototype = new RPointData_BaseJs(engine);
      //RPointData.prototype = new RPointData_Wrapper(engine);
      RPointData.prototype = new Object();

      RPointData.prototype.toString = function() {
          //return "RPointData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPointData [JS]";
        };
      RPointData.getObjectType = function() {
        return RJSType_RPointData.getIdStatic();
      };

      RPointData.prototype.getObjectType = function() {
        return RJSType_RPointData.getIdStatic();
      };

      RPointData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPointData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RPoint.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RPointData.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RPointData.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RPointData.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RPointData.prototype.isSane = function(...args) 
          
        {
          //print("JS: RPointData.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RPointData.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RPointData.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RPointData.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RPointData.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RPointData.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RPointData.prototype.getHull = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RPointData.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RPointData.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RPointData.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RPointData.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RPointData.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RPointData.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RPointData.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RPointData.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RPointData.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RPointData.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RPointData.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RPointData.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RPointData.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RPointData.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RPointData.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RPointData.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RPointData.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RPointData.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RPointData.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RPointData.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RPointData.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RPointData.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RPointData.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RPointData.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RPointData.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RPointData.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RPointData.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RPointData.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RPointData.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RPointData.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RPointData.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RPointData.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RPointData.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RPointData.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RPointData.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RPointData.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RPointData.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RPointData.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RPointData.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RPointData.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RPointData.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RPointData.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RPointData.prototype.setColor = function(...args) 
          
        {
          //print("JS: RPointData.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RPointData.prototype.getColor = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RPointData.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RPointData.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RPointData.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RPointData.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RPointData.prototype.isInside = function(...args) 
          
        {
          //print("JS: RPointData.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RPointData.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RPointData.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RPointData.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RPointData.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RPointData.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RPointData.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RPointData.prototype.update = function(...args) 
          
        {
          //print("JS: RPointData.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RPointData.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RPointData.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RPointData.prototype.getShapeType = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getShapeType");
          return this.__PROXY__.getShapeType(...args);
        };
    
        // function 
        RPointData.prototype.clone = function(...args) 
          
        {
          //print("JS: RPointData.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RPointData.prototype.getVectorProperties = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getVectorProperties");
          return this.__PROXY__.getVectorProperties(...args);
        };
    
        // function 
        RPointData.prototype.setPosition = function(...args) 
          
        {
          //print("JS: RPointData.prototype.setPosition");
          return this.__PROXY__.setPosition(...args);
        };
    
        // function 
        RPointData.prototype.getLength = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getLength");
          return this.__PROXY__.getLength(...args);
        };
    
        // function 
        RPointData.prototype.getPointCloud = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getPointCloud");
          return this.__PROXY__.getPointCloud(...args);
        };
    
        // function 
        RPointData.prototype.getAngleAt = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getAngleAt");
          return this.__PROXY__.getAngleAt(...args);
        };
    
        // function 
        RPointData.prototype.getTransformed = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getTransformed");
          return this.__PROXY__.getTransformed(...args);
        };
    
        // function 
        RPointData.prototype.print = function(...args) 
          
        {
          //print("JS: RPointData.prototype.print");
          return this.__PROXY__.print(...args);
        };
    
        // function 
        RPointData.prototype.copy = function(...args) 
          
        {
          //print("JS: RPointData.prototype.copy");
          return this.__PROXY__.copy(...args);
        };
    
        // function 
        RPointData.prototype.getType = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RPointData.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RPointData.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RPointData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RPointData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RPointData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RPointData.prototype.setZ = function(...args) 
          
        {
          //print("JS: RPointData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RPointData.prototype.to2D = function(...args) 
          
        {
          //print("JS: RPointData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RPointData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RPointData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RPointData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RPointData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RPointData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RPointData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RPointData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RPointData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RPointData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RPointData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RPointData.prototype.move = function(...args) 
          
        {
          //print("JS: RPointData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RPointData.prototype.rotate = function(...args) 
          
        {
          //print("JS: RPointData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RPointData.prototype.scale = function(...args) 
          
        {
          //print("JS: RPointData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RPointData.prototype.mirror = function(...args) 
          
        {
          //print("JS: RPointData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RPointData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RPointData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RPointData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RPointData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RPointData.prototype.stretch = function(...args) 
          
        {
          //print("JS: RPointData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RPointData.prototype.getPosition = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getPosition");
          return this.__PROXY__.getPosition(...args);
        };
    
        // function 
        RPointData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RPointData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RPointData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RPointData.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RPointData.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RPointData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RPointData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RPointData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPointData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RPointData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      