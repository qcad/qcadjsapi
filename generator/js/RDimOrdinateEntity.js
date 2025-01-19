
      // auto generated
      //var self;

      // class constructor:
      function RDimOrdinateEntity() {
        

        // should be RDimOrdinateEntity_BaseJs.call(this, engine):
        //RDimOrdinateEntity.prototype = new RDimOrdinateEntity_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RDimOrdinateEntity.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RDimOrdinateEntity);
            //}
          }
          else {
            qWarning("RDimOrdinateEntity.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new RDimOrdinateEntity_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RDimOrdinateEntity);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RDimOrdinateEntity);
  }

  
  else {
    
        print("RDimOrdinateEntity(): wrong number / type of arguments");
      
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

      //RDimOrdinateEntity.prototype = new RDimOrdinateEntity_BaseJs(engine);
      //RDimOrdinateEntity.prototype = new RDimOrdinateEntity_Wrapper(engine);
      RDimOrdinateEntity.prototype = new Object();

      RDimOrdinateEntity.prototype.toString = function() {
          //return "RDimOrdinateEntity [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RDimOrdinateEntity [JS]";
        };
      RDimOrdinateEntity.getObjectType = function() {
        return RJSType_RDimOrdinateEntity.getIdStatic();
      };

      RDimOrdinateEntity.prototype.getObjectType = function() {
        return RJSType_RDimOrdinateEntity.getIdStatic();
      };

      RDimOrdinateEntity.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RDimOrdinateEntity.getIdStatic()) {
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
        RDimOrdinateEntity.init = function() 
          
        {
          //print("JS: RDimOrdinateEntity.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimOrdinateEntity_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RDimOrdinateEntity);
  }

  
  else {
    
        print("RDimOrdinateEntity.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimOrdinateEntity.getRtti = function() 
          
        {
          //print("JS: RDimOrdinateEntity.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimOrdinateEntity_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RDimOrdinateEntity);
  }

  
  else {
    
        print("RDimOrdinateEntity.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RDimOrdinateEntity.getStaticPropertyTypeIds = function() 
          
        {
          //print("JS: RDimOrdinateEntity.getStaticPropertyTypeIds");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RDimOrdinateEntity_WrapperSingletonInstance.getStaticPropertyTypeIds(
                  
                );
              

        //copyProperties(this, wrapper, RDimOrdinateEntity);
  }

  
  else {
    
        print("RDimOrdinateEntity.getStaticPropertyTypeIds(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      RDimOrdinateEntity.INVALID_ID = 
  RDimOrdinateEntity_WrapperSingletonInstance.INVALID_ID;
RDimOrdinateEntity.INVALID_HANDLE = 
  RDimOrdinateEntity_WrapperSingletonInstance.INVALID_HANDLE;
RDimOrdinateEntity.PropertySelected = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertySelected;
RDimOrdinateEntity.PropertyInvisible = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyInvisible;
RDimOrdinateEntity.PropertyParentId = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyParentId;
RDimOrdinateEntity.PropertyMinX = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyMinX;
RDimOrdinateEntity.PropertyMinY = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyMinY;
RDimOrdinateEntity.PropertyMaxX = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyMaxX;
RDimOrdinateEntity.PropertyMaxY = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyMaxY;
RDimOrdinateEntity.PropertySizeX = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertySizeX;
RDimOrdinateEntity.PropertySizeY = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertySizeY;
RDimOrdinateEntity.PropertyDefinitionPointX = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDefinitionPointX;
RDimOrdinateEntity.PropertyDefinitionPointY = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDefinitionPointY;
RDimOrdinateEntity.PropertyDefinitionPointZ = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDefinitionPointZ;
RDimOrdinateEntity.PropertyAutoTextPos = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyAutoTextPos;
RDimOrdinateEntity.PropertyArrow1Flipped = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyArrow1Flipped;
RDimOrdinateEntity.PropertyArrow2Flipped = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyArrow2Flipped;
RDimOrdinateEntity.PropertyExtLineFix = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyExtLineFix;
RDimOrdinateEntity.PropertyExtLineFixLength = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyExtLineFixLength;
RDimOrdinateEntity.PropertyAutoLabel = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyAutoLabel;
RDimOrdinateEntity.PropertyDimtxt = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimtxt;
RDimOrdinateEntity.PropertyDimgap = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimgap;
RDimOrdinateEntity.PropertyDimasz = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimasz;
RDimOrdinateEntity.PropertyDimexe = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimexe;
RDimOrdinateEntity.PropertyDimexo = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimexo;
RDimOrdinateEntity.PropertyDimtad = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimtad;
RDimOrdinateEntity.PropertyDimtih = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimtih;
RDimOrdinateEntity.PropertyDimtsz = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimtsz;
RDimOrdinateEntity.PropertyDimlunit = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimlunit;
RDimOrdinateEntity.PropertyDimdec = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimdec;
RDimOrdinateEntity.PropertyDimdsep = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimdsep;
RDimOrdinateEntity.PropertyDimzin = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimzin;
RDimOrdinateEntity.PropertyDimaunit = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimaunit;
RDimOrdinateEntity.PropertyDimadec = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimadec;
RDimOrdinateEntity.PropertyDimazin = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimazin;
RDimOrdinateEntity.PropertyArchTick = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyArchTick;
RDimOrdinateEntity.PropertyDimclrt = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimclrt;
RDimOrdinateEntity.PropertyCustom = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyCustom;
RDimOrdinateEntity.PropertyHandle = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyHandle;
RDimOrdinateEntity.PropertyProtected = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyProtected;
RDimOrdinateEntity.PropertyWorkingSet = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyWorkingSet;
RDimOrdinateEntity.PropertyType = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyType;
RDimOrdinateEntity.PropertyBlock = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyBlock;
RDimOrdinateEntity.PropertyLayer = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyLayer;
RDimOrdinateEntity.PropertyLinetype = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyLinetype;
RDimOrdinateEntity.PropertyLinetypeScale = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyLinetypeScale;
RDimOrdinateEntity.PropertyLineweight = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyLineweight;
RDimOrdinateEntity.PropertyColor = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyColor;
RDimOrdinateEntity.PropertyDisplayedColor = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDisplayedColor;
RDimOrdinateEntity.PropertyDrawOrder = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDrawOrder;
RDimOrdinateEntity.PropertyMiddleOfTextX = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyMiddleOfTextX;
RDimOrdinateEntity.PropertyMiddleOfTextY = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyMiddleOfTextY;
RDimOrdinateEntity.PropertyMiddleOfTextZ = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyMiddleOfTextZ;
RDimOrdinateEntity.PropertyText = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyText;
RDimOrdinateEntity.PropertyUpperTolerance = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyUpperTolerance;
RDimOrdinateEntity.PropertyLowerTolerance = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyLowerTolerance;
RDimOrdinateEntity.PropertyMeasuredValue = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyMeasuredValue;
RDimOrdinateEntity.PropertyFontName = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyFontName;
RDimOrdinateEntity.PropertyDimscale = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimscale;
RDimOrdinateEntity.PropertyDimlfac = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimlfac;
RDimOrdinateEntity.PropertyDimBlockName = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDimBlockName;
RDimOrdinateEntity.PropertyOriginX = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyOriginX;
RDimOrdinateEntity.PropertyOriginY = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyOriginY;
RDimOrdinateEntity.PropertyOriginZ = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyOriginZ;
RDimOrdinateEntity.PropertyOrdinate = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyOrdinate;
RDimOrdinateEntity.PropertyLeaderEndPointX = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyLeaderEndPointX;
RDimOrdinateEntity.PropertyLeaderEndPointY = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyLeaderEndPointY;
RDimOrdinateEntity.PropertyLeaderEndPointZ = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyLeaderEndPointZ;
RDimOrdinateEntity.PropertyDefiningPointX = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDefiningPointX;
RDimOrdinateEntity.PropertyDefiningPointY = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDefiningPointY;
RDimOrdinateEntity.PropertyDefiningPointZ = 
  RDimOrdinateEntity_WrapperSingletonInstance.PropertyDefiningPointZ;


      // copy function:
      //RDimOrdinateEntity.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RDimOrdinateEntity.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    