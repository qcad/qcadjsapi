
      // auto generated
      //var self;

      // class constructor:
      function RBlockReferenceData() {
        

        // should be RBlockReferenceData_BaseJs.call(this, engine):
        //RBlockReferenceData.prototype = new RBlockReferenceData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RBlockReferenceData.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RBlockReferenceData);
            //}
          }
          else {
            qWarning("RBlockReferenceData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 4 &&
          arguments.length <= 9) {
    
            self = this;
            wrapper = new RBlockReferenceData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RBlockReferenceData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RBlockReferenceData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RBlockReferenceData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RBlockReferenceData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RBlockReferenceData);
  }

  
  else {
    
        print("RBlockReferenceData(): wrong number / type of arguments");
      
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

      //RBlockReferenceData.prototype = new RBlockReferenceData_BaseJs(engine);
      //RBlockReferenceData.prototype = new RBlockReferenceData_Wrapper(engine);
      RBlockReferenceData.prototype = new Object();

      RBlockReferenceData.prototype.toString = function() {
          //return "RBlockReferenceData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RBlockReferenceData [JS]";
        };
      RBlockReferenceData.getObjectType = function() {
        return RJSType_RBlockReferenceData.getIdStatic();
      };

      RBlockReferenceData.prototype.getObjectType = function() {
        return RJSType_RBlockReferenceData.getIdStatic();
      };

      RBlockReferenceData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RBlockReferenceData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RBlockReferenceData.getDefaultDrawOrder = function() 
          
        {
          //print("JS: RBlockReferenceData.getDefaultDrawOrder");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RBlockReferenceData_WrapperSingletonInstance.getDefaultDrawOrder(
                  
                );
              

        //copyProperties(this, wrapper, RBlockReferenceData);
  }

  
  else {
    
        print("RBlockReferenceData.getDefaultDrawOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RBlockReferenceData.getRtti = function() 
          
        {
          //print("JS: RBlockReferenceData.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RBlockReferenceData_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RBlockReferenceData);
  }

  
  else {
    
        print("RBlockReferenceData.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RBlockReferenceData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RBlockReferenceData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    