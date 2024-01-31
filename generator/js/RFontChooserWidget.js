
      // auto generated
      //var self;

      // class constructor:
      function RFontChooserWidget() {
        

        // should be RFontChooserWidget_BaseJs.call(this, engine):
        //RFontChooserWidget.prototype = new RFontChooserWidget_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RFontChooserWidget.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RFontChooserWidget);
            //}
          }
          else {
            qWarning("RFontChooserWidget.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RFontChooserWidget_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RFontChooserWidget);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RFontChooserWidget);
  }

  
  else {
    
        print("RFontChooserWidget(): wrong number / type of arguments");
      
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
  
    this["valueChanged(QFont)"] = Object.getPrototypeOf(this).valueChanged;
  
          }
        }
      }

      //RFontChooserWidget.prototype = new RFontChooserWidget_BaseJs(engine);
      //RFontChooserWidget.prototype = new RFontChooserWidget_Wrapper(engine);
      RFontChooserWidget.prototype = new Object();

      RFontChooserWidget.prototype.toString = function() {
          //return "RFontChooserWidget [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RFontChooserWidget [JS]";
        };
      RFontChooserWidget.getObjectType = function() {
        return RJSType_RFontChooserWidget.getIdStatic();
      };

      RFontChooserWidget.prototype.getObjectType = function() {
        return RJSType_RFontChooserWidget.getIdStatic();
      };

      RFontChooserWidget.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RFontChooserWidget.getIdStatic()) {
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
        RFontChooserWidget.tr = function() 
          
        {
          //print("JS: RFontChooserWidget.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RFontChooserWidget_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RFontChooserWidget);
  }

  
  else {
    
        print("RFontChooserWidget.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RFontChooserWidget.setTabOrder = function() 
          
        {
          //print("JS: RFontChooserWidget.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RFontChooserWidget_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RFontChooserWidget);
  }

  
  else {
    
        print("RFontChooserWidget.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RFontChooserWidget.mouseGrabber = function() 
          
        {
          //print("JS: RFontChooserWidget.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RFontChooserWidget_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, RFontChooserWidget);
  }

  
  else {
    
        print("RFontChooserWidget.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RFontChooserWidget.keyboardGrabber = function() 
          
        {
          //print("JS: RFontChooserWidget.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RFontChooserWidget_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, RFontChooserWidget);
  }

  
  else {
    
        print("RFontChooserWidget.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RFontChooserWidget.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RFontChooserWidget.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    