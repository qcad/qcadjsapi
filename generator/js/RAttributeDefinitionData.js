
      // auto generated
      //var self;

      // class constructor:
      function RAttributeDefinitionData() {
        

        // should be RAttributeDefinitionData_BaseJs.call(this, engine):
        //RAttributeDefinitionData.prototype = new RAttributeDefinitionData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RAttributeDefinitionData.getIdStatic()))) {

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
            qWarning("RAttributeDefinitionData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RAttributeDefinitionData_Wrapper(
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

      

        //copyProperties(this, wrapper, RAttributeDefinitionData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RAttributeDefinitionData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RAttributeDefinitionData);
  }

  
  else {
    
        print("RAttributeDefinitionData(): wrong number / type of arguments");
      
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

      //RAttributeDefinitionData.prototype = new RAttributeDefinitionData_BaseJs(engine);
      //RAttributeDefinitionData.prototype = new RAttributeDefinitionData_Wrapper(engine);
      RAttributeDefinitionData.prototype = new Object();

      RAttributeDefinitionData.prototype.toString = function() {
          //return "RAttributeDefinitionData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RAttributeDefinitionData [JS]";
        };
      RAttributeDefinitionData.getObjectType = function() {
        return RJSType_RAttributeDefinitionData.getIdStatic();
      };

      RAttributeDefinitionData.prototype.getObjectType = function() {
        return RJSType_RAttributeDefinitionData.getIdStatic();
      };

      RAttributeDefinitionData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RAttributeDefinitionData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RTextBasedData.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: TextFlag
RAttributeDefinitionData.NoFlags = RAttributeDefinitionData_Wrapper.NoFlags;
RAttributeDefinitionData.Bold = RAttributeDefinitionData_Wrapper.Bold;
RAttributeDefinitionData.Italic = RAttributeDefinitionData_Wrapper.Italic;
RAttributeDefinitionData.Simple = RAttributeDefinitionData_Wrapper.Simple;
RAttributeDefinitionData.DimensionLabel = RAttributeDefinitionData_Wrapper.DimensionLabel;
RAttributeDefinitionData.Highlighted = RAttributeDefinitionData_Wrapper.Highlighted;
RAttributeDefinitionData.Backward = RAttributeDefinitionData_Wrapper.Backward;
RAttributeDefinitionData.UpsideDown = RAttributeDefinitionData_Wrapper.UpsideDown;


      // functions:
      
        // function 
        RAttributeDefinitionData.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.isValid = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.isSane = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.isSane");
          return this.__PROXY__.isSane(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getBoundingBox");
          return this.__PROXY__.getBoundingBox(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getRotatedBoundingBox = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getRotatedBoundingBox");
          return this.__PROXY__.getRotatedBoundingBox(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getWidth = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getWidth");
          return this.__PROXY__.getWidth(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getHeight = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getHeight");
          return this.__PROXY__.getHeight(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.sync = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.sync");
          return this.__PROXY__.sync(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getPointOnEntity = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getPointOnEntity");
          return this.__PROXY__.getPointOnEntity(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getEndPoints = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getEndPoints");
          return this.__PROXY__.getEndPoints(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getMiddlePoints = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getMiddlePoints");
          return this.__PROXY__.getMiddlePoints(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getCenterPoints = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getCenterPoints");
          return this.__PROXY__.getCenterPoints(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getPointsWithDistanceToEnd = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getPointsWithDistanceToEnd");
          return this.__PROXY__.getPointsWithDistanceToEnd(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getDistanceTo = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getDistanceTo");
          return this.__PROXY__.getDistanceTo(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.intersectsWith = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.intersectsWith");
          return this.__PROXY__.intersectsWith(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getPosition = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getPosition");
          return this.__PROXY__.getPosition(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.setPosition = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.setPosition");
          return this.__PROXY__.setPosition(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getAlignmentPoint = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getAlignmentPoint");
          return this.__PROXY__.getAlignmentPoint(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.setAlignmentPoint = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.setAlignmentPoint");
          return this.__PROXY__.setAlignmentPoint(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.setText = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.setText");
          return this.__PROXY__.setText(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getFontName = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getFontName");
          return this.__PROXY__.getFontName(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.setFontName = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.setFontName");
          return this.__PROXY__.setFontName(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getFontFile = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getFontFile");
          return this.__PROXY__.getFontFile(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.setFontFile = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.setFontFile");
          return this.__PROXY__.setFontFile(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.isBold = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.isBold");
          return this.__PROXY__.isBold(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.setBold = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.setBold");
          return this.__PROXY__.setBold(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.isItalic = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.isItalic");
          return this.__PROXY__.isItalic(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.setItalic = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.setItalic");
          return this.__PROXY__.setItalic(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getTextHeight = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getTextHeight");
          return this.__PROXY__.getTextHeight(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.setTextHeight = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.setTextHeight");
          return this.__PROXY__.setTextHeight(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getTextWidth = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getTextWidth");
          return this.__PROXY__.getTextWidth(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.setTextWidth = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.setTextWidth");
          return this.__PROXY__.setTextWidth(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.setVAlign = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.setVAlign");
          return this.__PROXY__.setVAlign(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getVAlign = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getVAlign");
          return this.__PROXY__.getVAlign(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.setHAlign = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.setHAlign");
          return this.__PROXY__.setHAlign(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getHAlign = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getHAlign");
          return this.__PROXY__.getHAlign(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.setDrawingDirection = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.setDrawingDirection");
          return this.__PROXY__.setDrawingDirection(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getDrawingDirection = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getDrawingDirection");
          return this.__PROXY__.getDrawingDirection(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.setLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.setLineSpacingStyle");
          return this.__PROXY__.setLineSpacingStyle(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getLineSpacingStyle = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getLineSpacingStyle");
          return this.__PROXY__.getLineSpacingStyle(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.setLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.setLineSpacingFactor");
          return this.__PROXY__.setLineSpacingFactor(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getLineSpacingFactor = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getLineSpacingFactor");
          return this.__PROXY__.getLineSpacingFactor(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.setAngle = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.setAngle");
          return this.__PROXY__.setAngle(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getAngle = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getAngle");
          return this.__PROXY__.getAngle(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.setXScale = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.setXScale");
          return this.__PROXY__.setXScale(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getXScale = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getXScale");
          return this.__PROXY__.getXScale(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.setSimple = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.setSimple");
          return this.__PROXY__.setSimple(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.isSimple = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.isSimple");
          return this.__PROXY__.isSimple(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.setBackward = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.setBackward");
          return this.__PROXY__.setBackward(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.isBackward = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.isBackward");
          return this.__PROXY__.isBackward(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.setUpsideDown = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.setUpsideDown");
          return this.__PROXY__.setUpsideDown(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.isUpsideDown = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.isUpsideDown");
          return this.__PROXY__.isUpsideDown(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.setDimensionLabel = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.setDimensionLabel");
          return this.__PROXY__.setDimensionLabel(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.isDimensionLabel = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.isDimensionLabel");
          return this.__PROXY__.isDimensionLabel(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.setHighlighted = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.setHighlighted");
          return this.__PROXY__.setHighlighted(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.isHighlighted = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.isHighlighted");
          return this.__PROXY__.isHighlighted(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getReferencePoints = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getReferencePoints");
          return this.__PROXY__.getReferencePoints(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.moveReferencePoint = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.moveReferencePoint");
          return this.__PROXY__.moveReferencePoint(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.move = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.move");
          return this.__PROXY__.move(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.rotate = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.rotate");
          return this.__PROXY__.rotate(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.scale = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.mirror = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.flipHorizontal = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.flipHorizontal");
          return this.__PROXY__.flipHorizontal(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.flipVertical = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.flipVertical");
          return this.__PROXY__.flipVertical(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getText = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getText");
          return this.__PROXY__.getText(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getPlainText = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getPlainText");
          return this.__PROXY__.getPlainText(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getEscapedText = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getEscapedText");
          return this.__PROXY__.getEscapedText(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getMainFont = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getMainFont");
          return this.__PROXY__.getMainFont(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.update = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.update");
          return this.__PROXY__.update(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.isDirty = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.isDirty");
          return this.__PROXY__.isDirty(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getPainterPaths = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getPainterPaths");
          return this.__PROXY__.getPainterPaths(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getShapes = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getShapes");
          return this.__PROXY__.getShapes(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getExploded = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getExploded");
          return this.__PROXY__.getExploded(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getClosestShape = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getClosestShape");
          return this.__PROXY__.getClosestShape(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getClosestPointOnEntity = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getClosestPointOnEntity");
          return this.__PROXY__.getClosestPointOnEntity(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getTextLayouts = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getTextLayouts");
          return this.__PROXY__.getTextLayouts(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getSimpleTextBlocks = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getSimpleTextBlocks");
          return this.__PROXY__.getSimpleTextBlocks(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.to2D = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.to2D");
          return this.__PROXY__.to2D(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getType = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getTag = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getTag");
          return this.__PROXY__.getTag(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.setTag = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.setTag");
          return this.__PROXY__.setTag(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getPrompt = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getPrompt");
          return this.__PROXY__.getPrompt(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.setPrompt = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.setPrompt");
          return this.__PROXY__.setPrompt(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RAttributeDefinitionData.prototype.getRenderedText = function(...args) 
          
        {
          //print("JS: RAttributeDefinitionData.prototype.getRenderedText");
          return this.__PROXY__.getRenderedText(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RAttributeDefinitionData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RAttributeDefinitionData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RAttributeDefinitionData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      