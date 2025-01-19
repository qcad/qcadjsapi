
      // auto generated
      //var self;

      // class constructor:
      function RPolylineData() {
        

        // should be RPolylineData_BaseJs.call(this, engine):
        //RPolylineData.prototype = new RPolylineData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPolylineData.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RPolylineData);
            //}
          }
          else {
            qWarning("RPolylineData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RPolylineData_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RPolylineData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPolylineData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RPolylineData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RPolylineData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPolylineData);
  }

  
  else {
    
        print("RPolylineData(): wrong number / type of arguments");
      
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

      //RPolylineData.prototype = new RPolylineData_BaseJs(engine);
      //RPolylineData.prototype = new RPolylineData_Wrapper(engine);
      RPolylineData.prototype = new Object();

      RPolylineData.prototype.toString = function() {
          //return "RPolylineData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPolylineData [JS]";
        };
      RPolylineData.getObjectType = function() {
        return RJSType_RPolylineData.getIdStatic();
      };

      RPolylineData.prototype.getObjectType = function() {
        return RJSType_RPolylineData.getIdStatic();
      };

      RPolylineData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPolylineData.getIdStatic()) {
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
      //RPolylineData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPolylineData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    