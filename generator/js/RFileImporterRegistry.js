
      // auto generated
      //var self;

      // class constructor:
      function RFileImporterRegistry() {
        

        // should be RFileImporterRegistry_BaseJs.call(this, engine):
        //RFileImporterRegistry.prototype = new RFileImporterRegistry_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RFileImporterRegistry.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RFileImporterRegistry);
                
            //}
          }
          else {
            qWarning("RFileImporterRegistry.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RFileImporterRegistry_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RFileImporterRegistry);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RFileImporterRegistry);
  }

  
  else {
    
        print("RFileImporterRegistry(): wrong number / type of arguments");
      
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

      //RFileImporterRegistry.prototype = new RFileImporterRegistry_BaseJs(engine);
      //RFileImporterRegistry.prototype = new RFileImporterRegistry_Wrapper(engine);
      RFileImporterRegistry.prototype = new Object();

      RFileImporterRegistry.prototype.toString = function() {
          //return "RFileImporterRegistry [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RFileImporterRegistry [JS]";
        };
      RFileImporterRegistry.getObjectType = function() {
        return RJSType_RFileImporterRegistry.getIdStatic();
      };

      RFileImporterRegistry.prototype.getObjectType = function() {
        return RJSType_RFileImporterRegistry.getIdStatic();
      };

      RFileImporterRegistry.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RFileImporterRegistry.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RFileImporterRegistry.registerFileImporter = function() 
          
        {
          //print("JS: RFileImporterRegistry.registerFileImporter");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RFileImporterRegistry_WrapperSingletonInstance.registerFileImporter(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RFileImporterRegistry);
  }

  
  else {
    
        print("RFileImporterRegistry.registerFileImporter(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RFileImporterRegistry.unregisterFileImporter = function() 
          
        {
          //print("JS: RFileImporterRegistry.unregisterFileImporter");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RFileImporterRegistry_WrapperSingletonInstance.unregisterFileImporter(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RFileImporterRegistry);
  }

  
  else {
    
        print("RFileImporterRegistry.unregisterFileImporter(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RFileImporterRegistry.getFileImporter = function() 
          
        {
          //print("JS: RFileImporterRegistry.getFileImporter");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RFileImporterRegistry_WrapperSingletonInstance.getFileImporter(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RFileImporterRegistry);
  }

  
  else {
    
        print("RFileImporterRegistry.getFileImporter(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RFileImporterRegistry.getFilterStrings = function() 
          
        {
          //print("JS: RFileImporterRegistry.getFilterStrings");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RFileImporterRegistry_WrapperSingletonInstance.getFilterStrings(
                  
                );
              

        //copyProperties(this, wrapper, RFileImporterRegistry);
  }

  
  else {
    
        print("RFileImporterRegistry.getFilterStrings(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RFileImporterRegistry.hasFileImporter = function() 
          
        {
          //print("JS: RFileImporterRegistry.hasFileImporter");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return RFileImporterRegistry_WrapperSingletonInstance.hasFileImporter(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RFileImporterRegistry);
  }

  
  else {
    
        print("RFileImporterRegistry.hasFileImporter(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RFileImporterRegistry.getFilterExtensions = function() 
          
        {
          //print("JS: RFileImporterRegistry.getFilterExtensions");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RFileImporterRegistry_WrapperSingletonInstance.getFilterExtensions(
                  
                );
              

        //copyProperties(this, wrapper, RFileImporterRegistry);
  }

  
  else {
    
        print("RFileImporterRegistry.getFilterExtensions(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RFileImporterRegistry.getFilterExtensionPatterns = function() 
          
        {
          //print("JS: RFileImporterRegistry.getFilterExtensionPatterns");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RFileImporterRegistry_WrapperSingletonInstance.getFilterExtensionPatterns(
                  
                );
              

        //copyProperties(this, wrapper, RFileImporterRegistry);
  }

  
  else {
    
        print("RFileImporterRegistry.getFilterExtensionPatterns(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RFileImporterRegistry.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RFileImporterRegistry.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      