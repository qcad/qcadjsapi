
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
              
                  this.__PROXY__ = wrapper;
                
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
      
        // function 
        RObject.prototype.init = function(...args) 
          
        {
          //print("JS: RObject.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RObject.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RObject.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RObject.prototype.getType = function(...args) 
          
        {
          //print("JS: RObject.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RObject.prototype.clone = function(...args) 
          
        {
          //print("JS: RObject.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RObject.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RObject.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RObject.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RObject.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RObject.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RObject.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RObject.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RObject.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RObject.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RObject.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RObject.prototype.getId = function(...args) 
          
        {
          //print("JS: RObject.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RObject.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RObject.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RObject.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RObject.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RObject.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RObject.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RObject.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RObject.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RObject.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RObject.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RObject.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RObject.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RObject.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RObject.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RObject.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RObject.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RObject.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RObject.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RObject.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RObject.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RObject.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RObject.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RObject.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RObject.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RObject.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RObject.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RObject.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RObject.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RObject.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RObject.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RObject.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RObject.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RObject.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RObject.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RObject.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RObject.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RObject.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RObject.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RObject.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RObject.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RObject.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RObject.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RObject.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RObject.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RObject.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RObject.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RObject.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RObject.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RObject.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RObject.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RObject.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RObject.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RObject.prototype.setCustomPropertyAttributes = function(...args) 
          
        {
          //print("JS: RObject.prototype.setCustomPropertyAttributes");
          return this.__PROXY__.setCustomPropertyAttributes(...args);
        };
    
        // function 
        RObject.prototype.getCustomPropertyAttributes = function(...args) 
          
        {
          //print("JS: RObject.prototype.getCustomPropertyAttributes");
          return this.__PROXY__.getCustomPropertyAttributes(...args);
        };
    
        // function 
        RObject.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RObject.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RObject.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RObject.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RObject.prototype.dump = function(...args) 
          
        {
          //print("JS: RObject.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RObject.prototype.validate = function(...args) 
          
        {
          //print("JS: RObject.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RObject.prototype.print = function(...args) 
          
        {
          //print("JS: RObject.prototype.print");
          return this.__PROXY__.print(...args);
        };
    
        // function 
        RObject.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RObject.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RObject.prototype.setId = function(...args) 
          
        {
          //print("JS: RObject.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RObject.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RObject.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RObject.prototype.setMember = function(...args) 
          
        {
          //print("JS: RObject.prototype.setMember");
          return this.__PROXY__.setMember(...args);
        };
    
        // function 
        RObject.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RObject.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RObject.prototype.setMemberX = function(...args) 
          
        {
          //print("JS: RObject.prototype.setMemberX");
          return this.__PROXY__.setMemberX(...args);
        };
    
        // function 
        RObject.prototype.setMemberY = function(...args) 
          
        {
          //print("JS: RObject.prototype.setMemberY");
          return this.__PROXY__.setMemberY(...args);
        };
    
        // function 
        RObject.prototype.setMemberZ = function(...args) 
          
        {
          //print("JS: RObject.prototype.setMemberZ");
          return this.__PROXY__.setMemberZ(...args);
        };
    
        // function 
        RObject.prototype.setMemberVector = function(...args) 
          
        {
          //print("JS: RObject.prototype.setMemberVector");
          return this.__PROXY__.setMemberVector(...args);
        };
    

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

      RObject.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      