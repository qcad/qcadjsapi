
      // auto generated
      //var self;

      // class constructor:
      function RDimArcLengthEntity() {
        

        // should be RDimArcLengthEntity_BaseJs.call(this, engine):
        //RDimArcLengthEntity.prototype = new RDimArcLengthEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimArcLengthEntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RDimArcLengthEntity);
            //}
          }
          else {
            qWarning("RDimArcLengthEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RDimArcLengthEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDimArcLengthEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimArcLengthEntity);
  }

  
  else {
    
        print("RDimArcLengthEntity(): wrong number / type of arguments");
      
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

      //RDimArcLengthEntity.prototype = new RDimArcLengthEntity_BaseJs(engine);
      //RDimArcLengthEntity.prototype = new RDimArcLengthEntity_Wrapper(engine);
      RDimArcLengthEntity.prototype = new Object();

      RDimArcLengthEntity.prototype.toString = function() {
          //return "RDimArcLengthEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimArcLengthEntity [JS]";
        };
      RDimArcLengthEntity.getObjectType = function() {
        return RJSType_RDimArcLengthEntity.getIdStatic();
      };

      RDimArcLengthEntity.prototype.getObjectType = function() {
        return RJSType_RDimArcLengthEntity.getIdStatic();
      };

      RDimArcLengthEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimArcLengthEntity.getIdStatic()) {
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
        
          if (t===RJSType_RDimAngularEntity.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RDimArcLengthEntity.init = function() 
          
        {
          //print("JS: RDimArcLengthEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimArcLengthEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RDimArcLengthEntity);
  }

  
  else {
    
        print("RDimArcLengthEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimArcLengthEntity.getRtti = function() 
          
        {
          //print("JS: RDimArcLengthEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimArcLengthEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RDimArcLengthEntity);
  }

  
  else {
    
        print("RDimArcLengthEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimArcLengthEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RDimArcLengthEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimArcLengthEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RDimArcLengthEntity);
  }

  
  else {
    
        print("RDimArcLengthEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RDimArcLengthEntity.INVALID_ID = 
  RDimArcLengthEntity_WrapperSingletonInstance.INVALID_ID;
RDimArcLengthEntity.INVALID_HANDLE = 
  RDimArcLengthEntity_WrapperSingletonInstance.INVALID_HANDLE;
RDimArcLengthEntity.PropertySelected = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertySelected;
RDimArcLengthEntity.PropertyInvisible = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyInvisible;
RDimArcLengthEntity.PropertyParentId = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyParentId;
RDimArcLengthEntity.PropertyMinX = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyMinX;
RDimArcLengthEntity.PropertyMinY = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyMinY;
RDimArcLengthEntity.PropertyMaxX = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyMaxX;
RDimArcLengthEntity.PropertyMaxY = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyMaxY;
RDimArcLengthEntity.PropertySizeX = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertySizeX;
RDimArcLengthEntity.PropertySizeY = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertySizeY;
RDimArcLengthEntity.PropertyDefinitionPointX = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDefinitionPointX;
RDimArcLengthEntity.PropertyDefinitionPointY = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDefinitionPointY;
RDimArcLengthEntity.PropertyDefinitionPointZ = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDefinitionPointZ;
RDimArcLengthEntity.PropertyAutoLabel = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyAutoLabel;
RDimArcLengthEntity.PropertyDimaunit = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimaunit;
RDimArcLengthEntity.PropertyDimadec = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimadec;
RDimArcLengthEntity.PropertyDimazin = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimazin;
RDimArcLengthEntity.PropertyCustom = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyCustom;
RDimArcLengthEntity.PropertyHandle = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyHandle;
RDimArcLengthEntity.PropertyProtected = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyProtected;
RDimArcLengthEntity.PropertyWorkingSet = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyWorkingSet;
RDimArcLengthEntity.PropertyType = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyType;
RDimArcLengthEntity.PropertyBlock = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyBlock;
RDimArcLengthEntity.PropertyLayer = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyLayer;
RDimArcLengthEntity.PropertyLinetype = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyLinetype;
RDimArcLengthEntity.PropertyLinetypeScale = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RDimArcLengthEntity.PropertyLineweight = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyLineweight;
RDimArcLengthEntity.PropertyColor = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyColor;
RDimArcLengthEntity.PropertyDisplayedColor = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RDimArcLengthEntity.PropertyDrawOrder = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDrawOrder;
RDimArcLengthEntity.PropertyMiddleOfTextX = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyMiddleOfTextX;
RDimArcLengthEntity.PropertyMiddleOfTextY = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyMiddleOfTextY;
RDimArcLengthEntity.PropertyMiddleOfTextZ = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyMiddleOfTextZ;
RDimArcLengthEntity.PropertyText = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyText;
RDimArcLengthEntity.PropertyUpperTolerance = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyUpperTolerance;
RDimArcLengthEntity.PropertyLowerTolerance = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyLowerTolerance;
RDimArcLengthEntity.PropertyMeasuredValue = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyMeasuredValue;
RDimArcLengthEntity.PropertyDimscale = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimscale;
RDimArcLengthEntity.PropertyDimlfac = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimlfac;
RDimArcLengthEntity.PropertyDimtxt = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimtxt;
RDimArcLengthEntity.PropertyDimgap = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimgap;
RDimArcLengthEntity.PropertyDimasz = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimasz;
RDimArcLengthEntity.PropertyDimexe = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimexe;
RDimArcLengthEntity.PropertyDimexo = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimexo;
RDimArcLengthEntity.PropertyDimtad = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimtad;
RDimArcLengthEntity.PropertyDimtih = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimtih;
RDimArcLengthEntity.PropertyDimtsz = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimtsz;
RDimArcLengthEntity.PropertyDimlunit = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimlunit;
RDimArcLengthEntity.PropertyDimdec = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimdec;
RDimArcLengthEntity.PropertyDimdsep = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimdsep;
RDimArcLengthEntity.PropertyDimzin = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimzin;
RDimArcLengthEntity.PropertyArchTick = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyArchTick;
RDimArcLengthEntity.PropertyDimclrt = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimclrt;
RDimArcLengthEntity.PropertyDimBlockName = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimBlockName;
RDimArcLengthEntity.PropertyAutoTextPos = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyAutoTextPos;
RDimArcLengthEntity.PropertyFontName = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyFontName;
RDimArcLengthEntity.PropertyArrow1Flipped = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyArrow1Flipped;
RDimArcLengthEntity.PropertyArrow2Flipped = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyArrow2Flipped;
RDimArcLengthEntity.PropertyExtLineFix = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyExtLineFix;
RDimArcLengthEntity.PropertyExtLineFixLength = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyExtLineFixLength;
RDimArcLengthEntity.PropertyCenterX = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyCenterX;
RDimArcLengthEntity.PropertyCenterY = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyCenterY;
RDimArcLengthEntity.PropertyCenterZ = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyCenterZ;
RDimArcLengthEntity.PropertyExtensionLine1EndX = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyExtensionLine1EndX;
RDimArcLengthEntity.PropertyExtensionLine1EndY = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyExtensionLine1EndY;
RDimArcLengthEntity.PropertyExtensionLine1EndZ = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyExtensionLine1EndZ;
RDimArcLengthEntity.PropertyExtensionLine2EndX = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyExtensionLine2EndX;
RDimArcLengthEntity.PropertyExtensionLine2EndY = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyExtensionLine2EndY;
RDimArcLengthEntity.PropertyExtensionLine2EndZ = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyExtensionLine2EndZ;
RDimArcLengthEntity.PropertyDimArcPositionX = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimArcPositionX;
RDimArcLengthEntity.PropertyDimArcPositionY = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimArcPositionY;
RDimArcLengthEntity.PropertyDimArcPositionZ = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimArcPositionZ;
RDimArcLengthEntity.PropertyDimArcSymbolType = 
  RDimArcLengthEntity_WrapperSingletonInstance.PropertyDimArcSymbolType;


      // copy function:
      //RDimArcLengthEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimArcLengthEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    