
      // auto generated
      //var self;

      // class constructor:
      function RXLineData() {
        

        // should be RXLineData_BaseJs.call(this, engine):
        //RXLineData.prototype = new RXLineData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RXLineData.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RXLineData);
            //}
          }
          else {
            qWarning("RXLineData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RXLineData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RXLineData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RXLineData);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RXLineData_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RXLineData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RXLineData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RXLineData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RXLineData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RXLineData);
  }

  
  else {
    
        print("RXLineData(): wrong number / type of arguments");
      
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

      //RXLineData.prototype = new RXLineData_BaseJs(engine);
      //RXLineData.prototype = new RXLineData_Wrapper(engine);
      RXLineData.prototype = new Object();

      RXLineData.prototype.toString = function() {
          //return "RXLineData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RXLineData [JS]";
        };
      RXLineData.getObjectType = function() {
        return RJSType_RXLineData.getIdStatic();
      };

      RXLineData.prototype.getObjectType = function() {
        return RJSType_RXLineData.getIdStatic();
      };

      RXLineData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RXLineData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RXLine.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RXLineData.getDefaultDrawOrder = function() 
          
        {
          //print("JS: RXLineData.getDefaultDrawOrder");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RXLineData_WrapperSingletonInstance.getDefaultDrawOrder(
                  
                );
              

        //copyProperties(this, wrapper, RXLineData);
  }

  
  else {
    
        print("RXLineData.getDefaultDrawOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RXLineData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RXLineData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    