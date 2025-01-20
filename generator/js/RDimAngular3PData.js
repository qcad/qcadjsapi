
      // auto generated
      //var self;

      // class constructor:
      function RDimAngular3PData() {
        

        // should be RDimAngular3PData_BaseJs.call(this, engine):
        //RDimAngular3PData.prototype = new RDimAngular3PData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimAngular3PData.getIdStatic()))) {

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
            qWarning("RDimAngular3PData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new RDimAngular3PData_Wrapper(
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

      

        //copyProperties(this, wrapper, RDimAngular3PData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RDimAngular3PData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimAngular3PData);
  }

  
  else {
    
        print("RDimAngular3PData(): wrong number / type of arguments");
      
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

      //RDimAngular3PData.prototype = new RDimAngular3PData_BaseJs(engine);
      //RDimAngular3PData.prototype = new RDimAngular3PData_Wrapper(engine);
      RDimAngular3PData.prototype = new Object();

      RDimAngular3PData.prototype.toString = function() {
          //return "RDimAngular3PData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimAngular3PData [JS]";
        };
      RDimAngular3PData.getObjectType = function() {
        return RJSType_RDimAngular3PData.getIdStatic();
      };

      RDimAngular3PData.prototype.getObjectType = function() {
        return RJSType_RDimAngular3PData.getIdStatic();
      };

      RDimAngular3PData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimAngular3PData.getIdStatic()) {
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
        RDimAngular3PData.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setZ = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getHull = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setColor = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getColor = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.isInside = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.stretch = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.render = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.render");
          return this.__PROXY__.render(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.updateBoundingBox = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.updateBoundingBox");
          return this.__PROXY__.updateBoundingBox(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.updateTextPositionCenter = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.updateTextPositionCenter");
          return this.__PROXY__.updateTextPositionCenter(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.updateTextPositionSide = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.updateTextPositionSide");
          return this.__PROXY__.updateTextPositionSide(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.updateTextData = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.updateTextData");
          return this.__PROXY__.updateTextData(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.updateShapes = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.updateShapes");
          return this.__PROXY__.updateShapes(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.updateArrowPos1 = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.updateArrowPos1");
          return this.__PROXY__.updateArrowPos1(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.updateArrowPos2 = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.updateArrowPos2");
          return this.__PROXY__.updateArrowPos2(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.clearStyleOverrides = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.clearStyleOverrides");
          return this.__PROXY__.clearStyleOverrides(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setDefinitionPoint");
          return this.__PROXY__.setDefinitionPoint(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDefinitionPoint");
          return this.__PROXY__.getDefinitionPoint(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setText = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setText");
          return this.__PROXY__.setText(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getText = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getText");
          return this.__PROXY__.getText(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setUpperTolerance = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setUpperTolerance");
          return this.__PROXY__.setUpperTolerance(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setLowerTolerance = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setLowerTolerance");
          return this.__PROXY__.setLowerTolerance(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setTextPosition = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setTextPosition");
          return this.__PROXY__.setTextPosition(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getTextPosition = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getTextPosition");
          return this.__PROXY__.getTextPosition(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setFontName = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setFontName");
          return this.__PROXY__.setFontName(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getFontName = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getFontName");
          return this.__PROXY__.getFontName(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setDimBlockName = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setDimBlockName");
          return this.__PROXY__.setDimBlockName(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDimBlockName = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDimBlockName");
          return this.__PROXY__.getDimBlockName(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.hasOverrides = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.hasOverrides");
          return this.__PROXY__.hasOverrides(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.hasOverride = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.hasOverride");
          return this.__PROXY__.hasOverride(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getOverrides = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getOverrides");
          return this.__PROXY__.getOverrides(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setDimXVariant = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setDimXVariant");
          return this.__PROXY__.setDimXVariant(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setDimXDouble = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setDimXDouble");
          return this.__PROXY__.setDimXDouble(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setDimXInt = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setDimXInt");
          return this.__PROXY__.setDimXInt(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setDimXBool = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setDimXBool");
          return this.__PROXY__.setDimXBool(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setDimXColor = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setDimXColor");
          return this.__PROXY__.setDimXColor(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDimXVariant = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDimXVariant");
          return this.__PROXY__.getDimXVariant(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getVariantOverride = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getVariantOverride");
          return this.__PROXY__.getVariantOverride(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDimXDouble = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDimXDouble");
          return this.__PROXY__.getDimXDouble(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDoubleOverride = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDoubleOverride");
          return this.__PROXY__.getDoubleOverride(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDimXInt = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDimXInt");
          return this.__PROXY__.getDimXInt(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getIntOverride = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getIntOverride");
          return this.__PROXY__.getIntOverride(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDimXBool = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDimXBool");
          return this.__PROXY__.getDimXBool(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getBoolOverride = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getBoolOverride");
          return this.__PROXY__.getBoolOverride(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDimXColor = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDimXColor");
          return this.__PROXY__.getDimXColor(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getColorOverride = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getColorOverride");
          return this.__PROXY__.getColorOverride(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDimlfac = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDimlfac");
          return this.__PROXY__.getDimlfac(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setDimlfac = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setDimlfac");
          return this.__PROXY__.setDimlfac(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getLinearFactor = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getLinearFactor");
          return this.__PROXY__.getLinearFactor(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setLinearFactor = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setLinearFactor");
          return this.__PROXY__.setLinearFactor(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDimscale = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDimscale");
          return this.__PROXY__.getDimscale(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setDimscale = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setDimscale");
          return this.__PROXY__.setDimscale(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.isArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.isArrow1Flipped");
          return this.__PROXY__.isArrow1Flipped(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setArrow1Flipped");
          return this.__PROXY__.setArrow1Flipped(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.isArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.isArrow2Flipped");
          return this.__PROXY__.isArrow2Flipped(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setArrow2Flipped");
          return this.__PROXY__.setArrow2Flipped(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.isExtLineFix = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.isExtLineFix");
          return this.__PROXY__.isExtLineFix(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setExtLineFix = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setExtLineFix");
          return this.__PROXY__.setExtLineFix(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getExtLineFixLength");
          return this.__PROXY__.getExtLineFixLength(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setExtLineFixLength");
          return this.__PROXY__.setExtLineFixLength(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.adjustExtensionLineFixLength = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.adjustExtensionLineFixLength");
          return this.__PROXY__.adjustExtensionLineFixLength(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.hasSpaceForArrows = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.hasSpaceForArrows");
          return this.__PROXY__.hasSpaceForArrows(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDimexo = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDimexo");
          return this.__PROXY__.getDimexo(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setDimexo = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setDimexo");
          return this.__PROXY__.setDimexo(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDimexe = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDimexe");
          return this.__PROXY__.getDimexe(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setDimexe = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setDimexe");
          return this.__PROXY__.setDimexe(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDimasz = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDimasz");
          return this.__PROXY__.getDimasz(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setDimasz = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setDimasz");
          return this.__PROXY__.setDimasz(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDimdli = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDimdli");
          return this.__PROXY__.getDimdli(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setDimdli = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setDimdli");
          return this.__PROXY__.setDimdli(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDimgap = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDimgap");
          return this.__PROXY__.getDimgap(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setDimgap = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setDimgap");
          return this.__PROXY__.setDimgap(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDimtxt = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDimtxt");
          return this.__PROXY__.getDimtxt(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setDimtxt = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setDimtxt");
          return this.__PROXY__.setDimtxt(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDimlunit = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDimlunit");
          return this.__PROXY__.getDimlunit(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setDimlunit = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setDimlunit");
          return this.__PROXY__.setDimlunit(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDimjust = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDimjust");
          return this.__PROXY__.getDimjust(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDimtad = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDimtad");
          return this.__PROXY__.getDimtad(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setDimtad = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setDimtad");
          return this.__PROXY__.setDimtad(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDimtih = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDimtih");
          return this.__PROXY__.getDimtih(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setDimtih = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setDimtih");
          return this.__PROXY__.setDimtih(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDimtsz = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDimtsz");
          return this.__PROXY__.getDimtsz(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setDimtsz = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setDimtsz");
          return this.__PROXY__.setDimtsz(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDimzin = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDimzin");
          return this.__PROXY__.getDimzin(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setDimzin = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setDimzin");
          return this.__PROXY__.setDimzin(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDimaunit = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDimaunit");
          return this.__PROXY__.getDimaunit(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setDimaunit = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setDimaunit");
          return this.__PROXY__.setDimaunit(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDimadec = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDimadec");
          return this.__PROXY__.getDimadec(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setDimadec = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setDimadec");
          return this.__PROXY__.setDimadec(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDimdec = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDimdec");
          return this.__PROXY__.getDimdec(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setDimdec = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setDimdec");
          return this.__PROXY__.setDimdec(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDimazin = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDimazin");
          return this.__PROXY__.getDimazin(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setDimazin = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setDimazin");
          return this.__PROXY__.setDimazin(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDimdsep = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDimdsep");
          return this.__PROXY__.getDimdsep(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setDimdsep = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setDimdsep");
          return this.__PROXY__.setDimdsep(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDimclrt = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDimclrt");
          return this.__PROXY__.getDimclrt(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setDimclrt = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setDimclrt");
          return this.__PROXY__.setDimclrt(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.useArchTick = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.useArchTick");
          return this.__PROXY__.useArchTick(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDimblk = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDimblk");
          return this.__PROXY__.getDimblk(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDimblkName = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDimblkName");
          return this.__PROXY__.getDimblkName(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.isDimXScaled = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.isDimXScaled");
          return this.__PROXY__.isDimXScaled(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.hasCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.hasCustomTextPosition");
          return this.__PROXY__.hasCustomTextPosition(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setCustomTextPosition");
          return this.__PROXY__.setCustomTextPosition(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getLineSpacingStyle");
          return this.__PROXY__.getLineSpacingStyle(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getLineSpacingFactor");
          return this.__PROXY__.getLineSpacingFactor(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getTextRotation = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getTextRotation");
          return this.__PROXY__.getTextRotation(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setTextRotation = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setTextRotation");
          return this.__PROXY__.setTextRotation(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getTextData = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getTextData");
          return this.__PROXY__.getTextData(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.initTextData = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.initTextData");
          return this.__PROXY__.initTextData(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getMeasurement = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getMeasurement");
          return this.__PROXY__.getMeasurement(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.formatLabel = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.formatLabel");
          return this.__PROXY__.formatLabel(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.formatAngleLabel = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.formatAngleLabel");
          return this.__PROXY__.formatAngleLabel(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.update = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDimensionBlockReference = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDimensionBlockReference");
          return this.__PROXY__.getDimensionBlockReference(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.hasDimensionBlockReference = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.hasDimensionBlockReference");
          return this.__PROXY__.hasDimensionBlockReference(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getAngle = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getAngle");
          return this.__PROXY__.getAngle(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getMeasuredValue = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getMeasuredValue");
          return this.__PROXY__.getMeasuredValue(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getAutoLabel = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getAutoLabel");
          return this.__PROXY__.getAutoLabel(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDimensionArc = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDimensionArc");
          return this.__PROXY__.getDimensionArc(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getType = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.isSane = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getCenter = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getCenter");
          return this.__PROXY__.getCenter(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setCenter = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setCenter");
          return this.__PROXY__.setCenter(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setExtensionLine1End = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setExtensionLine1End");
          return this.__PROXY__.setExtensionLine1End(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getExtensionLine1End = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getExtensionLine1End");
          return this.__PROXY__.getExtensionLine1End(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setExtensionLine2End = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setExtensionLine2End");
          return this.__PROXY__.setExtensionLine2End(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getExtensionLine2End = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getExtensionLine2End");
          return this.__PROXY__.getExtensionLine2End(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.setDimArcPosition = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.setDimArcPosition");
          return this.__PROXY__.setDimArcPosition(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getDimArcPosition = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getDimArcPosition");
          return this.__PROXY__.getDimArcPosition(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.move = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.rotate = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.scale = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.mirror = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.getAngles = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.getAngles");
          return this.__PROXY__.getAngles(...args);
        };
    
        // function 
        RDimAngular3PData.prototype.to2D = function(...args) 
          
        {
          //print("JS: RDimAngular3PData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RDimAngular3PData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimAngular3PData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RDimAngular3PData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      