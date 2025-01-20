
      // auto generated
      //var self;

      // class constructor:
      function RDimAlignedData() {
        

        // should be RDimAlignedData_BaseJs.call(this, engine):
        //RDimAlignedData.prototype = new RDimAlignedData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimAlignedData.getIdStatic()))) {

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
            qWarning("RDimAlignedData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RDimAlignedData_Wrapper(
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

      

        //copyProperties(this, wrapper, RDimAlignedData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RDimAlignedData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimAlignedData);
  }

  
  else {
    
        print("RDimAlignedData(): wrong number / type of arguments");
      
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

      //RDimAlignedData.prototype = new RDimAlignedData_BaseJs(engine);
      //RDimAlignedData.prototype = new RDimAlignedData_Wrapper(engine);
      RDimAlignedData.prototype = new Object();

      RDimAlignedData.prototype.toString = function() {
          //return "RDimAlignedData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimAlignedData [JS]";
        };
      RDimAlignedData.getObjectType = function() {
        return RJSType_RDimAlignedData.getIdStatic();
      };

      RDimAlignedData.prototype.getObjectType = function() {
        return RJSType_RDimAlignedData.getIdStatic();
      };

      RDimAlignedData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimAlignedData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RDimensionData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RDimLinearData.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RDimAlignedData.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RDimAlignedData.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RDimAlignedData.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setZ = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getHull = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RDimAlignedData.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RDimAlignedData.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RDimAlignedData.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RDimAlignedData.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setColor = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getColor = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RDimAlignedData.prototype.isInside = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RDimAlignedData.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RDimAlignedData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RDimAlignedData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RDimAlignedData.prototype.render = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.render");
          return this.__PROXY__.render(...args);
        };
    
        // function 
        RDimAlignedData.prototype.updateBoundingBox = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.updateBoundingBox");
          return this.__PROXY__.updateBoundingBox(...args);
        };
    
        // function 
        RDimAlignedData.prototype.updateTextPositionCenter = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.updateTextPositionCenter");
          return this.__PROXY__.updateTextPositionCenter(...args);
        };
    
        // function 
        RDimAlignedData.prototype.updateTextPositionSide = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.updateTextPositionSide");
          return this.__PROXY__.updateTextPositionSide(...args);
        };
    
        // function 
        RDimAlignedData.prototype.updateTextData = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.updateTextData");
          return this.__PROXY__.updateTextData(...args);
        };
    
        // function 
        RDimAlignedData.prototype.updateShapes = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.updateShapes");
          return this.__PROXY__.updateShapes(...args);
        };
    
        // function 
        RDimAlignedData.prototype.updateArrowPos1 = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.updateArrowPos1");
          return this.__PROXY__.updateArrowPos1(...args);
        };
    
        // function 
        RDimAlignedData.prototype.updateArrowPos2 = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.updateArrowPos2");
          return this.__PROXY__.updateArrowPos2(...args);
        };
    
        // function 
        RDimAlignedData.prototype.clearStyleOverrides = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.clearStyleOverrides");
          return this.__PROXY__.clearStyleOverrides(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDefinitionPoint");
          return this.__PROXY__.getDefinitionPoint(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setText = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setText");
          return this.__PROXY__.setText(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getText = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getText");
          return this.__PROXY__.getText(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setUpperTolerance = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setUpperTolerance");
          return this.__PROXY__.setUpperTolerance(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setLowerTolerance = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setLowerTolerance");
          return this.__PROXY__.setLowerTolerance(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setTextPosition = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setTextPosition");
          return this.__PROXY__.setTextPosition(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getTextPosition = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getTextPosition");
          return this.__PROXY__.getTextPosition(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setFontName = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setFontName");
          return this.__PROXY__.setFontName(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getFontName = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getFontName");
          return this.__PROXY__.getFontName(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setDimBlockName = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setDimBlockName");
          return this.__PROXY__.setDimBlockName(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getDimBlockName = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDimBlockName");
          return this.__PROXY__.getDimBlockName(...args);
        };
    
        // function 
        RDimAlignedData.prototype.hasOverrides = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.hasOverrides");
          return this.__PROXY__.hasOverrides(...args);
        };
    
        // function 
        RDimAlignedData.prototype.hasOverride = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.hasOverride");
          return this.__PROXY__.hasOverride(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getOverrides = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getOverrides");
          return this.__PROXY__.getOverrides(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setDimXVariant = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setDimXVariant");
          return this.__PROXY__.setDimXVariant(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setDimXDouble = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setDimXDouble");
          return this.__PROXY__.setDimXDouble(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setDimXInt = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setDimXInt");
          return this.__PROXY__.setDimXInt(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setDimXBool = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setDimXBool");
          return this.__PROXY__.setDimXBool(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setDimXColor = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setDimXColor");
          return this.__PROXY__.setDimXColor(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getDimXVariant = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDimXVariant");
          return this.__PROXY__.getDimXVariant(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getVariantOverride = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getVariantOverride");
          return this.__PROXY__.getVariantOverride(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getDimXDouble = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDimXDouble");
          return this.__PROXY__.getDimXDouble(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getDoubleOverride = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDoubleOverride");
          return this.__PROXY__.getDoubleOverride(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getDimXInt = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDimXInt");
          return this.__PROXY__.getDimXInt(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getIntOverride = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getIntOverride");
          return this.__PROXY__.getIntOverride(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getDimXBool = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDimXBool");
          return this.__PROXY__.getDimXBool(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getBoolOverride = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getBoolOverride");
          return this.__PROXY__.getBoolOverride(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getDimXColor = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDimXColor");
          return this.__PROXY__.getDimXColor(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getColorOverride = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getColorOverride");
          return this.__PROXY__.getColorOverride(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getDimlfac = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDimlfac");
          return this.__PROXY__.getDimlfac(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setDimlfac = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setDimlfac");
          return this.__PROXY__.setDimlfac(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getLinearFactor = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getLinearFactor");
          return this.__PROXY__.getLinearFactor(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setLinearFactor = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setLinearFactor");
          return this.__PROXY__.setLinearFactor(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getDimscale = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDimscale");
          return this.__PROXY__.getDimscale(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setDimscale = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setDimscale");
          return this.__PROXY__.setDimscale(...args);
        };
    
        // function 
        RDimAlignedData.prototype.isArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.isArrow1Flipped");
          return this.__PROXY__.isArrow1Flipped(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setArrow1Flipped");
          return this.__PROXY__.setArrow1Flipped(...args);
        };
    
        // function 
        RDimAlignedData.prototype.isArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.isArrow2Flipped");
          return this.__PROXY__.isArrow2Flipped(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setArrow2Flipped");
          return this.__PROXY__.setArrow2Flipped(...args);
        };
    
        // function 
        RDimAlignedData.prototype.isExtLineFix = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.isExtLineFix");
          return this.__PROXY__.isExtLineFix(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setExtLineFix = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setExtLineFix");
          return this.__PROXY__.setExtLineFix(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getExtLineFixLength");
          return this.__PROXY__.getExtLineFixLength(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setExtLineFixLength");
          return this.__PROXY__.setExtLineFixLength(...args);
        };
    
        // function 
        RDimAlignedData.prototype.adjustExtensionLineFixLength = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.adjustExtensionLineFixLength");
          return this.__PROXY__.adjustExtensionLineFixLength(...args);
        };
    
        // function 
        RDimAlignedData.prototype.hasSpaceForArrows = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.hasSpaceForArrows");
          return this.__PROXY__.hasSpaceForArrows(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RDimAlignedData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RDimAlignedData.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RDimAlignedData.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getDimexo = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDimexo");
          return this.__PROXY__.getDimexo(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setDimexo = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setDimexo");
          return this.__PROXY__.setDimexo(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getDimexe = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDimexe");
          return this.__PROXY__.getDimexe(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setDimexe = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setDimexe");
          return this.__PROXY__.setDimexe(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getDimasz = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDimasz");
          return this.__PROXY__.getDimasz(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setDimasz = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setDimasz");
          return this.__PROXY__.setDimasz(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getDimdli = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDimdli");
          return this.__PROXY__.getDimdli(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setDimdli = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setDimdli");
          return this.__PROXY__.setDimdli(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getDimgap = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDimgap");
          return this.__PROXY__.getDimgap(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setDimgap = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setDimgap");
          return this.__PROXY__.setDimgap(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getDimtxt = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDimtxt");
          return this.__PROXY__.getDimtxt(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setDimtxt = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setDimtxt");
          return this.__PROXY__.setDimtxt(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getDimlunit = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDimlunit");
          return this.__PROXY__.getDimlunit(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setDimlunit = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setDimlunit");
          return this.__PROXY__.setDimlunit(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getDimjust = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDimjust");
          return this.__PROXY__.getDimjust(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getDimtad = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDimtad");
          return this.__PROXY__.getDimtad(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setDimtad = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setDimtad");
          return this.__PROXY__.setDimtad(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getDimtih = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDimtih");
          return this.__PROXY__.getDimtih(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setDimtih = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setDimtih");
          return this.__PROXY__.setDimtih(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getDimtsz = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDimtsz");
          return this.__PROXY__.getDimtsz(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setDimtsz = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setDimtsz");
          return this.__PROXY__.setDimtsz(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getDimzin = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDimzin");
          return this.__PROXY__.getDimzin(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setDimzin = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setDimzin");
          return this.__PROXY__.setDimzin(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getDimaunit = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDimaunit");
          return this.__PROXY__.getDimaunit(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setDimaunit = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setDimaunit");
          return this.__PROXY__.setDimaunit(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getDimadec = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDimadec");
          return this.__PROXY__.getDimadec(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setDimadec = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setDimadec");
          return this.__PROXY__.setDimadec(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getDimdec = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDimdec");
          return this.__PROXY__.getDimdec(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setDimdec = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setDimdec");
          return this.__PROXY__.setDimdec(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getDimazin = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDimazin");
          return this.__PROXY__.getDimazin(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setDimazin = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setDimazin");
          return this.__PROXY__.setDimazin(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getDimdsep = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDimdsep");
          return this.__PROXY__.getDimdsep(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setDimdsep = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setDimdsep");
          return this.__PROXY__.setDimdsep(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getDimclrt = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDimclrt");
          return this.__PROXY__.getDimclrt(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setDimclrt = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setDimclrt");
          return this.__PROXY__.setDimclrt(...args);
        };
    
        // function 
        RDimAlignedData.prototype.useArchTick = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.useArchTick");
          return this.__PROXY__.useArchTick(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getDimblk = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDimblk");
          return this.__PROXY__.getDimblk(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getDimblkName = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDimblkName");
          return this.__PROXY__.getDimblkName(...args);
        };
    
        // function 
        RDimAlignedData.prototype.isDimXScaled = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.isDimXScaled");
          return this.__PROXY__.isDimXScaled(...args);
        };
    
        // function 
        RDimAlignedData.prototype.hasCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.hasCustomTextPosition");
          return this.__PROXY__.hasCustomTextPosition(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setCustomTextPosition");
          return this.__PROXY__.setCustomTextPosition(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getLineSpacingStyle");
          return this.__PROXY__.getLineSpacingStyle(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getLineSpacingFactor");
          return this.__PROXY__.getLineSpacingFactor(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getTextRotation = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getTextRotation");
          return this.__PROXY__.getTextRotation(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setTextRotation = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setTextRotation");
          return this.__PROXY__.setTextRotation(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getTextData = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getTextData");
          return this.__PROXY__.getTextData(...args);
        };
    
        // function 
        RDimAlignedData.prototype.initTextData = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.initTextData");
          return this.__PROXY__.initTextData(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getMeasurement = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getMeasurement");
          return this.__PROXY__.getMeasurement(...args);
        };
    
        // function 
        RDimAlignedData.prototype.formatLabel = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.formatLabel");
          return this.__PROXY__.formatLabel(...args);
        };
    
        // function 
        RDimAlignedData.prototype.formatAngleLabel = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.formatAngleLabel");
          return this.__PROXY__.formatAngleLabel(...args);
        };
    
        // function 
        RDimAlignedData.prototype.update = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getDimensionBlockReference = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getDimensionBlockReference");
          return this.__PROXY__.getDimensionBlockReference(...args);
        };
    
        // function 
        RDimAlignedData.prototype.hasDimensionBlockReference = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.hasDimensionBlockReference");
          return this.__PROXY__.hasDimensionBlockReference(...args);
        };
    
        // function 
        RDimAlignedData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RDimAlignedData.prototype.isSane = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setDefinitionPoint");
          return this.__PROXY__.setDefinitionPoint(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setExtensionPoint1 = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setExtensionPoint1");
          return this.__PROXY__.setExtensionPoint1(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getExtensionPoint1 = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getExtensionPoint1");
          return this.__PROXY__.getExtensionPoint1(...args);
        };
    
        // function 
        RDimAlignedData.prototype.setExtensionPoint2 = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.setExtensionPoint2");
          return this.__PROXY__.setExtensionPoint2(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getExtensionPoint2 = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getExtensionPoint2");
          return this.__PROXY__.getExtensionPoint2(...args);
        };
    
        // function 
        RDimAlignedData.prototype.move = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RDimAlignedData.prototype.rotate = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RDimAlignedData.prototype.scale = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RDimAlignedData.prototype.mirror = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RDimAlignedData.prototype.stretch = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getType = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RDimAlignedData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RDimAlignedData.prototype.recomputeDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.recomputeDefinitionPoint");
          return this.__PROXY__.recomputeDefinitionPoint(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getMeasuredValue = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getMeasuredValue");
          return this.__PROXY__.getMeasuredValue(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getAutoLabel = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getAutoLabel");
          return this.__PROXY__.getAutoLabel(...args);
        };
    
        // function 
        RDimAlignedData.prototype.getAngle = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.getAngle");
          return this.__PROXY__.getAngle(...args);
        };
    
        // function 
        RDimAlignedData.prototype.updateRefDefinitionPoint1 = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.updateRefDefinitionPoint1");
          return this.__PROXY__.updateRefDefinitionPoint1(...args);
        };
    
        // function 
        RDimAlignedData.prototype.updateRefDefinitionPoint2 = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.updateRefDefinitionPoint2");
          return this.__PROXY__.updateRefDefinitionPoint2(...args);
        };
    
        // function 
        RDimAlignedData.prototype.to2D = function(...args) 
          
        {
          //print("JS: RDimAlignedData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RDimAlignedData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimAlignedData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RDimAlignedData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      