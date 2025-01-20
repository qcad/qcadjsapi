
      // auto generated
      //var self;

      // class constructor:
      function RFileImporterFactoryAdapter() {
        

        // should be RFileImporterFactoryAdapter_BaseJs.call(this, engine):
        //RFileImporterFactoryAdapter.prototype = new RFileImporterFactoryAdapter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_RFileImporterFactoryAdapter.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, RFileImporterFactoryAdapter);
                
            //}
          }
          else {
            qWarning("RFileImporterFactoryAdapter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new RFileImporterFactoryAdapter_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, RFileImporterFactoryAdapter);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, RFileImporterFactoryAdapter);
  }

  
  else {
    
        print("RFileImporterFactoryAdapter(): wrong number / type of arguments");
      
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

      //RFileImporterFactoryAdapter.prototype = new RFileImporterFactoryAdapter_BaseJs(engine);
      //RFileImporterFactoryAdapter.prototype = new RFileImporterFactoryAdapter_Wrapper(engine);
      RFileImporterFactoryAdapter.prototype = new Object();

      RFileImporterFactoryAdapter.prototype.toString = function() {
          //return "RFileImporterFactoryAdapter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "RFileImporterFactoryAdapter [JS]";
        };
      RFileImporterFactoryAdapter.getObjectType = function() {
        return RJSType_RFileImporterFactoryAdapter.getIdStatic();
      };

      RFileImporterFactoryAdapter.prototype.getObjectType = function() {
        return RJSType_RFileImporterFactoryAdapter.getIdStatic();
      };

      RFileImporterFactoryAdapter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_RFileImporterFactoryAdapter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_RFileImporterFactory.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
      // function 
      RFileImporterFactoryAdapter.prototype.getFilterStrings = function() 
        
      {
        //print("JS: RFileImporterFactoryAdapter.prototype.getFilterStrings");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.getFilterStrings(
                // call highest level JS implementation:
                //return this.getFilterStringsBase(
                
                    return this.getFilterStringsSuper(
                  
                );
              

        //copyProperties(this, wrapper, RFileImporterFactoryAdapter);
  }

  
  else {
    
        print("RFileImporterFactoryAdapter.getFilterStrings(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RFileImporterFactoryAdapter.prototype.canImport = function() 
        
      {
        //print("JS: RFileImporterFactoryAdapter.prototype.canImport");
        
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.canImport(
                // call highest level JS implementation:
                //return this.canImportBase(
                
                    return this.canImportSuper(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, RFileImporterFactoryAdapter);
  }

  
  else {
    
        print("RFileImporterFactoryAdapter.canImport(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      RFileImporterFactoryAdapter.prototype.instantiate = function() 
        
      {
        //print("JS: RFileImporterFactoryAdapter.prototype.instantiate");
        
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.instantiate(
                // call highest level JS implementation:
                //return this.instantiateBase(
                
                    return this.instantiateSuper(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, RFileImporterFactoryAdapter);
  }

  
  else {
    
        print("RFileImporterFactoryAdapter.instantiate(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //RFileImporterFactoryAdapter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //RFileImporterFactoryAdapter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      