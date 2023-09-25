
      // auto generated
      //var self;

      // class constructor:
      function RFileCache() {
        

        // should be RFileCache_BaseJs.call(this, engine):
        //RFileCache.prototype = new RFileCache_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RFileCache.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RFileCache);
            //}
          }
          else {
            qWarning("RFileCache.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RFileCache_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RFileCache);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RFileCache);
  }

  
  else {
    
        print("RFileCache(): wrong number / type of arguments");
      
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

      //RFileCache.prototype = new RFileCache_BaseJs(engine);
      //RFileCache.prototype = new RFileCache_Wrapper(engine);
      RFileCache.prototype = new Object();

      RFileCache.prototype.toString = function() {
          //return "RFileCache [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RFileCache [JS]";
        };
      RFileCache.getObjectType = function() {
        return RJSType_RFileCache.getIdStatic();
      };

      RFileCache.prototype.getObjectType = function() {
        return RJSType_RFileCache.getIdStatic();
      };

      RFileCache.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RFileCache.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RFileCache.getContents = function() 
          
        {
          //print("JS: RFileCache.getContents");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RFileCache_WrapperSingletonInstance.getContents(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RFileCache);
  }

  
  else {
    
        print("RFileCache.getContents(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RFileCache.getBuffer = function() 
          
        {
          //print("JS: RFileCache.getBuffer");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RFileCache_WrapperSingletonInstance.getBuffer(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RFileCache);
  }

  
  else {
    
        print("RFileCache.getBuffer(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RFileCache.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RFileCache.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    