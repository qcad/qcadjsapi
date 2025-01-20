
      // auto generated
      //var self;

      // class constructor:
      function RTransactionListener() {
        

        // should be RTransactionListener_BaseJs.call(this, engine):
        //RTransactionListener.prototype = new RTransactionListener_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTransactionListener.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RTransactionListener);
                
            //}
          }
          else {
            qWarning("RTransactionListener.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RTransactionListener.js: No constructor found for class RTransactionListener");
            
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

      //RTransactionListener.prototype = new RTransactionListener_BaseJs(engine);
      //RTransactionListener.prototype = new RTransactionListener_Wrapper(engine);
      RTransactionListener.prototype = new Object();

      RTransactionListener.prototype.toString = function() {
          //return "RTransactionListener [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTransactionListener [JS]";
        };
      RTransactionListener.getObjectType = function() {
        return RJSType_RTransactionListener.getIdStatic();
      };

      RTransactionListener.prototype.getObjectType = function() {
        return RJSType_RTransactionListener.getIdStatic();
      };

      RTransactionListener.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTransactionListener.getIdStatic()) {
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
      //RTransactionListener.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTransactionListener.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      