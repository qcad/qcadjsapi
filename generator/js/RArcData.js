
      // auto generated
      //var self;

      // class constructor:
      function RArcData() {
        

        // should be RArcData_BaseJs.call(this, engine):
        //RArcData.prototype = new RArcData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RArcData.getIdStatic()))) {

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
            qWarning("RArcData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
            self = this;
            wrapper = new RArcData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RArcData);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RArcData_Wrapper(
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

      

        //copyProperties(this, wrapper, RArcData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RArcData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RArcData);
  }

  
  else {
    
        print("RArcData(): wrong number / type of arguments");
      
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
            
              // define property setters/getters:
              Object.defineProperty(this, 'startAngle', {
                  get() {
                      
                          return this.__PROXY__.getStartAngle();
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setStartAngle(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'endAngle', {
                  get() {
                      
                          return this.__PROXY__.getEndAngle();
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setEndAngle(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'reversed', {
                  get() {
                      
                          return this.__PROXY__.isReversed();
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setReversed(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            

      }

      //RArcData.prototype = new RArcData_BaseJs(engine);
      //RArcData.prototype = new RArcData_Wrapper(engine);
      RArcData.prototype = new Object();

      RArcData.prototype.toString = function() {
          //return "RArcData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RArcData [JS]";
        };
      RArcData.getObjectType = function() {
        return RJSType_RArcData.getIdStatic();
      };

      RArcData.prototype.getObjectType = function() {
        return RJSType_RArcData.getIdStatic();
      };

      RArcData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RArcData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RArc.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RArcData.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RArcData.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RArcData.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RArcData.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RArcData.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RArcData.prototype.isSane = function(...args) 
          
        {
          //print("JS: RArcData.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RArcData.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RArcData.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RArcData.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RArcData.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RArcData.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RArcData.prototype.getHull = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RArcData.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RArcData.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RArcData.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RArcData.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RArcData.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RArcData.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RArcData.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RArcData.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RArcData.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RArcData.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RArcData.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RArcData.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RArcData.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RArcData.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RArcData.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RArcData.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RArcData.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RArcData.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RArcData.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RArcData.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RArcData.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RArcData.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RArcData.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RArcData.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RArcData.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RArcData.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RArcData.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RArcData.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RArcData.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RArcData.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RArcData.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RArcData.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RArcData.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RArcData.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RArcData.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RArcData.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RArcData.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RArcData.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RArcData.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RArcData.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RArcData.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RArcData.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RArcData.prototype.setColor = function(...args) 
          
        {
          //print("JS: RArcData.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RArcData.prototype.getColor = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RArcData.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RArcData.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RArcData.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RArcData.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RArcData.prototype.isInside = function(...args) 
          
        {
          //print("JS: RArcData.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RArcData.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RArcData.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RArcData.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RArcData.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RArcData.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RArcData.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RArcData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RArcData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RArcData.prototype.update = function(...args) 
          
        {
          //print("JS: RArcData.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RArcData.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RArcData.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RArcData.prototype.getShapeType = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getShapeType");
          return this.__PROXY__.getShapeType(...args);
        };
    
        // function 
        RArcData.prototype.clone = function(...args) 
          
        {
          //print("JS: RArcData.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RArcData.prototype.isDirected = function(...args) 
          
        {
          //print("JS: RArcData.prototype.isDirected");
          return this.__PROXY__.isDirected(...args);
        };
    
        // function 
        RArcData.prototype.getVectorProperties = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getVectorProperties");
          return this.__PROXY__.getVectorProperties(...args);
        };
    
        // function 
        RArcData.prototype.getDoubleProperties = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getDoubleProperties");
          return this.__PROXY__.getDoubleProperties(...args);
        };
    
        // function 
        RArcData.prototype.getBoolProperties = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getBoolProperties");
          return this.__PROXY__.getBoolProperties(...args);
        };
    
        // function 
        RArcData.prototype.isFullCircle = function(...args) 
          
        {
          //print("JS: RArcData.prototype.isFullCircle");
          return this.__PROXY__.isFullCircle(...args);
        };
    
        // function 
        RArcData.prototype.getPointCloud = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getPointCloud");
          return this.__PROXY__.getPointCloud(...args);
        };
    
        // function 
        RArcData.prototype.setCenter = function(...args) 
          
        {
          //print("JS: RArcData.prototype.setCenter");
          return this.__PROXY__.setCenter(...args);
        };
    
        // function 
        RArcData.prototype.setRadius = function(...args) 
          
        {
          //print("JS: RArcData.prototype.setRadius");
          return this.__PROXY__.setRadius(...args);
        };
    
        // function 
        RArcData.prototype.setStartAngle = function(...args) 
          
        {
          //print("JS: RArcData.prototype.setStartAngle");
          return this.__PROXY__.setStartAngle(...args);
        };
    
        // function 
        RArcData.prototype.setEndAngle = function(...args) 
          
        {
          //print("JS: RArcData.prototype.setEndAngle");
          return this.__PROXY__.setEndAngle(...args);
        };
    
        // function 
        RArcData.prototype.setReversed = function(...args) 
          
        {
          //print("JS: RArcData.prototype.setReversed");
          return this.__PROXY__.setReversed(...args);
        };
    
        // function 
        RArcData.prototype.isAngleWithinArc = function(...args) 
          
        {
          //print("JS: RArcData.prototype.isAngleWithinArc");
          return this.__PROXY__.isAngleWithinArc(...args);
        };
    
        // function 
        RArcData.prototype.getDiameter = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getDiameter");
          return this.__PROXY__.getDiameter(...args);
        };
    
        // function 
        RArcData.prototype.setDiameter = function(...args) 
          
        {
          //print("JS: RArcData.prototype.setDiameter");
          return this.__PROXY__.setDiameter(...args);
        };
    
        // function 
        RArcData.prototype.setLength = function(...args) 
          
        {
          //print("JS: RArcData.prototype.setLength");
          return this.__PROXY__.setLength(...args);
        };
    
        // function 
        RArcData.prototype.getArea = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getArea");
          return this.__PROXY__.getArea(...args);
        };
    
        // function 
        RArcData.prototype.setArea = function(...args) 
          
        {
          //print("JS: RArcData.prototype.setArea");
          return this.__PROXY__.setArea(...args);
        };
    
        // function 
        RArcData.prototype.getChordArea = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getChordArea");
          return this.__PROXY__.getChordArea(...args);
        };
    
        // function 
        RArcData.prototype.getSideOfPoint = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getSideOfPoint");
          return this.__PROXY__.getSideOfPoint(...args);
        };
    
        // function 
        RArcData.prototype.getSweep = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getSweep");
          return this.__PROXY__.getSweep(...args);
        };
    
        // function 
        RArcData.prototype.setSweep = function(...args) 
          
        {
          //print("JS: RArcData.prototype.setSweep");
          return this.__PROXY__.setSweep(...args);
        };
    
        // function 
        RArcData.prototype.getStartPoint = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getStartPoint");
          return this.__PROXY__.getStartPoint(...args);
        };
    
        // function 
        RArcData.prototype.getEndPoint = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getEndPoint");
          return this.__PROXY__.getEndPoint(...args);
        };
    
        // function 
        RArcData.prototype.getPointAtAngle = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getPointAtAngle");
          return this.__PROXY__.getPointAtAngle(...args);
        };
    
        // function 
        RArcData.prototype.getAngleAt = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getAngleAt");
          return this.__PROXY__.getAngleAt(...args);
        };
    
        // function 
        RArcData.prototype.getMiddlePoint = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getMiddlePoint");
          return this.__PROXY__.getMiddlePoint(...args);
        };
    
        // function 
        RArcData.prototype.moveStartPoint = function(...args) 
          
        {
          //print("JS: RArcData.prototype.moveStartPoint");
          return this.__PROXY__.moveStartPoint(...args);
        };
    
        // function 
        RArcData.prototype.moveEndPoint = function(...args) 
          
        {
          //print("JS: RArcData.prototype.moveEndPoint");
          return this.__PROXY__.moveEndPoint(...args);
        };
    
        // function 
        RArcData.prototype.moveMiddlePoint = function(...args) 
          
        {
          //print("JS: RArcData.prototype.moveMiddlePoint");
          return this.__PROXY__.moveMiddlePoint(...args);
        };
    
        // function 
        RArcData.prototype.stretch = function(...args) 
          
        {
          //print("JS: RArcData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RArcData.prototype.getTransformed = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getTransformed");
          return this.__PROXY__.getTransformed(...args);
        };
    
        // function 
        RArcData.prototype.getDistanceFromStart = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getDistanceFromStart");
          return this.__PROXY__.getDistanceFromStart(...args);
        };
    
        // function 
        RArcData.prototype.approximateWithLinesTan = function(...args) 
          
        {
          //print("JS: RArcData.prototype.approximateWithLinesTan");
          return this.__PROXY__.approximateWithLinesTan(...args);
        };
    
        // function 
        RArcData.prototype.getTangents = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getTangents");
          return this.__PROXY__.getTangents(...args);
        };
    
        // function 
        RArcData.prototype.getOffsetShapes = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getOffsetShapes");
          return this.__PROXY__.getOffsetShapes(...args);
        };
    
        // function 
        RArcData.prototype.splitAt = function(...args) 
          
        {
          //print("JS: RArcData.prototype.splitAt");
          return this.__PROXY__.splitAt(...args);
        };
    
        // function 
        RArcData.prototype.splitAtQuadrantLines = function(...args) 
          
        {
          //print("JS: RArcData.prototype.splitAtQuadrantLines");
          return this.__PROXY__.splitAtQuadrantLines(...args);
        };
    
        // function 
        RArcData.prototype.print = function(...args) 
          
        {
          //print("JS: RArcData.prototype.print");
          return this.__PROXY__.print(...args);
        };
    
        // function 
        RArcData.prototype.copy = function(...args) 
          
        {
          //print("JS: RArcData.prototype.copy");
          return this.__PROXY__.copy(...args);
        };
    
        // function 
        RArcData.prototype.getType = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RArcData.prototype.getArc = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getArc");
          return this.__PROXY__.getArc(...args);
        };
    
        // function 
        RArcData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RArcData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RArcData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RArcData.prototype.setZ = function(...args) 
          
        {
          //print("JS: RArcData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RArcData.prototype.to2D = function(...args) 
          
        {
          //print("JS: RArcData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RArcData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RArcData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RArcData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RArcData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RArcData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RArcData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RArcData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RArcData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RArcData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RArcData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RArcData.prototype.move = function(...args) 
          
        {
          //print("JS: RArcData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RArcData.prototype.rotate = function(...args) 
          
        {
          //print("JS: RArcData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RArcData.prototype.scale = function(...args) 
          
        {
          //print("JS: RArcData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RArcData.prototype.mirror = function(...args) 
          
        {
          //print("JS: RArcData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RArcData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RArcData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RArcData.prototype.getCenter = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getCenter");
          return this.__PROXY__.getCenter(...args);
        };
    
        // function 
        RArcData.prototype.getRadius = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getRadius");
          return this.__PROXY__.getRadius(...args);
        };
    
        // function 
        RArcData.prototype.getBulge = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getBulge");
          return this.__PROXY__.getBulge(...args);
        };
    
        // function 
        RArcData.prototype.getStartAngle = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getStartAngle");
          return this.__PROXY__.getStartAngle(...args);
        };
    
        // function 
        RArcData.prototype.getEndAngle = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getEndAngle");
          return this.__PROXY__.getEndAngle(...args);
        };
    
        // function 
        RArcData.prototype.isReversed = function(...args) 
          
        {
          //print("JS: RArcData.prototype.isReversed");
          return this.__PROXY__.isReversed(...args);
        };
    
        // function 
        RArcData.prototype.getDirection1 = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getDirection1");
          return this.__PROXY__.getDirection1(...args);
        };
    
        // function 
        RArcData.prototype.getDirection2 = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getDirection2");
          return this.__PROXY__.getDirection2(...args);
        };
    
        // function 
        RArcData.prototype.reverse = function(...args) 
          
        {
          //print("JS: RArcData.prototype.reverse");
          return this.__PROXY__.reverse(...args);
        };
    
        // function 
        RArcData.prototype.getTrimEnd = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getTrimEnd");
          return this.__PROXY__.getTrimEnd(...args);
        };
    
        // function 
        RArcData.prototype.trimStartPoint = function(...args) 
          
        {
          //print("JS: RArcData.prototype.trimStartPoint");
          return this.__PROXY__.trimStartPoint(...args);
        };
    
        // function 
        RArcData.prototype.trimEndPoint = function(...args) 
          
        {
          //print("JS: RArcData.prototype.trimEndPoint");
          return this.__PROXY__.trimEndPoint(...args);
        };
    
        // function 
        RArcData.prototype.getLength = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getLength");
          return this.__PROXY__.getLength(...args);
        };
    
        // function 
        RArcData.prototype.getAngleLength = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getAngleLength");
          return this.__PROXY__.getAngleLength(...args);
        };
    
        // function 
        RArcData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RArcData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RArcData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RArcData.prototype.approximateWithLines = function(...args) 
          
        {
          //print("JS: RArcData.prototype.approximateWithLines");
          return this.__PROXY__.approximateWithLines(...args);
        };
    
        // function 
        RArcData.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RArcData.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RArcData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RArcData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RArcData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RArcData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RArcData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      