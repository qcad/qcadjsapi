
      // auto generated
      //var self;

      // class constructor:
      function RPointEntity() {
        

        // should be RPointEntity_BaseJs.call(this, engine):
        //RPointEntity.prototype = new RPointEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RPointEntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RPointEntity);
            //}
          }
          else {
            qWarning("RPointEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RPointEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RPointEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPointEntity);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RPointEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RPointEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RPointEntity);
  }

  
  else {
    
        print("RPointEntity(): wrong number / type of arguments");
      
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

      //RPointEntity.prototype = new RPointEntity_BaseJs(engine);
      //RPointEntity.prototype = new RPointEntity_Wrapper(engine);
      RPointEntity.prototype = new Object();

      RPointEntity.prototype.toString = function() {
          //return "RPointEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RPointEntity [JS]";
        };
      RPointEntity.getObjectType = function() {
        return RJSType_RPointEntity.getIdStatic();
      };

      RPointEntity.prototype.getObjectType = function() {
        return RJSType_RPointEntity.getIdStatic();
      };

      RPointEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RPointEntity.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_REntity.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RPointEntity.init = function() 
          
        {
          //print("JS: RPointEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPointEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RPointEntity);
  }

  
  else {
    
        print("RPointEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPointEntity.getRtti = function() 
          
        {
          //print("JS: RPointEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPointEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RPointEntity);
  }

  
  else {
    
        print("RPointEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RPointEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RPointEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RPointEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RPointEntity);
  }

  
  else {
    
        print("RPointEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RPointEntity.INVALID_ID = 
  RPointEntity_WrapperSingletonInstance.INVALID_ID;
RPointEntity.INVALID_HANDLE = 
  RPointEntity_WrapperSingletonInstance.INVALID_HANDLE;
RPointEntity.PropertySelected = 
  RPointEntity_WrapperSingletonInstance.PropertySelected;
RPointEntity.PropertyInvisible = 
  RPointEntity_WrapperSingletonInstance.PropertyInvisible;
RPointEntity.PropertyParentId = 
  RPointEntity_WrapperSingletonInstance.PropertyParentId;
RPointEntity.PropertyMinX = 
  RPointEntity_WrapperSingletonInstance.PropertyMinX;
RPointEntity.PropertyMinY = 
  RPointEntity_WrapperSingletonInstance.PropertyMinY;
RPointEntity.PropertyMaxX = 
  RPointEntity_WrapperSingletonInstance.PropertyMaxX;
RPointEntity.PropertyMaxY = 
  RPointEntity_WrapperSingletonInstance.PropertyMaxY;
RPointEntity.PropertySizeX = 
  RPointEntity_WrapperSingletonInstance.PropertySizeX;
RPointEntity.PropertySizeY = 
  RPointEntity_WrapperSingletonInstance.PropertySizeY;
RPointEntity.PropertyCustom = 
  RPointEntity_WrapperSingletonInstance.PropertyCustom;
RPointEntity.PropertyHandle = 
  RPointEntity_WrapperSingletonInstance.PropertyHandle;
RPointEntity.PropertyProtected = 
  RPointEntity_WrapperSingletonInstance.PropertyProtected;
RPointEntity.PropertyWorkingSet = 
  RPointEntity_WrapperSingletonInstance.PropertyWorkingSet;
RPointEntity.PropertyType = 
  RPointEntity_WrapperSingletonInstance.PropertyType;
RPointEntity.PropertyBlock = 
  RPointEntity_WrapperSingletonInstance.PropertyBlock;
RPointEntity.PropertyLayer = 
  RPointEntity_WrapperSingletonInstance.PropertyLayer;
RPointEntity.PropertyLinetype = 
  RPointEntity_WrapperSingletonInstance.PropertyLinetype;
RPointEntity.PropertyLinetypeScale = 
  RPointEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RPointEntity.PropertyLineweight = 
  RPointEntity_WrapperSingletonInstance.PropertyLineweight;
RPointEntity.PropertyColor = 
  RPointEntity_WrapperSingletonInstance.PropertyColor;
RPointEntity.PropertyDisplayedColor = 
  RPointEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RPointEntity.PropertyDrawOrder = 
  RPointEntity_WrapperSingletonInstance.PropertyDrawOrder;
RPointEntity.PropertyPositionX = 
  RPointEntity_WrapperSingletonInstance.PropertyPositionX;
RPointEntity.PropertyPositionY = 
  RPointEntity_WrapperSingletonInstance.PropertyPositionY;
RPointEntity.PropertyPositionZ = 
  RPointEntity_WrapperSingletonInstance.PropertyPositionZ;


      // copy function:
      //RPointEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RPointEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    