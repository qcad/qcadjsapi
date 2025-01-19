
      // auto generated
      //var self;

      // class constructor:
      function RPointData() {
        

        // should be RPointData_BaseJs.call(this, engine):
        //RPointData.prototype = new RPointData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPointData.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RPointData);
            //}
          }
          else {
            qWarning("RPointData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RPointData_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RPointData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPointData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RPointData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RPointData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPointData);
  }

  
  else {
    
        print("RPointData(): wrong number / type of arguments");
      
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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
          }
        }
      }

      //RPointData.prototype = new RPointData_BaseJs(engine);
      //RPointData.prototype = new RPointData_Wrapper(engine);
      RPointData.prototype = new Object();

      RPointData.prototype.toString = function() {
          //return "RPointData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPointData [JS]";
        };
      RPointData.getObjectType = function() {
        return RJSType_RPointData.getIdStatic();
      };

      RPointData.prototype.getObjectType = function() {
        return RJSType_RPointData.getIdStatic();
      };

      RPointData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPointData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RPoint.getIdStatic()) {
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
      //RPointData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPointData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    