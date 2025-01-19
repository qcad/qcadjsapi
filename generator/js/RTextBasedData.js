
      // auto generated
      //var self;

      // class constructor:
      function RTextBasedData() {
        

        // should be RTextBasedData_BaseJs.call(this, engine):
        //RTextBasedData.prototype = new RTextBasedData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RTextBasedData.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RTextBasedData);
            //}
          }
          else {
            qWarning("RTextBasedData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 15) {
    
            self = this;
            wrapper = new RTextBasedData_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RTextBasedData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTextBasedData);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new RTextBasedData_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RTextBasedData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RTextBasedData);
  }

  
  else {
    
        print("RTextBasedData(): wrong number / type of arguments");
      
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

      //RTextBasedData.prototype = new RTextBasedData_BaseJs(engine);
      //RTextBasedData.prototype = new RTextBasedData_Wrapper(engine);
      RTextBasedData.prototype = new Object();

      RTextBasedData.prototype.toString = function() {
          //return "RTextBasedData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RTextBasedData [JS]";
        };
      RTextBasedData.getObjectType = function() {
        return RJSType_RTextBasedData.getIdStatic();
      };

      RTextBasedData.prototype.getObjectType = function() {
        return RJSType_RTextBasedData.getIdStatic();
      };

      RTextBasedData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RTextBasedData.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_REntityData.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_RPainterPathSource.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: TextFlag
RTextBasedData.NoFlags = RTextBasedData_Wrapper.NoFlags;
RTextBasedData.Bold = RTextBasedData_Wrapper.Bold;
RTextBasedData.Italic = RTextBasedData_Wrapper.Italic;
RTextBasedData.Simple = RTextBasedData_Wrapper.Simple;
RTextBasedData.DimensionLabel = RTextBasedData_Wrapper.DimensionLabel;
RTextBasedData.Highlighted = RTextBasedData_Wrapper.Highlighted;
RTextBasedData.Backward = RTextBasedData_Wrapper.Backward;
RTextBasedData.UpsideDown = RTextBasedData_Wrapper.UpsideDown;


      // functions:
      

      // static functions:
      

        // static function 
        RTextBasedData.getRtti = function() 
          
        {
          //print("JS: RTextBasedData.getRtti");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RTextBasedData_WrapperSingletonInstance.getRtti(
                  
                );
              

        //copyProperties(this, wrapper, RTextBasedData);
  }

  
  else {
    
        print("RTextBasedData.getRtti(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextBasedData.escapeUnicode = function() 
          
        {
          //print("JS: RTextBasedData.escapeUnicode");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RTextBasedData_WrapperSingletonInstance.escapeUnicode(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RTextBasedData);
  }

  
  else {
    
        print("RTextBasedData.escapeUnicode(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextBasedData.hasProxy = function() 
          
        {
          //print("JS: RTextBasedData.hasProxy");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RTextBasedData_WrapperSingletonInstance.hasProxy(
                  
                );
              

        //copyProperties(this, wrapper, RTextBasedData);
  }

  
  else {
    
        print("RTextBasedData.hasProxy(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextBasedData.toEscapedText = function() 
          
        {
          //print("JS: RTextBasedData.toEscapedText");
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return RTextBasedData_WrapperSingletonInstance.toEscapedText(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, RTextBasedData);
  }

  
  else {
    
        print("RTextBasedData.toEscapedText(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RTextBasedData.toRichText = function() 
          
        {
          //print("JS: RTextBasedData.toRichText");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return RTextBasedData_WrapperSingletonInstance.toRichText(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RTextBasedData);
  }

  
  else {
    
        print("RTextBasedData.toRichText(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RTextBasedData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RTextBasedData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    