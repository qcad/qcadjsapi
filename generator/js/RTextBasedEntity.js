
      // auto generated
      //var self;

      // class constructor:
      function RTextBasedEntity() {
        

        // should be RTextBasedEntity_BaseJs.call(this, engine):
        //RTextBasedEntity.prototype = new RTextBasedEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTextBasedEntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RTextBasedEntity);
            //}
          }
          else {
            qWarning("RTextBasedEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("RTextBasedEntity.js: No constructor found for class RTextBasedEntity");
            
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

      //RTextBasedEntity.prototype = new RTextBasedEntity_BaseJs(engine);
      //RTextBasedEntity.prototype = new RTextBasedEntity_Wrapper(engine);
      RTextBasedEntity.prototype = new Object();

      RTextBasedEntity.prototype.toString = function() {
          //return "RTextBasedEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTextBasedEntity [JS]";
        };
      RTextBasedEntity.getObjectType = function() {
        return RJSType_RTextBasedEntity.getIdStatic();
      };

      RTextBasedEntity.prototype.getObjectType = function() {
        return RJSType_RTextBasedEntity.getIdStatic();
      };

      RTextBasedEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTextBasedEntity.getIdStatic()) {
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
        RTextBasedEntity.init = function() 
          
        {
          //print("JS: RTextBasedEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RTextBasedEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RTextBasedEntity);
  }

  
  else {
    
        print("RTextBasedEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextBasedEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RTextBasedEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RTextBasedEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RTextBasedEntity);
  }

  
  else {
    
        print("RTextBasedEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RTextBasedEntity.INVALID_ID = 
  RTextBasedEntity_WrapperSingletonInstance.INVALID_ID;
RTextBasedEntity.INVALID_HANDLE = 
  RTextBasedEntity_WrapperSingletonInstance.INVALID_HANDLE;
RTextBasedEntity.PropertySelected = 
  RTextBasedEntity_WrapperSingletonInstance.PropertySelected;
RTextBasedEntity.PropertyInvisible = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyInvisible;
RTextBasedEntity.PropertyProtected = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyProtected;
RTextBasedEntity.PropertyWorkingSet = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyWorkingSet;
RTextBasedEntity.PropertyParentId = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyParentId;
RTextBasedEntity.PropertyMinX = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyMinX;
RTextBasedEntity.PropertyMinY = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyMinY;
RTextBasedEntity.PropertyMaxX = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyMaxX;
RTextBasedEntity.PropertyMaxY = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyMaxY;
RTextBasedEntity.PropertySizeX = 
  RTextBasedEntity_WrapperSingletonInstance.PropertySizeX;
RTextBasedEntity.PropertySizeY = 
  RTextBasedEntity_WrapperSingletonInstance.PropertySizeY;
RTextBasedEntity.PropertyCustom = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyCustom;
RTextBasedEntity.PropertyHandle = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyHandle;
RTextBasedEntity.PropertyType = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyType;
RTextBasedEntity.PropertyBlock = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyBlock;
RTextBasedEntity.PropertyLayer = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyLayer;
RTextBasedEntity.PropertyLinetype = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyLinetype;
RTextBasedEntity.PropertyLinetypeScale = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RTextBasedEntity.PropertyLineweight = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyLineweight;
RTextBasedEntity.PropertyColor = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyColor;
RTextBasedEntity.PropertyDisplayedColor = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RTextBasedEntity.PropertyDrawOrder = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyDrawOrder;
RTextBasedEntity.PropertySimple = 
  RTextBasedEntity_WrapperSingletonInstance.PropertySimple;
RTextBasedEntity.PropertyPositionX = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyPositionX;
RTextBasedEntity.PropertyPositionY = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyPositionY;
RTextBasedEntity.PropertyPositionZ = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyPositionZ;
RTextBasedEntity.PropertyText = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyText;
RTextBasedEntity.PropertyPlainText = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyPlainText;
RTextBasedEntity.PropertyFontName = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyFontName;
RTextBasedEntity.PropertyHeight = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyHeight;
RTextBasedEntity.PropertyWidth = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyWidth;
RTextBasedEntity.PropertyAngle = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyAngle;
RTextBasedEntity.PropertyXScale = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyXScale;
RTextBasedEntity.PropertyBold = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyBold;
RTextBasedEntity.PropertyItalic = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyItalic;
RTextBasedEntity.PropertyLineSpacingFactor = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyLineSpacingFactor;
RTextBasedEntity.PropertyHAlign = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyHAlign;
RTextBasedEntity.PropertyVAlign = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyVAlign;
RTextBasedEntity.PropertyBackward = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyBackward;
RTextBasedEntity.PropertyUpsideDown = 
  RTextBasedEntity_WrapperSingletonInstance.PropertyUpsideDown;


      // copy function:
      //RTextBasedEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTextBasedEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    