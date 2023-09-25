
      // auto generated
      //var self;

      // class constructor:
      function RArcData() {
        

        // should be RArcData_BaseJs.call(this, engine):
        //RArcData.prototype = new RArcData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RArcData.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RArcData);
            //}
          }
          else {
            qWarning("RArcData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
            self = this;
            wrapper = new RArcData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RArcData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RArcData);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RArcData_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RArcData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RArcData);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RArcData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RArcData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RArcData);
  }

  
  else {
    
        print("RArcData(): wrong number / type of arguments");
      
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

      //RArcData.prototype = new RArcData_BaseJs(engine);
      //RArcData.prototype = new RArcData_Wrapper(engine);
      RArcData.prototype = new Object();

      RArcData.prototype.toString = function() {
          //return "RArcData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RArcData [JS]";
        };
      RArcData.getObjectType = function() {
        return RJSType_RArcData.getIdStatic();
      };

      RArcData.prototype.getObjectType = function() {
        return RJSType_RArcData.getIdStatic();
      };

      RArcData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RArcData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RArc.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RArcData.getDefaultDrawOrder = function() 
          
        {
          //print("JS: RArcData.getDefaultDrawOrder");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RArcData_WrapperSingletonInstance.getDefaultDrawOrder(
                  
                );
              

        //copyProperties(this, wrapper, RArcData);
  }

  
  else {
    
        print("RArcData.getDefaultDrawOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArcData.createFrom3Points = function() 
          
        {
          //print("JS: RArcData.createFrom3Points");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RArcData_WrapperSingletonInstance.createFrom3Points(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RArcData);
  }

  
  else {
    
        print("RArcData.createFrom3Points(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArcData.createFrom2PBulge = function() 
          
        {
          //print("JS: RArcData.createFrom2PBulge");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RArcData_WrapperSingletonInstance.createFrom2PBulge(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RArcData);
  }

  
  else {
    
        print("RArcData.createFrom2PBulge(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArcData.createTangential = function() 
          
        {
          //print("JS: RArcData.createTangential");
          
      if (arguments.length == 4) {
    
                // calling static wrapper:
                return RArcData_WrapperSingletonInstance.createTangential(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RArcData);
  }

  
  else {
    
        print("RArcData.createTangential(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RArcData.createBiarc = function() 
          
        {
          //print("JS: RArcData.createBiarc");
          
      if (arguments.length >= 4 &&
          arguments.length <= 5) {
    
                // calling static wrapper:
                return RArcData_WrapperSingletonInstance.createBiarc(
                  arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
                );
              

        //copyProperties(this, wrapper, RArcData);
  }

  
  else {
    
        print("RArcData.createBiarc(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RArcData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RArcData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    