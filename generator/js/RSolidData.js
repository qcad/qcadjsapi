
      // auto generated
      //var self;

      // class constructor:
      function RSolidData() {
        

        // should be RSolidData_BaseJs.call(this, engine):
        //RSolidData.prototype = new RSolidData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSolidData.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RSolidData);
            //}
          }
          else {
            qWarning("RSolidData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new RSolidData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RSolidData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSolidData);
  }

  
  else 
  
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RSolidData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RSolidData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSolidData);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RSolidData_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RSolidData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSolidData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RSolidData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RSolidData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSolidData);
  }

  
  else {
    
        print("RSolidData(): wrong number / type of arguments");
      
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

      //RSolidData.prototype = new RSolidData_BaseJs(engine);
      //RSolidData.prototype = new RSolidData_Wrapper(engine);
      RSolidData.prototype = new Object();

      RSolidData.prototype.toString = function() {
          //return "RSolidData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSolidData [JS]";
        };
      RSolidData.getObjectType = function() {
        return RJSType_RSolidData.getIdStatic();
      };

      RSolidData.prototype.getObjectType = function() {
        return RJSType_RSolidData.getIdStatic();
      };

      RSolidData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSolidData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RPolyline.getIdStatic()) {
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
      //RSolidData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSolidData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    