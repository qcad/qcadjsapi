
      // auto generated
      //var self;

      // class constructor:
      function RObject() {
        

        // should be RObject_BaseJs.call(this, engine):
        //RObject.prototype = new RObject_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RObject.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RObject);
                
            //}
          }
          else {
            qWarning("RObject.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RObject.js: No constructor found for class RObject");
            
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
          
        }

        

      }

      //RObject.prototype = new RObject_BaseJs(engine);
      //RObject.prototype = new RObject_Wrapper(engine);
      RObject.prototype = new Object();

      RObject.prototype.toString = function() {
          //return "RObject [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RObject [JS]";
        };
      RObject.getObjectType = function() {
        return RJSType_RObject.getIdStatic();
      };

      RObject.prototype.getObjectType = function() {
        return RJSType_RObject.getIdStatic();
      };

      RObject.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RObject.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RObject.init = function() 
          
        {
          //print("JS: RObject.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RObject_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RObject);
  }

  
  else {
    
        print("RObject.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RObject.getRtti = function() 
          
        {
          //print("JS: RObject.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RObject_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RObject);
  }

  
  else {
    
        print("RObject.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RObject.setCustomPropertyAttributes = function() 
          
        {
          //print("JS: RObject.setCustomPropertyAttributes");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RObject_WrapperSingletonInstance.setCustomPropertyAttributes(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RObject);
  }

  
  else {
    
        print("RObject.setCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RObject.getCustomPropertyAttributes = function() 
          
        {
          //print("JS: RObject.getCustomPropertyAttributes");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RObject_WrapperSingletonInstance.getCustomPropertyAttributes(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RObject);
  }

  
  else {
    
        print("RObject.getCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RObject.setMember = function() 
          
        {
          //print("JS: RObject.setMember");
          
        };
      

        // static function 
        RObject.setMemberX = function() 
          
        {
          //print("JS: RObject.setMemberX");
          
        };
      

        // static function 
        RObject.setMemberY = function() 
          
        {
          //print("JS: RObject.setMemberY");
          
        };
      

        // static function 
        RObject.setMemberZ = function() 
          
        {
          //print("JS: RObject.setMemberZ");
          
        };
      

        // static function 
        RObject.setMemberVector = function() 
          
        {
          //print("JS: RObject.setMemberVector");
          
        };
      

      // constants:
      

      // public static properties without access function:
      RObject.INVALID_ID = 
  RObject_WrapperSingletonInstance.INVALID_ID;
RObject.INVALID_HANDLE = 
  RObject_WrapperSingletonInstance.INVALID_HANDLE;
RObject.PropertyCustom = 
  RObject_WrapperSingletonInstance.PropertyCustom;
RObject.PropertyType = 
  RObject_WrapperSingletonInstance.PropertyType;
RObject.PropertyHandle = 
  RObject_WrapperSingletonInstance.PropertyHandle;
RObject.PropertyProtected = 
  RObject_WrapperSingletonInstance.PropertyProtected;
RObject.PropertyWorkingSet = 
  RObject_WrapperSingletonInstance.PropertyWorkingSet;
RObject.PropertySelected = 
  RObject_WrapperSingletonInstance.PropertySelected;
RObject.PropertyInvisible = 
  RObject_WrapperSingletonInstance.PropertyInvisible;


      // copy function:
      //RObject.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RObject.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      