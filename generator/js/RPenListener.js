
      // auto generated
      //var self;

      // class constructor:
      function RPenListener() {
        

        // should be RPenListener_BaseJs.call(this, engine):
        //RPenListener.prototype = new RPenListener_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPenListener.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RPenListener);
            //}
          }
          else {
            qWarning("RPenListener.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RPenListener.js: No constructor found for class RPenListener");
            
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

      //RPenListener.prototype = new RPenListener_BaseJs(engine);
      //RPenListener.prototype = new RPenListener_Wrapper(engine);
      RPenListener.prototype = new Object();

      RPenListener.prototype.toString = function() {
          //return "RPenListener [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPenListener [JS]";
        };
      RPenListener.getObjectType = function() {
        return RJSType_RPenListener.getIdStatic();
      };

      RPenListener.prototype.getObjectType = function() {
        return RJSType_RPenListener.getIdStatic();
      };

      RPenListener.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPenListener.getIdStatic()) {
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
      //RPenListener.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPenListener.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    