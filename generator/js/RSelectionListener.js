
      // auto generated
      //var self;

      // class constructor:
      function RSelectionListener() {
        

        // should be RSelectionListener_BaseJs.call(this, engine):
        //RSelectionListener.prototype = new RSelectionListener_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSelectionListener.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RSelectionListener);
                
            //}
          }
          else {
            qWarning("RSelectionListener.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RSelectionListener.js: No constructor found for class RSelectionListener");
            
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

      //RSelectionListener.prototype = new RSelectionListener_BaseJs(engine);
      //RSelectionListener.prototype = new RSelectionListener_Wrapper(engine);
      RSelectionListener.prototype = new Object();

      RSelectionListener.prototype.toString = function() {
          //return "RSelectionListener [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSelectionListener [JS]";
        };
      RSelectionListener.getObjectType = function() {
        return RJSType_RSelectionListener.getIdStatic();
      };

      RSelectionListener.prototype.getObjectType = function() {
        return RJSType_RSelectionListener.getIdStatic();
      };

      RSelectionListener.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSelectionListener.getIdStatic()) {
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
      //RSelectionListener.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSelectionListener.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      