
      // auto generated
      //var self;

      // class constructor:
      function RBlock() {
        

        // should be RBlock_BaseJs.call(this, engine):
        //RBlock.prototype = new RBlock_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RBlock.getIdStatic()))) {

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
            qWarning("RBlock.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new RBlock_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RBlock);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RBlock_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RBlock);
  }

  
  else {
    
        print("RBlock(): wrong number / type of arguments");
      
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

      //RBlock.prototype = new RBlock_BaseJs(engine);
      //RBlock.prototype = new RBlock_Wrapper(engine);
      RBlock.prototype = new Object();

      RBlock.prototype.toString = function() {
          //return "RBlock [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RBlock [JS]";
        };
      RBlock.getObjectType = function() {
        return RJSType_RBlock.getIdStatic();
      };

      RBlock.prototype.getObjectType = function() {
        return RJSType_RBlock.getIdStatic();
      };

      RBlock.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RBlock.getIdStatic()) {
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
        RBlock.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RBlock.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RBlock.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RBlock.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RBlock.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RBlock.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RBlock.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RBlock.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RBlock.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RBlock.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RBlock.prototype.getId = function(...args) 
          
        {
          //print("JS: RBlock.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RBlock.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RBlock.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RBlock.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RBlock.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RBlock.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RBlock.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RBlock.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RBlock.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RBlock.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RBlock.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RBlock.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RBlock.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RBlock.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RBlock.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RBlock.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RBlock.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RBlock.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RBlock.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RBlock.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RBlock.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RBlock.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RBlock.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RBlock.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RBlock.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RBlock.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RBlock.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RBlock.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RBlock.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RBlock.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RBlock.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RBlock.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RBlock.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RBlock.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RBlock.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RBlock.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RBlock.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RBlock.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RBlock.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RBlock.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RBlock.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RBlock.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RBlock.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RBlock.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RBlock.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RBlock.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RBlock.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RBlock.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RBlock.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RBlock.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RBlock.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RBlock.prototype.dump = function(...args) 
          
        {
          //print("JS: RBlock.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RBlock.prototype.validate = function(...args) 
          
        {
          //print("JS: RBlock.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RBlock.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RBlock.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RBlock.prototype.setId = function(...args) 
          
        {
          //print("JS: RBlock.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RBlock.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RBlock.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RBlock.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RBlock.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RBlock.prototype.init = function(...args) 
          
        {
          //print("JS: RBlock.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RBlock.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RBlock.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RBlock.prototype.getType = function(...args) 
          
        {
          //print("JS: RBlock.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RBlock.prototype.clone = function(...args) 
          
        {
          //print("JS: RBlock.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RBlock.prototype.getName = function(...args) 
          
        {
          //print("JS: RBlock.prototype.getName");
          return this.__PROXY__.getName(...args);
        };
    
        // function 
        RBlock.prototype.setName = function(...args) 
          
        {
          //print("JS: RBlock.prototype.setName");
          return this.__PROXY__.setName(...args);
        };
    
        // function 
        RBlock.prototype.isFrozen = function(...args) 
          
        {
          //print("JS: RBlock.prototype.isFrozen");
          return this.__PROXY__.isFrozen(...args);
        };
    
        // function 
        RBlock.prototype.setFrozen = function(...args) 
          
        {
          //print("JS: RBlock.prototype.setFrozen");
          return this.__PROXY__.setFrozen(...args);
        };
    
        // function 
        RBlock.prototype.isAnonymous = function(...args) 
          
        {
          //print("JS: RBlock.prototype.isAnonymous");
          return this.__PROXY__.isAnonymous(...args);
        };
    
        // function 
        RBlock.prototype.setAnonymous = function(...args) 
          
        {
          //print("JS: RBlock.prototype.setAnonymous");
          return this.__PROXY__.setAnonymous(...args);
        };
    
        // function 
        RBlock.prototype.isPixelUnit = function(...args) 
          
        {
          //print("JS: RBlock.prototype.isPixelUnit");
          return this.__PROXY__.isPixelUnit(...args);
        };
    
        // function 
        RBlock.prototype.setPixelUnit = function(...args) 
          
        {
          //print("JS: RBlock.prototype.setPixelUnit");
          return this.__PROXY__.setPixelUnit(...args);
        };
    
        // function 
        RBlock.prototype.setOrigin = function(...args) 
          
        {
          //print("JS: RBlock.prototype.setOrigin");
          return this.__PROXY__.setOrigin(...args);
        };
    
        // function 
        RBlock.prototype.getOrigin = function(...args) 
          
        {
          //print("JS: RBlock.prototype.getOrigin");
          return this.__PROXY__.getOrigin(...args);
        };
    
        // function 
        RBlock.prototype.isModelSpace = function(...args) 
          
        {
          //print("JS: RBlock.prototype.isModelSpace");
          return this.__PROXY__.isModelSpace(...args);
        };
    
        // function 
        RBlock.prototype.hasLayout = function(...args) 
          
        {
          //print("JS: RBlock.prototype.hasLayout");
          return this.__PROXY__.hasLayout(...args);
        };
    
        // function 
        RBlock.prototype.setLayoutId = function(...args) 
          
        {
          //print("JS: RBlock.prototype.setLayoutId");
          return this.__PROXY__.setLayoutId(...args);
        };
    
        // function 
        RBlock.prototype.getLayoutId = function(...args) 
          
        {
          //print("JS: RBlock.prototype.getLayoutId");
          return this.__PROXY__.getLayoutId(...args);
        };
    
        // function 
        RBlock.prototype.getLayoutName = function(...args) 
          
        {
          //print("JS: RBlock.prototype.getLayoutName");
          return this.__PROXY__.getLayoutName(...args);
        };
    
        // function 
        RBlock.prototype.isXRef = function(...args) 
          
        {
          //print("JS: RBlock.prototype.isXRef");
          return this.__PROXY__.isXRef(...args);
        };
    
        // function 
        RBlock.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RBlock.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RBlock.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RBlock.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        RBlock.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RBlock.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RBlock.prototype.print = function(...args) 
          
        {
          //print("JS: RBlock.prototype.print");
          return this.__PROXY__.print(...args);
        };
    

      // static functions:
      

        // static function 
        RBlock.init = function() 
          
        {
          //print("JS: RBlock.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RBlock_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RBlock);
  }

  
  else {
    
        print("RBlock.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RBlock.getRtti = function() 
          
        {
          //print("JS: RBlock.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RBlock_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RBlock);
  }

  
  else {
    
        print("RBlock.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RBlock.INVALID_ID = 
  RBlock_WrapperSingletonInstance.INVALID_ID;
RBlock.INVALID_HANDLE = 
  RBlock_WrapperSingletonInstance.INVALID_HANDLE;
RBlock.PropertyProtected = 
  RBlock_WrapperSingletonInstance.PropertyProtected;
RBlock.PropertyWorkingSet = 
  RBlock_WrapperSingletonInstance.PropertyWorkingSet;
RBlock.PropertySelected = 
  RBlock_WrapperSingletonInstance.PropertySelected;
RBlock.PropertyInvisible = 
  RBlock_WrapperSingletonInstance.PropertyInvisible;
RBlock.PropertyCustom = 
  RBlock_WrapperSingletonInstance.PropertyCustom;
RBlock.PropertyType = 
  RBlock_WrapperSingletonInstance.PropertyType;
RBlock.PropertyHandle = 
  RBlock_WrapperSingletonInstance.PropertyHandle;
RBlock.PropertyName = 
  RBlock_WrapperSingletonInstance.PropertyName;
RBlock.PropertyFrozen = 
  RBlock_WrapperSingletonInstance.PropertyFrozen;
RBlock.PropertyPixelUnit = 
  RBlock_WrapperSingletonInstance.PropertyPixelUnit;
RBlock.PropertyOriginX = 
  RBlock_WrapperSingletonInstance.PropertyOriginX;
RBlock.PropertyOriginY = 
  RBlock_WrapperSingletonInstance.PropertyOriginY;
RBlock.PropertyOriginZ = 
  RBlock_WrapperSingletonInstance.PropertyOriginZ;
RBlock.PropertyLayout = 
  RBlock_WrapperSingletonInstance.PropertyLayout;
RBlock.modelSpaceName = 
  RBlock_WrapperSingletonInstance.modelSpaceName;
RBlock.paperSpaceName = 
  RBlock_WrapperSingletonInstance.paperSpaceName;


      // copy function:
      //RBlock.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RBlock.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RBlock.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      