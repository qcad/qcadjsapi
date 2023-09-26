
      // auto generated
      //var self;

      // class constructor:
      function RLinetypeCombo() {
        

        // should be RLinetypeCombo_BaseJs.call(this, engine):
        //RLinetypeCombo.prototype = new RLinetypeCombo_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RLinetypeCombo.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RLinetypeCombo);
            //}
          }
          else {
            qWarning("RLinetypeCombo.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RLinetypeCombo_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RLinetypeCombo);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLinetypeCombo);
  }

  
  else {
    
        print("RLinetypeCombo(): wrong number / type of arguments");
      
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
  
    this["valueChanged(RLinetypePattern)"] = Object.getPrototypeOf(this).valueChanged;
  
          }
        }
      }

      //RLinetypeCombo.prototype = new RLinetypeCombo_BaseJs(engine);
      //RLinetypeCombo.prototype = new RLinetypeCombo_Wrapper(engine);
      RLinetypeCombo.prototype = new Object();

      RLinetypeCombo.prototype.toString = function() {
          //return "RLinetypeCombo [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RLinetypeCombo [JS]";
        };
      RLinetypeCombo.getObjectType = function() {
        return RJSType_RLinetypeCombo.getIdStatic();
      };

      RLinetypeCombo.prototype.getObjectType = function() {
        return RJSType_RLinetypeCombo.getIdStatic();
      };

      RLinetypeCombo.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RLinetypeCombo.getIdStatic()) {
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
RLinetypeCombo.NoInsert = RLinetypeCombo_Wrapper.NoInsert;
RLinetypeCombo.InsertAtTop = RLinetypeCombo_Wrapper.InsertAtTop;
RLinetypeCombo.InsertAtCurrent = RLinetypeCombo_Wrapper.InsertAtCurrent;
RLinetypeCombo.InsertAtBottom = RLinetypeCombo_Wrapper.InsertAtBottom;
RLinetypeCombo.InsertAfterCurrent = RLinetypeCombo_Wrapper.InsertAfterCurrent;
RLinetypeCombo.InsertBeforeCurrent = RLinetypeCombo_Wrapper.InsertBeforeCurrent;
RLinetypeCombo.InsertAlphabetically = RLinetypeCombo_Wrapper.InsertAlphabetically;

  // enum: SizeAdjustPolicy
RLinetypeCombo.AdjustToContents = RLinetypeCombo_Wrapper.AdjustToContents;
RLinetypeCombo.AdjustToContentsOnFirstShow = RLinetypeCombo_Wrapper.AdjustToContentsOnFirstShow;
RLinetypeCombo.AdjustToMinimumContentsLengthWithIcon = RLinetypeCombo_Wrapper.AdjustToMinimumContentsLengthWithIcon;


      // functions:
      
        // function 
        RLinetypeCombo.prototype.actionEvent = function() 
          
        {
          //print("JS: RLinetypeCombo.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RLinetypeCombo);
  }

  
  else {
    
        print("RLinetypeCombo.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        RLinetypeCombo.tr = function() 
          
        {
          //print("JS: RLinetypeCombo.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RLinetypeCombo_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RLinetypeCombo);
  }

  
  else {
    
        print("RLinetypeCombo.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLinetypeCombo.setTabOrder = function() 
          
        {
          //print("JS: RLinetypeCombo.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RLinetypeCombo_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RLinetypeCombo);
  }

  
  else {
    
        print("RLinetypeCombo.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLinetypeCombo.mouseGrabber = function() 
          
        {
          //print("JS: RLinetypeCombo.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLinetypeCombo_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, RLinetypeCombo);
  }

  
  else {
    
        print("RLinetypeCombo.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLinetypeCombo.keyboardGrabber = function() 
          
        {
          //print("JS: RLinetypeCombo.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLinetypeCombo_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, RLinetypeCombo);
  }

  
  else {
    
        print("RLinetypeCombo.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RLinetypeCombo.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RLinetypeCombo.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    