
      // auto generated
      //var self;

      // class constructor:
      function RBlockReferenceData() {
        

        // should be RBlockReferenceData_BaseJs.call(this, engine):
        //RBlockReferenceData.prototype = new RBlockReferenceData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RBlockReferenceData.getIdStatic()))) {

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
            qWarning("RBlockReferenceData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 4 &&
          arguments.length <= 9) {
    
            self = this;
            wrapper = new RBlockReferenceData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RBlockReferenceData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RBlockReferenceData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RBlockReferenceData);
  }

  
  else {
    
        print("RBlockReferenceData(): wrong number / type of arguments");
      
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

      //RBlockReferenceData.prototype = new RBlockReferenceData_BaseJs(engine);
      //RBlockReferenceData.prototype = new RBlockReferenceData_Wrapper(engine);
      RBlockReferenceData.prototype = new Object();

      RBlockReferenceData.prototype.toString = function() {
          //return "RBlockReferenceData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RBlockReferenceData [JS]";
        };
      RBlockReferenceData.getObjectType = function() {
        return RJSType_RBlockReferenceData.getIdStatic();
      };

      RBlockReferenceData.prototype.getObjectType = function() {
        return RJSType_RBlockReferenceData.getIdStatic();
      };

      RBlockReferenceData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RBlockReferenceData.getIdStatic()) {
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
        RBlockReferenceData.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.isSane = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.setZ = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getHull = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.setColor = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getColor = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.isInside = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.stretch = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getType = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.to2D = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getQueryBoxInBlockCoordinates = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getQueryBoxInBlockCoordinates");
          return this.__PROXY__.getQueryBoxInBlockCoordinates(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.move = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.rotate = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.mirror = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.scale = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.setReferencedBlockId = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.setReferencedBlockId");
          return this.__PROXY__.setReferencedBlockId(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.groundReferencedBlockId = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.groundReferencedBlockId");
          return this.__PROXY__.groundReferencedBlockId(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getReferencedBlockId = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getReferencedBlockId");
          return this.__PROXY__.getReferencedBlockId(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.setReferencedBlockName = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.setReferencedBlockName");
          return this.__PROXY__.setReferencedBlockName(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getReferencedBlockName = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getReferencedBlockName");
          return this.__PROXY__.getReferencedBlockName(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getPosition = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getPosition");
          return this.__PROXY__.getPosition(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.setPosition = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.setPosition");
          return this.__PROXY__.setPosition(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getScaleFactors = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getScaleFactors");
          return this.__PROXY__.getScaleFactors(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.setScaleFactors = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.setScaleFactors");
          return this.__PROXY__.setScaleFactors(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getRotation = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getRotation");
          return this.__PROXY__.getRotation(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.setRotation = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.setRotation");
          return this.__PROXY__.setRotation(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getColumnCount = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getColumnCount");
          return this.__PROXY__.getColumnCount(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.setColumnCount = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.setColumnCount");
          return this.__PROXY__.setColumnCount(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getRowCount = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getRowCount");
          return this.__PROXY__.getRowCount(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.setRowCount = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.setRowCount");
          return this.__PROXY__.setRowCount(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getColumnSpacing = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getColumnSpacing");
          return this.__PROXY__.getColumnSpacing(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.setColumnSpacing = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.setColumnSpacing");
          return this.__PROXY__.setColumnSpacing(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getRowSpacing = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getRowSpacing");
          return this.__PROXY__.getRowSpacing(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.setRowSpacing = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.setRowSpacing");
          return this.__PROXY__.setRowSpacing(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.update = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.queryEntity = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.queryEntity");
          return this.__PROXY__.queryEntity(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.applyTransformationTo = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.applyTransformationTo");
          return this.__PROXY__.applyTransformationTo(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getTransform = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getTransform");
          return this.__PROXY__.getTransform(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.getColumnRowOffset = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.getColumnRowOffset");
          return this.__PROXY__.getColumnRowOffset(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.applyColumnRowOffsetTo = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.applyColumnRowOffsetTo");
          return this.__PROXY__.applyColumnRowOffsetTo(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.mapToBlock = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.mapToBlock");
          return this.__PROXY__.mapToBlock(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.isPixelUnit = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.isPixelUnit");
          return this.__PROXY__.isPixelUnit(...args);
        };
    
        // function 
        RBlockReferenceData.prototype.copy = function(...args) 
          
        {
          //print("JS: RBlockReferenceData.prototype.copy");
          return this.__PROXY__.copy(...args);
        };
    

      // static functions:
      

        // static function 
        RBlockReferenceData.getRtti = function() 
          
        {
          //print("JS: RBlockReferenceData.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RBlockReferenceData_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RBlockReferenceData);
  }

  
  else {
    
        print("RBlockReferenceData.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RBlockReferenceData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RBlockReferenceData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RBlockReferenceData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      