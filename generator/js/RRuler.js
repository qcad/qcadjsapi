
      // auto generated
      //var self;

      // class constructor:
      function RRuler() {
        

        // should be RRuler_BaseJs.call(this, engine):
        //RRuler.prototype = new RRuler_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RRuler.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RRuler);
            //}
          }
          else {
            qWarning("RRuler.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RRuler.js: No constructor found for class RRuler");
            
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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
          }
        }
      }

      //RRuler.prototype = new RRuler_BaseJs(engine);
      //RRuler.prototype = new RRuler_Wrapper(engine);
      RRuler.prototype = new Object();

      RRuler.prototype.toString = function() {
          //return "RRuler [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RRuler [JS]";
        };
      RRuler.getObjectType = function() {
        return RJSType_RRuler.getIdStatic();
      };

      RRuler.prototype.getObjectType = function() {
        return RJSType_RRuler.getIdStatic();
      };

      RRuler.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RRuler.getIdStatic()) {
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
      //RRuler.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RRuler.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    