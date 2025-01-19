
      // auto generated
      //var self;

      // class constructor:
      function RXLineEntity() {
        

        // should be RXLineEntity_BaseJs.call(this, engine):
        //RXLineEntity.prototype = new RXLineEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RXLineEntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RXLineEntity);
            //}
          }
          else {
            qWarning("RXLineEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RXLineEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RXLineEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RXLineEntity);
  }

  
  else {
    
        print("RXLineEntity(): wrong number / type of arguments");
      
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

      //RXLineEntity.prototype = new RXLineEntity_BaseJs(engine);
      //RXLineEntity.prototype = new RXLineEntity_Wrapper(engine);
      RXLineEntity.prototype = new Object();

      RXLineEntity.prototype.toString = function() {
          //return "RXLineEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RXLineEntity [JS]";
        };
      RXLineEntity.getObjectType = function() {
        return RJSType_RXLineEntity.getIdStatic();
      };

      RXLineEntity.prototype.getObjectType = function() {
        return RJSType_RXLineEntity.getIdStatic();
      };

      RXLineEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RXLineEntity.getIdStatic()) {
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
        RXLineEntity.init = function() 
          
        {
          //print("JS: RXLineEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RXLineEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RXLineEntity);
  }

  
  else {
    
        print("RXLineEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLineEntity.getRtti = function() 
          
        {
          //print("JS: RXLineEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RXLineEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RXLineEntity);
  }

  
  else {
    
        print("RXLineEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RXLineEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RXLineEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RXLineEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RXLineEntity);
  }

  
  else {
    
        print("RXLineEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RXLineEntity.INVALID_ID = 
  RXLineEntity_WrapperSingletonInstance.INVALID_ID;
RXLineEntity.INVALID_HANDLE = 
  RXLineEntity_WrapperSingletonInstance.INVALID_HANDLE;
RXLineEntity.PropertySelected = 
  RXLineEntity_WrapperSingletonInstance.PropertySelected;
RXLineEntity.PropertyInvisible = 
  RXLineEntity_WrapperSingletonInstance.PropertyInvisible;
RXLineEntity.PropertyParentId = 
  RXLineEntity_WrapperSingletonInstance.PropertyParentId;
RXLineEntity.PropertyMinX = 
  RXLineEntity_WrapperSingletonInstance.PropertyMinX;
RXLineEntity.PropertyMinY = 
  RXLineEntity_WrapperSingletonInstance.PropertyMinY;
RXLineEntity.PropertyMaxX = 
  RXLineEntity_WrapperSingletonInstance.PropertyMaxX;
RXLineEntity.PropertyMaxY = 
  RXLineEntity_WrapperSingletonInstance.PropertyMaxY;
RXLineEntity.PropertySizeX = 
  RXLineEntity_WrapperSingletonInstance.PropertySizeX;
RXLineEntity.PropertySizeY = 
  RXLineEntity_WrapperSingletonInstance.PropertySizeY;
RXLineEntity.PropertyCustom = 
  RXLineEntity_WrapperSingletonInstance.PropertyCustom;
RXLineEntity.PropertyHandle = 
  RXLineEntity_WrapperSingletonInstance.PropertyHandle;
RXLineEntity.PropertyProtected = 
  RXLineEntity_WrapperSingletonInstance.PropertyProtected;
RXLineEntity.PropertyWorkingSet = 
  RXLineEntity_WrapperSingletonInstance.PropertyWorkingSet;
RXLineEntity.PropertyType = 
  RXLineEntity_WrapperSingletonInstance.PropertyType;
RXLineEntity.PropertyBlock = 
  RXLineEntity_WrapperSingletonInstance.PropertyBlock;
RXLineEntity.PropertyLayer = 
  RXLineEntity_WrapperSingletonInstance.PropertyLayer;
RXLineEntity.PropertyLinetype = 
  RXLineEntity_WrapperSingletonInstance.PropertyLinetype;
RXLineEntity.PropertyLinetypeScale = 
  RXLineEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RXLineEntity.PropertyLineweight = 
  RXLineEntity_WrapperSingletonInstance.PropertyLineweight;
RXLineEntity.PropertyColor = 
  RXLineEntity_WrapperSingletonInstance.PropertyColor;
RXLineEntity.PropertyDisplayedColor = 
  RXLineEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RXLineEntity.PropertyDrawOrder = 
  RXLineEntity_WrapperSingletonInstance.PropertyDrawOrder;
RXLineEntity.PropertyBasePointX = 
  RXLineEntity_WrapperSingletonInstance.PropertyBasePointX;
RXLineEntity.PropertyBasePointY = 
  RXLineEntity_WrapperSingletonInstance.PropertyBasePointY;
RXLineEntity.PropertyBasePointZ = 
  RXLineEntity_WrapperSingletonInstance.PropertyBasePointZ;
RXLineEntity.PropertySecondPointX = 
  RXLineEntity_WrapperSingletonInstance.PropertySecondPointX;
RXLineEntity.PropertySecondPointY = 
  RXLineEntity_WrapperSingletonInstance.PropertySecondPointY;
RXLineEntity.PropertySecondPointZ = 
  RXLineEntity_WrapperSingletonInstance.PropertySecondPointZ;
RXLineEntity.PropertyDirectionX = 
  RXLineEntity_WrapperSingletonInstance.PropertyDirectionX;
RXLineEntity.PropertyDirectionY = 
  RXLineEntity_WrapperSingletonInstance.PropertyDirectionY;
RXLineEntity.PropertyDirectionZ = 
  RXLineEntity_WrapperSingletonInstance.PropertyDirectionZ;
RXLineEntity.PropertyAngle = 
  RXLineEntity_WrapperSingletonInstance.PropertyAngle;
RXLineEntity.PropertyFixedAngle = 
  RXLineEntity_WrapperSingletonInstance.PropertyFixedAngle;


      // copy function:
      //RXLineEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RXLineEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    