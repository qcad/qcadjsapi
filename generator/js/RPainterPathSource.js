
      // auto generated
      //var self;

      // class constructor:
      function RPainterPathSource() {
        

        // should be RPainterPathSource_BaseJs.call(this, engine):
        //RPainterPathSource.prototype = new RPainterPathSource_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPainterPathSource.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RPainterPathSource);
            //}
          }
          else {
            qWarning("RPainterPathSource.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RPainterPathSource.js: No constructor found for class RPainterPathSource");
            
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

      //RPainterPathSource.prototype = new RPainterPathSource_BaseJs(engine);
      //RPainterPathSource.prototype = new RPainterPathSource_Wrapper(engine);
      RPainterPathSource.prototype = new Object();

      RPainterPathSource.prototype.toString = function() {
          //return "RPainterPathSource [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPainterPathSource [JS]";
        };
      RPainterPathSource.getObjectType = function() {
        return RJSType_RPainterPathSource.getIdStatic();
      };

      RPainterPathSource.prototype.getObjectType = function() {
        return RJSType_RPainterPathSource.getIdStatic();
      };

      RPainterPathSource.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPainterPathSource.getIdStatic()) {
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
      //RPainterPathSource.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPainterPathSource.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    