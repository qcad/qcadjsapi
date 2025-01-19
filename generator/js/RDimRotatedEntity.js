
      // auto generated
      //var self;

      // class constructor:
      function RDimRotatedEntity() {
        

        // should be RDimRotatedEntity_BaseJs.call(this, engine):
        //RDimRotatedEntity.prototype = new RDimRotatedEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimRotatedEntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RDimRotatedEntity);
            //}
          }
          else {
            qWarning("RDimRotatedEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RDimRotatedEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDimRotatedEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimRotatedEntity);
  }

  
  else {
    
        print("RDimRotatedEntity(): wrong number / type of arguments");
      
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

      //RDimRotatedEntity.prototype = new RDimRotatedEntity_BaseJs(engine);
      //RDimRotatedEntity.prototype = new RDimRotatedEntity_Wrapper(engine);
      RDimRotatedEntity.prototype = new Object();

      RDimRotatedEntity.prototype.toString = function() {
          //return "RDimRotatedEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimRotatedEntity [JS]";
        };
      RDimRotatedEntity.getObjectType = function() {
        return RJSType_RDimRotatedEntity.getIdStatic();
      };

      RDimRotatedEntity.prototype.getObjectType = function() {
        return RJSType_RDimRotatedEntity.getIdStatic();
      };

      RDimRotatedEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimRotatedEntity.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_REntity.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RDimensionEntity.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RDimLinearEntity.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RDimRotatedEntity.init = function() 
          
        {
          //print("JS: RDimRotatedEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimRotatedEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RDimRotatedEntity);
  }

  
  else {
    
        print("RDimRotatedEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimRotatedEntity.getRtti = function() 
          
        {
          //print("JS: RDimRotatedEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimRotatedEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RDimRotatedEntity);
  }

  
  else {
    
        print("RDimRotatedEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimRotatedEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RDimRotatedEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimRotatedEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RDimRotatedEntity);
  }

  
  else {
    
        print("RDimRotatedEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RDimRotatedEntity.INVALID_ID = 
  RDimRotatedEntity_WrapperSingletonInstance.INVALID_ID;
RDimRotatedEntity.INVALID_HANDLE = 
  RDimRotatedEntity_WrapperSingletonInstance.INVALID_HANDLE;
RDimRotatedEntity.PropertySelected = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertySelected;
RDimRotatedEntity.PropertyInvisible = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyInvisible;
RDimRotatedEntity.PropertyParentId = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyParentId;
RDimRotatedEntity.PropertyMinX = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyMinX;
RDimRotatedEntity.PropertyMinY = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyMinY;
RDimRotatedEntity.PropertyMaxX = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyMaxX;
RDimRotatedEntity.PropertyMaxY = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyMaxY;
RDimRotatedEntity.PropertySizeX = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertySizeX;
RDimRotatedEntity.PropertySizeY = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertySizeY;
RDimRotatedEntity.PropertyDefinitionPointX = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDefinitionPointX;
RDimRotatedEntity.PropertyDefinitionPointY = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDefinitionPointY;
RDimRotatedEntity.PropertyDefinitionPointZ = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDefinitionPointZ;
RDimRotatedEntity.PropertyAutoLabel = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyAutoLabel;
RDimRotatedEntity.PropertyDimaunit = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimaunit;
RDimRotatedEntity.PropertyDimadec = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimadec;
RDimRotatedEntity.PropertyDimazin = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimazin;
RDimRotatedEntity.PropertyCustom = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyCustom;
RDimRotatedEntity.PropertyHandle = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyHandle;
RDimRotatedEntity.PropertyProtected = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyProtected;
RDimRotatedEntity.PropertyWorkingSet = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyWorkingSet;
RDimRotatedEntity.PropertyType = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyType;
RDimRotatedEntity.PropertyBlock = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyBlock;
RDimRotatedEntity.PropertyLayer = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyLayer;
RDimRotatedEntity.PropertyLinetype = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyLinetype;
RDimRotatedEntity.PropertyLinetypeScale = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RDimRotatedEntity.PropertyLineweight = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyLineweight;
RDimRotatedEntity.PropertyColor = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyColor;
RDimRotatedEntity.PropertyDisplayedColor = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RDimRotatedEntity.PropertyDrawOrder = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDrawOrder;
RDimRotatedEntity.PropertyMiddleOfTextX = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyMiddleOfTextX;
RDimRotatedEntity.PropertyMiddleOfTextY = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyMiddleOfTextY;
RDimRotatedEntity.PropertyMiddleOfTextZ = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyMiddleOfTextZ;
RDimRotatedEntity.PropertyText = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyText;
RDimRotatedEntity.PropertyUpperTolerance = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyUpperTolerance;
RDimRotatedEntity.PropertyLowerTolerance = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyLowerTolerance;
RDimRotatedEntity.PropertyMeasuredValue = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyMeasuredValue;
RDimRotatedEntity.PropertyDimscale = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimscale;
RDimRotatedEntity.PropertyDimlfac = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimlfac;
RDimRotatedEntity.PropertyDimtxt = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimtxt;
RDimRotatedEntity.PropertyDimgap = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimgap;
RDimRotatedEntity.PropertyDimasz = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimasz;
RDimRotatedEntity.PropertyDimexe = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimexe;
RDimRotatedEntity.PropertyDimexo = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimexo;
RDimRotatedEntity.PropertyDimtad = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimtad;
RDimRotatedEntity.PropertyDimtih = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimtih;
RDimRotatedEntity.PropertyDimtsz = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimtsz;
RDimRotatedEntity.PropertyDimlunit = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimlunit;
RDimRotatedEntity.PropertyDimdec = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimdec;
RDimRotatedEntity.PropertyDimdsep = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimdsep;
RDimRotatedEntity.PropertyDimzin = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimzin;
RDimRotatedEntity.PropertyArchTick = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyArchTick;
RDimRotatedEntity.PropertyDimclrt = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimclrt;
RDimRotatedEntity.PropertyDimBlockName = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimBlockName;
RDimRotatedEntity.PropertyAutoTextPos = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyAutoTextPos;
RDimRotatedEntity.PropertyFontName = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyFontName;
RDimRotatedEntity.PropertyArrow1Flipped = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyArrow1Flipped;
RDimRotatedEntity.PropertyArrow2Flipped = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyArrow2Flipped;
RDimRotatedEntity.PropertyExtLineFix = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyExtLineFix;
RDimRotatedEntity.PropertyExtLineFixLength = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyExtLineFixLength;
RDimRotatedEntity.PropertyDimensionLinePosX = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimensionLinePosX;
RDimRotatedEntity.PropertyDimensionLinePosY = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimensionLinePosY;
RDimRotatedEntity.PropertyDimensionLinePosZ = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyDimensionLinePosZ;
RDimRotatedEntity.PropertyExtensionPoint1X = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyExtensionPoint1X;
RDimRotatedEntity.PropertyExtensionPoint1Y = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyExtensionPoint1Y;
RDimRotatedEntity.PropertyExtensionPoint1Z = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyExtensionPoint1Z;
RDimRotatedEntity.PropertyExtensionPoint2X = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyExtensionPoint2X;
RDimRotatedEntity.PropertyExtensionPoint2Y = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyExtensionPoint2Y;
RDimRotatedEntity.PropertyExtensionPoint2Z = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyExtensionPoint2Z;
RDimRotatedEntity.PropertyAngle = 
  RDimRotatedEntity_WrapperSingletonInstance.PropertyAngle;


      // copy function:
      //RDimRotatedEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimRotatedEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    