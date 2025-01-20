
      // auto generated
      //var self;

      // class constructor:
      function RDimRadialData() {
        

        // should be RDimRadialData_BaseJs.call(this, engine):
        //RDimRadialData.prototype = new RDimRadialData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimRadialData.getIdStatic()))) {

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
            qWarning("RDimRadialData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RDimRadialData_Wrapper(
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

      

        //copyProperties(this, wrapper, RDimRadialData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RDimRadialData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimRadialData);
  }

  
  else {
    
        print("RDimRadialData(): wrong number / type of arguments");
      
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

      //RDimRadialData.prototype = new RDimRadialData_BaseJs(engine);
      //RDimRadialData.prototype = new RDimRadialData_Wrapper(engine);
      RDimRadialData.prototype = new Object();

      RDimRadialData.prototype.toString = function() {
          //return "RDimRadialData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimRadialData [JS]";
        };
      RDimRadialData.getObjectType = function() {
        return RJSType_RDimRadialData.getIdStatic();
      };

      RDimRadialData.prototype.getObjectType = function() {
        return RJSType_RDimRadialData.getIdStatic();
      };

      RDimRadialData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimRadialData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RDimensionData.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RDimRadialData.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RDimRadialData.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RDimRadialData.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RDimRadialData.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RDimRadialData.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RDimRadialData.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RDimRadialData.prototype.setZ = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RDimRadialData.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RDimRadialData.prototype.getHull = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RDimRadialData.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RDimRadialData.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RDimRadialData.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RDimRadialData.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RDimRadialData.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RDimRadialData.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RDimRadialData.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RDimRadialData.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RDimRadialData.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RDimRadialData.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RDimRadialData.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RDimRadialData.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RDimRadialData.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RDimRadialData.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RDimRadialData.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RDimRadialData.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RDimRadialData.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RDimRadialData.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RDimRadialData.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RDimRadialData.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RDimRadialData.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RDimRadialData.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RDimRadialData.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RDimRadialData.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RDimRadialData.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RDimRadialData.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RDimRadialData.prototype.setColor = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RDimRadialData.prototype.getColor = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RDimRadialData.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RDimRadialData.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RDimRadialData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RDimRadialData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RDimRadialData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RDimRadialData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RDimRadialData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RDimRadialData.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RDimRadialData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RDimRadialData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RDimRadialData.prototype.isInside = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RDimRadialData.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RDimRadialData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RDimRadialData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RDimRadialData.prototype.stretch = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RDimRadialData.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RDimRadialData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RDimRadialData.prototype.render = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.render");
          return this.__PROXY__.render(...args);
        };
    
        // function 
        RDimRadialData.prototype.updateBoundingBox = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.updateBoundingBox");
          return this.__PROXY__.updateBoundingBox(...args);
        };
    
        // function 
        RDimRadialData.prototype.updateTextPositionCenter = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.updateTextPositionCenter");
          return this.__PROXY__.updateTextPositionCenter(...args);
        };
    
        // function 
        RDimRadialData.prototype.updateTextPositionSide = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.updateTextPositionSide");
          return this.__PROXY__.updateTextPositionSide(...args);
        };
    
        // function 
        RDimRadialData.prototype.updateTextData = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.updateTextData");
          return this.__PROXY__.updateTextData(...args);
        };
    
        // function 
        RDimRadialData.prototype.updateShapes = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.updateShapes");
          return this.__PROXY__.updateShapes(...args);
        };
    
        // function 
        RDimRadialData.prototype.updateArrowPos1 = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.updateArrowPos1");
          return this.__PROXY__.updateArrowPos1(...args);
        };
    
        // function 
        RDimRadialData.prototype.updateArrowPos2 = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.updateArrowPos2");
          return this.__PROXY__.updateArrowPos2(...args);
        };
    
        // function 
        RDimRadialData.prototype.clearStyleOverrides = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.clearStyleOverrides");
          return this.__PROXY__.clearStyleOverrides(...args);
        };
    
        // function 
        RDimRadialData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RDimRadialData.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RDimRadialData.prototype.setDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setDefinitionPoint");
          return this.__PROXY__.setDefinitionPoint(...args);
        };
    
        // function 
        RDimRadialData.prototype.getDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDefinitionPoint");
          return this.__PROXY__.getDefinitionPoint(...args);
        };
    
        // function 
        RDimRadialData.prototype.setText = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setText");
          return this.__PROXY__.setText(...args);
        };
    
        // function 
        RDimRadialData.prototype.getText = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getText");
          return this.__PROXY__.getText(...args);
        };
    
        // function 
        RDimRadialData.prototype.setUpperTolerance = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setUpperTolerance");
          return this.__PROXY__.setUpperTolerance(...args);
        };
    
        // function 
        RDimRadialData.prototype.setLowerTolerance = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setLowerTolerance");
          return this.__PROXY__.setLowerTolerance(...args);
        };
    
        // function 
        RDimRadialData.prototype.setTextPosition = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setTextPosition");
          return this.__PROXY__.setTextPosition(...args);
        };
    
        // function 
        RDimRadialData.prototype.getTextPosition = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getTextPosition");
          return this.__PROXY__.getTextPosition(...args);
        };
    
        // function 
        RDimRadialData.prototype.setFontName = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setFontName");
          return this.__PROXY__.setFontName(...args);
        };
    
        // function 
        RDimRadialData.prototype.getFontName = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getFontName");
          return this.__PROXY__.getFontName(...args);
        };
    
        // function 
        RDimRadialData.prototype.setDimBlockName = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setDimBlockName");
          return this.__PROXY__.setDimBlockName(...args);
        };
    
        // function 
        RDimRadialData.prototype.getDimBlockName = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDimBlockName");
          return this.__PROXY__.getDimBlockName(...args);
        };
    
        // function 
        RDimRadialData.prototype.hasOverrides = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.hasOverrides");
          return this.__PROXY__.hasOverrides(...args);
        };
    
        // function 
        RDimRadialData.prototype.hasOverride = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.hasOverride");
          return this.__PROXY__.hasOverride(...args);
        };
    
        // function 
        RDimRadialData.prototype.getOverrides = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getOverrides");
          return this.__PROXY__.getOverrides(...args);
        };
    
        // function 
        RDimRadialData.prototype.setDimXVariant = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setDimXVariant");
          return this.__PROXY__.setDimXVariant(...args);
        };
    
        // function 
        RDimRadialData.prototype.setDimXDouble = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setDimXDouble");
          return this.__PROXY__.setDimXDouble(...args);
        };
    
        // function 
        RDimRadialData.prototype.setDimXInt = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setDimXInt");
          return this.__PROXY__.setDimXInt(...args);
        };
    
        // function 
        RDimRadialData.prototype.setDimXBool = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setDimXBool");
          return this.__PROXY__.setDimXBool(...args);
        };
    
        // function 
        RDimRadialData.prototype.setDimXColor = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setDimXColor");
          return this.__PROXY__.setDimXColor(...args);
        };
    
        // function 
        RDimRadialData.prototype.getDimXVariant = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDimXVariant");
          return this.__PROXY__.getDimXVariant(...args);
        };
    
        // function 
        RDimRadialData.prototype.getVariantOverride = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getVariantOverride");
          return this.__PROXY__.getVariantOverride(...args);
        };
    
        // function 
        RDimRadialData.prototype.getDimXDouble = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDimXDouble");
          return this.__PROXY__.getDimXDouble(...args);
        };
    
        // function 
        RDimRadialData.prototype.getDoubleOverride = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDoubleOverride");
          return this.__PROXY__.getDoubleOverride(...args);
        };
    
        // function 
        RDimRadialData.prototype.getDimXInt = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDimXInt");
          return this.__PROXY__.getDimXInt(...args);
        };
    
        // function 
        RDimRadialData.prototype.getIntOverride = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getIntOverride");
          return this.__PROXY__.getIntOverride(...args);
        };
    
        // function 
        RDimRadialData.prototype.getDimXBool = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDimXBool");
          return this.__PROXY__.getDimXBool(...args);
        };
    
        // function 
        RDimRadialData.prototype.getBoolOverride = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getBoolOverride");
          return this.__PROXY__.getBoolOverride(...args);
        };
    
        // function 
        RDimRadialData.prototype.getDimXColor = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDimXColor");
          return this.__PROXY__.getDimXColor(...args);
        };
    
        // function 
        RDimRadialData.prototype.getColorOverride = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getColorOverride");
          return this.__PROXY__.getColorOverride(...args);
        };
    
        // function 
        RDimRadialData.prototype.getDimlfac = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDimlfac");
          return this.__PROXY__.getDimlfac(...args);
        };
    
        // function 
        RDimRadialData.prototype.setDimlfac = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setDimlfac");
          return this.__PROXY__.setDimlfac(...args);
        };
    
        // function 
        RDimRadialData.prototype.getLinearFactor = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getLinearFactor");
          return this.__PROXY__.getLinearFactor(...args);
        };
    
        // function 
        RDimRadialData.prototype.setLinearFactor = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setLinearFactor");
          return this.__PROXY__.setLinearFactor(...args);
        };
    
        // function 
        RDimRadialData.prototype.getDimscale = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDimscale");
          return this.__PROXY__.getDimscale(...args);
        };
    
        // function 
        RDimRadialData.prototype.setDimscale = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setDimscale");
          return this.__PROXY__.setDimscale(...args);
        };
    
        // function 
        RDimRadialData.prototype.isArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.isArrow1Flipped");
          return this.__PROXY__.isArrow1Flipped(...args);
        };
    
        // function 
        RDimRadialData.prototype.setArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setArrow1Flipped");
          return this.__PROXY__.setArrow1Flipped(...args);
        };
    
        // function 
        RDimRadialData.prototype.isArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.isArrow2Flipped");
          return this.__PROXY__.isArrow2Flipped(...args);
        };
    
        // function 
        RDimRadialData.prototype.setArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setArrow2Flipped");
          return this.__PROXY__.setArrow2Flipped(...args);
        };
    
        // function 
        RDimRadialData.prototype.isExtLineFix = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.isExtLineFix");
          return this.__PROXY__.isExtLineFix(...args);
        };
    
        // function 
        RDimRadialData.prototype.setExtLineFix = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setExtLineFix");
          return this.__PROXY__.setExtLineFix(...args);
        };
    
        // function 
        RDimRadialData.prototype.getExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getExtLineFixLength");
          return this.__PROXY__.getExtLineFixLength(...args);
        };
    
        // function 
        RDimRadialData.prototype.setExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setExtLineFixLength");
          return this.__PROXY__.setExtLineFixLength(...args);
        };
    
        // function 
        RDimRadialData.prototype.adjustExtensionLineFixLength = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.adjustExtensionLineFixLength");
          return this.__PROXY__.adjustExtensionLineFixLength(...args);
        };
    
        // function 
        RDimRadialData.prototype.hasSpaceForArrows = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.hasSpaceForArrows");
          return this.__PROXY__.hasSpaceForArrows(...args);
        };
    
        // function 
        RDimRadialData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RDimRadialData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RDimRadialData.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RDimRadialData.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RDimRadialData.prototype.getDimexo = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDimexo");
          return this.__PROXY__.getDimexo(...args);
        };
    
        // function 
        RDimRadialData.prototype.setDimexo = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setDimexo");
          return this.__PROXY__.setDimexo(...args);
        };
    
        // function 
        RDimRadialData.prototype.getDimexe = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDimexe");
          return this.__PROXY__.getDimexe(...args);
        };
    
        // function 
        RDimRadialData.prototype.setDimexe = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setDimexe");
          return this.__PROXY__.setDimexe(...args);
        };
    
        // function 
        RDimRadialData.prototype.getDimasz = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDimasz");
          return this.__PROXY__.getDimasz(...args);
        };
    
        // function 
        RDimRadialData.prototype.setDimasz = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setDimasz");
          return this.__PROXY__.setDimasz(...args);
        };
    
        // function 
        RDimRadialData.prototype.getDimdli = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDimdli");
          return this.__PROXY__.getDimdli(...args);
        };
    
        // function 
        RDimRadialData.prototype.setDimdli = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setDimdli");
          return this.__PROXY__.setDimdli(...args);
        };
    
        // function 
        RDimRadialData.prototype.getDimgap = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDimgap");
          return this.__PROXY__.getDimgap(...args);
        };
    
        // function 
        RDimRadialData.prototype.setDimgap = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setDimgap");
          return this.__PROXY__.setDimgap(...args);
        };
    
        // function 
        RDimRadialData.prototype.getDimtxt = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDimtxt");
          return this.__PROXY__.getDimtxt(...args);
        };
    
        // function 
        RDimRadialData.prototype.setDimtxt = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setDimtxt");
          return this.__PROXY__.setDimtxt(...args);
        };
    
        // function 
        RDimRadialData.prototype.getDimlunit = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDimlunit");
          return this.__PROXY__.getDimlunit(...args);
        };
    
        // function 
        RDimRadialData.prototype.setDimlunit = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setDimlunit");
          return this.__PROXY__.setDimlunit(...args);
        };
    
        // function 
        RDimRadialData.prototype.getDimjust = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDimjust");
          return this.__PROXY__.getDimjust(...args);
        };
    
        // function 
        RDimRadialData.prototype.getDimtad = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDimtad");
          return this.__PROXY__.getDimtad(...args);
        };
    
        // function 
        RDimRadialData.prototype.setDimtad = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setDimtad");
          return this.__PROXY__.setDimtad(...args);
        };
    
        // function 
        RDimRadialData.prototype.getDimtih = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDimtih");
          return this.__PROXY__.getDimtih(...args);
        };
    
        // function 
        RDimRadialData.prototype.setDimtih = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setDimtih");
          return this.__PROXY__.setDimtih(...args);
        };
    
        // function 
        RDimRadialData.prototype.getDimtsz = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDimtsz");
          return this.__PROXY__.getDimtsz(...args);
        };
    
        // function 
        RDimRadialData.prototype.setDimtsz = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setDimtsz");
          return this.__PROXY__.setDimtsz(...args);
        };
    
        // function 
        RDimRadialData.prototype.getDimzin = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDimzin");
          return this.__PROXY__.getDimzin(...args);
        };
    
        // function 
        RDimRadialData.prototype.setDimzin = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setDimzin");
          return this.__PROXY__.setDimzin(...args);
        };
    
        // function 
        RDimRadialData.prototype.getDimaunit = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDimaunit");
          return this.__PROXY__.getDimaunit(...args);
        };
    
        // function 
        RDimRadialData.prototype.setDimaunit = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setDimaunit");
          return this.__PROXY__.setDimaunit(...args);
        };
    
        // function 
        RDimRadialData.prototype.getDimadec = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDimadec");
          return this.__PROXY__.getDimadec(...args);
        };
    
        // function 
        RDimRadialData.prototype.setDimadec = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setDimadec");
          return this.__PROXY__.setDimadec(...args);
        };
    
        // function 
        RDimRadialData.prototype.getDimdec = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDimdec");
          return this.__PROXY__.getDimdec(...args);
        };
    
        // function 
        RDimRadialData.prototype.setDimdec = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setDimdec");
          return this.__PROXY__.setDimdec(...args);
        };
    
        // function 
        RDimRadialData.prototype.getDimazin = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDimazin");
          return this.__PROXY__.getDimazin(...args);
        };
    
        // function 
        RDimRadialData.prototype.setDimazin = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setDimazin");
          return this.__PROXY__.setDimazin(...args);
        };
    
        // function 
        RDimRadialData.prototype.getDimdsep = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDimdsep");
          return this.__PROXY__.getDimdsep(...args);
        };
    
        // function 
        RDimRadialData.prototype.setDimdsep = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setDimdsep");
          return this.__PROXY__.setDimdsep(...args);
        };
    
        // function 
        RDimRadialData.prototype.getDimclrt = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDimclrt");
          return this.__PROXY__.getDimclrt(...args);
        };
    
        // function 
        RDimRadialData.prototype.setDimclrt = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setDimclrt");
          return this.__PROXY__.setDimclrt(...args);
        };
    
        // function 
        RDimRadialData.prototype.useArchTick = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.useArchTick");
          return this.__PROXY__.useArchTick(...args);
        };
    
        // function 
        RDimRadialData.prototype.getDimblk = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDimblk");
          return this.__PROXY__.getDimblk(...args);
        };
    
        // function 
        RDimRadialData.prototype.getDimblkName = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDimblkName");
          return this.__PROXY__.getDimblkName(...args);
        };
    
        // function 
        RDimRadialData.prototype.isDimXScaled = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.isDimXScaled");
          return this.__PROXY__.isDimXScaled(...args);
        };
    
        // function 
        RDimRadialData.prototype.hasCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.hasCustomTextPosition");
          return this.__PROXY__.hasCustomTextPosition(...args);
        };
    
        // function 
        RDimRadialData.prototype.setCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setCustomTextPosition");
          return this.__PROXY__.setCustomTextPosition(...args);
        };
    
        // function 
        RDimRadialData.prototype.getLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getLineSpacingStyle");
          return this.__PROXY__.getLineSpacingStyle(...args);
        };
    
        // function 
        RDimRadialData.prototype.getLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getLineSpacingFactor");
          return this.__PROXY__.getLineSpacingFactor(...args);
        };
    
        // function 
        RDimRadialData.prototype.getTextRotation = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getTextRotation");
          return this.__PROXY__.getTextRotation(...args);
        };
    
        // function 
        RDimRadialData.prototype.setTextRotation = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setTextRotation");
          return this.__PROXY__.setTextRotation(...args);
        };
    
        // function 
        RDimRadialData.prototype.getTextData = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getTextData");
          return this.__PROXY__.getTextData(...args);
        };
    
        // function 
        RDimRadialData.prototype.initTextData = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.initTextData");
          return this.__PROXY__.initTextData(...args);
        };
    
        // function 
        RDimRadialData.prototype.getMeasurement = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getMeasurement");
          return this.__PROXY__.getMeasurement(...args);
        };
    
        // function 
        RDimRadialData.prototype.formatLabel = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.formatLabel");
          return this.__PROXY__.formatLabel(...args);
        };
    
        // function 
        RDimRadialData.prototype.formatAngleLabel = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.formatAngleLabel");
          return this.__PROXY__.formatAngleLabel(...args);
        };
    
        // function 
        RDimRadialData.prototype.update = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RDimRadialData.prototype.getDimensionBlockReference = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getDimensionBlockReference");
          return this.__PROXY__.getDimensionBlockReference(...args);
        };
    
        // function 
        RDimRadialData.prototype.hasDimensionBlockReference = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.hasDimensionBlockReference");
          return this.__PROXY__.hasDimensionBlockReference(...args);
        };
    
        // function 
        RDimRadialData.prototype.getType = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RDimRadialData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RDimRadialData.prototype.isSane = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RDimRadialData.prototype.setCenter = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setCenter");
          return this.__PROXY__.setCenter(...args);
        };
    
        // function 
        RDimRadialData.prototype.getCenter = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getCenter");
          return this.__PROXY__.getCenter(...args);
        };
    
        // function 
        RDimRadialData.prototype.setChordPoint = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.setChordPoint");
          return this.__PROXY__.setChordPoint(...args);
        };
    
        // function 
        RDimRadialData.prototype.getChordPoint = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getChordPoint");
          return this.__PROXY__.getChordPoint(...args);
        };
    
        // function 
        RDimRadialData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RDimRadialData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RDimRadialData.prototype.move = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RDimRadialData.prototype.rotate = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RDimRadialData.prototype.scale = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RDimRadialData.prototype.mirror = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RDimRadialData.prototype.getMeasuredValue = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getMeasuredValue");
          return this.__PROXY__.getMeasuredValue(...args);
        };
    
        // function 
        RDimRadialData.prototype.getAutoLabel = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.getAutoLabel");
          return this.__PROXY__.getAutoLabel(...args);
        };
    
        // function 
        RDimRadialData.prototype.to2D = function(...args) 
          
        {
          //print("JS: RDimRadialData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RDimRadialData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimRadialData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RDimRadialData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      