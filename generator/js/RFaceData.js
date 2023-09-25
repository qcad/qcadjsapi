
      // auto generated
      //var self;

      // class constructor:
      function RFaceData() {
        

        // should be RFaceData_BaseJs.call(this, engine):
        //RFaceData.prototype = new RFaceData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RFaceData.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RFaceData);
            //}
          }
          else {
            qWarning("RFaceData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new RFaceData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RFaceData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RFaceData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RFaceData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RFaceData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RFaceData);
  }

  
  else {
    
        print("RFaceData(): wrong number / type of arguments");
      
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

      //RFaceData.prototype = new RFaceData_BaseJs(engine);
      //RFaceData.prototype = new RFaceData_Wrapper(engine);
      RFaceData.prototype = new Object();

      RFaceData.prototype.toString = function() {
          //return "RFaceData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RFaceData [JS]";
        };
      RFaceData.getObjectType = function() {
        return RJSType_RFaceData.getIdStatic();
      };

      RFaceData.prototype.getObjectType = function() {
        return RJSType_RFaceData.getIdStatic();
      };

      RFaceData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RFaceData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RSolidData.getIdStatic()) {
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
      //RFaceData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RFaceData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    