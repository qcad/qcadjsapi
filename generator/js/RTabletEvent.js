
      // auto generated
      //var self;

      // class constructor:
      function RTabletEvent() {
        

        // should be RTabletEvent_BaseJs.call(this, engine):
        //RTabletEvent.prototype = new RTabletEvent_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTabletEvent.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RTabletEvent);
                
            //}
          }
          else {
            qWarning("RTabletEvent.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RTabletEvent.js: No constructor found for class RTabletEvent");
            
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

      //RTabletEvent.prototype = new RTabletEvent_BaseJs(engine);
      //RTabletEvent.prototype = new RTabletEvent_Wrapper(engine);
      RTabletEvent.prototype = new Object();

      RTabletEvent.prototype.toString = function() {
          //return "RTabletEvent [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTabletEvent [JS]";
        };
      RTabletEvent.getObjectType = function() {
        return RJSType_RTabletEvent.getIdStatic();
      };

      RTabletEvent.prototype.getObjectType = function() {
        return RJSType_RTabletEvent.getIdStatic();
      };

      RTabletEvent.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTabletEvent.getIdStatic()) {
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
      //RTabletEvent.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTabletEvent.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      