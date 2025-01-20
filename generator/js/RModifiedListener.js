
      // auto generated
      //var self;

      // class constructor:
      function RModifiedListener() {
        

        // should be RModifiedListener_BaseJs.call(this, engine):
        //RModifiedListener.prototype = new RModifiedListener_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RModifiedListener.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RModifiedListener);
                
            //}
          }
          else {
            qWarning("RModifiedListener.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RModifiedListener.js: No constructor found for class RModifiedListener");
            
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

      //RModifiedListener.prototype = new RModifiedListener_BaseJs(engine);
      //RModifiedListener.prototype = new RModifiedListener_Wrapper(engine);
      RModifiedListener.prototype = new Object();

      RModifiedListener.prototype.toString = function() {
          //return "RModifiedListener [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RModifiedListener [JS]";
        };
      RModifiedListener.getObjectType = function() {
        return RJSType_RModifiedListener.getIdStatic();
      };

      RModifiedListener.prototype.getObjectType = function() {
        return RJSType_RModifiedListener.getIdStatic();
      };

      RModifiedListener.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RModifiedListener.getIdStatic()) {
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
      //RModifiedListener.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RModifiedListener.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      