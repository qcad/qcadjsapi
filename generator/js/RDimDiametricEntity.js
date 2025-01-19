
      // auto generated
      //var self;

      // class constructor:
      function RDimDiametricEntity() {
        

        // should be RDimDiametricEntity_BaseJs.call(this, engine):
        //RDimDiametricEntity.prototype = new RDimDiametricEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimDiametricEntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RDimDiametricEntity);
            //}
          }
          else {
            qWarning("RDimDiametricEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RDimDiametricEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDimDiametricEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimDiametricEntity);
  }

  
  else {
    
        print("RDimDiametricEntity(): wrong number / type of arguments");
      
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

      //RDimDiametricEntity.prototype = new RDimDiametricEntity_BaseJs(engine);
      //RDimDiametricEntity.prototype = new RDimDiametricEntity_Wrapper(engine);
      RDimDiametricEntity.prototype = new Object();

      RDimDiametricEntity.prototype.toString = function() {
          //return "RDimDiametricEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimDiametricEntity [JS]";
        };
      RDimDiametricEntity.getObjectType = function() {
        return RJSType_RDimDiametricEntity.getIdStatic();
      };

      RDimDiametricEntity.prototype.getObjectType = function() {
        return RJSType_RDimDiametricEntity.getIdStatic();
      };

      RDimDiametricEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimDiametricEntity.getIdStatic()) {
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
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RDimDiametricEntity.init = function() 
          
        {
          //print("JS: RDimDiametricEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimDiametricEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RDimDiametricEntity);
  }

  
  else {
    
        print("RDimDiametricEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimDiametricEntity.getRtti = function() 
          
        {
          //print("JS: RDimDiametricEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimDiametricEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RDimDiametricEntity);
  }

  
  else {
    
        print("RDimDiametricEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimDiametricEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RDimDiametricEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimDiametricEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RDimDiametricEntity);
  }

  
  else {
    
        print("RDimDiametricEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RDimDiametricEntity.INVALID_ID = 
  RDimDiametricEntity_WrapperSingletonInstance.INVALID_ID;
RDimDiametricEntity.INVALID_HANDLE = 
  RDimDiametricEntity_WrapperSingletonInstance.INVALID_HANDLE;
RDimDiametricEntity.PropertySelected = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertySelected;
RDimDiametricEntity.PropertyInvisible = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyInvisible;
RDimDiametricEntity.PropertyParentId = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyParentId;
RDimDiametricEntity.PropertyMinX = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyMinX;
RDimDiametricEntity.PropertyMinY = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyMinY;
RDimDiametricEntity.PropertyMaxX = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyMaxX;
RDimDiametricEntity.PropertyMaxY = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyMaxY;
RDimDiametricEntity.PropertySizeX = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertySizeX;
RDimDiametricEntity.PropertySizeY = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertySizeY;
RDimDiametricEntity.PropertyDefinitionPointX = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDefinitionPointX;
RDimDiametricEntity.PropertyDefinitionPointY = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDefinitionPointY;
RDimDiametricEntity.PropertyDefinitionPointZ = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDefinitionPointZ;
RDimDiametricEntity.PropertyAutoLabel = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyAutoLabel;
RDimDiametricEntity.PropertyDimaunit = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimaunit;
RDimDiametricEntity.PropertyDimadec = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimadec;
RDimDiametricEntity.PropertyDimazin = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimazin;
RDimDiametricEntity.PropertyCustom = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyCustom;
RDimDiametricEntity.PropertyHandle = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyHandle;
RDimDiametricEntity.PropertyProtected = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyProtected;
RDimDiametricEntity.PropertyWorkingSet = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyWorkingSet;
RDimDiametricEntity.PropertyType = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyType;
RDimDiametricEntity.PropertyBlock = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyBlock;
RDimDiametricEntity.PropertyLayer = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyLayer;
RDimDiametricEntity.PropertyLinetype = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyLinetype;
RDimDiametricEntity.PropertyLinetypeScale = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RDimDiametricEntity.PropertyLineweight = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyLineweight;
RDimDiametricEntity.PropertyColor = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyColor;
RDimDiametricEntity.PropertyDisplayedColor = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RDimDiametricEntity.PropertyDrawOrder = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDrawOrder;
RDimDiametricEntity.PropertyMiddleOfTextX = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyMiddleOfTextX;
RDimDiametricEntity.PropertyMiddleOfTextY = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyMiddleOfTextY;
RDimDiametricEntity.PropertyMiddleOfTextZ = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyMiddleOfTextZ;
RDimDiametricEntity.PropertyText = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyText;
RDimDiametricEntity.PropertyUpperTolerance = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyUpperTolerance;
RDimDiametricEntity.PropertyLowerTolerance = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyLowerTolerance;
RDimDiametricEntity.PropertyMeasuredValue = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyMeasuredValue;
RDimDiametricEntity.PropertyDimscale = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimscale;
RDimDiametricEntity.PropertyDimlfac = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimlfac;
RDimDiametricEntity.PropertyDimtxt = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimtxt;
RDimDiametricEntity.PropertyDimgap = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimgap;
RDimDiametricEntity.PropertyDimasz = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimasz;
RDimDiametricEntity.PropertyDimexe = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimexe;
RDimDiametricEntity.PropertyDimexo = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimexo;
RDimDiametricEntity.PropertyDimtad = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimtad;
RDimDiametricEntity.PropertyDimtih = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimtih;
RDimDiametricEntity.PropertyDimtsz = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimtsz;
RDimDiametricEntity.PropertyDimlunit = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimlunit;
RDimDiametricEntity.PropertyDimdec = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimdec;
RDimDiametricEntity.PropertyDimdsep = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimdsep;
RDimDiametricEntity.PropertyDimzin = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimzin;
RDimDiametricEntity.PropertyArchTick = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyArchTick;
RDimDiametricEntity.PropertyDimclrt = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimclrt;
RDimDiametricEntity.PropertyDimBlockName = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyDimBlockName;
RDimDiametricEntity.PropertyAutoTextPos = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyAutoTextPos;
RDimDiametricEntity.PropertyFontName = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyFontName;
RDimDiametricEntity.PropertyArrow1Flipped = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyArrow1Flipped;
RDimDiametricEntity.PropertyArrow2Flipped = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyArrow2Flipped;
RDimDiametricEntity.PropertyExtLineFix = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyExtLineFix;
RDimDiametricEntity.PropertyExtLineFixLength = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyExtLineFixLength;
RDimDiametricEntity.PropertyChordPointX = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyChordPointX;
RDimDiametricEntity.PropertyChordPointY = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyChordPointY;
RDimDiametricEntity.PropertyChordPointZ = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyChordPointZ;
RDimDiametricEntity.PropertyFarChordPointX = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyFarChordPointX;
RDimDiametricEntity.PropertyFarChordPointY = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyFarChordPointY;
RDimDiametricEntity.PropertyFarChordPointZ = 
  RDimDiametricEntity_WrapperSingletonInstance.PropertyFarChordPointZ;


      // copy function:
      //RDimDiametricEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimDiametricEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    