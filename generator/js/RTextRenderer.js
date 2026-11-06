
      // auto generated
      //var self;

      // class constructor:
      function RTextRenderer() {
        

        // should be RTextRenderer_BaseJs.call(this, engine):
        //RTextRenderer.prototype = new RTextRenderer_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTextRenderer.getIdStatic()))) {

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
            qWarning("RTextRenderer.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 3 &&
          arguments.length <= 4) {
    
            self = this;
            wrapper = new RTextRenderer_Wrapper(
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

      

        //copyProperties(this, wrapper, RTextRenderer);
  }

  
  else {
    
        print("RTextRenderer(): wrong number / type of arguments");
      
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

      //RTextRenderer.prototype = new RTextRenderer_BaseJs(engine);
      //RTextRenderer.prototype = new RTextRenderer_Wrapper(engine);
      RTextRenderer.prototype = new Object();


      RTextRenderer.prototype.toString = function() {
          //return "RTextRenderer [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTextRenderer [JS]";
        };
      RTextRenderer.getObjectType = function() {
        return RJSType_RTextRenderer.getIdStatic();
      };

      RTextRenderer.prototype.getObjectType = function() {
        return RJSType_RTextRenderer.getIdStatic();
      };

      RTextRenderer.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTextRenderer.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: Target
RTextRenderer.PainterPaths = RTextRenderer_Wrapper.PainterPaths;
RTextRenderer.RichText = RTextRenderer_Wrapper.RichText;


      // functions:
      
        // function 
        RTextRenderer.prototype.renderSimple = function(...args) 
          
        {
          //print("JS: RTextRenderer.prototype.renderSimple");
          
              return this.__PROXY__.renderSimple(...args);
            
        };
        
        // function 
        RTextRenderer.prototype.render = function(...args) 
          
        {
          //print("JS: RTextRenderer.prototype.render");
          
              return this.__PROXY__.render(...args);
            
        };
        
        // function 
        RTextRenderer.prototype.getPainterPaths = function(...args) 
          
        {
          //print("JS: RTextRenderer.prototype.getPainterPaths");
          
              return this.__PROXY__.getPainterPaths(...args);
            
        };
        
        // function 
        RTextRenderer.prototype.getTextLayouts = function(...args) 
          
        {
          //print("JS: RTextRenderer.prototype.getTextLayouts");
          
              return this.__PROXY__.getTextLayouts(...args);
            
        };
        
        // function 
        RTextRenderer.prototype.getBoundingBox = function(...args) 
          
        {
          //print("JS: RTextRenderer.prototype.getBoundingBox");
          
              return this.__PROXY__.getBoundingBox(...args);
            
        };
        
        // function 
        RTextRenderer.prototype.getHeight = function(...args) 
          
        {
          //print("JS: RTextRenderer.prototype.getHeight");
          
              return this.__PROXY__.getHeight(...args);
            
        };
        
        // function 
        RTextRenderer.prototype.getWidth = function(...args) 
          
        {
          //print("JS: RTextRenderer.prototype.getWidth");
          
              return this.__PROXY__.getWidth(...args);
            
        };
        
        // function 
        RTextRenderer.prototype.getRichText = function(...args) 
          
        {
          //print("JS: RTextRenderer.prototype.getRichText");
          
              return this.__PROXY__.getRichText(...args);
            
        };
        
        // function 
        RTextRenderer.prototype.lockForDrawing = function(...args) 
          
        {
          //print("JS: RTextRenderer.prototype.lockForDrawing");
          
              return this.__PROXY__.lockForDrawing(...args);
            
        };
        
        // function 
        RTextRenderer.prototype.unlockForDrawing = function(...args) 
          
        {
          //print("JS: RTextRenderer.prototype.unlockForDrawing");
          
              return this.__PROXY__.unlockForDrawing(...args);
            
        };
        
        // function 
        RTextRenderer.prototype.getPainterPathsForBlock = function(...args) 
          
        {
          //print("JS: RTextRenderer.prototype.getPainterPathsForBlock");
          
              return this.__PROXY__.getPainterPathsForBlock(...args);
            
        };
        
        // function 
        RTextRenderer.prototype.getPainterPathsForBlockTtf = function(...args) 
          
        {
          //print("JS: RTextRenderer.prototype.getPainterPathsForBlockTtf");
          
              return this.__PROXY__.getPainterPathsForBlockTtf(...args);
            
        };
        
        // function 
        RTextRenderer.prototype.getPainterPathsForBlockCad = function(...args) 
          
        {
          //print("JS: RTextRenderer.prototype.getPainterPathsForBlockCad");
          
              return this.__PROXY__.getPainterPathsForBlockCad(...args);
            
        };
        
        // function 
        RTextRenderer.prototype.preparePath = function(...args) 
          
        {
          //print("JS: RTextRenderer.prototype.preparePath");
          
              return this.__PROXY__.preparePath(...args);
            
        };
        
        // function 
        RTextRenderer.prototype.preparePathColor = function(...args) 
          
        {
          //print("JS: RTextRenderer.prototype.preparePathColor");
          
              return this.__PROXY__.preparePathColor(...args);
            
        };
        
        // function 
        RTextRenderer.prototype.preparePathTransform = function(...args) 
          
        {
          //print("JS: RTextRenderer.prototype.preparePathTransform");
          
              return this.__PROXY__.preparePathTransform(...args);
            
        };
        
        // function 
        RTextRenderer.prototype.getCharacterRect = function(...args) 
          
        {
          //print("JS: RTextRenderer.prototype.getCharacterRect");
          
              return this.__PROXY__.getCharacterRect(...args);
            
        };
        
        // function 
        RTextRenderer.prototype.getRichTextForBlock = function(...args) 
          
        {
          //print("JS: RTextRenderer.prototype.getRichTextForBlock");
          
              return this.__PROXY__.getRichTextForBlock(...args);
            
        };
        
        // function 
        RTextRenderer.prototype.setBlockFont = function(...args) 
          
        {
          //print("JS: RTextRenderer.prototype.setBlockFont");
          
              return this.__PROXY__.setBlockFont(...args);
            
        };
        
        // function 
        RTextRenderer.prototype.getBlockFont = function(...args) 
          
        {
          //print("JS: RTextRenderer.prototype.getBlockFont");
          
              return this.__PROXY__.getBlockFont(...args);
            
        };
        
        // function 
        RTextRenderer.prototype.setBlockFontFile = function(...args) 
          
        {
          //print("JS: RTextRenderer.prototype.setBlockFontFile");
          
              return this.__PROXY__.setBlockFontFile(...args);
            
        };
        
        // function 
        RTextRenderer.prototype.getBlockFontFile = function(...args) 
          
        {
          //print("JS: RTextRenderer.prototype.getBlockFontFile");
          
              return this.__PROXY__.getBlockFontFile(...args);
            
        };
        
        // function 
        RTextRenderer.prototype.setUseCadFont = function(...args) 
          
        {
          //print("JS: RTextRenderer.prototype.setUseCadFont");
          
              return this.__PROXY__.setUseCadFont(...args);
            
        };
        
        // function 
        RTextRenderer.prototype.getUseCadFont = function(...args) 
          
        {
          //print("JS: RTextRenderer.prototype.getUseCadFont");
          
              return this.__PROXY__.getUseCadFont(...args);
            
        };
        
        // function 
        RTextRenderer.prototype.setBlockBold = function(...args) 
          
        {
          //print("JS: RTextRenderer.prototype.setBlockBold");
          
              return this.__PROXY__.setBlockBold(...args);
            
        };
        
        // function 
        RTextRenderer.prototype.getBlockBold = function(...args) 
          
        {
          //print("JS: RTextRenderer.prototype.getBlockBold");
          
              return this.__PROXY__.getBlockBold(...args);
            
        };
        
        // function 
        RTextRenderer.prototype.setBlockItalic = function(...args) 
          
        {
          //print("JS: RTextRenderer.prototype.setBlockItalic");
          
              return this.__PROXY__.setBlockItalic(...args);
            
        };
        
        // function 
        RTextRenderer.prototype.getBlockItalic = function(...args) 
          
        {
          //print("JS: RTextRenderer.prototype.getBlockItalic");
          
              return this.__PROXY__.getBlockItalic(...args);
            
        };
        
        // function 
        RTextRenderer.prototype.setBlockUnderline = function(...args) 
          
        {
          //print("JS: RTextRenderer.prototype.setBlockUnderline");
          
              return this.__PROXY__.setBlockUnderline(...args);
            
        };
        
        // function 
        RTextRenderer.prototype.getBlockUnderline = function(...args) 
          
        {
          //print("JS: RTextRenderer.prototype.getBlockUnderline");
          
              return this.__PROXY__.getBlockUnderline(...args);
            
        };
        
        // function 
        RTextRenderer.prototype.setBlockHeight = function(...args) 
          
        {
          //print("JS: RTextRenderer.prototype.setBlockHeight");
          
              return this.__PROXY__.setBlockHeight(...args);
            
        };
        
        // function 
        RTextRenderer.prototype.getBlockHeight = function(...args) 
          
        {
          //print("JS: RTextRenderer.prototype.getBlockHeight");
          
              return this.__PROXY__.getBlockHeight(...args);
            
        };
        
        // function 
        RTextRenderer.prototype.setCurrentFormat = function(...args) 
          
        {
          //print("JS: RTextRenderer.prototype.setCurrentFormat");
          
              return this.__PROXY__.setCurrentFormat(...args);
            
        };
        
        // function 
        RTextRenderer.prototype.getCurrentFormat = function(...args) 
          
        {
          //print("JS: RTextRenderer.prototype.getCurrentFormat");
          
              return this.__PROXY__.getCurrentFormat(...args);
            
        };
        

      // static functions:
      

        // static function 
        RTextRenderer.lockForDrawing = function() 
          
        {
          //print("JS: RTextRenderer.lockForDrawing");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RTextRenderer_WrapperSingletonInstance.lockForDrawing(
                  
                );
              

        //copyProperties(this, wrapper, RTextRenderer);
  }

  
  else {
    
        print("RTextRenderer.lockForDrawing(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextRenderer.unlockForDrawing = function() 
          
        {
          //print("JS: RTextRenderer.unlockForDrawing");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RTextRenderer_WrapperSingletonInstance.unlockForDrawing(
                  
                );
              

        //copyProperties(this, wrapper, RTextRenderer);
  }

  
  else {
    
        print("RTextRenderer.unlockForDrawing(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      RTextRenderer.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RTextRenderer.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RTextRenderer.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      RTextRenderer.rxLineFeedStr = 
  RTextRenderer_WrapperSingletonInstance.rxLineFeedStr;
RTextRenderer.rxLineFeed = 
  RTextRenderer_WrapperSingletonInstance.rxLineFeed;
RTextRenderer.rxAlignmentLeftStr = 
  RTextRenderer_WrapperSingletonInstance.rxAlignmentLeftStr;
RTextRenderer.rxAlignmentLeft = 
  RTextRenderer_WrapperSingletonInstance.rxAlignmentLeft;
RTextRenderer.rxAlignmentCenterStr = 
  RTextRenderer_WrapperSingletonInstance.rxAlignmentCenterStr;
RTextRenderer.rxAlignmentCenter = 
  RTextRenderer_WrapperSingletonInstance.rxAlignmentCenter;
RTextRenderer.rxAlignmentRightStr = 
  RTextRenderer_WrapperSingletonInstance.rxAlignmentRightStr;
RTextRenderer.rxAlignmentRight = 
  RTextRenderer_WrapperSingletonInstance.rxAlignmentRight;
RTextRenderer.rxXAlignmentLeftStr = 
  RTextRenderer_WrapperSingletonInstance.rxXAlignmentLeftStr;
RTextRenderer.rxXAlignmentLeft = 
  RTextRenderer_WrapperSingletonInstance.rxXAlignmentLeft;
RTextRenderer.rxXAlignmentCenterStr = 
  RTextRenderer_WrapperSingletonInstance.rxXAlignmentCenterStr;
RTextRenderer.rxXAlignmentCenter = 
  RTextRenderer_WrapperSingletonInstance.rxXAlignmentCenter;
RTextRenderer.rxXAlignmentRightStr = 
  RTextRenderer_WrapperSingletonInstance.rxXAlignmentRightStr;
RTextRenderer.rxXAlignmentRight = 
  RTextRenderer_WrapperSingletonInstance.rxXAlignmentRight;
RTextRenderer.rxXSpaceMTextStr = 
  RTextRenderer_WrapperSingletonInstance.rxXSpaceMTextStr;
RTextRenderer.rxXSpaceMText = 
  RTextRenderer_WrapperSingletonInstance.rxXSpaceMText;
RTextRenderer.rxTabMMStr = 
  RTextRenderer_WrapperSingletonInstance.rxTabMMStr;
RTextRenderer.rxTabMM = 
  RTextRenderer_WrapperSingletonInstance.rxTabMM;
RTextRenderer.rxTabINStr = 
  RTextRenderer_WrapperSingletonInstance.rxTabINStr;
RTextRenderer.rxTabIN = 
  RTextRenderer_WrapperSingletonInstance.rxTabIN;
RTextRenderer.rxParagraphFeedStr = 
  RTextRenderer_WrapperSingletonInstance.rxParagraphFeedStr;
RTextRenderer.rxParagraphFeed = 
  RTextRenderer_WrapperSingletonInstance.rxParagraphFeed;
RTextRenderer.rxXFeedStr = 
  RTextRenderer_WrapperSingletonInstance.rxXFeedStr;
RTextRenderer.rxXFeed = 
  RTextRenderer_WrapperSingletonInstance.rxXFeed;
RTextRenderer.rxHeightChangeStr = 
  RTextRenderer_WrapperSingletonInstance.rxHeightChangeStr;
RTextRenderer.rxHeightChange = 
  RTextRenderer_WrapperSingletonInstance.rxHeightChange;
RTextRenderer.rxUnderlineChangeStr = 
  RTextRenderer_WrapperSingletonInstance.rxUnderlineChangeStr;
RTextRenderer.rxUnderlineChange = 
  RTextRenderer_WrapperSingletonInstance.rxUnderlineChange;
RTextRenderer.rxStackedTextStr = 
  RTextRenderer_WrapperSingletonInstance.rxStackedTextStr;
RTextRenderer.rxStackedText = 
  RTextRenderer_WrapperSingletonInstance.rxStackedText;
RTextRenderer.rxColorChangeIndexStr = 
  RTextRenderer_WrapperSingletonInstance.rxColorChangeIndexStr;
RTextRenderer.rxColorChangeIndex = 
  RTextRenderer_WrapperSingletonInstance.rxColorChangeIndex;
RTextRenderer.rxColorChangeCustomStr = 
  RTextRenderer_WrapperSingletonInstance.rxColorChangeCustomStr;
RTextRenderer.rxColorChangeCustom = 
  RTextRenderer_WrapperSingletonInstance.rxColorChangeCustom;
RTextRenderer.rxNonBreakingSpaceStr = 
  RTextRenderer_WrapperSingletonInstance.rxNonBreakingSpaceStr;
RTextRenderer.rxNonBreakingSpace = 
  RTextRenderer_WrapperSingletonInstance.rxNonBreakingSpace;
RTextRenderer.rxOverlineOnStr = 
  RTextRenderer_WrapperSingletonInstance.rxOverlineOnStr;
RTextRenderer.rxOverlineOn = 
  RTextRenderer_WrapperSingletonInstance.rxOverlineOn;
RTextRenderer.rxOverlineOffStr = 
  RTextRenderer_WrapperSingletonInstance.rxOverlineOffStr;
RTextRenderer.rxOverlineOff = 
  RTextRenderer_WrapperSingletonInstance.rxOverlineOff;
RTextRenderer.rxUnderlineOnStr = 
  RTextRenderer_WrapperSingletonInstance.rxUnderlineOnStr;
RTextRenderer.rxUnderlineOn = 
  RTextRenderer_WrapperSingletonInstance.rxUnderlineOn;
RTextRenderer.rxUnderlineOffStr = 
  RTextRenderer_WrapperSingletonInstance.rxUnderlineOffStr;
RTextRenderer.rxUnderlineOff = 
  RTextRenderer_WrapperSingletonInstance.rxUnderlineOff;
RTextRenderer.rxStrikethroughOnStr = 
  RTextRenderer_WrapperSingletonInstance.rxStrikethroughOnStr;
RTextRenderer.rxStrikethroughOn = 
  RTextRenderer_WrapperSingletonInstance.rxStrikethroughOn;
RTextRenderer.rxStrikethroughOffStr = 
  RTextRenderer_WrapperSingletonInstance.rxStrikethroughOffStr;
RTextRenderer.rxStrikethroughOff = 
  RTextRenderer_WrapperSingletonInstance.rxStrikethroughOff;
RTextRenderer.rxWidthChangeStr = 
  RTextRenderer_WrapperSingletonInstance.rxWidthChangeStr;
RTextRenderer.rxWidthChange = 
  RTextRenderer_WrapperSingletonInstance.rxWidthChange;
RTextRenderer.rxObliqueAngleChangeStr = 
  RTextRenderer_WrapperSingletonInstance.rxObliqueAngleChangeStr;
RTextRenderer.rxObliqueAngleChange = 
  RTextRenderer_WrapperSingletonInstance.rxObliqueAngleChange;
RTextRenderer.rxTrackChangeStr = 
  RTextRenderer_WrapperSingletonInstance.rxTrackChangeStr;
RTextRenderer.rxTrackChange = 
  RTextRenderer_WrapperSingletonInstance.rxTrackChange;
RTextRenderer.rxAlignmentChangeStr = 
  RTextRenderer_WrapperSingletonInstance.rxAlignmentChangeStr;
RTextRenderer.rxAlignmentChange = 
  RTextRenderer_WrapperSingletonInstance.rxAlignmentChange;
RTextRenderer.rxFontChangeCadStr = 
  RTextRenderer_WrapperSingletonInstance.rxFontChangeCadStr;
RTextRenderer.rxFontChangeCad = 
  RTextRenderer_WrapperSingletonInstance.rxFontChangeCad;
RTextRenderer.rxFontChangeTtfStr = 
  RTextRenderer_WrapperSingletonInstance.rxFontChangeTtfStr;
RTextRenderer.rxFontChangeTtf = 
  RTextRenderer_WrapperSingletonInstance.rxFontChangeTtf;
RTextRenderer.rxBeginBlockStr = 
  RTextRenderer_WrapperSingletonInstance.rxBeginBlockStr;
RTextRenderer.rxBeginBlock = 
  RTextRenderer_WrapperSingletonInstance.rxBeginBlock;
RTextRenderer.rxEndBlockStr = 
  RTextRenderer_WrapperSingletonInstance.rxEndBlockStr;
RTextRenderer.rxEndBlock = 
  RTextRenderer_WrapperSingletonInstance.rxEndBlock;
RTextRenderer.rxBackslashStr = 
  RTextRenderer_WrapperSingletonInstance.rxBackslashStr;
RTextRenderer.rxBackslash = 
  RTextRenderer_WrapperSingletonInstance.rxBackslash;
RTextRenderer.rxCurlyOpenStr = 
  RTextRenderer_WrapperSingletonInstance.rxCurlyOpenStr;
RTextRenderer.rxCurlyOpen = 
  RTextRenderer_WrapperSingletonInstance.rxCurlyOpen;
RTextRenderer.rxCurlyCloseStr = 
  RTextRenderer_WrapperSingletonInstance.rxCurlyCloseStr;
RTextRenderer.rxCurlyClose = 
  RTextRenderer_WrapperSingletonInstance.rxCurlyClose;
RTextRenderer.rxDegreeStr = 
  RTextRenderer_WrapperSingletonInstance.rxDegreeStr;
RTextRenderer.rxDegree = 
  RTextRenderer_WrapperSingletonInstance.rxDegree;
RTextRenderer.escDegreeStr = 
  RTextRenderer_WrapperSingletonInstance.escDegreeStr;
RTextRenderer.escDegree = 
  RTextRenderer_WrapperSingletonInstance.escDegree;
RTextRenderer.rxPlusMinusStr = 
  RTextRenderer_WrapperSingletonInstance.rxPlusMinusStr;
RTextRenderer.rxPlusMinus = 
  RTextRenderer_WrapperSingletonInstance.rxPlusMinus;
RTextRenderer.escPlusMinusStr = 
  RTextRenderer_WrapperSingletonInstance.escPlusMinusStr;
RTextRenderer.escPlusMinus = 
  RTextRenderer_WrapperSingletonInstance.escPlusMinus;
RTextRenderer.rxDiameterStr = 
  RTextRenderer_WrapperSingletonInstance.rxDiameterStr;
RTextRenderer.rxDiameter = 
  RTextRenderer_WrapperSingletonInstance.rxDiameter;
RTextRenderer.escDiameterStr = 
  RTextRenderer_WrapperSingletonInstance.escDiameterStr;
RTextRenderer.escDiameter = 
  RTextRenderer_WrapperSingletonInstance.escDiameter;
RTextRenderer.rxUnderlineStr = 
  RTextRenderer_WrapperSingletonInstance.rxUnderlineStr;
RTextRenderer.rxUnderline = 
  RTextRenderer_WrapperSingletonInstance.rxUnderline;
RTextRenderer.escUnderlineStr = 
  RTextRenderer_WrapperSingletonInstance.escUnderlineStr;
RTextRenderer.escUnderline = 
  RTextRenderer_WrapperSingletonInstance.escUnderline;
RTextRenderer.rxNoOpStr = 
  RTextRenderer_WrapperSingletonInstance.rxNoOpStr;
RTextRenderer.rxNoOp = 
  RTextRenderer_WrapperSingletonInstance.rxNoOp;
RTextRenderer.rxNoOpEndStr = 
  RTextRenderer_WrapperSingletonInstance.rxNoOpEndStr;
RTextRenderer.rxNoOpEnd = 
  RTextRenderer_WrapperSingletonInstance.rxNoOpEnd;
RTextRenderer.escNoOpStr = 
  RTextRenderer_WrapperSingletonInstance.escNoOpStr;
RTextRenderer.escNoOp = 
  RTextRenderer_WrapperSingletonInstance.escNoOp;
RTextRenderer.rxUnicodeStr = 
  RTextRenderer_WrapperSingletonInstance.rxUnicodeStr;
RTextRenderer.rxUnicode = 
  RTextRenderer_WrapperSingletonInstance.rxUnicode;
RTextRenderer.rxOptionalBreakStr = 
  RTextRenderer_WrapperSingletonInstance.rxOptionalBreakStr;
RTextRenderer.rxOptionalBreak = 
  RTextRenderer_WrapperSingletonInstance.rxOptionalBreak;
RTextRenderer.rxAllStr = 
  RTextRenderer_WrapperSingletonInstance.rxAllStr;
RTextRenderer.rxAllBreakStr = 
  RTextRenderer_WrapperSingletonInstance.rxAllBreakStr;
RTextRenderer.rxAll = 
  RTextRenderer_WrapperSingletonInstance.rxAll;
RTextRenderer.rxAllBreak = 
  RTextRenderer_WrapperSingletonInstance.rxAllBreak;
RTextRenderer.chDegree = 
  RTextRenderer_WrapperSingletonInstance.chDegree;
RTextRenderer.chPlusMinus = 
  RTextRenderer_WrapperSingletonInstance.chPlusMinus;
RTextRenderer.chDiameter = 
  RTextRenderer_WrapperSingletonInstance.chDiameter;


      // copy function:
      //RTextRenderer.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTextRenderer.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RTextRenderer.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      