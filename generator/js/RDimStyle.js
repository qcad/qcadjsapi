
      // auto generated
      //var self;

      // class constructor:
      function RDimStyle() {
        

        // should be RDimStyle_BaseJs.call(this, engine):
        //RDimStyle.prototype = new RDimStyle_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimStyle.getIdStatic()))) {

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
            qWarning("RDimStyle.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RDimStyle_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimStyle);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RDimStyle_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimStyle);
  }

  
  else {
    
        print("RDimStyle(): wrong number / type of arguments");
      
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

      //RDimStyle.prototype = new RDimStyle_BaseJs(engine);
      //RDimStyle.prototype = new RDimStyle_Wrapper(engine);
      RDimStyle.prototype = new Object();

      RDimStyle.prototype.toString = function() {
          //return "RDimStyle [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimStyle [JS]";
        };
      RDimStyle.getObjectType = function() {
        return RJSType_RDimStyle.getIdStatic();
      };

      RDimStyle.prototype.getObjectType = function() {
        return RJSType_RDimStyle.getIdStatic();
      };

      RDimStyle.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimStyle.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RDimStyleData.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        RDimStyle.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RDimStyle.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RDimStyle.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RDimStyle.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RDimStyle.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RDimStyle.prototype.getId = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RDimStyle.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RDimStyle.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RDimStyle.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RDimStyle.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RDimStyle.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RDimStyle.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RDimStyle.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RDimStyle.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RDimStyle.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RDimStyle.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RDimStyle.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RDimStyle.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RDimStyle.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RDimStyle.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RDimStyle.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RDimStyle.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RDimStyle.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RDimStyle.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RDimStyle.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RDimStyle.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RDimStyle.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RDimStyle.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RDimStyle.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RDimStyle.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RDimStyle.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RDimStyle.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RDimStyle.prototype.dump = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RDimStyle.prototype.validate = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RDimStyle.prototype.print = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.print");
          return this.__PROXY__.print(...args);
        };
    
        // function 
        RDimStyle.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RDimStyle.prototype.setId = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RDimStyle.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RDimStyle.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RDimStyle.prototype.initFromSettings = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.initFromSettings");
          return this.__PROXY__.initFromSettings(...args);
        };
    
        // function 
        RDimStyle.prototype.hasOverride = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.hasOverride");
          return this.__PROXY__.hasOverride(...args);
        };
    
        // function 
        RDimStyle.prototype.isValid = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RDimStyle.prototype.clear = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.clear");
          return this.__PROXY__.clear(...args);
        };
    
        // function 
        RDimStyle.prototype.getVariant = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.getVariant");
          return this.__PROXY__.getVariant(...args);
        };
    
        // function 
        RDimStyle.prototype.setVariant = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.setVariant");
          return this.__PROXY__.setVariant(...args);
        };
    
        // function 
        RDimStyle.prototype.getDouble = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.getDouble");
          return this.__PROXY__.getDouble(...args);
        };
    
        // function 
        RDimStyle.prototype.setDouble = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.setDouble");
          return this.__PROXY__.setDouble(...args);
        };
    
        // function 
        RDimStyle.prototype.removeDouble = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.removeDouble");
          return this.__PROXY__.removeDouble(...args);
        };
    
        // function 
        RDimStyle.prototype.getInt = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.getInt");
          return this.__PROXY__.getInt(...args);
        };
    
        // function 
        RDimStyle.prototype.setInt = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.setInt");
          return this.__PROXY__.setInt(...args);
        };
    
        // function 
        RDimStyle.prototype.removeInt = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.removeInt");
          return this.__PROXY__.removeInt(...args);
        };
    
        // function 
        RDimStyle.prototype.getBool = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.getBool");
          return this.__PROXY__.getBool(...args);
        };
    
        // function 
        RDimStyle.prototype.setBool = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.setBool");
          return this.__PROXY__.setBool(...args);
        };
    
        // function 
        RDimStyle.prototype.removeBool = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.removeBool");
          return this.__PROXY__.removeBool(...args);
        };
    
        // function 
        RDimStyle.prototype.getColor = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.getColor");
          return this.__PROXY__.getColor(...args);
        };
    
        // function 
        RDimStyle.prototype.setColor = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.setColor");
          return this.__PROXY__.setColor(...args);
        };
    
        // function 
        RDimStyle.prototype.removeColor = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.removeColor");
          return this.__PROXY__.removeColor(...args);
        };
    
        // function 
        RDimStyle.prototype.init = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RDimStyle.prototype.initDimX = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.initDimX");
          return this.__PROXY__.initDimX(...args);
        };
    
        // function 
        RDimStyle.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RDimStyle.prototype.getType = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RDimStyle.prototype.clone = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RDimStyle.prototype.updateDocumentVariables = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.updateDocumentVariables");
          return this.__PROXY__.updateDocumentVariables(...args);
        };
    
        // function 
        RDimStyle.prototype.updateFromDocumentVariables = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.updateFromDocumentVariables");
          return this.__PROXY__.updateFromDocumentVariables(...args);
        };
    
        // function 
        RDimStyle.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RDimStyle.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RDimStyle.prototype.hasProxy = function(...args) 
          
        {
          //print("JS: RDimStyle.prototype.hasProxy");
          return this.__PROXY__.hasProxy(...args);
        };
    

      // static functions:
      

        // static function 
        RDimStyle.init = function() 
          
        {
          //print("JS: RDimStyle.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimStyle_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RDimStyle);
  }

  
  else {
    
        print("RDimStyle.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimStyle.initDimX = function() 
          
        {
          //print("JS: RDimStyle.initDimX");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RDimStyle_WrapperSingletonInstance.initDimX(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RDimStyle);
  }

  
  else {
    
        print("RDimStyle.initDimX(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimStyle.getRtti = function() 
          
        {
          //print("JS: RDimStyle.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimStyle_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RDimStyle);
  }

  
  else {
    
        print("RDimStyle.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimStyle.hasProxy = function() 
          
        {
          //print("JS: RDimStyle.hasProxy");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimStyle_WrapperSingletonInstance.hasProxy(
                  
                );
              

        //copyProperties(this, wrapper, RDimStyle);
  }

  
  else {
    
        print("RDimStyle.hasProxy(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RDimStyle.INVALID_ID = 
  RDimStyle_WrapperSingletonInstance.INVALID_ID;
RDimStyle.INVALID_HANDLE = 
  RDimStyle_WrapperSingletonInstance.INVALID_HANDLE;
RDimStyle.PropertyCustom = 
  RDimStyle_WrapperSingletonInstance.PropertyCustom;
RDimStyle.PropertyType = 
  RDimStyle_WrapperSingletonInstance.PropertyType;
RDimStyle.PropertyHandle = 
  RDimStyle_WrapperSingletonInstance.PropertyHandle;
RDimStyle.PropertyProtected = 
  RDimStyle_WrapperSingletonInstance.PropertyProtected;
RDimStyle.PropertyWorkingSet = 
  RDimStyle_WrapperSingletonInstance.PropertyWorkingSet;
RDimStyle.PropertySelected = 
  RDimStyle_WrapperSingletonInstance.PropertySelected;
RDimStyle.PropertyInvisible = 
  RDimStyle_WrapperSingletonInstance.PropertyInvisible;


      // copy function:
      //RDimStyle.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimStyle.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RDimStyle.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      