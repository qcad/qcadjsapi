
      // auto generated
      //var self;

      // class constructor:
      function RLineweightCombo() {
        

        // should be RLineweightCombo_BaseJs.call(this, engine):
        //RLineweightCombo.prototype = new RLineweightCombo_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RLineweightCombo.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RLineweightCombo);
            //}
          }
          else {
            qWarning("RLineweightCombo.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RLineweightCombo_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RLineweightCombo);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLineweightCombo);
  }

  
  else {
    
        print("RLineweightCombo(): wrong number / type of arguments");
      
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
  
    this["editTextChanged(QString)"] = Object.getPrototypeOf(this).editTextChanged;
  
    this["activated(int)"] = Object.getPrototypeOf(this).activated;
  
    this["textActivated(QString)"] = Object.getPrototypeOf(this).textActivated;
  
    this["highlighted(int)"] = Object.getPrototypeOf(this).highlighted;
  
    this["textHighlighted(QString)"] = Object.getPrototypeOf(this).textHighlighted;
  
    this["currentIndexChanged(int)"] = Object.getPrototypeOf(this).currentIndexChanged;
  
    this["currentTextChanged(QString)"] = Object.getPrototypeOf(this).currentTextChanged;
  
    this["valueChanged(RLineweight::Lineweight)"] = Object.getPrototypeOf(this).valueChanged;
  
          }
        }
      }

      //RLineweightCombo.prototype = new RLineweightCombo_BaseJs(engine);
      //RLineweightCombo.prototype = new RLineweightCombo_Wrapper(engine);
      RLineweightCombo.prototype = new Object();

      RLineweightCombo.prototype.toString = function() {
          //return "RLineweightCombo [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RLineweightCombo [JS]";
        };
      RLineweightCombo.getObjectType = function() {
        return RJSType_RLineweightCombo.getIdStatic();
      };

      RLineweightCombo.prototype.getObjectType = function() {
        return RJSType_RLineweightCombo.getIdStatic();
      };

      RLineweightCombo.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RLineweightCombo.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QComboBox.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: InsertPolicy
RLineweightCombo.NoInsert = RLineweightCombo_Wrapper.NoInsert;
RLineweightCombo.InsertAtTop = RLineweightCombo_Wrapper.InsertAtTop;
RLineweightCombo.InsertAtCurrent = RLineweightCombo_Wrapper.InsertAtCurrent;
RLineweightCombo.InsertAtBottom = RLineweightCombo_Wrapper.InsertAtBottom;
RLineweightCombo.InsertAfterCurrent = RLineweightCombo_Wrapper.InsertAfterCurrent;
RLineweightCombo.InsertBeforeCurrent = RLineweightCombo_Wrapper.InsertBeforeCurrent;
RLineweightCombo.InsertAlphabetically = RLineweightCombo_Wrapper.InsertAlphabetically;

  // enum: SizeAdjustPolicy
RLineweightCombo.AdjustToContents = RLineweightCombo_Wrapper.AdjustToContents;
RLineweightCombo.AdjustToContentsOnFirstShow = RLineweightCombo_Wrapper.AdjustToContentsOnFirstShow;
RLineweightCombo.AdjustToMinimumContentsLengthWithIcon = RLineweightCombo_Wrapper.AdjustToMinimumContentsLengthWithIcon;


      // functions:
      

      // static functions:
      

        // static function 
        RLineweightCombo.tr = function() 
          
        {
          //print("JS: RLineweightCombo.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RLineweightCombo_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RLineweightCombo);
  }

  
  else {
    
        print("RLineweightCombo.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLineweightCombo.setTabOrder = function() 
          
        {
          //print("JS: RLineweightCombo.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RLineweightCombo_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RLineweightCombo);
  }

  
  else {
    
        print("RLineweightCombo.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLineweightCombo.mouseGrabber = function() 
          
        {
          //print("JS: RLineweightCombo.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLineweightCombo_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, RLineweightCombo);
  }

  
  else {
    
        print("RLineweightCombo.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLineweightCombo.keyboardGrabber = function() 
          
        {
          //print("JS: RLineweightCombo.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLineweightCombo_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, RLineweightCombo);
  }

  
  else {
    
        print("RLineweightCombo.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RLineweightCombo.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RLineweightCombo.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    