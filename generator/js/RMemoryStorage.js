
      // auto generated
      //var self;

      // class constructor:
      function RMemoryStorage() {
        

        // should be RMemoryStorage_BaseJs.call(this, engine):
        //RMemoryStorage.prototype = new RMemoryStorage_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RMemoryStorage.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RMemoryStorage);
            //}
          }
          else {
            qWarning("RMemoryStorage.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RMemoryStorage_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RMemoryStorage);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RMemoryStorage);
  }

  
  else {
    
        print("RMemoryStorage(): wrong number / type of arguments");
      
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

      //RMemoryStorage.prototype = new RMemoryStorage_BaseJs(engine);
      //RMemoryStorage.prototype = new RMemoryStorage_Wrapper(engine);
      RMemoryStorage.prototype = new Object();

      RMemoryStorage.prototype.toString = function() {
          //return "RMemoryStorage [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RMemoryStorage [JS]";
        };
      RMemoryStorage.getObjectType = function() {
        return RJSType_RMemoryStorage.getIdStatic();
      };

      RMemoryStorage.prototype.getObjectType = function() {
        return RJSType_RMemoryStorage.getIdStatic();
      };

      RMemoryStorage.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RMemoryStorage.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RStorage.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RMemoryStorage.getKnownVariableName = function() 
          
        {
          //print("JS: RMemoryStorage.getKnownVariableName");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RMemoryStorage_WrapperSingletonInstance.getKnownVariableName(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RMemoryStorage);
  }

  
  else {
    
        print("RMemoryStorage.getKnownVariableName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RMemoryStorage.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RMemoryStorage.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    