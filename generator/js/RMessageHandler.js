
      // auto generated
      //var self;

      // class constructor:
      function RMessageHandler() {
        

        // should be RMessageHandler_BaseJs.call(this, engine):
        //RMessageHandler.prototype = new RMessageHandler_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RMessageHandler.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RMessageHandler);
            //}
          }
          else {
            qWarning("RMessageHandler.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RMessageHandler.js: No constructor found for class RMessageHandler");
            
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

      //RMessageHandler.prototype = new RMessageHandler_BaseJs(engine);
      //RMessageHandler.prototype = new RMessageHandler_Wrapper(engine);
      RMessageHandler.prototype = new Object();

      RMessageHandler.prototype.toString = function() {
          //return "RMessageHandler [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RMessageHandler [JS]";
        };
      RMessageHandler.getObjectType = function() {
        return RJSType_RMessageHandler.getIdStatic();
      };

      RMessageHandler.prototype.getObjectType = function() {
        return RJSType_RMessageHandler.getIdStatic();
      };

      RMessageHandler.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RMessageHandler.getIdStatic()) {
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
      //RMessageHandler.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RMessageHandler.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    