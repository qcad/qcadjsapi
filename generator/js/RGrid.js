
      // auto generated
      //var self;

      // class constructor:
      function RGrid() {
        

        // should be RGrid_BaseJs.call(this, engine):
        //RGrid.prototype = new RGrid_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RGrid.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RGrid);
            //}
          }
          else {
            qWarning("RGrid.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RGrid.js: No constructor found for class RGrid");
            
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

      //RGrid.prototype = new RGrid_BaseJs(engine);
      //RGrid.prototype = new RGrid_Wrapper(engine);
      RGrid.prototype = new Object();

      RGrid.prototype.toString = function() {
          //return "RGrid [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RGrid [JS]";
        };
      RGrid.getObjectType = function() {
        return RJSType_RGrid.getIdStatic();
      };

      RGrid.prototype.getObjectType = function() {
        return RJSType_RGrid.getIdStatic();
      };

      RGrid.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RGrid.getIdStatic()) {
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
      //RGrid.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RGrid.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    