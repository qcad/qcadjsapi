
      // auto generated
      //var self;

      // class constructor:
      function RMainWindow() {
        

        // should be RMainWindow_BaseJs.call(this, engine):
        //RMainWindow.prototype = new RMainWindow_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RMainWindow.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RMainWindow);
                
            //}
          }
          else {
            qWarning("RMainWindow.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RMainWindow.js: No constructor found for class RMainWindow");
            
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
          
        }

        

      }

      //RMainWindow.prototype = new RMainWindow_BaseJs(engine);
      //RMainWindow.prototype = new RMainWindow_Wrapper(engine);
      RMainWindow.prototype = new Object();

      RMainWindow.prototype.toString = function() {
          //return "RMainWindow [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RMainWindow [JS]";
        };
      RMainWindow.getObjectType = function() {
        return RJSType_RMainWindow.getIdStatic();
      };

      RMainWindow.prototype.getObjectType = function() {
        return RJSType_RMainWindow.getIdStatic();
      };

      RMainWindow.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RMainWindow.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RMainWindow.getMainWindow = function() 
          
        {
          //print("JS: RMainWindow.getMainWindow");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RMainWindow_WrapperSingletonInstance.getMainWindow(
                  
                );
              

        //copyProperties(this, wrapper, RMainWindow);
  }

  
  else {
    
        print("RMainWindow.getMainWindow(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMainWindow.hasMainWindow = function() 
          
        {
          //print("JS: RMainWindow.hasMainWindow");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RMainWindow_WrapperSingletonInstance.hasMainWindow(
                  
                );
              

        //copyProperties(this, wrapper, RMainWindow);
  }

  
  else {
    
        print("RMainWindow.hasMainWindow(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMainWindow.installMessageHandler = function() 
          
        {
          //print("JS: RMainWindow.installMessageHandler");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RMainWindow_WrapperSingletonInstance.installMessageHandler(
                  
                );
              

        //copyProperties(this, wrapper, RMainWindow);
  }

  
  else {
    
        print("RMainWindow.installMessageHandler(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RMainWindow.getDocumentInterfaceStatic = function() 
          
        {
          //print("JS: RMainWindow.getDocumentInterfaceStatic");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RMainWindow_WrapperSingletonInstance.getDocumentInterfaceStatic(
                  
                );
              

        //copyProperties(this, wrapper, RMainWindow);
  }

  
  else {
    
        print("RMainWindow.getDocumentInterfaceStatic(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RMainWindow.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RMainWindow.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      