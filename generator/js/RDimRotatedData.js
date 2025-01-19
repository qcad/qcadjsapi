
      // auto generated
      //var self;

      // class constructor:
      function RDimRotatedData() {
        

        // should be RDimRotatedData_BaseJs.call(this, engine):
        //RDimRotatedData.prototype = new RDimRotatedData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimRotatedData.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RDimRotatedData);
            //}
          }
          else {
            qWarning("RDimRotatedData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new RDimRotatedData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDimRotatedData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimRotatedData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RDimRotatedData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDimRotatedData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimRotatedData);
  }

  
  else {
    
        print("RDimRotatedData(): wrong number / type of arguments");
      
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

      //RDimRotatedData.prototype = new RDimRotatedData_BaseJs(engine);
      //RDimRotatedData.prototype = new RDimRotatedData_Wrapper(engine);
      RDimRotatedData.prototype = new Object();

      RDimRotatedData.prototype.toString = function() {
          //return "RDimRotatedData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimRotatedData [JS]";
        };
      RDimRotatedData.getObjectType = function() {
        return RJSType_RDimRotatedData.getIdStatic();
      };

      RDimRotatedData.prototype.getObjectType = function() {
        return RJSType_RDimRotatedData.getIdStatic();
      };

      RDimRotatedData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimRotatedData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RDimensionData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RDimLinearData.getIdStatic()) {
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
      //RDimRotatedData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimRotatedData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    