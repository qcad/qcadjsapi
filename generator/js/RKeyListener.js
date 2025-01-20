
      // auto generated
      //var self;

      // class constructor:
      function RKeyListener() {
        

        // should be RKeyListener_BaseJs.call(this, engine):
        //RKeyListener.prototype = new RKeyListener_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RKeyListener.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RKeyListener);
                
            //}
          }
          else {
            qWarning("RKeyListener.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RKeyListener.js: No constructor found for class RKeyListener");
            
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

      //RKeyListener.prototype = new RKeyListener_BaseJs(engine);
      //RKeyListener.prototype = new RKeyListener_Wrapper(engine);
      RKeyListener.prototype = new Object();

      RKeyListener.prototype.toString = function() {
          //return "RKeyListener [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RKeyListener [JS]";
        };
      RKeyListener.getObjectType = function() {
        return RJSType_RKeyListener.getIdStatic();
      };

      RKeyListener.prototype.getObjectType = function() {
        return RJSType_RKeyListener.getIdStatic();
      };

      RKeyListener.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RKeyListener.getIdStatic()) {
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
      //RKeyListener.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RKeyListener.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      