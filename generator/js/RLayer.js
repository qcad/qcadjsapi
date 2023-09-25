
      // auto generated
      //var self;

      // class constructor:
      function RLayer() {
        

        // should be RLayer_BaseJs.call(this, engine):
        //RLayer.prototype = new RLayer_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RLayer.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RLayer);
            //}
          }
          else {
            qWarning("RLayer.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 8) {
    
            self = this;
            wrapper = new RLayer_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RLayer);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLayer);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RLayer_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RLayer);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLayer);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RLayer_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RLayer);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RLayer);
  }

  
  else {
    
        print("RLayer(): wrong number / type of arguments");
      
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

      //RLayer.prototype = new RLayer_BaseJs(engine);
      //RLayer.prototype = new RLayer_Wrapper(engine);
      RLayer.prototype = new Object();

      RLayer.prototype.toString = function() {
          //return "RLayer [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RLayer [JS]";
        };
      RLayer.getObjectType = function() {
        return RJSType_RLayer.getIdStatic();
      };

      RLayer.prototype.getObjectType = function() {
        return RJSType_RLayer.getIdStatic();
      };

      RLayer.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RLayer.getIdStatic()) {
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
        RLayer.setCustomPropertyAttributes = function() 
          
        {
          //print("JS: RLayer.setCustomPropertyAttributes");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RLayer_WrapperSingletonInstance.setCustomPropertyAttributes(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RLayer);
  }

  
  else {
    
        print("RLayer.setCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLayer.getCustomPropertyAttributes = function() 
          
        {
          //print("JS: RLayer.getCustomPropertyAttributes");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RLayer_WrapperSingletonInstance.getCustomPropertyAttributes(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RLayer);
  }

  
  else {
    
        print("RLayer.getCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLayer.setMember = function() 
          
        {
          //print("JS: RLayer.setMember");
          
        };
      

        // static function 
        RLayer.setMemberX = function() 
          
        {
          //print("JS: RLayer.setMemberX");
          
        };
      

        // static function 
        RLayer.setMemberY = function() 
          
        {
          //print("JS: RLayer.setMemberY");
          
        };
      

        // static function 
        RLayer.setMemberZ = function() 
          
        {
          //print("JS: RLayer.setMemberZ");
          
        };
      

        // static function 
        RLayer.setMemberVector = function() 
          
        {
          //print("JS: RLayer.setMemberVector");
          
        };
      

        // static function 
        RLayer.init = function() 
          
        {
          //print("JS: RLayer.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLayer_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RLayer);
  }

  
  else {
    
        print("RLayer.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLayer.getRtti = function() 
          
        {
          //print("JS: RLayer.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLayer_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RLayer);
  }

  
  else {
    
        print("RLayer.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLayer.getHierarchySeparator = function() 
          
        {
          //print("JS: RLayer.getHierarchySeparator");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RLayer_WrapperSingletonInstance.getHierarchySeparator(
                  
                );
              

        //copyProperties(this, wrapper, RLayer);
  }

  
  else {
    
        print("RLayer.getHierarchySeparator(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLayer.hasChildLayersStatic = function() 
          
        {
          //print("JS: RLayer.hasChildLayersStatic");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RLayer_WrapperSingletonInstance.hasChildLayersStatic(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RLayer);
  }

  
  else {
    
        print("RLayer.hasChildLayersStatic(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLayer.getChildLayerNamesStatic = function() 
          
        {
          //print("JS: RLayer.getChildLayerNamesStatic");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RLayer_WrapperSingletonInstance.getChildLayerNamesStatic(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RLayer);
  }

  
  else {
    
        print("RLayer.getChildLayerNamesStatic(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLayer.getParentLayerNameStatic = function() 
          
        {
          //print("JS: RLayer.getParentLayerNameStatic");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RLayer_WrapperSingletonInstance.getParentLayerNameStatic(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RLayer);
  }

  
  else {
    
        print("RLayer.getParentLayerNameStatic(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLayer.getShortLayerNameStatic = function() 
          
        {
          //print("JS: RLayer.getShortLayerNameStatic");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RLayer_WrapperSingletonInstance.getShortLayerNameStatic(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RLayer);
  }

  
  else {
    
        print("RLayer.getShortLayerNameStatic(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLayer.getLayerNameHierarchyStatic = function() 
          
        {
          //print("JS: RLayer.getLayerNameHierarchyStatic");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RLayer_WrapperSingletonInstance.getLayerNameHierarchyStatic(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RLayer);
  }

  
  else {
    
        print("RLayer.getLayerNameHierarchyStatic(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RLayer.isChildLayerOfStatic = function() 
          
        {
          //print("JS: RLayer.isChildLayerOfStatic");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RLayer_WrapperSingletonInstance.isChildLayerOfStatic(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RLayer);
  }

  
  else {
    
        print("RLayer.isChildLayerOfStatic(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RLayer.INVALID_ID = 
  RLayer_WrapperSingletonInstance.INVALID_ID;
RLayer.INVALID_HANDLE = 
  RLayer_WrapperSingletonInstance.INVALID_HANDLE;
RLayer.PropertyCustom = 
  RLayer_WrapperSingletonInstance.PropertyCustom;
RLayer.PropertyType = 
  RLayer_WrapperSingletonInstance.PropertyType;
RLayer.PropertyHandle = 
  RLayer_WrapperSingletonInstance.PropertyHandle;
RLayer.PropertyProtected = 
  RLayer_WrapperSingletonInstance.PropertyProtected;
RLayer.PropertyWorkingSet = 
  RLayer_WrapperSingletonInstance.PropertyWorkingSet;
RLayer.PropertySelected = 
  RLayer_WrapperSingletonInstance.PropertySelected;
RLayer.PropertyInvisible = 
  RLayer_WrapperSingletonInstance.PropertyInvisible;


      // copy function:
      //RLayer.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RLayer.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    