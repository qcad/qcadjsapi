
      // auto generated
      //var self;

      // class constructor:
      function RColorCombo() {
        

        // should be RColorCombo_BaseJs.call(this, engine):
        //RColorCombo.prototype = new RColorCombo_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RColorCombo.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RColorCombo);
            //}
          }
          else {
            qWarning("RColorCombo.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RColorCombo_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RColorCombo);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RColorCombo);
  }

  
  else {
    
        print("RColorCombo(): wrong number / type of arguments");
      
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
  
    this["valueChanged(RColor)"] = Object.getPrototypeOf(this).valueChanged;
  
    this["dialogRunning(bool)"] = Object.getPrototypeOf(this).dialogRunning;
  
          }
        }
      }

      //RColorCombo.prototype = new RColorCombo_BaseJs(engine);
      //RColorCombo.prototype = new RColorCombo_Wrapper(engine);
      RColorCombo.prototype = new Object();

      RColorCombo.prototype.toString = function() {
          //return "RColorCombo [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RColorCombo [JS]";
        };
      RColorCombo.getObjectType = function() {
        return RJSType_RColorCombo.getIdStatic();
      };

      RColorCombo.prototype.getObjectType = function() {
        return RJSType_RColorCombo.getIdStatic();
      };

      RColorCombo.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RColorCombo.getIdStatic()) {
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
RColorCombo.NoInsert = RColorCombo_Wrapper.NoInsert;
RColorCombo.InsertAtTop = RColorCombo_Wrapper.InsertAtTop;
RColorCombo.InsertAtCurrent = RColorCombo_Wrapper.InsertAtCurrent;
RColorCombo.InsertAtBottom = RColorCombo_Wrapper.InsertAtBottom;
RColorCombo.InsertAfterCurrent = RColorCombo_Wrapper.InsertAfterCurrent;
RColorCombo.InsertBeforeCurrent = RColorCombo_Wrapper.InsertBeforeCurrent;
RColorCombo.InsertAlphabetically = RColorCombo_Wrapper.InsertAlphabetically;

  // enum: SizeAdjustPolicy
RColorCombo.AdjustToContents = RColorCombo_Wrapper.AdjustToContents;
RColorCombo.AdjustToContentsOnFirstShow = RColorCombo_Wrapper.AdjustToContentsOnFirstShow;
RColorCombo.AdjustToMinimumContentsLengthWithIcon = RColorCombo_Wrapper.AdjustToMinimumContentsLengthWithIcon;


      // functions:
      
        // function 
        RColorCombo.prototype.actionEvent = function() 
          
        {
          //print("JS: RColorCombo.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RColorCombo);
  }

  
  else {
    
        print("RColorCombo.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        RColorCombo.tr = function() 
          
        {
          //print("JS: RColorCombo.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RColorCombo_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RColorCombo);
  }

  
  else {
    
        print("RColorCombo.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RColorCombo.setTabOrder = function() 
          
        {
          //print("JS: RColorCombo.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RColorCombo_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RColorCombo);
  }

  
  else {
    
        print("RColorCombo.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RColorCombo.mouseGrabber = function() 
          
        {
          //print("JS: RColorCombo.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RColorCombo_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, RColorCombo);
  }

  
  else {
    
        print("RColorCombo.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RColorCombo.keyboardGrabber = function() 
          
        {
          //print("JS: RColorCombo.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RColorCombo_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, RColorCombo);
  }

  
  else {
    
        print("RColorCombo.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RColorCombo.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RColorCombo.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    