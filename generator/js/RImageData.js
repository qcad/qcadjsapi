
      // auto generated
      //var self;

      // class constructor:
      function RImageData() {
        

        // should be RImageData_BaseJs.call(this, engine):
        //RImageData.prototype = new RImageData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RImageData.getIdStatic()))) {

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
            qWarning("RImageData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 7) {
    
            self = this;
            wrapper = new RImageData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RImageData);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RImageData_Wrapper(
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

      

        //copyProperties(this, wrapper, RImageData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RImageData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RImageData);
  }

  
  else {
    
        print("RImageData(): wrong number / type of arguments");
      
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

      //RImageData.prototype = new RImageData_BaseJs(engine);
      //RImageData.prototype = new RImageData_Wrapper(engine);
      RImageData.prototype = new Object();

      RImageData.prototype.toString = function() {
          //return "RImageData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RImageData [JS]";
        };
      RImageData.getObjectType = function() {
        return RJSType_RImageData.getIdStatic();
      };

      RImageData.prototype.getObjectType = function() {
        return RJSType_RImageData.getIdStatic();
      };

      RImageData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RImageData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RImageData.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RImageData.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RImageData.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RImageData.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RImageData.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RImageData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RImageData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RImageData.prototype.isSane = function(...args) 
          
        {
          //print("JS: RImageData.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RImageData.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RImageData.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RImageData.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RImageData.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RImageData.prototype.to2D = function(...args) 
          
        {
          //print("JS: RImageData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RImageData.prototype.setZ = function(...args) 
          
        {
          //print("JS: RImageData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RImageData.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RImageData.prototype.getHull = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RImageData.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RImageData.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RImageData.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RImageData.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RImageData.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RImageData.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RImageData.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RImageData.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RImageData.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RImageData.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RImageData.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RImageData.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RImageData.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RImageData.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RImageData.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RImageData.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RImageData.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RImageData.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RImageData.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RImageData.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RImageData.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RImageData.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RImageData.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RImageData.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RImageData.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RImageData.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RImageData.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RImageData.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RImageData.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RImageData.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RImageData.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RImageData.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RImageData.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RImageData.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RImageData.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RImageData.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RImageData.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RImageData.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RImageData.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RImageData.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RImageData.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RImageData.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RImageData.prototype.setColor = function(...args) 
          
        {
          //print("JS: RImageData.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RImageData.prototype.getColor = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RImageData.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RImageData.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RImageData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RImageData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RImageData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RImageData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RImageData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RImageData.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RImageData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RImageData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RImageData.prototype.isInside = function(...args) 
          
        {
          //print("JS: RImageData.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RImageData.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RImageData.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RImageData.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RImageData.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RImageData.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RImageData.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RImageData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RImageData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RImageData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RImageData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RImageData.prototype.stretch = function(...args) 
          
        {
          //print("JS: RImageData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RImageData.prototype.update = function(...args) 
          
        {
          //print("JS: RImageData.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RImageData.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RImageData.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RImageData.prototype.getType = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RImageData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RImageData.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RImageData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RImageData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RImageData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RImageData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RImageData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RImageData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RImageData.prototype.move = function(...args) 
          
        {
          //print("JS: RImageData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RImageData.prototype.rotate = function(...args) 
          
        {
          //print("JS: RImageData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RImageData.prototype.scale = function(...args) 
          
        {
          //print("JS: RImageData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RImageData.prototype.mirror = function(...args) 
          
        {
          //print("JS: RImageData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RImageData.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RImageData.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RImageData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RImageData.prototype.getFileName = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getFileName");
          return this.__PROXY__.getFileName(...args);
        };
    
        // function 
        RImageData.prototype.setFileName = function(...args) 
          
        {
          //print("JS: RImageData.prototype.setFileName");
          return this.__PROXY__.setFileName(...args);
        };
    
        // function 
        RImageData.prototype.getInsertionPoint = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getInsertionPoint");
          return this.__PROXY__.getInsertionPoint(...args);
        };
    
        // function 
        RImageData.prototype.setInsertionPoint = function(...args) 
          
        {
          //print("JS: RImageData.prototype.setInsertionPoint");
          return this.__PROXY__.setInsertionPoint(...args);
        };
    
        // function 
        RImageData.prototype.getAngle = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getAngle");
          return this.__PROXY__.getAngle(...args);
        };
    
        // function 
        RImageData.prototype.setAngle = function(...args) 
          
        {
          //print("JS: RImageData.prototype.setAngle");
          return this.__PROXY__.setAngle(...args);
        };
    
        // function 
        RImageData.prototype.getUVector = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getUVector");
          return this.__PROXY__.getUVector(...args);
        };
    
        // function 
        RImageData.prototype.setUVector = function(...args) 
          
        {
          //print("JS: RImageData.prototype.setUVector");
          return this.__PROXY__.setUVector(...args);
        };
    
        // function 
        RImageData.prototype.getVVector = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getVVector");
          return this.__PROXY__.getVVector(...args);
        };
    
        // function 
        RImageData.prototype.setVVector = function(...args) 
          
        {
          //print("JS: RImageData.prototype.setVVector");
          return this.__PROXY__.setVVector(...args);
        };
    
        // function 
        RImageData.prototype.setWidth = function(...args) 
          
        {
          //print("JS: RImageData.prototype.setWidth");
          return this.__PROXY__.setWidth(...args);
        };
    
        // function 
        RImageData.prototype.setHeight = function(...args) 
          
        {
          //print("JS: RImageData.prototype.setHeight");
          return this.__PROXY__.setHeight(...args);
        };
    
        // function 
        RImageData.prototype.getWidth = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getWidth");
          return this.__PROXY__.getWidth(...args);
        };
    
        // function 
        RImageData.prototype.getHeight = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getHeight");
          return this.__PROXY__.getHeight(...args);
        };
    
        // function 
        RImageData.prototype.getPixelWidth = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getPixelWidth");
          return this.__PROXY__.getPixelWidth(...args);
        };
    
        // function 
        RImageData.prototype.getPixelHeight = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getPixelHeight");
          return this.__PROXY__.getPixelHeight(...args);
        };
    
        // function 
        RImageData.prototype.getBrightness = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getBrightness");
          return this.__PROXY__.getBrightness(...args);
        };
    
        // function 
        RImageData.prototype.setBrightness = function(...args) 
          
        {
          //print("JS: RImageData.prototype.setBrightness");
          return this.__PROXY__.setBrightness(...args);
        };
    
        // function 
        RImageData.prototype.getContrast = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getContrast");
          return this.__PROXY__.getContrast(...args);
        };
    
        // function 
        RImageData.prototype.setContrast = function(...args) 
          
        {
          //print("JS: RImageData.prototype.setContrast");
          return this.__PROXY__.setContrast(...args);
        };
    
        // function 
        RImageData.prototype.getFade = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getFade");
          return this.__PROXY__.getFade(...args);
        };
    
        // function 
        RImageData.prototype.setFade = function(...args) 
          
        {
          //print("JS: RImageData.prototype.setFade");
          return this.__PROXY__.setFade(...args);
        };
    
        // function 
        RImageData.prototype.getImage = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getImage");
          return this.__PROXY__.getImage(...args);
        };
    
        // function 
        RImageData.prototype.getFullFilePath = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getFullFilePath");
          return this.__PROXY__.getFullFilePath(...args);
        };
    
        // function 
        RImageData.prototype.load = function(...args) 
          
        {
          //print("JS: RImageData.prototype.load");
          return this.__PROXY__.load(...args);
        };
    
        // function 
        RImageData.prototype.reload = function(...args) 
          
        {
          //print("JS: RImageData.prototype.reload");
          return this.__PROXY__.reload(...args);
        };
    
        // function 
        RImageData.prototype.getScaleVector = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getScaleVector");
          return this.__PROXY__.getScaleVector(...args);
        };
    
        // function 
        RImageData.prototype.mapToImage = function(...args) 
          
        {
          //print("JS: RImageData.prototype.mapToImage");
          return this.__PROXY__.mapToImage(...args);
        };
    
        // function 
        RImageData.prototype.mapFromImage = function(...args) 
          
        {
          //print("JS: RImageData.prototype.mapFromImage");
          return this.__PROXY__.mapFromImage(...args);
        };
    
        // function 
        RImageData.prototype.getCornersPx = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getCornersPx");
          return this.__PROXY__.getCornersPx(...args);
        };
    
        // function 
        RImageData.prototype.getCorners = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getCorners");
          return this.__PROXY__.getCorners(...args);
        };
    
        // function 
        RImageData.prototype.getEdges = function(...args) 
          
        {
          //print("JS: RImageData.prototype.getEdges");
          return this.__PROXY__.getEdges(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RImageData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RImageData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RImageData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      