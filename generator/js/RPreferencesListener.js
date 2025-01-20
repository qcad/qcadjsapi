
      // auto generated
      //var self;

      // class constructor:
      function RPreferencesListener() {
        

        // should be RPreferencesListener_BaseJs.call(this, engine):
        //RPreferencesListener.prototype = new RPreferencesListener_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPreferencesListener.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RPreferencesListener);
                
            //}
          }
          else {
            qWarning("RPreferencesListener.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RPreferencesListener.js: No constructor found for class RPreferencesListener");
            
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

      //RPreferencesListener.prototype = new RPreferencesListener_BaseJs(engine);
      //RPreferencesListener.prototype = new RPreferencesListener_Wrapper(engine);
      RPreferencesListener.prototype = new Object();

      RPreferencesListener.prototype.toString = function() {
          //return "RPreferencesListener [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPreferencesListener [JS]";
        };
      RPreferencesListener.getObjectType = function() {
        return RJSType_RPreferencesListener.getIdStatic();
      };

      RPreferencesListener.prototype.getObjectType = function() {
        return RJSType_RPreferencesListener.getIdStatic();
      };

      RPreferencesListener.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPreferencesListener.getIdStatic()) {
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
      //RPreferencesListener.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPreferencesListener.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      