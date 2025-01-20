
      // auto generated
      //var self;

      // class constructor:
      function RDimDiametricData() {
        

        // should be RDimDiametricData_BaseJs.call(this, engine):
        //RDimDiametricData.prototype = new RDimDiametricData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimDiametricData.getIdStatic()))) {

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
            qWarning("RDimDiametricData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RDimDiametricData_Wrapper(
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

      

        //copyProperties(this, wrapper, RDimDiametricData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RDimDiametricData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimDiametricData);
  }

  
  else {
    
        print("RDimDiametricData(): wrong number / type of arguments");
      
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

      //RDimDiametricData.prototype = new RDimDiametricData_BaseJs(engine);
      //RDimDiametricData.prototype = new RDimDiametricData_Wrapper(engine);
      RDimDiametricData.prototype = new Object();

      RDimDiametricData.prototype.toString = function() {
          //return "RDimDiametricData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimDiametricData [JS]";
        };
      RDimDiametricData.getObjectType = function() {
        return RJSType_RDimDiametricData.getIdStatic();
      };

      RDimDiametricData.prototype.getObjectType = function() {
        return RJSType_RDimDiametricData.getIdStatic();
      };

      RDimDiametricData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimDiametricData.getIdStatic()) {
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
        RDimDiametricData.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RDimDiametricData.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RDimDiametricData.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setZ = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getHull = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RDimDiametricData.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RDimDiametricData.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RDimDiametricData.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RDimDiametricData.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setColor = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getColor = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RDimDiametricData.prototype.isInside = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RDimDiametricData.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RDimDiametricData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RDimDiametricData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RDimDiametricData.prototype.stretch = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RDimDiametricData.prototype.render = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.render");
          return this.__PROXY__.render(...args);
        };
    
        // function 
        RDimDiametricData.prototype.updateBoundingBox = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.updateBoundingBox");
          return this.__PROXY__.updateBoundingBox(...args);
        };
    
        // function 
        RDimDiametricData.prototype.updateTextPositionCenter = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.updateTextPositionCenter");
          return this.__PROXY__.updateTextPositionCenter(...args);
        };
    
        // function 
        RDimDiametricData.prototype.updateTextPositionSide = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.updateTextPositionSide");
          return this.__PROXY__.updateTextPositionSide(...args);
        };
    
        // function 
        RDimDiametricData.prototype.updateTextData = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.updateTextData");
          return this.__PROXY__.updateTextData(...args);
        };
    
        // function 
        RDimDiametricData.prototype.updateShapes = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.updateShapes");
          return this.__PROXY__.updateShapes(...args);
        };
    
        // function 
        RDimDiametricData.prototype.updateArrowPos1 = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.updateArrowPos1");
          return this.__PROXY__.updateArrowPos1(...args);
        };
    
        // function 
        RDimDiametricData.prototype.updateArrowPos2 = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.updateArrowPos2");
          return this.__PROXY__.updateArrowPos2(...args);
        };
    
        // function 
        RDimDiametricData.prototype.clearStyleOverrides = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.clearStyleOverrides");
          return this.__PROXY__.clearStyleOverrides(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setDefinitionPoint");
          return this.__PROXY__.setDefinitionPoint(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDefinitionPoint");
          return this.__PROXY__.getDefinitionPoint(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setText = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setText");
          return this.__PROXY__.setText(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getText = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getText");
          return this.__PROXY__.getText(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setUpperTolerance = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setUpperTolerance");
          return this.__PROXY__.setUpperTolerance(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setLowerTolerance = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setLowerTolerance");
          return this.__PROXY__.setLowerTolerance(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setTextPosition = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setTextPosition");
          return this.__PROXY__.setTextPosition(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getTextPosition = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getTextPosition");
          return this.__PROXY__.getTextPosition(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setFontName = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setFontName");
          return this.__PROXY__.setFontName(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getFontName = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getFontName");
          return this.__PROXY__.getFontName(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setDimBlockName = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setDimBlockName");
          return this.__PROXY__.setDimBlockName(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getDimBlockName = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDimBlockName");
          return this.__PROXY__.getDimBlockName(...args);
        };
    
        // function 
        RDimDiametricData.prototype.hasOverrides = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.hasOverrides");
          return this.__PROXY__.hasOverrides(...args);
        };
    
        // function 
        RDimDiametricData.prototype.hasOverride = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.hasOverride");
          return this.__PROXY__.hasOverride(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getOverrides = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getOverrides");
          return this.__PROXY__.getOverrides(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setDimXVariant = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setDimXVariant");
          return this.__PROXY__.setDimXVariant(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setDimXDouble = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setDimXDouble");
          return this.__PROXY__.setDimXDouble(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setDimXInt = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setDimXInt");
          return this.__PROXY__.setDimXInt(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setDimXBool = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setDimXBool");
          return this.__PROXY__.setDimXBool(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setDimXColor = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setDimXColor");
          return this.__PROXY__.setDimXColor(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getDimXVariant = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDimXVariant");
          return this.__PROXY__.getDimXVariant(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getVariantOverride = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getVariantOverride");
          return this.__PROXY__.getVariantOverride(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getDimXDouble = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDimXDouble");
          return this.__PROXY__.getDimXDouble(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getDoubleOverride = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDoubleOverride");
          return this.__PROXY__.getDoubleOverride(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getDimXInt = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDimXInt");
          return this.__PROXY__.getDimXInt(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getIntOverride = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getIntOverride");
          return this.__PROXY__.getIntOverride(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getDimXBool = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDimXBool");
          return this.__PROXY__.getDimXBool(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getBoolOverride = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getBoolOverride");
          return this.__PROXY__.getBoolOverride(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getDimXColor = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDimXColor");
          return this.__PROXY__.getDimXColor(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getColorOverride = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getColorOverride");
          return this.__PROXY__.getColorOverride(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getDimlfac = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDimlfac");
          return this.__PROXY__.getDimlfac(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setDimlfac = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setDimlfac");
          return this.__PROXY__.setDimlfac(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getLinearFactor = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getLinearFactor");
          return this.__PROXY__.getLinearFactor(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setLinearFactor = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setLinearFactor");
          return this.__PROXY__.setLinearFactor(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getDimscale = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDimscale");
          return this.__PROXY__.getDimscale(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setDimscale = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setDimscale");
          return this.__PROXY__.setDimscale(...args);
        };
    
        // function 
        RDimDiametricData.prototype.isArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.isArrow1Flipped");
          return this.__PROXY__.isArrow1Flipped(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setArrow1Flipped");
          return this.__PROXY__.setArrow1Flipped(...args);
        };
    
        // function 
        RDimDiametricData.prototype.isArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.isArrow2Flipped");
          return this.__PROXY__.isArrow2Flipped(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setArrow2Flipped");
          return this.__PROXY__.setArrow2Flipped(...args);
        };
    
        // function 
        RDimDiametricData.prototype.isExtLineFix = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.isExtLineFix");
          return this.__PROXY__.isExtLineFix(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setExtLineFix = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setExtLineFix");
          return this.__PROXY__.setExtLineFix(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getExtLineFixLength");
          return this.__PROXY__.getExtLineFixLength(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setExtLineFixLength");
          return this.__PROXY__.setExtLineFixLength(...args);
        };
    
        // function 
        RDimDiametricData.prototype.adjustExtensionLineFixLength = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.adjustExtensionLineFixLength");
          return this.__PROXY__.adjustExtensionLineFixLength(...args);
        };
    
        // function 
        RDimDiametricData.prototype.hasSpaceForArrows = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.hasSpaceForArrows");
          return this.__PROXY__.hasSpaceForArrows(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RDimDiametricData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RDimDiametricData.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RDimDiametricData.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getDimexo = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDimexo");
          return this.__PROXY__.getDimexo(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setDimexo = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setDimexo");
          return this.__PROXY__.setDimexo(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getDimexe = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDimexe");
          return this.__PROXY__.getDimexe(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setDimexe = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setDimexe");
          return this.__PROXY__.setDimexe(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getDimasz = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDimasz");
          return this.__PROXY__.getDimasz(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setDimasz = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setDimasz");
          return this.__PROXY__.setDimasz(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getDimdli = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDimdli");
          return this.__PROXY__.getDimdli(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setDimdli = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setDimdli");
          return this.__PROXY__.setDimdli(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getDimgap = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDimgap");
          return this.__PROXY__.getDimgap(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setDimgap = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setDimgap");
          return this.__PROXY__.setDimgap(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getDimtxt = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDimtxt");
          return this.__PROXY__.getDimtxt(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setDimtxt = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setDimtxt");
          return this.__PROXY__.setDimtxt(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getDimlunit = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDimlunit");
          return this.__PROXY__.getDimlunit(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setDimlunit = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setDimlunit");
          return this.__PROXY__.setDimlunit(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getDimjust = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDimjust");
          return this.__PROXY__.getDimjust(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getDimtad = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDimtad");
          return this.__PROXY__.getDimtad(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setDimtad = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setDimtad");
          return this.__PROXY__.setDimtad(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getDimtih = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDimtih");
          return this.__PROXY__.getDimtih(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setDimtih = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setDimtih");
          return this.__PROXY__.setDimtih(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getDimtsz = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDimtsz");
          return this.__PROXY__.getDimtsz(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setDimtsz = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setDimtsz");
          return this.__PROXY__.setDimtsz(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getDimzin = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDimzin");
          return this.__PROXY__.getDimzin(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setDimzin = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setDimzin");
          return this.__PROXY__.setDimzin(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getDimaunit = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDimaunit");
          return this.__PROXY__.getDimaunit(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setDimaunit = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setDimaunit");
          return this.__PROXY__.setDimaunit(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getDimadec = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDimadec");
          return this.__PROXY__.getDimadec(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setDimadec = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setDimadec");
          return this.__PROXY__.setDimadec(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getDimdec = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDimdec");
          return this.__PROXY__.getDimdec(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setDimdec = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setDimdec");
          return this.__PROXY__.setDimdec(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getDimazin = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDimazin");
          return this.__PROXY__.getDimazin(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setDimazin = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setDimazin");
          return this.__PROXY__.setDimazin(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getDimdsep = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDimdsep");
          return this.__PROXY__.getDimdsep(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setDimdsep = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setDimdsep");
          return this.__PROXY__.setDimdsep(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getDimclrt = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDimclrt");
          return this.__PROXY__.getDimclrt(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setDimclrt = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setDimclrt");
          return this.__PROXY__.setDimclrt(...args);
        };
    
        // function 
        RDimDiametricData.prototype.useArchTick = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.useArchTick");
          return this.__PROXY__.useArchTick(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getDimblk = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDimblk");
          return this.__PROXY__.getDimblk(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getDimblkName = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDimblkName");
          return this.__PROXY__.getDimblkName(...args);
        };
    
        // function 
        RDimDiametricData.prototype.isDimXScaled = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.isDimXScaled");
          return this.__PROXY__.isDimXScaled(...args);
        };
    
        // function 
        RDimDiametricData.prototype.hasCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.hasCustomTextPosition");
          return this.__PROXY__.hasCustomTextPosition(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setCustomTextPosition");
          return this.__PROXY__.setCustomTextPosition(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getLineSpacingStyle");
          return this.__PROXY__.getLineSpacingStyle(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getLineSpacingFactor");
          return this.__PROXY__.getLineSpacingFactor(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getTextRotation = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getTextRotation");
          return this.__PROXY__.getTextRotation(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setTextRotation = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setTextRotation");
          return this.__PROXY__.setTextRotation(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getTextData = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getTextData");
          return this.__PROXY__.getTextData(...args);
        };
    
        // function 
        RDimDiametricData.prototype.initTextData = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.initTextData");
          return this.__PROXY__.initTextData(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getMeasurement = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getMeasurement");
          return this.__PROXY__.getMeasurement(...args);
        };
    
        // function 
        RDimDiametricData.prototype.formatLabel = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.formatLabel");
          return this.__PROXY__.formatLabel(...args);
        };
    
        // function 
        RDimDiametricData.prototype.formatAngleLabel = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.formatAngleLabel");
          return this.__PROXY__.formatAngleLabel(...args);
        };
    
        // function 
        RDimDiametricData.prototype.update = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getDimensionBlockReference = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getDimensionBlockReference");
          return this.__PROXY__.getDimensionBlockReference(...args);
        };
    
        // function 
        RDimDiametricData.prototype.hasDimensionBlockReference = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.hasDimensionBlockReference");
          return this.__PROXY__.hasDimensionBlockReference(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getType = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RDimDiametricData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RDimDiametricData.prototype.isSane = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setChordPoint = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setChordPoint");
          return this.__PROXY__.setChordPoint(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getChordPoint = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getChordPoint");
          return this.__PROXY__.getChordPoint(...args);
        };
    
        // function 
        RDimDiametricData.prototype.setFarChordPoint = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.setFarChordPoint");
          return this.__PROXY__.setFarChordPoint(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getFarChordPoint = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getFarChordPoint");
          return this.__PROXY__.getFarChordPoint(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RDimDiametricData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RDimDiametricData.prototype.move = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RDimDiametricData.prototype.rotate = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RDimDiametricData.prototype.scale = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RDimDiametricData.prototype.mirror = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getMeasuredValue = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getMeasuredValue");
          return this.__PROXY__.getMeasuredValue(...args);
        };
    
        // function 
        RDimDiametricData.prototype.getAutoLabel = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.getAutoLabel");
          return this.__PROXY__.getAutoLabel(...args);
        };
    
        // function 
        RDimDiametricData.prototype.to2D = function(...args) 
          
        {
          //print("JS: RDimDiametricData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RDimDiametricData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimDiametricData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RDimDiametricData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      