
      // auto generated
      //var self;

      // class constructor:
      function RLineData() {
        

        // should be RLineData_BaseJs.call(this, engine):
        //RLineData.prototype = new RLineData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RLineData.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RLineData);
            //}
          }
          else {
            qWarning("RLineData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RLineData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RLineData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLineData);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RLineData_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RLineData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLineData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RLineData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RLineData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLineData);
  }

  
  else {
    
        print("RLineData(): wrong number / type of arguments");
      
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

      //RLineData.prototype = new RLineData_BaseJs(engine);
      //RLineData.prototype = new RLineData_Wrapper(engine);
      RLineData.prototype = new Object();

      RLineData.prototype.toString = function() {
          //return "RLineData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RLineData [JS]";
        };
      RLineData.getObjectType = function() {
        return RJSType_RLineData.getIdStatic();
      };

      RLineData.prototype.getObjectType = function() {
        return RJSType_RLineData.getIdStatic();
      };

      RLineData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RLineData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RLine.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RLineData.getDefaultDrawOrder = function() 
          
        {
          //print("JS: RLineData.getDefaultDrawOrder");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLineData_WrapperSingletonInstance.getDefaultDrawOrder(
                  
                );
              

        //copyProperties(this, wrapper, RLineData);
  }

  
  else {
    
        print("RLineData.getDefaultDrawOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RLineData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RLineData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    