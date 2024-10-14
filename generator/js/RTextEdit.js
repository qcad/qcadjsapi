
      // auto generated
      //var self;

      // class constructor:
      function RTextEdit() {
        

        // should be RTextEdit_BaseJs.call(this, engine):
        //RTextEdit.prototype = new RTextEdit_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTextEdit.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RTextEdit);
            //}
          }
          else {
            qWarning("RTextEdit.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RTextEdit_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RTextEdit);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTextEdit);
  }

  
  else {
    
        print("RTextEdit(): wrong number / type of arguments");
      
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
            
    this["customContextMenuRequested(QPoint)"] = Object.getPrototypeOf(this).customContextMenuRequested;
  
    this["undoAvailable(bool)"] = Object.getPrototypeOf(this).undoAvailable;
  
    this["redoAvailable(bool)"] = Object.getPrototypeOf(this).redoAvailable;
  
    this["currentCharFormatChanged(QTextCharFormat)"] = Object.getPrototypeOf(this).currentCharFormatChanged;
  
    this["copyAvailable(bool)"] = Object.getPrototypeOf(this).copyAvailable;
  
    this["backwardAvailable(bool)"] = Object.getPrototypeOf(this).backwardAvailable;
  
    this["forwardAvailable(bool)"] = Object.getPrototypeOf(this).forwardAvailable;
  
    this["sourceChanged(QUrl)"] = Object.getPrototypeOf(this).sourceChanged;
  
    this["highlighted(QUrl)"] = Object.getPrototypeOf(this).highlighted;
  
    this["anchorClicked(QUrl)"] = Object.getPrototypeOf(this).anchorClicked;
  
          }
        }
      }

      //RTextEdit.prototype = new RTextEdit_BaseJs(engine);
      //RTextEdit.prototype = new RTextEdit_Wrapper(engine);
      RTextEdit.prototype = new Object();

      RTextEdit.prototype.toString = function() {
          //return "RTextEdit [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTextEdit [JS]";
        };
      RTextEdit.getObjectType = function() {
        return RJSType_RTextEdit.getIdStatic();
      };

      RTextEdit.prototype.getObjectType = function() {
        return RJSType_RTextEdit.getIdStatic();
      };

      RTextEdit.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTextEdit.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QFrame.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAbstractScrollArea.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QTextEdit.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QTextBrowser.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: SizeAdjustPolicy
RTextEdit.AdjustIgnored = RTextEdit_Wrapper.AdjustIgnored;
RTextEdit.AdjustToContentsOnFirstShow = RTextEdit_Wrapper.AdjustToContentsOnFirstShow;
RTextEdit.AdjustToContents = RTextEdit_Wrapper.AdjustToContents;

  // enum: LineWrapMode
RTextEdit.NoWrap = RTextEdit_Wrapper.NoWrap;
RTextEdit.WidgetWidth = RTextEdit_Wrapper.WidgetWidth;
RTextEdit.FixedPixelWidth = RTextEdit_Wrapper.FixedPixelWidth;
RTextEdit.FixedColumnWidth = RTextEdit_Wrapper.FixedColumnWidth;

  // enum: AutoFormattingFlag
RTextEdit.AutoNone = RTextEdit_Wrapper.AutoNone;
RTextEdit.AutoBulletList = RTextEdit_Wrapper.AutoBulletList;
RTextEdit.AutoAll = RTextEdit_Wrapper.AutoAll;


      // functions:
      
        // function 
        RTextEdit.prototype.actionEvent = function() 
          
        {
          //print("JS: RTextEdit.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTextEdit);
  }

  
  else {
    
        print("RTextEdit.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        RTextEdit.tr = function() 
          
        {
          //print("JS: RTextEdit.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTextEdit_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTextEdit);
  }

  
  else {
    
        print("RTextEdit.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextEdit.setTabOrder = function() 
          
        {
          //print("JS: RTextEdit.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RTextEdit_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RTextEdit);
  }

  
  else {
    
        print("RTextEdit.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextEdit.mouseGrabber = function() 
          
        {
          //print("JS: RTextEdit.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RTextEdit_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, RTextEdit);
  }

  
  else {
    
        print("RTextEdit.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextEdit.keyboardGrabber = function() 
          
        {
          //print("JS: RTextEdit.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RTextEdit_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, RTextEdit);
  }

  
  else {
    
        print("RTextEdit.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RTextEdit.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTextEdit.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    