
      // auto generated
      //var self;

      // class constructor:
      function RSplineData() {
        

        // should be RSplineData_BaseJs.call(this, engine):
        //RSplineData.prototype = new RSplineData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RSplineData.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RSplineData);
            //}
          }
          else {
            qWarning("RSplineData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RSplineData_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RSplineData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSplineData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RSplineData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RSplineData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RSplineData);
  }

  
  else {
    
        print("RSplineData(): wrong number / type of arguments");
      
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

      //RSplineData.prototype = new RSplineData_BaseJs(engine);
      //RSplineData.prototype = new RSplineData_Wrapper(engine);
      RSplineData.prototype = new Object();

      RSplineData.prototype.toString = function() {
          //return "RSplineData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RSplineData [JS]";
        };
      RSplineData.getObjectType = function() {
        return RJSType_RSplineData.getIdStatic();
      };

      RSplineData.prototype.getObjectType = function() {
        return RJSType_RSplineData.getIdStatic();
      };

      RSplineData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RSplineData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RSpline.getIdStatic()) {
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
      //RSplineData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RSplineData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    