
      // auto generated
      //var self;

      // class constructor:
      function RGraphicsViewWorker() {
        

        // should be RGraphicsViewWorker_BaseJs.call(this, engine):
        //RGraphicsViewWorker.prototype = new RGraphicsViewWorker_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RGraphicsViewWorker.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RGraphicsViewWorker);
                
            //}
          }
          else {
            qWarning("RGraphicsViewWorker.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RGraphicsViewWorker.js: No constructor found for class RGraphicsViewWorker");
            
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

      //RGraphicsViewWorker.prototype = new RGraphicsViewWorker_BaseJs(engine);
      //RGraphicsViewWorker.prototype = new RGraphicsViewWorker_Wrapper(engine);
      RGraphicsViewWorker.prototype = new Object();

      RGraphicsViewWorker.prototype.toString = function() {
          //return "RGraphicsViewWorker [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RGraphicsViewWorker [JS]";
        };
      RGraphicsViewWorker.getObjectType = function() {
        return RJSType_RGraphicsViewWorker.getIdStatic();
      };

      RGraphicsViewWorker.prototype.getObjectType = function() {
        return RJSType_RGraphicsViewWorker.getIdStatic();
      };

      RGraphicsViewWorker.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RGraphicsViewWorker.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
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
      //RGraphicsViewWorker.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RGraphicsViewWorker.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      