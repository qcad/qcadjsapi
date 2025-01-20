
      // auto generated
      //var self;

      // class constructor:
      function RFileExporterRegistry() {
        

        // should be RFileExporterRegistry_BaseJs.call(this, engine):
        //RFileExporterRegistry.prototype = new RFileExporterRegistry_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RFileExporterRegistry.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RFileExporterRegistry);
                
            //}
          }
          else {
            qWarning("RFileExporterRegistry.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RFileExporterRegistry_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RFileExporterRegistry);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RFileExporterRegistry);
  }

  
  else {
    
        print("RFileExporterRegistry(): wrong number / type of arguments");
      
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

      //RFileExporterRegistry.prototype = new RFileExporterRegistry_BaseJs(engine);
      //RFileExporterRegistry.prototype = new RFileExporterRegistry_Wrapper(engine);
      RFileExporterRegistry.prototype = new Object();

      RFileExporterRegistry.prototype.toString = function() {
          //return "RFileExporterRegistry [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RFileExporterRegistry [JS]";
        };
      RFileExporterRegistry.getObjectType = function() {
        return RJSType_RFileExporterRegistry.getIdStatic();
      };

      RFileExporterRegistry.prototype.getObjectType = function() {
        return RJSType_RFileExporterRegistry.getIdStatic();
      };

      RFileExporterRegistry.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RFileExporterRegistry.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        RFileExporterRegistry.registerFileExporter = function() 
          
        {
          //print("JS: RFileExporterRegistry.registerFileExporter");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return RFileExporterRegistry_WrapperSingletonInstance.registerFileExporter(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RFileExporterRegistry);
  }

  
  else {
    
        print("RFileExporterRegistry.registerFileExporter(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RFileExporterRegistry.unregisterFileExporter = function() 
          
        {
          //print("JS: RFileExporterRegistry.unregisterFileExporter");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return RFileExporterRegistry_WrapperSingletonInstance.unregisterFileExporter(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RFileExporterRegistry);
  }

  
  else {
    
        print("RFileExporterRegistry.unregisterFileExporter(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RFileExporterRegistry.getFileExporter = function() 
          
        {
          //print("JS: RFileExporterRegistry.getFileExporter");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return RFileExporterRegistry_WrapperSingletonInstance.getFileExporter(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RFileExporterRegistry);
  }

  
  else {
    
        print("RFileExporterRegistry.getFileExporter(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        RFileExporterRegistry.getFilterStrings = function() 
          
        {
          //print("JS: RFileExporterRegistry.getFilterStrings");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return RFileExporterRegistry_WrapperSingletonInstance.getFilterStrings(
                  
                );
              

        //copyProperties(this, wrapper, RFileExporterRegistry);
  }

  
  else {
    
        print("RFileExporterRegistry.getFilterStrings(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RFileExporterRegistry.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RFileExporterRegistry.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      