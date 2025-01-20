
      // auto generated
      //var self;

      // class constructor:
      function RDimAngularData() {
        

        // should be RDimAngularData_BaseJs.call(this, engine):
        //RDimAngularData.prototype = new RDimAngularData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimAngularData.getIdStatic()))) {

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
            qWarning("RDimAngularData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RDimAngularData.js: No constructor found for class RDimAngularData");
            
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

      //RDimAngularData.prototype = new RDimAngularData_BaseJs(engine);
      //RDimAngularData.prototype = new RDimAngularData_Wrapper(engine);
      RDimAngularData.prototype = new Object();

      RDimAngularData.prototype.toString = function() {
          //return "RDimAngularData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimAngularData [JS]";
        };
      RDimAngularData.getObjectType = function() {
        return RJSType_RDimAngularData.getIdStatic();
      };

      RDimAngularData.prototype.getObjectType = function() {
        return RJSType_RDimAngularData.getIdStatic();
      };

      RDimAngularData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimAngularData.getIdStatic()) {
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
        RDimAngularData.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RDimAngularData.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RDimAngularData.prototype.isPointType = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.isPointType");
          return this.__PROXY__.isPointType(...args);
        };
    
        // function 
        RDimAngularData.prototype.getClosestSubEntityId = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getClosestSubEntityId");
          return this.__PROXY__.getClosestSubEntityId(...args);
        };
    
        // function 
        RDimAngularData.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RDimAngularData.prototype.copyAttributesFrom = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.copyAttributesFrom");
          return this.__PROXY__.copyAttributesFrom(...args);
        };
    
        // function 
        RDimAngularData.prototype.setZ = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setZ");
          return this.__PROXY__.setZ(...args);
        };
    
        // function 
        RDimAngularData.prototype.getBoundingBoxes = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getBoundingBoxes");
          return this.__PROXY__.getBoundingBoxes(...args);
        };
    
        // function 
        RDimAngularData.prototype.getHull = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getHull");
          return this.__PROXY__.getHull(...args);
        };
    
        // function 
        RDimAngularData.prototype.isUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.isUpdatesEnabled");
          return this.__PROXY__.isUpdatesEnabled(...args);
        };
    
        // function 
        RDimAngularData.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setUpdatesEnabled");
          return this.__PROXY__.setUpdatesEnabled(...args);
        };
    
        // function 
        RDimAngularData.prototype.cloneOnChange = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.cloneOnChange");
          return this.__PROXY__.cloneOnChange(...args);
        };
    
        // function 
        RDimAngularData.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RDimAngularData.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RDimAngularData.prototype.isSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.isSelectedWorkingSet");
          return this.__PROXY__.isSelectedWorkingSet(...args);
        };
    
        // function 
        RDimAngularData.prototype.setSelectedWorkingSet = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setSelectedWorkingSet");
          return this.__PROXY__.setSelectedWorkingSet(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDrawOrder = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDrawOrder");
          return this.__PROXY__.getDrawOrder(...args);
        };
    
        // function 
        RDimAngularData.prototype.setDrawOrder = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setDrawOrder");
          return this.__PROXY__.setDrawOrder(...args);
        };
    
        // function 
        RDimAngularData.prototype.setLayerId = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setLayerId");
          return this.__PROXY__.setLayerId(...args);
        };
    
        // function 
        RDimAngularData.prototype.getLayerId = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getLayerId");
          return this.__PROXY__.getLayerId(...args);
        };
    
        // function 
        RDimAngularData.prototype.setLayerName = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setLayerName");
          return this.__PROXY__.setLayerName(...args);
        };
    
        // function 
        RDimAngularData.prototype.getLayerName = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getLayerName");
          return this.__PROXY__.getLayerName(...args);
        };
    
        // function 
        RDimAngularData.prototype.setBlockId = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setBlockId");
          return this.__PROXY__.setBlockId(...args);
        };
    
        // function 
        RDimAngularData.prototype.getBlockId = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getBlockId");
          return this.__PROXY__.getBlockId(...args);
        };
    
        // function 
        RDimAngularData.prototype.setParentId = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setParentId");
          return this.__PROXY__.setParentId(...args);
        };
    
        // function 
        RDimAngularData.prototype.getParentId = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getParentId");
          return this.__PROXY__.getParentId(...args);
        };
    
        // function 
        RDimAngularData.prototype.getBlockName = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getBlockName");
          return this.__PROXY__.getBlockName(...args);
        };
    
        // function 
        RDimAngularData.prototype.setLinetypeId = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setLinetypeId");
          return this.__PROXY__.setLinetypeId(...args);
        };
    
        // function 
        RDimAngularData.prototype.getLinetypeId = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getLinetypeId");
          return this.__PROXY__.getLinetypeId(...args);
        };
    
        // function 
        RDimAngularData.prototype.setLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setLinetypePattern");
          return this.__PROXY__.setLinetypePattern(...args);
        };
    
        // function 
        RDimAngularData.prototype.getLinetypePattern = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getLinetypePattern");
          return this.__PROXY__.getLinetypePattern(...args);
        };
    
        // function 
        RDimAngularData.prototype.setLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setLinetypeScale");
          return this.__PROXY__.setLinetypeScale(...args);
        };
    
        // function 
        RDimAngularData.prototype.getLinetypeScale = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getLinetypeScale");
          return this.__PROXY__.getLinetypeScale(...args);
        };
    
        // function 
        RDimAngularData.prototype.getLineweight = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getLineweight");
          return this.__PROXY__.getLineweight(...args);
        };
    
        // function 
        RDimAngularData.prototype.setLineweight = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setLineweight");
          return this.__PROXY__.setLineweight(...args);
        };
    
        // function 
        RDimAngularData.prototype.setColor = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RDimAngularData.prototype.getColor = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDisplayColor = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDisplayColor");
          return this.__PROXY__.getDisplayColor(...args);
        };
    
        // function 
        RDimAngularData.prototype.getInternalReferencePoints = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getInternalReferencePoints");
          return this.__PROXY__.getInternalReferencePoints(...args);
        };
    
        // function 
        RDimAngularData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RDimAngularData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RDimAngularData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RDimAngularData.prototype.getArcReferencePoints = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getArcReferencePoints");
          return this.__PROXY__.getArcReferencePoints(...args);
        };
    
        // function 
        RDimAngularData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RDimAngularData.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RDimAngularData.prototype.getIntersectionPoints = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getIntersectionPoints");
          return this.__PROXY__.getIntersectionPoints(...args);
        };
    
        // function 
        RDimAngularData.prototype.getVectorTo = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getVectorTo");
          return this.__PROXY__.getVectorTo(...args);
        };
    
        // function 
        RDimAngularData.prototype.isInside = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.isInside");
          return this.__PROXY__.isInside(...args);
        };
    
        // function 
        RDimAngularData.prototype.isOnEntity = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.isOnEntity");
          return this.__PROXY__.isOnEntity(...args);
        };
    
        // function 
        RDimAngularData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RDimAngularData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RDimAngularData.prototype.stretch = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.stretch");
          return this.__PROXY__.stretch(...args);
        };
    
        // function 
        RDimAngularData.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RDimAngularData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RDimAngularData.prototype.render = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.render");
          return this.__PROXY__.render(...args);
        };
    
        // function 
        RDimAngularData.prototype.updateBoundingBox = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.updateBoundingBox");
          return this.__PROXY__.updateBoundingBox(...args);
        };
    
        // function 
        RDimAngularData.prototype.updateTextPositionCenter = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.updateTextPositionCenter");
          return this.__PROXY__.updateTextPositionCenter(...args);
        };
    
        // function 
        RDimAngularData.prototype.updateTextPositionSide = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.updateTextPositionSide");
          return this.__PROXY__.updateTextPositionSide(...args);
        };
    
        // function 
        RDimAngularData.prototype.updateTextData = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.updateTextData");
          return this.__PROXY__.updateTextData(...args);
        };
    
        // function 
        RDimAngularData.prototype.updateShapes = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.updateShapes");
          return this.__PROXY__.updateShapes(...args);
        };
    
        // function 
        RDimAngularData.prototype.updateArrowPos1 = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.updateArrowPos1");
          return this.__PROXY__.updateArrowPos1(...args);
        };
    
        // function 
        RDimAngularData.prototype.updateArrowPos2 = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.updateArrowPos2");
          return this.__PROXY__.updateArrowPos2(...args);
        };
    
        // function 
        RDimAngularData.prototype.clearStyleOverrides = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.clearStyleOverrides");
          return this.__PROXY__.clearStyleOverrides(...args);
        };
    
        // function 
        RDimAngularData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RDimAngularData.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RDimAngularData.prototype.setDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setDefinitionPoint");
          return this.__PROXY__.setDefinitionPoint(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDefinitionPoint = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDefinitionPoint");
          return this.__PROXY__.getDefinitionPoint(...args);
        };
    
        // function 
        RDimAngularData.prototype.setText = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setText");
          return this.__PROXY__.setText(...args);
        };
    
        // function 
        RDimAngularData.prototype.getText = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getText");
          return this.__PROXY__.getText(...args);
        };
    
        // function 
        RDimAngularData.prototype.setUpperTolerance = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setUpperTolerance");
          return this.__PROXY__.setUpperTolerance(...args);
        };
    
        // function 
        RDimAngularData.prototype.setLowerTolerance = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setLowerTolerance");
          return this.__PROXY__.setLowerTolerance(...args);
        };
    
        // function 
        RDimAngularData.prototype.setTextPosition = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setTextPosition");
          return this.__PROXY__.setTextPosition(...args);
        };
    
        // function 
        RDimAngularData.prototype.getTextPosition = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getTextPosition");
          return this.__PROXY__.getTextPosition(...args);
        };
    
        // function 
        RDimAngularData.prototype.setFontName = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setFontName");
          return this.__PROXY__.setFontName(...args);
        };
    
        // function 
        RDimAngularData.prototype.getFontName = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getFontName");
          return this.__PROXY__.getFontName(...args);
        };
    
        // function 
        RDimAngularData.prototype.setDimBlockName = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setDimBlockName");
          return this.__PROXY__.setDimBlockName(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDimBlockName = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDimBlockName");
          return this.__PROXY__.getDimBlockName(...args);
        };
    
        // function 
        RDimAngularData.prototype.hasOverrides = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.hasOverrides");
          return this.__PROXY__.hasOverrides(...args);
        };
    
        // function 
        RDimAngularData.prototype.hasOverride = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.hasOverride");
          return this.__PROXY__.hasOverride(...args);
        };
    
        // function 
        RDimAngularData.prototype.getOverrides = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getOverrides");
          return this.__PROXY__.getOverrides(...args);
        };
    
        // function 
        RDimAngularData.prototype.setDimXVariant = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setDimXVariant");
          return this.__PROXY__.setDimXVariant(...args);
        };
    
        // function 
        RDimAngularData.prototype.setDimXDouble = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setDimXDouble");
          return this.__PROXY__.setDimXDouble(...args);
        };
    
        // function 
        RDimAngularData.prototype.setDimXInt = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setDimXInt");
          return this.__PROXY__.setDimXInt(...args);
        };
    
        // function 
        RDimAngularData.prototype.setDimXBool = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setDimXBool");
          return this.__PROXY__.setDimXBool(...args);
        };
    
        // function 
        RDimAngularData.prototype.setDimXColor = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setDimXColor");
          return this.__PROXY__.setDimXColor(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDimXVariant = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDimXVariant");
          return this.__PROXY__.getDimXVariant(...args);
        };
    
        // function 
        RDimAngularData.prototype.getVariantOverride = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getVariantOverride");
          return this.__PROXY__.getVariantOverride(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDimXDouble = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDimXDouble");
          return this.__PROXY__.getDimXDouble(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDoubleOverride = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDoubleOverride");
          return this.__PROXY__.getDoubleOverride(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDimXInt = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDimXInt");
          return this.__PROXY__.getDimXInt(...args);
        };
    
        // function 
        RDimAngularData.prototype.getIntOverride = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getIntOverride");
          return this.__PROXY__.getIntOverride(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDimXBool = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDimXBool");
          return this.__PROXY__.getDimXBool(...args);
        };
    
        // function 
        RDimAngularData.prototype.getBoolOverride = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getBoolOverride");
          return this.__PROXY__.getBoolOverride(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDimXColor = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDimXColor");
          return this.__PROXY__.getDimXColor(...args);
        };
    
        // function 
        RDimAngularData.prototype.getColorOverride = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getColorOverride");
          return this.__PROXY__.getColorOverride(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDimlfac = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDimlfac");
          return this.__PROXY__.getDimlfac(...args);
        };
    
        // function 
        RDimAngularData.prototype.setDimlfac = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setDimlfac");
          return this.__PROXY__.setDimlfac(...args);
        };
    
        // function 
        RDimAngularData.prototype.getLinearFactor = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getLinearFactor");
          return this.__PROXY__.getLinearFactor(...args);
        };
    
        // function 
        RDimAngularData.prototype.setLinearFactor = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setLinearFactor");
          return this.__PROXY__.setLinearFactor(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDimscale = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDimscale");
          return this.__PROXY__.getDimscale(...args);
        };
    
        // function 
        RDimAngularData.prototype.setDimscale = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setDimscale");
          return this.__PROXY__.setDimscale(...args);
        };
    
        // function 
        RDimAngularData.prototype.isArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.isArrow1Flipped");
          return this.__PROXY__.isArrow1Flipped(...args);
        };
    
        // function 
        RDimAngularData.prototype.setArrow1Flipped = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setArrow1Flipped");
          return this.__PROXY__.setArrow1Flipped(...args);
        };
    
        // function 
        RDimAngularData.prototype.isArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.isArrow2Flipped");
          return this.__PROXY__.isArrow2Flipped(...args);
        };
    
        // function 
        RDimAngularData.prototype.setArrow2Flipped = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setArrow2Flipped");
          return this.__PROXY__.setArrow2Flipped(...args);
        };
    
        // function 
        RDimAngularData.prototype.isExtLineFix = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.isExtLineFix");
          return this.__PROXY__.isExtLineFix(...args);
        };
    
        // function 
        RDimAngularData.prototype.setExtLineFix = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setExtLineFix");
          return this.__PROXY__.setExtLineFix(...args);
        };
    
        // function 
        RDimAngularData.prototype.getExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getExtLineFixLength");
          return this.__PROXY__.getExtLineFixLength(...args);
        };
    
        // function 
        RDimAngularData.prototype.setExtLineFixLength = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setExtLineFixLength");
          return this.__PROXY__.setExtLineFixLength(...args);
        };
    
        // function 
        RDimAngularData.prototype.adjustExtensionLineFixLength = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.adjustExtensionLineFixLength");
          return this.__PROXY__.adjustExtensionLineFixLength(...args);
        };
    
        // function 
        RDimAngularData.prototype.hasSpaceForArrows = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.hasSpaceForArrows");
          return this.__PROXY__.hasSpaceForArrows(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RDimAngularData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RDimAngularData.prototype.clickReferencePoint = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.clickReferencePoint");
          return this.__PROXY__.clickReferencePoint(...args);
        };
    
        // function 
        RDimAngularData.prototype.move = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RDimAngularData.prototype.rotate = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RDimAngularData.prototype.scale = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RDimAngularData.prototype.scaleVisualProperties = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.scaleVisualProperties");
          return this.__PROXY__.scaleVisualProperties(...args);
        };
    
        // function 
        RDimAngularData.prototype.mirror = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDimexo = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDimexo");
          return this.__PROXY__.getDimexo(...args);
        };
    
        // function 
        RDimAngularData.prototype.setDimexo = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setDimexo");
          return this.__PROXY__.setDimexo(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDimexe = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDimexe");
          return this.__PROXY__.getDimexe(...args);
        };
    
        // function 
        RDimAngularData.prototype.setDimexe = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setDimexe");
          return this.__PROXY__.setDimexe(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDimasz = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDimasz");
          return this.__PROXY__.getDimasz(...args);
        };
    
        // function 
        RDimAngularData.prototype.setDimasz = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setDimasz");
          return this.__PROXY__.setDimasz(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDimdli = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDimdli");
          return this.__PROXY__.getDimdli(...args);
        };
    
        // function 
        RDimAngularData.prototype.setDimdli = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setDimdli");
          return this.__PROXY__.setDimdli(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDimgap = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDimgap");
          return this.__PROXY__.getDimgap(...args);
        };
    
        // function 
        RDimAngularData.prototype.setDimgap = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setDimgap");
          return this.__PROXY__.setDimgap(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDimtxt = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDimtxt");
          return this.__PROXY__.getDimtxt(...args);
        };
    
        // function 
        RDimAngularData.prototype.setDimtxt = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setDimtxt");
          return this.__PROXY__.setDimtxt(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDimlunit = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDimlunit");
          return this.__PROXY__.getDimlunit(...args);
        };
    
        // function 
        RDimAngularData.prototype.setDimlunit = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setDimlunit");
          return this.__PROXY__.setDimlunit(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDimjust = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDimjust");
          return this.__PROXY__.getDimjust(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDimtad = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDimtad");
          return this.__PROXY__.getDimtad(...args);
        };
    
        // function 
        RDimAngularData.prototype.setDimtad = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setDimtad");
          return this.__PROXY__.setDimtad(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDimtih = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDimtih");
          return this.__PROXY__.getDimtih(...args);
        };
    
        // function 
        RDimAngularData.prototype.setDimtih = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setDimtih");
          return this.__PROXY__.setDimtih(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDimtsz = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDimtsz");
          return this.__PROXY__.getDimtsz(...args);
        };
    
        // function 
        RDimAngularData.prototype.setDimtsz = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setDimtsz");
          return this.__PROXY__.setDimtsz(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDimzin = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDimzin");
          return this.__PROXY__.getDimzin(...args);
        };
    
        // function 
        RDimAngularData.prototype.setDimzin = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setDimzin");
          return this.__PROXY__.setDimzin(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDimaunit = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDimaunit");
          return this.__PROXY__.getDimaunit(...args);
        };
    
        // function 
        RDimAngularData.prototype.setDimaunit = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setDimaunit");
          return this.__PROXY__.setDimaunit(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDimadec = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDimadec");
          return this.__PROXY__.getDimadec(...args);
        };
    
        // function 
        RDimAngularData.prototype.setDimadec = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setDimadec");
          return this.__PROXY__.setDimadec(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDimdec = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDimdec");
          return this.__PROXY__.getDimdec(...args);
        };
    
        // function 
        RDimAngularData.prototype.setDimdec = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setDimdec");
          return this.__PROXY__.setDimdec(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDimazin = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDimazin");
          return this.__PROXY__.getDimazin(...args);
        };
    
        // function 
        RDimAngularData.prototype.setDimazin = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setDimazin");
          return this.__PROXY__.setDimazin(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDimdsep = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDimdsep");
          return this.__PROXY__.getDimdsep(...args);
        };
    
        // function 
        RDimAngularData.prototype.setDimdsep = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setDimdsep");
          return this.__PROXY__.setDimdsep(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDimclrt = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDimclrt");
          return this.__PROXY__.getDimclrt(...args);
        };
    
        // function 
        RDimAngularData.prototype.setDimclrt = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setDimclrt");
          return this.__PROXY__.setDimclrt(...args);
        };
    
        // function 
        RDimAngularData.prototype.useArchTick = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.useArchTick");
          return this.__PROXY__.useArchTick(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDimblk = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDimblk");
          return this.__PROXY__.getDimblk(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDimblkName = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDimblkName");
          return this.__PROXY__.getDimblkName(...args);
        };
    
        // function 
        RDimAngularData.prototype.isDimXScaled = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.isDimXScaled");
          return this.__PROXY__.isDimXScaled(...args);
        };
    
        // function 
        RDimAngularData.prototype.hasCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.hasCustomTextPosition");
          return this.__PROXY__.hasCustomTextPosition(...args);
        };
    
        // function 
        RDimAngularData.prototype.setCustomTextPosition = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setCustomTextPosition");
          return this.__PROXY__.setCustomTextPosition(...args);
        };
    
        // function 
        RDimAngularData.prototype.getLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getLineSpacingStyle");
          return this.__PROXY__.getLineSpacingStyle(...args);
        };
    
        // function 
        RDimAngularData.prototype.getLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getLineSpacingFactor");
          return this.__PROXY__.getLineSpacingFactor(...args);
        };
    
        // function 
        RDimAngularData.prototype.getTextRotation = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getTextRotation");
          return this.__PROXY__.getTextRotation(...args);
        };
    
        // function 
        RDimAngularData.prototype.setTextRotation = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setTextRotation");
          return this.__PROXY__.setTextRotation(...args);
        };
    
        // function 
        RDimAngularData.prototype.getTextData = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getTextData");
          return this.__PROXY__.getTextData(...args);
        };
    
        // function 
        RDimAngularData.prototype.initTextData = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.initTextData");
          return this.__PROXY__.initTextData(...args);
        };
    
        // function 
        RDimAngularData.prototype.getMeasurement = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getMeasurement");
          return this.__PROXY__.getMeasurement(...args);
        };
    
        // function 
        RDimAngularData.prototype.formatLabel = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.formatLabel");
          return this.__PROXY__.formatLabel(...args);
        };
    
        // function 
        RDimAngularData.prototype.formatAngleLabel = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.formatAngleLabel");
          return this.__PROXY__.formatAngleLabel(...args);
        };
    
        // function 
        RDimAngularData.prototype.update = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDimensionBlockReference = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDimensionBlockReference");
          return this.__PROXY__.getDimensionBlockReference(...args);
        };
    
        // function 
        RDimAngularData.prototype.hasDimensionBlockReference = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.hasDimensionBlockReference");
          return this.__PROXY__.hasDimensionBlockReference(...args);
        };
    
        // function 
        RDimAngularData.prototype.to2D = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RDimAngularData.prototype.getType = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RDimAngularData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RDimAngularData.prototype.isSane = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RDimAngularData.prototype.setExtensionLine1End = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setExtensionLine1End");
          return this.__PROXY__.setExtensionLine1End(...args);
        };
    
        // function 
        RDimAngularData.prototype.getExtensionLine1End = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getExtensionLine1End");
          return this.__PROXY__.getExtensionLine1End(...args);
        };
    
        // function 
        RDimAngularData.prototype.setExtensionLine2End = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setExtensionLine2End");
          return this.__PROXY__.setExtensionLine2End(...args);
        };
    
        // function 
        RDimAngularData.prototype.getExtensionLine2End = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getExtensionLine2End");
          return this.__PROXY__.getExtensionLine2End(...args);
        };
    
        // function 
        RDimAngularData.prototype.setDimArcPosition = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.setDimArcPosition");
          return this.__PROXY__.setDimArcPosition(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDimArcPosition = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDimArcPosition");
          return this.__PROXY__.getDimArcPosition(...args);
        };
    
        // function 
        RDimAngularData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RDimAngularData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RDimAngularData.prototype.getAngle = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getAngle");
          return this.__PROXY__.getAngle(...args);
        };
    
        // function 
        RDimAngularData.prototype.getAngles = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getAngles");
          return this.__PROXY__.getAngles(...args);
        };
    
        // function 
        RDimAngularData.prototype.getCenter = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getCenter");
          return this.__PROXY__.getCenter(...args);
        };
    
        // function 
        RDimAngularData.prototype.getMeasuredValue = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getMeasuredValue");
          return this.__PROXY__.getMeasuredValue(...args);
        };
    
        // function 
        RDimAngularData.prototype.getAutoLabel = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getAutoLabel");
          return this.__PROXY__.getAutoLabel(...args);
        };
    
        // function 
        RDimAngularData.prototype.getDimensionArc = function(...args) 
          
        {
          //print("JS: RDimAngularData.prototype.getDimensionArc");
          return this.__PROXY__.getDimensionArc(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RDimAngularData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimAngularData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RDimAngularData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      