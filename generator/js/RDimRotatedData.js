
      // auto generated
      //var self;

      // class constructor:
      function RDimRotatedData() {
        

        // should be RDimRotatedData_BaseJs.call(this, engine):
        //RDimRotatedData.prototype = new RDimRotatedData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimRotatedData.getIdStatic()))) {

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
            qWarning("RDimRotatedData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new RDimRotatedData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimRotatedData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RDimRotatedData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimRotatedData);
  }

  
  else {
    
        print("RDimRotatedData(): wrong number / type of arguments");
      
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

      //RDimRotatedData.prototype = new RDimRotatedData_BaseJs(engine);
      //RDimRotatedData.prototype = new RDimRotatedData_Wrapper(engine);
      RDimRotatedData.prototype = new Object();

      RDimRotatedData.prototype.toString = function() {
          //return "RDimRotatedData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimRotatedData [JS]";
        };
      RDimRotatedData.getObjectType = function() {
        return RJSType_RDimRotatedData.getIdStatic();
      };

      RDimRotatedData.prototype.getObjectType = function() {
        return RJSType_RDimRotatedData.getIdStatic();
      };

      RDimRotatedData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimRotatedData.getIdStatic()) {
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
        RDimRotatedData.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RDimRotatedData.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RDimRotatedData.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setZ = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getHull = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RDimRotatedData.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RDimRotatedData.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RDimRotatedData.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RDimRotatedData.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setColor = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getColor = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RDimRotatedData.prototype.isInside = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RDimRotatedData.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RDimRotatedData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RDimRotatedData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RDimRotatedData.prototype.render = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.render");
          return this.__PROXY__.render(...args);
        };
    
        // function 
        RDimRotatedData.prototype.updateBoundingBox = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.updateBoundingBox");
          return this.__PROXY__.updateBoundingBox(...args);
        };
    
        // function 
        RDimRotatedData.prototype.updateTextPositionCenter = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.updateTextPositionCenter");
          return this.__PROXY__.updateTextPositionCenter(...args);
        };
    
        // function 
        RDimRotatedData.prototype.updateTextPositionSide = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.updateTextPositionSide");
          return this.__PROXY__.updateTextPositionSide(...args);
        };
    
        // function 
        RDimRotatedData.prototype.updateTextData = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.updateTextData");
          return this.__PROXY__.updateTextData(...args);
        };
    
        // function 
        RDimRotatedData.prototype.updateShapes = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.updateShapes");
          return this.__PROXY__.updateShapes(...args);
        };
    
        // function 
        RDimRotatedData.prototype.updateArrowPos1 = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.updateArrowPos1");
          return this.__PROXY__.updateArrowPos1(...args);
        };
    
        // function 
        RDimRotatedData.prototype.updateArrowPos2 = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.updateArrowPos2");
          return this.__PROXY__.updateArrowPos2(...args);
        };
    
        // function 
        RDimRotatedData.prototype.clearStyleOverrides = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.clearStyleOverrides");
          return this.__PROXY__.clearStyleOverrides(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDefinitionPoint");
          return this.__PROXY__.getDefinitionPoint(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setText = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setText");
          return this.__PROXY__.setText(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getText = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getText");
          return this.__PROXY__.getText(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setUpperTolerance = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setUpperTolerance");
          return this.__PROXY__.setUpperTolerance(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setLowerTolerance = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setLowerTolerance");
          return this.__PROXY__.setLowerTolerance(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setTextPosition = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setTextPosition");
          return this.__PROXY__.setTextPosition(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getTextPosition = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getTextPosition");
          return this.__PROXY__.getTextPosition(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setFontName = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setFontName");
          return this.__PROXY__.setFontName(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getFontName = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getFontName");
          return this.__PROXY__.getFontName(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setDimBlockName = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setDimBlockName");
          return this.__PROXY__.setDimBlockName(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDimBlockName = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDimBlockName");
          return this.__PROXY__.getDimBlockName(...args);
        };
    
        // function 
        RDimRotatedData.prototype.hasOverrides = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.hasOverrides");
          return this.__PROXY__.hasOverrides(...args);
        };
    
        // function 
        RDimRotatedData.prototype.hasOverride = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.hasOverride");
          return this.__PROXY__.hasOverride(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getOverrides = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getOverrides");
          return this.__PROXY__.getOverrides(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setDimXVariant = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setDimXVariant");
          return this.__PROXY__.setDimXVariant(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setDimXDouble = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setDimXDouble");
          return this.__PROXY__.setDimXDouble(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setDimXInt = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setDimXInt");
          return this.__PROXY__.setDimXInt(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setDimXBool = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setDimXBool");
          return this.__PROXY__.setDimXBool(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setDimXColor = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setDimXColor");
          return this.__PROXY__.setDimXColor(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDimXVariant = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDimXVariant");
          return this.__PROXY__.getDimXVariant(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getVariantOverride = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getVariantOverride");
          return this.__PROXY__.getVariantOverride(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDimXDouble = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDimXDouble");
          return this.__PROXY__.getDimXDouble(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDoubleOverride = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDoubleOverride");
          return this.__PROXY__.getDoubleOverride(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDimXInt = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDimXInt");
          return this.__PROXY__.getDimXInt(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getIntOverride = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getIntOverride");
          return this.__PROXY__.getIntOverride(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDimXBool = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDimXBool");
          return this.__PROXY__.getDimXBool(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getBoolOverride = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getBoolOverride");
          return this.__PROXY__.getBoolOverride(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDimXColor = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDimXColor");
          return this.__PROXY__.getDimXColor(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getColorOverride = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getColorOverride");
          return this.__PROXY__.getColorOverride(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDimlfac = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDimlfac");
          return this.__PROXY__.getDimlfac(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setDimlfac = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setDimlfac");
          return this.__PROXY__.setDimlfac(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getLinearFactor = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getLinearFactor");
          return this.__PROXY__.getLinearFactor(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setLinearFactor = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setLinearFactor");
          return this.__PROXY__.setLinearFactor(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDimscale = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDimscale");
          return this.__PROXY__.getDimscale(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setDimscale = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setDimscale");
          return this.__PROXY__.setDimscale(...args);
        };
    
        // function 
        RDimRotatedData.prototype.isArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.isArrow1Flipped");
          return this.__PROXY__.isArrow1Flipped(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setArrow1Flipped");
          return this.__PROXY__.setArrow1Flipped(...args);
        };
    
        // function 
        RDimRotatedData.prototype.isArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.isArrow2Flipped");
          return this.__PROXY__.isArrow2Flipped(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setArrow2Flipped");
          return this.__PROXY__.setArrow2Flipped(...args);
        };
    
        // function 
        RDimRotatedData.prototype.isExtLineFix = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.isExtLineFix");
          return this.__PROXY__.isExtLineFix(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setExtLineFix = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setExtLineFix");
          return this.__PROXY__.setExtLineFix(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getExtLineFixLength");
          return this.__PROXY__.getExtLineFixLength(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setExtLineFixLength");
          return this.__PROXY__.setExtLineFixLength(...args);
        };
    
        // function 
        RDimRotatedData.prototype.adjustExtensionLineFixLength = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.adjustExtensionLineFixLength");
          return this.__PROXY__.adjustExtensionLineFixLength(...args);
        };
    
        // function 
        RDimRotatedData.prototype.hasSpaceForArrows = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.hasSpaceForArrows");
          return this.__PROXY__.hasSpaceForArrows(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RDimRotatedData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RDimRotatedData.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RDimRotatedData.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDimexo = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDimexo");
          return this.__PROXY__.getDimexo(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setDimexo = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setDimexo");
          return this.__PROXY__.setDimexo(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDimexe = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDimexe");
          return this.__PROXY__.getDimexe(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setDimexe = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setDimexe");
          return this.__PROXY__.setDimexe(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDimasz = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDimasz");
          return this.__PROXY__.getDimasz(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setDimasz = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setDimasz");
          return this.__PROXY__.setDimasz(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDimdli = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDimdli");
          return this.__PROXY__.getDimdli(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setDimdli = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setDimdli");
          return this.__PROXY__.setDimdli(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDimgap = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDimgap");
          return this.__PROXY__.getDimgap(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setDimgap = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setDimgap");
          return this.__PROXY__.setDimgap(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDimtxt = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDimtxt");
          return this.__PROXY__.getDimtxt(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setDimtxt = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setDimtxt");
          return this.__PROXY__.setDimtxt(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDimlunit = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDimlunit");
          return this.__PROXY__.getDimlunit(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setDimlunit = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setDimlunit");
          return this.__PROXY__.setDimlunit(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDimjust = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDimjust");
          return this.__PROXY__.getDimjust(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDimtad = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDimtad");
          return this.__PROXY__.getDimtad(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setDimtad = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setDimtad");
          return this.__PROXY__.setDimtad(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDimtih = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDimtih");
          return this.__PROXY__.getDimtih(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setDimtih = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setDimtih");
          return this.__PROXY__.setDimtih(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDimtsz = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDimtsz");
          return this.__PROXY__.getDimtsz(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setDimtsz = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setDimtsz");
          return this.__PROXY__.setDimtsz(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDimzin = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDimzin");
          return this.__PROXY__.getDimzin(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setDimzin = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setDimzin");
          return this.__PROXY__.setDimzin(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDimaunit = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDimaunit");
          return this.__PROXY__.getDimaunit(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setDimaunit = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setDimaunit");
          return this.__PROXY__.setDimaunit(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDimadec = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDimadec");
          return this.__PROXY__.getDimadec(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setDimadec = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setDimadec");
          return this.__PROXY__.setDimadec(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDimdec = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDimdec");
          return this.__PROXY__.getDimdec(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setDimdec = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setDimdec");
          return this.__PROXY__.setDimdec(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDimazin = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDimazin");
          return this.__PROXY__.getDimazin(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setDimazin = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setDimazin");
          return this.__PROXY__.setDimazin(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDimdsep = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDimdsep");
          return this.__PROXY__.getDimdsep(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setDimdsep = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setDimdsep");
          return this.__PROXY__.setDimdsep(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDimclrt = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDimclrt");
          return this.__PROXY__.getDimclrt(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setDimclrt = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setDimclrt");
          return this.__PROXY__.setDimclrt(...args);
        };
    
        // function 
        RDimRotatedData.prototype.useArchTick = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.useArchTick");
          return this.__PROXY__.useArchTick(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDimblk = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDimblk");
          return this.__PROXY__.getDimblk(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDimblkName = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDimblkName");
          return this.__PROXY__.getDimblkName(...args);
        };
    
        // function 
        RDimRotatedData.prototype.isDimXScaled = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.isDimXScaled");
          return this.__PROXY__.isDimXScaled(...args);
        };
    
        // function 
        RDimRotatedData.prototype.hasCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.hasCustomTextPosition");
          return this.__PROXY__.hasCustomTextPosition(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setCustomTextPosition");
          return this.__PROXY__.setCustomTextPosition(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getLineSpacingStyle");
          return this.__PROXY__.getLineSpacingStyle(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getLineSpacingFactor");
          return this.__PROXY__.getLineSpacingFactor(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getTextRotation = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getTextRotation");
          return this.__PROXY__.getTextRotation(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setTextRotation = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setTextRotation");
          return this.__PROXY__.setTextRotation(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getTextData = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getTextData");
          return this.__PROXY__.getTextData(...args);
        };
    
        // function 
        RDimRotatedData.prototype.initTextData = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.initTextData");
          return this.__PROXY__.initTextData(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getMeasurement = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getMeasurement");
          return this.__PROXY__.getMeasurement(...args);
        };
    
        // function 
        RDimRotatedData.prototype.formatLabel = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.formatLabel");
          return this.__PROXY__.formatLabel(...args);
        };
    
        // function 
        RDimRotatedData.prototype.formatAngleLabel = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.formatAngleLabel");
          return this.__PROXY__.formatAngleLabel(...args);
        };
    
        // function 
        RDimRotatedData.prototype.update = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDimensionBlockReference = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDimensionBlockReference");
          return this.__PROXY__.getDimensionBlockReference(...args);
        };
    
        // function 
        RDimRotatedData.prototype.hasDimensionBlockReference = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.hasDimensionBlockReference");
          return this.__PROXY__.hasDimensionBlockReference(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setDefinitionPoint");
          return this.__PROXY__.setDefinitionPoint(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setExtensionPoint1 = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setExtensionPoint1");
          return this.__PROXY__.setExtensionPoint1(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getExtensionPoint1 = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getExtensionPoint1");
          return this.__PROXY__.getExtensionPoint1(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setExtensionPoint2 = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setExtensionPoint2");
          return this.__PROXY__.setExtensionPoint2(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getExtensionPoint2 = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getExtensionPoint2");
          return this.__PROXY__.getExtensionPoint2(...args);
        };
    
        // function 
        RDimRotatedData.prototype.move = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RDimRotatedData.prototype.scale = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RDimRotatedData.prototype.stretch = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RDimRotatedData.prototype.to2D = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getType = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RDimRotatedData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RDimRotatedData.prototype.isSane = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RDimRotatedData.prototype.setRotation = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.setRotation");
          return this.__PROXY__.setRotation(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getRotation = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getRotation");
          return this.__PROXY__.getRotation(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RDimRotatedData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getDimPoints = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getDimPoints");
          return this.__PROXY__.getDimPoints(...args);
        };
    
        // function 
        RDimRotatedData.prototype.recomputeDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.recomputeDefinitionPoint");
          return this.__PROXY__.recomputeDefinitionPoint(...args);
        };
    
        // function 
        RDimRotatedData.prototype.rotate = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RDimRotatedData.prototype.mirror = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getMeasuredValue = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getMeasuredValue");
          return this.__PROXY__.getMeasuredValue(...args);
        };
    
        // function 
        RDimRotatedData.prototype.getAutoLabel = function(...args) 
          
        {
          //print("JS: RDimRotatedData.prototype.getAutoLabel");
          return this.__PROXY__.getAutoLabel(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RDimRotatedData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimRotatedData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RDimRotatedData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      