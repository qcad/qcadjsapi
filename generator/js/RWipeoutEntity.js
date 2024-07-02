
      // auto generated
      //var self;

      // class constructor:
      function RWipeoutEntity() {
        

        // should be RWipeoutEntity_BaseJs.call(this, engine):
        //RWipeoutEntity.prototype = new RWipeoutEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RWipeoutEntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RWipeoutEntity);
            //}
          }
          else {
            qWarning("RWipeoutEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RWipeoutEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RWipeoutEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RWipeoutEntity);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RWipeoutEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RWipeoutEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RWipeoutEntity);
  }

  
  else {
    
        print("RWipeoutEntity(): wrong number / type of arguments");
      
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

      //RWipeoutEntity.prototype = new RWipeoutEntity_BaseJs(engine);
      //RWipeoutEntity.prototype = new RWipeoutEntity_Wrapper(engine);
      RWipeoutEntity.prototype = new Object();

      RWipeoutEntity.prototype.toString = function() {
          //return "RWipeoutEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RWipeoutEntity [JS]";
        };
      RWipeoutEntity.getObjectType = function() {
        return RJSType_RWipeoutEntity.getIdStatic();
      };

      RWipeoutEntity.prototype.getObjectType = function() {
        return RJSType_RWipeoutEntity.getIdStatic();
      };

      RWipeoutEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RWipeoutEntity.getIdStatic()) {
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
        RWipeoutEntity.setCustomPropertyAttributes = function() 
          
        {
          //print("JS: RWipeoutEntity.setCustomPropertyAttributes");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RWipeoutEntity_WrapperSingletonInstance.setCustomPropertyAttributes(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RWipeoutEntity);
  }

  
  else {
    
        print("RWipeoutEntity.setCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RWipeoutEntity.getCustomPropertyAttributes = function() 
          
        {
          //print("JS: RWipeoutEntity.getCustomPropertyAttributes");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RWipeoutEntity_WrapperSingletonInstance.getCustomPropertyAttributes(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RWipeoutEntity);
  }

  
  else {
    
        print("RWipeoutEntity.getCustomPropertyAttributes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RWipeoutEntity.setMember = function() 
          
        {
          //print("JS: RWipeoutEntity.setMember");
          
        };
      

        // static function 
        RWipeoutEntity.setMemberX = function() 
          
        {
          //print("JS: RWipeoutEntity.setMemberX");
          
        };
      

        // static function 
        RWipeoutEntity.setMemberY = function() 
          
        {
          //print("JS: RWipeoutEntity.setMemberY");
          
        };
      

        // static function 
        RWipeoutEntity.setMemberZ = function() 
          
        {
          //print("JS: RWipeoutEntity.setMemberZ");
          
        };
      

        // static function 
        RWipeoutEntity.setMemberVector = function() 
          
        {
          //print("JS: RWipeoutEntity.setMemberVector");
          
        };
      

        // static function 
        RWipeoutEntity.isComplex = function() 
          
        {
          //print("JS: RWipeoutEntity.isComplex");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RWipeoutEntity_WrapperSingletonInstance.isComplex(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RWipeoutEntity);
  }

  
  else {
    
        print("RWipeoutEntity.isComplex(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RWipeoutEntity.isDimension = function() 
          
        {
          //print("JS: RWipeoutEntity.isDimension");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RWipeoutEntity_WrapperSingletonInstance.isDimension(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RWipeoutEntity);
  }

  
  else {
    
        print("RWipeoutEntity.isDimension(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RWipeoutEntity.isTextBased = function() 
          
        {
          //print("JS: RWipeoutEntity.isTextBased");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RWipeoutEntity_WrapperSingletonInstance.isTextBased(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RWipeoutEntity);
  }

  
  else {
    
        print("RWipeoutEntity.isTextBased(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RWipeoutEntity.init = function() 
          
        {
          //print("JS: RWipeoutEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RWipeoutEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RWipeoutEntity);
  }

  
  else {
    
        print("RWipeoutEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RWipeoutEntity.getRtti = function() 
          
        {
          //print("JS: RWipeoutEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RWipeoutEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RWipeoutEntity);
  }

  
  else {
    
        print("RWipeoutEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RWipeoutEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RWipeoutEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RWipeoutEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RWipeoutEntity);
  }

  
  else {
    
        print("RWipeoutEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RWipeoutEntity.INVALID_ID = 
  RWipeoutEntity_WrapperSingletonInstance.INVALID_ID;
RWipeoutEntity.INVALID_HANDLE = 
  RWipeoutEntity_WrapperSingletonInstance.INVALID_HANDLE;
RWipeoutEntity.PropertySelected = 
  RWipeoutEntity_WrapperSingletonInstance.PropertySelected;
RWipeoutEntity.PropertyInvisible = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyInvisible;
RWipeoutEntity.PropertyParentId = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyParentId;
RWipeoutEntity.PropertyMinX = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyMinX;
RWipeoutEntity.PropertyMinY = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyMinY;
RWipeoutEntity.PropertyMaxX = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyMaxX;
RWipeoutEntity.PropertyMaxY = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyMaxY;
RWipeoutEntity.PropertySizeX = 
  RWipeoutEntity_WrapperSingletonInstance.PropertySizeX;
RWipeoutEntity.PropertySizeY = 
  RWipeoutEntity_WrapperSingletonInstance.PropertySizeY;
RWipeoutEntity.PropertyCustom = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyCustom;
RWipeoutEntity.PropertyHandle = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyHandle;
RWipeoutEntity.PropertyProtected = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyProtected;
RWipeoutEntity.PropertyWorkingSet = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyWorkingSet;
RWipeoutEntity.PropertyType = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyType;
RWipeoutEntity.PropertyBlock = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyBlock;
RWipeoutEntity.PropertyLayer = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyLayer;
RWipeoutEntity.PropertyLinetype = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyLinetype;
RWipeoutEntity.PropertyLinetypeScale = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RWipeoutEntity.PropertyLineweight = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyLineweight;
RWipeoutEntity.PropertyColor = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyColor;
RWipeoutEntity.PropertyDisplayedColor = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RWipeoutEntity.PropertyDrawOrder = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyDrawOrder;
RWipeoutEntity.PropertyVertexNX = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyVertexNX;
RWipeoutEntity.PropertyVertexNY = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyVertexNY;
RWipeoutEntity.PropertyVertexNZ = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyVertexNZ;
RWipeoutEntity.PropertyBulgeN = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyBulgeN;
RWipeoutEntity.PropertyBaseAngle = 
  RWipeoutEntity_WrapperSingletonInstance.PropertyBaseAngle;
RWipeoutEntity.PropertySize1 = 
  RWipeoutEntity_WrapperSingletonInstance.PropertySize1;
RWipeoutEntity.PropertySize2 = 
  RWipeoutEntity_WrapperSingletonInstance.PropertySize2;


      // copy function:
      //RWipeoutEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RWipeoutEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    