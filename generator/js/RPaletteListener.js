
      // auto generated
      //var self;

      // class constructor:
      function RPaletteListener() {
        

        // should be RPaletteListener_BaseJs.call(this, engine):
        //RPaletteListener.prototype = new RPaletteListener_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPaletteListener.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RPaletteListener);
                
            //}
          }
          else {
            qWarning("RPaletteListener.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RPaletteListener.js: No constructor found for class RPaletteListener");
            
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

      //RPaletteListener.prototype = new RPaletteListener_BaseJs(engine);
      //RPaletteListener.prototype = new RPaletteListener_Wrapper(engine);
      RPaletteListener.prototype = new Object();

      RPaletteListener.prototype.toString = function() {
          //return "RPaletteListener [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPaletteListener [JS]";
        };
      RPaletteListener.getObjectType = function() {
        return RJSType_RPaletteListener.getIdStatic();
      };

      RPaletteListener.prototype.getObjectType = function() {
        return RJSType_RPaletteListener.getIdStatic();
      };

      RPaletteListener.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPaletteListener.getIdStatic()) {
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
      //RPaletteListener.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPaletteListener.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      