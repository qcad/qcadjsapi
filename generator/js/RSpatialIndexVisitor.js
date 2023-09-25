
      // auto generated
      //var self;

      // class constructor:
      function RSpatialIndexVisitor() {
        

        // should be RSpatialIndexVisitor_BaseJs.call(this, engine):
        //RSpatialIndexVisitor.prototype = new RSpatialIndexVisitor_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSpatialIndexVisitor.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RSpatialIndexVisitor);
            //}
          }
          else {
            qWarning("RSpatialIndexVisitor.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RSpatialIndexVisitor.js: No constructor found for class RSpatialIndexVisitor");
            
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

      //RSpatialIndexVisitor.prototype = new RSpatialIndexVisitor_BaseJs(engine);
      //RSpatialIndexVisitor.prototype = new RSpatialIndexVisitor_Wrapper(engine);
      RSpatialIndexVisitor.prototype = new Object();

      RSpatialIndexVisitor.prototype.toString = function() {
          //return "RSpatialIndexVisitor [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSpatialIndexVisitor [JS]";
        };
      RSpatialIndexVisitor.getObjectType = function() {
        return RJSType_RSpatialIndexVisitor.getIdStatic();
      };

      RSpatialIndexVisitor.prototype.getObjectType = function() {
        return RJSType_RSpatialIndexVisitor.getIdStatic();
      };

      RSpatialIndexVisitor.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSpatialIndexVisitor.getIdStatic()) {
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
      //RSpatialIndexVisitor.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSpatialIndexVisitor.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    