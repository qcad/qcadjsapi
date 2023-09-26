
      // auto generated
      //var self;

      // class constructor:
      function REventHandler() {
        

        // should be REventHandler_BaseJs.call(this, engine):
        //REventHandler.prototype = new REventHandler_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_REventHandler.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, REventHandler);
            //}
          }
          else {
            qWarning("REventHandler.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new REventHandler_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, REventHandler);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, REventHandler);
  }

  
  else {
    
        print("REventHandler(): wrong number / type of arguments");
      
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
            
          }
        }
      }

      //REventHandler.prototype = new REventHandler_BaseJs(engine);
      //REventHandler.prototype = new REventHandler_Wrapper(engine);
      REventHandler.prototype = new Object();

      REventHandler.prototype.toString = function() {
          //return "REventHandler [JS] [0x" + this.getAddress().toString(16) + "]";
          return "REventHandler [JS]";
        };
      REventHandler.getObjectType = function() {
        return RJSType_REventHandler.getIdStatic();
      };

      REventHandler.prototype.getObjectType = function() {
        return RJSType_REventHandler.getIdStatic();
      };

      REventHandler.prototype.isOfObjectType = function(t) {
        if (t===RJSType_REventHandler.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        REventHandler.tr = function() 
          
        {
          //print("JS: REventHandler.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return REventHandler_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, REventHandler);
  }

  
  else {
    
        print("REventHandler.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REventHandler.isUrl = function() 
          
        {
          //print("JS: REventHandler.isUrl");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return REventHandler_WrapperSingletonInstance.isUrl(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, REventHandler);
  }

  
  else {
    
        print("REventHandler.isUrl(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REventHandler.getUrlsFromMimeData = function() 
          
        {
          //print("JS: REventHandler.getUrlsFromMimeData");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return REventHandler_WrapperSingletonInstance.getUrlsFromMimeData(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, REventHandler);
  }

  
  else {
    
        print("REventHandler.getUrlsFromMimeData(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //REventHandler.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //REventHandler.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    