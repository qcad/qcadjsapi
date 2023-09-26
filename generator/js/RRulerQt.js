
      // auto generated
      //var self;

      // class constructor:
      function RRulerQt() {
        

        // should be RRulerQt_BaseJs.call(this, engine):
        //RRulerQt.prototype = new RRulerQt_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RRulerQt.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RRulerQt);
            //}
          }
          else {
            qWarning("RRulerQt.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RRulerQt_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RRulerQt);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RRulerQt);
  }

  
  else {
    
        print("RRulerQt(): wrong number / type of arguments");
      
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

      //RRulerQt.prototype = new RRulerQt_BaseJs(engine);
      //RRulerQt.prototype = new RRulerQt_Wrapper(engine);
      RRulerQt.prototype = new Object();

      RRulerQt.prototype.toString = function() {
          //return "RRulerQt [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RRulerQt [JS]";
        };
      RRulerQt.getObjectType = function() {
        return RJSType_RRulerQt.getIdStatic();
      };

      RRulerQt.prototype.getObjectType = function() {
        return RJSType_RRulerQt.getIdStatic();
      };

      RRulerQt.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RRulerQt.getIdStatic()) {
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
        
          if (t===RJSType_RRuler.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RCoordinateListener.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RPaletteListener.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RRulerQt.prototype.actionEvent = function() 
          
        {
          //print("JS: RRulerQt.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RRulerQt);
  }

  
  else {
    
        print("RRulerQt.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        RRulerQt.tr = function() 
          
        {
          //print("JS: RRulerQt.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RRulerQt_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RRulerQt);
  }

  
  else {
    
        print("RRulerQt.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRulerQt.setTabOrder = function() 
          
        {
          //print("JS: RRulerQt.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RRulerQt_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RRulerQt);
  }

  
  else {
    
        print("RRulerQt.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRulerQt.mouseGrabber = function() 
          
        {
          //print("JS: RRulerQt.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RRulerQt_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, RRulerQt);
  }

  
  else {
    
        print("RRulerQt.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RRulerQt.keyboardGrabber = function() 
          
        {
          //print("JS: RRulerQt.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RRulerQt_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, RRulerQt);
  }

  
  else {
    
        print("RRulerQt.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RRulerQt.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RRulerQt.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    