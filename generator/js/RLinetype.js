
      // auto generated
      //var self;

      // class constructor:
      function RLinetype() {
        

        // should be RLinetype_BaseJs.call(this, engine):
        //RLinetype.prototype = new RLinetype_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RLinetype.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RLinetype);
            //}
          }
          else {
            qWarning("RLinetype.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RLinetype_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RLinetype);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLinetype);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RLinetype_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RLinetype);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLinetype);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RLinetype_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RLinetype);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLinetype);
  }

  
  else {
    
        print("RLinetype(): wrong number / type of arguments");
      
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

      //RLinetype.prototype = new RLinetype_BaseJs(engine);
      //RLinetype.prototype = new RLinetype_Wrapper(engine);
      RLinetype.prototype = new Object();

      RLinetype.prototype.toString = function() {
          //return "RLinetype [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RLinetype [JS]";
        };
      RLinetype.getObjectType = function() {
        return RJSType_RLinetype.getIdStatic();
      };

      RLinetype.prototype.getObjectType = function() {
        return RJSType_RLinetype.getIdStatic();
      };

      RLinetype.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RLinetype.getIdStatic()) {
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
        RLinetype.setCustomPropertyAttributes = function() 
          
        {
          //print("JS: RLinetype.setCustomPropertyAttributes");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RLinetype_WrapperSingletonInstance.setCustomPropertyAttributes(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RLinetype);
  }

  
  else {
    
        print("RLinetype.setCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLinetype.getCustomPropertyAttributes = function() 
          
        {
          //print("JS: RLinetype.getCustomPropertyAttributes");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RLinetype_WrapperSingletonInstance.getCustomPropertyAttributes(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RLinetype);
  }

  
  else {
    
        print("RLinetype.getCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLinetype.setMember = function() 
          
        {
          //print("JS: RLinetype.setMember");
          
        };
      

        // static function 
        RLinetype.setMemberX = function() 
          
        {
          //print("JS: RLinetype.setMemberX");
          
        };
      

        // static function 
        RLinetype.setMemberY = function() 
          
        {
          //print("JS: RLinetype.setMemberY");
          
        };
      

        // static function 
        RLinetype.setMemberZ = function() 
          
        {
          //print("JS: RLinetype.setMemberZ");
          
        };
      

        // static function 
        RLinetype.setMemberVector = function() 
          
        {
          //print("JS: RLinetype.setMemberVector");
          
        };
      

        // static function 
        RLinetype.init = function() 
          
        {
          //print("JS: RLinetype.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLinetype_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RLinetype);
  }

  
  else {
    
        print("RLinetype.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLinetype.getRtti = function() 
          
        {
          //print("JS: RLinetype.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLinetype_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RLinetype);
  }

  
  else {
    
        print("RLinetype.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RLinetype.INVALID_ID = 
  RLinetype_WrapperSingletonInstance.INVALID_ID;
RLinetype.INVALID_HANDLE = 
  RLinetype_WrapperSingletonInstance.INVALID_HANDLE;
RLinetype.PropertyCustom = 
  RLinetype_WrapperSingletonInstance.PropertyCustom;
RLinetype.PropertyType = 
  RLinetype_WrapperSingletonInstance.PropertyType;
RLinetype.PropertyHandle = 
  RLinetype_WrapperSingletonInstance.PropertyHandle;
RLinetype.PropertyProtected = 
  RLinetype_WrapperSingletonInstance.PropertyProtected;
RLinetype.PropertyWorkingSet = 
  RLinetype_WrapperSingletonInstance.PropertyWorkingSet;
RLinetype.PropertySelected = 
  RLinetype_WrapperSingletonInstance.PropertySelected;
RLinetype.PropertyInvisible = 
  RLinetype_WrapperSingletonInstance.PropertyInvisible;


      // copy function:
      //RLinetype.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RLinetype.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    