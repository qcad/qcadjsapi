
      // auto generated
      //var self;

      // class constructor:
      function RAttributeData() {
        

        // should be RAttributeData_BaseJs.call(this, engine):
        //RAttributeData.prototype = new RAttributeData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RAttributeData.getIdStatic()))) {

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
            qWarning("RAttributeData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RAttributeData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RAttributeData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RAttributeData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RAttributeData);
  }

  
  else {
    
        print("RAttributeData(): wrong number / type of arguments");
      
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

      //RAttributeData.prototype = new RAttributeData_BaseJs(engine);
      //RAttributeData.prototype = new RAttributeData_Wrapper(engine);
      RAttributeData.prototype = new Object();

      RAttributeData.prototype.toString = function() {
          //return "RAttributeData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RAttributeData [JS]";
        };
      RAttributeData.getObjectType = function() {
        return RJSType_RAttributeData.getIdStatic();
      };

      RAttributeData.prototype.getObjectType = function() {
        return RJSType_RAttributeData.getIdStatic();
      };

      RAttributeData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RAttributeData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RTextBasedData.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: TextFlag
RAttributeData.NoFlags = RAttributeData_Wrapper.NoFlags;
RAttributeData.Bold = RAttributeData_Wrapper.Bold;
RAttributeData.Italic = RAttributeData_Wrapper.Italic;
RAttributeData.Simple = RAttributeData_Wrapper.Simple;
RAttributeData.DimensionLabel = RAttributeData_Wrapper.DimensionLabel;
RAttributeData.Highlighted = RAttributeData_Wrapper.Highlighted;
RAttributeData.Backward = RAttributeData_Wrapper.Backward;
RAttributeData.UpsideDown = RAttributeData_Wrapper.UpsideDown;


      // functions:
      
        // function 
        RAttributeData.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RAttributeData.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RAttributeData.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RAttributeData.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RAttributeData.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RAttributeData.prototype.setZ = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RAttributeData.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RAttributeData.prototype.getHull = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RAttributeData.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RAttributeData.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RAttributeData.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RAttributeData.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RAttributeData.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RAttributeData.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RAttributeData.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RAttributeData.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RAttributeData.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RAttributeData.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RAttributeData.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RAttributeData.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RAttributeData.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RAttributeData.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RAttributeData.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RAttributeData.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RAttributeData.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RAttributeData.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RAttributeData.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RAttributeData.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RAttributeData.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RAttributeData.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RAttributeData.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RAttributeData.prototype.setColor = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RAttributeData.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RAttributeData.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RAttributeData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RAttributeData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RAttributeData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RAttributeData.prototype.isInside = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RAttributeData.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RAttributeData.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RAttributeData.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RAttributeData.prototype.stretch = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RAttributeData.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RAttributeData.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RAttributeData.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RAttributeData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RAttributeData.prototype.isSane = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RAttributeData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RAttributeData.prototype.getRotatedBoundingBox = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getRotatedBoundingBox");
          return this.__PROXY__.getRotatedBoundingBox(...args);
        };
    
        // function 
        RAttributeData.prototype.getWidth = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getWidth");
          return this.__PROXY__.getWidth(...args);
        };
    
        // function 
        RAttributeData.prototype.getHeight = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getHeight");
          return this.__PROXY__.getHeight(...args);
        };
    
        // function 
        RAttributeData.prototype.sync = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.sync");
          return this.__PROXY__.sync(...args);
        };
    
        // function 
        RAttributeData.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RAttributeData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RAttributeData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RAttributeData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RAttributeData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RAttributeData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RAttributeData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RAttributeData.prototype.getPosition = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getPosition");
          return this.__PROXY__.getPosition(...args);
        };
    
        // function 
        RAttributeData.prototype.setPosition = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setPosition");
          return this.__PROXY__.setPosition(...args);
        };
    
        // function 
        RAttributeData.prototype.getAlignmentPoint = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getAlignmentPoint");
          return this.__PROXY__.getAlignmentPoint(...args);
        };
    
        // function 
        RAttributeData.prototype.setAlignmentPoint = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setAlignmentPoint");
          return this.__PROXY__.setAlignmentPoint(...args);
        };
    
        // function 
        RAttributeData.prototype.setText = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setText");
          return this.__PROXY__.setText(...args);
        };
    
        // function 
        RAttributeData.prototype.getFontName = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getFontName");
          return this.__PROXY__.getFontName(...args);
        };
    
        // function 
        RAttributeData.prototype.setFontName = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setFontName");
          return this.__PROXY__.setFontName(...args);
        };
    
        // function 
        RAttributeData.prototype.getFontFile = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getFontFile");
          return this.__PROXY__.getFontFile(...args);
        };
    
        // function 
        RAttributeData.prototype.setFontFile = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setFontFile");
          return this.__PROXY__.setFontFile(...args);
        };
    
        // function 
        RAttributeData.prototype.isBold = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.isBold");
          return this.__PROXY__.isBold(...args);
        };
    
        // function 
        RAttributeData.prototype.setBold = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setBold");
          return this.__PROXY__.setBold(...args);
        };
    
        // function 
        RAttributeData.prototype.isItalic = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.isItalic");
          return this.__PROXY__.isItalic(...args);
        };
    
        // function 
        RAttributeData.prototype.setItalic = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setItalic");
          return this.__PROXY__.setItalic(...args);
        };
    
        // function 
        RAttributeData.prototype.getTextHeight = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getTextHeight");
          return this.__PROXY__.getTextHeight(...args);
        };
    
        // function 
        RAttributeData.prototype.setTextHeight = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setTextHeight");
          return this.__PROXY__.setTextHeight(...args);
        };
    
        // function 
        RAttributeData.prototype.getTextWidth = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getTextWidth");
          return this.__PROXY__.getTextWidth(...args);
        };
    
        // function 
        RAttributeData.prototype.setTextWidth = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setTextWidth");
          return this.__PROXY__.setTextWidth(...args);
        };
    
        // function 
        RAttributeData.prototype.setVAlign = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setVAlign");
          return this.__PROXY__.setVAlign(...args);
        };
    
        // function 
        RAttributeData.prototype.getVAlign = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getVAlign");
          return this.__PROXY__.getVAlign(...args);
        };
    
        // function 
        RAttributeData.prototype.setHAlign = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setHAlign");
          return this.__PROXY__.setHAlign(...args);
        };
    
        // function 
        RAttributeData.prototype.getHAlign = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getHAlign");
          return this.__PROXY__.getHAlign(...args);
        };
    
        // function 
        RAttributeData.prototype.setDrawingDirection = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setDrawingDirection");
          return this.__PROXY__.setDrawingDirection(...args);
        };
    
        // function 
        RAttributeData.prototype.getDrawingDirection = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getDrawingDirection");
          return this.__PROXY__.getDrawingDirection(...args);
        };
    
        // function 
        RAttributeData.prototype.setLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setLineSpacingStyle");
          return this.__PROXY__.setLineSpacingStyle(...args);
        };
    
        // function 
        RAttributeData.prototype.getLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getLineSpacingStyle");
          return this.__PROXY__.getLineSpacingStyle(...args);
        };
    
        // function 
        RAttributeData.prototype.setLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setLineSpacingFactor");
          return this.__PROXY__.setLineSpacingFactor(...args);
        };
    
        // function 
        RAttributeData.prototype.getLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getLineSpacingFactor");
          return this.__PROXY__.getLineSpacingFactor(...args);
        };
    
        // function 
        RAttributeData.prototype.setAngle = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setAngle");
          return this.__PROXY__.setAngle(...args);
        };
    
        // function 
        RAttributeData.prototype.getAngle = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getAngle");
          return this.__PROXY__.getAngle(...args);
        };
    
        // function 
        RAttributeData.prototype.setXScale = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setXScale");
          return this.__PROXY__.setXScale(...args);
        };
    
        // function 
        RAttributeData.prototype.getXScale = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getXScale");
          return this.__PROXY__.getXScale(...args);
        };
    
        // function 
        RAttributeData.prototype.setSimple = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setSimple");
          return this.__PROXY__.setSimple(...args);
        };
    
        // function 
        RAttributeData.prototype.isSimple = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.isSimple");
          return this.__PROXY__.isSimple(...args);
        };
    
        // function 
        RAttributeData.prototype.setBackward = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setBackward");
          return this.__PROXY__.setBackward(...args);
        };
    
        // function 
        RAttributeData.prototype.isBackward = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.isBackward");
          return this.__PROXY__.isBackward(...args);
        };
    
        // function 
        RAttributeData.prototype.setUpsideDown = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setUpsideDown");
          return this.__PROXY__.setUpsideDown(...args);
        };
    
        // function 
        RAttributeData.prototype.isUpsideDown = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.isUpsideDown");
          return this.__PROXY__.isUpsideDown(...args);
        };
    
        // function 
        RAttributeData.prototype.setDimensionLabel = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setDimensionLabel");
          return this.__PROXY__.setDimensionLabel(...args);
        };
    
        // function 
        RAttributeData.prototype.isDimensionLabel = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.isDimensionLabel");
          return this.__PROXY__.isDimensionLabel(...args);
        };
    
        // function 
        RAttributeData.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RAttributeData.prototype.setHighlighted = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setHighlighted");
          return this.__PROXY__.setHighlighted(...args);
        };
    
        // function 
        RAttributeData.prototype.isHighlighted = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.isHighlighted");
          return this.__PROXY__.isHighlighted(...args);
        };
    
        // function 
        RAttributeData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RAttributeData.prototype.move = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RAttributeData.prototype.rotate = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RAttributeData.prototype.scale = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RAttributeData.prototype.mirror = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RAttributeData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RAttributeData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RAttributeData.prototype.getText = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getText");
          return this.__PROXY__.getText(...args);
        };
    
        // function 
        RAttributeData.prototype.getPlainText = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getPlainText");
          return this.__PROXY__.getPlainText(...args);
        };
    
        // function 
        RAttributeData.prototype.getEscapedText = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getEscapedText");
          return this.__PROXY__.getEscapedText(...args);
        };
    
        // function 
        RAttributeData.prototype.getMainFont = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getMainFont");
          return this.__PROXY__.getMainFont(...args);
        };
    
        // function 
        RAttributeData.prototype.update = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RAttributeData.prototype.isDirty = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.isDirty");
          return this.__PROXY__.isDirty(...args);
        };
    
        // function 
        RAttributeData.prototype.getPainterPaths = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getPainterPaths");
          return this.__PROXY__.getPainterPaths(...args);
        };
    
        // function 
        RAttributeData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RAttributeData.prototype.getExploded = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getExploded");
          return this.__PROXY__.getExploded(...args);
        };
    
        // function 
        RAttributeData.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RAttributeData.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RAttributeData.prototype.getTextLayouts = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getTextLayouts");
          return this.__PROXY__.getTextLayouts(...args);
        };
    
        // function 
        RAttributeData.prototype.getSimpleTextBlocks = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getSimpleTextBlocks");
          return this.__PROXY__.getSimpleTextBlocks(...args);
        };
    
        // function 
        RAttributeData.prototype.to2D = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RAttributeData.prototype.getType = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RAttributeData.prototype.getRenderedText = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getRenderedText");
          return this.__PROXY__.getRenderedText(...args);
        };
    
        // function 
        RAttributeData.prototype.getTag = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getTag");
          return this.__PROXY__.getTag(...args);
        };
    
        // function 
        RAttributeData.prototype.setTag = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setTag");
          return this.__PROXY__.setTag(...args);
        };
    
        // function 
        RAttributeData.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RAttributeData.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RAttributeData.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RAttributeData.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RAttributeData.prototype.getColor = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RAttributeData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RAttributeData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RAttributeData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RAttributeData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RAttributeData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      