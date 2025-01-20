
      // auto generated
      //var self;

      // class constructor:
      function RSnapListener() {
        

        // should be RSnapListener_BaseJs.call(this, engine):
        //RSnapListener.prototype = new RSnapListener_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSnapListener.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  this.__PROXY__ = wrapper;
                
            //}
          }
          else {
            qWarning("RSnapListener.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RSnapListener.js: No constructor found for class RSnapListener");
            
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

      //RSnapListener.prototype = new RSnapListener_BaseJs(engine);
      //RSnapListener.prototype = new RSnapListener_Wrapper(engine);
      RSnapListener.prototype = new Object();

      RSnapListener.prototype.toString = function() {
          //return "RSnapListener [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSnapListener [JS]";
        };
      RSnapListener.getObjectType = function() {
        return RJSType_RSnapListener.getIdStatic();
      };

      RSnapListener.prototype.getObjectType = function() {
        return RJSType_RSnapListener.getIdStatic();
      };

      RSnapListener.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSnapListener.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RSnapListener.prototype.updateSnap = function(...args) 
          
        {
          //print("JS: RSnapListener.prototype.updateSnap");
          return this.__PROXY__.updateSnap(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RSnapListener.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSnapListener.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RSnapListener.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      