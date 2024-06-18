
      // auto generated
      //var self;

      // class constructor:
      function RMdiChildQt() {
        

        // should be RMdiChildQt_BaseJs.call(this, engine):
        //RMdiChildQt.prototype = new RMdiChildQt_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RMdiChildQt.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RMdiChildQt);
            //}
          }
          else {
            qWarning("RMdiChildQt.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RMdiChildQt_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RMdiChildQt);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RMdiChildQt);
  }

  
  else {
    
        print("RMdiChildQt(): wrong number / type of arguments");
      
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
  
    this["windowStateChanged(Qt::WindowStates,Qt::WindowStates)"] = Object.getPrototypeOf(this).windowStateChanged;
  
    this["closeRequested(RMdiChildQt*)"] = Object.getPrototypeOf(this).closeRequested;
  
    this["closeAccepted(RMdiChildQt*)"] = Object.getPrototypeOf(this).closeAccepted;
  
    this["modifiedStatusChanged(RMdiChildQt*)"] = Object.getPrototypeOf(this).modifiedStatusChanged;
  
          }
        }
      }

      //RMdiChildQt.prototype = new RMdiChildQt_BaseJs(engine);
      //RMdiChildQt.prototype = new RMdiChildQt_Wrapper(engine);
      RMdiChildQt.prototype = new Object();

      RMdiChildQt.prototype.toString = function() {
          //return "RMdiChildQt [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RMdiChildQt [JS]";
        };
      RMdiChildQt.getObjectType = function() {
        return RJSType_RMdiChildQt.getIdStatic();
      };

      RMdiChildQt.prototype.getObjectType = function() {
        return RJSType_RMdiChildQt.getIdStatic();
      };

      RMdiChildQt.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RMdiChildQt.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RModifiedListener.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QMdiSubWindow.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RMdiChildQt.tr = function() 
          
        {
          //print("JS: RMdiChildQt.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RMdiChildQt_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RMdiChildQt);
  }

  
  else {
    
        print("RMdiChildQt.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMdiChildQt.setTabOrder = function() 
          
        {
          //print("JS: RMdiChildQt.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RMdiChildQt_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RMdiChildQt);
  }

  
  else {
    
        print("RMdiChildQt.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMdiChildQt.mouseGrabber = function() 
          
        {
          //print("JS: RMdiChildQt.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RMdiChildQt_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, RMdiChildQt);
  }

  
  else {
    
        print("RMdiChildQt.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMdiChildQt.keyboardGrabber = function() 
          
        {
          //print("JS: RMdiChildQt.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RMdiChildQt_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, RMdiChildQt);
  }

  
  else {
    
        print("RMdiChildQt.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RMdiChildQt.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RMdiChildQt.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    