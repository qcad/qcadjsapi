
      // auto generated
      //var self;

      // class constructor:
      function RCircleData() {
        

        // should be RCircleData_BaseJs.call(this, engine):
        //RCircleData.prototype = new RCircleData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RCircleData.getIdStatic()))) {

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
            qWarning("RCircleData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RCircleData_Wrapper(
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

      

        //copyProperties(this, wrapper, RCircleData);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RCircleData_Wrapper(
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

      

        //copyProperties(this, wrapper, RCircleData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RCircleData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RCircleData);
  }

  
  else {
    
        print("RCircleData(): wrong number / type of arguments");
      
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
              Object.defineProperty(this, 'center', {
                  get() {
                      
                          return this.__PROXY__.getCenter();
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setCenter(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'radius', {
                  get() {
                      
                          return this.__PROXY__.getRadius();
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setRadius(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            

      }

      //RCircleData.prototype = new RCircleData_BaseJs(engine);
      //RCircleData.prototype = new RCircleData_Wrapper(engine);
      RCircleData.prototype = new Object();

      RCircleData.prototype.toString = function() {
          //return "RCircleData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RCircleData [JS]";
        };
      RCircleData.getObjectType = function() {
        return RJSType_RCircleData.getIdStatic();
      };

      RCircleData.prototype.getObjectType = function() {
        return RJSType_RCircleData.getIdStatic();
      };

      RCircleData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RCircleData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RCircle.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RCircleData.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RCircleData.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RCircleData.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RCircleData.prototype.isSane = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RCircleData.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RCircleData.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RCircleData.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RCircleData.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RCircleData.prototype.getHull = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RCircleData.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RCircleData.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RCircleData.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RCircleData.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RCircleData.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RCircleData.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RCircleData.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RCircleData.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RCircleData.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RCircleData.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RCircleData.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RCircleData.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RCircleData.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RCircleData.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RCircleData.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RCircleData.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RCircleData.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RCircleData.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RCircleData.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RCircleData.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RCircleData.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RCircleData.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RCircleData.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RCircleData.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RCircleData.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RCircleData.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RCircleData.prototype.setColor = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RCircleData.prototype.getColor = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RCircleData.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RCircleData.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RCircleData.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RCircleData.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RCircleData.prototype.isInside = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RCircleData.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RCircleData.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RCircleData.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RCircleData.prototype.update = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RCircleData.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RCircleData.prototype.getShapeType = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getShapeType");
          return this.__PROXY__.getShapeType(...args);
        };
    
        // function 
        RCircleData.prototype.clone = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RCircleData.prototype.toArc = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.toArc");
          return this.__PROXY__.toArc(...args);
        };
    
        // function 
        RCircleData.prototype.getVectorProperties = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getVectorProperties");
          return this.__PROXY__.getVectorProperties(...args);
        };
    
        // function 
        RCircleData.prototype.getDoubleProperties = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getDoubleProperties");
          return this.__PROXY__.getDoubleProperties(...args);
        };
    
        // function 
        RCircleData.prototype.getLength = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getLength");
          return this.__PROXY__.getLength(...args);
        };
    
        // function 
        RCircleData.prototype.getPointCloud = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getPointCloud");
          return this.__PROXY__.getPointCloud(...args);
        };
    
        // function 
        RCircleData.prototype.getAngleAt = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getAngleAt");
          return this.__PROXY__.getAngleAt(...args);
        };
    
        // function 
        RCircleData.prototype.getPointAtAngle = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getPointAtAngle");
          return this.__PROXY__.getPointAtAngle(...args);
        };
    
        // function 
        RCircleData.prototype.setCenter = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.setCenter");
          return this.__PROXY__.setCenter(...args);
        };
    
        // function 
        RCircleData.prototype.setRadius = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.setRadius");
          return this.__PROXY__.setRadius(...args);
        };
    
        // function 
        RCircleData.prototype.getDiameter = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getDiameter");
          return this.__PROXY__.getDiameter(...args);
        };
    
        // function 
        RCircleData.prototype.setDiameter = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.setDiameter");
          return this.__PROXY__.setDiameter(...args);
        };
    
        // function 
        RCircleData.prototype.getCircumference = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getCircumference");
          return this.__PROXY__.getCircumference(...args);
        };
    
        // function 
        RCircleData.prototype.setCircumference = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.setCircumference");
          return this.__PROXY__.setCircumference(...args);
        };
    
        // function 
        RCircleData.prototype.getArea = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getArea");
          return this.__PROXY__.getArea(...args);
        };
    
        // function 
        RCircleData.prototype.setArea = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.setArea");
          return this.__PROXY__.setArea(...args);
        };
    
        // function 
        RCircleData.prototype.contains = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.contains");
          return this.__PROXY__.contains(...args);
        };
    
        // function 
        RCircleData.prototype.getTransformed = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getTransformed");
          return this.__PROXY__.getTransformed(...args);
        };
    
        // function 
        RCircleData.prototype.getTangents = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getTangents");
          return this.__PROXY__.getTangents(...args);
        };
    
        // function 
        RCircleData.prototype.getOffsetShapes = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getOffsetShapes");
          return this.__PROXY__.getOffsetShapes(...args);
        };
    
        // function 
        RCircleData.prototype.splitAt = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.splitAt");
          return this.__PROXY__.splitAt(...args);
        };
    
        // function 
        RCircleData.prototype.print = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.print");
          return this.__PROXY__.print(...args);
        };
    
        // function 
        RCircleData.prototype.copy = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.copy");
          return this.__PROXY__.copy(...args);
        };
    
        // function 
        RCircleData.prototype.getType = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RCircleData.prototype.getCircle = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getCircle");
          return this.__PROXY__.getCircle(...args);
        };
    
        // function 
        RCircleData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RCircleData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RCircleData.prototype.setZ = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RCircleData.prototype.to2D = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RCircleData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RCircleData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RCircleData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RCircleData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RCircleData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RCircleData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RCircleData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RCircleData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RCircleData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RCircleData.prototype.move = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RCircleData.prototype.rotate = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RCircleData.prototype.scale = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RCircleData.prototype.mirror = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RCircleData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RCircleData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RCircleData.prototype.stretch = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RCircleData.prototype.getCenter = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getCenter");
          return this.__PROXY__.getCenter(...args);
        };
    
        // function 
        RCircleData.prototype.getRadius = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getRadius");
          return this.__PROXY__.getRadius(...args);
        };
    
        // function 
        RCircleData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RCircleData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RCircleData.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RCircleData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RCircleData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RCircleData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RCircleData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RCircleData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      