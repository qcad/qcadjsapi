
      // auto generated
      //var self;

      // class constructor:
      function RMathLineEdit() {
        

        // should be RMathLineEdit_BaseJs.call(this, engine):
        //RMathLineEdit.prototype = new RMathLineEdit_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RMathLineEdit.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RMathLineEdit);
            //}
          }
          else {
            qWarning("RMathLineEdit.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RMathLineEdit_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RMathLineEdit);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RMathLineEdit);
  }

  
  else {
    
        print("RMathLineEdit(): wrong number / type of arguments");
      
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
  
    this["textChanged(QString)"] = Object.getPrototypeOf(this).textChanged;
  
    this["textEdited(QString)"] = Object.getPrototypeOf(this).textEdited;
  
    this["cursorPositionChanged(int,int)"] = Object.getPrototypeOf(this).cursorPositionChanged;
  
    this["valueChanged(double,QString)"] = Object.getPrototypeOf(this).valueChanged;
  
          }
        }
      }

      //RMathLineEdit.prototype = new RMathLineEdit_BaseJs(engine);
      //RMathLineEdit.prototype = new RMathLineEdit_Wrapper(engine);
      RMathLineEdit.prototype = new Object();

      RMathLineEdit.prototype.toString = function() {
          //return "RMathLineEdit [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RMathLineEdit [JS]";
        };
      RMathLineEdit.getObjectType = function() {
        return RJSType_RMathLineEdit.getIdStatic();
      };

      RMathLineEdit.prototype.getObjectType = function() {
        return RJSType_RMathLineEdit.getIdStatic();
      };

      RMathLineEdit.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RMathLineEdit.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QLineEdit.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: ActionPosition
RMathLineEdit.LeadingPosition = RMathLineEdit_Wrapper.LeadingPosition;
RMathLineEdit.TrailingPosition = RMathLineEdit_Wrapper.TrailingPosition;

  // enum: EchoMode
RMathLineEdit.Normal = RMathLineEdit_Wrapper.Normal;
RMathLineEdit.NoEcho = RMathLineEdit_Wrapper.NoEcho;
RMathLineEdit.Password = RMathLineEdit_Wrapper.Password;
RMathLineEdit.PasswordEchoOnEdit = RMathLineEdit_Wrapper.PasswordEchoOnEdit;


      // functions:
      
        // function 
        RMathLineEdit.prototype.actionEvent = function() 
          
        {
          //print("JS: RMathLineEdit.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RMathLineEdit);
  }

  
  else {
    
        print("RMathLineEdit.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        RMathLineEdit.tr = function() 
          
        {
          //print("JS: RMathLineEdit.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RMathLineEdit_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RMathLineEdit);
  }

  
  else {
    
        print("RMathLineEdit.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMathLineEdit.setTabOrder = function() 
          
        {
          //print("JS: RMathLineEdit.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RMathLineEdit_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RMathLineEdit);
  }

  
  else {
    
        print("RMathLineEdit.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMathLineEdit.mouseGrabber = function() 
          
        {
          //print("JS: RMathLineEdit.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RMathLineEdit_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, RMathLineEdit);
  }

  
  else {
    
        print("RMathLineEdit.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMathLineEdit.keyboardGrabber = function() 
          
        {
          //print("JS: RMathLineEdit.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RMathLineEdit_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, RMathLineEdit);
  }

  
  else {
    
        print("RMathLineEdit.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RMathLineEdit.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RMathLineEdit.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    