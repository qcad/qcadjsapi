
      // auto generated
      //var self;

      // class constructor:
      function RTextData() {
        

        // should be RTextData_BaseJs.call(this, engine):
        //RTextData.prototype = new RTextData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTextData.getIdStatic()))) {

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
            qWarning("RTextData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 15) {
    
            self = this;
            wrapper = new RTextData_Wrapper(
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

      

        //copyProperties(this, wrapper, RTextData);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RTextData_Wrapper(
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

      

        //copyProperties(this, wrapper, RTextData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RTextData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTextData);
  }

  
  else {
    
        print("RTextData(): wrong number / type of arguments");
      
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

      //RTextData.prototype = new RTextData_BaseJs(engine);
      //RTextData.prototype = new RTextData_Wrapper(engine);
      RTextData.prototype = new Object();

      RTextData.prototype.toString = function() {
          //return "RTextData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTextData [JS]";
        };
      RTextData.getObjectType = function() {
        return RJSType_RTextData.getIdStatic();
      };

      RTextData.prototype.getObjectType = function() {
        return RJSType_RTextData.getIdStatic();
      };

      RTextData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTextData.getIdStatic()) {
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
RTextData.NoFlags = RTextData_Wrapper.NoFlags;
RTextData.Bold = RTextData_Wrapper.Bold;
RTextData.Italic = RTextData_Wrapper.Italic;
RTextData.Simple = RTextData_Wrapper.Simple;
RTextData.DimensionLabel = RTextData_Wrapper.DimensionLabel;
RTextData.Highlighted = RTextData_Wrapper.Highlighted;
RTextData.Backward = RTextData_Wrapper.Backward;
RTextData.UpsideDown = RTextData_Wrapper.UpsideDown;


      // functions:
      
        // function 
        RTextData.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RTextData.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RTextData.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RTextData.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RTextData.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RTextData.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RTextData.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RTextData.prototype.setZ = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RTextData.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RTextData.prototype.getHull = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RTextData.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RTextData.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RTextData.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RTextData.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RTextData.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RTextData.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RTextData.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RTextData.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RTextData.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RTextData.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RTextData.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RTextData.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RTextData.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RTextData.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RTextData.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RTextData.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RTextData.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RTextData.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RTextData.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RTextData.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RTextData.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RTextData.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RTextData.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RTextData.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RTextData.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RTextData.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RTextData.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RTextData.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RTextData.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RTextData.prototype.setColor = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RTextData.prototype.getColor = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RTextData.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RTextData.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RTextData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RTextData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RTextData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RTextData.prototype.isInside = function(...args) 
          
        {
          //print("JS: RTextData.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RTextData.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RTextData.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RTextData.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RTextData.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RTextData.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RTextData.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RTextData.prototype.stretch = function(...args) 
          
        {
          //print("JS: RTextData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RTextData.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RTextData.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RTextData.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RTextData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RTextData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RTextData.prototype.isSane = function(...args) 
          
        {
          //print("JS: RTextData.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RTextData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RTextData.prototype.getRotatedBoundingBox = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getRotatedBoundingBox");
          return this.__PROXY__.getRotatedBoundingBox(...args);
        };
    
        // function 
        RTextData.prototype.getWidth = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getWidth");
          return this.__PROXY__.getWidth(...args);
        };
    
        // function 
        RTextData.prototype.getHeight = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getHeight");
          return this.__PROXY__.getHeight(...args);
        };
    
        // function 
        RTextData.prototype.sync = function(...args) 
          
        {
          //print("JS: RTextData.prototype.sync");
          return this.__PROXY__.sync(...args);
        };
    
        // function 
        RTextData.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RTextData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RTextData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RTextData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RTextData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RTextData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RTextData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RTextData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RTextData.prototype.getPosition = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getPosition");
          return this.__PROXY__.getPosition(...args);
        };
    
        // function 
        RTextData.prototype.setPosition = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setPosition");
          return this.__PROXY__.setPosition(...args);
        };
    
        // function 
        RTextData.prototype.getAlignmentPoint = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getAlignmentPoint");
          return this.__PROXY__.getAlignmentPoint(...args);
        };
    
        // function 
        RTextData.prototype.setAlignmentPoint = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setAlignmentPoint");
          return this.__PROXY__.setAlignmentPoint(...args);
        };
    
        // function 
        RTextData.prototype.setText = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setText");
          return this.__PROXY__.setText(...args);
        };
    
        // function 
        RTextData.prototype.getFontName = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getFontName");
          return this.__PROXY__.getFontName(...args);
        };
    
        // function 
        RTextData.prototype.setFontName = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setFontName");
          return this.__PROXY__.setFontName(...args);
        };
    
        // function 
        RTextData.prototype.getFontFile = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getFontFile");
          return this.__PROXY__.getFontFile(...args);
        };
    
        // function 
        RTextData.prototype.setFontFile = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setFontFile");
          return this.__PROXY__.setFontFile(...args);
        };
    
        // function 
        RTextData.prototype.isBold = function(...args) 
          
        {
          //print("JS: RTextData.prototype.isBold");
          return this.__PROXY__.isBold(...args);
        };
    
        // function 
        RTextData.prototype.setBold = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setBold");
          return this.__PROXY__.setBold(...args);
        };
    
        // function 
        RTextData.prototype.isItalic = function(...args) 
          
        {
          //print("JS: RTextData.prototype.isItalic");
          return this.__PROXY__.isItalic(...args);
        };
    
        // function 
        RTextData.prototype.setItalic = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setItalic");
          return this.__PROXY__.setItalic(...args);
        };
    
        // function 
        RTextData.prototype.getTextHeight = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getTextHeight");
          return this.__PROXY__.getTextHeight(...args);
        };
    
        // function 
        RTextData.prototype.setTextHeight = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setTextHeight");
          return this.__PROXY__.setTextHeight(...args);
        };
    
        // function 
        RTextData.prototype.getTextWidth = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getTextWidth");
          return this.__PROXY__.getTextWidth(...args);
        };
    
        // function 
        RTextData.prototype.setTextWidth = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setTextWidth");
          return this.__PROXY__.setTextWidth(...args);
        };
    
        // function 
        RTextData.prototype.setVAlign = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setVAlign");
          return this.__PROXY__.setVAlign(...args);
        };
    
        // function 
        RTextData.prototype.getVAlign = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getVAlign");
          return this.__PROXY__.getVAlign(...args);
        };
    
        // function 
        RTextData.prototype.setHAlign = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setHAlign");
          return this.__PROXY__.setHAlign(...args);
        };
    
        // function 
        RTextData.prototype.getHAlign = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getHAlign");
          return this.__PROXY__.getHAlign(...args);
        };
    
        // function 
        RTextData.prototype.setDrawingDirection = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setDrawingDirection");
          return this.__PROXY__.setDrawingDirection(...args);
        };
    
        // function 
        RTextData.prototype.getDrawingDirection = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getDrawingDirection");
          return this.__PROXY__.getDrawingDirection(...args);
        };
    
        // function 
        RTextData.prototype.setLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setLineSpacingStyle");
          return this.__PROXY__.setLineSpacingStyle(...args);
        };
    
        // function 
        RTextData.prototype.getLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getLineSpacingStyle");
          return this.__PROXY__.getLineSpacingStyle(...args);
        };
    
        // function 
        RTextData.prototype.setLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setLineSpacingFactor");
          return this.__PROXY__.setLineSpacingFactor(...args);
        };
    
        // function 
        RTextData.prototype.getLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getLineSpacingFactor");
          return this.__PROXY__.getLineSpacingFactor(...args);
        };
    
        // function 
        RTextData.prototype.setAngle = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setAngle");
          return this.__PROXY__.setAngle(...args);
        };
    
        // function 
        RTextData.prototype.getAngle = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getAngle");
          return this.__PROXY__.getAngle(...args);
        };
    
        // function 
        RTextData.prototype.setXScale = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setXScale");
          return this.__PROXY__.setXScale(...args);
        };
    
        // function 
        RTextData.prototype.getXScale = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getXScale");
          return this.__PROXY__.getXScale(...args);
        };
    
        // function 
        RTextData.prototype.setSimple = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setSimple");
          return this.__PROXY__.setSimple(...args);
        };
    
        // function 
        RTextData.prototype.isSimple = function(...args) 
          
        {
          //print("JS: RTextData.prototype.isSimple");
          return this.__PROXY__.isSimple(...args);
        };
    
        // function 
        RTextData.prototype.setBackward = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setBackward");
          return this.__PROXY__.setBackward(...args);
        };
    
        // function 
        RTextData.prototype.isBackward = function(...args) 
          
        {
          //print("JS: RTextData.prototype.isBackward");
          return this.__PROXY__.isBackward(...args);
        };
    
        // function 
        RTextData.prototype.setUpsideDown = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setUpsideDown");
          return this.__PROXY__.setUpsideDown(...args);
        };
    
        // function 
        RTextData.prototype.isUpsideDown = function(...args) 
          
        {
          //print("JS: RTextData.prototype.isUpsideDown");
          return this.__PROXY__.isUpsideDown(...args);
        };
    
        // function 
        RTextData.prototype.setDimensionLabel = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setDimensionLabel");
          return this.__PROXY__.setDimensionLabel(...args);
        };
    
        // function 
        RTextData.prototype.isDimensionLabel = function(...args) 
          
        {
          //print("JS: RTextData.prototype.isDimensionLabel");
          return this.__PROXY__.isDimensionLabel(...args);
        };
    
        // function 
        RTextData.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RTextData.prototype.setHighlighted = function(...args) 
          
        {
          //print("JS: RTextData.prototype.setHighlighted");
          return this.__PROXY__.setHighlighted(...args);
        };
    
        // function 
        RTextData.prototype.isHighlighted = function(...args) 
          
        {
          //print("JS: RTextData.prototype.isHighlighted");
          return this.__PROXY__.isHighlighted(...args);
        };
    
        // function 
        RTextData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RTextData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RTextData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RTextData.prototype.move = function(...args) 
          
        {
          //print("JS: RTextData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RTextData.prototype.rotate = function(...args) 
          
        {
          //print("JS: RTextData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RTextData.prototype.scale = function(...args) 
          
        {
          //print("JS: RTextData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RTextData.prototype.mirror = function(...args) 
          
        {
          //print("JS: RTextData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RTextData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RTextData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RTextData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RTextData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RTextData.prototype.getText = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getText");
          return this.__PROXY__.getText(...args);
        };
    
        // function 
        RTextData.prototype.getRenderedText = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getRenderedText");
          return this.__PROXY__.getRenderedText(...args);
        };
    
        // function 
        RTextData.prototype.getPlainText = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getPlainText");
          return this.__PROXY__.getPlainText(...args);
        };
    
        // function 
        RTextData.prototype.getEscapedText = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getEscapedText");
          return this.__PROXY__.getEscapedText(...args);
        };
    
        // function 
        RTextData.prototype.getMainFont = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getMainFont");
          return this.__PROXY__.getMainFont(...args);
        };
    
        // function 
        RTextData.prototype.update = function(...args) 
          
        {
          //print("JS: RTextData.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RTextData.prototype.isDirty = function(...args) 
          
        {
          //print("JS: RTextData.prototype.isDirty");
          return this.__PROXY__.isDirty(...args);
        };
    
        // function 
        RTextData.prototype.getPainterPaths = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getPainterPaths");
          return this.__PROXY__.getPainterPaths(...args);
        };
    
        // function 
        RTextData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RTextData.prototype.getExploded = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getExploded");
          return this.__PROXY__.getExploded(...args);
        };
    
        // function 
        RTextData.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RTextData.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RTextData.prototype.getTextLayouts = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getTextLayouts");
          return this.__PROXY__.getTextLayouts(...args);
        };
    
        // function 
        RTextData.prototype.getSimpleTextBlocks = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getSimpleTextBlocks");
          return this.__PROXY__.getSimpleTextBlocks(...args);
        };
    
        // function 
        RTextData.prototype.to2D = function(...args) 
          
        {
          //print("JS: RTextData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RTextData.prototype.getType = function(...args) 
          
        {
          //print("JS: RTextData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RTextData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTextData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RTextData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      