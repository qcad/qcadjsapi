
      // auto generated
      //var self;

      // class constructor:
      function RWidget() {
        

        // should be RWidget_BaseJs.call(this, engine):
        //RWidget.prototype = new RWidget_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RWidget.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RWidget);
            //}
          }
          else {
            qWarning("RWidget.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RWidget_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RWidget);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RWidget);
  }

  
  else {
    
        print("RWidget(): wrong number / type of arguments");
      
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
  
          }
        }
      }

      //RWidget.prototype = new RWidget_BaseJs(engine);
      //RWidget.prototype = new RWidget_Wrapper(engine);
      RWidget.prototype = new Object();

      RWidget.prototype.toString = function() {
          //return "RWidget [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RWidget [JS]";
        };
      RWidget.getObjectType = function() {
        return RJSType_RWidget.getIdStatic();
      };

      RWidget.prototype.getObjectType = function() {
        return RJSType_RWidget.getIdStatic();
      };

      RWidget.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RWidget.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RWidget.tr = function() 
          
        {
          //print("JS: RWidget.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RWidget_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RWidget);
  }

  
  else {
    
        print("RWidget.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RWidget.setTabOrder = function() 
          
        {
          //print("JS: RWidget.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RWidget_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RWidget);
  }

  
  else {
    
        print("RWidget.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RWidget.mouseGrabber = function() 
          
        {
          //print("JS: RWidget.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RWidget_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, RWidget);
  }

  
  else {
    
        print("RWidget.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RWidget.keyboardGrabber = function() 
          
        {
          //print("JS: RWidget.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RWidget_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, RWidget);
  }

  
  else {
    
        print("RWidget.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RWidget.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RWidget.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    