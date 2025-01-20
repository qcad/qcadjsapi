
      // auto generated
      //var self;

      // class constructor:
      function RUcsListener() {
        

        // should be RUcsListener_BaseJs.call(this, engine):
        //RUcsListener.prototype = new RUcsListener_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RUcsListener.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RUcsListener);
                
            //}
          }
          else {
            qWarning("RUcsListener.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RUcsListener.js: No constructor found for class RUcsListener");
            
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

      //RUcsListener.prototype = new RUcsListener_BaseJs(engine);
      //RUcsListener.prototype = new RUcsListener_Wrapper(engine);
      RUcsListener.prototype = new Object();

      RUcsListener.prototype.toString = function() {
          //return "RUcsListener [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RUcsListener [JS]";
        };
      RUcsListener.getObjectType = function() {
        return RJSType_RUcsListener.getIdStatic();
      };

      RUcsListener.prototype.getObjectType = function() {
        return RJSType_RUcsListener.getIdStatic();
      };

      RUcsListener.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RUcsListener.getIdStatic()) {
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
      //RUcsListener.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RUcsListener.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      