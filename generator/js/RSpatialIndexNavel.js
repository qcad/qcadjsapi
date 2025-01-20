
      // auto generated
      //var self;

      // class constructor:
      function RSpatialIndexNavel() {
        

        // should be RSpatialIndexNavel_BaseJs.call(this, engine):
        //RSpatialIndexNavel.prototype = new RSpatialIndexNavel_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSpatialIndexNavel.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RSpatialIndexNavel);
                
            //}
          }
          else {
            qWarning("RSpatialIndexNavel.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RSpatialIndexNavel_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RSpatialIndexNavel);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSpatialIndexNavel);
  }

  
  else {
    
        print("RSpatialIndexNavel(): wrong number / type of arguments");
      
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

      //RSpatialIndexNavel.prototype = new RSpatialIndexNavel_BaseJs(engine);
      //RSpatialIndexNavel.prototype = new RSpatialIndexNavel_Wrapper(engine);
      RSpatialIndexNavel.prototype = new Object();

      RSpatialIndexNavel.prototype.toString = function() {
          //return "RSpatialIndexNavel [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSpatialIndexNavel [JS]";
        };
      RSpatialIndexNavel.getObjectType = function() {
        return RJSType_RSpatialIndexNavel.getIdStatic();
      };

      RSpatialIndexNavel.prototype.getObjectType = function() {
        return RJSType_RSpatialIndexNavel.getIdStatic();
      };

      RSpatialIndexNavel.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSpatialIndexNavel.getIdStatic()) {
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
      //RSpatialIndexNavel.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSpatialIndexNavel.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      