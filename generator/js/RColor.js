
      // auto generated
      //var self;

      // class constructor:
      function RColor() {
        

        // should be RColor_BaseJs.call(this, engine):
        //RColor.prototype = new RColor_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RColor.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  this.__PROXY__ = wrapper;
                
            //}
          }
          else {
            qWarning("RColor.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 3 &&
          arguments.length <= 5) {
    
            self = this;
            wrapper = new RColor_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RColor);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new RColor_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RColor);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new RColor_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RColor);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RColor_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RColor);
  }

  
  else {
    
        print("RColor(): wrong number / type of arguments");
      
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
          
        }

        

      }

      //RColor.prototype = new RColor_BaseJs(engine);
      //RColor.prototype = new RColor_Wrapper(engine);
      RColor.prototype = new Object();

      RColor.prototype.toString = function() {
          //return "RColor [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RColor [JS]";
        };
      RColor.getObjectType = function() {
        return RJSType_RColor.getIdStatic();
      };

      RColor.prototype.getObjectType = function() {
        return RJSType_RColor.getIdStatic();
      };

      RColor.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RColor.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QColor.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Mode
RColor.ByLayer = RColor_Wrapper.ByLayer;
RColor.ByBlock = RColor_Wrapper.ByBlock;
RColor.Fixed = RColor_Wrapper.Fixed;


      // functions:
      
        // function 
        RColor.prototype.name = function(...args) 
          
        {
          //print("JS: RColor.prototype.name");
          return this.__PROXY__.name(...args);
        };
    
        // function 
        RColor.prototype.spec = function(...args) 
          
        {
          //print("JS: RColor.prototype.spec");
          return this.__PROXY__.spec(...args);
        };
    
        // function 
        RColor.prototype.alpha = function(...args) 
          
        {
          //print("JS: RColor.prototype.alpha");
          return this.__PROXY__.alpha(...args);
        };
    
        // function 
        RColor.prototype.setAlpha = function(...args) 
          
        {
          //print("JS: RColor.prototype.setAlpha");
          return this.__PROXY__.setAlpha(...args);
        };
    
        // function 
        RColor.prototype.alphaF = function(...args) 
          
        {
          //print("JS: RColor.prototype.alphaF");
          return this.__PROXY__.alphaF(...args);
        };
    
        // function 
        RColor.prototype.setAlphaF = function(...args) 
          
        {
          //print("JS: RColor.prototype.setAlphaF");
          return this.__PROXY__.setAlphaF(...args);
        };
    
        // function 
        RColor.prototype.red = function(...args) 
          
        {
          //print("JS: RColor.prototype.red");
          return this.__PROXY__.red(...args);
        };
    
        // function 
        RColor.prototype.green = function(...args) 
          
        {
          //print("JS: RColor.prototype.green");
          return this.__PROXY__.green(...args);
        };
    
        // function 
        RColor.prototype.blue = function(...args) 
          
        {
          //print("JS: RColor.prototype.blue");
          return this.__PROXY__.blue(...args);
        };
    
        // function 
        RColor.prototype.setRed = function(...args) 
          
        {
          //print("JS: RColor.prototype.setRed");
          return this.__PROXY__.setRed(...args);
        };
    
        // function 
        RColor.prototype.setGreen = function(...args) 
          
        {
          //print("JS: RColor.prototype.setGreen");
          return this.__PROXY__.setGreen(...args);
        };
    
        // function 
        RColor.prototype.setBlue = function(...args) 
          
        {
          //print("JS: RColor.prototype.setBlue");
          return this.__PROXY__.setBlue(...args);
        };
    
        // function 
        RColor.prototype.redF = function(...args) 
          
        {
          //print("JS: RColor.prototype.redF");
          return this.__PROXY__.redF(...args);
        };
    
        // function 
        RColor.prototype.greenF = function(...args) 
          
        {
          //print("JS: RColor.prototype.greenF");
          return this.__PROXY__.greenF(...args);
        };
    
        // function 
        RColor.prototype.blueF = function(...args) 
          
        {
          //print("JS: RColor.prototype.blueF");
          return this.__PROXY__.blueF(...args);
        };
    
        // function 
        RColor.prototype.setRedF = function(...args) 
          
        {
          //print("JS: RColor.prototype.setRedF");
          return this.__PROXY__.setRedF(...args);
        };
    
        // function 
        RColor.prototype.setGreenF = function(...args) 
          
        {
          //print("JS: RColor.prototype.setGreenF");
          return this.__PROXY__.setGreenF(...args);
        };
    
        // function 
        RColor.prototype.setBlueF = function(...args) 
          
        {
          //print("JS: RColor.prototype.setBlueF");
          return this.__PROXY__.setBlueF(...args);
        };
    
        // function 
        RColor.prototype.setRgb = function(...args) 
          
        {
          //print("JS: RColor.prototype.setRgb");
          return this.__PROXY__.setRgb(...args);
        };
    
        // function 
        RColor.prototype.setRgbF = function(...args) 
          
        {
          //print("JS: RColor.prototype.setRgbF");
          return this.__PROXY__.setRgbF(...args);
        };
    
        // function 
        RColor.prototype.hue = function(...args) 
          
        {
          //print("JS: RColor.prototype.hue");
          return this.__PROXY__.hue(...args);
        };
    
        // function 
        RColor.prototype.saturation = function(...args) 
          
        {
          //print("JS: RColor.prototype.saturation");
          return this.__PROXY__.saturation(...args);
        };
    
        // function 
        RColor.prototype.hsvHue = function(...args) 
          
        {
          //print("JS: RColor.prototype.hsvHue");
          return this.__PROXY__.hsvHue(...args);
        };
    
        // function 
        RColor.prototype.hsvSaturation = function(...args) 
          
        {
          //print("JS: RColor.prototype.hsvSaturation");
          return this.__PROXY__.hsvSaturation(...args);
        };
    
        // function 
        RColor.prototype.value = function(...args) 
          
        {
          //print("JS: RColor.prototype.value");
          return this.__PROXY__.value(...args);
        };
    
        // function 
        RColor.prototype.hueF = function(...args) 
          
        {
          //print("JS: RColor.prototype.hueF");
          return this.__PROXY__.hueF(...args);
        };
    
        // function 
        RColor.prototype.saturationF = function(...args) 
          
        {
          //print("JS: RColor.prototype.saturationF");
          return this.__PROXY__.saturationF(...args);
        };
    
        // function 
        RColor.prototype.hsvHueF = function(...args) 
          
        {
          //print("JS: RColor.prototype.hsvHueF");
          return this.__PROXY__.hsvHueF(...args);
        };
    
        // function 
        RColor.prototype.hsvSaturationF = function(...args) 
          
        {
          //print("JS: RColor.prototype.hsvSaturationF");
          return this.__PROXY__.hsvSaturationF(...args);
        };
    
        // function 
        RColor.prototype.valueF = function(...args) 
          
        {
          //print("JS: RColor.prototype.valueF");
          return this.__PROXY__.valueF(...args);
        };
    
        // function 
        RColor.prototype.setHsv = function(...args) 
          
        {
          //print("JS: RColor.prototype.setHsv");
          return this.__PROXY__.setHsv(...args);
        };
    
        // function 
        RColor.prototype.setHsvF = function(...args) 
          
        {
          //print("JS: RColor.prototype.setHsvF");
          return this.__PROXY__.setHsvF(...args);
        };
    
        // function 
        RColor.prototype.cyan = function(...args) 
          
        {
          //print("JS: RColor.prototype.cyan");
          return this.__PROXY__.cyan(...args);
        };
    
        // function 
        RColor.prototype.magenta = function(...args) 
          
        {
          //print("JS: RColor.prototype.magenta");
          return this.__PROXY__.magenta(...args);
        };
    
        // function 
        RColor.prototype.yellow = function(...args) 
          
        {
          //print("JS: RColor.prototype.yellow");
          return this.__PROXY__.yellow(...args);
        };
    
        // function 
        RColor.prototype.black = function(...args) 
          
        {
          //print("JS: RColor.prototype.black");
          return this.__PROXY__.black(...args);
        };
    
        // function 
        RColor.prototype.cyanF = function(...args) 
          
        {
          //print("JS: RColor.prototype.cyanF");
          return this.__PROXY__.cyanF(...args);
        };
    
        // function 
        RColor.prototype.magentaF = function(...args) 
          
        {
          //print("JS: RColor.prototype.magentaF");
          return this.__PROXY__.magentaF(...args);
        };
    
        // function 
        RColor.prototype.yellowF = function(...args) 
          
        {
          //print("JS: RColor.prototype.yellowF");
          return this.__PROXY__.yellowF(...args);
        };
    
        // function 
        RColor.prototype.blackF = function(...args) 
          
        {
          //print("JS: RColor.prototype.blackF");
          return this.__PROXY__.blackF(...args);
        };
    
        // function 
        RColor.prototype.setCmyk = function(...args) 
          
        {
          //print("JS: RColor.prototype.setCmyk");
          return this.__PROXY__.setCmyk(...args);
        };
    
        // function 
        RColor.prototype.setCmykF = function(...args) 
          
        {
          //print("JS: RColor.prototype.setCmykF");
          return this.__PROXY__.setCmykF(...args);
        };
    
        // function 
        RColor.prototype.hslHue = function(...args) 
          
        {
          //print("JS: RColor.prototype.hslHue");
          return this.__PROXY__.hslHue(...args);
        };
    
        // function 
        RColor.prototype.hslSaturation = function(...args) 
          
        {
          //print("JS: RColor.prototype.hslSaturation");
          return this.__PROXY__.hslSaturation(...args);
        };
    
        // function 
        RColor.prototype.lightness = function(...args) 
          
        {
          //print("JS: RColor.prototype.lightness");
          return this.__PROXY__.lightness(...args);
        };
    
        // function 
        RColor.prototype.hslHueF = function(...args) 
          
        {
          //print("JS: RColor.prototype.hslHueF");
          return this.__PROXY__.hslHueF(...args);
        };
    
        // function 
        RColor.prototype.hslSaturationF = function(...args) 
          
        {
          //print("JS: RColor.prototype.hslSaturationF");
          return this.__PROXY__.hslSaturationF(...args);
        };
    
        // function 
        RColor.prototype.lightnessF = function(...args) 
          
        {
          //print("JS: RColor.prototype.lightnessF");
          return this.__PROXY__.lightnessF(...args);
        };
    
        // function 
        RColor.prototype.setHsl = function(...args) 
          
        {
          //print("JS: RColor.prototype.setHsl");
          return this.__PROXY__.setHsl(...args);
        };
    
        // function 
        RColor.prototype.setHslF = function(...args) 
          
        {
          //print("JS: RColor.prototype.setHslF");
          return this.__PROXY__.setHslF(...args);
        };
    
        // function 
        RColor.prototype.toRgb = function(...args) 
          
        {
          //print("JS: RColor.prototype.toRgb");
          return this.__PROXY__.toRgb(...args);
        };
    
        // function 
        RColor.prototype.toHsv = function(...args) 
          
        {
          //print("JS: RColor.prototype.toHsv");
          return this.__PROXY__.toHsv(...args);
        };
    
        // function 
        RColor.prototype.toCmyk = function(...args) 
          
        {
          //print("JS: RColor.prototype.toCmyk");
          return this.__PROXY__.toCmyk(...args);
        };
    
        // function 
        RColor.prototype.toHsl = function(...args) 
          
        {
          //print("JS: RColor.prototype.toHsl");
          return this.__PROXY__.toHsl(...args);
        };
    
        // function 
        RColor.prototype.toExtendedRgb = function(...args) 
          
        {
          //print("JS: RColor.prototype.toExtendedRgb");
          return this.__PROXY__.toExtendedRgb(...args);
        };
    
        // function 
        RColor.prototype.convertTo = function(...args) 
          
        {
          //print("JS: RColor.prototype.convertTo");
          return this.__PROXY__.convertTo(...args);
        };
    
        // function 
        RColor.prototype.lighter = function(...args) 
          
        {
          //print("JS: RColor.prototype.lighter");
          return this.__PROXY__.lighter(...args);
        };
    
        // function 
        RColor.prototype.darker = function(...args) 
          
        {
          //print("JS: RColor.prototype.darker");
          return this.__PROXY__.darker(...args);
        };
    
        // function 
        RColor.prototype.invalidate = function(...args) 
          
        {
          //print("JS: RColor.prototype.invalidate");
          return this.__PROXY__.invalidate(...args);
        };
    
        // function 
        RColor.prototype.setColorFromString = function(...args) 
          
        {
          //print("JS: RColor.prototype.setColorFromString");
          return this.__PROXY__.setColorFromString(...args);
        };
    
        // function 
        RColor.prototype.getCustomColorCode = function(...args) 
          
        {
          //print("JS: RColor.prototype.getCustomColorCode");
          return this.__PROXY__.getCustomColorCode(...args);
        };
    
        // function 
        RColor.prototype.getColorIndex = function(...args) 
          
        {
          //print("JS: RColor.prototype.getColorIndex");
          return this.__PROXY__.getColorIndex(...args);
        };
    
        // function 
        RColor.prototype.removeColor = function(...args) 
          
        {
          //print("JS: RColor.prototype.removeColor");
          return this.__PROXY__.removeColor(...args);
        };
    
        // function 
        RColor.prototype.addColor = function(...args) 
          
        {
          //print("JS: RColor.prototype.addColor");
          return this.__PROXY__.addColor(...args);
        };
    
        // function 
        RColor.prototype.createFromCadIndex = function(...args) 
          
        {
          //print("JS: RColor.prototype.createFromCadIndex");
          return this.__PROXY__.createFromCadIndex(...args);
        };
    
        // function 
        RColor.prototype.createFromCadCustom = function(...args) 
          
        {
          //print("JS: RColor.prototype.createFromCadCustom");
          return this.__PROXY__.createFromCadCustom(...args);
        };
    
        // function 
        RColor.prototype.createFromName = function(...args) 
          
        {
          //print("JS: RColor.prototype.createFromName");
          return this.__PROXY__.createFromName(...args);
        };
    
        // function 
        RColor.prototype.getNameList = function(...args) 
          
        {
          //print("JS: RColor.prototype.getNameList");
          return this.__PROXY__.getNameList(...args);
        };
    
        // function 
        RColor.prototype.getColorList = function(...args) 
          
        {
          //print("JS: RColor.prototype.getColorList");
          return this.__PROXY__.getColorList(...args);
        };
    
        // function 
        RColor.prototype.getIcon = function(...args) 
          
        {
          //print("JS: RColor.prototype.getIcon");
          return this.__PROXY__.getIcon(...args);
        };
    
        // function 
        RColor.prototype.isValid = function(...args) 
          
        {
          //print("JS: RColor.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        RColor.prototype.getName = function(...args) 
          
        {
          //print("JS: RColor.prototype.getName");
          return this.__PROXY__.getName(...args);
        };
    
        // function 
        RColor.prototype.isByLayer = function(...args) 
          
        {
          //print("JS: RColor.prototype.isByLayer");
          return this.__PROXY__.isByLayer(...args);
        };
    
        // function 
        RColor.prototype.isByBlock = function(...args) 
          
        {
          //print("JS: RColor.prototype.isByBlock");
          return this.__PROXY__.isByBlock(...args);
        };
    
        // function 
        RColor.prototype.isFixed = function(...args) 
          
        {
          //print("JS: RColor.prototype.isFixed");
          return this.__PROXY__.isFixed(...args);
        };
    
        // function 
        RColor.prototype.toCompat = function(...args) 
          
        {
          //print("JS: RColor.prototype.toCompat");
          return this.__PROXY__.toCompat(...args);
        };
    
        // function 
        RColor.prototype.setCompat = function(...args) 
          
        {
          //print("JS: RColor.prototype.setCompat");
          return this.__PROXY__.setCompat(...args);
        };
    
        // function 
        RColor.prototype.getHighlighted = function(...args) 
          
        {
          //print("JS: RColor.prototype.getHighlighted");
          return this.__PROXY__.getHighlighted(...args);
        };
    
        // function 
        RColor.prototype.getFaded = function(...args) 
          
        {
          //print("JS: RColor.prototype.getFaded");
          return this.__PROXY__.getFaded(...args);
        };
    
        // function 
        RColor.prototype.reinit = function(...args) 
          
        {
          //print("JS: RColor.prototype.reinit");
          return this.__PROXY__.reinit(...args);
        };
    
        // function 
        RColor.prototype.equals = function(...args) 
          
        {
          //print("JS: RColor.prototype.equals");
          return this.__PROXY__.equals(...args);
        };
    

      // static functions:
      

        // static function 
        RColor.removeColor = function() 
          
        {
          //print("JS: RColor.removeColor");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RColor_WrapperSingletonInstance.removeColor(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RColor);
  }

  
  else {
    
        print("RColor.removeColor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RColor.addColor = function() 
          
        {
          //print("JS: RColor.addColor");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RColor_WrapperSingletonInstance.addColor(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RColor);
  }

  
  else {
    
        print("RColor.addColor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RColor.createFromCadIndex = function() 
          
        {
          //print("JS: RColor.createFromCadIndex");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RColor_WrapperSingletonInstance.createFromCadIndex(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RColor);
  }

  
  else 
  
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RColor_WrapperSingletonInstance.createFromCadIndex(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RColor);
  }

  
  else {
    
        print("RColor.createFromCadIndex(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RColor.createFromCadCustom = function() 
          
        {
          //print("JS: RColor.createFromCadCustom");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RColor_WrapperSingletonInstance.createFromCadCustom(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RColor);
  }

  
  else 
  
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RColor_WrapperSingletonInstance.createFromCadCustom(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RColor);
  }

  
  else {
    
        print("RColor.createFromCadCustom(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RColor.createFromName = function() 
          
        {
          //print("JS: RColor.createFromName");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RColor_WrapperSingletonInstance.createFromName(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RColor);
  }

  
  else {
    
        print("RColor.createFromName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RColor.getNameList = function() 
          
        {
          //print("JS: RColor.getNameList");
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
                // calling static wrapper:
                return RColor_WrapperSingletonInstance.getNameList(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RColor);
  }

  
  else {
    
        print("RColor.getNameList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RColor.getColorList = function() 
          
        {
          //print("JS: RColor.getColorList");
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
                // calling static wrapper:
                return RColor_WrapperSingletonInstance.getColorList(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RColor);
  }

  
  else {
    
        print("RColor.getColorList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RColor.getIcon = function() 
          
        {
          //print("JS: RColor.getIcon");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RColor_WrapperSingletonInstance.getIcon(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RColor);
  }

  
  else {
    
        print("RColor.getIcon(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RColor.getHighlighted = function() 
          
        {
          //print("JS: RColor.getHighlighted");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RColor_WrapperSingletonInstance.getHighlighted(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RColor);
  }

  
  else {
    
        print("RColor.getHighlighted(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RColor.getFaded = function() 
          
        {
          //print("JS: RColor.getFaded");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RColor_WrapperSingletonInstance.getFaded(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RColor);
  }

  
  else {
    
        print("RColor.getFaded(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RColor.reinit = function() 
          
        {
          //print("JS: RColor.reinit");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RColor_WrapperSingletonInstance.reinit(
                  
                );
              

        //copyProperties(this, wrapper, RColor);
  }

  
  else {
    
        print("RColor.reinit(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RColor.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RColor.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      RColor.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      