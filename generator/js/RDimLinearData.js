
      // auto generated
      //var self;

      // class constructor:
      function RDimLinearData() {
        

        // should be RDimLinearData_BaseJs.call(this, engine):
        //RDimLinearData.prototype = new RDimLinearData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimLinearData.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RDimLinearData);
            //}
          }
          else {
            qWarning("RDimLinearData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RDimLinearData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDimLinearData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimLinearData);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RDimLinearData_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDimLinearData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimLinearData);
  }

  
  else {
    
        print("RDimLinearData(): wrong number / type of arguments");
      
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

      //RDimLinearData.prototype = new RDimLinearData_BaseJs(engine);
      //RDimLinearData.prototype = new RDimLinearData_Wrapper(engine);
      RDimLinearData.prototype = new Object();

      RDimLinearData.prototype.toString = function() {
          //return "RDimLinearData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimLinearData [JS]";
        };
      RDimLinearData.getObjectType = function() {
        return RJSType_RDimLinearData.getIdStatic();
      };

      RDimLinearData.prototype.getObjectType = function() {
        return RJSType_RDimLinearData.getIdStatic();
      };

      RDimLinearData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimLinearData.getIdStatic()) {
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
      //RDimLinearData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimLinearData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    