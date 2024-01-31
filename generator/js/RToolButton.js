
      // auto generated
      //var self;

      // class constructor:
      function RToolButton() {
        

        // should be RToolButton_BaseJs.call(this, engine):
        //RToolButton.prototype = new RToolButton_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RToolButton.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RToolButton);
            //}
          }
          else {
            qWarning("RToolButton.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RToolButton_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RToolButton);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RToolButton);
  }

  
  else {
    
        print("RToolButton(): wrong number / type of arguments");
      
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
  
    this["triggered(QAction*)"] = Object.getPrototypeOf(this).triggered;
  
          }
        }
      }

      //RToolButton.prototype = new RToolButton_BaseJs(engine);
      //RToolButton.prototype = new RToolButton_Wrapper(engine);
      RToolButton.prototype = new Object();

      RToolButton.prototype.toString = function() {
          //return "RToolButton [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RToolButton [JS]";
        };
      RToolButton.getObjectType = function() {
        return RJSType_RToolButton.getIdStatic();
      };

      RToolButton.prototype.getObjectType = function() {
        return RJSType_RToolButton.getIdStatic();
      };

      RToolButton.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RToolButton.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QToolButton.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RToolButton.tr = function() 
          
        {
          //print("JS: RToolButton.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RToolButton_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RToolButton);
  }

  
  else {
    
        print("RToolButton.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RToolButton.setTabOrder = function() 
          
        {
          //print("JS: RToolButton.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RToolButton_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RToolButton);
  }

  
  else {
    
        print("RToolButton.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RToolButton.mouseGrabber = function() 
          
        {
          //print("JS: RToolButton.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RToolButton_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, RToolButton);
  }

  
  else {
    
        print("RToolButton.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RToolButton.keyboardGrabber = function() 
          
        {
          //print("JS: RToolButton.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RToolButton_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, RToolButton);
  }

  
  else {
    
        print("RToolButton.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RToolButton.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RToolButton.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    