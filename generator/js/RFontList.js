
      // auto generated
      //var self;

      // class constructor:
      function RFontList() {
        

        // should be RFontList_BaseJs.call(this, engine):
        //RFontList.prototype = new RFontList_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RFontList.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, RFontList);
            //}
          }
          else {
            qWarning("RFontList.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RFontList_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, RFontList);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RFontList);
  }

  
  else {
    
        print("RFontList(): wrong number / type of arguments");
      
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

      //RFontList.prototype = new RFontList_BaseJs(engine);
      //RFontList.prototype = new RFontList_Wrapper(engine);
      RFontList.prototype = new Object();

      RFontList.prototype.toString = function() {
          //return "RFontList [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RFontList [JS]";
        };
      RFontList.getObjectType = function() {
        return RJSType_RFontList.getIdStatic();
      };

      RFontList.prototype.getObjectType = function() {
        return RJSType_RFontList.getIdStatic();
      };

      RFontList.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RFontList.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RFontList.init = function() 
          
        {
          //print("JS: RFontList.init");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RFontList_WrapperSingletonInstance.init(
                  
                );
              

        //copyProperties(this, wrapper, RFontList);
  }

  
  else {
    
        print("RFontList.init(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RFontList.initSubstitutions = function() 
          
        {
          //print("JS: RFontList.initSubstitutions");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RFontList_WrapperSingletonInstance.initSubstitutions(
                  
                );
              

        //copyProperties(this, wrapper, RFontList);
  }

  
  else {
    
        print("RFontList.initSubstitutions(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RFontList.uninit = function() 
          
        {
          //print("JS: RFontList.uninit");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RFontList_WrapperSingletonInstance.uninit(
                  
                );
              

        //copyProperties(this, wrapper, RFontList);
  }

  
  else {
    
        print("RFontList.uninit(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RFontList.getNames = function() 
          
        {
          //print("JS: RFontList.getNames");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RFontList_WrapperSingletonInstance.getNames(
                  
                );
              

        //copyProperties(this, wrapper, RFontList);
  }

  
  else {
    
        print("RFontList.getNames(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RFontList.getSubName = function() 
          
        {
          //print("JS: RFontList.getSubName");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RFontList_WrapperSingletonInstance.getSubName(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RFontList);
  }

  
  else {
    
        print("RFontList.getSubName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RFontList.get = function() 
          
        {
          //print("JS: RFontList.get");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RFontList_WrapperSingletonInstance.get(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RFontList);
  }

  
  else {
    
        print("RFontList.get(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RFontList.isCadFont = function() 
          
        {
          //print("JS: RFontList.isCadFont");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RFontList_WrapperSingletonInstance.isCadFont(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RFontList);
  }

  
  else {
    
        print("RFontList.isCadFont(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RFontList.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RFontList.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    