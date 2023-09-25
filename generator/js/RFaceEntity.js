
      // auto generated
      //var self;

      // class constructor:
      function RFaceEntity() {
        

        // should be RFaceEntity_BaseJs.call(this, engine):
        //RFaceEntity.prototype = new RFaceEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RFaceEntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RFaceEntity);
            //}
          }
          else {
            qWarning("RFaceEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RFaceEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RFaceEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RFaceEntity);
  }

  
  else {
    
        print("RFaceEntity(): wrong number / type of arguments");
      
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

      //RFaceEntity.prototype = new RFaceEntity_BaseJs(engine);
      //RFaceEntity.prototype = new RFaceEntity_Wrapper(engine);
      RFaceEntity.prototype = new Object();

      RFaceEntity.prototype.toString = function() {
          //return "RFaceEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RFaceEntity [JS]";
        };
      RFaceEntity.getObjectType = function() {
        return RJSType_RFaceEntity.getIdStatic();
      };

      RFaceEntity.prototype.getObjectType = function() {
        return RJSType_RFaceEntity.getIdStatic();
      };

      RFaceEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RFaceEntity.getIdStatic()) {
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
        RFaceEntity.setCustomPropertyAttributes = function() 
          
        {
          //print("JS: RFaceEntity.setCustomPropertyAttributes");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RFaceEntity_WrapperSingletonInstance.setCustomPropertyAttributes(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RFaceEntity);
  }

  
  else {
    
        print("RFaceEntity.setCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RFaceEntity.getCustomPropertyAttributes = function() 
          
        {
          //print("JS: RFaceEntity.getCustomPropertyAttributes");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RFaceEntity_WrapperSingletonInstance.getCustomPropertyAttributes(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RFaceEntity);
  }

  
  else {
    
        print("RFaceEntity.getCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RFaceEntity.setMember = function() 
          
        {
          //print("JS: RFaceEntity.setMember");
          
        };
      

        // static function 
        RFaceEntity.setMemberX = function() 
          
        {
          //print("JS: RFaceEntity.setMemberX");
          
        };
      

        // static function 
        RFaceEntity.setMemberY = function() 
          
        {
          //print("JS: RFaceEntity.setMemberY");
          
        };
      

        // static function 
        RFaceEntity.setMemberZ = function() 
          
        {
          //print("JS: RFaceEntity.setMemberZ");
          
        };
      

        // static function 
        RFaceEntity.setMemberVector = function() 
          
        {
          //print("JS: RFaceEntity.setMemberVector");
          
        };
      

        // static function 
        RFaceEntity.isComplex = function() 
          
        {
          //print("JS: RFaceEntity.isComplex");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RFaceEntity_WrapperSingletonInstance.isComplex(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RFaceEntity);
  }

  
  else {
    
        print("RFaceEntity.isComplex(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RFaceEntity.isDimension = function() 
          
        {
          //print("JS: RFaceEntity.isDimension");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RFaceEntity_WrapperSingletonInstance.isDimension(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RFaceEntity);
  }

  
  else {
    
        print("RFaceEntity.isDimension(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RFaceEntity.isTextBased = function() 
          
        {
          //print("JS: RFaceEntity.isTextBased");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RFaceEntity_WrapperSingletonInstance.isTextBased(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RFaceEntity);
  }

  
  else {
    
        print("RFaceEntity.isTextBased(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RFaceEntity.init = function() 
          
        {
          //print("JS: RFaceEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RFaceEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RFaceEntity);
  }

  
  else {
    
        print("RFaceEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RFaceEntity.getRtti = function() 
          
        {
          //print("JS: RFaceEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RFaceEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RFaceEntity);
  }

  
  else {
    
        print("RFaceEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RFaceEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RFaceEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RFaceEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RFaceEntity);
  }

  
  else {
    
        print("RFaceEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RFaceEntity.INVALID_ID = 
  RFaceEntity_WrapperSingletonInstance.INVALID_ID;
RFaceEntity.INVALID_HANDLE = 
  RFaceEntity_WrapperSingletonInstance.INVALID_HANDLE;
RFaceEntity.PropertySelected = 
  RFaceEntity_WrapperSingletonInstance.PropertySelected;
RFaceEntity.PropertyInvisible = 
  RFaceEntity_WrapperSingletonInstance.PropertyInvisible;
RFaceEntity.PropertyParentId = 
  RFaceEntity_WrapperSingletonInstance.PropertyParentId;
RFaceEntity.PropertyMinX = 
  RFaceEntity_WrapperSingletonInstance.PropertyMinX;
RFaceEntity.PropertyMinY = 
  RFaceEntity_WrapperSingletonInstance.PropertyMinY;
RFaceEntity.PropertyMaxX = 
  RFaceEntity_WrapperSingletonInstance.PropertyMaxX;
RFaceEntity.PropertyMaxY = 
  RFaceEntity_WrapperSingletonInstance.PropertyMaxY;
RFaceEntity.PropertySizeX = 
  RFaceEntity_WrapperSingletonInstance.PropertySizeX;
RFaceEntity.PropertySizeY = 
  RFaceEntity_WrapperSingletonInstance.PropertySizeY;
RFaceEntity.PropertyCustom = 
  RFaceEntity_WrapperSingletonInstance.PropertyCustom;
RFaceEntity.PropertyHandle = 
  RFaceEntity_WrapperSingletonInstance.PropertyHandle;
RFaceEntity.PropertyProtected = 
  RFaceEntity_WrapperSingletonInstance.PropertyProtected;
RFaceEntity.PropertyWorkingSet = 
  RFaceEntity_WrapperSingletonInstance.PropertyWorkingSet;
RFaceEntity.PropertyType = 
  RFaceEntity_WrapperSingletonInstance.PropertyType;
RFaceEntity.PropertyBlock = 
  RFaceEntity_WrapperSingletonInstance.PropertyBlock;
RFaceEntity.PropertyLayer = 
  RFaceEntity_WrapperSingletonInstance.PropertyLayer;
RFaceEntity.PropertyLinetype = 
  RFaceEntity_WrapperSingletonInstance.PropertyLinetype;
RFaceEntity.PropertyLinetypeScale = 
  RFaceEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RFaceEntity.PropertyLineweight = 
  RFaceEntity_WrapperSingletonInstance.PropertyLineweight;
RFaceEntity.PropertyColor = 
  RFaceEntity_WrapperSingletonInstance.PropertyColor;
RFaceEntity.PropertyDisplayedColor = 
  RFaceEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RFaceEntity.PropertyDrawOrder = 
  RFaceEntity_WrapperSingletonInstance.PropertyDrawOrder;
RFaceEntity.PropertyPoint1X = 
  RFaceEntity_WrapperSingletonInstance.PropertyPoint1X;
RFaceEntity.PropertyPoint1Y = 
  RFaceEntity_WrapperSingletonInstance.PropertyPoint1Y;
RFaceEntity.PropertyPoint1Z = 
  RFaceEntity_WrapperSingletonInstance.PropertyPoint1Z;
RFaceEntity.PropertyPoint2X = 
  RFaceEntity_WrapperSingletonInstance.PropertyPoint2X;
RFaceEntity.PropertyPoint2Y = 
  RFaceEntity_WrapperSingletonInstance.PropertyPoint2Y;
RFaceEntity.PropertyPoint2Z = 
  RFaceEntity_WrapperSingletonInstance.PropertyPoint2Z;
RFaceEntity.PropertyPoint3X = 
  RFaceEntity_WrapperSingletonInstance.PropertyPoint3X;
RFaceEntity.PropertyPoint3Y = 
  RFaceEntity_WrapperSingletonInstance.PropertyPoint3Y;
RFaceEntity.PropertyPoint3Z = 
  RFaceEntity_WrapperSingletonInstance.PropertyPoint3Z;
RFaceEntity.PropertyPoint4X = 
  RFaceEntity_WrapperSingletonInstance.PropertyPoint4X;
RFaceEntity.PropertyPoint4Y = 
  RFaceEntity_WrapperSingletonInstance.PropertyPoint4Y;
RFaceEntity.PropertyPoint4Z = 
  RFaceEntity_WrapperSingletonInstance.PropertyPoint4Z;
RFaceEntity.PropertyLength = 
  RFaceEntity_WrapperSingletonInstance.PropertyLength;
RFaceEntity.PropertyTotalLength = 
  RFaceEntity_WrapperSingletonInstance.PropertyTotalLength;


      // copy function:
      //RFaceEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RFaceEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    