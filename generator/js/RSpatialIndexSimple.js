
      // auto generated
      //var self;

      // class constructor:
      function RSpatialIndexSimple() {
        

        // should be RSpatialIndexSimple_BaseJs.call(this, engine):
        //RSpatialIndexSimple.prototype = new RSpatialIndexSimple_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSpatialIndexSimple.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RSpatialIndexSimple);
                
            //}
          }
          else {
            qWarning("RSpatialIndexSimple.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RSpatialIndexSimple_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RSpatialIndexSimple);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSpatialIndexSimple);
  }

  
  else {
    
        print("RSpatialIndexSimple(): wrong number / type of arguments");
      
    console.trace();
  }
  
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

      //RSpatialIndexSimple.prototype = new RSpatialIndexSimple_BaseJs(engine);
      //RSpatialIndexSimple.prototype = new RSpatialIndexSimple_Wrapper(engine);
      RSpatialIndexSimple.prototype = new Object();

      RSpatialIndexSimple.prototype.toString = function() {
          //return "RSpatialIndexSimple [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSpatialIndexSimple [JS]";
        };
      RSpatialIndexSimple.getObjectType = function() {
        return RJSType_RSpatialIndexSimple.getIdStatic();
      };

      RSpatialIndexSimple.prototype.getObjectType = function() {
        return RJSType_RSpatialIndexSimple.getIdStatic();
      };

      RSpatialIndexSimple.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSpatialIndexSimple.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RSpatialIndex.getIdStatic()) {
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
      //RSpatialIndexSimple.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSpatialIndexSimple.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      