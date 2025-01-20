
      // auto generated
      //var self;

      // class constructor:
      function RDimOrdinateData() {
        

        // should be RDimOrdinateData_BaseJs.call(this, engine):
        //RDimOrdinateData.prototype = new RDimOrdinateData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimOrdinateData.getIdStatic()))) {

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
            qWarning("RDimOrdinateData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RDimOrdinateData_Wrapper(
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

      

        //copyProperties(this, wrapper, RDimOrdinateData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RDimOrdinateData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimOrdinateData);
  }

  
  else {
    
        print("RDimOrdinateData(): wrong number / type of arguments");
      
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

      //RDimOrdinateData.prototype = new RDimOrdinateData_BaseJs(engine);
      //RDimOrdinateData.prototype = new RDimOrdinateData_Wrapper(engine);
      RDimOrdinateData.prototype = new Object();

      RDimOrdinateData.prototype.toString = function() {
          //return "RDimOrdinateData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimOrdinateData [JS]";
        };
      RDimOrdinateData.getObjectType = function() {
        return RJSType_RDimOrdinateData.getIdStatic();
      };

      RDimOrdinateData.prototype.getObjectType = function() {
        return RJSType_RDimOrdinateData.getIdStatic();
      };

      RDimOrdinateData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimOrdinateData.getIdStatic()) {
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
        RDimOrdinateData.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setZ = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getHull = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setColor = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getColor = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.isInside = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.render = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.render");
          return this.__PROXY__.render(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.updateBoundingBox = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.updateBoundingBox");
          return this.__PROXY__.updateBoundingBox(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.updateTextPositionCenter = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.updateTextPositionCenter");
          return this.__PROXY__.updateTextPositionCenter(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.updateTextPositionSide = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.updateTextPositionSide");
          return this.__PROXY__.updateTextPositionSide(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.updateTextData = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.updateTextData");
          return this.__PROXY__.updateTextData(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.updateShapes = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.updateShapes");
          return this.__PROXY__.updateShapes(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.updateArrowPos1 = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.updateArrowPos1");
          return this.__PROXY__.updateArrowPos1(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.updateArrowPos2 = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.updateArrowPos2");
          return this.__PROXY__.updateArrowPos2(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.clearStyleOverrides = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.clearStyleOverrides");
          return this.__PROXY__.clearStyleOverrides(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setDefinitionPoint");
          return this.__PROXY__.setDefinitionPoint(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDefinitionPoint");
          return this.__PROXY__.getDefinitionPoint(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setText = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setText");
          return this.__PROXY__.setText(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getText = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getText");
          return this.__PROXY__.getText(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setUpperTolerance = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setUpperTolerance");
          return this.__PROXY__.setUpperTolerance(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setLowerTolerance = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setLowerTolerance");
          return this.__PROXY__.setLowerTolerance(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setTextPosition = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setTextPosition");
          return this.__PROXY__.setTextPosition(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getTextPosition = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getTextPosition");
          return this.__PROXY__.getTextPosition(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setFontName = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setFontName");
          return this.__PROXY__.setFontName(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getFontName = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getFontName");
          return this.__PROXY__.getFontName(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setDimBlockName = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setDimBlockName");
          return this.__PROXY__.setDimBlockName(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDimBlockName = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDimBlockName");
          return this.__PROXY__.getDimBlockName(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.hasOverrides = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.hasOverrides");
          return this.__PROXY__.hasOverrides(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.hasOverride = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.hasOverride");
          return this.__PROXY__.hasOverride(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getOverrides = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getOverrides");
          return this.__PROXY__.getOverrides(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setDimXVariant = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setDimXVariant");
          return this.__PROXY__.setDimXVariant(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setDimXDouble = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setDimXDouble");
          return this.__PROXY__.setDimXDouble(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setDimXInt = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setDimXInt");
          return this.__PROXY__.setDimXInt(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setDimXBool = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setDimXBool");
          return this.__PROXY__.setDimXBool(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setDimXColor = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setDimXColor");
          return this.__PROXY__.setDimXColor(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDimXVariant = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDimXVariant");
          return this.__PROXY__.getDimXVariant(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getVariantOverride = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getVariantOverride");
          return this.__PROXY__.getVariantOverride(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDimXDouble = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDimXDouble");
          return this.__PROXY__.getDimXDouble(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDoubleOverride = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDoubleOverride");
          return this.__PROXY__.getDoubleOverride(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDimXInt = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDimXInt");
          return this.__PROXY__.getDimXInt(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getIntOverride = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getIntOverride");
          return this.__PROXY__.getIntOverride(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDimXBool = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDimXBool");
          return this.__PROXY__.getDimXBool(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getBoolOverride = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getBoolOverride");
          return this.__PROXY__.getBoolOverride(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDimXColor = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDimXColor");
          return this.__PROXY__.getDimXColor(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getColorOverride = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getColorOverride");
          return this.__PROXY__.getColorOverride(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDimlfac = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDimlfac");
          return this.__PROXY__.getDimlfac(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setDimlfac = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setDimlfac");
          return this.__PROXY__.setDimlfac(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getLinearFactor = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getLinearFactor");
          return this.__PROXY__.getLinearFactor(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setLinearFactor = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setLinearFactor");
          return this.__PROXY__.setLinearFactor(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDimscale = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDimscale");
          return this.__PROXY__.getDimscale(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setDimscale = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setDimscale");
          return this.__PROXY__.setDimscale(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.isArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.isArrow1Flipped");
          return this.__PROXY__.isArrow1Flipped(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setArrow1Flipped");
          return this.__PROXY__.setArrow1Flipped(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.isArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.isArrow2Flipped");
          return this.__PROXY__.isArrow2Flipped(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setArrow2Flipped");
          return this.__PROXY__.setArrow2Flipped(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.isExtLineFix = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.isExtLineFix");
          return this.__PROXY__.isExtLineFix(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setExtLineFix = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setExtLineFix");
          return this.__PROXY__.setExtLineFix(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getExtLineFixLength");
          return this.__PROXY__.getExtLineFixLength(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setExtLineFixLength");
          return this.__PROXY__.setExtLineFixLength(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.adjustExtensionLineFixLength = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.adjustExtensionLineFixLength");
          return this.__PROXY__.adjustExtensionLineFixLength(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.hasSpaceForArrows = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.hasSpaceForArrows");
          return this.__PROXY__.hasSpaceForArrows(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDimexo = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDimexo");
          return this.__PROXY__.getDimexo(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setDimexo = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setDimexo");
          return this.__PROXY__.setDimexo(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDimexe = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDimexe");
          return this.__PROXY__.getDimexe(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setDimexe = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setDimexe");
          return this.__PROXY__.setDimexe(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDimasz = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDimasz");
          return this.__PROXY__.getDimasz(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setDimasz = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setDimasz");
          return this.__PROXY__.setDimasz(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDimdli = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDimdli");
          return this.__PROXY__.getDimdli(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setDimdli = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setDimdli");
          return this.__PROXY__.setDimdli(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDimgap = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDimgap");
          return this.__PROXY__.getDimgap(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setDimgap = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setDimgap");
          return this.__PROXY__.setDimgap(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDimtxt = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDimtxt");
          return this.__PROXY__.getDimtxt(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setDimtxt = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setDimtxt");
          return this.__PROXY__.setDimtxt(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDimlunit = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDimlunit");
          return this.__PROXY__.getDimlunit(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setDimlunit = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setDimlunit");
          return this.__PROXY__.setDimlunit(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDimjust = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDimjust");
          return this.__PROXY__.getDimjust(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDimtad = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDimtad");
          return this.__PROXY__.getDimtad(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setDimtad = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setDimtad");
          return this.__PROXY__.setDimtad(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDimtih = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDimtih");
          return this.__PROXY__.getDimtih(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setDimtih = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setDimtih");
          return this.__PROXY__.setDimtih(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDimtsz = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDimtsz");
          return this.__PROXY__.getDimtsz(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setDimtsz = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setDimtsz");
          return this.__PROXY__.setDimtsz(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDimzin = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDimzin");
          return this.__PROXY__.getDimzin(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setDimzin = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setDimzin");
          return this.__PROXY__.setDimzin(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDimaunit = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDimaunit");
          return this.__PROXY__.getDimaunit(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setDimaunit = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setDimaunit");
          return this.__PROXY__.setDimaunit(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDimadec = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDimadec");
          return this.__PROXY__.getDimadec(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setDimadec = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setDimadec");
          return this.__PROXY__.setDimadec(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDimdec = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDimdec");
          return this.__PROXY__.getDimdec(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setDimdec = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setDimdec");
          return this.__PROXY__.setDimdec(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDimazin = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDimazin");
          return this.__PROXY__.getDimazin(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setDimazin = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setDimazin");
          return this.__PROXY__.setDimazin(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDimdsep = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDimdsep");
          return this.__PROXY__.getDimdsep(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setDimdsep = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setDimdsep");
          return this.__PROXY__.setDimdsep(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDimclrt = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDimclrt");
          return this.__PROXY__.getDimclrt(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setDimclrt = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setDimclrt");
          return this.__PROXY__.setDimclrt(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.useArchTick = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.useArchTick");
          return this.__PROXY__.useArchTick(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDimblk = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDimblk");
          return this.__PROXY__.getDimblk(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDimblkName = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDimblkName");
          return this.__PROXY__.getDimblkName(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.isDimXScaled = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.isDimXScaled");
          return this.__PROXY__.isDimXScaled(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.hasCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.hasCustomTextPosition");
          return this.__PROXY__.hasCustomTextPosition(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setCustomTextPosition");
          return this.__PROXY__.setCustomTextPosition(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getLineSpacingStyle");
          return this.__PROXY__.getLineSpacingStyle(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getLineSpacingFactor");
          return this.__PROXY__.getLineSpacingFactor(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getTextRotation = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getTextRotation");
          return this.__PROXY__.getTextRotation(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setTextRotation = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setTextRotation");
          return this.__PROXY__.setTextRotation(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getTextData = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getTextData");
          return this.__PROXY__.getTextData(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.initTextData = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.initTextData");
          return this.__PROXY__.initTextData(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getMeasurement = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getMeasurement");
          return this.__PROXY__.getMeasurement(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.formatLabel = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.formatLabel");
          return this.__PROXY__.formatLabel(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.formatAngleLabel = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.formatAngleLabel");
          return this.__PROXY__.formatAngleLabel(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.update = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDimensionBlockReference = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDimensionBlockReference");
          return this.__PROXY__.getDimensionBlockReference(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.hasDimensionBlockReference = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.hasDimensionBlockReference");
          return this.__PROXY__.hasDimensionBlockReference(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getType = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.isSane = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setLeaderEndPoint = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setLeaderEndPoint");
          return this.__PROXY__.setLeaderEndPoint(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getLeaderEndPoint = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getLeaderEndPoint");
          return this.__PROXY__.getLeaderEndPoint(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setOrigin = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setOrigin");
          return this.__PROXY__.setOrigin(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getOrigin = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getOrigin");
          return this.__PROXY__.getOrigin(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setDefiningPoint = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setDefiningPoint");
          return this.__PROXY__.setDefiningPoint(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getDefiningPoint = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getDefiningPoint");
          return this.__PROXY__.getDefiningPoint(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setMeasuringXAxis = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setMeasuringXAxis");
          return this.__PROXY__.setMeasuringXAxis(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.setMeasuringYAxis = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.setMeasuringYAxis");
          return this.__PROXY__.setMeasuringYAxis(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.isMeasuringXAxis = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.isMeasuringXAxis");
          return this.__PROXY__.isMeasuringXAxis(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.move = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.rotate = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.scale = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.mirror = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.stretch = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getMeasuredValue = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getMeasuredValue");
          return this.__PROXY__.getMeasuredValue(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.getAutoLabel = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.getAutoLabel");
          return this.__PROXY__.getAutoLabel(...args);
        };
    
        // function 
        RDimOrdinateData.prototype.to2D = function(...args) 
          
        {
          //print("JS: RDimOrdinateData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RDimOrdinateData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimOrdinateData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RDimOrdinateData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      