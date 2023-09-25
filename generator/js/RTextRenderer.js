
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
              copyProperties(this, wrapper, RTextRenderer);
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
          

        copyProperties(this, wrapper, RTextRenderer);

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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
          }
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
    