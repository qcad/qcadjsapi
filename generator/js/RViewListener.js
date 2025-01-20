
      // auto generated
      //var self;

      // class constructor:
      function RViewListener() {
        

        // should be RViewListener_BaseJs.call(this, engine):
        //RViewListener.prototype = new RViewListener_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RViewListener.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RViewListener);
                
            //}
          }
          else {
            qWarning("RViewListener.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RViewListener.js: No constructor found for class RViewListener");
            
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

      //RViewListener.prototype = new RViewListener_BaseJs(engine);
      //RViewListener.prototype = new RViewListener_Wrapper(engine);
      RViewListener.prototype = new Object();

      RViewListener.prototype.toString = function() {
          //return "RViewListener [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RViewListener [JS]";
        };
      RViewListener.getObjectType = function() {
        return RJSType_RViewListener.getIdStatic();
      };

      RViewListener.prototype.getObjectType = function() {
        return RJSType_RViewListener.getIdStatic();
      };

      RViewListener.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RViewListener.getIdStatic()) {
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
      //RViewListener.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RViewListener.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      