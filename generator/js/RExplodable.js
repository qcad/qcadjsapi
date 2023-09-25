
      // auto generated
      //var self;

      // class constructor:
      function RExplodable() {
        

        // should be RExplodable_BaseJs.call(this, engine):
        //RExplodable.prototype = new RExplodable_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RExplodable.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RExplodable);
            //}
          }
          else {
            qWarning("RExplodable.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RExplodable.js: No constructor found for class RExplodable");
            
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

      //RExplodable.prototype = new RExplodable_BaseJs(engine);
      //RExplodable.prototype = new RExplodable_Wrapper(engine);
      RExplodable.prototype = new Object();

      RExplodable.prototype.toString = function() {
          //return "RExplodable [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RExplodable [JS]";
        };
      RExplodable.getObjectType = function() {
        return RJSType_RExplodable.getIdStatic();
      };

      RExplodable.prototype.getObjectType = function() {
        return RJSType_RExplodable.getIdStatic();
      };

      RExplodable.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RExplodable.getIdStatic()) {
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
      //RExplodable.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RExplodable.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    