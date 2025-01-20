
      // auto generated
      //var self;

      // class constructor:
      function RView() {
        

        // should be RView_BaseJs.call(this, engine):
        //RView.prototype = new RView_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RView.getIdStatic()))) {

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
            qWarning("RView.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 5) {
    
            self = this;
            wrapper = new RView_Wrapper(
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

      

        //copyProperties(this, wrapper, RView);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RView_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RView);
  }

  
  else {
    
        print("RView(): wrong number / type of arguments");
      
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

      //RView.prototype = new RView_BaseJs(engine);
      //RView.prototype = new RView_Wrapper(engine);
      RView.prototype = new Object();

      RView.prototype.toString = function() {
          //return "RView [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RView [JS]";
        };
      RView.getObjectType = function() {
        return RJSType_RView.getIdStatic();
      };

      RView.prototype.getObjectType = function() {
        return RJSType_RView.getIdStatic();
      };

      RView.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RView.getIdStatic()) {
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
        RView.prototype.mustAlwaysClone = function(...args) 
          
        {
          //print("JS: RView.prototype.mustAlwaysClone");
          return this.__PROXY__.mustAlwaysClone(...args);
        };
    
        // function 
        RView.prototype.getDocument = function(...args) 
          
        {
          //print("JS: RView.prototype.getDocument");
          return this.__PROXY__.getDocument(...args);
        };
    
        // function 
        RView.prototype.setDocument = function(...args) 
          
        {
          //print("JS: RView.prototype.setDocument");
          return this.__PROXY__.setDocument(...args);
        };
    
        // function 
        RView.prototype.setFlag = function(...args) 
          
        {
          //print("JS: RView.prototype.setFlag");
          return this.__PROXY__.setFlag(...args);
        };
    
        // function 
        RView.prototype.getFlag = function(...args) 
          
        {
          //print("JS: RView.prototype.getFlag");
          return this.__PROXY__.getFlag(...args);
        };
    
        // function 
        RView.prototype.getId = function(...args) 
          
        {
          //print("JS: RView.prototype.getId");
          return this.__PROXY__.getId(...args);
        };
    
        // function 
        RView.prototype.getHandle = function(...args) 
          
        {
          //print("JS: RView.prototype.getHandle");
          return this.__PROXY__.getHandle(...args);
        };
    
        // function 
        RView.prototype.isProtected = function(...args) 
          
        {
          //print("JS: RView.prototype.isProtected");
          return this.__PROXY__.isProtected(...args);
        };
    
        // function 
        RView.prototype.setProtected = function(...args) 
          
        {
          //print("JS: RView.prototype.setProtected");
          return this.__PROXY__.setProtected(...args);
        };
    
        // function 
        RView.prototype.isInvisible = function(...args) 
          
        {
          //print("JS: RView.prototype.isInvisible");
          return this.__PROXY__.isInvisible(...args);
        };
    
        // function 
        RView.prototype.setInvisible = function(...args) 
          
        {
          //print("JS: RView.prototype.setInvisible");
          return this.__PROXY__.setInvisible(...args);
        };
    
        // function 
        RView.prototype.isSelected = function(...args) 
          
        {
          //print("JS: RView.prototype.isSelected");
          return this.__PROXY__.isSelected(...args);
        };
    
        // function 
        RView.prototype.setSelected = function(...args) 
          
        {
          //print("JS: RView.prototype.setSelected");
          return this.__PROXY__.setSelected(...args);
        };
    
        // function 
        RView.prototype.isUndone = function(...args) 
          
        {
          //print("JS: RView.prototype.isUndone");
          return this.__PROXY__.isUndone(...args);
        };
    
        // function 
        RView.prototype.isWorkingSet = function(...args) 
          
        {
          //print("JS: RView.prototype.isWorkingSet");
          return this.__PROXY__.isWorkingSet(...args);
        };
    
        // function 
        RView.prototype.setWorkingSet = function(...args) 
          
        {
          //print("JS: RView.prototype.setWorkingSet");
          return this.__PROXY__.setWorkingSet(...args);
        };
    
        // function 
        RView.prototype.getPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RView.prototype.getPropertyTypeIds");
          return this.__PROXY__.getPropertyTypeIds(...args);
        };
    
        // function 
        RView.prototype.getCustomPropertyTypeIds = function(...args) 
          
        {
          //print("JS: RView.prototype.getCustomPropertyTypeIds");
          return this.__PROXY__.getCustomPropertyTypeIds(...args);
        };
    
        // function 
        RView.prototype.hasPropertyType = function(...args) 
          
        {
          //print("JS: RView.prototype.hasPropertyType");
          return this.__PROXY__.hasPropertyType(...args);
        };
    
        // function 
        RView.prototype.hasCustomProperties = function(...args) 
          
        {
          //print("JS: RView.prototype.hasCustomProperties");
          return this.__PROXY__.hasCustomProperties(...args);
        };
    
        // function 
        RView.prototype.hasCustomProperty = function(...args) 
          
        {
          //print("JS: RView.prototype.hasCustomProperty");
          return this.__PROXY__.hasCustomProperty(...args);
        };
    
        // function 
        RView.prototype.getCustomProperty = function(...args) 
          
        {
          //print("JS: RView.prototype.getCustomProperty");
          return this.__PROXY__.getCustomProperty(...args);
        };
    
        // function 
        RView.prototype.getCustomDoubleProperty = function(...args) 
          
        {
          //print("JS: RView.prototype.getCustomDoubleProperty");
          return this.__PROXY__.getCustomDoubleProperty(...args);
        };
    
        // function 
        RView.prototype.getCustomIntProperty = function(...args) 
          
        {
          //print("JS: RView.prototype.getCustomIntProperty");
          return this.__PROXY__.getCustomIntProperty(...args);
        };
    
        // function 
        RView.prototype.getCustomBoolProperty = function(...args) 
          
        {
          //print("JS: RView.prototype.getCustomBoolProperty");
          return this.__PROXY__.getCustomBoolProperty(...args);
        };
    
        // function 
        RView.prototype.setCustomProperty = function(...args) 
          
        {
          //print("JS: RView.prototype.setCustomProperty");
          return this.__PROXY__.setCustomProperty(...args);
        };
    
        // function 
        RView.prototype.removeCustomProperty = function(...args) 
          
        {
          //print("JS: RView.prototype.removeCustomProperty");
          return this.__PROXY__.removeCustomProperty(...args);
        };
    
        // function 
        RView.prototype.getCustomPropertyTitles = function(...args) 
          
        {
          //print("JS: RView.prototype.getCustomPropertyTitles");
          return this.__PROXY__.getCustomPropertyTitles(...args);
        };
    
        // function 
        RView.prototype.getCustomPropertyKeys = function(...args) 
          
        {
          //print("JS: RView.prototype.getCustomPropertyKeys");
          return this.__PROXY__.getCustomPropertyKeys(...args);
        };
    
        // function 
        RView.prototype.copyCustomPropertiesFrom = function(...args) 
          
        {
          //print("JS: RView.prototype.copyCustomPropertiesFrom");
          return this.__PROXY__.copyCustomPropertiesFrom(...args);
        };
    
        // function 
        RView.prototype.getComplexity = function(...args) 
          
        {
          //print("JS: RView.prototype.getComplexity");
          return this.__PROXY__.getComplexity(...args);
        };
    
        // function 
        RView.prototype.setAutoUpdatesBlocked = function(...args) 
          
        {
          //print("JS: RView.prototype.setAutoUpdatesBlocked");
          return this.__PROXY__.setAutoUpdatesBlocked(...args);
        };
    
        // function 
        RView.prototype.dump = function(...args) 
          
        {
          //print("JS: RView.prototype.dump");
          return this.__PROXY__.dump(...args);
        };
    
        // function 
        RView.prototype.validate = function(...args) 
          
        {
          //print("JS: RView.prototype.validate");
          return this.__PROXY__.validate(...args);
        };
    
        // function 
        RView.prototype.print = function(...args) 
          
        {
          //print("JS: RView.prototype.print");
          return this.__PROXY__.print(...args);
        };
    
        // function 
        RView.prototype.setUndone = function(...args) 
          
        {
          //print("JS: RView.prototype.setUndone");
          return this.__PROXY__.setUndone(...args);
        };
    
        // function 
        RView.prototype.setId = function(...args) 
          
        {
          //print("JS: RView.prototype.setId");
          return this.__PROXY__.setId(...args);
        };
    
        // function 
        RView.prototype.setHandle = function(...args) 
          
        {
          //print("JS: RView.prototype.setHandle");
          return this.__PROXY__.setHandle(...args);
        };
    
        // function 
        RView.prototype.setMemberFlag = function(...args) 
          
        {
          //print("JS: RView.prototype.setMemberFlag");
          return this.__PROXY__.setMemberFlag(...args);
        };
    
        // function 
        RView.prototype.init = function(...args) 
          
        {
          //print("JS: RView.prototype.init");
          return this.__PROXY__.init(...args);
        };
    
        // function 
        RView.prototype.getRtti = function(...args) 
          
        {
          //print("JS: RView.prototype.getRtti");
          return this.__PROXY__.getRtti(...args);
        };
    
        // function 
        RView.prototype.getType = function(...args) 
          
        {
          //print("JS: RView.prototype.getType");
          return this.__PROXY__.getType(...args);
        };
    
        // function 
        RView.prototype.clone = function(...args) 
          
        {
          //print("JS: RView.prototype.clone");
          return this.__PROXY__.clone(...args);
        };
    
        // function 
        RView.prototype.getName = function(...args) 
          
        {
          //print("JS: RView.prototype.getName");
          return this.__PROXY__.getName(...args);
        };
    
        // function 
        RView.prototype.setName = function(...args) 
          
        {
          //print("JS: RView.prototype.setName");
          return this.__PROXY__.setName(...args);
        };
    
        // function 
        RView.prototype.getCenterPoint = function(...args) 
          
        {
          //print("JS: RView.prototype.getCenterPoint");
          return this.__PROXY__.getCenterPoint(...args);
        };
    
        // function 
        RView.prototype.setCenterPoint = function(...args) 
          
        {
          //print("JS: RView.prototype.setCenterPoint");
          return this.__PROXY__.setCenterPoint(...args);
        };
    
        // function 
        RView.prototype.getWidth = function(...args) 
          
        {
          //print("JS: RView.prototype.getWidth");
          return this.__PROXY__.getWidth(...args);
        };
    
        // function 
        RView.prototype.setWidth = function(...args) 
          
        {
          //print("JS: RView.prototype.setWidth");
          return this.__PROXY__.setWidth(...args);
        };
    
        // function 
        RView.prototype.getHeight = function(...args) 
          
        {
          //print("JS: RView.prototype.getHeight");
          return this.__PROXY__.getHeight(...args);
        };
    
        // function 
        RView.prototype.setHeight = function(...args) 
          
        {
          //print("JS: RView.prototype.setHeight");
          return this.__PROXY__.setHeight(...args);
        };
    
        // function 
        RView.prototype.getBox = function(...args) 
          
        {
          //print("JS: RView.prototype.getBox");
          return this.__PROXY__.getBox(...args);
        };
    
        // function 
        RView.prototype.scale = function(...args) 
          
        {
          //print("JS: RView.prototype.scale");
          return this.__PROXY__.scale(...args);
        };
    
        // function 
        RView.prototype.getProperty = function(...args) 
          
        {
          //print("JS: RView.prototype.getProperty");
          return this.__PROXY__.getProperty(...args);
        };
    
        // function 
        RView.prototype.setProperty = function(...args) 
          
        {
          //print("JS: RView.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    

      // static functions:
      

        // static function 
        RView.init = function() 
          
        {
          //print("JS: RView.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RView_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RView);
  }

  
  else {
    
        print("RView.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RView.getRtti = function() 
          
        {
          //print("JS: RView.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RView_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RView);
  }

  
  else {
    
        print("RView.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RView.INVALID_ID = 
  RView_WrapperSingletonInstance.INVALID_ID;
RView.INVALID_HANDLE = 
  RView_WrapperSingletonInstance.INVALID_HANDLE;
RView.PropertyCustom = 
  RView_WrapperSingletonInstance.PropertyCustom;
RView.PropertyType = 
  RView_WrapperSingletonInstance.PropertyType;
RView.PropertyHandle = 
  RView_WrapperSingletonInstance.PropertyHandle;
RView.PropertyProtected = 
  RView_WrapperSingletonInstance.PropertyProtected;
RView.PropertyWorkingSet = 
  RView_WrapperSingletonInstance.PropertyWorkingSet;
RView.PropertySelected = 
  RView_WrapperSingletonInstance.PropertySelected;
RView.PropertyInvisible = 
  RView_WrapperSingletonInstance.PropertyInvisible;


      // copy function:
      //RView.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RView.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RView.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      