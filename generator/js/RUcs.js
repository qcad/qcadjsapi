
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
              
                  this.__PROXY__ = wrapper;
                
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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
      
        // function 
        RUcs.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RUcs.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RUcs.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RUcs.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RUcs.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RUcs.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RUcs.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RUcs.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RUcs.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RUcs.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RUcs.prototype.getId = function(...args) 
          
        {
          //print("JS: RUcs.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RUcs.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RUcs.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RUcs.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RUcs.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RUcs.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RUcs.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RUcs.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RUcs.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RUcs.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RUcs.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RUcs.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RUcs.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RUcs.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RUcs.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RUcs.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RUcs.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RUcs.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RUcs.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RUcs.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RUcs.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RUcs.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RUcs.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RUcs.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RUcs.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RUcs.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RUcs.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RUcs.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RUcs.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RUcs.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RUcs.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RUcs.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RUcs.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RUcs.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RUcs.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RUcs.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RUcs.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RUcs.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RUcs.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RUcs.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RUcs.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RUcs.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RUcs.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RUcs.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RUcs.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RUcs.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RUcs.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RUcs.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RUcs.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RUcs.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RUcs.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RUcs.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RUcs.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RUcs.prototype.dump = function(...args) 
          
        {
          //print("JS: RUcs.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RUcs.prototype.validate = function(...args) 
          
        {
          //print("JS: RUcs.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RUcs.prototype.print = function(...args) 
          
        {
          //print("JS: RUcs.prototype.print");
          return this.__PROXY__.print(...args);
        };
    
        // function 
        RUcs.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RUcs.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RUcs.prototype.setId = function(...args) 
          
        {
          //print("JS: RUcs.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RUcs.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RUcs.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RUcs.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RUcs.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RUcs.prototype.init = function(...args) 
          
        {
          //print("JS: RUcs.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RUcs.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RUcs.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RUcs.prototype.getType = function(...args) 
          
        {
          //print("JS: RUcs.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RUcs.prototype.clone = function(...args) 
          
        {
          //print("JS: RUcs.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RUcs.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RUcs.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RUcs.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RUcs.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RUcs.prototype.setOrigin = function(...args) 
          
        {
          //print("JS: RUcs.prototype.setOrigin");
          return this.__PROXY__.setOrigin(...args);
        };
    
        // function 
        RUcs.prototype.setXAxisDirection = function(...args) 
          
        {
          //print("JS: RUcs.prototype.setXAxisDirection");
          return this.__PROXY__.setXAxisDirection(...args);
        };
    
        // function 
        RUcs.prototype.setYAxisDirection = function(...args) 
          
        {
          //print("JS: RUcs.prototype.setYAxisDirection");
          return this.__PROXY__.setYAxisDirection(...args);
        };
    
        // function 
        RUcs.prototype.getZAxisDirection = function(...args) 
          
        {
          //print("JS: RUcs.prototype.getZAxisDirection");
          return this.__PROXY__.getZAxisDirection(...args);
        };
    
        // function 
        RUcs.prototype.mapFromUcs = function(...args) 
          
        {
          //print("JS: RUcs.prototype.mapFromUcs");
          return this.__PROXY__.mapFromUcs(...args);
        };
    
        // function 
        RUcs.prototype.mapToUcs = function(...args) 
          
        {
          //print("JS: RUcs.prototype.mapToUcs");
          return this.__PROXY__.mapToUcs(...args);
        };
    

      // static functions:
      

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

      RUcs.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      