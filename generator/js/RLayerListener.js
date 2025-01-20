
      // auto generated
      //var self;

      // class constructor:
      function RLayerListener() {
        

        // should be RLayerListener_BaseJs.call(this, engine):
        //RLayerListener.prototype = new RLayerListener_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RLayerListener.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RLayerListener);
                
            //}
          }
          else {
            qWarning("RLayerListener.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RLayerListener.js: No constructor found for class RLayerListener");
            
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

      //RLayerListener.prototype = new RLayerListener_BaseJs(engine);
      //RLayerListener.prototype = new RLayerListener_Wrapper(engine);
      RLayerListener.prototype = new Object();

      RLayerListener.prototype.toString = function() {
          //return "RLayerListener [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RLayerListener [JS]";
        };
      RLayerListener.getObjectType = function() {
        return RJSType_RLayerListener.getIdStatic();
      };

      RLayerListener.prototype.getObjectType = function() {
        return RJSType_RLayerListener.getIdStatic();
      };

      RLayerListener.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RLayerListener.getIdStatic()) {
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
      //RLayerListener.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RLayerListener.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      