
      // auto generated
      //var self;

      // class constructor:
      function RDimensionData() {
        

        // should be RDimensionData_BaseJs.call(this, engine):
        //RDimensionData.prototype = new RDimensionData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimensionData.getIdStatic()))) {

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
            qWarning("RDimensionData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 9) {
    
            self = this;
            wrapper = new RDimensionData_Wrapper(
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

      

        //copyProperties(this, wrapper, RDimensionData);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RDimensionData_Wrapper(
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

      

        //copyProperties(this, wrapper, RDimensionData);
  }

  
  else {
    
        print("RDimensionData(): wrong number / type of arguments");
      
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

      //RDimensionData.prototype = new RDimensionData_BaseJs(engine);
      //RDimensionData.prototype = new RDimensionData_Wrapper(engine);
      RDimensionData.prototype = new Object();

      RDimensionData.prototype.toString = function() {
          //return "RDimensionData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimensionData [JS]";
        };
      RDimensionData.getObjectType = function() {
        return RJSType_RDimensionData.getIdStatic();
      };

      RDimensionData.prototype.getObjectType = function() {
        return RJSType_RDimensionData.getIdStatic();
      };

      RDimensionData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimensionData.getIdStatic()) {
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
        RDimensionData.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RDimensionData.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RDimensionData.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RDimensionData.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RDimensionData.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RDimensionData.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RDimensionData.prototype.setZ = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RDimensionData.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RDimensionData.prototype.getHull = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RDimensionData.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RDimensionData.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RDimensionData.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RDimensionData.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RDimensionData.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RDimensionData.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RDimensionData.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RDimensionData.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RDimensionData.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RDimensionData.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RDimensionData.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RDimensionData.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RDimensionData.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RDimensionData.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RDimensionData.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RDimensionData.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RDimensionData.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RDimensionData.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RDimensionData.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RDimensionData.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RDimensionData.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RDimensionData.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RDimensionData.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RDimensionData.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RDimensionData.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RDimensionData.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RDimensionData.prototype.setColor = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RDimensionData.prototype.getColor = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RDimensionData.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RDimensionData.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RDimensionData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RDimensionData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RDimensionData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RDimensionData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RDimensionData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RDimensionData.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RDimensionData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RDimensionData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RDimensionData.prototype.isInside = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RDimensionData.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RDimensionData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RDimensionData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RDimensionData.prototype.stretch = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RDimensionData.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RDimensionData.prototype.getType = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RDimensionData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RDimensionData.prototype.render = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.render");
          return this.__PROXY__.render(...args);
        };
    
        // function 
        RDimensionData.prototype.updateBoundingBox = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.updateBoundingBox");
          return this.__PROXY__.updateBoundingBox(...args);
        };
    
        // function 
        RDimensionData.prototype.updateTextPositionCenter = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.updateTextPositionCenter");
          return this.__PROXY__.updateTextPositionCenter(...args);
        };
    
        // function 
        RDimensionData.prototype.updateTextPositionSide = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.updateTextPositionSide");
          return this.__PROXY__.updateTextPositionSide(...args);
        };
    
        // function 
        RDimensionData.prototype.updateTextData = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.updateTextData");
          return this.__PROXY__.updateTextData(...args);
        };
    
        // function 
        RDimensionData.prototype.updateShapes = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.updateShapes");
          return this.__PROXY__.updateShapes(...args);
        };
    
        // function 
        RDimensionData.prototype.updateArrowPos1 = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.updateArrowPos1");
          return this.__PROXY__.updateArrowPos1(...args);
        };
    
        // function 
        RDimensionData.prototype.updateArrowPos2 = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.updateArrowPos2");
          return this.__PROXY__.updateArrowPos2(...args);
        };
    
        // function 
        RDimensionData.prototype.clearStyleOverrides = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.clearStyleOverrides");
          return this.__PROXY__.clearStyleOverrides(...args);
        };
    
        // function 
        RDimensionData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RDimensionData.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RDimensionData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RDimensionData.prototype.isSane = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RDimensionData.prototype.setDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setDefinitionPoint");
          return this.__PROXY__.setDefinitionPoint(...args);
        };
    
        // function 
        RDimensionData.prototype.getDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDefinitionPoint");
          return this.__PROXY__.getDefinitionPoint(...args);
        };
    
        // function 
        RDimensionData.prototype.setText = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setText");
          return this.__PROXY__.setText(...args);
        };
    
        // function 
        RDimensionData.prototype.getText = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getText");
          return this.__PROXY__.getText(...args);
        };
    
        // function 
        RDimensionData.prototype.setUpperTolerance = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setUpperTolerance");
          return this.__PROXY__.setUpperTolerance(...args);
        };
    
        // function 
        RDimensionData.prototype.setLowerTolerance = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setLowerTolerance");
          return this.__PROXY__.setLowerTolerance(...args);
        };
    
        // function 
        RDimensionData.prototype.setTextPosition = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setTextPosition");
          return this.__PROXY__.setTextPosition(...args);
        };
    
        // function 
        RDimensionData.prototype.getTextPosition = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getTextPosition");
          return this.__PROXY__.getTextPosition(...args);
        };
    
        // function 
        RDimensionData.prototype.setFontName = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setFontName");
          return this.__PROXY__.setFontName(...args);
        };
    
        // function 
        RDimensionData.prototype.getFontName = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getFontName");
          return this.__PROXY__.getFontName(...args);
        };
    
        // function 
        RDimensionData.prototype.setDimBlockName = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setDimBlockName");
          return this.__PROXY__.setDimBlockName(...args);
        };
    
        // function 
        RDimensionData.prototype.getDimBlockName = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDimBlockName");
          return this.__PROXY__.getDimBlockName(...args);
        };
    
        // function 
        RDimensionData.prototype.hasOverrides = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.hasOverrides");
          return this.__PROXY__.hasOverrides(...args);
        };
    
        // function 
        RDimensionData.prototype.hasOverride = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.hasOverride");
          return this.__PROXY__.hasOverride(...args);
        };
    
        // function 
        RDimensionData.prototype.getOverrides = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getOverrides");
          return this.__PROXY__.getOverrides(...args);
        };
    
        // function 
        RDimensionData.prototype.setDimXVariant = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setDimXVariant");
          return this.__PROXY__.setDimXVariant(...args);
        };
    
        // function 
        RDimensionData.prototype.setDimXDouble = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setDimXDouble");
          return this.__PROXY__.setDimXDouble(...args);
        };
    
        // function 
        RDimensionData.prototype.setDimXInt = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setDimXInt");
          return this.__PROXY__.setDimXInt(...args);
        };
    
        // function 
        RDimensionData.prototype.setDimXBool = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setDimXBool");
          return this.__PROXY__.setDimXBool(...args);
        };
    
        // function 
        RDimensionData.prototype.setDimXColor = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setDimXColor");
          return this.__PROXY__.setDimXColor(...args);
        };
    
        // function 
        RDimensionData.prototype.getDimXVariant = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDimXVariant");
          return this.__PROXY__.getDimXVariant(...args);
        };
    
        // function 
        RDimensionData.prototype.getVariantOverride = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getVariantOverride");
          return this.__PROXY__.getVariantOverride(...args);
        };
    
        // function 
        RDimensionData.prototype.getDimXDouble = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDimXDouble");
          return this.__PROXY__.getDimXDouble(...args);
        };
    
        // function 
        RDimensionData.prototype.getDoubleOverride = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDoubleOverride");
          return this.__PROXY__.getDoubleOverride(...args);
        };
    
        // function 
        RDimensionData.prototype.getDimXInt = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDimXInt");
          return this.__PROXY__.getDimXInt(...args);
        };
    
        // function 
        RDimensionData.prototype.getIntOverride = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getIntOverride");
          return this.__PROXY__.getIntOverride(...args);
        };
    
        // function 
        RDimensionData.prototype.getDimXBool = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDimXBool");
          return this.__PROXY__.getDimXBool(...args);
        };
    
        // function 
        RDimensionData.prototype.getBoolOverride = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getBoolOverride");
          return this.__PROXY__.getBoolOverride(...args);
        };
    
        // function 
        RDimensionData.prototype.getDimXColor = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDimXColor");
          return this.__PROXY__.getDimXColor(...args);
        };
    
        // function 
        RDimensionData.prototype.getColorOverride = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getColorOverride");
          return this.__PROXY__.getColorOverride(...args);
        };
    
        // function 
        RDimensionData.prototype.getDimlfac = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDimlfac");
          return this.__PROXY__.getDimlfac(...args);
        };
    
        // function 
        RDimensionData.prototype.setDimlfac = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setDimlfac");
          return this.__PROXY__.setDimlfac(...args);
        };
    
        // function 
        RDimensionData.prototype.getLinearFactor = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getLinearFactor");
          return this.__PROXY__.getLinearFactor(...args);
        };
    
        // function 
        RDimensionData.prototype.setLinearFactor = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setLinearFactor");
          return this.__PROXY__.setLinearFactor(...args);
        };
    
        // function 
        RDimensionData.prototype.getDimscale = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDimscale");
          return this.__PROXY__.getDimscale(...args);
        };
    
        // function 
        RDimensionData.prototype.setDimscale = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setDimscale");
          return this.__PROXY__.setDimscale(...args);
        };
    
        // function 
        RDimensionData.prototype.isArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.isArrow1Flipped");
          return this.__PROXY__.isArrow1Flipped(...args);
        };
    
        // function 
        RDimensionData.prototype.setArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setArrow1Flipped");
          return this.__PROXY__.setArrow1Flipped(...args);
        };
    
        // function 
        RDimensionData.prototype.isArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.isArrow2Flipped");
          return this.__PROXY__.isArrow2Flipped(...args);
        };
    
        // function 
        RDimensionData.prototype.setArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setArrow2Flipped");
          return this.__PROXY__.setArrow2Flipped(...args);
        };
    
        // function 
        RDimensionData.prototype.isExtLineFix = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.isExtLineFix");
          return this.__PROXY__.isExtLineFix(...args);
        };
    
        // function 
        RDimensionData.prototype.setExtLineFix = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setExtLineFix");
          return this.__PROXY__.setExtLineFix(...args);
        };
    
        // function 
        RDimensionData.prototype.getExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getExtLineFixLength");
          return this.__PROXY__.getExtLineFixLength(...args);
        };
    
        // function 
        RDimensionData.prototype.setExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setExtLineFixLength");
          return this.__PROXY__.setExtLineFixLength(...args);
        };
    
        // function 
        RDimensionData.prototype.adjustExtensionLineFixLength = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.adjustExtensionLineFixLength");
          return this.__PROXY__.adjustExtensionLineFixLength(...args);
        };
    
        // function 
        RDimensionData.prototype.hasSpaceForArrows = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.hasSpaceForArrows");
          return this.__PROXY__.hasSpaceForArrows(...args);
        };
    
        // function 
        RDimensionData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RDimensionData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RDimensionData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RDimensionData.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RDimensionData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RDimensionData.prototype.move = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RDimensionData.prototype.rotate = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RDimensionData.prototype.scale = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RDimensionData.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RDimensionData.prototype.mirror = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RDimensionData.prototype.getDimexo = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDimexo");
          return this.__PROXY__.getDimexo(...args);
        };
    
        // function 
        RDimensionData.prototype.setDimexo = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setDimexo");
          return this.__PROXY__.setDimexo(...args);
        };
    
        // function 
        RDimensionData.prototype.getDimexe = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDimexe");
          return this.__PROXY__.getDimexe(...args);
        };
    
        // function 
        RDimensionData.prototype.setDimexe = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setDimexe");
          return this.__PROXY__.setDimexe(...args);
        };
    
        // function 
        RDimensionData.prototype.getDimasz = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDimasz");
          return this.__PROXY__.getDimasz(...args);
        };
    
        // function 
        RDimensionData.prototype.setDimasz = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setDimasz");
          return this.__PROXY__.setDimasz(...args);
        };
    
        // function 
        RDimensionData.prototype.getDimdli = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDimdli");
          return this.__PROXY__.getDimdli(...args);
        };
    
        // function 
        RDimensionData.prototype.setDimdli = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setDimdli");
          return this.__PROXY__.setDimdli(...args);
        };
    
        // function 
        RDimensionData.prototype.getDimgap = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDimgap");
          return this.__PROXY__.getDimgap(...args);
        };
    
        // function 
        RDimensionData.prototype.setDimgap = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setDimgap");
          return this.__PROXY__.setDimgap(...args);
        };
    
        // function 
        RDimensionData.prototype.getDimtxt = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDimtxt");
          return this.__PROXY__.getDimtxt(...args);
        };
    
        // function 
        RDimensionData.prototype.setDimtxt = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setDimtxt");
          return this.__PROXY__.setDimtxt(...args);
        };
    
        // function 
        RDimensionData.prototype.getDimlunit = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDimlunit");
          return this.__PROXY__.getDimlunit(...args);
        };
    
        // function 
        RDimensionData.prototype.setDimlunit = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setDimlunit");
          return this.__PROXY__.setDimlunit(...args);
        };
    
        // function 
        RDimensionData.prototype.getDimjust = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDimjust");
          return this.__PROXY__.getDimjust(...args);
        };
    
        // function 
        RDimensionData.prototype.getDimtad = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDimtad");
          return this.__PROXY__.getDimtad(...args);
        };
    
        // function 
        RDimensionData.prototype.setDimtad = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setDimtad");
          return this.__PROXY__.setDimtad(...args);
        };
    
        // function 
        RDimensionData.prototype.getDimtih = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDimtih");
          return this.__PROXY__.getDimtih(...args);
        };
    
        // function 
        RDimensionData.prototype.setDimtih = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setDimtih");
          return this.__PROXY__.setDimtih(...args);
        };
    
        // function 
        RDimensionData.prototype.getDimtsz = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDimtsz");
          return this.__PROXY__.getDimtsz(...args);
        };
    
        // function 
        RDimensionData.prototype.setDimtsz = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setDimtsz");
          return this.__PROXY__.setDimtsz(...args);
        };
    
        // function 
        RDimensionData.prototype.getDimzin = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDimzin");
          return this.__PROXY__.getDimzin(...args);
        };
    
        // function 
        RDimensionData.prototype.setDimzin = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setDimzin");
          return this.__PROXY__.setDimzin(...args);
        };
    
        // function 
        RDimensionData.prototype.getDimaunit = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDimaunit");
          return this.__PROXY__.getDimaunit(...args);
        };
    
        // function 
        RDimensionData.prototype.setDimaunit = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setDimaunit");
          return this.__PROXY__.setDimaunit(...args);
        };
    
        // function 
        RDimensionData.prototype.getDimadec = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDimadec");
          return this.__PROXY__.getDimadec(...args);
        };
    
        // function 
        RDimensionData.prototype.setDimadec = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setDimadec");
          return this.__PROXY__.setDimadec(...args);
        };
    
        // function 
        RDimensionData.prototype.getDimdec = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDimdec");
          return this.__PROXY__.getDimdec(...args);
        };
    
        // function 
        RDimensionData.prototype.setDimdec = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setDimdec");
          return this.__PROXY__.setDimdec(...args);
        };
    
        // function 
        RDimensionData.prototype.getDimazin = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDimazin");
          return this.__PROXY__.getDimazin(...args);
        };
    
        // function 
        RDimensionData.prototype.setDimazin = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setDimazin");
          return this.__PROXY__.setDimazin(...args);
        };
    
        // function 
        RDimensionData.prototype.getDimdsep = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDimdsep");
          return this.__PROXY__.getDimdsep(...args);
        };
    
        // function 
        RDimensionData.prototype.setDimdsep = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setDimdsep");
          return this.__PROXY__.setDimdsep(...args);
        };
    
        // function 
        RDimensionData.prototype.getDimclrt = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDimclrt");
          return this.__PROXY__.getDimclrt(...args);
        };
    
        // function 
        RDimensionData.prototype.setDimclrt = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setDimclrt");
          return this.__PROXY__.setDimclrt(...args);
        };
    
        // function 
        RDimensionData.prototype.useArchTick = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.useArchTick");
          return this.__PROXY__.useArchTick(...args);
        };
    
        // function 
        RDimensionData.prototype.getDimblk = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDimblk");
          return this.__PROXY__.getDimblk(...args);
        };
    
        // function 
        RDimensionData.prototype.getDimblkName = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDimblkName");
          return this.__PROXY__.getDimblkName(...args);
        };
    
        // function 
        RDimensionData.prototype.isDimXScaled = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.isDimXScaled");
          return this.__PROXY__.isDimXScaled(...args);
        };
    
        // function 
        RDimensionData.prototype.hasCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.hasCustomTextPosition");
          return this.__PROXY__.hasCustomTextPosition(...args);
        };
    
        // function 
        RDimensionData.prototype.setCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setCustomTextPosition");
          return this.__PROXY__.setCustomTextPosition(...args);
        };
    
        // function 
        RDimensionData.prototype.getLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getLineSpacingStyle");
          return this.__PROXY__.getLineSpacingStyle(...args);
        };
    
        // function 
        RDimensionData.prototype.getLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getLineSpacingFactor");
          return this.__PROXY__.getLineSpacingFactor(...args);
        };
    
        // function 
        RDimensionData.prototype.getTextRotation = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getTextRotation");
          return this.__PROXY__.getTextRotation(...args);
        };
    
        // function 
        RDimensionData.prototype.setTextRotation = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.setTextRotation");
          return this.__PROXY__.setTextRotation(...args);
        };
    
        // function 
        RDimensionData.prototype.getTextData = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getTextData");
          return this.__PROXY__.getTextData(...args);
        };
    
        // function 
        RDimensionData.prototype.initTextData = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.initTextData");
          return this.__PROXY__.initTextData(...args);
        };
    
        // function 
        RDimensionData.prototype.getMeasurement = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getMeasurement");
          return this.__PROXY__.getMeasurement(...args);
        };
    
        // function 
        RDimensionData.prototype.getMeasuredValue = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getMeasuredValue");
          return this.__PROXY__.getMeasuredValue(...args);
        };
    
        // function 
        RDimensionData.prototype.getAutoLabel = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getAutoLabel");
          return this.__PROXY__.getAutoLabel(...args);
        };
    
        // function 
        RDimensionData.prototype.formatLabel = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.formatLabel");
          return this.__PROXY__.formatLabel(...args);
        };
    
        // function 
        RDimensionData.prototype.formatAngleLabel = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.formatAngleLabel");
          return this.__PROXY__.formatAngleLabel(...args);
        };
    
        // function 
        RDimensionData.prototype.update = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RDimensionData.prototype.getDimensionBlockReference = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.getDimensionBlockReference");
          return this.__PROXY__.getDimensionBlockReference(...args);
        };
    
        // function 
        RDimensionData.prototype.hasDimensionBlockReference = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.hasDimensionBlockReference");
          return this.__PROXY__.hasDimensionBlockReference(...args);
        };
    
        // function 
        RDimensionData.prototype.to2D = function(...args) 
          
        {
          //print("JS: RDimensionData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RDimensionData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimensionData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RDimensionData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      