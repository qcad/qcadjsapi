
      // auto generated
      //var self;

      // class constructor:
      function RInterTransactionListener() {
        

        // should be RInterTransactionListener_BaseJs.call(this, engine):
        //RInterTransactionListener.prototype = new RInterTransactionListener_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RInterTransactionListener.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RInterTransactionListener);
                
            //}
          }
          else {
            qWarning("RInterTransactionListener.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RInterTransactionListener.js: No constructor found for class RInterTransactionListener");
            
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

      //RInterTransactionListener.prototype = new RInterTransactionListener_BaseJs(engine);
      //RInterTransactionListener.prototype = new RInterTransactionListener_Wrapper(engine);
      RInterTransactionListener.prototype = new Object();

      RInterTransactionListener.prototype.toString = function() {
          //return "RInterTransactionListener [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RInterTransactionListener [JS]";
        };
      RInterTransactionListener.getObjectType = function() {
        return RJSType_RInterTransactionListener.getIdStatic();
      };

      RInterTransactionListener.prototype.getObjectType = function() {
        return RJSType_RInterTransactionListener.getIdStatic();
      };

      RInterTransactionListener.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RInterTransactionListener.getIdStatic()) {
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
      //RInterTransactionListener.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RInterTransactionListener.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      