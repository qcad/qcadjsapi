
      // auto generated
      //var self;

      // class constructor:
      function RDimArcLengthData() {
        

        // should be RDimArcLengthData_BaseJs.call(this, engine):
        //RDimArcLengthData.prototype = new RDimArcLengthData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimArcLengthData.getIdStatic()))) {

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
            qWarning("RDimArcLengthData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new RDimArcLengthData_Wrapper(
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

      

        //copyProperties(this, wrapper, RDimArcLengthData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RDimArcLengthData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimArcLengthData);
  }

  
  else {
    
        print("RDimArcLengthData(): wrong number / type of arguments");
      
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

      //RDimArcLengthData.prototype = new RDimArcLengthData_BaseJs(engine);
      //RDimArcLengthData.prototype = new RDimArcLengthData_Wrapper(engine);
      RDimArcLengthData.prototype = new Object();

      RDimArcLengthData.prototype.toString = function() {
          //return "RDimArcLengthData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimArcLengthData [JS]";
        };
      RDimArcLengthData.getObjectType = function() {
        return RJSType_RDimArcLengthData.getIdStatic();
      };

      RDimArcLengthData.prototype.getObjectType = function() {
        return RJSType_RDimArcLengthData.getIdStatic();
      };

      RDimArcLengthData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimArcLengthData.getIdStatic()) {
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
        RDimArcLengthData.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setZ = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getHull = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setColor = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getColor = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.isInside = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.stretch = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.render = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.render");
          return this.__PROXY__.render(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.updateBoundingBox = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.updateBoundingBox");
          return this.__PROXY__.updateBoundingBox(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.updateTextPositionCenter = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.updateTextPositionCenter");
          return this.__PROXY__.updateTextPositionCenter(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.updateTextPositionSide = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.updateTextPositionSide");
          return this.__PROXY__.updateTextPositionSide(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.updateTextData = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.updateTextData");
          return this.__PROXY__.updateTextData(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.updateShapes = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.updateShapes");
          return this.__PROXY__.updateShapes(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.updateArrowPos1 = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.updateArrowPos1");
          return this.__PROXY__.updateArrowPos1(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.updateArrowPos2 = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.updateArrowPos2");
          return this.__PROXY__.updateArrowPos2(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.clearStyleOverrides = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.clearStyleOverrides");
          return this.__PROXY__.clearStyleOverrides(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setDefinitionPoint");
          return this.__PROXY__.setDefinitionPoint(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDefinitionPoint");
          return this.__PROXY__.getDefinitionPoint(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setText = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setText");
          return this.__PROXY__.setText(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getText = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getText");
          return this.__PROXY__.getText(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setUpperTolerance = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setUpperTolerance");
          return this.__PROXY__.setUpperTolerance(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setLowerTolerance = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setLowerTolerance");
          return this.__PROXY__.setLowerTolerance(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setTextPosition = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setTextPosition");
          return this.__PROXY__.setTextPosition(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getTextPosition = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getTextPosition");
          return this.__PROXY__.getTextPosition(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setFontName = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setFontName");
          return this.__PROXY__.setFontName(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getFontName = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getFontName");
          return this.__PROXY__.getFontName(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setDimBlockName = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setDimBlockName");
          return this.__PROXY__.setDimBlockName(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDimBlockName = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDimBlockName");
          return this.__PROXY__.getDimBlockName(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.hasOverrides = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.hasOverrides");
          return this.__PROXY__.hasOverrides(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.hasOverride = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.hasOverride");
          return this.__PROXY__.hasOverride(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getOverrides = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getOverrides");
          return this.__PROXY__.getOverrides(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setDimXVariant = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setDimXVariant");
          return this.__PROXY__.setDimXVariant(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setDimXDouble = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setDimXDouble");
          return this.__PROXY__.setDimXDouble(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setDimXInt = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setDimXInt");
          return this.__PROXY__.setDimXInt(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setDimXBool = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setDimXBool");
          return this.__PROXY__.setDimXBool(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setDimXColor = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setDimXColor");
          return this.__PROXY__.setDimXColor(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDimXVariant = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDimXVariant");
          return this.__PROXY__.getDimXVariant(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getVariantOverride = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getVariantOverride");
          return this.__PROXY__.getVariantOverride(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDimXDouble = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDimXDouble");
          return this.__PROXY__.getDimXDouble(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDoubleOverride = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDoubleOverride");
          return this.__PROXY__.getDoubleOverride(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDimXInt = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDimXInt");
          return this.__PROXY__.getDimXInt(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getIntOverride = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getIntOverride");
          return this.__PROXY__.getIntOverride(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDimXBool = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDimXBool");
          return this.__PROXY__.getDimXBool(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getBoolOverride = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getBoolOverride");
          return this.__PROXY__.getBoolOverride(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDimXColor = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDimXColor");
          return this.__PROXY__.getDimXColor(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getColorOverride = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getColorOverride");
          return this.__PROXY__.getColorOverride(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDimlfac = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDimlfac");
          return this.__PROXY__.getDimlfac(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setDimlfac = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setDimlfac");
          return this.__PROXY__.setDimlfac(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getLinearFactor = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getLinearFactor");
          return this.__PROXY__.getLinearFactor(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setLinearFactor = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setLinearFactor");
          return this.__PROXY__.setLinearFactor(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDimscale = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDimscale");
          return this.__PROXY__.getDimscale(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setDimscale = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setDimscale");
          return this.__PROXY__.setDimscale(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.isArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.isArrow1Flipped");
          return this.__PROXY__.isArrow1Flipped(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setArrow1Flipped");
          return this.__PROXY__.setArrow1Flipped(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.isArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.isArrow2Flipped");
          return this.__PROXY__.isArrow2Flipped(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setArrow2Flipped");
          return this.__PROXY__.setArrow2Flipped(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.isExtLineFix = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.isExtLineFix");
          return this.__PROXY__.isExtLineFix(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setExtLineFix = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setExtLineFix");
          return this.__PROXY__.setExtLineFix(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getExtLineFixLength");
          return this.__PROXY__.getExtLineFixLength(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setExtLineFixLength");
          return this.__PROXY__.setExtLineFixLength(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.adjustExtensionLineFixLength = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.adjustExtensionLineFixLength");
          return this.__PROXY__.adjustExtensionLineFixLength(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.hasSpaceForArrows = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.hasSpaceForArrows");
          return this.__PROXY__.hasSpaceForArrows(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDimexo = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDimexo");
          return this.__PROXY__.getDimexo(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setDimexo = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setDimexo");
          return this.__PROXY__.setDimexo(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDimexe = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDimexe");
          return this.__PROXY__.getDimexe(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setDimexe = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setDimexe");
          return this.__PROXY__.setDimexe(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDimasz = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDimasz");
          return this.__PROXY__.getDimasz(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setDimasz = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setDimasz");
          return this.__PROXY__.setDimasz(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDimdli = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDimdli");
          return this.__PROXY__.getDimdli(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setDimdli = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setDimdli");
          return this.__PROXY__.setDimdli(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDimgap = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDimgap");
          return this.__PROXY__.getDimgap(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setDimgap = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setDimgap");
          return this.__PROXY__.setDimgap(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDimtxt = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDimtxt");
          return this.__PROXY__.getDimtxt(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setDimtxt = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setDimtxt");
          return this.__PROXY__.setDimtxt(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDimlunit = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDimlunit");
          return this.__PROXY__.getDimlunit(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setDimlunit = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setDimlunit");
          return this.__PROXY__.setDimlunit(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDimjust = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDimjust");
          return this.__PROXY__.getDimjust(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDimtad = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDimtad");
          return this.__PROXY__.getDimtad(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setDimtad = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setDimtad");
          return this.__PROXY__.setDimtad(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDimtih = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDimtih");
          return this.__PROXY__.getDimtih(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setDimtih = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setDimtih");
          return this.__PROXY__.setDimtih(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDimtsz = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDimtsz");
          return this.__PROXY__.getDimtsz(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setDimtsz = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setDimtsz");
          return this.__PROXY__.setDimtsz(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDimzin = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDimzin");
          return this.__PROXY__.getDimzin(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setDimzin = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setDimzin");
          return this.__PROXY__.setDimzin(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDimaunit = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDimaunit");
          return this.__PROXY__.getDimaunit(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setDimaunit = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setDimaunit");
          return this.__PROXY__.setDimaunit(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDimadec = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDimadec");
          return this.__PROXY__.getDimadec(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setDimadec = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setDimadec");
          return this.__PROXY__.setDimadec(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDimdec = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDimdec");
          return this.__PROXY__.getDimdec(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setDimdec = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setDimdec");
          return this.__PROXY__.setDimdec(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDimazin = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDimazin");
          return this.__PROXY__.getDimazin(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setDimazin = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setDimazin");
          return this.__PROXY__.setDimazin(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDimdsep = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDimdsep");
          return this.__PROXY__.getDimdsep(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setDimdsep = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setDimdsep");
          return this.__PROXY__.setDimdsep(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDimclrt = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDimclrt");
          return this.__PROXY__.getDimclrt(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setDimclrt = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setDimclrt");
          return this.__PROXY__.setDimclrt(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.useArchTick = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.useArchTick");
          return this.__PROXY__.useArchTick(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDimblk = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDimblk");
          return this.__PROXY__.getDimblk(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDimblkName = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDimblkName");
          return this.__PROXY__.getDimblkName(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.isDimXScaled = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.isDimXScaled");
          return this.__PROXY__.isDimXScaled(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.hasCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.hasCustomTextPosition");
          return this.__PROXY__.hasCustomTextPosition(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setCustomTextPosition");
          return this.__PROXY__.setCustomTextPosition(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getLineSpacingStyle");
          return this.__PROXY__.getLineSpacingStyle(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getLineSpacingFactor");
          return this.__PROXY__.getLineSpacingFactor(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getTextRotation = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getTextRotation");
          return this.__PROXY__.getTextRotation(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setTextRotation = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setTextRotation");
          return this.__PROXY__.setTextRotation(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getTextData = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getTextData");
          return this.__PROXY__.getTextData(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.initTextData = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.initTextData");
          return this.__PROXY__.initTextData(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.formatLabel = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.formatLabel");
          return this.__PROXY__.formatLabel(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.formatAngleLabel = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.formatAngleLabel");
          return this.__PROXY__.formatAngleLabel(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.update = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDimensionBlockReference = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDimensionBlockReference");
          return this.__PROXY__.getDimensionBlockReference(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.hasDimensionBlockReference = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.hasDimensionBlockReference");
          return this.__PROXY__.hasDimensionBlockReference(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getAngle = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getAngle");
          return this.__PROXY__.getAngle(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDimensionArc = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDimensionArc");
          return this.__PROXY__.getDimensionArc(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getType = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.isSane = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getCenter = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getCenter");
          return this.__PROXY__.getCenter(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setCenter = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setCenter");
          return this.__PROXY__.setCenter(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getRadius = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getRadius");
          return this.__PROXY__.getRadius(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setExtensionLine1End = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setExtensionLine1End");
          return this.__PROXY__.setExtensionLine1End(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getExtensionLine1End = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getExtensionLine1End");
          return this.__PROXY__.getExtensionLine1End(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setExtensionLine2End = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setExtensionLine2End");
          return this.__PROXY__.setExtensionLine2End(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getExtensionLine2End = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getExtensionLine2End");
          return this.__PROXY__.getExtensionLine2End(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setDimArcPosition = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setDimArcPosition");
          return this.__PROXY__.setDimArcPosition(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getDimArcPosition = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getDimArcPosition");
          return this.__PROXY__.getDimArcPosition(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.setArcSymbolType = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.setArcSymbolType");
          return this.__PROXY__.setArcSymbolType(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getArcSymbolType = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getArcSymbolType");
          return this.__PROXY__.getArcSymbolType(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.move = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.rotate = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.scale = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.mirror = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getAngles = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getAngles");
          return this.__PROXY__.getAngles(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getMeasuredValue = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getMeasuredValue");
          return this.__PROXY__.getMeasuredValue(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getAutoLabel = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getAutoLabel");
          return this.__PROXY__.getAutoLabel(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.getMeasurement = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.getMeasurement");
          return this.__PROXY__.getMeasurement(...args);
        };
    
        // function 
        RDimArcLengthData.prototype.to2D = function(...args) 
          
        {
          //print("JS: RDimArcLengthData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RDimArcLengthData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimArcLengthData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RDimArcLengthData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      