
      // auto generated
      //var self;

      // class constructor:
      function RLineData() {
        

        // should be RLineData_BaseJs.call(this, engine):
        //RLineData.prototype = new RLineData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RLineData.getIdStatic()))) {

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
            qWarning("RLineData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RLineData_Wrapper(
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

      

        //copyProperties(this, wrapper, RLineData);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RLineData_Wrapper(
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

      

        //copyProperties(this, wrapper, RLineData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RLineData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLineData);
  }

  
  else {
    
        print("RLineData(): wrong number / type of arguments");
      
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
              Object.defineProperty(this, 'startPoint', {
                  get() {
                      return this.__PROXY__.getStartPoint();
                  },
                  
                    set(value) {
                        this.__PROXY__.setStartPoint(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            
              // define property setters/getters:
              Object.defineProperty(this, 'endPoint', {
                  get() {
                      return this.__PROXY__.getEndPoint();
                  },
                  
                    set(value) {
                        this.__PROXY__.setEndPoint(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            

      }

      //RLineData.prototype = new RLineData_BaseJs(engine);
      //RLineData.prototype = new RLineData_Wrapper(engine);
      RLineData.prototype = new Object();

      RLineData.prototype.toString = function() {
          //return "RLineData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RLineData [JS]";
        };
      RLineData.getObjectType = function() {
        return RJSType_RLineData.getIdStatic();
      };

      RLineData.prototype.getObjectType = function() {
        return RJSType_RLineData.getIdStatic();
      };

      RLineData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RLineData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RLine.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RLineData.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RLineData.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RLineData.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RLineData.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RLineData.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RLineData.prototype.isSane = function(...args) 
          
        {
          //print("JS: RLineData.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RLineData.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RLineData.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RLineData.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RLineData.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RLineData.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RLineData.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RLineData.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RLineData.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RLineData.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RLineData.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RLineData.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RLineData.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RLineData.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RLineData.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RLineData.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RLineData.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RLineData.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RLineData.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RLineData.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RLineData.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RLineData.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RLineData.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RLineData.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RLineData.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RLineData.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RLineData.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RLineData.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RLineData.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RLineData.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RLineData.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RLineData.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RLineData.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RLineData.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RLineData.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RLineData.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RLineData.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RLineData.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RLineData.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RLineData.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RLineData.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RLineData.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RLineData.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RLineData.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RLineData.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RLineData.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RLineData.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RLineData.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RLineData.prototype.setColor = function(...args) 
          
        {
          //print("JS: RLineData.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RLineData.prototype.getColor = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RLineData.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RLineData.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RLineData.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RLineData.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RLineData.prototype.isInside = function(...args) 
          
        {
          //print("JS: RLineData.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RLineData.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RLineData.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RLineData.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RLineData.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RLineData.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RLineData.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RLineData.prototype.update = function(...args) 
          
        {
          //print("JS: RLineData.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RLineData.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RLineData.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RLineData.prototype.getShapeType = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getShapeType");
          return this.__PROXY__.getShapeType(...args);
        };
    
        // function 
        RLineData.prototype.clone = function(...args) 
          
        {
          //print("JS: RLineData.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RLineData.prototype.isDirected = function(...args) 
          
        {
          //print("JS: RLineData.prototype.isDirected");
          return this.__PROXY__.isDirected(...args);
        };
    
        // function 
        RLineData.prototype.getVectorProperties = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getVectorProperties");
          return this.__PROXY__.getVectorProperties(...args);
        };
    
        // function 
        RLineData.prototype.getPointCloud = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getPointCloud");
          return this.__PROXY__.getPointCloud(...args);
        };
    
        // function 
        RLineData.prototype.getAngleAt = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getAngleAt");
          return this.__PROXY__.getAngleAt(...args);
        };
    
        // function 
        RLineData.prototype.setStartPoint = function(...args) 
          
        {
          //print("JS: RLineData.prototype.setStartPoint");
          return this.__PROXY__.setStartPoint(...args);
        };
    
        // function 
        RLineData.prototype.setEndPoint = function(...args) 
          
        {
          //print("JS: RLineData.prototype.setEndPoint");
          return this.__PROXY__.setEndPoint(...args);
        };
    
        // function 
        RLineData.prototype.getMiddlePoint = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getMiddlePoint");
          return this.__PROXY__.getMiddlePoint(...args);
        };
    
        // function 
        RLineData.prototype.getLength = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getLength");
          return this.__PROXY__.getLength(...args);
        };
    
        // function 
        RLineData.prototype.setLength = function(...args) 
          
        {
          //print("JS: RLineData.prototype.setLength");
          return this.__PROXY__.setLength(...args);
        };
    
        // function 
        RLineData.prototype.setAngle = function(...args) 
          
        {
          //print("JS: RLineData.prototype.setAngle");
          return this.__PROXY__.setAngle(...args);
        };
    
        // function 
        RLineData.prototype.isParallel = function(...args) 
          
        {
          //print("JS: RLineData.prototype.isParallel");
          return this.__PROXY__.isParallel(...args);
        };
    
        // function 
        RLineData.prototype.isVertical = function(...args) 
          
        {
          //print("JS: RLineData.prototype.isVertical");
          return this.__PROXY__.isVertical(...args);
        };
    
        // function 
        RLineData.prototype.isHorizontal = function(...args) 
          
        {
          //print("JS: RLineData.prototype.isHorizontal");
          return this.__PROXY__.isHorizontal(...args);
        };
    
        // function 
        RLineData.prototype.clipToXY = function(...args) 
          
        {
          //print("JS: RLineData.prototype.clipToXY");
          return this.__PROXY__.clipToXY(...args);
        };
    
        // function 
        RLineData.prototype.moveTo = function(...args) 
          
        {
          //print("JS: RLineData.prototype.moveTo");
          return this.__PROXY__.moveTo(...args);
        };
    
        // function 
        RLineData.prototype.getTransformed = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getTransformed");
          return this.__PROXY__.getTransformed(...args);
        };
    
        // function 
        RLineData.prototype.getDistanceFromStart = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getDistanceFromStart");
          return this.__PROXY__.getDistanceFromStart(...args);
        };
    
        // function 
        RLineData.prototype.getOffsetShapes = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getOffsetShapes");
          return this.__PROXY__.getOffsetShapes(...args);
        };
    
        // function 
        RLineData.prototype.splitAt = function(...args) 
          
        {
          //print("JS: RLineData.prototype.splitAt");
          return this.__PROXY__.splitAt(...args);
        };
    
        // function 
        RLineData.prototype.print = function(...args) 
          
        {
          //print("JS: RLineData.prototype.print");
          return this.__PROXY__.print(...args);
        };
    
        // function 
        RLineData.prototype.copy = function(...args) 
          
        {
          //print("JS: RLineData.prototype.copy");
          return this.__PROXY__.copy(...args);
        };
    
        // function 
        RLineData.prototype.getType = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RLineData.prototype.getLine = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getLine");
          return this.__PROXY__.getLine(...args);
        };
    
        // function 
        RLineData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RLineData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RLineData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RLineData.prototype.setZ = function(...args) 
          
        {
          //print("JS: RLineData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RLineData.prototype.to2D = function(...args) 
          
        {
          //print("JS: RLineData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RLineData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RLineData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RLineData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RLineData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RLineData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RLineData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RLineData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RLineData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RLineData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RLineData.prototype.move = function(...args) 
          
        {
          //print("JS: RLineData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RLineData.prototype.rotate = function(...args) 
          
        {
          //print("JS: RLineData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RLineData.prototype.scale = function(...args) 
          
        {
          //print("JS: RLineData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RLineData.prototype.mirror = function(...args) 
          
        {
          //print("JS: RLineData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RLineData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RLineData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RLineData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RLineData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RLineData.prototype.stretch = function(...args) 
          
        {
          //print("JS: RLineData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RLineData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RLineData.prototype.getHull = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RLineData.prototype.getStartPoint = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getStartPoint");
          return this.__PROXY__.getStartPoint(...args);
        };
    
        // function 
        RLineData.prototype.getEndPoint = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getEndPoint");
          return this.__PROXY__.getEndPoint(...args);
        };
    
        // function 
        RLineData.prototype.getAngle = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getAngle");
          return this.__PROXY__.getAngle(...args);
        };
    
        // function 
        RLineData.prototype.getDirection1 = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getDirection1");
          return this.__PROXY__.getDirection1(...args);
        };
    
        // function 
        RLineData.prototype.getDirection2 = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getDirection2");
          return this.__PROXY__.getDirection2(...args);
        };
    
        // function 
        RLineData.prototype.reverse = function(...args) 
          
        {
          //print("JS: RLineData.prototype.reverse");
          return this.__PROXY__.reverse(...args);
        };
    
        // function 
        RLineData.prototype.getTrimEnd = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getTrimEnd");
          return this.__PROXY__.getTrimEnd(...args);
        };
    
        // function 
        RLineData.prototype.trimStartPoint = function(...args) 
          
        {
          //print("JS: RLineData.prototype.trimStartPoint");
          return this.__PROXY__.trimStartPoint(...args);
        };
    
        // function 
        RLineData.prototype.trimEndPoint = function(...args) 
          
        {
          //print("JS: RLineData.prototype.trimEndPoint");
          return this.__PROXY__.trimEndPoint(...args);
        };
    
        // function 
        RLineData.prototype.getSideOfPoint = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getSideOfPoint");
          return this.__PROXY__.getSideOfPoint(...args);
        };
    
        // function 
        RLineData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RLineData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RLineData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RLineData.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RLineData.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RLineData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RLineData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RLineData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RLineData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RLineData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      