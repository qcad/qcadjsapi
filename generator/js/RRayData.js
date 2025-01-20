
      // auto generated
      //var self;

      // class constructor:
      function RRayData() {
        

        // should be RRayData_BaseJs.call(this, engine):
        //RRayData.prototype = new RRayData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RRayData.getIdStatic()))) {

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
            qWarning("RRayData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RRayData_Wrapper(
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

      

        //copyProperties(this, wrapper, RRayData);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RRayData_Wrapper(
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

      

        //copyProperties(this, wrapper, RRayData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RRayData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RRayData);
  }

  
  else {
    
        print("RRayData(): wrong number / type of arguments");
      
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

      //RRayData.prototype = new RRayData_BaseJs(engine);
      //RRayData.prototype = new RRayData_Wrapper(engine);
      RRayData.prototype = new Object();

      RRayData.prototype.toString = function() {
          //return "RRayData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RRayData [JS]";
        };
      RRayData.getObjectType = function() {
        return RJSType_RRayData.getIdStatic();
      };

      RRayData.prototype.getObjectType = function() {
        return RJSType_RRayData.getIdStatic();
      };

      RRayData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RRayData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RRay.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RRayData.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RRayData.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RRayData.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RRayData.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RRayData.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RRayData.prototype.isSane = function(...args) 
          
        {
          //print("JS: RRayData.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RRayData.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RRayData.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RRayData.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RRayData.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RRayData.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RRayData.prototype.getHull = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RRayData.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RRayData.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RRayData.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RRayData.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RRayData.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RRayData.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RRayData.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RRayData.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RRayData.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RRayData.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RRayData.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RRayData.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RRayData.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RRayData.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RRayData.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RRayData.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RRayData.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RRayData.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RRayData.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RRayData.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RRayData.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RRayData.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RRayData.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RRayData.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RRayData.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RRayData.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RRayData.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RRayData.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RRayData.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RRayData.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RRayData.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RRayData.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RRayData.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RRayData.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RRayData.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RRayData.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RRayData.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RRayData.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RRayData.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RRayData.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RRayData.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RRayData.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RRayData.prototype.setColor = function(...args) 
          
        {
          //print("JS: RRayData.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RRayData.prototype.getColor = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RRayData.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RRayData.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RRayData.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RRayData.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RRayData.prototype.isInside = function(...args) 
          
        {
          //print("JS: RRayData.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RRayData.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RRayData.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RRayData.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RRayData.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RRayData.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RRayData.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RRayData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RRayData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RRayData.prototype.update = function(...args) 
          
        {
          //print("JS: RRayData.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RRayData.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RRayData.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RRayData.prototype.getShapeType = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getShapeType");
          return this.__PROXY__.getShapeType(...args);
        };
    
        // function 
        RRayData.prototype.clone = function(...args) 
          
        {
          //print("JS: RRayData.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RRayData.prototype.getVectorProperties = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getVectorProperties");
          return this.__PROXY__.getVectorProperties(...args);
        };
    
        // function 
        RRayData.prototype.getClippedLine = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getClippedLine");
          return this.__PROXY__.getClippedLine(...args);
        };
    
        // function 
        RRayData.prototype.stretch = function(...args) 
          
        {
          //print("JS: RRayData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RRayData.prototype.splitAt = function(...args) 
          
        {
          //print("JS: RRayData.prototype.splitAt");
          return this.__PROXY__.splitAt(...args);
        };
    
        // function 
        RRayData.prototype.print = function(...args) 
          
        {
          //print("JS: RRayData.prototype.print");
          return this.__PROXY__.print(...args);
        };
    
        // function 
        RRayData.prototype.getType = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RRayData.prototype.getRay = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getRay");
          return this.__PROXY__.getRay(...args);
        };
    
        // function 
        RRayData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RRayData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RRayData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RRayData.prototype.setZ = function(...args) 
          
        {
          //print("JS: RRayData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RRayData.prototype.to2D = function(...args) 
          
        {
          //print("JS: RRayData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RRayData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RRayData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RRayData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RRayData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RRayData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RRayData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RRayData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RRayData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RRayData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RRayData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RRayData.prototype.move = function(...args) 
          
        {
          //print("JS: RRayData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RRayData.prototype.rotate = function(...args) 
          
        {
          //print("JS: RRayData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RRayData.prototype.scale = function(...args) 
          
        {
          //print("JS: RRayData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RRayData.prototype.mirror = function(...args) 
          
        {
          //print("JS: RRayData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RRayData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RRayData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RRayData.prototype.getBasePoint = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getBasePoint");
          return this.__PROXY__.getBasePoint(...args);
        };
    
        // function 
        RRayData.prototype.getDirectionVector = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getDirectionVector");
          return this.__PROXY__.getDirectionVector(...args);
        };
    
        // function 
        RRayData.prototype.getAngle = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getAngle");
          return this.__PROXY__.getAngle(...args);
        };
    
        // function 
        RRayData.prototype.hasFixedAngle = function(...args) 
          
        {
          //print("JS: RRayData.prototype.hasFixedAngle");
          return this.__PROXY__.hasFixedAngle(...args);
        };
    
        // function 
        RRayData.prototype.setFixedAngle = function(...args) 
          
        {
          //print("JS: RRayData.prototype.setFixedAngle");
          return this.__PROXY__.setFixedAngle(...args);
        };
    
        // function 
        RRayData.prototype.reverse = function(...args) 
          
        {
          //print("JS: RRayData.prototype.reverse");
          return this.__PROXY__.reverse(...args);
        };
    
        // function 
        RRayData.prototype.getTrimEnd = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getTrimEnd");
          return this.__PROXY__.getTrimEnd(...args);
        };
    
        // function 
        RRayData.prototype.trimStartPoint = function(...args) 
          
        {
          //print("JS: RRayData.prototype.trimStartPoint");
          return this.__PROXY__.trimStartPoint(...args);
        };
    
        // function 
        RRayData.prototype.trimEndPoint = function(...args) 
          
        {
          //print("JS: RRayData.prototype.trimEndPoint");
          return this.__PROXY__.trimEndPoint(...args);
        };
    
        // function 
        RRayData.prototype.getSideOfPoint = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getSideOfPoint");
          return this.__PROXY__.getSideOfPoint(...args);
        };
    
        // function 
        RRayData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RRayData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RRayData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RRayData.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RRayData.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RRayData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RRayData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RRayData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RRayData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RRayData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      