
      // auto generated
      //var self;

      // class constructor:
      function RProgressHandler() {
        

        // should be RProgressHandler_BaseJs.call(this, engine):
        //RProgressHandler.prototype = new RProgressHandler_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RProgressHandler.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RProgressHandler);
            //}
          }
          else {
            qWarning("RProgressHandler.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RProgressHandler.js: No constructor found for class RProgressHandler");
            
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

      //RProgressHandler.prototype = new RProgressHandler_BaseJs(engine);
      //RProgressHandler.prototype = new RProgressHandler_Wrapper(engine);
      RProgressHandler.prototype = new Object();

      RProgressHandler.prototype.toString = function() {
          //return "RProgressHandler [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RProgressHandler [JS]";
        };
      RProgressHandler.getObjectType = function() {
        return RJSType_RProgressHandler.getIdStatic();
      };

      RProgressHandler.prototype.getObjectType = function() {
        return RJSType_RProgressHandler.getIdStatic();
      };

      RProgressHandler.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RProgressHandler.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RProgressHandler.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RProgressHandler.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    