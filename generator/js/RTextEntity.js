
      // auto generated
      //var self;

      // class constructor:
      function RTextEntity() {
        

        // should be RTextEntity_BaseJs.call(this, engine):
        //RTextEntity.prototype = new RTextEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTextEntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RTextEntity);
            //}
          }
          else {
            qWarning("RTextEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RTextEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RTextEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTextEntity);
  }

  
  else {
    
        print("RTextEntity(): wrong number / type of arguments");
      
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

      //RTextEntity.prototype = new RTextEntity_BaseJs(engine);
      //RTextEntity.prototype = new RTextEntity_Wrapper(engine);
      RTextEntity.prototype = new Object();

      RTextEntity.prototype.toString = function() {
          //return "RTextEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTextEntity [JS]";
        };
      RTextEntity.getObjectType = function() {
        return RJSType_RTextEntity.getIdStatic();
      };

      RTextEntity.prototype.getObjectType = function() {
        return RJSType_RTextEntity.getIdStatic();
      };

      RTextEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTextEntity.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_REntity.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RTextBasedEntity.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RTextEntity.init = function() 
          
        {
          //print("JS: RTextEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RTextEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RTextEntity);
  }

  
  else {
    
        print("RTextEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextEntity.getRtti = function() 
          
        {
          //print("JS: RTextEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RTextEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RTextEntity);
  }

  
  else {
    
        print("RTextEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RTextEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RTextEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RTextEntity);
  }

  
  else {
    
        print("RTextEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RTextEntity.INVALID_ID = 
  RTextEntity_WrapperSingletonInstance.INVALID_ID;
RTextEntity.INVALID_HANDLE = 
  RTextEntity_WrapperSingletonInstance.INVALID_HANDLE;
RTextEntity.PropertySelected = 
  RTextEntity_WrapperSingletonInstance.PropertySelected;
RTextEntity.PropertyInvisible = 
  RTextEntity_WrapperSingletonInstance.PropertyInvisible;
RTextEntity.PropertyParentId = 
  RTextEntity_WrapperSingletonInstance.PropertyParentId;
RTextEntity.PropertyMinX = 
  RTextEntity_WrapperSingletonInstance.PropertyMinX;
RTextEntity.PropertyMinY = 
  RTextEntity_WrapperSingletonInstance.PropertyMinY;
RTextEntity.PropertyMaxX = 
  RTextEntity_WrapperSingletonInstance.PropertyMaxX;
RTextEntity.PropertyMaxY = 
  RTextEntity_WrapperSingletonInstance.PropertyMaxY;
RTextEntity.PropertySizeX = 
  RTextEntity_WrapperSingletonInstance.PropertySizeX;
RTextEntity.PropertySizeY = 
  RTextEntity_WrapperSingletonInstance.PropertySizeY;
RTextEntity.PropertyCustom = 
  RTextEntity_WrapperSingletonInstance.PropertyCustom;
RTextEntity.PropertyHandle = 
  RTextEntity_WrapperSingletonInstance.PropertyHandle;
RTextEntity.PropertyProtected = 
  RTextEntity_WrapperSingletonInstance.PropertyProtected;
RTextEntity.PropertyWorkingSet = 
  RTextEntity_WrapperSingletonInstance.PropertyWorkingSet;
RTextEntity.PropertyType = 
  RTextEntity_WrapperSingletonInstance.PropertyType;
RTextEntity.PropertyBlock = 
  RTextEntity_WrapperSingletonInstance.PropertyBlock;
RTextEntity.PropertyLayer = 
  RTextEntity_WrapperSingletonInstance.PropertyLayer;
RTextEntity.PropertyLinetype = 
  RTextEntity_WrapperSingletonInstance.PropertyLinetype;
RTextEntity.PropertyLinetypeScale = 
  RTextEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RTextEntity.PropertyLineweight = 
  RTextEntity_WrapperSingletonInstance.PropertyLineweight;
RTextEntity.PropertyColor = 
  RTextEntity_WrapperSingletonInstance.PropertyColor;
RTextEntity.PropertyDisplayedColor = 
  RTextEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RTextEntity.PropertyDrawOrder = 
  RTextEntity_WrapperSingletonInstance.PropertyDrawOrder;
RTextEntity.PropertySimple = 
  RTextEntity_WrapperSingletonInstance.PropertySimple;
RTextEntity.PropertyPositionX = 
  RTextEntity_WrapperSingletonInstance.PropertyPositionX;
RTextEntity.PropertyPositionY = 
  RTextEntity_WrapperSingletonInstance.PropertyPositionY;
RTextEntity.PropertyPositionZ = 
  RTextEntity_WrapperSingletonInstance.PropertyPositionZ;
RTextEntity.PropertyText = 
  RTextEntity_WrapperSingletonInstance.PropertyText;
RTextEntity.PropertyPlainText = 
  RTextEntity_WrapperSingletonInstance.PropertyPlainText;
RTextEntity.PropertyFontName = 
  RTextEntity_WrapperSingletonInstance.PropertyFontName;
RTextEntity.PropertyHeight = 
  RTextEntity_WrapperSingletonInstance.PropertyHeight;
RTextEntity.PropertyWidth = 
  RTextEntity_WrapperSingletonInstance.PropertyWidth;
RTextEntity.PropertyAngle = 
  RTextEntity_WrapperSingletonInstance.PropertyAngle;
RTextEntity.PropertyXScale = 
  RTextEntity_WrapperSingletonInstance.PropertyXScale;
RTextEntity.PropertyBold = 
  RTextEntity_WrapperSingletonInstance.PropertyBold;
RTextEntity.PropertyItalic = 
  RTextEntity_WrapperSingletonInstance.PropertyItalic;
RTextEntity.PropertyLineSpacingFactor = 
  RTextEntity_WrapperSingletonInstance.PropertyLineSpacingFactor;
RTextEntity.PropertyHAlign = 
  RTextEntity_WrapperSingletonInstance.PropertyHAlign;
RTextEntity.PropertyVAlign = 
  RTextEntity_WrapperSingletonInstance.PropertyVAlign;
RTextEntity.PropertyBackward = 
  RTextEntity_WrapperSingletonInstance.PropertyBackward;
RTextEntity.PropertyUpsideDown = 
  RTextEntity_WrapperSingletonInstance.PropertyUpsideDown;


      // copy function:
      //RTextEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTextEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    