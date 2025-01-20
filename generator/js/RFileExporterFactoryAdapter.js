
      // auto generated
      //var self;

      // class constructor:
      function RFileExporterFactoryAdapter() {
        

        // should be RFileExporterFactoryAdapter_BaseJs.call(this, engine):
        //RFileExporterFactoryAdapter.prototype = new RFileExporterFactoryAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RFileExporterFactoryAdapter.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RFileExporterFactoryAdapter);
                
            //}
          }
          else {
            qWarning("RFileExporterFactoryAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RFileExporterFactoryAdapter_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RFileExporterFactoryAdapter);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RFileExporterFactoryAdapter);
  }

  
  else {
    
        print("RFileExporterFactoryAdapter(): wrong number / type of arguments");
      
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

      //RFileExporterFactoryAdapter.prototype = new RFileExporterFactoryAdapter_BaseJs(engine);
      //RFileExporterFactoryAdapter.prototype = new RFileExporterFactoryAdapter_Wrapper(engine);
      RFileExporterFactoryAdapter.prototype = new Object();

      RFileExporterFactoryAdapter.prototype.toString = function() {
          //return "RFileExporterFactoryAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RFileExporterFactoryAdapter [JS]";
        };
      RFileExporterFactoryAdapter.getObjectType = function() {
        return RJSType_RFileExporterFactoryAdapter.getIdStatic();
      };

      RFileExporterFactoryAdapter.prototype.getObjectType = function() {
        return RJSType_RFileExporterFactoryAdapter.getIdStatic();
      };

      RFileExporterFactoryAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RFileExporterFactoryAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RFileExporterFactory.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
      // function 
      RFileExporterFactoryAdapter.prototype.getFilterStrings = function() 
        
      {
        //print("JS: RFileExporterFactoryAdapter.prototype.getFilterStrings");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.getFilterStrings(
                // call highest level JS implementation:
                //return this.getFilterStringsBase(
                
                    return this.getFilterStringsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RFileExporterFactoryAdapter);
  }

  
  else {
    
        print("RFileExporterFactoryAdapter.getFilterStrings(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RFileExporterFactoryAdapter.prototype.canExport = function() 
        
      {
        //print("JS: RFileExporterFactoryAdapter.prototype.canExport");
        
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.canExport(
                // call highest level JS implementation:
                //return this.canExportBase(
                
                    return this.canExportSuper(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RFileExporterFactoryAdapter);
  }

  
  else {
    
        print("RFileExporterFactoryAdapter.canExport(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RFileExporterFactoryAdapter.prototype.instantiate = function() 
        
      {
        //print("JS: RFileExporterFactoryAdapter.prototype.instantiate");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.instantiate(
                // call highest level JS implementation:
                //return this.instantiateBase(
                
                    return this.instantiateSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, RFileExporterFactoryAdapter);
  }

  
  else {
    
        print("RFileExporterFactoryAdapter.instantiate(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RFileExporterFactoryAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RFileExporterFactoryAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      