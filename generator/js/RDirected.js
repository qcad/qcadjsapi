
      // auto generated
      //var self;

      // class constructor:
      function RDirected() {
        

        // should be RDirected_BaseJs.call(this, engine):
        //RDirected.prototype = new RDirected_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDirected.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  this.__PROXY__ = wrapper;
                
            //}
          }
          else {
            qWarning("RDirected.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RDirected.js: No constructor found for class RDirected");
            
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

      //RDirected.prototype = new RDirected_BaseJs(engine);
      //RDirected.prototype = new RDirected_Wrapper(engine);
      RDirected.prototype = new Object();


      RDirected.prototype.toString = function() {
          //return "RDirected [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDirected [JS]";
        };
      RDirected.getObjectType = function() {
        return RJSType_RDirected.getIdStatic();
      };

      RDirected.prototype.getObjectType = function() {
        return RJSType_RDirected.getIdStatic();
      };

      RDirected.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDirected.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      RDirected.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      RDirected.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      RDirected.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RDirected.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDirected.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RDirected.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      