
      // auto generated
      //var self;

      // class constructor:
      function RDimAngular2LData() {
        

        // should be RDimAngular2LData_BaseJs.call(this, engine):
        //RDimAngular2LData.prototype = new RDimAngular2LData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimAngular2LData.getIdStatic()))) {

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
            qWarning("RDimAngular2LData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 5) {
    
            self = this;
            wrapper = new RDimAngular2LData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimAngular2LData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RDimAngular2LData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimAngular2LData);
  }

  
  else {
    
        print("RDimAngular2LData(): wrong number / type of arguments");
      
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

      //RDimAngular2LData.prototype = new RDimAngular2LData_BaseJs(engine);
      //RDimAngular2LData.prototype = new RDimAngular2LData_Wrapper(engine);
      RDimAngular2LData.prototype = new Object();

      RDimAngular2LData.prototype.toString = function() {
          //return "RDimAngular2LData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimAngular2LData [JS]";
        };
      RDimAngular2LData.getObjectType = function() {
        return RJSType_RDimAngular2LData.getIdStatic();
      };

      RDimAngular2LData.prototype.getObjectType = function() {
        return RJSType_RDimAngular2LData.getIdStatic();
      };

      RDimAngular2LData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimAngular2LData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RDimensionData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RDimAngularData.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RDimAngular2LData.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setZ = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getHull = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setColor = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getColor = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.isInside = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.stretch = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.render = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.render");
          return this.__PROXY__.render(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.updateBoundingBox = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.updateBoundingBox");
          return this.__PROXY__.updateBoundingBox(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.updateTextPositionCenter = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.updateTextPositionCenter");
          return this.__PROXY__.updateTextPositionCenter(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.updateTextPositionSide = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.updateTextPositionSide");
          return this.__PROXY__.updateTextPositionSide(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.updateTextData = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.updateTextData");
          return this.__PROXY__.updateTextData(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.updateShapes = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.updateShapes");
          return this.__PROXY__.updateShapes(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.updateArrowPos1 = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.updateArrowPos1");
          return this.__PROXY__.updateArrowPos1(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.updateArrowPos2 = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.updateArrowPos2");
          return this.__PROXY__.updateArrowPos2(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.clearStyleOverrides = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.clearStyleOverrides");
          return this.__PROXY__.clearStyleOverrides(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setDefinitionPoint");
          return this.__PROXY__.setDefinitionPoint(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDefinitionPoint");
          return this.__PROXY__.getDefinitionPoint(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setText = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setText");
          return this.__PROXY__.setText(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getText = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getText");
          return this.__PROXY__.getText(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setUpperTolerance = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setUpperTolerance");
          return this.__PROXY__.setUpperTolerance(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setLowerTolerance = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setLowerTolerance");
          return this.__PROXY__.setLowerTolerance(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setTextPosition = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setTextPosition");
          return this.__PROXY__.setTextPosition(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getTextPosition = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getTextPosition");
          return this.__PROXY__.getTextPosition(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setFontName = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setFontName");
          return this.__PROXY__.setFontName(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getFontName = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getFontName");
          return this.__PROXY__.getFontName(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setDimBlockName = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setDimBlockName");
          return this.__PROXY__.setDimBlockName(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDimBlockName = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDimBlockName");
          return this.__PROXY__.getDimBlockName(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.hasOverrides = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.hasOverrides");
          return this.__PROXY__.hasOverrides(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.hasOverride = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.hasOverride");
          return this.__PROXY__.hasOverride(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getOverrides = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getOverrides");
          return this.__PROXY__.getOverrides(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setDimXVariant = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setDimXVariant");
          return this.__PROXY__.setDimXVariant(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setDimXDouble = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setDimXDouble");
          return this.__PROXY__.setDimXDouble(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setDimXInt = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setDimXInt");
          return this.__PROXY__.setDimXInt(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setDimXBool = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setDimXBool");
          return this.__PROXY__.setDimXBool(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setDimXColor = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setDimXColor");
          return this.__PROXY__.setDimXColor(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDimXVariant = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDimXVariant");
          return this.__PROXY__.getDimXVariant(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getVariantOverride = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getVariantOverride");
          return this.__PROXY__.getVariantOverride(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDimXDouble = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDimXDouble");
          return this.__PROXY__.getDimXDouble(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDoubleOverride = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDoubleOverride");
          return this.__PROXY__.getDoubleOverride(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDimXInt = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDimXInt");
          return this.__PROXY__.getDimXInt(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getIntOverride = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getIntOverride");
          return this.__PROXY__.getIntOverride(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDimXBool = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDimXBool");
          return this.__PROXY__.getDimXBool(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getBoolOverride = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getBoolOverride");
          return this.__PROXY__.getBoolOverride(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDimXColor = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDimXColor");
          return this.__PROXY__.getDimXColor(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getColorOverride = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getColorOverride");
          return this.__PROXY__.getColorOverride(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDimlfac = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDimlfac");
          return this.__PROXY__.getDimlfac(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setDimlfac = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setDimlfac");
          return this.__PROXY__.setDimlfac(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getLinearFactor = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getLinearFactor");
          return this.__PROXY__.getLinearFactor(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setLinearFactor = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setLinearFactor");
          return this.__PROXY__.setLinearFactor(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDimscale = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDimscale");
          return this.__PROXY__.getDimscale(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setDimscale = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setDimscale");
          return this.__PROXY__.setDimscale(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.isArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.isArrow1Flipped");
          return this.__PROXY__.isArrow1Flipped(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setArrow1Flipped");
          return this.__PROXY__.setArrow1Flipped(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.isArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.isArrow2Flipped");
          return this.__PROXY__.isArrow2Flipped(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setArrow2Flipped");
          return this.__PROXY__.setArrow2Flipped(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.isExtLineFix = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.isExtLineFix");
          return this.__PROXY__.isExtLineFix(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setExtLineFix = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setExtLineFix");
          return this.__PROXY__.setExtLineFix(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getExtLineFixLength");
          return this.__PROXY__.getExtLineFixLength(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setExtLineFixLength");
          return this.__PROXY__.setExtLineFixLength(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.adjustExtensionLineFixLength = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.adjustExtensionLineFixLength");
          return this.__PROXY__.adjustExtensionLineFixLength(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.hasSpaceForArrows = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.hasSpaceForArrows");
          return this.__PROXY__.hasSpaceForArrows(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDimexo = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDimexo");
          return this.__PROXY__.getDimexo(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setDimexo = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setDimexo");
          return this.__PROXY__.setDimexo(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDimexe = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDimexe");
          return this.__PROXY__.getDimexe(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setDimexe = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setDimexe");
          return this.__PROXY__.setDimexe(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDimasz = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDimasz");
          return this.__PROXY__.getDimasz(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setDimasz = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setDimasz");
          return this.__PROXY__.setDimasz(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDimdli = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDimdli");
          return this.__PROXY__.getDimdli(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setDimdli = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setDimdli");
          return this.__PROXY__.setDimdli(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDimgap = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDimgap");
          return this.__PROXY__.getDimgap(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setDimgap = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setDimgap");
          return this.__PROXY__.setDimgap(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDimtxt = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDimtxt");
          return this.__PROXY__.getDimtxt(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setDimtxt = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setDimtxt");
          return this.__PROXY__.setDimtxt(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDimlunit = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDimlunit");
          return this.__PROXY__.getDimlunit(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setDimlunit = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setDimlunit");
          return this.__PROXY__.setDimlunit(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDimjust = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDimjust");
          return this.__PROXY__.getDimjust(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDimtad = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDimtad");
          return this.__PROXY__.getDimtad(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setDimtad = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setDimtad");
          return this.__PROXY__.setDimtad(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDimtih = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDimtih");
          return this.__PROXY__.getDimtih(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setDimtih = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setDimtih");
          return this.__PROXY__.setDimtih(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDimtsz = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDimtsz");
          return this.__PROXY__.getDimtsz(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setDimtsz = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setDimtsz");
          return this.__PROXY__.setDimtsz(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDimzin = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDimzin");
          return this.__PROXY__.getDimzin(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setDimzin = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setDimzin");
          return this.__PROXY__.setDimzin(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDimaunit = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDimaunit");
          return this.__PROXY__.getDimaunit(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setDimaunit = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setDimaunit");
          return this.__PROXY__.setDimaunit(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDimadec = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDimadec");
          return this.__PROXY__.getDimadec(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setDimadec = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setDimadec");
          return this.__PROXY__.setDimadec(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDimdec = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDimdec");
          return this.__PROXY__.getDimdec(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setDimdec = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setDimdec");
          return this.__PROXY__.setDimdec(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDimazin = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDimazin");
          return this.__PROXY__.getDimazin(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setDimazin = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setDimazin");
          return this.__PROXY__.setDimazin(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDimdsep = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDimdsep");
          return this.__PROXY__.getDimdsep(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setDimdsep = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setDimdsep");
          return this.__PROXY__.setDimdsep(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDimclrt = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDimclrt");
          return this.__PROXY__.getDimclrt(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setDimclrt = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setDimclrt");
          return this.__PROXY__.setDimclrt(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.useArchTick = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.useArchTick");
          return this.__PROXY__.useArchTick(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDimblk = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDimblk");
          return this.__PROXY__.getDimblk(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDimblkName = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDimblkName");
          return this.__PROXY__.getDimblkName(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.isDimXScaled = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.isDimXScaled");
          return this.__PROXY__.isDimXScaled(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.hasCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.hasCustomTextPosition");
          return this.__PROXY__.hasCustomTextPosition(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setCustomTextPosition");
          return this.__PROXY__.setCustomTextPosition(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getLineSpacingStyle");
          return this.__PROXY__.getLineSpacingStyle(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getLineSpacingFactor");
          return this.__PROXY__.getLineSpacingFactor(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getTextRotation = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getTextRotation");
          return this.__PROXY__.getTextRotation(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setTextRotation = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setTextRotation");
          return this.__PROXY__.setTextRotation(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getTextData = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getTextData");
          return this.__PROXY__.getTextData(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.initTextData = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.initTextData");
          return this.__PROXY__.initTextData(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getMeasurement = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getMeasurement");
          return this.__PROXY__.getMeasurement(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.formatLabel = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.formatLabel");
          return this.__PROXY__.formatLabel(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.formatAngleLabel = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.formatAngleLabel");
          return this.__PROXY__.formatAngleLabel(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.update = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDimensionBlockReference = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDimensionBlockReference");
          return this.__PROXY__.getDimensionBlockReference(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.hasDimensionBlockReference = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.hasDimensionBlockReference");
          return this.__PROXY__.hasDimensionBlockReference(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getAngle = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getAngle");
          return this.__PROXY__.getAngle(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getMeasuredValue = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getMeasuredValue");
          return this.__PROXY__.getMeasuredValue(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getAutoLabel = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getAutoLabel");
          return this.__PROXY__.getAutoLabel(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDimensionArc = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDimensionArc");
          return this.__PROXY__.getDimensionArc(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getType = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.isSane = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setExtensionLine1Start = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setExtensionLine1Start");
          return this.__PROXY__.setExtensionLine1Start(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getExtensionLine1Start = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getExtensionLine1Start");
          return this.__PROXY__.getExtensionLine1Start(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setExtensionLine1End = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setExtensionLine1End");
          return this.__PROXY__.setExtensionLine1End(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getExtensionLine1End = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getExtensionLine1End");
          return this.__PROXY__.getExtensionLine1End(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setExtensionLine2Start = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setExtensionLine2Start");
          return this.__PROXY__.setExtensionLine2Start(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getExtensionLine2Start = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getExtensionLine2Start");
          return this.__PROXY__.getExtensionLine2Start(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setExtensionLine2End = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setExtensionLine2End");
          return this.__PROXY__.setExtensionLine2End(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getExtensionLine2End = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getExtensionLine2End");
          return this.__PROXY__.getExtensionLine2End(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.setDimArcPosition = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.setDimArcPosition");
          return this.__PROXY__.setDimArcPosition(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getDimArcPosition = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getDimArcPosition");
          return this.__PROXY__.getDimArcPosition(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.move = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.rotate = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.scale = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.mirror = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getAngles = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getAngles");
          return this.__PROXY__.getAngles(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.getCenter = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.getCenter");
          return this.__PROXY__.getCenter(...args);
        };
    
        // function 
        RDimAngular2LData.prototype.to2D = function(...args) 
          
        {
          //print("JS: RDimAngular2LData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RDimAngular2LData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimAngular2LData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RDimAngular2LData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      