
      // auto generated
      //var self;

      // class constructor:
      function RTextBasedData() {
        

        // should be RTextBasedData_BaseJs.call(this, engine):
        //RTextBasedData.prototype = new RTextBasedData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTextBasedData.getIdStatic()))) {

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
            qWarning("RTextBasedData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 15) {
    
            self = this;
            wrapper = new RTextBasedData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTextBasedData);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RTextBasedData_Wrapper(
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

      

        //copyProperties(this, wrapper, RTextBasedData);
  }

  
  else {
    
        print("RTextBasedData(): wrong number / type of arguments");
      
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

      //RTextBasedData.prototype = new RTextBasedData_BaseJs(engine);
      //RTextBasedData.prototype = new RTextBasedData_Wrapper(engine);
      RTextBasedData.prototype = new Object();

      RTextBasedData.prototype.toString = function() {
          //return "RTextBasedData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTextBasedData [JS]";
        };
      RTextBasedData.getObjectType = function() {
        return RJSType_RTextBasedData.getIdStatic();
      };

      RTextBasedData.prototype.getObjectType = function() {
        return RJSType_RTextBasedData.getIdStatic();
      };

      RTextBasedData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTextBasedData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RPainterPathSource.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: TextFlag
RTextBasedData.NoFlags = RTextBasedData_Wrapper.NoFlags;
RTextBasedData.Bold = RTextBasedData_Wrapper.Bold;
RTextBasedData.Italic = RTextBasedData_Wrapper.Italic;
RTextBasedData.Simple = RTextBasedData_Wrapper.Simple;
RTextBasedData.DimensionLabel = RTextBasedData_Wrapper.DimensionLabel;
RTextBasedData.Highlighted = RTextBasedData_Wrapper.Highlighted;
RTextBasedData.Backward = RTextBasedData_Wrapper.Backward;
RTextBasedData.UpsideDown = RTextBasedData_Wrapper.UpsideDown;


      // functions:
      
        // function 
        RTextBasedData.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RTextBasedData.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RTextBasedData.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RTextBasedData.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RTextBasedData.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RTextBasedData.prototype.setZ = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RTextBasedData.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RTextBasedData.prototype.getHull = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RTextBasedData.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RTextBasedData.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RTextBasedData.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RTextBasedData.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RTextBasedData.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RTextBasedData.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RTextBasedData.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RTextBasedData.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RTextBasedData.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RTextBasedData.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RTextBasedData.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RTextBasedData.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RTextBasedData.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RTextBasedData.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RTextBasedData.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RTextBasedData.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RTextBasedData.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RTextBasedData.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RTextBasedData.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RTextBasedData.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RTextBasedData.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RTextBasedData.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RTextBasedData.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RTextBasedData.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RTextBasedData.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RTextBasedData.prototype.setColor = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RTextBasedData.prototype.getColor = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RTextBasedData.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RTextBasedData.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RTextBasedData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RTextBasedData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RTextBasedData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RTextBasedData.prototype.isInside = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RTextBasedData.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RTextBasedData.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RTextBasedData.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RTextBasedData.prototype.stretch = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RTextBasedData.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RTextBasedData.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RTextBasedData.prototype.getType = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RTextBasedData.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RTextBasedData.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RTextBasedData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RTextBasedData.prototype.isSane = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RTextBasedData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RTextBasedData.prototype.getRotatedBoundingBox = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getRotatedBoundingBox");
          return this.__PROXY__.getRotatedBoundingBox(...args);
        };
    
        // function 
        RTextBasedData.prototype.getWidth = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getWidth");
          return this.__PROXY__.getWidth(...args);
        };
    
        // function 
        RTextBasedData.prototype.getHeight = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getHeight");
          return this.__PROXY__.getHeight(...args);
        };
    
        // function 
        RTextBasedData.prototype.sync = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.sync");
          return this.__PROXY__.sync(...args);
        };
    
        // function 
        RTextBasedData.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RTextBasedData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RTextBasedData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RTextBasedData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RTextBasedData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RTextBasedData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RTextBasedData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RTextBasedData.prototype.getPosition = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getPosition");
          return this.__PROXY__.getPosition(...args);
        };
    
        // function 
        RTextBasedData.prototype.setPosition = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setPosition");
          return this.__PROXY__.setPosition(...args);
        };
    
        // function 
        RTextBasedData.prototype.getAlignmentPoint = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getAlignmentPoint");
          return this.__PROXY__.getAlignmentPoint(...args);
        };
    
        // function 
        RTextBasedData.prototype.setAlignmentPoint = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setAlignmentPoint");
          return this.__PROXY__.setAlignmentPoint(...args);
        };
    
        // function 
        RTextBasedData.prototype.setText = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setText");
          return this.__PROXY__.setText(...args);
        };
    
        // function 
        RTextBasedData.prototype.getFontName = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getFontName");
          return this.__PROXY__.getFontName(...args);
        };
    
        // function 
        RTextBasedData.prototype.setFontName = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setFontName");
          return this.__PROXY__.setFontName(...args);
        };
    
        // function 
        RTextBasedData.prototype.getFontFile = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getFontFile");
          return this.__PROXY__.getFontFile(...args);
        };
    
        // function 
        RTextBasedData.prototype.setFontFile = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setFontFile");
          return this.__PROXY__.setFontFile(...args);
        };
    
        // function 
        RTextBasedData.prototype.isBold = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.isBold");
          return this.__PROXY__.isBold(...args);
        };
    
        // function 
        RTextBasedData.prototype.setBold = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setBold");
          return this.__PROXY__.setBold(...args);
        };
    
        // function 
        RTextBasedData.prototype.isItalic = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.isItalic");
          return this.__PROXY__.isItalic(...args);
        };
    
        // function 
        RTextBasedData.prototype.setItalic = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setItalic");
          return this.__PROXY__.setItalic(...args);
        };
    
        // function 
        RTextBasedData.prototype.getTextHeight = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getTextHeight");
          return this.__PROXY__.getTextHeight(...args);
        };
    
        // function 
        RTextBasedData.prototype.setTextHeight = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setTextHeight");
          return this.__PROXY__.setTextHeight(...args);
        };
    
        // function 
        RTextBasedData.prototype.getTextWidth = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getTextWidth");
          return this.__PROXY__.getTextWidth(...args);
        };
    
        // function 
        RTextBasedData.prototype.setTextWidth = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setTextWidth");
          return this.__PROXY__.setTextWidth(...args);
        };
    
        // function 
        RTextBasedData.prototype.setVAlign = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setVAlign");
          return this.__PROXY__.setVAlign(...args);
        };
    
        // function 
        RTextBasedData.prototype.getVAlign = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getVAlign");
          return this.__PROXY__.getVAlign(...args);
        };
    
        // function 
        RTextBasedData.prototype.setHAlign = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setHAlign");
          return this.__PROXY__.setHAlign(...args);
        };
    
        // function 
        RTextBasedData.prototype.getHAlign = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getHAlign");
          return this.__PROXY__.getHAlign(...args);
        };
    
        // function 
        RTextBasedData.prototype.setDrawingDirection = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setDrawingDirection");
          return this.__PROXY__.setDrawingDirection(...args);
        };
    
        // function 
        RTextBasedData.prototype.getDrawingDirection = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getDrawingDirection");
          return this.__PROXY__.getDrawingDirection(...args);
        };
    
        // function 
        RTextBasedData.prototype.setLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setLineSpacingStyle");
          return this.__PROXY__.setLineSpacingStyle(...args);
        };
    
        // function 
        RTextBasedData.prototype.getLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getLineSpacingStyle");
          return this.__PROXY__.getLineSpacingStyle(...args);
        };
    
        // function 
        RTextBasedData.prototype.setLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setLineSpacingFactor");
          return this.__PROXY__.setLineSpacingFactor(...args);
        };
    
        // function 
        RTextBasedData.prototype.getLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getLineSpacingFactor");
          return this.__PROXY__.getLineSpacingFactor(...args);
        };
    
        // function 
        RTextBasedData.prototype.setAngle = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setAngle");
          return this.__PROXY__.setAngle(...args);
        };
    
        // function 
        RTextBasedData.prototype.getAngle = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getAngle");
          return this.__PROXY__.getAngle(...args);
        };
    
        // function 
        RTextBasedData.prototype.setXScale = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setXScale");
          return this.__PROXY__.setXScale(...args);
        };
    
        // function 
        RTextBasedData.prototype.getXScale = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getXScale");
          return this.__PROXY__.getXScale(...args);
        };
    
        // function 
        RTextBasedData.prototype.setSimple = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setSimple");
          return this.__PROXY__.setSimple(...args);
        };
    
        // function 
        RTextBasedData.prototype.isSimple = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.isSimple");
          return this.__PROXY__.isSimple(...args);
        };
    
        // function 
        RTextBasedData.prototype.setBackward = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setBackward");
          return this.__PROXY__.setBackward(...args);
        };
    
        // function 
        RTextBasedData.prototype.isBackward = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.isBackward");
          return this.__PROXY__.isBackward(...args);
        };
    
        // function 
        RTextBasedData.prototype.setUpsideDown = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setUpsideDown");
          return this.__PROXY__.setUpsideDown(...args);
        };
    
        // function 
        RTextBasedData.prototype.isUpsideDown = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.isUpsideDown");
          return this.__PROXY__.isUpsideDown(...args);
        };
    
        // function 
        RTextBasedData.prototype.setDimensionLabel = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setDimensionLabel");
          return this.__PROXY__.setDimensionLabel(...args);
        };
    
        // function 
        RTextBasedData.prototype.isDimensionLabel = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.isDimensionLabel");
          return this.__PROXY__.isDimensionLabel(...args);
        };
    
        // function 
        RTextBasedData.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RTextBasedData.prototype.setHighlighted = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.setHighlighted");
          return this.__PROXY__.setHighlighted(...args);
        };
    
        // function 
        RTextBasedData.prototype.isHighlighted = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.isHighlighted");
          return this.__PROXY__.isHighlighted(...args);
        };
    
        // function 
        RTextBasedData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RTextBasedData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RTextBasedData.prototype.move = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RTextBasedData.prototype.rotate = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RTextBasedData.prototype.scale = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RTextBasedData.prototype.mirror = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RTextBasedData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RTextBasedData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RTextBasedData.prototype.getText = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getText");
          return this.__PROXY__.getText(...args);
        };
    
        // function 
        RTextBasedData.prototype.getRenderedText = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getRenderedText");
          return this.__PROXY__.getRenderedText(...args);
        };
    
        // function 
        RTextBasedData.prototype.getPlainText = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getPlainText");
          return this.__PROXY__.getPlainText(...args);
        };
    
        // function 
        RTextBasedData.prototype.getEscapedText = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getEscapedText");
          return this.__PROXY__.getEscapedText(...args);
        };
    
        // function 
        RTextBasedData.prototype.escapeUnicode = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.escapeUnicode");
          return this.__PROXY__.escapeUnicode(...args);
        };
    
        // function 
        RTextBasedData.prototype.getMainFont = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getMainFont");
          return this.__PROXY__.getMainFont(...args);
        };
    
        // function 
        RTextBasedData.prototype.update = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RTextBasedData.prototype.isDirty = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.isDirty");
          return this.__PROXY__.isDirty(...args);
        };
    
        // function 
        RTextBasedData.prototype.getPainterPaths = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getPainterPaths");
          return this.__PROXY__.getPainterPaths(...args);
        };
    
        // function 
        RTextBasedData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RTextBasedData.prototype.getExploded = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getExploded");
          return this.__PROXY__.getExploded(...args);
        };
    
        // function 
        RTextBasedData.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RTextBasedData.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RTextBasedData.prototype.getTextLayouts = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getTextLayouts");
          return this.__PROXY__.getTextLayouts(...args);
        };
    
        // function 
        RTextBasedData.prototype.getSimpleTextBlocks = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.getSimpleTextBlocks");
          return this.__PROXY__.getSimpleTextBlocks(...args);
        };
    
        // function 
        RTextBasedData.prototype.hasProxy = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.hasProxy");
          return this.__PROXY__.hasProxy(...args);
        };
    
        // function 
        RTextBasedData.prototype.toEscapedText = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.toEscapedText");
          return this.__PROXY__.toEscapedText(...args);
        };
    
        // function 
        RTextBasedData.prototype.toRichText = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.toRichText");
          return this.__PROXY__.toRichText(...args);
        };
    
        // function 
        RTextBasedData.prototype.to2D = function(...args) 
          
        {
          //print("JS: RTextBasedData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    

      // static functions:
      

        // static function 
        RTextBasedData.getRtti = function() 
          
        {
          //print("JS: RTextBasedData.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RTextBasedData_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RTextBasedData);
  }

  
  else {
    
        print("RTextBasedData.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextBasedData.escapeUnicode = function() 
          
        {
          //print("JS: RTextBasedData.escapeUnicode");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTextBasedData_WrapperSingletonInstance.escapeUnicode(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTextBasedData);
  }

  
  else {
    
        print("RTextBasedData.escapeUnicode(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextBasedData.hasProxy = function() 
          
        {
          //print("JS: RTextBasedData.hasProxy");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RTextBasedData_WrapperSingletonInstance.hasProxy(
                  
                );
              

        //copyProperties(this, wrapper, RTextBasedData);
  }

  
  else {
    
        print("RTextBasedData.hasProxy(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextBasedData.toEscapedText = function() 
          
        {
          //print("JS: RTextBasedData.toEscapedText");
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return RTextBasedData_WrapperSingletonInstance.toEscapedText(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RTextBasedData);
  }

  
  else {
    
        print("RTextBasedData.toEscapedText(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextBasedData.toRichText = function() 
          
        {
          //print("JS: RTextBasedData.toRichText");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTextBasedData_WrapperSingletonInstance.toRichText(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTextBasedData);
  }

  
  else {
    
        print("RTextBasedData.toRichText(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RTextBasedData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTextBasedData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RTextBasedData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      