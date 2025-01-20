
      // auto generated
      //var self;

      // class constructor:
      function RStorage() {
        

        // should be RStorage_BaseJs.call(this, engine):
        //RStorage.prototype = new RStorage_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RStorage.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RStorage);
                
            //}
          }
          else {
            qWarning("RStorage.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RStorage.js: No constructor found for class RStorage");
            
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

      //RStorage.prototype = new RStorage_BaseJs(engine);
      //RStorage.prototype = new RStorage_Wrapper(engine);
      RStorage.prototype = new Object();

      RStorage.prototype.toString = function() {
          //return "RStorage [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RStorage [JS]";
        };
      RStorage.getObjectType = function() {
        return RJSType_RStorage.getIdStatic();
      };

      RStorage.prototype.getObjectType = function() {
        return RJSType_RStorage.getIdStatic();
      };

      RStorage.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RStorage.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RStorage.getKnownVariableName = function() 
          
        {
          //print("JS: RStorage.getKnownVariableName");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RStorage_WrapperSingletonInstance.getKnownVariableName(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RStorage);
  }

  
  else {
    
        print("RStorage.getKnownVariableName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RStorage.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RStorage.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      