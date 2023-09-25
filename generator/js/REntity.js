
      // auto generated
      //var self;

      // class constructor:
      function REntity() {
        

        // should be REntity_BaseJs.call(this, engine):
        //REntity.prototype = new REntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_REntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, REntity);
            //}
          }
          else {
            qWarning("REntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("REntity.js: No constructor found for class REntity");
            
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

      //REntity.prototype = new REntity_BaseJs(engine);
      //REntity.prototype = new REntity_Wrapper(engine);
      REntity.prototype = new Object();

      REntity.prototype.toString = function() {
          //return "REntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "REntity [JS]";
        };
      REntity.getObjectType = function() {
        return RJSType_REntity.getIdStatic();
      };

      REntity.prototype.getObjectType = function() {
        return RJSType_REntity.getIdStatic();
      };

      REntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_REntity.getIdStatic()) {
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
        REntity.setCustomPropertyAttributes = function() 
          
        {
          //print("JS: REntity.setCustomPropertyAttributes");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return REntity_WrapperSingletonInstance.setCustomPropertyAttributes(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, REntity);
  }

  
  else {
    
        print("REntity.setCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REntity.getCustomPropertyAttributes = function() 
          
        {
          //print("JS: REntity.getCustomPropertyAttributes");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return REntity_WrapperSingletonInstance.getCustomPropertyAttributes(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, REntity);
  }

  
  else {
    
        print("REntity.getCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REntity.setMember = function() 
          
        {
          //print("JS: REntity.setMember");
          
        };
      

        // static function 
        REntity.setMemberX = function() 
          
        {
          //print("JS: REntity.setMemberX");
          
        };
      

        // static function 
        REntity.setMemberY = function() 
          
        {
          //print("JS: REntity.setMemberY");
          
        };
      

        // static function 
        REntity.setMemberZ = function() 
          
        {
          //print("JS: REntity.setMemberZ");
          
        };
      

        // static function 
        REntity.setMemberVector = function() 
          
        {
          //print("JS: REntity.setMemberVector");
          
        };
      

        // static function 
        REntity.getRtti = function() 
          
        {
          //print("JS: REntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return REntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, REntity);
  }

  
  else {
    
        print("REntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REntity.init = function() 
          
        {
          //print("JS: REntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return REntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, REntity);
  }

  
  else {
    
        print("REntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: REntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return REntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, REntity);
  }

  
  else {
    
        print("REntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REntity.isComplex = function() 
          
        {
          //print("JS: REntity.isComplex");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return REntity_WrapperSingletonInstance.isComplex(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, REntity);
  }

  
  else {
    
        print("REntity.isComplex(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REntity.isDimension = function() 
          
        {
          //print("JS: REntity.isDimension");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return REntity_WrapperSingletonInstance.isDimension(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, REntity);
  }

  
  else {
    
        print("REntity.isDimension(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        REntity.isTextBased = function() 
          
        {
          //print("JS: REntity.isTextBased");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return REntity_WrapperSingletonInstance.isTextBased(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, REntity);
  }

  
  else {
    
        print("REntity.isTextBased(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      REntity.INVALID_ID = 
  REntity_WrapperSingletonInstance.INVALID_ID;
REntity.INVALID_HANDLE = 
  REntity_WrapperSingletonInstance.INVALID_HANDLE;
REntity.PropertySelected = 
  REntity_WrapperSingletonInstance.PropertySelected;
REntity.PropertyInvisible = 
  REntity_WrapperSingletonInstance.PropertyInvisible;
REntity.PropertyCustom = 
  REntity_WrapperSingletonInstance.PropertyCustom;
REntity.PropertyHandle = 
  REntity_WrapperSingletonInstance.PropertyHandle;
REntity.PropertyProtected = 
  REntity_WrapperSingletonInstance.PropertyProtected;
REntity.PropertyWorkingSet = 
  REntity_WrapperSingletonInstance.PropertyWorkingSet;
REntity.PropertyType = 
  REntity_WrapperSingletonInstance.PropertyType;
REntity.PropertyBlock = 
  REntity_WrapperSingletonInstance.PropertyBlock;
REntity.PropertyLayer = 
  REntity_WrapperSingletonInstance.PropertyLayer;
REntity.PropertyLinetype = 
  REntity_WrapperSingletonInstance.PropertyLinetype;
REntity.PropertyLinetypeScale = 
  REntity_WrapperSingletonInstance.PropertyLinetypeScale;
REntity.PropertyLineweight = 
  REntity_WrapperSingletonInstance.PropertyLineweight;
REntity.PropertyColor = 
  REntity_WrapperSingletonInstance.PropertyColor;
REntity.PropertyDisplayedColor = 
  REntity_WrapperSingletonInstance.PropertyDisplayedColor;
REntity.PropertyDrawOrder = 
  REntity_WrapperSingletonInstance.PropertyDrawOrder;
REntity.PropertyParentId = 
  REntity_WrapperSingletonInstance.PropertyParentId;
REntity.PropertyMinX = 
  REntity_WrapperSingletonInstance.PropertyMinX;
REntity.PropertyMinY = 
  REntity_WrapperSingletonInstance.PropertyMinY;
REntity.PropertyMaxX = 
  REntity_WrapperSingletonInstance.PropertyMaxX;
REntity.PropertyMaxY = 
  REntity_WrapperSingletonInstance.PropertyMaxY;
REntity.PropertySizeX = 
  REntity_WrapperSingletonInstance.PropertySizeX;
REntity.PropertySizeY = 
  REntity_WrapperSingletonInstance.PropertySizeY;


      // copy function:
      //REntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //REntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    