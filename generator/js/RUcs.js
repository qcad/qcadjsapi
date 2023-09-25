
      // auto generated
      //var self;

      // class constructor:
      function RUcs() {
        

        // should be RUcs_BaseJs.call(this, engine):
        //RUcs.prototype = new RUcs_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RUcs.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RUcs);
            //}
          }
          else {
            qWarning("RUcs.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 5) {
    
            self = this;
            wrapper = new RUcs_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RUcs);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RUcs);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RUcs_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RUcs);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RUcs);
  }

  
  else {
    
        print("RUcs(): wrong number / type of arguments");
      
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

      //RUcs.prototype = new RUcs_BaseJs(engine);
      //RUcs.prototype = new RUcs_Wrapper(engine);
      RUcs.prototype = new Object();

      RUcs.prototype.toString = function() {
          //return "RUcs [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RUcs [JS]";
        };
      RUcs.getObjectType = function() {
        return RJSType_RUcs.getIdStatic();
      };

      RUcs.prototype.getObjectType = function() {
        return RJSType_RUcs.getIdStatic();
      };

      RUcs.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RUcs.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RObject.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RUcs.setCustomPropertyAttributes = function() 
          
        {
          //print("JS: RUcs.setCustomPropertyAttributes");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RUcs_WrapperSingletonInstance.setCustomPropertyAttributes(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RUcs);
  }

  
  else {
    
        print("RUcs.setCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RUcs.getCustomPropertyAttributes = function() 
          
        {
          //print("JS: RUcs.getCustomPropertyAttributes");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RUcs_WrapperSingletonInstance.getCustomPropertyAttributes(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RUcs);
  }

  
  else {
    
        print("RUcs.getCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RUcs.setMember = function() 
          
        {
          //print("JS: RUcs.setMember");
          
        };
      

        // static function 
        RUcs.setMemberX = function() 
          
        {
          //print("JS: RUcs.setMemberX");
          
        };
      

        // static function 
        RUcs.setMemberY = function() 
          
        {
          //print("JS: RUcs.setMemberY");
          
        };
      

        // static function 
        RUcs.setMemberZ = function() 
          
        {
          //print("JS: RUcs.setMemberZ");
          
        };
      

        // static function 
        RUcs.setMemberVector = function() 
          
        {
          //print("JS: RUcs.setMemberVector");
          
        };
      

        // static function 
        RUcs.init = function() 
          
        {
          //print("JS: RUcs.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RUcs_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RUcs);
  }

  
  else {
    
        print("RUcs.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RUcs.getRtti = function() 
          
        {
          //print("JS: RUcs.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RUcs_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RUcs);
  }

  
  else {
    
        print("RUcs.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RUcs.INVALID_ID = 
  RUcs_WrapperSingletonInstance.INVALID_ID;
RUcs.INVALID_HANDLE = 
  RUcs_WrapperSingletonInstance.INVALID_HANDLE;
RUcs.PropertyCustom = 
  RUcs_WrapperSingletonInstance.PropertyCustom;
RUcs.PropertyType = 
  RUcs_WrapperSingletonInstance.PropertyType;
RUcs.PropertyHandle = 
  RUcs_WrapperSingletonInstance.PropertyHandle;
RUcs.PropertyProtected = 
  RUcs_WrapperSingletonInstance.PropertyProtected;
RUcs.PropertyWorkingSet = 
  RUcs_WrapperSingletonInstance.PropertyWorkingSet;
RUcs.PropertySelected = 
  RUcs_WrapperSingletonInstance.PropertySelected;
RUcs.PropertyInvisible = 
  RUcs_WrapperSingletonInstance.PropertyInvisible;


      // copy function:
      //RUcs.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RUcs.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    