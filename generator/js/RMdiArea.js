
      // auto generated
      //var self;

      // class constructor:
      function RMdiArea() {
        

        // should be RMdiArea_BaseJs.call(this, engine):
        //RMdiArea.prototype = new RMdiArea_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RMdiArea.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RMdiArea);
            //}
          }
          else {
            qWarning("RMdiArea.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RMdiArea_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RMdiArea);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RMdiArea);
  }

  
  else {
    
        print("RMdiArea(): wrong number / type of arguments");
      
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
  
    this["subWindowActivated(QMdiSubWindow*)"] = Object.getPrototypeOf(this).subWindowActivated;
  
          }
        }
      }

      //RMdiArea.prototype = new RMdiArea_BaseJs(engine);
      //RMdiArea.prototype = new RMdiArea_Wrapper(engine);
      RMdiArea.prototype = new Object();

      RMdiArea.prototype.toString = function() {
          //return "RMdiArea [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RMdiArea [JS]";
        };
      RMdiArea.getObjectType = function() {
        return RJSType_RMdiArea.getIdStatic();
      };

      RMdiArea.prototype.getObjectType = function() {
        return RJSType_RMdiArea.getIdStatic();
      };

      RMdiArea.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RMdiArea.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QMdiArea.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: AreaOption
RMdiArea.DontMaximizeSubWindowOnActivation = RMdiArea_Wrapper.DontMaximizeSubWindowOnActivation;

  // enum: WindowOrder
RMdiArea.CreationOrder = RMdiArea_Wrapper.CreationOrder;
RMdiArea.StackingOrder = RMdiArea_Wrapper.StackingOrder;
RMdiArea.ActivationHistoryOrder = RMdiArea_Wrapper.ActivationHistoryOrder;

  // enum: ViewMode
RMdiArea.SubWindowView = RMdiArea_Wrapper.SubWindowView;
RMdiArea.TabbedView = RMdiArea_Wrapper.TabbedView;


      // functions:
      

      // static functions:
      

        // static function 
        RMdiArea.tr = function() 
          
        {
          //print("JS: RMdiArea.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RMdiArea_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RMdiArea);
  }

  
  else {
    
        print("RMdiArea.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMdiArea.setTabOrder = function() 
          
        {
          //print("JS: RMdiArea.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RMdiArea_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RMdiArea);
  }

  
  else {
    
        print("RMdiArea.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMdiArea.mouseGrabber = function() 
          
        {
          //print("JS: RMdiArea.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RMdiArea_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, RMdiArea);
  }

  
  else {
    
        print("RMdiArea.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMdiArea.keyboardGrabber = function() 
          
        {
          //print("JS: RMdiArea.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RMdiArea_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, RMdiArea);
  }

  
  else {
    
        print("RMdiArea.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RMdiArea.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RMdiArea.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    