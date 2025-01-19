
      // auto generated
      //var self;

      // class constructor:
      function RDimRadialData() {
        

        // should be RDimRadialData_BaseJs.call(this, engine):
        //RDimRadialData.prototype = new RDimRadialData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimRadialData.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RDimRadialData);
            //}
          }
          else {
            qWarning("RDimRadialData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RDimRadialData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDimRadialData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimRadialData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RDimRadialData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDimRadialData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimRadialData);
  }

  
  else {
    
        print("RDimRadialData(): wrong number / type of arguments");
      
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

      //RDimRadialData.prototype = new RDimRadialData_BaseJs(engine);
      //RDimRadialData.prototype = new RDimRadialData_Wrapper(engine);
      RDimRadialData.prototype = new Object();

      RDimRadialData.prototype.toString = function() {
          //return "RDimRadialData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimRadialData [JS]";
        };
      RDimRadialData.getObjectType = function() {
        return RJSType_RDimRadialData.getIdStatic();
      };

      RDimRadialData.prototype.getObjectType = function() {
        return RJSType_RDimRadialData.getIdStatic();
      };

      RDimRadialData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimRadialData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RDimensionData.getIdStatic()) {
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
      //RDimRadialData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimRadialData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    