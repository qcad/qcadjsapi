
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
              copyProperties(this, wrapper, RColor);
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
          

        copyProperties(this, wrapper, RColor);

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
          

        copyProperties(this, wrapper, RColor);

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
          

        copyProperties(this, wrapper, RColor);

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
          

        copyProperties(this, wrapper, RColor);

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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
          }
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
    