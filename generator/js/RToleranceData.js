
      // auto generated
      //var self;

      // class constructor:
      function RToleranceData() {
        

        // should be RToleranceData_BaseJs.call(this, engine):
        //RToleranceData.prototype = new RToleranceData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RToleranceData.getIdStatic()))) {

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
            qWarning("RToleranceData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RToleranceData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RToleranceData);
  }

  
  else {
    
        print("RToleranceData(): wrong number / type of arguments");
      
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

      //RToleranceData.prototype = new RToleranceData_BaseJs(engine);
      //RToleranceData.prototype = new RToleranceData_Wrapper(engine);
      RToleranceData.prototype = new Object();

      RToleranceData.prototype.toString = function() {
          //return "RToleranceData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RToleranceData [JS]";
        };
      RToleranceData.getObjectType = function() {
        return RJSType_RToleranceData.getIdStatic();
      };

      RToleranceData.prototype.getObjectType = function() {
        return RJSType_RToleranceData.getIdStatic();
      };

      RToleranceData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RToleranceData.getIdStatic()) {
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
        RToleranceData.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RToleranceData.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RToleranceData.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RToleranceData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RToleranceData.prototype.isSane = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RToleranceData.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RToleranceData.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RToleranceData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RToleranceData.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RToleranceData.prototype.to2D = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RToleranceData.prototype.setZ = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RToleranceData.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RToleranceData.prototype.getHull = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RToleranceData.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RToleranceData.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RToleranceData.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RToleranceData.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RToleranceData.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RToleranceData.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RToleranceData.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RToleranceData.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RToleranceData.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RToleranceData.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RToleranceData.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RToleranceData.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RToleranceData.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RToleranceData.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RToleranceData.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RToleranceData.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RToleranceData.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RToleranceData.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RToleranceData.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RToleranceData.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RToleranceData.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RToleranceData.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RToleranceData.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RToleranceData.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RToleranceData.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RToleranceData.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RToleranceData.prototype.setColor = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RToleranceData.prototype.getColor = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RToleranceData.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RToleranceData.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RToleranceData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RToleranceData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RToleranceData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RToleranceData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RToleranceData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RToleranceData.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RToleranceData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RToleranceData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RToleranceData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RToleranceData.prototype.isInside = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RToleranceData.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RToleranceData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RToleranceData.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RToleranceData.prototype.stretch = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RToleranceData.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RToleranceData.prototype.getType = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RToleranceData.prototype.castToShape = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.castToShape");
          return this.__PROXY__.castToShape(...args);
        };
    
        // function 
        RToleranceData.prototype.getLocation = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getLocation");
          return this.__PROXY__.getLocation(...args);
        };
    
        // function 
        RToleranceData.prototype.setLocation = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.setLocation");
          return this.__PROXY__.setLocation(...args);
        };
    
        // function 
        RToleranceData.prototype.getDirection = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getDirection");
          return this.__PROXY__.getDirection(...args);
        };
    
        // function 
        RToleranceData.prototype.setDirection = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.setDirection");
          return this.__PROXY__.setDirection(...args);
        };
    
        // function 
        RToleranceData.prototype.getText = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getText");
          return this.__PROXY__.getText(...args);
        };
    
        // function 
        RToleranceData.prototype.setText = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.setText");
          return this.__PROXY__.setText(...args);
        };
    
        // function 
        RToleranceData.prototype.getDimtxt = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getDimtxt");
          return this.__PROXY__.getDimtxt(...args);
        };
    
        // function 
        RToleranceData.prototype.setDimtxt = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.setDimtxt");
          return this.__PROXY__.setDimtxt(...args);
        };
    
        // function 
        RToleranceData.prototype.getDimscale = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getDimscale");
          return this.__PROXY__.getDimscale(...args);
        };
    
        // function 
        RToleranceData.prototype.setDimscale = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.setDimscale");
          return this.__PROXY__.setDimscale(...args);
        };
    
        // function 
        RToleranceData.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RToleranceData.prototype.getCorners = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getCorners");
          return this.__PROXY__.getCorners(...args);
        };
    
        // function 
        RToleranceData.prototype.getMiddels = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getMiddels");
          return this.__PROXY__.getMiddels(...args);
        };
    
        // function 
        RToleranceData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RToleranceData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RToleranceData.prototype.move = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RToleranceData.prototype.rotate = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RToleranceData.prototype.scale = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RToleranceData.prototype.mirror = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RToleranceData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RToleranceData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RToleranceData.prototype.getExploded = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getExploded");
          return this.__PROXY__.getExploded(...args);
        };
    
        // function 
        RToleranceData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RToleranceData.prototype.update = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RToleranceData.prototype.getTextLabels = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getTextLabels");
          return this.__PROXY__.getTextLabels(...args);
        };
    
        // function 
        RToleranceData.prototype.getFrame = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getFrame");
          return this.__PROXY__.getFrame(...args);
        };
    
        // function 
        RToleranceData.prototype.getRows = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getRows");
          return this.__PROXY__.getRows(...args);
        };
    
        // function 
        RToleranceData.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RToleranceData.prototype.clearStyleOverrides = function(...args) 
          
        {
          //print("JS: RToleranceData.prototype.clearStyleOverrides");
          return this.__PROXY__.clearStyleOverrides(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RToleranceData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RToleranceData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RToleranceData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      