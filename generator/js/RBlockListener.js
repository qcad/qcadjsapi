
      // auto generated
      //var self;

      // class constructor:
      function RBlockListener() {
        

        // should be RBlockListener_BaseJs.call(this, engine):
        //RBlockListener.prototype = new RBlockListener_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RBlockListener.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RBlockListener);
            //}
          }
          else {
            qWarning("RBlockListener.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RBlockListener.js: No constructor found for class RBlockListener");
            
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

      //RBlockListener.prototype = new RBlockListener_BaseJs(engine);
      //RBlockListener.prototype = new RBlockListener_Wrapper(engine);
      RBlockListener.prototype = new Object();

      RBlockListener.prototype.toString = function() {
          //return "RBlockListener [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RBlockListener [JS]";
        };
      RBlockListener.getObjectType = function() {
        return RJSType_RBlockListener.getIdStatic();
      };

      RBlockListener.prototype.getObjectType = function() {
        return RJSType_RBlockListener.getIdStatic();
      };

      RBlockListener.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RBlockListener.getIdStatic()) {
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
      //RBlockListener.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RBlockListener.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    