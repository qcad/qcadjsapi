
      // auto generated
      //var self;

      // class constructor:
      function RDimLinearData() {
        

        // should be RDimLinearData_BaseJs.call(this, engine):
        //RDimLinearData.prototype = new RDimLinearData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimLinearData.getIdStatic()))) {

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
            qWarning("RDimLinearData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RDimLinearData_Wrapper(
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

      

        //copyProperties(this, wrapper, RDimLinearData);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RDimLinearData_Wrapper(
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

      

        //copyProperties(this, wrapper, RDimLinearData);
  }

  
  else {
    
        print("RDimLinearData(): wrong number / type of arguments");
      
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

      //RDimLinearData.prototype = new RDimLinearData_BaseJs(engine);
      //RDimLinearData.prototype = new RDimLinearData_Wrapper(engine);
      RDimLinearData.prototype = new Object();

      RDimLinearData.prototype.toString = function() {
          //return "RDimLinearData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimLinearData [JS]";
        };
      RDimLinearData.getObjectType = function() {
        return RJSType_RDimLinearData.getIdStatic();
      };

      RDimLinearData.prototype.getObjectType = function() {
        return RJSType_RDimLinearData.getIdStatic();
      };

      RDimLinearData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimLinearData.getIdStatic()) {
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
        RDimLinearData.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RDimLinearData.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RDimLinearData.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RDimLinearData.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RDimLinearData.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RDimLinearData.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RDimLinearData.prototype.setZ = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RDimLinearData.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RDimLinearData.prototype.getHull = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RDimLinearData.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RDimLinearData.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RDimLinearData.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RDimLinearData.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RDimLinearData.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RDimLinearData.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RDimLinearData.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RDimLinearData.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RDimLinearData.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RDimLinearData.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RDimLinearData.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RDimLinearData.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RDimLinearData.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RDimLinearData.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RDimLinearData.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RDimLinearData.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RDimLinearData.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RDimLinearData.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RDimLinearData.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RDimLinearData.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RDimLinearData.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RDimLinearData.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RDimLinearData.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RDimLinearData.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RDimLinearData.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RDimLinearData.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RDimLinearData.prototype.setColor = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RDimLinearData.prototype.getColor = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RDimLinearData.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RDimLinearData.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RDimLinearData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RDimLinearData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RDimLinearData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RDimLinearData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RDimLinearData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RDimLinearData.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RDimLinearData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RDimLinearData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RDimLinearData.prototype.isInside = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RDimLinearData.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RDimLinearData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RDimLinearData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RDimLinearData.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RDimLinearData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RDimLinearData.prototype.render = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.render");
          return this.__PROXY__.render(...args);
        };
    
        // function 
        RDimLinearData.prototype.updateBoundingBox = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.updateBoundingBox");
          return this.__PROXY__.updateBoundingBox(...args);
        };
    
        // function 
        RDimLinearData.prototype.updateTextPositionCenter = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.updateTextPositionCenter");
          return this.__PROXY__.updateTextPositionCenter(...args);
        };
    
        // function 
        RDimLinearData.prototype.updateTextPositionSide = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.updateTextPositionSide");
          return this.__PROXY__.updateTextPositionSide(...args);
        };
    
        // function 
        RDimLinearData.prototype.updateTextData = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.updateTextData");
          return this.__PROXY__.updateTextData(...args);
        };
    
        // function 
        RDimLinearData.prototype.updateShapes = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.updateShapes");
          return this.__PROXY__.updateShapes(...args);
        };
    
        // function 
        RDimLinearData.prototype.updateArrowPos1 = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.updateArrowPos1");
          return this.__PROXY__.updateArrowPos1(...args);
        };
    
        // function 
        RDimLinearData.prototype.updateArrowPos2 = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.updateArrowPos2");
          return this.__PROXY__.updateArrowPos2(...args);
        };
    
        // function 
        RDimLinearData.prototype.clearStyleOverrides = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.clearStyleOverrides");
          return this.__PROXY__.clearStyleOverrides(...args);
        };
    
        // function 
        RDimLinearData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RDimLinearData.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RDimLinearData.prototype.getDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDefinitionPoint");
          return this.__PROXY__.getDefinitionPoint(...args);
        };
    
        // function 
        RDimLinearData.prototype.setText = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setText");
          return this.__PROXY__.setText(...args);
        };
    
        // function 
        RDimLinearData.prototype.getText = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getText");
          return this.__PROXY__.getText(...args);
        };
    
        // function 
        RDimLinearData.prototype.setUpperTolerance = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setUpperTolerance");
          return this.__PROXY__.setUpperTolerance(...args);
        };
    
        // function 
        RDimLinearData.prototype.setLowerTolerance = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setLowerTolerance");
          return this.__PROXY__.setLowerTolerance(...args);
        };
    
        // function 
        RDimLinearData.prototype.setTextPosition = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setTextPosition");
          return this.__PROXY__.setTextPosition(...args);
        };
    
        // function 
        RDimLinearData.prototype.getTextPosition = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getTextPosition");
          return this.__PROXY__.getTextPosition(...args);
        };
    
        // function 
        RDimLinearData.prototype.setFontName = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setFontName");
          return this.__PROXY__.setFontName(...args);
        };
    
        // function 
        RDimLinearData.prototype.getFontName = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getFontName");
          return this.__PROXY__.getFontName(...args);
        };
    
        // function 
        RDimLinearData.prototype.setDimBlockName = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setDimBlockName");
          return this.__PROXY__.setDimBlockName(...args);
        };
    
        // function 
        RDimLinearData.prototype.getDimBlockName = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDimBlockName");
          return this.__PROXY__.getDimBlockName(...args);
        };
    
        // function 
        RDimLinearData.prototype.hasOverrides = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.hasOverrides");
          return this.__PROXY__.hasOverrides(...args);
        };
    
        // function 
        RDimLinearData.prototype.hasOverride = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.hasOverride");
          return this.__PROXY__.hasOverride(...args);
        };
    
        // function 
        RDimLinearData.prototype.getOverrides = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getOverrides");
          return this.__PROXY__.getOverrides(...args);
        };
    
        // function 
        RDimLinearData.prototype.setDimXVariant = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setDimXVariant");
          return this.__PROXY__.setDimXVariant(...args);
        };
    
        // function 
        RDimLinearData.prototype.setDimXDouble = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setDimXDouble");
          return this.__PROXY__.setDimXDouble(...args);
        };
    
        // function 
        RDimLinearData.prototype.setDimXInt = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setDimXInt");
          return this.__PROXY__.setDimXInt(...args);
        };
    
        // function 
        RDimLinearData.prototype.setDimXBool = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setDimXBool");
          return this.__PROXY__.setDimXBool(...args);
        };
    
        // function 
        RDimLinearData.prototype.setDimXColor = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setDimXColor");
          return this.__PROXY__.setDimXColor(...args);
        };
    
        // function 
        RDimLinearData.prototype.getDimXVariant = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDimXVariant");
          return this.__PROXY__.getDimXVariant(...args);
        };
    
        // function 
        RDimLinearData.prototype.getVariantOverride = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getVariantOverride");
          return this.__PROXY__.getVariantOverride(...args);
        };
    
        // function 
        RDimLinearData.prototype.getDimXDouble = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDimXDouble");
          return this.__PROXY__.getDimXDouble(...args);
        };
    
        // function 
        RDimLinearData.prototype.getDoubleOverride = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDoubleOverride");
          return this.__PROXY__.getDoubleOverride(...args);
        };
    
        // function 
        RDimLinearData.prototype.getDimXInt = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDimXInt");
          return this.__PROXY__.getDimXInt(...args);
        };
    
        // function 
        RDimLinearData.prototype.getIntOverride = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getIntOverride");
          return this.__PROXY__.getIntOverride(...args);
        };
    
        // function 
        RDimLinearData.prototype.getDimXBool = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDimXBool");
          return this.__PROXY__.getDimXBool(...args);
        };
    
        // function 
        RDimLinearData.prototype.getBoolOverride = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getBoolOverride");
          return this.__PROXY__.getBoolOverride(...args);
        };
    
        // function 
        RDimLinearData.prototype.getDimXColor = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDimXColor");
          return this.__PROXY__.getDimXColor(...args);
        };
    
        // function 
        RDimLinearData.prototype.getColorOverride = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getColorOverride");
          return this.__PROXY__.getColorOverride(...args);
        };
    
        // function 
        RDimLinearData.prototype.getDimlfac = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDimlfac");
          return this.__PROXY__.getDimlfac(...args);
        };
    
        // function 
        RDimLinearData.prototype.setDimlfac = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setDimlfac");
          return this.__PROXY__.setDimlfac(...args);
        };
    
        // function 
        RDimLinearData.prototype.getLinearFactor = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getLinearFactor");
          return this.__PROXY__.getLinearFactor(...args);
        };
    
        // function 
        RDimLinearData.prototype.setLinearFactor = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setLinearFactor");
          return this.__PROXY__.setLinearFactor(...args);
        };
    
        // function 
        RDimLinearData.prototype.getDimscale = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDimscale");
          return this.__PROXY__.getDimscale(...args);
        };
    
        // function 
        RDimLinearData.prototype.setDimscale = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setDimscale");
          return this.__PROXY__.setDimscale(...args);
        };
    
        // function 
        RDimLinearData.prototype.isArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.isArrow1Flipped");
          return this.__PROXY__.isArrow1Flipped(...args);
        };
    
        // function 
        RDimLinearData.prototype.setArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setArrow1Flipped");
          return this.__PROXY__.setArrow1Flipped(...args);
        };
    
        // function 
        RDimLinearData.prototype.isArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.isArrow2Flipped");
          return this.__PROXY__.isArrow2Flipped(...args);
        };
    
        // function 
        RDimLinearData.prototype.setArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setArrow2Flipped");
          return this.__PROXY__.setArrow2Flipped(...args);
        };
    
        // function 
        RDimLinearData.prototype.isExtLineFix = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.isExtLineFix");
          return this.__PROXY__.isExtLineFix(...args);
        };
    
        // function 
        RDimLinearData.prototype.setExtLineFix = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setExtLineFix");
          return this.__PROXY__.setExtLineFix(...args);
        };
    
        // function 
        RDimLinearData.prototype.getExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getExtLineFixLength");
          return this.__PROXY__.getExtLineFixLength(...args);
        };
    
        // function 
        RDimLinearData.prototype.setExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setExtLineFixLength");
          return this.__PROXY__.setExtLineFixLength(...args);
        };
    
        // function 
        RDimLinearData.prototype.adjustExtensionLineFixLength = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.adjustExtensionLineFixLength");
          return this.__PROXY__.adjustExtensionLineFixLength(...args);
        };
    
        // function 
        RDimLinearData.prototype.hasSpaceForArrows = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.hasSpaceForArrows");
          return this.__PROXY__.hasSpaceForArrows(...args);
        };
    
        // function 
        RDimLinearData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RDimLinearData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RDimLinearData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RDimLinearData.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RDimLinearData.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RDimLinearData.prototype.getDimexo = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDimexo");
          return this.__PROXY__.getDimexo(...args);
        };
    
        // function 
        RDimLinearData.prototype.setDimexo = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setDimexo");
          return this.__PROXY__.setDimexo(...args);
        };
    
        // function 
        RDimLinearData.prototype.getDimexe = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDimexe");
          return this.__PROXY__.getDimexe(...args);
        };
    
        // function 
        RDimLinearData.prototype.setDimexe = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setDimexe");
          return this.__PROXY__.setDimexe(...args);
        };
    
        // function 
        RDimLinearData.prototype.getDimasz = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDimasz");
          return this.__PROXY__.getDimasz(...args);
        };
    
        // function 
        RDimLinearData.prototype.setDimasz = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setDimasz");
          return this.__PROXY__.setDimasz(...args);
        };
    
        // function 
        RDimLinearData.prototype.getDimdli = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDimdli");
          return this.__PROXY__.getDimdli(...args);
        };
    
        // function 
        RDimLinearData.prototype.setDimdli = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setDimdli");
          return this.__PROXY__.setDimdli(...args);
        };
    
        // function 
        RDimLinearData.prototype.getDimgap = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDimgap");
          return this.__PROXY__.getDimgap(...args);
        };
    
        // function 
        RDimLinearData.prototype.setDimgap = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setDimgap");
          return this.__PROXY__.setDimgap(...args);
        };
    
        // function 
        RDimLinearData.prototype.getDimtxt = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDimtxt");
          return this.__PROXY__.getDimtxt(...args);
        };
    
        // function 
        RDimLinearData.prototype.setDimtxt = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setDimtxt");
          return this.__PROXY__.setDimtxt(...args);
        };
    
        // function 
        RDimLinearData.prototype.getDimlunit = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDimlunit");
          return this.__PROXY__.getDimlunit(...args);
        };
    
        // function 
        RDimLinearData.prototype.setDimlunit = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setDimlunit");
          return this.__PROXY__.setDimlunit(...args);
        };
    
        // function 
        RDimLinearData.prototype.getDimjust = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDimjust");
          return this.__PROXY__.getDimjust(...args);
        };
    
        // function 
        RDimLinearData.prototype.getDimtad = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDimtad");
          return this.__PROXY__.getDimtad(...args);
        };
    
        // function 
        RDimLinearData.prototype.setDimtad = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setDimtad");
          return this.__PROXY__.setDimtad(...args);
        };
    
        // function 
        RDimLinearData.prototype.getDimtih = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDimtih");
          return this.__PROXY__.getDimtih(...args);
        };
    
        // function 
        RDimLinearData.prototype.setDimtih = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setDimtih");
          return this.__PROXY__.setDimtih(...args);
        };
    
        // function 
        RDimLinearData.prototype.getDimtsz = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDimtsz");
          return this.__PROXY__.getDimtsz(...args);
        };
    
        // function 
        RDimLinearData.prototype.setDimtsz = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setDimtsz");
          return this.__PROXY__.setDimtsz(...args);
        };
    
        // function 
        RDimLinearData.prototype.getDimzin = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDimzin");
          return this.__PROXY__.getDimzin(...args);
        };
    
        // function 
        RDimLinearData.prototype.setDimzin = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setDimzin");
          return this.__PROXY__.setDimzin(...args);
        };
    
        // function 
        RDimLinearData.prototype.getDimaunit = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDimaunit");
          return this.__PROXY__.getDimaunit(...args);
        };
    
        // function 
        RDimLinearData.prototype.setDimaunit = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setDimaunit");
          return this.__PROXY__.setDimaunit(...args);
        };
    
        // function 
        RDimLinearData.prototype.getDimadec = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDimadec");
          return this.__PROXY__.getDimadec(...args);
        };
    
        // function 
        RDimLinearData.prototype.setDimadec = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setDimadec");
          return this.__PROXY__.setDimadec(...args);
        };
    
        // function 
        RDimLinearData.prototype.getDimdec = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDimdec");
          return this.__PROXY__.getDimdec(...args);
        };
    
        // function 
        RDimLinearData.prototype.setDimdec = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setDimdec");
          return this.__PROXY__.setDimdec(...args);
        };
    
        // function 
        RDimLinearData.prototype.getDimazin = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDimazin");
          return this.__PROXY__.getDimazin(...args);
        };
    
        // function 
        RDimLinearData.prototype.setDimazin = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setDimazin");
          return this.__PROXY__.setDimazin(...args);
        };
    
        // function 
        RDimLinearData.prototype.getDimdsep = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDimdsep");
          return this.__PROXY__.getDimdsep(...args);
        };
    
        // function 
        RDimLinearData.prototype.setDimdsep = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setDimdsep");
          return this.__PROXY__.setDimdsep(...args);
        };
    
        // function 
        RDimLinearData.prototype.getDimclrt = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDimclrt");
          return this.__PROXY__.getDimclrt(...args);
        };
    
        // function 
        RDimLinearData.prototype.setDimclrt = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setDimclrt");
          return this.__PROXY__.setDimclrt(...args);
        };
    
        // function 
        RDimLinearData.prototype.useArchTick = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.useArchTick");
          return this.__PROXY__.useArchTick(...args);
        };
    
        // function 
        RDimLinearData.prototype.getDimblk = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDimblk");
          return this.__PROXY__.getDimblk(...args);
        };
    
        // function 
        RDimLinearData.prototype.getDimblkName = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDimblkName");
          return this.__PROXY__.getDimblkName(...args);
        };
    
        // function 
        RDimLinearData.prototype.isDimXScaled = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.isDimXScaled");
          return this.__PROXY__.isDimXScaled(...args);
        };
    
        // function 
        RDimLinearData.prototype.hasCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.hasCustomTextPosition");
          return this.__PROXY__.hasCustomTextPosition(...args);
        };
    
        // function 
        RDimLinearData.prototype.setCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setCustomTextPosition");
          return this.__PROXY__.setCustomTextPosition(...args);
        };
    
        // function 
        RDimLinearData.prototype.getLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getLineSpacingStyle");
          return this.__PROXY__.getLineSpacingStyle(...args);
        };
    
        // function 
        RDimLinearData.prototype.getLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getLineSpacingFactor");
          return this.__PROXY__.getLineSpacingFactor(...args);
        };
    
        // function 
        RDimLinearData.prototype.getTextRotation = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getTextRotation");
          return this.__PROXY__.getTextRotation(...args);
        };
    
        // function 
        RDimLinearData.prototype.setTextRotation = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setTextRotation");
          return this.__PROXY__.setTextRotation(...args);
        };
    
        // function 
        RDimLinearData.prototype.getTextData = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getTextData");
          return this.__PROXY__.getTextData(...args);
        };
    
        // function 
        RDimLinearData.prototype.initTextData = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.initTextData");
          return this.__PROXY__.initTextData(...args);
        };
    
        // function 
        RDimLinearData.prototype.getMeasurement = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getMeasurement");
          return this.__PROXY__.getMeasurement(...args);
        };
    
        // function 
        RDimLinearData.prototype.getMeasuredValue = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getMeasuredValue");
          return this.__PROXY__.getMeasuredValue(...args);
        };
    
        // function 
        RDimLinearData.prototype.getAutoLabel = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getAutoLabel");
          return this.__PROXY__.getAutoLabel(...args);
        };
    
        // function 
        RDimLinearData.prototype.formatLabel = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.formatLabel");
          return this.__PROXY__.formatLabel(...args);
        };
    
        // function 
        RDimLinearData.prototype.formatAngleLabel = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.formatAngleLabel");
          return this.__PROXY__.formatAngleLabel(...args);
        };
    
        // function 
        RDimLinearData.prototype.update = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RDimLinearData.prototype.getDimensionBlockReference = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getDimensionBlockReference");
          return this.__PROXY__.getDimensionBlockReference(...args);
        };
    
        // function 
        RDimLinearData.prototype.hasDimensionBlockReference = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.hasDimensionBlockReference");
          return this.__PROXY__.hasDimensionBlockReference(...args);
        };
    
        // function 
        RDimLinearData.prototype.getType = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RDimLinearData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RDimLinearData.prototype.isSane = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RDimLinearData.prototype.setDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setDefinitionPoint");
          return this.__PROXY__.setDefinitionPoint(...args);
        };
    
        // function 
        RDimLinearData.prototype.setExtensionPoint1 = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setExtensionPoint1");
          return this.__PROXY__.setExtensionPoint1(...args);
        };
    
        // function 
        RDimLinearData.prototype.getExtensionPoint1 = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getExtensionPoint1");
          return this.__PROXY__.getExtensionPoint1(...args);
        };
    
        // function 
        RDimLinearData.prototype.setExtensionPoint2 = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.setExtensionPoint2");
          return this.__PROXY__.setExtensionPoint2(...args);
        };
    
        // function 
        RDimLinearData.prototype.getExtensionPoint2 = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.getExtensionPoint2");
          return this.__PROXY__.getExtensionPoint2(...args);
        };
    
        // function 
        RDimLinearData.prototype.recomputeDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.recomputeDefinitionPoint");
          return this.__PROXY__.recomputeDefinitionPoint(...args);
        };
    
        // function 
        RDimLinearData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RDimLinearData.prototype.move = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RDimLinearData.prototype.rotate = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RDimLinearData.prototype.scale = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RDimLinearData.prototype.mirror = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RDimLinearData.prototype.stretch = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RDimLinearData.prototype.to2D = function(...args) 
          
        {
          //print("JS: RDimLinearData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RDimLinearData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimLinearData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RDimLinearData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      